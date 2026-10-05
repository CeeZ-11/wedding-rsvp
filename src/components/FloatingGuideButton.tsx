import { Link } from "react-router-dom";
import { BookOpen, Camera } from "lucide-react";

export function FloatingGuideButton() {
  return (
    <nav
      aria-label="Wedding links"
      className="absolute right-4 top-4 z-50 flex flex-col items-end gap-2 sm:right-6 sm:top-5 sm:flex-row sm:items-center"
    >
      <Link
        to="/guide"
        className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
      >
        <div
          className="flex items-center gap-2 rounded-full border border-readable-border bg-card-bg/95 px-4 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-deep-olive shadow-sm backdrop-blur transition-colors hover:bg-deep-olive hover:text-white sm:px-5 sm:text-xs sm:tracking-widest"
        >
          <BookOpen aria-hidden="true" className="h-4 w-4" />
          <span>Wedding Guide</span>
        </div>
      </Link>

      <a
        href="https://wed-snap-nine.vercel.app/" // 🔥 replace this
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
      >
        <div
          className="flex items-center gap-2 rounded-full border border-readable-border bg-light-sage/70 px-4 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-deep-olive shadow-sm backdrop-blur transition-colors hover:bg-deep-olive hover:text-white sm:px-5 sm:text-xs sm:tracking-widest"
        >
          <Camera aria-hidden="true" className="h-4 w-4" />
          <span>Wedding Gallery</span>
        </div>
      </a>
    </nav>
  );
}
