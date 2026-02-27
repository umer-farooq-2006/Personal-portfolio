# Research: Portfolio Website Redesign

**Feature**: 002-portfolio-redesign  
**Date**: 2026-02-27  
**Purpose**: Resolve technical unknowns and document design decisions for multi-page portfolio redesign

---

## Design Decisions

### Decision 1: Multi-Page Architecture Pattern

**What was chosen**: Static HTML files at root level (index.html, bio.html, skills.html, experience.html, contact.html, 404.html)

**Rationale**: 
- Simplest possible deployment - works on any static hosting (GitHub Pages, Netlify, Vercel)
- No build step required - aligns with constitution's "Simplicity First" principle
- Each page independently functional and bookmarkable
- Clear separation of concerns for content management
- Easy to understand and maintain for developers of all skill levels

**Alternatives considered**:
- Single Page Application (SPA) with client-side routing: Rejected due to complexity, requires framework or custom router, SEO challenges
- Static Site Generator (Hugo, Jekyll): Rejected - adds build tool dependency, violates "no build tools" constraint
- All content on single page with anchor navigation: Rejected - doesn't meet requirement for separate pages, poor content organization

---

### Decision 2: CSS Architecture

**What was chosen**: Modular CSS file structure organized by concern
- `variables.css` - CSS custom properties for design tokens
- `base.css` - Resets, typography, base element styles
- `layout.css` - Grid, flexbox, page-level layouts
- `components.css` - Reusable UI components (buttons, cards, navigation)
- `responsive.css` - Media queries and breakpoints
- `accessibility.css` - Focus states, skip links, high contrast modes

**Rationale**:
- Clear separation enables easy maintenance and updates
- Design tokens in variables.css allow consistent theming across pages
- Accessibility styles isolated for easy auditing and testing
- Mobile-first approach in responsive.css
- No CSS preprocessor needed - vanilla CSS with custom properties

**Alternatives considered**:
- Single monolithic stylesheet: Rejected - becomes unmaintainable as project grows
- CSS-in-JS: Rejected - requires JavaScript framework, violates vanilla constraint
- CSS Modules: Rejected - requires build tool, adds complexity
- Utility-first CSS (Tailwind-like): Rejected - requires build step or large CDN file

---

### Decision 3: Responsive Breakpoints

**What was chosen**: Mobile-first breakpoints
- Base styles: 320px (mobile baseline)
- `@media (min-width: 576px)` - Large phones
- `@media (min-width: 768px)` - Tablets
- `@media (min-width: 992px)` - Small laptops
- `@media (min-width: 1200px)` - Desktops
- `@media (min-width: 1920px)` - Large screens (max-width container)

**Rationale**:
- Mobile-first approach reduces CSS for smaller screens
- Covers all common device sizes from 320px to 1920px+
- Standard breakpoint values used across industry
- Progressive enhancement - content works at all sizes, layout enhances

**Alternatives considered**:
- Desktop-first with max-width media queries: Rejected - mobile-first is industry best practice
- Container queries: Rejected - limited browser support, not universally available
- Fixed pixel-width design: Rejected - violates responsive design requirement

---

### Decision 4: Color Palette & Typography

**What was chosen**: 

**Color Palette** (example - to be finalized in design phase):
- Primary: Deep blue or teal (professional, modern)
- Secondary: Complementary accent color
- Neutral: Gray scale for text and backgrounds
- Success/Error: Green/Red with sufficient contrast
- All colors meet WCAG 2.1 AA contrast requirements (4.5:1 minimum)

**Typography**:
- Primary font: System font stack (San Francisco, Segoe UI, Roboto) or Google Font
- Secondary font: Complementary font for headings (optional, max 2 fonts)
- Base size: 16px minimum
- Scale: Modular scale (1.25 or 1.333 ratio) for headings
- Line height: 1.5-1.6 for body text, 1.2-1.3 for headings

**Rationale**:
- System fonts load instantly, no FOUT/FOIT
- Limited color palette maintains visual consistency
- Typography scale creates visual hierarchy
- All choices support professional aesthetic requirement

**Alternatives considered**:
- Custom web fonts only: Rejected - performance impact, requires fallbacks anyway
- More than 2 font families: Rejected - violates constitution, creates visual clutter
- Arbitrary font sizes: Rejected - modular scale ensures visual harmony

---

### Decision 5: Navigation Pattern

**What was chosen**: 
- Fixed or sticky header with horizontal navigation menu
- Mobile: Hamburger menu with slide-out or dropdown panel
- Desktop: Full horizontal menu with clear visual indication of current page
- Breadcrumb navigation optional for deeper content hierarchies
- Skip-to-content link for accessibility

**Rationale**:
- Familiar pattern reduces cognitive load
- Works consistently across all pages
- Mobile hamburger is expected pattern for small screens
- Current page indication supports wayfinding (FR-003)
- Skip link meets accessibility requirements

**Alternatives considered**:
- Side navigation: Rejected - less common for portfolios, harder to make responsive
- Bottom navigation: Rejected - unconventional for desktop, better for mobile apps
- Mega menu: Rejected - overkill for 4-5 pages, adds unnecessary complexity

---

### Decision 6: Image Optimization Strategy

