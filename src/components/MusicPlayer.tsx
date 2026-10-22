import { useEffect, useState } from 'react';
import { Music, Pause, Play } from 'lucide-react';

interface MusicPlayerProps {
  inline?: boolean;
}

let sharedAudio: HTMLAudioElement | null = null;

function getSharedAudio() {
  if (!sharedAudio) {
    sharedAudio = new Audio('/music/wedding.mp3');
    sharedAudio.preload = 'none';
    sharedAudio.loop = true;
    sharedAudio.volume = 0.3;
  }

  return sharedAudio;
}

export function MusicPlayer({ inline = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(() => Boolean(sharedAudio && !sharedAudio.paused));

  useEffect(() => {
    const audio = getSharedAudio();
    const sync = () => setIsPlaying(!audio.paused);
    const removeUnlockListeners = () => {
      document.removeEventListener('pointerdown', unlockPlayback);
      document.removeEventListener('keydown', unlockPlayback);
      document.removeEventListener('touchstart', unlockPlayback);
    };
    const unlockPlayback = () => {
      void audio.play().then(removeUnlockListeners).catch(() => undefined);
    };

    audio.addEventListener('play', sync);
    audio.addEventListener('pause', sync);
    audio.addEventListener('ended', sync);
    sync();

    // Browsers may block audible autoplay until the visitor interacts with the page.
    void audio.play().catch(() => {
      document.addEventListener('pointerdown', unlockPlayback, { once: true });
      document.addEventListener('keydown', unlockPlayback, { once: true });
      document.addEventListener('touchstart', unlockPlayback, { once: true });
    });

    return () => {
      removeUnlockListeners();
      audio.removeEventListener('play', sync);
      audio.removeEventListener('pause', sync);
      audio.removeEventListener('ended', sync);
    };
  }, []);

  const togglePlay = async () => {
    const audio = getSharedAudio();

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={togglePlay}
      className={`group z-50 flex shrink-0 items-center justify-center rounded-full border border-readable-border bg-card-bg text-deep-olive transition-colors hover:bg-light-sage/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-deep-olive focus-visible:ring-offset-2 ${inline ? 'relative h-10 w-10' : 'h-10 w-10'}`}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      aria-pressed={isPlaying}
    >
      {isPlaying ? <Pause aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} /> : (
        <span className="relative flex items-center justify-center">
          <Music aria-hidden="true" className="absolute h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.5} />
          <Play aria-hidden="true" className="ml-0.5 h-4 w-4" strokeWidth={1.5} />
        </span>
      )}
      {isPlaying && <span aria-hidden="true" className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-warm-beige" />}
    </button>
  );
}
