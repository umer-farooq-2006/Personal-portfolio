# Data Model: Portfolio Website Redesign

**Feature**: 002-portfolio-redesign  
**Date**: 2026-02-27  
**Purpose**: Define content structure and entities for multi-page portfolio

---

## Content Entities

Since this is a static website without a backend database, "data model" refers to the content structure and organization rather than database schema. Each entity represents a content section that will be authored directly in HTML.

---

### Entity 1: Bio Content

**What it represents**: Personal background, introduction, and about information

**Content Structure**:
```
Bio
├── Hero Section
│   ├── Name (h1)
│   ├── Title/Tagline
│   └── Hero Image/Avatar
├── Introduction Paragraph
├── Background Story (multiple paragraphs)
├── Personal Interests
├── Call-to-Action (e.g., "View My Work", "Contact Me")
└── Download Resume Link (optional)
```

**Key Attributes**:
- Name: Text, required, appears in page title and h1
- Tagline: Short text (50-100 characters), professional summary
- Hero Image: Image file with alt text
- Introduction: 2-4 sentences, scannable
- Background Story: 200-500 words, engaging narrative
- Interests: List of 3-6 items
- CTA: Action text and target URL

**Validation Rules**:
- Name must not be empty
- Tagline should be under 100 characters
- Hero image must have descriptive alt text
- All text must be proofread for grammar and spelling

**Relationships**:
- Links to: Skills page, Experience page, Contact page
- Referenced by: Navigation menu, Homepage

---

### Entity 2: Skills Content

**What it represents**: Technical and professional competencies with proficiency indicators

**Content Structure**:
```
Skills
├── Page Title (h1)
├── Introduction (optional)
├── Skill Categories
│   ├── Category 1 (e.g., "Frontend Development")
│   │   ├── Skill Item 1 (e.g., "HTML5/CSS3")
│   │   │   ├── Proficiency Level
│   │   │   └── Description/Context
│   │   └── Skill Item 2
│   └── Category 2 (e.g., "Programming Languages")
│       └── ...
└── Certifications (optional section)
```

**Key Attributes**:
- Category Name: Text, groups related skills
- Skill Name: Text, specific technology or competency
- Proficiency Level: Visual indicator (beginner/intermediate/advanced/expert)
- Description: Optional context (1-2 sentences, years of experience, projects)
- Icon/Logo: Optional visual representation

**Validation Rules**:
- Each skill must belong to a category
- Proficiency levels must be consistent across all skills
- Avoid subjective terms without context (provide evidence)
- Maximum 6-8 categories for scannability

**Relationships**:
- Links to: Experience page (showing skills in action)
- Referenced by: Bio page, Navigation menu

---

### Entity 3: Experience Content

**What it represents**: Work history, projects, and professional achievements in timeline format

**Content Structure**:
```
Experience
├── Page Title (h1)
├── Timeline
│   ├── Experience Item 1 (most recent)
│   │   ├── Job Title / Project Name
│   │   ├── Company/Client
│   │   ├── Date Range
│   │   ├── Location (optional)
│   │   ├── Description (2-4 sentences)
│   │   ├── Key Achievements (bullet list, 3-5 items)
│   │   ├── Skills Used (tags linking to Skills page)
│   │   └── Project Link/Screenshot (optional)
│   └── Experience Item 2
│       └── ...
└── Education Section (optional)
```

**Key Attributes**:
- Title: Text, role or project name
- Organization: Text, company/client name
- Start Date: Date (month/year format)
- End Date: Date or "Present"
- Location: Text (city, country) or "Remote"
- Description: Paragraph, 50-100 words
- Achievements: List of quantifiable accomplishments
- Skills: Array of skill tags
- Media: Optional images, links

**Validation Rules**:
- Dates must be in consistent format
- Achievements should be specific and measurable where possible
- Reverse chronological order (newest first)
- Avoid confidential information

**Relationships**:
- Links to: Skills page (via skill tags), Contact page
- Referenced by: Bio page, Navigation menu

---

### Entity 4: Contact Content

**What it represents**: Contact information and communication preferences

**Content Structure**:
```
Contact
├── Page Title (h1)
├── Introduction (1-2 sentences)
├── Contact Methods
│   ├── Email Address
│   ├── Phone Number (optional)
│   ├── Location/Timezone (optional)
│   └── Social Media Links
│       ├── LinkedIn
│       ├── GitHub
│       ├── Twitter/X
│       └── Other relevant platforms
├── Contact Form (optional)
│   ├── Name field
│   ├── Email field
│   ├── Message field
│   └── Submit button
└── Response Time Expectation (optional)
```

