"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { addRecentlyPlayed, getRecentlyPlayed } from "@/lib/audio-player/recently-played";
import { enrichTrackChapters, getTrackById } from "@/lib/audio-player/tracks";
import type { AudioTrack, PlaybackSpeed } from "@/lib/audio-player/types";
import { PLAYBACK_SPEEDS } from "@/lib/audio-player/types";

interface AudioPlayerState {
  currentTrack: AudioTrack | null;
  queue: AudioTrack[];
  queueIndex: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  muted: boolean;
  playbackRate: PlaybackSpeed;
  isExpanded: boolean;
  panel: "queue" | "recent" | "chapters" | "lyrics" | null;
  recentlyPlayed: string[];
}

interface AudioPlayerActions {
  playTrack: (track: AudioTrack, queue?: AudioTrack[]) => void;
  playTrackById: (id: string, queue?: AudioTrack[]) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: PlaybackSpeed) => void;
  jumpToQueueIndex: (index: number) => void;
  jumpToChapter: (startTime: number) => void;
  setExpanded: (expanded: boolean) => void;
  togglePanel: (panel: NonNullable<AudioPlayerState["panel"]>) => void;
  closePanel: () => void;
}

type AudioPlayerContextValue = AudioPlayerState & AudioPlayerActions;

const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null);

const VOLUME_KEY = "sloka-spardha-player-volume";
const SPEED_KEY = "sloka-spardha-player-speed";

function readVolume(): number {
  if (typeof window === "undefined") return 0.85;
  const raw = localStorage.getItem(VOLUME_KEY);
  const n = raw ? parseFloat(raw) : 0.85;
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : 0.85;
}

function readSpeed(): PlaybackSpeed {
  if (typeof window === "undefined") return 1;
  const raw = localStorage.getItem(SPEED_KEY);
  const n = raw ? parseFloat(raw) : 1;
  return (PLAYBACK_SPEEDS as readonly number[]).includes(n) ? (n as PlaybackSpeed) : 1;
}

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [queue, setQueue] = useState<AudioTrack[]>([]);
  const [queueIndex, setQueueIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.85);
  const [muted, setMuted] = useState(false);
  const [playbackRate, setPlaybackRateState] = useState<PlaybackSpeed>(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [panel, setPanel] = useState<AudioPlayerState["panel"]>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<string[]>([]);

  useEffect(() => {
    setVolumeState(readVolume());
    setPlaybackRateState(readSpeed());
    setRecentlyPlayed(getRecentlyPlayed());

    const onRecentUpdate = () => setRecentlyPlayed(getRecentlyPlayed());
    window.addEventListener("sloka-recently-played-update", onRecentUpdate);
    return () => window.removeEventListener("sloka-recently-played-update", onRecentUpdate);
  }, []);

  const loadAndPlay = useCallback(async (track: AudioTrack) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentTrack?.id !== track.id || audio.src !== track.src) {
      audio.src = track.src;
      setCurrentTime(0);
      setDuration(0);
    }

    setCurrentTrack(track);
    addRecentlyPlayed(track.id);
    setRecentlyPlayed(getRecentlyPlayed());

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, [currentTrack?.id]);

  const playTrack = useCallback(
    (track: AudioTrack, newQueue?: AudioTrack[]) => {
      if (newQueue?.length) {
        setQueue(newQueue);
        const idx = newQueue.findIndex((t) => t.id === track.id);
        setQueueIndex(idx >= 0 ? idx : 0);
      } else if (!queue.length) {
        setQueue([track]);
        setQueueIndex(0);
      }
      void loadAndPlay(track);
    },
    [loadAndPlay, queue.length]
  );

  const playTrackById = useCallback(
    (id: string, newQueue?: AudioTrack[]) => {
      const track = getTrackById(id);
      if (track) playTrack(track, newQueue);
    },
    [playTrack]
  );

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, [currentTrack]);

  const playAtIndex = useCallback(
    (index: number) => {
      if (index < 0 || index >= queue.length) return;
      setQueueIndex(index);
      void loadAndPlay(queue[index]);
    },
    [loadAndPlay, queue]
  );

  const playNext = useCallback(() => {
    if (queueIndex < queue.length - 1) playAtIndex(queueIndex + 1);
  }, [playAtIndex, queue.length, queueIndex]);

  const playPrevious = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    if (queueIndex > 0) playAtIndex(queueIndex - 1);
  }, [playAtIndex, queueIndex]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((v: number) => {
    const clamped = Math.min(1, Math.max(0, v));
    setVolumeState(clamped);
    localStorage.setItem(VOLUME_KEY, String(clamped));
    if (clamped > 0) setMuted(false);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  const setPlaybackRate = useCallback((rate: PlaybackSpeed) => {
    setPlaybackRateState(rate);
    localStorage.setItem(SPEED_KEY, String(rate));
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, []);

  const jumpToQueueIndex = useCallback(
    (index: number) => playAtIndex(index),
    [playAtIndex]
  );

  const jumpToChapter = useCallback(
    (startTime: number) => seek(startTime),
    [seek]
  );

  const setExpanded = useCallback((expanded: boolean) => {
    setIsExpanded(expanded);
    if (!expanded) setPanel(null);
  }, []);

  const togglePanel = useCallback((p: NonNullable<AudioPlayerState["panel"]>) => {
    setPanel((cur) => (cur === p ? null : p));
    setIsExpanded(true);
  }, []);

  const closePanel = useCallback(() => setPanel(null), []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = muted ? 0 : volume;
    audio.playbackRate = playbackRate;
  }, [volume, muted, playbackRate]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setDuration(audio.duration);
      setCurrentTrack((t) => (t ? enrichTrackChapters(t, audio.duration) : t));
    };
    const onEnded = () => {
      setIsPlaying(false);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const value = useMemo<AudioPlayerContextValue>(
    () => ({
      currentTrack,
      queue,
      queueIndex,
      isPlaying,
      currentTime,
      duration,
      volume,
      muted,
      playbackRate,
      isExpanded,
      panel,
      recentlyPlayed,
      playTrack,
      playTrackById,
      togglePlay,
      playNext,
      playPrevious,
      seek,
      setVolume,
      toggleMute,
      setPlaybackRate,
      jumpToQueueIndex,
      jumpToChapter,
      setExpanded,
      togglePanel,
      closePanel,
    }),
    [
      currentTrack,
      queue,
      queueIndex,
      isPlaying,
      currentTime,
      duration,
      volume,
      muted,
      playbackRate,
      isExpanded,
      panel,
      recentlyPlayed,
      playTrack,
      playTrackById,
      togglePlay,
      playNext,
      playPrevious,
      seek,
      setVolume,
      toggleMute,
      setPlaybackRate,
      jumpToQueueIndex,
      jumpToChapter,
      setExpanded,
      togglePanel,
      closePanel,
    ]
  );

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} preload="metadata" className="hidden" />
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer(): AudioPlayerContextValue {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  return ctx;
}

export function useAudioPlayerOptional(): AudioPlayerContextValue | null {
  return useContext(AudioPlayerContext);
}
