"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select"
import { useFormStore } from "@/lib/store"

export default function SelectPlaybook() {
  const playbook = useFormStore((state) => state.playbook)
  const update = useFormStore((state) => state.update)

  const handleSelectChange = (value: string) =>
    update({
      playbook: { value, error: "" },
      // NOTE: Should clear any dependent Playbook form fields
      demeanour: { values: [], error: "" },
    })

  return (
    <div className="flex flex-col flex-start text-start">
      <p>Playbook</p>
      <Select
        name="archetype"
        value={playbook.value}
        onValueChange={handleSelectChange}
        defaultValue="bold"
      >
        <SelectTrigger className="w-[250px] h-[35px]">
          <SelectValue placeholder="Choose your Playbook" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="adamant">Adamant</SelectItem>
          <SelectItem value="bold">Bold</SelectItem>
          <SelectItem value="destined">Destined</SelectItem>
          <SelectItem value="elder">Elder</SelectItem>
          <SelectItem value="foundling">Foundling</SelectItem>
          <SelectItem value="guardian">Guardian</SelectItem>
          <SelectItem value="hammer">Hammer</SelectItem>
          <SelectItem value="icon">Icon</SelectItem>
          <SelectItem value="pillar">Pillar</SelectItem>
          <SelectItem value="prodigy">Prodigy</SelectItem>
          <SelectItem value="razor">Razor</SelectItem>
          <SelectItem value="rogue">Rogue</SelectItem>
          <SelectItem value="successor">Successor</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
