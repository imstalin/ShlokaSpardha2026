"use client";

import { Pause, Play } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

interface NowPlayingProps {
  compact?: boolean;
  showPlayButton?: boolean;
}

export default function NowPlaying({ compact, showPlayButton = true }: NowPlayingProps) {
  const { currentTrack, isPlaying, togglePlay } = useAudioPlayer();

  if (!currentTrack) {
    return (
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 text-lg">
          🎵
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white/90">No track playing</p>
          <p className="truncate text-xs text-white/50">Select a sloka to listen</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xl shadow-inner"
        style={{
          background: `linear-gradient(135deg, ${currentTrack.groupColor}88, ${currentTrack.groupColor}44)`,
        }}
        aria-hidden="true"
      >
        {currentTrack.groupEmoji}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">{currentTrack.title}</p>
        <p className="truncate text-xs text-white/55">
          {currentTrack.subtitle} · {currentTrack.groupLabel}
        </p>
      </div>
      {showPlayButton && compact && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 active:scale-95"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current pl-0.5" />}
        </button>
      )}
    </div>
  );
}
