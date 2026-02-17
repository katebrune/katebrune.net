'use server'

import React from 'react'
import moment from 'moment'
import Container from 'typedi'

import { MdxService } from '@/services/mdx-service'
import { PostPreview } from '@/app/(components)/post-preview/post-preview'
import { Typography } from '@katebrune/ui/typography'

async function getPosts(query?: string): Promise<any[]> {
  const mdxService = Container.get(MdxService)
  const postsData = mdxService.getAllPostsMetadata()
  const normalizedQuery = query?.trim().toLowerCase() ?? ''

  return postsData
    .map(({ metadata }) => {
      const [month, day, year] = metadata.date.replace(',', '').split(' ')
      return {
        ...metadata,
        mDate: moment([Number.parseInt(year), 0, Number.parseInt(day)]).month(
          month,
        ),
      }
    })
    .filter((metadata) => {
      if (!normalizedQuery) return true
      const title = String(metadata.title ?? '').toLowerCase()
      const description = String(metadata.description ?? '').toLowerCase()
      const tags = Array.isArray(metadata.tags)
        ? metadata.tags.join(' ').toLowerCase()
        : ''
      return (
        title.includes(normalizedQuery) ||
        description.includes(normalizedQuery) ||
        tags.includes(normalizedQuery)
      )
    })
    .sort((a, b) => a.mDate - b.mDate)
    .reverse()
    .map(({ ...keep }) => ({ metadata: { ...keep } }))
}

export default async function HomePage({ searchParams }: any) {
  const query =
    typeof searchParams?.q === 'string'
      ? searchParams.q
      : Array.isArray(searchParams?.q)
        ? searchParams.q[0]
        : ''
  const posts = await getPosts(query)

  return (
    <div className="mt-6 flex flex-col items-start gap-6">
      {query ? (
        <Typography
          variant="p"
          className="text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          Results for "{query}" ({posts.length})
        </Typography>
      ) : null}
      {posts.length === 0 ? (
        <Typography
          variant="p"
          className="text-base text-slate-600 dark:text-slate-300"
        >
          No posts found. Try a different search term.
        </Typography>
      ) : null}
      {posts.map(({ metadata }, index) => (
        <PostPreview
          id={metadata.id}
          title={metadata.title}
          description={metadata.description}
          date={metadata.date}
          tags={metadata.tags}
          key={index}
        />
      ))}
    </div>
  )
}
