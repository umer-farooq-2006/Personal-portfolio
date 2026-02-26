# Implementation Plan: Personal Portfolio Website

**Branch**: `001-portfolio-website` | **Date**: 2026-02-26 | **Spec**: [specify.md](./specify.md)
**Input**: Feature specification from `/specs/001-portfolio-website/specify.md`

## Summary

Build a single-page personal portfolio website using vanilla HTML5, CSS3, and JavaScript (ES6+) to showcase professional background for internship submission and recruiter engagement. The site will feature four main sections (Bio, Skills, Experience, Contact) with responsive design, accessibility compliance, and smooth navigation interactions.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+
**Primary Dependencies**: None (vanilla technologies only)
**Storage**: N/A (static website, no persistent storage)
**Testing**: Manual browser testing, Lighthouse audits
**Target Platform**: All modern browsers (Chrome, Firefox, Safari, Edge)
**Project Type**: Single-page static website
**Performance Goals**: 
- Page load < 3 seconds on 4G
- Total page weight < 500KB
- Lighthouse Performance ≥ 90
**Constraints**:
- No build tools or bundlers
- No external frameworks (React, Bootstrap, etc.)
- Must work without JavaScript (progressive enhancement)
- Mobile-first responsive design required
**Scale/Scope**: 
- Single HTML file
- 3-5 CSS files (organized by concern)
- 1-2 JavaScript files
- 4 content sections + header/footer

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Constitution Principle | Compliance Plan | Status |
|------------------------|-----------------|--------|
| **I. Simplicity First** | Vanilla HTML/CSS/JS only, no frameworks, no build tools | ✅ PASS |
| **II. Responsive Design** | Mobile-first CSS with media queries at 768px, 1024px breakpoints | ✅ PASS |
| **III. Accessibility Standards** | Semantic HTML5, WCAG 2.1 AA compliance, keyboard navigation, 4.5:1 contrast | ✅ PASS |
| **IV. Performance Budget** | < 500KB total, inline critical CSS, defer non-critical JS, optimized images | ✅ PASS |
| **V. Content-First Structure** | Bio → Skills → Experience → Contact hierarchy, scannable sections | ✅ PASS |
| **VI. Professional Aesthetics** | 3-color max palette, 8px grid system, 2 font families max, hover states | ✅ PASS |

**GATE RESULT**: ✅ PASS - All constitution principles satisfied. Proceed to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-website/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
personal-portfolio/
├── index.html           # Main single-page document
├── css/
│   ├── variables.css    # CSS custom properties (colors, spacing, fonts)
│   ├── reset.css        # CSS reset and base styles
│   ├── layout.css       # Grid, flexbox, section layouts
│   ├── components.css   # Reusable components (nav, cards, buttons)
│   └── responsive.css   # Media queries for tablet/desktop
├── js/
│   ├── main.js          # Core functionality (smooth scroll, active section)
│   └── utils.js         # Helper functions (debounce, throttle)
├── assets/
│   ├── images/          # Profile photo, project screenshots (WebP + fallback)
│   ├── icons/           # SVG icons for social media, skills
│   └── fonts/           # Custom fonts (if used, with system fallbacks)
└── docs/
    └── constitution.md  # Project constitution
