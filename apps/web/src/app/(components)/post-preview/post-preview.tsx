import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@katebrune/ui/card'

import { Badge } from '@katebrune/ui/badge'
import { buttonVariants } from '@katebrune/ui/button'

export interface PostPreviewProperties {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
}

export const PostPreview: FunctionComponent<PostPreviewProperties> = ({
  id,
  title,
  description,
  date,
  tags,
}) => {
  return (
    <Card className="w-full overflow-hidden rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-[0_16px_38px_rgba(15,23,42,0.16)] dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.62)]">
      <CardHeader>
        <CardTitle className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-zinc-100">
          {title}
        </CardTitle>
        <CardDescription className="font-medium text-slate-500 dark:text-zinc-400">
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-4 text-xl leading-relaxed text-slate-700 dark:text-zinc-200 md:line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t border-slate-200/80 pt-4 dark:border-zinc-800/80">
        <div className="flex gap-1">
          {tags?.map((tag, index) => (
            <Badge
              variant="secondary"
              className="rounded-full border-0 bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200"
              key={index}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={`/blog/${id}`}
          className={buttonVariants({
            variant: 'default',
            className:
              'rounded-2xl px-5 font-semibold shadow-sm dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-50',
          })}
        >
          Open
        </Link>
      </CardFooter>
    </Card>
  )
}
