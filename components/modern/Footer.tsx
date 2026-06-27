import { EVENT } from "@/data/event";
import { prizes } from "@/data/evaluation";
import { GlassCard } from "@/components/modern/ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/30 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {prizes.map((prize) => (
            <GlassCard
              key={prize.id}
              className={`p-6 text-center ${
                prize.special ? "border-gold/40 bg-gradient-to-br from-gold/15 to-white/30" : ""
              }`}
            >
              <span className="text-3xl" aria-hidden="true">
                {prize.icon}
              </span>
              <h3 className="mt-2 font-devanagari font-bold text-maroon">{prize.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{prize.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <p className="font-sanskrit text-xl font-bold text-maroon">भक्ति सुधा मण्डली</p>
          <p className="mt-2 text-sm text-ink-soft">
            {/* TODO: Update contact in data/event.ts */}
            Queries? Contact <strong className="text-ink">{EVENT.contactName}</strong> ·{" "}
            {EVENT.contactPhone}
          </p>
          <p className="mt-4 text-xs text-ink-soft/80">
            {/* TODO: Set whatsappGroupUrl in data/event.ts */}
            Join the Mandali WhatsApp group for registration, practice audio, and event updates.
          </p>
          <p className="mt-6 font-sanskrit text-lg text-gold">गुरुभ्यो नमः</p>
        </div>
      </div>
    </footer>
  );
}
