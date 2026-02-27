# Quickstart: Portfolio Website Redesign

**Feature**: 002-portfolio-redesign  
**Date**: 2026-02-27  
**Purpose**: Get developers started quickly with the project

---

## Prerequisites

- **Text Editor**: VS Code, Sublime Text, or any code editor
- **Web Browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **Git**: For version control (optional but recommended)
- **Local Server** (optional): Live Server extension for VS Code or Python's `http.server`

**No build tools, package managers, or compilation required.**

---

## Project Setup (5 minutes)

### Step 1: Open Project

```bash
# Navigate to project directory
cd "C:\Users\TLS\Documents\Personal Portfolio Website"

# Open in your editor
code .  # VS Code
# or
subl .  # Sublime Text
```

### Step 2: Start Local Development Server (Optional)

**Option A: VS Code Live Server Extension**
1. Install "Live Server" extension by Ritwick Dey
2. Right-click `index.html` → "Open with Live Server"

**Option B: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Navigate to http://localhost:8000
```

**Option C: Direct File Opening**
- Simply open `index.html` in your browser
- Note: Some features may not work with `file://` protocol

---

## File Structure Overview

```
Personal Portfolio Website/
├── index.html          # Start here - Bio/Home page
├── bio.html            # Bio page
├── skills.html         # Skills page
├── experience.html     # Experience page
├── contact.html        # Contact page
├── 404.html            # 404 error page
│
├── css/
│   ├── variables.css   # Start here for styling - design tokens
│   ├── base.css        # Base styles
│   ├── layout.css      # Page layouts
│   ├── components.css  # UI components
│   ├── responsive.css  # Media queries
│   └── accessibility.css  # Accessibility styles
│
└── js/
    ├── main.js         # Main JavaScript entry
    ├── navigation.js   # Navigation logic
    └── utils.js        # Utility functions
```

---

## Development Workflow

### 1. Start with HTML Structure

Open `index.html` and observe the structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <!-- More CSS files -->
</head>
<body>
    <header>
        <nav><!-- Navigation menu --></nav>
    </header>
    
    <main>
        <!-- Page content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <script type="module" src="js/main.js"></script>
</body>
</html>
```

### 2. Customize Design Tokens

Edit `css/variables.css` to set your brand:

```css
:root {
    /* Colors - customize these */
    --color-primary: #2563eb;
    --color-secondary: #64748b;
    --color-accent: #f59e0b;
    
    /* Typography - customize these */
    --font-family-base: system-ui, -apple-system, sans-serif;
    --font-size-base: 16px;
    
    /* Spacing - 8px grid system */
    --spacing-unit: 8px;
}
```

### 3. Add Your Content

Replace placeholder content in each HTML file:

- **index.html / bio.html**: Your name, bio, introduction
- **skills.html**: Your technical skills and proficiencies
- **experience.html**: Work history and projects
- **contact.html**: Contact information and links

### 4. Test Responsiveness

Use browser DevTools:

1. Open DevTools (F12 or right-click → Inspect)
2. Click device toolbar icon (Ctrl+Shift+M / Cmd+Opt+M)
3. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

### 5. Validate Your Work

**HTML Validation**:
- Open W3C Validator: https://validator.w3.org/
- Upload your HTML files or provide URL
- Fix any errors reported

**Accessibility Audit**:
- Open DevTools → Lighthouse tab
- Select "Accessibility" category
- Click "Analyze page load"
- Aim for score ≥90

**Performance Audit**:
- Same Lighthouse tab
- Select "Performance" category
- Run audit
- Aim for score ≥90

---

## Common Tasks

### Adding a New Page

1. Create new HTML file (e.g., `projects.html`)
2. Copy structure from existing page
3. Update `<title>` and `<main>` content
4. Add link to navigation menu in all pages
5. Test navigation works

### Adding New Styles

1. Determine category:
   - Design tokens → `variables.css`
   - Component styles → `components.css`
   - Layout styles → `layout.css`
   - Responsive styles → `responsive.css`
2. Add CSS with clear comments
3. Test across browsers

### Adding JavaScript Functionality

1. Create new module or add to existing file
2. Use ES6+ syntax with `'use strict'`
3. Test keyboard interactions
4. Ensure progressive enhancement (works without JS)

---

## Testing Checklist

Before deploying or committing changes:

- [ ] All links work (internal and external)
- [ ] No console errors (check DevTools Console)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] Images have alt text
- [ ] Forms have labels and validation
- [ ] Lighthouse scores ≥90 (Performance, Accessibility, Best Practices)
- [ ] HTML passes W3C validator
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)

---

## Deployment

### GitHub Pages (Recommended)

```bash
# Commit your changes
git add .
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Settings → Pages → Source: main branch → Save
```

Your site will be live at: `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop project folder to https://app.netlify.com/drop
2. Or connect GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

---

## Troubleshooting

### Styles Not Loading

**Problem**: CSS changes not appearing

**Solutions**:
1. Hard refresh browser (Ctrl+F5 / Cmd+Shift+R)
2. Check file paths in `<link>` tags
3. Clear browser cache
4. Check for CSS syntax errors in DevTools Console

### Navigation Not Working

**Problem**: Links return 404 or don't navigate

**Solutions**:
1. Verify file names match link `href` attributes exactly
2. Check case sensitivity (use lowercase for all filenames)
3. Ensure files are in correct directory

### JavaScript Errors

**Problem**: Console shows JavaScript errors

**Solutions**:
1. Open DevTools Console to see error details
2. Check for typos in variable/function names
3. Ensure script type is `module` if using ES6 imports
4. Verify file paths in `<script>` tags

---

## Next Steps

After completing quickstart:

1. **Read Full Documentation**:
   - [spec.md](../002-portfolio-redesign/spec.md) - Feature requirements
   - [plan.md](./plan.md) - Implementation plan
   - [research.md](./research.md) - Design decisions
   - [data-model.md](./data-model.md) - Content structure

2. **Start Implementation**:
   - Begin with design tokens in `variables.css`
   - Build navigation component
   - Create Bio page layout
   - Duplicate for other pages

3. **Run Tasks**:
   - See [tasks.md](./tasks.md) for detailed implementation tasks (after `/sp.tasks`)

---

## Getting Help

- **Constitution**: Review `.specify/memory/constitution.md` for guiding principles
- **W3C Resources**: https://www.w3.org/standards/webdesign
- **MDN Web Docs**: https://developer.mozilla.org/
- **WebAIM Accessibility**: https://webaim.org/

---

**Status**: Ready to start development! 🚀
