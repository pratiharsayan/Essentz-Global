# Component Documentation - Essentz Global

Detailed documentation for all components in the Essentz Global website.

## Component Structure

```
components/
├── Navbar.tsx                  # Top navigation bar
├── HeroSection.tsx            # Full-screen hero banner
├── AboutSection.tsx           # About brand section
├── WhyChooseUs.tsx           # Features/benefits section
├── ProductsSection.tsx        # Products grid showcase
├── ManufacturingExcellence.tsx # Manufacturing process section
├── TestimonialsSection.tsx    # Customer testimonials carousel
├── ContactSection.tsx         # Contact form and info
└── Footer.tsx                 # Footer with links and info
```

## Component Details

### Navbar.tsx

**Purpose:** Top navigation bar with logo and menu

**Features:**
- Sticky positioning with blur background on scroll
- Responsive mobile menu with hamburger icon
- Logo animation on hover
- Hover underline animation on nav links
- CTA button

**Props:** None (uses internal state)

**State:**
- `isScrolled`: Tracks scroll position for styling
- `isMenuOpen`: Toggle mobile menu visibility

**Key Classes:**
- `.nav-link`: Navigation links with underline animation
- `.btn-luxury`: Primary CTA button style

**Customization:**
```typescript
// Edit navigation links
NAVIGATION = [
  { name: 'Home', href: '#hero' },
  // Add more links
]
```

---

### HeroSection.tsx

**Purpose:** Full-screen hero section with headline and CTA

**Features:**
- Full viewport height
- Animated background elements (floating circles)
- Gradient text effect
- Staggered text animations
- Two CTA buttons (primary and outline)
- Scroll indicator at bottom

**Animations:**
- Container: Stagger children with 200ms delay
- Items: Fade-in with slide-up effect (800ms)
- Background: Floating animation (3-10 seconds)

**Customization:**
```typescript
// Edit headline and subtext in component
// Edit button labels and links
// Modify animation timings
```

---

### AboutSection.tsx

**Purpose:** Brand story and background

**Features:**
- Image placeholder on left
- Text content on right
- Responsive layout (stacks on mobile)
- useInView hook for scroll animations
- Feature checklist with icons

**Animations:**
- Triggered when 30% of section is in view
- Staggered children animations
- Image has hover scale effect

**Customization:**
```typescript
// Replace image placeholder with actual image
// Edit brand story text
// Modify feature list items
```

---

### WhyChooseUs.tsx

**Purpose:** Display brand advantages/features

**Features:**
- 4-column grid layout (responsive)
- Glassmorphism card style
- Icon with hover animation
- Staggered card animations
- Icon rotation on hover

**Animations:**
- Scroll-triggered animations
- Cards lift on hover (translateY)
- Icons scale and rotate on hover

**Props:** None (data in component)

**Customization:**
Edit features array in component:
```typescript
const features = [
  {
    icon: <FiDroplet />,
    title: 'Premium Ingredients',
    description: 'Description here...',
  },
  // Add more features
]
```

---

### ProductsSection.tsx

**Purpose:** Display perfume collection in grid

**Features:**
- Responsive 3-column grid
- Product cards with emoji icons
- Product details (name, notes, price)
- "View Details" button on each card
- Hover zoom effect
- "View Complete Collection" button

**Animations:**
- Scroll-triggered animations
- Cards slide up on entry
- Icon animates up/down continuously
- Button animations on hover

**Products Data:**
Located in `lib/constants.ts` for easy updating:

```typescript
const PRODUCTS = [
  {
    id: 1,
    name: 'Fragrance Name',
    description: 'Short description',
    notes: 'Scent notes',
    price: '$XXX',
    image: '💎',
  },
  // Add more products
]
```

**Customization:**
- Add/remove products in `lib/constants.ts`
- Update prices and descriptions
- Change emoji icons
- Modify grid columns for different layouts

---

### ManufacturingExcellence.tsx

**Purpose:** Highlight manufacturing process and quality

**Features:**
- 3-step process display
- Icon cards with descriptions
- Connector lines between steps
- Stats section at bottom
- useInView scroll animations

**Animations:**
- Staggered animations for steps
- Icons scale on hover
- Cards lift on hover

**Stats Display:**
```
25+ Years of Expertise
500+ Premium Formulations
40+ Countries Served
```

**Customization:**
- Edit steps and descriptions
- Update stats numbers
- Change icon styles
- Modify animation timings

---

### TestimonialsSection.tsx

**Purpose:** Display customer testimonials in carousel

**Features:**
- Auto-rotating carousel
- Manual navigation with arrows
- Dot indicators for current slide
- Auto-pause on mouse enter
- Star ratings
- Glassmorphism card style

**Animations:**
- Smooth fade transitions between testimonials
- Dot animations
- Button hover effects

**State:**
- `currentIndex`: Active testimonial
- `autoplay`: Pause on hover

**Testimonials Data:**
Located in `lib/constants.ts`:

