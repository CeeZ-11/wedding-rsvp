import { useEffect, useState } from "react";
import { useReducedMotion } from 'framer-motion';

const weddingDate = new Date("2026-12-27T00:00:00+08:00").getTime();

function getTimeRemaining() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining());
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-center text-deep-olive mt-6 font-serif">
        The big day has arrived 💍
      </p>
    );
  }

  const units = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label={`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds until the wedding`}
      className="mx-auto grid max-w-3xl grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] items-center text-center"
    >
      {units.map(({ label, value }, index) => (
        <div
          key={label}
          className={`${index ? 'border-l border-readable-border/70' : ''} px-2 sm:px-6`}
        >
          <p
            className={`font-serif font-medium leading-none tabular-nums text-deep-olive ${
              index === 0
                ? 'text-6xl sm:text-7xl md:text-8xl'
                : 'text-3xl sm:text-4xl md:text-5xl'
            } ${reduceMotion ? '' : 'transition-[opacity] duration-300'}`}
          >
            {index === 0 ? value : String(value).padStart(2, '0')}
          </p>
          <p className="mt-3 text-[0.6rem] uppercase tracking-[0.14em] text-olive-secondary sm:text-xs sm:tracking-[0.2em]">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}