"use client"

import {
  useFormContext,
  type FormContextState,
} from "@/lib/contexts/FormContext"

import { Input } from "../input"

export default function CharacterName() {
  const { formState, setFormState } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormState((prev: FormContextState["formState"]) => ({
      ...prev,
      characterName: { value, error: "" },
    }))
  }

  return (
    <Input
      name="characterName"
      type="text"
      placeholder="Character Name"
      onChange={handleChange}
      value={formState.characterName.value}
    />
  )
}
