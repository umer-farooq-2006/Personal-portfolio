# Tasks: Portfolio Website Redesign

**Feature**: 002-portfolio-redesign  
**Branch**: `1-portfolio-redesign`  
**Input**: Design documents from `specs/1-portfolio-redesign/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, contracts/ ✅  

**Tests**: Tests are OPTIONAL for this feature - manual testing and Lighthouse audits will be used instead of automated test suites.

**Organization**: Tasks are organized by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4, US5)
- Include exact file paths in descriptions

## Path Conventions

Static website structure - all paths relative to repository root:
- HTML files at root level
- CSS in `css/` directory
- JavaScript in `js/` directory
- Assets in `assets/` directory

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 [P] Create CSS directory structure: `css/variables.css`, `css/base.css`, `css/layout.css`, `css/components.css`, `css/responsive.css`, `css/accessibility.css`
- [ ] T002 [P] Create JavaScript directory structure: `js/main.js`, `js/navigation.js`, `js/utils.js`
- [ ] T003 [P] Create assets directory structure: `assets/images/`, `assets/fonts/`
- [ ] T004 [P] Create HTML page files: `index.html`, `bio.html`, `skills.html`, `experience.html`, `contact.html`, `404.html`
- [ ] T005 [P] Add meta tags template to all HTML files (charset, viewport, title, description)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 [P] Define CSS custom properties in `css/variables.css`: color palette, typography scale, spacing units (8px grid)
- [ ] T007 [P] Create base styles in `css/base.css`: CSS reset, typography defaults, base element styles
- [ ] T008 [P] Implement navigation HTML structure in all pages (header with nav menu, mobile hamburger button)
- [ ] T009 [P] Create navigation CSS in `css/components.css`: desktop menu layout, mobile menu styles
- [ ] T010 Implement mobile menu JavaScript in `js/navigation.js`: toggle functionality, aria-expanded management, escape key handling
- [ ] T011 [P] Add active page detection script in `js/main.js`: highlight current page in navigation
- [ ] T012 [P] Create footer component in all pages with consistent structure

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Navigate Between Pages (Priority: P1) 🎯 MVP

**Goal**: Implement functional navigation system connecting all pages with clear wayfinding

**Independent Test**: Verify all navigation links work correctly across all pages and users can reach any page from any other page within 2 clicks

### Implementation for User Story 1

- [ ] T013 [P] [US1] Create navigation links in `index.html`: links to Bio, Skills, Experience, Contact pages
- [ ] T014 [P] [US1] Create navigation links in `bio.html`: links to all other pages
- [ ] T015 [P] [US1] Create navigation links in `skills.html`: links to all other pages
- [ ] T016 [P] [US1] Create navigation links in `experience.html`: links to all other pages
- [ ] T017 [P] [US1] Create navigation links in `contact.html`: links to all other pages
- [ ] T018 [P] [US1] Create navigation links in `404.html`: links back to main pages
- [ ] T019 [US1] Implement current page indicator in `css/components.css`: visual styling for active navigation link
- [ ] T020 [US1] Add breadcrumb navigation to `bio.html`, `skills.html`, `experience.html`, `contact.html`
- [ ] T021 [US1] Test all navigation links manually: verify each link navigates to correct page within 3 seconds
- [ ] T022 [US1] Test current page indication: verify active page is visually highlighted on all pages

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently - users can navigate between all pages

---

## Phase 4: User Story 2 - View Modern, Visually Appealing Design (Priority: P1) 🎯 MVP

**Goal**: Apply modern, stylish visual design across all pages with consistent typography, color scheme, and spacing

**Independent Test**: Evaluate visual design elements against contemporary design standards - all pages should appear modern and professionally styled with consistent visual language

### Implementation for User Story 2

- [ ] T023 [P] [US2] Define modern color palette in `css/variables.css`: primary, secondary, accent colors, neutral grays
- [ ] T024 [P] [US2] Define typography system in `css/variables.css`: font families (max 2), font sizes (modular scale), font weights
- [ ] T025 [P] [US2] Create hero section styles in `css/layout.css`: hero container, heading styles, hero image styling
- [ ] T026 [P] [US2] Create card component styles in `css/components.css`: card container, image area, content area, hover effects
- [ ] T027 [P] [US2] Create button styles in `css/components.css`: primary, secondary, large, small variants with hover/focus states
- [ ] T028 [P] [US2] Create section spacing utilities in `css/layout.css`: consistent padding/margin using 8px grid
- [ ] T029 [US2] Apply hero section to `index.html` and `bio.html` with modern styling
- [ ] T030 [US2] Create skills display layout in `skills.html`: skill categories, proficiency indicators, modern card design
- [ ] T031 [US2] Create experience timeline layout in `experience.html`: timeline items, date badges, achievement cards
- [ ] T032 [US2] Create contact page layout in `contact.html`: contact info cards, social links styling
- [ ] T033 [US2] Add subtle transitions in `css/components.css`: hover effects, smooth color transitions (0.2-0.3s)
- [ ] T034 [US2] Test visual consistency: verify all pages share same color palette, typography, spacing
- [ ] T035 [US2] Test modern aesthetic: verify design appears contemporary (not plain/generic) on all pages

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently - navigation functional AND modern design applied

---

## Phase 5: User Story 3 - Access Content on Any Device (Priority: P2)

**Goal**: Implement responsive design that adapts to all screen sizes from 320px to 1920px

**Independent Test**: View website on multiple screen sizes (320px to 1920px width) and verify all content is readable without horizontal scrolling and interactive elements are usable

### Implementation for User Story 3

- [ ] T036 [P] [US3] Create mobile-first base styles in `css/responsive.css`: base styles for 320px minimum width
- [ ] T037 [P] [US3] Add breakpoint at 576px in `css/responsive.css`: large phones optimization
- [ ] T038 [P] [US3] Add breakpoint at 768px in `css/responsive.css`: tablet layout adjustments
- [ ] T039 [P] [US3] Add breakpoint at 992px in `css/responsive.css`: small laptop/desktop layout
- [ ] T040 [P] [US3] Add breakpoint at 1200px in `css/responsive.css`: desktop optimization
- [ ] T041 [P] [US3] Add breakpoint at 1920px in `css/responsive.css`: large screen max-width container
- [ ] T042 [US3] Make navigation responsive: hamburger menu below 768px, horizontal menu at 768px+
- [ ] T043 [US3] Make hero section responsive: adjust font sizes, image sizes, padding per breakpoint
- [ ] T044 [US3] Make cards responsive: single column on mobile, multi-column grid on tablet/desktop
- [ ] T045 [US3] Make timeline responsive: vertical timeline on mobile, optimized layout on desktop
- [ ] T046 [US3] Make contact section responsive: stack contact methods on mobile, grid on desktop
- [ ] T047 [US3] Ensure touch targets are minimum 44x44 pixels in `css/components.css`
- [ ] T048 [US3] Test responsive design at 320px, 375px, 768px, 1024px, 1440px, 1920px widths
- [ ] T049 [US3] Verify no horizontal scrolling at any breakpoint
- [ ] T050 [US3] Verify all interactive elements are usable on mobile touch screens

**Checkpoint**: At this point, User Stories 1, 2, and 3 should all work independently - responsive on all devices

---

## Phase 6: User Story 4 - Access Content with Disabilities (Priority: P2)

**Goal**: Implement WCAG 2.1 AA accessibility compliance for all content and interactive elements

**Independent Test**: Test using screen readers, keyboard-only navigation, and automated accessibility tools to verify WCAG 2.1 AA compliance

### Implementation for User Story 4

- [ ] T051 [P] [US4] Add skip-to-content link in `index.html`, `bio.html`, `skills.html`, `experience.html`, `contact.html`
- [ ] T052 [P] [US4] Create focus styles in `css/accessibility.css`: visible 3px outline for all focusable elements
- [ ] T053 [P] [US4] Add ARIA labels to navigation in all pages: `aria-label="Main navigation"`
- [ ] T054 [P] [US4] Add ARIA attributes to mobile menu: `aria-expanded`, `aria-controls`
- [ ] T055 [US4] Add semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] T056 [US4] Add heading hierarchy: proper h1 → h2 → h3 structure on all pages
- [ ] T057 [US4] Add alt text to all images in HTML: descriptive, meaningful alternative text
- [ ] T058 [US4] Add labels to all form inputs in `contact.html`: explicit `<label>` elements with `for` attributes
- [ ] T059 [US4] Add form error messages with `role="alert"` and `aria-describedby` in `contact.html`
- [ ] T060 [US4] Ensure color contrast meets WCAG AA: 4.5:1 for normal text, 3:1 for large text
- [ ] T061 [US4] Test keyboard navigation: Tab through all interactive elements on all pages
- [ ] T062 [US4] Test with screen reader (NVDA or VoiceOver): verify all content is properly announced
- [ ] T063 [US4] Run axe DevTools audit: verify 0 critical accessibility issues
- [ ] T064 [US4] Verify all functionality works with JavaScript disabled (core content accessible)

**Checkpoint**: At this point, User Stories 1-4 should all work independently - WCAG 2.1 AA compliant

---

## Phase 7: User Story 5 - Experience Fast Page Loading (Priority: P3)

**Goal**: Optimize performance to meet <3 second load time and <500KB page weight budgets

**Independent Test**: Use performance measurement tools to verify page load times under 3 seconds and total page weight under 500KB

### Implementation for User Story 5

- [ ] T065 [P] [US5] Optimize images: convert to WebP format with JPEG/PNG fallbacks using `<picture>` element
- [ ] T066 [P] [US5] Add responsive images with `srcset` and `sizes` attributes for all images
- [ ] T067 [P] [US5] Add `loading="lazy"` attribute to below-fold images
- [ ] T068 [P] [US5] Add critical CSS inlining or preloading in `<head>` of all HTML files
- [ ] T069 [P] [US5] Add `defer` attribute to all `<script>` tags
- [ ] T070 [P] [US5] Preload key resources: fonts, hero images using `<link rel="preload">`
- [ ] T071 [US5] Minimize DOM depth: verify <1500 nodes and <60 depth on all pages
- [ ] T072 [US5] Compress images to 80-85% quality for photos, use SVG for icons/graphics
- [ ] T073 [US5] Test page load time with Lighthouse: verify <3 seconds on 10Mbps connection
- [ ] T074 [US5] Test page weight with DevTools Network: verify <500KB total per page
- [ ] T075 [US5] Run Lighthouse Performance audit: verify score ≥90

**Checkpoint**: All user stories (1-5) should now be independently functional - performance optimized

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality assurance

- [ ] T076 [P] Create custom 404 page in `404.html`: branded error message, navigation links back to main pages
- [ ] T077 [P] Add favicon to all pages in `<head>` section
- [ ] T078 [P] Add Open Graph meta tags for social sharing in all pages
- [ ] T079 [P] Add structured data (JSON-LD) for person schema in `index.html`
- [ ] T080 [US1] Test edge case: navigation behavior during page load
- [ ] T081 [US2] Test edge case: image load failures (verify alt text and fallback styling)
- [ ] T082 [US4] Test edge case: contact form submission failure (error handling and retry option)
- [ ] T083 Cross-browser testing: Chrome, Firefox, Safari, Edge (latest versions)
- [ ] T084 Responsive testing: verify all breakpoints (320px, 375px, 768px, 1024px, 1440px, 1920px)
- [ ] T085 Run Lighthouse audits on all pages: Performance ≥90, Accessibility ≥90, Best Practices ≥90
- [ ] T086 W3C HTML validation: verify 0 errors on all pages
- [ ] T087 W3C CSS validation: verify 0 errors
- [ ] T088 Fix any bugs and edge cases discovered during testing
- [ ] T089 Content review: proofread all text for grammar, spelling, clarity
- [ ] T090 Update quickstart.md with final deployment instructions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Independent but integrates with US1
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - Depends on US2 design being applied
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Independent, can parallelize with US3
- **User Story 5 (P3)**: Can start after US2 (design complete) - Optimization layer on top

### Within Each User Story

- Models/entities before services/utilities
- Core implementation before integration
- Story complete before moving to next priority
- Stop at checkpoint to validate independently

### Parallel Opportunities

**Phase 1 (Setup)**:
- T001, T002, T003, T004, T005 can all run in parallel (different files)

**Phase 2 (Foundational)**:
- T006, T007, T008, T009 can run in parallel
- T010, T011, T012 depend on T008, T009 completion

**Phase 3 (US1)**:
- T013, T014, T015, T016, T017, T018 can all run in parallel (different HTML files)
- T019, T020, T021, T022 must be sequential after navigation links created

**Phase 4 (US2)**:
- T023, T024, T025, T026, T027, T028 can all run in parallel (different CSS files/sections)
- T029, T030, T031, T032 can run in parallel (different HTML pages)

**Phase 5 (US3)**:
- T036, T037, T038, T039, T040, T041 can run in parallel (different breakpoints in same file - coordinate)
- T042, T043, T044, T045, T046 can run in parallel (different components)

**Phase 6 (US4)**:
- T051, T052, T053, T054 can run in parallel (different files/aspects)
- T055, T056, T057, T058, T059 can run in parallel (different HTML elements)

**Phase 7 (US5)**:
- T065, T066, T067, T068, T069, T070 can all run in parallel (different optimization techniques)

---

## Parallel Example: User Story 1

```bash
# Launch all navigation link creation tasks together:
Task: "T013 [P] [US1] Create navigation links in index.html"
Task: "T014 [P] [US1] Create navigation links in bio.html"
Task: "T015 [P] [US1] Create navigation links in skills.html"
Task: "T016 [P] [US1] Create navigation links in experience.html"
Task: "T017 [P] [US1] Create navigation links in contact.html"
Task: "T018 [P] [US1] Create navigation links in 404.html"

