# Rexolution Vogue  Website Plan
> *Evolve Your Style...*

---

## 1. Brand Identity Analysis

### What the Logo Says
The logo is a cross-compass shape with four directional arrows and an "R" lettermark at the center. The construction is bold and graffiti-influenced  structured chaos. It signals **direction, movement, and revolution**. The energy is not quiet luxury  it is **street luxury**. The closest reference points are early Off-White and Chrome Hearts: brands that are both raw and premium at the same time.

### What the Photos Say
The editorial black-and-white denim shoot is composed like a magazine spread  three angles of the same look, typeset with the brand name at the top like a real Vogue cover. The red tracksuit photo is bold, confident, and intentional. The shopping bag is already black with gold/yellow branding. The founder is already thinking and moving like a brand. The website just has to match what already exists.

### Brand DNA
**Black. Gold. Editorial. Unapologetic.**

---

## 2. Design System

### 2.1 Color Palette

| Role | Color Name | Hex |
|---|---|---|
| Background (primary) | Deep black | `#080808` |
| Surface (cards, sections) | Rich dark | `#111111` |
| Brand accent | Logo gold | `#D4A017` |
| Hover / highlight | Pure gold | `#F5C518` |
| Text primary | Off-white | `#F0EDE8` |
| Text secondary | Warm gray | `#7A7570` |

**Why dark theme:** The shopping bag is black with gold text. The editorial shoot is high-contrast. A white or light background would kill the brand energy entirely. Dark is the only correct choice here.

---

### 2.2 Typography

Two fonts. No more than two.

| Role | Font | Source |
|---|---|---|
| Display / Brand name / Headlines | Cormorant Garamond Bold | Google Fonts |
| Body / Navigation / UI text | Space Grotesk | Google Fonts |

**Why Cormorant Garamond:** It is editorial, magazine-weight, and carries the luxury serif authority that matches the Vogue-style shoot. It makes the brand name feel like it belongs on a billboard.

**Why Space Grotesk:** It is modern, geometric, and has a slight edge to it  it mirrors the structured boldness of the logo without competing with the display font.

Both fonts are free. Both load via Google Fonts link in the QwikCity root layout.

---

### 2.3 Tailwind v4 Theme (CSS-based)

Tailwind v4 removes `tailwind.config.ts` entirely. All brand tokens are defined directly in your global CSS file using the `@theme` directive. Tailwind reads this block and auto-generates all utility classes from it.

```css
/* src/global.css */
@import "tailwindcss";

@theme {
  --color-brand-black:      #080808;
  --color-brand-surface:    #111111;
  --color-brand-gold:       #D4A017;
  --color-brand-gold-light: #F5C518;
  --color-brand-text:       #F0EDE8;
  --color-brand-muted:      #7A7570;

  --font-display: "Cormorant Garamond", serif;
  --font-body:    "Space Grotesk", sans-serif;

  --tracking-brand:      0.2em;
  --tracking-brand-wide: 0.35em;
}
```

These tokens become utility classes automatically  no extra setup:

| Token | Utility class |
|---|---|
| `--color-brand-black` | `bg-brand-black`, `text-brand-black` |
| `--color-brand-gold` | `bg-brand-gold`, `text-brand-gold`, `border-brand-gold` |
| `--font-display` | `font-display` |
| `--font-body` | `font-body` |
| `--tracking-brand` | `tracking-brand` |

---

### 2.4 Visual Language Rules

These rules must be followed across every page and component to maintain consistency:

- **Whitespace is not empty space  it is breathing room.** Luxury is never tight or crowded. Sections need generous padding.
- **Gold is used sparingly.** It is an accent, not a fill color. It should appear on interactive elements, hover states, and key text only. Overusing it kills the premium feel.
- **No drop shadows.** Borders in gold or subtle opacity instead.
- **Animations are subtle.** Fade-in on scroll. No bouncing, no sliding explosions, no flashy transitions. Quiet confidence.
- **Product photos are untouched.** No filters applied at the CSS level. The photography already has the right tone.
- **One font size hierarchy.** Display → Heading → Subheading → Body → Caption. No random font sizes outside this scale.

---

## 3. Site Structure

### Routes (QwikCity file-based routing)

