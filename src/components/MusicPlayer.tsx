import { useEffect, useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    // Using a royalty-free classical piano piece for wedding vibe
    audioRef.current = new Audio(
      'https://cdn.pixabay.com/audio/2022/02/07/audio_b9bd4170e4.mp3'
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.
        play().
        catch((e) => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-light-sage/50 shadow-sm text-deep-olive hover:bg-light-sage/10 transition-all duration-300 group"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}>
      
      {isPlaying ?
      <Pause className="w-4 h-4" strokeWidth={1.5} /> :

      <div className="relative flex items-center justify-center">
          <Music
          className="w-4 h-4 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          strokeWidth={1.5} />
        
          <Play
          className="w-4 h-4 group-hover:opacity-0 transition-opacity duration-300 ml-0.5"
          strokeWidth={1.5} />
        
        </div>
      }

      {isPlaying &&
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-beige opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-beige opacity-60"></span>
        </span>
      }
    </button>);

}