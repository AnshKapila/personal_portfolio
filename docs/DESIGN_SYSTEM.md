# DESIGN SYSTEM

This document is the official, verified specification of the design tokens, typography, colors, layouts, and styles implemented across **Intent Studio**. Future developers and AI assistants must strictly adhere to these styles when making changes or introducing new elements.

---

## 1. Typography

Intent Studio utilizes a distinct contrast between high-editorial, classical serifs and clean, technical sans-serif typography. This is defined inside `@theme inline` in `/src/index.css` and applied via Tailwind utility classes.

### Primary Font Families
- **Heading / Display Serif:** `"Instrument Serif", serif`
  - Rendered primarily via the `--font-heading` theme variable.
  - Characterized by high-contrast stroke widths and organic italic curves.
  - **CSS Usage:** `font-heading`
- **Body / Interface Sans-Serif:** `"Inter", sans-serif`
  - Rendered via `--font-sans` or `--font-body` theme variables.
  - Used for readability, structural text, numbers, and navigation.
  - **CSS Usage:** `font-sans` or `font-body`
- **Technical Monospace:** `"JetBrains Mono" / system-mono`
  - Used for decorative metadata labels, drafts, and version indicators.
  - **CSS Usage:** `font-mono`

### Typographic Scales & Tokens

| Style Class | Element / Usage | Font Family | Default Size & Mobile Scale | Weight | Line Height | Letter Spacing | Responsive Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Heading** | Page primary headers | `Instrument Serif` (Italic) | `text-4xl` (36px) | `font-normal` (400) | `leading-tight` (1.25) | `tracking-tight` (-0.02em) | `sm:text-5xl md:text-6xl lg:text-7xl` |
| **Section Heading** | Section title / primary focus | `Instrument Serif` (Italic) | `text-3xl` (30px) | `font-normal` (400) | `leading-tight` (1.25) | `tracking-tight` (-0.015em) | `md:text-4xl lg:text-5xl` |
| **Sub-section Title**| Card or bento header | `Inter` (Sans-serif) | `text-lg` (18px) | `font-medium` (500) | `leading-snug` (1.375) | `tracking-wide` (0.015em) | `md:text-xl` |
| **Body Paragraph** | Content blocks & descriptions| `Inter` (Sans-serif) | `text-sm` (14px) | `font-light` (300) | `leading-relaxed` (1.625) | `normal` (0) | `md:text-base text-zinc-400` |
| **Interactive Text**| Buttons & Action Links | `Inter` (Sans-serif) | `text-sm` (14px) | `font-medium` (500) | `leading-none` (1) | `normal` | Inline flex, transitions active |
| **Eyebrow Label** | Over-title section trackers | `Inter` / `Mono` | `text-xs` (12px) | `font-bold` (700) | `leading-none` | `tracking-widest` (0.1em) | Upper-case, colored in orange |
| **Mono Badge** | Draft & technical tags | `Mono` | `text-[10px]` / `text-xs` | `font-mono` | `leading-none` | `tracking-widest` | Embedded inside borders |

---

## 2. Color System

The brand's aesthetic is built around a severe, premium pitch-black layout accented with deep gray surfaces and a single punchy electric color: **International Orange**.

### Palette Specification

| Color Variable / CSS | Hex Code / Value | Usage | Core Application |
| :--- | :--- | :--- | :--- |
| **Deep Canvas** | `#000000` | Entire application background, body canvas | `bg-black` |
| **Primary Text** | `#ffffff` | Primary readable titles, active links | `text-white` |
| **Electric Accent** | `#F24E1E` | International Orange. Highlights, active tags, glow filters | `text-[#F24E1E]`, `bg-[#F24E1E]/10` |
| **Surface Dark** | `#0a0a0a` | Secondary block panels, cards, FAQ backgrounds | `bg-zinc-950`, `bg-[#0a0a0a]` |
| **Surface Secondary**| `#111111` | Secondary containers, dark inputs, page footer bands | `bg-[#111111]`, `bg-zinc-900` |
| **Muted Text 1** | `#a1a1aa` | Explanations, descriptive paragraphs, secondary links | `text-zinc-400`, `text-gray-400` |
| **Muted Text 2** | `#71717a` | Inactive pagination, metadata labels, copyright text | `text-zinc-500`, `text-gray-500` |
| **Border Soft** | `rgba(255,255,255,0.05)`| Grid lines, section dividers, container separators | `border-white/5` |
| **Border Active** | `rgba(255,255,255,0.1)`| Focused elements, hovered items, structural frames | `border-white/10` |

