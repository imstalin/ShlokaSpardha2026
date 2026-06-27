import { SectionHead, SectionWrapper } from "@/components/ui";
import { EVENT, OWNER } from "@/data/event";

const DETAILS = [
  { icon: "🪔", label: "Organised by", value: EVENT.organizer },
  { icon: "🌕", label: "Occasion", value: EVENT.theme },
  { icon: "📅", label: "Competition date", value: EVENT.dateFull },
  { icon: "🕠", label: "Time", value: EVENT.time },
  { icon: "💻", label: "Platform", value: EVENT.platform },
  {
    icon: "📶",
    label: "Internet connection",
    value: "Please use WiFi, not mobile data, for a stable connection",
  },
  { icon: "🎚️", label: "Audio & video check", value: EVENT.audioCheck },
  { icon: "📝", label: "Registration closes", value: EVENT.registrationDeadline },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHead
        kicker="About the event"
        title="Why we gather this Guru Purnima"
        description="Bhakthi Sudha Mandali is organising this sloka competition as a heartfelt offering to our Gurus — a chance for our children to learn, recite, and carry forward the wisdom of sacred verses."
      />

      <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[18px] border border-line bg-card p-6 shadow-[0_8px_24px_rgba(58,20,16,0.08)]">
          <p className="mb-3 text-[15px] text-ink-soft">
            Guru Purnima marks the day we honour our teachers — those who light the path of
            knowledge and devotion. In that spirit, Bhakthi Sudha Mandali brings together children
            from our community to learn and recite slokas, building a lifelong connection with our
            spiritual heritage.
          </p>
          <p className="mb-3 text-[15px] text-ink-soft">
            Every child who steps forward to participate is, in their own way, honouring this
            tradition — and every child who takes part will be celebrated for their effort, not
            only for their result.
          </p>
          <p className="text-[15px] text-ink-soft">
            We warmly welcome all children in our community, regardless of prior experience with
            sloka recitation, to take part in this joyful celebration.
          </p>
        </div>

        <div className="rounded-[18px] border border-line bg-card p-6 shadow-[0_8px_24px_rgba(58,20,16,0.08)]">
          <ul className="list-none">
            {DETAILS.map((item, i) => (
              <li
                key={item.label}
                className={`flex gap-3 py-3 ${i < DETAILS.length - 1 ? "border-b border-line" : ""}`}
              >
                <span className="w-6 shrink-0 text-center text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {item.label}
                  </div>
                  <div className="text-sm font-bold text-maroon-dark">{item.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 rounded-[18px] border border-line bg-card p-6 shadow-[0_8px_24px_rgba(58,20,16,0.08)]">
          <h3 className="mb-3 text-lg font-semibold text-maroon-dark">About the owner</h3>
          <p className="text-[15px] text-ink-soft">{OWNER.bio}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
