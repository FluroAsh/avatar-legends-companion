import { cn } from "@/utils/helpers"

export default function FormContainer({
  heading,
  subheading,
  children,
  rightNode,
  split,
  className,
  ...props
}: {
  heading: string
  subheading: React.ReactNode
  children: React.ReactNode
  rightNode?: React.ReactNode
  /** By default content will display in a 1-column grid layout, `split` ensures 2 columns are used. */
  split?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-primary rounded-lg border shadow-sm h-fit min-w-[300px]",
        className
      )}
      {...props}
    >
      {rightNode ? (
        <div className="flex justify-between px-4 py-2">
          <div>
            <p className="text-lg font-bold capitalize">{heading}</p>
            <p className="text-xs text-neutral-300">{subheading}</p>
          </div>
          <>{rightNode}</>
        </div>
      ) : (
        <div className="p-2 px-4">
          <p className="text-lg font-bold capitalize">{heading}</p>
          <p className="text-xs text-neutral-300">{subheading}</p>
        </div>
      )}

      <div
        className={cn(
          "grid p-4 border-t bg-muted border-t-neutral-600 gap-x-6 gap-y-1",
          split ? "grid-cols-2" : "grid-cols-1 gap-4"
        )}
      >
        {children}
      </div>
    </div>
  )
}
