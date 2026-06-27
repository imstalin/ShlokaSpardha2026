"use client";

import { useEffect, useState } from "react";
import { Headphones, RefreshCw, Volume2 } from "lucide-react";
import { ageGroups } from "@/lib/slokas";
import { practiceAudioSteps } from "@/data/evaluation";
import SlokaPlayButton from "@/components/player/SlokaPlayButton";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";

const STEP_ICONS = [Headphones, RefreshCw, Volume2];

async function audioExists(path: string): Promise<boolean> {
  try {
    const res = await fetch(path, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

export default function PracticeAudio() {
  const [available, setAvailable] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const withAudio = ageGroups.flatMap((g) =>
      g.slokas.filter((s) => s.audioFile).map((s) => ({ id: s.id, path: s.audioFile! }))
    );
    if (!withAudio.length) {
      setChecked(true);
      return;
    }
    Promise.all(withAudio.map(async ({ id, path }) => [id, await audioExists(path)] as const)).then(
      (r) => {
        setAvailable(Object.fromEntries(r));
        setChecked(true);
      }
    );
  }, []);

  const hasAny = Object.values(available).some(Boolean);

  return (
    <ModernSection id="practice-audio">
      <SectionHeader
        eyebrow="Practice at home"
        title="Guided audio recordings"
        subtitle="Listen, repeat, and build confidence before competition day."
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {practiceAudioSteps.map((step, i) => {
          const Icon = STEP_ICONS[i] ?? Headphones;
          return (
            <GlassCard key={step.id} className="p-5">
              <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-semibold text-maroon">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
            </GlassCard>
          );
        })}
      </div>

      {checked && !hasAny ? (
        <GlassCard className="p-10 text-center">
          <Volume2 className="mx-auto h-10 w-10 text-gold/60" aria-hidden="true" />
          <h3 className="mt-4 font-devanagari text-xl font-bold text-maroon">Coming soon</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
            Add MP3s to{" "}
            <code className="rounded bg-white/60 px-1.5 py-0.5 text-xs">public/audio/</code> and
            set filenames in{" "}
            <code className="rounded bg-white/60 px-1.5 py-0.5 text-xs">data/audio.ts</code>.
            Check the WhatsApp group for updates.
          </p>
        </GlassCard>
      ) : (
        <div className="grid gap-6">
          {ageGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-maroon">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: group.color }}
                  aria-hidden="true"
                />
                {group.title}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.slokas.map((sloka) => {
                  const ready = sloka.audioFile && available[sloka.id];
                  return (
                    <GlassCard key={sloka.id} className="p-4">
                      <p className="text-sm font-semibold text-maroon-dark">{sloka.title}</p>
                      {ready ? (
                        <SlokaPlayButton
                          sloka={sloka}
                          groupId={group.id}
                          variant="modern"
                          className="mt-3"
                        />
                      ) : (
                        <p className="mt-2 text-xs text-ink-soft">Coming soon</p>
                      )}
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <GlassCard className="mt-6 border-maroon/20 bg-maroon/5 p-4 text-sm text-maroon-dark">
        These recordings are for practice and guidance only — not part of registration or submission.
      </GlassCard>
    </ModernSection>
  );
}
