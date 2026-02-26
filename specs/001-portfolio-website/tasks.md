# Tasks – Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Input**: Design documents from `/specs/001-portfolio-website/`  
**Prerequisites**: plan.md ✅, spec.md ✅, research.md ✅, data-model.md ✅, quickstart.md ✅

**Tests**: Tests are OPTIONAL for this feature. Manual testing plan included in plan.md.  
**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., [US1], [US2], [US3])
- Include exact file paths in descriptions

## Path Conventions

Single-page static website with files at repository root:
- `index.html` - Main document
- `css/` - Stylesheets
- `js/` - JavaScript files
- `assets/` - Images and icons

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic file structure

- [x] T001 Create folder structure: `css/`, `js/`, `assets/images/`, `assets/icons/` per plan.md
- [x] T002 [P] Create `index.html` with HTML5 boilerplate (doctype, html, head, body tags)
- [x] T003 [P] Create `css/variables.css` with CSS custom properties (colors, spacing, typography, breakpoints)
- [x] T004 [P] Create `css/reset.css` with CSS reset and base styles
- [x] T005 [P] Create `js/main.js` with `'use strict';` directive and DOMContentLoaded listener
- [x] T006 Link all CSS files in `<head>` and JS file before `</body>` with `defer` attribute

**Checkpoint**: ✅ Basic project structure ready - HTML, CSS variables, reset, and JS skeleton in place

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core HTML structure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T007 Add meta tags to `<head>`: viewport, description, charset, title
- [x] T008 [P] Create semantic HTML structure: `<header>`, `<main>`, `<footer>` landmarks
- [x] T009 [P] Add skip-to-content link for accessibility (`.skip-link` class)
- [x] T010 [P] Create base layout container/wrapper classes in `css/layout.css`
- [x] T011 Create `css/components.css` for reusable component styles
- [x] T012 Create `css/responsive.css` for media queries (mobile-first approach)

**Checkpoint**: ✅ Foundation ready - semantic HTML structure in place, user story implementation can now begin

---

## Phase 3: User Story 1 - View Portfolio Information (Priority: P1) 🎯 MVP

**Goal**: Display all four content sections (Bio, Skills, Experience, Contact) with clear, readable content

**Independent Test**: Navigate through all sections and verify content is visible, readable, and logically organized

### Implementation for User Story 1

- [x] T013 [P] [US1] Create header with site title/name in `<header>` element
- [x] T014 [P] [US1] Create navigation `<nav>` with unordered list linking to #bio, #skills, #experience, #contact
- [x] T015 [P] [US1] Create Bio section `<section id="bio">` with heading, profile image placeholder, 2-3 paragraphs
- [x] T016 [P] [US1] Create Skills section `<section id="skills">` with heading and categorized skill lists
- [x] T017 [P] [US1] Create Experience section `<section id="experience">` with heading and timeline/cards structure
- [x] T018 [P] [US1] Create Contact section `<section id="contact">` with heading and contact methods (email, social links)
- [x] T019 [US1] Create footer `<footer>` with copyright and social media links
- [x] T020 [US1] Add `data-nav` and `data-section` attributes for JavaScript hooks
- [x] T021 [US1] Add basic section padding and spacing in `css/layout.css`
- [x] T022 [US1] Style navigation links with hover states in `css/components.css`
- [x] T023 [US1] Verify all section IDs match navigation href attributes
- [x] T024 [US1] Test content visibility without CSS (progressive enhancement check)

**Checkpoint**: ✅ At this point, User Story 1 should be fully functional - all sections visible with basic styling

---

## Phase 4: User Story 2 - Access Portfolio on Any Device (Priority: P2)

**Goal**: Responsive design that works on mobile (320px), tablet (768px), and desktop (1920px)

**Independent Test**: View portfolio at 320px, 768px, 1024px, and 1920px - verify no horizontal scrolling, readable text

### Implementation for User Story 2