```
src/
└── routes/
    ├── index.tsx          → / (Hero / Landing)
    ├── shop/
    │   └── index.tsx      → /shop (Product catalog)
    ├── about/
    │   └── index.tsx      → /about (Brand story)
    └── contact/
        └── index.tsx      → /contact (Contact & socials)
```

---

## 4. Page-by-Page Breakdown

---

### 4.1 Hero  `/`

**Purpose:** First impression. Establish the brand immediately. Nothing else.

**Layout:**
- Full viewport height (`h-screen`)
- Background: `#080808` with a very subtle grain/noise texture overlay (CSS or SVG noise filter  common luxury treatment)
- Logo centered, displayed large  fades in on page load
- Brand name directly below: `REXOLUTION VOGUE` in Cormorant Garamond Bold, wide letter-spacing, gold
- Tagline below that: `Evolve Your Style...` in Space Grotesk, muted color, smaller size
- One CTA button: `EXPLORE THE COLLECTION`  transparent fill, gold border, gold text; on hover: background fills to gold, text turns black
- No hero image competing with the logo. The **logo is the hero.**

**Interactions:**
- Logo fades in at 0.8s on mount
- Brand name slides up subtly at 1.0s
- Tagline and CTA appear at 1.2s
- Use Qwik's `useVisibleTask$` for entrance animation triggers

**Notes:**
- A very faint background noise texture adds depth without adding clutter
- No navbar visible on initial load  it appears after scrolling past the hero (or on menu trigger)

---

### 4.2 Shop / Products  `/shop`

**Purpose:** Display the collection. Allow people to see items and place orders.

**Layout:**
- Section heading: `THE COLLECTION`  Cormorant, centered, large, tracked wide
- Thin gold horizontal rule beneath the heading
- Product grid: 2 columns on mobile, 3 columns on desktop
- Generous gap between cards (`gap-8` or more)

**Product Card:**
- Background: `#111111`
- Product photo fills the top portion of the card (no cropping  aspect ratio preserved)
- Item name in Cormorant, off-white
- Price in Space Grotesk, gold
- CTA at the bottom: `ORDER VIA WHATSAPP`  links to `https://wa.me/[number]?text=I'm interested in [item name]`
- Hover state: card border becomes a thin gold line, item name gets a gold underline

**No "Add to Cart"** for now. There is no backend yet. WhatsApp ordering is honest, functional, and common for brands at this stage in West Africa. It is not a limitation  it is a feature. Many premium local brands operate exactly this way.

**Data source:** Products will be defined as a static TypeScript array in `src/data/products.ts`. Easy to migrate to a real database (Supabase, PocketBase, etc.) later without touching the UI.

```ts
// src/data/products.ts (example structure)
export const products = [
  {
    id: '001',
    name: 'RV Denim Set',
    price: '₦XX,000',
    image: '/images/denim-set.jpg',
    whatsapp: 'https://wa.me/234XXXXXXXXXX?text=I want the RV Denim Set',
  },
  // ...
]
```

---

### 4.3 About the Brand  `/about`

**Purpose:** Tell the story. Build emotional connection. Sell identity, not just fabric.

**Layout:**
- Two-column layout on desktop (text left, photo right)
  - On mobile: photo stacks on top, text beneath
- Right column: the black-and-white editorial denim shoot  perfect for this section
- Left column content:

  **Headline:** `THE REXOLUTION`  Cormorant, very large
  
  **Body text (placeholder  to be written by founder or collaboratively):**
  > Rexolution Vogue was built on a simple conviction: that style is not imitation  it is evolution. Started from the ground up, every piece is a statement. Every fit is a direction. This is not just clothing. This is a movement.

  **Pull quote (centered, full-width, between sections):**
  > *"Evolve Your Style..."*
  >  displayed large, Cormorant italic, gold text, on a near-black background strip

**Notes:**
- The pull quote acts as a visual break between the intro and any extended brand text
- Keep text short and punchy. Luxury brands do not write essays  they write manifestos.
- A subtle horizontal scroll or parallax on the photo on desktop adds depth (optional, keep it restrained)

---

### 4.4 Contact / Socials  `/contact`

**Purpose:** Give people a way to reach the brand. Clean and minimal.

