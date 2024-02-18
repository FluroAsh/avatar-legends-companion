"use client"

import {  useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"

const STEP_DESCRIPTIONS = ["Details", "Moves", "Backstory"]

export default function Stepper() {
  const [step, setStep] = useState(1)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleStepChange = (stepValue: number) => {
    setStep(stepValue)

    const params = new URLSearchParams(searchParams.toString())
    params.set("step", stepValue.toString())
    router.push(pathname + "?" + params.toString())
  }

  return (
    <div>
      {STEP_DESCRIPTIONS.map((desc, idx) => (
        <button
          key={idx}
          className={cn(
            "p-5",
            idx + 1 === step ? "bg-red-500" : "bg-slate-300"
          )}
          onClick={() => handleStepChange(idx + 1)}
        >
          {desc}
        </button>
      ))}
    </div>
  )
}