- [x] T025 [P] [US2] Add mobile-first base styles in `css/layout.css` (single-column, readable fonts, touch targets 44x44px)
- [x] T026 [P] [US2] Add tablet media query `@media (min-width: 768px)` in `css/responsive.css`
- [x] T027 [P] [US2] Add desktop media query `@media (min-width: 1024px)` in `css/responsive.css`
- [x] T028 [US2] Style Bio section for mobile (stacked layout, profile image centered)
- [x] T029 [US2] Style Skills section for mobile (single column list/cards)
- [x] T030 [US2] Style Experience section for mobile (timeline/cards stacked vertically)
- [x] T031 [US2] Adjust Skills layout for tablet (two-column grid or flex layout)
- [x] T032 [US2] Adjust Experience layout for tablet (side-by-side elements where appropriate)
- [x] T033 [US2] Adjust navigation for tablet (horizontal layout instead of stacked)
- [x] T034 [US2] Refine desktop layout (max-width container, multi-column where appropriate)
- [x] T035 [US2] Add fluid typography with responsive font sizes
- [x] T036 [US2] Test responsive design at breakpoints: 320px, 375px, 768px, 1024px, 1920px
- [x] T037 [US2] Verify no horizontal scrolling at any viewport width
- [x] T038 [US2] Verify touch targets are at least 44x44px on mobile

**Checkpoint**: ✅ At this point, User Stories 1 AND 2 should both work - content visible and responsive across devices

---

## Phase 5: User Story 3 - Navigate Portfolio Easily (Priority: P3)

**Goal**: Smooth scrolling navigation with active section highlighting

**Independent Test**: Click each navigation link and verify smooth scroll to correct section, active state updates

### Implementation for User Story 3

- [x] T039 [P] [US3] Add `scroll-behavior: smooth;` to `html` in `css/reset.css`
- [x] T040 [P] [US3] Create active navigation link styles (`.nav-link.active`) in `css/components.css`
- [x] T041 [US3] Implement smooth scroll JavaScript fallback in `js/main.js` (for browsers without CSS support)
- [x] T042 [US3] Implement Intersection Observer for active section detection in `js/main.js`
- [x] T043 [US3] Add navigation link click handler to update active state
- [x] T044 [US3] Add scroll-padding-top for fixed header offset (if header is fixed/sticky)
- [x] T045 [US3] Update URL hash on navigation without page jump
- [x] T046 [US3] Add mobile menu toggle functionality (if hamburger menu used)
- [x] T047 [US3] Close mobile menu automatically on link click
- [x] T048 [US3] Test smooth scrolling on Chrome, Firefox, Safari, Edge
- [x] T049 [US3] Test active section highlighting scrolls correctly through all sections
- [x] T050 [US3] Verify keyboard navigation works (Tab through nav links, Enter to activate)

**Checkpoint**: ✅ All user stories should now be independently functional - content, responsive, and navigation complete

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, performance optimization, and final review

### Accessibility Improvements

- [ ] T051 [P] Add ARIA roles and labels: `role="navigation"`, `aria-label`, `aria-labelledby`
- [ ] T052 [P] Verify heading hierarchy (h1 → h2 → h3 without skipping levels)
- [ ] T053 [P] Add alt text to all images (descriptive, not "image of")
- [ ] T054 Verify color contrast meets 4.5:1 ratio for normal text, 3:1 for large text
- [ ] T055 Test keyboard navigation throughout (Tab, Enter, Space keys)
- [ ] T056 Ensure focus indicators are visible on all interactive elements
- [ ] T057 Run W3C HTML validator and fix all errors
- [ ] T058 Test with screen reader (NVDA, VoiceOver, or browser built-in)

### Performance Optimization

- [ ] T059 [P] Optimize images (compress, convert to WebP with fallbacks)
- [ ] T060 [P] Remove unused CSS rules
- [ ] T061 Add `loading="lazy"` to below-fold images
- [ ] T062 Minify CSS/JS (optional, keep readable for learning project)
- [ ] T063 Run Lighthouse audit and address performance issues
- [ ] T064 Verify page load < 3 seconds on 4G connection
- [ ] T065 Verify total page weight < 500KB

### Cross-Browser Testing

- [ ] T066 [P] Test on Chrome (latest) - Windows/macOS
- [ ] T067 [P] Test on Firefox (latest) - Windows/macOS
- [ ] T068 [P] Test on Safari (latest) - macOS/iOS
- [ ] T069 [P] Test on Edge (latest) - Windows
- [ ] T070 Test on Android Chrome (mobile)
- [ ] T071 Fix any browser-specific issues found

