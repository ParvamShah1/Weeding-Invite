"use client";
import { useEffect, useState } from "react";

function getTimeLeft() {
  const target = new Date("2026-05-21T19:00:00").getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownSection() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { value: time?.days ?? 0, label: "Days" },
    { value: time?.hours ?? 0, label: "Hours" },
    { value: time?.minutes ?? 0, label: "Minutes" },
    { value: time?.seconds ?? 0, label: "Seconds" },
  ];

  return (
    <section id="countdown" className="section-padding bg-ivory">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-script text-4xl md:text-5xl text-maroon mb-2">
          Countdown
        </h2>
        <p className="text-sage text-lg font-body tracking-wide mb-12">
          To the most special day of our lives
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-cream p-6 md:p-8 border border-sage-light rounded-lg"
            >
              <span className="block font-display text-4xl md:text-6xl font-light text-maroon">
                {String(item.value).padStart(item.label === "Days" ? 1 : 2, "0")}
              </span>
              <span className="block mt-2 text-xs tracking-[0.2em] uppercase text-sage font-body">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
