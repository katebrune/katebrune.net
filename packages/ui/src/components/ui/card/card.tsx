import * as React from 'react'

import { cn } from '../../../lib/utils'

/**
 * https://ui.shadcn.com/docs/components/card
 */

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn(
      'rounded-2xl border border-slate-200/90 bg-white text-slate-900 shadow-[0_6px_24px_rgba(15,23,42,0.08)] transition-colors dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:text-zinc-50 dark:shadow-[0_14px_36px_rgba(0,0,0,0.5)]',
      className,
    )}
    {...properties}
  />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex flex-col space-y-2 p-6', className)}
    {...properties}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h3
    ref={reference}
    className={cn(
      'text-2xl font-semibold leading-tight tracking-tight',
      className,
    )}
    {...properties}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <p
    ref={reference}
    className={cn('text-base text-slate-600 dark:text-zinc-400', className)}
    {...properties}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div ref={reference} className={cn('p-6 pt-0', className)} {...properties} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
  // eslint-disable-next-line react/prop-types
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn('flex items-center p-6 pt-0', className)}
    {...properties}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
