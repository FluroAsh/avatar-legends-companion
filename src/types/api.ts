type TechniqueTypes = "Fire" | "Water" | "Earth" | "Air" | "Universal" | "Group"

export type Stance =
  | "Advance and Attack"
  | "Defend and Maneuver"
  | "Evade and Observe"

export type Technique = {
  technique: string
  stance: Stance
  rare: string | boolean
  type: TechniqueTypes
  base?: string
  description: string
}

type Subclass = {
  name: string
  targetPlayer: boolean
  targetName?: string
  description: string
  description2?: string
  specials?: SubclassSpecial[]
  options?: string[]
  negativeOutcome?: string
}

type SubclassSpecial = {
  name: string
  description: string
  description2?: string
  options?: string[]
  negativeOutcome?: string
}

export type Playbook = {
  playbook: string
  baseStats: {
    creativity: number
    focus: number
    harmony: number
    passion: number
  }
  demeanours: string[]
  balance: string[]
  // TODO: Set up a content type for each subclass, so that we're able to properly
  // map the response to the correct subclass, and render the correct content/fields in the FE.
  subclass: Subclass
  moves: Move[]
  // TODO: Refactor JSON files to match the "technique" schema above
  startingTechnique: {
    name: string
    stance: Stance
    description: string
  }
  history: string[]
  connections: string[]
  momentOfBalance: string
  growthQuestion: string
}

// Moves will be mapped by a content structure,
export type Move = {
  move: string
  description: string
  options?: string[]
  negativeOutcome?: string
}
