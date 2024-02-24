"use client"

import { useState } from "react"

import { Checkbox } from "@/app/ui/checkbox"
import { BACKGROUNDS } from "@/lib/constants"
import { useFormStore } from "@/lib/store"

export default function SelectBackground() {
  const [selected, setSelected] = useState<string[]>([])
  const background = useFormStore((state) => state.background)
  const update = useFormStore((state) => state.update)

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && selected.length === 2) return

    setSelected((prevSelected) =>
      checked ? [...prevSelected, id] : prevSelected.filter((sid) => sid !== id)
    )
    update({
      background: {
        values: checked
          ? [...background.values, id]
          : background.values.filter((b) => b !== id),
        error: "",
      },
    })
  }

  return (
    <div>
      Background {selected.length} / 2
      <div className="grid grid-cols-2 pt-[3.5px]">
        {Object.values(BACKGROUNDS).map((apiBackground) => (
          <div key={apiBackground}>
            <label htmlFor={apiBackground} className="pt-1 cursor-pointer">
              <Checkbox
                id={apiBackground}
                name="background"
                checked={background.values.includes(apiBackground)}
                onCheckedChange={handleChange(apiBackground)}
                disabled={
                  selected.length >= 2 &&
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
