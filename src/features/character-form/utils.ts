import { Technique } from "@/types/api"

export type Techniques = {
  fallback: Technique
  universal: Technique[]
  training: Technique[]
}

export function findTypeTechniques(data: Technique[], trainingType: string) {
  const techniques = data.reduce(
    (acc: any, t: Technique) => {
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
    { fallback: {}, universal: [], training: [] }
  )

  techniques["fallback"] = techniques.training[0]
  return techniques as Techniques
}
