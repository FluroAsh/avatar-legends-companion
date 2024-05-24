import { Checkbox } from "@/app/ui/checkbox"
import { type Move } from "@/types/api"
import { cn } from "@/utils/helpers"

export default function MoveCard({
  moveData,
  isSelected,
  values,
  maxSelection,
  onChange,
}: {
  moveData: Move
  isSelected: boolean
  values: string[]
  maxSelection: number
  onChange: (_value: string) => (_checked: boolean) => void
}) {
  const { move, description } = moveData
  const isDisabled = values.length === maxSelection && !isSelected

  return (
    <div className="flex items-center w-full overflow-hidden rounded-lg">
      <label
        htmlFor={`${move}-checkbox`}
        className={cn(
          "grow h-full p-4 rounded-xl border border-slate-600 text-xs hover:cursor-pointer select-none font-semibold bg-slate-700 transition",
          isSelected && "bg-sky-700 border-sky-600",
          isDisabled && "opacity-60 hover:cursor-not-allowed",
          !isDisabled && "hover:animate-pulse-2"
        )}
      >
        <Checkbox
          id={`${move}-checkbox`}
          name={`${move}-checkbox`}
          checked={values.includes(move)}
          onCheckedChange={onChange(move)}
          disabled={isDisabled}
          className="hidden"
        />
        <span className="text-xl font-bold">{move}</span>
        {/* 
          This description should preview (peak from the bottom of the card), 
          and then expand when clicked to show the full description.
          Only the first 180 characters should show in the preview.
        */}
        <div className="pt-1 leading-5 text-neutral-300">
          {description.substring(0, 180)}...
        </div>
      </label>
    </div>
  )
}
