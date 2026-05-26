import type { Season } from "@/lib/types";

export const moonRace: Season = {
  id: "moon-race",
  title: "The Moon Race",
  hook: "October 1957. A Soviet engineer nobody is allowed to name puts an aluminum sphere in orbit, and the American century discovers it is in second place.",
  era: "1957–1969",
  contentNotes:
    "Voices are drawn from speeches, declassified files, memoirs, and TV transcripts. Two programs separated by an Iron Curtain almost never spoke to each other — staging them in a shared thread is dramatically useful and historically dishonest in form, so every line of cross-talk is labelled interpretive unless it traces to public record.",
  cast: [
    {
      id: "korolev",
      name: "Sergei Korolev",
      role: "Chief Designer, OKB-1",
      born: "1907",
      died: "1966",
      bio: "Soviet rocketry's beating heart. Aerospace engineer from Ukraine; survived three years in the Gulag including six months at the Kolyma gold mines before being rehabilitated and put in charge of the R-7. Anonymous to the public by Khrushchev's order — Western intelligence isn't sure he exists; Soviet citizens know him only as \"the Chief Designer.\"",
      ideology:
        "Get there first, however unsteady the ground. Reliability through brute iteration. Engineering decisions, not political ones.",
      voice:
        "Engineer-precise, exhausted, briefer than the room expects. Speaks in deadlines, mass margins, and specific impulse.",
      allies: ["mishin"],
      enemies: ["glushko"],
      blindspots:
        "Believes he can outwork his own body. Refuses surgery he should have had years ago.",
      keyFact:
        "His name is a state secret. The Politburo will publish his obituary in 1966 with his name and photograph for the first time — and the Soviet public will learn that one man was behind every Soviet first.",
      fate: "Dies January 14, 1966 on the operating table during routine surgery. His successor Vasily Mishin cannot hold the program together; the Soviet moon program collapses within four years.",
      color: "#dc2626",
    },
    {
      id: "glushko",
      name: "Valentin Glushko",
      role: "Engine designer, OKB-456",
      born: "1908",
      died: "1989",
      bio: "Pioneer of Soviet rocket engines. Built the RD-107 and RD-108 engines that put Sputnik up. Refused to build the engines Korolev needed for the moon — their feud became state policy and may have cost the USSR the moon.",
      ideology:
        "Hypergolic propellants over kerosene and liquid oxygen. The right answer matters more than the right manager.",
      voice:
        "Cold, methodical, formally polite to Korolev's face. Writes memos that read like dossiers.",
      allies: [],
      enemies: ["korolev"],
      blindspots:
        "Mistakes being correct for being effective.",
      keyFact:
        "When Korolev dies, Glushko will get the engines program he wanted for a decade — and the Soviet moon shot will be already over.",
      fate: "Lives to 1989; eventually becomes Chief Designer himself in 1974. Outlives almost everyone in the program.",
      color: "#7f1d1d",
    },
    {
      id: "khrushchev",
      name: "Nikita Khrushchev",
      role: "First Secretary, Communist Party of the USSR",
      born: "1894",
      died: "1971",
      bio: "Coal miner, Communist Party survivor, Stalin's successor. By 1957 he is finishing his consolidation of power and discovering — almost by accident — that space spectaculars are foreign policy. The Sputnik launch was scheduled around the International Geophysical Year, not the propaganda calendar; the propaganda landed anyway.",
      ideology:
        "Beat the Americans in public, in real time, with whatever's in the warehouse. Rocket socialism.",
      voice:
        "Peasant theatricality. Loud, profane, capable of warmth. Speaks like a man who once dug coal.",
      allies: ["korolev"],
      enemies: ["eisenhower"],
      blindspots:
        "Treats engineering schedules as political schedules. Believes the Chief Designer can ship anything on demand.",
      keyFact:
        "Will rattle a shoe at the UN General Assembly in 1960. The image becomes definitional even though the shoe-banging itself is disputed.",
      fate: "Removed from power October 1964 — partly because his \"rocket socialism\" produced spectacles but not a stable economy. Lives quietly in Moscow, dictates memoirs smuggled to the West, dies of heart disease 1971.",
      color: "#f97316",
    },
    {
      id: "von-braun",
      name: "Wernher von Braun",
      role: "Director, Army Ballistic Missile Agency (Huntsville)",
      born: "1912",
      died: "1977",
      bio: "Aristocratic Prussian rocket designer. Built the V-2 for Nazi Germany using slave labour at Mittelwerk. Surrendered to the US in 1945 with his team via Operation Paperclip. By 1957 he runs the Army's Redstone rocketry programme in Huntsville, Alabama. Wanted the satellite contract; the Eisenhower administration gave it to the Navy's Vanguard project instead, for political reasons he resents.",
      ideology:
        "Get there. He has carried that ideology across two regimes and two flags.",
      voice:
        "Charismatic, theatrical, German-accented English. Salesman as much as engineer.",
      allies: ["lbj"],
      enemies: ["vanguard-project"],
      blindspots:
        "His Nazi years. The slave labour at Mittelwerk. The fact that he is permitted in America because he is useful.",
      keyFact:
        "His Saturn V is what will eventually put Americans on the moon. His V-2 killed civilians in London twelve years before this scene.",
      fate: "Becomes the public face of NASA. Hosts Disney TV specials in 1955; will host more. Dies of pancreatic cancer 1977 at 65.",
      color: "#71717a",
    },
    {
      id: "eisenhower",
      name: "Dwight D. Eisenhower",
      role: "President of the United States",
      born: "1890",
      died: "1969",
      bio: "Five-star general; liberated Europe; now a second-term president grappling with the fact that Soviet rocketry leapt ahead while he was managing a low-key presidency. Has been briefed on the R-7 tests by U-2 reconnaissance — he is less surprised by Sputnik than the American public, and more troubled by their reaction than by the satellite.",
      ideology:
        "Keep the panic measured. The Soviets are ahead in one thing, not everything. Build a civilian space agency. Do not let the generals run it.",
      voice:
        "Dry, military-clipped, occasional folksiness. Underestimated by Democrats. Takes the long view.",
      allies: ["killian"],
      enemies: [],
      blindspots:
        "The public has more emotional reaction to Sputnik than he does. He does not fully feel the panic.",
      keyFact:
        "His farewell address (January 17, 1961) will coin \"military-industrial complex.\" Sputnik is one of the reasons it is on his mind.",
      fate: "Leaves office January 1961. Retires to his Gettysburg farm. Dies of heart disease 1969 — three months before Apollo 11.",
      color: "#4b5563",
    },
    {
      id: "lbj",
      name: "Lyndon B. Johnson",
      role: "Senate Majority Leader (Texas)",
      born: "1908",
      died: "1973",
      bio: "Texas senator at the height of his Senate power. Will turn the Senate Preparedness Subcommittee into the engine of America's space response. Hears about Sputnik at his ranch on the Pedernales; Lady Bird later recalled him standing in the yard looking up and saying that the sky would never feel the same.",
      ideology:
        "Texas-sized politics. If the Russians have it, we have to have a bigger one. Federal money for federal greatness.",
      voice:
        "Massive, profane, Texas-stretched. Can charm a room or break it. Phones at midnight without apology.",
      allies: ["von-braun"],
      enemies: [],
      blindspots:
        "Reads every Soviet first as a personal humiliation.",
      keyFact:
        "Will sign the Civil Rights Act of 1964, the Voting Rights Act of 1965, and stand behind the moon landing in 1969 — five years after Khrushchev's fall.",
      fate: "Becomes President in 1963. Wins 1964 in a landslide. Declines to run in 1968, broken by Vietnam. Dies January 22, 1973 — one day before the Vietnam peace accords are announced.",
      color: "#ea580c",
    },
    {
      id: "jfk",
      name: "John F. Kennedy",
      role: "Senator from Massachusetts",
      born: "1917",
      died: "1963",
      bio: "Junior senator at the time of Sputnik. Watches LBJ build the hearings; takes notes. By 1960 he will be running for president on a \"missile gap\" that intelligence already knows is mostly fiction — but Sputnik gave the phrase its weight.",
      ideology:
        "America does hard things, especially when it is losing. Set a goal big enough that failing to reach it is still progress.",
      voice:
        "Boston-Harvard, controlled, capable of soaring without smiling. Better in writing than off-the-cuff.",
      allies: ["sorensen"],
      enemies: ["khrushchev"],
      blindspots:
        "Health concealment. He is much sicker than the public knows.",
      keyFact:
        "Will declare on September 12, 1962: \"We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard.\" Five years from this scene.",
      fate: "Assassinated in Dallas November 22, 1963 — six years before the moon landing he set in motion.",
      color: "#2563eb",
    },
    {
      id: "cronkite",
      name: "Walter Cronkite",
      role: "CBS News, anchor and correspondent",
      born: "1916",
      died: "2009",
      bio: "World War II war correspondent (United Press, then CBS). By 1957 he hosts the documentary series You Are There and The Twentieth Century. Will become the CBS Evening News anchor in 1962 and cover every American space milestone for the next two decades.",
      ideology:
        "The American public has a right to understand what just happened.",
      voice:
        "Authoritative, midwestern, capable of awe but rarely showing it.",
      allies: [],
      enemies: [],
      blindspots:
        "Trusts press releases more than he should — particularly in 1957.",
      keyFact:
        "When Neil Armstrong steps onto the moon in July 1969, Cronkite will remove his glasses on live television and say \"Oh, boy.\"",
      fate: "Anchors CBS Evening News 1962–1981. Will sign off every broadcast with \"And that's the way it is.\" Dies 2009.",
      color: "#475569",
    },
    {
      id: "gagarin",
      name: "Yuri Gagarin",
      role: "Senior Lieutenant, Soviet Air Force",
      born: "1934",
      died: "1968",
      bio: "Smolensk peasant boy turned MiG-15 pilot. In October 1957 he is a 23-year-old serving at an Air Force base in the Murmansk region; he reads about Sputnik in the newspaper like everyone else. Three and a half years from being chosen as the first human in space.",
      ideology:
        "Service. Discipline. The Party put you here; the Party gets the credit.",
      voice:
        "Disarmingly modest. Smiles in every press photograph. His radio chatter from Vostok 1 will be calm to the point of boredom.",
      allies: ["korolev"],
      enemies: [],
      blindspots:
        "Believes he will fly again after Vostok. The Politburo will not let him risk a national asset.",
      keyFact:
        "On April 12, 1961 he will become the first human being to orbit the Earth — one and a half hours alone in a capsule the size of a refrigerator. Promoted from Senior Lieutenant to Major between liftoff and lunch.",
      fate: "Dies March 27, 1968, in a MiG-15 training crash near Kirzhach. He was thirty-four.",
      color: "#f43f5e",
    },
    {
      id: "armstrong",
      name: "Neil Armstrong",
      role: "Naval aviator, Edwards AFB test pilot",
      born: "1930",
      died: "2012",
      bio: "Korean War aviator (78 combat missions, one bailout). In 1957 he is a civilian research pilot for NACA — the agency Sputnik will turn into NASA inside twelve months — flying X-1B and other rocket aircraft out of Edwards. Quiet, professional, the kind of man described as quiet in nine biographies out of ten.",
      ideology:
        "Do the thing. Don't perform the doing.",
      voice:
        "Spare, midwestern, engineer-precise. Famously bad at small talk.",
      allies: [],
      enemies: [],
      blindspots:
        "Underestimates how much the public will need him to perform after he comes home.",
      keyFact:
        "Probably said \"one small step for a man\" with the article — degraded by audio transmission. Will spend decades being asked which version is right.",
      fate: "Retires from NASA in 1971. Teaches engineering at the University of Cincinnati. Dies 2012.",
      color: "#94a3b8",
    },
    {
      id: "webb",
      name: "James E. Webb",
      role: "Undersecretary of State; future NASA Administrator",
      born: "1906",
      died: "1992",
      bio: "Lawyer, Marine pilot, oil-industry executive, undersecretary of state under Truman. In 1957 he is back in the private sector. Kennedy will appoint him to run NASA in 1961; he will run it through Mercury, Gemini, and most of Apollo. The bureaucrat the moon landing requires.",
      ideology:
        "Don't let politicians redefine the goal mid-flight. Spend the money on the engineering, not the press.",
      voice:
        "North Carolina drawl over Washington diction. Reads as folksy; isn't.",
      allies: ["lbj"],
      enemies: [],
      blindspots:
        "His decisions during the Apollo 1 fire investigation will be questioned for decades.",
      keyFact:
        "NASA's flagship space telescope will be named for him in 2002 — a naming contested because of his 1950s-era role in firings of suspected gay employees during the Lavender Scare.",
      fate: "Resigns from NASA October 1968 — three months before Apollo 8 orbits the moon, nine months before Apollo 11 lands. Dies 1992.",
      color: "#d97706",
    },
  ],
  episodes: [
    {
      id: "sputnik",
      number: 1,
      title: "Sputnik",
      premise:
        "October 4–10, 1957. A 183-pound aluminum sphere shaped like a basketball orbits the Earth every 96 minutes, broadcasting a beep at 20.005 and 40.002 MHz. The Soviets aren't sure it'll matter. America is sure it matters and isn't sure what to do.",
      timeWindow: "October 4–10, 1957",
      location: "Tyura-Tam · Moscow · Huntsville · Washington · the Pedernales",
      characterStakes: {
        korolev:
          "Has just succeeded with the R-7 (the third successful test, after a string of failures). Wants acknowledgement; will not get it because his name is classified. Already being pressured for an encore in thirty days, before the November 7 anniversary of the Revolution.",
        glushko:
          "His engines lifted the sphere. The world will credit Korolev — the world doesn't even know Korolev's name. Watches the Chief Designer get the halo he himself helped earn, and files it.",
        khrushchev:
          "Astonished by the global reaction. Realises within hours that he has a propaganda weapon he didn't pay for. Already pressuring Korolev for Sputnik 2 — bigger, with a living payload, by November 7.",
        "von-braun":
          "Furious that the Navy's Vanguard project was given the public satellite slot. Has been pleading for years to be allowed to launch one on a Redstone. Sees Sputnik as proof he was right, and as another humiliation he was forced to watch.",
        eisenhower:
          "Privately resigned — the U-2 has been photographing the R-7 tests for months; he knew this was coming. Publicly trying to project calm. Worried the public panic will produce expensive bad policy.",
        lbj:
          "Sees the opening. Calling colleagues from the ranch. Will lead the Senate Preparedness Subcommittee hearings into America's missile and space posture starting in November. The hearings will produce NASA.",
        jfk:
          "Junior senator watching LBJ. Privately knows the \"missile gap\" is overstated; publicly notes that Sputnik gave the phrase its weight. Taking notes for a campaign that is still three years away.",
        cronkite:
          "Translating orbital mechanics into something Americans can grasp at the dinner table. Has interviewed Wernher von Braun on television since 1955. Knows enough to ask the right questions, not enough to answer them.",
      },
      mustHitBeats: [
        "Oct 4 evening Moscow time: R-7 lifts off from Tyura-Tam; Sputnik enters orbit at 22:28:34",
        "TASS announcement next morning. The phrase \"artificial earth satellite\" is in the papers within hours",
        "American radar (Lincoln Lab, Jodrell Bank) confirms the orbit; amateur shortwave operators pick up the beep",
        "Eisenhower briefed; publicly minimises (\"one small ball in the air\"); privately accelerates planning for what will become NASA",
        "LBJ at the Pedernales — phones start ringing; he begins assembling the hearings",
        "Public press panic builds Oct 6–7: front pages, radio specials, school PA announcements",
        "Von Braun pleads to be allowed to launch on a Redstone — he claims sixty days; Vanguard is still months out",
        "Khrushchev orders Sputnik 2 for the November 7 anniversary, with a living payload (it will be Laika)",
        "The full propaganda machinery on the Soviet side catches up to what Korolev just gave them",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "Tyura-Tam, Kazakh SSR. October 4, 1957, 22:28 Moscow time. An R-7 ICBM has placed a 83.6-kilogram aluminium sphere into orbit around the Earth. The sphere is broadcasting a steady beep at 20.005 and 40.002 megahertz. Inside the Soviet government, only a handful of men know yet.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "korolev",
          text: "Tracking from Kamchatka confirms the second orbital pass. Telemetry clean. The signal is being heard.",
          basis: "compressed",
          sourceNote:
            "Korolev did receive confirmation of the second orbital pass that night. The line is paraphrased into chat register.",
        },
        {
          id: "msg-003",
          characterId: "korolev",
          text: "I am going to sleep. Wake me when the Americans say something.",
          basis: "interpretive",
          sourceNote:
            "Korolev was famously exhausted after the launch; he reportedly slept at the cosmodrome. The specific line is dramatized.",
        },
        {
          id: "msg-004",
          characterId: "khrushchev",
          text: "Comrade Chief Designer. A note. I would like another. Bigger. Inside thirty days. The anniversary of the Revolution is November the seventh. Surprise me twice.",
          basis: "compressed",
          sourceNote:
            "Khrushchev did order a follow-up satellite for the November 7 anniversary — Sputnik 2 with the dog Laika launched November 3. The form of address (\"Chief Designer\") reflects Khrushchev's pattern, since Korolev's name was a state secret.",
        },
        {
          id: "msg-005",
          characterId: "von-braun",
          text: "Sixty days. Sixty days and we can put one up. The Redstone has been sitting on the pad ready since fifty-six. Whose desk is the green light on, gentlemen.",
          basis: "compressed",
          sourceNote:
            "Von Braun publicly and privately pleaded for permission to launch a satellite on a Redstone-based rocket; Explorer 1 eventually launched on his Juno I on January 31, 1958. The exact wording is dramatized.",
        },
      ],
      endingHook:
        "Twenty-nine days from now, a small dog named Laika will be welded into a capsule on a Sputnik 2 launch vehicle. She will reach orbit. She will not come back. Khrushchev will not stop here.",
    },
  ],
};
