import { ageGroups as baseAgeGroups, type AgeGroup } from "@/data/slokas";
import { getSlokaAudioFile } from "@/data/audio";

export type { AgeGroup, Sloka } from "@/data/slokas";

function attachAudio(groups: AgeGroup[]): AgeGroup[] {
  return groups.map((group) => ({
    ...group,
    slokas: group.slokas.map((sloka) => ({
      ...sloka,
      // Prefer inline sloka.audioFile if set in slokas.ts; otherwise use data/audio.ts
      audioFile: sloka.audioFile ?? getSlokaAudioFile(sloka.id),
    })),
  }));
}

/** Age groups with audioFile merged from data/audio.ts */
export const ageGroups = attachAudio(baseAgeGroups);
