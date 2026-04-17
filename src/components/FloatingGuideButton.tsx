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
      <Link to="/guide">
        <div
          className={`flex items-center gap-2 px-5 py-2.5 
          rounded-full backdrop-blur
          text-xs tracking-widest uppercase font-medium
          transition-all duration-300
          ${
            tick
              ? "border border-deep-olive/60 bg-white shadow-md scale-[1.02] opacity-100"
              : "border border-light-sage/40 bg-white/90 shadow-sm scale-100 opacity-95"
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
      >
        <div
          className={`flex items-center gap-2 px-5 py-2.5 
          rounded-full backdrop-blur
          text-xs tracking-widest uppercase font-medium
          transition-all duration-300
          ${
            tick
              ? "border border-deep-olive/40 bg-light-sage/30 shadow-md scale-[1.015] opacity-100"
              : "border border-light-sage/30 bg-light-sage/20 shadow-sm scale-100 opacity-90"
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