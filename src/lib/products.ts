import type { Product } from "./types";
export type { Product } from "./types";
export const COUPON = "SPICK15";
export const COUPON_OFF = 15;
export const BRAND = "SpickHome Clean";
export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
export const products: Product[] = [
  {
    "id": "sh-1",
    "name": "Neu Surface Spray",
    "price": 18,
    "image": "https://images.unsplash.com/photo-1585421514284-efb74c2b69ff?w=800",
    "tag": "Spray",
    "category": "Surfaces",
    "specs": [
      "Plant-safe",
      "Streak-free"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Refill pouch",
        "priceDelta": -4
      }
    ],
    "faq": [
      {
        "q": "Granite safe?",
        "a": "Yes — pH balanced."
      }
    ],
    "rating": 4.8,
    "reviewCount": 890
  },
  {
    "id": "sh-2",
    "name": "Soft Scrub Pods",
    "price": 24,
    "image": "https://images.unsplash.com/photo-1563453392212-326f5e8541b2?w=800",
    "tag": "Kitchen",
    "category": "Kitchen",
    "specs": [
      "Dissolve in warm water",
      "Non-scratch"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Subscribe",
        "priceDelta": -5
      }
    ],
    "faq": [
      {
        "q": "Septic safe?",
        "a": "Biodegradable formula."
      }
    ],
    "rating": 4.7,
    "reviewCount": 654
  },
  {
    "id": "sh-3",
    "name": "Microfiber Cloud Pack",
    "price": 32,
    "image": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800",
    "tag": "Cloths",
    "category": "Tools",
    "specs": [
      "6 weights",
      "Color-coded"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "XL pack",
        "priceDelta": 14
      }
    ],
    "faq": [
      {
        "q": "Lint free?",
        "a": "Edgeless weave."
      }
    ],
    "rating": 4.9,
    "reviewCount": 421
  },
  {
    "id": "sh-4",
    "name": "Bathroom Bloom Kit",
    "price": 45,
    "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800",
    "tag": "Bath",
    "category": "Bath",
    "specs": [
      "Mildew guard",
      "Glass polish"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Monthly ship",
        "priceDelta": -8
      }
    ],
    "faq": [
      {
        "q": "Marble?",
        "a": "Use soft cloth only."
      }
    ],
    "rating": 4.6,
    "reviewCount": 312
  },
  {
    "id": "sh-5",
    "name": "Floor Glide Mop",
    "price": 56,
    "image": "https://images.unsplash.com/photo-1527515637462-cff94ee67983?w=800",
    "tag": "Floor",
    "category": "Floor",
    "specs": [
      "360 head",
      "Washable pads"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Extra pads",
        "priceDelta": 12
      }
    ],
    "faq": [
      {
        "q": "Hardwood?",
        "a": "Micro-mist setting."
      }
    ],
    "rating": 4.8,
    "reviewCount": 278
  },
  {
    "id": "sh-6",
    "name": "Allergen Filter Set",
    "price": 39,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    "tag": "Air",
    "category": "Air",
    "specs": [
      "HEPA mini",
      "Quiet mode"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "2-room",
        "priceDelta": 25
      }
    ],
    "faq": [
      {
        "q": "Filter life?",
        "a": "Replace every 90 days."
      }
    ],
    "rating": 4.7,
    "reviewCount": 198
  },
  {
    "id": "sh-7",
    "name": "Pantry Purge Box",
    "price": 28,
    "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
    "tag": "Pantry",
    "category": "Organize",
    "specs": [
      "Labels",
      "Airtight jars"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Spice tier",
        "priceDelta": 15
      }
    ],
    "faq": [
      {
        "q": "Coaching?",
        "a": "15-min virtual guide included."
      }
    ],
    "rating": 4.5,
    "reviewCount": 167
  },
  {
    "id": "sh-8",
    "name": "Weekly Rhythm Plan",
    "price": 120,
    "image": "https://images.unsplash.com/photo-1556912173-3bb406ef3e76?w=800",
    "tag": "Plan",
    "category": "Plans",
    "specs": [
      "Room rotation",
      "Supply ship"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Bi-weekly",
        "priceDelta": -30
      }
    ],
    "faq": [
      {
        "q": "Cancel anytime?",
        "a": "Yes — demo plan."
      }
    ],
    "rating": 4.9,
    "reviewCount": 89
  },
  {
    "id": "sh-9",
    "name": "Pet Paw Neutralizer",
    "price": 22,
    "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800",
    "tag": "Pet",
    "category": "Pet",
    "specs": [
      "Enzyme base",
      "Carpet safe"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Large bottle",
        "priceDelta": 8
      }
    ],
    "faq": [
      {
        "q": "Cats?",
        "a": "Unscented variant."
      }
    ],
    "rating": 4.8,
    "reviewCount": 503
  },
  {
    "id": "sh-10",
    "name": "Deep Clean Crew Visit",
    "price": 189,
    "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    "tag": "Crew",
    "category": "Services",
    "specs": [
      "2-person crew",
      "3 hours"
    ],
    "variants": [
      {
        "id": "v1",
        "label": "Move-out",
        "priceDelta": 90
      }
    ],
    "faq": [
      {
        "q": "Supplies?",
        "a": "We bring neu-safe kit."
      }
    ],
    "rating": 4.9,
    "reviewCount": 144
  }
];
export const categories = Array.from(new Set(products.map((p) => p.category)));
