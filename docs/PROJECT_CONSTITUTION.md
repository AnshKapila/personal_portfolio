# PROJECT CONSTITUTION

This document serves as the supreme governance framework and architectural guide for **Intent Studio**. All future modifications, integrations, and extensions must align with this Constitution. Any proposal violating these rules must be blocked.

---

## 1. Brand Positioning & Boundaries

Intent Studio is strictly positioned as:
> **A Web & Product Design Studio building launch-ready digital experiences and AI-powered visual systems for founders, startups, and growing brands.**

### Core Services
- **Web Design & Development**
- **Product & UX Design**
- **UX Auditing & Conversion Systems**

### Secondary Capabilities
- **AI Product Visuals & Photoshoots**
- **Brand Identity Systems**
- **Pitch Deck Presentations**

### Restricted Offerings (DO NOT REPOSITION)
- Do not position the studio as a **Marketing Agency**, **Social Media Agency**, **Growth Agency**, or **Content Agency**.

---

## 2. Design Governance

### I. Component Preservation
We maintain strict visual consistency. The introduction of duplicate UI components is forbidden.
- Do not create custom card frameworks, galleries, CTAs, grids, or accordion elements if an existing component can be extended.
- Do not add new typography hierarchies, radius standards, or color scales.

### II. Button Integrity
- All CTA buttons must be white (`bg-white hover:bg-zinc-200 text-black`) or standard dark-glass secondary styles.
- Buttons must not use orange colors on any section of the website.
- Button height and padding must align to the standardized size: `px-6 py-3 rounded-lg text-sm font-medium`.

### III. Hidden Content Safeguards
The following sections are intentionally preserved in the codebase (though they may be commented out on some pages):
- **Testimonials**
- **Social Presence**
- **Newsletter**
- **Contra Project Showcase**

Do not delete these sections, remove their source files, or refactor their structures unless explicitly requested by the user.

---

## 3. Technical & Architectural Rules

### I. Routing & Folder Structure
Our site hierarchy is defined in `/src/App.tsx` and must not include new top-level page entries without explicit confirmation:
- `/` - Home Page
- `/work` - Portfolio Directory
- `/work/:slug` - Project Detail Page
- `/services` - Services Overview Directory
- `/services/:slug` - Dynamic Service Landing Page
- `/contact` - Project Enquiry Form
- `/audit` - UX/Website Audit Page
- `/privacy` - Privacy & Compliance Policy

### II. Code Quality Rules
- **Lazy Initialization:** Initialize third-party SDKs only when needed to prevent development server crashes if keys are absent.
- **Strict Scope of "My Data":** If a feature references personal account systems, build real OAuth/API connections instead of mock data placeholders.
- **No Infinite Re-renders:** When utilizing standard React `useEffect` hooks, never include arrays or objects directly in dependency lists unless they are deeply memoized. Prefer primitives.
- **No Mock "Tech-Larping":** Never output system logs, container port coordinates, online state dots, or credit markings in the UI margins. Interfaces must remain clean, professional, and client-focused.
- **Dedicated Tools First:** Always use dedicated file tools (like `view_file` and `list_dir`) rather than invoking terminal operations (`cat`, `ls`, etc.).