```

**Structure Decision**: Single project structure chosen. No backend or mobile app required. All files serve directly from static hosting.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

No violations detected. All constitution principles satisfied with straightforward approach.

---

## Phase 0: Research & Technical Decisions

### Research Topics Identified

1. **Mobile-first CSS strategy** - Best practices for responsive breakpoints
2. **Smooth scroll implementation** - Native CSS vs JavaScript approaches
3. **Accessibility patterns** - WCAG 2.1 AA compliance for single-page sites
4. **Performance optimization** - Critical CSS, lazy loading, image optimization
5. **CSS architecture** - Organizing styles without frameworks

### Research Findings

See [`research.md`](./research.md) for detailed findings on:
- CSS custom properties for theming
- Intersection Observer API for scroll detection
- Semantic HTML5 landmark elements
- Image optimization strategies (WebP with fallbacks)
- CSS Grid vs Flexbox for layouts

---

## Phase 1: Design & Contracts

### Content Model

See [`data-model.md`](./data-model.md) for:
- Content section structure
- Data attributes for JavaScript hooks
- Validation rules for contact information

### API Contracts

N/A - Static website with no backend API. All content is hardcoded in HTML.

### Quick Start

See [`quickstart.md`](./quickstart.md) for:
- Development environment setup
- Local server instructions
- Browser testing checklist

### Agent Context Update

Agent context updated with vanilla web technologies (HTML5, CSS3, ES6+ JavaScript) and mobile-first responsive design patterns.

---

## Implementation Strategy

### Development Approach

**Mobile-First Progressive Enhancement**:
1. Start with semantic HTML structure (works without CSS/JS)
2. Add mobile-optimized base styles
3. Enhance with tablet/desktop media queries
4. Layer JavaScript interactions on top

**Single-Page Architecture**:
- All content in one HTML file
- Navigation uses anchor links (`#bio`, `#skills`, etc.)
- JavaScript enhances with smooth scrolling and active section highlighting
- URL hash updates enable direct linking to sections

**Separation of Concerns**:
- **HTML**: Semantic structure, content hierarchy, accessibility landmarks
- **CSS**: Visual presentation, responsive layouts, theming via custom properties
- **JavaScript**: Behavioral enhancements (scroll, navigation, interactions)

---

## Development Phases

### Phase 1 – Project Setup

**Estimated Time**: 1-2 hours

- [ ] Create folder structure (`css/`, `js/`, `assets/`)
- [ ] Create `index.html` with HTML5 boilerplate
- [ ] Add meta tags (viewport, description, charset)
- [ ] Create `css/variables.css` with CSS custom properties:
  - Color palette (primary, secondary, accent, background, text)
  - Spacing scale (4px, 8px, 16px, 24px, 32px, 48px)
  - Typography (font families, sizes, line heights)
  - Breakpoints (mobile: 320px, tablet: 768px, desktop: 1024px)
- [ ] Create `css/reset.css` with:
  - CSS reset (box-sizing, margins, padding)
  - Base typography styles
  - Link styles
- [ ] Link all CSS files in HTML `<head>`
- [ ] Create `js/main.js` with `'use strict'` directive
- [ ] Link JavaScript file before closing `</body>` tag

**Dependencies**: None (starting point)

---

### Phase 2 – Core Structure

**Estimated Time**: 3-4 hours

- [ ] **Header & Navigation**:
  - `<header>` element with site title/name
  - `<nav>` with unordered list of links to sections
  - Anchor links: `#bio`, `#skills`, `#experience`, `#contact`
  - Add `data-nav` attribute for JavaScript hooks

- [ ] **Bio Section** (`<section id="bio">`):
  - `<h1>` or `<h2>` heading
  - Profile image (optional, with alt text)
  - 2-3 paragraph introduction
  - Key highlights or summary

- [ ] **Skills Section** (`<section id="skills">`):
  - `<h2>` heading
  - Categorized skill lists (Technical, Professional, Tools)
  - Use `<ul>` or visual skill cards
  - Add `data-skill` attributes for potential filtering

- [ ] **Experience Section** (`<section id="experience">`):
  - `<h2>` heading
  - Timeline or card-based layout
  - For each position: company, role, dates, 3-5 bullet points
  - Use `<article>` or `<div>` with semantic structure

- [ ] **Contact Section** (`<section id="contact">`):
  - `<h2>` heading
  - Email address (mailto: link)
  - Social media links (LinkedIn, GitHub, etc.)
  - Optional: simple contact form (requires backend or form service)

- [ ] **Footer** (`<footer>`):
  - Copyright notice
  - Social media icon links
  - Back-to-top link (optional)

**Dependencies**: Phase 1 complete (HTML/CSS setup)

---

### Phase 3 – Responsive Design

**Estimated Time**: 3-4 hours

- [ ] **Mobile Layout** (base styles, 320px - 767px):
  - Single-column layout
  - Stacked navigation (hamburger menu optional)
  - Readable font sizes (minimum 16px body)
  - Touch-friendly tap targets (44x44px minimum)
  - Adequate spacing between sections

