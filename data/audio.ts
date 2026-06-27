/**
 * Practice audio — update audioFile for each sloka here (like googleFormUrl in event.ts).
 *
 * 1. Add files to public/audio/
 * 2. Set audioFile to filename (e.g. "g1-guru-brahma.mp3") or full path ("/audio/...")
 * 3. Leave undefined for "Coming soon"
 *
 * Supported formats: .mp3 (best), .ogg, .webm — .opus may not work on all browsers.
 */

import type { Sloka } from "./slokas";

/** Base folder under public/ when audioFile is a filename only */
export const AUDIO_BASE_PATH = "/audio";

/**
 * Sloka id → audioFile (same field as Sloka.audioFile on each card)
 * Keys must match sloka id in data/slokas.ts exactly.
 */
export const SLOKA_AUDIO: Record<string, Sloka["audioFile"]> = {
  // ── 3–5 years ──────────────────────────────────────────────
  "g1-guru-brahma": "g1-guru-brahma.mp4",
  "g1-dakshinamoorthy": "g1-dakshinamoorthy.mp4",
  "g1-gurureva-gati": "g1-gurureva-gati.mp4",
  "g1-akhanda-mandalakaram": "g1-akhanda-mandalakaram.mp4",
  "g1-agnyana-timiranthasya": "g1-agnyana-timiranthasya.mp4",

  // ── 6–10 years ─────────────────────────────────────────────
  "g2-shankaracharya-varyam": "g2-shankaracharya-varyam.mp4",
  "g2-dakshinamurti-pancharatnam": "g2-dakshinamurti-pancharatnam.mp4",
  "g2-bhagavannama-bhodendra-pancharatnam": "g2-bhagavannama-bhodendra-pancharatnam.mp4", 
  "g2-shirdi-sai-pancharatnam": "g2-shirdi-sai-pancharatnam.mp4",
  "g2-maha-periyava-panchakam": "g2-maha-periyava-panchakam.mp4", 

  // ── 11–14 years ────────────────────────────────────────────
  "g3-dakshinamurti-stotram": "g3-dakshinamurti-stotram.mp4",
  "g3-totakashtakam": "g3-totakashtakam.mp4",
  "g3-guru-ashtakam": "g3-guru-ashtakam.mp4",
  "g3-guru-paduka-stotram": "g3-guru-paduka-stotram.mp4",
  "g3-shirdi-sainatha-ashtakam": "g3-shirdi-sainatha-ashtakam.mp4",
};

/** Resolve sloka id to public audioFile URL for the HTML audio player */
export function getSlokaAudioFile(slokaId: string): string | undefined {
  const audioFile = SLOKA_AUDIO[slokaId];
  if (!audioFile) return undefined;
  if (audioFile.startsWith("/")) return audioFile;
  return `${AUDIO_BASE_PATH}/${audioFile}`;
}

/** @deprecated Use getSlokaAudioFile */
export function getAudioUrl(slokaId: string): string | undefined {
  return getSlokaAudioFile(slokaId);
}