*Note: Following the July 2026 design system update, all CTA buttons are set to White (`bg-white` / `text-black` hover: `bg-zinc-200`) and must not feature the orange background color anywhere on the webpage to align with the minimalist studio design language.*

---

## 3. Glassmorphic Surface Effects

The design utilizes custom blended layers defined in `/src/index.css` to build depth without compromising performance:

### `.liquid-glass`
- **Background:** `rgba(0, 0, 0, 0.4)` (luminosity blending)
- **Filters:** Backdrop Blur of `4px`
- **Effects:** Inset border mask running a dynamic linear-gradient representing top/bottom light catchers (top `rgba(255,255,255,0.3)` to bottom `rgba(255,255,255,0.3)` with fully transparent midsections).
- **Usage:** Modular cards, badges, interactive components.

### `.liquid-glass-strong`
- **Background:** `rgba(255, 255, 255, 0.15)`
- **Filters:** Backdrop Blur of `12px`
- **Effects:** Solid border with `rgba(255,255,255,0.15)` and outer dropshadow `rgba(0,0,0,0.4)`.
- **Usage:** Secondary CTAs and high-contrast glass overlays.

---

## 4. Spacing, Layout & Grids

Our layout enforces structured negative space and asymmetric balance.

### Base Container Max Widths
- **Hero/Header Content:** `max-w-4xl` (left-aligned or centered depending on the section)
- **Standard Pages / Sections:** `max-w-7xl mx-auto px-6 md:px-12 lg:px-16`
- **Form / Detail Containers:** `max-w-2xl`
- **Teasers / Banners:** `rounded-[2.5rem]` wrappers with padded interiors.

### Section Spacing (Desktop vs. Mobile)
- **Top / Hero Padding:** `pt-36 pb-24 md:pt-44 md:pb-32`
- **Section Spacing:** `py-24 md:py-32`
- **Inner Gap Spacing:** `gap-4` (small details), `gap-8` (card grids), `gap-12` or `gap-16` (large asymmetric content layout separations).

---

## 5. Shadows & Border Radii

- **Shadows:** Standard `shadow-2xl` used for container cards. Subtle glowing radial filters under elements (`bg-[#F24E1E]/5 filter blur-[120px] pointer-events-none`) provide spatial ambient lighting.
- **Border Radius Hierarchy:**
  - **Badges / Internal Elements:** `rounded-md` (6px) or `rounded-lg` (8px)
  - **Standard Buttons:** `rounded-lg` (8px)
  - **Standard Cards / Nav Overlays:** `rounded-xl` (12px) or `rounded-2xl` (16px)
  - **Modals / Hero Frames:** `rounded-3xl` (24px)
  - **Hero Inner / Dynamic Blocks:** `rounded-[2.5rem]` (40px)

---

## 6. Icons & Media Guidelines

- **Icons:** Sourced strictly from `lucide-react`. Custom SVGs are restricted.
- **Image Treatment:** Rounded corners (`rounded-2xl`), subtle borders (`border border-white/5`), and smooth transition states. Placeholder SVGs are built dynamically within `/src/data/projects.ts` to prevent missing asset/broken image link rendering errors.
- **Responsive Media:** All video assets use responsive containers (like `HlsVideo`) with standard fallback handlers.
