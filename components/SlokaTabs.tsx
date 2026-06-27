"use client";

import { useState } from "react";
import { SectionHead, SectionWrapper } from "@/components/ui";
import { ageGroups } from "@/lib/slokas";
import { useMediaQuery } from "@/lib/hooks";
import SlokaCard from "@/components/SlokaCard";

function AgeGroupPanel({
  group,
  isMobileAccordion,
  defaultOpen = false,
}: {
  group: (typeof ageGroups)[number];
  isMobileAccordion: boolean;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  if (isMobileAccordion) {
    return (
      <div className="mb-8 border-b border-dashed border-line pb-7 last:mb-0 last:border-0 last:pb-0">
        <button
          type="button"
          className="flex w-full items-center gap-3 text-left"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`panel-${group.id}`}
        >
          <span
            className="h-[38px] w-[38px] shrink-0 rounded-full"
            style={{ background: group.color }}
            aria-hidden="true"
          />
          <div className="flex-1">
            <h3 className="font-devanagari text-xl text-maroon">{group.title}</h3>
            <span className="block text-[13px] font-medium text-ink-soft">{group.subtitle}</span>
          </div>
          <span className="text-maroon" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>

        {open && (
          <div id={`panel-${group.id}`} className="mt-4" role="region">
            <p className="mb-4 text-sm font-semibold text-gold">{group.reciteCount}</p>
            {group.slokas.map((sloka, i) => (
              <SlokaCard key={sloka.id} sloka={sloka} index={i} />
            ))}
            {group.note && (
              <div className="mt-4 flex gap-2.5 rounded-xl border border-tulsi/25 bg-tulsi/8 p-4 text-[13.5px] text-tulsi">
                💡 {group.note}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div role="tabpanel" id={`panel-${group.id}`} aria-labelledby={`tab-${group.id}`}>
      <div className="mb-4 flex items-center gap-3">
        <span
          className="h-[38px] w-[38px] shrink-0 rounded-full"
          style={{ background: group.color }}
          aria-hidden="true"
        />
        <div>
          <h3 className="font-devanagari text-xl text-maroon">{group.title}</h3>
          <span className="block text-[13px] font-medium text-ink-soft">{group.subtitle}</span>
        </div>
      </div>
      <p className="mb-4 text-sm font-semibold text-gold">{group.reciteCount}</p>
      {group.slokas.map((sloka, i) => (
        <SlokaCard key={sloka.id} sloka={sloka} index={i} />
      ))}
      {group.note && (
        <div className="mt-4 flex gap-2.5 rounded-xl border border-tulsi/25 bg-tulsi/8 p-4 text-[13.5px] text-tulsi">
          💡 {group.note}
        </div>
      )}
    </div>
  );
}

export default function SlokaTabs() {
  const [activeTab, setActiveTab] = useState(ageGroups[0].id);
  const isMobileQuery = useMediaQuery("(max-width: 700px)");
  const isMobile = isMobileQuery === true;

  return (
    <SectionWrapper id="slokas">
      <SectionHead
        kicker="Age-wise sloka list"
        title="Slokas for each age group"
        description="Please find the sloka list by age group below. For 3 to 5 years, children may recite any 2 slokas from the list. For 6 to 10 years and 11 to 14 years, children may recite any 1 sloka from the list."
      />

      {isMobileQuery === false && (
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Age groups">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`tab-${group.id}`}
              aria-selected={activeTab === group.id}
              aria-controls={`panel-${group.id}`}
              onClick={() => setActiveTab(group.id)}
              className={`rounded-full border-[1.5px] px-4 py-2.5 text-[13.5px] font-bold transition ${
                activeTab === group.id
                  ? "border-maroon bg-maroon text-cream"
                  : "border-line bg-cream text-ink-soft hover:border-maroon/30"
              }`}
            >
              {group.emoji} {group.label}
            </button>
          ))}
        </div>
      )}

      {isMobileQuery === null ? null : isMobile ? (
        ageGroups.map((group, i) => (
          <AgeGroupPanel
            key={group.id}
            group={group}
            isMobileAccordion
            defaultOpen={i === 0}
          />
        ))
      ) : (
        ageGroups
          .filter((g) => g.id === activeTab)
          .map((group) => (
            <AgeGroupPanel key={group.id} group={group} isMobileAccordion={false} />
          ))
      )}
    </SectionWrapper>
  );
}
