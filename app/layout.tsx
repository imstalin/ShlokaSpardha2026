import { Inter, Noto_Serif_Devanagari, Tiro_Devanagari_Sanskrit } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const tiroSanskrit = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-tiro-sanskrit",
  display: "swap",
});

import { GoogleAnalytics } from "@next/third-parties/google";
import { EVENT } from "@/data/event";
import { GA_MEASUREMENT_ID } from "@/lib/ga-config";
import AudioPlayerRoot from "@/components/player/AudioPlayerRoot";

export const metadata: Metadata = {
  title: "Sloka Spardha 2026 — Bhakthi Sudha Mandali",
  description:
    "Guru Purnima Sloka Competition for children aged 3 to 14 on July 25, 2026",
  metadataBase: new URL(EVENT.siteUrl),
  openGraph: {
    title: "Sloka Spardha 2026 — Bhakthi Sudha Mandali",
    description:
      "Guru Purnima Sloka Competition for children aged 3 to 14 on July 25, 2026",
    type: "website",
    locale: "en_IN",
    siteName: "Sloka Spardha 2026",
    url: EVENT.siteUrl,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sloka Spardha 2026 — Guru Purnima celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloka Spardha 2026 — Bhakthi Sudha Mandali",
    description:
      "Guru Purnima Sloka Competition for children aged 3 to 14 on July 25, 2026",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerifDevanagari.variable} ${tiroSanskrit.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <AudioPlayerRoot>{children}</AudioPlayerRoot>
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  );
}
