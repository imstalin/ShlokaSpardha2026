"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ageGroups } from "@/lib/slokas";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";
import { useReducedMotion } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";

const DIFFICULTY: Record<string, string> = {
  g1: "Beginner",
  g2: "Intermediate",
  g3: "Advanced",
};

interface AgeGroupSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
  completedIds: Set<string>;
}

export default function AgeGroupSelector({
  selectedId,
  onSelect,
  completedIds,
}: AgeGroupSelectorProps) {
  const reduced = useReducedMotion();

  return (
    <ModernSection id="slokas">
      <SectionHeader
        eyebrow="Choose your path"
        title="Age-group learning paths"
        subtitle="Select an age group to explore slokas. Progress is saved automatically on this device."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        {ageGroups.map((group, i) => {
          const completedInGroup = group.slokas.filter((s) => completedIds.has(s.id)).length;
          const total = group.slokas.length;
          const pct = total ? Math.round((completedInGroup / total) * 100) : 0;
          const selected = selectedId === group.id;

          return (
            <motion.button
              key={group.id}
              type="button"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              onClick={() => {
                if (group.id !== selectedId) {
                  trackEvent("age_group_select", {
                    age_group: group.id,
                    site_version: "modern",
                  });
                }
                onSelect(group.id);
              }}
              aria-pressed={selected}
              aria-label={`${group.title}, ${total} slokas, ${pct}% practiced`}
              className="text-left"
            >
              <GlassCard
                className={`relative overflow-hidden p-5 transition-all ${
                  selected
                    ? "ring-2 ring-maroon/50 shadow-lg shadow-maroon/10"
                    : "hover:shadow-md"
                }`}
              >
                <div
                  className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20"
                  style={{ background: group.color }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-2xl" aria-hidden="true">
                      {group.emoji}
                    </span>
                    <span className="rounded-full bg-maroon/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-maroon">
                      {DIFFICULTY[group.id]}
                    </span>
                  </div>

                  <h3 className="font-devanagari text-lg font-bold text-maroon">{group.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{group.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink-soft">
                      {total} slokas · {group.reciteCount.split(" ")[0]} 
                    </span>
                    <ChevronRight
                      className={`h-4 w-4 text-maroon transition ${selected ? "rotate-90" : ""}`}
                    />
                  </div>

                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-[11px] font-semibold">
                      <span className="text-ink-soft">Practice progress</span>
                      <span className="text-tulsi">
                        {completedInGroup}/{total}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-maroon/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-tulsi to-gold"
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: reduced ? 0 : 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.button>
          );
        })}
      </div>
    </ModernSection>
  );
}
