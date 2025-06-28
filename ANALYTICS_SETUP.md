# Google Analytics 4 Setup Guide

## Step 1: Create Google Analytics Account

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com
   - Sign in with your Google account

2. **Create Account**
   - Click "Start measuring"
   - Enter Account name: "Workplace Mapping"
   - Configure data sharing settings (recommended: keep defaults)
   - Click "Next"

3. **Create Property**
   - Property name: "Workplace Mapping Website"
   - Reporting time zone: Select your timezone
   - Currency: USD
   - Click "Next"

4. **Business Information**
   - Industry category: "Professional Services"
   - Business size: "Small" (1-10 employees)
   - How you plan to use Analytics: Select relevant options
   - Click "Create"

5. **Accept Terms**
   - Review and accept the Google Analytics Terms of Service
   - Accept Data Processing Terms

## Step 2: Set Up Data Stream

1. **Choose Platform**
   - Select "Web"

2. **Set Up Web Stream**
   - Website URL: `https://workplacemapping.com`
   - Stream name: "Workplace Mapping Main Site"
   - Click "Create stream"

3. **Get Your Measurement ID**
   - You'll see a Measurement ID like: `G-XXXXXXXXXX`
   - Copy this ID - you'll need it next

## Step 3: Install on Your Website

Replace `GA_MEASUREMENT_ID` in your `index.html` file with your actual Measurement ID.

**Before:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**After (example):**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

## Step 4: Enhanced Tracking Setup

The website already includes enhanced tracking for:
- ✅ Email clicks
- ✅ Calendar bookings
- ✅ FAQ interactions
- ✅ Navigation usage
- ✅ Feedback submissions

## Step 5: Verify Installation

1. **Real-time Reports**
   - Go to your GA4 property
   - Click "Reports" → "Realtime"
   - Visit your website in another tab
   - You should see your visit appear within 30 seconds

2. **Google Analytics Debugger (Optional)**
   - Install Chrome extension: "Google Analytics Debugger"
   - Enable it and visit your site
   - Check browser console for tracking confirmations

## Step 6: Set Up Goals & Conversions

In GA4, set up these key conversions:

1. **Email Clicks**
   - Already tracked as 'email_click' events
   - Mark as conversion in GA4

2. **Calendar Bookings**
   - Already tracked as 'calendar_booking' events
   - Mark as conversion in GA4

3. **Contact Form Submissions**
   - If you add a contact form later
   - Track as 'form_submission' events

## Step 7: Connect to Google Search Console

1. **In Google Analytics**
   - Go to Admin → Property → Search Console Links
   - Click "Link"

2. **Choose Search Console Property**
   - Select or add your website
   - Link the properties

This gives you keyword data and search performance insights.

## Step 8: Set Up Alerts (Optional)

Create intelligent alerts for:
- Traffic drops > 20%
- Conversion rate changes
- Unusual traffic spikes

## What You'll Track

### Automatic Tracking:
- ✅ Page views
- ✅ Session duration
- ✅ Bounce rate
- ✅ Traffic sources
- ✅ Device/browser info
- ✅ Geographic data

### Custom Event Tracking (Already Implemented):
- ✅ Email clicks (`team@workplacemapping.com`)
- ✅ Calendar booking clicks
- ✅ FAQ section interactions
- ✅ Navigation usage patterns
- ✅ Feedback button clicks
- ✅ Help hub usage

### Conversion Goals to Set Up:
1. Email clicks (sales inquiries)
2. Calendar bookings (consultations)
3. Time spent on key pages
4. FAQ engagement

## Important Notes:

1. **GDPR/Privacy Compliance**
   - The site doesn't collect personal data without consent
   - GA4 is privacy-focused by default
   - Consider adding a privacy policy page

2. **Data Retention**
   - GA4 default: 14 months
   - Can be extended to 26 months in settings

3. **Testing**
   - Always test in incognito/private browsing
   - Use GA Realtime reports to verify

4. **Backup Plan**
   - Consider also setting up Google Tag Manager for easier future tracking changes

## Quick Start Checklist:

- [ ] Create GA4 account and property
- [ ] Get Measurement ID (G-XXXXXXXXXX)
- [ ] Replace GA_MEASUREMENT_ID in index.html
- [ ] Deploy website with new code
- [ ] Verify tracking in Realtime reports
- [ ] Set up key conversions
- [ ] Link Google Search Console
- [ ] Create custom dashboard for key metrics

After setup, you'll see data within 24-48 hours for most reports!