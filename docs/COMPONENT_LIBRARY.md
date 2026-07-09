# COMPONENT LIBRARY

This document classifies, defines, and details every reusable UI component implemented in **Intent Studio**. Future development must reuse and extend these components instead of creating duplicate structures.

---

## 1. Global Layout & Structural Components

### `Navbar`
- **Location:** `/src/components/Navbar.tsx`
- **Purpose:** Primary application navigation header.
- **Properties:** 
  - `isHeroBright?: boolean`: Dynamically alters text contrast when the hero background is bright.
- **Visual Behavior:** 
  - Sticky glassmorphic bar that transitions background alpha based on page scroll coordinates.
  - Hovering over nav items triggers a micro-opacity/under-color transition to `text-[#F24E1E]`.
  - Fully responsive mobile collapsible drawer menu.
- **Known Inconsistencies:** The logo uses inline SVG gradient adjustments which transition slower than standard text transitions.

### `Footer`
- **Location:** `/src/components/Footer.tsx`
- **Purpose:** Full-width footer displayed across all page structures.
- **Properties:** None.
- **Visual Behavior:**
  - Standardized column hierarchy: Services, Studio, Projects, and Social links.
  - Clean bottom line showing copyright, location time indicator (`UTC+5:30`), and links to Privacy/Sitemap.

---

## 2. Page Section & Container Components

### `Hero`
- **Location:** `/src/components/Hero.tsx`
- **Purpose:** Primary landing header on the homepage.
- **Properties:**
  - `onBrightnessChange?: (isBright: boolean) => void`: Communicates background image brightness state changes to the navbar.
- **Visual Behavior:**
  - Employs `AnimatedHeading` to perform a smooth, typewriter-style typing animation for the main tagline.
  - Call-to-action button "Book a Call" uses a clean, high-contrast, double-layered layout (pure white/black theme).
- **Interactions:** Standard cursor tracker handles hovering states with micro-shadow translations.

### `WorkSection`
- **Location:** `/src/components/WorkSection.tsx`
- **Purpose:** Portfolio feed showcasing recent work on the home page.
- **Properties:** None.
- **Visual Behavior:**
  - Displays project metadata as cards with rich image previews, tag list feeds, and styled "Case Study" actions.
  - Project entries are dynamically derived from `/src/data/projects.ts` (with hidden drafts omitted).

### `ServicesSection`
- **Location:** `/src/components/ServicesSection.tsx`
- **Purpose:** Interactive services grids shown on the homepage.
- **Properties:** None.
- **Visual Behavior:**
  - Staggered layout presenting core disciplines (Websites, Product Design, Brand Identity).
  - Highlights capabilities with sleek micro-arrow hover indicators.

### `WhoWeHelpSection`
- **Location:** `/src/components/WhoWeHelpSection.tsx`
- **Purpose:** Editorial content section targeting client personas (Founders, Creators, Teams).
- **Properties:** None.
- **Visual Behavior:** Left-aligned headings with crisp, typographic, structured lists.

### `FounderSection`
- **Location:** `/src/components/FounderSection.tsx`
- **Purpose:** Personal credibility profile card displaying the studio founder (Ansh Kapila).
- **Properties:** None.
- **Visual Behavior:**
  - Rich glassmorphic block featuring real-time "Project Available" active pulsing indicator lights.
  - Displays credentials, philosophy, and a quick CTA trigger ("Book your call") set to white.

### `LogosSection`
- **Location:** `/src/components/LogosSection.tsx`
- **Purpose:** Client credibility partner logo board.
- **Properties:** None.
- **Visual Behavior:**
  - Uses a custom infinite CSS marquee loop (`animate-marquee`) spanning 4 sets of logo cards.
  - Logotypes feature a grayscale, 60% opacity look that transitions smoothly into 100% full opacity on pointer hover.

### `FaqSection`
- **Location:** `/src/components/FaqSection.tsx`
- **Purpose:** Collapsible details/summary accordions for answering common user queries.
- **Properties:** None.
- **Visual Behavior:**
  - Uses local state hooks to track the active row index.
  - Smooth scale transitions with a clean border lighting highlight.

---

## 3. Specialist Interactive & Utility Components

### `WebsiteAuditTeaser`
- **Location:** `/src/components/WebsiteAuditTeaser.tsx`
- **Purpose:** Highlight card directing traffic to the `/audit` subpage.
- **Properties:** None.
- **Visual Behavior:** Deep gradient background featuring an ambient `#F24E1E` glowing circular backdrop.

### `SEO`
- **Location:** `/src/components/SEO.tsx`
- **Purpose:** Wrapper around `react-helmet-async` to handle document titles, keywords, Open Graph, and JSON-LD structured schema.
- **Properties:**
  - `title?: string`
  - `description?: string`
  - `keywords?: string`
  - `image?: string`
  - `url?: string`

### `FadeIn`
- **Location:** `/src/components/FadeIn.tsx`
- **Purpose:** Simple utility container adding a delay-based entry transition to any children.
- **Properties:**
  - `delayMs?: number`
  - `durationMs?: number`
  - `className?: string`

### `BlurText`
- **Location:** `/src/components/BlurText.tsx`
- **Purpose:** Premium cinematic word splitter. Splits any input string by space boundaries and applies stagger transitions utilizing Framer Motion's `useInView` triggers.
- **Properties:**
  - `text: string`
  - `delay?: number`
  - `staggerMs?: number`

### `AnimatedHeading`
- **Location:** `/src/components/AnimatedHeading.tsx`
- **Purpose:** Custom typewriter engine. Simulates character-by-character typing, line separation wrapping, and deletion looping transitions with an elegant pulsing text cursor.
- **Properties:**
  - `text: string`
  - `typingSpeed?: number`
  - `deletingSpeed?: number`
  - `pauseDuration?: number`
  - `initialDelayMs?: number`

### `CtaFooter`
- **Location:** `/src/components/CtaFooter.tsx`
- **Purpose:** High-impact call to action positioned directly above the footer across multiple service pages.
- **Properties:** None.
- **Visual Behavior:** Dual structural button actions. Updated to comply with standard heights (`px-6 py-3`).

### `GlassConfirmationModal`
- **Location:** `/src/components/GlassConfirmationModal.tsx`
- **Purpose:** Modal feedback display triggered upon successful form submissions.

### `HlsVideo`
- **Location:** `/src/components/HlsVideo.tsx`
- **Purpose:** High-performance, streaming-ready video player integration utilising `hls.js` with responsive width fallback.

---

## 4. Component Duplication & Technical Debt Report

*Note: In accordance with the Project Constitution, these items are documented exactly as they exist within the codebase to inform future refactoring plans, but are **not** to be edited directly during simple feature requests.*

1. **Service Project Showcase Duplicates:** 
   - Files `/src/data/services.ts` and `/src/data/projects.ts` feature separate, isolated imports of the same underlying assets (e.g., duplicate declarations like `dupSulipsaCover`, `dupFityardCover`, etc.) to prevent layout bleed-through across service pages.
2. **Duplicate Testimonials Layouts:** 
   - Testimonial card lists exist inside `/src/components/TestimonialsSection.tsx` and are also embedded manually as localized inline states within various page structures.
3. **Typography Differences:**
   - Card headers vary between strict uppercase tracking-widest patterns (`text-xs uppercase font-mono text-[#F24E1E]`) and simple serif italic descriptions without centralized class bindings.
