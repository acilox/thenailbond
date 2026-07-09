// Central place for links, contact & NAP so every component + schema stays in
// sync. NAP (name/address/phone) must be byte-identical everywhere (playbook §5).
//
// ⚠️ DEMO PLACEHOLDERS — confirm/replace with Melanie before go-live:
//   - whatsappNumber: her real WhatsApp number (drives every "Book" CTA + schema
//     telephone). The digits-only `waNumber` must match.
//   - instagram handle is real (@nail_bond); igDm deep-link opens Instagram DM.
//   - hours: confirm her real by-appointment hours.
//   - Exact street address is intentionally NOT public (home studio) — shared on
//     booking. Add it here + in schema only if she wants it listed.
const whatsappNumber = '+971 50 000 0000'; // ⚠️ placeholder
const waNumber = '971500000000';           // ⚠️ placeholder — digits only, no +/spaces

export const site = {
  name: 'The Nail Bond',
  fullName: 'The Nail Bond by Mel',
  shortName: 'The Nail Bond',
  owner: 'Melanie',
  tagline: 'Luxury nails, cozy studio.',
  subtagline: 'Soft, clean, minimal nails — done with care in a home studio in Serena, Dubai.',

  // NAP — area only; exact address shared privately on booking (home studio).
  city: 'Serena',
  area: 'Serena, Dubai',
  region: 'Dubai',
  country: 'United Arab Emirates',
  countryCode: 'AE',

  // Contact / booking (WhatsApp-first, per Dubai home-services norm)
  whatsapp: whatsappNumber,
  waNumber,
  waHref: `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Hi Mel! I'd love to book an appointment at The Nail Bond 💅"
  )}`,
  phoneHref: `tel:+${waNumber}`,

  instagramHandle: 'nail_bond',
  socials: {
    instagram: 'https://instagram.com/nail_bond',
    // Instagram DM deep link (opens the DM composer to her inbox).
    igDm: 'https://ig.me/m/nail_bond',
  },

  // By-appointment hours — ⚠️ confirm with Melanie.
  hours: 'By appointment · Tue–Sun',
} as const;

// Services offered (no prices per client direction — "DM for pricing").
export const services = [
  {
    name: 'BIAB Manicure',
    tag: 'Builder gel',
    body: 'Builder Gel in a Bottle — a strengthening overlay on your natural nails for a glossy, durable, low-maintenance finish that grows out beautifully.',
    icon: '<path d="M12 3c-3 4-4.5 6.5-4.5 9a4.5 4.5 0 0 0 9 0c0-2.5-1.5-5-4.5-9z"/>',
  },
  {
    name: 'Russian Manicure',
    tag: 'Precision cuticle work',
    body: 'A meticulous dry manicure with detailed cuticle work for an ultra-clean, close-to-skin colour application that looks flawless and lasts.',
    icon: '<path d="M4 20l7-7"/><path d="M14 7l3 3"/><path d="M13 6l4-4 4 4-4 4z"/><circle cx="6.5" cy="17.5" r="1.5"/>',
  },
  {
    name: 'Gel Extensions',
    tag: 'Length & shape',
    body: 'Custom length and shape built with gel — lightweight, natural-looking and tailored to suit your hands, whether you like them subtle or statement.',
    icon: '<path d="M9 21V8c0-3 1-5 3-5s3 2 3 5v13"/><path d="M9 21h6"/>',
  },
  {
    name: 'Nail Art & Design',
    tag: 'Soft & minimal',
    body: 'Delicate, understated designs — fine lines, tiny florals, soft dots and subtle accents that quietly elevate your everyday look.',
    icon: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  },
  {
    name: 'Soak-Off & Removal',
    tag: 'Gentle & safe',
    body: 'Careful, damage-free removal of existing gel or extensions, with your natural nails cleaned up and prepped — never filed down or forced.',
    icon: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/>',
  },
];

// WhatsApp deep link with a service pre-filled into the message.
export const bookFor = (service: string) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(
    `Hi Mel! I'd love to book a ${service} at The Nail Bond 💅`
  )}`;
