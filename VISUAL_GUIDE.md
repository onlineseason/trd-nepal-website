# TRD Study Abroad - Visual Design Guide

## Brand Colors

### Primary Color System
```
Deep Slate (Background): #0f172a
Electric Blue (Primary): #3b82f6
Neon Red (Secondary): #ef4444
```

### Accent Colors for Services
- **Test Prep**: Blue gradient
- **SOP Writing**: Red gradient
- **Counseling**: Purple gradient
- **Visa**: Green gradient
- **Scholarships**: Yellow gradient
- **Interviews**: Pink gradient

## Logo & Branding

### Logo Assets
- **Logo**: `/public/logo.png` - Professional 3D rendered globe with graduation cap
- **Services Poster**: `/public/services-poster.png` - Comprehensive visual of all services
- **Brand Name**: TRD Study Abroad (not SOP TRD Nepal)
- **Tagline**: "Your Path to Global Education"

## Homepage Layout

### Hero Section (Above Fold)
```
┌─────────────────────────────────────────┐
│                                         │
│    Your Path to Global Education        │
│                                         │
│    [Logo Display - Right Side]         │
│                                         │
│    [Explore Services] [Consultation]    │
│                                         │
│    5000+ | 95% | 50+                   │
│    Students | Success | Countries       │
│                                         │
└─────────────────────────────────────────┘
```

### Services Section (6 Cards - 2x3 Grid)
```
┌──────────────┐  ┌──────────────┐
│ Test Prep    │  │ SOP Writing  │
│ (Blue)       │  │ (Red)        │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│ Counseling   │  │ Visa         │
│ (Purple)     │  │ (Green)      │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│ Scholarships │  │ Interviews   │
│ (Yellow)     │  │ (Pink)       │
└──────────────┘  └──────────────┘
```

### Features Section (2 Column)
```
┌─────────────────────┬──────────────┐
│                     │              │
│  Why Choose TRD     │  Services    │
│  - Expert Team      │  Poster      │
│  - Proven Results   │  Image       │
│  - Global Network   │              │
│  - Personal Guidance│              │
│                     │              │
└─────────────────────┴──────────────┘
```

### Testimonials Section (3 Cards)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Testimonial 1│  │ Testimonial 2│  │ Testimonial 3│
│ MIT, USA     │  │ Oxford, UK   │  │ Toronto, CAN │
└──────────────┘  └──────────────┘  └──────────────┘
```

## Navigation Bar

### Desktop Layout
```
┌─────────────────────────────────────────────────┐
│ TRD [Logo]  │ Home About Services Test Prep ... │ [Call] [Quote]
└─────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌─────────────────────────────────┐
│ TRD [Logo]               [Menu] │
├─────────────────────────────────┤
│ Home                            │
│ About                           │
│ Services                        │
│ Test Prep                       │
│ [Call] [Quote]                  │
└─────────────────────────────────┘
```

## Color Gradient Effects

### Primary Gradient (Blue to Red)
```css
background: linear-gradient(to right, #3b82f6, #ef4444);
```
Used for:
- Main CTA buttons
- Hero section accents
- Key headings

### Service Card Gradients
```css
Test Prep:     from-blue-600 to-blue-500
SOP Writing:   from-red-600 to-red-500
Counseling:    from-purple-600 to-purple-500
Visa:          from-green-600 to-green-500
Scholarships:  from-yellow-600 to-yellow-500
Interviews:    from-pink-600 to-pink-500
```

## Typography

### Heading Styles
```
H1: 48px-72px bold, gradient text, white
H2: 36px-48px bold, white
H3: 20px-24px bold, white/blue-400
H4: 16px-20px bold, white
```

### Body Text
```
Primary:   Gray-300 (readable on dark)
Secondary: Gray-400 (lighter content)
Accent:    Blue-400, Red-400 (action items)
```

## Spacing & Layout

### Container Widths
```
Mobile:   100% (0-640px)
Tablet:   90% (641px-1024px)
Desktop:  1280px max with padding
```

### Common Spacing
```
Section padding:    py-20 (5rem)
Card padding:       p-8 (2rem)
Gap between items:  gap-8 (2rem)
Border radius:      rounded-lg (0.5rem)
```

## Animation Effects

### Hover States
```
Cards:     border-color change, shadow-lg, shadow-blue-500/20
Icons:     scale-110 (hover)
Links:     color-to-blue-400 (hover)
Buttons:   gradient-shift (hover)
```

### Background Animations
```
Pulse effect:    animate-pulse on gradient orbs
Duration:        2s for main, 2s delay for secondary
Opacity:         20% (opacity-20)
Blur:            blur-3xl
```

## Component Examples

### Service Card (Before Hover)
```
┌────────────────────────────┐
│ [Icon with bg-blue-500/20] │
│ Service Title              │
│ Description text...        │
│ Feature 1                  │
│ Feature 2                  │
│ [Learn More →]             │
└────────────────────────────┘
```

### Service Card (Hover State)
```
┌────────────────────────────┐
│ [Icon scaled 1.1x]         │
│ Service Title (blue-400)   │
│ Description text...        │
│ Feature 1                  │
│ Feature 2                  │
│ [Learn More →] (gap-3)     │
└────────────────────────────┘
Border changes to blue-500
Shadow appears: shadow-blue-500/20
```

## Response Breakpoints

### Mobile First Approach
```
Base:      320px+ (mobile)
sm:        640px+ (large mobile)
md:        768px+ (tablet)
lg:        1024px+ (desktop)
xl:        1280px+ (large desktop)
2xl:       1536px+ (huge desktop)
```

## Image Guidelines

### Logo Usage
- Primary: `/public/logo.png` (use on hero)
- Size: 300px-500px depending on context
- Background: Transparent (works on dark bg)
- Placement: Right side of hero section

### Poster Usage
- `/public/services-poster.png`
- Size: Full width on mobile, 500px on desktop
- Placement: Features section (right column)
- Border radius: rounded-lg

### User Avatars
- `/public/placeholder-user.jpg`
- Size: 48px-64px
- Border radius: rounded-full
- Used in testimonials and team sections

## Accessibility Features

### Color Contrast
- Heading on background: 7:1 ratio
- Body text on background: 4.5:1 ratio
- All interactive elements: WCAG AA compliant

### Interactive Elements
- Button minimum size: 44x44px
- Link underline on focus
- Keyboard navigation support
- Screen reader friendly headings

### Text Readability
- Line height: 1.5-1.6 (relaxed)
- Max line width: 65-75 characters
- Font size: 16px minimum body text
- Proper heading hierarchy (h1, h2, h3...)

## Dark Mode Considerations

The entire design is optimized for dark mode:
- White/light gray text on dark backgrounds
- Blue and red neons for visibility
- No pure white backgrounds
- Proper contrast ratios throughout
- Eye-friendly color palette

---

## Quick Reference

**Primary Action Button**
- Background: Linear gradient (blue → red)
- Text: White, bold
- Border: None
- Hover: Darker gradient

**Secondary Button**
- Background: Transparent
- Border: 1px gray-500
- Text: Gray-300
- Hover: bg-gray-500/10

**Cards**
- Background: slate-800/50 (semi-transparent)
- Border: 1px slate-700
- Hover Border: blue-500 or service color
- Rounded: lg (0.5rem)
- Padding: 2rem

**Text on Dark Background**
- Headings: White
- Body: Gray-300
- Secondary: Gray-400
- Accents: Blue-400, Red-400

