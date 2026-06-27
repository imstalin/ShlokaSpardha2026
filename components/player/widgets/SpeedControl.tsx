"use client";

import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { PLAYBACK_SPEEDS, type PlaybackSpeed } from "@/lib/audio-player/types";

export default function SpeedControl() {
  const { playbackRate, setPlaybackRate } = useAudioPlayer();

  return (
    <div className="flex items-center gap-0.5 rounded-full bg-white/10 p-0.5">
      {PLAYBACK_SPEEDS.map((speed) => (
        <button
          key={speed}
          type="button"
          onClick={() => setPlaybackRate(speed as PlaybackSpeed)}
          className={`rounded-full px-2 py-1 text-[10px] font-semibold tabular-nums transition ${
            playbackRate === speed
              ? "bg-white text-black"
              : "text-white/60 hover:text-white"
          }`}
          aria-pressed={playbackRate === speed}
        >
          {speed}x
        </button>
      ))}
    </div>
  );
}
