# Essentz Global - Premium Luxury Perfume Website

A modern, premium, luxury perfume brand website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern & Premium Design** - Dark luxury theme with black, beige, soft gold palette
- 🎯 **Fully Responsive** - Mobile-first approach for all devices
- ⚡ **High Performance** - Optimized with Next.js and Tailwind CSS
- 🎬 **Smooth Animations** - Framer Motion powered animations and transitions
- 📱 **SEO Optimized** - Meta tags and structured data
- 🎨 **Premium Typography** - Playfair Display, Cormorant, and Poppins fonts
- 📦 **Easy to Update** - Simple product management system

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10+
- **Language**: TypeScript
- **Icons**: React Icons

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── HeroSection.tsx       # Hero section
│   ├── AboutSection.tsx      # About section
│   ├── WhyChooseUs.tsx       # Features section
│   ├── ProductsSection.tsx   # Products grid
│   ├── ManufacturingExcellence.tsx  # Manufacturing section
│   ├── TestimonialsSection.tsx      # Testimonials carousel
│   ├── ContactSection.tsx    # Contact form
│   └── Footer.tsx            # Footer
├── public/
│   ├── logo.png             # Brand logo
│   └── favicon.ico          # Favicon
├── package.json
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy your logo to the `public` folder as `logo.png`

3. Create a favicon and place it as `public/favicon.ico`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run start
```

## Customization

### Updating Products

Edit the `products` array in [components/ProductsSection.tsx](components/ProductsSection.tsx):

```typescript
const products = [
  {
    id: 1,
    name: 'Fragrance Name',
    description: 'Short description',
    notes: 'Main scent notes',
    price: '$XXX',
  },
  // Add more products...
]
```

### Updating Colors

Edit the color palette in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  'luxury-black': '#0f0f0f',
  'luxury-dark': '#1a1a1a',
  'luxury-beige': '#d4af8f',
  'luxury-gold': '#c9a961',
  'luxury-light': '#f5f5f0',
}
```

### Updating Brand Information

Update the following files with your brand details:
- [components/Navbar.tsx](components/Navbar.tsx) - Navigation links
- [components/Footer.tsx](components/Footer.tsx) - Contact info and links
- [app/layout.tsx](app/layout.tsx) - Meta information

## Key Sections

### 1. Hero Section
Fullscreen hero with smooth animations and CTA buttons

### 2. About Section
Brand story with image and text layout

### 3. Why Choose Us
Feature cards with hover effects showcasing brand advantages

### 4. Products Collection
Grid layout with product cards and hover zoom effects

### 5. Manufacturing Excellence
Process steps highlighting quality and craftsmanship

### 6. Testimonials
Smooth carousel with customer testimonials

### 7. Contact
Contact form with business information

### 8. Footer
Company info, links, and social media placeholders

## Performance

- Optimized images with Next.js Image component
- Code splitting for faster page loads
- CSS-in-JS with Tailwind for minimal bundle size
- SEO optimized with proper meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Essentz Global. All Rights Reserved.

## Contact

📧 Essentzglobal@gmail.com
📞 +91 96742 35427

---

Built with ❤️ for Essentz Global
