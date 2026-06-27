"use client";

import { ListMusic, X } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

interface QueuePanelProps {
  onClose?: () => void;
}

export default function QueuePanel({ onClose }: QueuePanelProps) {
  const { queue, queueIndex, currentTrack, jumpToQueueIndex } = useAudioPlayer();

  if (!queue.length) {
    return <div className="p-4 text-center text-sm text-white/50">Queue is empty</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <ListMusic className="h-4 w-4" />
          Queue
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
        {queue.map((track, i) => {
          const isCurrent = track.id === currentTrack?.id && i === queueIndex;
          return (
            <li key={`${track.id}-${i}`}>
              <button
                type="button"
                onClick={() => jumpToQueueIndex(i)}
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
                {isCurrent && (
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-green-400">
                    Now
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
