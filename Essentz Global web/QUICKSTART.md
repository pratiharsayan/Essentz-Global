# Quick Start Guide - Essentz Global Website

Get your luxury perfume website up and running in minutes!

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd "Essentz Global web"
npm install
```

### Step 2: Add Your Logo
Place your logo file in `public/` as `logo.png` (already done ✓)

### Step 3: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` - Your site is live! 🎉

### Step 4: Make It Yours

#### Update Brand Information
Edit `lib/constants.ts`:
```typescript
export const BRAND = {
  name: 'Essentz Global',
  email: 'Essentzglobal@gmail.com',
  phone: '+91 96742 35427',
  // ... other details
}
```

#### Add Your Products
In the same file, update the `PRODUCTS` array:
```typescript
const PRODUCTS = [
  {
    id: 1,
    name: 'Your Fragrance Name',
    description: 'Description',
    notes: 'Scent notes',
    price: '$119',
  },
]
```

#### Add Testimonials
Update `TESTIMONIALS` array with customer feedback:
```typescript
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Customer Name',
    title: 'Title',
    content: 'Their review...',
    rating: 5,
  },
]
```

## Key Files to Customize

### 1. **lib/constants.ts** - Core Configuration
Update all brand details, products, testimonials here

### 2. **app/globals.css** - Global Styles
Modify colors, fonts, animations

### 3. **tailwind.config.ts** - Design System
Adjust color palette, spacing, animations

### 4. **components/** - Individual Sections
Edit content, add features, modify layouts

## Common Customizations

### Change Color Scheme

Edit `tailwind.config.ts`:
```typescript
colors: {
  'luxury-gold': '#your-hex-color',    // Change gold
  'luxury-beige': '#your-hex-color',   // Change beige
  'luxury-black': '#your-hex-color',   // Change black
}
```

### Update Contact Information

Edit `lib/constants.ts`:
```typescript
export const BRAND = {
  email: 'your-email@example.com',
  phone: 'Your Phone Number',
}
```

### Modify Hero Section Text

In `components/HeroSection.tsx`, update:
```typescript
<h1>Your Headline Here</h1>
<p>Your subheading here</p>
```

### Add More Products

In `lib/constants.ts`, add to `PRODUCTS` array:
```typescript
{
  id: 7,
  name: 'New Product',
  description: 'Description',
  notes: 'Notes',
  price: '$XXX',
}
```

### Customize Sections

Each section is a separate component in `/components`:

```
HeroSection.tsx          - Change headline, buttons
AboutSection.tsx         - Update brand story
WhyChooseUs.tsx         - Modify features/benefits
ProductsSection.tsx     - Add/remove products
TestimonialsSection.tsx - Add customer reviews
ContactSection.tsx      - Update contact methods
Footer.tsx              - Change links, social
```

## Deployment (Choose One)

### Option A: Vercel (Easiest) ⭐ Recommended

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your site is live on `your-domain.vercel.app`

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `/out` folder
3. Or connect GitHub for auto-deployments

### Option C: Self-Hosted

```bash
npm run build
npm start
```

Your server will run on `localhost:3000`

### Option D: See DEPLOYMENT.md for detailed instructions

## Connecting a Custom Domain

### Via Vercel
1. Go to Project Settings
2. Domains
3. Add your domain
4. Update DNS records (Vercel provides instructions)

### Via Other Hosts
1. Update DNS A record to point to server
2. Or add CNAME record
3. Wait for DNS propagation (15 min - 48 hours)

## Next Steps

1. ✅ **Customize Content** - Update brand info, products, testimonials
2. ✅ **Add Your Logo** - Place in `public/logo.png`
3. ✅ **Set Colors** - Match your brand in `tailwind.config.ts`
4. ✅ **Test Locally** - Run `npm run dev` and check everything
5. ✅ **Deploy** - Push to Vercel or your hosting platform
6. ✅ **Add Domain** - Point your custom domain
7. ✅ **Monitor** - Check Google Analytics, performance metrics

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start

# Check for code issues
npm run lint

# Format code
npm run format  # (if configured)
```

## File Structure Quick Reference

```
├── app/
│   ├── page.tsx         ← Main page (all sections)
│   ├── layout.tsx       ← HTML structure
│   └── globals.css      ← Global styles
│
├── components/          ← All page sections
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProductsSection.tsx
│   └── ... (more components)
│
├── lib/
│   ├── constants.ts     ← UPDATE THIS (brands, products, testimonials)
│   └── useInView.ts     ← Custom animation hook
│
├── public/
│   └── logo.png         ← Your brand logo
│
├── tailwind.config.ts   ← Colors and design system
└── package.json         ← Dependencies
```

## Customization Checklist

- [ ] Update brand name in `lib/constants.ts`
- [ ] Update email and phone
- [ ] Add 3+ products with prices
- [ ] Add customer testimonials
- [ ] Set your brand colors
- [ ] Update hero headline
- [ ] Add custom logo (already done ✓)
- [ ] Test on mobile and desktop
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain

## Help & Resources

### Documentation Files
- **README.md** - Project overview
- **DEPLOYMENT.md** - Detailed deployment guide
- **DESIGN_SYSTEM.md** - Colors, typography, spacing
- **COMPONENTS.md** - Component details and usage

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

## Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process using port 3000
npx kill-port 3000
npm run dev
```

### Changes Not Showing
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check if logo.png is in `public/` folder
- Verify correct file name and extension
- Check image is under 5MB

## Performance Tips

✅ Images auto-optimized with Next.js Image component
✅ CSS purged automatically by Tailwind
✅ JavaScript code-split into chunks
✅ Static pages pre-rendered for speed
✅ Animations use GPU acceleration

Your site will be **lightning fast**! ⚡

## Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics ID
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Implement tracking code (in progress)

## Support

For issues:
1. Check documentation files
2. Search GitHub issues
3. Check Next.js/Tailwind documentation
4. Create an issue if stuck

---

## Ready? Let's Go! 🚀

```bash
# 1. Install
npm install

# 2. Customize lib/constants.ts with your info

# 3. Run
npm run dev

# 4. Deploy to Vercel
git push  # Push to GitHub first
# Then connect on vercel.com
```

Your luxury perfume website is ready to showcase your brand! 🎀✨

---

**Need help?** Check the full documentation files or the individual component files for detailed customization options.
