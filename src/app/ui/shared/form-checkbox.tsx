import { Checkbox } from "@/app/ui/checkbox"

export const FormCheckboxContainer = ({
  label,
  values,
  children,
  maxSelection,
}: {
  label: string
  values: string[]
  children: React.ReactNode
  maxSelection: number
}) => (
  <div className="flex flex-col sm:max-w-[300px]" key={`${label}-checkbox`}>
    <span className="pl-1 text-sm font-bold leading-7 capitalize">
      {label} {values.length} / {String(maxSelection)}
    </span>
    <div className="flex-1 grid grid-cols-2 p-1 border rounded-md bg-[#2a2c2e]">
      {children}
    </div>
  </div>
)

export const FormCheckbox = ({
  label,
  values,
  handleChange,
  maxSelection,
}: {
  label: string
  values: string[]
  handleChange: (_id: string) => (_checked: boolean) => void
  maxSelection: number
}) => (
  <label
    htmlFor={label}
    className="flex items-center p-[7px] text-sm rounded-lg hover:cursor-pointer select-none hover:bg-neutral-800 max-w-fit transition-colors"
  >
    <Checkbox
      id={label}
      name={label}
      checked={values.includes(label)}
      onCheckedChange={handleChange(label)}
      disabled={values.length >= maxSelection && !values.includes(label)}
    />
    <span className="pl-1 capitalize truncate">{label}</span>
  </label>
)
