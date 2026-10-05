import { motion, useReducedMotion } from 'framer-motion';
import { Countdown } from './Countdown';
import { Footer } from './Footer';
import { PrenupGallery } from './PrenupGallery';
import { RSVPForm } from './RSVPForm';

export function WeddingHome() {
  const reduceMotion = useReducedMotion();

  return (
    <main>
      <section
        aria-labelledby="wedding-title"
        className="relative isolate flex min-h-[88svh] items-center justify-center overflow-hidden"
      >
        <div aria-hidden="true" className="absolute inset-0 hidden overflow-hidden lg:block">
          <img
            src="/images/prenup/placeholder-03.jpg"
            alt=""
            width={1400}
            height={933}
            className="h-full w-full scale-105 object-cover blur-2xl"
          />
        </div>
        <img
          src="/images/prenup/placeholder-03.jpg"
          alt="A couple walking hand in hand through a mountain landscape"
          width={1400}
          height={933}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-contain"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#FBFBF9]/15 via-transparent to-[#263128]/30"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex w-full max-w-4xl -translate-y-16 flex-col items-center px-5 pb-16 pt-32 text-center sm:-translate-y-20 sm:pb-20 sm:pt-36"
        >
          <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-deep-olive sm:text-sm sm:tracking-[0.3em]">
            Together with their families
          </p>

          <h1
            id="wedding-title"
            className="flex flex-col items-center font-script leading-[0.88] text-deep-olive"
          >
            <span className="text-7xl sm:text-8xl md:text-9xl">Seamor</span>
            <span aria-hidden="true" className="my-2 text-5xl text-warm-beige-strong sm:text-6xl">
              &amp;
            </span>
            <span className="text-6xl sm:text-7xl md:text-8xl">Lady Stephanie</span>
          </h1>

          <p className="mt-7 font-serif text-xl font-medium text-deep-olive sm:text-2xl">
            We&apos;re getting married
          </p>
          <a
            href="#rsvp"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-deep-olive bg-deep-olive px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#4a4e3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
          >
            RSVP
          </a>
          <div className="mt-5 space-y-1 font-serif text-base sm:text-lg">
            <p className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">December 27, 2026</p>
            <p className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)]">2:00 PM – 10:00 PM · Balai Ramirez DSB</p>
          </div>
        </motion.div>

        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 h-12 w-px -translate-x-1/2 bg-deep-olive/45"
        />
      </section>

      <section
        aria-labelledby="countdown-heading"
        className="border-y border-readable-border bg-[#E9EDE5] px-5 py-12 text-center sm:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            id="countdown-heading"
            className="mb-8 font-serif text-3xl font-medium text-deep-olive sm:text-4xl"
          >
            Until we celebrate together
          </h2>
          <Countdown />
        </div>
      </section>

      <section
        id="the-wedding"
        aria-labelledby="wedding-details-heading"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-16"
      >
        <div className="flex flex-col items-start justify-center">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-olive-secondary">
            The wedding
          </p>
          <h2
            id="wedding-details-heading"
            className="font-serif text-7xl font-medium leading-none tabular-nums text-deep-olive sm:text-8xl"
          >
            27
          </h2>
          <p className="mt-3 font-serif text-2xl text-deep-olive sm:text-3xl">
            December 2026
          </p>
          <p className="mt-8 font-serif text-xl text-deep-olive">
            Balai Ramirez DSB
          </p>
          <p className="mt-1 font-sans text-sm text-olive-secondary">
            2:00 PM – 10:00 PM
          </p>
          <a
            href="/guide#location"
            className="mt-7 border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
          >
            Venue &amp; directions
          </a>
        </div>

        <div className="self-center border-t border-readable-border lg:border-l lg:border-t-0 lg:pl-12">
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-5 border-b border-readable-border/70 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-serif text-2xl tabular-nums text-deep-olive sm:text-3xl">2:00</span>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-olive-secondary">Guest arrival</span>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-5 border-b border-readable-border/70 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-serif text-2xl tabular-nums text-deep-olive sm:text-3xl">2:30</span>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-olive-secondary">Ceremony</span>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-5 border-b border-readable-border/70 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-serif text-2xl tabular-nums text-deep-olive sm:text-3xl">4:00</span>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-olive-secondary">Photos &amp; fellowship</span>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-5 border-b border-readable-border/70 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-serif text-2xl tabular-nums text-deep-olive sm:text-3xl">5:30</span>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-olive-secondary">Reception</span>
          </div>
          <div className="grid grid-cols-[6.5rem_1fr] items-baseline gap-x-5 py-5 sm:grid-cols-[8rem_1fr]">
            <span className="font-serif text-2xl tabular-nums text-deep-olive sm:text-3xl">9:45</span>
            <span className="font-sans text-sm uppercase tracking-[0.14em] text-olive-secondary">Closing</span>
          </div>
          <a
            href="/guide#schedule"
            className="mt-3 inline-block border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
          >
            Full day schedule
          </a>
        </div>
      </section>

      <PrenupGallery />

      <section aria-label="RSVP" className="border-t border-[#76806A] bg-[#303B32] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl border border-[#858B75] bg-card-bg px-1 py-10 sm:px-10 sm:py-14">
          <RSVPForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
