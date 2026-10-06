import { motion, useReducedMotion } from 'framer-motion';
import { Countdown } from './Countdown';
import { Footer } from './Footer';
import { PrenupGallery } from './PrenupGallery';
import { RSVPForm } from './RSVPForm';
import { WelcomeMoment } from './WelcomeMoment';
import { BotanicalMark } from './BotanicalMark';
import { Link } from 'react-router-dom';

export function WeddingHome() {
  const reduceMotion = useReducedMotion();
  const keyEvents = [
    { time: '2:00', title: 'Guest arrival' },
    { time: '2:30', title: 'Ceremony' },
    { time: '4:00', title: 'Photos & fellowship' },
    { time: '5:30', title: 'Reception' },
    { time: '9:45', title: 'Closing' },
  ];

  return (
    <main id="main">
      <section
        aria-labelledby="wedding-title"
        className="relative isolate flex min-h-[88svh] items-center justify-center overflow-hidden lg:min-h-[100svh]"
      >
        <img
          src="/images/prenup/placeholder-03.jpg"
          alt="A couple walking hand in hand through a mountain landscape"
          width={1400}
          height={933}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#FBFBF9]/15 via-transparent to-[#263128]/30"
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex w-full max-w-4xl -translate-y-16 flex-col items-center px-5 pb-16 pt-32 text-center sm:-translate-y-20 sm:pb-20 sm:pt-36 [@media(min-width:1024px)_and_(max-height:800px)]:pb-12 [@media(min-width:1024px)_and_(max-height:800px)]:pt-24"
        >
          <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-deep-olive sm:text-sm sm:tracking-[0.3em]">
            Together with their families
          </p>

          <h1
            id="wedding-title"
            className="flex flex-col items-center font-serif leading-[0.88] tracking-[-0.035em] text-deep-olive"
          >
            <span className="whitespace-nowrap text-[clamp(2.5rem,12.5vw,3.25rem)] font-light sm:text-8xl md:text-9xl">Seamor</span>
            <span aria-hidden="true" className="my-2 font-light italic text-5xl text-warm-beige-strong sm:text-6xl">
              &amp;
            </span>
            <span className="whitespace-nowrap text-[clamp(2.5rem,12.5vw,3.25rem)] font-light sm:text-8xl md:text-9xl">Lady Stephanie</span>
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

      <WelcomeMoment />

      <section
        id="the-wedding"
        aria-labelledby="wedding-details-heading"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 sm:px-10 sm:py-28 lg:grid-cols-12 lg:gap-12 lg:px-16 lg:py-36"
      >
        <div className="flex flex-col items-center justify-center text-center lg:col-span-5 lg:items-start lg:text-left">
          <p className="mb-4 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-olive-secondary">
            <span className="font-serif text-base font-normal italic tracking-normal">02</span><span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />The wedding
          </p>
          <h2
            id="wedding-details-heading"
            className="font-serif text-8xl font-medium leading-none tabular-nums text-deep-olive sm:text-9xl"
          >
            27
          </h2>
          <p className="mt-3 font-serif text-2xl text-deep-olive sm:text-3xl">
            December 2026
          </p>
          <div className="mt-12 w-full space-y-9 border-t border-readable-border pt-8 text-center lg:text-left">
          <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">Venue</p>
          <p className="mt-3 font-serif text-3xl leading-tight text-deep-olive">
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
          <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary">Dress code</p>
          <p className="mt-3 max-w-sm font-serif text-2xl leading-snug text-deep-olive">Semi-formal attire in soft, garden-inspired tones.</p>
          <a href="/guide#dress" className="mt-5 inline-block border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">What to wear</a>
          </div>
          </div>
        </div>

        <div className="self-center border-t border-readable-border pt-8 lg:col-span-6 lg:col-start-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-4">
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-olive-secondary lg:text-left">Order of the day</p>
          <h3 className="mt-3 text-center font-serif text-4xl font-light text-deep-olive lg:text-left sm:text-5xl">The celebration</h3>
          <div className="space-y-1">
            {keyEvents.map(({ time, title }) => (
              <div key={time} className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-x-4 border-b border-readable-border py-5 text-left sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:py-6">
                <div className="flex items-center justify-center gap-2 lg:contents">
                  <span className="font-serif text-3xl font-light tabular-nums text-deep-olive sm:text-4xl">{time}<span className="ml-1 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-olive-secondary">PM</span></span>
                </div>
                <span className="font-serif text-2xl leading-tight text-deep-olive sm:text-3xl">{title}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 text-center lg:text-left">
            <a
              href="/guide#schedule"
              className="inline-block border-b border-deep-olive pb-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive transition-colors hover:text-olive-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
            >
              Full day schedule
            </a>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="countdown-heading"
        className="border-y border-[#596253] bg-[#303B32] px-5 py-14 text-center text-[#F7F4EE] sm:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            id="countdown-heading"
            className="mb-10 font-serif text-4xl font-light text-[#F7F4EE] sm:text-5xl"
          >
            Until we celebrate together
          </h2>
          <Countdown />
        </div>
      </section>

      <PrenupGallery />

      <section aria-labelledby="guide-preview-heading" className="bg-[#EEEAE1] py-24 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:px-16">
          <div className="lg:col-span-4">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-olive-secondary">The wedding guide</p>
            <h2 id="guide-preview-heading" className="max-w-lg font-serif text-4xl font-light leading-tight text-deep-olive sm:text-5xl">Everything you need for December 27</h2>
            <BotanicalMark className="my-5 h-7 w-12 text-olive-secondary" />
            <Link to="/guide" className="inline-flex min-h-11 items-center border-b border-deep-olive font-sans text-xs font-semibold uppercase tracking-[0.14em] text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Open the guide <span aria-hidden="true" className="ml-3 text-base">→</span></Link>
          </div>
          <nav aria-label="Guide sections" className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-readable-border">
              {[['01', 'Schedule', 'schedule'], ['02', 'Location', 'location'], ['03', 'Dress', 'dress'], ['04', 'Seating', 'seating'], ['05', 'Entourage', 'entourage'], ['06', 'Explore', 'explore']].map(([number, label, id]) => (
                <li key={id} className="border-b border-readable-border">
                  <Link to={`/guide#${id}`} className="group grid min-h-[4.75rem] grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep-olive sm:min-h-[5.25rem] sm:grid-cols-[3.5rem_minmax(0,1fr)_auto]">
                    <span aria-hidden="true" className="font-serif text-lg italic tabular-nums text-olive-secondary">{number}</span>
                    <span className="font-serif text-2xl leading-tight text-deep-olive transition-colors group-hover:text-warm-beige-strong sm:text-3xl">{label}</span>
                    <span aria-hidden="true" className="font-sans text-lg text-olive-secondary transition-transform group-hover:translate-x-1">↗</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section id="rsvp" aria-labelledby="rsvp-heading" className="border-t border-[#76806A] bg-[#303B32] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 text-center lg:grid-cols-12 lg:gap-16 lg:text-left">
          <div className="text-center lg:col-span-4 lg:pt-6 lg:text-left">
            <BotanicalMark className="mx-auto mb-6 h-8 w-14 text-[#C6CEBC] lg:mx-0" />
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#C6CEBC]">Kindly respond</p>
            <h2 id="rsvp-heading" className="font-serif text-4xl font-light leading-tight text-[#F7F4EE] sm:text-5xl">We&apos;d love to celebrate with you.</h2>
            <div aria-hidden="true" className="mx-auto my-5 h-px w-12 bg-[#858B75] lg:mx-0" />
            <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-[#D0D4C8] sm:text-sm">Please reply by November 1st, 2026</p>
          </div>
          <div className="border border-[#858B75] bg-[#F7F4EE] px-4 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:col-start-6 lg:px-10">
            <RSVPForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
