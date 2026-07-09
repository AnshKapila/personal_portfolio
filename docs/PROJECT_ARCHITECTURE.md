# PROJECT ARCHITECTURE

This document details the software design, routing, data-fetching flows, and structural dependencies of the **Intent Studio** codebase.

---

## 1. Application Architecture & Routing Map

The application runs as a fully client-side Single-Page Application (SPA) powered by **React 19**, **Vite**, and **React Router v7**. The router container is declared at the root level inside `/src/App.tsx`.

```
                [ App.tsx (BrowserRouter) ]
                            │
               ┌────────────┴────────────┐
         [ Navbar ]                  [ Footer ]
               │
        [ Route Switcher ]
               │
       ┌───────┼───────┬───────┬───────┬───────┐
       │       │       │       │       │       │
      [/]   [/work] [/work/  [/ser-  [/ser- [/audit]
     Home    Work   :slug]   vices]  vices/  Audit
                    Project  Serv-   :slug]  Lander
                    Detail   ices    Service
                             List    Lander
```

---

## 2. Page & Routing Specification

All pages are structured under `/src/pages` and registered as children of the core App route switcher:

1. **Home Page (`/`):**
   - Renders modular sections representing the complete brand pitch: Hero, Work, Credibility, Services, Teaser, and FAQ blocks.
   - Updates the navbar's contrast state reactively via the parent layout wrapper callback `setIsHeroBright`.
2. **Work Page (`/work`):**
   - Serves as the interactive archive displaying all active, public portfolio entries.
3. **Project Detail Page (`/work/:slug`):**
   - Custom dynamic page looking up individual projects from the projects database.
   - Updates meta tags, page titles, and description snippets dynamically using the custom `SEO` component.
   - Safely detects missing slugs, rendering clean UX fallback screens if not found.
4. **Services List Page (`/services`):**
   - High-level directory organizing the studio's primary service categories.
5. **Service Landing Page (`/services/:slug`):**
   - Interactive, dynamic landing page system.
   - Maps parameters to specific product lifecycle timelines, processes, bento features, FAQ arrays, and cooperation models.
6. **Website Audit Page (`/audit`):**
   - Deep landing page explaining common website trust and conversion leak categories, helping drive high-intent agency client acquisitions.
7. **Privacy Policy (`/privacy`):**
   - Static informational compliance layout containing privacy and cookie policies.

---

## 3. Dynamic Data Management Engines

The app utilizes a localized, zero-latency static data-binding architecture instead of raw API fetching. This guarantees perfect Core Web Vitals performance and instant page transition speeds.

```
       [ Local Component ]
                │
         ( useParams() )
                │
         [ URL Parameter ] (e.g. slug = "websites-platforms")
                │
    ┌───────────┴───────────┐
    ▼                       ▼
[ src/data/services.ts ]  [ Local Service Detail Dictionary ]
(Matches slug definition)   (Bento list, lifecycle milestones, FAQs)
    │                       │
    └───────────┬───────────┘
                ▼
      [ Unified UI Render ]
```

### Showcase Image Isolation Strategy
To maintain absolute separation between service pages and work listings without polluting shared models, individual project assets are duplicated (e.g., `dupSulipsaCover`, `dupClickpickCover` inside `/src/data/services.ts`) and custom arrays are assigned to each service. This prevents visual bleed-through.

---

## 4. Key Runtime & Style Dependencies

The project's technology stack is documented exactly as defined inside `/package.json`:

- **UI Core:** `react` & `react-dom` (Version `19.0.0`)
- **Routing Engine:** `react-router-dom` (Version `7.14.2`)
- **Meta Manager:** `react-helmet-async` (Version `3.0.0`)
- **Styling Pipeline:** `tailwindcss` & `@tailwindcss/vite` (Version `4.1.14` - Tailwind v4 API integration)
- **Fluid Animation Engine:** `motion` (Version `12.38.0`)
- **Icon Assets:** `lucide-react` (Version `0.546.0`)
- **Interactive Player:** `hls.js` (Version `1.6.16` - supports streaming video configurations)
- **Build Server Wrapper:** `express` & `tsx` (supports local production and container serving workflows)
- **Utility Bindings:** `clsx` & `tailwind-merge`
