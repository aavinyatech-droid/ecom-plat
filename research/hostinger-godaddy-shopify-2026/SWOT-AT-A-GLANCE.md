# SWOT at a glance — Hostinger · GoDaddy · Shopify

Quick-reference version. Full evidence, quotes and sources in `REPORT.md`.
Date: 13 September 2026. Prices = US list, captured Aug–Sept 2026.

---

## HOSTINGER — budget host becoming an agentic platform

**Scale:** €275.4M revenue FY2025 (+51%), 4 consecutive years of 50%+ growth, 4.6M customers, private, ~1,000 staff, HQ Vilnius.
**Biggest 2026 move:** AI Builder (18 Aug 2026, Website Builder + Horizons merged) → Hostinger Agent (2 Sept 2026), where support stays free but specialised agent work becomes a paid tier.

| S | W |
|---|---|
| Best price × performance in the category: hosting + domain + SSL + CDN + email + AI builder from ~$3/mo, LiteSpeed/NVMe, 99.95–99.99% measured uptime, ~1.0s load times | Renewal +250–550% ($1.99–3.99 intro → $10.99–25.99); ~75% of reviewers citing renewal cancelled; coupons never apply to renewals |
| AI with real infrastructure access (Kodee: 350+ tasks; 91% self-resolution of ~1.5M monthly conversations; ~€9M support cost saved — the reason plans can be cheap) | E-commerce is a feature, not a platform: 1,000-product cap, no subscriptions, no POS/in-person, no B2B, **no app marketplace** |
| One account = build + backend (auth, DB, storage, transactional email) + commerce + email marketing + domains | Shared-infrastructure opacity: VPS throttled/suspended for "75% of CPU for a few hours", later for 20%, with no published thresholds |
| Private, profitable, self-funding; #2 FT/Statista European long-term growth champion; equity program shared €11.8M with staff | Chat-only support, no tickets by default, no phone; 24–72h email; up-selling reported during support conversations |
| Emerging-market muscle: India data centre + INR billing, Mexico/Indonesia/Brazil localisation | **Builder sites cannot be exported** (agentic code export only from Hobbyist+); "convert to WordPress" = rebuild styling and SEO |

| O | T |
|---|---|
| Own "the first real platform for AI-built apps" — Lovable/Bolt/Replit cost 3–5× more; the free Connector makes Hostinger the deployment target for people who distrust captive builders | **Renewal-cohort churn cliff**: growth was bought with 48-month prepaid terms; when they roll onto renewal pricing, churn and refund fights are scheduled events |
| Catch Bluehost/GoDaddy/HostGator refugees (renewal shock + Newfold fatigue); SiteGround/Cloudways are the premium escape, Hostinger is the cheap one | Trust damage from enforcement: public "locked my account, refused to return client data" threads; Netcraft 2015 phishing findings; CCIC top-5 in 2023 (out of top 20 by Apr 2026) |
| Remixable Templates marketplace → take-rate revenue + network effects infrastructure-only rivals lack | Security history (≈14M customers affected; 13M plaintext passwords on 000webhost in 2015) is worse, not equal, when AI agents hold credentials |
| Ship agent-era discoverability (`llms.txt`, SEO audits, heatmaps) at $3/mo while others make it an enterprise add-on | Open-weight models + a $5 VPS erode the value of a metered AI builder |

**Customer verdict:** *"The cheap host looks best when the site is still young."* Highest-rated of the three, and the loudest complaints are billing and enforcement, not uptime.

---

## GODADDY — 20.5M-customer incumbent cannibalising itself on purpose

**Scale:** FY2025 revenue $4.951B (+8.3%), ARR $4.42B, 20.5M customers, ARPU $250 (+8.7%), NEBITDA margin 33.4%, FY26 FCF ~$1.8B, NYSE: GDDY, Tempe AZ.
**Biggest 2026 move:** Airo + Airo AI Builder **unified** as an "agentic operating system"; annualised bookings run-rate $10M → **$50M in one quarter**; GoDaddy Developer Platform (agent-facing domain APIs); ANS + ARD for the agentic web.

