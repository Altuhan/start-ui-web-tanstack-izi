# iziMag Web

Фронтенд B2B POS-системы **iziMag** на базе [TanStack Start — Basic Auth Example](https://github.com/TanStack/router/tree/main/examples/react/start-basic-auth).

- Публичный UI: вход, политика конфиденциальности, условия использования
- Бэкенд авторизации и данных: TrailBase на `https://api.izimag.kz` (интеграция — следующий шаг)
- Деплой: Vercel (`izimag.kz`)

## Основа проекта

```sh
npx gitpick TanStack/router/tree/main/examples/react/start-basic-auth
```

## Локальная разработка

```sh
pnpm install
pnpm dev
```

## Сборка

```sh
pnpm build
```

## Маршруты

| Путь | Описание |
|------|----------|
| `/` | редирект на `/login` |
| `/login` | вход (временно — пример email/password из TanStack) |
| `/privacy` | политика конфиденциальности |
| `/terms` | условия использования |

## Переменные окружения

См. `.env.example`. Для TrailBase Google OAuth позже: `VITE_TRAILBASE_URL=https://api.izimag.kz`.
