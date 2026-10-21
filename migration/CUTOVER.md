# Миграция на Astro + Cloudflare Pages: порядок работ

Ветка: `astro-migration`. Ветка `main` и живой сайт (GitHub Pages) не затронуты, пока вы сами не сделаете шаг 5.

## 0. Что уже сделано в ветке
- Astro 7 (статическая генерация), React-компоненты как «острова», Tailwind 4.
- SEO: `lang="tr"`, `title/description/canonical/OG` на каждой странице, JSON-LD (BeautySalon, Person, BlogPosting), `sitemap-index.xml`, `robots.txt`, настоящая 404.
- Блог: `src/content/blog/*.md` + шаблон `src/layouts/BlogPost.astro`, список `/blog`, RSS `/rss.xml`.
- CI/CD: `.github/workflows/cloudflare-pages.yml` (сборка на каждый пуш, деплой в Cloudflare, если заданы секреты).
- Прежние URL сохранены: `/`, `/services`, `/masters`, `/masters/:id`, `/rules`, `/privacy`; `/promotions` → `/` (301, `public/_redirects`).
- Все ветки, кроме `main`, собираются с `noindex` и без Google Analytics (`PUBLIC_NOINDEX=true`).

## 1. Cloudflare (делаете вы, один раз)
1. Зарегистрироваться на cloudflare.com (бесплатный план).
2. Workers & Pages → Create → Pages → **Direct Upload** → имя проекта `rahimoff-nail-studio` (если назовёте иначе, задайте переменную репозитория `CLOUDFLARE_PROJECT_NAME`). Production branch: `main`.
3. Создать API-токен: My Profile → API Tokens → Create Token → шаблон «Edit Cloudflare Workers» либо кастомный с правом **Account → Cloudflare Pages → Edit**.
4. В GitHub: Settings → Secrets and variables → Actions → добавить секреты `CLOUDFLARE_API_TOKEN` и `CLOUDFLARE_ACCOUNT_ID` (Account ID виден справа на странице Workers & Pages).
5. После этого каждый пуш в `astro-migration` публикует preview: `https://astro-migration.rahimoff-nail-studio.pages.dev`.

## 2. Проверка на тестовом адресе
- Все страницы открываются, анимации, галереи, слайдеры, мобильная версия.
- Ссылки WhatsApp / Instagram / карты, ссылка «Fiyat bilgisi alın» в карточках услуг.
- Старые URL работают; `/promotions` ведёт на главную.
- Lighthouse (мобильный): Performance / SEO / Best Practices.
- `view-source` на странице услуг — текст карточек есть в HTML (не пустой `<div id="root">`).
- Preview закрыт от индексации (в коде страниц `noindex`, `/robots.txt` = `Disallow: /`).

## 3. Подготовка домена (за 2–3 дня до переключения)
1. В Cloudflare: Add a site → `rahimoff.com.tr` (бесплатный план). Cloudflare сам просканирует существующие DNS-записи.
2. **Сверить записи с панелью METUnic** (особенно `MX`, `TXT`/SPF/DKIM для почты, если она есть на домене). Недостающие добавить вручную.
3. Записать выданные Cloudflare nameserver'ы (вида `xxx.ns.cloudflare.com`).
4. В панели METUnic снизить TTL текущих A/CNAME записей до минимума (300 сек), если панель это позволяет.

## 4. Переключение (cutover)
1. В METUnic заменить nameserver'ы домена на nameserver'ы Cloudflare (для `.com.tr` обновление может занять от нескольких часов до суток). Если в METUnic включён DNSSEC — сначала выключить/удалить DS-запись.
2. В Cloudflare Pages проекта: Custom domains → добавить `rahimoff.com.tr` и `www.rahimoff.com.tr`. В Cloudflare DNS убрать старые A-записи GitHub Pages (185.199.108-111.153) и CNAME на `*.github.io`.
3. Слить `astro-migration` в `main` (`main` → после этого прод-деплой в Cloudflare; старый `static.yml` удалён в этой ветке и GitHub Pages больше не обновляется).
4. Search Console: добавить домен, отправить `https://rahimoff.com.tr/sitemap-index.xml`; Google Business Profile — проверить ссылку на сайт.

## 5. Откат
- До слияния в `main`: просто не сливать; живой сайт не менялся.
- После переключения: вернуть nameserver'ы METUnic / DNS-записи на GitHub Pages; ветка `legacy` (копия старого `main`) и старый GitHub Pages сохраняются минимум 2–4 недели.
- Перед слиянием создать ветку `legacy` от нынешнего `main`: `git branch legacy main && git push origin legacy`.

## 6. Что осталось на потом
- Фирменная картинка Open Graph (сейчас `public/og-default.jpg` — кадр из `main.jpg`), favicon (сейчас `logo-new.png`) — **TODO**.
- Оптимизация изображений в `public/` (30 МБ): перенос в `src/assets` + `astro:assets`, сжатие шрифтов (6 семейств Google Fonts).
- Адрес/часы/телефон в JSON-LD (`BaseLayout.astro`) взяты из футера — проверить.
- Тексты услуг/мастеров — черновики в `migration/seo-drafts.md`.

## Блог: как добавить статью
1. Создать файл `src/content/blog/nazvanie-stati.md`:
   ```md
   ---
   title: "Заголовок (до 70 знаков)"
   description: "Описание для Google (до 170 знаков)"
   pubDate: 2026-11-01
   tags: ["Manikür"]
   cover: ../../assets/blog/cover.jpg   # необязательно
   coverAlt: "Описание картинки"
   draft: false                            # true = не публикуется
   ---
   Текст статьи в Markdown...
   ```
2. `git push` → CI соберёт и опубликует.
3. Правила содержания (чтобы не получить претензий): без цен и слов kampanya/indirim/hediye, без «en iyi» и т. п., без медицинских терминов и обещаний лечения.

## Каноничный адрес
Основной адрес сайта: `https://www.rahimoff.com.tr` (так он уже индексировался при GitHub Pages).
`rahimoff.com.tr` (без www) должен делать 301-редирект на `www` — Cloudflare → Rules → Redirect Rules (или Bulk Redirects).
