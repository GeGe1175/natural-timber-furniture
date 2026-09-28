const BASE = import.meta.env.BASE_URL

export const CATEGORIES = [
  {
    slug: 'wall-units',
    name: 'Wall units',
    image: `${BASE}images/hero-wallunit.jpg`,
    blurb: 'Built end-to-end for the wall they’ll live on — no gaps, no fillers.',
  },
  {
    slug: 'cabinets-shelves',
    name: 'Cabinets & shelves',
    image: `${BASE}images/cabinets-shelves.jpg`,
    blurb: 'Storage that carries weight and looks light doing it.',
  },
  {
    slug: 'tables-chairs',
    name: 'Tables & chairs',
    image: `${BASE}images/tables.jpg`,
    blurb: 'Dining settings sized to the room, not the showroom floor.',
  },
  {
    slug: 'entertainment-units',
    name: 'Entertainment units',
    image: `${BASE}images/entertainment-units.jpg`,
    blurb: 'Cable-managed, cavity-fitted, built around the screen you own.',
  },
  {
    slug: 'bedroom-sets',
    name: 'Bedroom sets',
    image: `${BASE}images/bedroom-set.jpg`,
    blurb: 'Matched grain across wardrobes, bedheads and bedside pairs.',
  },
  {
    slug: 'chairs',
    name: 'Chairs',
    image: `${BASE}images/chairs.jpg`,
    blurb: 'Joined, not screwed — built to outlast the house.',
  },
]

export const TIMBERS = [
  {
    slug: 'tasmanian-oak',
    name: 'Tasmanian oak',
    image: `${BASE}images/wood-tasmanian-oak.jpg`,
    note: 'Light, straw to soft reddish-brown — the most forgiving timber for colour-matching against existing pieces.',
  },
  {
    slug: 'jarrah',
    name: 'Jarrah',
    image: `${BASE}images/wood-jarrah.jpg`,
    note: 'Deep red-brown West Australian hardwood, dense and durable, darkens further with age.',
  },
  {
    slug: 'tasmanian-blackwood',
    name: 'Tasmanian blackwood',
    image: `${BASE}images/wood-blackwood.jpg`,
    note: 'Rich chocolate tones with a natural sheen — our most requested timber for feature pieces.',
  },
  {
    slug: 'blackbutt',
    name: 'Blackbutt',
    image: `${BASE}images/wood-blackbutt.jpg`,
    note: 'Pale gold Australian hardwood with a fine, even grain. Strong and termite-resistant.',
  },
  {
    slug: 'american-oak',
    name: 'American oak',
    image: `${BASE}images/wood-american-oak.jpg`,
    note: 'Wide, consistent grain in warm honey tones — takes stain evenly for a custom finish.',
  },
]