| S | W |
|---|---|
| Distribution: ~3 decades of brand, 20.5M customers, the largest domain funnel in SMB — now feeding Airo | The pricing model *is* the complaint: .com $0.01–4.99 → $21.99–22.99 (+2,100%); builder $9.99 → $16.99–22.99; Airo Plus $59.88 → $95.88; builder renewal prices unpublished |
| Cash to fund the pivot: ~$1.8B FCF, $852M buybacks in 7 months, 1.4× net leverage — few rivals can afford self-cannibalisation | Extreme score polarisation: Trustpilot 4.5★ (128–134k) vs ConsumerAffairs 1.2–1.7★, Sitejabber ~2.8★; weighted ≈3.3/5 |
| Care: 24/7 phone + humans; AI cut 24-hour repeat contacts >16 points; retention >85%; >50% multi-product (>70% in the Airo cohort) | Care decays with tenure: 30–60+ min waits, script answers, dead escalations, upselling inside support calls |
| A&C segment margin 46.8% — evidence SMBs pay to bundle domain+email+site+booking+payments+POS | Dark-pattern reputation, documented: auto-renew default, charges reported after opting out, cancellation-code bug locking users out 7 days, 10-year auto-renewals at $235/yr, add-ons auto-added at checkout |
| Agent-era primitives early: ANS (offered to the Linux Foundation) + ARD + domain APIs that keep sign-in with GoDaddy | Generic AI output ("looks like 400,000 other GoDaddy sites"), shallow editor, no multilingual, **no code export from the legacy builder** |

| O | T |
|---|---|
| Convert 20.5M accounts to agentic accounts; Airo at $50M run-rate *before* marketing and before it touches the domain funnel | The funnel itself commoditising: if agents buy domains elsewhere, GoDaddy becomes a backend with 46.8% margins under price attack |
| Own identity + discovery for agents (ANS/ARD); separately, managing brand sentiment inside LLM answers | Core Platform (60% of revenue) grows only 3–4%; aftermarket is volatile; bookings growth < revenue growth |
| Local service businesses: bookings, POS, conversations inbox, DIFY human help — a segment Hostinger and Shopify under-serve | Serial platform churn: new builder every ~2 years, content does not move, and Airo unification is the next forced migration |
| Portfolio pruning + build-in-house now cheaper than M&A | Regulatory: FTC data-security order finalised 21 May 2025 (biennial independent assessments from 2026) + consumer-protection focus on auto-renewal and the 7-day refund window |

**Customer verdict:** *"convenient to enter, costly to stay, impossible to leave with your work intact."* Complaints are about billing and cancellation, not uptime.

---

## SHOPIFY — turning into the substrate of AI commerce

**Scale:** FY2025 revenue $11.556B (+30%), GMV $378.4B (+29%); Q2-2026 revenue $3.583B (+34%), GMV $115.6B (+32%), FCF $654M (18% margin); ~2.86M live storefronts, 47k Plus stores, 67% Payments penetration; ~14% of US e-commerce.
**Biggest 2026 move:** Catalog (>1B structured products, on by default) + **UCP** with Google + Agentic Storefronts admin + Catalog API with developer revenue-share; Sidekick/Magic free with **no usage caps yet**.

| S | W |
|---|---|
| The checkout is the moat: highest conversion of any hosted platform, Shop Pay 150M+ users, 67% of GMV on its own rails | "$39" is a marketing number: realistic $150–400/mo with apps + themes, plus 0.5–2% penalty for using another gateway, plus ~3% processing |
| Data gravity: 1B+ structured products and 20 years of transaction data → catalog-backed AI search converts **2×** vs scraped data and ~**80%** above organic | Feature gating: advanced reports (higher tiers), checkout customisation (Plus), Sidekick custom apps (Grow+); few strong free themes |
| Ecosystem: 17,000+ apps, 100k+ partners, POS/B2B/Markets/Capital/Shipping, headless options — *"12, 18, 20 things for the merchant"* | Money and access risk: payout holds, reserves, 120–365-day retention on termination, >1% chargeback flag, **admin removed so chargeback evidence cannot be submitted** |
| Operating leverage with cash: op income +68% on flat headcount, 10 quarters of double-digit FCF margins, $2B buyback | Long tail distorts metrics: only ~14% of stores clear $10k/month; live-store growth ~1.1% QoQ in Q2-26 |
| Retention quality: ~90% of revenue from merchants >1 year; $100M+ merchants nearly doubled in 2 years; LVMH, Mulberry, Balmain, Orvis signed in Q1-26 | Support is AI-first with thin escalation; no merchant phone line; public scores (Trustpilot ~1.5★, BBB F as reported) shape brand even when much volume is consumer-side |
| No new fees for agentic transactions — it taxes GMV growth, not the AI channel | Margin mix: merchant solutions +37% vs subscriptions +21% compresses gross margin; LLM costs rise with Sidekick usage; Shopify Capital losses $58M → $148M |

