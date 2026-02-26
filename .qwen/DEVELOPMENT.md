# Personal Portfolio Website Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-02-26

## Active Technologies

**Frontend**:
- HTML5 (semantic structure, accessibility landmarks)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- JavaScript ES6+ (vanilla, no frameworks)

**Key Patterns**:
- Mobile-first responsive design
- Progressive enhancement
- Semantic HTML
- WCAG 2.1 AA accessibility
- CSS custom properties for theming
- Intersection Observer API for scroll detection

**Not Allowed**:
- Build tools (Webpack, Vite, etc.)
- CSS frameworks (Bootstrap, Tailwind, etc.)
- JavaScript frameworks (React, Vue, Angular, etc.)
- CSS preprocessors (Sass, Less)
- Package managers (npm, yarn) for dependencies

## Project Structure

```text
personal-portfolio/
├── index.html              # Main single-page document
├── css/
│   ├── variables.css       # CSS custom properties (design tokens)
│   ├── reset.css           # CSS reset and base styles
│   ├── layout.css          # Grid systems, section layouts
│   ├── components.css      # Reusable UI components
│   └── responsive.css      # Media queries for tablet/desktop
├── js/
│   ├── main.js             # Core functionality (smooth scroll, active section)
│   └── utils.js            # Helper functions (debounce, throttle)
├── assets/
│   ├── images/             # Optimized images (WebP + fallbacks)
│   └── icons/              # SVG icons
└── specs/
    └── 001-portfolio-website/
        ├── specify.md      # Feature specification
        ├── plan.md         # Implementation plan
        ├── research.md     # Technical decisions
        ├── data-model.md   # Content structure
        └── quickstart.md   # Setup guide
```

## Commands

**Development**:
- Open `index.html` in browser (or use Live Server extension)
- Use browser DevTools (F12) for debugging
- Run Lighthouse audits for performance/accessibility

**Testing**:
- Manual testing on Chrome, Firefox, Safari, Edge
- Mobile testing on iOS Safari and Android Chrome
- Responsive testing at breakpoints: 320px, 768px, 1024px, 1920px

**Validation**:
- HTML: W3C Validator (https://validator.w3.org/)
- CSS: No specific validator required
- Accessibility: WAVE, axe DevTools, manual keyboard testing

**Deployment**:
- GitHub Pages: Push to main branch, enable in settings
- Netlify: Drag-and-drop folder
- Vercel: `vercel` CLI command

## Code Style

### HTML
- 2-space indentation
- Lowercase tags and attributes
- Semantic elements (header, nav, main, section, footer)
- ARIA roles and labels where needed
- Alt text for all images
- Proper heading hierarchy (h1 → h2 → h3)

### CSS
- 2-space indentation
- CSS custom properties for all theme values
- BEM-inspired naming (`.block__element--modifier`)
- Mobile-first media queries (`min-width`)
- Organized by file: variables, reset, layout, components, responsive
- Comment sections for easy navigation

```css
/* Example */
.skill-card {
  display: flex;
  padding: var(--space-4);
  background-color: var(--color-surface);
  border-radius: 8px;
  transition: transform var(--transition-fast);
}

.skill-card--featured {
  border: 2px solid var(--color-primary);
}

@media (min-width: var(--breakpoint-md)) {
  .skill-card {
    padding: var(--space-5);
  }
}
```

### JavaScript
- `'use strict';` at top of file
- ES6+ features (const/let, arrow functions, template literals)
- 2-space indentation
- Semantic variable/function names
- Event delegation for dynamic content
- Intersection Observer for scroll detection
- Defer non-critical JavaScript

```javascript
// Example
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update active navigation
      }
    });
  }, { rootMargin: '-20% 0px -80% 0px' });
  
  sections.forEach(section => observer.observe(section));
});
```

## Recent Changes

**001-portfolio-website** (2026-02-26):
- Created feature specification with user stories and requirements
- Generated implementation plan with 5 development phases
- Documented technical decisions (mobile-first, smooth scroll, accessibility)
- Defined content model for portfolio sections
- Created quickstart setup guide

<!-- MANUAL ADDITIONS START -->
<!-- Add any project-specific conventions or patterns here -->
<!-- MANUAL ADDITIONS END -->
