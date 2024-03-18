"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/utils/helpers"

const STEP_DESCRIPTIONS = ["Character", "Details", "Moves", "Backstory"]

const StepIndicator = ({
  isComplete,
  isActive,
}: {
  isComplete: boolean
  isActive: boolean
}) => (
  <div
    className={cn(
      isComplete
        ? "bg-green-500 border-green-700 group-hover:bg-green-600 group-hover:border-green-800"
        : "bg-neutral-600 border-neutral-700 group-hover:bg-neutral-500 group-hover:border-neutral-600",
      isActive && "bg-neutral-300 border-neutral-400",
      "absolute -left-[0.5px] w-4 h-4 rounded-full top-[2px] border"
    )}
  />
)

const StepLine = ({ isComplete }: { isComplete: boolean }) => (
  <div
    className={`flex-grow h-1 ${
      isComplete
        ? "bg-green-500 group-hover:bg-green-600"
        : "bg-neutral-500 group-hover:bg-neutral-600"
    }`}
  />
)

export default function Stepper({ urlStep }: { urlStep: string | undefined }) {
  const [step, setStep] = useState(parseInt(urlStep ?? "1"))

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleStepChange = (stepValue: number) => {
    setStep(stepValue)

    const params = new URLSearchParams(searchParams.toString())
    params.set("step", stepValue.toString())
    router.replace(pathname + "?" + params.toString())
  }

  return (
    <div className="flex justify-between">
      {STEP_DESCRIPTIONS.map((desc, idx) => (
        <div key={idx} className="flex-1">
          <button
            onClick={() => handleStepChange(idx + 1)}
            className="relative w-full py-2 group text-start"
          >
            <StepIndicator
              isComplete={idx + 1 < step}
              isActive={idx + 1 === step}
            />
            <StepLine isComplete={idx + 1 < step} />

            <p className="block pt-2 text-sm font-bold sm:text-base md:text-lg group-hover:text-neutral-400 ">
              {desc}
            </p>
          </button>
        </div>
      ))}
    </div>
  )
}
