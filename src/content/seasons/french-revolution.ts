import type { Season } from "@/lib/types";

export const frenchRevolution: Season = {
  id: "french-revolution",
  title: "The French Revolution",
  hook: "Versailles, summer 1789. A bankrupt monarchy calls the Estates-General for the first time in 175 years — and the room refuses to play along.",
  era: "1789",
  contentNotes:
    "Voices are drawn from speeches, pamphlets, letters, and memoirs. Conversations are compressed into a single thread for legibility. The chronology is preserved; the medium is not.",
  cast: [
    {
      id: "sieyes",
      name: "Abbé Sieyès",
      role: "Theorist of the Third Estate",
      born: "1748",
      ideology:
        "The Third Estate is the nation. The privileged orders are a foreign body grafted onto it.",
      voice:
        "Cold, precise, pamphleteering. Drops aphorisms. Speaks as if dictating constitutional articles.",
      allies: ["bailly", "mirabeau"],
      enemies: ["court-faction"],
      blindspots:
        "Contempt for the men he is mobilizing; thinks of the nation as a logical proposition, not a crowd.",
      color: "#6366f1",
    },
    {
      id: "bailly",
      name: "Jean-Sylvain Bailly",
      role: "Astronomer, President of the National Assembly",
      born: "1736",
      ideology:
        "Reform through legality. The deputies are bound by their oath to the nation, not to the king.",
      voice:
        "Dignified, measured, presiding. Speaks in formal sentences. Records everything.",
      allies: ["sieyes", "lafayette"],
      enemies: [],
      blindspots:
        "Underestimates how fast the street will outrun the chamber.",
      color: "#0ea5e9",
    },
    {
      id: "mirabeau",
      name: "Comte de Mirabeau",
      role: "Noble who chose the Third Estate",
      born: "1749",
      ideology:
        "Constitutional monarchy. Use the king; don't dethrone him. Speak louder than the room.",
      voice:
        "Booming, theatrical, lewd in private, magisterial in public. Always one debt away from disaster.",
      allies: ["bailly", "sieyes"],
      enemies: ["marie-antoinette"],
      blindspots:
        "Sells himself to the court in secret while leading the chamber in public.",
      color: "#f59e0b",
    },
    {
      id: "robespierre",
      name: "Maximilien Robespierre",
      role: "Junior deputy from Arras",
      born: "1758",
      ideology:
        "Virtue. The general will. The people are sovereign and incorruptible.",
      voice:
        "Quiet, pedantic, intense. Writes like a lawyer; thinks like a moralist. Notices when others go soft.",
      allies: ["sieyes"],
      enemies: ["mirabeau", "court-faction"],
      blindspots:
        "Believes purity is achievable through procedure. Watches everyone for signs of compromise.",
      color: "#10b981",
    },
    {
      id: "lafayette",
      name: "Marquis de Lafayette",
      role: "Hero of the American Revolution",
      born: "1757",
      ideology:
        "A Declaration of Rights. A constitution. A king who learns to bow to it.",
      voice:
        "Earnest, American-inflected, slightly pious. Talks about liberty as if he invented it.",
      allies: ["bailly", "necker"],
      enemies: [],
      blindspots:
        "Thinks the crown will accept the role he's written for it.",
      color: "#3b82f6",
    },
    {
      id: "louis",
      name: "Louis XVI",
      role: "King of France",
      born: "1754",
      ideology:
        "I am the father of my people. I would prefer not to choose.",
      voice:
        "Hesitant, kind, fatally slow. Sentences trail off. Hunts to clear his head.",
      allies: ["marie-antoinette"],
      enemies: [],
      blindspots:
        "Believes good intentions are a substitute for a position.",
      color: "#64748b",
    },
    {
      id: "marie-antoinette",
      name: "Marie Antoinette",
      role: "Queen of France",
      born: "1755",
      ideology:
        "The crown does not negotiate with rooms full of lawyers.",
      voice:
        "Sharp, Austrian, exasperated. Switches to French formality when she's furious.",
      allies: ["louis", "court-faction"],
      enemies: ["mirabeau", "sieyes"],
      blindspots:
        "Reads every concession as a personal humiliation.",
      color: "#ec4899",
    },
    {
      id: "necker",
      name: "Jacques Necker",
      role: "Finance Minister",
      born: "1732",
      ideology:
        "The deficit is the only revolution that matters. Reform now or default later.",
      voice:
        "Banker. Genevan. Loves a memorandum. Wants to be loved by the public and trusted by the king at the same time.",
      allies: ["lafayette"],
      enemies: ["marie-antoinette"],
      blindspots:
        "Mistakes his popularity for political power.",
      color: "#a855f7",
    },
    {
      id: "marat",
      name: "Jean-Paul Marat",
      role: "Pamphleteer, outsider",
      born: "1743",
      ideology:
        "There is a plot. There is always a plot. Name names.",
      voice:
        "Paranoid, accusatory, fast. Writes in italics. Knows who to blame before the event has finished.",
      allies: [],
      enemies: ["court-faction", "lafayette", "mirabeau"],
      blindspots:
        "Mistakes denunciation for analysis.",
      color: "#ef4444",
    },
  ],
  episodes: [
    {
      id: "tennis-court-oath",
      number: 1,
      title: "The Tennis Court Oath",
      premise:
        "June 17–20, 1789. The Third Estate declares itself the National Assembly. The king locks them out of their meeting hall. They reconvene in a tennis court and swear not to disperse until France has a constitution.",
      timeWindow: "June 17–20, 1789",
      location: "Versailles",
      mustHitBeats: [
        "June 17: Third Estate votes to call itself the National Assembly (Sieyès's motion)",
        "Some clergy begin to join; nobles refuse",
        "June 20 morning: deputies arrive to find the hall locked, guarded, under pretext of preparation for a royal session",
        "Rumors fly: is this a coup against the Assembly?",
        "Bailly leads the deputies to the indoor tennis court (jeu de paume)",
        "Oath drafted: do not disperse until a constitution is established",
        "Only one deputy refuses to sign (Martin-Dauch); his refusal is recorded",
        "Mirabeau gives the moment its rhetorical weight; Robespierre signs early",
        "The court reacts in private; Marie Antoinette pushes for force",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "Versailles. June 17, 1789. The Estates-General has been meeting for six weeks and has accomplished nothing — the three orders cannot even agree on how to vote.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "sieyes",
          text: "I have a motion. The deputies of the Third Estate, being verified as representing at least ninety-six per cent of the nation, hereby constitute themselves the National Assembly.",
          basis: "compressed",
          sourceNote:
            "Sieyès's motion of June 17, 1789 is in the Assembly's record; the wording here is paraphrased to read as a chat message.",
        },
        {
          id: "msg-003",
          characterId: "mirabeau",
          text: "Read that twice, abbé. You just made a kingdom out of a committee.",
          basis: "interpretive",
          sourceNote:
            "Mirabeau supported the motion. The line is invented to convey his theatrical register.",
        },
        {
          id: "msg-004",
          characterId: "robespierre",
          text: "It is the only legitimate name. The other two orders are corporations. We are the nation.",
          basis: "interpretive",
          sourceNote:
            "Robespierre supported the motion and would echo this logic in later speeches; the phrasing is dramatized.",
        },
        {
          id: "msg-005",
          characterId: "marie-antoinette",
          text: "Monsieur Necker. Are we permitting our lawyers to rename the kingdom in their lunch break?",
          basis: "interpretive",
          sourceNote:
            "Marie Antoinette opposed concessions to the Third Estate and pressured the king toward a hard line; this line dramatizes that stance.",
        },
      ],
      endingHook:
        "Three days later, the deputies will arrive at their meeting hall to find the doors barred and royal troops at the entrance. They will not go home.",
    },
  ],
};

export const seasons = {
  [frenchRevolution.id]: frenchRevolution,
} as const;

export function getSeason(id: string) {
  return seasons[id as keyof typeof seasons] ?? null;
}
