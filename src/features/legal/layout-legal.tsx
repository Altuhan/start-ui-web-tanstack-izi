import { Link } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { Logo } from '@/components/brand/logo';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';

import { SiteFooter } from '@/features/legal/site-footer';

export const LayoutLegal = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex min-h-dvh flex-col bg-background pt-safe-top pb-safe-bottom">
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/login" className="flex items-center gap-2 font-medium">
            <Logo className="w-24" />
          </Link>
          <ThemeSwitcher iconOnly />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-6 py-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {description ? (
            <p className="text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
      </main>

      <div className="mx-auto w-full max-w-3xl px-6">
        <SiteFooter />
      </div>
    </div>
  );
};
