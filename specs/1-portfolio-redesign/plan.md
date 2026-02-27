# Implementation Plan: Portfolio Website Redesign

**Branch**: `1-portfolio-redesign` | **Date**: 2026-02-27 | **Spec**: [spec.md](../002-portfolio-redesign/spec.md)
**Input**: Feature specification from `specs/002-portfolio-redesign/spec.md`

## Summary

Convert the personal portfolio from single-page to multi-page structure with separate pages for Bio, Skills, Experience, and Contact. Implement a modern, visually appealing design using vanilla HTML5, CSS3, and JavaScript (ES6+) while maintaining WCAG 2.1 AA accessibility, responsive design across all devices (320px-1920px), and performance budgets (<3s load time, <500KB page weight).

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript ES6+
**Primary Dependencies**: None (vanilla technologies only, no frameworks)
**Storage**: N/A (static website, no backend storage)
**Testing**: Manual browser testing, Lighthouse audits, W3C validators, accessibility testing tools
**Target Platform**: Web browsers (Chrome, Firefox, Safari, Edge - latest versions)
**Project Type**: Static multi-page website
**Performance Goals**: Page load <3 seconds, Lighthouse Performance ≥90, Lighthouse Accessibility ≥90
**Constraints**: <500KB total page weight, WCAG 2.1 AA compliance, mobile-first responsive design, no build tools
**Scale/Scope**: 4 main pages (Bio, Skills, Experience, Contact) + 404 error page, responsive across 320px-1920px

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Constitution Principle | Compliance Check | Status |
|------------------------|------------------|--------|
| **I. Simplicity First** | Vanilla HTML/CSS/JS only, no frameworks, no build tools. Static files at root level. | ✅ PASS |
| **II. Responsive Design** | Mobile-first CSS with breakpoints at 576px, 768px, 992px, 1200px, 1920px. Touch targets ≥44px. | ✅ PASS |
| **III. Accessibility Standards** | WCAG 2.1 AA, semantic HTML5, keyboard navigation, skip links, focus management, contrast ≥4.5:1. | ✅ PASS |
| **IV. Performance Budget** | Load <3s, weight <500KB, WebP images with fallbacks, lazy loading, critical CSS, deferred JS. | ✅ PASS |
| **V. Content-First Structure** | Clear hierarchy: Bio → Skills → Experience → Contact. Scannable within 30 seconds. | ✅ PASS |
| **VI. Professional Aesthetics** | Modern design with CSS custom properties, 8px grid system, 2 font max, subtle transitions. | ✅ PASS |

**Constitution Check Result**: ✅ ALL GATES PASSED (Post-Phase 1 Re-check Complete)

## Project Structure

### Documentation (this feature)

```text
specs/002-portfolio-redesign/
├── spec.md                # Feature specification
├── checklists/
│   └── requirements.md    # Specification quality checklist
└── ../1-portfolio-redesign/
    ├── plan.md            # This file (/sp.plan command output)
    ├── research.md        # Phase 0 output (to be generated)
    ├── data-model.md      # Phase 1 output (to be generated)
    ├── quickstart.md      # Phase 1 output (to be generated)
    └── contracts/         # Phase 1 output (to be generated)
```

### Source Code (repository root)

```text
personal-portfolio-redesign/
├── index.html             # Home/Bio page (entry point)
├── bio.html               # Bio/About page
├── skills.html            # Skills page
├── experience.html        # Experience page
├── contact.html           # Contact page
├── 404.html               # Custom 404 error page
├── css/
│   ├── variables.css      # CSS custom properties (colors, spacing, typography)
│   ├── base.css           # Base styles, resets, typography
│   ├── layout.css         # Layout components, grid, flexbox
│   ├── components.css     # Reusable UI components (buttons, cards, nav)
│   ├── responsive.css     # Media queries, mobile-first breakpoints
│   └── accessibility.css  # Focus states, skip links, high contrast
├── js/
│   ├── main.js            # Core functionality, navigation handling
│   ├── navigation.js      # Menu behavior, active state management
│   └── utils.js           # Utility functions, accessibility helpers
└── assets/
    ├── images/            # Optimized images (WebP with fallbacks)
    │   ├── hero/          # Hero section images
    │   ├── projects/      # Project screenshots
    │   └── icons/         # Icon files
    └── fonts/             # Custom fonts (if used, with system fallbacks)
```

