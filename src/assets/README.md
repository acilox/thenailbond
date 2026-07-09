# Image assets — ⚠️ PLACEHOLDERS TO SWAP BEFORE GO-LIVE

Every image in this folder is an **AI-generated placeholder** in the brand's
warm nude/blush palette, used to build the layout. **Replace each with
Melanie's own nail photography before the site goes live** — the whole appeal of a
nail site is her real work.

To swap: drop the new photo in with the **same filename** (or update the import in
the component). Keep them reasonably sized (≈1000px on the long edge is plenty —
Astro's `<Image>` generates optimized WebP/AVIF at build time).

| File | Used in | Suggested replacement |
|---|---|---|
| `hero-nails.jpg` | `Hero.astro` (LCP image, main tile) | Her best signature soft/nude set, portrait crop (4:5) |
| `hero-angle-2.jpg` | `Hero.astro` (macro accent tile) | A glossy close-up / macro detail (square) |
| `hero-angle-3.jpg` | `Hero.astro` (lifestyle accent tile) | A hand-at-rest lifestyle angle (4:3) |
| `studio.jpg` | `About.astro` | A real photo of Melanie and/or her cozy studio (4:5) |
| `nails-1.jpg` … `nails-6.jpg` | `Gallery.astro` | 6+ of her real nail sets (any orientation — masonry adapts) |

Add more gallery tiles by importing extra images in `Gallery.astro` and pushing
them into the `shots` array.

Other placeholders to confirm (not images):
- **WhatsApp number** in `src/data/site.ts` (`whatsappNumber` + `waNumber`).
- **Hours** in `src/data/site.ts`.
- **Testimonials** in `src/components/Testimonials.astro` (currently representative,
  not real reviews).
