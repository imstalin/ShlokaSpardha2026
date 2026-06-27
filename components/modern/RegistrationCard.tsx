"use client";

import { useState } from "react";
import { CalendarPlus, Copy, ExternalLink, MessageCircle } from "lucide-react";
import { EVENT, REGISTRATION_DETAILS } from "@/data/event";
import CountdownTimer from "@/components/modern/CountdownTimer";
import { GlassCard, ModernSection, SectionHeader } from "@/components/modern/ui";
import { downloadEventICS } from "@/lib/calendar";
import {
  buildRegistrationShareText,
  buildWhatsAppShareUrl,
  copyToClipboard,
} from "@/lib/share";
import { trackEvent } from "@/lib/analytics";

export default function RegistrationCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (await copyToClipboard(REGISTRATION_DETAILS)) {
      trackEvent("copy_registration_details", { site_version: "modern" });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    trackEvent("whatsapp_share", { content_type: "registration", site_version: "modern" });
    window.open(buildWhatsAppShareUrl(buildRegistrationShareText()), "_blank", "noopener,noreferrer");
  };

  return (
    <ModernSection id="register">
      <SectionHeader
        eyebrow="Registration"
        title="Register your child"
        subtitle="Complete registration before the deadline. Form link will be shared in the WhatsApp group."
      />

      <GlassCard className="overflow-hidden">
        <div className="bg-gradient-to-br from-maroon/10 via-gold/10 to-tulsi/10 p-8 sm:p-10">
          <div className="mx-auto max-w-lg text-center">
            <p className="font-sanskrit text-2xl text-maroon">पंजीकरण करें</p>
            <p className="mt-3 text-sm text-ink-soft">
              Deadline: <strong className="text-maroon">{EVENT.registrationDeadline}</strong>
            </p>
            <div className="mt-6">
              <CountdownTimer targetISO={EVENT.registrationDeadlineISO} />
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6 sm:p-8">
          <a
            href={EVENT.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("registration_form_click", {
                link_url: EVENT.googleFormUrl,
                site_version: "modern",
              })
            }
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark py-3.5 text-sm font-bold text-cream shadow-lg transition hover:shadow-xl active:scale-[0.98]"
          >
            Open Google Form
            <ExternalLink className="h-4 w-4" />
          </a>
          <p className="text-center text-xs text-ink-soft">
            {/* TODO: Set googleFormUrl in data/event.ts when the form is ready 
            Google Form URL placeholder — update in <code>data/event.ts</code>*/}
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            <ActionButton onClick={handleCopy} icon={Copy} label={copied ? "Copied!" : "Copy details"} />
            <ActionButton onClick={handleWhatsApp} icon={MessageCircle} label="WhatsApp share" />
            <ActionButton
              onClick={() => {
                trackEvent("add_to_calendar", {
                  event_name: "Sloka Spardha 2026",
                  site_version: "modern",
                });
                downloadEventICS();
              }}
              icon={CalendarPlus}
              label="Add to calendar"
            />
          </div>
        </div>
      </GlassCard>
    </ModernSection>
  );
}

function ActionButton({
  onClick,
  icon: Icon,
  label,
}: {
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/50 bg-white/50 px-4 py-3 text-sm font-semibold text-maroon backdrop-blur-md transition hover:bg-white/70 active:scale-[0.98]"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
