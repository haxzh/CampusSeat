# Route Sync Status

Phase 0 inventory is based on the current workspace. Status reflects source styling rather than compatibility CSS.

| Route | Page source | Layout | Shell/Navbar/footer | Legacy signals | Status |
|---|---|---|---|---|---|
| `/` | `app/page.tsx`, `src/screens/HomePage.jsx` | `app/layout.tsx` | Home imports Navbar; internal reference footer | Protected Home reference colors | IN SYNC |
| `/login` | `app/login/page.tsx` | `app/layout.tsx` | Public shell migrated in prior work | Legacy neutrals and form utilities | PARTIAL |
| `/signup` | `app/signup/page.tsx` | `app/layout.tsx` | Public shell migrated in prior work | Legacy neutrals and form utilities | PARTIAL |
| `/online-universities` | `app/online-universities/page.tsx` | `app/layout.tsx` | Navbar; reference page | Reference classes; commented legacy source | IN SYNC |
| `/admin` | `app/admin/page.tsx` | `app/admin/layout.tsx` | Admin shell | Slate, borders, bespoke buttons | PARTIAL |
| `/admin/login` | `app/admin/login/page.tsx` | `app/admin/login/layout.tsx` | Admin login shell | Gray/slate form styling | PARTIAL |
| `/admissions` | `app/admissions/page.tsx` | `app/layout.tsx` | Navbar varies | Green/blue, gradients, hardcoded hex | OUT OF SYNC |
| `/career-guidance` | `app/career-guidance/page.tsx` | `app/layout.tsx` | No confirmed footer | Legacy palette and gradients | OUT OF SYNC |
| `/compare` | `app/compare/page.tsx` | `app/layout.tsx` | Navbar varies | Slate/emerald/blue | OUT OF SYNC |
| `/contact` | `app/contact/page.tsx` | `app/layout.tsx` | Navbar varies | Green/blue/gradient utilities | OUT OF SYNC |
| `/counselling` | `app/counselling/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy forms/cards | OUT OF SYNC |
| `/reviews` | `app/reviews/page.tsx` | `app/layout.tsx` | Navbar varies | Blue/green cards and gradients | OUT OF SYNC |
| `/scholarships` | `app/scholarships/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy palette/cards | OUT OF SYNC |
| `/colleges` | `app/colleges/page.tsx` | `app/layout.tsx` | Navbar; partial footer | Slate/blue, gradients, white surfaces | PARTIAL |
| `/colleges/[slug]` | `app/colleges/[slug]/page.tsx` | `app/layout.tsx` | Dynamic shell | Blue/slate detail classes | OUT OF SYNC |
| `/colleges/engineering` | `app/colleges/engineering/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy category template | OUT OF SYNC |
| `/colleges/location` | `app/colleges/location/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy category template | OUT OF SYNC |
| `/colleges/management` | `app/colleges/management/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy category template | OUT OF SYNC |
| `/colleges/medical` | `app/colleges/medical/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy category template | OUT OF SYNC |
| `/countries` | `app/countries/page.tsx` | `app/layout.tsx` | Navbar; incomplete index shell | Blue/slate/green cards | OUT OF SYNC |
| `/countries/[country]` | `app/countries/[country]/page.tsx` | `app/layout.tsx` | Dynamic template | Legacy dynamic template | OUT OF SYNC |
| `/countries/australia` | `app/countries/australia/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/canada` | `app/countries/canada/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/france` | `app/countries/france/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/germany` | `app/countries/germany/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/india` | `app/countries/india/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/japan` | `app/countries/japan/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/malta` | `app/countries/malta/page.jsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/singapore` | `app/countries/singapore/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/switzerland` | `app/countries/switzerland/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/uae` | `app/countries/uae/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/united-kingdom` | `app/countries/united-kingdom/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/countries/united-states` | `app/countries/united-states/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy country template | OUT OF SYNC |
| `/program` | `app/program/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy programme cards | OUT OF SYNC |
| `/program/btech` | `app/program/btech/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy programme template | OUT OF SYNC |
| `/program/computer-applications` | `app/program/computer-applications/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy programme template | OUT OF SYNC |
| `/program/management` | `app/program/management/page.tsx` | `app/layout.tsx` | Navbar varies | Legacy programme template | OUT OF SYNC |
| `/program/Skill-Based` | `app/program/Skill-Based/page.tsx` | `app/layout.tsx` | Navbar varies | Slate/blue/emerald and hardcoded data | OUT OF SYNC |

Layouts are `app/layout.tsx`, `app/admin/layout.tsx`, and `app/admin/login/layout.tsx`.

## Shared implementation inventory

- Navbar: `src/components/Navbar.tsx`.
- Footer implementations: `src/components/layout/SiteFooter.tsx` plus the protected HomePage reference.
- Route states: `app/loading.tsx`, `app/error.tsx`, and `app/not-found.tsx`.

## Counts

- 38 route page files discovered, including the dynamic country template.
- 2 reference implementations in sync: Home and Online Universities.
- 2 auth routes partial from prior migration.
- 34 remaining routes partial/out of sync.
