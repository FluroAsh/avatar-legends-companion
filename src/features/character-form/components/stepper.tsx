"use client"

import { LuCheck } from "react-icons/lu"

import { Button } from "@/components/button"
import { cn } from "@/utils/helpers"

import useStep, { STEP_DESCRIPTIONS } from "../hooks/use-step"
import { useRef } from "react"

const Step = ({ desc, idx }: { desc: string; idx: number }) => {
  const { step, setStep } = useStep()

  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLLIElement>(null)

  const stepNum = idx + 1
  const isActive = step === stepNum
  // NOTE: Should validate the form before allowing the user to proceed to the next step/submit
  const isComplete = step > stepNum
  const isNotLastStep = idx !== STEP_DESCRIPTIONS.length - 1

  return (
    <li
      ref={listRef}
      key={idx}
      onClick={(e) => {
        const isConnectorClick =
          buttonRef.current && !buttonRef.current.contains(e.target as Node)
        isConnectorClick ? setStep(stepNum + 1) : setStep(stepNum)
      }}
      className={cn(
        "after:transition-colors hover:cursor-pointer",
        isNotLastStep &&
          "relative flex w-full items-center after:content-[''] after:bg-neutral-500 after:mx-2 after:w-full after:h-1 after:rounded-full",
        isComplete && "after:bg-neutral-300"
      )}
    >
      <Button
        ref={buttonRef}
        className="relative flex group [&>*]:transition-colors"
        variant="ghost"
        size="none"
      >
        <div
          className={cn(
            "w-5 h-5 mx-auto rounded-full border bg-primary",
            "before:content-[''] before:absolute before:inset-[3px] before:rounded-full before:transition-colors before:hover:bg-sky-500",
            isActive
              ? "bg-sky-700/50 border-sky-600 before:bg-sky-500"
              : "group-hover:bg-sky-700/50 group-hover:border-sky-600 group-hover:before:bg-sky-500",
            isComplete && "bg-sky-600 border-sky-600 before:inset-0"
          )}
        />
        {isComplete && (
          <span className="absolute inset-0 flex items-center justify-center">
            <LuCheck size="12px" strokeWidth="3px" />
          </span>
        )}
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
