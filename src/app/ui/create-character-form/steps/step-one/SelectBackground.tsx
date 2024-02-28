"use client"

import { useState } from "react"
import { useFormStore } from "@/stores/formStore"

import { Checkbox } from "@/app/ui/checkbox"
import { BACKGROUNDS } from "@/lib/constants"

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
    <div className="flex flex-col sm:max-w-[300px] ">
      <span className="pl-1 text-sm font-bold leading-6 text-neutral-400">
        Background {selected.length} / 2
      </span>
      <div className="flex-1 grid grid-cols-2 gap-2 px-4 py-2 border rounded-md bg-[#2a2c2e]">
        {Object.values(BACKGROUNDS).map((apiBackground) => (
          <div key={apiBackground}>
            <label
              htmlFor={apiBackground}
              className="flex items-center text-sm cursor-pointer"
            >
              <Checkbox
                id={apiBackground}
                name="background"
                className=""
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
