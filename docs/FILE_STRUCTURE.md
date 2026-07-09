# FILE STRUCTURE

This document details the file tree organization, directory purposes, and configuration entry points for **Intent Studio**.

---

## 1. Directory Tree Overview

```
/
├── .env.example              # Template for server-side environments and keys
├── index.html                # Single-page HTML entry point
├── metadata.json             # Applet descriptor (Name, description, permissions)
├── package.json              # Primary dependencies and run script configurations
├── tsconfig.json             # TypeScript compiler settings
├── vercel.json               # Cloud routing and static build instructions
├── vite.config.ts            # Vite compiler, React plugin, and Tailwind settings
│
├── docs/                     # Permanent documentation system
│   ├── BRAND_GUIDELINES.md   # Guidelines for brand assets, tone, and colors
│   ├── COMPONENT_LIBRARY.md  # Detailed catalog of reusable UI components
│   ├── DESIGN_MANIFEST.md    # Governance rules for visual modifications
│   ├── DESIGN_SYSTEM.md      # Specification of typography scales, tokens, and spacings
│   ├── FILE_STRUCTURE.md     # This directory blueprint
│   ├── PROJECT_ARCHITECTURE.md# Software design, dynamic engines, and routing maps
│   ├── PROJECT_CONSTITUTION.md# Supreme positioning, button guidelines, and rules
│   └── SEO_GUIDELINES.md     # Sitemap, robots, and programmeta metatags specifications
│
├── public/                   # Static public assets (zero-compilation)
│   ├── favicon.svg           # Main browser launcher icon
│   ├── googlec26ec12a94c6dc67.html # Google Search Console verification key
│   ├── robots.txt            # Search engine crawler permission guide
│   ├── sitemap.xml           # XML sitemap mapping crawl routes
│   └── images/               # Shared general logo assets
│
└── src/                      # Application source container
    ├── App.tsx               # Primary App root, router, and layout shell
    ├── index.css             # Main stylesheet (Tailwind import, theme variables, glass styles)
    ├── main.tsx              # Main mounting script
    ├── vite-env.d.ts         # Global TS Environment declarations
    │
    ├── assets/               # Local dynamic assets (compiled and optimized by Vite)
    │   └── images/           # Local portfolio renders and mockup images
    │
    ├── components/           # Reusable UI React components
    │   ├── AnimatedHeading.tsx  # Typewriter display animation system
    │   ├── BlurText.tsx         # Cinematic word-by-word reveal system
    │   ├── CtaFooter.tsx        # High-impact call to action block
    │   ├── DreamShipSection.tsx # Collaborative canvas callout block
    │   ├── FadeIn.tsx           # Delay-based element appearance helper
    │   ├── FaqSection.tsx       # Collapsible question/answer accordions
    │   ├── Footer.tsx           # Full-width navigation and credential footer
    │   ├── FounderSection.tsx   # Team detail and "project available" status card
    │   ├── GlassConfirmationModal.tsx # Form success overlays
    │   ├── Hero.tsx             # Main homepage display banner
    │   ├── HlsVideo.tsx         # Responsive adaptive streaming video player
    │   ├── Logo.tsx             # Inline SVG brand vector logomarks
    │   ├── LogosSection.tsx     # Partner infinite scrolling marquee
    │   ├── Navbar.tsx           # Sticky glass dynamic top navigation
    │   ├── SEO.tsx              # React Helmet dynamic metadata injection wrapper
    │   ├── ServicesSection.tsx  # Dynamic home service showcase block
    │   ├── SocialPresenceSection.tsx # Social/Contra links section (intentionally preserved)
    │   ├── TestimonialsSection.tsx # Client reviews and credentials section
    │   ├── WebsiteAuditTeaser.tsx # Website Audit funnel teaser card
    │   ├── WhoWeHelpSection.tsx # Target persona descriptions
    │   └── WorkSection.tsx      # Recents work/portfolio bento grid
    │
    ├── data/                 # Shared content databases
    │   ├── projects.ts       # Central dictionary of all client portfolio case studies
    │   └── services.ts       # Central dictionary of service lifecycles and details
    │
    ├── lib/                  # Library configurations and helpers
    │   └── utils.ts          # Stylesheet string joining utilities (clsx + tailwind-merge)
    │
    └── pages/                # Parent view components (Routes)
        ├── ContactPage.tsx      # Lead-generation and enquiry form page
        ├── HomePage.tsx         # Root landing layout assembling standard sections
        ├── NotFoundPage.tsx     # 404 Fallback error page
        ├── PrivacyPage.tsx      # Compliance policies documentation page
        ├── ProjectPage.tsx      # Dynamic project portfolio page
        ├── ServicePage.tsx      # Dynamic service detailed landing page
        ├── ServicesListPage.tsx # Directory page detailing services categories
        ├── WebsiteAuditPage.tsx # Standard website audit landing layout
        └── WorkPage.tsx         # Public case studies archive grid
```

---

## 2. Directory Purpose Definitions

### `/docs`
Houses the permanent design and development specifications of the agency. Future AI agents, IDE tools, and human coders must review these files to ensure all updates maintain the existing brand positioning, code performance, and styles.

### `/public`
Used for fully static assets served directly to browsers without Vite compiling them. Crucial for SEO files (`robots.txt`, `sitemap.xml`) and search engine tracking files.

### `/src/components`
Contains atomic, reusable UI block representations. Developers should reference files in this directory before designing new custom cards, sliders, or panels to ensure they reuse existing styles.

### `/src/data`
Serves as the client-side content management database (CMS) for the studio. Adding a new case study or updating capabilities merely requires adding structured objects into `/src/data/projects.ts` or `/src/data/services.ts` respectively, automatically updating all corresponding views, paths, and links across the site.

### `/src/pages`
Acts as the parent layout container for page views. These components receive routing parameters from the Router, look up relevant entries inside `/src/data`, and assemble individual layouts by composing elements found inside `/src/components`.
