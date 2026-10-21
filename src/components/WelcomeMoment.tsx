import type { PrenupPhoto } from '../data/prenupPhotos';
import { BotanicalMark } from './BotanicalMark';

const welcomePhoto: PrenupPhoto = {
  src: '/images/prenup/prenup-0237.jpg',
  alt: 'Seamor and Lady Stephanie smiling at one another beneath the trees',
  width: 2048,
  height: 1365,
  caption: 'A quiet moment together',
};
const detailPhoto: PrenupPhoto = {
  src: '/images/prenup/prenup-0402.jpg',
  alt: 'Seamor and Lady Stephanie holding each other close in the garden',
  width: 2048,
  height: 1365,
  caption: 'In each other’s company',
};

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
        <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-olive-secondary sm:text-2xl md:mx-0">
          We believe our story is a reminder of God's grace and faithfulness. Through every season, He has guided our steps and brought us to this beautiful moment.
        </p>
        <p className="mx-auto mt-4 max-w-xl font-serif text-xl leading-relaxed text-olive-secondary sm:text-2xl md:mx-0">
          As we prepare to become husband and wife, we're thankful for His plans and for the family and friends who have supported us along the way. We look forward to celebrating God's goodness and the beginning of our life together with you.
        </p>
        <p className="mx-auto mt-5 max-w-xl font-serif text-lg leading-relaxed text-deep-olive sm:text-xl md:mx-0">
          <span className="block italic">With grateful hearts,</span>
          <span className="mt-1 block">Seamor &amp; Steph</span>
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
          className="ml-auto aspect-[4/5] w-[80%] object-cover object-[37.4%_center] sm:w-[72%]"
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
