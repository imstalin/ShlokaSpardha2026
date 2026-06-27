import { SectionHead, SectionWrapper } from "@/components/ui";
import { prizes } from "@/data/evaluation";

export default function Prizes() {
  return (
    <SectionWrapper id="prizes">
      <SectionHead
        kicker="Recognition"
        title="Prizes & certificates"
        description="Every child who participates is celebrated — because showing up with devotion is itself an achievement."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className={`rounded-[18px] border p-6 text-center ${
              prize.special
                ? "border-2 border-gold bg-gradient-to-b from-[#FBE9C8] to-card"
                : "border-line bg-card"
            }`}
          >
            <div className="mb-3 text-[34px]" aria-hidden="true">
              {prize.icon}
            </div>
            <h4 className="font-devanagari mb-2 text-[17px] text-maroon-dark">{prize.title}</h4>
            <p className="text-[13.5px] text-ink-soft">{prize.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
