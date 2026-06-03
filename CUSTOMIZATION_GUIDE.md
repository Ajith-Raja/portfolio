# Customization Checklist & Quick Reference

## Essential Changes (Do These First)

### 1. Business Name
Search and replace all instances of "ServicePoint" with your business name:
- In `index.html`: Multiple locations
- In `script.js`: Console message

### 2. Contact Information
```
Current:     +91 98765 43210
Replace with: Your actual phone number

Current:     info@servicepoint.com
Replace with: Your actual email

Current:     https://wa.me/919876543210
Replace with: https://wa.me/YOUR_NUMBER_WITHOUT_PLUS
```

### 3. Business Address
```html
<!-- Find and replace -->
Current:
123 Main Street
Your City, State 123456
India

Replace with:
Your actual address
Your city, Your state PIN
```

### 4. Working Hours
```html
Current:
Monday - Saturday: 9:00 AM - 6:00 PM
Sunday: Closed

Replace with:
Your actual working hours
```

### 5. Google Maps
1. Open Google Maps
2. Search for your location
3. Click "Share" button
4. Click "Embed a map"
5. Copy the entire `<iframe>` code
6. Find this in `index.html`:
   ```html
   <iframe 
       class="w-full h-full rounded-lg"
       src="https://www.google.com/maps/embed?pb=..."
   ```
7. Replace the entire iframe with your code

## Optional But Recommended Changes

### 6. Services
If you offer different services, edit each service card:
```html
<!-- Current Example -->
<i class="fas fa-print"></i>              <!-- ICON -->
<h3>Document Services</h3>                <!-- TITLE -->
<p>Xerox, Print, Scan, Binding</p>       <!-- DESCRIPTION -->

<!-- For more icons, visit: https://fontawesome.com/icons -->
```

### 7. Add Brand Logo
Add this line after the briefcase icon in navbar:
```html
<!-- Instead of: -->
<i class="fas fa-briefcase text-3xl"></i>

<!-- Use: -->
<img src="logo.png" alt="ServicePoint" style="height: 40px;">
```
Then upload your logo image file.

### 8. Colors
Edit `styles.css` at the top:
```css
:root {
    --primary-color: #1e3a8a;        /* Change this - your main color */
    --accent-color: #ea580c;         /* Change this - your secondary color */
}
```

**Color Codes to Try:**
- Navy Blue: `#1e3a8a`
- Dark Green: `#15803d`
- Dark Purple: `#6d28d9`
- Orange: `#ea580c`
- Light Blue: `#0ea5e9`
- Teal: `#0d9488`

Use **colordot.io** or **colormind.io** to pick colors.

### 9. SEO Meta Tags
In `index.html`, find `<head>` section:
```html
<!-- Update these: -->
<meta name="description" content="ServicePoint - All Online & Document Services Under One Roof">
<meta name="keywords" content="online services, document services, xerox, printing">

<!-- Change to your content. Keep it 150-160 characters -->
```

### 10. Social Media Links
Find the social icons in the footer and update:
```html
<!-- Current: -->
<a href="#" class="text-gray-400 hover:text-white transition text-xl">
    <i class="fab fa-facebook"></i>
</a>

<!-- Update href="#" to your actual social links: -->
<a href="https://facebook.com/yourpage" ...>
```

---

## File-by-File Changes Reference

### `index.html` - What to Change

Line ~15-20: Meta Description
```html
<!-- UPDATE THIS -->
<meta name="description" content="Your description">
```

Line ~50-70: JSON Schema (Local Business)
```json
"name": "YOUR BUSINESS NAME",
"telephone": "+91-YOUR-NUMBER",
"email": "your@email.com"
```

Line ~80-100: Navigation Header
```html
<span class="text-xl font-bold">YOUR BUSINESS NAME</span>
```

Line ~100-150: Hero Section
```html
<h1>YOUR BUSINESS NAME</h1>
<p>Your tagline here</p>
```

Line ~250-450: Services Section
Edit each service card with your services.

Line ~650-750: Contact Section
- Address
- Phone number
- WhatsApp number
- Email
- Working hours
- Google Maps iframe

Line ~800-900: Testimonials
Edit customer quotes and names.

Line ~950-1050: FAQ
Edit questions and answers.

---

## Testing Checklist

Before going live, check:

- [ ] Business name is correct everywhere
- [ ] Phone number works (test click)
- [ ] WhatsApp button works
- [ ] Email link works
- [ ] Address is accurate
- [ ] Google Maps shows correct location
- [ ] Website looks good on mobile (open in phone browser)
- [ ] All links work
- [ ] No typos
- [ ] Colors look professional
- [ ] Icons display correctly

---

## Common Issues & Solutions

**Issue: WhatsApp link not working**
```
Wrong: https://wa.me/919876543210?text=...
Right: https://wa.me/919876543210?text=Hello%20YourBusiness
The number should be country code + your number
```

**Issue: Colors not working**
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure you saved the file
- Check color format: `#1e3a8a` (not `1e3a8a`)

**Issue: Icons not showing**
- Clear cache
- Check internet connection (icons load from CDN)
- Check Font Awesome library loaded correctly

**Issue: Maps not showing**
- Copy embed code again from Google Maps
- Make sure iframe is properly closed
- Check internet connection

---

## Quick Color Presets

### Professional Theme
```css
--primary-color: #1e3a8a;        /* Dark Blue */
--accent-color: #ea580c;         /* Orange */
```

### Modern Theme
```css
--primary-color: #0d9488;        /* Teal */
--accent-color: #7c3aed;         /* Purple */
```

### Friendly Theme
```css
--primary-color: #16a34a;        /* Green */
--accent-color: #f59e0b;         /* Amber */
```

### Clean Theme
```css
--primary-color: #334155;        /* Slate */
--accent-color: #06b6d4;         /* Cyan */
```

---

## Mobile Testing

1. Open `index.html` on your phone
2. Check:
   - Menu works
   - Buttons are clickable
   - Text is readable
   - Images fit properly
   - No overlapping elements
3. Test on iPhone and Android

---

## SEO Optimization Quick Tips

1. Add your city name to description
   ```
   "ServicePoint - Document Services in [Your City]"
   ```

2. Add local keywords to meta
   ```
   "document services, xerox, printing, [your city]"
   ```

3. Create Google Business Profile (FREE):
   - Go to google.com/business
   - Add your business
   - Website will rank better locally

4. Every change = better ranking potential
   - Keep content fresh
   - Add recent testimonials
   - Update services list

---

## Deployment Quick Links

1. **Netlify**: https://app.netlify.com/drop
   - Just drag folder

2. **Vercel**: https://vercel.com/new
   - Upload folder

3. **GitHub Pages**: https://pages.github.com/
   - Free hosting

4. **Bluehost**: https://www.bluehost.com/
   - Traditional hosting ($2.95/month)

---

## Support Files Legend

- `index.html` = Website content (90% of customization)
- `script.js` = Interactive features (10% of customization)
- `styles.css` = Design & colors (5% of customization)
- `README.md` = Full documentation

---

**Remember:** The website is fully functional. These are just customizations to make it yours!

Estimated customization time: **30-45 minutes**