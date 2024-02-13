"use client"

import { useCallback, useEffect, useState } from "react"

export default function Page() {
  const [archetypeData, setArchetypeData] = useState<string | null>(null)
  const [archetype, setArchetype] = useState<string>("")

  // NOTE: NextJS Is caching the data from the import, so not sure if it's necessary
  // to utilise React Query here.
  const loadArchetype = useCallback(async () => {
    if (archetype) {
      const data = await import(`src/data/class-data/${archetype}.json`)
      setArchetypeData(data)
    } else {
      setArchetypeData(null)
    }
  }, [archetype])

  useEffect(() => {
    loadArchetype()
  }, [archetype, loadArchetype])

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setArchetype(event.target.value)

  return (
    <main className="flex flex-col justify-center mt-4">
      <div className="text-center ">
        <h1 className="text-2xl">POC</h1>
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

        <div className="w-screen max-w-full p-2 mt-2 overflow-scroll text-left break-words border rounded-sm h-[600px] border-slate-300 bg-slate-600/50">
          <pre>{JSON.stringify(archetypeData, null, 4)}</pre>
        </div>
      </div>
    </main>
  )
}
