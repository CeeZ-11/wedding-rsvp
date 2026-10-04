import { MapPin, Navigation } from "lucide-react";

const mapLink = "https://maps.app.goo.gl/ZXqCjSzFiSum3R749";

export function EventLocation() {
  return (
    <div className="space-y-12 text-center">

      {/* Header */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-deep-olive font-[Playfair Display] mb-3">
          Location
        </h2>
        <div className="w-16 h-px bg-readable-border"></div>
      </div>

      {/* Card */}
      <div className="bg-light-sage/10 p-8 md:p-12 rounded-2xl border border-readable-border max-w-2xl mx-auto space-y-8">

        {/* Venue */}
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-deep-olive font-[Playfair Display]">
            Balai Ramirez DSB
          </h3>

          <p className="text-base text-deep-olive font-sans max-w-md mx-auto">
            A beautiful garden venue nestled in nature, providing the perfect backdrop for our celebration.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-readable-border">
          <iframe
            src="https://www.google.com/maps?q=H67H+WJM+Salvador+Benedicto+Negros+Occidental&z=15&output=embed"
            title="Map showing Balai Ramirez DSB"
            className="w-full h-[260px] md:h-[320px] border-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Button WITH ICON */}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-deep-olive text-deep-olive hover:bg-deep-olive hover:text-white transition uppercase tracking-wider text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
        >
          <MapPin className="w-4 h-4" />
          <span>View on Google Maps</span>
        </a>

        {/* Directions */}
        <div className="text-left max-w-md mx-auto space-y-4 font-sans">

          {/* Title WITH ICON */}
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Navigation className="w-4 h-4 text-deep-olive" />
            <p className="uppercase tracking-widest text-xs font-semibold text-deep-olive">
              Directions
            </p>
          </div>

          <ul className="space-y-2 text-sm text-deep-olive list-disc pl-5 marker:text-olive-secondary">
            <li>Head towards Don Salvador Benedicto from Bacolod City.</li>
            <li>Follow the scenic mountain highway.</li>
            <li>Look for the Balai Ramirez signage.</li>
            <li>Proceed to the venue entrance and parking area.</li>
          </ul>

        </div>

      </div>
    </div>
  );
}