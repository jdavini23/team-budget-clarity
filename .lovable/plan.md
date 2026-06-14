# TeamBudget Landing Page

A complete, conversion-focused landing page for TeamBudget — the financial transparency app for youth sports teams. Built as a single long-scroll route with custom design tokens, real copy from the brief, and mobile-first responsive layout.

## Design Direction

**Vibe**: Trustworthy + energetic. Think "modern fintech meets Friday-night-lights." Not corporate-stuffy, not childish-sporty.

- **Palette**: Deep navy (`#0c2340`) primary, electric green accent (`#2dd4a8`) for money/positive signals, warm off-white background, charcoal text. Subtle gradient washes on hero and final CTA.
- **Typography**: `Sora` (display, tight tracking) for headlines + `Inter` for body. Big numeric weights for stats.
- **Motion**: Subtle fade-up on scroll for section reveals, animated count-up for stat numbers, hover lift on cards. No gimmicks.
- **Imagery**: Product mockup of the dashboard (rendered as a stylized HTML/CSS preview in the hero, not a static image), avatar illustrations for testimonials, lucide-react icons for features/steps.

All colors, gradients, and shadows defined as semantic tokens in `src/styles.css`. Components use tokens only — no hardcoded colors.

## Page Sections (single route: `/`)

1. **Sticky Nav** — Logo, links (Features, How it works, Pricing, FAQ), "Sign in" + "Start free trial" CTA.

2. **Hero** — Left/right split on desktop, stacked on mobile.
   - Eyebrow: "For youth sports teams"
   - H1: "Finally know where every dollar goes."
   - Sub: "TeamBudget gives parents, coaches, and treasurers real-time financial transparency — so the only thing your team argues about is the lineup."
   - Primary CTA: "Start free — no card required"
   - Secondary: "See live demo"
   - Social proof line: "Trusted by 1,200+ youth sports teams"
   - Right: stylized dashboard mockup (budget bars, recent expenses, live "fee collected" toast)

3. **Trust strip** — League/org logo placeholders (TeamSnap-style, SportsEngine-style, Little League, AYSO, Pop Warner) + 3 inline stats: "$4.2M tracked", "98% parent satisfaction", "12 hrs/season saved per treasurer".

4. **Problem / Pain section** — "Youth sports finances are broken."
   - Where did my $500 go?
   - Treasurer burnout from spreadsheets and shoeboxes of receipts
   - Group-chat arguments over uniform and tournament costs
   - Volunteer turnover when the books don't add up
   - Visual: split illustration — chaotic Excel + angry text bubbles vs. clean dashboard.

5. **Solution overview** — "Budget clarity, built for teams."
   - Value prop paragraph
   - 3 benefit cards: Parents see everything live · Treasurers ditch the spreadsheets · Coaches stay out of money drama
   - Larger dashboard screenshot (mockup component).

6. **How it works** — 3 steps with icons:
   1. Create your team in 60 seconds
   2. Connect payments + upload receipts (auto-categorized)
   3. Parents get a live, read-only view of the budget

7. **Features grid** — 6 benefit-led cards with lucide icons:
   - Real-time budget dashboard
   - Receipt capture & auto-categorization
   - Parent notifications when fees are collected/spent
   - TeamSnap & SportsEngine sync
   - Fundraising tracker
   - Season-end reports in one click

8. **Social proof** — 3 testimonials with avatar, name, role (Team Treasurer / Coach / Team Parent), team name. Plus a results strip: "Reduced parent finance questions by 87%" style mini case study.

9. **Pricing** — 3 tiers (Starter $24/mo, Pro $49/mo highlighted, Enterprise "Talk to us"). Feature checklist per tier, "Best for" line, 14-day free trial badge.

10. **FAQ** — Accordion, 6 questions: pricing, data security, payment integrations, switching from spreadsheets, parent access, cancellation.

11. **Final CTA** — Gradient band: "Stop chasing receipts. Start trusting your books." Primary CTA + "30-day money-back guarantee" risk reversal.

12. **Footer** — Logo + tagline, link columns (Product, Company, Resources, Legal), social icons, copyright.

## SEO

Route `head()`: Title "TeamBudget — Real-time budget transparency for youth sports teams" (<60 chars), meta description focused on parents/treasurers (<160 chars), og:title, og:description, og:type=website, twitter:card=summary_large_image. Single H1 in hero. Semantic `<section>` per block with `aria-labelledby`. Alt text on all imagery.

## Technical Notes

- **Stack**: Replace `src/routes/index.tsx` placeholder with the new landing page. Break into co-located components under `src/components/landing/` (Nav, Hero, TrustStrip, Problem, Solution, HowItWorks, Features, Testimonials, Pricing, FAQ, FinalCTA, Footer, DashboardMockup).
- **Design tokens**: Extend `src/styles.css` with brand palette (navy, mint-accent, warm-bg), gradient tokens (`--gradient-hero`, `--gradient-cta`), and shadow tokens.
- **shadcn components used**: Button, Card, Accordion, Badge. Install only if missing.
- **Motion**: `framer-motion` for scroll reveals and count-up (add via `bun add` if not present).
- **Icons**: `lucide-react` (already standard).
- **No backend**: CTAs are anchor links / `<a href="#pricing">` placeholders — no auth or DB needed for v1. Lovable Cloud is not required for this build.
- **Mobile-first**: All sections stack at `<md`, grids collapse, sticky nav becomes a hamburger.

## Out of scope (for follow-up)

Actual auth, real product, Stripe checkout, dashboard app behind the marketing site, blog/docs routes. Mention as natural next steps after the page ships.
