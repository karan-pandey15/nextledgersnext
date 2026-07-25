# UK UI Pattern Guide (Approved Reference)

> **Purpose:** This is the approved UK home + services UI system. When building another country (USA, Canada, etc.) home page and service pages, **match this pattern same-to-same** — colors, typography, spacing, icon sizes, radii, shadows, section order, CTA styles, hover states, and shared components.
>
> **How to use:** Tell the agent: *“Refer to `docs/UK-UI-PATTERN-GUIDE.md` and build [country] home + services on the same pattern.”*

---

## Table of contents

1. [Routes & file map](#1-routes--file-map)
2. [Design tokens (colors)](#2-design-tokens-colors)
3. [Typography](#3-typography)
4. [Spacing, containers & breakpoints](#4-spacing-containers--breakpoints)
5. [Icons & icon containers](#5-icons--icon-containers)
6. [CTA buttons (`CtaButton`)](#6-cta-buttons-ctabutton)
7. [UK Navbar](#7-uk-navbar)
8. [UK Home page (`/uk`) — full UI](#8-uk-home-page-uk--full-ui)
9. [Service page master template](#9-service-page-master-template)
10. [Shared section components](#10-shared-section-components)
11. [Reusable local atoms (copy into pages)](#11-reusable-local-atoms-copy-into-pages)
12. [All 8 UK service pages — section maps](#12-all-8-uk-service-pages--section-maps)
13. [Footer, AI widgets & page chrome](#13-footer-ai-widgets--page-chrome)
14. [Country clone checklist](#14-country-clone-checklist)
15. [Do / Don’t (strict)](#15-do--dont-strict)

---

## 1. Routes & file map

### URLs

| Page | URL |
|------|-----|
| UK Home | `/uk` |
| Bookkeeping | `/uk/UkBookkeeping` |
| Management Accounts | `/uk/UkManagementAccounts` |
| VAT & MTD | `/uk/VatServiceuk` |
| Year-End Accounts | `/uk/YearEndAccount` |
| Payroll & CIS | `/uk/UKPayroll` |
| Personal Tax | `/uk/PersonalTax` |
| Business Advisory | `/uk/UKBusinessAdvisory` |
| Company Formation | `/uk/UKCompanyFormation` |

Home services anchor: `/uk#services`

### Source files

| Role | Path |
|------|------|
| Home | `src/app/uk/page.js` |
| Service links config | `src/app/uk/ukServiceLinks.js` |
| Navbar | `src/app/components/UKNavbar/UKNavbar.jsx` |
| Brand orange | `src/app/lib/brandColors.js` → `BRAND_ORANGE = "#FF6A00"` |
| Global CTA CSS | `src/app/globals.css` (`.cta-fill-orange`, `.cta-fill-orange-dark`) |
| CTA component | `src/app/components/ui/CtaButton.jsx` |
| Shared sections | `src/app/components/ServiceMainPageContent/*` |

### Service link config shape (`ukServiceLinks.js`)

Every country must have an equivalent array (order = nav + home grid order):

```js
{
  label: "Bookkeeping Service",
  href: "/uk/UkBookkeeping",   // must match folder route
  icon: "📒",                  // emoji in home cards + navbar
  blurb: "Transaction processing, reconciliations & VAT-ready books",
}
```

UK icons (locked order):

| # | Label | Icon | Href |
|---|-------|------|------|
| 1 | Bookkeeping Service | 📒 | `/uk/UkBookkeeping` |
| 2 | Management Accounts & Financial Reporting | 📊 | `/uk/UkManagementAccounts` |
| 3 | VAT Service & Making Tax Digital (MTD) | 🧾 | `/uk/VatServiceuk` |
| 4 | Year-End Accounts & Corporation Tax | 📑 | `/uk/YearEndAccount` |
| 5 | Payroll & CIS Services | 💰 | `/uk/UKPayroll` |
| 6 | Personal Tax Services | 📋 | `/uk/PersonalTax` |
| 7 | Business Advisory & Virtual CFO Services | 📈 | `/uk/UKBusinessAdvisory` |
| 8 | Company Formation & Company Secretarial Services | 🏢 | `/uk/UKCompanyFormation` |

---

## 2. Design tokens (colors)

### Core palette (use these exact hex values)

| Token | Hex | Usage |
|-------|-----|--------|
| **Brand orange** | `#FF6A00` | Accent text, primary CTA, rules, hover, icon fills |
| **Orange hover** | `#E85E00` | Primary CTA hover |
| **Navy** | `#0B1F3A` | H1/H2 headings, card titles |
| **Navy alt (industries label)** | `#0F274A` | Industry card labels only |
| **Body grey** | `#6B7280` | Subtitles, body, blurbs |
| **Page cream** | `#FFF9F5` | Section backgrounds, partner CTA panel |
| **Pill / soft orange bg** | `#FFF4EA` | Soft badges, icon boxes, CheckPills |
| **Soft cream alt** | `#FFF7F0` | Trust badge icon bg, notes |
| **Page canvas (home / some services)** | `#faf9f6` | Outer `main` bg on home, Payroll, Personal Tax |
| **Main text (home)** | `#1E1B2A` | Body text on home chrome |
| **Border warm** | `#F0E6DC` | Service cards border (home) |
| **Border warm 2** | `#F0E0D2` | Callout / help card borders |
| **Border warm 3** | `#F3E6D8` | ServiceCard borders |
| **Border warm 4** | `#F3E4D4` | BookkeepingMatters trust boxes |
| **Border soft grey** | `#EBEBEB` | MatterCards |
| **Divider** | `#E8E8E8` | WhyChoose list / payroll rows |
| **Trust footer text** | `#8B7355` | Partner CTA bottom trust labels |
| **Muted label** | `#555555` | Divider label text in “Why matters” |
| **Slate body (hero)** | `slate-600` / `slate-700` | Hero subtitles |
| **White** | `#FFFFFF` | Cards, navbar, badges |

### Gradients & patterns (exact)

**Hero background gradient:**
```css
linear-gradient(165deg, #FFFFFF 0%, #FFF9F5 42%, #FFF4EA 100%)
```

**Hero orange dot field:**
```css
radial-gradient(rgba(255, 106, 0, 0.18) 1px, transparent 1px);
background-size: 18px 18px;
opacity: 0.55;
```

**Home services cream section dot field:**
```css
radial-gradient(rgba(180, 150, 120, 0.35) 1.1px, transparent 1.1px);
background-size: 22px 22px;
background-color: #FFF9F5;
```

**Hero blur blobs (always present):**
- Left: `absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/15 blur-3xl`
- Right: `absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#0B1F3A]/06 blur-3xl`
- Center: `absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-2xl`

### Orange accent rules (underlines)

| Context | Classes |
|---------|---------|
| Hero under H1 | `my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]` |
| Intro under H2 | `mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]` |
| Section / WhyChoose | `mx-auto mt-3 h-[3px] w-11 rounded-full` orange |
| Home services header | `mx-auto mt-4 h-[3px] w-11 rounded-full` orange |
| MatterCard title underline | `h-[2px] w-[22px] rounded-full` orange |

---

## 3. Typography

### Font family

- Global body: `Geist Sans` + `'Work Sans', sans-serif` (`globals.css`)
- Pages use `font-sans` where set
- Weight pattern: **extrabold** for H1/H2, **bold** for titles/labels, **semibold** for CTAs/meta, **medium** for check items

### Scale (approved sizes)

| Element | Mobile | sm | lg / desktop |
|---------|--------|----|--------------|
| Hero H1 | `text-2xl` or `text-[22px]` | `sm:text-3xl` | `lg:text-[34px]` |
| Home services H2 | `text-[22px]` | `sm:text-[28px]` | `lg:text-[32px]` |
| Intro H2 | `text-[26px]`–`text-[28px]` | `sm:text-[30px]` | often stays `30px` |
| Section H2 (mid) | `text-[22px]` | `sm:text-[26px]` | `lg:text-[28px]`–`[32px]` |
| Partner CTA H2 | `text-[24px]` | `sm:text-[30px]` | `lg:text-[34px]` |
| Software title | `text-[24px]` | `sm:text-[28px]` | `lg:text-[30px]` |
| Card H3 | `text-[13px]`–`text-[15px]` | `sm:text-[14px]`–`[16px]` | — |
| Hero subtitle | `text-[12.5px]` | `sm:text-[13px]` | `md:text-sm` |
| Body paragraphs | `text-[13px]` | `sm:text-[15px]` | — |
| Soft badge / pill label | `text-[10px] font-bold uppercase tracking-[0.12em]`–`[0.14em]` | — | — |
| Eyebrow (intro) | `text-[11px] font-extrabold uppercase tracking-widest` | — | — |
| Industries eyebrow | `text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.22em]` | — | — |
| Check / list item | `text-[11.5px]`–`text-[12.5px]` | — | — |
| Trust badge label | `text-[11px] sm:text-[12px] font-semibold` | — | — |
| Trust badge sub | `text-[10px] sm:text-[10.5px]` | — | — |

### Heading color rules

- Base heading color: **navy `#0B1F3A`**
- Accent phrase inside heading: **orange `#FF6A00`** (only the key service words — never the whole H1 unless intentional)
- Body / subtitle: **`#6B7280`** or `text-slate-600` / `text-slate-700`
- Never use purple, indigo, or generic Inter-only stacks for these pages

---

## 4. Spacing, containers & breakpoints

### Max widths

| Context | Max width |
|---------|-----------|
| Hero content | `max-w-5xl` |
| Intro / most sections | `max-w-6xl` |
| Partner CTA panel | `max-w-5xl` |
| Industries outer | `max-w-[1440px]` |
| Industries heading | `max-w-[720px]` |
| Navbar inner | `max-w-7xl` |
| Home services grid | `max-w-6xl` |

### Horizontal padding (standard)

`px-4 sm:px-6 lg:px-8` (industries sometimes `lg:px-10`)

### Vertical padding patterns

| Section type | Padding |
|--------------|---------|
| Hero | `pt-10 pb-8 sm:pt-12 sm:pb-10` (+ `ServiceHomePage`: `py-8 sm:py-10 lg:py-12`) |
| Mid sections (UK services) | Often tightened `py-3` when composing many blocks |
| WhyChoose | `py-6 sm:py-7 lg:py-8` |
| Home services | `py-10 sm:py-12 lg:py-14` |
| Shared Bookkeeping\* components default | `py-10 sm:py-12 lg:py-14` (UK pages often override `!py-3`) |

### Grids

| UI | Grid |
|----|------|
| Home service cards | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-2` |
| Trust badges | `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6` |
| Intro | `grid-cols-1 lg:grid-cols-2` gap `10` / `lg:gap-12` |
| MatterCards | `1 → 2 → 3` (sometimes `lg:grid-cols-4`) |
| Dual ServiceCards | `md:grid-cols-2` |
| Industries | `2 → 3 → 5` cols; **always 10 items** |
| Stats overlay | `grid-cols-4` |

### Radii (locked)

| Element | Radius |
|---------|--------|
| Soft / solid badges | `rounded-full` |
| Home service card | `rounded-[16px] sm:rounded-[18px]` |
| Partner CTA panel | `rounded-[22px] sm:rounded-[28px]` (or `rounded-[24px]` in `ServicePartnerCTA`) |
| WhyChoose image | `rounded-[20px] sm:rounded-[24px]` |
| Intro photo | `rounded-2xl` |
| Icon box (cream) | `rounded-xl` |
| Icon circle (solid orange / trust) | `rounded-full` |
| ServiceCard | `rounded-[16px]` |
| MatterCard | `rounded-[12px]` |
| Industry card | `rounded-[12px] sm:rounded-[14px]` |
| CTA buttons | `rounded-[10px]` |
| CheckPill (UK pages) | `rounded-xl` |
| Nav links | `rounded-full` |
| Nav dropdown | `rounded-[20px]` |

### Shadows (locked)

| Element | Shadow |
|---------|--------|
| Home service card | `0_4px_18px_rgba(15,23,42,0.04)` → hover `0_10px_28px_rgba(15,23,42,0.08)` |
| Trust badges bar | `0_8px_30px_rgba(15,23,42,0.06)` |
| ServiceCard | `0 8px 28px rgba(15,23,42,0.06)` |
| Stats overlay | `shadow-lg` |
| Partner callout | `0_6px_24px_rgba(15,23,42,0.06)` |
| WhyChoose image | `0_12px_40px_rgba(15,39,74,0.08)` |
| Industry card | `0_4px_18px_rgba(15,39,74,0.05)` → hover `0_8px_28px…0.08` |
| Solid orange list icon | `0_6px_16px_rgba(255,106,0,0.25)` |
| Primary CTA | `shadow-md shadow-orange-500/25` → hover stronger |

---

## 5. Icons & icon containers

### Libraries

- **Lucide React** for UI icons (Calendar, Phone, ShieldCheck, Handshake, etc.)
- **Emoji** for service identity in home grid + navbar only
- **Brand logo images** via `IcondisplayScreen` + `/images/logooUK/...`

### Icon size matrix

| Context | Container | Icon size | Stroke | Style |
|---------|-----------|-----------|--------|-------|
| Soft badge (Handshake etc.) | inline | `h-3`–`h-3.5` | `2.25`–`2.5` | orange on cream pill |
| Trust badge bar | `h-8 w-8` circle, border `#FF6A00/40`, bg `#FFF7F0` | `h-3.5 w-3.5` | `2` | orange |
| Hero CTA icons | none | Calendar/Phone `h-3.5 w-3.5`; Play `h-3 w-3` | — | — |
| Intro Stat circle | `h-9 w-9 sm:h-10 sm:w-10` `#FF6A00/10` | ~`h-5 w-5` | — | orange |
| Cream icon box (ServiceCard / MatterCard / HelpCard) | `h-12 w-12 rounded-xl` `#FFF4EA` | `h-7 w-7` | `1.75`–`1.8` | orange |
| WhyChoose list | `h-9 w-9 sm:h-10 sm:w-10` **solid** `#FF6A00` circle | `h-4 w-4 sm:h-[18px]` | `2` | white |
| CheckPill orange circle | `h-[18px] w-[18px]` solid orange | check SVG `h-2.5 w-2.5` | white | — |
| Partner callout (inline pages) | `h-11 w-11 sm:h-12 sm:w-12` **circle** cream | UserCheck `h-5 w-5` | `2` | — |
| Partner callout (`ServicePartnerCTA`) | `h-12 w-12 rounded-xl` cream | UserCheck `h-7 w-7` | `1.8` | — |
| Home service emoji box | `h-10 w-10 sm:h-11 sm:w-11 rounded-xl` `#FFF4EA` | emoji `text-[18px] sm:text-[20px]` | — | — |
| Home arrow chip | `h-8 w-8 sm:h-9 sm:w-9 rounded-full` | `→` `text-[14px]` orange | — | — |
| Industry image | `52 → 60 → 72` px box | image `scale-[1.1] object-contain` | — | — |
| Software category | none | Lucide `h-4 w-4 text-slate-500` | `1.75` | — |
| Software logo slot | `h-9 w-[88px] sm:h-10 sm:w-[100px]` | contain | — | — |

### DotGrid decoration

```js
// 5 columns × 4 rows = 20 dots
gridTemplateColumns: "repeat(5, 4px)", gap: 6
dot: 3.5×3.5px, borderRadius 50%, background ORANGE, opacity 0.45
```

Place as absolute decorative accent (corners of cream sections / partner CTA).

---

## 6. CTA buttons (`CtaButton`)

**File:** `src/app/components/ui/CtaButton.jsx`  
**Always use this component** — do not invent new button styles.

### Variants

| Variant | Look | Hover |
|---------|------|-------|
| `primary` | Solid `#FF6A00`, white text, orange shadow | `#E85E00`, stronger shadow |
| `secondary` / `ghost` | White + orange border (`.cta-fill-orange`) | Orange fill + white text |
| `outline` | Transparent + orange border on dark panels (`.cta-fill-orange-dark`) | Orange fill |

### Sizes

| Size | Classes |
|------|---------|
| `sm` | `rounded-[10px] px-3.5 py-2 text-[12px] sm:px-4 sm:py-2 sm:text-[13px]` |
| `md` | `rounded-[10px] px-5 py-3 text-sm` |
| `lg` | `h-11 min-w-[200px] rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide sm:h-12 sm:min-w-[220px] sm:text-[14px]` |

### Base behavior

- `inline-flex items-center justify-center gap-2 font-semibold`
- `transition-all duration-200`
- Focus: `outline-[#FF6A00]`
- Active: `scale-[0.98]`

### Standard CTA pairs

| Placement | Primary | Secondary |
|-----------|---------|-----------|
| Hero | `Book a Discovery Call` + Calendar, `size="sm"` | `Call Us` (tel) **or** `How We Work` / `Explore Our Services` with Play, `size="sm"` |
| Intro | `Book a Discovery Call` + Phone, `size="md"` | — |
| Home services bottom | `Book a Discovery Call` `lg` | `Call Us` `lg` |
| Partner CTA | `Book a Discovery Call` + Phone `lg` | `Request a Proposal` + Send `lg` |

**Phone number used on UK:** `tel:+918285285223`  
**Contact path:** `/contact`

### Hero “Call Us” exception

Some service heroes use a **raw `<a>`** (not `CtaButton`) for Call Us:

```
inline-flex … rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 …
```

Prefer `CtaButton variant="secondary"` when cloning for consistency unless matching an existing page that uses the slate outline.

---

## 7. UK Navbar

**File:** `src/app/components/UKNavbar/UKNavbar.jsx`

### Structure

- Sticky: `sticky top-0 z-40 bg-white border-b border-gray-100`
- Height: `h-16 lg:h-[68px]`
- Inner: `max-w-7xl mx-auto px-3 sm:px-6 lg:px-8`
- Logo: `/images/nextledgerlogo3.png` — `h-7 md:h-8`
- Desktop nav: `hidden lg:flex`, links `text-[13px] font-bold tracking-wide rounded-full`
- Active / open: `bg-[#FF6A00]/10 text-[#FF6A00]`
- Idle hover: `hover:text-[#FF6A00] hover:bg-[#FF6A00]/5`
- Desktop CTA: shared `Button` — `BOOK A CALL` (`!py-2 !px-6 !text-[13px] !font-extrabold !tracking-wider`)
- Mobile hamburger: orange `#FF6A00`, icon `w-7 h-7`

### Nav links (UK)

1. Home → `/`
2. About Us → `/about`
3. **Services in UK** → `/uk#services` + dropdown from `UK_SERVICE_LINKS`
4. BYOT → `/byot`
5. Tool → `/tools`
6. Contact Us → `/contact`

### Services dropdown (desktop)

- Width `w-[380px]`, `rounded-[20px]`, `p-4`, shadow `0_12px_45px_rgba(0,0,0,0.08)`
- Animation: `ukNavDropdownSlideIn` 0.22s
- On service pages (not `/uk`): show **Back To UK** row with GB flag `https://flagcdn.com/w40/gb.png` (`w-7 h-[18px]`), orange text
- Each item: emoji `text-lg` + label `text-[13px] font-bold`; hover `bg-[#FF6A00]/5` + left border orange

### Mobile drawer

- Width `w-[300px]`, backdrop `bg-black/40`
- Expandable services accordion with cream panel `bg-[#FF6A00]/2 border border-[#FF6A00]/5 rounded-[18px]`
- Full-width BOOK A CALL at bottom

### Country clone rule

Create a country-specific navbar twin (e.g. `USANavbar`) with:
- Same layout/sizes/colors
- Region label e.g. “Services in USA”
- Country service links config
- Flag + “Back To [Country]” on service pages

---

## 8. UK Home page (`/uk`) — full UI

**File:** `src/app/uk/page.js`

### Page chrome

```
<main className="flex min-h-screen flex-col overflow-x-hidden bg-[#faf9f6] font-sans text-[#1E1B2A]">
```

### Section order

1. `UKNavbar`
2. `ServiceHomePage` (regional hero)
3. **Services directory** `#services`
4. `Footer region="uk"`
5. `ArtificialIntelligence`
6. `NexaLedAi`

---

### 8.1 Hero — `ServiceHomePage`

**File:** `src/app/components/ServiceMainPageContent/ServiceHomePage.jsx`

**UK home defaults:**

| Prop | Value |
|------|-------|
| badge | `UK Accounting Outsourcing Partner` |
| titleBefore | `UK Accounting Firms` |
| titleAccent | `Scale with Confidence` |
| subtitle | Dedicated offshore support across bookkeeping, VAT, payroll… |
| primaryLabel | `Book a Discovery Call` → `/contact` |
| secondary (UK page override) | `Call Us` → `tel:+918285285223` |

**Visual structure (center aligned):**

1. Soft bordered white pill badge (orange text) — see badge classes in §3
2. H1: navy/black mix — “Helping” + titleBefore in dark; accent handling as in component (`text-[#111]` / orange where set)
3. Subtitle(s) centered, `max-w-[320px] sm:max-w-xl`
4. Orange rule `h-[3px] w-10`
5. CTA row: column on mobile (`max-w-[280px]`), row on `sm+`
6. `TrustBadgesBar` below

**UK home secondary CTA:** phone icon (because `secondaryHref` starts with `tel:`)

---

### 8.2 Trust badges (hero)

Default UK set (`TrustBadgesBar` / `DEFAULT_TRUST_BADGES`):

| Icon | Label | Sub |
|------|-------|-----|
| ShieldCheck | HMRC | Compliant |
| Shield | ISO 27001 | Certified |
| Lock | GDPR | Compliant |
| Clock | UK Time Zone | Overlap |
| Award | 9+ Years | Experience |
| UserCheck | Dedicated | Account Manager |

**Bar chrome:** `mt-6 rounded-xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(15,23,42,0.06)] px-3 py-3.5 sm:px-4 sm:py-4`

**Country swap:** use `USA_TRUST_BADGES` (IRS / CCPA / US Time Zone) or `CANADA_TRUST_BADGES` (CRA / PIPEDA / CA Time Zone) from the same file.

---

### 8.3 Services directory (`#services`)

**Background:** PAGE_CREAM + warm brownish dots (§2)

**Header (center):**

1. Soft cream pill: `8 Specialist Service Lines` — `bg #FFF4EA`, color orange, `text-[10px] uppercase tracking-[0.14em]`
2. H2 navy: `Explore Our ` + orange `UK Outsourcing` + ` Services`
3. Grey blurb `max-w-xl` `text-[13px] sm:text-[14px]`
4. Orange rule `h-[3px] w-11`

**Cards (from `UK_SERVICE_LINKS`):**

```
min-h-[88px] sm:min-h-[100px]
flex items-start gap-3 sm:gap-4
rounded-[16px] sm:rounded-[18px]
border border-[#F0E6DC] bg-white
px-3.5 py-4 sm:px-5 sm:py-5
shadow default → hover lift -translate-y-0.5 + stronger shadow + border orange/35
```

Left hover accent bar: `w-[3px]` orange, `scale-y-0 → group-hover:scale-y-100`

Layout per card:
1. Emoji box (cream rounded-xl)
2. Title `text-[13px] sm:text-[14.5px] lg:text-[15px] font-bold text-[#0B1F3A]` → hover orange
3. Blurb `text-[11.5px] sm:text-[12.5px]` grey
4. Arrow circle chip

**Bottom CTAs:** row on sm+, each `w-full max-w-[280px]`, primary + secondary `size="lg"`

---

## 9. Service page master template

Every UK service page follows this **shell**:

```
<main> white OR #faf9f6
  UKNavbar
  1. Hero (gradient + dots + blobs + badge + H1 + sub + rule + CTAs + TrustBadgesBar)
  2. Intro split (#how-we-work) — copy left, photo + stats overlay right
  3…N. Mid content (varies by service — see §12)
  Software Expertise — IconDisplayScreen
  Industries We Support — (omit only on Personal Tax)
  Why Choose NextLedgers — WhyChooseSplitSection
  Partner CTA — inline cream panel OR ServicePartnerCTA
  Footer region="uk"
  ArtificialIntelligence
  NexaLedAi
</main>
```

### 9.1 Hero (service pages) — exact shell

```
section: px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8
background: gradient 165deg white → cream → soft orange
dot field + 3 blobs (same as home)
inner: max-w-5xl, center text
badge: white pill, orange border/text, uppercase 10→11px
H1: navy, orange on key phrase only, 2xl → 3xl → 34px
subtitle: 12.5→13→sm
orange rule w-10
CTAs: primary sm + secondary/ghost sm (or slate Call Us link)
TrustBadgesBar
```

### 9.2 Intro split — exact shell

```
section#how-we-work bg-white
max-w-6xl px-4 py-3 …
grid 1 → lg:2, gap-10 / lg:gap-12
LEFT:
  eyebrow “Outsourcing Partnership” (orange uppercase 11px)
  H2 navy ~26–30px (sometimes one orange word)
  orange rule w-14
  2–3 body paragraphs 13→15px text-gray-500
  CtaButton primary md + Phone
RIGHT:
  Image /images/DSC09901.JPG rounded-2xl h-[260→320→340]
  absolute stats bar: 4 cols, white, rounded-xl, shadow-lg
  Stat: icon circle orange/10 + value extrabold + tiny label
```

**Typical stats:**

| Value | Label |
|-------|-------|
| 500+ | UK Accounting Firms Supported |
| 30+ | Software Integrations |
| 100% | HMRC Compliant Processes (or Review-Ready…) |
| Dedicated | Offshore Support Team |

### 9.3 Closing Partner CTA — two approved implementations

**A. Inline (Bookkeeping, VAT, Year-End, Advisory, Management Accounts)**  
Cream rounded panel, DotGrid, soft Handshake eyebrow, H2 with orange accent, optional white callout with UserCheck, dual CTAs `lg`, trust row `#8B7355`.

**B. `ServicePartnerCTA` component (Payroll, Personal Tax, Company Formation)**  
Same visual language; props: `eyebrow`, `titleBefore`, `titleAccent`, `titleAfter`, `description`, `callout`.  
Trust defaults: Review-Ready Processes / Secure & Confidential / Trusted by UK Accounting Firms.

**Advisory exception:** only **one** primary CTA (no Request a Proposal).

---

## 10. Shared section components

### 10.1 `TrustBadgesBar`

- Path: `ServiceMainPageContent/TrustBadgesBar.jsx`
- Grid 2 / 3 / 6; desktop vertical dividers `lg:border-r lg:border-slate-200`
- Icon circle: `h-8 w-8`, border orange/40, bg `#FFF7F0`

### 10.2 `WhyChooseSplitSection`

- Soft Star badge (`#FFF4EA` + filled orange star) — default eyebrow `Partner Advantages`
- H2 with one or two orange accent spans
- Orange rule `w-11`
- Subtitle grey `14→15px`
- List: solid orange circles + dividers `#E8E8E8`
- Right image: `/images/DSC09669.JPG` default, fixed height box `240→280→380`, max-w `360→400→420`

### 10.3 `IndustriesWeSupportGrid`

- Always **10** industries (pads/truncates)
- Grid `2 / 3 / 5`
- Card: white, border `#F0F0F0`, min-h `96→108`, hover orange border/shadow
- Label navy `#0F274A`, `10→12px font-bold`

**Industries section chrome (parent):**

- Eyebrow with orange hairline rules left/right (`h-px w-8`)
- Text: `Our Industry Expertise`
- H2: `Industries We ` + orange `Support`
- Cream panel `PAGE_CREAM`

### 10.4 `IconDisplayScreen` (Software Expertise)

- Title slate-900 `24→28→30` extrabold
- Subtitle slate-500 `13→14`
- Category left column ~180–200px: Lucide + uppercase heading
- Logos: max **7 per row**, gap `1.75rem`, slot `88×36 → 100×40`
- Rows separated by `border-b border-slate-200`
- UK pages pass `className="!py-3"`
- Logo keys resolved via `LOGO_MAP` (paths under `/images/logooUK/`)

### 10.5 Bookkeeping family components (used by Bookkeeping + Management Accounts)

| Component | Role |
|-----------|------|
| `BookkeepingMatters` | “Why X Matters” — split hero / benefit cards / trust |
| `Bookkeepingreconcilation` | Dual service deliverable cards (+ optional specialist VAT block) |
| `Bookkeepingcompliance` | VAT matters + VAT services (Bookkeeping only) |

**Note:** Other services **reimplement** similar atoms locally (MatterCard, ServiceCard, CheckPill) with cream `h-12` icon boxes — when cloning a non-bookkeeping service, copy that page’s local atoms, not necessarily the Bookkeeping component internals.

### 10.6 `ServicePartnerCTA`

See §9.3B. Callout uses **rounded-xl** UserCheck box (not circle).

---

## 11. Reusable local atoms (copy into pages)

These appear repeatedly on VAT / Year-End / Advisory / Formation / Management help sections.

### CheckPill

- Row: cream `#FFF4EA`, `rounded-xl px-3 py-2.5`
- Orange check circle `18×18` + white check path
- Text: navy `11.5→12px font-medium`

### ServiceCard

- White, `rounded-[16px]`, border `#F3E6D8`, shadow `0 8px 28px rgba(15,23,42,0.06)`
- Header: cream `h-12 w-12 rounded-xl` + Lucide `h-7` + title with orange accent span
- Body: CheckPill grid `1 → sm:2`

### MatterCard

- White, `rounded-[12px]`, border `#EBEBEB`, light shadow; hover slightly stronger
- Cream `h-12 w-12 rounded-xl` icon
- Title `13px bold` navy + orange underline `2×22` + body `11.5px` grey

### HelpCard (Management / Payroll / Personal Tax)

- White, border `#F0E0D2`, `rounded-2xl p-5 sm:p-6`
- Header icon cream box + title
- Items: cream `#FFF9F5` chips with `CheckCircle2` orange

### Stat + DotGrid

Copy the exact helpers from Bookkeeping / VAT pages (see §5 / §9.2).

---

## 12. All 8 UK service pages — section maps

### 12.1 Bookkeeping — `/uk/UkBookkeeping`

**Main bg:** white  
**Hero badge:** Outsource UK Bookkeeping & VAT  
**H1 orange:** `VAT Outsourcing`  
**Secondary CTA:** Call Us (slate `<a tel>`)

| # | Section |
|---|---------|
| 1 | Hero + TrustBadgesBar |
| 2 | Intro split (Reliable Bookkeeping Support…) |
| 3 | `BookKeepingMatters` (`splitHero`, `!py-3`) |
| 4 | `BookkeepingReconcilation` |
| 5 | `BookKeepingCompliance` |
| 6 | `IconDisplayScreen` — Accounting / Document / Ecommerce / Payments |
| 7 | `WhyChooseSplitSection` — Bookkeeping & VAT |
| 8 | Inline Partner CTA — Bookkeeping & VAT Partner |
| 9 | Footer + AI |

**Why choose items (7):** ACCA-Led…, Dedicated Offshore Bookkeeping & VAT…, White-Label, Structured Review, Secure Data, Flexible Engagement, Scalable Support…

---

### 12.2 Management Accounts — `/uk/UkManagementAccounts`

**Main bg:** white  
**Hero badge:** Outsource UK Management Accounts  
**H1 orange:** `UK Management Accounts`  
**Secondary:** Call Us (slate tel)

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro split |
| 3 | `BookKeepingMatters` (custom props — Why Management Accounts Matter) |
| 4 | `BookkeepingReconcilation` (custom serviceCards; `showSpecialist={false}`) |
| 5 | How We Help — dual HelpCards on cream |
| 6 | `IconDisplayScreen` — Accounting + Reporting tools |
| 7 | Industries (cream) |
| 8 | `WhyChooseSplitSection` — Management Accounts |
| 9 | Inline Partner CTA |
| 10 | Footer + AI |

---

### 12.3 VAT & MTD — `/uk/VatServiceuk`

**Main bg:** white  
**Hero badge:** VAT & Making Tax Digital (MTD)  
**H1 orange:** `Making Tax Digital (MTD)`  
**Secondary:** How We Work → `#how-we-work` (ghost + Play)

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro split |
| 3 | Why VAT & MTD Matter — cream + MatterCards (3-col) + solid orange Sparkles badge |
| 4 | Our VAT & MTD Services — dual ServiceCards |
| 5 | VAT Schemes — navy/cream split + SchemePills |
| 6 | VAT Reconciliation — orange panel + white checklist |
| 7 | Software Expertise |
| 8 | Industries |
| 9 | WhyChoose |
| 10 | Inline Partner CTA — VAT & MTD Partner |
| 11 | Footer + AI |

**Solid orange badges** (white text) used for “HMRC Compliance Auditing” / “Full Services Deliverables”.

---

### 12.4 Year-End Accounts — `/uk/YearEndAccount`

**Main bg:** white  
**Hero badge:** Year-End Accounts & Corporation Tax  
**H1 orange:** `Corporation Tax`  
**Secondary:** How We Work

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro |
| 3 | Why Year-End Matters — MatterCards cream |
| 4 | Dual ServiceCards (Year-End + CT) |
| 5 | Specialist Areas — SchemePills + Landmark |
| 6 | Software |
| 7 | Industries |
| 8 | WhyChoose |
| 9 | Inline Partner CTA (2 CTAs) |
| 10 | Footer + AI |

---

### 12.5 Payroll & CIS — `/uk/UKPayroll`

**Main bg:** `#faf9f6` + `text-[#1E1B2A]` (home-like chrome)  
**Hero badge:** UK Payroll & CIS Outsourcing  
**H1 orange:** `CIS Outsourcing Services`  
**Secondary:** How We Work → `#how-we-help`

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro (H2 has orange accent; body fixed 15px; raw `<img>`) |
| 3 | Why Payroll & CIS Matter — list + photo |
| 4 | Our Payroll Services — check grid + image |
| 5 | Our CIS Services — image left / copy right |
| 6 | How We Help — dual HelpCards |
| 7 | Software |
| 8 | Industries |
| 9 | WhyChoose |
| 10 | **`ServicePartnerCTA`** |
| 11 | Footer + AI |

---

### 12.6 Personal Tax — `/uk/PersonalTax`

**Main bg:** `#faf9f6`  
**Hero badge:** UK Personal Tax Outsourcing  
**H1 orange:** `Outsourcing Services`  
**Secondary:** `#how-we-help`

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro |
| 3 | Why Personal Tax Matters — list + photo |
| 4 | Our Personal Tax Services — check grid + image |
| 5 | How We Help |
| 6 | Specialist Areas — 5 image/text cards (lg grid with centered bottom row) |
| 7 | Software |
| 8 | WhyChoose |
| 9 | **`ServicePartnerCTA`** |
| 10 | Footer + AI |

**No Industries section** on this page.

---

### 12.7 Business Advisory — `/uk/UKBusinessAdvisory`

**Main bg:** white  
**Hero badge:** Business Advisory & Virtual CFO  
**H1 orange:** `Virtual CFO`  
**Secondary:** How We Work

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro (stats overlay `bottom-0`, image column `pb-10`) |
| 3 | Why Advisory Matters — MatterCards (9 / 3-col) |
| 4 | Advisory + Virtual CFO — ServiceCard ↔ photo zigzag |
| 5 | Tax Planning — single ServiceCard |
| 6 | Business Start-Up — copy+photo + card + note |
| 7 | Budgeting + Performance — dual ServiceCards |
| 8 | How We Help — dual ServiceCards |
| 9 | Software |
| 10 | Industries |
| 11 | WhyChoose (`titleMiddle`) |
| 12 | Inline Partner CTA — **primary CTA only** |
| 13 | Footer + AI |

---

### 12.8 Company Formation — `/uk/UKCompanyFormation`

**Main bg:** white  
**Hero badge:** Company Formation & Secretarial  
**H1 orange:** `Company Secretarial`  
**Secondary:** How We Work

| # | Section |
|---|---------|
| 1 | Hero |
| 2 | Intro |
| 3 | Why Matters — MatterCards (`lg:grid-cols-4`) |
| 4 | Formation + Secretarial dual ServiceCards + note |
| 5 | Companies House + Start-Up dual ServiceCards |
| 6 | How We Help dual ServiceCards |
| 7 | Software |
| 8 | Industries |
| 9 | WhyChoose |
| 10 | **`ServicePartnerCTA`** |
| 11 | Footer + AI |

---

### Family map (quick)

| Page | Main bg | Why Matters | Closing CTA | Industries |
|------|---------|-------------|-------------|------------|
| Bookkeeping | white | BookkeepingMatters | Inline | via compliance path / no separate industries |
| Management | white | BookkeepingMatters custom | Inline | Yes |
| VAT | white | MatterCards | Inline | Yes |
| Year-End | white | MatterCards | Inline | Yes |
| Payroll | `#faf9f6` | list+photo | ServicePartnerCTA | Yes |
| Personal Tax | `#faf9f6` | list+photo | ServicePartnerCTA | **No** |
| Advisory | white | MatterCards | Inline (1 CTA) | Yes |
| Formation | white | MatterCards | ServicePartnerCTA | Yes |

---

## 13. Footer, AI widgets & page chrome

### Footer

```jsx
<Footer region="uk" />
```

- Uses `UK_SERVICE_LINKS` for regional service list
- Country clones: pass matching `region` and service links

### Always include at end of page

```jsx
<ArtificialIntelligence />
<NexaLedAi />
```

### Overflow

- Home: `overflow-x-hidden`
- Services: `overflow-x-hidden` on `main`

### Images commonly reused

| Asset | Usage |
|-------|--------|
| `/images/nextledgerlogo3.png` | Navbar |
| `/images/DSC09901.JPG` | Intro photo |
| `/images/DSC09669.JPG` | WhyChoose photo |
| `/images/ukPageImg/bookkeepingimage.png` | Management Matters image |
| `/images/logooUK/*` | Software logos |
| `https://flagcdn.com/w40/gb.png` | UK flag in nav |

---

## 14. Country clone checklist

When asked to build another country **same as UK**, do **all** of the following:

### Structure

- [ ] Create `/[country]/page.js` home with same section order as UK home
- [ ] Create `[country]ServiceLinks.js` with same card fields (`label`, `href`, `icon`, `blurb`)
- [ ] Create 1:1 service folder pages (or mapped equivalents) using the master template
- [ ] Country navbar twin of `UKNavbar` (same sizes/colors/behavior)
- [ ] Wire region in Footer + RegionSelect if applicable

### Visual tokens

- [ ] Same orange `#FF6A00`, navy `#0B1F3A`, grey `#6B7280`, cream `#FFF9F5`, pill `#FFF4EA`
- [ ] Same hero gradient, dots, blobs
- [ ] Same typography scale and font weights
- [ ] Same radii, shadows, CTA sizes/variants
- [ ] Same trust bar layout (swap compliance labels: HMRC→IRS/CRA, GDPR→CCPA/PIPEDA, timezone)

### Content swaps only (not layout)

- [ ] Country name in badges / H1 accents / blurbs
- [ ] Regulator / compliance wording
- [ ] Software logo sets appropriate to region
- [ ] Phone / contact if region-specific
- [ ] Flag asset for “Back To [Country]”

### Do not change

- [ ] Section rhythm and alignment (center heroes, left-right intros)
- [ ] Icon container sizes (cream `12×12`, trust `8×8`, WhyChoose solid circles)
- [ ] Partner CTA structure
- [ ] Card hover patterns (lift + orange accent)

---

## 15. Do / Don’t (strict)

### Do

- Reuse `CtaButton`, `TrustBadgesBar`, `WhyChooseSplitSection`, `IndustriesWeSupportGrid`, `IconDisplayScreen`
- Keep orange accent **only on key words** in headings
- Keep soft badges uppercase `10px` with wide tracking
- Keep service home cards 2-column from `sm` up
- Match hover: orange tint, left accent bar on home cards, lift `-translate-y-0.5`

### Don’t

- Invent new primary colors (no purple/indigo themes)
- Flatten cream sections to pure grey or single flat white without pattern
- Resize CTAs inconsistently (`sm` in hero, `md` in intro, `lg` in partner/footer of section)
- Drop TrustBadgesBar from service heroes
- Change industry grid away from 10 items / 5-col desktop
- Use cards in the hero (hero is badge + title + sub + CTAs + trust bar only)
- Mix random border radii — stick to the locked table in §4

---

## Quick agent prompt (copy/paste)

```
Refer to docs/UK-UI-PATTERN-GUIDE.md as the approved source of truth.
Build the [COUNTRY] home page and all service pages same-to-same as the UK pattern:
same colors, typography, spacing, icon sizes, radii, shadows, section order,
CTA variants, navbar behavior, trust badges (region-swapped labels), and shared components.
Only swap country-specific copy, compliance labels, flags, routes, and software logos.
```

---

*Last analyzed from live UK implementation under `src/app/uk/` and `src/app/components/ServiceMainPageContent/`. Treat this guide as the UI deliverable checklist for any new country mirror.*
