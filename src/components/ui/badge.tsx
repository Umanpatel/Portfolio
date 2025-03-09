import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-3 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-black text-white shadow-lg hover:text-black hover:bg-white hover:border-black dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white",
        secondary:
          "border-transparent bg-black text-white shadow-lg hover:text-black hover:bg-white hover:border-black dark:bg-white dark:text-black dark:hover:text-white dark:hover:bg-black dark:hover:border-white",
        destructive:
          "border-transparent bg-gradient-to-r from-black to-black text-white shadow-lg hover:text-black hover:from-white hover:to-white hover:border-black ",
        outline: "border border-black text-foreground shadow-md ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
