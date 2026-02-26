# Research & Technical Decisions: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-02-26  
**Purpose**: Document technical decisions, best practices, and implementation patterns for vanilla portfolio website

---

## 1. Mobile-First CSS Strategy

### Decision
Use mobile-first responsive design with `min-width` media queries at standard breakpoints: 768px (tablet), 1024px (desktop).

### Rationale
- **Performance**: Mobile styles load first without media query overhead
- **Progressive Enhancement**: Start with essential content, enhance for larger screens
- **Maintainability**: Easier to add complexity than remove it
- **Industry Standard**: Matches modern CSS framework approaches (Bootstrap, Tailwind)

### Implementation Pattern
```css
/* Base styles (mobile) */
.container {
  padding: 16px;
  width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 32px;
    max-width: 720px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
```

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| Desktop-first (`max-width` queries) | Requires overriding desktop styles for mobile, more CSS, worse mobile performance |
| Single breakpoint (mobile/desktop only) | Tablet experience often poor; modern responsive design expects 3+ breakpoints |
| Container queries | Limited browser support; overkill for simple portfolio layout |

### Best Practices
- Test at actual device widths: 320px, 375px, 768px, 1024px, 1920px
- Use relative units (rem, em, %) over fixed pixels for flexibility
- Avoid `!important`; use CSS specificity properly
- Group media queries at end of file or use separate `responsive.css`

---

## 2. Smooth Scroll Implementation

### Decision
Use CSS `scroll-behavior: smooth` as primary method with JavaScript fallback for older browsers.

### Rationale
- **Simplicity**: Single CSS declaration handles all smooth scrolling
- **Performance**: Browser-native implementation is more efficient than JavaScript
- **Progressive Enhancement**: Works without JavaScript; JS enhances older browsers
- **Browser Support**: Supported in all modern browsers (Chrome 61+, Firefox 36+, Safari 15+)

### Implementation Pattern
```css
/* Primary method - CSS */
html {
  scroll-behavior: smooth;
}
```

```javascript
// Fallback for Safari < 15 and older browsers
if (getComputedStyle(document.documentElement).scrollBehavior !== 'smooth') {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
```

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| JavaScript-only (jQuery scrollTo) | Requires external library, overkill for simple scrolling |
| JavaScript-only (vanilla scrollIntoView) | CSS is simpler and more performant when supported |
| Custom easing functions | Adds complexity without significant UX improvement |

### Best Practices
- Always provide JavaScript fallback for Safari < 15
- Account for fixed header offset when scrolling (add padding-top to sections)
- Test on iOS Safari (historically had smooth scroll issues)
- Consider `scroll-padding-top` for fixed headers

---

## 3. Accessibility Patterns (WCAG 2.1 AA)

### Decision
Build accessibility into HTML structure from the start using semantic elements, ARIA landmarks, and keyboard navigation support.

### Rationale
- **Professional Requirement**: Accessibility is a core web development skill
- **Legal Compliance**: Many employers require WCAG compliance
- **Better UX**: Accessible sites work better for all users
- **SEO Benefits**: Semantic HTML improves search engine understanding

### Key Implementation Patterns

#### Semantic HTML Structure
```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <!-- Navigation links -->
  </nav>
</header>

<main role="main">
  <section id="bio" aria-labelledby="bio-heading">
    <h2 id="bio-heading">About Me</h2>
    <!-- Bio content -->
  </section>
  
  <section id="skills" aria-labelledby="skills-heading">
    <h2 id="skills-heading">Skills</h2>
    <!-- Skills content -->
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

#### Keyboard Navigation
```css
/* Visible focus indicators */
a:focus,
button:focus,
[tabindex]:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

#### Color Contrast
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 contrast against adjacent colors

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| Add accessibility as final step | Requires significant refactoring; better to build in from start |
| Use ARIA extensively without semantic HTML | Semantic HTML provides native accessibility; ARIA is supplemental |
| Rely on automated tools only | Manual testing required for keyboard navigation, screen reader experience |

### Best Practices
- Use heading hierarchy correctly (h1 → h2 → h3, no skipping levels)
- Provide alt text for all images (descriptive, not "image of")
- Ensure all interactive elements are keyboard accessible
- Test with actual screen readers (NVDA, VoiceOver)
- Use `prefers-reduced-motion` media query for animations

