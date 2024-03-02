"use client"

import { usePlaybookContext } from "@/contexts/PlaybookContext"
import { useFormStore } from "@/stores/formStore"

import { Checkbox } from "@/app/ui/checkbox"
import { DEMEANOURS } from "@/lib/constants"

export default function SelectDemeanour() {
  const { playbookData } = usePlaybookContext()
  const playbook = useFormStore((state) => state.playbook)
  const demeanour = useFormStore((state) => state.demeanour)
  const update = useFormStore((state) => state.update)

  // Probably want to just suspend this component until the state is ready/not an empty Object,
  // or return a skeleton. For now we'll just return null.

  if (!playbookData.demeanor) return null

  const handleChange = (id: string) => (checked: boolean) => {
    if (checked && demeanour.values.length === 3) return

    update({
      demeanour: {
        values: checked
          ? [...demeanour.values, id]
          : demeanour.values.filter((d) => d !== id),
        error: "",
      },
    })
  }

  // TODO: These Checkbox components can have a shared component wrapper for handling styles
  return (
    <div className=" flex flex-col sm:max-w-[300px]" key={playbook.value}>
      <span className="pl-1 text-sm font-bold leading-6">
        Demeanour {demeanour.values.length} / 3
      </span>
      <div className="flex-1 grid grid-cols-2 gap-2 px-4 py-2 border rounded-md bg-[#2a2c2e]">
        {playbookData.demeanor.map(
          (d: (typeof DEMEANOURS)[keyof typeof DEMEANOURS]) => (
            <div key={d}>
              <label
                htmlFor={d}
                className="flex items-center text-sm truncate select-none"
              >
                <Checkbox
                  id={d}
                  name="demeanour"
                  checked={demeanour.values.includes(d)}
                  onCheckedChange={handleChange(d)}
                  disabled={
                    demeanour.values.length >= 3 &&
                    !demeanour.values.includes(d)
                  }
                />
                <span className="pl-1 capitalize">{d}</span>
              </label>
            </div>
          )
        )}
      </div>
    </div>
  )
}