### Final Review

- [ ] T072 [P] Verify all links functional (internal and external)
- [ ] T073 [P] Check for spelling and grammar errors
- [ ] T074 Replace all placeholder content with real information
- [ ] T075 Verify contact information is accurate and functional
- [ ] T076 Check no JavaScript console errors
- [ ] T077 Add favicon
- [ ] T078 Review against internship requirements checklist
- [ ] T079 Run final Lighthouse audit (target: Performance ≥90, Accessibility ≥90)
- [ ] T080 Prepare for deployment (GitHub Pages, Netlify, or Vercel)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion - MVP scope
- **User Story 2 (Phase 4)**: Depends on Foundational completion - can parallelize with US1 after foundation
- **User Story 3 (Phase 5)**: Depends on Foundational completion - can parallelize with US1/US2 after foundation
- **Polish (Phase 6)**: Depends on all user stories completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Phase 2 - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Phase 2 - Independent of US1, US3
- **User Story 3 (P3)**: Can start after Phase 2 - Independent of US1, US2

### Within Each User Story

- HTML structure before CSS styling
- Base mobile styles before responsive media queries
- CSS styles before JavaScript enhancements
- Core functionality before optional enhancements
- Story complete before moving to next priority

### Parallel Opportunities

- **Phase 1**: All tasks T002-T005 marked [P] can run in parallel
- **Phase 2**: All tasks T008-T010 marked [P] can run in parallel
- **Phase 3**: All HTML section tasks T013-T018 marked [P] can run in parallel
- **Phase 4**: All responsive breakpoint tasks T025-T027 marked [P] can run in parallel
- **Phase 5**: Smooth scroll CSS and active styles T039-T040 marked [P] can run in parallel
- **Phase 6**: All browser testing tasks T066-T070 marked [P] can run in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all HTML section creation tasks together:
Task: "Create header with site title/name in <header> element"
Task: "Create navigation <nav> with unordered list"
Task: "Create Bio section <section id="bio">"
Task: "Create Skills section <section id="skills">"
Task: "Create Experience section <section id="experience">"
Task: "Create Contact section <section id="contact">"

# After HTML complete, launch styling tasks in parallel:
Task: "Add basic section padding and spacing in css/layout.css"
Task: "Style navigation links with hover states in css/components.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T006)
2. Complete Phase 2: Foundational (T007-T012)
3. Complete Phase 3: User Story 1 (T013-T024)
4. **STOP and VALIDATE**: Test all sections visible and readable
5. Deploy/demo if ready for internship submission

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Basic portfolio works (MVP!)
3. Add User Story 2 → Test independently → Responsive on all devices
4. Add User Story 3 → Test independently → Enhanced navigation experience
5. Complete Polish → Production-ready portfolio

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1 (content sections)
   - Developer B: User Story 2 (responsive design)
   - Developer C: User Story 3 (JavaScript navigation)
3. Stories complete and integrate independently
4. Team completes Polish tasks together

---

## Task Summary

| Phase | Description | Task Count | Story |
|-------|-------------|------------|-------|
| Phase 1 | Setup | 6 tasks | N/A |
| Phase 2 | Foundational | 6 tasks | N/A |
| Phase 3 | User Story 1 | 12 tasks | US1 (P1) |
| Phase 4 | User Story 2 | 14 tasks | US2 (P2) |
| Phase 5 | User Story 3 | 12 tasks | US3 (P3) |
| Phase 6 | Polish | 30 tasks | N/A |
| **Total** | **All phases** | **80 tasks** | **3 stories** |

**MVP Scope**: Phases 1-3 (24 tasks) - Basic portfolio with all content sections  
**Full Implementation**: All 6 phases (80 tasks) - Production-ready responsive portfolio

---

## Notes

- [P] tasks = different files, no dependencies, can run in parallel
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group of tasks
- Stop at checkpoints to validate story independently
- Manual testing only - no automated tests required for this feature
- Avoid over-engineering: keep it simple and internship-focused