**Structure Decision**: Single-level static website structure. All HTML files at root for simple deployment. CSS organized by concern (variables, base, layout, components, responsive, accessibility). JavaScript modularized by functionality. This structure supports the constitution's simplicity principle while enabling maintainable multi-page architecture.

## Development Phases

### Phase 0: Research & Design Decisions ✅ COMPLETE

**Artifacts**:
- [x] `research.md` - All technical unknowns resolved
- [x] Design decisions documented for: architecture, CSS, breakpoints, colors, navigation, images, accessibility, performance, JavaScript, 404 page

**Status**: Complete - All decisions documented with rationale and alternatives considered

---

### Phase 1: Design & Contracts ✅ COMPLETE

**Artifacts**:
- [x] `data-model.md` - Content entities and structure defined
- [x] `contracts/navigation-contract.md` - Navigation and interaction patterns
- [x] `quickstart.md` - Developer onboarding guide
- [x] Agent context updated

**Status**: Complete - Ready for implementation

---

### Phase 2: Implementation (TODO - `/sp.tasks` will create detailed tasks)

**Sprint 1: Foundation (Days 1-2)**
- [ ] Set up CSS design tokens in `variables.css`
- [ ] Create base styles and typography in `base.css`
- [ ] Build navigation component (HTML + CSS + JS)
- [ ] Implement mobile menu with accessibility

**Sprint 2: Core Pages (Days 3-5)**
- [ ] Create Bio page layout (`index.html`, `bio.html`)
- [ ] Create Skills page layout (`skills.html`)
- [ ] Create Experience page layout (`experience.html`)
- [ ] Create Contact page layout (`contact.html`)

**Sprint 3: Styling & Components (Days 6-8)**
- [ ] Build reusable components (cards, buttons, forms)
- [ ] Apply modern styling across all pages
- [ ] Implement responsive breakpoints
- [ ] Add hover/focus/active states

**Sprint 4: Accessibility & Performance (Days 9-10)**
- [ ] Add skip links and focus management
- [ ] Implement ARIA labels and roles
- [ ] Optimize images (WebP, srcset, lazy loading)
- [ ] Defer non-critical JavaScript
- [ ] Test keyboard navigation

**Sprint 5: Testing & Polish (Days 11-12)**
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Responsive testing (320px-1920px)
- [ ] Lighthouse audits (aim for ≥90 all categories)
- [ ] W3C validation (HTML, CSS)
- [ ] Fix bugs and edge cases
- [ ] Create 404 page

---

### Phase 3: Deployment & Documentation (TODO)

- [ ] Final content review and proofreading
- [ ] Deploy to staging environment
- [ ] User acceptance testing
- [ ] Deploy to production (GitHub Pages / Netlify / Vercel)
- [ ] Update README with deployment instructions
- [ ] Create PHR for implementation phase

---

## Implementation Strategy

### Approach: Incremental Multi-Page Development

1. **Start with Design System**: Define colors, typography, spacing in `variables.css` first
2. **Build Navigation**: Create reusable header/navigation component
3. **Develop One Page Completely**: Bio page as template, then duplicate pattern
4. **Apply Consistency**: Use same components across all pages
5. **Test Continuously**: Validate each page before moving to next

### Key Technical Decisions

- **CSS Architecture**: Modular files by concern (variables, base, layout, components, responsive, accessibility)
- **JavaScript Modules**: ES6 modules with `<script type="module">`
- **Image Strategy**: WebP with fallbacks, responsive images via srcset
- **Performance**: Critical CSS first, defer non-critical resources
- **Accessibility**: Built-in from start, not bolted on

### Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Scope creep (adding features) | Medium | Stick to spec requirements, defer enhancements to future phases |
| Performance budget exceeded | Medium | Optimize images early, monitor page weight continuously |
| Accessibility gaps | High | Test with screen reader early, use automated tools (axe, WAVE) |
| Browser compatibility issues | Medium | Test on all target browsers throughout development |
| Inconsistent design across pages | Low | Use CSS custom properties and component library |

