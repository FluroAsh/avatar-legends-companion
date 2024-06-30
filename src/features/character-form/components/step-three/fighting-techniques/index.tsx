import { Suspense } from "react"

import StartingTechnique from "./StartingTechnique"
import SelectedTechnique from "./SelectedTechnique"

export default function FightingTechniques() {
  return (
    <div>
      <div className="grid max-w-screen-md gap-4 mx-auto lg:grid-cols-2 lg:max-w-full">
        <StartingTechnique />

        <Suspense
          fallback={
            <div className="animate-pulse-2 bg-slate-300 h-[250px] w-[450px]"></div>
          }
        >
          <SelectedTechnique />
        </Suspense>
      </div>
    </div>
  )
}
