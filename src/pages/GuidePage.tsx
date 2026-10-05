import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { MusicPlayer } from "../components/MusicPlayer";

import { Entourage } from "../components/Entourage";
import { EventLocation } from "../components/EventLocation";
import { AttireGuide } from "../components/AttireGuide";
import { Schedule } from "../components/Schedule";
import { Seating } from "../components/Seating";
import { Explore } from "../components/Explore";
import { Footer } from "../components/Footer";
import { prenupPhotos } from "../data/prenupPhotos";
import { BotanicalMark } from "../components/BotanicalMark";

const navItems = [
  { id: "schedule", label: "Schedule" },
  { id: "location", label: "Location" },
  { id: "dress", label: "Dress" },
  { id: "seating", label: "Seating" },
  { id: "entourage", label: "Entourage" },
  { id: "explore", label: "Explore" },
];

export function GuidePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");
  const reduceMotion = useReducedMotion();

  // Honor section links on entry; otherwise start at the top.
  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    const targetId = window.location.hash.slice(1);
    const target = targetId ? document.getElementById(decodeURIComponent(targetId)) : null;

    if (target) {
      target.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }

    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }, []);

  // ✅ Scroll detection (nav style + active section)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollY = window.scrollY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const offsetTop = section.offsetTop - 160;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-bg text-deep-olive font-serif">

      {/* 🔝 NAV */}
      <nav
        style={{ backgroundColor: isScrolled ? "#FBFBF9" : "transparent" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-[padding,box-shadow] duration-300 ${
          isScrolled
          ? "bg-cream-bg border-b border-readable-border py-2 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">

          {/* Top Row */}
          <div className="mb-2 flex items-center justify-between">
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-olive-secondary hover:text-deep-olive transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
            >
              ← Back
            </Link>
            <div className="flex items-center gap-3">
              <MusicPlayer inline />
              <Link
                to="/#rsvp"
                className="rounded-full border border-deep-olive bg-deep-olive px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#4a4e3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
              >
                RSVP
              </Link>
            </div>
          </div>

          {/* Nav */}
          <ul aria-label="Wedding Guide sections" className="mx-auto flex w-full flex-nowrap justify-between gap-x-1.5 overflow-x-auto whitespace-nowrap text-[0.6rem] font-medium uppercase leading-5 tracking-[0.02em] sm:justify-center sm:gap-x-5 sm:text-xs sm:tracking-widest md:gap-x-8 md:text-sm">

            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive ${
                    active === item.id
                      ? "text-deep-olive"
                      : "text-olive-secondary hover:text-deep-olive"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1px] bg-deep-olive transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}

          </ul>
        </div>
      </nav>

      {/* 📄 CONTENT */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 space-y-20 sm:space-y-24">

        {/* HERO */}
        <motion.section
          aria-labelledby="guide-heading"
          className="grid items-center gap-8 text-center sm:grid-cols-2 sm:gap-12 sm:text-left"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <div className="order-2 sm:order-1">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-secondary sm:tracking-[0.28em]">
              Chapter II · The day
            </p>
            <h1 id="guide-heading" className="mx-auto max-w-4xl font-serif text-4xl font-medium leading-tight text-deep-olive sm:mx-0 sm:text-5xl md:text-6xl">
              Everything you need for December 27
            </h1>
            <BotanicalMark className="mx-auto my-5 h-7 w-12 text-olive-secondary sm:mx-0" />
            <p className="font-serif text-xl text-deep-olive sm:text-2xl">
              Seamor &amp; Lady Stephanie
            </p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.16em] text-olive-secondary sm:text-sm">
              December 27, 2026 <span aria-hidden="true">·</span> Balai Ramirez DSB
            </p>
            <nav aria-label="Guide highlights" className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-xs font-medium uppercase tracking-[0.12em] text-olive-secondary sm:justify-start sm:gap-x-6">
            <a href="#schedule" className="border-b border-transparent py-1 transition-colors hover:border-readable-border hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Schedule</a>
            <a href="#dress" className="border-b border-transparent py-1 transition-colors hover:border-readable-border hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Dress code</a>
            <a href="#location" className="border-b border-transparent py-1 transition-colors hover:border-readable-border hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Venue</a>
            <a href="#entourage" className="border-b border-transparent py-1 transition-colors hover:border-readable-border hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive">Entourage</a>
          </nav>
          </div>
          <figure className="order-1 sm:order-2">
            <img src={prenupPhotos[1].src} alt={prenupPhotos[1].alt} width={prenupPhotos[1].width} height={prenupPhotos[1].height} className="aspect-[1.45] w-full object-cover sm:aspect-[0.92]" />
            <figcaption className="mt-2 text-center font-sans text-xs tracking-wide text-olive-secondary sm:text-left">{prenupPhotos[1].caption}</figcaption>
          </figure>
        </motion.section>

        {/* Sections */}
        <section id="schedule" className="-mx-6 scroll-mt-28 bg-light-sage/20 px-6 py-12 sm:mx-0 sm:scroll-mt-32 sm:bg-transparent sm:px-0 sm:py-0">
          <Schedule />
        </section>

        <section id="location" className="scroll-mt-28 sm:scroll-mt-32">
          <EventLocation />
        </section>

        <section id="dress" className="scroll-mt-28 sm:scroll-mt-32">
          <AttireGuide />
        </section>

        <section id="seating" className="scroll-mt-28 sm:scroll-mt-32">
          <Seating />
        </section>

        <section id="entourage" className="scroll-mt-28 sm:scroll-mt-32">
          <Entourage />
        </section>

        <section id="explore" className="scroll-mt-28 sm:scroll-mt-32">
          <Explore />
        </section>

      </main>

      <Footer />
    </div>
  );
}
