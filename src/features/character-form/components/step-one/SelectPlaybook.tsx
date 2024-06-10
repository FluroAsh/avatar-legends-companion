"use client"

import { useFormStore } from "@/stores/form-store"
import { useQueryClient } from "@tanstack/react-query"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { DEFAULT_PLAYBOOK } from "@/lib/constants"
import { fetchPlaybook } from "@/lib/helpers"

export default function SelectPlaybook() {
  const playbook = useFormStore((state) => state.playbook)
  const update = useFormStore((state) => state.update)
  const qc = useQueryClient()

  const handleSelectChange = (value: string) => {
    qc.prefetchQuery({
      queryKey: ["playbook", value],
      queryFn: () => fetchPlaybook(value),
    })

    update({
      playbook: { value, error: "" },
      // NOTE: Should clear & reset any specified dependent Playbook form fields
      demeanour: { values: [], error: "" },
      balance: { selected: "neutral", value: [0], error: "" },
      basicMoves: { values: [], error: "" },
    })
  }

  return (
    <div className="flex flex-col flex-start text-start">
      <span className="pl-1 text-sm font-bold leading-7">Your Playbook</span>
      <Select
        name="archetype"
        value={playbook.value}
        onValueChange={handleSelectChange}
        defaultValue={DEFAULT_PLAYBOOK}
      >
        <SelectTrigger id="main-content" className="h-[35px]">
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
