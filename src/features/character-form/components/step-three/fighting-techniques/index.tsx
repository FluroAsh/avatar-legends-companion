import { Suspense } from "react"
import StartingTechnique from "./StartingTechnique"
import SelectTechnique from "./TechniquePreview"

export default function FightingTechniques() {
  return (
    <div>
      <p className="font-bold">Fighting Techniques</p>

      <div className="flex justify-between">
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
