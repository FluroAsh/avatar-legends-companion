"use client"

import { useFormStore } from "@/stores/form-store"

import {
  FormCheckbox,
  FormCheckboxContainer,
} from "@/features/character-form/components/form-checkbox"
import { DEMEANOURS } from "@/lib/constants"
import { usePlaybook } from "@/utils/query-client"

type Demeanour = (typeof DEMEANOURS)[keyof typeof DEMEANOURS]

export default function SelectDemeanour() {
  const playbook = useFormStore((state) => state.playbook)
  const storeDemeanours = useFormStore((state) => state.demeanours)
  const update = useFormStore((state) => state.update)

  const { data } = usePlaybook(playbook.value)
  const demeanours: Demeanour[] = data?.demeanours

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && storeDemeanours.values.length === 3) return

    update({
      demeanours: {
        values: checked
          ? [...storeDemeanours.values, id]
          : storeDemeanours.values.filter((d) => d !== id),
        error: "",
      },
    })
  }

  return (
    <FormCheckboxContainer
      label="demeanour"
      values={storeDemeanours.values}
      maxSelection={3}
    >
      {demeanours?.map((demneaourLabel) => (
        <FormCheckbox
          key={demneaourLabel}
          label={demneaourLabel}
          values={storeDemeanours.values}
          handleChange={handleChange}
          maxSelection={3}
        />
      ))}
    </FormCheckboxContainer>
  )
}
