# Deployment Guide - Essentz Global Website

This guide provides comprehensive instructions for deploying the Essentz Global luxury perfume website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git (for version control)
- Account on your chosen hosting platform

## Local Development

### Installation

```bash
# Clone the repository
git clone [your-repo-url]
cd "Essentz Global web"

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Update environment variables with your brand details
# Edit .env.local with your information
```

### Running Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website.

## Building for Production

```bash
# Build the project
npm run build

# Test production build locally
npm start
```

## Deployment Platforms

### 1. Vercel (Recommended - Free tier available)

Vercel is the official Next.js hosting platform and provides the easiest deployment.

**Steps:**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. Add environment variables from `.env.example`
7. Click "Deploy"

**Advantages:**
- Zero-config deployment
- Automatic SSL certificates
- Global CDN
- Free tier available
- Preview deployments

### 2. Netlify

**Steps:**

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment: Add from `.env.example`
6. Deploy

### 3. AWS Amplify

**Steps:**

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### 4. Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Ubuntu/Debian server
- Node.js 18+
- Nginx or Apache
- PM2 or similar process manager

**Steps:**

```bash
# Connect to your server
ssh user@your-server-ip

# Clone repository
git clone [your-repo-url]
cd "Essentz Global web"

# Install dependencies
npm install

# Build project
npm run build

# Install PM2
npm install -g pm2

# Start application
pm2 start npm --name "essentz" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

**Nginx Configuration Example:**

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## SSL Certificate Setup

### Free SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d your-domain.com

# Auto-renewal (usually automatic)
sudo systemctl enable certbot.timer
```

## Domain Configuration

1. **Update DNS Records:**
   - Point your domain to your hosting provider's servers
   - Typical records needed:
     - A record: your server IP
     - CNAME record: www → your-domain.com

2. **Update Site Configuration:**
   - Edit `.env.local` with your domain
   - Update social media links
   - Update contact information

## Post-Deployment Tasks

### 1. SEO Optimization

```bash
# Generate sitemap (optional - Next.js auto-generates)
# Create robots.txt if needed
```

### 2. Google Analytics (Optional)

1. Set up Google Analytics account
2. Get your GA ID
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=your_analytics_id
   ```

### 3. Monitoring

- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics
- Set up uptime monitoring

### 4. Backups

If self-hosting:
```bash
# Create regular backups
tar -czf backup-$(date +%Y%m%d).tar.gz /path/to/site
```

## Performance Optimization

### Image Optimization

- All images use Next.js Image component (automatic)
- Images are optimized on-demand
- WebP format for modern browsers

### Caching

- Static pages are pre-rendered
- Dynamic content cached via CDN
- Browser caching enabled for assets

### Compression

- Gzip compression enabled
- CSS and JavaScript minified
- Images optimized

## Monitoring & Maintenance

### Health Checks

```bash
# Monitor your site
curl https://your-domain.com

# Check performance
npx lighthouse https://your-domain.com
```

### Updates

Keep dependencies updated:

```bash
# Check for updates
npm outdated

# Update packages (careful - test first)
npm update
npm audit fix
```

## Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Kill process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Issue: Out of memory**
```bash
# Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

**Issue: Build fails**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## Security Best Practices

1. **Keep dependencies updated:**
   ```bash
   npm audit
   npm audit fix
   ```

2. **Use HTTPS:** Always use SSL/TLS

3. **Environment variables:** Never commit `.env.local`

4. **CORS:** Configure if needed for API calls

5. **CSP Headers:** Implement Content Security Policy

6. **Rate limiting:** Use if expecting high traffic

## Performance Monitoring

Monitor your site with:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

For issues or questions, check the main README.md or contact support.
