"use client"

import React, { useEffect } from "react"
import { useUser } from "@clerk/nextjs"

import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"
import { useFormStore } from "@/lib/store"
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
  // NOTE: This component should handle managing the multi-step form as-well as the form data,
  // context/state, submission & submission validation

  const { user } = useUser()
  const { setPlaybookData } = usePlaybookContext()
  const { playbook, characterName, background, demeanour } = useFormStore(
    (state) => state
  )

  useEffect(() => {
    async function fetchPlaybook() {
      const data = await import(
        `src/data/class-data/${playbook.value || "bold"}.json`
      )
      setPlaybookData({ ...data })
    }
    fetchPlaybook()
  }, [playbook.value, setPlaybookData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")

    if (!user?.id) return console.error("No user id found")

    const { error } = await supabase.from("characters").insert({
      ["user_id"]: user.id,
      ["character_name"]: characterName.value,
      playbook: playbook.value,
      background: background.values,
      demeanour: demeanour.values,
    })

    error && console.log(error)
  }

  return (
    <form name={name} onSubmit={handleSubmit} className="flex justify-center">
      {children}
    </form>
  )
}
