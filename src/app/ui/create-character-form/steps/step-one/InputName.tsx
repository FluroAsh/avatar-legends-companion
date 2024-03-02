"use client"

import { useFormStore } from "@/stores/formStore"

import { Input } from "../../../input"

export default function CharacterName() {
  const characterName = useFormStore((state) => state.characterName)
  const update = useFormStore((state) => state.update)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    update({ characterName: { value, error: "" } })
  }

  return (
    <div className="md:max-w-[250px]">
      <p className="pl-1 text-sm font-bold leading-5">Character Name</p>
      <Input
        name="characterName"
        type="text"
        className="h-[35px]"
        placeholder="What should people call you?"
        onChange={handleChange}
        value={characterName.value}
      />
    </div>
  )
}
