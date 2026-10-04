import { MapPin, Navigation } from "lucide-react";

const mapLink = "https://maps.app.goo.gl/ZXqCjSzFiSum3R749";

export function EventLocation() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 sm:space-y-14">
      <header className="max-w-2xl">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary">
          The setting
        </p>
        <h2 className="font-serif text-5xl font-medium text-deep-olive sm:text-6xl">
          The venue
        </h2>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
        <div className="min-h-[280px] overflow-hidden bg-light-sage/20 sm:min-h-[380px] lg:min-h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=H67H+WJM+Salvador+Benedicto+Negros+Occidental&z=15&output=embed"
            title="Map showing Balai Ramirez DSB"
            className="h-[320px] w-full border-0 sm:h-[420px] lg:h-[500px]"
            loading="lazy"
          />
        </div>

        <div className="pt-1 sm:pt-3">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">
            Balai Ramirez DSB
          </p>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-deep-olive sm:text-4xl">
            A garden setting for our day
          </h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-olive-secondary">
            A beautiful garden venue nestled in nature, providing the perfect backdrop for our celebration.
          </p>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            View on Google Maps
          </a>

          <div className="mt-8 border-t border-readable-border pt-6">
            <div className="mb-4 flex items-center gap-2">
              <Navigation aria-hidden="true" className="h-4 w-4 text-deep-olive" />
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-deep-olive">
                Directions
              </h4>
            </div>
            <ol className="space-y-3 font-sans text-sm leading-relaxed text-olive-secondary">
              <li>Head towards Don Salvador Benedicto from Bacolod City.</li>
              <li>Follow the scenic mountain highway.</li>
              <li>Look for the Balai Ramirez signage.</li>
              <li>Proceed to the venue entrance and parking area.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}