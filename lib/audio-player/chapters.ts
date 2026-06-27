import type { Sloka } from "@/data/slokas";
import type { AudioChapter } from "./types";

/** Optional manual chapter timestamps (seconds) keyed by sloka id */
const CHAPTER_TIMESTAMPS: Record<string, number[]> = {
  "g2-shankaracharya-varyam": [0, 45, 90, 135, 180, 225],
  "g2-dakshinamurti-pancharatnam": [0, 60, 120, 180, 240],
  "g2-maha-periyava-panchakam": [0, 50, 100, 150, 200],
  "g3-dakshinamurti-stotram": [0, 90, 180, 270, 360, 450, 540, 630, 720, 810],
};

function parseVerseCount(sanskrit: string): number {
  const matches = sanskrit.match(/॥[\d०-९]+॥/g);
  return matches?.length ?? 0;
}

/** Build chapters from verse markers; uses manual timestamps or even splits when duration known */
export function buildChapters(sloka: Sloka, duration?: number): AudioChapter[] | undefined {
  const verseCount = parseVerseCount(sloka.sanskrit);
  if (verseCount < 2) return undefined;

  const manual = CHAPTER_TIMESTAMPS[sloka.id];
  if (manual?.length) {
    return manual.map((startTime, i) => ({
      id: `${sloka.id}-v${i + 1}`,
      title: `Verse ${i + 1}`,
      startTime,
    }));
  }

  if (!duration || duration <= 0) return undefined;

  const segment = duration / verseCount;
  return Array.from({ length: verseCount }, (_, i) => ({
    id: `${sloka.id}-v${i + 1}`,
    title: `Verse ${i + 1}`,
    startTime: i * segment,
  }));
}
