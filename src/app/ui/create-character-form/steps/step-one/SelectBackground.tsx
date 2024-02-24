"use client"

import { BACKGROUNDS } from "@/lib/constants"
import { useFormStore } from "@/lib/store"

export default function SelectBackground() {
  // TODO: Limit to 2 backgrounds
  // const [selected, setSelected] = useState<string[]>([])

  // const { background, update } = useFormStore((state) => ({
  //   background: state.background,
  //   update: state.update,
  // }))

  const background = useFormStore((state) => state.background)
  const update = useFormStore((state) => state.update)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target

    update({
      background: {
        values: checked
          ? [...background.values, id]
          : background.values.filter((b) => b !== id),
        error: "",
      },
    })
  }

  return (
    <div>
      Background (2)
      {Object.values(BACKGROUNDS).map((apiBackground) => (
        <div key={apiBackground}>
          <label className="cursor-pointer">
            <input
              id={apiBackground}
              name="background"
              type="checkbox"
              checked={background.values.includes(apiBackground)}
              onChange={handleChange}
            />
            {apiBackground}
          </label>
        </div>
      ))}
    </div>
  )
}
