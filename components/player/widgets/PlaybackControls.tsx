"use client";

import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function PlaybackControls() {
  const { currentTrack, isPlaying, togglePlay, playNext, playPrevious, queue, queueIndex } =
    useAudioPlayer();

  const hasNext = queueIndex < queue.length - 1;

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={playPrevious}
        disabled={!currentTrack}
        className="text-white/70 transition hover:text-white disabled:opacity-30"
        aria-label="Previous track"
      >
        <SkipBack className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={togglePlay}
        disabled={!currentTrack}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 active:scale-95 disabled:opacity-30"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="h-[18px] w-[18px] fill-current" />
        ) : (
          <Play className="h-[18px] w-[18px] fill-current pl-0.5" />
        )}
      </button>
      <button
        type="button"
        onClick={playNext}
        disabled={!currentTrack || !hasNext}
        className="text-white/70 transition hover:text-white disabled:opacity-30"
        aria-label="Next track"
      >
        <SkipForward className="h-5 w-5" />
      </button>
    </div>
  );
}
