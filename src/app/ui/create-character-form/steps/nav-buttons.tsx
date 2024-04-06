"use client"

import { ComponentProps } from "react"

import { Button } from "@/app/ui/button"
import { cn } from "@/utils/helpers"

import useStep from "./use-step"

const FormButton = ({
  label,
  onClick,
  variant,
}: {
  label: "next" | "previous"
  onClick: () => void
  variant?: ComponentProps<typeof Button>["variant"]
}) => {
  const { isFirstStep, isLastStep } = useStep()

  return (
    <Button
      type="button"
      variant={variant}
      onClick={onClick}
      className={cn(
        "px-10 py-4 rounded-lg capitalize",
        label === "previous" && "text-muted-foreground"
      )}
      disabled={
        (isFirstStep && label === "previous") ||
        (isLastStep && label === "next")
      }
    >
      {label}
    </Button>
  )
}

export default function NavButtons() {
  const { nextStep, prevStep } = useStep()

  return (
    <div className="flex justify-center gap-2 py-4">
      <FormButton label="previous" variant="outline" onClick={prevStep} />
      <FormButton label="next" variant="primary" onClick={nextStep} />
    </div>
  )
}
