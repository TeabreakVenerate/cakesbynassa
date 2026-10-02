# Cakesbynessahh: Master Handoff Document for Gemini 3.1 Pro High

> This document is the single source of truth for the complete UI refactor.
> Paste the Master Prompt (Section 7) into a fresh Gemini 3.1 Pro High session with `/goal`.
> Everything else in this document is context that the AI will read from the workspace.

---

## 1. Business Context (Non-Negotiable Facts)

| Field | Value |
|---|---|
| Brand | Cakesbynessahh |
| Tagline | "Making Every Celebration Sweeter" |
| Location | Airport Road, Benin City, Edo State, Nigeria |
| WhatsApp | +234 905 934 0229 |
| WhatsApp Link | `https://wa.me/2349059340229` |
| Ordering Model | WhatsApp-only. No cart. No checkout. Customer sees menu, taps WhatsApp, sends order. |
| Payment | Pay on delivery at the gate. No online payment. |
| Pre-order | Celebration cakes need 24h advance notice via WhatsApp |
| Same-day | Daily bakes (chops, meat pies, small pastries) available same-day |
| Photo verification | Nessa sends a WhatsApp photo of the finished cake before dispatch |

### Product Catalog

| ID | Product | Size | Serves | Price (₦) | Category | Stream |
|---|---|---|---|---|---|---|
| c1 | Red Velvet Celebration Cake | 8 x 5 in | 8-12 | 28,000 | Celebration | Pre-order |
| c2 | Deluxe Vanilla Bean Cake | 10 x 5 in | 16-20 | 42,000 | Celebration | Pre-order |
| c3 | Chocolate Fudge Tower | 12 x 6 in | 25-30 | 54,000 | Celebration | Pre-order |
| c4 | Korean Bento Lunchbox Cake | 4 in | 1-2 | 12,500 | Bento | Pre-order |
| c5 | Butter Cream Cupcakes (Box of 6) | Standard | 6 | 9,000 | Cupcakes | Same-day |
| c6 | Signature Meat Pie (Pack of 4) | Regular | 4 | 7,500 | Chops | Same-day |
| c7 | Strawberry Drizzle Cake | 8 x 5 in | 8-12 | 32,000 | Celebration | Pre-order |
| c8 | Party Platter (Mixed Pastries) | Large tray | 15-20 | 25,000 | Platters | Same-day |

### Delivery Zones

| Zone | Fee (₦) |
|---|---|
| Airport Road | 800 |
| GRA | 1,000 |
| Sapele Road | 1,200 |
| Ugbowo / UNIBEN | 1,800 |
| Ikpoba Hill | 2,200 |

---

## 2. What the Output Must Look Like

### Per-Variant Output

Each of the 8 variants is a **single continuous-scroll page** containing these sections in order:

1. **Hero** (viewport height): Brand name, tagline, one large placeholder image slot, primary CTA ("Order on WhatsApp")
2. **Menu Catalog**: All 8 products displayed in the variant's unique layout architecture
3. **Custom Cake Inquiry**: A form or interactive element for custom orders (size, flavor, inscription, date needed)
4. **Delivery Info**: Zone table with fees, "Pay on Delivery" trust signal
5. **Contact / Footer**: WhatsApp button, phone number, Airport Road address, operating hours

### Placeholder Image System

Since Cakesbynessahh doesn't have professional product photos yet, the AI must **generate placeholder images** using the `generate_image` tool and place them in the project assets folder. These images serve as realistic stand-ins until real photos arrive.

**For each product, generate one image:**
- Red Velvet Celebration Cake: Deep red layered cake with white cream cheese frosting, shell borders, on a clean surface
- Deluxe Vanilla Bean Cake: Tall white cake with vanilla buttercream, clean elegant finish, 3-tier look
- Chocolate Fudge Tower: Rich dark chocolate layered cake with ganache drip, dramatic tall proportions
- Korean Bento Lunchbox Cake: Tiny 4-inch cake in a clear bento box, pastel colored, minimalist Korean style lettering
- Butter Cream Cupcakes: 6 cupcakes in a box, swirled buttercream tops, varied pastel colors
- Signature Meat Pie: 4 golden-brown Nigerian meat pies on parchment paper, flaky crust visible
- Strawberry Drizzle Cake: White cake with fresh strawberry drizzle and strawberry decorations on top
- Party Platter: Large tray of mixed Nigerian pastries (puff puff, spring rolls, samosa, sausage rolls)

