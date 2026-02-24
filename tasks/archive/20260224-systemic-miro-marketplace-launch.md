# Update Emergents Website for Systemic Miro Marketplace Launch

**Status: Completed** — 2026-02-24

## Context
Systemic is now live on the Miro Marketplace. The website at `emergents.io/systemic` still shows pre-launch content ("Join the Waitlist", "Be the first to know when Systemic launches"). It needs to reflect the live product status, showcase the 5-min YouTube demo video, display pricing tiers (Free vs Pro), and update features to match the shipped product.

## Updated Page Section Order (`/systemic`)

1. Back button (unchanged)
2. **Hero** — icon + title + "Live on Miro Marketplace" badge + updated value prop + **"Install on Miro" CTA** + "Watch the demo ↓" link
3. **SVG Demo** (keep as-is — lightweight animated teaser)
4. **Video Demo** (new — YouTube embed, "See Systemic in Action")
5. **Features grid** (updated to 5 cards reflecting shipped capabilities)
6. **Pricing section** (new — Free vs Pro comparison cards)
7. **Use case badges** (unchanged)
8. **Newsletter signup** (repurposed EmailCapture — updated copy, no longer "waitlist")
9. Footer (unchanged)

## Implementation Steps

### Step 1: Create `VideoDemo.tsx`
**New file:** `src/components/sections/VideoDemo.tsx`
- Responsive YouTube embed (privacy-enhanced `youtube-nocookie.com`)
- 16:9 aspect ratio via `aspect-[16/9]`
- Glass container matching site theme (`glass rounded-xl border border-white/10`)
- Section heading: "See Systemic in Action" with `gradient-text`
- `loading="lazy"` for performance
- Framer Motion entrance animation
- Props: `videoId: string`, `className?: string`

### Step 2: Create `PricingSection.tsx`
**New file:** `src/components/sections/PricingSection.tsx`
- Two cards side-by-side (`grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl`)
- Section heading: "Simple Pricing" with `gradient-text`

**Free card** (`glass rounded-xl border border-white/10 p-8`):
- €0/month
- Features: AI systems map generation, Expand maps, Auto-format layout, System summary cards

**Pro card** (`glass rounded-xl border-2 border-accent-purple/30 p-8`, purple glow):
- "Early Supporter Price" badge (`Badge` component, `variant="gradient"`)
- €10/month
- Features: Everything in Free + Research-backed citations, Deeper analysis, Priority new features, 100 Pro actions/month
- Single shared "Install on Miro" CTA below both cards

- Purple checkmark icons for feature lists
- Framer Motion staggered entrance

### Step 3: Update `EmailCapture.tsx`
**Modify:** `src/components/sections/EmailCapture.tsx`
- Add optional `mode` prop: `'waitlist' | 'newsletter'` (default `'waitlist'` for backward compat)
- When `mode='newsletter'`:
  - Title: "Stay Updated" (was "Join the Waitlist")
  - Subtitle: "Get notified about new features, tips, and updates"
  - Button: "Subscribe" (was "Join Waitlist")
  - Success: "You're subscribed!" / "We'll send updates to {email}"

### Step 4: Update `CompactProjectCard.tsx`
**Modify:** `src/components/ui/CompactProjectCard.tsx`
- Add `status?: 'active' | 'beta' | 'live'` to interface
- Render a small status badge next to the title:
  - `'live'`: green dot (pulse) + "Live" text, green tint
  - `'beta'`: amber tint + "Beta"
  - `'active'`: purple tint + "Active"

### Step 5: Update `OnePage.tsx`
**Modify:** `src/OnePage.tsx`
- Systemic project: `status: 'live'`, update description to "AI-powered systems maps in Miro. Live on the Miro Marketplace."

### Step 6: Restructure `SystemicLanding.tsx`
**Modify:** `src/SystemicLanding.tsx`
- `MIRO_MARKETPLACE_URL = 'https://miro.com/marketplace/systemic/'`
- `YOUTUBE_VIDEO_ID = '3QmOgPsgcKI'`
- **Hero changes:**
  - Add "Live on Miro Marketplace" badge (green pulse dot + text) between title and value prop
  - Add primary "Install on Miro" gradient CTA button below value prop
  - Add secondary "Watch the demo ↓" text link (scrolls to `#video-demo`)
- **Import & insert** `VideoDemo` section after SVG demo
- **Update features** to 5 cards: Create, Expand, Auto-Format, Summarize, Research
  - Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` (accommodates 5 cards: 3+2)
- **Import & insert** `PricingSection` after features
- **Change** `<EmailCapture variant="floating" />` to `<EmailCapture variant="floating" mode="newsletter" />`

## Files Modified
| File | Change |
|------|--------|
| `src/components/sections/VideoDemo.tsx` | **New** — YouTube embed component |
| `src/components/sections/PricingSection.tsx` | **New** — Free vs Pro pricing cards |
| `src/components/sections/EmailCapture.tsx` | Add `mode` prop for newsletter copy |
| `src/components/ui/CompactProjectCard.tsx` | Add `status` prop + badge rendering |
| `src/OnePage.tsx` | Update Systemic card data (status, description) |
| `src/SystemicLanding.tsx` | Restructure: hero CTA, video, pricing, updated features |

## Notes
- Button gradient settled on `from-violet-700 to-purple-600` (darker than original for better contrast)
- Badge `gradient` variant updated to match button gradient
- Pricing: removed per-card CTAs in favour of single shared "Install on Miro" CTA
- Pro card uses "Early Supporter Price" badge instead of "Recommended"
- No map limit mentioned on Free tier (no such restriction exists)
