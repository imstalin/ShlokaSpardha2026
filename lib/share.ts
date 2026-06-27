export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      return ok;
    } catch {
      return false;
    }
  }
}

export function buildWhatsAppShareUrl(text: string): string {
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function buildRegistrationShareText(): string {
  return `🙏 Sloka Spardha 2026 — Bhakthi Sudha Mandali

Guru Purnima Sloka Competition for children aged 3–14
📅 July 25, 2026 | 🕠 5:15–7:00 PM IST
⏳ Register by July 10, 2026

View slokas & details on the event website.
https://bhakthisudhamandali.com/`;
}
