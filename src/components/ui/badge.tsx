import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-teal-500 to-violet-500 text-white shadow-lg hover:from-black hover:to-black hover:border-white",
        secondary:
          "border-transparent bg-gradient-to-r from-teal-500 to-violet-500 text-white shadow-lg hover:from-black hover:to-black hover:border-white",
        destructive:
          "border-transparent bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg hover:from-red-600 hover:to-red-800",
        outline: "border border-gray-300 text-foreground shadow-md",
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
