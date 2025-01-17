import { useRef, useState } from "react"
import { LuChevronUp } from "react-icons/lu"

import { Checkbox } from "@/components/checkbox"
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

const MAX_CHARS_PREVIEW = 160
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

  const shouldShowPreview = contentLength >= MAX_CHARS_PREVIEW

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
          "p-4 w-full h-fit text-xs font-semibold bg-slate-700 transition rounded-lg border border-slate-600",
          "select-none focus:outline-none focus:ring-2 focus-ring-sky-600 hover:cursor-pointer",
          shouldShowPreview && "pb-12",
          isSelected && "bg-sky-800 border-sky-600",
          isDisabled && "hover:cursor-not-allowed",
          !isDisabled && !isSelected && "hover:animate-pulse-2"
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
        <p className="text-lg font-bold capitalize">{move}</p>

        <div
          className="w-full pt-1 leading-5 transition-[max-height] duration-500 text-neutral-300 overflow-hidden"
          style={{
            // An additional 30px is required in-case a scrollbar is added during expansion
            maxHeight: isExpanded ? contentHeight + 30 : PREVIEW_HEIGHT,
          }}
          ref={contentRef}
        >
          {contentJSX}
        </div>
      </label>

      {shouldShowPreview && (
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
          <LuChevronUp
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
