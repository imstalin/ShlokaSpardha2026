import { sendGAEvent } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/ga-config";

export type SiteVersion = "modern" | "classic";

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params?: EventParams) {
  if (process.env.NODE_ENV !== "production") return;
  if (!GA_MEASUREMENT_ID) return;
  sendGAEvent("event", name, params ?? {});
}
