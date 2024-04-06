"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const INITIAL_STEP = 1
export const STEP_DESCRIPTIONS = ["character", "details", "moves", "backstory"]

export default function useStep() {
  const searchParams = useSearchParams()
  const stepParam = searchParams.get("step")
  const pathname = usePathname()
  const router = useRouter()

  const parsedStep = stepParam ? parseInt(stepParam) : INITIAL_STEP

  const setStep = (step: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("step", step.toString())
    router.replace(pathname + "?" + params.toString())
  }

  return {
    nextStep: () => setStep(parsedStep + 1),
    prevStep: () => setStep(parsedStep - 1),
    resetSteps: () => setStep(INITIAL_STEP),
    setStep,
    step: parsedStep,
    isFirstStep: parsedStep === 1,
    isLastStep: parsedStep === STEP_DESCRIPTIONS.length,
  }
}
