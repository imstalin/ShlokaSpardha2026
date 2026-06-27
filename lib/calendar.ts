import { EVENT } from "@/data/event";

function formatICSDate(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function generateEventICS(): string {
  const start = formatICSDate(EVENT.competitionStartISO);
  const end = formatICSDate(EVENT.competitionEndISO);
  const now = formatICSDate(new Date().toISOString());

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Bhakthi Sudha Mandali//Sloka Spardha 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:sloka-spardha-2026@${EVENT.siteUrl}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${EVENT.title} — ${EVENT.organizer}`,
    `DESCRIPTION:Guru Purnima Sloka Competition for children aged ${EVENT.ages}. Platform: ${EVENT.platform}.`,
    `LOCATION:${EVENT.platform}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function downloadEventICS() {
  const ics = generateEventICS();
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "sloka-spardha-2026.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
