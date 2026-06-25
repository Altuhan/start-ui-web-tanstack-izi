import { createFileRoute } from '@tanstack/react-router'

import { Login } from '~/components/Login'
import { SiteFooter } from '~/components/SiteFooter'

export const Route = createFileRoute('/login')({
  component: LoginComp,
})

function LoginComp() {
  return (
    <div className="flex min-h-screen flex-col">
      <Login />
      <div className="px-8 pb-8">
        <SiteFooter />
      </div>
    </div>
  )
}
