"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/utils/helpers"

export default function SkipLink({ id }: { id: string }) {
  const mainContentRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    mainContentRef.current = document.getElementById(
      id
    ) as HTMLButtonElement | null
  }, [id])

  const focusMainContent = () => {
    const mainContentButton = mainContentRef.current
    mainContentButton && mainContentButton.focus()
  }

  return (
    <button
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          focusMainContent()
        }
      }}
      onClick={() => focusMainContent()}
      className={cn(
        "sr-only p-2 text-sm underline rounded-none rounded-br-sm  bg-sky-600 z-1 text-sky-100 font-semibold",
        "focus:not-sr-only focus:fixed focus:top-20 focus:left-0 focus:p-1 focus:z-10",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background"
      )}
    >
      Skip to Main Content
    </button>
  )
}
