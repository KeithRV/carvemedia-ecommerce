# CarvemediA eCommerce landing page

Single-page React/Vite/Tailwind landing page for CarvemediA eCommerce, a local Shopify and eCommerce support service for businesses across Rye, Rosebud, Tootgarook, Blairgowrie, Sorrento, Portsea and the southern Mornington Peninsula.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL Vite prints in the terminal, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Where to edit business details

Edit `src/data/content.ts`.

Useful sections:

- `contactDetails`: public email, phone and location.
- `serviceAreas`: local area tags shown on the page.
- `services`: service card copy.
- `credibilityPoints`: the four credibility points.

Also update SEO and structured data placeholders in `index.html` before launch:

- `og:url`
- JSON-LD `url`
- JSON-LD `email`
- JSON-LD `telephone`

## Where to edit package prices

Package cards live in `src/data/content.ts` under `packages`.

Each package has:

- `name`
- `bestFor`
- `price`
- `cta`
- `includes`

The current prices are launch placeholders:

- Online Store Health Check: `From $149`
- Shopify Clean-Up Session: `From $349`
- Local eCommerce Lift: `From $750`

## Contact form

The form is currently front-end only and validates required fields before showing a success message.

To connect it later, edit `src/components/ContactForm.tsx` in `handleSubmit`.

Good options:

- Formspree
- Netlify Forms
- EmailJS
- Shopify app embed
- A custom backend endpoint

The submitted form data is already collected in one `form` object.

## Visual assets

- Hero background: `public/images/hero-background.webp`
- Header/footer logo: `public/images/cm-title.png`

## Suggested next improvements

- Connect the enquiry form to an email or CRM workflow.
- Add a real business URL and final structured data.
- Replace placeholder package prices once the offer is final.
- Add testimonials or before/after examples when the business has launch clients.
- Add a dedicated case-study section once there are real local examples.
