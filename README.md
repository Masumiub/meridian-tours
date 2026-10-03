# Meridian Tours & Travel

A single-page marketing site for **Meridian Tours & Travel**, a fictional premium agency that sells hand-crafted small-group tours. The page is built to book a route: a visitor can browse destinations, compare plans, and request an itinerary without leaving the page.

The live copy positions the brand as operating since 2009, with 140+ destinations, a 4.9/5 rating from 21,400 reviews, and studios in Portland, Lisbon, and Tokyo.

## Features

### Navigation

- Fixed header that turns into a frosted bar after a short scroll.
- Desktop links jump to Tours, Why Meridian, The Way, Reviews, Pricing, and FAQ.
- Mobile menu locks page scroll and closes with Escape or a link tap.
- Phone link: `+1 800 555 0194` (Mon–Sat, 08:00–22:00).
- “Book a tour” scrolls to the booking form.
- Skip-to-content link for keyboard users.
- Back-to-top button appears after a long scroll.

### Hero

- “Now boarding” strip with a rotating destination (Santorini, Kyoto, the Alps, Patagonia, the Serengeti, Bali, Lofoten, Amalfi).
- Headline, two photography frames, and a 4.9-star social proof badge.
- Animated counters for travellers hosted, average rating, destinations, and repeat-booking rate.
- Primary actions reserve a featured tour or scroll into the tour grid.

### Offers ticker

A looping amber marquee of current offers:

- Kyoto in Bloom — 2 seats left on the Mar 14 departure
- Free date changes on all Europe tours through spring
- New for 2026: Patagonia End-to-End, 8 travellers max
- Young traveller rates from $1,290 on 14 routes
- Every tour carbon-balanced, with receipts
- $99 fully refundable deposit on all departures

### Press and trust

Featured-in row for The Wayfarer, Atlas Weekly, Roam Journal, Nomad Times, and Voyage, plus three trust points: ATOL financial protection, IATA accreditation, and carbon balancing since 2021.

### Why Meridian

Six product promises:

| Promise | Detail |
| --- | --- |
| Hand-crafted itineraries | 2,300+ routes designed in-house |
| 24/7 concierge | Median first reply shown as 90 seconds, with a sample chat |
| Small groups | Never more than 12; average group 8.4 |
| Flexible dates | Free moves up to 30 days out |
| Carbon-balanced travel | 1,240 tCO₂ offset in 2025, with receipts |
| Best-price promise | Match a cheaper identical route within 48 hours and take 10% off |

### Tours

Six departures, filterable by **All**, **Europe**, **Asia**, **Africa**, and **Americas**. Each card shows duration, rating, review count, tags, group size, region, a short description, expandable itinerary highlights, and a from-price. **Reserve** pre-fills that tour in the booking form and scrolls to it. Santorini is marked editor’s choice.

| Tour | Region | Days | Group | From | Rating |
| --- | --- | --- | --- | --- | --- |
| Santorini & the Aegean | Europe | 8 | 10 travellers | $2,480 | 4.9 (212) |
| Kyoto in Bloom | Asia | 10 | 8 travellers | $3,150 | 5.0 (168) |
| Swiss Alps Grand Traverse | Europe | 7 | 12 travellers | $2,940 | 4.8 (301) |
| Serengeti Wild Safari | Africa | 9 | 6 guests | $4,620 | 4.9 (143) |
| Bali & the Lesser Isles | Asia | 11 | 12 travellers | $2,780 | 4.8 (254) |
| Patagonia End-to-End | Americas | 12 | 8 travellers | $4,380 | 5.0 (97) |

### Booking request

The form collects tour (or “not sure yet”), departure month (Mar 2026–Feb 2027), party size (1–12), travel style, name, and email.

The estimate updates as those choices change:

- Unsure starts from the Signature base of **$2,480** per traveller.
- A selected tour uses that tour’s listed price.
- Style multipliers: Balanced ×1, Luxury ×1.28, Adventure ×0.96, Culture ×0.92.
- Total is base × style × travellers, rounded to the nearest $10.

Submitting shows a ticket-style confirmation with a generated reference (`MRD-####`), the chosen details, and the estimate. Nothing is sent to a server, and no payment is taken. The visitor can edit the request and submit again.

