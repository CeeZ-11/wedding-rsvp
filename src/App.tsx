import { Routes, Route } from "react-router-dom";
import { InvitationCard } from "./components/InvitationCard";
import { MusicPlayer } from "./components/MusicPlayer";
import { GuidePage } from "./pages/GuidePage";
import { FloatingGuideButton } from "./components/FloatingGuideButton";

function Home() {
  return (
    <div className="min-h-screen bg-cream-bg pt-24 pb-12 px-4 sm:px-6 lg:px-8 selection:bg-light-sage/30 selection:text-deep-olive">
      <div className="max-w-7xl mx-auto">
        <InvitationCard />
      </div>
      <FloatingGuideButton />
    </div>
  );
}

export function App() {
  return (
    <>
      <MusicPlayer />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </>
  );
}