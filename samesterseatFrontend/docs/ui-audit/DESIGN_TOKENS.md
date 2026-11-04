# CampusSeat Online Universities Design Tokens

## Reference

- Primary reference: `app/online-universities/page.tsx`
- Secondary editorial reference: selected sections of `src/screens/HomePage.jsx`
- Protected reference code: Home hero, Destinations, CountryCard, GlobalUniversitySearch, and Faq

## Core palette

| Token | Value | Usage |
|---|---|---|
| `--campusseat-surface` / `color-cs-surface` | `#f4f3ee` | Existing CampusSeat warm canvas |
| `--campusseat-reference-surface` / `color-cs-reference-surface` | `#fbfaf5` | Online Universities section backgrounds |
| `--campusseat-paper` / `color-cs-paper` | `#ffffff` | Primary cards and controls |
| `--campusseat-reference-paper` / `color-cs-reference-paper` | `#fffefa` | Warm reference surfaces |
| `--campusseat-warm-paper` / `color-cs-warm-paper` | `#fffaf2` | Existing warm shell surface |
| `--campusseat-ink` / `color-cs-ink` | `#171717` | Headings, primary buttons, dark bands |
| `--campusseat-copy` / `color-cs-copy` | `#6b6d64` | Main body copy |
| `--campusseat-muted` / `color-cs-muted` | `#77776f` | Supporting copy, labels, focus accent |
| `--campusseat-copy-soft` / `color-cs-copy-soft` | `#8a897f` | Disclaimers and tertiary copy |
| `--campusseat-secondary` / `color-cs-secondary` | `#343434` | Secondary navigation and text |
| `--campusseat-border` / `color-cs-border` | `#deded8` | Existing neutral borders |
| `--campusseat-reference-border` / `color-cs-reference-border` | `#e3e0d6` | Reference cards and inputs |
| `--campusseat-hover` / `color-cs-hover` | `#f1f1ed` | Neutral hover surface |
| `--campusseat-gold` / `color-cs-gold` | `#b18b52` | Editorial/gold accents |
| `--campusseat-tag-green` / `color-cs-tag-green` | `#1c6b5f` | Tag and status treatment only |

## Typography

- Sans: Geist / Inter, with `font-sans` and `font-sans` root variables.
- Serif: Georgia/serif for editorial italic accents.
- Display headings: `text-[36px]`, semibold, `leading-[1.05]`, tracking `-0.06em`; large breakpoint `text-5xl`.
- Display statements can scale to `text-5xl`/`text-7xl` in dark editorial bands.
- Section headings: `text-[36px]`, `sm:text-5xl`, semibold.
- Body: `text-[14px]`, `leading-7`; supporting copy `text-[12px]`, `leading-6`.
- Eyebrows/labels: uppercase, `text-[11px]`, bold, tracking `0.14em`.

## Layout and shape

| Token/value | Usage |
|---|---|
| `--campusseat-content` | `1500px` primary content max width |
| Container | `max-w-[1500px] px-5 sm:px-8 lg:px-14` |
| Section rhythm | `py-20 sm:py-28` |
| Card radius | `28px` (`rounded-[28px]`) |
| Image radius | `36px` (`rounded-[36px]`) |
| Control radius | Pill (`rounded-full`) or `16px` inputs |
| Card shadow | `0 10px 30px rgba(32,59,55,0.05)` |
| Hover shadow | `0 18px 50px rgba(32,59,55,0.10)` |

## Component patterns

- Primary button: `h-12 rounded-full bg-[#171717] px-7 text-[14px] font-semibold text-white`, hover `#77776f`.
- Primary arrow button: pill plus circular icon surface.
- Outline button: transparent/white surface, border `#e3e0d6`, ink copy.
- Search input: pill, border `#e3e0d6`, white/warm paper surface, large icon and clear focus.
- Segmented control: warm light track, active white pill with shadow.
- Filter chip: `h-10 rounded-full px-4`, neutral border, active ink surface.
- Cards: white/warm paper, `#e3e0d6` border, `28px` radius, restrained shadow.
- Photo cards: rounded `36px` image covers with a soft black bottom overlay.
- Empty state: warm-paper surface, dashed neutral border, centered copy and CTA.
- Dark CTA band: `#171717`, white heading, secondary copy at `white/70`.
- FAQ: native `details`, summary marker removed, border and generous disclosure spacing.
- Step cards: large number or circular icon, editorial heading, 28px radius.

## Motion and accessibility

- Use `framer-motion` with `useReducedMotion`.
- Ease `[0.22, 1, 0.36, 1]`, reveal duration `400ms-700ms`, stagger steps `80ms`, card image zoom `1.06` over `900ms`.
- Focus-visible rings use the olive-neutral muted tone.
- Avoid layout/reveal motion for users with reduced-motion preference.
- Result counts use `aria-live="polite"`; toggles use `aria-pressed`; inputs require labels.
