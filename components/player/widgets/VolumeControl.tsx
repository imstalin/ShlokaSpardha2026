"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

export default function VolumeControl() {
  const { volume, muted, setVolume, toggleMute } = useAudioPlayer();
  const displayVolume = muted ? 0 : volume;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleMute}
        className="text-white/70 transition hover:text-white"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        {muted || volume === 0 ? (
          <VolumeX className="h-[18px] w-[18px]" />
        ) : (
          <Volume2 className="h-[18px] w-[18px]" />
        )}
      </button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={displayVolume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="player-range hidden h-1 w-20 cursor-pointer appearance-none rounded-full sm:block"
        aria-label="Volume"
        style={{
          background: `linear-gradient(to right, #fff ${displayVolume * 100}%, rgba(255,255,255,0.15) ${displayVolume * 100}%)`,
        }}
      />
    </div>
  );
}
