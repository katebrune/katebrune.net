import React, { FunctionComponent, HTMLAttributes } from 'react'
import cx from 'classnames'

export interface ImageProperties extends Omit<
  HTMLAttributes<HTMLImageElement>,
  'alt'
> {
  alt: string
}
export const Image: FunctionComponent<ImageProperties> = (properties) => (
  // Using next/image automatically optimizes images and costs $ when deployed on vercel
  <img
    {...properties}
    className={cx(
      'my-8 w-full rounded-2xl border border-slate-200 object-cover shadow-sm dark:border-slate-700',
      properties.className,
    )}
    alt={properties.alt}
  />
)
