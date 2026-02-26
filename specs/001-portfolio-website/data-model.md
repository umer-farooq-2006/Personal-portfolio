# Content Model: Personal Portfolio Website

**Feature**: 001-portfolio-website  
**Date**: 2026-02-26  
**Purpose**: Define content structure, data attributes, and validation rules for portfolio sections

---

## Overview

This document defines the content structure for the personal portfolio website. Since this is a static website with no backend database, the "data model" refers to the organization and structure of content within the HTML document.

---

## Content Entities

### 1. Portfolio Owner

**Description**: The individual whose professional information is displayed throughout the portfolio.

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Full Name | Text | Yes | 2-100 characters | Bio section, Header |
| Professional Title | Text | Yes | 10-200 characters | Bio section |
| Profile Image | Image | Optional | WebP format, max 200KB, 400x400px minimum | Bio section |
| Short Bio | Text | Yes | 50-500 words | Bio section |
| Extended Bio | Text | Optional | 100-1000 words | Bio section (if separate) |
| Email | Email | Yes | Valid email format | Contact section |
| Location | Text | Optional | City, Country format | Bio or Contact |
| LinkedIn URL | URL | Optional | Valid LinkedIn profile URL | Contact/Footer |
| GitHub URL | URL | Optional | Valid GitHub profile URL | Contact/Footer |
| Other Social URLs | URL | Optional | Valid social media URLs | Contact/Footer |

**Relationships**:
- Owns multiple Skill entries
- Owns multiple Experience entries
- Has one Contact information set

---

### 2. Skill Entry

**Description**: Individual skill or competency displayed in the Skills section.

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Skill Name | Text | Yes | 2-50 characters | Skills section |
| Category | Text | Yes | One of: Technical, Professional, Tools, Languages | Skills section |
| Proficiency Level | Text | Optional | One of: Beginner, Intermediate, Advanced, Expert | Skills section |
| Years of Experience | Number | Optional | 0-50 years | Skills section |
| Icon/Image | Image | Optional | SVG preferred, max 50KB | Skills section |
| Description | Text | Optional | 10-200 characters | Skills section (tooltip or card) |

**Validation Rules**:
- Skill Name must be unique within category
- Category must be one of predefined values
- Proficiency Level must be consistent across all skills (if used)

**Example Structure**:
```html
<li class="skill-card" data-category="technical" data-proficiency="advanced">
  <span class="skill-name">JavaScript</span>
  <span class="skill-level">Advanced</span>
</li>
```

---

### 3. Experience Entry

**Description**: Professional work history item displayed in the Experience section.

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Job Title | Text | Yes | 2-100 characters | Experience section |
| Company Name | Text | Yes | 2-200 characters | Experience section |
| Company Logo | Image | Optional | WebP/PNG, max 100KB, 100x100px | Experience section |
| Employment Type | Text | Optional | One of: Full-time, Part-time, Contract, Internship, Freelance | Experience section |
| Start Date | Date | Yes | Month Year format (e.g., "January 2023") | Experience section |
| End Date | Date | Conditional | Month Year format or "Present" | Experience section |
| Location | Text | Optional | City, Country or "Remote" | Experience section |
| Description | Text | Yes | 50-500 characters | Experience section |
| Achievements | List | Yes | 3-5 bullet points, 10-100 characters each | Experience section |
| Technologies Used | List | Optional | Comma-separated skill names | Experience section |
| Company URL | URL | Optional | Valid company website URL | Experience section |

**Validation Rules**:
- End Date must be after Start Date (if provided)
- At least 3 achievement bullet points required
- Employment Type must be one of predefined values

**Example Structure**:
```html
<article class="experience-item" data-employment-type="full-time">
  <header class="experience-header">
    <h3 class="job-title">Software Developer</h3>
    <p class="company-name">Tech Company Inc.</p>
    <p class="experience-dates">January 2023 - Present</p>
    <p class="experience-location">Remote</p>
  </header>
  <div class="experience-description">
    <p>Developed and maintained web applications...</p>
  </div>
  <ul class="experience-achievements">
    <li>Reduced page load time by 40%</li>
    <li>Implemented responsive design for mobile users</li>
    <li>Collaborated with cross-functional team</li>
  </ul>
</article>
```

