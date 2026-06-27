export interface AudioChapter {
  id: string;
  title: string;
  startTime: number;
}

export interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  groupId: string;
  groupLabel: string;
  groupEmoji: string;
  groupColor: string;
  sanskrit: string;
  transliteration: string;
  chapters?: AudioChapter[];
}

export const PLAYBACK_SPEEDS = [0.75, 1, 1.25, 1.5, 2] as const;
export type PlaybackSpeed = (typeof PLAYBACK_SPEEDS)[number];

export const RECENTLY_PLAYED_KEY = "sloka-spardha-recently-played";
export const RECENTLY_PLAYED_MAX = 10;
