import { useEffect, useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isHomePage = useLocation().pathname === '/';

  useEffect(() => {
  audioRef.current = new Audio('/music/wedding.mp3');
  audioRef.current.loop = true;
  audioRef.current.volume = 0.3;

  // Start paused by default; require explicit user action to play.
  return () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  };
}, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((e) => console.log('Audio play failed:', e));
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-readable-border shadow-sm text-deep-olive hover:bg-light-sage/30 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none ${
        isHomePage
          ? 'left-4 top-6 md:left-auto md:top-auto md:bottom-6 md:right-6'
          : 'bottom-6 right-6'
      }`}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      aria-pressed={isPlaying}
    >
      {isPlaying ? (
        <Pause className="w-4 h-4" strokeWidth={1.5} />
      ) : (
        <div className="relative flex items-center justify-center">
          <Music
            className="w-4 h-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            strokeWidth={1.5}
          />

          <Play
            className="w-4 h-4 group-hover:opacity-0 transition-opacity duration-300 ml-0.5"
            strokeWidth={1.5}
          />
        </div>
      )}

      {isPlaying && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-beige opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-beige opacity-60"></span>
        </span>
      )}
    </button>
  );
}