import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
      <nav
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        aria-label="Юридическая информация"
      >
        <Link to="/privacy" className="hover:underline">
          Политика конфиденциальности
        </Link>
        <span aria-hidden="true">·</span>
        <Link to="/terms" className="hover:underline">
          Условия использования
        </Link>
      </nav>
      <p className="mt-3">© {new Date().getFullYear()} iziMag. Все права защищены.</p>
    </footer>
  )
}
