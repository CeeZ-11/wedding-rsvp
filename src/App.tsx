import { InvitationCard } from './components/InvitationCard';
import { MusicPlayer } from './components/MusicPlayer';

export function App() {
  return (
    <div className="min-h-screen bg-cream-bg py-12 px-4 sm:px-6 lg:px-8 selection:bg-light-sage/30 selection:text-deep-olive">
      <div className="max-w-7xl mx-auto">
        <InvitationCard />
      </div>
      <MusicPlayer />
    </div>);

}