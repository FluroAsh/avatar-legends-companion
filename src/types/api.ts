export type Move = {
  move: string
  description: string
  options?: string[]
  negativeOutcome?: string
}

type TechniqueTypes = "Fire" | "Water" | "Earth" | "Air" | "Universal" | "Group"

export type Stance =
  | "Advance and Attack"
  | "Defend and Maneuver"
  | "Evade and Observe"

export type TechniqueResponse = {
  technique: string
  stance: Stance
  rare: string | boolean
  type: TechniqueTypes
  base?: string
  description: string
}