| O | T |
|---|---|
| Write the agentic protocol: UCP + Catalog + developer revenue-share = default rails for AI shopping | **Disintermediation** by assistants owning discovery *and* checkout; storefront flattens to an API call and the customer relationship moves up-stack (OpenAI + Amazon moved first on consumer agentic checkout) |
| B2B (+96%), international (+36%), offline (+27%) all growing ~2× platform | Gross-margin and mix compression ("gross profit growth lagging revenue is the new normal"), plus valuation at ~90–95× trailing P/E |
| Sell the gap: "search intelligence: the queries you don't rank for" is the shape of a new ad product; long-tail spec queries are high-intent | Tariffs, de minimis removal, FX, consumer softness — named in its own risk disclosures |
| Keep absorbing app categories (email, reviews, search, now B2B) = cheaper for merchants, harder to leave | Low-end squeeze: Hostinger's ~$7–14/mo "app with a store inside", plus vibe-coded storefronts on Stripe/Medusa/Saleor |
| Logistics optionality without warehouses: 13% Flexport stake + official-partner arrangement | Its own data gap: merchant metafields don't reach agents — a fixable, visible weakness |

**Customer verdict:** merchants call it the gold standard for selling and the checkout for real; the two recurring complaints are *cost creep* and *money/access risk*.

---

## Who should pick what

| Situation | Pick | Avoid | Why |
|---|---|---|---|
| First website, portfolio, blog, brochure site, <10k visits/mo | **Hostinger** | GoDaddy (same job at ~3× on renewal), Shopify (overkill) | ~$3–4/mo for hosting+domain+SSL+email+AI, renews ~$11–17 |
| Solo founder, <500 SKUs, wants a store this week, tiny budget | **Hostinger Business** | — | 0% platform transaction fees, 1,000-product ceiling |
| Local service business (trades, salon, clinic): domain + email + bookings + payments + a phone number | **GoDaddy** | Shopify (overpriced for the job) | One bill, human support, DIFY "have a pro do it" tier |
| You already own a domain elsewhere and just need presence | Either, but read renewal prices before clicking | Don't buy a 3–5-yr term to escape renewal, unless you will renew it deliberately | Renewal jumps of 3–4× are the documented pattern |
| Store >$10–20k/mo, >500 SKUs, POS, B2B, international, subscription products | **Shopify** | Hostinger/GoDaddy builders | Checkout conversion, Payments rails, 17k apps, BFCM-proof |
| Low-AOV dropshipping | Careful everywhere | **Shopify** on Basic (2.9% + $0.30 kills margin) | Use WooCommerce/self-hosted or a flat-fee processor |
| Agency running 20+ client sites | Hostinger reseller/agency path *only with* off-host backups and per-site isolation | Any builder without export | One flagged domain has suspended whole accounts |
| You plan to be acquired or to sell the site later | Shopify or self-hosted WordPress | Hostinger builder, GoDaddy Websites + Marketing | Portability and code/data export decide valuation |
| You need to look great to AI agents in 2026–27 | **Shopify** (Catalog + UCP) or self-hosted with structured data | Template-only builders | Catalog-backed answers convert 2× vs scraped |

## The three questions that decide any of these choices

1. **What does year 3 cost?** (Not year 1 — every one of these companies prices year 1 as an acquisition channel.)
2. **If they freeze the account, can I still get my data out and appeal to a human?** (This is where all three have real complaint patterns.)
3. **Is my product data structured enough that an AI agent can read and buy from me?** (In 2026 that is a revenue question, not a technical one.)
