'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, {
  FormEvent,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { cva } from 'class-variance-authority'
import classNames from 'classnames'

import { GithubIcon } from '@/app/(components)/github-icon/github-icon'
import { LightbulbIcon } from '@/app/(components)/lightbulb-icon/lightbulb-icon'
import { Toggle } from '@katebrune/ui/toggle'
import { cn } from '@katebrune/ui/utils'

export interface RootLayoutProperties {
  children?: ReactNode
}

export const RootLayout: FunctionComponent<RootLayoutProperties> = (
  properties,
) => {
  const [useDarkMode, setUseDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputReference = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function handleToggleDarkMode() {
    setUseDarkMode((previous) => !previous)
  }

  function handleSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const query = searchQuery.trim()
    const queryString =
      query.length > 0 ? `?q=${encodeURIComponent(query)}` : ''
    router.push(`/${queryString}`)
  }

  useEffect(() => {
    const query = searchParams.get('q') ?? ''
    setSearchQuery(query)
  }, [searchParams])

  useEffect(() => {
    const currentQuery = searchParams.get('q') ?? ''
    if (searchQuery === currentQuery) return

    const query = searchQuery.trim()
    const queryString =
      query.length > 0 ? `?q=${encodeURIComponent(query)}` : ''
    const destination = `/${queryString}`

    if (pathname === '/') {
      router.replace(destination, { scroll: false })
      return
    }

    router.push(destination)
  }, [pathname, router, searchParams, searchQuery])

  useEffect(() => {
    function handleSlashShortcut(event: KeyboardEvent) {
      if (event.key !== '/') return

      const target = event.target as HTMLElement | null
      if (
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable
      ) {
        return
      }

      event.preventDefault()
      searchInputReference.current?.focus()
      searchInputReference.current?.select()
    }

    window.addEventListener('keydown', handleSlashShortcut)
    return () => window.removeEventListener('keydown', handleSlashShortcut)
  }, [])

  const lightbulbVariants = cva('h-6 w-6', {
    variants: {
      variant: {
        dark: 'brightness-75 group-hover:brightness-100 group-active:brightness-100',
        light:
          'brightness-100 group-hover:brightness-75 group-active:brightness-50',
      },
    },
    defaultVariants: {
      variant: 'dark',
    },
  })

  return (
    <html lang="en" className={useDarkMode ? 'dark' : ''}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <div className="h-full w-auto px-4 pt-0 sm:px-5">
          <nav className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200/80 bg-slate-50/85 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80 lg:px-2">
            <Link href="/">
              <div
                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 dark:bg-zinc-900"
                aria-label="kb home"
              >
                <span className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-[conic-gradient(from_220deg,_#fb7185,_#f59e0b,_#84cc16,_#06b6d4,_#818cf8,_#f472b6,_#fb7185)] opacity-35 blur-md transition-opacity duration-200 group-hover:opacity-55 dark:opacity-50 dark:group-hover:opacity-75" />
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_220deg,_#fb7185,_#f59e0b,_#84cc16,_#06b6d4,_#818cf8,_#f472b6,_#fb7185)] p-[1.5px]">
                  <span className="block h-full w-full rounded-[10px] bg-white dark:bg-zinc-900" />
                </span>
                <span className="relative z-10 text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-zinc-100">
                  KB
                </span>
              </div>
            </Link>
            <div className="flex items-center justify-start gap-2 sm:gap-4">
              <form
                onSubmit={handleSubmitSearch}
                className={classNames('hidden md:block', {
                  'opacity-85': pathname !== '/',
                })}
              >
                <div className="relative">
                  <input
                    ref={searchInputReference}
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search posts"
                    aria-label="Search posts"
                    className="h-11 w-64 rounded-2xl border border-slate-300 bg-white/90 px-4 pr-12 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:focus:border-zinc-500 dark:focus:ring-zinc-700"
                  />
                  <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-slate-300 bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    /
                  </kbd>
                </div>
              </form>
              <Toggle
                variant="outline"
                className={classNames('group rounded-2xl px-3', {
                  '': !useDarkMode,
                })}
                onClick={handleToggleDarkMode}
              >
                <LightbulbIcon
                  className={cn(
                    lightbulbVariants({
                      variant: useDarkMode ? 'dark' : 'light',
                    }),
                  )}
                />
              </Toggle>
              <Link href="https://github.com/katebrune">
                <GithubIcon className="h-10 w-10" />
              </Link>
            </div>
          </nav>
          <main className="relative mx-auto w-full max-w-4xl pb-12">
            {properties.children}
          </main>
        </div>
      </body>
    </html>
  )
}
