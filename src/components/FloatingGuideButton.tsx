import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export function FloatingGuideButton() {
  return (
    <Link
      to="/guide"
      className="fixed top-6 right-4 z-50 group"
    >
      <div
        className="flex items-center gap-2 px-5 py-2.5 
                   rounded-full border border-light-sage/40 
                   bg-white/80 backdrop-blur
                   shadow-sm
                   text-deep-olive text-xs tracking-widest uppercase font-medium
                   transition-all duration-300
                   hover:-translate-y-0.5 hover:shadow-md hover:bg-deep-olive hover:text-white"
      >
        <BookOpen className="w-4 h-4" />
        <span>Wedding Guide</span>
      </div>
    </Link>
  );
}