"use client"

import { usePlaybookContext } from "@/lib/contexts/PlaybookContext"

export function PocComponent() {
  // DEBUG: Temp for testing
  const { state } = usePlaybookContext()

  return (
    <div
      id="poc-form"
      className="w-full p-2 mt-2 overflow-scroll text-left break-words border rounded-sm h-[600px] border-slate-300 bg-slate-600/50"
    >
      <pre className="p-5">{JSON.stringify(state, null, 4)}</pre>
    </div>
  )
}
