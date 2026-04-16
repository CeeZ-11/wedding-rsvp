import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingGuideButton() {
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(true);
      setTimeout(() => setTick(false), 350); // smooth pulse
    }, 3000); // slower

    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/guide" className="fixed top-6 right-4 z-50">
      <div
        className={`relative flex items-center gap-2 px-5 py-2.5 
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
  );
}