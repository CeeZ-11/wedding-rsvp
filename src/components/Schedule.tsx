import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Camera, Church, Clock3, DoorOpen, Sparkles, Utensils } from "lucide-react";

export function Schedule() {
  const [showFull, setShowFull] = useState(false);
  const reduceMotion = useReducedMotion();

  const timeline = [
    {
      time: "2:00 PM",
      title: "Guest Arrival",
      description: "Welcome and seating of guests",
      icon: DoorOpen
    },
    {
      time: "2:30 PM",
      title: "Ceremony",
      description: "Processional, vows, and declaration",
      icon: Church
    },
    {
      time: "4:00 PM",
      title: "Photos & Fellowship",
      description: "Group photos and light refreshments",
      icon: Camera
    },
    {
      time: "5:30 PM",
      title: "Reception",
      description: "Dinner, program, and celebration",
      icon: Utensils
    },
    {
      time: "9:45 PM",
      title: "Closing",
      description: "Closing prayer and send-off",
      icon: Sparkles
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16">

      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 flex items-center gap-2 text-deep-olive">
          <Clock3 aria-hidden="true" className="h-5 w-5 stroke-[1.5]" />
          <h2 className="font-serif text-4xl font-medium sm:text-5xl">Schedule</h2>
        </div>
        <div className="w-16 h-px bg-readable-border"></div>
      </div>

      <div className="relative mx-auto max-w-5xl before:hidden sm:before:block sm:before:absolute sm:before:bottom-8 sm:before:left-[1.4rem] sm:before:top-8 sm:before:w-px sm:before:translate-x-0 sm:before:bg-readable-border">
        {timeline.map((event, index) => (
          <motion.div
            key={event.title}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.04 }}
            className="relative flex flex-col items-center py-5 text-center sm:grid sm:grid-cols-[3rem_8rem_1fr] sm:items-baseline sm:gap-x-6 sm:py-6 sm:text-left"
          >
            <span className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream-bg text-deep-olive sm:col-start-1 sm:row-span-2 sm:h-11 sm:w-11">
              <event.icon aria-hidden="true" className="h-[18px] w-[18px] stroke-[1.5]" />
            </span>
            <p className="mt-2 font-serif text-xl font-medium tabular-nums text-deep-olive sm:col-start-2 sm:mt-0 sm:text-2xl">
              {event.time.replace(' ', '\u00a0')}
            </p>
            <h3 className="mt-1 font-serif text-xl font-semibold text-deep-olive sm:col-start-3 sm:mt-0 sm:text-2xl">
              {event.title}
            </h3>
            <p className="mx-auto mt-1 max-w-xs font-sans text-sm leading-relaxed text-olive-secondary sm:col-start-3 sm:mx-0 sm:mt-0 sm:max-w-sm sm:text-base">
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
      <div className="mx-auto max-w-3xl space-y-10 text-center sm:text-left">

    {/* Container Card */}
      <div className="max-w-4xl mx-auto">

        <div className="space-y-10 bg-[#F4F2EB] px-6 py-8 text-center sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 sm:space-y-0 sm:px-10 sm:py-12 sm:text-left">

          {/* Preparation */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Preparation
            </p>

            <div className="mx-auto max-w-md space-y-3 text-sm leading-relaxed text-olive-secondary sm:mx-0 md:text-base">
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

          {/* Ceremony */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Ceremony
            </p>

            <div className="mx-auto max-w-md space-y-2 text-sm text-olive-secondary sm:mx-0 md:text-base">
              <p><span className="font-medium text-deep-olive">2:00 PM</span> — Arrival & worship music</p>
              <p><span className="font-medium text-deep-olive">2:30 PM</span> — Processional</p>
              <p><span className="font-medium text-deep-olive">2:45 PM</span> — Worship & Scripture</p>
              <p><span className="font-medium text-deep-olive">3:00 PM</span> — Message</p>
              <p><span className="font-medium text-deep-olive">3:30 PM</span> — Vows & Rings</p>
              <p><span className="font-medium text-deep-olive">3:50 PM</span> — Declaration</p>
            </div>
          </div>

          {/* Fellowship */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Fellowship
            </p>

            <p className="mx-auto max-w-md text-sm leading-relaxed text-olive-secondary sm:mx-0 md:text-base">
              <span className="font-medium text-deep-olive">4:00 – 5:30 PM</span><br />
              Photos, refreshments, and golden hour
            </p>
          </div>

          {/* Reception */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-olive-secondary">
              Reception
            </p>

            <div className="mx-auto max-w-md space-y-2 text-sm text-olive-secondary sm:mx-0 md:text-base">
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
