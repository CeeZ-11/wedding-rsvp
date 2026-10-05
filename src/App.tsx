import { Routes, Route } from "react-router-dom";
import { MusicPlayer } from "./components/MusicPlayer";
import { GuidePage } from "./pages/GuidePage";
import { FloatingGuideButton } from "./components/FloatingGuideButton";
import { WeddingHome } from "./components/WeddingHome";

function Home() {
  return (
    <div className="relative min-h-screen bg-cream-bg text-deep-olive selection:bg-light-sage/30 selection:text-deep-olive">
      <MusicPlayer />
      <WeddingHome />
      <FloatingGuideButton />
    </div>
  );
}

export function App() {
  return (
    <>
      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </>
  );
}