**Also generate:**
- 1 hero background image: Close-up of cake texture, shallow depth of field, warm lighting
- 1 bakery atmosphere image: Warm kitchen counter with flour, piping bags, cake tools (no people)

**Image placement**: `/public/images/products/` and `/public/images/hero/`

**Image naming**: `red-velvet.png`, `vanilla-bean.png`, `chocolate-fudge.png`, `bento-lunchbox.png`, `cupcakes-box.png`, `meat-pie.png`, `strawberry-drizzle.png`, `party-platter.png`, `hero-texture.png`, `kitchen-atmosphere.png`

When real photos arrive, the user replaces files at these exact paths. Nothing else changes.

### Picker Harness

A floating dark-glass pill bar at the bottom center of the viewport:
- 8 labeled buttons: `Warm Kitchen | Noir | 3D Showroom | CSS Depth | Benin Direct | Lookbook | Bento Grid | Dispatch Board`
- Keyboard shortcuts: keys 1-8
- Current variant label displayed
- Semi-transparent dark background with backdrop-blur
- Does not interfere with page content (fixed position, z-index above all content)
- Clicking a button swaps which variant component renders (React state swap, not page navigation)

---

## 3. Per-Variant Design Specifications

### Variant 1: "Warm Kitchen" — skill: `frontend-design`

**Visual identity**: Feels like standing in the bakery. Warm but NOT cream/terracotta.

| Token | Value |
|---|---|
| bg-primary | `#E8E0D4` (flour-dusted stone) |
| bg-dark | `#1C1C1C` (ink) |
| accent | `#4A5D3A` (olive green) |
| accent-2 | `#B8956A` (aged brass) |
| font-display | Nunito (rounded sans, Google Fonts) |
| font-body | Nunito |
| border-radius | 12px outer cards, 8px inner elements |
| hero-layout | Asymmetric: 55% image slot left, 45% text right |
| menu-layout | Vertical stack, one product per row, generous 32px gaps |
| signature | Hand-drawn SVG squiggly dividers between sections |
| nav | Minimal: logo left, "Menu" and "Order" links right, no hamburger on desktop |

**What makes it NOT look AI**: No card grid. No uniform rounded rectangles. The olive/brass palette is unusual for bakeries. Squiggly SVG dividers break the geometric rigidity.

---

### Variant 2: "Noir Patisserie" — skill: `emil-design-eng`

**Visual identity**: Dark gallery. The cake is the only color source.

| Token | Value |
|---|---|
| bg-primary | `#0E0E0E` (near-black) |
| text-primary | `#F5F2EE` (off-white) |
| accent | `#C4787A` (muted rose, used SPARINGLY: CTAs and price only) |
| font-display | Playfair Display (serif, Google Fonts) |
| font-body | Inter 13px |
| border-radius | 0px (sharp edges, no rounding) |
| hero-layout | Full-viewport, centered product placeholder, text below |
| menu-layout | Full-width alternating rows: image left/text right, then image right/text left |
| signature | Parallax scroll (2 layers). All transitions use `ease-out`. Scale from 0.95 on enter. Every button has `:active { transform: scale(0.97) }` |
| nav | Transparent fixed header, `backdrop-filter: blur(12px)` on scroll |

**Emil rules applied**: Never `transition: all`. Always specify exact properties. Never scale from 0. Press states on every interactive element. Transform-origin from trigger point for popovers.

---

### Variant 3: "3D Showroom" — skill: `design-foundations-architect`

**Visual identity**: One 3D rotating cake dominates the hero. Rest is quiet.

