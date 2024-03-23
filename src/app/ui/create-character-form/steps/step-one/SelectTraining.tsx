"use client"

import * as Icon from "@/assets/svgs/training-icons"

import { Checkbox } from "@/app/ui/checkbox"
import { TRAINING_KEYS } from "@/lib/constants"
import { COLORS, type Training } from "@/lib/helpers"
import { cn } from "@/utils/helpers"

const TrainingIcon = ({ training }: { training: Training }) => {
  const className = cn("z-10 brightness-[33%]", COLORS(training, 500)["fill"])

  const icons = {
    water: <Icon.Water className={className} />,
    earth: <Icon.Earth className={className} />,
    fire: <Icon.Fire className={className} />,
    air: <Icon.Air className={className} />,
    weapons: <Icon.Weapons className={className} />,
    technology: <Icon.Technology className={className} />,
  }
  return icons[training]
}

const CheckedIcon = ({ training }: { training: Training }) => (
  <div className={cn("w-[6px] h-[6px]", COLORS(training, 500)["background"])} />
)

const TrainingBox = ({
  training,
  children,
}: {
  training: Training
  children: React.ReactNode
}) => (
  <>
    <div
      className={cn(
        "relative w-24 h-24 rounded-xl aspect-square z-10 md:w-28 md:h-28",
        COLORS(training, 500)["background"]
      )}
    >
      {children}
    </div>
    <div
      id="training-bg-border"
      className={cn(
        "absolute inset-0 w-[104px] h-[104px] transform translate-x-[-4px] translate-y-[-4px]",
        "md:w-[120px] md:h-[120px] rounded-[14px] shadow-lg",
        COLORS(training, 900)["background"]
      )}
    />
  </>
)

const TrainingCheckbox = ({
  label,
  icon,
}: {
  label: Training
  icon?: React.ReactNode
}) => {
  // form store value for currently selected training checkbox

  const handleChange = (id: string) => (checked: boolean) => {
    // TBC
    // Return if the current selection is already checked
    // Update the current selection to the new value
  }

  return (
    <div>
      <p
        className={cn(
          "mb-2 font-bold text-center capitalize md:text-md text-sm tracking-wide",
          COLORS(label, 300)["text"]
        )}
      >
        {label}
      </p>

      <label className="relative hover:cursor-pointer">
        <TrainingBox training={label}>{icon}</TrainingBox>
        <div
          id="checkbox-wrapper"
          className="absolute bottom-0 left-0 z-10 flex justify-center w-full transform translate-y-1/2 "
        >
          <Checkbox
            icon={<CheckedIcon training={label} />}
            className={cn(
              "h-5 w-5 rounded-none transform rotate-45 border-4",
              "data-[state=checked]:bg-white bg-white",
              COLORS(label, 500)["border"]
            )}
          />
        </div>
      </label>
    </div>
  )
}

export default function SelectTraining() {
  return (
    <div>
      <div>
        <p className="text-lg font-bold text-center">Training</p>
        <p className="text-sm text-center">
          What style of training defines <i>you?</i>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Object.keys(TRAINING_KEYS).map((training) => (
          <TrainingCheckbox
            key={training}
            label={training as Training}
            icon={<TrainingIcon training={training as Training} />}
          />
        ))}
      </div>
    </div>
  )
}
