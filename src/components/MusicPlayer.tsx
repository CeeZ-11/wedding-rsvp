import { useEffect, useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';

interface MusicPlayerProps {
  inline?: boolean;
}

export function MusicPlayer({ inline = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
      className={`z-50 flex shrink-0 items-center justify-center rounded-full border border-readable-border bg-card-bg text-deep-olive shadow-sm transition-colors hover:bg-light-sage/30 group focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 focus-visible:outline-none ${
        inline ? 'relative h-9 w-9' : 'absolute left-4 top-6 h-12 w-12'
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
