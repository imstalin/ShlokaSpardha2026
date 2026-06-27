"use client";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { formatTime } from "@/lib/audio-player/format";

export default function ProgressBar() {
  const { currentTrack, currentTime, duration, seek } = useAudioPlayer();

  if (!currentTrack) {
    return (
      <div className="flex w-full items-center gap-2">
        <span className="w-10 text-right text-[11px] tabular-nums text-white/40">0:00</span>
        <div className="relative h-1 flex-1 rounded-full bg-white/15">
          <div className="absolute inset-y-0 left-0 w-0 rounded-full bg-white/30" />
        </div>
        <span className="w-10 text-[11px] tabular-nums text-white/40">0:00</span>
      </div>
    );
  }

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex w-full items-center gap-2">
      <span className="w-10 text-right text-[11px] tabular-nums text-white/60">
        {formatTime(currentTime)}
      </span>
      <div className="group relative flex-1">
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.1}
          value={currentTime}
          onChange={(e) => seek(parseFloat(e.target.value))}
          className="player-range h-1 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-white"
          aria-label="Seek"
          style={{
            background: `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.15) ${pct}%)`,
          }}
        />
      </div>
      <span className="w-10 text-[11px] tabular-nums text-white/60">{formatTime(duration)}</span>
    </div>
  );
}
