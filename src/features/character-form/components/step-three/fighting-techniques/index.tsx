import { Suspense } from "react"

import StartingTechnique from "./StartingTechnique"
import SelectTechnique from "./TechniquePreview"

export default function FightingTechniques() {
  return (
    <div>
      <div className="grid max-w-screen-md gap-4 mx-auto lg:grid-cols-2 lg:max-w-full">
        <StartingTechnique />

        {/* 3 components for each state...*/}
        {/* 
          1. Preview (default - no selection)
          2. selected (from modal)
          3. customising (custom DIY technique)
        */}
        <Suspense fallback={<div>Loading...</div>}>
          <SelectTechnique />
        </Suspense>
      </div>
    </div>
  )
}
