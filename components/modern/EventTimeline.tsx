"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Mic, Trophy } from "lucide-react";
import { eventTimeline, type TimelineEvent } from "@/data/event";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";
import { useReducedMotion } from "@/lib/motion";

const ICONS = {
  registration: Calendar,
  "audio-check": Mic,
  competition: Mic,
  results: Trophy,
};

function resolveStatus(dateISO: string): TimelineEvent["status"] {
  const now = Date.now();
  const time = new Date(dateISO).getTime();
  if (now > time + 3600000) return "past";
  if (now >= time - 86400000) return "active";
  return "upcoming";
}

export default function EventTimeline() {
  const reduced = useReducedMotion();
  const [events, setEvents] = useState(eventTimeline);

  useEffect(() => {
    setEvents(eventTimeline.map((e) => ({ ...e, status: resolveStatus(e.dateISO) })));
  }, []);

  return (
    <ModernSection id="timeline">
      <SectionHeader
        eyebrow="Event journey"
        title="Your path to Guru Purnima"
        subtitle="Key milestones from registration through the competition day."
      />

      <div className="relative">
        <div
          className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/50 via-maroon/30 to-tulsi/50 sm:block"
          aria-hidden="true"
        />

        <div className="space-y-4">
          {events.map((event, i) => {
            const Icon = ICONS[event.id as keyof typeof ICONS] ?? Calendar;
            const isActive = event.status === "active";

            return (
              <motion.div
                key={event.id}
                initial={reduced ? false : { opacity: 0, x: -16 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard
                  className={`relative p-5 sm:pl-16 ${
                    isActive ? "ring-2 ring-gold/40" : ""
                  } ${event.status === "past" ? "opacity-70" : ""}`}
                >
                  <div
                    className={`absolute left-4 top-6 hidden h-4 w-4 rounded-full border-2 sm:block ${
                      event.status === "past"
                        ? "border-tulsi bg-tulsi"
                        : isActive
                          ? "border-gold bg-gold animate-pulse"
                          : "border-maroon/30 bg-white"
                    }`}
                    aria-hidden="true"
                  />

                  <div className="flex gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isActive
                          ? "bg-gradient-to-br from-gold to-gold-light text-maroon-dark"
                          : "bg-maroon/10 text-maroon"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-maroon-dark">{event.title}</h3>
                        {event.status === "past" && (
                          <CheckCircle2 className="h-4 w-4 text-tulsi" aria-label="Completed" />
                        )}
                        {isActive && (
                          <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                            Now
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-gold">{event.date}</p>
                      <p className="mt-2 text-sm text-ink-soft">{event.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </ModernSection>
  );
}
