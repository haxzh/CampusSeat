# CampusSeat frontend

The CampusSeat frontend is a Next.js application. Its About page takes visual inspiration from the [OneX Academy About page](https://onexacademy.com/about-us), including a white and soft-gray base, navy typography, and blue accents.

## Run locally

From `samesterseatFrontend/`, install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Useful scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the frontend development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run dev:all` | Start the frontend and backend together |

## Website file locations

The frontend project root is `D:\Edupath\samesterseatFrontend`. Paths in this guide are relative to that folder.

| File or folder | Purpose |
| --- | --- |
| `app/` | App Router pages and API routes for the website |
| `app/page.tsx` | Main home route |
| `app/about-us/page.jsx` | About route (`/about-us`), page metadata, and canonical URL |
| `app/about-us/AboutUsClient.jsx` | About page sections, responsive layout, and interactions |
| `src/data/about.js` | About page copy, founders, advisors, values, and image references |
| `src/screens/images/founder.jpg` | Founder portrait imported by the About page data |
| `src/screens/images/manju-guptafounder.jpeg` | Dr. Manju Gupta portrait imported by the About page data |
| `app/globals.css` | Global styles, site color tokens, and About page color tokens |
| `app/layout.tsx` | Root layout, fonts, global CSS, and shared site chrome |
| `src/components/layout/PublicChrome.tsx` | Shared public navigation/footer layout and route visibility |
| `src/components/Navbar.tsx` | Main site navigation |
| `src/components/layout/SiteFooter.tsx` | Shared site footer |
| `src/components/homepage/HomepagePrimitives.jsx` | Shared headings, chips, buttons, and links used by the About page |
| `src/data/homepage.ts` | Homepage content data |
| `src/screens/HomePage.jsx` | Homepage screen implementation |
| `public/` | Publicly served static files |
| `package.json` | Frontend dependencies and npm scripts |

The About page's colors are defined in `app/globals.css` and consumed mainly by `app/about-us/AboutUsClient.jsx`. Shared components such as `src/components/homepage/HomepagePrimitives.jsx` also have some directly specified colors.

## About page palette

The About page palette is inspired by the OneX Academy reference: white surfaces, soft blue-gray section backgrounds, navy text, and blue accents. These `--about-*` tokens are in `app/globals.css`:

| CSS variable | Value | Use |
| --- | --- | --- |
| `--about-black` | `#1e2d72` | Navy headings, primary text, dark cards, and borders |
| `--about-white` | `#ffffff` | White surface |
| `--about-page` | `#ffffff` | About page background |
| `--about-section` | `#f4f6fb` | Soft blue-gray section background |
| `--about-border` | `#e2e7f0` | Card and section borders |
| `--about-muted` | `#71809a` | Muted labels and secondary details |
| `--about-copy` | `#4c5870` | Paragraph and body copy |
| `--about-accent-light` | `#2563eb` | Bright blue accent |
| `--about-accent-dark` | `#b8c9f3` | Pale blue accent on dark backgrounds |

### Other site-wide colors

These `--campusseat-*` and theme tokens are also declared in `app/globals.css`. They serve other pages and shared UI; the About palette above is separate.

| CSS variable | Value |
| --- | --- |
| `--campusseat-surface` | `#f4f3ee` |
| `--campusseat-paper` | `#ffffff` |
| `--campusseat-warm-paper` | `#fffaf2` |
| `--campusseat-reference-surface` | `#fbfaf5` |
| `--campusseat-reference-paper` | `#fffefa` |
| `--campusseat-ink` | `#171717` |
| `--campusseat-muted` | `#77776f` |
| `--campusseat-copy` | `#6b6d64` |
| `--campusseat-copy-soft` | `#8a897f` |
| `--campusseat-secondary` | `#343434` |
| `--campusseat-border` | `#deded8` |
| `--campusseat-reference-border` | `#e3e0d6` |
| `--campusseat-soft-border` | `#ecece7` |
| `--campusseat-hover` | `#f1f1ed` |
| `--campusseat-gold` | `#b18b52` |
| `--campusseat-tag-green` | `#1c6b5f` |
| `--background` / `--card` / `--popover` | `oklch(1 0 0)` |
| `--foreground` / `--card-foreground` / `--popover-foreground` | `oklch(0.145 0 0)` |
| `--primary` / `--sidebar-primary` | `oklch(0.205 0 0)` |
| `--primary-foreground` / `--sidebar-primary-foreground` | `oklch(0.985 0 0)` |
| `--secondary` / `--accent` / `--sidebar-accent` | `oklch(0.97 0 0)` |
| `--secondary-foreground` / `--accent-foreground` | `oklch(0.205 0 0)` |
| `--muted` | `oklch(0.97 0 0)` |
| `--muted-foreground` / `--sidebar-foreground` | `oklch(0.556 0 0)` |
| `--destructive` | `oklch(0.577 0.245 27.325)` |
| `--border` / `--input` / `--sidebar-border` | `oklch(0.922 0 0)` |
| `--ring` / `--sidebar-ring` | `oklch(0.708 0 0)` |
| `--chart-1` | `oklch(0.87 0 0)` |
| `--chart-2` | `oklch(0.556 0 0)` |
| `--chart-3` | `oklch(0.439 0 0)` |
| `--chart-4` | `oklch(0.371 0 0)` |
| `--chart-5` | `oklch(0.269 0 0)` |
| `--sidebar` | `oklch(0.985 0 0)` |

Some shared UI colors are hard-coded in `src/components/homepage/HomepagePrimitives.jsx` (including gold `#d6b46c` focus/CTA accents and monochrome button colors) and in `src/components/layout/SiteFooter.tsx`. Change those shared components only if you intend the same color changes on other routes too.
