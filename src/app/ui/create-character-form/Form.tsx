"use client"

import { useFormStore } from "@/stores/formStore"
import { useUser } from "@clerk/nextjs"

// import { useQuery, useQueryClient } from "@tanstack/react-query"

// import { fetchPlaybook } from "@/lib/query-client"
import supabase from "@/utils/supabase-client"

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
  const { playbook, characterName, background, demeanour, baseStats } =
    useFormStore((state) => state)

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
    })

    error && console.log(error)
  }

  return (
    <form name={name} onSubmit={handleSubmit} className="flex justify-center">
      {children}
    </form>
  )
}
