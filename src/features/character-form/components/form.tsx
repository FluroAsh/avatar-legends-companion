"use client"

import { useFormStore } from "@/stores/form-store"
import { useUser } from "@clerk/nextjs"

// import { useQuery, useQueryClient } from "@tanstack/react-query"

// import { fetchPlaybook } from "@/lib/query-client"
import supabase from "@/db/supabase-client"

// TODO: Add Zod validation to the form

/**
 * TODO: Add react-form to the form component (Form Part 1)
 * - The form will be split up into 4 parts (Character, Details, Moves & Backstory)
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
  const {
    playbook,
    characterName,
    background,
    demeanour,
    baseStats,
    connections,
    training,
    basicMoves,
  } = useFormStore((state) => state)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted")

    if (!user?.id) return console.error("No user id found")

    const { error } = await supabase.from("characters").insert({
      user_id: user.id,
      character_name: characterName.value,
      playbook: playbook.value,
      background: background.values,
      demeanour: demeanour.values,
      base_stats: [
        baseStats.creativity,
        baseStats.harmony,
        baseStats.focus,
        baseStats.passion,
      ],
      connections: connections.values,
      training: training.value,
      basic_moves: basicMoves.values,
    })

    error && console.log(error)
  }

  return (
    <form
      name={name}
      onSubmit={handleSubmit}
      className="flex flex-col justify-center"
    >
      {children}
    </form>
  )
}
