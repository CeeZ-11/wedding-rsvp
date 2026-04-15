import { useEffect, useState } from "react";

const weddingDate = new Date(2026, 11, 27, 0, 0, 0).getTime();

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

  const format = (num: number) => String(num).padStart(2, "0");

  const units = [
    { label: "days", value: timeLeft.days },
    { label: "hours", value: timeLeft.hours },
    { label: "minutes", value: timeLeft.minutes },
    { label: "seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="mt-5 flex justify-center gap-6 text-center">
      {units.map(({ label, value }) => (
        <div key={label}>
          <p className="text-2xl md:text-3xl font-semibold text-deep-olive">
            {format(value)}
          </p>
          <p className="text-xs uppercase tracking-widest text-deep-olive/60">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
}