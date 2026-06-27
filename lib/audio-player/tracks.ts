import { ageGroups } from "@/lib/slokas";
import { buildChapters } from "./chapters";
import type { AudioTrack } from "./types";

function slokaToTrack(
  sloka: (typeof ageGroups)[0]["slokas"][0],
  group: (typeof ageGroups)[0]
): AudioTrack | null {
  if (!sloka.audioFile) return null;
  return {
    id: sloka.id,
    title: sloka.title,
    subtitle: sloka.badge ?? group.label,
    src: sloka.audioFile,
    groupId: group.id,
    groupLabel: group.label,
    groupEmoji: group.emoji,
    groupColor: group.color,
    sanskrit: sloka.sanskrit,
    transliteration: sloka.transliteration,
    chapters: buildChapters(sloka),
  };
}

export function getAllTracks(): AudioTrack[] {
  return ageGroups.flatMap((group) =>
    group.slokas
      .map((sloka) => slokaToTrack(sloka, group))
      .filter((t): t is AudioTrack => t !== null)
  );
}

export function getTrackById(id: string): AudioTrack | undefined {
  return getAllTracks().find((t) => t.id === id);
}

export function getTracksForGroup(groupId: string): AudioTrack[] {
  const group = ageGroups.find((g) => g.id === groupId);
  if (!group) return [];
  return group.slokas
    .map((sloka) => slokaToTrack(sloka, group))
    .filter((t): t is AudioTrack => t !== null);
}

export function enrichTrackChapters(track: AudioTrack, duration: number): AudioTrack {
  if (track.chapters?.length) return track;
  const group = ageGroups.find((g) => g.id === track.groupId);
  const sloka = group?.slokas.find((s) => s.id === track.id);
  if (!sloka) return track;
  const chapters = buildChapters(sloka, duration);
  return chapters ? { ...track, chapters } : track;
}
