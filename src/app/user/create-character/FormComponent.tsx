// import dynamic from "next/dynamic"
// Try react.lazy

import React from "react"

import { BACKGROUNDS } from "@/lib/constants"

/**
 * TODO: Add react-form to the form component (Form Part 1)
 * - The form will be split up into 3 parts (Details, Moves & Backstory)
 * Component 1: Role, chararacter name, background & demeanour
 * Compontent 2: Stats, Balance, Connections
 * Component 3: Training
 * Component 4: Your character, home-town, ???, fighting style
 * Component 5: Bad Habits
 */
export default async function FormComponent({
  searchParam: archetype,
}: {
  [key: string]: string | string[] | undefined
}) {
  const data = await import(`src/data/class-data/${archetype ?? "bold"}.json`)

  // TODO: Rename class -> archetype in the json file
  // - and demeanor -> demeanour
  const { class: className, demeanor } = data

  return (
    <div>
      <div
        id="poc-form"
        className="w-screen p-2 mt-2 overflow-scroll text-left break-words border rounded-sm h-[600px] border-slate-300 bg-slate-600/50"
      >
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>

      {/* NOTE: Placeholder for the first form section */}
      <div>Class: {className}</div>
      <br />
      {demeanor.map((demeanor: string) => {
        return <div key={demeanor}>{demeanor}</div>
      })}
      <br />
      {Object.keys(BACKGROUNDS).map((background) => {
        return <div key={background}>{background}</div>
      })}
    </div>
  )
}
