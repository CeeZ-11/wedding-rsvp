import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Entourage } from "../components/Entourage";
import { EventLocation } from "../components/EventLocation";
import { Transportation } from "../components/Transportation";
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
  { id: "transport", label: "Transport" },
  { id: "explore", label: "Explore" },
];

export function GuidePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  // ✅ Always scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
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
            ? "bg-white/90 backdrop-blur border-b border-light-sage/20 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">

          {/* Top Row */}
          <div className="flex items-center justify-between mb-2">
            <Link
              to="/"
              className="text-xs uppercase tracking-widest text-deep-olive/60 hover:text-deep-olive transition"
            >
              ← Back
            </Link>
            <div className="w-[60px]" />
          </div>

          {/* Nav */}
          <ul className="flex justify-center gap-5 md:gap-8 text-xs md:text-sm uppercase tracking-widest font-medium">

            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative transition ${
                    active === item.id
                      ? "text-deep-olive"
                      : "text-deep-olive/60 hover:text-deep-olive"
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
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-24 space-y-24">

        {/* HERO */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 font-semibold">
            Wedding Guide
          </h1>
          <p className="text-lg md:text-xl text-deep-olive/70 font-sans">
            Everything you need to know for our special day
          </p>
        </motion.section>

        {/* Sections */}
        <section id="schedule" className="scroll-mt-32">
          <Schedule />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="location" className="scroll-mt-32">
          <EventLocation />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="dress" className="scroll-mt-32">
          <AttireGuide />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="seating" className="scroll-mt-32">
          <Seating />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="entourage" className="scroll-mt-32">
          <Entourage />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="transport" className="scroll-mt-32">
          <Transportation />
        </section>

        <div className="border-t border-light-sage/20" />

        <section id="explore" className="scroll-mt-32">
          <Explore />
        </section>

      </main>

      <Footer />
    </div>
  );
}