**Key Attributes**:
- Email: Valid email address or mailto link
- Phone: Formatted phone number (optional)
- Location: City, Country or Timezone
- Social Links: Array of platform name + URL
- Form Fields: Field name, type, validation rules, placeholder text

**Validation Rules** (for contact form):
- Name: Required, 2-100 characters
- Email: Required, valid email format
- Message: Required, 10-2000 characters
- All fields must have associated labels
- Error messages must be clear and actionable
- Success confirmation must be displayed

**Relationships**:
- Links to: Social media profiles, Bio page
- Referenced by: All pages (navigation), Bio page

---

### Entity 5: Navigation Structure

**What it represents**: Menu structure and wayfinding elements connecting all pages

**Content Structure**:
```
Navigation
├── Logo/Site Name (links to home)
├── Primary Menu Items
│   ├── Bio (active state)
│   ├── Skills
│   ├── Experience
│   └── Contact
├── Secondary Actions (optional)
│   ├── Resume Download
│   └── Theme Toggle (if dark mode)
└── Mobile Menu
    ├── Hamburger Button
    └── Expanded Menu Panel
```

**Key Attributes**:
- Menu Items: Array of {label, URL, currentPage}
- Logo: Image or text, links to homepage
- Active Indicator: CSS class or attribute for current page
- Mobile Breakpoint: 768px (switch to hamburger menu)

**Validation Rules**:
- All menu items must have valid URLs
- Current page must be visually indicated
- Mobile menu must be keyboard accessible
- All links must have descriptive text

**Relationships**:
- Appears on: All pages (consistent header)
- Links to: All main pages

---

### Entity 6: Visual Design System

**What it represents**: Design tokens and stylistic elements applied consistently across pages

**Content Structure**:
```
Design System
├── Color Palette
│   ├── Primary Color
│   ├── Secondary Color
│   ├── Accent Color
│   ├── Neutral Colors (grayscale)
│   └── Semantic Colors (success, error, warning)
├── Typography
│   ├── Font Families (primary, secondary)
│   ├── Font Sizes (base, scale ratios)
│   ├── Font Weights
│   └── Line Heights
├── Spacing Scale
│   ├── Base unit (4px or 8px)
│   └── Multipliers (0.5, 1, 2, 3, 4, 6, 8)
├── Component Styles
│   ├── Buttons (primary, secondary, sizes)
│   ├── Cards
│   ├── Forms
│   └── Navigation
└── Interaction States
    ├── Hover
    ├── Focus
    └── Active
```

**Key Attributes**:
- Colors: Hex or RGB values with contrast ratios documented
- Fonts: Font family names, fallback stacks
- Spacing: Pixel values based on base unit
- Components: CSS class names, variant definitions

**Validation Rules**:
- All color combinations must meet WCAG contrast requirements
- Maximum 2 font families
- Spacing must use scale values (no arbitrary pixels)
- All interactive elements must have hover and focus states

**Relationships**:
- Applied to: All pages and components
- Defined in: `css/variables.css`, `css/components.css`

---

## Content Validation Checklist

Before publishing each page, verify:

- [ ] All required content fields are populated
- [ ] Text is proofread (grammar, spelling, clarity)
- [ ] Images have appropriate alt text
- [ ] Links are functional and point to correct URLs
- [ ] Contact information is current and accurate
- [ ] Dates are in consistent format
- [ ] Content hierarchy is logical (headings in order)
- [ ] No placeholder or lorem ipsum text remains

---

## Content Authoring Guidelines

### Tone and Voice
- Professional yet approachable
- Confident without arrogance
- Clear and concise (avoid jargon)
- First-person perspective ("I", "my")

### Writing Best Practices
- Use active voice
- Quantify achievements where possible
- Keep paragraphs short (2-4 sentences)
- Use bullet points for scannability
- Avoid clichés ("team player", "hard worker")

### SEO Considerations
- Include relevant keywords naturally
- Write unique meta descriptions for each page
- Use descriptive page titles
- Structure content with proper heading hierarchy

---

**Status**: Phase 1 Complete - Content model defined and ready for implementation
