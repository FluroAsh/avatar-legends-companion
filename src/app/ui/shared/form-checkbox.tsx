import { Checkbox } from "@/app/ui/checkbox"
import { cn } from "@/utils/helpers"

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
    <div className="grid flex-1 grid-cols-2 p-1 border rounded-md bg-muted">
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
}) => {
  const isDisabled = values.length >= maxSelection && !values.includes(label)

  return (
    <label
      htmlFor={label}
      className={cn(
        "flex items-center p-[7px] text-xs rounded-lg hover:cursor-pointer select-none hover:bg-accent font-semibold transition",
        isDisabled && "opacity-60 hover:cursor-not-allowed"
      )}
    >
      <Checkbox
        id={label}
        name={label}
        checked={values.includes(label)}
        onCheckedChange={handleChange(label)}
        disabled={isDisabled}
      />
      <span className="pl-2 capitalize truncate">{label}</span>
    </label>
  )
}
