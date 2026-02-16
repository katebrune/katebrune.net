'use server'

import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import Container from 'typedi'

import { MdxService } from '@/services/mdx-service'
import { BlogPost } from '@/app/blog/[id]/(components)/blog-post/blog-post'

// generateStaticParams() is part of the nextjs api
export async function generateStaticParams() {
  const mdxService = Container.get(MdxService)
  const fileNames = mdxService.getAllPostNames()
  return fileNames.map((name) => ({ id: name }))
}

async function getBlogPost({ id }: { id: string }) {
  const mdxService = Container.get(MdxService)
  const post = mdxService.getPostData(id)

  const normalizedTitle = String(post.metadata.title ?? '')
    .trim()
    .toLowerCase()
  const contentWithoutDuplicateTitle = post.content.replace(
    /^\s*#\s+(.+?)\s*\n+/,
    (match, heading: string) =>
      heading.trim().toLowerCase() === normalizedTitle ? '' : match,
  )

  const wordCount = contentWithoutDuplicateTitle
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 220))

  const serialized = await serialize(contentWithoutDuplicateTitle, {
    mdxOptions: {},
  })
  return {
    metadata: post.metadata,
    content: serialized,
    readTimeMinutes,
    id: id,
  }
}

export async function generateMetadata({ params }: any) {
  const post = await getBlogPost(params)

  return {
    title: `Blog | ${post.metadata.title}`,
  }
}

export default async function BlogPostPage({ params }: any) {
  const post = await getBlogPost(params)

  return (
    <BlogPost
      content={post.content}
      metadata={post.metadata}
      readTimeMinutes={post.readTimeMinutes}
    />
  )
}
