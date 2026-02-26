<!--
SYNC IMPACT REPORT
===================
Version change: 0.0.0 → 1.0.0 (Initial creation)
Modified principles: N/A (first version)
Added sections:
  - Core Principles (6 principles)
  - Technology Stack & Architecture
  - Development Workflow & Quality Gates
  - Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ No updates needed (generic)
  - .specify/templates/spec-template.md ✅ No updates needed (generic)
  - .specify/templates/tasks-template.md ✅ No updates needed (generic)
Follow-up TODOs: None
-->

# Personal Portfolio Website Constitution

## Core Principles

### I. Simplicity First
Keep the codebase beginner-friendly and maintainable. Use vanilla HTML, CSS, and JavaScript without complex frameworks or build tools. Every line of code should be understandable by someone learning web development. Avoid over-engineering; prefer straightforward solutions that work.

**Rationale**: This portfolio serves as a learning project and demonstration of fundamental web skills. Complexity barriers reduce maintainability and educational value.

### II. Responsive Design (NON-NEGOTIABLE)
All layouts MUST work flawlessly across desktop, tablet, and mobile devices. Use mobile-first CSS with media queries. Test on multiple screen sizes. Touch targets must be at least 44x44 pixels for mobile usability.

**Rationale**: Recruiters and visitors access portfolios from various devices. Mobile traffic accounts for significant web usage; poor mobile experience loses opportunities.

### III. Accessibility Standards
All content MUST meet WCAG 2.1 Level AA guidelines. Use semantic HTML elements (header, nav, main, section, footer). Include alt text for images. Ensure keyboard navigation works. Maintain color contrast ratios of at least 4.5:1 for normal text.

**Rationale**: Accessibility demonstrates professionalism and ensures inclusivity. Many employers require accessibility compliance; it's a core web development skill.

### IV. Performance Budget
Page load time MUST be under 3 seconds on 3G connections. Total page weight MUST stay under 500KB. Inline critical CSS; defer non-critical JavaScript. Optimize images to WebP format with fallbacks. Aim for 90+ scores on Lighthouse performance metrics.

**Rationale**: Slow portfolios lose visitor attention. Performance demonstrates technical competence and respect for users' time and data.

### V. Content-First Structure
Organize content hierarchically: Bio → Skills → Experience → Contact. Each section must be scannable within 30 seconds. Use clear headings and concise descriptions. Contact information must be visible without scrolling on desktop.

**Rationale**: Recruiters spend ~30 seconds initially scanning portfolios. Clear information hierarchy increases engagement and callback rates.

### VI. Professional Aesthetics
Design must appear modern and polished. Use a consistent color palette (maximum 3 primary colors). Maintain consistent spacing using a 4px or 8px grid system. Typography must use maximum 2 font families. Include subtle hover states and transitions for interactivity.

**Rationale**: Visual presentation reflects attention to detail and design sensibility—valued skills for frontend developers.

## Technology Stack & Architecture

**Stack Requirements**:
- **HTML5**: Semantic structure with proper document outline
- **CSS3**: Custom styles with Flexbox/Grid for layouts, CSS custom properties for theming
- **JavaScript (ES6+)**: Vanilla JS for interactivity, no frameworks required
- **Responsive Images**: srcset and picture elements for optimization

**File Structure**:
```
personal-portfolio/
├── index.html           # Main landing page
├── css/
│   ├── styles.css       # Main stylesheet
│   ├── responsive.css   # Media queries
│   └── variables.css    # CSS custom properties
├── js/
│   ├── main.js          # Core functionality
│   └── components.js    # Reusable UI components
├── assets/
│   ├── images/          # Optimized images
│   └── fonts/           # Custom fonts (if used)
└── docs/
    └── constitution.md  # This file
```

**Architecture Constraints**:
- No build tools or bundlers required (keep it simple)
- No external CSS/JS frameworks (demonstrate core skills)
- External resources (fonts, icons) must be CDN-hosted with fallbacks
- All code must run directly in browser without compilation

## Development Workflow & Quality Gates

**Code Quality Standards**:
- HTML must pass W3C validator with zero errors
- CSS must be organized with comments for each section
- JavaScript must use strict mode and pass ESLint with recommended rules
- All files must use UTF-8 encoding
- Consistent indentation (2 spaces for HTML/CSS/JS)

**Testing Requirements**:
- Manual testing on Chrome, Firefox, Safari (latest versions)
- Mobile testing on iOS Safari and Android Chrome
- Lighthouse audit scores: Performance ≥90, Accessibility ≥90, Best Practices ≥90
- Cross-browser testing for layout consistency

**Review Checklist** (before any deployment):
- [ ] All links functional (internal and external)
- [ ] Images have alt attributes
- [ ] Forms have proper labels and validation
- [ ] No console errors or warnings
- [ ] Meta tags complete (title, description, viewport)
- [ ] Favicon present
- [ ] Contact form/method works

## Governance

**Compliance**: All development MUST adhere to principles in this constitution. Deviations require documentation in commit messages with justification.

**Amendment Process**:
1. Propose change via GitHub issue or discussion
2. Document rationale and impact on existing principles
3. Update constitution with new version number
4. Increment version using semantic versioning:
   - MAJOR: Principle removal or backward-incompatible change
   - MINOR: New principle or section added
   - PATCH: Clarifications or typo fixes

**Review Cadence**: Review constitution quarterly or when starting new feature development to ensure continued relevance.

**Version**: 1.0.0 | **Ratified**: 2026-02-26 | **Last Amended**: 2026-02-26
