import { EVENT } from "@/data/event";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-line px-5 py-9 text-center">
      <p className="font-sanskrit mb-1.5 text-[17px] font-bold text-maroon">
        भक्ति सुधा मण्डली
      </p>
      <p className="mb-3.5 text-sm text-ink-soft">
        Queries? Contact{" "}
        <strong className="text-ink">{EVENT.contactName}</strong> · {EVENT.contactPhone}
      </p>
      <p className="text-xs text-ink-soft/80">
        Sloka Spardha · Guru Purnima 2026 · {EVENT.organizer}
      </p>
      <p className="mt-4 text-xs text-ink-soft">
        Join the Mandali WhatsApp group for registration updates, practice audio, and event day
        instructions.
      </p>
    </footer>
  );
}
