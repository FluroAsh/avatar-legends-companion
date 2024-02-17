import { BACKGROUNDS } from "@/lib/constants"

export default async function SelectBackground() {
  // TODO: Limit to 2 backgrounds
  // const [selected, setSelected] = useState<string[]>([])
  return (
    <div>
      Background
      {Object.values(BACKGROUNDS).map((background) => (
        <div key={background}>
          <label className="cursor-pointer">
            <input type="checkbox" id={background} name="demeanour" />
            {background}
          </label>
        </div>
      ))}
    </div>
  )
}