---

## 4. Performance Optimization

### Decision
Implement critical CSS inlining, lazy loading for images, and WebP format with PNG fallbacks to stay under 500KB total page weight.

### Rationale
- **User Experience**: Fast loading reduces bounce rate
- **SEO**: Page speed is a ranking factor
- **Mobile Users**: Many visitors on slower connections
- **Professional Standard**: Performance demonstrates technical competence

### Implementation Patterns

#### Critical CSS Strategy
```html
<head>
  <!-- Inline critical CSS for above-fold content -->
  <style>
    /* Critical: reset, typography, header, hero section */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; }
    header { padding: 16px; background: #fff; }
    /* ... more critical styles ... */
  </style>
  
  <!-- Defer non-critical CSS -->
  <link rel="preload" href="css/layout.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link rel="preload" href="css/responsive.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  
  <!-- Fallback for no-JS -->
  <noscript>
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/responsive.css">
  </noscript>
</head>
```

#### Image Optimization
```html
<!-- WebP with PNG fallback -->
<picture>
  <source srcset="profile.webp" type="image/webp">
  <img src="profile.png" alt="Profile photo" loading="lazy" width="300" height="300">
</picture>

<!-- Responsive images with srcset -->
<img 
  srcset="profile-400.jpg 400w,
          profile-800.jpg 800w,
          profile-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  src="profile-800.jpg"
  alt="Profile photo"
  loading="lazy"
>
```

#### JavaScript Deferment
```html
<!-- Place JS before closing body tag -->
<script src="js/main.js" defer></script>

<!-- Or use defer for scripts in head -->
<head>
  <script src="js/main.js" defer></script>
</head>
```

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| CSS/JS minification | Adds build step complexity; keep readable for learning project |
| CDN hosting for libraries | No external libraries used; CDN adds DNS lookup overhead |
| Service Worker caching | Overkill for static portfolio; adds complexity |
| Image CDNs (Cloudinary, etc.) | Requires external service; simple optimization sufficient |

### Best Practices
- Run Lighthouse audits during development
- Use Chrome DevTools Network tab to identify bottlenecks
- Compress images before adding (TinyPNG, Squoosh)
- Limit custom fonts (system fonts are fastest)
- Remove unused CSS rules
- Test on 3G/4G connections using DevTools throttling

---

## 5. CSS Architecture

### Decision
Organize CSS by concern using multiple files: variables, reset, layout, components, responsive. Use CSS custom properties for theming.

### Rationale
- **Maintainability**: Easy to find and update specific styles
- **Reusability**: Component styles can be reused across sections
- **Scalability**: Clear structure makes adding features easier
- **No Framework Overhead**: Full control without unused framework code

### File Organization
```
css/
├── variables.css    # CSS custom properties (design tokens)
├── reset.css        # CSS reset, base styles, typography
├── layout.css       # Grid systems, section layouts, containers
├── components.css   # Reusable components (nav, cards, buttons)
└── responsive.css   # Media queries for tablet/desktop
```

### CSS Custom Properties Pattern
```css
/* variables.css */
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-accent: #f59e0b;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-text-muted: #64748b;
  
  /* Spacing (8px grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  --space-6: 48px;
  --space-7: 64px;
  
  /* Typography */
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 2.5rem;
  
  /* Breakpoints */
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

### Usage Pattern
```css
/* components.css */
.btn {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-primary);
  color: var(--color-background);
  font-size: var(--font-size-base);
  border-radius: 4px;
  transition: background-color var(--transition-fast);
}

.btn:hover {
  background-color: var(--color-primary-dark);
}

.section {
  padding: var(--space-6) var(--space-3);
}

