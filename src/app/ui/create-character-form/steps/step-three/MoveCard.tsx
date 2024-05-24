import { Checkbox } from "@/app/ui/checkbox"
import { type Move } from "@/types/api"
import { cn } from "@/utils/helpers"

const MAX_CHARS_PREVIEW = 180

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

  const moveKey = move.toLowerCase().replace(/\s/g, "-").concat("-checkbox")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onChange(move)(!values.includes(move))
    }
  }

  return (
    <div className="flex">
      <label
        htmlFor={moveKey}
        className={cn(
          "p-4 w-full text-xs font-semibold bg-slate-700 transition rounded-lg border border-slate-600",
          "select-none focus:outline-none focus:ring-2 focus-ring-sky-600 hover:cursor-pointer",
          isSelected && "bg-sky-700 border-sky-600",
          isDisabled && "opacity-60 hover:cursor-not-allowed",
          !isDisabled && "hover:animate-pulse-2"
        )}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Checkbox
          id={moveKey}
          name={moveKey}
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
          {description.length >= MAX_CHARS_PREVIEW
            ? description.substring(0, MAX_CHARS_PREVIEW) + "..."
            : description}
        </div>
      </label>
    </div>
  )
}
