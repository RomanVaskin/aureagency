# AURE — студия архитектуры и интерьера

Сайт на Next.js. Запуск: `pnpm install && pnpm dev` → http://localhost:3000

## Где что лежит

- `lib/projects.ts` — все проекты портфолио: тексты, факты, материалы, кадры и промпты к ним.
- `lib/contacts.ts` — телефон, Telegram, WhatsApp, почта.
- `app/` — страницы: главная, `/projects`, `/projects/[slug]`, `/studio`, `/contact`.
- `docs/image-prompts.md` — промпты для генерации всех фотографий и пути, куда класть файлы.

## Фотографии

Пока файла нет, на его месте показывается заглушка в тон сайта. Положите JPG по пути из
`docs/image-prompts.md` (например `public/images/projects/dom-u-sosen/01.jpg`) — после сборки
фото появится само.

После правок в `lib/projects.ts` обновите список промптов:

```bash
node --experimental-strip-types scripts/image-prompts.ts > docs/image-prompts.md
```

## Деплой

Каждый pull request в `main` собирается и выкладывается на preview.aureagency.ru
(`.github/workflows/preview.yml`).
