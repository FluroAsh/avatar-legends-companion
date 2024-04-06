"use client"

import { Button } from "@/app/ui/button"
import { cn } from "@/utils/helpers"

import useStep, { STEP_DESCRIPTIONS } from "./use-step"

const Step = ({ desc, idx }: { desc: string; idx: number }) => {
  const { step, setStep } = useStep()

  /**
   * TODO: Step States
   * - Active (Highlighted)
   * - Completed (Display small checkmark SVG)
   * - Inactive (Dark)
   */

  const stepNum = idx + 1
  const isActive = step === stepNum
  // NOTE: Should validate the form before allowing the user to proceed to the next step/submit
  const isComplete = step > stepNum
  const isNotLastStep = idx !== STEP_DESCRIPTIONS.length - 1

  return (
    <li
      key={idx}
      onClick={() => setStep(stepNum)}
      className={cn(
        "after:transition-colors",
        isNotLastStep &&
          "relative flex w-full items-center after:content-[''] after:bg-neutral-500 after:mx-2 after:w-full after:h-1 after:rounded-full",
        isComplete && "after:bg-neutral-300"
      )}
    >
      <Button
        className="relative flex group [&>*]:transition-colors"
        variant="ghost"
        size="none"
      >
        <div
          className={cn(
            "w-5 h-5 mx-auto border rounded-full ",
            "before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:transition-colors",
            isActive
              ? "bg-sky-500/50 border-sky-600 before:bg-sky-600"
              : "bg-primary group-hover:bg-sky-500/50 group-hover:border-sky-600 group-hover:before:bg-sky-600"
          )}
        />
        <span
          className={cn(
            "absolute pt-[4.5px] text-neutral-400 text-xs font-bold tracking-wide capitalize",
            "transform translate-y-1/2 top-1/2",
            isActive ? "text-neutral-200" : "group-hover:text-neutral-200"
          )}
        >
          {desc}
        </span>
      </Button>
    </li>
  )
}

export default function Stepper() {
  return (
    <ol className="flex items-center justify-center max-w-screen-sm px-8 pt-4 mx-auto pb-7">
      {STEP_DESCRIPTIONS.map((desc, idx) => (
        <Step key={`${desc}-${idx}`} desc={desc} idx={idx} />
      ))}
    </ol>
  )
}
