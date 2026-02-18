# Design System - Essentz Global

This document outlines the design system for the Essentz Global luxury perfume website.

## Color Palette

### Primary Colors

```css
--luxury-black: #0f0f0f    /* Deep luxury black background */
--luxury-dark: #1a1a1a     /* Slightly lighter dark shade */
--luxury-beige: #d4af8f    /* Warm beige accent */
--luxury-gold: #c9a961     /* Premium gold accent */
--luxury-light: #f5f5f0    /* Off-white text color */
```

### Color Usage

- **Background:** Use `luxury-black` for main sections
- **Secondary Background:** Use `luxury-dark` for emphasis
- **Accents:** Use `luxury-gold` for interactive elements, borders
- **Light Accents:** Use `luxury-beige` for hover states, highlights
- **Text:** Use `luxury-light` for primary text
- **Text Secondary:** Use `luxury-light/70` for secondary text
- **Text Tertiary:** Use `luxury-light/50` for subtle text

### Accessibility

- All color combinations meet WCAG AA contrast standards
- Text on backgrounds maintains 4.5:1 contrast ratio
- UI components maintain 3:1 contrast ratio

## Typography

### Font Families

```css
/* Serif fonts for headings - Premium luxury feel */
--font-serif: 'Playfair Display', serif
--font-serif-alt: 'Cormorant', serif

/* Sans-serif for body and UI */
--font-sans: 'Poppins', sans-serif
```

### Font Sizes & Usage

```
Heading 1 (h1):
  - Size: 5rem (mobile: 3rem)
  - Font: Playfair Display, Bold
  - Line Height: 1.2
  - Use: Main page title, hero heading

Heading 2 (h2):
  - Size: 3.75rem (mobile: 2.25rem)
  - Font: Playfair Display, Bold
  - Line Height: 1.2
  - Use: Section titles

Heading 3 (h3):
  - Size: 1.875rem
  - Font: Playfair Display, Semibold
  - Line Height: 1.3
  - Use: Subsection titles

Heading 4 (h4):
  - Size: 1.5rem
  - Font: Cormorant, Semibold
  - Line Height: 1.4
  - Use: Card titles, labels

Body Text:
  - Size: 1rem
  - Font: Poppins, Regular
  - Line Height: 1.6
  - Use: Main content text

Small Text:
  - Size: 0.875rem
  - Font: Poppins, Regular
  - Line Height: 1.5
  - Use: Captions, helper text
```

### Font Weights

- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

## Spacing

### Scale (in rem/pixels)

```
2px   = 0.125rem
4px   = 0.25rem
8px   = 0.5rem
12px  = 0.75rem
16px  = 1rem
24px  = 1.5rem
32px  = 2rem
48px  = 3rem
64px  = 4rem
96px  = 6rem
```

### Margin & Padding

- **Tight spacing:** 0.5rem - 1rem
- **Normal spacing:** 1.5rem - 2rem
- **Comfortable spacing:** 2rem - 3rem
- **Large spacing:** 4rem - 6rem
- **Sections:** 4rem - 6rem (desktop), 2rem - 3rem (mobile)

## Buttons

### Primary Button (btn-luxury)

```css
Background: luxury-gold (#c9a961)
Text: luxury-black
Padding: 0.75rem 2rem
Border Radius: 9999px
Font Weight: 600
Text Transform: Uppercase
Letter Spacing: 0.05em
Hover: luxury-beige background
Transition: 0.3s ease-in-out
```

### Secondary Button (btn-luxury-outline)

```css
Background: Transparent
Border: 1px solid luxury-gold
Text: luxury-gold
Padding: 0.75rem 2rem
Border Radius: 9999px
Font Weight: 600
Hover: luxury-gold background with black text
Transition: 0.3s ease-in-out
```

## Cards & Containers

### Glassmorphism Card

```css
Background: rgba(31, 31, 31, 0.8)
Backdrop Filter: blur(10px)
Border: 1px solid rgba(201, 169, 97, 0.2)
Border Radius: 0.5rem
Padding: 1.5rem
```

### Hover Effects

```css
Transform: translateY(-10px) or scale(1.05)
Box Shadow: 0 20px 40px rgba(201, 169, 97, 0.2)
Duration: 300-500ms
Easing: ease-out
```

## Animations

### Key Animations

