"use client"

import { usePlaybook } from "@/utils/query-client"
import FormContainer from "../../form-container"
import { useFormStore } from "@/stores/form-store"

export default function StartingTechnique() {
  const playbook = useFormStore((state) => state.playbook.value)
  const { data: playbookData } = usePlaybook(playbook ?? "bold")

  /** Naming convention is the following: `The {Playbook}`. */
  const playbookName = playbookData.playbook.split(" ")[1]

  return (
    <FormContainer
      heading={playbookData.startingTechnique.name}
      // TODO: Add text color styling based on stance
      subheading={<span>{playbookData.startingTechnique.stance}</span>}
      rightNode={
        <div className="pt-1 my-auto text-sm font-bold capitalize text-neutral-300">
          {playbookName} Starter
        </div>
      }
      className="min-w-[300px]"
    >
      <p className="text-sm leading-5 text-neutral-300">
        {playbookData.startingTechnique.description}
      </p>
    </FormContainer>
  )
}
