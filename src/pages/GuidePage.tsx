import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import { Entourage } from "../components/Entourage";
import { EventLocation } from "../components/EventLocation";
import { AttireGuide } from "../components/AttireGuide";
import { Schedule } from "../components/Schedule";
import { Seating } from "../components/Seating";
import { Explore } from "../components/Explore";
import { Footer } from "../components/Footer";

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

  // ✅ Always scroll to top
  useLayoutEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur border-b border-readable-border py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">

          {/* Top Row */}
          <div className="flex items-center justify-between mb-2">
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-olive-secondary hover:text-deep-olive transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
            >
              ← Back
            </Link>
            <Link
              to="/#rsvp"
              className="rounded-full border border-deep-olive bg-deep-olive px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#4a4e3c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
            >
              RSVP
            </Link>
          </div>

          {/* Nav */}
          <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-4 gap-y-2 text-[0.7rem] leading-5 uppercase tracking-[0.08em] font-medium sm:text-xs sm:tracking-widest md:gap-x-8 md:text-sm">

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
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 space-y-24">

        {/* HERO */}
        <motion.section
          className="text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-6 font-medium">
            Wedding Guide
          </h1>
          <p className="text-lg md:text-xl text-olive-secondary font-sans">
            Everything you need to know for our special day
          </p>
        </motion.section>

        {/* Sections */}
        <section id="schedule" className="scroll-mt-32">
          <Schedule />
        </section>

        <div className="border-t border-readable-border" />

        <section id="location" className="scroll-mt-32">
          <EventLocation />
        </section>

        <div className="border-t border-readable-border" />

        <section id="dress" className="scroll-mt-32">
          <AttireGuide />
        </section>

        <div className="border-t border-readable-border" />

        <section id="seating" className="scroll-mt-32">
          <Seating />
        </section>

        <div className="border-t border-readable-border" />

        <section id="entourage" className="scroll-mt-32">
          <Entourage />
        </section>

        <div className="border-t border-readable-border" />

        <section id="explore" className="scroll-mt-32">
          <Explore />
        </section>

      </main>

      <Footer />
    </div>
  );
}