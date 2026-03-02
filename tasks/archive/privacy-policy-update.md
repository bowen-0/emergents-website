# Privacy Policy Update — Light-Touch Accuracy Fix

**Status:** Complete
**Created:** 2026-03-02
**File modified:** `src/PrivacyPolicy.tsx`

---

## Why

The privacy policy was written for the pre-launch waitlist. Now that Systemic is live on the Miro Marketplace with subscriptions, auth token storage, and source input features, it contained false claims. Approach: fix what's wrong, keep it brief and plain-language, don't over-detail.

## What Was Done

### False claims fixed
1. **Auth tokens** — removed "We don't store or manage your Miro credentials or access tokens". Now honestly states tokens are stored securely to keep users signed in.
2. **Data storage** — removed "No Persistent Storage". Now lists what we actually store (auth tokens, subscription status, usage counts) while emphasising prompts/documents/content are never stored.
3. **User rights** — removed "no stored data to access" / "No Data to Delete". Now says "contact us to request access or deletion".
4. **Waitlist → Newsletter** — renamed section, updated all copy.
5. **Date** — updated to March 2026.

### Missing content added
- **Payments section** — Stripe handles Pro billing, we don't store payment details. Links to Stripe's privacy policy.
- **URL & PDF source inputs** — disclosed that users can provide URLs and documents as source material (transient, not stored).
- **Error monitoring** — added to third-party services list.
- **Unsubscribe right** — added to Your Rights section.

### Sections removed (per review feedback)
- **"Data Security"** — built on false premise ("no stored data to secure"), "industry-standard" boilerplate adds no value.
- **"How We Use Your Information"** — two bullets that were obvious from context, substance folded into other sections.
- **Redundant intro bullet list** ("We collect information in two contexts") — just restated the section headings.
- **"Google Sheets" name** — removed from newsletter section, consistent with category-level approach.

### Sections merged
- **"App Usage Information" + "Data Storage" + "Data Retention"** → single **"What We Process & Store"** section. Covers transient inputs and stored account data in one place.

### Framing added
- Added purpose statement at top of "What We Process & Store": *"We only store what's necessary to make the app work. We don't collect data for advertising, profiling, or any purpose beyond delivering the service."*

## Final Structure (~7 sections, down from ~10)

1. **Introduction** — what the app is, what this policy covers
2. **Newsletter** — email signup for updates
3. **What We Process & Store** — transient inputs (prompts, URLs, docs) + stored account data (tokens, subscription, usage). Led by purpose framing.
4. **Payments** — Stripe handles billing, we don't store payment details
5. **Third-Party Services** — category-level: AI services, payment processing, hosting, error monitoring, Miro SDK
6. **Your Rights** — access/delete data, revoke access, unsubscribe
7. **Children's Privacy / Changes / Contact** — standard footer sections

## What We Deliberately Did NOT Add

- No per-activity legal basis table (Swiss nDSG doesn't require it)
- No exhaustive sub-processor list with company names
- No international transfer details
- No DPIA/DPO references
- No cookie consent section

## Related: Separate Code Change (Systemic repo, lower priority)

**Helicone data minimisation** — stop sending user email/username to Helicone analytics in `functions/lib/helicone.js`. User ID alone suffices. Tracked in `systemic/docs/tasks/current/privacy-policy-gdpr-update.md`.
