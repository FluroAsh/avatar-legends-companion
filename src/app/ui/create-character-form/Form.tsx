"use client"

import React, { useEffect } from "react"
import { useUser } from "@clerk/nextjs"

import { useFormContext } from "@/lib/contexts/FormContext"
import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"
import supabase from "@/lib/supabaseClient"

// TODO: Add Zod validation to the form

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
  name,
  children,
}: {
  name: string
  children: React.ReactNode
}) {
  // NOTE: This component should handle managing the multi-step form as-well as the form data, context/state, submission & submission validation
  // Passing down the necessary data to the form components

  const { user } = useUser()
  const { setPlaybook } = usePlaybookContext()
  const { formState } = useFormContext()

  // TODO: Look into replacing this with react-query
  useEffect(() => {
    async function fetchPlaybook() {
      const data = await import(
        `src/data/class-data/${formState.playbook.value || "bold"}.json`
      )
      setPlaybook({ ...data })
    }
    fetchPlaybook()
  }, [formState.playbook.value, setPlaybook])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")

    if (!user?.id) {
      console.error("No user id found")
      return
    }

    const { error } = await supabase.from("characters").insert({
      ["user_id"]: user.id,
      ["character_name"]: formState.characterName.value,
      playbook: formState.playbook.value,
      background: formState.background.values,
      demeanour: formState.demeanour.values,
    })

    error && console.log(error)
  }

  return (
    <form name={name} onSubmit={handleSubmit} className="flex justify-center">
      {children}
    </form>
  )
}
