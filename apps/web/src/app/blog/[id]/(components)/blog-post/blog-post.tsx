'use client'

import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import { HTMLAttributes } from 'react'

import { Image } from '@/app/blog/[id]/(components)/image/image'
import { Code } from '@/app/blog/[id]/(components)/code/code'
import { Typography } from '@katebrune/ui/typography'
import { Badge } from '@katebrune/ui/badge'

interface BlogPostProperties {
  content: any
  metadata: {
    title: string
    description?: string
    date?: string
    tags?: string[]
  }
  readTimeMinutes: number
}

export function BlogPost({
  content,
  metadata,
  readTimeMinutes,
}: BlogPostProperties) {
  const tags = metadata.tags ?? []

  const mdxComponents = {
    h1: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="h1"
        {...properties}
        className="mb-5 mt-10 text-3xl font-semibold leading-tight tracking-tight text-slate-900 first:mt-0 dark:text-zinc-100 sm:text-4xl"
      />
    ),
    h2: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="h2"
        {...properties}
        className="mb-4 mt-10 text-2xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-zinc-100 sm:text-3xl"
      />
    ),
    h3: (properties: HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        variant="h3"
        {...properties}
        className="mb-3 mt-8 text-xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-zinc-100 sm:text-2xl"
      />
    ),
    p: (properties: HTMLAttributes<HTMLParagraphElement>) => (
      <Typography
        variant="p"
        {...properties}
        className="my-5 text-lg leading-8 text-slate-700 dark:text-zinc-200"
      />
    ),
    a: (properties: HTMLAttributes<HTMLAnchorElement>) => (
      <a
        {...properties}
        className="font-medium text-sky-700 underline decoration-sky-500/50 underline-offset-4 transition-colors hover:text-sky-600 dark:text-amber-300 dark:decoration-amber-300/50 dark:hover:text-amber-200"
      />
    ),
    ol: (properties: HTMLAttributes<HTMLOListElement>) => (
      <ol
        {...properties}
        className="my-6 list-decimal space-y-2 pl-7 text-lg leading-8 text-slate-700 marker:font-medium marker:text-slate-500 dark:text-zinc-200 dark:marker:text-zinc-400"
      />
    ),
    ul: (properties: HTMLAttributes<HTMLUListElement>) => (
      <ul
        {...properties}
        className="my-6 list-disc space-y-2 pl-7 text-lg leading-8 text-slate-700 marker:text-slate-500 dark:text-zinc-200 dark:marker:text-zinc-400"
      />
    ),
    li: (properties: HTMLAttributes<HTMLLIElement>) => (
      <li {...properties} className="pl-1" />
    ),
    blockquote: (properties: HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        {...properties}
        className="my-8 border-l-4 border-slate-300 bg-slate-100/70 py-2 pl-4 text-slate-700 dark:border-zinc-700 dark:bg-zinc-800/40 dark:text-zinc-200"
      />
    ),
    pre: (properties: HTMLAttributes<HTMLPreElement>) => (
      <Code {...properties} />
    ),
    code: (properties: HTMLAttributes<HTMLElement>) => (
      <code
        {...properties}
        className="rounded-md bg-slate-200 px-1.5 py-0.5 font-mono text-[0.95em] text-slate-900 dark:bg-zinc-800 dark:text-zinc-100"
      />
    ),
    Image: (properties: HTMLAttributes<HTMLImageElement>) => (
      <Image {...properties} alt="blog post image" />
    ),
  }

  return (
    <article className="mx-auto mt-6 w-full max-w-4xl rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_10px_34px_rgba(15,23,42,0.09)] dark:border-zinc-800/80 dark:bg-zinc-900/55 dark:shadow-[0_14px_36px_rgba(0,0,0,0.55)] sm:p-8 md:p-10">
      <header className="border-b border-slate-200/90 pb-6 dark:border-zinc-800/90">
        <Typography
          variant="h1"
          className="text-4xl font-bold leading-[1.06] tracking-tight text-slate-900 dark:text-zinc-100 sm:text-6xl"
        >
          {metadata.title}
        </Typography>
        {metadata.description ? (
          <Typography
            variant="p"
            className="mt-4 text-xl leading-relaxed text-slate-700 dark:text-zinc-200"
          >
            {metadata.description}
          </Typography>
        ) : null}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-slate-500 dark:text-zinc-400">
          {metadata.date ? <span>{metadata.date}</span> : null}
          <span>{readTimeMinutes} min read</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="rounded-full border-0 bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>
      <section className="pt-4">
        <MDXRemote {...content} components={mdxComponents} />
      </section>
    </article>
  )
}
