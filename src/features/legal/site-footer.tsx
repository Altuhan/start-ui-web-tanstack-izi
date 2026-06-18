import { Link } from '@tanstack/react-router';

export const SiteFooter = () => {
  return (
    <footer className="border-t py-6 text-center text-sm text-muted-foreground">
      <nav
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        aria-label="Юридическая информация"
      >
        <Link to="/privacy" className="underline-offset-4 hover:underline">
          Политика конфиденциальности
        </Link>
        <span aria-hidden="true">·</span>
        <Link to="/terms" className="underline-offset-4 hover:underline">
          Условия использования
        </Link>
      </nav>
      <p className="mt-3">
        © {new Date().getFullYear()} iziMag. Все права защищены.
      </p>
    </footer>
  );
};
