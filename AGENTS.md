# INTENT STUDIO PROJECT CONSTITUTION

## Purpose

This project is no longer in an exploration phase.

The primary objective is now stability, consistency, scalability, technical quality, SEO readiness, and maintainability.

Future updates must preserve the existing architecture and design system instead of introducing new patterns.

---

# Authority Order

When evaluating future requests, follow this hierarchy:

1. Technical integrity
2. Crawlability and SEO
3. Design system consistency
4. UX quality
5. New feature requests
6. Visual experimentation

If a future request conflicts with a higher-priority item, stop and ask for confirmation before implementing.

---

# Brand Positioning

Intent Studio is positioned as:

A Web & Product Design Studio building launch-ready digital experiences and AI-powered visual systems for founders, startups, and growing brands.

Primary services:

* Web Design
* Product Design
* UX Design

Secondary services:

* AI Product Visuals
* AI Photoshoots
* Brand Systems
* Pitch Deck Design

Supporting capabilities:

* Content Assets
* Social Content
* Campaign Visuals

Do not reposition the studio as:

* Marketing Agency
* Social Media Agency
* Growth Agency
* Content Agency

---

# Design Constitution

Preserve the existing design language.

Do not introduce:

* new button systems
* new card systems
* new radius systems
* new typography scales
* new spacing systems
* new color systems

All future pages must inherit from existing components whenever possible.

Before creating a new component:

* search for an existing one
* reuse existing patterns first

---

# Component Governance

Avoid duplicate systems.

Before generating:

* cards
* galleries
* CTAs
* grids
* sliders
* sections

Check if an existing component already solves the problem.

Favor extension over replacement.

---

# Existing Hidden Sections

The following sections currently exist in the project and may be hidden:

* Testimonials
* Social Presence
* Newsletter
* Contra Project Showcase

These are intentionally preserved.

Do not delete them.

Do not remove their code.

Do not refactor them unless explicitly requested.

They may be reused later.

---

# Technical Constitution

The project uses:

* React / Vite
* Next.js (Note: If transitioned to Next.js or deployed via Vercel)
* Vercel / Cloud Run
* GitHub

Maintain a static-first architecture.

Use:

* Server Components by default (if Next.js/React Server Components are used) or clean statically generated static/semantic layouts by default
* Static Generation/rendering whenever possible

Use client interactive components only for:

* animations
* sliders
* interactions
* motion systems

Do not render important content exclusively through client-side hydration.

---

# SEO Constitution

Maintain:

* semantic HTML
* crawlable content
* metadata integrity
* sitemap.xml
* robots.txt
* Open Graph support
* alt text support

All future pages must follow the same SEO structure.

If a future request harms:

* crawlability
* indexing
* semantic structure
* performance

stop and explain the consequences before implementation.

---

# Architecture Governance

The following route structure is intentional:

* Home
* Work
* Project Pages
* Service Landing Pages
* Contact

Do not introduce new top-level navigation items without confirmation.

---

# Service Page Strategy

Service pages are landing pages.

They are not portfolio galleries.

Each service page should:

* explain the service
* show relevant work
* demonstrate outcomes
* provide clear CTA

Maintain this structure.

---

# Audit Mode

Whenever requested to modify the project:

First evaluate:

* design consistency
* component consistency
* SEO impact
* performance impact
* rendering impact

If a request creates inconsistency, explain the issue and propose a better alternative before implementation.

---

# Hallucination Prevention

Before introducing:

* new styles
* new layouts
* new component systems
* new animations
* new architecture

verify that they already exist in the project language.

Do not invent new visual directions unless explicitly requested.

When uncertain:
ask for confirmation.

Preserve consistency over creativity.

---

# Long-Term Goal

The website should evolve into a stable, scalable, production-ready portfolio and lead-generation platform without accumulating technical debt, duplicate systems, or conflicting design patterns.
