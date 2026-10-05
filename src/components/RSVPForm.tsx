import { useState, useEffect, useRef } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { Confirmation } from './Confirmation';
import { GIFTS } from '../data/gifts';

export function RSVPForm() {
  const acceptRef = useRef<HTMLButtonElement>(null);
  const declineRef = useRef<HTMLButtonElement>(null);
  const [fullName, setFullName] = useState('');
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

    if (!fullName.trim()) {
      newErrors.name = 'Please enter your full name';
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
    <div id="rsvp" className="w-full max-w-2xl mx-auto px-4 md:px-12 scroll-mt-8">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary">
          Kindly respond
        </p>
        <h2 className="mx-auto max-w-xl font-serif text-4xl font-medium leading-tight text-deep-olive sm:text-5xl">
          We&apos;d love to celebrate with you.
        </h2>
        <div aria-hidden="true" className="mx-auto my-5 h-px w-12 bg-readable-border" />
        <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-olive-secondary sm:text-sm">
          Please reply by November 1st, 2026
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit} aria-busy={isSubmitting}>
        {submitError && (
          <p role="alert" className="border-y border-error-strong/40 py-3 text-center font-sans text-sm text-error-strong">
            {submitError}
          </p>
        )}

        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium"
          >
            Full Name
          </label>
          <p className="font-serif text-olive-secondary text-sm italic text-center">
            Please enter your full name (RSVP is for one person)
          </p>

          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'fullName-error' : undefined}
            className="w-full rounded-sm border border-readable-border bg-white/80 px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-olive-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 transition-colors"
          />

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
                px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none
                ${
                  attendance === 'yes'
                    ? 'bg-deep-olive text-white border-deep-olive shadow-md'
                    : 'bg-white/70 text-deep-olive border-readable-border hover:border-deep-olive hover:bg-light-sage/20'
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
                px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none
                ${
                  attendance === 'no'
                    ? 'bg-warm-beige-strong text-white border-warm-beige-strong shadow-md'
                    : 'bg-white/70 text-deep-olive border-readable-border hover:border-deep-olive hover:bg-light-sage/20'
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
              group relative px-12 py-4 bg-deep-olive text-white font-serif text-lg tracking-widest uppercase rounded-sm overflow-hidden transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive
              ${
                isSubmitting
                  ? 'bg-[#4a4e3c] cursor-wait'
                  : 'hover:shadow-lg hover:bg-[#4a4e3c]'
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