- [ ] **Tablet Adjustments** (`@media (min-width: 768px)`):
  - Two-column layouts where appropriate
  - Side-by-side skill categories
  - Timeline adjustments for experience section
  - Navigation expands to horizontal

- [ ] **Desktop Refinement** (`@media (min-width: 1024px)`):
  - Maximum content width container (1200px)
  - Multi-column layouts
  - Enhanced whitespace and padding
  - Hover states for interactive elements
  - Fixed or sticky navigation (optional)

- [ ] **Media Query Strategy**:
  - Use `min-width` for mobile-first approach
  - Test at breakpoints: 320px, 768px, 1024px, 1920px
  - Use relative units (rem, em, %) over fixed pixels
  - Fluid typography with `clamp()` function (optional)

**Dependencies**: Phase 2 complete (core HTML structure)

---

### Phase 4 – Interactivity (JavaScript)

**Estimated Time**: 2-3 hours

- [ ] **Smooth Scrolling**:
  - CSS: `html { scroll-behavior: smooth; }` (modern browsers)
  - JavaScript fallback for older browsers:
    - Intercept navigation link clicks
    - Use `scrollIntoView({ behavior: 'smooth' })`
    - Update URL hash without jumping

- [ ] **Active Section Highlighting**:
  - Use Intersection Observer API to detect visible section
  - Update navigation link classes (`.active`) based on current section
  - Debounce scroll events for performance

- [ ] **Navigation Behavior**:
  - Handle mobile menu toggle (if hamburger menu used)
  - Close mobile menu on link click
  - Add scroll listener to hide/show header on scroll (optional)

- [ ] **Optional Enhancements**:
  - Reveal animations on scroll (CSS classes + Intersection Observer)
  - Typing animation for bio section
  - Skill bar animations
  - Back-to-top button visibility toggle

**Dependencies**: Phase 3 complete (responsive CSS)

---

### Phase 5 – Accessibility & Optimization

**Estimated Time**: 2-3 hours

- [ ] **Semantic HTML Validation**:
  - Run W3C HTML validator
  - Fix all errors and warnings
  - Verify heading hierarchy (h1 → h2 → h3)
  - Check landmark regions (header, nav, main, section, footer)

- [ ] **Keyboard Navigation Testing**:
  - Tab through all interactive elements
  - Verify focus order matches visual order
  - Ensure focus indicators are visible
  - Test all links and buttons with Enter/Space

- [ ] **Contrast Check**:
  - Use WebAIM Contrast Checker or similar
  - Verify all text meets 4.5:1 ratio (normal text)
  - Verify large text meets 3:1 ratio
  - Check interactive element contrast (3:1 minimum)

- [ ] **Performance Optimization**:
  - Run Lighthouse audit
  - Optimize images (compress, convert to WebP)
  - Remove unused CSS rules
  - Minify CSS/JS (optional, keep readable for learning)
  - Add `loading="lazy"` to below-fold images

- [ ] **Cross-Browser Testing**:
  - Test on Chrome, Firefox, Safari, Edge (latest versions)
  - Test on iOS Safari and Android Chrome
  - Verify smooth scroll works across browsers
  - Check CSS Grid/Flexbox compatibility

**Dependencies**: Phase 4 complete (JavaScript functionality)

---

## Dependencies

### Task Dependencies

```
Phase 1 (Setup)
    ↓
Phase 2 (Core Structure)
    ↓
Phase 3 (Responsive Design)
    ↓
Phase 4 (Interactivity)
    ↓
Phase 5 (Accessibility & Optimization)
```

### Feature Dependencies on JavaScript

| Feature | Requires JavaScript | Fallback Without JS |
|---------|---------------------|---------------------|
| Smooth scrolling | Yes (for older browsers) | Browser default (instant jump) |
| Active section highlighting | Yes | None (visual only) |
| Mobile menu toggle | Yes (if implemented) | CSS-only checkbox hack alternative |
| Scroll animations | Yes | Content still visible |
| Navigation | No | Anchor links work natively |