# These can be assigned to different developers simultaneously
```

---

## Parallel Example: User Story 2

```bash
# Launch all CSS design tasks together:
Task: "T023 [P] [US2] Define modern color palette in css/variables.css"
Task: "T024 [P] [US2] Define typography system in css/variables.css"
Task: "T025 [P] [US2] Create hero section styles in css/layout.css"
Task: "T026 [P] [US2] Create card component styles in css/components.css"
Task: "T027 [P] [US2] Create button styles in css/components.css"
Task: "T028 [P] [US2] Create section spacing utilities in css/layout.css"

# Then launch page styling tasks in parallel:
Task: "T029 [US2] Apply hero section to index.html and bio.html"
Task: "T030 [US2] Create skills display layout in skills.html"
Task: "T031 [US2] Create experience timeline layout in experience.html"
Task: "T032 [US2] Create contact page layout in contact.html"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2 Only)

1. Complete Phase 1: Setup (5 tasks)
2. Complete Phase 2: Foundational (7 tasks) - **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 - Navigation (10 tasks)
4. Complete Phase 4: User Story 2 - Modern Design (13 tasks)
5. **STOP and VALIDATE**: Test navigation and visual design independently
6. Deploy MVP if ready - functional multi-page site with modern design

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Navigation works across all pages
3. Add User Story 2 → Test independently → Modern design applied (MVP!)
4. Add User Story 3 → Test independently → Responsive on all devices
5. Add User Story 4 → Test independently → WCAG 2.1 AA compliant
6. Add User Story 5 → Test independently → Performance optimized
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (Navigation)
   - Developer B: User Story 2 (Design)
   - Developer C: User Story 3 (Responsive) - after US2
   - Developer D: User Story 4 (Accessibility) - can parallelize with US3
