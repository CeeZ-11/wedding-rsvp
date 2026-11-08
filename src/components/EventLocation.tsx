import { MapPin, MapPinned, Navigation } from "lucide-react";

const mapLink = "https://maps.app.goo.gl/ZXqCjSzFiSum3R749";

export function EventLocation() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 sm:space-y-14">
      <header className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary">
          The setting
        </p>
        <h2 className="flex items-center justify-center gap-3 font-serif text-4xl font-medium text-deep-olive sm:text-6xl">
          <MapPinned aria-hidden="true" className="h-6 w-6 shrink-0 stroke-[1.5] sm:h-8 sm:w-8" /> Balai Ramirez DSB
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

        <div className="pt-1 text-center sm:pt-3 sm:text-left">
          <h3 className="mt-3 font-serif text-2xl leading-tight text-deep-olive sm:text-4xl">
            A garden setting for our day
          </h3>
          <p className="mt-4 font-sans text-base leading-relaxed text-olive-secondary">
            A beautiful garden venue nestled in nature, providing the perfect backdrop for our celebration.
          </p>

          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive sm:justify-start"
          >
            <MapPin aria-hidden="true" className="h-4 w-4" />
            View on Google Maps
          </a>

          <div className="mt-8 pt-2 text-center sm:text-left">
            <div className="mb-4 flex items-center justify-center gap-2 sm:justify-start">
              <Navigation aria-hidden="true" className="h-4 w-4 text-deep-olive" />
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-deep-olive">
                Directions
              </h4>
            </div>
            <ol className="mx-auto max-w-sm space-y-3 font-sans text-sm leading-relaxed text-olive-secondary sm:mx-0">
              <li>Head towards Don Salvador Benedicto from Bacolod City.</li>
              <li>Follow the scenic mountain highway.</li>
              <li>Look for the Balai Ramirez signage.</li>
              <li>Proceed to the venue entrance and parking area.</li>
            </ol>
          </div>
        </div>
      </div>

      <section aria-labelledby="venue-preview-heading" className="pt-2 sm:pt-4">
        <header className="mx-auto mb-7 max-w-2xl text-center sm:mb-9">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary">
            Take a look around
          </p>
          <h3 id="venue-preview-heading" className="mt-2 font-serif text-2xl text-deep-olive sm:text-3xl">
            A closer look at Balai Ramirez
          </h3>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
          <figure className="min-w-0">
            <img
              src="/images/venue/balai-ramirez-exterior.jpg"
              alt="The garden and guesthouse at Balai Ramirez in Don Salvador Benedicto"
              width={2048}
              height={2048}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-2 font-sans text-xs tracking-wide text-olive-secondary">
              The Balai Ramirez guesthouse and gardens
            </figcaption>
          </figure>
          <figure className="min-w-0">
            <img
              src="/images/venue/balai-ramirez-aerial.jpg"
              alt="Aerial view of the Balai Ramirez grounds, garden, and swimming pool"
              width={907}
              height={907}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-sm object-cover"
            />
            <figcaption className="mt-2 font-sans text-xs tracking-wide text-olive-secondary">
              Aerial view of the venue grounds
            </figcaption>
          </figure>
        </div>

        <figure className="mx-auto mt-8 max-w-5xl sm:mt-10">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/venue/balai-ramirez-exterior.jpg"
            aria-label="Video tour of Balai Ramirez DSB"
            className="block max-h-[75vh] w-full rounded-sm bg-deep-olive"
          >
            <source src="/videos/venue/balai-ramirez.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <figcaption className="mt-2 text-center font-sans text-xs tracking-wide text-olive-secondary">
            A video look at Balai Ramirez
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
