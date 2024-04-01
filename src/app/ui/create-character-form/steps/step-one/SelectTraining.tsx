"use client"

import * as Icon from "@/assets/svgs/training-icons"
import { useFormStore } from "@/stores/formStore"

import { Checkbox } from "@/app/ui/checkbox"
import { TRAINING_KEYS } from "@/lib/constants"
import { COLORS, type Training } from "@/lib/helpers"
import { cn } from "@/utils/helpers"

const TrainingIcon = ({ training }: { training: Training }) => {
  const className = cn("z-10 brightness-[175%]", COLORS(training, 300)["fill"])

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
  icon,
}: {
  training: Training
  icon: React.ReactNode
}) => (
  <>
    <div
      className={cn(
        "training-bg-border absolute inset-0 w-[104px] h-[104px] transform translate-x-[-4px] translate-y-[-4px]",
        "md:w-[120px] md:h-[120px] rounded-[8px] shadow-md",
        COLORS(training, 900)["background"]
      )}
    />
    <div
      className={cn(
        "relative w-24 h-24 rounded-md aspect-square md:w-28 md:h-28 overflow-hidden brightness-125",
        COLORS(training, 500)["background"]
      )}
    >
      <div className="absolute inset-0 z-10 bg-[url('/textures/diagmonds.png')] mix-blend-multiply" />
      {icon}
    </div>
  </>
)

const TrainingCheckbox = ({
  label,
  icon,
}: {
  label: Training
  icon: React.ReactNode
}) => {
  const selectedTraining = useFormStore((state) => state.training.value)
  const update = useFormStore((state) => state.update)

  const handleChange = (id: string) => (checked: boolean) => {
    update({
      training: {
        value: checked && id !== selectedTraining ? id : "",
        error: "",
      },
    })
  }

  return (
    <div>
      <div
        className={cn(
          "mb-3 px-2 mx-auto rounded-full w-fit border",
          COLORS(label, 900)["background"],
          COLORS(label, 300)["border"]
        )}
      >
        <p
          className={cn(
            "font-bold text-center capitalize md:text-md text-xs tracking-wide",
            COLORS(label, 100)["text"]
          )}
        >
          {label}
        </p>
      </div>

      <label
        className={cn(
          "relative transition hover:cursor-pointer",
          selectedTraining !== label &&
            "hover:brightness-125 hover:animate-pulse-2",
          selectedTraining === label && "brightness-125"
        )}
      >
        <TrainingBox training={label} icon={icon} />
        <div className="absolute bottom-0 left-0 flex justify-center w-full transform translate-y-1/2 checkbox-wrapper ">
          <Checkbox
            icon={<CheckedIcon training={label} />}
            className={cn(
              "h-5 w-5 rounded-none transform rotate-45 border-4 ",
              selectedTraining !== label &&
                "focus:animate-pulse focus:brightness-125",
              COLORS(label, 100)["background"],
              COLORS(label, 700)["border"]
            )}
            value={selectedTraining}
            onCheckedChange={handleChange(label)}
            checked={selectedTraining === label}
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
