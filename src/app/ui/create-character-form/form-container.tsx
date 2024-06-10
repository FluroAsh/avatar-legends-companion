import { cn } from "@/utils/helpers"

export default function FormContainer({
  heading,
  subheading,
  children,
  stacked,
  className,
}: {
  heading: string
  subheading: React.ReactNode
  children: React.ReactNode
  /** By default content will display in a 2-column grid layout, `stacked` ensures only 1 column is used. */
  stacked?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        "bg-primary rounded-lg border shadow-sm overflow-hidden h-fit min-w-[300px]",
        className
      )}
    >
      <div className="p-2 px-4">
        <p className="text-lg font-bold capitalize">{heading}</p>
        <p className="text-xs text-neutral-300">{subheading}</p>
      </div>

      <div
        className={cn(
          "grid p-4 border-t bg-muted border-t-neutral-600 gap-x-6 gap-y-1",
          stacked ? "grid-cols-1 gap-4" : "grid-cols-2"
        )}
      >
        {children}
      </div>
    </div>
  )
}
