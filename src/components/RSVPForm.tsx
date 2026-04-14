import { useState, useEffect } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { LocationMap } from './LocationMap';
import { TransportationSection } from './TransportationSection';
import { AttireGuide } from './AttireGuide';
import { Confirmation } from './Confirmation';
import { GIFTS } from '../data/gifts';

export function RSVPForm() {
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [transportation, setTransportation] = useState('');
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [takenGifts, setTakenGifts] = useState<string[]>([]);

  const [errors, setErrors] = useState<{
    name?: string;
    attendance?: string;
  }>({});

  // ✅ Fetch taken gifts
  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const res = await fetch('/api/gifts');
        const data = await res.json();
        setTakenGifts(data.takenGifts || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGifts();
  }, []);

  const validate = () => {
    const name = (document.getElementById('fullName') as HTMLInputElement)?.value;

    const newErrors: typeof errors = {};

    if (!name || !name.trim()) {
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

    const name =
      (document.getElementById('fullName') as HTMLInputElement)?.value || '';

    const selectedGiftName =
      GIFTS.find((g) => g.id === selectedGiftId)?.name || '';

    const data = {
      name,
      attendance,
      gift: selectedGiftName,
      dietary:
        (document.getElementById('dietary') as HTMLInputElement)?.value || '',
      message:
        (document.getElementById('message') as HTMLTextAreaElement)?.value ||
        '',
      transportation,
    };

    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // refresh gifts
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

  // ✅ Confirmation
  if (submitted) {
    return (
      <Confirmation
        name={(document.getElementById('fullName') as HTMLInputElement)?.value || ''}
        attending={attendance}
        selectedGiftId={selectedGiftId}
        onReset={() => {
          setSubmitted(false);
          setAttendance(null);
          setSelectedGiftId(null);
          setTransportation('');
        }}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="font-script text-4xl md:text-5xl text-deep-olive mb-4">
          Kindly Respond
        </h2>
        <p className="font-serif text-deep-olive/60 tracking-widest uppercase text-sm font-medium">
          Please reply by November 1st, 2026
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="space-y-2">
          <label className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
            Full Name
          </label>

          <input
            type="text"
            id="fullName"
            placeholder="Your full name"
            className="w-full bg-transparent border-b px-4 py-3 text-center"
          />

          {errors.name && (
            <p className="text-red-500 text-xs text-center">
              {errors.name}
            </p>
          )}
        </div>

        {/* Attendance */}
        <div className="pt-4 space-y-4">
          <div className="flex justify-center gap-4">
            <button type="button" onClick={() => setAttendance('yes')}>
              Accept
            </button>

            <button type="button" onClick={() => setAttendance('no')}>
              Decline
            </button>
          </div>

          {errors.attendance && (
            <p className="text-red-500 text-xs text-center">
              {errors.attendance}
            </p>
          )}
        </div>

        {/* CONDITIONAL */}
        {attendance === 'yes' && (
          <div className="space-y-8 pt-4">
            <input id="dietary" placeholder="Dietary" />
            <textarea id="message" placeholder="Message" />

            <GiftRegistry
              selectedGiftId={selectedGiftId}
              onSelectGift={setSelectedGiftId}
              takenGifts={takenGifts}
            />

            <LocationMap />

            <TransportationSection
              needsTransport={transportation}
              setNeedsTransport={setTransportation}
            />

            <AttireGuide />
          </div>
        )}

        {/* Submit (YOUR DESIGN PRESERVED) */}
        <div className="flex justify-center">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Send RSVP'}
          </button>
        </div>
      </form>
    </div>
  );
}