"use client";

import { useState } from "react";
import { SectionHead, SectionWrapper } from "@/components/ui";
import { EVENT, REGISTRATION_DETAILS } from "@/data/event";
import { useCountdown } from "@/lib/hooks";
import {
  buildRegistrationShareText,
  buildWhatsAppShareUrl,
  copyToClipboard,
} from "@/lib/share";

export default function Register() {
  const countdown = useCountdown(EVENT.registrationDeadlineISO);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const ok = await copyToClipboard(REGISTRATION_DETAILS);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const url = buildWhatsAppShareUrl(buildRegistrationShareText());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <SectionWrapper id="register">
      <SectionHead kicker="Registration" title="Register your child" />

      <div className="rounded-[20px] border-2 border-dashed border-gold bg-gradient-to-b from-card to-cream p-8 text-center md:p-9">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-maroon px-4 py-2 text-sm font-bold text-cream">
          ⏳ Last date to register: {EVENT.registrationDeadline}
        </div>

        {!countdown.expired ? (
          <div
            className="mb-6 flex justify-center gap-3"
            role="timer"
            aria-label="Registration deadline countdown"
          >
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Min", value: countdown.minutes },
              { label: "Sec", value: countdown.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="min-w-[60px] rounded-xl border border-line bg-cream px-3 py-2"
              >
                <div className="font-devanagari text-xl font-bold text-maroon">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-[11px] font-semibold uppercase text-ink-soft">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mb-6 text-sm font-semibold text-maroon">Registration deadline has passed.</p>
        )}

        <h3 className="font-sanskrit mb-2.5 text-[22px] text-maroon">पंजीकरण करें</h3>
        <p className="mx-auto mb-6 max-w-[480px] text-[15px] text-ink-soft">
          A Google Form will be shared in the WhatsApp group shortly. Please complete registration
          through that form by {EVENT.registrationDeadline}.
        </p>

        <a
          href={EVENT.googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-bold text-cream shadow-[0_6px_18px_rgba(122,31,43,0.25)] transition hover:bg-maroon-dark active:scale-[0.97]"
        >
          Open Google Form ↗
        </a>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full border-2 border-maroon px-5 py-3 text-sm font-bold text-maroon transition hover:bg-card active:scale-[0.97]"
            aria-live="polite"
          >
            {copied ? "Copied!" : "Copy registration details"}
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full border-2 border-tulsi bg-tulsi/10 px-5 py-3 text-sm font-bold text-tulsi transition hover:bg-tulsi/20 active:scale-[0.97]"
          >
            Share on WhatsApp
          </button>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-6">
          {[
            { n: 1, text: "Join the Mandali WhatsApp group" },
            { n: 2, text: "Fill the Google Form when shared" },
            { n: 3, text: "Start practising your slokas" },
          ].map((step) => (
            <div key={step.n} className="max-w-[140px] text-[13px] text-ink-soft">
              <div className="mx-auto mb-2 flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1.5px] border-gold text-xs font-bold text-maroon">
                {step.n}
              </div>
              {step.text}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
