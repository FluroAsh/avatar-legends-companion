"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function ArchetypeRole() {
  const [archetype, setArchetype] = useState<string | undefined>("")

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const value = e.target.value
    setArchetype(value)

    let params = new URLSearchParams(searchParams.toString())
    params.set("archetype", e.target.value)

    if (value === "") {
      params.delete("archetype")
      router.push(pathname + params.toString())
    } else {
      router.push(pathname + "?" + params.toString())
    }
  }

  return (
    <div>
      <p>Selected: {archetype || "No archetype seleted"}</p>
      <select
        className="p-2 text-black w-50"
        value={archetype}
        onChange={handleSelectChange}
      >
        <option value="">Select an Archetype</option>
        <option value="adamant">Adamant</option>
        <option value="bold">Bold</option>
        <option value="destined">Destined</option>
        <option value="elder">Elder</option>
        <option value="foundling">Foundling</option>
        <option value="guardian">Guardian</option>
        <option value="hammer">Hammer</option>
        <option value="icon">Icon</option>
        <option value="pillar">Pillar</option>
        <option value="prodigy">Prodigy</option>
        <option value="razor">Razor</option>
        <option value="rogue">Rogue</option>
        <option value="successor">Successor</option>
      </select>
    </div>
  )
}
