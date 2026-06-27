"use client";

import { AlertCircle, ArrowRight, BookMarked, Sparkles, Target } from "lucide-react";
import { ageGroups } from "@/lib/slokas";
import { EVENT } from "@/data/event";
import CountdownTimer from "@/components/modern/CountdownTimer";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";

interface PracticeDashboardProps {
  selectedGroupId: string;
  completedIds: Set<string>;
  onGoToSlokas: () => void;
  onRegister: () => void;
}

export default function PracticeDashboard({
  selectedGroupId,
  completedIds,
  onGoToSlokas,
  onRegister,
}: PracticeDashboardProps) {
  const group = ageGroups.find((g) => g.id === selectedGroupId) ?? ageGroups[0];
  const completedInGroup = group.slokas.filter((s) => completedIds.has(s.id));
  const nextSloka = group.slokas.find((s) => !completedIds.has(s.id));
  const totalAll = ageGroups.reduce((n, g) => n + g.slokas.length, 0);
  const completedAll = completedIds.size;

  return (
    <ModernSection id="practice-dashboard">
      <SectionHeader
        eyebrow="Parent dashboard"
        title="My child's practice progress"
        subtitle="Track sloka practice at home. Progress is saved locally on this device."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="p-6 lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-ink-soft">Overall progress</p>
              <p className="mt-1 font-devanagari text-4xl font-bold text-maroon">
                {completedAll}
                <span className="text-xl text-ink-soft"> / {totalAll}</span>
              </p>
              <p className="mt-1 text-sm text-ink-soft">slokas marked as practised</p>
            </div>
            <div className="rounded-xl bg-tulsi/10 px-4 py-3 text-center">
              <Sparkles className="mx-auto h-5 w-5 text-tulsi" aria-hidden="true" />
              <p className="mt-1 text-xs font-semibold text-tulsi">
                {group.emoji} {group.title}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <StatCard
              icon={BookMarked}
              label="Completed in group"
              value={`${completedInGroup.length} / ${group.slokas.length}`}
            />
            <StatCard
              icon={Target}
              label="Suggested next"
              value={nextSloka?.title ?? "All done! 🎉"}
              small
            />
          </div>

          {nextSloka && (
            <button
              type="button"
              onClick={onGoToSlokas}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon transition hover:text-maroon-dark"
            >
              Continue with {nextSloka.title}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </GlassCard>

        <GlassCard className="flex flex-col p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-maroon">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            Registration reminder
          </div>
          <p className="mt-2 text-sm text-ink-soft">
            Register before {EVENT.registrationDeadline} via the Google Form in the WhatsApp group.
          </p>
          <div className="mt-4 flex-1">
            <CountdownTimer
              targetISO={EVENT.registrationDeadlineISO}
              label="Deadline"
              compact
            />
          </div>
          <button
            type="button"
            onClick={onRegister}
            className="mt-5 w-full rounded-full bg-maroon py-3 text-sm font-bold text-cream transition hover:bg-maroon-dark active:scale-[0.98]"
          >
            Register now
          </button>
        </GlassCard>
      </div>
    </ModernSection>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  small,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/50 bg-white/40 p-4">
      <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</p>
      <p className={`mt-1 font-semibold text-maroon-dark ${small ? "text-sm" : "text-lg"}`}>
        {value}
      </p>
    </div>
  );
}
