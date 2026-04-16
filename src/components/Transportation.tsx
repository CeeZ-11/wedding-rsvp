import { Clock } from "lucide-react";

export function Transportation() {
  return (
    <div className="space-y-12 text-center">

      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Transportation
        </h2>
        <div className="w-16 h-[1px] bg-light-sage"></div>
      </div>

      {/* Card */}
      <div className="max-w-md mx-auto bg-light-sage/10 p-8 rounded-2xl border border-light-sage/30 space-y-6">

        {/* Icon */}
        <div className="flex justify-center text-deep-olive">
          <Clock className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-deep-olive font-[Playfair Display]">
            Shuttle Service
          </h3>

          <p className="text-sm text-deep-olive font-sans">
            A complimentary shuttle will be provided from the city to the venue and back.
          </p>
        </div>

        {/* Info Box */}
        <div className="space-y-3 text-sm text-left bg-white/60 p-5 rounded-xl border border-light-sage/20 font-sans">

          {/* Pickup */}
          <div className="flex justify-between border-b border-light-sage/20 pb-2">
            <span className="uppercase tracking-widest text-xs font-semibold text-deep-olive">
              Pickup
            </span>
            <span className="font-medium text-deep-olive">
              SM Bacolod
            </span>
          </div>

          {/* Time */}
          <div className="flex justify-between border-b border-light-sage/20 pb-2">
            <span className="uppercase tracking-widest text-xs font-semibold text-deep-olive">
              Time
            </span>
            <span className="font-medium text-deep-olive">
              1:00 PM Sharp
            </span>
          </div>

          {/* Contact */}
          <div className="flex justify-between">
            <span className="uppercase tracking-widest text-xs font-semibold text-deep-olive">
              Contact
            </span>
            <span className="font-medium text-deep-olive">
              09XXXXXXXXX
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}