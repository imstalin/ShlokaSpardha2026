"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetISO: string;
  label?: string;
  compact?: boolean;
}

export default function CountdownTimer({
  targetISO,
  label = "Registration closes in",
  compact = false,
}: CountdownTimerProps) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetISO).getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  if (time.expired) {
    return (
      <p className="text-sm font-medium text-maroon/80" role="status">
        Registration deadline has passed
      </p>
    );
  }

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div role="timer" aria-label={label}>
      {!compact && (
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-ink-soft">
          {label}
        </p>
      )}
      <div className={`flex gap-2 ${compact ? "justify-start" : "justify-center"}`}>
        {units.map((u) => (
          <div
            key={u.label}
            className={`rounded-xl border border-white/50 bg-white/50 text-center backdrop-blur-md ${
              compact ? "min-w-[52px] px-2 py-1.5" : "min-w-[64px] px-3 py-2.5"
            }`}
          >
            <div
              className={`font-devanagari font-bold tabular-nums text-maroon ${
                compact ? "text-lg" : "text-2xl"
              }`}
            >
              {String(u.value).padStart(2, "0")}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-wide text-ink-soft">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
