"use client"

import * as Icon from "@/assets/svgs/training-icons"
import { useFormStore } from "@/stores/form-store"

import { Checkbox } from "@/components/checkbox"
import { TRAINING_KEYS } from "@/lib/constants"
import { COLORS, type TrainingKey } from "@/lib/helpers"
import { cn } from "@/utils/helpers"

const TrainingIcon = ({ training }: { training: TrainingKey }) => {
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

const CheckedIcon = ({ training }: { training: TrainingKey }) => (
  <div className={cn("w-[6px] h-[6px]", COLORS(training, 500)["background"])} />
)

const TrainingBox = ({
  training,
  icon,
}: {
  training: TrainingKey
  icon: React.ReactNode
}) => (
  <>
    {/* Training Border */}
    <div
      className={cn(
        "training-bg-border absolute inset-0 transform translate-x-[-4px] translate-y-[-4px] rounded-[8px] shadow-md",
        "w-[104px] h-[104px]",
        "md:w-[108px] md:h-[108px]",
        COLORS(training, 900)["background"]
      )}
    />
    {/* Training Container */}
    <div
      className={cn(
        "relative rounded-md aspect-square overflow-hidden brightness-125",
        "w-[96px] h-[96px] p-1",
        "md:w-[100px] md:h-[100px]",
        COLORS(training, 500)["background"]
      )}
    >
      <div className="absolute inset-0 z-10 bg-[url('/textures/diagmonds.png')] mix-blend-multiply" />
      {icon}
    </div>
  </>
)

const TrainingCard = ({
  label,
  icon,
}: {
  label: TrainingKey
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
      // NOTE: Should clear any selected technique may have been set in Step (3)
      fightingTechnique: {
        value: {
          technique: "",
          stance: "",
          description: "",
        },
        error: "",
      },
    })
  }

  return (
    <div className="pb-4">
      <div
        className={cn(
          "mb-3 px-2 md:px-3 py-[1.5px] mx-auto rounded-full border w-fit",
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
        <div className="absolute bottom-0 left-0 flex justify-center w-full transform translate-y-1/2">
          <Checkbox
            icon={<CheckedIcon training={label} />}
            className={cn(
              "h-5 w-5 rounded-none transform rotate-45 border-4 ",
              selectedTraining !== label &&
                "focus:animate-pulse focus:brightness-125",
              "data-[state=checked]:bg-neutral-300",
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
      <div className="pb-4">
        <p className="text-lg font-bold text-center">Training</p>
        <p className="text-sm text-center">
          What style of training defines <i>you?</i>
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 gap-x-6 place-items-center md:grid-cols-6 md:grid-rows-1">
        {Object.keys(TRAINING_KEYS).map((training) => (
          <TrainingCard
            key={training}
            label={training as TrainingKey}
            icon={<TrainingIcon training={training as TrainingKey} />}
          />
        ))}
      </div>
    </div>
  )
}
