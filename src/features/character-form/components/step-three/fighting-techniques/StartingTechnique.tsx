"use client"

import { usePlaybook } from "@/utils/query-client"
import { useFormStore } from "@/stores/form-store"
import FormContainer from "@/features/character-form/components/form-container"

export default async function StartingTechnique() {
  const selectedPlaybook = useFormStore((state) => state.playbook.value)

  const {
    data: {
      playbook: rawPlaybookName,
      startingTechnique: { technique, stance, description },
    },
  } = usePlaybook(selectedPlaybook)

  /** Naming convention is the following: `The {Playbook}`. */
  const playbookName = rawPlaybookName.split("The ")[1]

  return (
    <FormContainer
      heading={technique}
      // TODO: Add text color styling based on stance
      subheading={<span>{stance}</span>}
      rightNode={
        <div className="pt-1 my-auto font-bold capitalize text-neutral-300">
          {playbookName} Starter
        </div>
      }
      className="min-w-[300px]"
    >
      <p className="text-sm leading-5 text-neutral-300">{description}</p>
    </FormContainer>
  )
}
