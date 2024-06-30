import { Suspense } from "react"

import BasicMoves from "./basic-moves"
import FightingTechniques from "./fighting-techniques"

export default async function StepThree() {
  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <Suspense fallback={<div>Loading...</div>}>
        <BasicMoves />
      </Suspense>

      <FightingTechniques />
    </div>
  )
}
