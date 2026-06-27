"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

interface LyricsDisplayProps {
  compact?: boolean;
  onClose?: () => void;
}

export default function LyricsDisplay({ compact, onClose }: LyricsDisplayProps) {
  const { currentTrack } = useAudioPlayer();
  const [showTranslit, setShowTranslit] = useState(false);

  if (!currentTrack) return null;

  return (
    <div className={compact ? "border-t border-white/10" : "flex flex-col"}>
      {!compact && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h3 className="text-sm font-semibold text-white">Slokas</h3>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-white/50 hover:text-white"
              aria-label="Close lyrics"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      <div className={compact ? "max-h-48 overflow-y-auto px-4 py-3" : "max-h-72 overflow-y-auto px-4 py-4"}>
        {compact && (
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">Lyrics</p>
            <button
              type="button"
              onClick={() => setShowTranslit((v) => !v)}
              className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/70 transition hover:bg-white/15 hover:text-white"
            >
              {showTranslit ? "Sanskrit" : "Transliteration"}
            </button>
          </div>
        )}

        {!compact && (
          <div className="mb-3 flex gap-2">
            <button
              type="button"
              onClick={() => setShowTranslit(false)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                !showTranslit ? "bg-white text-black" : "bg-white/10 text-white/60 hover:text-white"
              }`}
            >
              Sanskrit
            </button>
            <button
              type="button"
              onClick={() => setShowTranslit(true)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                showTranslit ? "bg-white text-black" : "bg-white/10 text-white/60 hover:text-white"
              }`}
            >
              Transliteration
            </button>
          </div>
        )}

        <p
          className={`whitespace-pre-line leading-relaxed ${
            showTranslit
              ? "text-sm italic text-white/75"
              : "font-sanskrit text-base text-white"
          }`}
        >
          {showTranslit ? currentTrack.transliteration : currentTrack.sanskrit}
        </p>
      </div>
    </div>
  );
}
