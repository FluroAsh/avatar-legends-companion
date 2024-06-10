"use client"

import { useTechniques } from "@/utils/query-client"
// import { useState } from "react"

// Show a preview over the Select Technique element
const TechniquePreview = () => (
  <div>
    <button type="button" className="p-2 bg-green-700">
      Select Technique
    </button>
  </div>
)

// fetch techniques in the modal when a user clicks the "Select a Technique" button
// until then just show a blurred out preview with the button in the center...
export default function SelectTechnique() {
  // const [state, setState] = useState<"SELECTED" | "CUSTOM" | "PREVIEW">(
  //   "PREVIEW"
  // )

  const { data } = useTechniques()
  console.log(data[0])

  /*  3 components for each state...
    1. Preview (default - no selection)
    2. selected (from modal)
    3. customising (custom DIY technique)
  */

  return (
    <div className="">
      <p>Technique Name</p>
      <p>Proficiency</p>
      <div>Stance</div>
      <p>Description</p>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <TechniquePreview />
      <div>Technique Modal</div>
    </div>
  )
}
