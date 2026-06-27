"use client";

import { evaluationCriteria, totalScoreExplanation } from "@/data/evaluation";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";

function ScoreRing({ weight, label }: { weight: number; label: string }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (weight / 100) * circumference;

  return (
    <div className="relative flex h-24 w-24 items-center justify-center" aria-hidden="true">
      <svg className="-rotate-90" width="96" height="96" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(122,31,43,0.12)" strokeWidth="8" />
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke="url(#scoreGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8862B" />
            <stop offset="100%" stopColor="#7A1F2B" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-lg font-bold text-maroon">{label}</span>
    </div>
  );
}

export default function EvaluationScoreCards() {
  return (
    <ModernSection id="evaluation">
      <SectionHeader
        eyebrow="Judging criteria"
        title="How recitations are scored"
        subtitle="Judges assess each child warmly and constructively using weighted criteria."
      />

      <GlassCard className="mb-8 p-6">
        <p className="text-sm leading-relaxed text-ink-soft">{totalScoreExplanation}</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="font-devanagari text-3xl font-bold text-maroon">100%</div>
          <span className="text-sm text-ink-soft">total weighted score across all criteria</span>
        </div>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {evaluationCriteria.map((criterion) => {
          const Icon = criterion.icon;
          return (
            <GlassCard key={criterion.id} className="p-5">
              <div className="flex items-start gap-4">
                <ScoreRing weight={criterion.weight} label={criterion.weightLabel} />
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                    <h3 className="font-semibold text-maroon-dark">{criterion.title}</h3>
                  </div>
                  <p className="text-sm text-ink-soft">{criterion.description}</p>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </ModernSection>
  );
}
