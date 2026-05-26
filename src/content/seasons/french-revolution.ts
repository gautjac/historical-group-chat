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
      died: "1836",
      bio: "Catholic priest, political theorist, and the architect of the Third Estate's case. His January 1789 pamphlet \"What is the Third Estate?\" answered its own title: \"Everything. What has it been until now in the political order? Nothing.\" That pamphlet is doing more political work, this month, than any speech.",
      ideology:
        "The Third Estate is the nation. The privileged orders are a foreign body grafted onto it.",
      voice:
        "Cold, precise, pamphleteering. Drops aphorisms. Speaks as if dictating constitutional articles.",
      allies: ["bailly", "mirabeau"],
      enemies: ["court-faction"],
      blindspots:
        "Contempt for the men he is mobilizing; thinks of the nation as a logical proposition, not a crowd.",
      keyFact:
        "Will survive everyone else in this room. Outlives the Revolution, the Terror, Napoleon, and the Restoration.",
      fate: "Stays quiet through the Terror. Helps engineer Napoleon's coup of 18 Brumaire (November 1799). Voted for the king's execution. Dies in 1836 at 88.",
      color: "#6366f1",
    },
    {
      id: "bailly",
      name: "Jean-Sylvain Bailly",
      role: "Astronomer, President of the National Assembly",
      born: "1736",
      died: "1793",
      bio: "Astronomer first, politician by accident. Tracked Halley's Comet, served in three royal academies. Elected to represent Paris at the Estates-General. The chamber has just made him its first president because he is calm, honest, and visibly above the fray.",
      ideology:
        "Reform through legality. The deputies are bound by their oath to the nation, not to the king.",
      voice:
        "Dignified, measured, presiding. Speaks in formal sentences. Records everything.",
      allies: ["sieyes", "lafayette"],
      enemies: [],
      blindspots:
        "Underestimates how fast the street will outrun the chamber.",
      keyFact:
        "Will be elected first mayor of Paris a month from now, the day after the Bastille falls.",
      fate: "Mayor of Paris through the Champ de Mars massacre (July 1791), where the National Guard fires on a republican petition. Tried for that order in 1793. Guillotined on the Champ de Mars itself.",
      color: "#0ea5e9",
    },
    {
      id: "mirabeau",
      name: "Comte de Mirabeau",
      role: "Noble who chose the Third Estate",
      born: "1749",
      died: "1791",
      bio: "Born to the nobility, jailed twice for debt and scandal, elected by the Third Estate of Aix-en-Provence because his own order wouldn't have him. The loudest, most quoted, most distrusted man in the chamber. Will quietly accept court money to argue its case from the inside.",
      ideology:
        "Constitutional monarchy. Use the king; don't dethrone him. Speak louder than the room.",
      voice:
        "Booming, theatrical, lewd in private, magisterial in public. Always one debt away from disaster.",
      allies: ["bailly", "sieyes"],
      enemies: ["marie-antoinette"],
      blindspots:
        "Sells himself to the court in secret while leading the chamber in public.",
      keyFact:
        "Will say, three days from now on June 23: \"We are here by the will of the people and will not leave except at the point of bayonets.\"",
      fate: "Dies of natural causes in April 1791, the most powerful orator in France. Two years later the discovery of his secret correspondence with the court gets his ashes removed from the Panthéon.",
      color: "#f59e0b",
    },
    {
      id: "robespierre",
      name: "Maximilien Robespierre",
      role: "Junior deputy from Arras",
      born: "1758",
      died: "1794",
      bio: "Provincial lawyer, unmarried, fastidious, devout reader of Rousseau. Elected to the Estates-General after a campaign of cheap pamphlets that no one in Versailles has read. He is thirty-one and almost nobody in this room knows his name yet.",
      ideology:
        "Virtue. The general will. The people are sovereign and incorruptible.",
      voice:
        "Quiet, pedantic, intense. Writes like a lawyer; thinks like a moralist. Notices when others go soft.",
      allies: ["sieyes"],
      enemies: ["mirabeau", "court-faction"],
      blindspots:
        "Believes purity is achievable through procedure. Watches everyone for signs of compromise.",
      keyFact:
        "In 1789 he opposes the death penalty in principle. Five years from now he will sign more death warrants than any other man in France.",
      fate: "Becomes the central figure of the Terror as a member of the Committee of Public Safety. Arrested by his own colleagues on 9 Thermidor (July 27, 1794). Guillotined the next day.",
      color: "#10b981",
    },
    {
      id: "lafayette",
      name: "Marquis de Lafayette",
      role: "Hero of the American Revolution",
      born: "1757",
      died: "1834",
      bio: "Fought at Yorktown at nineteen. Friend of Washington, Jefferson, Franklin. Came home convinced France needed its own Declaration of Rights — and that he should write it. Owns a key to the Bastille that he will send to Mount Vernon next year.",
      ideology:
        "A Declaration of Rights. A constitution. A king who learns to bow to it.",
      voice:
        "Earnest, American-inflected, slightly pious. Talks about liberty as if he invented it.",
      allies: ["bailly", "necker"],
      enemies: [],
      blindspots:
        "Thinks the crown will accept the role he's written for it.",
      keyFact:
        "Will draft the Declaration of the Rights of Man and of the Citizen this summer, working from Jefferson's notes.",
      fate: "Commands the new National Guard. Falls from favor as the Revolution radicalizes. Flees in 1792, imprisoned by Austria for five years. Returns to France under Napoleon. Helps lead the 1830 Revolution at seventy-three.",
      color: "#3b82f6",
    },
    {
      id: "louis",
      name: "Louis XVI",
      role: "King of France",
      born: "1754",
      died: "1793",
      bio: "Crowned at nineteen, two months before he married Marie Antoinette. Reads, hunts, makes locks by hand. Hates being looked at, hates being asked to choose. Has called the Estates-General because nothing else has worked and the treasury is empty.",
      ideology:
        "I am the father of my people. I would prefer not to choose.",
      voice:
        "Hesitant, kind, fatally slow. Sentences trail off. Hunts to clear his head.",
      allies: ["marie-antoinette"],
      enemies: [],
      blindspots:
        "Believes good intentions are a substitute for a position.",
      keyFact:
        "Personally well-read in mechanics and geography; can name every cape on the African coast. Could not summarize three of his finance ministers' policies in order.",
      fate: "Tries to flee France in June 1791, caught at Varennes. Deposed in August 1792. Tried for treason and guillotined January 21, 1793.",
      color: "#64748b",
    },
    {
      id: "marie-antoinette",
      name: "Marie Antoinette",
      role: "Queen of France",
      born: "1755",
      died: "1793",
      bio: "Habsburg archduchess, fifteenth child of Empress Maria Theresa, sent to Versailles at fourteen. Queen at eighteen. Read by the French public as foreign, frivolous, and hostile to reform. Reads herself as a daughter of the most powerful dynasty in Europe trying to hold a marriage, a court, and a kingdom together.",
      ideology:
        "The crown does not negotiate with rooms full of lawyers.",
      voice:
        "Sharp, Austrian, exasperated. Switches to French formality when she's furious.",
      allies: ["louis", "court-faction"],
      enemies: ["mirabeau", "sieyes"],
      blindspots:
        "Reads every concession as a personal humiliation.",
      keyFact:
        "The \"let them eat cake\" quote was attributed to her years later by people who did not know her. She did spend extravagantly at the Petit Trianon. The public never forgave that.",
      fate: "Imprisoned with her family in the Temple in 1792. Tried separately. Guillotined October 16, 1793, two and a half months after Louis.",
      color: "#ec4899",
    },
    {
      id: "necker",
      name: "Jacques Necker",
      role: "Finance Minister",
      born: "1732",
      died: "1804",
      bio: "Genevan banker and former director-general of finances. Wildly popular in Paris for publishing the kingdom's accounts in 1781 — something no French minister had ever done. Recalled in 1788 to save the budget. Distrusted at court for being a Protestant, a foreigner, and correct.",
      ideology:
        "The deficit is the only revolution that matters. Reform now or default later.",
      voice:
        "Banker. Genevan. Loves a memorandum. Wants to be loved by the public and trusted by the king at the same time.",
      allies: ["lafayette"],
      enemies: ["marie-antoinette"],
      blindspots:
        "Mistakes his popularity for political power.",
      keyFact:
        "His dismissal on July 11, 1789 will be the spark for the storming of the Bastille three days later.",
      fate: "Dismissed July 11, recalled days later by popular demand, never regains real power. Retires to his estate at Coppet in Switzerland. His daughter Germaine de Staël becomes a major Romantic writer.",
      color: "#a855f7",
    },
    {
      id: "marat",
      name: "Jean-Paul Marat",
      role: "Pamphleteer, outsider",
      born: "1743",
      died: "1793",
      bio: "Physician, scientific outsider, frustrated philosopher. Spent the 1780s convinced the Académie des sciences had cheated him out of his rightful reputation. Lives in Paris, not Versailles. Writes about the Estates-General from the outside, in pamphlets, with growing fury.",
      ideology:
        "There is a plot. There is always a plot. Name names.",
      voice:
        "Paranoid, accusatory, fast. Writes in italics. Knows who to blame before the event has finished.",
      allies: [],
      enemies: ["court-faction", "lafayette", "mirabeau"],
      blindspots:
        "Mistakes denunciation for analysis.",
      keyFact:
        "His newspaper L'Ami du peuple (\"the friend of the people\") begins publishing in September 1789. He writes most of it himself.",
      fate: "Becomes the most uncompromising radical voice in the press. Stabbed in his bathtub by Charlotte Corday on July 13, 1793. Jacques-Louis David's painting of his death hangs today in Brussels.",
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
      characterStakes: {
        sieyes:
          "Watching his constitutional theory survive contact with a hall full of lawyers and the king's pageantry. Wants the motion to pass cleanly so the chamber commits before the king reacts.",
        bailly:
          "Newly elected president of the chamber. Wants to preserve dignity and procedure while the room talks about overthrowing 175 years of custom.",
        mirabeau:
          "Needs to be indispensable. Pushing for a confrontation he can mediate — and quietly negotiating with the court for a position and a stipend.",
        robespierre:
          "Unknown to the chamber. Looking for a moment to be heard. Will not be the deputy to soften the motion.",
        lafayette:
          "Caught between his American constitutionalism and his loyalty to a king he still believes can be taught.",
        louis:
          "Hunting at Marly, sleeping badly, receiving panicked notes from courtiers and his wife. Hopes the deputies will run out of bread and go home.",
        "marie-antoinette":
          "Pressing the king to dissolve the Assembly by force before the contagion spreads to the army. Mourning her elder son, who died on June 4, while the kingdom argues.",
        necker:
          "Walking the tightrope between popular hero and the king's least-favorite minister. Will be dismissed in three weeks and does not yet know it.",
        marat:
          "Outside the chamber, writing pamphlets accusing everyone of treason and looking for evidence of a plot. He has not yet been heard.",
      },
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
