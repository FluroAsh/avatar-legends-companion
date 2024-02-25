"use client"

import { useState } from "react"

import { Checkbox } from "@/app/ui/checkbox"
import { BACKGROUNDS } from "@/lib/constants"
import { useFormStore } from "@/lib/store"

export default function SelectBackground() {
  const background = useFormStore((state) => state.background)
  const update = useFormStore((state) => state.update)

  const [selected, setSelected] = useState<string[]>(background.values)

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && selected.length === 2) return

    const newValues = checked
      ? [...background.values, id]
      : background.values.filter((b) => b !== id)

    setSelected(newValues)
    update({ background: { values: newValues, error: "" } })
  }

  return (
    <div>
      <span className="pl-1 text-sm font-bold leading-6 text-neutral-400">
        Background {selected.length} / 2
      </span>
      <div className="grid grid-cols-2 gap-2 px-4 py-2 align-middle border rounded-md bg-[#2a2c2e]">
        {Object.values(BACKGROUNDS).map((apiBackground) => (
          <div key={apiBackground}>
            <label
              htmlFor={apiBackground}
              className="flex items-center cursor-pointer"
            >
              <Checkbox
                id={apiBackground}
                name="background"
                checked={background.values.includes(apiBackground)}
                onCheckedChange={handleChange(apiBackground)}
                disabled={
                  selected.length === 2 &&
                  !background.values.includes(apiBackground)
                }
              />
              <span className="pl-2">{apiBackground}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
