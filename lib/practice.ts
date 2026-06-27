const COMPLETED_KEY = "sloka-spardha-practice";
const FAVORITES_KEY = "sloka-spardha-favorites";
const PRACTICE_EVENT = "sloka-practice-update";

function readSet(key: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function writeSet(key: string, set: Set<string>) {
  localStorage.setItem(key, JSON.stringify([...set]));
  window.dispatchEvent(new CustomEvent(PRACTICE_EVENT));
}

function notify() {
  window.dispatchEvent(new CustomEvent(PRACTICE_EVENT));
}

export function getPracticeCompleted(): Set<string> {
  return readSet(COMPLETED_KEY);
}

export function togglePracticeCompleted(slokaId: string): boolean {
  const completed = getPracticeCompleted();
  if (completed.has(slokaId)) completed.delete(slokaId);
  else completed.add(slokaId);
  writeSet(COMPLETED_KEY, completed);
  return completed.has(slokaId);
}

export function isPracticeCompleted(slokaId: string): boolean {
  return getPracticeCompleted().has(slokaId);
}

export function getFavorites(): Set<string> {
  return readSet(FAVORITES_KEY);
}

export function toggleFavorite(slokaId: string): boolean {
  const favorites = getFavorites();
  if (favorites.has(slokaId)) favorites.delete(slokaId);
  else favorites.add(slokaId);
  writeSet(FAVORITES_KEY, favorites);
  return favorites.has(slokaId);
}

export function isFavorite(slokaId: string): boolean {
  return getFavorites().has(slokaId);
}

export { PRACTICE_EVENT, notify };
