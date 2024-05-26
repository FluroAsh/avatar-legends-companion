import { useRef, useState } from "react"
import { ChevronUp } from "lucide-react"

import { Checkbox } from "@/app/ui/checkbox"
import { type Move } from "@/types/api"
import { cn } from "@/utils/helpers"

function parseContent(
  description: string,
  options?: string[],
  negativeOutcome?: string
) {
  const contentJSX = (
    <>
      <p>{description}</p>
      {options && options.length > 0 && (
        <ul className="list-disc">
          {options.map((option) => (
            <li key={option} className="ml-4">
              {option}
            </li>
          ))}
        </ul>
      )}
      {negativeOutcome && <p>{negativeOutcome}</p>}
    </>
  )

  const contentLength =
    description.length +
    (options ? options.reduce((acc, curr) => acc + curr.length, 0) : 0) +
    (negativeOutcome?.length ?? 0)

  return { contentJSX, contentLength }
}

const MAX_CHARS_PREVIEW = 180
const PREVIEW_HEIGHT = "60px"

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
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const contentHeight = contentRef.current?.scrollHeight || 0

  const { move, description, options, negativeOutcome } = moveData
  const isDisabled = values.length === maxSelection && !isSelected
  const moveKey = move.toLowerCase().replace(/\s/g, "-").concat("-checkbox")

  const { contentJSX, contentLength } = parseContent(
    description,
    options,
    negativeOutcome
  )

  const hasPreview = contentLength >= MAX_CHARS_PREVIEW

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onChange(move)(!values.includes(move))
    }
  }

  const expandDescription = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }

  return (
    <div
      className={cn(
        "relative flex h-fit transition-opacity",
        isDisabled && "opacity-60"
      )}
      aria-selected={isSelected}
      role="option"
    >
      <label
        htmlFor={moveKey}
        className={cn(
          "p-4 w-full text-xs font-semibold bg-slate-700 transition rounded-lg border border-slate-600",
          "select-none focus:outline-none focus:ring-2 focus-ring-sky-600 hover:cursor-pointer",
          hasPreview && "pb-11",
          isSelected && "bg-sky-800 border-sky-600",
          !isDisabled && "hover:animate-pulse-2",
          isDisabled && "hover:cursor-not-allowed"
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

        <div
          className={cn(
            "w-full gap-2 pt-1 leading-5 transition-[max-height] duration-500 text-neutral-300 overflow-hidden"
          )}
          style={{
            maxHeight: isExpanded ? contentHeight : PREVIEW_HEIGHT,
          }}
          ref={contentRef}
        >
          {contentJSX}
        </div>
      </label>

      {hasPreview && (
        <button
          type="button"
          className={cn(
            "flex justify-center select-none text-xs rounded-bl-lg rounded-br-lg absolute bottom-0 right-0 z-10 w-full transition-colors",
            "font-semibold cursor-pointer px-[8px] py-2 text-center bg-muted/50 hover:bg-neutral-600/50",
            "focus:outline-none focus:ring-2 focus:ring-sky-600"
          )}
          onClick={(e) => expandDescription(e)}
          aria-expanded={isExpanded}
        >
          <ChevronUp
            className={cn(
              "transition-transform duration-300 mr-[3.5px]",
              isExpanded ? "rotate-0" : "rotate-180"
            )}
            size={16}
          />
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      )}
    </div>
  )
}
