"use client"

import { useEffect } from "react"
import { usePlaybookContext } from "@/contexts/PlaybookContext"
import { useFormStore } from "@/stores/formStore"

import { Checkbox } from "@/app/ui/checkbox"
import { STATS } from "@/lib/constants"

type StatsType = (typeof STATS)[keyof typeof STATS]

const statLabel = (
  stat: string,
  statValue: number | null,
  playbookStats: any // TODO: Add type, playbookData is in Context (untyped) for now...
) => {
  const value = statValue ?? playbookStats[stat]
  return value > 0 ? `(+${value})` : `(${value})`
}

export default function SelectStats() {
  const { playbookData } = usePlaybookContext()
  const update = useFormStore((state) => state.update)
  const baseStats = useFormStore((state) => state.baseStats)
  const playbook = useFormStore((state) => state.playbook)

  // Synchronising the base stats with the playbook stats (and update the selected stat for the +1 bonus)
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
  }, [playbookData.baseStats, playbookData.class, playbook.value, update])

  if (!playbookData.class || !playbookData.baseStats) return null

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
    <div className="bg-[#343c40] rounded-lg border border- shadow-sm overflow-hidden min-w-[300px]">
      <div className="p-2 px-4">
        <p className="text-lg font-bold">Stats</p>
        <p className="text-xs text-neutral-300">
          Add +1 to <span className="underline">one</span> stat
        </p>
      </div>

      <div className="grid grid-cols-2 p-4 bg-[#2a2c2e] border-t border-t-neutral-600 gap-x-6 gap-y-1">
        {Object.values(STATS).map((stat) => (
          <label
            key={stat}
            htmlFor={stat}
            className="flex items-center p-2 pr-3 transition-colors rounded-lg select-none justify-self-start hover:cursor-pointer hover:bg-neutral-800"
          >
            <Checkbox
              id={stat}
              name={stat}
              className="w-6 h-6 rounded-full"
              checked={baseStats.selected === stat}
              onCheckedChange={handleChange(stat)}
              icon={<span className="text-[11px]">+1</span>}
            />

            <div className="relative pl-1">
              <span className="text-sm capitalize">{stat}</span>
              <span className="absolute -right-2 text-[10px] font-bold -top-2 text-neutral-400 tracking-tight">
                {statLabel(stat, baseStats[stat], playbookData.baseStats)}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
