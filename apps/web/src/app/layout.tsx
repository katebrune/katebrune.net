import 'reflect-metadata'
import React, { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/globals.css'
import { RootLayout } from '@/app/(components)/root-layout/root-layout'

export const metadata = {
  title: 'Blog',
  icons: {
    icon: [{ url: '/favicon.svg?v=2', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg?v=2',
  },
}

export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense fallback={null}>
        <RootLayout>{children}</RootLayout>
      </Suspense>
      <Analytics />
    </>
  )
}