| Token | Value |
|---|---|
| bg-primary | `#F0EDE8` (soft warm grey) |
| text-primary | `#2C2C2C` (charcoal) |
| accent | `#D4A843` (amber) |
| font-display | Outfit (geometric sans, Google Fonts) |
| font-body | Outfit |
| hero-layout | Three.js `<canvas>` element, full viewport width, 80vh height |
| menu-layout | 2-column grid on desktop, single column on mobile, simple flat cards |
| signature | `THREE.CylinderGeometry` cake (3 stacked cylinders, different radii for tiers) with `MeshStandardMaterial` and slow auto-rotation. Mouse/touch rotates it. |
| nav | Bottom pill bar (3 items: Menu, Custom, Contact) |

**Three.js scope**: ONLY the hero. Install `three` and `@react-three/fiber` + `@react-three/drei`. The 3D cake is stylized geometry, not photorealistic. Simple directional light + ambient light. On mobile, orbit is touch-based.

---

### Variant 4: "CSS Depth" — skill: `apple-design`

**Visual identity**: Apple-style fluid depth with pure CSS. No WebGL.

| Token | Value |
|---|---|
| bg-primary | `#FAF8F5` (ivory) |
| text-primary | `#3A3A3C` (slate) |
| accent | `#D68E5E` (warm amber, terracotta-free) |
| font-display | `system-ui, -apple-system, 'Segoe UI', sans-serif` (system fonts) |
| font-body | Same system stack |
| hero-layout | Full-width with CSS `perspective: 1200px` creating depth layers |
| menu-layout | Cards with `transform: rotateY(8deg)` on hover, flip to show tasting notes |
| signature | Draggable bottom sheet for custom inquiry. Spring physics on drag. Interruptible. `setPointerCapture` for continuous tracking. Rubber-banding at boundaries. |
| nav | Large title that shrinks on scroll (iOS-style, CSS `position: sticky` + scroll observer) |

**Apple rules applied**: Respond on pointer-down. 1:1 tracking on drags. Momentum projection on release. Every animation interruptible. Reduced-motion respected via `@media (prefers-reduced-motion: reduce)`.

---

### Variant 5: "Benin Direct" — skill: `web-design-guidelines`

**Visual identity**: Stripped for speed. Built for a customer on a mid-range phone in Ugbowo.

| Token | Value |
|---|---|
| bg-primary | `#FFFFFF` (white) |
| text-primary | `#333333` |
| accent | `#1B5E20` (WhatsApp green) |
| font-display | `system-ui` only. ZERO external font loads. |
| font-body | `system-ui` |
| hero-layout | Compact: 40vh max. Brand name, tagline, huge green "Order on WhatsApp" button |
| menu-layout | Simple row list: 80px thumbnail left, name + size center, price + WhatsApp icon right |
| signature | Delivery zone calculator (dropdown: pick zone, see fee + estimated time). "Pay on Delivery" badge with padlock SVG. WhatsApp button pinned at viewport bottom, always visible. |
| nav | Sticky 48px header with phone number displayed |

**Performance rules**: No external fonts. No animations beyond `:active` states. Images lazy-loaded with `loading="lazy"`. Target: < 1 second LCP on simulated 4G.

---

### Variant 6: "Lookbook" — skill: `improve-animations`

**Visual identity**: Magazine editorial. Typography carries the design.

| Token | Value |
|---|---|
| bg-primary | `#FFFFFF` (white) |
| text-primary | `#000000` (true black) |
| accent | `#7A8FA6` (dusty blue) |
| font-display | Lora 48-72px (serif, Google Fonts) |
| font-body | Inter 14px |
| hero-layout | Split: 60% edge-to-edge image bleed left, 40% text with 120px vertical padding right |
| menu-layout | Horizontal scroll strip with snap points (`scroll-snap-type: x mandatory`) |
| signature | Scroll-triggered staggered reveals using `IntersectionObserver`. Each product fades in with 50ms sibling delay. One orchestrated entrance sequence, not scattered effects on every element. |
| nav | Horizontal centered text links, no logo in nav (logo only in hero section) |

