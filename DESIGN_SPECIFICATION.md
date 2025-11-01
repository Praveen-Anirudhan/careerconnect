# CareerConnect - Design Specification Document

## Table of Contents
1. [Overview](#overview)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Page Layouts](#page-layouts)
8. [Responsive Behavior](#responsive-behavior)
9. [Interactive States](#interactive-states)
10. [Accessibility](#accessibility)

---

## Overview

**Project Name:** CareerConnect  
**Type:** Job Portal Web Application  
**Target Platforms:** Desktop, Tablet, Mobile (responsive)  
**Primary Font:** Inter (Google Fonts)  
**Design System:** Custom design tokens with Tailwind CSS  
**Component Library:** Shadcn UI (customized)

**Purpose:**  
CareerConnect is a modern job portal that connects job seekers with employers. The design emphasizes clarity, professionalism, and ease of use while maintaining a contemporary aesthetic.

---

## Design Principles

1. **Professional & Trustworthy**: Clean layouts with ample whitespace convey reliability
2. **User-Centric**: Clear navigation and intuitive interactions prioritize user experience
3. **Accessible**: WCAG 2.1 compliant with proper contrast ratios and semantic HTML
4. **Responsive-First**: Mobile-optimized layouts that scale beautifully to desktop
5. **Consistent**: Unified design language across all pages and components

---

## Color System

### Primary Palette

**Primary (Teal-Blue)**
- Light Mode: `hsl(188, 94%, 37%)` - #0891B2
- Dark Mode: `hsl(188, 94%, 42%)` - Slightly lighter variant
- Usage: CTAs, links, icons, emphasis elements
- Hover State: `hsl(188, 94%, 42%)`

**Secondary (Cool Gray)**
- Light Mode: `hsl(220, 14%, 96%)` - #F3F4F6
- Dark Mode: `hsl(217, 25%, 25%)`
- Usage: Backgrounds, secondary buttons, hover states

**Background**
- Light Mode: `hsl(0, 0%, 100%)` - Pure white
- Dark Mode: `hsl(217, 33%, 17%)` - Deep slate

**Foreground (Text)**
- Light Mode: `hsl(217, 33%, 17%)` - Dark slate
- Dark Mode: `hsl(0, 0%, 100%)` - White

### Semantic Colors

**Success**: `hsl(142, 71%, 45%)` - Green  
**Warning**: `hsl(38, 92%, 50%)` - Amber  
**Destructive**: `hsl(0, 84%, 60%)` - Red  
**Info**: `hsl(199, 89%, 48%)` - Blue

### Muted/Secondary Text
- Light Mode: `hsl(215, 16%, 47%)` - Medium gray
- Dark Mode: `hsl(215, 20%, 65%)` - Light gray

### Border Colors
- Light Mode: `hsl(214, 32%, 91%)` - Very light gray
- Dark Mode: `hsl(217, 25%, 30%)` - Dark gray

### Color Usage Guidelines

- **70-20-10 Rule**:
    - 70% neutral backgrounds (white/gray)
    - 20% secondary colors (light grays)
    - 10% primary accent (teal-blue)

- **Contrast Requirements**:
    - Text on background: minimum 4.5:1 ratio
    - Large text: minimum 3:1 ratio
    - Interactive elements: minimum 3:1 ratio

---

## Typography

### Font Family

**Primary**: Inter (sans-serif)
- Weights: 300, 400, 500, 600, 700, 800
- Source: Google Fonts
- Fallback: system-ui, sans-serif

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| H1 | 36-48px (2.25-3rem) | 700 (Bold) | 1.2 | Page titles |
| H2 | 30-36px (1.875-2.25rem) | 600 (Semibold) | 1.3 | Section headers |
| H3 | 24-30px (1.5-1.875rem) | 600 (Semibold) | 1.4 | Subsection headers |
| H4 | 20-24px (1.25-1.5rem) | 600 (Semibold) | 1.4 | Card titles |
| Body Large | 18px (1.125rem) | 400 (Regular) | 1.6 | Hero text, important content |
| Body | 16px (1rem) | 400 (Regular) | 1.6 | Default paragraph text |
| Body Small | 14px (0.875rem) | 400 (Regular) | 1.5 | Secondary text, labels |
| Caption | 12px (0.75rem) | 400 (Regular) | 1.4 | Metadata, timestamps |

### Typography Guidelines

- **Desktop**: Use larger end of size ranges
- **Mobile**: Use smaller end of size ranges (automatically responsive)
- **Max Line Length**: 65-75 characters for optimal readability
- **Paragraph Spacing**: 1.5-2rem between paragraphs

---

## Spacing & Layout

### Spacing Scale (8px Grid System)

All spacing follows an 8px base unit for visual consistency:

| Token | Size | Usage |
|-------|------|-------|
| space-0.5 | 2px | Micro spacing (borders) |
| space-1 | 4px | Tight spacing |
| space-2 | 8px | Minimal spacing |
| space-3 | 12px | Small spacing |
| space-4 | 16px | Base spacing |
| space-6 | 24px | Medium spacing |
| space-8 | 32px | Large spacing |
| space-12 | 48px | XL spacing |
| space-16 | 64px | XXL spacing |
| space-20 | 80px | Section spacing |

### Layout Grid

**Container Max-Width**: 1280px (80rem)  
**Container Padding**:
- Mobile: 16px (1rem)
- Tablet: 24px (1.5rem)
- Desktop: 32px (2rem)

**Breakpoints**:
```
sm: 640px   (mobile landscape)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (large desktop)
2xl: 1536px (extra large)
```

### Common Layout Patterns

**Card Grid**:
- Mobile: 1 column
- Tablet: 2 columns, gap-6 (24px)
- Desktop: 3 columns, gap-6 (24px)

**Sidebar Layout**:
- Sidebar: 256px (16rem) fixed width
- Main content: flex-1 (remaining space)

---

## Components

### Buttons

#### Primary Button
- Background: Primary color (#0891B2)
- Text: White
- Padding: 12px 24px (medium), 16px 32px (large)
- Border Radius: 8px (0.5rem)
- Font Weight: 500 (Medium)
- Hover: Slightly lighter primary
- Active: Slightly darker primary
- Shadow: Subtle on hover

#### Secondary Button
- Background: Secondary color (#F3F4F6)
- Text: Foreground color
- Padding: Same as primary
- Border Radius: 8px
- Hover: Slightly darker secondary

#### Outline Button
- Background: Transparent
- Border: 1px solid border color
- Text: Foreground color
- Padding: Same as primary
- Hover: Secondary background

#### Button Sizes
- Small: height 32px, px-4 py-2
- Default: height 40px, px-6 py-2.5
- Large: height 48px, px-8 py-3

### Cards

**Standard Card**:
- Background: White (light) / Card background (dark)
- Border: 1px solid border color
- Border Radius: 8px (0.5rem)
- Padding: 24px (1.5rem)
- Shadow: Subtle elevation on hover
- Transition: All 200ms ease

**Job Card** (Special variant):
- Header with title and badge
- Icon + metadata row
- Tag pills row
- Action buttons at bottom
- Hover: Increased shadow + primary border tint

### Form Elements

#### Input Fields
- Height: 40px (2.5rem)
- Padding: 12px 16px
- Border: 1px solid input border
- Border Radius: 6px (0.375rem)
- Font Size: 16px (to prevent zoom on mobile)
- Focus: Primary ring (2px)
- Placeholder: Muted foreground color

#### Textarea
- Min Height: 120px
- Padding: 12px 16px
- Resizable: Vertical only
- Other properties: Same as input

#### Select Dropdown
- Height: 40px
- Chevron icon on right
- Background: Card background
- Z-index: 50 (to appear above other content)
- Max height: 300px with scroll

### Badges

**Default Badge**:
- Background: Primary color
- Text: White
- Padding: 4px 12px
- Border Radius: 12px (fully rounded)
- Font Size: 12px
- Font Weight: 500

**Variants**:
- Secondary: Gray background
- Outline: Transparent with border
- Destructive: Red background

### Navigation

#### Top Navbar
- Height: 64px (4rem)
- Background: Background with 95% opacity + backdrop blur
- Border Bottom: 1px border color
- Position: Sticky top
- Z-index: 50

**Desktop Navigation**:
- Logo + nav links (centered) + auth buttons
- Nav links: 14px, medium weight
- Active state: Primary color
- Hover: Primary color with transition

**Mobile Navigation**:
- Hamburger menu (under 768px)
- Full-screen overlay menu
- Stack layout for links

#### Sidebar (Recruiter Dashboard)
- Width: 256px (16rem)
- Background: Muted background
- Border Right: 1px border color
- Fixed position
- Full height with logout at bottom

### Search Bar

**Hero Search Bar**:
- Max Width: 896px (56rem)
- Background: Card background
- Shadow: Large elevation
- Padding: 16px
- Border Radius: 8px
- Grid Layout: [1fr 1fr auto] on desktop
- Stack Layout: Column on mobile

**Search Input**:
- Icon positioned absolutely left
- Padding left: 40px (to account for icon)

---

## Page Layouts

### Home Page

**Structure**:
1. Hero Section (gradient background)
    - Two-column grid (text + image)
    - Search bar component
    - Primary CTA buttons
2. Stats Section (light background)
    - Three-column grid
    - Icon + number + label
3. Featured Jobs Section
    - Three-column card grid
    - "View All" CTA

**Spacing**:
- Section padding: 64px vertical (mobile: 48px)
- Between sections: Natural flow with background changes

### Job Listings Page

**Structure**:
- Search bar in header area
- Two-column layout:
    - Sidebar (280px): Filters with checkboxes
    - Main (flex-1): Job card grid (2 columns)

**Mobile**: Stack sidebar above content

### Job Details Page

**Structure**:
- Single column layout (max-width: 896px)
- Card container with:
    - Header: Title, company, badges
    - Metadata row: Location, salary, date
    - Tag pills
    - Action buttons
    - Detailed sections with icons

### Recruiter Dashboard

**Structure**:
- Sidebar navigation (fixed, 256px)
- Main content area:
    - Stats cards (3-column grid)
    - Activity table/list

**Sidebar Items**:
- Icon + text layout
- Active state: Secondary background
- Hover: Ghost variant
- CTA button with spacing

---

## Responsive Behavior

### Breakpoint Strategy

**Mobile First Approach**:
1. Design for mobile (320px-767px)
2. Enhance for tablet (768px-1023px)
3. Optimize for desktop (1024px+)

### Layout Transformations

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero Grid | Stack | Stack | 2 columns |
| Job Cards | 1 column | 2 columns | 3 columns |
| Sidebar | Hidden/Toggle | Hidden/Toggle | Fixed visible |
| Search Bar | Stack inputs | Stack inputs | Horizontal grid |
| Stats Grid | 1 column | 3 columns | 3 columns |
| Navigation | Hamburger | Hamburger | Full nav bar |

### Font Size Scaling

Headings automatically scale based on viewport:
- H1: 36px mobile → 48px desktop
- H2: 30px mobile → 36px desktop
- Body text remains 16px (no scaling)

---

## Interactive States

### Hover States

**Buttons**:
- Primary: Lighter background (primary-hover token)
- Outline: Secondary background
- Card: Elevated shadow + subtle border color change

**Links**:
- Text: Primary color on hover
- Underline: Transition from left to right (animation)

**Cards**:
- Shadow: Increase elevation (shadow-lg)
- Border: Subtle primary tint
- Transition: 200ms ease

### Focus States

**Keyboard Navigation**:
- All interactive elements: 2px primary ring
- Offset: 2px from element
- Border radius matches element

**Input Fields**:
- Border: Primary color
- Ring: 2px primary color
- Outline: None (replaced by ring)

### Active States

**Buttons**:
- Slightly darker than base color
- Scale: 98% (subtle press effect)

**Navigation Links**:
- Text color: Primary
- Font weight: 500 (medium)

### Loading States

**Skeleton Screens**:
- Background: Muted color
- Animation: Pulse
- Use for: Cards, images, text blocks

### Disabled States

**Buttons**:
- Opacity: 50%
- Cursor: not-allowed
- No hover effects

---

## Accessibility

### Color Contrast

All color combinations meet WCAG 2.1 Level AA standards:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

**Tested Combinations**:
- Primary on white: 4.8:1 ✓
- Foreground on background: 12.6:1 ✓
- Muted text on background: 4.7:1 ✓

### Semantic HTML

**Proper Structure**:
- `<nav>` for navigation
- `<main>` for main content
- `<header>` for page headers
- `<footer>` for footers
- `<article>` for job cards
- `<section>` for page sections

**Heading Hierarchy**:
- One H1 per page
- Logical nesting (H1 → H2 → H3)
- No skipping levels

### Keyboard Navigation

**Tab Order**:
- Logical flow from top to bottom
- Skip links for main content
- Focus visible on all interactive elements

**Interactive Elements**:
- All buttons: keyboard accessible
- Forms: proper label associations
- Modals: focus trapping

### Screen Reader Support

**ARIA Labels**:
- Icon-only buttons have aria-label
- Form fields have associated labels
- Status messages use aria-live

**Alt Text**:
- All images have descriptive alt text
- Decorative images: empty alt=""

### Form Accessibility

**Labels**:
- Visible labels for all inputs
- Proper for/id association
- Required fields indicated

**Error Messages**:
- Inline validation
- Color not sole indicator
- Clear, helpful messaging

---

## Animation & Motion

### Transitions

**Standard Duration**: 200ms  
**Easing**: ease-in-out or cubic-bezier(0.4, 0, 0.2, 1)

**Common Transitions**:
- Color changes: 200ms ease
- Transform (scale, translate): 200ms ease
- Opacity: 150ms ease
- Shadow: 200ms ease

### Hover Animations

**Cards**:
```css
transition: shadow 200ms ease, border-color 200ms ease;
hover: shadow-lg, border-primary/50
```

**Buttons**:
```css
transition: background-color 200ms ease, transform 100ms ease;
hover: background-primary-hover
active: scale-98
```

### Reduced Motion

Respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Icon System

**Library**: Lucide React  
**Default Size**: 16px (1rem) or 20px (1.25rem)  
**Stroke Width**: 2px  
**Color**: Inherits from text color

**Common Icons**:
- Briefcase: Job/career context
- User: Profile/account
- MapPin: Location
- DollarSign: Salary
- Clock: Time/date
- Search: Search functionality
- Upload: File upload
- Eye: View action
- Edit: Edit action
- Trash: Delete action

**Usage Guidelines**:
- Always pair with text for primary actions
- Use consistent sizing within context
- Ensure proper spacing (gap-2 or gap-3)

---

## File Structure

```
src/
├── components/
│   ├── ui/              # Shadcn components
│   ├── Navbar.tsx       # Global navigation
│   ├── Footer.tsx       # Global footer
│   ├── SearchBar.tsx    # Search component
│   └── JobCard.tsx      # Job listing card
├── pages/
│   ├── Home.tsx
│   ├── Jobs.tsx
│   ├── JobDetails.tsx
│   ├── ApplyJob.tsx
│   ├── AppliedJobs.tsx
│   ├── StyleGuide.tsx
│   └── recruiter/
│       ├── Login.tsx
│       ├── Dashboard.tsx
│       ├── MyJobs.tsx
│       ├── PostJob.tsx
│       └── Applicants.tsx
├── data/
│   └── mockJobs.ts      # Job data structure
├── index.css            # Design tokens
└── App.tsx              # Routing
```

---

## Design Tokens Reference

### Complete Color Token List

```css
/* Light Mode */
--background: 0 0% 100%;
--foreground: 217 33% 17%;
--card: 0 0% 100%;
--card-foreground: 217 33% 17%;
--popover: 0 0% 100%;
--popover-foreground: 217 33% 17%;
--primary: 188 94% 37%;
--primary-foreground: 0 0% 100%;
--primary-hover: 188 94% 42%;
--secondary: 220 14% 96%;
--secondary-foreground: 217 33% 17%;
--muted: 220 14% 96%;
--muted-foreground: 215 16% 47%;
--accent: 188 94% 37%;
--accent-foreground: 0 0% 100%;
--destructive: 0 84% 60%;
--destructive-foreground: 0 0% 100%;
--border: 214 32% 91%;
--input: 214 32% 91%;
--ring: 188 94% 37%;
--radius: 0.5rem;
--success: 142 71% 45%;
--warning: 38 92% 50%;
--info: 199 89% 48%;
```

### Border Radius Tokens

```css
--radius: 0.5rem;      /* 8px - default */
lg: var(--radius);     /* 8px - cards, buttons */
md: calc(var(--radius) - 2px);  /* 6px - inputs */
sm: calc(var(--radius) - 4px);  /* 4px - small elements */
```

---

## Component States Matrix

| Component | Default | Hover | Focus | Active | Disabled |
|-----------|---------|-------|-------|--------|----------|
| Primary Button | Primary bg | Primary-hover bg | Ring-primary | Scale-98 | Opacity-50 |
| Outline Button | Transparent | Secondary bg | Ring-primary | Scale-98 | Opacity-50 |
| Card | White bg | Shadow-lg | Ring-primary | - | - |
| Link | Foreground | Primary | Ring-primary | Primary | Opacity-50 |
| Input | White bg | Border-primary | Ring-primary | - | Opacity-50 |
| Checkbox | White bg | Primary/10 bg | Ring-primary | Primary bg | Opacity-50 |

---

## Performance Considerations

### Image Optimization
- Hero images: WebP format, lazy loading
- Maximum width: 1920px
- Responsive images with srcset

### Font Loading
- Google Fonts with display=swap
- Preconnect to fonts.googleapis.com
- Font weights: Only load required weights

### Animation Performance
- Use transform and opacity for animations
- Avoid animating layout properties (width, height, margin)
- Use will-change sparingly

---

## Browser Support

**Modern Browsers**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**Graceful Degradation**:
- Backdrop blur fallback: Solid background
- CSS Grid fallback: Flexbox
- Modern features: Progressive enhancement

---

## Future Enhancements

Potential areas for expansion:
1. Dark mode toggle (system already supports it)
2. Advanced filtering with chips
3. Save/favorite jobs functionality
4. Email notification templates
5. Enhanced recruiter analytics dashboard
6. Mobile app considerations

---

## Version History

**v1.0** - Initial Design System
- Complete color palette
- Typography system
- 10 responsive pages
- Component library
- Style guide

---

## Credits

**Design System**: Custom built on Tailwind CSS  
**Components**: Shadcn UI (customized)  
**Icons**: Lucide React  
**Fonts**: Inter (Google Fonts)

---

*This specification document serves as the single source of truth for CareerConnect's design system. All implementations should reference these guidelines for consistency.*