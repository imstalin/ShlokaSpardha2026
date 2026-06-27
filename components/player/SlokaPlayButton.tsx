"use client";

import { Pause, Play } from "lucide-react";
import { useAudioPlayerOptional } from "@/context/AudioPlayerContext";
import { getTracksForGroup, getTrackById } from "@/lib/audio-player/tracks";
import type { Sloka } from "@/data/slokas";

interface SlokaPlayButtonProps {
  sloka: Sloka;
  groupId?: string;
  className?: string;
  variant?: "modern" | "classic";
}

export default function SlokaPlayButton({
  sloka,
  groupId,
  className = "",
  variant = "modern",
}: SlokaPlayButtonProps) {
  const player = useAudioPlayerOptional();

  if (!sloka.audioFile) {
    return (
      <p className={`text-xs text-ink-soft ${className}`}>
        Coming soon — set in <code className="rounded bg-cream px-1">data/audio.ts</code>
      </p>
    );
  }

  if (!player) {
    // Fallback if provider not mounted
    // eslint-disable-next-line jsx-a11y/media-has-caption
    return <audio controls className={`h-9 w-full ${className}`} src={sloka.audioFile} preload="none" />;
  }

  const track = getTrackById(sloka.id);
  const isCurrent = player.currentTrack?.id === sloka.id;
  const isPlaying = isCurrent && player.isPlaying;

  const handlePlay = () => {
    if (!track) return;
    if (isCurrent) {
      player.togglePlay();
      return;
    }
    const queue = groupId ? getTracksForGroup(groupId) : undefined;
    player.playTrack(track, queue);
  };

  const baseStyles =
    variant === "modern"
      ? "inline-flex items-center gap-2 rounded-full bg-maroon/10 px-4 py-2 text-xs font-semibold text-maroon transition hover:bg-maroon/15 active:scale-95"
      : "inline-flex items-center gap-2 rounded-lg border border-line bg-cream px-3 py-1.5 text-xs font-bold text-maroon-dark transition hover:bg-card active:scale-95";

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={`${baseStyles} ${isCurrent ? "ring-2 ring-maroon/30" : ""} ${className}`}
      aria-label={isPlaying ? `Pause ${sloka.title}` : `Play ${sloka.title}`}
      aria-pressed={isPlaying}
    >
      {isPlaying ? (
        <>
          <Pause className="h-3.5 w-3.5 fill-current" />
          Pause
        </>
      ) : (
        <>
          <Play className="h-3.5 w-3.5 fill-current pl-0.5" />
          {isCurrent ? "Resume" : "Play in player"}
        </>
      )}
    </button>
  );
}
