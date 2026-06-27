export type RuleCategory = "general" | "parent" | "important";

export interface Rule {
  id: number;
  title: string;
  description: string;
  category: RuleCategory;
}

export const rules: Rule[] = [
  {
    id: 1,
    title: "Age groups",
    description:
      "Children compete within their own age category — 3 to 5 years, 6 to 10 years, or 11 to 14 years. Age is considered as on July 25th, 2026.",
    category: "general",
  },
  {
    id: 2,
    title: "Choose from the listed slokas",
    description:
      `Each age group has a set of suggested slokas (see the Slokas section).
       For 3 to 5 years, children may recite any 2 slokas from their group's list. 
       For older kids, children may recite any 1 sloka from their group's list.`,
    category: "important",
  },
  {
    id: 3,
    title: "Registration is mandatory",
    description:
      "Every participant must be registered through the Google Form before the deadline — July 10th, 2026.",
    category: "important",
  },
  {
    id: 4,
    title: "Recitation should be clear and unaided",
    description:
      "Children should recite from memory, without reading from a book or screen during the performance, with correct pronunciation as far as possible.",
    category: "important",
  },
  {
    id: 5,
    title: "Parent presence during recitation",
    description:
      "For the 3 to 5 years age group, a parent may sit beside the child and should be visible in the video. For the 6 to 10 and 11 to 14 years age groups, children should recite without a parent seated beside them. If there is any exception where a parent's presence is needed, please inform the team in advance of the competition so this can be discussed and agreed upon.",
    category: "parent",
  },
  {
    id: 6,
    title: "One attempt per child",
    description:
      "Each participant gets a single recitation turn on the day of the competition.",
    category: "general",
  },
  {
    id: 7,
    title: "Punctuality matters",
    description:
      "Participants are requested to be present and ready between 5:15 PM and 7:00 PM IST on July 25th, in the order communicated to families.",
    category: "important",
  },
  {
    id: 8,
    title: "No travel during the competition",
    description:
      "Participants should not be travelling while the competition is in progress. All students should disperse only after the competition ends, and not as soon as their own turn is over.",
    category: "parent",
  },
  {
    id: 9,
    title: "A respectful, joyful spirit",
    description:
      "This is a celebration of devotion and learning — families and children are encouraged to cheer warmly for every participant.",
    category: "general",
  },
  {
    id: 10,
    title: "Decision of judges is final",
    description:
      "Evaluation will be done as per the parameters listed in the Evaluation section, and the judges' decision on awards will be final.",
    category: "general",
  },
];

export const parentRules = rules.filter((r) => r.category === "parent");
export const importantRules = rules.filter((r) => r.category === "important");
export const generalRules = rules.filter((r) => r.category === "general");
