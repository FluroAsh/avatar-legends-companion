"use client"

// import { useState } from "react"
import { DEMEANORS } from "@/lib/constants"
import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"

export default function SelectDemeanour() {
  // TODO: Limit to 3 demeanours
  // const [selected, setSelected] = useState<string[]>([])
  const { playbook } = usePlaybookContext()

  // Probably want to just suspend this component until the state is ready/not an empty Object,
  // or return a skeleton. For now we'll just return null.
  if (!playbook.demeanor) return null

  return (
    <div>
      Demeanour (3)
      {playbook.demeanor.map((d: keyof typeof DEMEANORS) => (
        <div key={d}>
          <label className="cursor-pointer">
            <input type="checkbox" id={d} name="demeanour" />
            {DEMEANORS[d]}
          </label>
        </div>
      ))}
    </div>
  )
}
