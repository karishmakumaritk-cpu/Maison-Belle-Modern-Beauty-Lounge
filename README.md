# Maison Belle — Modern Beauty Lounge
### Premium Salon Website Template #2 (Agency & Commercial Ready)

**Maison Belle** is a production-grade, minimal, high-conversion static salon website template designed for luxury beauty lounges, aesthetic clinics, and bespoke hair/skin studios.

---

## 🌟 Key Highlights

- **Aesthetic & Modern**: Warm alabaster palette, elegant serif editorial typography (`Playfair Display` + `Plus Jakarta Sans`), subtle micro-interactions, and spacious luxury layout.
- **Fast & Lightweight**: Built with standard semantic HTML5, modern CSS3 variables, and clean vanilla JavaScript. Zero framework bloat.
- **Single Source of Truth (`js/config.js`)**: Update the business name, phone, address, working hours, pricing, and social media handles in one single file to update the entire website automatically.
- **High-Conversion Components**:
  - Direct Booking Modal with form validation and instant WhatsApp confirmation dispatch.
  - Floating WhatsApp click-to-chat button with pre-filled greeting message.
  - Interactive Before & After comparison showcase with tab switches.
  - Curated service menu with categorized anchor navigation and direct booking buttons.
  - Accessible, keyboard-navigable image gallery with category filtering and high-resolution Lightbox viewer.
  - Mobile-first slide drawer menu with backdrop blur and trap focus.
  - Google Map embed & contact inquiry form.
- **GitHub Pages Ready**: Includes multi-page Vite build configuration and automated GitHub Actions deployment workflow (`.github/workflows/deploy.yml`).
- **SEO & Social Optimization**: Pre-configured meta tags, OpenGraph previews, and `schema.org` (`BeautySalon`, `AboutPage`, `ItemPage`, `ImageGallery`, `ContactPage`) JSON-LD structured data.

---

## 📁 Directory Structure

```text
├── index.html                  # Homepage (Hero, Trust, Services, Before/After, Gallery, Reviews)
├── about.html                  # About Us (Philosophy, Inception Story, Team Bios)
├── services.html               # Full Services & Pricing Menu with Category Anchors
├── gallery.html                # Portfolio & Lookbook with Filtering and Lightbox
├── contact.html                # Contact Information, Opening Hours, Map & Inquiries
├── css/
│   └── style.css               # Design System (Tokens, Reset, Layout, Animations, Components)
├── js/
│   ├── config.js               # Centralized Business & Salon Configuration
│   └── script.js               # Vanilla JS Logic (Sticky Nav, Modal, WhatsApp, Lightbox)
├── assets/
│   └── favicon.svg             # Monogram Vector Favicon
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated CI/CD pipeline
├── vite.config.ts              # Vite Multi-page Static Site Bundler Config
├── metadata.json               # Project Metadata
├── package.json                # NPM Scripts & Build Tooling
└── README.md                   # Full Documentation & Client Handoff Guide
```

---

## 🚀 Getting Started

### Local Development

1. Clone or download the repository:
   ```bash
   git clone <your-repo-url>
   cd salon-template-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development preview server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. Build production static assets:
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

---

## ⚙️ How to Customize for a Client

### 1. Update Business Details in `js/config.js`
Open `js/config.js` and modify the fields:

```javascript
window.MAISON_BELLE_CONFIG = {
  business: {
    name: "Your Salon Name",
    tagline: "Your Custom Tagline",
    phone: "+91 99999 99999",
    whatsappNumber: "919999999999",
    email: "contact@yoursalon.com",
    address: "Your Street Address",
    city: "City, Country",
    googleMapsEmbedUrl: "https://maps.google.com/..."
  },
  hours: {
    monSat: "10:00 AM – 8:00 PM",
    sunday: "11:00 AM – 6:00 PM"
  },
  social: {
    instagram: "https://instagram.com/yourhandle",
    facebook: "https://facebook.com/yourhandle"
  }
};
```

All elements across `index.html`, `about.html`, `services.html`, `gallery.html`, and `contact.html` tagged with `.cfg-*` classes will automatically sync on page load!

### 2. Customizing Brand Colors & Fonts in `css/style.css`
The design tokens are centralized at the top of `css/style.css`:

```css
:root {
  /* Brand Accent & Primary Colors */
  --color-primary: #C48B71;        /* Warm Terracotta / Rose Gold */
  --color-primary-dark: #A76E55;
  --color-secondary: #2C2623;      /* Deep Espresso Neutral */
  --color-accent: #D4AF37;         /* Soft Gold */

  /* Surface Neutrals */
  --bg-body: #FAF8F5;              /* Warm Alabaster */
  --bg-surface: #F3EFEA;           /* Elevated Surface */
  --border-color: #E8E2D9;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

### 3. Connecting the Booking & Contact Forms to a Real Backend
By default, the forms perform frontend validation and trigger an instant WhatsApp booking link and demo confirmation state. To connect to an email inbox or CRM:

1. Register a free endpoint on [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/platform/core/forms/).
2. In `js/script.js`, replace the demo submit handler with standard `fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: formData })`.

---

## 🌐 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build the site using Vite and deploy the `dist/` directory to your live GitHub Pages URL!

---

## 📄 License
This template is commercially reusable. You may customize and deploy it for multiple client projects.
