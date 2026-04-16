import { useState } from "react";

export function Schedule() {
  const [showFull, setShowFull] = useState(false);

  const timeline = [
    ["2:00 PM", "Guest Arrival"],
    ["2:30 PM", "Ceremony"],
    ["4:00 PM", "Photos & Fellowship"],
    ["5:30 PM", "Reception"],
    ["9:45 PM", "Closing"],
  ];

  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Schedule
        </h2>
        <div className="w-16 h-[1px] bg-light-sage"></div>
      </div>

      {/* ✅ SIMPLE TIMELINE (MAIN FOR GUESTS) */}
      <div className="max-w-xl mx-auto relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-2 bottom-2 w-[1px] bg-light-sage/40 -translate-x-1/2"></div>

        <div className="space-y-10">
          {timeline.map(([time, event], i) => (
            <div key={i} className="flex items-center relative">

              {/* Time */}
              <div className="w-1/2 text-right pr-6 text-deep-olive font-medium font-sans">
                {time}
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 w-2 h-2 rounded-full bg-light-sage -translate-x-1/2"></div>

              {/* Event */}
              <div className="w-1/2 pl-6 text-base md:text-lg text-deep-olive font-sans">
                {event}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Small Note */}
      <p className="text-center text-sm text-deep-olive/60 font-sans">
        Ceremony starts promptly at 2:30 PM.
      </p>

      {/* 🔽 TOGGLE FULL PROGRAM */}
      <div className="text-center">
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-xs uppercase tracking-widest underline text-deep-olive hover:text-deep-olive/70 transition"
        >
          {showFull ? "Hide Full Program" : "View Full Program"}
        </button>
      </div>

      {/* ✅ FULL CCF PROGRAM (OPTIONAL) */}
      {showFull && (
  <div className="max-w-3xl mx-auto space-y-10 text-center">

    {/* Container Card */}
    <div className="bg-light-sage/10 border border-light-sage/20 rounded-2xl p-6 md:p-10 space-y-10">

      {/* Preparation */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-deep-olive">
          🌅 Preparation
        </h3>
        <div className="text-sm md:text-base text-deep-olive/80 space-y-1">
          <p><strong>8:00 AM – 12:00 NN</strong></p>
          <p>Bride & groom prep, photo & video coverage</p>

          <p className="mt-2"><strong>12:00 – 1:30 PM</strong></p>
          <p>Travel to venue, rest & final touch-ups</p>
        </div>
      </div>

      <div className="border-t border-light-sage/20" />

      {/* Ceremony */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-deep-olive">
          ⛪ Ceremony
        </h3>

        <div className="space-y-2 text-deep-olive/80 text-sm md:text-base">
          <p><strong>2:00 PM</strong> — Arrival & worship music</p>
          <p><strong>2:30 PM</strong> — Processional</p>
          <p><strong>2:45 PM</strong> — Worship & Scripture</p>
          <p><strong>3:00 PM</strong> — Message</p>
          <p><strong>3:30 PM</strong> — Vows & Rings</p>
          <p><strong>3:50 PM</strong> — Declaration</p>
        </div>
      </div>

      <div className="border-t border-light-sage/20" />

      {/* Fellowship */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-deep-olive">
          📸 Fellowship
        </h3>
        <p className="text-deep-olive/80 text-sm md:text-base">
          <strong>4:00 – 5:30 PM</strong> — Photos, refreshments, and golden hour
        </p>
      </div>

      <div className="border-t border-light-sage/20" />

      {/* Reception */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-deep-olive">
          🎉 Reception
        </h3>

        <div className="space-y-2 text-deep-olive/80 text-sm md:text-base">
          <p><strong>5:30 PM</strong> — Dinner</p>
          <p><strong>7:00 PM</strong> — Testimonies & sharing</p>
          <p><strong>8:00 PM</strong> — AVP / Same Day Edit</p>
          <p><strong>8:30 PM</strong> — Key moments</p>
          <p><strong>9:45 PM</strong> — Closing prayer</p>
        </div>
      </div>

    </div>
  </div>
)}

    </div>
  );
}