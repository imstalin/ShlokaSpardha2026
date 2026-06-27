import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Heart,
  Mic,
  Music,
  Sparkles,
} from "lucide-react";

export interface EvaluationCriterion {
  id: string;
  title: string;
  weight: number;
  weightLabel: string;
  description: string;
  icon: LucideIcon;
}

export const evaluationCriteria: EvaluationCriterion[] = [
  {
    id: "pronunciation",
    title: "Pronunciation",
    weight: 25,
    weightLabel: "25%",
    description:
      "Clarity and accuracy of Sanskrit pronunciation, including correct svaras/accents where applicable.",
    icon: Mic,
  },
  {
    id: "memorization",
    title: "Memorization",
    weight: 25,
    weightLabel: "25%",
    description:
      "Reciting smoothly from memory, without long pauses or prompting.",
    icon: BookOpen,
  },
  {
    id: "clarity",
    title: "Clarity",
    weight: 20,
    weightLabel: "20%",
    description:
      "Audible, clear delivery — neither rushed nor too soft to follow.",
    icon: Sparkles,
  },
  {
    id: "rhythm",
    title: "Rhythm",
    weight: 15,
    weightLabel: "15%",
    description:
      "Maintaining the natural rhythm (chandas) and tone of the sloka throughout.",
    icon: Music,
  },
  {
    id: "devotional-expression",
    title: "Devotional expression",
    weight: 15,
    weightLabel: "15%",
    description:
      "Composure, sincerity, and devotional feeling while reciting in front of the audience.",
    icon: Heart,
  },
];

export const totalScoreExplanation =
  "Each criterion is weighted to total 100%. Judges assess holistically within each age group, recognising effort and age-appropriate progress alongside technical skill.";

export interface Prize {
  id: string;
  icon: string;
  title: string;
  description: string;
  special?: boolean;
}

export const prizes: Prize[] = [
  {
    id: "participation",
    icon: "🎓",
    title: "For every participant",
    description:
      "All children who take part in the competition will receive a certificate of participation along with a small gift, regardless of the outcome.",
  },
  {
    id: "special",
    icon: "🏆",
    title: "Special prize",
    description:
      "Children who recite exceptionally well in each age group will be awarded a special prize, as decided by the judges based on the evaluation parameters.",
    special: true,
  },
];

export const practiceAudioSteps = [
  {
    id: "listen",
    title: "Listen and repeat",
    description:
      "Audio recordings of each sloka (across all three age groups) will be posted in the Mandali's WhatsApp group to guide children in learning correct pronunciation and rhythm.",
  },
  {
    id: "pace",
    title: "Practise at your own pace",
    description:
      "Children can listen as many times as needed in the days leading up to the competition, alongside parents or on their own.",
  },
  {
    id: "whatsapp",
    title: "Will be posted in WhatsApp",
    description:
      "These guide recordings will be shared on the Mandali's WhatsApp group ahead of July 1st — please check back.",
  },
] as const;
