"use client"

import { useFormStore } from "@/stores/form-store"

import {
  FormCheckbox,
  FormCheckboxContainer,
} from "@/app/ui/shared/form-checkbox"
import { BACKGROUNDS } from "@/lib/constants"

export default function SelectBackground() {
  const background = useFormStore((state) => state.background)
  const update = useFormStore((state) => state.update)

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && background.values.length === 2) return

    const newValues = checked
      ? [...background.values, id]
      : background.values.filter((b) => b !== id)

    update({ background: { values: newValues, error: "" } })
  }

  return (
    <FormCheckboxContainer
      label="background"
      values={background.values}
      maxSelection={2}
    >
      {Object.values(BACKGROUNDS).map((backgroundLabel) => (
        <FormCheckbox
          key={backgroundLabel}
          label={backgroundLabel}
          values={background.values}
          handleChange={handleChange}
          maxSelection={2}
        />
      ))}
    </FormCheckboxContainer>
  )
}