**Fade In**
```
Duration: 800ms
Easing: ease-in-out
From: opacity 0
To: opacity 1
```

**Slide Up**
```
Duration: 600ms
Easing: ease-out
From: translateY(30px), opacity 0
To: translateY(0), opacity 1
```

**Float**
```
Duration: 3000ms
Easing: ease-in-out
Oscillates: ±10px on Y axis
```

**Hover Scale**
```
Scale: 1.05
Duration: 300ms
Easing: ease-out
```

### Stagger Animation

- Child delay: 100-200ms
- Total stagger: `childDelay × numberOfChildren`

## Responsive Breakpoints

```css
Mobile:     < 640px
Tablet:     640px - 1024px
Desktop:    1024px - 1280px
Large:      > 1280px
```

### Mobile-First Approach

- Design for mobile first
- Add features for larger screens
- Test on all breakpoints
- Use Tailwind's responsive prefixes: `md:`, `lg:`, `xl:`

## Components

### Navigation Bar

- Fixed positioning
- Sticky on scroll with blur background
- Mobile hamburger menu
- Hover underline animation on links
- Responsive navigation

### Hero Section

- Full viewport height
- Gradient background with animated elements
- Centered content with stagger animation
- CTA buttons with hover effects
- Scroll indicator at bottom

### Feature Cards

- Glassmorphism styling
- Icon with hover scale
- Heading and description
- Hover lift effect
- Grid layout responsive

### Product Cards

- Image/Icon placeholder
- Product name (serif font)
- Description text
- Scent notes (small caps)
- Price (large serif)
- CTA button
- Hover zoom effect

### Testimonial Cards

- Glassmorphism styling
- Star rating
- Quote with italic styling
- Author name and title
- Navigation dots
- Auto-rotate with pause on hover

### Form Elements

- Subtle borders
- Focus states with gold color
- Rounded corners
- Smooth transitions
- Clear labels

## Spacing Guidelines

### Sections

```
Padding (vertical):
  - Mobile: 2rem
  - Tablet: 4rem
  - Desktop: 6rem

Padding (horizontal):
  - Mobile: 1rem
  - Tablet: 2rem
  - Desktop: 2rem
```

### Containers

```
Max Width: 80rem (1280px)
Padding: 1rem (responsive)
Margin: 0 auto
```

## Accessibility

### Color Contrast

- Text/Background: 4.5:1 (AA standard)
- UI/Background: 3:1 (AA standard)
- Interactive elements: Clear focus states

### Typography

- Font sizes never below 16px for body text
- Line height minimum 1.5
- Letter spacing: 0.02em for improved readability
- Max line length: 70-80 characters

### Animations

- Respect `prefers-reduced-motion` when possible
- Animations have clear purpose
- No auto-playing videos/animations
- Pause on interaction

### Interactive Elements

- All buttons have clear focus states
- Links are underlined or clearly distinguished
- Form labels associated with inputs
- Error messages clear and helpful

## Dark Mode Support

The site is designed primarily in dark mode:

- Dark luxury aesthetic throughout
- Gold and beige accents for contrast
- White/light text on dark backgrounds
- Glassmorphism for depth
- Animated gradients for visual interest

## Performance

### Image Optimization

- Use Next.js Image component
- Optimize image sizes
- Support WebP format
- Lazy load below fold

### CSS

- Tailwind CSS (utility-first)
- Purged unused CSS
- Minified in production
- Critical CSS inlined

### Animations

- Use CSS and transform properties
- Avoid layout-triggering properties
- Use `will-change` sparingly
- GPU acceleration with `transform` and `opacity`

## Customization

To customize the design system:

1. **Colors:** Edit `tailwind.config.ts` (theme.colors)
2. **Typography:** Edit `tailwind.config.ts` (theme.fontFamily)
3. **Spacing:** Edit `tailwind.config.ts` (theme.spacing)
4. **Animations:** Edit `tailwind.config.ts` (theme.keyframes)
5. **Global styles:** Edit `app/globals.css`

## Testing

### Responsive Testing

- Test on actual devices
- Use Chrome DevTools
- Test all breakpoints
- Verify touch targets (48px minimum)

### Performance Testing

- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- Monitor Core Web Vitals

### Accessibility Testing

- WAVE browser extension
- Axe DevTools
- Keyboard navigation
- Screen reader testing

---

For detailed component implementation, refer to individual component files in `/components`.
