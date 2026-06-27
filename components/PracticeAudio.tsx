"use client";

import { useEffect, useState } from "react";
import { SectionHead, SectionWrapper } from "@/components/ui";
import { ageGroups } from "@/lib/slokas";

const STEPS = [
  {
    icon: "🎧",
    title: "Listen and repeat.",
    text: "Audio recordings of each sloka (across all three age groups) will be posted in the Mandali's WhatsApp group to guide children in learning correct pronunciation and rhythm.",
  },
  {
    icon: "🔁",
    title: "Practise at your own pace.",
    text: "Children can listen as many times as needed in the days leading up to the competition, alongside parents or on their own.",
  },
];

async function checkAudioExists(path: string): Promise<boolean> {
  try {
    const res = await fetch(path, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

export default function PracticeAudio() {
  const [availableAudio, setAvailableAudio] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const slokasWithAudio = ageGroups.flatMap((g) =>
      g.slokas.filter((s) => s.audioFile).map((s) => ({ id: s.id, path: s.audioFile! }))
    );

    if (slokasWithAudio.length === 0) {
      setChecked(true);
      return;
    }

    Promise.all(
      slokasWithAudio.map(async ({ id, path }) => {
        const exists = await checkAudioExists(path);
        return [id, exists] as const;
      })
    ).then((results) => {
      setAvailableAudio(Object.fromEntries(results));
      setChecked(true);
    });
  }, []);

  const hasAnyAudio = Object.values(availableAudio).some(Boolean);

  return (
    <SectionWrapper id="practice-audio">
      <SectionHead
        kicker="For practice at home"
        title="Practice audio for all slokas"
        description="To help every child practise correct pronunciation and rhythm, Bhakthi Sudha Mandali will post audio recordings of all the slokas listed above — for every age group."
      />

      <div className="grid gap-3.5">
        {STEPS.map((step) => (
          <div
            key={step.title}
            className="flex gap-4 rounded-[14px] border border-line bg-card p-5"
          >
            <span className="shrink-0 text-[22px]" aria-hidden="true">
              {step.icon}
            </span>
            <p className="text-sm text-ink-soft">
              <strong className="text-ink">{step.title}</strong> {step.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-7">
        {checked && !hasAnyAudio ? (
          <div className="rounded-[14px] border border-line bg-card p-8 text-center">
            <p className="mb-2 text-3xl" aria-hidden="true">
              🎙️
            </p>
            <h3 className="font-devanagari mb-2 text-lg font-bold text-maroon">Coming soon</h3>
            <p className="mx-auto max-w-md text-sm text-ink-soft">
              Practice audio recordings will appear here once they are uploaded to{" "}
              <code className="rounded bg-cream px-1.5 py-0.5 text-xs">/public/audio</code>.
              Check the WhatsApp group for updates.
            </p>
          </div>
        ) : (
          ageGroups.map((group) => (
            <div key={group.id} className="mb-6">
              <h3 className="font-devanagari mb-3 flex items-center gap-2.5 text-[17px] font-bold text-maroon">
                <span
                  className="h-[26px] w-[26px] rounded-full"
                  style={{ background: group.color }}
                  aria-hidden="true"
                />
                {group.title}
                <span
                  className={`ml-auto rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                    group.slokas.some((s) => s.audioFile && availableAudio[s.id])
                      ? "bg-tulsi/10 text-tulsi"
                      : "bg-maroon/8 text-maroon-dark"
                  }`}
                >
                  {group.slokas.some((s) => s.audioFile && availableAudio[s.id])
                    ? "Available"
                    : "Coming soon"}
                </span>
              </h3>
              <div className="grid gap-2">
                {group.slokas.map((sloka) => {
                  const audioReady = sloka.audioFile && availableAudio[sloka.id];
                  return (
                    <div
                      key={sloka.id}
                      className="rounded-xl border border-line bg-card p-4"
                    >
                      <p className="mb-2 text-sm font-bold text-maroon-dark">{sloka.title}</p>
                      {audioReady ? (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <audio controls className="h-[38px] w-full" src={sloka.audioFile} preload="none">
                          Your browser does not support audio playback.
                        </audio>
                      ) : (
                        <p className="text-xs text-ink-soft">Coming soon</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 flex gap-2.5 rounded-[14px] border border-maroon/20 bg-maroon/7 p-4 text-[13.5px] text-maroon-dark">
        🎙️ These recordings are for practice and guidance only — they are not part of registration
        or submission.
      </div>
    </SectionWrapper>
  );
}