**Progressive Enhancement Principle**: All core content accessible without JavaScript. JavaScript enhances experience but is not required.

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|------------|--------|---------------------|
| **Layout breaking on small screens** | Medium | High | Test early at 320px, use flexible units, avoid fixed widths, use CSS Grid for robust layouts |
| **JS scroll behavior inconsistencies** | Medium | Medium | Use CSS `scroll-behavior: smooth` as primary, JS as fallback. Test on all target browsers. |
| **Over-scoping beyond internship requirement** | High | Medium | Stick to 4 required sections. Document nice-to-haves for later. Time-box each phase. |
| **Accessibility non-compliance** | Medium | High | Build semantic HTML from start. Use automated tools (WAVE, axe). Manual keyboard testing. |
| **Performance budget exceeded** | Low | Medium | Optimize images before adding. Limit custom fonts. Inline critical CSS. |
| **Browser compatibility issues** | Medium | Medium | Use Can I Use for feature support. Provide fallbacks. Test on multiple browsers early. |

---

## Testing Strategy

### Manual Testing Plan

**Functional Testing**:
- [ ] All navigation links scroll to correct sections
- [ ] All external links open correctly
- [ ] Contact information is accurate and functional
- [ ] No JavaScript console errors

**Responsive Testing Breakpoints**:
- [ ] Mobile: 320px (iPhone SE), 375px (iPhone 12), 414px (iPhone 14 Pro Max)
- [ ] Tablet: 768px (iPad), 1024px (iPad Pro)
- [ ] Desktop: 1366px (laptop), 1920px (desktop)

**Browser Testing Scope**:
- [ ] Chrome (latest) - Windows, macOS
- [ ] Firefox (latest) - Windows, macOS
- [ ] Safari (latest) - macOS, iOS
- [ ] Edge (latest) - Windows
- [ ] Android Chrome (latest) - Android device or emulator

### Final Review Checklist

**Content**:
- [ ] No spelling or grammar errors
- [ ] All placeholder content replaced with real information
- [ ] Images have descriptive alt text
- [ ] Contact information is current and accurate

**Technical**:
- [ ] HTML passes W3C validator
- [ ] No console errors or warnings
- [ ] All links functional (internal and external)
- [ ] Favicon present and displays correctly

**Accessibility**:
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader can navigate content logically

**Performance**:
- [ ] Lighthouse Performance score ≥ 90
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] Page load < 3 seconds on 4G
- [ ] Total page weight < 500KB

---

## Deliverables

### Files to be Created

1. **`index.html`** - Main single-page document with:
   - Semantic HTML5 structure
   - All content sections (Bio, Skills, Experience, Contact)
   - Proper meta tags and accessibility attributes

2. **CSS Files**:
   - `css/variables.css` - CSS custom properties
   - `css/reset.css` - CSS reset and base styles
   - `css/layout.css` - Section layouts and grid systems
   - `css/components.css` - Reusable UI components
   - `css/responsive.css` - Media queries

3. **JavaScript Files**:
   - `js/main.js` - Core functionality (smooth scroll, active section)
   - `js/utils.js` - Helper functions (if needed)

4. **Assets**:
   - Optimized images in `assets/images/`
   - SVG icons in `assets/icons/`
   - Custom fonts in `assets/fonts/` (if used)

### Ready-to-Deploy Static Website

**Deployment Options**:
- GitHub Pages (recommended for internship submission)
- Netlify (drag-and-drop deployment)
- Vercel (automatic deployments from Git)
- Traditional web hosting (FTP upload)

**Final Deliverable**: A fully functional, responsive, accessible personal portfolio website ready for public deployment and internship submission.

---

## Next Steps

1. ✅ **Complete**: This implementation plan (`plan.md`)
2. ⏳ **Next**: Generate research documentation (`research.md`)
3. ⏳ **Next**: Create content model (`data-model.md`)
4. ⏳ **Next**: Write quickstart guide (`quickstart.md`)
5. ⏳ **Then**: Break down into implementation tasks (`tasks.md` via `/sp.tasks`)
