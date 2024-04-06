"use client"

import { cn } from "@/utils/helpers"

export default function SkipLink({ id }: { id: string }) {
  const focusMainContent = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault()
    const mainContent = document.getElementById(id)
    if (mainContent) mainContent.focus()
  }

  return (
    <a
      href={`#${id}`}
      onKeyDown={(e) => focusMainContent(e)}
      onClick={(e) => focusMainContent(e)}
      className={cn(
        "p-2 text-sm underline rounded-br-sm sr-only bg-sky-600 z-1 text-sky-100 font-semibold",
        "focus:not-sr-only focus:fixed focus:top-20 focus:left-0 focus:p-1 focus:z-10",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background"
      )}
    >
      Skip to Main Content
    </a>
  )
}
