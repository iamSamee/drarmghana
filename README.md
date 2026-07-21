# Dr. Armghana Ali — Official Website

Personal website and Google Ads landing pages for **Dr. Armghana Ali (MBBS, FCPS)**, a gynecologist practicing at Hyaat International Hospital (G-13) and Saeed International Hospital (G-11), Islamabad.

🌐 Live site: [drarmghana.com](https://drarmghana.com)

---

## Tech Stack

- **React + TypeScript** — UI
- **Vite** — Build tool
- **Tailwind CSS** — Styling
- **shadcn/ui** — Component library
- **EmailJS** — Contact form submissions
- **Google Tag Manager** — Analytics & conversion tracking
- **Meta Pixel** — Facebook/Instagram ad tracking

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Main homepage |
| `/gynecologist-islamabad` | Google Ads landing page — Islamabad search campaign |
| `/gynecologist-g11` | Google Ads landing page — G-11 Maps/near-me campaign |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Build & Deploy

```bash
# Build + pre-render landing page routes
npm run build

# Output is in /dist — upload to Hostinger via File Manager or FTP
```

The build script runs `vite build` then `node prerender.mjs`, which generates static HTML for each landing page route with the correct canonical tags, title, and meta description.

---

## Clinic Locations

- **Hyaat International Hospital** — Clinic No. 3, G-13/1, Islamabad · 4:00–7:00 PM
- **Saeed International Hospital** — G-11 Markaz, Islamabad · 7:00–9:00 PM

📞 0308 2070008