```typescript
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Name',
    title: 'Title',
    content: 'Testimonial text...',
    rating: 5,
  },
  // Add more testimonials
]
```

**Customization:**
- Add/remove testimonials in constants
- Change auto-rotation speed (currently 5000ms)
- Modify rating display
- Update card styling

---

### ContactSection.tsx

**Purpose:** Contact form and business information

**Features:**
- Contact information cards (Email, Phone, Location)
- Contact form with validation
- Form submission handling
- Success message display
- useInView scroll animations

**Form Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Message (required, textarea)

**State:**
- `formData`: Form input values
- `submitted`: Success state for feedback

**Form Handling:**
```typescript
const handleSubmit = (e) => {
  // Current: logs to console
  // TODO: Add email service integration
}
```

**Integration Options:**
1. **SendGrid**
   ```javascript
   import sgMail from '@sendgrid/mail'
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   ```

2. **Formspree**
   - Simple form endpoint integration
   - No backend needed

3. **Nodemailer** (Self-hosted)
   - Requires backend setup
   - SMTP configuration

**Customization:**
- Add form validation
- Integrate with email service
- Add reCAPTCHA verification
- Customize success message
- Add file upload fields

---

### Footer.tsx

**Purpose:** Footer with links, contact, and social media

**Features:**
- Multi-column layout
- Logo and description
- Quick links
- Company links
- Contact information
- Social media icons
- Copyright information
- Scroll-to-top button

**Icons Used:**
- FiFacebook
- FiInstagram
- FiTwitter
- FiLinkedin

**Footer Sections:**
1. **Company Info:** Logo and description
2. **Quick Links:** Navigation links
3. **Company:** Internal company links
4. **Contact:** Email, phone, social media

**Footer Data:**
Uses `BRAND` and `SOCIAL_LINKS` from `lib/constants.ts`

**Customization:**
- Update company links
- Add more social media
- Modify footer layout
- Update legal links
- Add newsletter signup

---

## Shared Utilities

### useInView Hook

**Location:** `lib/useInView.ts`

**Purpose:** Detect when element enters viewport for animations

**Usage:**
```typescript
const { ref, inView } = useInView({ threshold: 0.3 })

return (
  <div ref={ref}>
    {inView && <AnimatedContent />}
  </div>
)
```

**Options:**
```typescript
interface Options {
  threshold?: number | number[]  // Default: 0.1
  triggerOnce?: boolean          // Stop observing after trigger
}
```

---

### Constants

**Location:** `lib/constants.ts`

**Exports:**
- `BRAND`: Brand information
- `SOCIAL_LINKS`: Social media URLs
- `NAVIGATION`: Nav menu items
- `COLORS`: Color palette
- `TESTIMONIALS`: Customer testimonials
- `PRODUCTS`: Product catalog
- `WHY_CHOOSE_US`: Feature list

**Usage:**
```typescript
import { BRAND, PRODUCTS } from '@/lib/constants'

// Use in components
<h1>{BRAND.name}</h1>
{PRODUCTS.map(product => (...))}
```

---

## Animation Patterns

### Stagger Animation
Multiple items animating with delays:
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
```

### Scroll-Triggered Animation
Trigger animation when element enters viewport:
```typescript
const { ref, inView } = useInView()

<motion.div
  animate={inView ? 'visible' : 'hidden'}
  ref={ref}
>
```

### Hover Effects
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

---

## Styling Patterns

### Glassmorphism
```css
.glassmorphism {
  background: rgba(31, 31, 31, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 169, 97, 0.2);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, #c9a961 0%, #d4af8f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Button Styles
```css
.btn-luxury { /* Primary button */ }
.btn-luxury-outline { /* Outline button */ }
```

---

## Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

**Fallbacks:**
- CSS Grid fallback for older browsers
- Backdrop-filter fallback with opacity
- Transform-based animations (performant)

---

## Performance Tips

1. **Images:** Use next/image for optimization
2. **Animations:** Use transform and opacity only
3. **Code Splitting:** Components are already split
4. **Lazy Loading:** useInView triggers animations only when needed
5. **Caching:** Next.js handles automatic caching

---

## Testing Components

### Unit Testing
```bash
npm test
```

### Visual Testing
1. Test on multiple screen sizes
2. Use Tailwind's responsive prefixes
3. Test all interactive states

### Accessibility Testing
- Keyboard navigation
- Screen reader testing
- Color contrast verification

---

## Common Customizations

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'luxury-gold': '#your-color',
}
```

### Add New Section
1. Create new component in `/components`
2. Import in `app/page.tsx`
3. Add to page layout

### Update Brand Info
Edit `lib/constants.ts`:
```typescript
export const BRAND = {
  name: 'Your Brand',
  email: 'your-email@example.com',
  // ...
}
```

### Add Products
Edit `PRODUCTS` array in `lib/constants.ts`

---

For more details, refer to individual component files and inline comments.
