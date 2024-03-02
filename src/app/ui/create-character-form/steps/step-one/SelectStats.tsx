"use client"

import { usePlaybookContext } from "@/contexts/PlaybookContext"
import { useFormStore } from "@/stores/formStore"

import { Checkbox } from "@/app/ui/checkbox"
import { STATS } from "@/lib/constants"

const statLabel = (
  stat: string,
  statValue: number | null,
  playbookStats: any // TODO: Add type, playbookData is in Context (untyped) for now...
) => {
  const value = statValue ?? playbookStats[stat]
  return value > 0 ? `(+${value})` : `(${value})`
}

type StatsType = (typeof STATS)[keyof typeof STATS]

export default function SelectStats() {
  const { playbookData } = usePlaybookContext()
  const update = useFormStore((state) => state.update)
  const baseStats = useFormStore((state) => state.baseStats)

  if (!playbookData.class || !playbookData.baseStats) return null

  const handleChange = (checkboxStat: StatsType) => (checked: boolean) => {
    if (!checked) return

    update({
      baseStats: {
        selected: checkboxStat,
        ...playbookData.baseStats,
        [checkboxStat]:
          baseStats.selected !== checkboxStat
            ? (baseStats[checkboxStat] ??
                playbookData.baseStats[checkboxStat]) + 1
            : baseStats[checkboxStat],
      },
    })
  }

  return (
    <div className="bg-[#343c40] rounded-lg border border- shadow-sm overflow-hidden">
      <div className="p-2 px-4">
        <p className="text-lg font-bold">Stats</p>
        <p className="text-xs text-neutral-300">
          Add +1 to <span className="underline">one</span> stat
        </p>
      </div>

      <div className="grid grid-cols-2 p-4 bg-[#2a2c2e] border-t border-t-neutral-600 gap-x-6 gap-y-3">
        {Object.values(STATS).map((stat) => (
          <label
            key={stat}
            htmlFor={stat}
            className="flex items-center select-none hover:cursor-pointer"
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