**Layout:**
- Dark background section, almost footer-like in weight
- Section heading: `GET IN TOUCH`  Cormorant, centered
- Contact details extracted from the shopping bag photography:

  | Channel | Handle / Number |
  |---|---|
  | Phone / WhatsApp | `00137121451` |
  | TikTok | `@rexolutionvogue1` |
  | Instagram | `@rexolutionvogue1` |
  | Facebook | `Rexolutionvogue1` |

- Social icon row with gold hover state (use a library like `lucide-react` or inline SVGs for TikTok/Instagram/Facebook)
- Optional contact form: Name, Message, Send button  handled via `mailto:` or [Formspree](https://formspree.io) (free tier, no backend needed)

**WhatsApp link:** Also include a direct WhatsApp button here for general inquiries  same as the shop cards.

---

## 5. Global Components

### 5.1 Navbar

- **Logo:** Left-aligned, small version of the RV logo mark
- **Links:** Right-aligned  `SHOP | ABOUT | CONTACT` in Space Grotesk, small caps, gold on hover
- **Behavior on scroll:** Background transitions from transparent to `rgba(8,8,8,0.85)` with `backdrop-blur` (glassmorphism on dark)
- **Mobile:** Hamburger icon opens a full-screen overlay menu
  - Overlay: black background, links centered and large, Cormorant display font
  - Subtle fade-in animation on open

---

### 5.2 Footer

- Brand name centered: `REXOLUTION VOGUE`  Cormorant, tracked, small
- Tagline: `Evolve Your Style...`  muted
- Social icons row
- Copyright line: `© 2025 Rexolution Vogue. All rights reserved.`
- One line. Nothing more. Clean.

---

## 6. QwikCity Stack Notes

### Why QwikCity fits this project
- **Resumability** means the site loads instantly  critical for first impressions on a fashion brand
- **File-based routing** maps cleanly to the 4-page structure
- **Server-side rendering out of the box**  good for SEO if the brand eventually wants to be discoverable
- **No unnecessary JavaScript sent to the client**  the product catalog is static data, Qwik handles this efficiently

### Key implementation notes
- Fonts loaded via `<Link>` in `src/root.tsx` from Google Fonts
- Images handled with `<Image>` component from `@builder.io/qwik-image` for automatic optimization
- Product data lives in `src/data/products.ts`  pure TypeScript, no database needed at launch
- WhatsApp links use the `wa.me` deep link format
- Contact form via Formspree  add the endpoint URL to an environment variable

---

## 7. Content Checklist (Before Building)

These are the things that need to exist before the site goes live:

- [ ] Hi-res logo on **transparent background** (PNG  the uploaded version works)
- [ ] Product photos  at least **4 to 6 individual items** with clean backgrounds or studio shots
- [ ] Confirmed prices for each product
- [ ] WhatsApp number formatted for `wa.me` link (e.g. `2348012345678`  no `+`, no spaces)
- [ ] Short brand story paragraph  3 to 5 sentences from the founder
- [ ] Final social handles confirmed (currently pulled from the bag: `@rexolutionvogue1`)
- [ ] Domain name decision  e.g. `rexolutionvogue.com` or `.ng`

---

## 8. Launch Phases

### Phase 1  MVP (What We Build Now)
- Hero page with logo and CTA
- Static product catalog with WhatsApp order links
- About section with editorial photo and brand text
- Contact page with socials
- Deployed on **Vercel** (free, instant, supports QwikCity perfectly)

### Phase 2  Growth (Later)
- Real product management (Supabase or PocketBase backend)
- Inventory tracking
- Order confirmation flow
- Email capture / waitlist for new drops
- Blog / Lookbook section for editorial content

### Phase 3  Scale (When the brand is ready)
- Full e-commerce with payments (Paystack for Nigeria)
- Customer accounts
- Size guides and product variants
- Analytics dashboard

---

## 9. Summary

| Decision | Choice |
|---|---|
| Theme | Dark |
| Primary background | `#080808` |
| Accent color | Gold `#D4A017` |
| Display font | Cormorant Garamond Bold |
| Body font | Space Grotesk |
| Framework | QwikCity |
| Styling | Tailwind CSS (custom config) |
| Ordering | WhatsApp deep links |
| Deployment | Vercel |
| Backend (Phase 1) | None  static data |

The brand is already built. The identity is real. The photography is strong. This website is just giving it a home that matches the vision.

---

*Plan authored for Rexolution Vogue  March 2026*
