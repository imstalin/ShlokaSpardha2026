import { RECENTLY_PLAYED_KEY, RECENTLY_PLAYED_MAX } from "./types";

export function getRecentlyPlayed(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RECENTLY_PLAYED_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function addRecentlyPlayed(trackId: string): string[] {
  const prev = getRecentlyPlayed().filter((id) => id !== trackId);
  const next = [trackId, ...prev].slice(0, RECENTLY_PLAYED_MAX);
  localStorage.setItem(RECENTLY_PLAYED_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("sloka-recently-played-update"));
  return next;
}
