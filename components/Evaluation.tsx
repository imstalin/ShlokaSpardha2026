import { SectionHead, SectionWrapper } from "@/components/ui";
import { evaluationCriteria } from "@/data/evaluation";

export default function Evaluation() {
  return (
    <SectionWrapper id="evaluation">
      <SectionHead
        kicker="How recitations are judged"
        title="Evaluation parameters"
        description="Judges will assess each child warmly and constructively, using the following parameters as a guide."
      />

      <div className="grid gap-3.5 sm:grid-cols-2">
        {evaluationCriteria.map((criterion) => (
          <div
            key={criterion.id}
            className="rounded-[14px] border border-line bg-card p-5"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-[15px] font-bold text-maroon-dark">{criterion.title}</h4>
              <span
                className="rounded-full bg-gold/13 px-2.5 py-0.5 text-xs font-bold text-gold"
                aria-label={`Weight: ${criterion.weightLabel}`}
              >
                {criterion.weightLabel}
              </span>
            </div>
            <p className="text-[13.5px] text-ink-soft">{criterion.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
