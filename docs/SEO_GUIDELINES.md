# SEO GUIDELINES

This document specifies the current search engine optimization (SEO) architecture and performance configurations implemented across **Intent Studio**.

---

## 1. Meta Tag Architecture

All meta tagging is managed programmatically via the `SEO` component located in `/src/components/SEO.tsx` using `react-helmet-async`. 

### Key SEO Prop Mappings
- **`title`:** Appends customized title strings (e.g. `Web & Product Design Studio for Startups | Intent Studios`).
- **`description`:** Limits descriptions to a scannable limit under 160 characters.
- **`keywords`:** Features targeted keyword tags representing core web design capabilities.
- **`image`:** Defaults to `/favicon.svg` for share layouts.
- **`url`:** Holds absolute sitemap canonical paths.

---

## 2. Open Graph & Twitter Card Specifications

To ensure high-fidelity layouts across chat and social shares (LinkedIn, Twitter, Slack), the `SEO` component includes:
- `og:type` set to `website`
- `og:site_name` set to `Intent Studios`
- `og:url` pointing to canonical link directories
- `og:title` & `og:description` sharing header copies
- `og:image` specifying default share visuals
- `twitter:card` set to `summary_large_image` to support rich layout cards

---

## 3. Crawlability & Indexing Files

The project contains native search engine crawler files inside the `/public` directory:

### Robots (`/public/robots.txt`)
- Allows indexing across all page pathways.
- Explicitly registers sitemap location.
```text
User-agent: *
Allow: /

Sitemap: https://intentstudios.in/sitemap.xml
```

### Sitemap (`/public/sitemap.xml`)
- Lists primary crawlable URL locators, update frequencies, and layout prioritization ranks:

| URL Path | Priority | Change Frequency |
| :--- | :--- | :--- |
| `https://intentstudios.in/` | `1.0` (Core) | Weekly |
| `https://intentstudios.in/work` | `0.9` (Portfolio) | Weekly |
| `https://intentstudios.in/contact`| `0.8` (Enquiries) | Monthly |

---

## 4. Structured Data (JSON-LD)

To help search engines construct rich snippet cards and support Google's site name classification, a standardized `WebSite` LD-JSON schema is automatically appended inside the HTML `<head>` by the `SEO` component:

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Intent Studios",
  "alternateName": ["Intent Studio", "IntentStudio"],
  "url": "https://intentstudios.in/"
}
```

---

## 5. Semantic HTML & Accessibility

Our layouts prioritize clean semantic HTML.
- **Header Hierarchies:** Single, clear `h1` elements for hero headings. Key services use `h2`, and card blocks use `h3` structures.
- **Structural Sections:** Content wraps inside semantic `<main>`, `<section>`, `<nav>`, and `<footer>` nodes rather than anonymous `div` elements.
- **Image SEO:** All images use descriptive `alt` tags and include `referrerPolicy="no-referrer"` to resolve any browser frame constraints.
- **Links & Buttons:** Anchors utilize explicit labels, and buttons incorporate distinct `id` tags to assist assistive browser readers.
