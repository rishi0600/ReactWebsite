# Karvelis Global Exports — Website

The official website for **Karvelis Global Exports**, a Mysore-based merchant export house. Built with React + TypeScript + Vite + Tailwind CSS, hardened for security, and ready to deploy on Cloudflare Pages.

---

## 🚀 First-Time Setup (Mac)

You only need to do these steps **once**.

### 1. Install Node.js

If you don't already have it, install Node.js (v18 or higher) from <https://nodejs.org>. Verify in your terminal:

```bash
node -v   # should print v18.x or higher
npm -v    # should print 9.x or higher
```

### 2. Save the Karvelis logo

Save the navy + gold Karvelis Global Exports logo image as:

```
/Users/agadi/Documents/ReactWeb/public/images/logo.png
```

PNG with a transparent background works best. The Navbar and Footer reference this exact filename. (If the file isn't there yet, the site still loads — it just hides the image gracefully.)

### 3. Install project dependencies

```bash
cd /Users/agadi/Documents/ReactWeb
npm install
```

This downloads all libraries (React, Tailwind, fonts, etc.) — takes 1–2 minutes the first time.

### 4. Start the development server

```bash
npm run dev
```

Your browser opens to <http://localhost:5173>. Save any file and the page reloads instantly. Stop the server with `Ctrl + C`.

---

## ✏️ How to Edit Content

**Almost everything you'll want to change lives in one file:**

> 📁 `src/data/content.ts`

Open it in any editor. Items already filled in for Karvelis:

- ✅ Company name, tagline, founded year (2026)
- ✅ Two phone numbers: +91 63605 28601 & +91 79758 63943
- ✅ All 5 product categories with professional descriptions
- ✅ All 6 licenses (IEC, APEDA RCMC, FSSAI, MSME, AD Code, GST) — FSSAI highlighted
- ✅ About section with Exim firm experience credibility
- ✅ Professional product images (Unsplash placeholders)
- ✅ "More Products Available" request component

Items marked with `// TODO` that you need to fill in:

- 📝 Exact Mysore street address + pincode (`contact.address`)
- 📝 Real business email addresses (`contact.email`, `contact.salesEmail`)
- 📝 Social media URLs (`contact.social`) — leave blank to hide

---

## 📷 **CRITICAL: Replace Placeholder Images Before Going Live**

**The site currently uses Unsplash placeholder images.** Before launching to your buyers:

1. **Photograph your actual products** professionally:
   - Organic eggs (in carton, natural lighting, appealing)
   - Dehydrated fruits (pile/close-up, colorful, detailed)
   - Black sesame seeds (macro shot, purity visible)
   - Blanched & roasted peanuts (bulk, appetizing)
   - Turmeric fingers (whole, polished, graded)

2. **Save your images to** `public/images/`:
   - organic-eggs.jpg
   - dehydrated-fruits.jpg
   - black-sesame-seeds.jpg
   - blanched-roasted-peanuts.jpg
   - turmeric-fingers.jpg

3. **Update URLs in `src/data/content.ts`**, in the `products.items` array:
   ```ts
   image: '/images/organic-eggs.jpg'  // instead of Unsplash URL
   ```

4. **Compress images** before uploading (use <https://tinypng.com>):
   - Keep under 500 KB each
   - Keeps site speed fast on slow connections
   - Professional presentation

**Why this matters**: Buyers of export products make decisions partly on presentation. Real product photography is non-negotiable for a merchant exporter aiming for serious, wholesale buyers.

---

---

## ✅ Production-Readiness Checklist

This site is **built for production** and **ready to generate real business**. Before your first buyer inquiry:

### Before deploying (local testing — ~30 min)

- [ ] Node.js installed (v18+)
- [ ] `npm install` completed without errors
- [ ] `npm run dev` loads the site at http://localhost:5173
- [ ] **Replaced all 5 product images with real photos** (local `public/images/` folder)
- [ ] Updated `src/data/content.ts` with:
  - [ ] Exact Mysore address + pincode (line ~26)
  - [ ] Real email addresses (lines ~30-31)
  - [ ] Social media URLs if you have them (lines ~32-37) — or leave blank
- [ ] Tested on mobile (resize browser to 375px width)
- [ ] Clicked the WhatsApp button (calls +91 63605 28601)
- [ ] Filled the inquiry form and verified the security badge is visible
- [ ] Ran `npm run build` — confirmed no TypeScript errors, `dist/` folder created

### Before going live on Cloudflare Pages

- [ ] Reserved your domain: `karvelisglobalexports.com` (or `.in`, `.co.in`)
- [ ] Created a Formspree account (https://formspree.io), grabbed the form endpoint
- [ ] Pasted Formspree endpoint into `src/data/content.ts` line ~271: `export const formspreeEndpoint = '...';`
- [ ] Pushed code to your GitHub repo
- [ ] Deployed to Cloudflare Pages (See **Deploying to Cloudflare Pages** section above)
- [ ] Tested from the live URL:
  - [ ] Form submission succeeds → arrives in your email
  - [ ] All product images load
  - [ ] Links to Contact / Privacy / WhatsApp work
- [ ] Ran deployed URL through https://securityheaders.com — aim for **A** grade
- [ ] Pointed your domain to Cloudflare Pages (DNS CNAME record)
- [ ] Enabled Cloudflare's **Bot Fight Mode** and **Managed Ruleset** (free WAF)
- [ ] Set SSL/TLS → **Always Use HTTPS** in Cloudflare dashboard

### FSSAI & Export License Visibility

This site prominently showcases:
- **FSSAI License** — listed first in Quality section, mentioned in every product description
- **All 6 licenses** — IEC, APEDA RCMC, FSSAI, MSME, AD Code, GST
- **Exim firm experience** — added to About section for credibility
- **"More Products Available"** — section for custom sourcing requests

This builds buyer confidence that you're a serious, compliant exporter.

---

This site is hardened against the realistic threats facing a small business marketing site:

| Threat | Mitigation |
|---|---|
| Form spam from bots | Hidden honeypot field + Formspree's built-in CAPTCHA |
| Visitor data leaking to Google Fonts | All fonts self-hosted via `@fontsource/*` |
| Trackers / analytics fingerprinting | None added — no Google Analytics, no Facebook Pixel, nothing |
| Third-party cookies | None set — there is nothing to consent to |
| Clickjacking (your site embedded in a malicious iframe) | `X-Frame-Options: DENY` + `frame-ancestors 'none'` in CSP |
| MIME sniffing attacks | `X-Content-Type-Options: nosniff` |
| HTTPS downgrade attacks | `Strict-Transport-Security` with `preload` |
| Camera / mic / location prompts on your site | Blocked via `Permissions-Policy` |
| Cross-site script injection (XSS) | Strict Content Security Policy |
| Outdated dependency CVEs | `npm audit` — run before each deploy |

**What protection visitors see**: a Privacy section after the Contact form explaining exactly what's collected (only the inquiry form fields), where it goes (Formspree → your inbox), and that nothing else is tracked.

**What you must do to keep it secure**: see the [Security checklist](#-security-checklist-before-each-deploy) at the bottom.

---

## 📧 Connecting the Inquiry Form to Your Inbox

By default, the form opens the visitor's email client (works, but not ideal). To receive submissions directly:

1. Sign up at <https://formspree.io> (free; 50 submissions/month).
2. Create a new form, copy its endpoint URL (looks like `https://formspree.io/f/abc1234`).
3. In `src/data/content.ts`, paste it as the value of `formspreeEndpoint`:

   ```ts
   export const formspreeEndpoint = 'https://formspree.io/f/abc1234';
   ```

4. **In Formspree settings**, enable:
   - reCAPTCHA / hCaptcha
   - "Restrict submissions to your domain" (after you have one)
   - Email notifications

The honeypot field built into the form will silently absorb most spam bots before they ever reach Formspree.

---

## ☁️ Deploying to Cloudflare Pages

Cloudflare Pages gives you free hosting + automatic HTTPS + DDoS protection + a free WAF (Web Application Firewall) — exactly what a small export business needs.

### One-time deploy steps

1. **Create a GitHub repo** for this project and push your code:
   ```bash
   cd /Users/agadi/Documents/ReactWeb
   git init
   git add -A
   git commit -m "Initial commit"
   # Create repo on github.com, then:
   git remote add origin https://github.com/<your-username>/karvelis-website.git
   git push -u origin main
   ```

2. **Sign up at <https://pages.cloudflare.com>** (free).

3. **Connect to GitHub** → select your repo → click "Begin setup".

4. **Build settings**:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `18` or higher

5. Click **Save and Deploy**. Your site goes live at `https://karvelis-website.pages.dev` in about 90 seconds.

### Connect your custom domain

1. Buy `karvelisglobalexports.com` from any registrar (GoDaddy, Namecheap, Cloudflare Registrar — Cloudflare's is cheapest).
2. In Cloudflare Pages → your project → **Custom domains** → **Set up a custom domain** → follow the prompts.
3. HTTPS is enabled automatically. The `_headers` file in this project will be applied to all requests.

### Enable extra protection (recommended)

In your Cloudflare dashboard:

- **Security → WAF → Managed rules**: enable the "Cloudflare Free Managed Ruleset"
- **Security → Bots**: turn on "Bot Fight Mode" (free)
- **SSL/TLS → Edge Certificates**: set "Always Use HTTPS" → On
- **SSL/TLS → Edge Certificates**: set "Minimum TLS Version" → 1.2

After deploying, run your live URL through:
- <https://securityheaders.com> — target an **A** grade
- <https://observatory.mozilla.org> — target B+ or better

---

## ✅ Security Checklist Before Each Deploy

Run through this every time you push changes:

- [ ] Run `npm audit` and fix any high-severity vulnerabilities
- [ ] Run `npm run build` — confirm no TypeScript errors
- [ ] Test the contact form submits successfully (and that the honeypot still drops bots — fill the hidden `_gotcha` field via DevTools and verify it's silently dropped)
- [ ] Verify no Google Fonts requests in DevTools → Network tab on first load
- [ ] Confirm the Privacy section is reachable from the footer link
- [ ] Never commit `.env` files, API keys, or anything secret (`.gitignore` already protects you)
- [ ] Enable 2FA on: GitHub, Cloudflare, Formspree, your email provider, your domain registrar

---

## 🎨 Customization Reference

**Brand colors** — edit `tailwind.config.js`:
- `navy` palette → primary brand color (matches the logo's deep blue)
- `gold` palette → accent color (matches the logo's warm gold)

**Section order** — edit `src/App.tsx`. Drag any `<Component />` to reorder.

**Logo size** — `src/components/Navbar.tsx` (search for `h-10`/`h-12`).

**Add a new product category** — append a new entry to `products.items` in `content.ts`. Use any icon name from <https://lucide.dev/icons>.

---

## 📦 Project Structure

```
ReactWeb/
├── public/
│   ├── _headers              ← Cloudflare security headers (CSP, HSTS, etc.)
│   ├── _redirects            ← SPA fallback routing
│   ├── robots.txt            ← Search engine instructions
│   ├── favicon.svg           ← Site icon (Karvelis brand mark)
│   └── images/
│       ├── README.md         ← Instructions for what images to add
│       └── logo.png          ← (you save the Karvelis logo here)
├── src/
│   ├── data/
│   │   └── content.ts        ← ⭐ Edit this for all site copy
│   ├── components/
│   │   ├── Navbar.tsx        ← Sticky nav with logo
│   │   ├── Hero.tsx          ← Full-screen intro
│   │   ├── About.tsx
│   │   ├── Products.tsx      ← 5 Karvelis product categories
│   │   ├── WhyChooseUs.tsx
│   │   ├── Quality.tsx       ← The 6 export licenses
│   │   ├── Process.tsx       ← 5-step workflow
│   │   ├── GlobalReach.tsx
│   │   ├── Testimonials.tsx  ← Auto-hides until you add real ones
│   │   ├── Contact.tsx       ← Inquiry form with honeypot
│   │   ├── SecurityBadge.tsx ← Trust line under the form
│   │   ├── Privacy.tsx       ← DPDP/GDPR-aligned privacy section
│   │   ├── Footer.tsx
│   │   └── WhatsAppButton.tsx
│   ├── App.tsx               ← Section order
│   ├── main.tsx              ← Entry point
│   └── index.css             ← Self-hosted fonts + design tokens
├── index.html                ← SEO meta + CSP meta
├── tailwind.config.js        ← Brand colors
└── package.json
```

---

## 🆘 Troubleshooting

**Logo not showing in Navbar/Footer**
You haven't saved `public/images/logo.png` yet. Save the Karvelis logo image there and refresh.

**Form submissions aren't reaching me**
You haven't connected Formspree yet. See [Connecting the Inquiry Form](#-connecting-the-inquiry-form-to-your-inbox).

**`npm install` fails**
Try deleting `node_modules` and `package-lock.json`, then run `npm install` again. If it still fails, ensure your Node version is v18 or higher.

**securityheaders.com gives me a B grade**
That means the deployment-level headers aren't being applied. Check that `public/_headers` was included in the build — Cloudflare Pages auto-detects it.

---

Wishing you a great launch and a strong start to Karvelis Global Exports. 🌍