---

## Testing Strategy

### Manual Testing

**Browser Testing**:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**Device Testing**:
- Mobile: 320px, 375px, 414px widths
- Tablet: 768px, 1024px widths
- Desktop: 1440px, 1920px widths

**Accessibility Testing**:
- Keyboard navigation (Tab through all interactive elements)
- Screen reader test (NVDA or VoiceOver)
- Color contrast checker
- Automated tools: axe DevTools, WAVE

### Automated Testing

**Lighthouse Audits** (target scores ≥90):
- Performance
- Accessibility
- Best Practices
- SEO
- PWA (if applicable)

**Validation**:
- W3C HTML Validator
- W3C CSS Validator
- Link checker (no broken links)

### Acceptance Testing

Map tests to spec requirements:

| Spec Requirement | Test Method | Pass Criteria |
|-----------------|-------------|---------------|
| FR-001: Multi-page structure | Manual navigation | All 4 pages exist and accessible |
| FR-002: Navigation menu | Visual inspection | Menu on all pages, all links work |
| FR-003: Current page indication | Visual inspection | Active page highlighted |
| FR-006: WCAG 2.1 AA | axe DevTools, manual audit | 0 critical issues, ≥90 score |
| FR-007: Load <3s | Lighthouse Performance | Load time <3s on 10Mbps |
| FR-008: Weight <500KB | Lighthouse, DevTools Network | Total weight <500KB |
| SC-005: Keyboard navigation | Manual test | All elements reachable via Tab |
| SC-006: Responsive 320-1920px | DevTools responsive mode | No horizontal scroll, content readable |

---

## Deliverables

### Code Deliverables

- [ ] `index.html` - Bio/Home page
- [ ] `bio.html` - Bio page (if separate from index)
- [ ] `skills.html` - Skills page
- [ ] `experience.html` - Experience page
- [ ] `contact.html` - Contact page
- [ ] `404.html` - Custom 404 error page
- [ ] `css/variables.css` - Design tokens
- [ ] `css/base.css` - Base styles
- [ ] `css/layout.css` - Layout components
- [ ] `css/components.css` - UI components
- [ ] `css/responsive.css` - Media queries
- [ ] `css/accessibility.css` - Accessibility styles
- [ ] `js/main.js` - Core JavaScript
- [ ] `js/navigation.js` - Navigation logic
- [ ] `js/utils.js` - Utility functions
- [ ] Optimized images in `assets/images/`

### Documentation Deliverables

- [x] `spec.md` - Feature specification
- [x] `plan.md` - This implementation plan
- [x] `research.md` - Design decisions
- [x] `data-model.md` - Content structure
- [x] `quickstart.md` - Developer guide
- [x] `contracts/navigation-contract.md` - Interaction patterns
- [ ] `tasks.md` - Detailed implementation tasks (via `/sp.tasks`)
- [ ] PHR for implementation phase

### Quality Deliverables

- [ ] Lighthouse scores ≥90 (Performance, Accessibility, Best Practices)
- [ ] W3C HTML validation: 0 errors
- [ ] W3C CSS validation: 0 errors
- [ ] WCAG 2.1 AA compliance verified
- [ ] Cross-browser tested
- [ ] Responsive tested (320px-1920px)

---

## Success Metrics

**Definition of Done**:

1. ✅ All pages implemented and functional
2. ✅ Navigation works across all pages
3. ✅ Responsive on all screen sizes (320px-1920px)
4. ✅ WCAG 2.1 AA compliant (verified by tools + manual test)
5. ✅ Lighthouse Performance ≥90
6. ✅ Lighthouse Accessibility ≥90
7. ✅ Total page weight <500KB per page
8. ✅ Page load <3 seconds on 10Mbps connection
9. ✅ All functional requirements met (FR-001 to FR-015)
10. ✅ All success criteria verified (SC-001 to SC-010)

---

**Plan Status**: ✅ Phase 0 & 1 Complete | 🔄 Ready for `/sp.tasks` to create implementation tasks
