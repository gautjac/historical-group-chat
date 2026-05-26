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
    {
      id: "mishin",
      name: "Vasily Mishin",
      role: "Korolev's deputy; future Chief Designer",
      born: "1917",
      died: "2001",
      bio: "Aircraft engineer turned rocket designer. Was the pilot of the captured V-2 the Soviets reverse-engineered at Bleicherode in 1945. Korolev's deputy for twenty years; sharp, competent, less politically deft than his boss.",
      ideology:
        "Continue Korolev's work, even when the system has stopped supporting it.",
      voice:
        "Engineer-precise, quietly exhausted. Better with a slide rule than a Politburo committee.",
      allies: ["korolev"],
      enemies: ["glushko"],
      blindspots:
        "Believes the program can survive on engineering merit alone. Cannot.",
      keyFact:
        "Will inherit the Soviet moon programme on Korolev's death in 1966 and watch the N1 rocket fail four times in flight between 1969 and 1972 — including a failure on July 3, 1969, two weeks before Apollo 11, that levelled Launch Complex 110 at Baikonur and ended any realistic Soviet moon-shot.",
      fate: "Removed from his position in 1974 and replaced by Glushko, who erased him from the program's records for years. Eventually rehabilitated. Dies 2001.",
      color: "#991b1b",
    },
    {
      id: "grissom",
      name: "Virgil \"Gus\" Grissom",
      role: "Mercury Seven astronaut",
      born: "1926",
      died: "1967",
      bio: "Indiana, Air Force, Korean War combat pilot (100 missions). Flew Liberty Bell 7 on Mercury-Redstone 4 (1961) — capsule sank in the Atlantic when the hatch blew prematurely, Grissom nearly drowned. Commanded Gemini 3 (1965). Slated to command Apollo 1 in 1967.",
      ideology:
        "Get the engineering right or get killed by it. Test pilots die for reasons; astronauts had better not.",
      voice:
        "Indiana laconic. Blunt to the point of rudeness with engineers; warm with his crew.",
      allies: ["white"],
      enemies: [],
      blindspots:
        "Knows the Apollo Command Module is a mess; doesn't push hard enough up the chain to stop the timeline.",
      keyFact:
        "Hung a lemon on the Apollo Command Module during a press tour in late 1966. The trainers called the spacecraft a lemon too. He died in it five months later.",
      fate: "Dies January 27, 1967 in the Apollo 1 fire on Launch Complex 34. Was forty.",
      color: "#a3a3a3",
    },
    {
      id: "white",
      name: "Edward H. White II",
      role: "Astronaut, first American spacewalker",
      born: "1930",
      died: "1967",
      bio: "Air Force test pilot, West Point class of '52. Son of a brigadier general. First American to walk in space — Gemini 4, June 3, 1965; floated outside the capsule for 23 minutes on a gold-plated umbilical. Slated as Senior Pilot on Apollo 1.",
      ideology:
        "Service, family, fitness. NASA's golden boy in the mid-1960s.",
      voice:
        "West Point precision, dry humour, deeply Methodist. The closest thing to a poet in the astronaut corps.",
      allies: ["grissom"],
      enemies: [],
      blindspots:
        "Trusts the system. The system kills him.",
      keyFact:
        "When Gemini 4's mission controller ordered him to terminate the EVA after 23 minutes, he said: \"It's the saddest moment of my life.\"",
      fate: "Dies January 27, 1967 in the Apollo 1 fire. Was thirty-six. Buried at West Point at his family's request, not Arlington.",
      color: "#c084fc",
    },
    {
      id: "chaffee",
      name: "Roger B. Chaffee",
      role: "Astronaut, rookie",
      born: "1935",
      died: "1967",
      bio: "Naval aviator from Grand Rapids, Michigan. Selected by NASA in 1963; spent four years in training without flying. Apollo 1 would have been his first spaceflight. Married to Martha; two young children.",
      ideology:
        "Earn the seat. Don't speak unless you have something operational to say.",
      voice:
        "Quiet, methodical, the youngest voice on the loop.",
      allies: ["grissom", "white"],
      enemies: [],
      blindspots:
        "The rookie's deference. Defers to Grissom and White on issues he could have escalated.",
      keyFact:
        "Was photographing U-2 imagery of Cuban missile sites in 1962 — the photographs that helped Kennedy's team confirm the missiles were there.",
      fate: "Dies January 27, 1967 in the Apollo 1 fire. Was thirty-one.",
      color: "#fde047",
    },
    {
      id: "aldrin",
      name: "Buzz Aldrin",
      role: "Astronaut; Apollo 11 Lunar Module Pilot",
      born: "1930",
      bio: "Air Force fighter pilot in Korea (66 missions, two MiG kills). MIT doctorate in astronautics — his dissertation invented the techniques of orbital rendezvous the program would depend on. NASA astronaut from 1963; Gemini 12 in 1966 (final Gemini flight, longest EVA to date). Lunar Module Pilot on Apollo 11.",
      ideology:
        "Mission discipline. Engineering rigour. Has thought more about orbital mechanics than anyone else in the room and assumes others know it.",
      voice:
        "Engineer-clinical, slightly stiff, occasionally sharp. Says exactly what he means and assumes you'll keep up.",
      allies: ["armstrong"],
      enemies: [],
      blindspots:
        "Believes orbital mechanics is enough. The public wants poetry he is not built to deliver.",
      keyFact:
        "Took communion on the lunar surface — a Presbyterian elder, he brought wine and bread, and read silently from John 15 while waiting for the EVA. NASA did not publicise it.",
      fate: "Lives. Struggles with depression and alcoholism in the 1970s; recovers. Becomes one of the loudest advocates for crewed Mars missions. Still alive as of this writing.",
      color: "#e0e7ff",
    },
    {
      id: "collins",
      name: "Michael Collins",
      role: "Astronaut; Apollo 11 Command Module Pilot",
      born: "1930",
      died: "2021",
      bio: "Air Force test pilot, Edwards. NASA astronaut from 1963; Gemini 10 in 1966. Command Module Pilot on Apollo 11 — orbits the Moon alone while Armstrong and Aldrin walk. Will write the best astronaut memoir ever published, *Carrying the Fire*, in 1974.",
      ideology:
        "Service. The third seat is a real job. Hates the question \"weren't you the loneliest man?\" — he knew exactly what he was doing.",
      voice:
        "Warm, literary, the best writer of the three. The astronaut who can describe a sunset.",
      allies: ["armstrong", "aldrin"],
      enemies: [],
      blindspots:
        "Self-deprecating to a fault about what he himself accomplished.",
      keyFact:
        "For 21 hours and 36 minutes on July 20–21, 1969, when his orbit took him to the far side of the Moon with no radio contact, he was the most alone any human being has ever been.",
      fate: "Retires from NASA in 1970; runs the Smithsonian's National Air and Space Museum through its 1976 opening. Dies April 28, 2021, of cancer.",
      color: "#fb923c",
    },
    {
      id: "nixon",
      name: "Richard M. Nixon",
      role: "President of the United States",
      born: "1913",
      died: "1994",
      bio: "Eisenhower's vice president (so: in the room when Sputnik happened, sidelined when Sputnik happened). Lost to Kennedy in 1960. Lost the California governor's race in 1962 and told the press they wouldn't have him to kick around anymore. Comes back in 1968 and wins. Inherits the moon program he didn't build.",
      ideology:
        "Political opportunism. Will take credit for what he didn't fund. Hates the Kennedys and is about to become the president who completes their goal.",
      voice:
        "Awkward, deliberate, prone to overstatement. The opposite of Kennedy in every register.",
      allies: ["kissinger"],
      enemies: ["jfk"],
      blindspots:
        "Cannot help making the moon landing about himself.",
      keyFact:
        "His call to Armstrong and Aldrin on the lunar surface — \"Hello, Neil and Buzz, I am talking to you by telephone from the Oval Room at the White House\" — was scripted by Frank Borman, who advised him to keep it short.",
      fate: "Resigns August 9, 1974, ahead of certain impeachment for Watergate. Lives to 1994.",
      color: "#1e3a8a",
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
    {
      id: "vostok-1",
      number: 2,
      title: "Vostok 1",
      premise:
        "April 12, 1961. Senior Lieutenant Yuri Gagarin lifts off from Tyura-Tam at 09:07 Moscow time on a Vostok 3KA — single orbit, 108 minutes, ejected at 7 km, landed by parachute in a wheat field near Engels, Saratov. The first human being has been in space. The Soviet Union has done it again, and the new American president has six days until the Bay of Pigs.",
      timeWindow: "April 11–13, 1961",
      location: "Tyura-Tam · Saratov · Moscow · Washington · Huntsville",
      characterStakes: {
        gagarin:
          "Will fly. Trained for fifteen months; was named the prime crew six days ago. Knows the third backup pilot has just been removed from rotation. Tries not to think about what landing alive will mean for the rest of his life.",
        korolev:
          "Insists on being at the launch pad. Has been white-haired for three years. The Vostok is the most thoroughly tested machine he has ever built; he is still terrified.",
        khrushchev:
          "Sochi, on holiday, awakened by aide. Within an hour orders a press conference, a parade, every embassy on the phone. Has decided before lunchtime that this is the foreign-policy event of the decade.",
        "von-braun":
          "Huntsville, hearing the news on the radio. Alan Shepard's Mercury-Redstone flight is three weeks out — fifteen minutes suborbital, a hop. He knew this was coming. Says nothing publicly. Privately accelerates everything.",
        jfk:
          "Six days from the Bay of Pigs landing he has already approved. Reading the TASS wire copy at breakfast. Sends a cable congratulating Khrushchev. Spends the rest of the morning asking his cabinet what America can do that the Russians cannot.",
        lbj:
          "Vice President, sidelined by Kennedy. Sees this as the opening to push for what he has been quietly preparing — a commitment beyond satellites, beyond orbits, all the way to the Moon. He will have it inside six weeks.",
        cronkite:
          "Covering it across the morning on CBS — still doing special reports, a year before he takes the Evening News chair. Tries to explain to the audience what an orbit is.",
      },
      mustHitBeats: [
        "Apr 11: Korolev meets Gagarin at the cosmodrome the evening before. The cosmonauts call him Sergei Pavlovich; he treats them like sons.",
        "Apr 12 06:00 Moscow: suit-up; final medical checks; the bus ride to the pad. Gagarin asks the bus to stop and urinates on its rear tyre — a tradition Russian cosmonauts will perform for the next sixty years.",
        "09:07 Moscow time: Vostok-K rocket lifts off. Gagarin transmits «Поехали» — \"Let's go.\"",
        "09:25: Orbit confirmed. Apogee 327 km, perigee 169 km.",
        "10:25: Retrofire over Africa. Service module separates badly — a cable doesn't release for ten minutes, causes a chaotic re-entry roll. Kept secret until 1989.",
        "10:55 Moscow: Gagarin ejects at 7 km, parachutes into a field near Engels, Saratov. First person to see him is a forestry worker's wife, Anna Takhtarova, with her granddaughter Rumiya. He says: \"Do not be frightened, I am a Soviet like you.\"",
        "Within an hour, Khrushchev promotes Gagarin from Senior Lieutenant to Major.",
        "Apr 14: JFK convenes his cabinet. \"Is there any place we can catch them? What can we do? Let's find somebody — anybody. I don't care if it's the janitor over there, if he knows how.\"",
        "Within weeks: Kennedy will commit America to the Moon. Gagarin will never fly in space again — the Politburo will not risk the national asset.",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "April 12, 1961. Tyura-Tam, Kazakh SSR. 09:07 Moscow time. Senior Lieutenant Yuri Gagarin, twenty-seven years old, lifts off on a Vostok-K rocket. Single orbit planned. No human being has ever been in space before.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "gagarin",
          text: "Поехали. Let's go.",
          basis: "established",
          sourceNote:
            "Gagarin's transmission at liftoff. The Russian \"Poyekhali\" became one of the most-quoted lines of the twentieth century.",
        },
        {
          id: "msg-003",
          characterId: "korolev",
          text: "Burn time correct. He is in orbit. Telemetry holds. I am going to sit down for the first time in three days.",
          basis: "interpretive",
          sourceNote:
            "Korolev was at the launch bunker and famously distressed. The line is dramatized; his exhaustion is documented in his deputy's memoirs.",
        },
        {
          id: "msg-004",
          characterId: "khrushchev",
          text: "Comrades. A Soviet man. In space. The first. I want him on Red Square the moment his feet are on the ground. I want every embassy on the wire by sundown. And promote him to Major. Do it before lunch.",
          basis: "compressed",
          sourceNote:
            "Khrushchev did order an immediate parade and a same-day promotion to Major. The wording is paraphrased into chat register.",
        },
        {
          id: "msg-005",
          characterId: "jfk",
          text: "Cable to Premier Khrushchev. Sincere congratulations on the safe flight of the astronaut. The peoples of the United States share with the people of the Soviet Union their satisfaction. Then: get me Webb. Get me Wiesner. Find me something — anything — we can win.",
          basis: "compressed",
          sourceNote:
            "Kennedy's public cable to Khrushchev on April 12 is preserved verbatim. The \"find me anything\" exchange paraphrases his cabinet meetings of April 14, recorded in Sorensen's notes.",
        },
      ],
      endingHook:
        "Three weeks from now, on May 5, Alan Shepard will fly fifteen minutes of a suborbital arc inside a Mercury capsule. The gap will not be closed by parity. On May 25, Kennedy will stand before Congress and ask for a commitment to the Moon. Within eight years, three Americans will leave for it.",
    },
    {
      id: "rice",
      number: 3,
      title: "We choose to go to the moon",
      premise:
        "September 12, 1962. Rice University Stadium, Houston, Texas. 100°F on the field. President Kennedy delivers thirty-five minutes of prepared remarks — the philosophical case for the political bet he placed sixteen months ago. The speech that explains the Apollo programme to America, and to itself.",
      timeWindow: "September 12, 1962",
      location: "Rice Stadium, Houston · Cape Canaveral · Moscow",
      characterStakes: {
        jfk:
          "Has bet the programme on the Moon. Today's speech is the philosophical case for what he committed to politically in May 1961. Knows from Webb that Apollo will be the largest peacetime federal expenditure in American history. Has to make it sound less like a budget line and more like an idea.",
        webb:
          "NASA Administrator since 1961. Has built the agency from 7,000 employees to nearly 30,000 in eighteen months. Knows the cost — twenty to twenty-five billion dollars by 1969. Wants the President to sell it the way only the President can sell anything.",
        lbj:
          "Vice President. Pushed Kennedy into the moon commitment in 1961. Wanted Houston for the Manned Spacecraft Center for Texas-political reasons and got it. Today's speech is on his home turf, his moment of vindication, his choice of stage.",
        "von-braun":
          "Director of Marshall Space Flight Center. The Saturn V is in development. Has finally been listened to after a decade of being told to wait. Wants more money than even Kennedy is asking for.",
        korolev:
          "Moscow. Reading the wire reports the same afternoon. The Americans are publicly committing to what the Soviet programme has been doing in silence. Sees the moment when openness might beat his system.",
        khrushchev:
          "Publicly: dismissive. \"We are not racing the Americans to the Moon.\" Privately: orders the Soviet moon programme accelerated. Two parallel lunar programmes will start, neither well funded.",
        cronkite:
          "CBS Evening News anchor for five months. Covers the speech live. Knows half his audience does not know what Houston is.",
      },
      mustHitBeats: [
        "Morning: Kennedy tours the Manned Spacecraft Center site, meets engineers, looks at the Mercury capsule from John Glenn's Friendship 7 flight.",
        "Backstage at Rice Stadium: final edits to the speech text. Theodore Sorensen present. Kennedy hand-marks the page.",
        "10:00 AM Central: Kennedy walks to the podium. The audience is roughly 35,000, mostly Rice students.",
        "The line: \"We choose to go to the Moon. We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.\"",
        "Kennedy ad-libs around the prepared text: \"because that goal will serve to organize and measure the best of our energies and skills.\" (Not in the typed draft.)",
        "Mentions Saturn V by name — the rocket that does not yet exist.",
        "Acknowledges the cost: more than fifty cents per American per week. \"That is more than five times what we spend each year on cigars and cigarettes combined.\"",
        "Speech ends. Standing ovation. Kennedy leaves for a tour of Cape Canaveral the same day.",
        "By evening Moscow time, TASS has the speech. Khrushchev's response by morning is dismissive in public; the Politburo memo is different.",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "September 12, 1962. Rice University Stadium, Houston, Texas. 10:00 AM Central. Temperature on the field: 100°F. President Kennedy has thirty-five minutes of prepared remarks. The audience is roughly 35,000 — mostly Rice students.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "jfk",
          text: "We set sail on this new sea because there is new knowledge to be gained, and new rights to be won, and they must be won and used for the progress of all people. We choose to go to the Moon. We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard.",
          basis: "established",
          sourceNote:
            "From Kennedy's Rice Stadium address, September 12, 1962. The sentence as delivered.",
        },
        {
          id: "msg-003",
          characterId: "webb",
          text: "Mr Vice President. If he sells it today we get the appropriation. If he doesn't we get a hearing.",
          basis: "interpretive",
          sourceNote:
            "Webb and LBJ were both present. The line is invented to convey Webb's documented preoccupation with funding.",
        },
        {
          id: "msg-004",
          characterId: "korolev",
          text: "They have committed in public to a destination. Inside ten days the Politburo will demand we beat them to it. The N1 does not yet exist on paper that satisfies me. The schedule will not be the schedule the Politburo writes.",
          basis: "compressed",
          sourceNote:
            "Korolev did receive an accelerated mandate after Kennedy's speech. The exact line is dramatized; the program-feasibility doubts are documented.",
        },
        {
          id: "msg-005",
          characterId: "khrushchev",
          text: "Let them go. We have no plans to compete with them on this. Our programme is for peaceful science, not propaganda gestures.",
          basis: "established",
          sourceNote:
            "Khrushchev's public posture in late 1962 was that the USSR was not racing for the Moon. Soviet documents declassified in the 1990s revealed the parallel N1-L3 lunar programme was running.",
        },
      ],
      endingHook:
        "Fourteen months from this afternoon, the man at the podium will be dead. The decade he just committed America to will continue without him. Inside seven years, three of his countrymen will sit on top of a Saturn V rocket, the one he just named, at the spaceport that will be renamed for him.",
    },
    {
      id: "apollo-1",
      number: 4,
      title: "Apollo 1",
      premise:
        "January 27, 1967. A routine plugs-out test on Launch Complex 34, Cape Kennedy. The Apollo Command Module is pressurized with 100% oxygen at 16.7 psi — higher than ambient. At 6:31 PM EST a spark, almost certainly electrical, ignites materials in the cabin. The three-person crew — Grissom, White, Chaffee — is dead in seventeen seconds. The hatch design (inward-opening, three layers, ninety seconds to open under ideal conditions) makes rescue impossible. The Apollo programme stops for twenty-one months.",
      timeWindow: "January 27, 1967 + 72 hours",
      location: "Launch Complex 34, Cape Kennedy · Houston · Washington · Huntsville",
      characterStakes: {
        grissom:
          "Has been complaining about the Apollo Command Module for months — wiring, the high-oxygen atmosphere, the volume of flammable Velcro. Hung a lemon on the spacecraft during a press tour. Will die today and never get the chance to be the third American on the Moon, which was always how he thought this would end.",
        white:
          "Senior Pilot of Apollo 1. First American to walk in space, June 1965. Has a wife (Patricia) and two children at Patrick Air Force Base. Will be buried at West Point, not Arlington, at his family's request.",
        chaffee:
          "Apollo 1 would have been his first spaceflight after four years of training. Wife Martha, daughter Sheryl Lyn (8), son Stephen (5). Photographed U-2 imagery of Cuban missile sites in 1962 — the photographs that helped confirm the missiles were there. Will die today at thirty-one.",
        webb:
          "NASA Administrator. Inherits the political wreckage. Must defend the programme before Congress while the Vietnam War erodes the budget. The investigation that follows will be the most contentious of his career.",
        "von-braun":
          "Director, Marshall Space Flight Center. Says almost nothing publicly for weeks. Privately accelerates the Saturn V testing schedule — convinced the only way to honour the dead is to keep flying.",
        lbj:
          "President. Has to defend NASA's budget while protests mount over Vietnam. The fire makes both political fights harder.",
      },
      mustHitBeats: [
        "Afternoon: crew arrives at Pad 34, suits up, strapped into the Command Module. Atmosphere set to 100% oxygen at 16.7 psi for the plugs-out test.",
        "6:00 PM: Communications problems begin. Grissom on the loop: \"How are we going to get to the Moon if we can't talk between two and three buildings?\"",
        "6:31 PM EST: first telemetry indication of fire. Crew transmission preserved on tape; will not be replayed in this scene.",
        "Seventeen seconds: cabin pressure rises past hatch-survival limits; fire consumes the cabin atmosphere.",
        "Pad crew on the outer level cannot open the hatch — three layers, all inward-opening against the over-pressure.",
        "6:36 PM: hatch finally opened. All three astronauts dead.",
        "Same evening: Webb cancels the next morning's scheduled events; calls every NASA Center director to Washington.",
        "Jan 28: NASA Apollo 204 Review Board convened. Frank Borman appointed to the investigation.",
        "Spring 1967: redesigns. Hatch becomes outward-opening, quick-release. Atmosphere reduced to a 60/40 nitrogen/oxygen mix at sea-level pressure for ground testing. Flammable materials catalogued and removed.",
        "April 1967: NASA designates the mission \"Apollo 1\" posthumously, at the families' request.",
        "Twenty-one months: the next crewed Apollo mission (Apollo 7) flies in October 1968.",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "Launch Complex 34, Cape Kennedy. January 27, 1967, late afternoon. The Apollo 1 crew — Command Pilot Virgil Grissom, Senior Pilot Edward White, Pilot Roger Chaffee — is suited and strapped into the Command Module for a plugs-out integration test. The cabin atmosphere is 100% oxygen at 16.7 psi.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "grissom",
          text: "Reading you about five by five. How are we going to get to the Moon if we can't talk between two and three buildings?",
          basis: "established",
          sourceNote:
            "Grissom's complaint during the communications difficulty is preserved on the test transcript. One of the last things he is recorded as saying.",
        },
        {
          id: "msg-003",
          characterId: "chaffee",
          text: "Copy. We'll keep trying. Pad, can we get a recheck on the COMM 2 voltage.",
          basis: "interpretive",
          sourceNote:
            "Chaffee's role on the loop was communicator with the pad. The line is paraphrased to keep his voice in the scene without dramatising what came next.",
        },
        {
          id: "msg-004",
          characterId: "system",
          text: "6:31 PM EST. A spark — almost certainly electrical, almost certainly under Grissom's couch — ignites materials inside the cabin. The 100% oxygen atmosphere at 16.7 psi turns the interior into a flash fire. Cabin pressure exceeds the hatch's survival rating within seconds. The crew's transmissions during the seventeen seconds that follow are preserved on tape and on the transcript. They will not be played here.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-005",
          characterId: "webb",
          text: "Cancel tomorrow's events. I want every Center director in Washington by 0700. We need to understand exactly what we did to those three men and then we have to decide, very carefully, whether and how we keep flying.",
          basis: "interpretive",
          sourceNote:
            "Webb did cancel the next day's events and convene the investigation overnight. The exact line is dramatized.",
        },
      ],
      endingHook:
        "The next crewed Apollo mission, Apollo 7, will fly twenty-one months from tonight, October 1968. The Block II Command Module that flies it will have an outward-opening hatch, a 60/40 nitrogen/oxygen ground atmosphere, no flammable Velcro on the floor, and Grissom's name on a plaque inside it. Six months after that, Apollo 11 will land on the Moon. The dead three never see it. The programme remembers them as the reason they did.",
    },
    {
      id: "apollo-11",
      number: 5,
      title: "Apollo 11",
      premise:
        "July 16–24, 1969. Eight days. A Saturn V lifts off from Kennedy Space Center at 9:32 AM EDT on July 16 with Armstrong, Aldrin, and Collins aboard. Four days later, the Lunar Module Eagle descends into the Sea of Tranquility with a guidance-computer alarm Mission Control has to evaluate in real time. At 10:56 PM EDT on July 20, Armstrong steps onto the lunar surface. Twenty-one and a half hours later they leave. Two weeks before, in the Kazakh desert, the Soviet N1 moon rocket had failed catastrophically on its second test launch — taking with it the last realistic Soviet chance of getting there first.",
      timeWindow: "July 16–24, 1969",
      location: "Kennedy Space Center · cislunar space · Sea of Tranquility · Houston · Oval Office · CBS · Baikonur · LBJ Ranch",
      characterStakes: {
        armstrong:
          "Commander. Will be the first human being to step onto another world. Has not told his wife what he plans to say. His pulse rate during the manual landing of the Eagle will be 150 — the calmest possible reading for the circumstances.",
        aldrin:
          "Lunar Module Pilot. Second man on the Moon, a fact he will spend decades not minding more than he says. Will take communion on the surface — Presbyterian elder, brought bread and wine, read silently from John 15 while waiting for the EVA.",
        collins:
          "Command Module Pilot. Will orbit the Moon alone for 21 hours and 36 minutes while Armstrong and Aldrin walk. For the part of his orbit on the far side, he will be the most alone any human being has ever been. He will spend the rest of his life answering questions about loneliness he never felt.",
        "von-braun":
          "Director, Marshall Space Flight Center. The Saturn V is his — the largest rocket ever flown, all 363 feet of it, all five F-1 engines on the first stage, 7.6 million pounds of thrust at liftoff. Has waited for this since he was twenty. Stands at Cape Kennedy, watching, and does not say much.",
        nixon:
          "President. Inherited the programme he did not build. Will speak to the astronauts from the Oval Office on the lunar surface — a call scripted by Frank Borman, who advised him to keep it short. Has a second speech prepared in case the astronauts cannot lift off; it begins \"Fate has ordained that the men who went to the moon to explore in peace will stay on the moon to rest in peace.\" He will not have to give it.",
        cronkite:
          "CBS Evening News, eight days on the air. Will remove his glasses, rub his eyes, and say \"Oh, boy\" when the Eagle lands. Will narrate the EVA live for an audience of roughly 600 million — at that time the largest television audience in human history.",
        lbj:
          "Out of office. Watching from his ranch on the Pedernales — the same ranch where he stood in the yard in October 1957 and looked at the sky after Sputnik. Lights a cigarette he is not supposed to be smoking. Says little.",
        mishin:
          "Moscow. Chief Designer after Korolev's death. Watched the N1 fail on July 3 — thirteen days ago — destroying Launch Complex 110 at Baikonur in the largest non-nuclear explosion in human history at that time. The Soviet press has been told not to cover Apollo 11 in detail. He is watching American television feeds via a tape forwarded through the KGB.",
      },
      mustHitBeats: [
        "July 3: USSR's N1 rocket fails on its second test launch, destroys LC-110 at Baikonur. The Soviet moon programme is functionally over. Western press does not know yet.",
        "July 16 09:32 EDT: Saturn V SA-506 lifts off. CBS audience: approximately 600 million worldwide.",
        "July 19: Apollo 11 enters lunar orbit. Eagle separates July 20.",
        "July 20 20:17 UTC (4:17 PM EDT): Eagle lands on the Sea of Tranquility. Computer 1202 alarm during descent; Steve Bales in Houston calls \"go.\" Armstrong takes manual control, lands with about twenty-five seconds of fuel remaining.",
        "20:18 UTC: \"Houston, Tranquility Base here. The Eagle has landed.\"",
        "Crew rest was scheduled but waived — they want to do the EVA now.",
        "02:56 UTC July 21 (22:56 EDT July 20): Armstrong steps onto the surface. \"That's one small step for [a] man, one giant leap for mankind.\"",
        "03:39 UTC: Aldrin joins. Takes communion privately. Plants the flag.",
        "Nixon's call from the Oval Office. Borman has briefed him to keep it short.",
        "21h 36m after landing, Eagle ascends. Rendezvous with Columbia. Trans-Earth injection.",
        "July 24: splashdown in the Pacific. USS Hornet recovery. Quarantine begins.",
      ],
      startingMessages: [
        {
          id: "msg-001",
          characterId: "system",
          text: "July 16, 1969. Kennedy Space Center, Florida. 09:32 EDT. A Saturn V rocket — three stages, 363 feet, 7.6 million pounds of thrust — lifts off carrying Armstrong, Aldrin, and Collins. Live worldwide television audience: approximately 600 million. Thirteen days ago the Soviet N1 moon rocket exploded on its launch pad at Baikonur, destroying Launch Complex 110 in the largest non-nuclear explosion in human history at that time. The Western press does not know yet.",
          kind: "system",
          basis: "established",
        },
        {
          id: "msg-002",
          characterId: "armstrong",
          text: "Roger, the clock is running. Tower clear.",
          basis: "established",
          sourceNote:
            "Armstrong's actual transmission seconds after liftoff. Among the more famous laconic communications in the spaceflight record.",
        },
        {
          id: "msg-003",
          characterId: "mishin",
          text: "Comrade. The radio has the Saturn five away. Confirm: we are saying nothing officially. The N1 site is still smoking. They cannot photograph it from orbit yet. Maintain the line.",
          basis: "interpretive",
          sourceNote:
            "The N1 failed on July 3, 1969, destroying LC-110. Soviet authorities did not publicly acknowledge the failure for years. The line is dramatized; the silence policy is established.",
        },
        {
          id: "msg-004",
          characterId: "cronkite",
          text: "We have liftoff. Thirty-two minutes past the hour. Liftoff on Apollo 11. The largest audience in the history of broadcasting is watching, we are told, and what they are watching is the first half-million miles of a journey that has been three hundred thousand years coming.",
          basis: "interpretive",
          sourceNote:
            "Cronkite did cover the launch live on CBS. The exact wording is dramatized; the audience figure (~600 million) is accurate.",
        },
        {
          id: "msg-005",
          characterId: "von-braun",
          text: "All five F-ones burned full duration. Stage one separation clean. The vehicle did what the vehicle was supposed to do. I am going to sit down now.",
          basis: "interpretive",
          sourceNote:
            "Von Braun was at Cape Kennedy for the launch. The line is dramatized; his Saturn V did perform nominally on Apollo 11.",
        },
      ],
      endingHook:
        "Eight days from now they will splash down in the Pacific. Twenty-one days from now they will leave quarantine. Two months from now they will tour twenty-two countries in forty-five days. The Apollo programme will fly six more times, land five of them, return 382 kilograms of lunar rock — and end in 1972 with Apollo 17, after which no human being has stood on another world. Not yet.",
    },
  ],
};
