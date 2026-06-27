"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Sloka } from "@/data/slokas";
import { copyToClipboard } from "@/lib/share";
import { isPracticeCompleted, togglePracticeCompleted } from "@/lib/practice";

interface SlokaCardProps {
  sloka: Sloka;
  index: number;
}

export default function SlokaCard({ sloka, index }: SlokaCardProps) {
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCompleted(isPracticeCompleted(sloka.id));
  }, [sloka.id]);

  const handleCopy = async () => {
    const text = `${sloka.title}\n\n${sloka.sanskrit}\n\n${sloka.transliteration}`;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleTogglePractice = () => {
    const nowCompleted = togglePracticeCompleted(sloka.id);
    setCompleted(nowCompleted);
  };

  const hasAudio = Boolean(sloka.audioFile);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="mb-3.5 rounded-2xl border border-line bg-card p-5 shadow-[0_8px_24px_rgba(58,20,16,0.06)]"
      aria-labelledby={`sloka-title-${sloka.id}`}
    >
      <div
        id={`sloka-title-${sloka.id}`}
        className="mb-3 flex flex-wrap items-center gap-2 text-sm font-bold text-maroon-dark"
      >
        {sloka.title}
        {sloka.badge && (
          <span className="rounded-full bg-gold-light px-2.5 py-0.5 text-[11px] font-bold text-maroon-dark">
            {sloka.badge}
          </span>
        )}
      </div>

      <p className="font-sanskrit mb-2.5 whitespace-pre-line text-[19px] leading-[1.9] text-ink">
        {sloka.sanskrit}
      </p>

      {showTransliteration && (
        <p className="mb-3 whitespace-pre-line text-[13.5px] italic leading-relaxed text-ink-soft">
          {sloka.transliteration}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setShowTransliteration((v) => !v)}
          className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-xs font-semibold text-maroon transition hover:bg-card"
          aria-pressed={showTransliteration}
        >
          {showTransliteration ? "Hide transliteration" : "Show transliteration"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-xs font-semibold text-maroon transition hover:bg-card"
          aria-live="polite"
        >
          {copied ? "Copied!" : "Copy sloka"}
        </button>
        <button
          type="button"
          onClick={handleTogglePractice}
          className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
            completed
              ? "border-tulsi bg-tulsi/15 text-tulsi"
              : "border-line bg-cream text-maroon hover:bg-card"
          }`}
          aria-pressed={completed}
        >
          {completed ? "✓ Practised" : "Mark as practised"}
        </button>
      </div>

      <div className="mt-3.5 rounded-xl border border-line bg-cream p-3">
        <p className="mb-2 flex items-center gap-1.5 text-xs font-bold text-maroon-dark">
          🎧 Audio
        </p>
        {hasAudio ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <audio controls className="h-[38px] w-full" src={sloka.audioFile} preload="none">
            Your browser does not support audio playback.
          </audio>
        ) : (
          <p className="text-xs text-ink-soft">Coming soon — set in data/audio.ts</p>
        )}
      </div>
    </motion.article>
  );
}
