"use client"

import { useFormStore } from "@/stores/formStore"

import { useSuspensePlaybook } from "@/utils/query-client"

export function PocComponent() {
  const playbook = useFormStore((state) => state.playbook)

  const { data } = useSuspensePlaybook(playbook.value)

  return (
    <div
      id="poc-form"
      className="w-full p-2 mt-2 overflow-scroll text-left break-words border rounded-sm h-[600px] border-slate-300 bg-slate-600/50"
    >
      <pre className="p-5">{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
