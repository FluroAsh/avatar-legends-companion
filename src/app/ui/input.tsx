import * as React from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/utils/helpers"

const baseStyles = [
  "h-[35px] text-sm ring-offset-background file:border-0 file:bg-transparent",
  "file:text-sm file:font-medium placeholder:text-muted-foreground",
]

const inputVariants = cva(baseStyles, {
  variants: {
    variant: {
      default: [
        "flex w-full px-3 py-2 rounded-md border border-input bg-muted",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
        "disabled:cursor-not-allowed disabled:opacity-50",
      ],
      inline: [
        "bg-transparent focus-visible:outline-none mr-2 w-[150px] py-2 h-[22px]",
        "border-b border-neutral-500 focus-visible:border-ring transition-colors",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
