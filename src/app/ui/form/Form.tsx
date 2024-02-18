"use client"

import React, { useEffect } from "react"

import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"

/**
 * TODO: Add react-form to the form component (Form Part 1)
 * - The form will be split up into 3 parts (Details, Moves & Backstory)
 * Component 1: Role, chararacter name, background & demeanour
 * Component 2: Stats, Balance, Connections
 * Component 3: Training
 * Component 4: Your character, home-town, ???, fighting style
 * Component 5: Bad Habits
 */
export default function FormComponent({
  urlArchetype,
  name,
  children,
}: {
  urlArchetype: string | undefined
  name: string
  children: React.ReactNode
}) {
  // NOTE: This component should handle managing the multi-step form as-well as the form data, context/state, submission & submission validation
  // Passing down the necessary data to the form components

  const { setState } = usePlaybookContext()

  useEffect(() => {
    async function fetchPlaybook() {
      const data = await import(
        `src/data/class-data/${urlArchetype ?? "bold"}.json`
      )
      setState({ ...data })
    }
    fetchPlaybook()
  }, [urlArchetype, setState])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <form name={name} onSubmit={handleSubmit} className="flex justify-center">
      {children}
    </form>
  )
}
