# DESIGN MANIFEST

This document acts as the structural and aesthetic constitution for all future visual additions and interface designs for **Intent Studio**. It sets forth the core principles that must guide design decisions to preserve brand authority, layout balance, and performance scalability.

---

## 1. Core Principles

### I. Craftsmanship Over Defaults
Every visual asset, spacing choice, and structural wrapper must be deliberate. Avoid using cookie-cutter card layouts, standard system shadows, or generic gradients. Design should focus on precise typographic pairs, rich vertical rhythm, and sophisticated structural boundaries.

### II. Absolute Aesthetic Consistency
Do not introduce alternative visual patterns. Any future section or page must strictly inherit styles from the existing layout language:
- Do not add new button configurations, radius standards, or typography scales.
- Do not create custom shadow systems.
- Do not introduce alternative highlight colors or background gradients.

### III. Structural Simplicity & "Anti-AI-Slop"
The application must remain highly refined, professional, and content-first. We reject the addition of clutter under the guise of "AI features" or "interactivity":
- **No Unrequested System Data:** Avoid adding artificial terminal logs, status trackers (e.g. "PORT: 3000"), or system metadata indicators. Keep margins clean and uncluttered.
- **Humble Human Labels:** Always use standard, humble, direct descriptions for UI elements (e.g., "Sitemap", "Contact Us") rather than dramatic or pseudo-intellectual names.
- **Single-Screen Constraints for Simple Elements:** For simple widgets or single-feature requests, avoid complex sidebars, persistent navigations, or nested drawers. Design for a single-screen layout with maximum negative space.

### IV. Extension Over Replacement
Before generating a new component, page, or section:
- Audit the directory structure to identify an existing solution.
- Prefer extending or reusing existing components (e.g. reusing `SEO`, `FadeIn`, or `/src/components/CtaFooter.tsx`) rather than creating duplicate styles.
- Maintain existing database/data-binding structures in `/src/data/projects.ts` or `/src/data/services.ts`.

---

## 2. Decision Framework for Future Features

When evaluating a request to introduce a new feature or design update, ask the following questions in sequence:

```
  Does the requested feature already exist as an offline component?
                        │
         ┌──────────────┴──────────────┐
        YES                            NO
         │                             │
  Reuse or extend the           Does it require a new page?
  existing structure.                  │
                         ┌─────────────┴─────────────┐
                        YES                          NO
                         │                           │
                 Add route to App.tsx         Implement within the
                 & match exact tokens.        current single-screen layout.
```

---

## 3. Layout Rhythm & Density Rules

- **Asymmetry & Alignment:** Prefer left-aligned headers and descriptive paragraphs over centered text on main landing blocks. Left alignment reinforces natural editorial flow.
- **Negative Space Allocation:** A minimum of `py-24` (desktop `py-32`) padding must surround all primary content sections to prevent visual fatigue.
- **Hover Transitions:** All pointers must trigger clear, immediate visual feedback. Use smooth CSS transition parameters (`duration-300`, `ease-in-out`) rather than instant state changes.
- **Mobile Touch-Target Safety:** Every interactive element on mobile layout viewports must maintain a minimum bounding box of `44px` to ensure touch compatibility.
