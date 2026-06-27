"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHead, SectionWrapper } from "@/components/ui";
import { rules } from "@/data/rules";

export default function Rules() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggle = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <SectionWrapper id="rules">
      <SectionHead
        kicker="Guidelines"
        title="Competition rules"
        description="A few simple guidelines to keep things fair, fun, and meaningful for every child."
      />

      <div className="grid gap-3.5">
        {rules.map((rule) => {
          const isLong = rule.description.length > 120;
          const isOpen = expanded.has(rule.id) || !isLong;

          return (
            <motion.div
              key={rule.id}
              layout
              className="overflow-hidden rounded-[14px] border border-line bg-card"
            >
              <button
                type="button"
                className="flex w-full items-start gap-4 p-5 text-left"
                onClick={() => isLong && toggle(rule.id)}
                aria-expanded={isOpen}
                aria-controls={`rule-content-${rule.id}`}
              >
                <span
                  className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-maroon text-sm font-bold text-cream"
                  aria-hidden="true"
                >
                  {rule.id}
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-ink">{rule.title}</p>
                  {isLong && (
                    <span className="mt-1 inline-block text-xs font-semibold text-gold">
                      {isOpen ? "Tap to collapse" : "Tap to expand"}
                    </span>
                  )}
                </div>
                {isLong && (
                  <span className="text-maroon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                )}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`rule-content-${rule.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-[4.625rem] text-sm text-ink-soft">
                      {rule.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
