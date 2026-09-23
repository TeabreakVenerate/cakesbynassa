# Empirical Competitive Benchmarks: Nigerian Bakery & DTC Market

> **Methodology**: Live browser empirical DOM and CSS inspection conducted on `yefepere.com` and Benin City operations including **Cake Island by Greg's Confectioneries** (48 Upper Adesuwa, GRA), **CC's Cakes & Crafts**, **Royalduchess**, and **Shugaddicts**.
> **Objective**: Extract hard, verifiable CSS tokens, DOM layout metrics, dimension formatting formulas, and local trust architecture for "Cakesbynessahh" (Airport Road, Benin City).

---

## 1. Hard CSS Tokens Extracted via Live Inspection

### Empirical CSS Parameters from `yefepere.com`
- **Font Stack**:
  ```css
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  ```
  Preloaded font files: `Inter-Regular.woff2`, `Inter-Medium.woff2`, `Inter-SemiBold.woff2`, `Inter-Bold.woff2`.
- **Primary Color Variables**:
  ```css
  --primaryColor: #9C1D36;       /* Deep Crimson / Wine Red */
  --secondaryColor1: #A0A0A0;    /* Muted Silver-Gray */
  --bgColor2: #212529;           /* Charcoal Tooltip/Icon Base */
  --headerColor: rgba(18, 18, 18, 0.88); /* Dark Glassmorphic Header */
  --white: #FFFFFF;
  ```
- **Header Geometry**:
  ```css
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: var(--headerColor);
  z-index: 30;
  padding: 1rem 4rem; /* Desktop */
  /* Mobile @media (max-width: 768px): padding: 1rem; */
  ```
- **Menu Grid Architecture (Hardcoded Values)**:
  ```css
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 2rem 0;
  /* Tablet @media (max-width: 1024px): grid-template-columns: repeat(2, 1fr); gap: 24px; */
  /* Mobile @media (max-width: 768px): grid-template-columns: 1fr; gap: 16px; */
  ```
- **Button Component Spec**:
  ```css
  height: 45px;
  padding: 0 20px;
  border-radius: 25px; /* Pill radius */
  background-color: var(--primaryColor);
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  transition: 0.3s ease;
  /* Active state */
  transform: scale(0.97);
  ```
- **Hero Spacing & Geometry**:
  ```css
  margin-top: 5rem; /* Offsets fixed header */
  padding: 1rem 4rem; /* Desktop */
  /* Mobile: margin-top: 3rem; padding: 1rem; */
  ```

---

## 2. Hard Data: Cake Island (48 Upper Adesuwa, GRA, Benin City)

- **Physical Node**: 48 Upper Adesuwa Road, GRA, Benin City, Edo State.
- **Operating Numbers**: `+234 805 273 7164` / `+234 802 344 6173`.
- **Pricing Reality in Benin City**:
  - Small celebration cakes (6 to 8-inch): ₦14,000 to ₦28,000.
  - Double-tier party cakes (10-inch base + 6-inch tier): ₦45,000 to ₦75,000.
  - Bespoke wedding tiers: ₦120,000 to ₦250,000+.
  - Small chops trays: ₦6,500 to ₦18,000.

---

## 3. Empirical Copywriting Formulas & Trust Signals

### Yefepere Dimension Specification Formula
Instead of generic adjectives ("large", "scrumptious"), live stores explicitly specify mechanical dimensions:
```
[Size Code] + [Exact Dimensions in Inches] + [Layer Texture] + [Frosting Finish]
Example: "Size 8 (8 x 5 inches), Fluffy Sponge, Silky Vanilla Buttercream, Serves 8-12"
Example: "Size 10 (10 x 5 inches), Moist Chocolate Fudge, Belgian Ganache, Serves 16-20"
```

### Local Trust Signals
1. **Pay on Delivery with Initial Show of Commitment**:
   Customers pay via bank transfer after inspecting physical cake photo or on arrival at their gate in Benin City.
2. **Real-Time WhatsApp Photo Confirmation**:
   Baker takes a photo of the completed cake with the piped inscription in the kitchen on Airport Road and sends it to the customer via WhatsApp before dispatch.
3. **Local Route Anchors**:
   Explicit neighborhood names build instant trust: *"Baked on Airport Road, delivered to GRA, Boundary Road, Ugbowo, and Sapele Road in under 2 hours."*

---

## 4. Multi-Page Sitemap Architectures Discovered

```
/ (Home / Hero with Live Oven Batch Status)
├── /menu (3-Column CSS Grid with Exact Dimensions & Naira Prices)
├── /custom-studio (Size / Sponge / Inscription / 24h Date Picker)
├── /cart (Naira Total, Benin City Delivery Address, Pay on Delivery Note)
└── /track-order (Live WhatsApp Dispatch Updates)
```
