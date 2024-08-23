"use client"

import { useFormStore } from "@/stores/form-store"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"
import { DEFAULT_PLAYBOOK, PLAYBOOKS } from "@/lib/constants"

export default function SelectPlaybook() {
  const playbook = useFormStore((state) => state.playbook)
  const update = useFormStore((state) => state.update)

  const handleSelectChange = (value: string) => {
    update({
      playbook: { value, error: "" },
      // NOTE: Should clear & reset any specified dependent Playbook form fields
      demeanours: { values: [], error: "" },
      balance: { selected: "neutral", value: [0], error: "" },
      basicMoves: { values: [], error: "" },
    })
  }

  return (
    <div className="flex flex-col flex-start text-start">
      <span className="pl-1 text-sm font-bold leading-7">Your Playbook</span>

      <Select
        name="playbook"
        value={playbook.value}
        onValueChange={handleSelectChange}
        defaultValue={DEFAULT_PLAYBOOK}
      >
        <SelectTrigger id="main-content" className="h-[35px]">
          <SelectValue placeholder="Choose your Playbook" />
        </SelectTrigger>

        <SelectContent>
          {Object.values(PLAYBOOKS).map((playbook) => (
            <SelectItem key={playbook} value={playbook}>
              <span className="capitalize">{playbook}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
