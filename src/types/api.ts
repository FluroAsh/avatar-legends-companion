export type Move = {
  move: string
  description: string
  options?: string[]
  negativeOutcome?: string
}

type TechniqueTypes = "Fire" | "Water" | "Earth" | "Air" | "Universal" | "Group"

export type TechniqueResponse = {
  technique: string
  stance: string
  rare: string | boolean
  type: TechniqueTypes
  base?: string
  description: string
}
