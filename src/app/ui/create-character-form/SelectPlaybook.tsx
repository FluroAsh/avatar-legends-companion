"use client"

import { useFormStore } from "@/lib/store"

export default function SelectPlaybook() {
  const playbook = useFormStore((state) => state.playbook)
  const update = useFormStore((state) => state.update)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    update({ playbook: { value, error: "" } })
  }

  return (
    <div className="grid place-items-center">
      <p>Selected: {playbook.value || "No archetype seleted"}</p>
      <select
        name="archetype"
        className="p-2 text-black w-50"
        value={playbook.value}
        onChange={handleSelectChange}
      >
        <option value="">Select an Archetype</option>
        <option value="adamant">Adamant</option>
        <option value="bold">Bold</option>
        <option value="destined">Destined</option>
        <option value="elder">Elder</option>
        <option value="foundling">Foundling</option>
        <option value="guardian">Guardian</option>
        <option value="hammer">Hammer</option>
        <option value="icon">Icon</option>
        <option value="pillar">Pillar</option>
        <option value="prodigy">Prodigy</option>
        <option value="razor">Razor</option>
        <option value="rogue">Rogue</option>
        <option value="successor">Successor</option>
      </select>
    </div>
  )
}
