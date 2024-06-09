"use client"

import { useFormStore } from "@/stores/form-store"

import {
  FormCheckbox,
  FormCheckboxContainer,
} from "@/app/ui/create-character-form/form-checkbox"
import { DEMEANOURS } from "@/lib/constants"
import { usePlaybook } from "@/utils/query-client"

type Demeanour = (typeof DEMEANOURS)[keyof typeof DEMEANOURS]

export default function SelectDemeanour() {
  const playbook = useFormStore((state) => state.playbook)
  const demeanour = useFormStore((state) => state.demeanour)
  const update = useFormStore((state) => state.update)

  const { data } = usePlaybook(playbook.value, { suspense: true })
  const demeanours: Demeanour[] = data?.demeanor

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && demeanour.values.length === 3) return

    update({
      demeanour: {
        values: checked
          ? [...demeanour.values, id]
          : demeanour.values.filter((d) => d !== id),
        error: "",
      },
    })
  }

  return (
    <FormCheckboxContainer
      label="demeanour"
      values={demeanour.values}
      maxSelection={3}
    >
      {demeanours?.map((demneaourLabel) => (
        <FormCheckbox
          key={demneaourLabel}
          label={demneaourLabel}
          values={demeanour.values}
          handleChange={handleChange}
          maxSelection={3}
        />
      ))}
    </FormCheckboxContainer>
  )
}
