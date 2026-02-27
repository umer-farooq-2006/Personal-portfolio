# Navigation & Interaction Contracts

**Feature**: 002-portfolio-redesign  
**Date**: 2026-02-27  
**Purpose**: Define navigation structure and user interaction patterns

---

## Navigation Contract

### Global Navigation Menu

**Location**: Appears in `<header>` on all pages

**Structure**:
```html
<header class="site-header">
    <a href="index.html" class="site-logo">
        <span class="logo-text">Your Name</span>
    </a>
    
    <nav class="primary-navigation" aria-label="Main navigation">
        <button class="mobile-menu-toggle" aria-expanded="false" aria-controls="primary-menu">
            <span class="hamburger-icon"></span>
            <span class="sr-only">Menu</span>
        </button>
        
        <ul id="primary-menu" class="nav-menu">
            <li class="nav-item">
                <a href="index.html" class="nav-link" aria-current="page">Bio</a>
            </li>
            <li class="nav-item">
                <a href="skills.html" class="nav-link">Skills</a>
            </li>
            <li class="nav-item">
                <a href="experience.html" class="nav-link">Experience</a>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
            </li>
        </ul>
    </nav>
</header>
```

**Behavior Contract**:

| State | Desktop Behavior | Mobile Behavior |
|-------|-----------------|-----------------|
| Default | Full horizontal menu visible | Hamburger icon visible |
| Hover (Desktop) | Link underline/highlight | N/A |
| Focus | Visible focus ring | N/A |
| Active (Current Page) | Visual indicator (bold, color, underline) | Same as desktop |
| Mobile Menu Open | N/A | Menu panel slides/fades in |

**Accessibility Requirements**:
- `aria-label="Main navigation"` on `<nav>` element
- `aria-expanded` on mobile toggle button
- `aria-controls` links toggle to menu panel
- `aria-current="page"` on active page link
- All links keyboard accessible (Tab key)
- Mobile menu toggle operable via Enter and Space keys

**Breakpoint**:
- Desktop layout: ≥768px
- Mobile layout: <768px (hamburger menu)

---

## Page URLs Contract

| Page | URL | Description |
|------|-----|-------------|
| Home/Bio | `index.html` | Entry point, personal introduction |
| Bio | `bio.html` | Detailed about page (can be same as index) |
| Skills | `skills.html` | Skills and competencies |
| Experience | `experience.html` | Work history and projects |
| Contact | `contact.html` | Contact information and form |
| 404 Error | `404.html` | Custom error page |

**URL Naming Convention**:
- All lowercase
- Hyphen-separated for multi-word pages (if needed)
- `.html` extension required
- No query parameters for static content

---

## Breadcrumb Navigation (Optional)

**Location**: Below header, above main content on interior pages

**Structure**:
```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
        <li><a href="index.html">Home</a></li>
        <li><span aria-current="page">Skills</span></li>
    </ol>
</nav>
```

**Behavior**:
- Shows current location in site hierarchy
- Current page is not a link, has `aria-current="page"`
- Separated by visual delimiter (» or /)

---

## Footer Contract

**Location**: `<footer>` at bottom of all pages

**Structure**:
```html
<footer class="site-footer">
    <div class="footer-content">
        <div class="footer-section">
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-links">
                <li><a href="mailto:email@example.com">email@example.com</a></li>
                <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h3 class="footer-heading">Connect</h3>
            <ul class="social-links">
                <li><a href="https://linkedin.com/in/username">LinkedIn</a></li>
                <li><a href="https://github.com/username">GitHub</a></li>
                <li><a href="https://twitter.com/username">Twitter</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <p class="copyright">&copy; 2026 Your Name. All rights reserved.</p>
        </div>
    </div>
</footer>
```

---

## Interaction Patterns

### Button Interactions

**CSS Classes**:
```css
.btn              /* Base button styles */
.btn--primary     /* Primary action */
.btn--secondary   /* Secondary action */
.btn--large       /* Large size */
.btn--small       /* Small size */
```

**States**:
- Default: Base styling
- Hover: Slightly darker background, subtle transform
- Focus: Visible focus ring (3px outline)
- Active: Pressed appearance
- Disabled: Reduced opacity, no pointer events

**Example**:
```html
<a href="contact.html" class="btn btn--primary">Get In Touch</a>
<button type="submit" class="btn btn--primary">Send Message</button>
```

---

### Card Component (for Projects/Experience)

**Structure**:
```html
<article class="card">
    <div class="card-image">
        <img src="path/to/image.jpg" alt="Project screenshot">
    </div>
    <div class="card-content">
        <h3 class="card-title">Project Name</h3>
        <p class="card-description">Brief description of the project.</p>
        <div class="card-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
        <div class="card-actions">
            <a href="#" class="btn btn--secondary">View Details</a>
            <a href="#" class="btn btn--primary">Live Demo</a>
        </div>
    </div>
</article>
```

**Interaction**:
- Entire card is clickable (optional) or has explicit action buttons
- Hover effect: Subtle lift (transform: translateY(-4px))
- Focus: When card contains focusable elements

---

### Form Interactions (Contact Page)

