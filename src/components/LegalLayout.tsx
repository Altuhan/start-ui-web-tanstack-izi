import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

import { SiteFooter } from '~/components/SiteFooter'

export function LegalLayout({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-white px-6 py-10 dark:bg-black">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-3xl flex-col">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/login"
            className="text-xl font-bold tracking-tight text-cyan-700 dark:text-cyan-400"
          >
            iziMag
          </Link>
        </header>

        <main className="flex-1">
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            {description ? (
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            ) : null}
          </div>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm leading-relaxed text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
            {children}
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="space-y-2 border-b border-gray-200 py-6 last:border-0 dark:border-gray-800">
      <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {children}
    </section>
  )
}
