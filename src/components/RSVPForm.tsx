
import { useState } from 'react';
import { GiftRegistry } from './GiftRegistry';
import { DividerFloral } from './FloralAccent';
import { LocationMap } from './LocationMap';
import { TransportationSection } from './TransportationSection';
import { AttireGuide } from './AttireGuide';


export function RSVPForm() {
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [transportation, setTransportation] = useState('');


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const data = {
    name: (document.getElementById('fullName') as HTMLInputElement).value,
    attendance,
    dietary: (document.getElementById('dietary') as HTMLInputElement)?.value || '',
    message: (document.getElementById('message') as HTMLTextAreaElement)?.value || '',
    transportation,
  };

  try {
    await fetch('/api/rsvp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    alert('RSVP submitted!');
  } catch (error) {
    console.error(error);
    alert('Something went wrong.');
  }
};


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

        {/* Name Input */}
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
            placeholder="Your full name"
            className="w-full bg-transparent border-b border-muted-sage/50 px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-muted-sage/60 focus:outline-none focus:border-deep-olive transition-colors"
          />
        </div>

        {/* Attendance */}
        <div className="pt-4 space-y-4">
          <label className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium">
            Will you attend?
          </label>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => setAttendance('yes')}
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
              onClick={() => setAttendance('no')}
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
        </div>

        {/* Animated Section (NO JUMP FIX) */}
        <div
          className={`space-y-8 pt-4 transition-all duration-500 ${
            attendance === 'yes'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none absolute'
          }`}
        >
          <DividerFloral className="my-8" />

          {/* Dietary */}
          <div className="space-y-2">
            <label
              htmlFor="dietary"
              className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium"
            >
              Dietary Restrictions{' '}
              <span className="text-xs italic text-deep-olive/50">
                (optional)
              </span>
            </label>
            <input
              type="text"
              id="dietary"
              placeholder="e.g., Vegetarian, Nut Allergy"
              className="w-full bg-transparent border-b border-muted-sage/50 px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-muted-sage/60 focus:outline-none focus:border-deep-olive transition-colors"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block font-serif text-sm tracking-wider text-deep-olive uppercase text-center font-medium"
            >
              Message to the Couple{' '}
              <span className="text-xs italic text-deep-olive/50">
                (optional)
              </span>
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Leave a note..."
              className="w-full bg-white/50 border border-muted-sage/40 rounded-sm px-4 py-3 text-center font-serif text-lg text-deep-olive placeholder:text-muted-sage/60 focus:outline-none focus:border-deep-olive transition-colors resize-none"
            />
          </div>

          {/* Gift Registry */}
          <GiftRegistry />

          {/* Event Details */}
          <h3 className="text-center font-serif text-sm tracking-widest uppercase text-deep-olive/60 pt-6">
            Event Details
          </h3>

          {/* Proper spacing wrapper */}
          <div className="space-y-10">
            <LocationMap />
            <TransportationSection
              needsTransport={transportation}
              setNeedsTransport={setTransportation}
            />
            <AttireGuide />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-10 pb-6 flex justify-center">
          <button
            type="submit"
            className="group relative px-12 py-4 bg-deep-olive text-white font-serif text-lg tracking-widest uppercase rounded-sm overflow-hidden transition-all hover:shadow-lg hover:bg-[#4a4e3c]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Send RSVP
            </span>
            <div className="absolute inset-0 h-full w-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>

      </form>
    </div>
  );
}