**Structure**:
```html
<form class="contact-form" action="#" method="POST" novalidate>
    <div class="form-group">
        <label for="name" class="form-label">Name <span aria-hidden="true">*</span></label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            class="form-input"
            required
            minlength="2"
            maxlength="100"
            aria-required="true"
            aria-describedby="name-error"
        >
        <span id="name-error" class="form-error" role="alert"></span>
    </div>
    
    <div class="form-group">
        <label for="email" class="form-label">Email <span aria-hidden="true">*</span></label>
        <input 
            type="email" 
            id="email" 
            name="email" 
            class="form-input"
            required
            aria-required="true"
            aria-describedby="email-error"
        >
        <span id="email-error" class="form-error" role="alert"></span>
    </div>
    
    <div class="form-group">
        <label for="message" class="form-label">Message <span aria-hidden="true">*</span></label>
        <textarea 
            id="message" 
            name="message" 
            class="form-input"
            rows="5"
            required
            minlength="10"
            maxlength="2000"
            aria-required="true"
            aria-describedby="message-error"
        ></textarea>
        <span id="message-error" class="form-error" role="alert"></span>
    </div>
    
    <button type="submit" class="btn btn--primary">Send Message</button>
</form>
```

**Validation Rules**:

| Field | Type | Required | Min | Max | Pattern |
|-------|------|----------|-----|-----|---------|
| Name | text | Yes | 2 chars | 100 chars | - |
| Email | email | Yes | - | - | Valid email format |
| Message | textarea | Yes | 10 chars | 2000 chars | - |

**Error Handling**:
- Errors displayed below respective fields
- Error messages clear and actionable
- `role="alert"` for screen reader announcement
- Error color: Red with sufficient contrast
- Success message displayed after submission

**Success State**:
```html
<div class="form-success" role="status">
    <p>Thank you! Your message has been sent successfully.</p>
    <p>I'll get back to you within 24-48 hours.</p>
</div>
```

---

## Skip Links Contract

**Purpose**: Allow keyboard users to skip repetitive navigation

**Location**: First focusable element in `<body>`

**Structure**:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<header>...</header>

<main id="main-content" tabindex="-1">
    <!-- Page content -->
</main>
```

**Behavior**:
- Hidden by default
- Becomes visible on Tab key press
- Positioned above header when focused
- High contrast styling

---

## Mobile Menu Interaction Contract

**JavaScript Behavior**:

```javascript
// Mobile menu toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menuPanel = document.querySelector('#primary-menu');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle state
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuPanel.classList.toggle('is-open');
    document.body.classList.toggle('menu-open');
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!menuPanel.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuPanel.classList.remove('is-open');
    }
});

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        menuToggle.focus();
        menuToggle.setAttribute('aria-expanded', 'false');
        menuPanel.classList.remove('is-open');
    }
});
```

**CSS States**:
```css
.nav-menu {
    /* Desktop: always visible */
    display: flex;
}

.menu-toggle {
    /* Desktop: hidden */
    display: none;
}

@media (max-width: 767px) {
    .nav-menu {
        /* Mobile: hidden by default */
        display: none;
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .nav-menu.is-open {
        /* Mobile: visible when toggled */
        display: flex;
        flex-direction: column;
    }
    
    .menu-toggle {
        /* Mobile: visible */
        display: block;
    }
}
```

---

## Focus Management Contract

**Focus Order**: Logical tab order following visual layout

**Focus Indicators**:
```css
/* Global focus style */
:focus {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}

/* Remove default outline, use custom */
:focus:not(:focus-visible) {
    outline: none;
}

:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
}
```

**Focus Trapping** (for modals, if used):
- Focus trapped inside modal when open
- Return focus to trigger element when closed

---

## Loading States Contract

**Page Load**:
- No loading spinner needed (static site, fast load)
- Content appears progressively as it loads
- Critical CSS inlined for fast first paint

**Form Submission**:
```html
<button type="submit" class="btn btn--primary" disabled>
    <span class="spinner" aria-hidden="true"></span>
    Sending...
</button>
```

**Image Loading**:
- Use `loading="lazy"` for below-fold images
- Background color placeholder while loading
- Fade-in transition on load

---

## Error States Contract

### 404 Error Page

**URL**: `404.html`

**Content**:
```html
<main class="error-page">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    
    <div class="error-actions">
        <a href="index.html" class="btn btn--primary">Go Home</a>
        <a href="contact.html" class="btn btn--secondary">Contact Support</a>
    </div>
</main>
```

**Server Configuration**:
- Configure server to serve `404.html` for all non-existent routes
- GitHub Pages: Automatic
- Netlify/Vercel: Automatic or configure redirects

---

## Contract Validation

Before considering contracts complete, verify:

- [ ] All navigation links point to valid URLs
- [ ] Current page indicated in navigation
- [ ] Mobile menu toggles correctly
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all interactive elements
- [ ] Form validation works with clear error messages
- [ ] Skip link functional
- [ ] 404 page accessible and functional
- [ ] All ARIA attributes correct and meaningful
- [ ] Color contrast meets WCAG AA for all states

---

**Status**: Phase 1 Complete - Navigation and interaction contracts defined
