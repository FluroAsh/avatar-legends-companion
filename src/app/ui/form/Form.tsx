"use client"

import React, { useEffect } from "react"

import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"

/**
 * TODO: Add react-form to the form component (Form Part 1)
 * - The form will be split up into 3 parts (Details, Moves & Backstory)
 * Component 1: Role, chararacter name, background & demeanour
 * Compontent 2: Stats, Balance, Connections
 * Component 3: Training
 * Component 4: Your character, home-town, ???, fighting style
 * Component 5: Bad Habits
 */
export default function FormComponent({
  searchParam,
  children,
}: {
  searchParam: string | string[] | undefined
  children: React.ReactNode
}) {
  // NOTE: This component should handle managing the multi-step form as-well as the form data, context/state, submission & submission validation
  // Passing down the necessary data to the form components

  const { setState } = usePlaybookContext()

  useEffect(() => {
    async function fetchPlaybook() {
      const data = await import(
        `src/data/class-data/${searchParam ?? "bold"}.json`
      )
      setState({ ...data })
    }
    fetchPlaybook()
  }, [searchParam, setState])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="">{children}</div>
    </form>
  )
}
