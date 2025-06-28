# Workplace Mapping Website

Professional website for James A. Brown's workplace mapping consulting services targeting distributed workforces.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 📊 Analytics Setup

### Google Analytics 4
1. Create a GA4 property at [Google Analytics](https://analytics.google.com)
2. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual measurement ID (e.g., G-XXXXXXXXXX)

### Hotjar (User Behavior Analytics)
1. Sign up at [Hotjar](https://www.hotjar.com)
2. Replace `YOUR_HOTJAR_ID` in `index.html` with your site ID

## 🔄 Content Updates

### Easy Updates (No Code Required)
- **Contact Information**: Update email links in `CTA.jsx` and `Footer.jsx`
- **Pricing**: Modify pricing in `Packages.jsx` and `Process.jsx`
- **Bio Content**: Update background information in `Background.jsx`
- **Images**: Replace image URLs in components (hosted on AWS S3)

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `Navigation.jsx`

## 🛠 Deployment Options

### Option 1: Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Option 2: Vercel
1. Import project from GitHub to Vercel
2. Auto-detects Vite settings
3. Deploy automatically

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload `dist` folder contents to your web host

## 📱 Features

- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Smooth Scrolling Navigation** - Professional anchor link behavior
- ✅ **SEO Optimized** - Meta tags, semantic HTML, performance optimized
- ✅ **Analytics Ready** - Google Analytics & Hotjar integration
- ✅ **Fast Loading** - Optimized images and code splitting
- ✅ **Accessible** - WCAG compliant design patterns

## 🎯 Lead Tracking

The site includes multiple conversion points:
- Email clicks (`james@themodernfire.com`)
- Calendar booking links (TidyCal integration)
- Contact form submissions (if added)

All tracked through Google Analytics events.

## 🔐 Admin Access

### Content Management
- **Direct File Editing**: Update React components for content changes
- **Image Management**: Replace URLs in components (currently using AWS S3)
- **Analytics Dashboard**: Access GA4 and Hotjar for visitor insights

### No Login System Needed
This is a static marketing site - no user authentication required. All updates happen through:
1. Code changes (pushed to GitHub)
2. Automatic deployment via Netlify/Vercel
3. Analytics monitoring via GA4/Hotjar dashboards

## 📈 Performance Monitoring

- **Core Web Vitals**: Monitored via Google Analytics
- **User Behavior**: Heat maps and session recordings via Hotjar
- **Conversion Tracking**: Email clicks and calendar bookings
- **Mobile Performance**: Responsive design testing

## 🔧 Technical Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather)
- **Deployment**: Netlify/Vercel ready
- **Analytics**: Google Analytics 4 + Hotjar

## 📞 Support

For technical updates or modifications, contact your developer or:
1. Make changes directly in the code
2. Test locally with `npm run dev`
3. Push to GitHub for automatic deployment