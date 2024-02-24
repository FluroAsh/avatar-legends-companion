"use client"

import { useFormStore } from "@/lib/store"

import { Input } from "../input"

export default function CharacterName() {
  const characterName = useFormStore((state) => state.characterName)
  const update = useFormStore((state) => state.update)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    update({ characterName: { value, error: "" } })
  }

  return (
    <Input
      name="characterName"
      type="text"
      placeholder="Character Name"
      onChange={handleChange}
      value={characterName.value}
    />
  )
}
