"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronUp, Clock, ListMusic, ScrollText } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { useMediaQuery } from "@/lib/hooks";
import { useReducedMotion } from "@/lib/motion";
import ChaptersPanel from "./widgets/ChaptersPanel";
import FavoriteButton from "./widgets/FavoriteButton";
import NowPlaying from "./widgets/NowPlaying";
import PlaybackControls from "./widgets/PlaybackControls";
import ProgressBar from "./widgets/ProgressBar";
import QueuePanel from "./widgets/QueuePanel";
import RecentlyPlayed from "./widgets/RecentlyPlayed";
import SpeedControl from "./widgets/SpeedControl";
import VolumeControl from "./widgets/VolumeControl";
import LyricsDisplay from "./widgets/LyricsDisplay";

export default function GlobalMiniPlayer() {
  const {
    currentTrack,
    isExpanded,
    setExpanded,
    panel,
    togglePanel,
    closePanel,
  } = useAudioPlayer();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reduced = useReducedMotion();

  const hasChapters = Boolean(currentTrack?.chapters?.length);

  if (!currentTrack) return null;

  return (
    <>
      <AnimatePresence>
        {isExpanded && isMobile && (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && isMobile && (
          <motion.div
            initial={reduced ? false : { y: "100%" }}
            animate={{ y: 0 }}
            exit={reduced ? undefined : { y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="player-glass fixed inset-x-0 bottom-[72px] z-50 mx-3 max-h-[70vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <div className="overflow-y-auto">
              <div className="border-b border-white/10 p-4">
                <NowPlaying showPlayButton={false} />
                <div className="mt-4">
                  <ProgressBar />
                </div>
                <div className="mt-4 flex justify-center">
                  <PlaybackControls />
                </div>
              </div>

              <LyricsDisplay compact />

              <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 px-4 py-3">
                <FavoriteButton />
                <VolumeControl />
                <SpeedControl />
                <button
                  type="button"
                  onClick={() => togglePanel("queue")}
                  className={`rounded-full p-2 transition ${panel === "queue" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                  aria-label="Queue"
                >
                  <ListMusic className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => togglePanel("recent")}
                  className={`rounded-full p-2 transition ${panel === "recent" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                  aria-label="Recently played"
                >
                  <Clock className="h-4 w-4" />
                </button>
                {hasChapters && (
                  <button
                    type="button"
                    onClick={() => togglePanel("chapters")}
                    className={`rounded-full p-2 transition ${panel === "chapters" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                    aria-label="Chapters"
                  >
                    <BookOpen className="h-4 w-4" />
                  </button>
                )}
              </div>

              {panel === "queue" && <QueuePanel onClose={closePanel} />}
              {panel === "recent" && <RecentlyPlayed onClose={closePanel} />}
              {panel === "chapters" && <ChaptersPanel onClose={closePanel} />}
              {panel === "lyrics" && <LyricsDisplay onClose={closePanel} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop side panel for queue/recent/chapters */}
      <AnimatePresence>
        {panel && !isMobile && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 8 }}
            className={`player-glass fixed bottom-[88px] z-50 overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${
              panel === "lyrics" ? "right-4 w-96" : "right-4 w-80"
            }`}
          >
            {panel === "queue" && <QueuePanel onClose={closePanel} />}
            {panel === "recent" && <RecentlyPlayed onClose={closePanel} />}
            {panel === "chapters" && <ChaptersPanel onClose={closePanel} />}
            {panel === "lyrics" && <LyricsDisplay onClose={closePanel} />}
          </motion.div>
        )}
      </AnimatePresence>

      <footer
        className="player-glass fixed inset-x-0 bottom-0 z-50 border-t border-white/10"
        role="region"
        aria-label="Audio player"
      >
        {/* Desktop layout */}
        <div className="hidden px-4 py-3 md:grid md:grid-cols-[1fr_2fr_1fr] md:items-center md:gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <NowPlaying showPlayButton={false} />
            <FavoriteButton />
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <PlaybackControls />
            <ProgressBar />
          </div>

          <div className="flex items-center justify-end gap-3">
            <SpeedControl />
            <VolumeControl />
            <button
              type="button"
              onClick={() => togglePanel("lyrics")}
              className={`rounded-full p-2 transition ${panel === "lyrics" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
              aria-label="Lyrics"
            >
              <ScrollText className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => togglePanel("queue")}
              className={`rounded-full p-2 transition ${panel === "queue" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
              aria-label="Queue"
            >
              <ListMusic className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => togglePanel("recent")}
              className={`rounded-full p-2 transition ${panel === "recent" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
              aria-label="Recently played"
            >
              <Clock className="h-4 w-4" />
            </button>
            {hasChapters && (
              <button
                type="button"
                onClick={() => togglePanel("chapters")}
                className={`rounded-full p-2 transition ${panel === "chapters" ? "bg-white/20 text-white" : "text-white/60 hover:text-white"}`}
                aria-label="Chapters"
              >
                <BookOpen className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile compact bar */}
        <button
          type="button"
          className="flex w-full items-center gap-2 px-3 py-3 md:hidden"
          onClick={() => setExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse player" : "Expand player"}
        >
          <div className="min-w-0 flex-1" onClick={(e) => e.stopPropagation()}>
            <NowPlaying compact showPlayButton />
          </div>
          <ChevronUp
            className={`h-5 w-5 shrink-0 text-white/50 transition ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </footer>
    </>
  );
}
