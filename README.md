# Sloka Spardha 2026 — Bhakthi Sudha Mandali

A modern, mobile-first event website for the Guru Purnima Sloka Competition (July 25, 2026).

Two versions are available:
- **`/`** — Modern premium landing page (glassmorphism, animations, practice dashboard)
- **`/classic`** — Original simpler design

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the modern site, or [http://localhost:3000/classic](http://localhost:3000/classic) for the classic version.

## Build

```bash
npm run build
npm start
```

## Project structure

```
app/
  page.tsx                 # Modern homepage
  classic/page.tsx         # Classic homepage
  layout.tsx               # Fonts, SEO metadata
  globals.css              # Theme tokens
components/
  modern/                  # Modern UI components
    HeroModern.tsx
    CountdownTimer.tsx
    EventTimeline.tsx
    AgeGroupSelector.tsx
    SlokaLearningCard.tsx
    PracticeDashboard.tsx
    RulesAccordion.tsx
    EvaluationScoreCards.tsx
    RegistrationCard.tsx
    PracticeAudio.tsx
    Navbar.tsx
    Footer.tsx
  ...                      # Classic components
data/
  event.ts                 # Google Form URL, WhatsApp, site URL, contact
  audio.ts                 # All practice audio filenames in one place
  slokas.ts                # Sloka text (Sanskrit + transliteration)
lib/
  share.ts                 # Clipboard & WhatsApp helpers
  practice.ts              # localStorage practice & favorites
  calendar.ts              # ICS calendar download
  usePracticeStorage.ts    # React hook for progress state
public/
  audio/                   # Drop MP3 practice files here
  og-image.svg             # Open Graph / WhatsApp preview placeholder
  favicon.svg
```

## Admin placeholders — update before launch

Edit `data/event.ts`:

| Field | Description |
|-------|-------------|
| `googleFormUrl` | Google Form registration link |
| `whatsappGroupUrl` | Mandali WhatsApp group invite |
| `siteUrl` | Deployed site URL (for OG tags & calendar) |
| `contactPhone` | Contact number |

Add practice audio in `data/audio.ts` — set `audioFile` per sloka id (same field used on each sloka card):

```ts
// data/audio.ts — SLOKA_AUDIO map
"g1-guru-brahma": "g1-guru-brahma.mp3",
"g3-datta-atharvashirsha": "g3-datta-atharvashirsha.opus", // .mp3 recommended for Safari
```

## Modern features

- Animated hero with floating particles
- Registration countdown timer
- Interactive event timeline
- Card-based age group selector with progress bars
- Sloka learning cards (transliteration, copy, practice, favourites)
- Parent practice dashboard with suggested next sloka
- Rules accordion with parent-specific section
- Circular evaluation score indicators
- Registration with WhatsApp share, copy details, add-to-calendar (ICS)
- Practice audio section with coming-soon state
- Reduced-motion support

## Deploy to Vercel

1. Push to GitHub: [github.com/imstalin/ShlokaSpardha2026](https://github.com/imstalin/ShlokaSpardha2026)
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. **Framework preset:** Next.js
4. **Build command:** `npm run build`
5. **Output directory:** default (Next.js)
6. Deploy — no environment variables required initially

After deploy, update `siteUrl` in `data/event.ts` to your Vercel URL.

## License

Private event site for Bhakthi Sudha Mandali.
