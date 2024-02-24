"use client"

import { useState } from "react"

import { BACKGROUNDS } from "@/lib/constants"
import { useFormStore } from "@/lib/store"

export default function SelectBackground() {
  const [selected, setSelected] = useState<string[]>([])

  const background = useFormStore((state) => state.background)
  const update = useFormStore((state) => state.update)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target

    if (checked && selected.length >= 2) return

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
      Background (2)
      {Object.values(BACKGROUNDS).map((apiBackground) => (
        <div key={apiBackground}>
          <label className="cursor-pointer">
            <input
              id={apiBackground}
              name="background"
              type="checkbox"
              checked={background.values.includes(apiBackground)}
              onChange={handleChange}
            />
            {apiBackground}
          </label>
        </div>
      ))}
    </div>
  )
}
