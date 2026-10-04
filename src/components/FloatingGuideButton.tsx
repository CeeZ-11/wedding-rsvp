import { Link } from "react-router-dom";
import { BookOpen, Camera } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingGuideButton() {
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(true);
      setTimeout(() => setTick(false), 350);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-4 z-50 flex flex-col items-end gap-3">

      {/* 📖 Wedding Guide */}
      <Link
        to="/guide"
        className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
      >
        <div
          className={`flex items-center gap-2 px-5 py-2.5 
          rounded-full backdrop-blur
          text-xs tracking-widest uppercase font-medium
          transition-all duration-300
          ${
            tick
              ? "border border-deep-olive bg-white shadow-md scale-[1.02] opacity-100"
              : "border border-readable-border bg-white/95 shadow-sm scale-100 opacity-100"
          }
          text-deep-olive
          hover:-translate-y-0.5 hover:shadow-md hover:bg-deep-olive hover:text-white`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Wedding Guide</span>
        </div>
      </Link>

      {/* 📸 Wedding Snaps (EXTERNAL) */}
      <a
        href="https://wed-snap-nine.vercel.app/" // 🔥 replace this
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-deep-olive"
      >
        <div
          className={`flex items-center gap-2 px-5 py-2.5 
          rounded-full backdrop-blur
          text-xs tracking-widest uppercase font-medium
          transition-all duration-300
          ${
            tick
              ? "border border-deep-olive bg-light-sage/60 shadow-md scale-[1.015] opacity-100"
              : "border border-readable-border bg-light-sage/50 shadow-sm scale-100 opacity-100"
          }
          text-deep-olive
          hover:-translate-y-0.5 hover:shadow-md hover:bg-deep-olive hover:text-white`}
        >
          <Camera className="w-4 h-4" />
          <span>Wedding Gallery</span>
        </div>
      </a>

    </div>
  );
}