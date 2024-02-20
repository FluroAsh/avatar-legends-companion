"use client"

// import { useState } from "react"
import { DEMEANORS } from "@/lib/constants"
import { useFormContext } from "@/lib/contexts/FormContext"
import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"

export default function SelectDemeanour() {
  // TODO: Limit to 3 demeanours
  // const [selected, setSelected] = useState<string[]>([])
  const { playbook } = usePlaybookContext()
  const { formState, setFormState } = useFormContext()

  // Probably want to just suspend this component until the state is ready/not an empty Object,
  // or return a skeleton. For now we'll just return null.

  if (!playbook.demeanor) return null
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target
    console.log({ id, checked })

    setFormState((prev) => ({
      ...prev,
      demeanour: {
        values: checked
          ? [...prev.demeanour.values, id]
          : prev.demeanour.values.filter((d) => d !== id),
        error: "",
      },
    }))
  }

  return (
    <div>
      Demeanour (3)
      {playbook.demeanor.map((d: keyof typeof DEMEANORS) => (
        <div key={`${formState.playbook.value}-${d}`}>
          <label className="cursor-pointer">
            <input
              id={d}
              name="demeanour"
              type="checkbox"
              checked={formState.demeanour.values.includes(d)}
              onChange={handleChange}
            />
            {DEMEANORS[d]}
          </label>
        </div>
      ))}
    </div>
  )
}
