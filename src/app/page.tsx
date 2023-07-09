"use client"

import { useCallback, useEffect, useState } from "react"

export default function Home() {
  const [archetypeData, setArchetypeData] = useState(null)
  const [archetype, setArchetype] = useState("")

  const loadArchetype = useCallback(async () => {
    if (archetype) {
      const data = await import(`../data/character-sheets/${archetype}.json`)
      console.log({ archetype })
      setArchetypeData(data)
    }
  }, [archetype])

  useEffect(() => {
    loadArchetype()
  }, [archetype, loadArchetype])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArchetype(event.target.value)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="text-center ">
        <h1 className="text-3xl leading-relaxed">Avatar Companion App</h1>
        <h3 className="text-xl">Coming soon...</h3>

        <p>Selected: {archetype || "No archetype seleted"}</p>
        <select
          className="p-2 text-black w-50"
          value={archetype}
          onChange={handleSelectChange}
        >
          <option value="">Select an Archetype</option>
          <option value="adamant">Adamant</option>
          <option value="destined">Bold</option>
          <option value="elder">Bold</option>
          <option value="foundling">Bold</option>
          <option value="guardian">Bold</option>
          <option value="hammer">Bold</option>
          <option value="icon">Bold</option>
          <option value="pillar">Bold</option>
          <option value="prodigy">Bold</option>
          <option value="razor">Bold</option>
          <option value="rogue">Bold</option>
          <option value="successor">Bold</option>
        </select>

        <div className="w-screen overflow-x-scroll text-left break-words">
          <pre>{JSON.stringify(archetypeData, null, 4)}</pre>
        </div>
      </div>
    </main>
  )
}
