"use client"

import { useState } from "react"

import { DEMEANOURS } from "@/lib/constants"
import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"
import { useFormStore } from "@/lib/store"

export default function SelectDemeanour() {
  const [selected, setSelected] = useState<string[]>([])
  const { playbookData } = usePlaybookContext()

  const playbook = useFormStore((state) => state.playbook)
  const demeanour = useFormStore((state) => state.demeanour)
  const update = useFormStore((state) => state.update)

  // Probably want to just suspend this component until the state is ready/not an empty Object,
  // or return a skeleton. For now we'll just return null.

  if (!playbookData.demeanor) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target

    if (checked && selected.length >= 3) return

    setSelected((prevSelected) =>
      checked ? [...prevSelected, id] : prevSelected.filter((sid) => sid !== id)
    )
    update({
      demeanour: {
        values: checked
          ? [...demeanour.values, id]
          : demeanour.values.filter((d) => d !== id),
        error: "",
      },
    })
  }

  return (
    <div>
      Demeanour (3)
      {playbookData.demeanor.map((d: keyof typeof DEMEANOURS) => (
        <div key={`${playbook.value}-${d}`}>
          <label className="cursor-pointer">
            <input
              id={d}
              name="demeanour"
              type="checkbox"
              checked={demeanour.values.includes(d)}
              onChange={handleChange}
            />
            {DEMEANOURS[d]}
          </label>
        </div>
      ))}
    </div>
  )
}
