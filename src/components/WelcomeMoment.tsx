import { prenupPhotos } from '../data/prenupPhotos';

const welcomePhoto = prenupPhotos[0];

export function WelcomeMoment() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:px-10 sm:py-24 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:px-16 lg:py-28"
    >
      <div className="max-w-2xl text-center md:text-left">
        <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-olive-secondary">
          A note from the couple
        </p>
        <h2
          id="our-story-heading"
          className="font-serif text-5xl font-medium leading-[1.05] text-deep-olive sm:text-6xl"
        >
          Our story
        </h2>
        <div aria-hidden="true" className="mx-auto my-6 h-px w-14 bg-readable-border md:mx-0" />
        {/* Replace this placeholder with the couple's own welcome copy when provided. */}
        <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-olive-secondary sm:text-2xl md:mx-0">
          Personal welcome copy to be added.
        </p>
      </div>

      <figure className="mx-auto w-full max-w-md md:justify-self-end">
        <img
          src={welcomePhoto.src}
          alt={welcomePhoto.alt}
          width={welcomePhoto.width}
          height={welcomePhoto.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover"
        />
        <figcaption className="mt-3 text-center font-serif text-sm text-olive-secondary md:text-left">
          {welcomePhoto.caption}
        </figcaption>
      </figure>
    </section>
  );
}
