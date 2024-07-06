"use client"

import { useMemo } from "react"
import { useFormStore } from "@/stores/form-store"
import { useTechniques } from "@/utils/query-client"
import { findTypeTechniques } from "@/features/character-form/utils"

// import useSelectTechnique from "@/features/character-form/hooks/use-select-technique"
import FormContainer from "../../form-container"
import TechniqueModal from "./TechniqueModal"

export default function SelectTechnique() {
  const { data } = useTechniques()
  // const {
  //   /*selectedState*/
  // } = useSelectTechnique()

  // TODO: Remove the "Air" fallback once we add step form validation
  const trainingType = useFormStore((state) => state.training.value || "Air")
  const selectedTechnique = useFormStore(
    (state) => state.fightingTechnique.value
  )

  const { fallback, universal, training } = useMemo(
    () => findTypeTechniques(data, trainingType),
    [data, trainingType]
  )

  /*  3 components for each state...
    1. Preview (Default - no selection)
    2. selected (from modal)
    3. customising (custom DIY technique)
  */

  // $.rare
  // $.type

  return (
    // State === "PREVIEW" && ...
    // State === "SELECTED" && ...
    // State === "CUSTOM" && ...

    <FormContainer
      id="selected-technique"
      className="relative mb-4"
      heading={selectedTechnique.technique || fallback.technique}
      subheading={
        <>
          You will have <em>Learned</em> this technique
        </>
      }
      // iconLeft={"🥋"}
      rightNode={
        <div className="flex">
          <div className="flex items-center p-2 text-xl">🛡️</div>
          <div className="flex flex-col tracking-tight">
            <p className="text-lg font-bold">Chosen Stance</p>
            <p className="text-xs font-semibold text-neutral-300">
              {selectedTechnique.stance || fallback.stance}
            </p>
          </div>
        </div>
      }
    >
      <div className="pb-2">
        <p className="mb-1 text-sm font-bold">Technique Description</p>
        <p
          className="text-sm text-neutral-300"
          dangerouslySetInnerHTML={{
            __html: selectedTechnique.description || fallback.description,
          }}
        />
      </div>

      <TechniqueModal techniques={{ universal, training }} />
    </FormContainer>
  )
}
