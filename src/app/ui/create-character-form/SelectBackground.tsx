"use client"

import { BACKGROUNDS } from "@/lib/constants"
import { useFormContext } from "@/lib/contexts/FormContext"

export default function SelectBackground() {
  // TODO: Limit to 2 backgrounds
  // const [selected, setSelected] = useState<string[]>([])

  const { formState, setFormState } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target

    setFormState((prev) => ({
      ...prev,
      background: {
        values: checked
          ? [...prev.background.values, id]
          : prev.background.values.filter((b) => b !== id),
        error: "",
      },
    }))
  }

  return (
    <div>
      Background (2)
      {Object.values(BACKGROUNDS).map((background) => (
        <div key={background}>
          <label className="cursor-pointer">
            <input
              id={background}
              name="background"
              type="checkbox"
              checked={formState.background.values.includes(background)}
              onChange={handleChange}
            />
            {background}
          </label>
        </div>
      ))}
    </div>
  )
}
