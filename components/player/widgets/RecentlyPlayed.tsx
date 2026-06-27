"use client";

import { Clock, X } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { getTrackById } from "@/lib/audio-player/tracks";

interface RecentlyPlayedProps {
  onClose?: () => void;
}

export default function RecentlyPlayed({ onClose }: RecentlyPlayedProps) {
  const { recentlyPlayed, playTrack, currentTrack } = useAudioPlayer();

  const tracks = recentlyPlayed
    .map((id) => getTrackById(id))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  if (!tracks.length) {
    return (
      <div className="p-4 text-center text-sm text-white/50">No recently played tracks</div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <Clock className="h-4 w-4" />
          Recently played
        </h3>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-white/50 hover:text-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <ul className="max-h-64 overflow-y-auto py-1">
        {tracks.map((track) => {
          const isCurrent = track.id === currentTrack?.id;
          return (
            <li key={track.id}>
              <button
                type="button"
                onClick={() => playTrack(track)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-white/10 ${
                  isCurrent ? "bg-white/10" : ""
                }`}
              >
                <span className="text-base" aria-hidden="true">
                  {track.groupEmoji}
                </span>
                <div className="min-w-0 flex-1">
                  <p className={`truncate text-sm ${isCurrent ? "text-green-400" : "text-white"}`}>
                    {track.title}
                  </p>
                  <p className="truncate text-xs text-white/45">{track.subtitle}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
