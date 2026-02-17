import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100',
        secondary:
          'border-transparent bg-slate-200 text-slate-700 hover:bg-slate-300 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700',
        destructive:
          'border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80',
        outline: 'text-slate-950 dark:text-zinc-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

/**
 * https://ui.shadcn.com/docs/components/badge
 */
export interface BadgeProperties
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...properties }: BadgeProperties) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...properties}
    />
  )
}

export { Badge, badgeVariants }
