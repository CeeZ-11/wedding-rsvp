import { useState, useEffect } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { Confirmation } from './Confirmation';
import { GIFTS } from '../data/gifts';

export function RSVPForm() {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [dietary, setDietary] = useState('');
  const [message, setMessage] = useState('');
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    console.log('SUBMIT DATA:', data);

    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // refresh taken gifts
      const res = await fetch('/api/gifts');
      const updated = await res.json();
      setTakenGifts(updated.takenGifts || []);

      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
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
        }}
      />
    );
  }

  return (
    <div id="rsvp" className="w-full max-w-2xl mx-auto px-4 md:px-12 scroll-mt-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-4">
          Kindly Respond
        </h2>
        <p className="font-serif text-olive-secondary tracking-widest uppercase text-sm font-medium">
          Please reply by November 1st, 2026
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
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
            className="w-full rounded-sm border border-readable-border bg-white/80 px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-olive-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 transition-colors"
          />

          {errors.name && (
            <p className="text-error-strong text-sm text-center mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        {/* Attendance */}
        <div className="pt-4 space-y-4">
          <label id="attendance-label" className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
            Will you attend?
          </label>

          <div className="flex flex-col sm:flex-row justify-center gap-4" role="radiogroup" aria-labelledby="attendance-label">
            <button
              id="attendance-yes"
              type="button"
              role="radio"
              aria-checked={attendance === 'yes'}
              onClick={() => {
                setAttendance('yes');
                setErrors((prev) => ({ ...prev, attendance: undefined }));
              }}
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
              id="attendance-no"
              type="button"
              role="radio"
              aria-checked={attendance === 'no'}
              onClick={() => {
                setAttendance('no');
                setErrors((prev) => ({ ...prev, attendance: undefined }));
              }}
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
            <p className="text-error-strong text-sm text-center mt-2 font-medium">
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