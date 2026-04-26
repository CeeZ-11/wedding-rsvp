import { useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function Schedule() {
  const [showFull, setShowFull] = useState(false);

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
    <div className="space-y-16">

      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Schedule
        </h2>
        <div className="w-16 h-[1px] bg-light-sage"></div>
      </div>

      {/* ✅ SIMPLE TIMELINE (MAIN FOR GUESTS) */}
      <div className="w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-light-sage/10 p-8 rounded-3xl text-center hover:shadow-lg transition border border-light-sage/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-light-sage shadow-sm">
                <Clock size={20} />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-deep-olive mb-2">
                {event.title}
              </h3>

              {/* Time */}
              <p className="text-sm italic text-deep-olive/70 mb-4">
                {event.time}
              </p>

              {/* Description */}
              <p className="text-sm text-deep-olive/70 leading-relaxed">
                {event.description}
              </p>
            </motion.div>
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
      <div className="max-w-4xl mx-auto">

        <div className="bg-white/60 backdrop-blur-sm border border-light-sage/20 rounded-[32px] p-8 md:p-12 space-y-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

          {/* Preparation */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-deep-olive/50">
              Preparation
            </p>

            <div className="space-y-3 text-deep-olive/80 text-sm md:text-base leading-relaxed">
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

          <div className="h-px w-full bg-gradient-to-r from-transparent via-light-sage/30 to-transparent" />

          {/* Ceremony */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-deep-olive/50">
              Ceremony
            </p>

            <div className="space-y-2 text-deep-olive/80 text-sm md:text-base">
              <p><span className="font-medium text-deep-olive">2:00 PM</span> — Arrival & worship music</p>
              <p><span className="font-medium text-deep-olive">2:30 PM</span> — Processional</p>
              <p><span className="font-medium text-deep-olive">2:45 PM</span> — Worship & Scripture</p>
              <p><span className="font-medium text-deep-olive">3:00 PM</span> — Message</p>
              <p><span className="font-medium text-deep-olive">3:30 PM</span> — Vows & Rings</p>
              <p><span className="font-medium text-deep-olive">3:50 PM</span> — Declaration</p>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-light-sage/30 to-transparent" />

          {/* Fellowship */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-deep-olive/50">
              Fellowship
            </p>

            <p className="text-deep-olive/80 text-sm md:text-base leading-relaxed">
              <span className="font-medium text-deep-olive">4:00 – 5:30 PM</span><br />
              Photos, refreshments, and golden hour
            </p>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-light-sage/30 to-transparent" />

          {/* Reception */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-deep-olive/50">
              Reception
            </p>

            <div className="space-y-2 text-deep-olive/80 text-sm md:text-base">
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