---

### 4. Content Section

**Description**: Major content area of the portfolio (Bio, Skills, Experience, Contact).

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Section ID | Text | Yes | Unique, lowercase, hyphenated (e.g., "bio", "skills") | HTML id attribute |
| Section Title | Text | Yes | 2-50 characters | Section heading |
| Section Order | Number | Yes | 1-4 (determines display order) | Navigation order |
| Navigation Label | Text | Yes | 2-20 characters | Navigation menu |
| Icon | Image | Optional | SVG preferred | Navigation (optional) |
| Background Color | Color | Optional | Valid CSS color | Section styling |
| CSS Class | Text | Yes | BEM-style naming | HTML class attribute |

**Validation Rules**:
- Section ID must be unique
- Section Order must be sequential (1, 2, 3, 4)
- Navigation Label must match section for accessibility

**Required Sections**:
1. Bio (order: 1)
2. Skills (order: 2)
3. Experience (order: 3)
4. Contact (order: 4)

---

### 5. Navigation Link

**Description**: Navigation menu item linking to a content section.

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Link Text | Text | Yes | Matches Section Navigation Label | Nav element |
| Target Section ID | Text | Yes | Must match existing Section ID | href attribute |
| Display Order | Number | Yes | Matches Section Order | Nav order |
| Active State | Boolean | Computed | True when section is in viewport | JavaScript |

**Validation Rules**:
- Target Section ID must exist in document
- Display Order must match Section Order
- Link Text should be concise (1-3 words)

**Example Structure**:
```html
<nav aria-label="Main navigation">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="#bio" class="nav-link active" data-section="bio">Bio</a>
    </li>
    <li class="nav-item">
      <a href="#skills" class="nav-link" data-section="skills">Skills</a>
    </li>
    <li class="nav-item">
      <a href="#experience" class="nav-link" data-section="experience">Experience</a>
    </li>
    <li class="nav-item">
      <a href="#contact" class="nav-link" data-section="contact">Contact</a>
    </li>
  </ul>
</nav>
```

---

### 6. Contact Information

**Description**: Contact methods and social media links in the Contact section.

**Content Fields**:
| Field | Type | Required | Validation | Location |
|-------|------|----------|------------|----------|
| Email Address | Email | Yes | Valid email format, mailto: link | Contact section |
| Email Label | Text | Optional | "Email", "Get in Touch", etc. | Contact section |
| Phone Number | Phone | Optional | Valid phone format with country code | Contact section |
| LinkedIn URL | URL | Optional | Valid LinkedIn profile URL | Contact/Footer |
| GitHub URL | URL | Optional | Valid GitHub profile URL | Contact/Footer |
| Twitter/X URL | URL | Optional | Valid Twitter/X profile URL | Contact/Footer |
| Other Social URLs | URL | Optional | Valid social media URLs | Contact/Footer |
| Contact Form Action | URL | Conditional | Required if contact form used | Form action attribute |

**Validation Rules**:
- At least one contact method required (email minimum)
- All URLs must be valid and accessible
- Email must use mailto: protocol
- Phone must use tel: protocol

**Example Structure**:
```html
<section id="contact" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Get In Touch</h2>
  <div class="contact-methods">
    <a href="mailto:hello@example.com" class="contact-link">
      <span class="contact-icon">📧</span>
      <span class="contact-label">Email</span>
      <span class="contact-value">hello@example.com</span>
    </a>
    <a href="https://linkedin.com/in/username" class="contact-link" target="_blank" rel="noopener noreferrer">
      <span class="contact-icon">💼</span>
      <span class="contact-label">LinkedIn</span>
      <span class="contact-value">View Profile</span>
    </a>
  </div>
</section>
```

---

## Data Attributes for JavaScript

### Navigation Hooks
```html
<nav data-navigation="main">
  <a href="#bio" data-nav-link data-section="bio">Bio</a>
  <a href="#skills" data-nav-link data-section="skills">Skills</a>
</nav>
```

