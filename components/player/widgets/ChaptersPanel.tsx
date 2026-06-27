"use client";

import { BookOpen, X } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { formatTime } from "@/lib/audio-player/format";

interface ChaptersPanelProps {
  onClose?: () => void;
}

export default function ChaptersPanel({ onClose }: ChaptersPanelProps) {
  const { currentTrack, currentTime, jumpToChapter } = useAudioPlayer();
  const chapters = currentTrack?.chapters;

  if (!chapters?.length) {
    return (
      <div className="p-4 text-center text-sm text-white/50">
        No chapters for this track
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <BookOpen className="h-4 w-4" />
          Chapters
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
        {chapters.map((chapter, i) => {
          const nextStart = chapters[i + 1]?.startTime ?? Infinity;
          const isActive = currentTime >= chapter.startTime && currentTime < nextStart;
          return (
            <li key={chapter.id}>
              <button
                type="button"
                onClick={() => jumpToChapter(chapter.startTime)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition hover:bg-white/10 ${
                  isActive ? "bg-white/10" : ""
                }`}
              >
                <span className="w-10 text-xs tabular-nums text-white/45">
                  {formatTime(chapter.startTime)}
                </span>
                <p className={`truncate text-sm ${isActive ? "text-green-400" : "text-white"}`}>
                  {chapter.title}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
