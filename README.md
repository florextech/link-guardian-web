# LinkGuardian Web

Landing page para la app iOS **LinkGuardian** (Enlaces). Sitio estático bilingüe (ES/EN) con política de privacidad y términos de uso.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- FLX Design System (dark theme + brand green)

## Páginas

| Ruta | Contenido |
|------|-----------|
| `/` | Landing principal (ES) |
| `/en` | Landing principal (EN) |
| `/privacy` | Política de privacidad (ES) |
| `/en/privacy` | Privacy Policy (EN) |
| `/terms` | Términos de uso (ES) |
| `/en/terms` | Terms of Use (EN) |

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

El sitio genera archivos estáticos en `dist/`. Compatible con cualquier hosting estático (GitHub Pages, Vercel, Netlify, Cloudflare Pages).
