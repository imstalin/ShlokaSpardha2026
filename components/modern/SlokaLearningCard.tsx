"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Copy, Heart, Volume2 } from "lucide-react";
import type { Sloka } from "@/data/slokas";
import { GlassCard } from "@/components/modern/ui";
import { copyToClipboard } from "@/lib/share";
import {
  isFavorite,
  isPracticeCompleted,
  toggleFavorite,
  togglePracticeCompleted,
} from "@/lib/practice";
import SlokaPlayButton from "@/components/player/SlokaPlayButton";
import { useReducedMotion } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";

interface SlokaLearningCardProps {
  sloka: Sloka;
  index: number;
  groupId: string;
  onUpdate?: () => void;
}

export default function SlokaLearningCard({ sloka, index, groupId, onUpdate }: SlokaLearningCardProps) {
  const reduced = useReducedMotion();
  const [expanded, setExpanded] = useState(index === 0);
  const [showTranslit, setShowTranslit] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCompleted(isPracticeCompleted(sloka.id));
    setFavorite(isFavorite(sloka.id));
  }, [sloka.id]);

  const handleCopy = async () => {
    const text = `${sloka.title}\n\n${sloka.sanskrit}\n\n${sloka.transliteration}`;
    if (await copyToClipboard(text)) {
      trackEvent("copy_sloka", { sloka_id: sloka.id, age_group: groupId, site_version: "modern" });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePractice = () => {
    const next = togglePracticeCompleted(sloka.id);
    setCompleted(next);
    if (next) {
      trackEvent("practice_complete", {
        sloka_id: sloka.id,
        age_group: groupId,
        site_version: "modern",
      });
    }
    onUpdate?.();
  };

  const handleFavorite = () => {
    const next = toggleFavorite(sloka.id);
    setFavorite(next);
    trackEvent("favorite_toggle", {
      sloka_id: sloka.id,
      age_group: groupId,
      favorited: next,
      site_version: "modern",
    });
  };

  return (
    <GlassCard className="overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center gap-3 p-5 text-left"
        onClick={() =>
          setExpanded((v) => {
            if (!v) {
              trackEvent("sloka_expand", {
                sloka_id: sloka.id,
                age_group: groupId,
                site_version: "modern",
              });
            }
            return !v;
          })
        }
        aria-expanded={expanded}
        aria-controls={`sloka-body-${sloka.id}`}
      >
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            completed ? "bg-tulsi text-cream" : "bg-maroon/10 text-maroon"
          }`}
        >
          {completed ? <Check className="h-4 w-4" /> : index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold text-maroon-dark">{sloka.title}</p>
          {sloka.badge && (
            <span className="text-[11px] font-medium text-gold">{sloka.badge}</span>
          )}
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-maroon transition ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`sloka-body-${sloka.id}`}
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/40 px-5 pb-5 pt-4">
              <p className="font-sanskrit whitespace-pre-line text-lg leading-[1.9] text-ink">
                {sloka.sanskrit}
              </p>

              {showTranslit && (
                <motion.p
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 whitespace-pre-line text-sm italic leading-relaxed text-ink-soft"
                >
                  {sloka.transliteration}
                </motion.p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                <ActionChip
                  onClick={() => setShowTranslit((v) => !v)}
                  active={showTranslit}
                  label={showTranslit ? "Hide transliteration" : "Transliteration"}
                />
                <ActionChip onClick={handleCopy} label={copied ? "Copied!" : "Copy"} icon={Copy} />
                <ActionChip
                  onClick={handlePractice}
                  active={completed}
                  label={completed ? "Practised" : "Mark practised"}
                  icon={Check}
                />
                <ActionChip
                  onClick={handleFavorite}
                  active={favorite}
                  label={favorite ? "Favourited" : "Favourite"}
                  icon={Heart}
                />
              </div>

              <div className="mt-4 rounded-xl border border-white/50 bg-white/40 p-4">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-maroon">
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Practice audio
                </p>
                {sloka.audioFile ? (
                  <SlokaPlayButton
                    sloka={sloka}
                    groupId={groupId}
                    variant="modern"
                  />
                ) : (
                  <p className="text-xs text-ink-soft">
                    Coming soon — set in <code className="rounded bg-cream px-1">data/audio.ts</code>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}

function ActionChip({
  onClick,
  label,
  active,
  icon: Icon,
}: {
  onClick: () => void;
  label: string;
  active?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition active:scale-95 ${
        active
          ? "bg-tulsi/15 text-tulsi ring-1 ring-tulsi/30"
          : "bg-white/60 text-maroon hover:bg-white/80"
      }`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {label}
    </button>
  );
}
