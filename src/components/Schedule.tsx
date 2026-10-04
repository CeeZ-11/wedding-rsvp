import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Schedule() {
  const [showFull, setShowFull] = useState(false);
  const reduceMotion = useReducedMotion();

  const timeline = [
    {
      time: "2:00 PM",
      title: "Guest Arrival",
      description: "Welcome and seating of guests"
    },
    {
      time: "2:30 PM",
      title: "Ceremony",
      description: "Processional, vows, and declaration"
    },
    {
      time: "4:00 PM",
      title: "Photos & Fellowship",
      description: "Group photos and light refreshments"
    },
    {
      time: "5:30 PM",
      title: "Reception",
      description: "Dinner, program, and celebration"
    },
    {
      time: "9:45 PM",
      title: "Closing",
      description: "Closing prayer and send-off"
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl font-medium text-deep-olive sm:text-5xl mb-3">
          Schedule
        </h2>
        <div className="w-16 h-px bg-readable-border"></div>
      </div>

      <div className="mx-auto max-w-5xl border-y border-readable-border">
        {timeline.map((event, index) => (
          <motion.div
            key={event.title}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.04 }}
            className={`grid grid-cols-[6.5rem_1fr] items-baseline gap-x-4 py-5 text-left sm:grid-cols-[8rem_1fr_1.2fr] sm:gap-x-8 sm:py-6 ${
              index < timeline.length - 1 ? 'border-b border-readable-border/70' : ''
            }`}
          >
            <p className="font-serif text-xl font-medium tabular-nums text-deep-olive sm:text-2xl">
              {event.time.replace(' ', '\u00a0')}
            </p>
            <h3 className="font-serif text-xl font-semibold text-deep-olive sm:text-2xl">
              {event.title}
            </h3>
            <p className="col-start-2 mt-1 font-sans text-sm leading-relaxed text-olive-secondary sm:col-start-auto sm:mt-0 sm:text-base">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔽 TOGGLE FULL PROGRAM */}
      <div className="text-center">
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-xs uppercase tracking-widest underline underline-offset-4 text-deep-olive hover:decoration-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
        >
          {showFull ? "Hide Full Program" : "View Full Program"}
        </button>
      </div>

      {/* ✅ FULL CCF PROGRAM (OPTIONAL) */}
      {showFull && (
  <div className="max-w-3xl mx-auto space-y-10 text-center">

    {/* Container Card */}
      <div className="max-w-4xl mx-auto">

        <div className="border-y border-readable-border bg-[#F4F2EB] px-6 py-8 sm:px-10 sm:py-12 space-y-10 sm:space-y-12">

          {/* Preparation */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Preparation
            </p>

            <div className="space-y-3 text-olive-secondary text-sm md:text-base leading-relaxed">
              <p>
                <span className="font-medium text-deep-olive">8:00 AM – 12:00 NN</span><br />
                Bride & groom preparation, photo & video coverage
              </p>

              <p>
                <span className="font-medium text-deep-olive">12:00 – 1:30 PM</span><br />
                Travel to venue, rest & final touch-ups
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-readable-border to-transparent" />

          {/* Ceremony */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Ceremony
            </p>

            <div className="space-y-2 text-olive-secondary text-sm md:text-base">
              <p><span className="font-medium text-deep-olive">2:00 PM</span> — Arrival & worship music</p>
              <p><span className="font-medium text-deep-olive">2:30 PM</span> — Processional</p>
              <p><span className="font-medium text-deep-olive">2:45 PM</span> — Worship & Scripture</p>
              <p><span className="font-medium text-deep-olive">3:00 PM</span> — Message</p>
              <p><span className="font-medium text-deep-olive">3:30 PM</span> — Vows & Rings</p>
              <p><span className="font-medium text-deep-olive">3:50 PM</span> — Declaration</p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-readable-border to-transparent" />

          {/* Fellowship */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Fellowship
            </p>

            <p className="text-olive-secondary text-sm md:text-base leading-relaxed">
              <span className="font-medium text-deep-olive">4:00 – 5:30 PM</span><br />
              Photos, refreshments, and golden hour
            </p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-readable-border to-transparent" />

          {/* Reception */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Reception
            </p>

            <div className="space-y-2 text-olive-secondary text-sm md:text-base">
              <p><span className="font-medium text-deep-olive">5:30 PM</span> — Dinner</p>
              <p><span className="font-medium text-deep-olive">7:00 PM</span> — Testimonies & sharing</p>
              <p><span className="font-medium text-deep-olive">8:00 PM</span> — Same Day Edit</p>
              <p><span className="font-medium text-deep-olive">8:30 PM</span> — Key moments</p>
              <p><span className="font-medium text-deep-olive">9:45 PM</span> — Closing prayer</p>
            </div>
          </div>

        </div>
      </div>
  </div>
)}

    </div>
  );
}