**Animation rules**: Fade-and-slide-up on FIRST APPEARANCE ONLY (not every scroll). `prefers-reduced-motion` disables all motion. No hover transitions on cards (that's the AI default).

---

### Variant 7: "Bento Grid" — skill: `generative_ui`

**Visual identity**: Instagram-native mosaic. Visual-first.

| Token | Value |
|---|---|
| bg-primary | `#F4F4F5` (zinc-100) |
| text-primary | `#18181B` (zinc-900) |
| accent | `#F0625D` (coral, price tags only) |
| font-display | Inter Bold |
| font-body | Inter Regular |
| hero-layout | Full-width bento grid starting immediately (no separate hero section, the grid IS the hero) |
| menu-layout | Asymmetric CSS Grid: `grid-template-columns` varies. Mix of 1x1, 2x1, 1x2 tiles. First tile spans 2 columns. |
| signature | Each tile is a placeholder image with frosted-glass overlay at bottom (`backdrop-filter: blur(8px)`, semi-transparent white) showing product name and price. Tap expands to detail sheet. |
| nav | Horizontal scroll category filter chips at top, sticky |

**Grid template** (desktop):
```css
grid-template-columns: repeat(3, 1fr);
/* tile 1: span 2 cols, 1 row */
/* tile 2: span 1 col, 2 rows */
/* tiles 3-8: 1x1 */
```
Mobile: `repeat(2, 1fr)`, all tiles 1x1.

---

### Variant 8: "Dispatch Board" — skill: `canvas-design`

**Visual identity**: Operational bakery board. Two-stream clarity.

| Token | Value |
|---|---|
| bg-primary | `#F9F7F4` (warm off-white) |
| text-primary | `#1E293B` (dark slate) |
| accent-preorder | `#F59E0B` (amber) |
| accent-dispatch | `#22C55E` (green) |
| font-display | Inter Semi-Bold |
| font-mono | JetBrains Mono (for delivery times, order codes) |
| hero-layout | Compact 30vh: brand name, "What are you looking for today?" with two large buttons: "Celebration Cakes" / "Quick Bites" |
| menu-layout | Split-screen on desktop (50/50). Left: "Pre-Order (24h)" amber-headed column. Right: "Ready Today" green-headed column. Stacks vertically on mobile. |
| signature | Green pulsing dot indicator next to same-day items. Delivery zone dropdown with fees. Each product row has inline "WhatsApp Order" button. |
| nav | Toggle tabs at top: "Full Menu" | "Order Now" |

---

## 4. Quality Gates (Pass/Fail Judging Criteria)

The AI must self-evaluate against these criteria before declaring any variant complete. Each criterion is binary pass/fail.

### Visual Quality Gates

| # | Criterion | Pass | Fail |
|---|---|---|---|
| V1 | **Palette divergence**: No two variants share more than 1 color token | Each variant has a visually distinct identity | Two variants use the same background + accent combo |
| V2 | **No cream/terracotta default**: Zero instances of `#F4F1EA`, `#D97757`, `bg-pink-*`, `bg-rose-*`, `bg-amber-50` | Clean palette | Any of those hex values or Tailwind classes present |
| V3 | **Layout divergence**: Each variant's menu section uses a structurally different DOM layout | 8 different layout architectures (stack, grid, scroll strip, bento, split, rows, etc.) | Two variants both use 3-column card grids |
| V4 | **Typography divergence**: No two variants use the same display typeface | 8 different font choices | Repeated typefaces |
| V5 | **Placeholder images render**: All product image slots show a generated placeholder image or a CSS gradient skeleton | No broken image icons anywhere | Any `<img>` showing the broken image browser icon |
| V6 | **Mobile responsive**: Every variant renders correctly at 375px viewport width | Content readable, no horizontal overflow | Text cut off, elements overlapping, horizontal scroll |
| V7 | **Accessible contrast**: Text meets WCAG AA contrast ratio (4.5:1 body, 3:1 large text) | All text readable | Low-contrast text on backgrounds |

### Copy Quality Gates

| # | Criterion | Pass | Fail |
|---|---|---|---|
| C1 | **Zero em-dashes** in any rendered text | Clean punctuation | Any `—` or `–` character |
| C2 | **Zero AI marketing words**: "artisan", "handcrafted", "curated", "bespoke", "award-winning", "elevate", "reimagine", "seamless", "unlock" | Grounded language | Any of those words present |
| C3 | **Zero not-X-but-Y constructions** | Direct statements | "Not just a cake, but an experience" type phrasing |
| C4 | **Zero forced triads** | Natural groupings | "Quality. Passion. Taste." type constructions |
| C5 | **Naira pricing exact** | All 8 products show correct ₦ prices from the catalog | Missing prices or wrong amounts |
| C6 | **Real location references** | Airport Road, Benin City, specific delivery zones mentioned | Generic "our location" or no address |
| C7 | **WhatsApp is the CTA** | Primary action buttons link to `https://wa.me/2349059340229` | Generic "Order Now" with no WhatsApp integration |

### Technical Quality Gates

| # | Criterion | Pass | Fail |
|---|---|---|---|
| T1 | **Zero console errors** | Clean console on `npm run dev` | Any JS errors, missing module warnings, or failed asset loads |
| T2 | **Zero `transition: all`** in any CSS or inline styles | Specific property transitions | `transition: all` anywhere |
| T3 | **Press states on all interactive elements** | Every button/link has `:active` transform | Static buttons with no feedback |
| T4 | **Reduced motion respected** | `@media (prefers-reduced-motion: reduce)` disables animations | Animations ignore user preference |
| T5 | **Three.js scoped to Variant 3 only** | Three.js `<canvas>` renders in V3 hero, nowhere else | Three.js leaking into other variants or crashing |
| T6 | **Picker harness functional** | All 8 buttons swap variants. Keys 1-8 work. Current variant highlighted. | Broken switching, missing variants, dead keyboard shortcuts |
| T7 | **Smooth scroll anchoring** | Nav links scroll to correct sections within the variant | Clicking "Menu" navigates away or does nothing |
| T8 | **Font loading** | All Google Fonts use `display=swap` in the import URL | Flash of invisible text (FOIT) |

### Divergence Test (The Critical Gate)

**Process**: Open the picker. Switch through all 8 variants rapidly (keys 1-2-3-4-5-6-7-8). At each stop, take a mental snapshot. If any two variants could be confused for each other by swapping colors, the test FAILS.

**What to compare**:
- Hero section: Is the layout geometry different? (split vs centered vs canvas vs compact vs grid)
- Menu section: Is the DOM structure different? (stack vs grid vs scroll vs bento vs split vs rows)
- Navigation: Is the nav pattern different? (top bar vs pill bar vs sticky header vs tabs vs centered links)
- Typography: Does it feel like a different brand? (serif vs sans vs system vs mono accents)
- Overall density: Is the information density different? (spacious vs compact vs editorial vs operational)

If YES to all five for every pair of variants, the divergence test passes.

---

## 5. Production Definition of Done

After the user picks a winner from the 8 variants, the production build must meet these additional criteria:

| # | Criterion | Definition |
|---|---|---|
| P1 | **4-page Next.js routing** | `/` (Home), `/menu` (Catalog), `/custom` (Custom order form), `/contact` (About + delivery) |
| P2 | **SEO metadata** | Each page has unique `<title>`, `<meta description>`, Open Graph tags, and a canonical URL |
| P3 | **Favicon + manifest** | Custom favicon, `site.webmanifest` with brand colors, apple-touch-icon |
| P4 | **Performance** | Lighthouse Performance score > 90 on desktop, > 75 on mobile |
| P5 | **Accessibility** | Lighthouse Accessibility score > 90. All images have descriptive alt text. Keyboard navigation works. |
| P6 | **Image optimization** | All images served as WebP via Next.js `<Image>` component with responsive `sizes` |
| P7 | **WhatsApp deep links** | Every "Order" button opens WhatsApp with a pre-filled message: "Hi, I'd like to order [Product Name] (₦[Price])" |
| P8 | **Vercel-ready** | `vercel.json` configured. `npm run build` succeeds with zero errors. Ready to deploy. |
| P9 | **Real photo swap path** | Clear README documenting exactly which files to replace with real photos and at what dimensions |

---

## 6. Judging Process (How the AI Should Self-Evaluate)

After building all 8 variants, the AI must run this evaluation sequence:

### Step 1: Screenshot Review
For each variant, use the browser tool to navigate to `localhost:3000`, switch to that variant, and take a screenshot. Review the screenshot visually. Ask: "Does this look like a real bakery website or an AI-generated template?"

### Step 2: Copy Audit
Run a text search across all variant files for the forbidden words list:
```
artisan, handcrafted, curated, bespoke, award-winning, elevate, reimagine, 
seamless, unlock, not just, not only, not merely, —, –
```
Any hit = fail. Fix before proceeding.

### Step 3: Divergence Matrix
Create an 8x8 matrix. For each pair of variants, score structural similarity from 0 (completely different) to 5 (identical). Any pair scoring > 2 needs one of them redesigned.

### Step 4: Mobile Viewport Test
For each variant, resize the browser to 375px width. Every section must be usable. No horizontal scroll. No text truncation. No overlapping elements.

### Step 5: Interaction Test
For each variant:
- Click every nav link (must smooth-scroll to correct section)
- Click every WhatsApp button (must open `wa.me` link)
- Test the custom cake form/interaction
- Verify `:active` press states on all buttons
- Verify Three.js renders in Variant 3

### Step 6: Final Report
Write a `QA_REPORT.md` in the project root with pass/fail for every gate in Section 4, screenshots of each variant, and a list of any remaining issues.

---

## 7. Master Prompts

### Prompt A: The /goal Master Prompt

Copy this entire prompt into a fresh Gemini 3.1 Pro High session and prefix with `/goal`:

---

```
/goal

# MISSION: Cakesbynessahh Complete UI Refactor

You are building 8 radically divergent prototype variants for a bakery storefront website called Cakesbynessahh, located on Airport Road, Benin City, Edo State, Nigeria.

## MANDATORY FIRST STEPS

1. Read the master handoff document at: `C:\Users\DELL\.gemini\antigravity\brain\4c939ab4-d26a-4cb3-9ccd-87094cd24385\MASTER_HANDOFF.md`
   This contains ALL business data, product catalog, delivery zones, design specs per variant, quality gates, and judging criteria. Follow it exactly.

2. Read the existing research at: `c:\Users\DELL\Documents\Cakesbynessa\AWARD_WINNING_BENCHMARKS.md`

3. Read these design skills before building ANY variant:
   - `C:\Users\DELL\.gemini\config\skills\frontend-design\SKILL.md`
   - `C:\Users\DELL\.gemini\config\skills\emil-design-eng\SKILL.md`
   - `C:\Users\DELL\.gemini\config\skills\design-foundations-architect\SKILL.md`
   - `C:\Users\DELL\.gemini\config\skills\apple-design\SKILL.md`
   - `C:\Users\DELL\.gemini\config\skills\humanizer\SKILL.md`
   - `C:\Users\DELL\.gemini\config\skills\improve-animations\SKILL.md`
   - `C:\Users\DELL\.gemini\config\plugins\modern-web-guidance-plugin\skills\modern-web-guidance\SKILL.md`

4. Read the humanizer skill FULLY: `C:\Users\DELL\.gemini\config\skills\humanizer\SKILL.md` — ALL copy must pass through this. Zero em-dashes. Zero AI marketing words. Zero not-X-but-Y. Zero forced triads.

## WORKSPACE

All code goes in: `c:\Users\DELL\Documents\Cakesbynessa`
This workspace already has node_modules and some old files. You are doing a COMPLETE REFACTOR. You may delete old src/ files and replace them. Keep AWARD_WINNING_BENCHMARKS.md and RESEARCH_BENCHMARKS.md as references.

## STACK

- Next.js 15 (App Router, TypeScript, Tailwind CSS)
- Three.js + @react-three/fiber + @react-three/drei (for Variant 3 ONLY)
- No other UI libraries. No shadcn. No Material UI. No Chakra.

## EXECUTION PHASES

### Phase 1: Scaffold
- Initialize Next.js project in the workspace (or convert existing if easier)
- Set up Tailwind CSS
- Create the data files (products.ts, copy.ts, delivery-zones.ts)
- Create the picker harness component

### Phase 2: Generate Placeholder Images
- Use the `generate_image` tool to create realistic placeholder product photos for all 8 products
- Also generate 1 hero texture image and 1 kitchen atmosphere image
- Save all images to /public/images/products/ and /public/images/hero/
- Name them exactly as specified in the handoff document

### Phase 3: Build All 8 Variants
Build them one at a time. For each variant:
1. Read the assigned design skill from the skills directory
2. Follow the exact design tokens (colors, fonts, layout) from the handoff document
3. Build the variant as a React component with 4 sections: Hero, Menu, Custom Inquiry, Contact
4. Apply humanizer rules to ALL visible copy
5. Self-check against the quality gates before moving to the next variant

The 8 variants are:
1. Warm Kitchen (frontend-design skill)
2. Noir Patisserie (emil-design-eng skill)
3. 3D Showroom (design-foundations-architect skill, Three.js hero)
4. CSS Depth (apple-design skill, CSS 3D transforms)
5. Benin Direct (web-design-guidelines skill, performance-first)
6. Lookbook (improve-animations skill, editorial)
7. Bento Grid (generative_ui skill, mosaic)
8. Dispatch Board (canvas-design skill, operational)

### Phase 4: Humanizer Pass
After all 8 are built, run a full copy audit. Search every variant for:
- Em-dashes (— or –)
- "artisan", "handcrafted", "curated", "bespoke", "award-winning", "elevate", "reimagine", "seamless", "unlock"
- Not-X-but-Y constructions
- Forced triads (X. Y. Z. one-word sentences)
- Bold labels on every heading
Fix every instance found.

### Phase 5: Wire Picker + Test
- Wire the floating dark-glass picker harness
- Test all 8 variants switch correctly (buttons + keyboard 1-8)
- Test smooth scroll anchoring on nav links
- Test WhatsApp links open correctly
- Verify Three.js renders in Variant 3 and nowhere else
- Verify zero console errors

### Phase 6: Self-Evaluation
Run the full judging process from the handoff document (Section 6):
1. Screenshot each variant
2. Copy audit (search for forbidden words)
3. Divergence test (no two variants look alike)
4. Mobile viewport test (375px)
5. Interaction test (nav, CTAs, forms, press states)
6. Write QA_REPORT.md with results

## TERMINATION CONTRACT
You are DONE when:
- All 8 variants render without errors
- The picker harness switches between all 8
- All quality gates in the handoff document pass
- QA_REPORT.md is written with all pass results
- `npm run dev` serves the app at localhost:3000

## CRITICAL RULES
- Do NOT use cream/terracotta/velvet-red palettes (that's the AI default, the client explicitly rejected it)
- Do NOT use stock Unsplash URLs. Generate images or use CSS gradient placeholders.
- Do NOT use "transition: all" anywhere
- Do NOT skip the humanizer pass. The client has rejected AI-sounding copy multiple times.
- Each variant MUST be structurally different in layout, not just color-swapped
- WhatsApp is the ONLY ordering channel. No cart. No checkout.
```

---

### Prompt B: Research Swarm (Optional, run before Prompt A)

If you want to run fresh research first, paste this in a separate session:

---

```
/goal

# Research Swarm: Award-Winning Bakery Website Analysis

Navigate to these 12 websites using browser tools and extract hard CSS/layout data for each. Do NOT use vague adjectives. Extract exact values.

Sites to research:
1. cedricgrolet.com
2. peggyporschenacademy.com  
3. milkbarstore.com
4. dominiqueansel.com
5. laduree.com
6. cakeisland.ng
7. yefepere.com
8. hansandrene.com
9. tartine.com
10. pierreherme.com
11. thebutterend.com
12. ladureeus.com

For EACH site, extract:
- Hero section: background-color hex, height (vh/px), layout (flex/grid), padding values
- Typography: font-family stack (exact), display size (px), body size (px), line-height, letter-spacing
- Product cards: display mode (grid/flex), grid-template-columns value, border-radius, box-shadow, gap
- Color palette: all hex values used (background, text, accent, CTA)
- Navigation: type (sticky/fixed/static), height, background, items
- CTA buttons: background-color, border-radius, padding, font-size, text content
- Mobile layout: breakpoint, column changes, font size changes
- Trust signals: what trust/social proof elements exist and where
- Image handling: aspect ratio, object-fit value, lazy loading

Save results to: `c:\Users\DELL\Documents\Cakesbynessa\FRESH_RESEARCH.md`
Also save structured data to: `c:\Users\DELL\Documents\Cakesbynessa\research_tokens.json`

DONE when all 12 sites are analyzed with hard data (no adjectives) and both files are saved.
```

---

## 8. File Structure (Expected Final State)

```
c:\Users\DELL\Documents\Cakesbynessa\
├── public/
│   └── images/
│       ├── products/
│       │   ├── red-velvet.png          (AI-generated placeholder)
│       │   ├── vanilla-bean.png
│       │   ├── chocolate-fudge.png
│       │   ├── bento-lunchbox.png
│       │   ├── cupcakes-box.png
│       │   ├── meat-pie.png
│       │   ├── strawberry-drizzle.png
│       │   └── party-platter.png
│       └── hero/
│           ├── hero-texture.png
│           └── kitchen-atmosphere.png
├── src/
│   ├── app/
│   │   ├── layout.tsx               (root layout with font loading)
│   │   ├── page.tsx                 (picker harness, renders active variant)
│   │   └── globals.css              (Tailwind directives + base resets)
│   ├── components/
│   │   ├── picker.tsx               (floating dark-glass variant switcher)
│   │   └── whatsapp-button.tsx      (reusable WhatsApp CTA)
│   ├── data/
│   │   ├── products.ts             (product catalog with types)
│   │   ├── copy.ts                 (humanized copy per variant)
│   │   └── delivery-zones.ts      (zone names + fees)
│   └── variants/
│       ├── warm-kitchen.tsx
│       ├── noir-patisserie.tsx
│       ├── three-d-showroom.tsx
│       ├── css-depth.tsx
│       ├── benin-direct.tsx
│       ├── lookbook.tsx
│       ├── bento-grid.tsx
│       └── dispatch-board.tsx
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── QA_REPORT.md                    (written by AI after self-evaluation)
├── AWARD_WINNING_BENCHMARKS.md     (existing research, keep)
├── RESEARCH_BENCHMARKS.md          (existing research, keep)
├── MASTER_HANDOFF.md               (this document, copied here)
└── README.md
```

---

## 9. Quick Reference Card

For pasting into any follow-up prompt:

```
Brand: Cakesbynessahh
Location: Airport Road, Benin City, Edo State
WhatsApp: https://wa.me/2349059340229
Phone: +234 905 934 0229
Stack: Next.js 15 + Tailwind + Three.js (V3 only)
Workspace: c:\Users\DELL\Documents\Cakesbynessa
Variants: 8 (Warm Kitchen, Noir, 3D Showroom, CSS Depth, Benin Direct, Lookbook, Bento Grid, Dispatch Board)
Kill: cream/terracotta, em-dashes, "artisan"/"handcrafted", SaaS card grids, transition:all
```