**What was chosen**:
- Format: WebP with JPEG/PNG fallbacks using `<picture>` element
- Sizing: Multiple sizes via `srcset` for responsive images
- Compression: 80-85% quality for photos, SVG for icons/graphics
- Lazy loading: `loading="lazy"` for below-fold images
- Total page weight budget: <500KB per page including all assets

**Rationale**:
- WebP provides 25-35% smaller file sizes than JPEG
- Responsive images serve appropriate sizes per device
- Lazy loading improves initial page load performance
- Meets performance budget (FR-008, SC-003)

**Alternatives considered**:
- JPEG only: Rejected - larger file sizes impact performance
- AVIF format: Rejected - limited browser support (not 95%+ coverage)
- All images inline as base64: Rejected - increases HTML size, prevents caching

---

### Decision 7: Accessibility Implementation

**What was chosen**:
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ARIA labels where semantic HTML insufficient
- Focus management for keyboard navigation
- Skip-to-content links on all pages
- Alt text for all images (descriptive, not decorative)
- Form labels explicitly associated with inputs
- Error messages clearly associated with form fields
- Color contrast ≥4.5:1 for normal text, ≥3:1 for large text

**Rationale**:
- Meets WCAG 2.1 AA requirement (FR-006, SC-004)
- Semantic HTML provides accessibility "for free" in most cases
- Keyboard navigation essential for motor-impaired users
- Screen reader compatibility requires proper labeling

**Alternatives considered**:
- ARIA-heavy approach: Rejected - "no ARIA is better than bad ARIA" principle
- JavaScript-dependent accessibility: Rejected - must work with JS disabled
- Accessibility overlay widgets: Rejected - often create more problems than they solve

---

### Decision 8: Performance Optimization

**What was chosen**:
- Critical CSS inlined in `<head>` (or loaded via `<link rel="preload">`)
- Non-critical CSS deferred
- JavaScript loaded with `defer` attribute
- Images lazy-loaded
- Preload key resources (fonts, hero images)
- Minimize DOM depth (<1500 nodes, <60 depth)
- Use CSS containment for isolated components

**Rationale**:
- Meets 3-second load time requirement (FR-007, SC-002)
- Improves Lighthouse Performance score
- Better user experience, especially on slower connections

**Alternatives considered**:
- Code splitting with bundler: Rejected - requires build tools
- Service worker caching: Rejected - adds complexity, not needed for static site
- Image CDN: Rejected - adds external dependency, cost

---

### Decision 9: JavaScript Architecture

**What was chosen**:
- ES6+ modules with `<script type="module">`
- `main.js` - Core initialization, shared functionality
- `navigation.js` - Menu behavior, active state management
- `utils.js` - Helper functions (debounce, throttle, accessibility utilities)
- No global variables (use IIFE or module pattern)
- Event delegation for dynamic content
- Progressive enhancement - core content works without JS

**Rationale**:
- Modular structure supports maintainability
- ES6+ provides modern syntax (const/let, arrow functions, template literals)
- No framework needed for this scope
- Progressive enhancement meets accessibility requirement

**Alternatives considered**:
- Vanilla JS with global functions: Rejected - pollutes global scope
- jQuery: Rejected - unnecessary weight, modern JS has replaced need
- Framework (React, Vue): Rejected - violates "no frameworks" constraint, overkill

---

### Decision 10: 404 Error Page

**What was chosen**:
- Custom 404.html page with consistent branding
- Clear message explaining page not found
- Navigation menu to main sections
- Link back to homepage
- Search functionality (optional, if site search exists)
- Humorous or engaging copy (optional, brand-appropriate)

**Rationale**:
- Meets FR-013 requirement
- Maintains user engagement when errors occur
- Provides clear path forward instead of dead end
- Consistent branding maintains professional appearance

**Alternatives considered**:
- Default server 404 page: Rejected - poor user experience, inconsistent branding
- Redirect all 404s to homepage: Rejected - confusing, loses context
- No 404 handling: Rejected - violates requirement

---

## Best Practices Summary

### HTML Best Practices
- Use semantic elements appropriately
- Maintain proper heading hierarchy (h1 → h2 → h3)
- Include all required meta tags (charset, viewport, description)
- Use meaningful link text (avoid "click here")
- Validate all HTML via W3C validator

### CSS Best Practices
- Use CSS custom properties for design tokens
- Follow BEM or similar naming convention for classes
- Mobile-first media queries
- Avoid `!important` unless absolutely necessary
- Comment complex CSS sections

### JavaScript Best Practices
- Use strict mode (`'use strict'`)
- Avoid global variables
- Handle errors gracefully
- Debounce/throttle expensive operations
- Test keyboard interactions

### Performance Best Practices
- Minimize HTTP requests (combine CSS/JS where logical)
- Compress images appropriately
- Use browser caching headers
- Avoid layout thrashing (read/write DOM separation)
- Profile with browser DevTools

---

## Open Questions Resolved

All technical unknowns from initial spec have been resolved through this research:

1. ✅ Multi-page architecture pattern selected
2. ✅ CSS organization strategy defined
3. ✅ Responsive breakpoints established
4. ✅ Color and typography approach documented
5. ✅ Navigation pattern chosen
6. ✅ Image optimization strategy specified
7. ✅ Accessibility implementation approach defined
8. ✅ Performance optimization tactics selected
9. ✅ JavaScript architecture pattern chosen
10. ✅ 404 page approach documented

**Status**: Phase 0 Complete - Ready for Phase 1 Design & Contracts
