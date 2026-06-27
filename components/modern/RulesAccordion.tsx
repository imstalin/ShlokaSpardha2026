"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ChevronDown, Users } from "lucide-react";
import { importantRules, parentRules, rules } from "@/data/rules";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";
import { useReducedMotion } from "@/lib/motion";

export default function RulesAccordion() {
  const reduced = useReducedMotion();
  const [openId, setOpenId] = useState<number | null>(importantRules[0]?.id ?? null);

  return (
    <ModernSection id="rules">
      <SectionHeader
        eyebrow="Guidelines"
        title="Competition rules"
        subtitle="Clear, fair guidelines for every child and family."
      />

      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {importantRules.slice(0, 3).map((rule) => (
          <GlassCard
            key={rule.id}
            className="border-gold/30 bg-gradient-to-br from-gold/10 to-white/30 p-4"
          >
            <AlertTriangle className="h-4 w-4 text-gold" aria-hidden="true" />
            <p className="mt-2 text-sm font-bold text-maroon">{rule.title}</p>
            <p className="mt-1 line-clamp-3 text-xs text-ink-soft">{rule.description}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Users className="h-5 w-5 text-tulsi" aria-hidden="true" />
          <h3 className="font-semibold text-maroon-dark">Rules for parents</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {parentRules.map((rule) => (
            <GlassCard key={rule.id} className="border-tulsi/20 bg-tulsi/5 p-4">
              <span className="text-[10px] font-bold uppercase tracking-wide text-tulsi">
                Parent guideline
              </span>
              <p className="mt-1 font-semibold text-maroon">{rule.title}</p>
              <p className="mt-2 text-sm text-ink-soft">{rule.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="space-y-2" role="list">
        {rules.map((rule) => {
          const isOpen = openId === rule.id;
          const isImportant = rule.category === "important";

          return (
            <div key={rule.id} role="listitem">
            <GlassCard className="overflow-hidden">
              <button
                type="button"
                className="flex w-full items-center gap-4 p-4 text-left"
                onClick={() => setOpenId(isOpen ? null : rule.id)}
                aria-expanded={isOpen}
                aria-controls={`rule-${rule.id}`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    isImportant ? "bg-gold text-maroon-dark" : "bg-maroon/10 text-maroon"
                  }`}
                >
                  {rule.id}
                </span>
                <span className="flex-1 font-semibold text-ink">{rule.title}</span>
                <ChevronDown
                  className={`h-5 w-5 text-maroon transition ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`rule-${rule.id}`}
                    initial={reduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/40 px-4 pb-4 pl-16 text-sm text-ink-soft">
                      {rule.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
            </div>
          );
        })}
      </div>
    </ModernSection>
  );
}
