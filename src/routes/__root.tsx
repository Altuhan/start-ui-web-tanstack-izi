/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { createServerFn } from '@tanstack/react-start'
import * as React from 'react'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary.js'
import { NotFound } from '~/components/NotFound.js'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo.js'
import { useAppSession } from '~/utils/session.js'

const fetchUser = createServerFn({ method: 'GET' }).handler(async () => {
  // We need to auth on the server so we have access to secure cookies
  const session = await useAppSession()

  if (!session.data.userEmail) {
    return null
  }

  return {
    email: session.data.userEmail,
  }
})

export const Route = createRootRoute({
  beforeLoad: async () => {
    const user = await fetchUser()

    return {
      user,
    }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'iziMag — B2B POS',
        description:
          'B2B POS-система iziMag для организаций. Вход, касса и администрирование.',
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { user } = Route.useRouteContext()

  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="flex gap-4 p-2 text-lg">
          <Link
            to="/login"
            className="font-bold text-cyan-700 dark:text-cyan-400"
          >
            iziMag
          </Link>
          <Link
            to="/privacy"
            activeProps={{ className: 'font-bold' }}
          >
            Политика
          </Link>
          <Link to="/terms" activeProps={{ className: 'font-bold' }}>
            Условия
          </Link>
          <div className="ml-auto">
            {user ? (
              <>
                <span className="mr-2 text-sm">{user.email}</span>
                <Link to="/logout">Выйти</Link>
              </>
            ) : (
              <Link to="/login">Вход</Link>
            )}
          </div>
        </div>
        <hr />
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