### The Way

A five-step story of how a trip is planned:

1. Say hello — a designer replies within four hours with three directions.
2. Get the route — a day-by-day plan within 48 hours.
3. Lock it with a $99 refundable deposit.
4. Travel with local guides and a small group.
5. Come home with a printed route book, a shared album, and carbon receipts.

### Reviews

Five traveller stories rotate every 6.5 seconds. Hover or keyboard focus pauses the carousel. Motion is disabled when the visitor prefers reduced motion.

### Pricing

Three plans. Each button scrolls to the booking form.

| Plan | From | Includes |
| --- | --- | --- |
| **Essence** | $1,290 per traveller | 4–6 day routes, groups up to 12, 3–4★ stays with breakfast, local guide, 24/7 emergency line, ATOL protection |
| **Signature** (featured) | $2,480 per traveller | 7–11 day routes, boutique stays up to 4★, breakfast plus 4 dinners, personal designer and on-trip concierge, free date changes to 30 days out, 10% best-price match |
| **Voyage Privé** | $6,900 per group | 12+ days or a private group, 5★ and villas, private guide and car, any date and pace, heli / yacht / table requests, a dedicated planning partner |

### FAQ

An accordion (first answer open) covers booking lead time, flights, group size, date changes, solo travel, cancellation, and payment plans. A side card repeats the phone number and `hello@meridian.travel`.

Policy highlights shown on the page:

- Peak season: book 6–10 months ahead. Shoulder season: often 8–12 weeks.
- International flights are extra. In-tour transport is included.
- Groups never exceed 12. Most cap at 8. Serengeti is 6 guests per vehicle.
- Free date changes: 30 days out on Signature and Voyage Privé, 14 days on Essence.
- About 40% of travellers book solo. Single supplements apply for a private room.
- The $99 deposit is refundable until the itinerary is confirmed. After that: full refund at 60+ days, 75% at 30–59 days. Travel insurance covers the balance inside 30 days.
- Payment is the deposit plus two installments, with the last due 30 days before departure. Groups of six or more can split into up to four interest-free payments.

### Closing call to action and footer

- Full-bleed photo with a Ken Burns pan, a short pitch, and an email capture for the route list.
- Footer columns for destinations, company, and support. Those links scroll to Tours, Why Meridian, or FAQ.
- “The Departure Guide” newsletter form. A valid email shows a local “subscribed” message. It does not call an API.
- Social buttons for Instagram, X, YouTube, and Pinterest (visual only).
- Offices listed as Portland, Lisbon, and Tokyo. Footer marks ATOL 11542, IATA accreditation, and carbon balancing.

## Design and motion

- Palette of pine green, warm cream, sand, and amber.
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) for display, [Manrope](https://fonts.google.com/specimen/Manrope) for body, [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) for labels.
- Photography is loaded from Pexels.
- Scroll reveals, a film-grain overlay, drifting light washes, and a rotating logo mark.
- `prefers-reduced-motion` turns off the destination flip, review autoplay, count-up animation, and smooth scrolling.

## Tech stack

- [React 19](https://react.dev/) with TypeScript
- [Vite 7](https://vite.dev/) and the React plugin
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- `clsx` and `tailwind-merge` for class names
- `vite-plugin-singlefile` so `npm run build` inlines the script and styles into one `dist/index.html`

There is no router, backend, or database. Tour, plan, review, and FAQ content lives in `src/data.ts`.

## Project structure

```
src/
  App.tsx                 Page composition and reserve → booking handoff
  data.ts                 Tours, plans, reviews, FAQ, images, navigation
  hooks.ts                Scroll, in-view, count-up, reduced motion
  index.css               Tailwind theme and motion
  components/             One file per section, plus icons and reveal helpers
  utils/cn.ts             Class name helper
```

## Getting started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

The dev server prints a local URL (Vite’s default is `http://localhost:5173/`).

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check is not a separate step; Vite builds a single-file `dist/index.html` |
| `npm run preview` | Serve the production build locally |

## Notes

Booking requests, the footer newsletter, and the closing email form update the page only. They do not send email or store a reservation. Phone, ATOL, IATA, review counts, and office locations are marketing copy for the landing page.
