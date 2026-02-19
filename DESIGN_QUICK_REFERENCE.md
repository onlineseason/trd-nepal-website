# TRD Website - Design Quick Reference Guide

## 🎨 Color System

### Primary Colors
- **Blue**: #0066ff (Primary action, hover states)
- **Red/Orange**: #ff4444 (Accents, alerts)
- **Cyan**: #00d4ff (Secondary highlights)

### Dark Theme
- **Background**: #111827 (slate-900)
- **Cards**: #1e293b (slate-800)
- **Borders**: #334155 (slate-700)
- **Text**: #f1f5f9 (white/light)

## 🎬 Animation Classes

```css
.animate-fade-in-up     /* Entrance animation */
.animate-float          /* Subtle floating effect */
.neon-glow-blue        /* Blue glowing border */
.neon-glow-red         /* Red glowing border */
.gradient-text         /* Animated gradient text */
```

## 📐 Spacing Scale
- Small: 4px (space-1)
- Medium: 8px (space-2)
- Large: 16px (space-4)
- XL: 24px (space-6)
- 2XL: 32px (space-8)

## 🔤 Typography

### Headlines
- Font: Sora
- Weight: 700-800 (Bold)
- Sizes: 2xl, 3xl, 4xl, 5xl, 6xl, 7xl

### Body Text
- Font: Inter
- Weight: 400 (Regular)
- Size: base (16px)
- Line Height: 1.5-1.6

## 🎯 Button Styles

### Primary CTA
```tsx
<Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
  Action Text
</Button>
```

### Secondary CTA
```tsx
<Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-500/10">
  Secondary Text
</Button>
```

## 🃏 Card Components

### Standard Card
```tsx
<Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50">
  {/* Content */}
</Card>
```

### Glow Effect Card
```tsx
<Card className="neon-glow-blue p-8">
  {/* Content */}
</Card>
```

## 📱 Responsive Grid

### 1 Column (Mobile)
```tsx
<div className="grid grid-cols-1">
```

### 2 Columns (Tablet)
```tsx
<div className="grid md:grid-cols-2">
```

### 3 Columns (Desktop)
```tsx
<div className="grid lg:grid-cols-3">
```

## 🎪 Section Structure

### Hero Section
```tsx
<section className="relative pt-32 pb-20 px-4 overflow-hidden">
  {/* Background elements */}
  {/* Content */}
</section>
```

### Regular Section
```tsx
<section className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
  <div className="container mx-auto max-w-7xl">
    {/* Content */}
  </div>
</section>
```

## 🎁 Icon Usage

```tsx
import { Icon } from "lucide-react"

<div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
  <Icon className="w-6 h-6 text-blue-400" />
</div>
```

## ✨ Special Effects

### Neon Border
```css
border: 2px solid #0066ff;
box-shadow: 0 0 10px rgba(0, 102, 255, 0.5);
```

### Gradient Text
```html
<span class="gradient-text">Your Text</span>
```

### Float Animation
```tsx
<div className="animate-float">
  Floating Element
</div>
```

## 📊 Common Patterns

### Stats Card
```tsx
<Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30 p-8 text-center">
  <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
  <div className="text-gray-300 text-sm">Students Guided</div>
</Card>
```

### Feature List
```tsx
<div className="space-y-3">
  {items.map((item, i) => (
    <div key={i} className="flex items-center gap-3">
      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
      <span className="text-gray-300">{item}</span>
    </div>
  ))}
</div>
```

### Service Card
```tsx
<Link href={service.link}>
  <Card className="group bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-blue-500/50 p-8">
    <Icon className="w-8 h-8 text-blue-400 group-hover:scale-110" />
    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400">{service.title}</h3>
    <p className="text-gray-400">{service.description}</p>
  </Card>
</Link>
```

## 🔗 Navigation Links

- `/` - Homepage
- `/services` - Services
- `/about` - About
- `/test-prep` - Test Preparation
- `/counseling` - Counseling
- `/contact` - Contact
- `https://wa.me/9779704565262` - WhatsApp

## 📞 Contact Integration

### Email
```tsx
<a href="mailto:soptrd@gmail.com">Email</a>
```

### WhatsApp
```tsx
<a href="https://wa.me/9779704565262">WhatsApp</a>
```

### Formspree Form
```tsx
<form onSubmit={handleSubmit}>
  {/* Fields */}
</form>
```

## 🎨 Design Tokens (CSS Variables)

```css
--background: 240 20% 8%;
--foreground: 210 40% 98%;
--card: 240 25% 14%;
--primary: 211 100% 50%;
--secondary: 16 100% 50%;
--accent: 211 100% 55%;
--border: 240 20% 20%;
--radius: 0.75rem;
```

## ✅ Quality Checklist

When creating/updating pages, ensure:
- [ ] Dark theme applied (bg-slate-900)
- [ ] Neon accents used (blue/red)
- [ ] Animations added (fade-in-up)
- [ ] Responsive grid (md:grid-cols-2)
- [ ] Cards have hover states
- [ ] Icons from lucide-react
- [ ] Proper spacing (gap, px, py)
- [ ] CTAs styled correctly
- [ ] Mobile optimized
- [ ] Links tested

## 🚀 Performance Tips

1. Use CSS animations, not JavaScript
2. Limit blur effects on hover
3. Use transform for smooth animations
4. Add will-change for frequently animated elements
5. Optimize images (WebP format)
6. Lazy load below-the-fold content
7. Minimize CSS size
8. Use CSS variables for theming

## 📚 Component Library

All UI components are in `/components/ui/`:
- `button.tsx`
- `card.tsx`
- `input.tsx`
- `textarea.tsx`
- `badge.tsx`
- And more...

Import as:
```tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

## 🎯 Design System Version

- **Version**: 2.0
- **Theme**: Dark (slate-900 base)
- **Colors**: Blue-Red Neon
- **Typography**: Sora + Inter
- **Status**: Production Ready

---

**Keep this document handy for consistent design implementation!**
