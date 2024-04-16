"use client"

import { type ButtonHTMLAttributes, type ComponentProps } from "react"

import { Button } from "@/app/ui/button"
import { cn } from "@/utils/helpers"

import useStep from "./use-step"

const buttonConfig = {
  previous: {
    variant: "outline",
    extraStyles: "text-muted-foreground",
  },
  next: {
    variant: "primary",
  },
  "create character": {
    variant: "primary",
    type: "submit",
  },
} as {
  [label: string]: {
    variant: ComponentProps<typeof Button>["variant"]
    extraStyles?: string
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  }
}

const FormButton = ({
  label,
  onClick,
  disabled,
}: {
  label: "next" | "previous" | "create character"
  onClick?: () => void
  disabled?: boolean
}) => {
  const config = buttonConfig[label]

  return (
    <Button
      type={config.type ?? "button"}
      variant={config.variant}
      onClick={onClick}
      className={cn("px-10 py-4 rounded-lg capitalize", config?.extraStyles)}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}

export default function NavButtons() {
  const { nextStep, prevStep, isLastStep, isFirstStep } = useStep()

  return (
    <div className="flex justify-center gap-2 py-4">
      <FormButton label="previous" onClick={prevStep} disabled={isFirstStep} />
      <FormButton
        label={isLastStep ? "create character" : "next"}
        onClick={isLastStep ? undefined : nextStep}
      />
    </div>
  )
}
