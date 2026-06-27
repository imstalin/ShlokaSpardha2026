"use client";

import { useCallback, useState } from "react";
import { ageGroups } from "@/lib/slokas";
import { aboutParagraphs, eventDetails, OWNER } from "@/data/event";
import { usePracticeStorage } from "@/lib/usePracticeStorage";
import Navbar from "@/components/modern/Navbar";
import HeroModern from "@/components/modern/HeroModern";
import EventTimeline from "@/components/modern/EventTimeline";
import PracticeDashboard from "@/components/modern/PracticeDashboard";
import AgeGroupSelector from "@/components/modern/AgeGroupSelector";
import SlokaLearningCard from "@/components/modern/SlokaLearningCard";
import RulesAccordion from "@/components/modern/RulesAccordion";
import RegistrationCard from "@/components/modern/RegistrationCard";
import EvaluationScoreCards from "@/components/modern/EvaluationScoreCards";
import PracticeAudio from "@/components/modern/PracticeAudio";
import Footer from "@/components/modern/Footer";
import { GlassCard, GradientOrb, ModernSection, SectionHeader } from "@/components/modern/ui";

export default function ModernHome() {
  const [selectedGroupId, setSelectedGroupId] = useState(ageGroups[0].id);
  const { completed, refresh } = usePracticeStorage();
  const selectedGroup = ageGroups.find((g) => g.id === selectedGroupId) ?? ageGroups[0];

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="modern-theme relative min-h-screen overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-cream via-[#fff5e6] to-[#f0ebe0]"
        aria-hidden="true"
      />
      <GradientOrb className="fixed left-0 top-1/4 h-96 w-96 opacity-40" color="gold" />
      <GradientOrb className="fixed bottom-0 right-0 h-80 w-80 opacity-30" color="green" />

      <Navbar />

      <main>
        <HeroModern
          onRegister={() => scrollTo("register")}
          onExploreSlokas={() => scrollTo("slokas")}
          onPracticeTracker={() => scrollTo("practice-dashboard")}
        />

        <EventTimeline />

        <PracticeDashboard
          selectedGroupId={selectedGroupId}
          completedIds={completed}
          onGoToSlokas={() => scrollTo("slokas")}
          onRegister={() => scrollTo("register")}
        />

        <AgeGroupSelector
          selectedId={selectedGroupId}
          onSelect={setSelectedGroupId}
          completedIds={completed}
        />

        <ModernSection id="sloka-list" className="pt-0">
          <SectionHeader
            eyebrow={selectedGroup.emoji + " " + selectedGroup.title}
            title="Sloka learning cards"
            subtitle={selectedGroup.reciteCount}
          />
          <div className="space-y-3">
            {selectedGroup.slokas.map((sloka, i) => (
              <SlokaLearningCard key={sloka.id} sloka={sloka} index={i} onUpdate={refresh} />
            ))}
          </div>
          {selectedGroup.note && (
            <GlassCard className="mt-6 border-tulsi/20 bg-tulsi/5 p-4 text-sm text-tulsi">
              💡 {selectedGroup.note}
            </GlassCard>
          )}
        </ModernSection>

        <ModernSection id="about">
          <SectionHeader
            eyebrow="About"
            title="Why we gather this Guru Purnima"
            subtitle="A heartfelt offering to our Gurus through the voices of our children."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <GlassCard className="space-y-4 p-6">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-sm leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </GlassCard>
            <GlassCard className="divide-y divide-white/40 p-6">
              {eventDetails.map((d) => (
                <div key={d.label} className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {d.label}
                  </span>
                  <span className="text-right text-sm font-medium text-maroon-dark">{d.value}</span>
                </div>
              ))}
            </GlassCard>
          </div>

          <GlassCard className="mt-4 p-6">
            <h3 className="mb-3 text-base font-semibold text-maroon-dark">About the owner</h3>
            <p className="text-sm leading-relaxed text-ink-soft">{OWNER.bio}</p>
          </GlassCard>
        </ModernSection>

        <RulesAccordion />
        <RegistrationCard />
        <EvaluationScoreCards />
        {/* <PracticeAudio /> */}
      </main>

      <Footer />
    </div>
  );
}
