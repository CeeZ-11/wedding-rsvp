import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

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
    <div className="flex justify-center gap-6 text-center">
      {units.map(({ label, value }) => (
        <div key={label}>
            <motion.p
            key={value}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-deep-olive"
            >
            {format(value)}
            </motion.p>

            <p className="text-xs uppercase tracking-widest text-deep-olive/60">
            {label}
            </p>
        </div>
        ))}
    </div>
  );
}