# Quick Start Guide: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-02-26  
**Purpose**: Get your portfolio website up and running quickly

---

## Prerequisites

**Required**:
- A text editor (VS Code, Sublime Text, Notepad++, etc.)
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Git (optional, for version control)

**Not Required**:
- Node.js or npm
- Build tools or bundlers
- Local web server (optional but recommended)
- Any frameworks or libraries

---

## Step 1: Clone or Create Repository

### Option A: Clone Existing Repository
```bash
git clone <your-repository-url>
cd personal-portfolio-website
```

### Option B: Create New Project
```bash
# Create project folder
mkdir personal-portfolio
cd personal-portfolio

# Initialize Git (optional)
git init
```

---

## Step 2: Create Folder Structure

Create the following folder structure:

```
personal-portfolio/
├── index.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── utils.js (optional)
└── assets/
    ├── images/
    └── icons/
```

**Quick command** (macOS/Linux):
```bash
mkdir -p css js assets/images assets/icons
```

**Quick command** (Windows PowerShell):
```powershell
New-Item -ItemType Directory -Force css, js, "assets/images", "assets/icons"
```

---

## Step 3: Create Base Files

### 3.1 Create HTML Boilerplate

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Personal Portfolio Website">
  <title>Your Name - Portfolio</title>
  
  <!-- CSS Files -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <!-- Content will go here -->
  
  <!-- JavaScript Files -->
  <script src="js/main.js" defer></script>
</body>
</html>
```

### 3.2 Create CSS Variables

Create `css/variables.css`:
```css
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
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 2rem;
  --font-size-4xl: 2.5rem;
  
  /* Breakpoints */
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

### 3.3 Create CSS Reset

Create `css/reset.css`:
```css
/* CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ul, ol {
  list-style: none;
}
```

### 3.4 Create Main JavaScript

Create `js/main.js`:
```javascript
'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded successfully!');
  
  // Your JavaScript code will go here
});
```

---

## Step 4: Start Local Development Server

### Option A: VS Code Live Server (Recommended)

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Browser opens automatically at `http://127.0.0.1:5500`

### Option B: Python Simple HTTP Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Visit `http://localhost:8000` in your browser.

### Option C: Node.js http-server

```bash
# Install globally (one-time)
npm install -g http-server

# Run server
npx http-server -p 8000
```

Visit `http://localhost:8000` in your browser.

### Option D: Direct File Opening

Simply double-click `index.html` to open in browser.

**Note**: Some features (like smooth scroll) may work differently with `file://` protocol. Local server recommended.

---

## Step 5: Verify Setup

Open your browser and check:

1. **Page loads** without errors
2. **No console errors** (F12 → Console tab)
3. **Basic styles applied** (text should not be Times New Roman default)
4. **Responsive meta tag working** (try zooming browser)

**Expected Console Output**:
```
Portfolio website loaded successfully!
```

---

## Step 6: Development Workflow

### Recommended Workflow

1. **Edit HTML** → Save → Refresh browser (or auto-refresh with Live Server)
2. **Add CSS** in appropriate file → Save → Refresh
3. **Add JavaScript** → Save → Refresh
4. **Test** in multiple browsers
5. **Commit** changes to Git regularly

### File Organization

| When to edit | File to modify |
|--------------|----------------|
| Adding new content sections | `index.html` |
| Changing colors, fonts, spacing | `css/variables.css` |
| Modifying base styles | `css/reset.css` |
| Layout changes (grid, flexbox) | `css/layout.css` |
| Button, card, nav styles | `css/components.css` |
| Mobile/tablet/desktop styles | `css/responsive.css` |
| Smooth scroll, active section | `js/main.js` |
| Helper functions | `js/utils.js` |

---

## Step 7: Browser Testing

### Minimum Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest) - if on macOS/iOS
- [ ] Edge (latest)

### Mobile Testing

- [ ] iOS Safari (iPhone)
- [ ] Android Chrome

### Testing Tools

**Chrome DevTools Device Mode**:
1. Press F12 or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)
2. Click device icon (📱)
3. Select different devices from dropdown
4. Test at 320px, 768px, 1024px, 1920px

**Recommended Test Viewports**:
- Mobile: 320px × 568px (iPhone SE)
- Mobile: 375px × 667px (iPhone 12)
- Tablet: 768px × 1024px (iPad)
- Desktop: 1920px × 1080px

---

## Common Issues & Solutions

### Issue: Styles Not Loading

**Problem**: CSS changes not appearing

**Solutions**:
1. Hard refresh browser (Cmd+Shift+R on Mac, Ctrl+F5 on Windows)
2. Check file paths in `<link>` tags
3. Clear browser cache
4. Check for CSS syntax errors

### Issue: JavaScript Not Running

**Problem**: Console shows errors or no output

**Solutions**:
1. Check console for error messages (F12)
2. Verify `<script>` tag has `defer` or is before `</body>`
3. Check for JavaScript syntax errors
4. Ensure `'use strict';` is at top of file

### Issue: Smooth Scroll Not Working

**Problem**: Navigation jumps instantly instead of smooth scrolling

**Solutions**:
1. Check if `scroll-behavior: smooth;` is in CSS
2. Safari < 15 needs JavaScript fallback (see research.md)
3. Test in different browser

### Issue: Layout Broken on Mobile

**Problem**: Content overflows or looks wrong on small screens

**Solutions**:
1. Check viewport meta tag is present
2. Avoid fixed widths (use max-width or percentages)
3. Test in DevTools device mode
4. Add mobile-first media queries

---

## Next Steps

After setup is complete:

1. ✅ **Setup Complete** - You're here!
2. ⏳ **Build HTML Structure** - Add header, nav, sections, footer
3. ⏳ **Add Content** - Fill in your bio, skills, experience
4. ⏳ **Style with CSS** - Apply colors, layouts, responsive design
5. ⏳ **Add JavaScript** - Smooth scroll, active section highlighting
6. ⏳ **Test & Optimize** - Accessibility, performance, cross-browser
7. ⏳ **Deploy** - GitHub Pages, Netlify, or other hosting

---

## Deployment Quick Start

### GitHub Pages (Recommended)

```bash
# Commit your changes
git add .
git commit -m "Complete portfolio website"

# Push to GitHub
git push origin main

# Enable GitHub Pages
# 1. Go to repository settings on GitHub
# 2. Navigate to Pages section
# 3. Select main branch as source
# 4. Your site will be live at https://yourusername.github.io/repo-name
```

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Site is live instantly
4. Custom domain available

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to complete deployment
```

---

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS reference
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Browser debugging
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Netlify](https://netlify.com) - Free hosting with forms
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) - Performance auditing

---

## Get Help

If you encounter issues:

1. Check browser console for errors
2. Validate HTML at [W3C Validator](https://validator.w3.org/)
3. Review this guide and implementation plan
4. Search MDN Web Docs for specific features

**Happy Coding! 🚀**
