import { TechniqueResponse } from "@/types/api"

export type Techniques = {
  initial: TechniqueResponse
  universal: TechniqueResponse[]
  training: TechniqueResponse[]
}

export function findTypeTechniques(
  data: TechniqueResponse[],
  trainingType: string
) {
  const techniques = data.reduce(
    (acc: any, t: TechniqueResponse) => {
      const type = t.base ? t.base : t.type

      if (t.type === "Universal") {
        if (!acc["universal"]) acc["universal"] = []
        acc["universal"].push(t)
      }

      if (type.toUpperCase() === trainingType.toUpperCase()) {
        if (!acc["training"]) acc["training"] = []
        acc["training"].push(t)
      }

      return acc
    },
    { initial: {}, universal: [], training: [] }
  )

  techniques["initial"] = techniques.training[0]
  return techniques as Techniques
}
