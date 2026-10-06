import { prenupPhotos } from '../data/prenupPhotos';
import { BotanicalMark } from './BotanicalMark';

const welcomePhoto = prenupPhotos[0];
const detailPhoto = prenupPhotos[1];

export function WelcomeMoment() {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-24 sm:px-10 sm:py-28 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:px-16 lg:py-36"
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
        <BotanicalMark className="mx-auto my-5 h-7 w-12 text-olive-secondary md:mx-0" />
        {/* Replace this placeholder with the couple's own welcome copy when provided. */}
        <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-olive-secondary sm:text-2xl md:mx-0">
          Personal welcome copy to be added.
        </p>
      </div>

      <figure className="relative mx-auto w-full max-w-xl pb-9 md:justify-self-end">
        <img
          src={welcomePhoto.src}
          alt={welcomePhoto.alt}
          width={welcomePhoto.width}
          height={welcomePhoto.height}
          loading="lazy"
          decoding="async"
          className="ml-auto aspect-[4/5] w-[80%] object-cover sm:w-[72%]"
        />
        <img
          src={detailPhoto.src}
          alt={detailPhoto.alt}
          width={detailPhoto.width}
          height={detailPhoto.height}
          loading="lazy"
          decoding="async"
          className="absolute bottom-8 left-0 aspect-[4/3] w-[44%] border-[6px] border-[#FBFBF9] object-cover sm:border-[10px]"
        />
        <figcaption className="mt-3 text-center font-serif text-sm italic text-olive-secondary sm:text-center md:text-left">
          {welcomePhoto.caption}
        </figcaption>
      </figure>
    </section>
  );
}
