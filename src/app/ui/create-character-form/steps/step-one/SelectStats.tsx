"use client"

import { useEffect } from "react"
import { useFormStore } from "@/stores/form-store"

import { Checkbox } from "@/app/ui/checkbox"
import { STATS } from "@/lib/constants"
import { cn } from "@/utils/helpers"
import { usePlaybook } from "@/utils/query-client"
import FormContainer from "../../form-container"

type StatsType = (typeof STATS)[keyof typeof STATS]

const statLabelValue = (
  stat: string,
  statValue: number | null,
  playbookStats: any // TODO: Add type, playbookData is in Context (untyped) for now...
) => {
  const value = statValue ?? playbookStats[stat]
  return value > 0 ? `(+${value})` : `(${value})`
}

export default function SelectStats() {
  const update = useFormStore((state) => state.update)
  const baseStats = useFormStore((state) => state.baseStats)
  const playbook = useFormStore((state) => state.playbook)

  const { data: playbookData } = usePlaybook(playbook.value)

  // Synchronising the base stats with the playbook stats
  // (and update the selected stat for the +1 bonus)
  useEffect(() => {
    if (baseStats.selected && baseStats.selected !== "") {
      update({
        baseStats: {
          selected: baseStats.selected,
          ...playbookData.baseStats,
          [baseStats.selected]: playbookData.baseStats[baseStats.selected] + 1,
        },
      })
    }
    // This effect should only run when the playbook changes, not on every selection to avoid unnecessary updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playbook.value, update])

  const handleChange = (stat: StatsType) => (checked: boolean) => {
    if (!checked) return

    // Increment the selected stat, or if no selection has yet been made, use the playbook's base stats
    update({
      baseStats: {
        selected: stat,
        ...playbookData.baseStats,
        [stat]: (baseStats[stat] ?? playbookData.baseStats[stat]) + 1,
      },
    })
  }

  return (
    <FormContainer
      heading="Stats"
      subheading={
        <>
          Add +1 to <span className="underline">one</span> stat
        </>
      }
    >
      {Object.values(STATS).map((stat) => (
        <label
          key={stat}
          htmlFor={stat}
          className="flex items-center p-2 pr-3 transition-colors rounded-lg select-none justify-self-start hover:cursor-pointer hover:bg-accent"
        >
          <Checkbox
            id={stat}
            name={stat}
            className="rounded-full w-7 h-7"
            checked={baseStats.selected === stat}
            onCheckedChange={handleChange(stat)}
            icon={
              <span className="text-[11px] font-bold text-accent-foreground">
                +1
              </span>
            }
          />

          <div className="relative pl-2 font-semibold">
            <span
              className={cn(
                "text-sm capitalize transition tracking-tight",
                baseStats.selected !== stat && "opacity-60"
              )}
            >
              {stat}
            </span>
            <span
              className={cn(
                "absolute -right-2 text-[10px] font-semibold -top-2 text-neutral-400 tracking-tight transition",
                baseStats.selected !== stat && "opacity-60"
              )}
            >
              {statLabelValue(stat, baseStats[stat], playbookData.baseStats)}
            </span>
          </div>
        </label>
      ))}
    </FormContainer>
  )
}