@media (min-width: var(--breakpoint-md)) {
  .section {
    padding: var(--space-7) var(--space-5);
  }
}
```

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| Single monolithic styles.css | Hard to maintain, difficult to find specific styles |
| BEM naming convention | Adds complexity; semantic HTML provides sufficient structure |
| CSS-in-JS | Requires build tools; overkill for static site |
| CSS preprocessor (Sass, Less) | Adds build step; CSS custom properties provide similar functionality |

### Best Practices
- Order CSS properties logically (layout, sizing, typography, visual)
- Use CSS custom properties for all theme values
- Keep selectors simple and specific (avoid deep nesting)
- Comment each section for easy navigation
- Group related media queries together

---

## 6. Intersection Observer API

### Decision
Use Intersection Observer API for active section highlighting and scroll-based animations instead of scroll event listeners.

### Rationale
- **Performance**: Much more efficient than scroll event listeners
- **Simplicity**: Cleaner API, less code
- **Battery Life**: Less CPU usage on mobile devices
- **Modern Standard**: Supported in all modern browsers (95%+ global)

### Implementation Pattern
```javascript
// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -80% 0px', // Trigger when section is in top 20-80% of viewport
  threshold: 0
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to corresponding nav link
      const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));
```

### Alternatives Considered

| Approach | Why Rejected |
|----------|--------------|
| Scroll event listener with calculations | Poor performance, requires debouncing/throttling, more complex |
| Libraries (ScrollMagic, GSAP ScrollTrigger) | External dependencies, overkill for simple highlighting |
| CSS `:target` pseudo-class | Only works for currently targeted section, not scroll position |

### Best Practices
- Use `rootMargin` to control when sections are considered "active"
- Provide fallback for browsers without Intersection Observer support
- Combine with CSS transitions for smooth visual feedback
- Don't observe too many elements (performance impact)

---

## 7. Browser Compatibility Strategy

### Decision
Support all modern browsers (Chrome, Firefox, Safari, Edge - latest 2 versions) with graceful degradation for older browsers.

### Rationale
- **User Base**: Most users keep browsers updated
- **Development Efficiency**: Supporting very old browsers adds significant complexity
- **Progressive Enhancement**: Core content works everywhere; enhancements for modern browsers
- **Professional Standard**: Modern web development targets evergreen browsers

### Browser Support Matrix

| Feature | Minimum Version | Fallback Strategy |
|---------|----------------|-------------------|
| CSS Grid | Chrome 57, Firefox 52, Safari 10.1 | Flexbox for simpler layouts |
| CSS Custom Properties | Chrome 49, Firefox 31, Safari 9.3 | Static values (no theming) |
| Intersection Observer | Chrome 51, Firefox 55, Safari 12.1 | Scroll event listener |
| scroll-behavior: smooth | Chrome 61, Firefox 36, Safari 15 | JavaScript scrollIntoView |
| WebP Images | Chrome 23, Firefox 65, Safari 14 | PNG/JPEG fallback with `<picture>` |

### Implementation Pattern
```css
/* Feature detection with @supports */
@supports (display: grid) {
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

/* Fallback for older browsers */
@supports not (display: grid) {
  .skills-grid {
    display: flex;
    flex-wrap: wrap;
  }
  
  .skills-grid > * {
    flex: 0 0 calc(50% - 16px);
    margin: 8px;
  }
}
```

### Best Practices
- Check browser support on [Can I Use](https://caniuse.com/) before using features
- Use Autoprefixer if using build tools (not in this project)
- Test on actual devices, not just emulators
- Provide meaningful fallbacks, not broken experiences
- Document known limitations for older browsers

---

## Summary of Technical Decisions

| Decision Area | Choice Made | Key Benefit |
|---------------|-------------|-------------|
| Responsive Strategy | Mobile-first with min-width queries | Performance, maintainability |
| Smooth Scrolling | CSS with JS fallback | Simplicity, broad support |
| Accessibility | Semantic HTML + ARIA + keyboard support | Professional, inclusive |
| Performance | Critical CSS, lazy images, WebP | Fast loading, good UX |
| CSS Architecture | Multi-file with custom properties | Maintainable, scalable |
| Scroll Detection | Intersection Observer API | Performance, simplicity |
| Browser Support | Modern browsers with graceful degradation | Practical, efficient |

---

## References

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [Can I Use](https://caniuse.com/) - Browser compatibility tables
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Color contrast tool
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/overview/) - Performance auditing
- [CSS-Tricks](https://css-tricks.com/) - CSS tutorials and patterns
