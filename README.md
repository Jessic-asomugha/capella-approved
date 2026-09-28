# Capella Integrated Global Limited - Official Website

Corporate website for Capella Integrated Global Limited, a Nigerian company providing reliable diesel (AGO) supply to businesses and organisations. Live at [capella.com.ng](https://capella.com.ng).

**Service coverage:** Abuja (FCT), Kaduna, Nasarawa, Niger State and Kogi.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/services` | Diesel (AGO) supply |
| `/about` | About Capella |
| `/contact` | Contact form and details |
| `/quote` | Request a quote form |

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- React Router (page URLs)
- React Helmet Async (per-page titles and meta tags)
- Lucide React (icons)
- Web3Forms (contact and quote form emails)

## Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm run typecheck  # check TypeScript
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Forms

The contact and quote forms send through [Web3Forms](https://web3forms.com). The access key is set in `src/pages/Contact.tsx` and `src/pages/Quote.tsx`. It is a public form key, but submissions are delivered to the email address registered for it, so keep that account active.

## SEO

- Each page sets its own title, description and canonical URL in `src/App.tsx`, using `src/components/Seo.tsx`.
- `public/sitemap.xml` lists every page. Update the `lastmod` dates when page content changes.
- Submit `https://capella.com.ng/sitemap.xml` in Google Search Console.

## Deployment (Truehost / Apache)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` to `public_html`, including the hidden `.htaccess` file.
3. `.htaccess` sends `/services`, `/about`, `/contact` and `/quote` to `index.html`. Without it, refreshing or sharing those links returns a 404.

## Project Structure

```
capella-approved/
├── public/
│   ├── .htaccess        # Apache rewrite so page URLs work on refresh
│   ├── sitemap.xml      # XML sitemap for search engines
│   └── images/          # Site images
├── src/
│   ├── components/      # Shared UI (Seo.tsx sets per-page meta)
│   ├── data/            # Service content
│   ├── hooks/           # useInView
│   ├── pages/           # Home, Services, About, Contact, Quote
│   ├── App.tsx          # Routes and page metadata
│   └── main.tsx         # Entry point
├── index.html           # HTML shell with site-wide fallback tags
└── vite.config.ts
```

## Known Open Items

- Footer social icons and the Cookie Policy link still point to `#` and need real URLs.
