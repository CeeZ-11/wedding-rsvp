import { Link } from "react-router-dom";
import { BotanicalMark } from "./BotanicalMark";

export function Footer() {
  return (
    <footer className="border-t border-readable-border bg-[#EEEAE1] px-6 py-14 text-center sm:py-16">

      <nav
        aria-label="Wedding links"
        className="mx-auto mb-10 flex max-w-xl flex-wrap justify-center gap-x-7 gap-y-3 px-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.16em] text-olive-secondary"
      >
        <Link className="hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive" to="/">
          Wedding
        </Link>
        <Link className="hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive" to="/guide">
          Guide
        </Link>
        <a className="hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive" href="https://wed-snap-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
          Gallery
        </a>
        <Link className="hover:text-deep-olive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive" to="/#rsvp">
          RSVP
        </Link>
      </nav>

      <BotanicalMark className="mx-auto mb-4 h-8 w-14 text-olive-secondary" />

      <p className="mb-3 font-serif text-4xl font-light tracking-tight text-deep-olive sm:text-5xl">
        Seamor <span className="italic text-warm-beige-strong">&amp;</span> Lady Stephanie
      </p>

      <p className="font-serif text-base text-olive-secondary mb-3">
        December 27, 2026
      </p>

      <p className="font-serif text-2xl font-medium text-deep-olive mb-3">
        We can’t wait to celebrate with you!
      </p>

      <p className="text-xs uppercase tracking-[0.2em] text-deep-olive font-sans">
        #TheWedding2026
      </p>

    </footer>
  );
}