3. Single developer or after main stories: User Story 5 (Performance)
4. Team reunites for Phase 8: Polish & Cross-Cutting Concerns

---

## Task Summary

**Total Tasks**: 90 tasks

**By Phase**:
- Phase 1 (Setup): 5 tasks
- Phase 2 (Foundational): 7 tasks
- Phase 3 (US1 - Navigation): 10 tasks
- Phase 4 (US2 - Design): 13 tasks
- Phase 5 (US3 - Responsive): 15 tasks
- Phase 6 (US4 - Accessibility): 14 tasks
- Phase 7 (US5 - Performance): 11 tasks
- Phase 8 (Polish): 15 tasks

**By User Story**:
- US1 (P1): 10 tasks - Navigate Between Pages
- US2 (P1): 13 tasks - Modern Visual Design
- US3 (P2): 15 tasks - Responsive Design
- US4 (P2): 14 tasks - Accessibility (WCAG 2.1 AA)
- US5 (P3): 11 tasks - Performance Optimization

**Parallel Opportunities**:
- Setup phase: 5/5 tasks parallelizable
- Foundational phase: 4/7 tasks parallelizable
- User Story phases: ~40% parallelizable within each story
- Cross-story parallelization: All stories can proceed in parallel after Foundational phase

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Manual testing approach instead of automated tests (per spec)
- Lighthouse audits replace automated performance tests
- Accessibility testing via manual + axe DevTools (no automated test suite)

---

**Tasks Status**: ✅ Ready for implementation - all tasks defined with clear file paths and dependencies
