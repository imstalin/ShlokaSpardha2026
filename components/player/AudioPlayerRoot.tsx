"use client";

import { AudioPlayerProvider, useAudioPlayer } from "@/context/AudioPlayerContext";
import GlobalMiniPlayer from "./GlobalMiniPlayer";

function PlayerLayout({ children }: { children: React.ReactNode }) {
  const { currentTrack } = useAudioPlayer();

  return (
    <div className={currentTrack ? "pb-[72px] md:pb-[88px]" : ""}>{children}</div>
  );
}

export default function AudioPlayerRoot({ children }: { children: React.ReactNode }) {
  return (
    <AudioPlayerProvider>
      <PlayerLayout>{children}</PlayerLayout>
      <GlobalMiniPlayer />
    </AudioPlayerProvider>
  );
}
