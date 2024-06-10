"use client"

import { useFormStore } from "@/stores/form-store"

import { Input } from "@/components/input"

export default function CharacterName() {
  const characterName = useFormStore((state) => state.characterName)
  const update = useFormStore((state) => state.update)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    update({ characterName: { value, error: "" } })
  }

  return (
    <div>
      <p className="pl-1 text-sm font-bold leading-7">Character Name</p>
      <Input
        name="characterName"
        type="text"
        placeholder="What should people call you?"
        autoComplete="off"
        onChange={handleChange}
        value={characterName.value}
      />
    </div>
  )
}
