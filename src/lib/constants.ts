/* eslint-disable no-unused-vars */
export const DAILY_REVALIDATE = 86400

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

if (!BASE_URL) {
  throw new Error('"NEXT_PUBLIC_BASE_URL" must be set in your .env file')
}

export const DEFAULT_PLAYBOOK = "bold"

export const TRAINING_KEYS = {
  water: "Water",
  earth: "Earth",
  fire: "Fire",
  air: "Air",
  weapons: "Weapons",
  technology: "Technology",
} as const

export const STATUSES = {
  POSITIVE: {
    EMPOWERED: "empowered",
    FAVORED: "favored",
    INSPIRED: "inspired",
    PREPARED: "prepared",
  },
  NEGATIVE: {
    DOOMED: "doomed",
    IMPAIRED: "impaired",
    TRAPPED: "trapped",
    STUNNED: "stunned",
  },
} as const

export const STATS = {
  CREATIVITY: "creativity",
  HARMONY: "harmony",
  FOCUS: "focus",
  PASSION: "passion",
} as const

export const ARCHETYPES = {
  ADAMANT: "adamant",
  DESTINED: "destined",
  ELDER: "elder",
  FOUNDLING: "foundling",
  GUARDIAN: "guardian",
  HAMMER: "hammer",
  ICON: "icon",
  PILLAR: "pillar",
  PRODIGY: "prodigy",
  RAZOR: "razor",
  ROGUE: "rogue",
  SUCCESSOR: "successor",
} as const

export const BACKGROUNDS = {
  MILITARY: "military",
  OUTLAW: "outlaw",
  URBAN: "urban",
  MONASTIC: "monastic",
  PRIVILEGED: "privileged",
  WILDERNESS: "wilderness",
} as const

export const DEMEANOURS = {
  "ABOVE-IT-ALL": "above it all",
  PERFECTIONIST: "perfectionist",
  CHILLY: "chilly",
  REBELLIOUS: "rebellious",
  FLIPPANT: "flippant",
  STANDOFFISH: "standoffish",
  IMPATIENT: "impatient",
  SENSITIVE: "sensitive",
  AFFABLE: "affable",
  ENTHUSIASTIC: "enthusiastic",
  TALKATIVE: "talkative",
  IMPETUOUS: "impetuous",
  EAGER: "eager",
  SOLEMN: "solemn",
  HAUNTED: "haunted",
  UNCERTAIN: "uncertain",
  JOCULAR: "jocular",
  WATCHFUL: "watchful",
} as const

export const CONDITIONS = {
  AFRAID: "afraid",
  ANGRY: "angry",
  GUILTY: "guilty",
  INSECURE: "insecure",
  TROUBLED: "troubled",
} as const

export const CLEARING_CONDITIONS = {
  afraid: "Run from danger or difficulty.",
  angry: "Break something important or lash out at a friend",
  guilty: "Make a personal sacrifice to absolve your guilt.",
  insecure: "Take foolhardy action without talking to your companions.",
  troubled: "Seek guidance from a mentor or powerful figure.",
} as const

export const TRAINING_DESCRIPTIONS = {
  waterbending:
    "Weaving water into snapping and slashing whips, manipulating one's breath into clouds of freezing ice, sculpting liquid into a defensive shield—waterbending warriors manipulate their element with fluidity and grace. A waterbender might defend their allies by creating liquid barriers to freeze weapons and attackers, or they might be an aggressive warrior who unleashes torrential water jets or concealable weapons made of ice. Not all waterbenders are warriors — some have healing powers as well. A waterbender might carry a waterskin with them to have something to bend at all times, or prefer to use nearby liquids instead — some waterbenders can even use their sweat.",
  earthbending:
    "Levitating stones to hurl them into obstacles, encasing one's body in a protective shell of earth, transmuting earth to quicksand to immobilize an enemy — earthbending warriors often bide their time, using their element to defend until the perfect moment to counterattack. An earthbender might be a durable defender with slow and deliberate strikes, or they might sunder the earth to disorient and separate their foes. Some earthbenders prefer to go barefoot to stay connected to their element; others carry tools like earthen discs or stone gauntlets to have something to bend nearby.",
  firebending:
    "Slicing through a barrier with a blade of flame, pinning enemies behind cover by unleashing a concentrated fire stream, driving an opponent away with a series of fireballs — firebending warriors manipulate their chi and ambient fire with intense and aggressive results. A firebender might prefer to barrage their foes from afar with precise fire bolts, or mix close punches and kicks with flame bursts to take the fight directly to the enemy. Because firebenders manipulate their own energy, they do not need to access their element from their immediate environment and are always 'armed'.",
  airbending:
    "Swiping air upwards to deflect incoming arrows, pulling air around a weapon to disarm someone, decreasing one's own air resistance to outmaneuver a stronger foe — airbending warriors use their element to defend themselves and redirect hostile energy. An airbender might be a cautious pacifist who enhances their speed to avoid danger and exhaust enemies, or a more proactive protector who employs bursts of wind to control the battlefield. An airbender might wear flowing clothes to create air ripples they can volley at attackers, or carry a special item or tool to focus their bending, like using a flute to focus air jets and amplify sound vibrations.",
  weapons:
    "Raining arrows down on opponents, pulling off a dangerous trick with a boomerang, deflecting blows with bare hands — weapon warriors are martial experts who can hold their own against benders. This training can represent any martial character who is not a bender—duelists, archers, unarmed chi-blockers, and more. A weapon warrior might be an amateur boxer fighting in seedy bars, a person transformed by a spirit, or a member of an ancient martial order. Weapon warriors might carry a variety of weapons appropriate to their style and era, or they might wield a single weapon so masterfully it is an extension of themselves.",
  technology:
    "Setting jury-rigged traps and snares, hurling flasks of alchemical concoctions, engaging enemies with self-made electrified weapons — a technology-based warrior uses their expertise with devices and machines to engage foes and resolve threats. A technological warrior might be an eager grease monkey with a love for deconstructing technology, a trapper adapting their survival skills on the fly, or a military engineer who wields and maintains advanced weapons and armor. While some weapon-using characters might also carry advanced weapons — like an electrified glove — they lack the expertise to build and repair these machines. Technological warriors might use a single complex device with many effects, carry the tools they need to create devices on the fly, or use simpler tools to devastating effect.",
} as const

export const GROWTH_ADVANCEMENTS = [
  {
    description: "Take a new move from your playbook",
    threshold: 2,
  },
  {
    description: "Take a new move from another playbook",
    threshold: 2,
  },
  {
    description: "Raise a stat by +1 (maximum of +2 in any given stat)",
    threshold: 1,
  },
  {
    description: "Shift your center one step",
    threshold: 2,
  },
  {
    description: "Unlock your Moment of Balance",
    threshold: 2,
  },
] as const

export const PLAYBOOKS = {
  ADAMANT: "adamant",
  BOLD: "bold",
  DESTINED: "destined",
  ELDER: "elder",
  FOUNDLING: "foundling",
  GUARDIAN: "guardian",
  HAMMER: "hammer",
  ICON: "icon",
  PILLAR: "pillar",
  PRODIGY: "prodigy",
  RAZOR: "razor",
  ROGUE: "rogue",
  SUCCESSOR: "successor",
} as const

export const STANCES = {
  ADVANCE_AND_ATTACK: "Advance & Attack",
  DEFEND_AND_MANEUVER: "Defend & Maneuver",
  EVADE_AND_OBSERVE: "Evade & Observe",
} as const
