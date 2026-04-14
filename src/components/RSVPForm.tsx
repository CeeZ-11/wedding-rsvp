import { useState } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { LocationMap } from './LocationMap';
import { TransportationSection } from './TransportationSection';
import { AttireGuide } from './AttireGuide';
import { Confirmation } from './Confirmation';
import { GIFTS } from '../data/gifts';

export function RSVPForm() {
  const [fullName, setFullName] = useState(''); // ✅ FIXED
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [transportation, setTransportation] = useState('');
  const [selectedGiftId, setSelectedGiftId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    attendance?: string;
  }>({});

  // ✅ VALIDATION
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

    const selectedGiftName =
      GIFTS.find((g) => g.id === selectedGiftId)?.name || '';

    const data = {
      name: fullName,
      attendance,
      gift: selectedGiftName, // ✅ FIXED
      dietary:
        (document.getElementById('dietary') as HTMLInputElement)?.value || '',
      message:
        (document.getElementById('message') as HTMLTextAreaElement)?.value ||
        '',
      transportation,
    };

    console.log('SUBMIT DATA:', data); // 🔍 DEBUG

    try {
      await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    }
  };

  // ✅ CONFIRMATION SCREEN
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
          <label
            htmlFor="fullName"
            className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium"
          >
            Full Name
          </label>
          <p className="font-serif text-deep-olive/60 text-xs italic text-center">
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
            className="w-full bg-transparent border-b border-muted-sage/50 px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-muted-sage/60 focus:outline-none focus:border-deep-olive transition-colors"
          />

          {errors.name && (
            <p className="text-red-500 text-xs text-center mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Attendance */}
        <div className="pt-4 space-y-4">
          <label className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
            Will you attend?
          </label>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setAttendance('yes');
                setErrors((prev) => ({ ...prev, attendance: undefined }));
              }}
              className={`
                px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 border
                ${
                  attendance === 'yes'
                    ? 'bg-deep-olive text-white border-deep-olive shadow-md'
                    : 'bg-transparent text-deep-olive border-light-sage hover:border-muted-sage hover:bg-light-sage/10'
                }
              `}
            >
              Joyfully Accept
            </button>

            <button
              type="button"
              onClick={() => {
                setAttendance('no');
                setErrors((prev) => ({ ...prev, attendance: undefined }));
              }}
              className={`
                px-8 py-3 rounded-full font-serif text-lg transition-all duration-300 border
                ${
                  attendance === 'no'
                    ? 'bg-warm-beige text-white border-warm-beige shadow-md'
                    : 'bg-transparent text-deep-olive border-light-sage hover:border-muted-sage hover:bg-light-sage/10'
                }
              `}
            >
              Regretfully Decline
            </button>
          </div>

          {errors.attendance && (
            <p className="text-red-500 text-xs text-center mt-2">
              {errors.attendance}
            </p>
          )}
        </div>

        {/* CONDITIONAL */}
        <div
          className={`space-y-8 pt-4 transition-all duration-500 ${
            attendance === 'yes'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none absolute'
          }`}
        >
          <input
            id="dietary"
            placeholder="Dietary restrictions"
            className="w-full bg-transparent border-b border-muted-sage/50 px-4 py-3 text-center"
          />

          <textarea
            id="message"
            placeholder="Message..."
            className="w-full border px-4 py-3 text-center"
          />

          <GiftRegistry
            selectedGiftId={selectedGiftId}
            onSelectGift={setSelectedGiftId}
            takenGifts={[]}
          />

          <LocationMap />

          <TransportationSection
            needsTransport={transportation}
            setNeedsTransport={setTransportation}
          />

          <AttireGuide />
        </div>

        {/* Submit */}
        <div className="pt-10 pb-6 flex justify-center">
          <button
            type="submit"
            className="group relative px-12 py-4 bg-deep-olive text-white font-serif text-lg tracking-widest uppercase rounded-sm overflow-hidden transition-all hover:shadow-lg hover:bg-[#4a4e3c]"
          >
            Send RSVP
          </button>
        </div>

      </form>
    </div>
  );
}