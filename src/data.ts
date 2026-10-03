const px = (id: number, w: number, h: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const IMAGES = {
  heroMain: px(30987148, 1000, 1250),
  heroSecondary: px(16226404, 480, 480),
  santorini: px(6555198, 1200, 750),
  kyoto: px(16226263, 900, 675),
  alps: px(28670240, 900, 675),
  safari: px(39332308, 900, 675),
  bali: px(35386129, 900, 675),
  patagonia: px(37434207, 1200, 750),
  benefits: px(39557160, 820, 1025),
  ctaBg: px(12770506, 1800, 1000),
};

export const NAV_LINKS = [
  { label: "Tours", href: "#tours" },
  { label: "Why Meridian", href: "#difference" },
  { label: "The Way", href: "#way" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const FLAP_WORDS = [
  "Santorini",
  "Kyoto",
  "the Alps",
  "Patagonia",
  "the Serengeti",
  "Bali",
  "Lofoten",
  "Amalfi",
];

export const TICKER_ITEMS = [
  "Kyoto in Bloom — 2 seats left on the Mar 14 departure",
  "Free date changes on all Europe tours through spring",
  "New for 2026: Patagonia End-to-End · 8 travellers max",
  "Young traveller rates from $1,290 on 14 routes",
  "Every tour carbon-balanced — receipts included",
  "$99 fully refundable deposit on all departures",
];

export const PRESS = ["The Wayfarer", "ATLAS WEEKLY", "Roam Journal", "Nomad Times", "Voyage."];

export const STATS = [
  { value: 128400, decimals: 0, suffix: "+", label: "travellers hosted since 2009" },
  { value: 4.9, decimals: 1, suffix: "/5", label: "average rating, 21,400 reviews" },
  { value: 140, decimals: 0, suffix: "+", label: "destinations on our map" },
  { value: 98, decimals: 0, suffix: "%", label: "would book Meridian again" },
];

export type Tour = {
  id: string;
  name: string;
  region: "Europe" | "Asia" | "Africa" | "Americas";
  days: number;
  price: number;
  rating: number;
  reviews: number;
  group: string;
  tags: string[];
  image: string;
  alt: string;
  blurb: string;
  highlights: string[];
};

export const REGIONS = ["All", "Europe", "Asia", "Africa", "Americas"] as const;

export const TOURS: Tour[] = [
  {
    id: "santorini",
    name: "Santorini & the Aegean",
    region: "Europe",
    days: 8,
    price: 2480,
    rating: 4.9,
    reviews: 212,
    group: "10 travellers",
    tags: ["Iconic", "Coastal"],
    image: IMAGES.santorini,
    alt: "Whitewashed buildings and windmills of Santorini at sunset over the caldera",
    blurb:
      "Caldera sunsets, cliffside vineyards and slow mornings in Oia — plus the two islands everyone else misses.",
    highlights: [
      "Private catamaran hour off the caldera at golden light",
      "Table booked at a winery the guides grew up visiting",
      "Two hidden-island stops with no other tour boats",
    ],
  },
  {
    id: "kyoto",
    name: "Kyoto in Bloom",
    region: "Asia",
    days: 10,
    price: 3150,
    rating: 5.0,
    reviews: 168,
    group: "8 travellers",
    tags: ["Seasonal", "Cultural"],
    image: IMAGES.kyoto,
    alt: "Kiyomizu-dera temple pagoda with cherry blossoms in Kyoto",
    blurb:
      "Temples at opening hour, a private tea master, kaiseki nights and the cherry front as it moves through the city.",
    highlights: [
      "Tea ceremony with a master, arranged in advance",
      "Fushimi Inari at 5:40 am — the trail to yourselves",
      "Nightly route adjusted to where the blossoms are",
    ],
  },
  {
    id: "alps",
    name: "Swiss Alps Grand Traverse",
    region: "Europe",
    days: 7,
    price: 2940,
    rating: 4.8,
    reviews: 301,
    group: "12 travellers",
    tags: ["Adventure", "Alpine"],
    image: IMAGES.alps,
    alt: "Swiss alpine village with castle, lake and the Bernese Alps behind",
    blurb:
      "Glacier trains, ridge walks with local guides and a fondue stop in a village you won't find on Instagram.",
    highlights: [
      "Panorama carriage on the glacier railway, seats pre-reserved",
      "Guided ridge walk with a shepherd-raised local",
      "Lakeside villages, never resort towns",
    ],
  },
  {
    id: "serengeti",
    name: "Serengeti Wild Safari",
    region: "Africa",
    days: 9,
    price: 4620,
    rating: 4.9,
    reviews: 143,
    group: "6 guests",
    tags: ["Wildlife", "Luxury tents"],
    image: IMAGES.safari,
    alt: "Elephant herd under an acacia tree in the Mara, Tanzania",
    blurb:
      "Dawn game drives through the Great Migration, sundowners on the kopjes and nights under real constellations.",
    highlights: [
      "6 guests per vehicle — binoculars, not windows",
      "Tented camp that moves with the migration",
      "Full night drive with a Maasai-born guide",
    ],
  },
  {
    id: "bali",
    name: "Bali & the Lesser Isles",
    region: "Asia",
    days: 11,
    price: 2780,
    rating: 4.8,
    reviews: 254,
    group: "12 travellers",
    tags: ["Coastal", "Wellness"],
    image: IMAGES.bali,
    alt: "Aerial view of emerald rice terraces in Ubud, Bali",
    blurb:
      "Rice-terrace sunrises, a private island night, and slow days balanced with jungle waterfalls and volcano walks.",
    highlights: [
      "Sunrise on the terraces before the roads wake",
      "One night on a private island, all to yourselves",
      "Balanced schedule — no 6 am starts, ever",
    ],
  },
  {
    id: "patagonia",
    name: "Patagonia End-to-End",
    region: "Americas",
    days: 12,
    price: 4380,
    rating: 5.0,
    reviews: 97,
    group: "8 travellers",
    tags: ["Trekking", "Epic"],
    image: IMAGES.patagonia,
    alt: "Snow-capped peaks of Torres del Paine under a dramatic Patagonian sky",
    blurb:
      "Torres del Paine to the steppe — ice fields, condors and the wind that makes everything feel earned.",
    highlights: [
      "Base of the Towers walk, small-group only",
      "Perito Moreno ice field, calving at the right hour",
      "8 travellers max — porters and full meals included",
    ],
  },
];

export type Feature = {
  icon: "route" | "bell" | "users" | "calendar" | "leaf" | "tag";
  title: string;
  body: string;
  stat?: string;
  dark?: boolean;
  chat?: boolean;
  big?: boolean;
};

export const FEATURES: Feature[] = [
  {
    icon: "route",
    title: "Itineraries, hand-crafted",
    body: "No template survives contact with a Meridian designer. Every route is drawn by the person who has slept in the hotel, eaten at the table and timed the light.",
    stat: "2,300+ routes designed in-house",
    big: true,
  },
  {
    icon: "bell",
    title: "A concierge, 24/7",
    body: "A real designer on message from the moment you say hello until you land back home. Median first reply: 90 seconds.",
    dark: true,
    chat: true,
  },
  {
    icon: "users",
    title: "Small groups, real access",
    body: "Never more than 12 travellers. Doors open that stay shut for busloads — and dinners sit down to tables, not counters.",
    stat: "Average group: 8.4",
  },
  {
    icon: "calendar",
    title: "Flexible by design",
    body: "Plans change. Move your dates free up to 30 days out, or shift between departures at no cost — no forms, no calls, no guilt.",
  },
  {
    icon: "leaf",
    title: "Carbon-balanced, verifiably",
    body: "Every tour is offset through audited reforestation and clean-energy projects. You get the receipts, not the brochure.",
    stat: "1,240 tCO₂ offset in 2025",
  },
  {
    icon: "tag",
    title: "The best-price promise",
    body: "Find the same route, same inclusions, cheaper within 48 hours of booking? We match it and take 10% off on top.",
  },
];

export type Benefit = {
  no: string;
  title: string;
  body: string;
  icon: "chat" | "route" | "shield" | "compass" | "pin";
};

export const BENEFITS: Benefit[] = [
  {
    no: "01",
    title: "Say hello",
    body: "Tell us where you want to be, roughly when, and how you like to travel. A designer — not a bot — replies within four hours with three honest directions.",
    icon: "chat",
  },
  {
    no: "02",
    title: "Get the route",
    body: "Within 48 hours you have a day-by-day: the hotel we actually want you in, the table we want to book, the light we want you to catch. Nothing filler.",
    icon: "route",
  },
  {
    no: "03",
    title: "Lock it with $99",
    body: "A fully refundable deposit holds your seats. Flights, dates, even the room type can keep changing until 30 days out — free of charge.",
    icon: "shield",
  },
  {
    no: "04",
    title: "Travel with people who know",
    body: "Local guides who grew up there, a concierge on message around the clock, and a group small enough to become the friend story.",
    icon: "compass",
  },
  {
    no: "05",
    title: "Come home with the story",
    body: "A printed route book, a shared album of the group's best frames, and your carbon receipts. Then the same designer remembers you next time.",
    icon: "pin",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We've booked six Meridian tours now. The first was supposed to be a honeymoon; the last was our entire family in Patagonia. Nobody has ever come home unimpressed.",
    name: "Sarah & Tom Okafor",
    meta: "Lagos · 6 tours",
    tour: "Patagonia End-to-End",
    rating: 5,
  },
  {
    quote:
      "My designer found me a private tea ceremony with a master I'd read about once in a book. I still don't know how she did it. It was the best day of my life.",
    name: "Priya Raman",
    meta: "Singapore · Solo traveller",
    tour: "Kyoto in Bloom",
    rating: 5,
  },
  {
    quote:
      "I'm a solo traveller and I wanted a group that felt like friends by day two. Max twelve worked. We're still on a group chat — it never really ends.",
    name: "Daniel Whitfield",
    meta: "Manchester · Solo traveller",
    tour: "Serengeti Wild Safari",
    rating: 5,
  },
  {
    quote:
      "A flight got cancelled on day three in the Alps. Meridian rebuilt our whole schedule overnight — better lodgings, a heli transfer, the lot. That's the concierge in one story.",
    name: "Elena Marchetti",
    meta: "Milan · Couple",
    tour: "Swiss Alps Grand Traverse",
    rating: 5,
  },
  {
    quote:
      "The carbon-balancing actually happened and they sent us the receipts. Small detail — but it made us book the next two trips without a second thought.",
    name: "James & Ada Chen",
    meta: "Vancouver · Family of four",
    tour: "Bali & the Lesser Isles",
    rating: 5,
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  per: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const PLANS: Plan[] = [
  {
    name: "Essence",
    tagline: "Short escapes, well done.",
    price: "$1,290",
    per: "per traveller, from",
    features: [
      "4–6 day guided routes",
      "Small group of up to 12",
      "3–4★ stays with breakfast",
      "Local expert guide throughout",
      "24/7 emergency line",
      "ATOL financial protection",
    ],
    cta: "Start with Essence",
  },
  {
    name: "Signature",
    tagline: "The full Meridian experience.",
    price: "$2,480",
    per: "per traveller, from",
    featured: true,
    features: [
      "7–11 day hand-crafted routes",
      "Boutique stays, up to 4★",
      "Breakfast + 4 curated dinners",
      "Personal designer + on-trip concierge",
      "Free date changes up to 30 days out",
      "10% best-price match included",
    ],
    cta: "Book Signature",
  },
  {
    name: "Voyage Privé",
    tagline: "Your route, your rules.",
    price: "$6,900",
    per: "per group, from",
    features: [
      "12+ days or private group",
      "5★ and private villas",
      "Private guide + car throughout",
      "Any departure date, any pace",
      "Heli, yacht & table requests",
      "Dedicated planning partner",
    ],
    cta: "Design my voyage",
  },
];

export const FAQS = [
  {
    q: "How far in advance should I book?",
    a: "For peak season — Kyoto in bloom, Patagonia in December, the Great Migration — we suggest 6–10 months out, since small-group seats release in one batch. Shoulder season routes can often be booked beautifully 8–12 weeks ahead, and our designers will tell you exactly which departures still have room before you commit.",
  },
  {
    q: "Are flights included in tour prices?",
    a: "International flights aren't included, which keeps your total flexible — but every tour price covers all in-tour transport: the trains, boats, transfers and vehicle days. We'll also lock in international flights at the airline's own price when you're ready, with our change window on top of the airline's rules.",
  },
  {
    q: "What group sizes do you run?",
    a: "Never more than 12, and most departures cap at 8. The Serengeti runs 6 guests per vehicle. This is a product decision, not a marketing one: it's what lets us walk into the kitchen, book the one table, and keep days moving without a headcount.",
  },
  {
    q: "Can I change my dates after booking?",
    a: "Yes — free of charge up to 30 days before departure on Signature and Voyage Privé, 14 days on Essence. Move between departures of the same route at no cost, or talk to your designer about a different route entirely. Changes take two clicks in your trip dashboard.",
  },
  {
    q: "Are Meridian tours good for solo travellers?",
    a: "Roughly 40% of our travellers book solo, and routes are paced for people who like to travel with a group but keep their own evening. Single supplements apply where a private room is needed, and your designer will suggest the departures with the friendliest group chemistry.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Our deposit of $99 is fully refundable at any point before your itinerary is confirmed. After confirmation, cancellations 60+ days out receive a full refund; 30–59 days out, 75%; inside 30 days, travel insurance is available from day one to cover the balance. Everything is ATOL-protected, so your money is safe with us.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Every booking is a $99 refundable deposit plus two further installments — the final one due 30 days before departure. For groups of six or more we'll split the balance into up to four interest-free payments. No card fees, no hidden charges, ever.",
  },
];

export const FOOTER_COLS = [
  {
    title: "Destinations",
    links: ["Santorini & the Aegean", "Kyoto in Bloom", "Swiss Alps", "Serengeti", "Bali & Lesser Isles", "Patagonia"],
  },
  {
    title: "Company",
    links: ["About Meridian", "Our designers", "Sustainability", "Journal", "Careers", "Press"],
  },
  {
    title: "Support",
    links: ["Help centre", "Cancellation policy", "Travel insurance", "Payment plans", "Terms", "Privacy"],
  },
];
