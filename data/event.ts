export const EVENT = {
  title: "Sloka Spardha",
  titleSanskrit: "श्लोक स्पर्धा",
  organizer: "Bhakthi Sudha Mandali",
  theme: "Guru Purnima 2026",
  themeSanskrit: "गुरु पूर्णिमा",
  date: "July 25, 2026",
  dateFull: "Saturday, July 25th, 2026",
  time: "5:15 PM – 7:00 PM IST",
  ages: "3–14",
  agesFull: "Ages 3 to 14",
  platform: "Google Meet",
  registrationDeadline: "July 10, 2026",
  registrationDeadlineISO: "2026-07-10T23:59:59+05:30",
  competitionStartISO: "2026-07-25T17:15:00+05:30",
  competitionEndISO: "2026-07-25T19:00:00+05:30",
  audioCheck: "5:15 PM – 5:30 PM IST",
  audioCheckISO: "2026-07-25T17:15:00+05:30",
  resultsISO: "2026-07-25T19:00:00+05:30",
  contactName: "Mrs. Sudha Ramanathan",
  contactPhone: "94400 74983",
  // TODO: Replace with the actual Google Form URL when available
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfdX81JW_ND-_a63FNuC0y0FlsRKl-BBhzQM3Keajp5dZShSg/viewform",
  // TODO: Replace with the Mandali WhatsApp group invite link
  whatsappGroupUrl: "#",
  // TODO: Replace with your deployed site URL for social sharing
  siteUrl: "https://sloka-spardha-2026.vercel.app",
} as const;

export const OWNER = {
  name: "Mrs. Sudha Ramanathan",
  role: "Teacher at an international school",
  bio: "Sudha Ramanathan is a teacher at an international school, 
  proficient in Hindi and Sanskrit. 
  Her aim is to nurture our values and tradition through spiritual learning 
  for people of all age groups. Let's join and spread the divine vibe.",
} as const;

export const REGISTRATION_DETAILS = `Sloka Spardha 2026 — Bhakthi Sudha Mandali
Event: Guru Purnima Sloka Competition
Date: July 25, 2026 | Time: 5:15 PM – 7:00 PM IST
Ages: 3–14 years
Registration deadline: July 10, 2026
Platform: Google Meet
Register via the Google Form shared in the WhatsApp group.`;

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  dateISO: string;
  description: string;
  status: "upcoming" | "active" | "past";
}

export const eventTimeline: TimelineEvent[] = [
  {
    id: "registration",
    title: "Registration closes",
    date: "July 10, 2026",
    dateISO: EVENT.registrationDeadlineISO,
    description: "Complete the Google Form shared in the WhatsApp group before this date.",
    status: "upcoming",
  },
  {
    id: "audio-check",
    title: "Audio & video check",
    date: "July 25 · 5:15 PM IST",
    dateISO: EVENT.audioCheckISO,
    description: "Join Google Meet early for a quick audio and video check before recitations begin.",
    status: "upcoming",
  },
  {
    id: "competition",
    title: "Competition begins",
    date: "July 25 · 5:15 – 7:00 PM IST",
    dateISO: EVENT.competitionStartISO,
    description: "Children recite in their age groups, in the order communicated to families.",
    status: "upcoming",
  },
  {
    id: "results",
    title: "Results & prizes",
    date: "July 25 · after 7:00 PM IST",
    dateISO: EVENT.resultsISO,
    description: "Certificates for all participants and special prizes for outstanding recitations.",
    status: "upcoming",
  },
];

export const aboutParagraphs = [
  "Guru Purnima marks the day we honour our teachers — those who light the path of knowledge and devotion. In that spirit, Bhakthi Sudha Mandali brings together children from our community to learn and recite slokas, building a lifelong connection with our spiritual heritage.",
  "Every child who steps forward to participate is, in their own way, honouring this tradition — and every child who takes part will be celebrated for their effort, not only for their result.",
  "We warmly welcome all children in our community, regardless of prior experience with sloka recitation, to take part in this joyful celebration.",
] as const;

export const eventDetails = [
  { label: "Organised by", value: EVENT.organizer },
  { label: "Occasion", value: EVENT.theme },
  { label: "Competition date", value: EVENT.dateFull },
  { label: "Time", value: EVENT.time },
  { label: "Platform", value: EVENT.platform },
  {
    label: "Internet",
    value: "Please use WiFi, not mobile data, for a stable connection",
  },
  { label: "Audio & video check", value: EVENT.audioCheck },
  { label: "Registration closes", value: EVENT.registrationDeadline },
] as const;
