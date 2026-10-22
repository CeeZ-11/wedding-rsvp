import { useState, useEffect, useRef } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { Confirmation } from './Confirmation';
import { GIFTS } from '../data/gifts';
import guestNames from '../data/guestNames.json';

const sortedGuestNames = [...guestNames].sort((a, b) => a.localeCompare(b));

export function RSVPForm() {
  const acceptRef = useRef<HTMLButtonElement>(null);
  const declineRef = useRef<HTMLButtonElement>(null);
  const [fullName, setFullName] = useState('');
  const [nameSuggestionsOpen, setNameSuggestionsOpen] = useState(false);
  const [activeNameSuggestion, setActiveNameSuggestion] = useState(-1);
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [dietary, setDietary] = useState('');
  const [message, setMessage] = useState('');
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [takenGifts, setTakenGifts] = useState<string[]>([]);

  const [errors, setErrors] = useState<{
    name?: string;
    attendance?: string;
  }>({});

  const nameQuery = fullName.trim().toLocaleLowerCase();
  const nameSuggestions = nameQuery.length >= 2
    ? sortedGuestNames
      .filter((name) => name.toLocaleLowerCase().includes(nameQuery))
      .slice(0, 8)
    : [];

  const selectGuestName = (name: string) => {
    setFullName(name);
    setNameSuggestionsOpen(false);
    setActiveNameSuggestion(-1);
    setErrors((previous) => ({ ...previous, name: undefined }));
  };

  // FETCH TAKEN GIFTS
  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const res = await fetch('/api/gifts');
        const data = await res.json();
        setTakenGifts(data.takenGifts || []);
      } catch (err) {
        console.error('Failed to fetch gifts', err);
      }
    };

    fetchGifts();
  }, []);

  // VALIDATION
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!guestNames.includes(fullName)) {
      newErrors.name = 'This name is not on the guest list. Please choose your exact name from the suggestions.';
    }

    if (!attendance) {
      newErrors.attendance = 'Please select attendance';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const selectAttendance = (value: 'yes' | 'no') => {
    setAttendance(value);
    setErrors((previous) => ({ ...previous, attendance: undefined }));
  };

  const handleAttendanceKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    current: 'yes' | 'no',
  ) => {
    const next = event.key === 'ArrowRight' || event.key === 'ArrowDown'
      ? current === 'yes' ? 'no' : 'yes'
      : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
        ? current === 'no' ? 'yes' : 'no'
        : event.key === 'Home'
          ? 'yes'
          : event.key === 'End'
            ? 'no'
            : null;

    if (!next) return;

    event.preventDefault();
    selectAttendance(next);
    (next === 'yes' ? acceptRef : declineRef).current?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitError('');
    if (!validate()) return;
    if (isSubmitting) return;

    setIsSubmitting(true);

    const selectedGiftName =
      GIFTS.find((g) => g.id === selectedGiftId)?.name || '';

    const data = {
      name: fullName,
      attendance,
      gift: selectedGiftName,
      dietary: dietary || '',
      message: message || '',
    };

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('RSVP submission failed');
      }

      // Gift availability is helpful but should not undo a successful RSVP.
      try {
        const giftsResponse = await fetch('/api/gifts');
        if (giftsResponse.ok) {
          const updated = await giftsResponse.json();
          setTakenGifts(updated.takenGifts || []);
        }
      } catch {
        // Keep the successful RSVP confirmation even if gift refresh is unavailable.
      }

      setSubmitted(true);

    } catch {
      setSubmitError('We couldn’t send your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // CONFIRMATION
  if (submitted) {
    return (
      <Confirmation
        name={fullName}
        attending={attendance}
        selectedGiftId={selectedGiftId}
        onReset={() => {
          setSubmitted(false);
          setFullName('');
          setNameSuggestionsOpen(false);
          setActiveNameSuggestion(-1);
          setAttendance(null);
          setSelectedGiftId(null);
          setDietary('');
          setMessage('');
          setSubmitError('');
          setErrors({});
        }}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl scroll-mt-8">
      <form className="space-y-10" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        {submitError && (
          <p role="alert" className="border-y border-error-strong/40 py-3 text-center font-sans text-sm text-error-strong">
            {submitError}
          </p>
        )}

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
          className="block font-sans text-xs font-semibold uppercase tracking-[0.18em] text-deep-olive"
          >
            Full Name
          </label>
          <p className="font-sans text-sm italic text-olive-secondary">
            Type your name and select it from the suggestions (RSVP is for one person)
          </p>

          <div className="relative">
            <input
            id="fullName"
            type="text"
            required
            autoComplete="off"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={nameSuggestionsOpen && nameQuery.length >= 2}
            aria-controls={nameSuggestionsOpen && nameQuery.length >= 2 ? 'guest-name-suggestions' : undefined}
            aria-activedescendant={activeNameSuggestion >= 0 ? `guest-name-option-${activeNameSuggestion}` : undefined}
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setNameSuggestionsOpen(true);
              setActiveNameSuggestion(-1);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            onFocus={() => setNameSuggestionsOpen(true)}
            onBlur={() => setNameSuggestionsOpen(false)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown' && nameSuggestions.length > 0) {
                event.preventDefault();
                setNameSuggestionsOpen(true);
                setActiveNameSuggestion((active) => Math.min(active + 1, nameSuggestions.length - 1));
              } else if (event.key === 'ArrowUp' && nameSuggestions.length > 0) {
                event.preventDefault();
                setActiveNameSuggestion((active) => Math.max(active <= 0 ? 0 : active - 1, 0));
              } else if (event.key === 'Enter' && nameSuggestionsOpen && nameSuggestions.length > 0) {
                event.preventDefault();
                selectGuestName(nameSuggestions[Math.max(activeNameSuggestion, 0)]);
              } else if (event.key === 'Escape') {
                setNameSuggestionsOpen(false);
              }
            }}
            placeholder="Start typing your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'fullName-error' : undefined}
            className="w-full border-x-0 border-b border-t-0 border-readable-border bg-transparent px-0 py-3 text-left font-serif text-xl text-deep-olive placeholder:text-olive-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 transition-colors"
            />

            {nameSuggestionsOpen && nameQuery.length >= 2 && nameSuggestions.length > 0 && (
              <ul
                id="guest-name-suggestions"
                role="listbox"
                className="absolute z-20 mt-1 max-h-56 w-full overflow-y-auto border border-readable-border bg-cream-bg py-1 shadow-md"
              >
                {nameSuggestions.map((name, index) => (
                  <li key={name} role="presentation">
                    <button
                      id={`guest-name-option-${index}`}
                      type="button"
                      role="option"
                      aria-selected={activeNameSuggestion === index}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => selectGuestName(name)}
                      onMouseEnter={() => setActiveNameSuggestion(index)}
                      className={`w-full px-3 py-2 text-left font-serif text-lg text-deep-olive hover:bg-light-sage/30 focus-visible:bg-light-sage/30 focus-visible:outline-none ${activeNameSuggestion === index ? 'bg-light-sage/30' : ''}`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {nameSuggestionsOpen && nameQuery.length >= 2 && nameSuggestions.length === 0 && (
              <p id="guest-name-suggestions" className="absolute z-20 mt-1 w-full border border-readable-border bg-cream-bg px-3 py-3 font-sans text-sm text-olive-secondary shadow-md" role="status">
                No matching name found. Please contact us if your name should be listed.
              </p>
            )}
          </div>

          {errors.name && (
            <p id="fullName-error" role="alert" className="text-error-strong text-sm text-center mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Attendance */}
        <div className="pt-4 space-y-4">
          <label id="attendance-label" className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
            Will you attend?
          </label>

          <div className="flex flex-col justify-center gap-4 sm:flex-row" role="radiogroup" aria-labelledby="attendance-label" aria-describedby={errors.attendance ? 'attendance-error' : undefined} aria-invalid={Boolean(errors.attendance)}>
            <button
              ref={acceptRef}
              id="attendance-yes"
              type="button"
              role="radio"
              tabIndex={attendance === 'no' ? -1 : 0}
              aria-checked={attendance === 'yes'}
              onClick={() => selectAttendance('yes')}
              onKeyDown={(event) => handleAttendanceKeyDown(event, 'yes')}
              className={`
                flex min-h-[4.5rem] items-center gap-4 border px-5 py-4 text-left font-serif text-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none
                ${
                  attendance === 'yes'
                    ? 'bg-deep-olive text-white border-deep-olive'
                    : 'bg-transparent text-deep-olive border-readable-border hover:border-deep-olive hover:bg-light-sage/20'
                }
              `}
            >
              Joyfully Accept
            </button>

            <button
              ref={declineRef}
              id="attendance-no"
              type="button"
              role="radio"
              tabIndex={attendance === 'no' ? 0 : -1}
              aria-checked={attendance === 'no'}
              onClick={() => selectAttendance('no')}
              onKeyDown={(event) => handleAttendanceKeyDown(event, 'no')}
              className={`
                flex min-h-[4.5rem] items-center gap-4 border px-5 py-4 text-left font-serif text-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none
                ${
                  attendance === 'no'
                    ? 'bg-warm-beige-strong text-white border-warm-beige-strong'
                    : 'bg-transparent text-deep-olive border-readable-border hover:border-deep-olive hover:bg-light-sage/20'
                }
              `}
            >
              Regretfully Decline
            </button>
          </div>

          {errors.attendance && (
            <p id="attendance-error" role="alert" className="text-error-strong text-sm text-center mt-2 font-medium">
              {errors.attendance}
            </p>
          )}
        </div>

        {/* CONDITIONAL */}
        {attendance === 'yes' && (
          <div className="space-y-8 pt-4">
            <div className="space-y-2">
              <label htmlFor="dietary" className="block text-left font-serif text-sm font-medium text-deep-olive">
                Dietary restrictions (optional)
              </label>
              <input
                id="dietary"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className="w-full rounded-sm border border-readable-border bg-white/80 px-4 py-3 text-deep-olive focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-left font-serif text-sm font-medium text-deep-olive">
                Message for the couple (optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-sm border border-readable-border bg-white/80 px-4 py-3 text-deep-olive focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none"
              />
            </div>

            <GiftRegistry
              selectedGiftId={selectedGiftId}
              onSelectGift={setSelectedGiftId}
              takenGifts={takenGifts}
            />

          </div>
        )}

        {/* Submit */}
        <div className="pt-10 pb-6 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
              className={`
              group relative min-h-12 px-10 py-3 bg-deep-olive text-white font-sans text-xs font-semibold tracking-[0.16em] uppercase overflow-hidden transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive
              ${
                isSubmitting
                  ? 'bg-[#4a4e3c] cursor-wait'
                  : 'hover:bg-[#4a4e3c]'
              }
            `}
          >
            <span className="flex items-center gap-3 justify-center">
              {isSubmitting && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {isSubmitting ? 'Submitting...' : 'Send RSVP'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