### Section Hooks
```html
<section id="bio" data-section data-section-name="bio">
  <!-- Content -->
</section>
```

### Component Hooks
```html
<button data-scroll-to-top>Back to Top</button>
<button data-mobile-menu-toggle>Menu</button>
```

---

## State Transitions

### Navigation Active State

**States**:
- `inactive` (default): Link is not highlighted
- `active`: Link is highlighted (corresponding section is in viewport)

**Transitions**:
```
[inactive] --(section enters viewport)--> [active]
[active] --(section leaves viewport)--> [inactive]
```

**Implementation**:
```javascript
// State managed by Intersection Observer
const navState = {
  activeSection: 'bio', // Default to first section
  
  updateActiveSection(sectionId) {
    // Remove active from all
    document.querySelectorAll('[data-nav-link]')
      .forEach(link => link.classList.remove('active'));
    
    // Add active to current
    const activeLink = document.querySelector(`[data-nav-link][data-section="${sectionId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
      this.activeSection = sectionId;
    }
  }
};
```

---

## Validation Rules Summary

### Content Validation

| Rule | Description | Error Message |
|------|-------------|---------------|
| Required sections present | All 4 sections (Bio, Skills, Experience, Contact) must exist | "Missing required section: {section}" |
| Unique section IDs | Each section must have unique ID | "Duplicate section ID: {id}" |
| Valid email format | Email must match pattern | "Invalid email format" |
| Valid URL format | All URLs must be valid | "Invalid URL: {url}" |
| Image alt text | All images must have alt attribute | "Image missing alt text" |
| Heading hierarchy | H1 → H2 → H3 without skipping | "Invalid heading hierarchy" |

### Link Validation

| Rule | Description | Error Message |
|------|-------------|---------------|
| Internal links work | All #section links must target existing IDs | "Broken link: #{id}" |
| External links valid | All external URLs should be accessible | "External link may be broken: {url}" |
| Secure external links | External links should use HTTPS | "Insecure link: {url}" |
| External link attributes | External links should have target="_blank" rel="noopener" | "External link missing security attributes" |

---

## Content Guidelines

### Tone and Voice
- **Professional yet approachable**: Friendly but not casual
- **Confident but not arrogant**: State achievements factually
- **Concise**: Use bullet points, avoid long paragraphs
- **Active voice**: "Developed features" not "Features were developed"

### Writing Standards
- **Bio**: 2-3 short paragraphs, 150-300 words total
- **Skills**: Use industry-standard names (JavaScript, not JS)
- **Experience**: Start bullet points with action verbs (Developed, Led, Created)
- **Contact**: Clear call-to-action ("Let's connect", "Get in touch")

### Accessibility Considerations
- Use plain language (8th-10th grade reading level)
- Avoid jargon without explanation
- Provide context for links (not "click here")
- Use descriptive link text ("View my GitHub" not "GitHub")

---

## Content Checklist

Before publishing, verify:

**Bio Section**:
- [ ] Full name present
- [ ] Professional title clear
- [ ] Bio is 2-3 paragraphs
- [ ] No spelling or grammar errors
- [ ] Profile image optimized (if used)

**Skills Section**:
- [ ] Skills categorized logically
- [ ] Industry-standard naming
- [ ] No outdated technologies (unless relevant)
- [ ] Consistent formatting

**Experience Section**:
- [ ] Chronological order (newest first or oldest first)
- [ ] Dates formatted consistently
- [ ] 3-5 achievement bullets per role
- [ ] Action verbs used
- [ ] Company names accurate

**Contact Section**:
- [ ] Email address correct and functional
- [ ] Social media links working
- [ ] At least one contact method present
- [ ] External links have security attributes

**Global**:
- [ ] All links functional
- [ ] All images have alt text
- [ ] Consistent tone throughout
- [ ] No placeholder content remaining
- [ ] Contact information current

---

## References

- [Feature Specification](./specify.md) - User requirements
- [Implementation Plan](./plan.md) - Development phases
- [Research](./research.md) - Technical decisions
