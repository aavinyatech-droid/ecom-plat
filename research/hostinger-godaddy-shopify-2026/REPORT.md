# Hostinger vs. GoDaddy vs. Shopify — Deep Competitive Research

**What they are building · SWOT · drawbacks · what customers say after running a business on them**

Prepared: 13 September 2026
Scope: commercial websites and e-commerce for SMBs — company strategy, product roadmap, financials, pricing, lock-in, support, and customer sentiment.
Evidence cut-off: primary sources through Q2 2026 results (Shopify and GoDaddy reported 5 and 30 August 2026; Hostinger FY2025 published 18–23 February 2026) plus investor-conference commentary from 8–10 September 2026.

Citation style: `[H1]`, `[G1]`, `[S1]`, `[X1]` map to the per-company source tables at the end of each section and to `SOURCES.md`. Tier-1 = company/filer/regulator primary source. Everything else is labelled by what it is (review site, transcript relay, Reddit, BBB filing).

**Files in this folder**

| File | What it is |
|---|---|
| `REPORT.md` | This document — the full write-up |
| `SWOT-AT-A-GLANCE.md` | Three screens: the whole SWOT grid + who should pick what |
| `PRICING-TCO.csv` | Every price, renewal rate, fee and TCO scenario, machine-readable |
| `SOURCES.md` | All ~70 sources with dates and confidence tiers |

---

## Table of contents

1. [The 5-minute version](#1-the-5-minute-version)
2. [Where the market actually is in 2026](#2-where-the-market-actually-is-in-2026)
3. [Hostinger](#3-hostinger)
4. [GoDaddy](#4-godaddy)
5. [Shopify](#5-shopify)
6. [Head-to-head](#6-head-to-head)
7. [The three recurring failure modes](#7-the-three-recurring-failure-modes)
8. [Decision guide](#8-decision-guide)
9. [What this means for ecom-plat](#9-what-this-means-for-ecom-plat)
10. [Data quality notes](#10-data-quality-notes)

---

## 1. The 5-minute version

| | **Hostinger** | **GoDaddy** | **Shopify** |
|---|---|---|---|
| **What it is** | Lithuanian, private, budget-first hosting company racing to become an all-in-one *agentic* web platform (build + host + sell + market under one account) | The 20-year domain/hosting incumbent for micro-businesses, mid-flight through a self-funded "AI transformation" that turns Airo into an agentic operating system and de-emphasises its own legacy builders | Canadian listed e-commerce operating system: storefront SaaS + payments + logistics + data, now rebuilding itself as the rails under AI/agent shopping |
| **Scale** | €275.4M revenue FY2025, +51% YoY, 4.6M customers; 2026 messaging says 5M+ clients `[H1][H5]` | $4.95B revenue FY2025 (+8.3%); ARR $4.42B; 20.5M customers; ARPU $250 `[G1][G2]` | $11.56B revenue FY2025 (+30%); GMV $378.4B FY25, $115.6B in Q2-26 alone `[S1][S2]` |
| **Money engine** | Cheap multi-year subscriptions, upsold into renewals at 3–4× the intro price `[H10]` | Customer count is flat (~20.5M). Growth = price/mix, multi-product attach, aftermarket `[G1][G6]` | Take rate on GMV (~3.1%); merchant solutions ≈76% of revenue and growing 2× faster than subscriptions `[S2][S9]` |
| **Flagship 2026 move** | **AI Builder** (18 Aug 2026 — Website Builder + Horizons merged) and **Hostinger Agent** (2 Sept 2026 — Kodee becomes a paid tier of business agents) `[H3][H4]` | **Unified Airo** (agentic OS; annualised bookings run-rate $10M → **$50M in one quarter**), **GoDaddy Developer Platform** (agent-facing domain APIs), **ANS + ARD** for the agentic web `[G1]` | **Shopify Catalog** (>1B structured products) + **UCP** (co-developed with Google) + **Agentic Storefronts in Admin**; Sidekick at ~34M merchant conversations/quarter `[S3][S4]` |
| **Best for** | First site, brochure site, cheap WooCommerce, solo founders, agencies running many small sites | A local/service business that wants domain + email + site + bookings + phone support on one bill and never plans to outgrow it | Anyone whose revenue depends on the checkout: D2C brands, 500→500k SKUs, B2B, POS, international, anything that has to survive Black Friday |
| **Biggest drawback in customers' own words** | "Renewal notification: from $140 to $310 over two years"; VPS throttled for "75% CPU for a few hours"; "they took down all websites and refused to give me any data" `[H10][H14][H16]` | "Auto-renewed our domains for a whopping 10 years at $235 each… no way to adjust/cancel"; "looks like roughly four hundred thousand other GoDaddy sites"; "no code export" `[G19][G14][G16]` | "They restricted both stores, denied my appeals and made it impossible to defend myself against chargebacks — while holding $10,000 for 365 days"; "$39/month becomes $400/month of apps" `[S7][S12]` |
| **Trust signal** | Trustpilot ~4.7★ on a very large base, but a documented suspension/data-withholding pattern plus a history of being cited as a phishing host `[H9][H13][H23]` | Trustpilot 4.5★ (~128k reviews) vs ConsumerAffairs ~1.2–1.7★, and an FTC data-security order finalised 21 May 2025 — the most polarised brand in the category `[G11][G12][G18]` | Merchant retention is excellent; public scores are bad (Trustpilot ~1.5★, BBB F as reported) because consumers blame the platform for merchants' behaviour — but the payout-freeze complaints are structural `[S7][S8]` |

**One-line thesis per company**

- **Hostinger** wins on *price × AI convenience* and is genuinely converting itself from hosting into a platform. Its growth engine — 3–4× renewal jumps, opaque abuse enforcement, no export from its builder — is the same playbook customers complain about everywhere else.
- **GoDaddy** has the distribution (20.5M customers, phone support, the domain funnel) and the cash (~$1.8B FY26 FCF guidance) to fund a pivot in which it has *stated in writing* that its own template builders and do-it-for-you services will narrow. The question is not capability but whether a brand built on upsells can win trust in a self-serve agentic world.
- **Shopify** is the only one of the three setting the 2026 agenda: it is trying to become the mandatory back office — catalogue + checkout + protocol — for every AI shopping surface, while accepting gross-margin compression from mix shift and a valuation that allows no stumble.

---

## 2. Where the market actually is in 2026

The three converge on the same job — "get a small business online and running" — from opposite directions.

**Market structure (2026 trackers).** WordPress still holds ~40% of all websites and ~59–60% of the CMS market. Shopify is #2 at 5.2–7.5% of all websites (7.5–7.8% of the CMS market) — its highest share ever, up from 4.7% in January 2025. Wix 4.3%, Squarespace 2.5%. **GoDaddy Website Builder sits at ~0.7–0.9% of all websites and is flat YoY, while Weebly is down ~15%** as GoDaddy phases it out. `[X1][X2][X3][X4]` On the pure-builder market, Wix ~45% share, Squarespace ~18%, GoDaddy ~10–11% of DIY-builder sites, with **~26% of e-commerce platform share for Shopify vs 18% for WooCommerce**. `[X5][X6]`

**Three forces rewired the category between 2024 and 2026:**

1. **AI collapsed the cost of the first version.** Prompt-to-site is table stakes at every price point, so the differentiator moved from "can you get online?" to "can the system run the business?". Hostinger's VP of Product, Auksė Žirgulė, framed it exactly this way at AI Builder launch: *"The next battle in online presence is not about who can generate a homepage in 30 seconds… It is about what happens next. Can the AI open the store, create the user management system, help attract customers, and keep improving the project?"* `[H3]`
2. **Agentic commerce changed distribution.** Shopify reports AI-referred traffic *and* orders to its stores **tripled YoY in Q2 2026**; ~half of AI-referred sessions land **directly on a product page** (vs ~20% for traditional search); new-buyer orders arrive at **~2× the rate** via AI channels; and **75% of AI-attributed purchases came from outside the top 100 product categories** — the long tail wins. `[S4][S5][S6]` Meanwhile GoDaddy's CEO wrote in Q2 2026 that *"the need for traditional products, like do-it-for-you services and template-based website builders"* will *"narrow and evolve over time."* `[G1]` That is an incumbent announcing its own cash-cow product line is on a melting ice floe.
3. **Pricing-model stress pushed all three toward the same trick.** Low entry price + renewal/usage monetisation. GoDaddy's CFO: Airo is *"monetised through a mix of subscription and token usage"*, absorbing *"separately priced products such as traditional do-it-for-you services and template-based website builders."* `[G1]` Hostinger now sells AI credits on top of subscriptions and gates specialised agent work behind a tiered subscription. `[H5][H8]` Shopify is the outlier: **no new fees for agentic transactions**, and Magic/Sidekick included free on every plan. `[S4][S13]`

**Category-wide mood.** Cross-brand review analysis in hosting finds the same #1 complaint for every budget brand — *"the gap between the advertised first-year price and the renewal rate"* — followed by "unlimited" limits and deflecting support. One summariser's case study is literally titled "the renewal revolt": a 4★ review became 1★ when the price tripled and support refused to negotiate. `[X7]` That is the single most exploitable weakness in this competitive set.

---

## 3. Hostinger

### 3.1 Who they are

| | |
|---|---|
| Founded | 2004, Kaunas, Lithuania, as **Hosting Media**; renamed Hostinger in 2011 `[H6]` |
| Status | **Private**. ~31% stake acquired by a PE firm in 2021; no traditional VC rounds; a **dividend recapitalisation in November 2025** — owners extracting via leverage rather than an IPO path `[H6][H1]` |
| Leadership | Chairperson Arnas Stuopelis (CEO 2011–2023); Daugirdas Jankus CEO 2023; **Giedrius Zakaitis** named CEO by 2026; CMO Kristina Strimaitė; VP Product Auksė Žirgulė `[H6][H3]` |
| Footprint | HQ Vilnius ("Cyber City" campus); 1,000+ employees (≈500 in Lithuania); customers in 150+ countries; own data centres incl. India `[H1][H24]` |
| Brand history | 000webhost (2007–2024), Hosting24 (2008), Niagahoster Indonesia (2013, brand consolidated into Hostinger June 2025), Weblink Brazil (2014), Zyro no-code builder (2019) → Hostinger Website Builder `[H6]` |
| Revenue | 2022 €69.6M → 2023 €110.2M → 2024 €182.4M → **2025 €275.4M (+51%)**; ~58% CAGR 2022–25; first EBITDA profit 2023 (€2.4M). ≈$316.7M in USD terms `[H1][H2]` |
| Customers | 1.5M (2022) → 2.4M (2023) → 3.5M (2024) → **4.6M (2025, +35% YoY)** `[H1]` |
| Recognition | FT 1000 Europe's fastest-growing for 6 consecutive years; **#2 in FT/Statista Long-term Growth Champions: Europe 2026** `[H1][H2]` |
| Internal signal | **€11.8M employee stock-option payout** on 18 Mar 2026, to ~10% of staff under a program started in 2017 `[H1]` |

### 3.2 What they are building (2025 → September 2026)

Hostinger no longer describes itself as a hosting company. Its FY2025 release calls itself *"a no-code AI-driven platform for building and growing online businesses"* and attributes 51% growth partly to *"platform-wide AI agent use."* `[H1]`

| When | Launch | Strategic reading |
|---|---|---|
| Early 2025 | **Hostinger Horizons** — prompt-to-app "vibe coding" running on Hostinger's own infrastructure | First move out of "template builder" into generative build. **800,000+ customers by end-2025** `[H1]` |
| 2024–25 | **Hostinger Reach** — conversational AI email marketing | **150,000 users by Dec 2025**; marketing wedge beyond hosting `[H1]` |
| 2025 | **Kodee** — AI assistant wired into Hostinger infrastructure over open-source MCP, **350+ tasks** (migrate, back up, speed up, publish, manage a WooCommerce store) | Support automation that reportedly **saved ~€9M in 2025** ≈ 3.3 points of revenue margin `[H7][H1]` |
| 3 Nov 2025 | **Remixable Templates** creator marketplace (sell site/app templates inside Hostinger) | Platform economics: marketplace take-rate on top of subscriptions, plus ecosystem lock-in `[H22]` |
| July 2026 | **Hostinger Ecommerce** — sell via website, social channels, shareable links | Moves from "WooCommerce on a host" to first-party commerce `[H4]` |
| **18 Aug 2026** | **AI Builder** — Website Builder *and* Horizons merged into one agentic product: one prompt → site, store or web app **with backend provisioned by the AI** (user accounts, database, file storage, automated emails); agentic + manual modes; free **Hostinger Connector** so external coding agents (Claude Code, Cursor, VS Code) can act on your account | The core thesis: *own the whole online journey in one account* — *"Hostinger is moving beyond AI-generated websites toward an agentic platform"*; *"One project and one account take a customer from building and editing to backend, commerce and email, without switching between separate products"* `[H3]` |
| **2 Sept 2026** | **Hostinger Agent** — Kodee replaced by an assistant that also does marketing, SEO, content, analytics and recurring tasks using your site/store/domain/email/newsletter context. ~1 in 10 conversations gets a human "AI CX Engineer" in the loop. **Support and account management stay free; specialised agentic work is a paid tiered subscription** | Monetising the *labour*, not the infrastructure. Reported metrics: 91% of ~1.5M monthly conversations self-resolved; specialist-guided AI resolution 41% → 72% since end-June; live-chat demand 10% → 4.5%; median resolution ~3 min vs 50+ min for live chat `[H4]` |

**How to read it.** Hostinger is building a *vertically integrated* answer to AI commoditisation: if a model can produce any homepage, own the rails underneath (domain, hosting, SSL, email, CDN, checkout, backend, marketing) so the model has somewhere to live. A 2026 industry profile is blunt about the pitch: *"its pitch is that most people do not need [bespoke cloud or managed enterprise WordPress], and that a cheaper, simpler, AI-assisted bundle is enough."* `[H24]`

### 3.3 What you actually get, and what it costs

Hosting/builder plans, US list, annual-billed intro → renewal `[H8][H11][H12]`:

| Plan | Intro (48-mo) | Intro (12-mo) | Monthly | **Renews at** | What's in it |
|---|---|---|---|---|---|
| Premium | $2.99 | $3.99 | $11.99 | **$10.99** | 3 sites (builder), weekly backups, 20 entry processes, 5 AI build credits, free domain yr 1 |
| Business | $3.99 | $4.99 | $18.99 | **$16.99** | Unlimited sites, daily backups, staging, **e-commerce: 0% transaction fees, up to 1,000 products**, 100+ payment methods (Stripe/PayPal), 30 EP, 15 build + 500 agent credits, Reach included |
| Cloud Startup | $7.99 | — | — | **$25.99** | More dedicated resources, 40 EP, priority support, 1,000 agent credits |
| Horizons / AI Builder app tiers | Explorer $6.99, Starter $9.99–13.99, Hobbyist $29.99–39.99, Hustler $59.99–79.99 | | | | 30 / 70 / 200 / 400 AI credits; code editor and **ZIP export only from Hobbyist up**; ecommerce from Starter |
| VPS (KVM, NVMe, Linux + Windows + Minecraft) | tiered | | | renewal follows the same 2–3× pattern | shared vCPU; sustained-load throttling (see 3.5) |
| Managed WordPress / WooCommerce | mirrors shared tiers | | | | onboarding, migration, staging, auto-updates, AI content |
| Email | included on most paid plans, or ~$0.99/mailbox/mo (Hostinger Mail) | | | | 1 GB mailbox caps reported |

**The second bill: AI credits.** Top-up packs have run from ~$4.99/10 credits to $299.99/1,000 (50 credits at $19.99 marked "recommended"); another reviewer's screenshot showed 50 credits at $4.99 — pricing has been restructured and varies by surface, so treat the exact numbers as indicative. **Manual edits are free; agentic generation and edits cost credits; unused credits do not roll over.** A hands-on tester reported *running out of credits mid-project* while polishing a generated site. `[H5][H8]`

**Limits people actually hit** `[H11][H20][H21][H24]`
- "Unlimited" is fair-use. The real bottlenecks are **entry processes** (20 / 30 / 40 by tier), inode/file counts and CPU — not bandwidth. Entry plans degrade around 5–10k visits/month; ~250k/month is the practical ceiling of premium shared; "508 Resource Limit Reached" is the standard symptom.
- **No phone support. No tickets by default** (chat, escalate if the agent decides). **No dedicated servers. No Windows shared hosting** (Windows on VPS only). No app marketplace to fill gaps.
- E-commerce depth: one review set scored features below peers, specifically **no subscriptions and no in-person selling** on the builder `[H20]`; product ceiling ~1,000 (600 in Horizons).
- **Uptime SLA is thin:** 99.9% applies to *network availability only*, excludes scheduled maintenance, DDoS, your ISP and your own code; it is validated **using Hostinger's own monitoring data**; remedy is a ~5% one-month fee credit claimed within ~30 days. `[H19][H21]`
- **Lock-in:** WordPress and VPS are portable; **drag-and-drop builder sites cannot be exported or migrated at all** (including to Hostinger's own VPS). Agentic projects can export code from Hobbyist up. `[H11][H12][H21]`
- **Refund asymmetry:** 30 days on hosting/cloud/VPS/email; **96 hours for domains**; domain renewals non-refundable; crypto payments non-refundable; refunds default to **account store credit** unless you explicitly ask for the original payment method; **Horizons/AI Builder plans cannot be downgraded**. `[H10][H25]`

### 3.4 SWOT — Hostinger

<details open><summary>Full grid</summary>

| **STRENGTHS** | **WEAKNESSES** |
|---|---|
| **Price × performance nobody matches.** Hosting + domain + SSL + CDN + email + AI builder from ~$3/mo; independent testers report ~1.0s load times (vs 2.6s at a cheaper rival) and 99.95–99.99% measured uptime; LiteSpeed + NVMe; hPanel is friendlier than cPanel and one-click installers cover WordPress `[H19][H21][H24][H10]` | **Renewal architecture is the business model.** $1.99–3.99 intro → $10.99–25.99 renewal is a **250–550% jump**; documented Premium $1.99→$10.99 (+452%) and Business $2.99→$16.99 (+468%); a third-party analysis found **~75% of reviewers who hit renewal cancelled or refused to renew**; coupons never apply to renewals; 14-day pre-renewal notice is easy to miss `[H10]` |
| **AI that acts on infrastructure, not just text.** Kodee/Hostinger Agent: 350+ tasks, 91% self-resolution on ~1.5M conversations/month, 3-minute median vs 50+ min live chat — and it cut ~€9M of support cost, which is *why* the plans can be cheap `[H4][H7]` | **E-commerce is a feature, not a platform:** 1,000-product cap, no subscriptions, no POS/in-person, no native B2B, thin tax/compliance, **no app marketplace**. Every review converges on "fine for small stores, outgrown fast" `[H11][H20]` |
| **Real platform convergence.** One account = build + backend (auth, DB, file storage, transactional email) + commerce + email marketing + domains. A tester's one-prompt directory site came back with working search and filters: *"actual web apps (customer portals, booking systems, internal tools) where other AI website builders stop short."* `[H8]` | **Shared-infrastructure opacity.** VPS customers report restrictions for *"75% of CPU for a few hours"* and later for 20%, with no published thresholds; community reply: *"incredibly evident of the fact they oversell these resources."* Backups/staging gated by tier in ways first-timers miss `[H14][H15]` |
| **Private, profitable, self-funding** — can price aggressively without quarterly-market optics; shares upside with staff; #2 European long-term growth champion `[H1][H6]` | **Support escalation design.** Chat-only; the chat widget sometimes fails to appear; email 24–72h; users describe having to *"beg a stupid and useless AI bot to call a human"*; reports of up-selling during support calls; no second-specialist switch, and per one reviewer you cannot even close the chat `[H13][H21]` |
| **Shipping speed:** Horizons (early 2025) → Ecommerce (Jul 2026) → AI Builder merge (Aug 2026) → Hostinger Agent (Sept 2026) — four structural moves in ~18 months `[H1][H3][H4]` | **Brand ceiling:** perceived as a budget/first-website host; no enterprise or managed-WP credibility; reviewers note no PCI certification and no 24/7 phone line; agencies worry about account-wide suspension of client sites `[H19][H21][H26]` |
| **Emerging-market distribution muscle** — Impulso programme in Mexico after Indonesia/Brazil, Niagahoster consolidation, India data centre + INR billing `[H6][H1][H26]` | **AI metering cuts against the value story.** Credits make "cheap" feel expensive exactly when a customer iterates hardest; free tier is a 7-day/5-message demo; reviewers name credits a top friction point `[H5][H8]` |
| | **Contract asymmetry:** renewal fees changeable with 30 days' notice; refunds default to credit; 96-hour domain refund window; no downgrades on AI Builder/Horizons plans `[H10][H25]` |

| **OPPORTUNITIES** | **THREATS** |
|---|---|
| **Own "the first real platform for AI-built apps."** With Lovable at ~$21–25/mo, Bolt and Replit at ~$25/mo, a $6.99–13.99 bundle including hosting + domain + email + checkout is a wide-open value position; the free **Connector** (external agents acting on the account) cleverly makes Hostinger the *deployment target* for people who don't want a captive builder `[H5][H8]` | **A renewal-cohort churn cliff.** Growth was bought with 48-month prepaid deals; when those cohorts roll onto $10.99–25.99 en masse, churn, refund fights and chargeback disputes become scheduled events. This is the structural risk in the model `[H10]` |
| **Catch the frustrated incumbent customer.** Category reviews name renewal shock and "Newfold ownership" fatigue at Bluehost/HostGator as the switching trigger; SiteGround/Cloudways are the *premium* escape and Hostinger is the *cheap* escape — if it can survive the renewal page `[X7][H19][H26]` | **Trust damage from enforcement style.** Public threads titled *"Developers beware: Hostinger locked my entire hosting account & refused to return client data"* (Dec 2025) and *"Your account was suspended permanently… not providing any backup"* (Feb 2026) are exactly what an agency finds when it searches. Historical context: Netcraft (2015) reported **90% of the Steam phishing sites they stopped were hosted by Hostinger**; CCIC put Hostinger in the **top 5 phishing hosts** in 2023 (out of the top 20 by April 2026) `[H14][H16][H17][H6]` |
| **Marketplace + creator economy** (Remixable Templates) adds take-rate revenue and network effects infrastructure-only rivals lack `[H22]` | **Security history in an agent-with-root-access era.** 2019/internal-API breach affecting ~14M customers (emails, IPs, hashed passwords); 2015 000webhost leak of 13M plaintext passwords; 2022 site-preview URLs abused for phishing; 2017 accusation of staff-written reviews. A repeat event is worse, not equal, when AI agents hold credentials `[H6][H19][H26]` |
| **Agent-era discoverability as a default feature.** `llms.txt`, SEO audits, heatmaps, Search Console integration are already bundled at $3/mo; "make your site legible to AI crawlers" is the next must-have `[H5][H8][H11]` | **Free/open-weight AI erodes the moat.** Open models + a $5 VPS + a one-time code export undercut a metered AI builder. One reviewer's framing — *"this is another AI company quick to market with no working product"* — is the sentiment to watch `[H21]` |
| **Agencies and multi-site.** A reseller/agency path exists and VPS/cloud are genuine upgrade rungs — *if* per-site isolation and backup escrow improve, since one flagged domain can currently suspend the whole account `[H16][H24]` | **Regulatory/payment-network pressure** on "unlimited" claims, auto-renewal dark patterns and 3–4× renewals; renewal complaints already cite Australia's ACL and "misleading and deceptive conduct" `[H18][X7]` |

</details>

### 3.5 What customers say after running a business on Hostinger

**The happy majority — and it is a majority.** Trustpilot ~4.7★ (aggregators count tens of thousands of reviews; the profile's own AI summary over ~13.9k reviews reads *"reviewers overwhelmingly had a great experience… responsive customer support… user-friendly interface and reliable platform"*); G2 4.4; HostScore 84.9%; independent testers rate the builder 4.5–4.8/5. Praise clusters on: 2–5 minute chat responses, hPanel simplicity, "one place for domains, hosting, email and backups," an AI that generates a working site in 2–3 minutes, and near-100% measured uptime. `[H9][H13][H20][H21]`

**The unhappy ones — five themes, ranked by recurrence.**

1. **Renewal shock (by far the most common).**
   *"Renewal notification: from $140 to $310 over two years without promotional discounts."* `[H10]`
   *"They're not just increasing prices every year for the same service. They're charging existing customers prices closer to higher-tier plans while keeping them on the same current plan and features. Meanwhile new customers get large discounts for the same or similar services."* — r/Hostinger, May 2026 `[H18]`
   *"I signed up for the advertised low intro price… at renewal the cost increased dramatically, far beyond what was reasonably expected"* (a pattern the same analysis documents across budget hosts). `[X7]`
2. **Abuse enforcement that destroys businesses.**
   *"They suspended my entire VPS, which hosts several domains, active services, and thousands of customers, because they allegedly detected 'fraud' on a single domain… I was trapped in an AI-driven process that repeatedly requested documents without actually solving anything… the company automatically blocks everything, prevents access even to unrelated files and databases, and then simply washes its hands of the damage."* — Trustpilot, 2026 `[H13]`
   *"They took down all websites. They refused to give me any data… I just want a backup of ONE client's website so I can move away from Hostinger forever."* — r/Hostinger, Dec 2025 `[H16]`
   *"Due to severity of the abuse report, we cannot unsuspend OR provide backup."* — support reply quoted on r/Hostinger, Feb 2026 `[H17]`
3. **VPS throttling and undeclared CPU limits.**
   *"Complete shutdown of my VPS due to 'resource limitations'… allegedly used 75% of the CPU for 'a few hours' — a vague criterion with no clear basis… then restricted again — this time for using only 20%… limitations are not clearly communicated at the time of purchase."* `[H14]`
   *"Hostinger has gone completely downhill. It is borderline SCAM at this point. They brick your VPS by throttling and hold it hostage for a week. They offer upgrade and yet it solves nothing."* `[H15]`
4. **Support that cannot escalate.**
   *"First you need to FIND where is the support chat, and there's no such thing as tickets… you need to beg a stupid and useless AI bot to call a human… she ignored my answers… you can't even close the chat yourself."* `[H21]`
   *"8 different people have responded in a week and said 'let us check on that we'll get back' AND NOT 1 HAS. COSTING OUR BUSINESS $$$."* `[H21]`
   *"My website went down repeatedly, often during peak hours… I finally reached my breaking point after a three-hour outage during a product launch."* `[H13]`
5. **Lock-in and migration pain.**
   *"Websites built with Hostinger Website Builder cannot be migrated to VPS or other hosts."* `[H11]`
   *"They tell me I can convert it to WordPress but then much of the work has to be redone including all styling and SEO."* `[H21]`
   *"Five-day website outage, no accountability! Hostinger's DNS migration took my company website offline for five days… refused to cover the five-day outage under its SLA."* `[H13]`

**The balanced verdict that keeps recurring:** *"The cheap host looks best when the site is still young"* and *"Hostinger is best understood as a very capable front door to the modern web, not the final destination for every site that succeeds."* `[H24]`

### Hostinger sources

| # | Source | Type | Date |
|---|---|---|---|
| H1 | Hostinger blog — "Hostinger posts fourth consecutive year of 50%+ growth" (revenue, customers, Horizons 800k, Reach 150k, FT/Statista) — `hostinger.com/blog/financial-results-2025/` | Primary | 18–23 Feb 2026 |
| H2 | webhosting.today — FY2025 growth + USD equivalent — `webhosting.today/2026-02-18/hostinger-reports-51-revenue-growth-in-2025-reaches-e275-4-million/` | Trade | 19 Feb 2026 |
| H3 | Hostinger blog — **AI Builder launch** (Žirgulė quote, "agentic era", one project/one account) — `hostinger.com/blog/ai-builder-launch/` | Primary | 18 Aug 2026 |
| H4 | Hostinger blog — **Hostinger Agent launch** (91% self-resolution, AI CX Engineers, paid agentic tiers, Ecommerce July 2026, "5 million clients") — `hostinger.com/blog/agent-launch/` | Primary | 2 Sept 2026 |
| H5 | Max Productive — Hostinger AI Website Builder hands-on (credits, top-up pricing, export rules, renewals) — `max-productive.ai/ai-tools/hostinger-ai-website-builder/` | Reviewer | 27 Aug 2026 |
| H6 | Wikipedia — Hostinger (history, ownership, subsidiaries, breaches, phishing rankings) — `en.wikipedia.org/wiki/Hostinger` | Tertiary | updated Aug 2026 |
| H7 | unicorns.lt — Kodee saves >€9M/yr, 350+ tasks over MCP | Trade | 11 Sept 2025 |
| H8 | Max Productive — Hostinger Horizons review (plan tiers, credits, Lovable/Bolt comparison) — `max-productive.ai/ai-tools/hostinger-horizons/` | Reviewer | 17 Feb 2026 |
| H9 | checkthat.ai — Hostinger reviews summary (renewal 250–550%, support, G2/Trustpilot scores) — `checkthat.ai/brands/hostinger/reviews` | Aggregator | 30 Mar 2026 |
| H10 | checkthat.ai — Hostinger pricing, renewals and refund mechanics — `checkthat.ai/brands/hostinger/pricing` | Aggregator | 30 Mar 2026 |
| H11 | HostScore — Hostinger review 2026 (cons list, no-export finding, user quotes) — `hostscore.net/review/hostinger/` | Reviewer | 2 Sept 2026 |
| H12 | itbrief / itbrief.asia — AI Builder for web apps & sites (backend provisioning, Žirgulė quote) — 19 Aug 2026 | Trade | 19 Aug 2026 |
| H13 | Trustpilot — Hostinger reviews + platform summary (suspension, outage, support verbatims) — `trustpilot.com/review/hostinger.com` | Reviews | 5 Sept 2026 |
| H14 | r/Hostinger — "Hostinger is limiting the resources of my VPS and I'm losing my clients" — `reddit.com/r/Hostinger/comments/1q8vx5j` | Forum | 10 Jan 2026 |
| H15 | r/Hostinger — same thread, corroboration on throttling | Forum | Jan 2026 |
| H16 | r/Hostinger — "Developers beware: Hostinger locked my entire hosting account & refused to return client data" — `reddit.com/r/Hostinger/comments/1pdumzi` | Forum | 4 Dec 2025 |
| H17 | r/Hostinger — "Your account was suspended permanently" (support refusing backups) — `reddit.com/r/Hostinger/comments/1rcvzn7` | Forum | 23 Feb 2026 |
| H18 | r/Hostinger — "Check your renewal cost!!" (unnotified fee, Australian Consumer Act claim) — `reddit.com/r/Hostinger/comments/1t2xqx4` | Forum | 3 May 2026 |
| H19 | bearhost — Hostinger review 2026 FAQ (uptime, VPS quality, email, domain, refund nuance) — `bearhost.com/blogs/hostinger-review` | Reviewer | 16 May 2026 |
| H20 | allaboutcookies — Hostinger Web Builder review 2026 (4.5★, features score, zero transaction fees) — `allaboutcookies.org/hostinger-review` | Reviewer | 31 Jul 2026 |
| H21 | websitebuilderexpert — Hostinger Website Builder / Horizons reviews (plan prices, renewal, complaints) — `websitebuilderexpert.com/website-builders/hostinger-website-builder-review/` | Reviewer | 27 Apr 2026 |
| H22 | checkthat.ai brand profile — Remixable Templates marketplace, €182.4M FY2024, Impulso, Niagahoster | Aggregator | 3 Nov 2025 |
| H23 | Netcraft (2015) and Cybercrime Information Center (2023) phishing-host rankings, as summarised in `[H6]` | Third-party via Wikipedia | 2015/2023 |
| H24 | windowsforum — "Hostinger in 2026: AI-Powered Budget Linux Hosting" (strategy read, gaps: no phone, no Windows, no dedicated) | Trade | 15 Jun 2026 |
| H25 | roconpaas — "10 Best Hostinger Alternatives 2026" (comparison table of what Hostinger lacks: SLA, phone, PCI, backups, mailbox caps) | Vendor/affiliate | 21 Aug 2026 |
| H26 | onlinemediamasters — hostile but detailed Hostinger review (fake-reviews allegation, 14M breach, 1GB email caps, brand-ambassador criticism) | Reviewer | 9 Jul 2025 |

---

## 4. GoDaddy

### 4.1 Who they are

| | |
|---|---|
| Founded / HQ | 1997 (as Jomsee Godbe; renamed GoDaddy 1999); Tempe, Arizona; **NYSE: GDDY** |
| Positioning | *"We serve more than 20 million customers globally"*; ~3 decades of SMB brand equity; the domain funnel is still the largest SMB acquisition surface in the category `[G1][G3]` |
| FY2025 | Revenue **$4.951B (+8.3%)**; Applications & Commerce **$1.889B (+14.3%)**; Core Platform $3.062B (+4.9%); NEBITDA $1.586B (32.0% margin); FCF **$1.599B**; ARR $4.336B; ARPU **$242**; customers 20.42M; commerce gross payments volume **$3.4B (+31%)** `[G2]` |
| Q2 2026 | Revenue **$1.298B (+6.6%)**; A&C $514.8M (+11%) with **46.8% segment EBITDA margin (+250bps)**; Core Platform $783.2M (+3.9%); NEBITDA $434.1M (33.4%, +210bps); FCF $443.5M (TTM $1.73B); ARR $4.421B (+5.7%); **ARPU $250 (+8.7%)**; customers **20.5M (+22k QoQ, ≈+0.1%)**; retention **>85%**; >50% of customers hold ≥2 paid products, **>70% in the Airo cohort**; net debt $2.7B (1.4×) `[G1][G2][G6]` |
| Capital return | **$852M** buybacks year-to-date (≈10M shares) → fully diluted count −7% to 127M; FY26 FCF target ~$1.8B; >95% of FCF to buybacks over 4 years `[G1]` |
| FY2026 guidance | Revenue **$5.215–5.255B (~6% at midpoint)**; Q3 $1.315–1.335B (~5%; toughest compare on prior-year aftermarket); NEBITDA >33%; guidance absorbs ~200bps of cumulative impact from the **.CO registry contract expiry** and from excluding high-value aftermarket transactions `[G1][G6]` |
| Governance | CEO **Aman Bhutani**; CFO Mark McCaffrey; **Investor Night in December 2026** to connect the AI transformation to shareholder value `[G1]` |
| Market reaction | Q2 beat estimates (EPS $1.83 vs $1.69) but shares fell ~7.7% after hours on the growth reset — *"market skeptical"* of the Airo pivot `[G7][G8]` |

**The uncomfortable number inside a good-looking P&L:** growth is entirely price/mix. Customers added ~22k in Q2 and ~9k in Q4-25; Core Platform (60% of revenue) grows 3–4%; bookings growth (5.7%) trails revenue growth (6.6%). A buy-side read summarised both sides: bull = *"Airo is monetising rapidly… this is what a durable self-funding model looks like"*; bear = *"customer base is stagnant… growth is currently almost entirely dependent on extracting more revenue per user."* `[G6][G9]`

### 4.2 What they are building: four workstreams, one bet

The Q2 2026 prepared remarks are the clearest strategy statement of the three companies, because it explicitly accepts cannibalisation. `[G1]`

1. **Airo as an agentic operating system.** What began (Feb 2024) as an AI sidekick generating domains, logos, sites and social campaigns `[G10]` became **Airo.ai** (13 Nov 2025, beta): a planner agent that delegates to specialised agents and asks approval before consequential actions — Airo Agent, App Builder (plain language → deployed web app on GoDaddy hosting), Compliance (privacy/T&C drafts, "independent legal review recommended"), Domain Search & Registration, Website Builder, Logo `[G5]`. Six more agents shipped 2 Dec 2025: Conversations Inbox, Marketing Calendar + Social Posts, Online Appointments, Domain Activation, Domain Protection, and **DIFY (Do-It-For-You)** — an agent that hires human GoDaddy pros for you `[G4]`. **Airo for WordPress** followed 11 May 2026 `[G5]`. In Q2 2026 GoDaddy **unified Airo and Airo AI Builder into one platform, "simply called Airo"**, *"an agentic operating system for small businesses"* that can build *"storefronts and booking systems to client portals."* `[G1]`
   - **Traction:** annualised bookings run-rate **$10M → $50M in one quarter**, *"nearly all organic"*, *"before we have meaningfully leaned into marketing"*, with improving free→paid conversion; being tested inside the **domain purchase path**, their largest funnel. `[G1]`
2. **AI-native operations.** In Care, the Airo voicebot cut the **24-hour repeat-contact rate by >16 points** in Q2; the company says it launched Airo **without hiring additional engineers**, uses Airo internally to automate manual work, and tests across multiple models to control compute/token cost. `[G1][G9]`
3. **Agent-facing APIs.** The **GoDaddy Developer Platform** (launched in Q2 2026) is *"a new generation of domain APIs that allow developers and AI systems to search, purchase, configure and manage domains directly within the tools where they are already working"* — with the **customer relationship and sign-in remaining with GoDaddy** even when the purchase happens through an API. Roadmap: expand to **hosting and commerce**. `[G1][G12]`
4. **Standards for the agentic web.** **ANS (Agent Name Service)** — built on GoDaddy's digital-identity infrastructure, *"enhanced… launched in production"* with **intent to contribute it to the Linux Foundation**; plus **ARD (Agentic Resource Discovery)**, co-developed *"alongside many of the world's leading technology and AI companies"*, for locating tools, skills and agents. Thesis: *"domains are and will remain a trusted foundation for identity and discovery in an AI-driven internet."* ANS monetisation is framed as a *future* growth driver. `[G1][G9][G13]`

**The self-cannibalisation admission.** Two sentences in the Q2 remarks are the most important competitive fact about GoDaddy in 2026: *"we are de-emphasizing a few products as standalone offerings and bringing their capabilities into Airo"*, and *"we expect the need for traditional products, like do-it-for-you services and template-based website builders to narrow and evolve over time."* Management calls it *"a deliberate trade-off"* while Airo scales. `[G1]` Investors' translation: **~40% of revenue (A&C) is being re-platformed mid-flight.** At its September conference rounds GoDaddy added that *"A&C bookings from traditional products is moderating during this period of transition."* `[G9]`

### 4.3 What you actually get, and what it costs

US list prices, intro → renewal, Aug–Sept 2026 `[G14][G15][G16][G17]`:

| Product | Intro | Renews at | Notes |
|---|---|---|---|
| Website Builder **Basic** | $9.99/mo | **$16.99/mo** | custom domain, SSL, SEO tools, Airo content; **no free domain bundled** |
| Website Builder **Premium** | $14.99/mo | **$29.99/mo** | + appointment scheduling |
| Website Builder **Commerce** | $20.99/mo | **$34.99/mo** | unlimited products, **0% platform transaction fee**, GoDaddy Payments ≈2.7% + $0.30 |
| Web hosting Economy → Ultimate | $5.99 → $21.99/mo | $11.99 → higher | 3-year promo terms; Economy = 1 site |
| Managed WordPress | $6.99 / $9.99 / $14.99 | $14.99 / $19.99 / $26.99 | Airo toolkit bundled |
| **.com domain** | $4.99 (or $0.01 in campaigns) | **$21.99–$22.99/yr** | the famous **+2,100%** |
| **Airo Plus** | $59.88/yr | **$95.88/yr** | AI image generation, marketing consultant, SEO optimiser — i.e. the *better* AI is the paid one |
| **Airo AI Builder** | Free / $9.99 / $24.99 / $99.99 per mo (annual) | $14.99 / $36.99 / $149.99 (monthly billing $19.99 / $49.99 / $199.99) | Credit-metered: 50 / 150 / 300 / 750 credits; 1 / 1 / 10 / 50 published sites; **code download supported**; free tier can build but **not publish** |
| Professional email | $1.99/mailbox/mo | higher | resold Microsoft 365 ("Email Essentials") |
| SSL | from $5.99/mo | | still a paid add-on on some plans |
| Pro Site Maintenance | $1.99/mo (Pro $6.99/yr for 5 sites) | | |

**Structural limitations reviewers keep listing** `[G14][G16][G20][G21]`
- **No code export from Website Builder / Websites + Marketing:** *"what you build stays on GoDaddy's platform. If you outgrow it, you rebuild from scratch elsewhere."* The newer Airo AI Builder *does* advertise code download — the portability fix lives in the new product, not the legacy one.
- **Shallow editor:** section-based blocks, *"custom code access: ✗"*, **no multilingual**, limited SEO control. *"Great for a local shop or solo owner… the wrong tool the moment SEO, performance or resale become central — and that line arrives sooner than people expect."*
- **Serial platform churn.** GoDaddy has shipped a new builder roughly every two years and **content does not move between them**; reviewers report *"as support for the older products is slowly waning, you'll be forced to rebuild your website."* The 2026 Airo unification is the next such event, and management says migrating Websites + Marketing at scale *"will take a few months."* `[G21][G3]`
- **Refund window cut from 30 days to 7 days in February 2025**, applied to multi-year renewals; auto-renew on by default; renewal pricing for website plans *"not published at all, leaving customers unable to budget accurately."* `[G11][G15]`
- **E-commerce depth:** fine for a simple catalogue; no app marketplace, weak subscriptions/B2B/multi-currency; POS via the GoDaddy Smart Terminal (with Airo generating product catalogues and answering voice queries about sales trends) `[G10][G11]`.
- **Total cost worked example** (third-party): typical small-business bundle = **$332.62 year 1 → $433.62 years 2–3 → $537.62 year 4+**, i.e. +62% from year 1 `[G11]`.

### 4.4 SWOT — GoDaddy

| **STRENGTHS** | **WEAKNESSES** |
|---|---|
| **Distribution and the domain funnel.** 20.5M customers, ~3 decades of brand awareness, primary-domain leadership in .com plus premium non-.com TLDs, and a large aftermarket business — the cheapest SMB acquisition channel in the industry, now feeding Airo `[G1][G2]` | **The pricing model *is* the complaint.** Loss-leader .com $0.01–4.99 → $21.99–22.99 renewal (+2,100%); hosting $5.99→$16.99; builder $9.99→$22.99; Airo Plus $59.88→$95.88; website-builder renewal *"not published at all"*; typical bundle $333→$538 by year 4 `[G11][G14]` |
| **A cash machine funding the pivot.** ~$1.8B FY26 FCF, >1× NEBITDA conversion, $1.2B cash, 1.4× net leverage, $852M bought back in 7 months. Very few companies can afford to cannibalise themselves `[G1]` | **Trust polarisation.** Trustpilot **4.5★ on ~128–134k reviews** vs **ConsumerAffairs 1.2–1.7★**, Sitejabber ~2.8★, whtop 3.2/10, G2 4.0, TrustRadius 7.4/10; weighted average across platforms ≈3.3/5. The spread *is* the brand problem: *"new customers leave positive reviews after smooth setup; long-term customers who've experienced renewal shock leave the 1★s"* `[G11][G12][G22]` |
| **Care.** 24/7 phone + human support is still a real differentiator for non-technical owners, and AI is measurably improving it (−16pts repeat contact). Retention **>85%**; >50% multi-product, >70% among Airo users `[G1]` | **Care quality decays with tenure.** Reported pattern: year 1 responsive; later, 30–60+ minute waits, script answers, escalations that die, *"upselling attempts during technical support calls"*, 3–5 day email. *"Professional review sites praise 24/7 human support; consumer platforms rate it 1.2–2.5/5 — the divide reflects first interactions vs long-term"* `[G12]` |
| **Full-stack ownership of the SMB bill:** domain + SSL + email + hosting + site + bookings + payments/POS + marketing + human "DIFY" help on one invoice. A&C margin of **46.8%** proves SMBs pay for bundling `[G2]` | **Cannibalisation execution risk.** Airo must replace revenue of the products it absorbs while Core Platform grows 3–4% and aftermarket is volatile; bookings growth < revenue growth is a forward-demand caution flag; Q3 guided to ~5% `[G1][G6]` |
| **Agent-era primitives.** Developer Platform + **ANS** + **ARD** is an early, credible claim on "identity and discovery for agents", strengthened by offering ANS to the **Linux Foundation** `[G1][G9]` | **Dark-pattern reputation, documented and specific.** Auto-renew on by default with buried opt-out; charges reported *after* disabling auto-renew; verification-code bugs that lock users out of cancelling for 7 days; add-ons auto-added at checkout (M365 Email Essentials, Websites + Marketing Premium); 10-year auto-renewals at $235/yr `[G11][G19][G23]` |
| **Airo's product quality beats the brand's reputation.** *"It's way better than I thought"* (2026 hands-on); site generated in under two minutes; one prompt → brand kit; strong for local service businesses `[G16][G24]` | **Generic output, paywall creep.** *"It's a guided generator, not a creative one… competent and completely generic… looks like roughly four hundred thousand other GoDaddy sites."* Same reviewer: *"watch whether more of Airo's AI keeps drifting behind the Airo Plus paywall… convenient to enter, costly to stay, impossible to leave with your work intact."* `[G14]` |
| | **Security, with a regulator's stamp.** FTC complaint 15 Jan 2025, order finalised **21 May 2025** (3-0): since 2018 GoDaddy failed to inventory/patch assets, log and monitor, segment shared hosting, use MFA, or secure API connections, producing *"several major security breaches between 2019 and 2022"*; it also misrepresented "reasonable security" and Privacy Shield compliance. Remedy: ban on security misrepresentation, comprehensive program (180 days), **biennial independent assessments from 2026**. No fine; a permanent asterisk `[G18][G25][G26]` |

| **OPPORTUNITIES** | **THREATS** |
|---|---|
| **Convert 20.5M accounts into agentic accounts.** Airo hit a $50M run-rate *"before marketing"* and before it is wired into the domain funnel; second-product attach is faster in the Airo cohort; management says customers *"just want to interact with one platform that can get everything done."* That is a well-shaped ARPU ladder `[G1][G9][G13]` | **The funnel itself commoditising.** If agents buy domains through a registry's or another registrar's API, GoDaddy becomes a backend with 46.8% margins under price attack. Its own fix — agent APIs where *"sign-in remains with GoDaddy"* — concedes that **agents, not humans, are the buyer** `[G1][G13]` |
| **Own agentic identity/discovery.** ANS + ARD + Linux Foundation could make GoDaddy the trust layer of agent traffic; management separately says it is *"working to improve visibility and sentiment in AI search results"* — i.e. treating LLM answers as a channel to manage `[G9][G13]` | **Open-weight AI erases the moat.** If a $5/mo VPS plus an open model produces the same brochure site, the monetisable surface shrinks toward domain renewals — GoDaddy's slowest-growing asset (+3.9%) `[G2][G6]` |
| **Local service businesses** (bookings, POS, conversations inbox, invoicing) — the segment that wants one bill and a phone number, under-served by Hostinger and over-served by Shopify `[G4][G5]` | **Regulatory exposure.** The FTC order plus consumer-protection scrutiny of auto-renewal and refund windows (the 7-day policy is exactly the kind of detail enforcement actions cite) `[G11][G18]` |
| **Do-It-For-You as a margin product.** DIFY routes customers to paid human experts — high-margin, and something pure-software rivals won't staff `[G4]` | **Equity impatience with a multi-year transformation:** −7.7% post-Q2 despite an 8% EPS beat; "transformation" narratives need patience the market has not shown `[G7]` |
| **Portfolio pruning + buybacks as the value story.** Management says it will still evaluate M&A on *"strategic fit, financial accretion and technology integration"* but now *"has more flexibility to build products internally"* — fewer, better products, higher ARPU `[G9][G13]` | **Share leaking at both ends.** Weebly −15% (being phased out) and GoDaddy Builder flat on share while **Shopify went 4.7%→5.2% of all websites and Wix +32.6% YoY** `[X1][X2][X3]` |

### 4.5 What customers say after running a business on GoDaddy

**Positive themes.** Ease and completeness dominate the 4–5★ band: *"smooth setup experiences and accessible 24/7 support"*; one bill for domain + email + site + SSL + booking; a generated site in under two minutes; and several 2026 reviewers who expected a bad AI and did not get one `[G12][G16][G24]`. Domain transfer mechanics, the aftermarket, and the existence of a phone number are the most-cited reasons people stay. `[G11][G27]`

**Negative themes — remarkably consistent across every platform.**

1. **Billing as the defining experience.**
   *"I just discovered that GoDaddy has automatically renewed our domains for a whopping 10 years at $235 each! No long-term renewal discount. No long-term customer discount. No way to adjust/cancel this automatic transaction."* `[G19]`
   *"Auto-renewed without signing up, for two more years and twice the price. Uses dark pattern, obscured communication so it's not visible when purchased."* `[G28]`
   *"I was told I was outside the refund window (7 days for multi-year renewals) and that no refund or adjustment to a shorter term could be offered."* `[G11]`
2. **Cancellation as an ordeal.**
   *"They wouldn't let me cancel their auto-renew billing… 'nothing can be done, system won't let me remove your card!' Filed a BBB and suddenly they were able to remove my card from auto-bill."* `[G23]`
   *"They send a code to verify cancellation, but the code gives an error message… after 5 attempts it LOCKS YOU OUT from cancelling for 7 days. So it auto renewed."* `[G23]`
   *"Everything costs an extortionate amount… it will say $14 today but there'll be an auto-renewal of $440 in a month."* `[G29]`
3. **Support decay plus upselling.**
   *"I've been with them for almost 9 years and each year they go up in price and down on service. They add services to your bill without your authorization."* `[G30]`
   *"I was upsold to a new hosting plan and 'restore service' that I never needed. At every step the process was vague, confusing, and designed to make me dependent on their support team."* `[G29]`
   *"It feels like I am dealing with my car mechanic, not a software company."* `[G23]`
   *"Over 19 years of loyal [service] and ramping costs… I was never offered any retention bonus. They just want to sell you more."* `[G23]`
4. **Product and UX hostility.**
   *"They've targeted their UX sooo badly to try and upsell that you cannot find the links to the most basic services you paid for. I had to open the help chat just to navigate to my damn 'manage domains' area. They have also switched to dynamic pricing for renewals."* `[G23]`
   *"The website randomly went offline for 4 days with no explanation, or apology… they have lost my customer data."* `[G28]`
   *"I spent a hour on customer service chat and am not entirely sure I was even speaking to humans."* `[G28]`
5. **Expensive rescue economics.**
   *"Recent domain redemption fees up to five times the original registration cost — nearly $600 for domains worth approximately $200."*
   *"When I started using their discount domain club it cost me $89.99. Today that is now $332.57."* `[G23]`
6. **Lock-in.**
   *"Their website builder is lousy and they misrepresent the alleged value of websites."* `[G23]` And even a sympathetic Airo review closes on the same point: *"fast on-ramp with an expensive back end."* `[G14]`

**One nuance worth writing down:** the GoDaddy complaint set is overwhelmingly about **billing and cancellation**, not uptime. That gives the three companies three different trust failures — GoDaddy = *being charged*, Shopify = *money held*, Hostinger = *account locked*. Any challenger positioning against all three must answer all three asymmetries separately.

### GoDaddy sources

| # | Source | Type | Date |
|---|---|---|---|
| G1 | **GoDaddy Q2 2026 Financial Results — Prepared Remarks** (Airo unification, $50M run-rate, Developer Platform, ANS/ARD, de-emphasis quote, guidance, buybacks) — `s23.q4cdn.com/406380394/files/doc_financials/2026/q2/GDDY-Q2-2026-Earnings-Prepared-Remarks.pdf` | Primary | 30 Jul 2026 |
| G2 | GoDaddy Q2 2026 earnings press release (SEC Ex-99.1) — `sec.gov/Archives/edgar/data/1609711/000160971126000087/gddyex991-20260630xq2earni.htm` | Primary | 30 Jul 2026 |
| G3 | GoDaddy Q4 2025 earnings call transcript (W+M migration "will take a few months", FY25 highlights) — `fool.com/earnings/call-transcripts/2026-04-22/godaddy-gddy-q4-2025-earnings-transcript/` | Transcript | 24 Feb / 22 Apr 2026 |
| G4 | GoDaddy via 3BL — "Airo Accelerates… six new AI agents" (Conversations Inbox, Appointments, Domain Activation/Protection, DIFY) — `3blmedia.com/news/godaddy-accelerates-airoai-momentum-new-ai-agents-small-business-growth` | Primary (distributed) | 2 Dec 2025 |
| G5 | GoDaddy via PRNewswire — **Airo.ai launch** (agent list, capabilities, Pani quote) — `prnewswire.com/news-releases/godaddy-brings-agentic-ai-to-small-businesses-with-launch-of-airoai-302614911.html` | Primary | 13 Nov 2025 |
| G6 | Q2 2026 earnings-call digests (ARPU $250, 22k customers, bookings, margins) — `stocknow.ai/.../gddy_q2-2026-earnings-call`, `finance.yahoo.com/quote/GDDY/earnings/GDDY-Q2-2026-earnings_call-658570.html`, `finance.biggo.com/quote/GDDY/earnings-call/US_GDDY_2026-07-30` | Relay | 30–31 Jul 2026 |
| G7 | 24/7 Wall St. — Q2 2026 reaction (EPS $1.83 vs $1.69; shares −7.67%) — `247wallst.com/cards/godaddy-inc-q2-2026-earnings-gddy-...` | Trade | 30 Jul 2026 |
| G8 | Investing.com — "Q2 2026 slides: AI push drives results, market skeptical" — `in.investing.com/news/stock-market-news/godaddy-q2-2026-slides-...` | Trade | 30 Jul 2026 |
| G9 | Investing.com conference transcripts — **Goldman Sachs Communacopia 2026** (9 Sept) and **Citi Global TMT 2026** (8 Sept): Airo cohort attach, "one platform", Developer Platform, ANS monetisation, care/eng efficiency, "launched Airo without hiring additional engineers" — `in.investing.com/news/stock-market-news/godaddy-at-goldman-sachs-communacopia--technology-conference-2026-ai-push-93CH-5586921`, `investing.com/news/transcripts/godaddy-at-citis-2026-global-tmt-conference-airo-drives-strategy-93CH-4892159` | Transcript | 8–9 Sept 2026 |
| G10 | Marketing Dive — original Airo launch (Feb 2024), Smart Terminal voice queries, product catalogue generation — `marketingdive.com/news/godaddy-airo-generative-ai-tool-small-business-campaign/708453/` | Trade | 26 Feb 2024 |
| G11 | checkthat.ai — GoDaddy pricing (renewal multipliers, 7-day window, bundle cost ladder, refund friction, dark patterns) — `checkthat.ai/brands/godaddy/pricing` | Aggregator | 22 Jun 2026 |
| G12 | checkthat.ai — GoDaddy reviews (platform score table, support decay pattern) — `checkthat.ai/brands/godaddy/reviews` | Aggregator | 30 Mar 2026 |
| G13 | Finsee / other Q2 2026 reviews (bull/bear framing, FCF, guidance) — `finsee.ai/earnings/gddy/2026/q2/en/` | Analyst-ish | 30 Jul 2026 |
| G14 | Litmus Tools — GoDaddy Airo review 2026 (renewal doubling, no code export, generic output, upselling, Reddit sentiment) — `litmustools.com/review/godaddy-airo/` | Reviewer | 27 Jun 2026 |
| G15 | HostAdvice — "GoDaddy Airo Pricing 2026" (three-layer Airo product structure, credit tiers, renewal deltas) — `hostadvice.com/hosting-company/godaddy-reviews/airo-pricing/` | Reviewer | 30 Aug 2026 |
| G16 | HostAdvice — "What is GoDaddy Airo?" and "Is GoDaddy Airo worth it?" (test notes; support said free-with-domain Airo depends on promotions) — `hostadvice.com/blog/website-builders/website-building-with-ai/what-is-godaddy-airo/` | Reviewer | 24 Aug 2026 |
| G17 | aibusinesssites — "GoDaddy Websites Pricing 2026: Real Costs & Hidden Fees" (full add-on stack, hosting renewals) — `aibusinesssites.com/compare/godaddy-websites-pricing-2026-real-costs-hidden-fees` | Vendor comparison | 10 Sept 2026 |
| G18 | **FTC press release** — "FTC Takes Action Against GoDaddy for Alleged Lax Data Security" — `ftc.gov/news-events/news/press-releases/2025/01/...` | Primary regulator | 15 Jan 2025 |
| G19 | WHtop — GoDaddy review page (10-year auto-renewal at $235 quote, control-panel complaints) — `whtop.com/review/godaddy.com` | Reviews | 2026 |
| G20 | themeburn — GoDaddy AI website builder review (closed platform, "limiting") — `themeburn.com/blog/godaddy-ai-website-builder-review` | Reviewer | 1 Feb 2026 |
| G21 | Tooltester — GoDaddy Website Builder review (incompatible version updates; forced rebuilds) — `tooltester.com/en/reviews/godaddy-website-builder-review/` | Reviewer | 7 Aug 2026 |
| G22 | startupowl — GoDaddy domain registrar review (Trustpilot 4.5★/133,757; Reddit "expensive legacy registrar") — `startupowl.com/reviews/godaddy` | Aggregator | 25 Aug 2026 |
| G23 | r/webdev — "GoDaddy Review, why you need to AVOID them!" (cancellation lockout, redemption fees, discount club, UX upsell, 19-year loyalty) — `reddit.com/r/webdev/comments/1jv8xez` | Forum | 14 Apr 2025 |
| G24 | allaboutcookies — "GoDaddy Airo AI Review 2026: It's way better than I thought" + plan/renewal table — `allaboutcookies.org/godaddy-airo-review` | Reviewer | 7 Aug 2026 |
| G25 | Compliance Week / NatLaw Review / Hunton / Parker Poe — FTC order **finalised 21 May 2025** (biennial assessments from 2026, 180-day program, no fine) — `complianceweek.com/regulatory-enforcement/ftc-orders-godaddy-to-upgrade-cybersecurity-defenses-following-three-breaches/36022.article` | Legal press | 22–24 May 2025 |
| G26 | Arizona Republic — "FTC orders GoDaddy to upgrade online security" (nine incidents; GoDaddy response) — `azcentral.com/story/money/business/2025-01-15/ftc-orders-godaddy-to-upgrade-online-security/...` | Trade | 15 Jan 2025 |
| G27 | saasflags — "Is GoDaddy a Scam or Legit?" (BBB auto-renew filings, marketing complaints) — `saasflags.com/products/godaddy/is-it-a-scam` | Aggregator | 20 May 2026 |
| G28 | Trustpilot (godady.com mirror profile) — 2026 1★ verbatims (auto-renew, offline 4 days, refund refusals) — `trustpilot.com/review/godady.com` | Reviews | Dec 2025 – Jun 2026 |
| G29 | ProductReview.com.au (p.3) — 2025–26 Australian SMB reviews (upsell, restore-service, $14→$440) — `productreview.com.au/listings/godaddy?page=3` | Reviews | 2025–26 |
| G30 | ConsumerAffairs — GoDaddy reviews p.5 (9-year tenure decay, SSL billed 2 months early, 50-minute cancellation waits) — `consumeraffairs.com/internet/godaddy.html?page=5` | Reviews | 2025 |

---

## 5. Shopify

### 5.1 Who they are

| | |
|---|---|
| Founded / HQ | 2006, Ottawa (Tobias Lütke); **NYSE + TSX: SHOP** |
| FY2025 | Revenue **$11.556B (+30%)**; GMV **$378.441B (+29%)**; gross profit $5.555B; operating income ~$1.468B; FCF ~$2B (**17% margin**, 10th consecutive quarter of double-digit FCF margin); **$2B share repurchase program**; B2B GMV +96%; offline +27%; international +36–37% `[S1][S14]` |
| Q1 2026 | Revenue $3.170B (**+34%** — fastest in 4+ years); **GMV $100.743B (+35%)**; MRR $212M; gross profit $1.546B; operating income $382M (+88%); FCF $476M (15%); GAAP net income distorted by a **−$1.08B** non-cash mark on equity investments (adjusted ≈ +$360M) `[S2][S15]` |
| Q2 2026 | Revenue **$3.583B (+34%; +33% cc)**; **GMV $115.567B (+32%)** — 5th straight quarter above 30%; gross profit $1.708B (+31%); operating income **$488M (+68%)**; GAAP net income $1.5B (includes **+$1.06B** investment gain; adjusted net income $439M); **FCF $654M = 18% margin**; Q3 guide: revenue low-30s, gross profit mid-to-high 20s, OpEx 33–34% of revenue, FCF margin high-teens to low-20s `[S1][S9][S16]` |
| Revenue mix | Merchant solutions $2.78B in Q2 (+37%) vs subscription solutions (+21–22%) → **structural gross-margin compression**; take rate ≈3.05% FY25 → ~3.14% annualised `[S9][S17]` |
| Base | Shopify now says only "millions of businesses in 175+ countries". **Store Leads: ~2.86M live storefronts (May 2026)**; BuiltWith detects Shopify code on ~5.2–6.9M domains; **47,000+ Plus stores**; ~1.85–2.0M merchants on Shopify Payments, **67% of GMV** (Q1-26 GPV $67B; FY25 $248.1B at 65.6% penetration); 100k+ partners; **17,000+ apps**; **~90% of Q1-26 revenue from merchants >1 year on the platform**; merchants >$100M GMV nearly doubled in two years; Q1-26 enterprise signings include **LVMH, Mulberry, Balmain, Orvis** `[S18][S19][S20][S2][S17]` |
| Share of e-commerce | ~**14% of US e-commerce by GMV** (up from ~12%); 10.3–10.6% global e-commerce platform category share `[S19][S21]` |
| Stock context | Priced like a premium-growth asset (~90–95× trailing P/E, ~45× forward FCF per one 2026 analysis); fell **13.5% on the Q1-26 guidance print** despite 34% growth; −33% YTD at one point in 2026 after peaking ~$182; consensus targets clustered ~$160; Q2-26 print initially +18% intraday `[S22][S23][S17]` |

### 5.2 What they are building: become the substrate of AI commerce

The through-line of 2025→2026 Shopify: **if discovery moves into conversations, own the structured product data and the checkout inside those conversations.**

| Layer | State as of Sept 2026 | Why it matters |
|---|---|---|
| **Shopify Catalog** | *"the search infrastructure for shopping: a global, structured dataset… spanning billions of products"*; **>1B products** structured with clean attributes, real-time price and inventory; **merchants with eligible products are in Catalog by default**; syndicates to ChatGPT, Copilot, Google AI Mode, Gemini app, Shop — *"no extra apps or manual feeds"* `[S3][S5]` | Catalog-backed AI search **converts at 2× the rate** of scraped-data search and ~**80% higher than traditional organic search**. Product-data quality becomes the merchant's moat — and Shopify's `[S5][S6]` |
| **UCP (Universal Commerce Protocol)** | Open standard for agentic commerce **co-developed with Google**, spanning discovery→checkout; *"Shopify merchants are UCP-enabled by default, so any surface that builds with it incorporates a merchant's specific checkout rules, discounts, and customizations"*; opened for any developer at Spring '26; a community tracker counted **~8,000 verified UCP-enabled stores, ~99% on Shopify** `[S3][S24]` | If UCP wins, Shopify wins by being the reference implementation — the role HTML and checkout played for the open web |
| **Connectors** | Built for **Claude, ChatGPT, Perplexity, Manus, Replit, Vercel**, plus vibe-coding platforms like **Lovable**, *"so merchants can build on Shopify however they choose"* `[S6]` | Neutralises the "AI will disintermediate us" thesis by making Shopify the plumbing inside the attacker's product |
| **Agentic Storefronts in Admin** | One command centre: per-channel toggles for discovery (Catalog) and direct checkout; unified orders/revenue/conversion across ChatGPT, Copilot, AI Mode, Gemini and Shop; "search intelligence" showing the AI queries you rank for **and don't**; Sidekick telling you what to fix (add specs to titles, improve descriptions, fill missing attributes) `[S3]` | The counter-argument to headless. CFO Jeff Hoffmeister, Sept 2026: *"We're the only one that has the admin that allows you to work with all the different AI and LLM platforms directly from one admin, one pane of glass."* `[S25]` |
| **Catalog API + developer monetisation** | New: **Sign in with Shop** (personalised results), **image search**, **product lookup**, richer attributes (size/colour); *"developers and partners will soon be able to earn revenue when their Catalog-powered experiences drive sales"* `[S3]` | Turns every app and hobby project into another Shopify distribution surface — the flywheel the App Store started in 2009, re-cut for agents |
| **Sidekick + Magic (free)** | Sidekick handled **~34M merchant conversations in Q2**, daily active merchant usage **+3.6×**; **no token or credit caps yet** (as of the Winter '26 Edition); Magic free on every plan; Sidekick usage → **+8% of new merchants reaching 5 orders in their first 15 days**; usage shifts from setup (50% of early sessions) to analytics/reporting (40% for mature merchants); **custom-app generation is gated to Grow and above** `[S6][S16][S13][S26]` | Merchant *activation* is the retention lever; free AI is the acquisition lever — the direct contrast with Hostinger's credits and GoDaddy's paywalled Airo Plus |
| **Model strategy = cost strategy** | *"Committing to 'AI leverage': frontier intelligence for complex tasks while distilling smaller, cost-efficient models for repeatable merchant workflows"*; caching, open-weight models, and *"20 years of transaction data"* as the tuning asset; headcount flat while operating income +68% `[S16][S25]` | AI doubles as margin defence: OpEx guided down to 33–34% of revenue `[S9]` |
| **Everything else** | Spring '26 Edition: **150+ updates**, including **native B2B opened to more merchants**; Shop App growth; POS/offline +27%; Markets/tax/duties; Shopify Capital; **Shop Pay (150M+ users)** as a conversion weapon. Logistics remains partner-led: Shopify **sold** its logistics arm and Deliverr to Flexport in 2023 (taking a 13% stake) and keeps Flexport as official logistics partner for Shop Promise — it is not rebuilding owned fulfilment `[S3][S1][S27]` | "Full stack for a business" — the original anti-headless argument, now with an AI channel layer on top |

**The paradox Shopify names itself.** Independent analysis of the quarter: *"Shopify and Amazon have already restricted external agent activity inside their ecosystems for exactly this reason"* — the same instinct that drives them to embrace UCP. The question that decides the next five years: *"does Shopify become the indispensable supplier to AI shopping agents, or a commoditised backend they route around?"* Its own numbers (3× traffic/orders, long-tail skew, 2× conversion) argue for the first; OpenAI–Amazon consumer partnerships and undisclosed absolute volumes argue "unproven." `[S17][S6]` Management's own framing at Q2: AI is *"a complement to search, rather than a substitute for it"* (Finkelstein), and at Goldman: *"we're really only six to nine months into meaningful agentic commerce traffic patterns."* `[S5][S25]`

### 5.3 What you actually get, and what it costs

US list plans, 2026 `[S12][S28][S29]`:

| Plan | Monthly | Billed annually | Third-party-gateway penalty | Notes |
|---|---|---|---|---|
| Starter / "sell via links & social" | from **$5** | — | higher | not a real storefront |
| **Basic** | **$39** | ~$29 | **2%** | the highest-fee tier; viable until ~$15k/mo revenue, after which fees exceed the cost of upgrading |
| **Grow** | **$105** (some comparisons list ~$65–$79 depending on region/term) | ~$79–$99 | 1% | usually cheaper than Basic past ~$30k/mo |
| **Advanced** | **$399** | ~$299 | ~0.5–0.6% | advanced reports, duties, custom apps |
| **Plus / Enterprise** | **$2,300+/mo**, revenue-linked, negotiated | — | negotiated | checkout control, expansion stores; ~47k stores |

**The real bill** (reconstructed from fee calculators, TCO write-ups and merchant posts) `[S12][S28][S30][S31][S32]`:

| Line | Typical |
|---|---|
| Card processing (Shopify Payments, US) | 2.9% + $0.30 (Basic) → ~2.5% + $0.30 (Advanced); in-person 2.4–2.5% + $0.10 |
| Non-Shopify-Payments gateway | **+0.5% to 2%** per sale — on $20k/mo of sales on Basic that is ≈$400/mo |
| Markets / duties / FX | ~0.5–0.85% per eligible order (≈1.5% with a third-party processor) |
| Apps | $10–$50 each; **$50–$200/mo typical**; guidance: *"if you're spending over $300/month on apps, audit what Shopify now includes for free"* |
| Theme | $0–$350 one-time (900+ themes; few strong free ones) |
| Shopify Tax | per-taxable-transaction fee added to the subscription invoice |
| Realistic small-store total | **$150–$400/mo** on Basic; $200–$500/mo at modest volume; year-1 setup often quoted **$1,700–$3,700** incl. apps + theme |
| Feature gates | advanced reporting on higher tiers; **checkout customisation on Plus**; Sidekick custom-app generation on Grow+; native subscriptions basic (serious brands pay ~$300/mo for Recharge/Skio) |
| Migration **out** | **$2,000–$8,000** simple / **$10,000–$30,000** complex, 2–4 to 6–12 weeks, with redirect mapping as the SEO risk line |

### 5.4 SWOT — Shopify

| **STRENGTHS** | **WEAKNESSES** |
|---|---|
| **The checkout is the moat.** Highest conversion of any major hosted platform; **Shop Pay** (150M+ users) as a one-click network; **67% of GMV** through Shopify Payments. Every other surface — agents, social, marketplaces — has to route through it `[S2][S31][S21]` | **Cost creep is the #1 merchant complaint.** "$39" is a marketing number: real small stores land at **$150–$400/mo** with apps and themes, plus a 2% penalty for refusing Shopify Payments and ~3% processing; fixed $0.30 crushes low-AOV/dropshipping economics `[S12][S28][S32]` |
| **Performance and ops.** Fastest average page load among hosted platforms; Core Web Vitals pass ~62–75% (mobile) vs ~35–43% for WordPress.org; shortest enterprise implementation (~3.2 months average) `[X5][S21]` | **Everything good sits on a higher tier.** Advanced reports, checkout UI control (Plus), custom app generation (Grow+), staff/account limits; *"limited number of free themes"*; app subscriptions stack into the "real" price `[S28][S33]` |
| **Data gravity → agentic advantage.** 1B+ structured products, 20 years of transaction data, default-on syndication. Competitors can copy the assistant; they cannot copy the catalogue or the conversion advantage it produces `[S5][S6]` | **The long tail distorts the story.** ~2.86M live storefronts vs 5–7M detected domains; only **13.95% of stores do >$10k/month**; live-store growth ~1.1% QoQ in Q2-26 — a maturing install base, shifting from land-grab to revenue-per-merchant `[S19][S34][S20]` |
| **Operating leverage with real cash.** Operating income +68% on flat headcount, 10 quarters of double-digit FCF margin, $2B buyback; ~90% of revenue from merchants >1 year — not a churn-and-burn acquisition machine `[S9][S1][S17]` | **The platform is a risk manager, not a bank.** Payout holds, reserves, **120–365-day** fund retention on termination, >1% chargeback flags, admin access removed so chargeback evidence *cannot be submitted*, DMCA suspensions sitting in a queue for 60 days. *"A significant number [of negative reviews] are from merchants reporting frozen funds and poor support escalation"* `[S7][S8][S35][S36]` |
| **Ecosystem breadth.** 17,000+ apps, 100k+ partners, POS/B2B/Markets/Capital/Shipping, headless + Hydrogen. CFO: Shopify *"does 12, 18, 20 things for the merchant"* `[S25][S31]` | **GAAP noise and macro coupling.** Large non-operating swings from equity stakes (Affirm, Global-E, Flexport); revenue tracks GMV — a consumer-cycle proxy — with Shopify Capital credit risk stacked on it: transaction + loan losses **$58M (Q3-24) → $148M (Q3-25)** `[S17][S22]` |
| **Enterprise momentum as proof.** 47k Plus stores; $100M+ merchants nearly doubled in 2 years; LVMH/Mulberry/Balmain/Orvis in one quarter; ~14% of US e-commerce `[S18][S2][S19]` | **Support is AI-first with thin escalation.** Chat 24/7 (a published test got a human in ~4 minutes for a theme question) but *"adequate for basic questions, frustrating during account-level issues like payment freezes or compliance holds"*; no merchant phone line `[S34]` |

| **OPPORTUNITIES** | **THREATS** |
|---|---|
| **Write the agentic protocol.** UCP with Google + Catalog + developer revenue-share = default rails for AI shopping; *"owning the standard, not just a seat at the table"* `[S17][S3]` | **Disintermediation by the assistants themselves.** If OpenAI/Google own discovery *and* checkout, the storefront flattens into an API call and the **customer relationship and ad revenue** move up-stack. OpenAI's Instant Checkout plus Amazon investment is already framed by one research house as possibly *"winning"* consumer agentic commerce `[S17]` |
| **B2B, international, offline** all grow ~2× platform (B2B +96%, international +36–37%, offline +27%); Spring '26 opened native B2B to far more merchants `[S14][S3]` | **Margin mix.** Merchant solutions (+37%) outgrowing subscriptions (+21%) compresses gross margin — *"Q3 guidance explicitly forecasts gross profit growth lagging revenue growth"*; rising LLM costs from Sidekick usage (managed via distillation/caching) remain a live cost line `[S9][S16][S25]` |
| **Sell the gap.** "Search intelligence: the queries you don't rank for" is already the shape of an ad/auction product; long-tail, spec-driven AI queries (*"brake rotor for a 2019 F-150, front, drilled"*) are high-intent inventory `[S6][S3]` | **Valuation / multiple compression.** ~90–95× trailing P/E, 45× forward FCF; a −33% YTD drawdown already happened once in 2026; guidance of ~5% growth in a Core segment can re-rate the stock regardless of product wins `[S22][S23]` |
| **Keep absorbing app categories** (email, search, reviews, forms, analytics, now B2B) — every absorbed category is a merchant cost saving *and* a switching-cost increase `[S3][S30]` | **Tariffs, de minimis removal, trade regimes, FX** — named in Shopify's own risk disclosures; management flags them as being mitigated by international expansion and compliance tooling rather than eliminated `[S37][S38]` |
| **Logistics optionality.** The 13% Flexport stake + official-partner arrangement gives Shopify a path back into cross-border fulfilment without owning warehouses `[S27]` | **Low-end attack from both directions.** Hostinger's ~$7–14/mo "web app with a store inside" bundle, and vibe-coded storefronts (Lovable/Bolt/Replit + Stripe/Medusa/Saleor) compress new-merchant acquisition economics that Shopify's Starter tier depends on `[H5][S39]` |

### 5.5 What customers say after running a business on Shopify

**Positive themes (durable and high volume).** Reviewers summarise Reddit sentiment as: *"users generally view Shopify as the gold standard for launching an e-commerce store quickly, praising its ease of use and massive app ecosystem."* What owners actually credit in 2026: checkout conversion, not babysitting infrastructure, an app for every edge case, Magic/Sidekick being free (*"genuinely free, genuinely integrated, and genuinely improving fast"*), and that the store does not fall over at BFCM `[S34][S26][S28]`.

**Negative themes:**

1. **Cost, cost, cost.**
   *"Shopify Basic is $39/month. Grow is $105, Advanced is $399. Then the quiet costs stack: transaction fees up to 2% if you don't use Shopify Payments, apps at $10–50/month each to fill feature gaps, and a theme ecosystem where real customization means hiring a developer anyway."* `[S12]`
   *"Fees (US) 2.9% + $0.30 … The $0.30 fixed fee stings on low-value orders"*; dropshipping *"is still popular but I've seen it cause more churn than any other model — mostly because store owners underestimate costs."* `[S32]`
   *"For $39/month you get a store. But you also get the highest transaction fees… viable only until you reach ~$15k/month in revenue, at which point the transaction fees exceed the cost of upgrading."* `[S30]`
2. **Money and access risk — the serious one.**
   BBB, Aug 2026: *"On July 30th 2026 Shopify restricted both of my stores without clear explanation… I tried to submit this evidence to the chargebacks [and] discovered I had no access to my store admin… Shopify restricted my stores, denied my appeals, and made it impossible to defend myself against chargebacks. Additionally Shopify is holding over $10,000 of my legitimate business funds across both stores for 365 days with no guaranteed release."* `[S8]`
   Trustpilot, Jul 2026: *"They shut off my ability to use Shopify Payments, locked my funds so I couldn't move the money I made into my bank account… made me wait 6 months before getting an answer that my ability to accept payments is disabled permanently."* `[S7]`
   Trustpilot, Jul 2026: *"Shopify Payments has been holding my funds for 25 days with no resolution… more than 10 support tickets… customers are still able to place orders normally, but my payouts remain blocked."* `[S7]`
   Community guidance confirms the mechanics: **chargeback ratio >1% = flagged; standard closures 120 days, up to 365 days for suspected illegitimate commerce; "you won't be able to update [banking details] after termination."** `[S36]`
   Another BBB filing: *"a cleared payout of $12,000 failed to transfer because of an outdated routing requirement… I was systemically locked out from entering new bank details… over 24 months have elapsed."* `[S8]`
3. **Support asymmetry and plan-change billing.**
   *"Their customer service is horrible. Tried to change my plan and ended up with $900 of extra charges that took days of my time to fix. All of it could have been easily avoided if they offered phone support."* `[S35]`
   *"Shopify charged my account $250 without any prior notification… while my account was inaccessible… refund denied, citing an internal 7-day policy."* `[S40]`
4. **Platform churn creeping into themes and operations.**
   *"Shopify is getting more and more cumbersome… a client [got] over $500 in added shipping costs after the fact without any notification"* `[S35]`; and on exit: *"I was eyeing BigCommerce if something were to go wrong with Shopify. I know they can be trigger-happy with Shopify payment bans and then charge extra when wanting to use a different processor."* `[S35]`
   Merchants comparing swaps say: *"BigCommerce is the closest apples-to-apples Shopify swap… fewer forced update issues, app costs tend to be lower at comparable volume"* `[S41]`; *"Squarespace/Wix are fine for small catalogs; above a few hundred SKUs or any real traffic it starts showing its limits"* — i.e. Shopify's moat is real, it is just priced aggressively.
5. **AI-era housekeeping merchants didn't expect.** A practical 2026 warning for anyone already selling on Shopify: agent-facing **Catalog mapping routes custom data into only title, description and category**, and *"the agent-facing Catalog API exposes no merchant metafields at all. If the attribute is not in those three fields, the agent cannot see it."* Structured data is now a revenue lever with thin documentation `[S6]`.

### Shopify sources

| # | Source | Type | Date |
|---|---|---|---|
| S1 | Shopify newsroom — **Q2 2026 results** (revenue $3.58B/+34%, GMV $115.6B/+32%, FCF margin 18%, "monster quarter" quote, risk disclosures) — `shopify.com/news/shopify-q2-2026-financial-results` | Primary | 5 Aug 2026 |
| S2 | Shopify Q1 2026 press release (GlobeNewswire) — GMV $100.743B, MRR $212M, revenue $3.170B, op income $382M, FCF $476M — `globenewswire.com/news-release/2026-05-05/...` | Primary | 5 May 2026 |
| S3 | Shopify newsroom — **Spring '26 Edition: 150+ updates** (Catalog by default, UCP, Agentic Storefronts admin, Catalog API, developer revenue share, B2B) — `shopify.com/news/spring-26-edition-merchant` | Primary | 17 Jun 2026 |
| S4 | Retail TouchPoints / stellagent / ambaum — Q2 2026 AI metrics (3× traffic+orders, 2× conversion, +80% vs organic, 75% long tail, 34M Sidekick conversations, +3.6× DAU) — `retailtouchpoints.com/news/shopify-credits-ai-for-34-revenue-growth-in-q2-2026/620805/`, `stellagent.ai/insights/shopify-q2-2026-ai-search-traffic-3x` | Trade | 5–12 Aug 2026 |
| S5 | Seeking Alpha — Q2 2026 call notes (Q3 low-30s outlook, no new agentic fees, FCF margin trajectory) — `seekingalpha.com/news/4626580-...` | Relay | 5 Aug 2026 |
| S6 | Ambaum Insights — merchant takeaways incl. the metafield/Catalog API limitation — `ambaum.com/insights/shopify-q2-2026-earnings-ai-takeaways` | Analyst note | 12 Aug 2026 |
| S7 | Trustpilot — Shopify (payout holds, verification loops, consumer-side complaints, "no buyer protection") — `trustpilot.com/review/www.shopify.com` and `uk.trustpilot.com/review/www.shopify.com?page=7` | Reviews | Jun–Aug 2026 |
| S8 | **BBB complaints — Shopify Inc.** (restricted stores + 365-day hold; $12,000 locked payout; Shopify Balance freeze; cancelled-subscription billing) — `bbb.org/ca/on/ottawa/profile/online-shopping/shopify-inc-0117-39813/complaints` | Filings | Aug 2026 |
| S9 | Finsee — Q2 2026 segment/margin analysis (merchant solutions $2.78B, mix shift, guidance table) — `finsee.ai/earnings/shop/2026/q2/en/` | Analyst-ish | 5 Aug 2026 |
| S12 | thefrontkit — "Shopify Alternatives 2026" (the "quiet costs stack" quote, per-platform annual cost table) — `thefrontkit.com/blogs/shopify-alternatives-2026` | Reviewer/vendor | 21 Aug 2026 |
| S13 | letstalkshop — "Sidekick vs Magic 2026" (no usage caps yet; custom app generation gated to Grow+) — `letstalkshop.com/blog/shopify-sidekick-vs-shopify-magic` | Reviewer | 21 Apr 2026 |
| S14 | Newsfile / Shopify — "Standout 2025" wrap (B2B +96%, offline +27%, international +36–37%, $2B buyback, FCF margins) — `newsfilecorp.com/release/283507/...` | Primary (distributed) | 11 Feb 2026 |
| S15 | Yahoo Finance — Q1 2026 call summary (equity-investment distortion, guidance) — `finance.yahoo.com/markets/stocks/articles/...` | Relay | May 2026 |
| S16 | Yahoo Finance — Q2 2026 call summary ("AI leverage", distillation, Q3 FCF high-teens–low-20s) — `finance.yahoo.com/markets/stocks/articles/shopify-inc-q2-2026-earnings-225333121.html` | Relay | 5 Aug 2026 |
| S17 | businessmodelanalyst — Shopify SWOT 2026 (disintermediation paradox, take rate, GAAP noise, long tail) — `businessmodelanalyst.com/shopify-swot-analysis/` | Analyst | 24 Jul 2026 |
| S18 | axis-intelligence — Shopify statistics 2026 (Plus 47k stores, $100M+ merchants doubling, LVMH/Mulberry/Balmain/Orvis) — `axis-intelligence.com/shopify-statistics/` | Aggregator | 2 Jul 2026 |
| S19 | justpricing / datarefs / ecommercetrix — store counts, Payments penetration, US share, store-revenue distribution — `justpricing.com/shopify-statistics`, `datarefs.com/statistics/ecommerce/shopify/`, `ecommercetrix.com/ecommerce-statistics/shopify-statistics/` | Aggregator | Jul 2026 |
| S20 | webtonic — store counts and Q2-26 1.1% QoQ growth — `webtonic.io/blog/e-commerce-shopify-statistics` | Aggregator | 21 Jul 2026 |
| S21 | digitalapplied / sitebuilderreport / uithings — performance, CWV, implementation time, market share — `digitalapplied.com/blog/shopify-statistics-2026-platform-growth-data`, `sitebuilderreport.com/website-builder-statistics`, `uithings.com/website-builder-statistics` | Aggregator | 2026 |
| S22 | 24/7 Wall St. — valuation, Shopify Capital losses, stock moves — `247wallst.com/investing/2026-04-10/shopify-eyes-18-upside-after-sharp-2026-selloff/` | Trade | 10 Apr 2026 |
| S23 | tradingkey — SHOP Sep 2026 move + company-specific risk list (gross margin −230bps, multiple, LLM commerce competition) — `tradingkey.com/news/market-movers/262163758-market-movers-shop-20260911` | Trade | 11 Sept 2026 |
| S24 | digitalapplied — Q2-26 "claim ledger": which AI stats are in the press release / 10-Q vs call-only, incl. the ~8,000 UCP-store tracker and the Q1 "13× orders" baseline — `digitalapplied.com/blog/shopify-q2-2026-results-ai-orders-agentic-commerce` | Analyst | 8 Aug 2026 |
| S25 | Investing.com — Shopify at Goldman Sachs Communacopia 2026 (Hoffmeister/Abrams on admin "pane of glass", LLM costs, disintermediation Q&A) — `ng.investing.com/news/stock-market-news/shopify-at-goldman-sachs-conference-ai-may-widen-its-merchant-moat-93CH-2692452` | Transcript | 10 Sept 2026 |
| S26 | adsx — "Shopify Magic & Sidekick AI in 2026" (free on all plans; Magic output quality; Sidekick can act with confirmation) — `adsx.com/blog/shopify-magic-sidekick-ai-features-2026` | Reviewer | 12 Mar 2026 |
| S27 | Supply Chain Dive / FreightWaves / AP — Shopify **sold** Shopify Logistics + Deliverr to Flexport (May 2023, 13% stake), Flexport as official logistics partner for Shop Promise — `supplychaindive.com/news/shopify-sell-logistics-business-flexport-deliverr/649427/` | Trade | May 2023 (verified 2026) |
| S28 | TechnologyAdvice — Shopify review 2026 (plan range, transaction fee mechanics, cons: reporting gating, free themes, user-feedback themes) — `technologyadvice.com/blog/sales/shopify-review/` | Reviewer | 22 Jan 2026 |
| S29 | TrueProfit — Shopify fees calculator 2026 (realistic monthly totals by store size) — `trueprofit.io/blog/shopify-fees-calculator` | Vendor/reviewer | 30 Jun 2026 |
| S30 | wearepresta — TCO + "Basic trap" analysis, migration cost table ($2k–$30k, 2–12 weeks) — `wearepresta.com/woocommerce-hosting-costs-vs-shopify-pricing-which-wins-in-2026/` | Agency | 28 Jul 2026 |
| S31 | brandid / rovela / alidropship — "real monthly cost" tables and alternatives positioning — `brandid.app/blog/best-shopify-alternatives`, `rovela.ai/blog/best-shopify-alternatives` | Vendor comparison | Jul 2026 |
| S32 | bootstrappingecommerce — 7-year testing; POD/dropshipping fee pain; app-spend audit advice — `bootstrappingecommerce.com/shopify-pricing/` | Reviewer | 20 Jan 2026 |
| S33 | technologyadvice + S28 cons list; letstalkshop gating notes | Reviewer | 2026 |
| S34 | startupowl — Shopify review 2026 (Trustpilot 1.5★/4,325, BBB F/1,661 complaints "as reported", support test results, Reddit sentiment) — `startupowl.com/reviews/shopify` | Aggregator | 20 Feb 2026 |
| S35 | r/shopify — "Leaving Shopify" ($900 billing error, no phone support, payment-ban scepticism, theme/UX complaints) — `reddit.com/r/shopify/comments/1tddu80/leaving_shopify` | Forum | 14 May 2026 |
| S36 | easysellapp — "Shopify Store Suspended? How to Appeal" (120/365-day holds, >1% chargeback threshold, no admin after termination) — `easysellapp.com/blogs/wiki/shopify-store-suspended-appeal-recover` | Reviewer/guide | 22 Apr 2026 |
| S37 | Shopify Q2 2026 release — named forward-looking risks (tariffs, trade measures, AI adoption, third-party reliance, cyberattack) | Primary | 5 Aug 2026 |
| S38 | Seeking Alpha — Q1 2026 outlook notes (de minimis removal, trade regimes, mitigation) — `seekingalpha.com/news/4550530-...` | Relay | 11 Feb 2026 |
| S39 | Medusa/Saleor/Ecwid/BigCommerce alternatives rows in S12/S31 | Vendor comparison | Jul 2026 |
| S40 | Trustpilot UK p.7 — "$250 charge with no notice while account inaccessible; refund denied under internal 7-day policy" (ACL/ACCC escalation) | Reviews | 25 Jun 2026 |
| S41 | r/ecommerce — "I know everyone recommends Shopify, but are there other good ecommerce platforms?" (BigCommerce/Woo comparisons) — `reddit.com/r/ecommerce/comments/1sua704` | Forum | 24 Apr 2026 |

---

## 6. Head-to-head

### 6.1 Capability matrix (business website, 2026)

| Capability | **Hostinger** | **GoDaddy** | **Shopify** |
|---|---|---|---|
| Entry price (realistic) | $2.99–3.99/mo on a 48-mo lock, renews $10.99–16.99 | $9.99/mo builder, renews $16.99; hosting from $5.99 (3-yr term) | $39/mo Basic + ~$100–200/mo apps |
| Domain included | 1st year on annual plans | On some promos; renews $21.99+ | No (~$14/yr) |
| Free tier | No (7-day trial; 5-credit AI demo) | **Yes**, with GoDaddy branding on a subdomain; Airo free tier builds but **cannot publish** | No (3-day trial + $1 promo months) |
| AI site/app generation | **Best value**: agentic + manual, real backend (auth, DB, email) included, credit-metered | Fast and tidy, generic; images/SEO/marketing behind Airo Plus | Magic + Sidekick **free, no caps yet**; best for ops/analytics, weaker for design |
| E-commerce | 1,000-product cap, 0% txn fees, Stripe/PayPal + 100 methods; **no subscriptions/POS/B2B** | Unlimited products on Commerce, 0% platform fee, 2.7%+$0.30; thin apps | **Best in class**: checkout, Shop Pay, Markets/duties, native B2B, POS, weak native subscriptions |
| App marketplace | None | Minimal | **17,000+ apps**, 100k+ partners |
| Business email | Included (1GB caps) / $0.99 per mailbox | Microsoft 365 resale, $1.99/mailbox | Not a strength |
| Bookings / services | Basic scheduling (Business) | **Yes — appointments + local-service stack** | Via apps |
| Phone support | **No** | **Yes, 24/7** | **No** (chat/email/callback) |
| Uptime posture | 99.9% *network* SLA, ~5% credit, self-verified; measured 99.95–99.99% | 99.9%+ claimed; throttling/resource limits bite during spikes per reviewers | Hosted, 99.9%+, proven at BFCM |
| Portability | WordPress/VPS portable; **builder sites not exportable**; agentic ZIP export at higher tiers | **No export from Website Builder / W+M** (Airo AI Builder allows code download) | Store data exportable, but real migration is **$2k–$30k** |
| Refund policy | 30 days most plans; **96 hours** for domains; refunds default to store credit; crypto non-refundable | **7 days** on multi-year renewals (was 30 until Feb 2025); refund disputes hard | N/A for subscription; the money at risk is **held payouts** (120–365 days) |
| Agentic readiness | `llms.txt`, SEO agent, free Connector for external coding agents | **ANS/ARD + agent APIs** — the identity/discovery layer | **Catalog + UCP + Agentic Storefronts** — the transaction layer |
| Best-fit operator | Solo founder, blog/portfolio, brochure site, cheap WooCommerce, agency with many small sites | Local/service business wanting one bill + a human on the phone | A brand whose revenue depends on conversion; >500 SKUs; multi-channel/international/B2B |

### 6.2 Five-year TCO for the same job (US list prices; illustrative)

| Scenario | Hostinger | GoDaddy | Shopify |
|---|---|---|---|
| **A. Brochure site** (5 pages + email, <10k visits/mo) | 4 years Premium prepaid $143.52 → renewal $10.99/mo ⇒ **≈$650 over 5 years** incl. domain | Builder Basic yr1 ~$120 + domain; yr2+ $16.99 ⇒ **≈$850–1,100** (email/SSL add-ons push it up) | Wrong tool: $39×60 = **$2,340** + processing |
| **B. Small store** (100–500 SKUs, ~$10k/mo GMV) | Business plan renews ~$16.99 with **0% txn fees** ⇒ **≈$1,100–1,500 over 5 yrs**; outgrown at ~$15k/mo or 15+ plugins | Commerce $20.99→$34.99 + 2.7%+$0.30 ⇒ **≈$5,500–6,000** (mostly processing) | Basic $39 + apps ~$100 + 2.9%+$0.30 ⇒ **≈$10,000–12,000** |
| **C. Scaling brand** ($1–5M/yr, BFCM, international) | VPS/WooCommerce + a developer; **you own the risk** (limits, PCI, throttling) — cheapest on paper, most expensive in incidents | Not the tool; you'd move to Shopify or WooCommerce | Grow/Advanced + apps + 0.5–1% gateway + Markets fees ⇒ **$8,000–25,000/yr**; Plus $2,300+/mo for checkout control |
| **What the gap really is** | Time saved at the start, money and migration pain later | Convenience at month 1, distrust at month 13 | Maximum revenue capability, most predictable and most expensive bill |

### 6.3 Trust ledger (as of 13 September 2026)

| | **Hostinger** | **GoDaddy** | **Shopify** |
|---|---|---|---|
| Aggregate review scores | Trustpilot ~4.7★; G2 4.4; HostScore 84.9%; builder review scores 4.5–4.8★ `[H9][H11][H20]` | Trustpilot 4.5★ (128–134k); G2 4.0; TrustRadius 7.4/10; **ConsumerAffairs 1.2–1.7★**; Sitejabber ~2.8★ `[G11][G12][G22]` | **Trustpilot ~1.5★** (4.3k reviews); **BBB grade F, 1,661 complaints** *(as reported by an aggregator — verify on bbb.org)*; iOS app 4.7★; but merchant retention ~90% of revenue from >1yr cohorts `[S34][S17]` |
| Regulator / security history | 2019-era breach affecting ~14M customers; 2015 000webhost 13M plaintext passwords; 2022 preview-URL phishing abuse; 2017 staff-written-review accusation; Netcraft 2015 and CCIC 2023 phishing-host rankings `[H6][H19][H23][H26]` | **FTC order (complaint 15 Jan 2025; final 21 May 2025)** — 2019–2022 hosting breaches, no MFA/monitoring/segmentation/secure API connections, deceptive security and Privacy Shield claims; mandatory program + biennial independent assessments from 2026 `[G18][G25][G26]` | No comparable enforcement story. Adjacent exposure = **merchant funds handling** (reserves, 365-day holds) and consumer-protection complaints about refunds; own risk factors list cyber, third-party reliance, tariffs `[S8][S36][S37]` |
| Primary trust gap | Opaque abuse enforcement + non-exportable builder | Auto-renewal and upsell mechanics | Fund freezes with no human escalation |

---

## 7. The three recurring failure modes

Across ~70 sources the complaints are not about features. They are about **asymmetries** — and each one is a product decision a competitor could make differently.

1. **Priced as a trap.** Intro price is a loss-leader; renewal/usage is the profit centre. Hostinger: +250–550% (Premium $1.99→$10.99), AI credits on top. GoDaddy: .com +2,100%, Airo Plus $59.88→$95.88, builder renewal unpublished. Shopify: the 2% gateway penalty + app stacking on a $39 headline. Customer response is measurable: ~75% of reviewers who flagged renewal cancelled; a 4★ review becomes 1★ at renewal across the whole budget-hosting category. `[H10][G11][S12][X7]`
2. **Account power without appeal.** The platform can suspend, lock or hold, and the operator's data and money are the collateral — and access removal makes the appeal procedurally impossible. Hostinger: one flagged domain suspends all domains and backups are withheld. GoDaddy: a verification-code bug locks a user out of cancelling for 7 days until the auto-renewal fires. Shopify: stores restricted, admin removed so chargeback evidence cannot be filed, funds held 365 days. `[H16][H17][G23][S8]`
3. **Lock-in as strategy.** No export from Hostinger's builder; no export from GoDaddy's Websites + Marketing (and content does not survive GoDaddy's own builder generations); Shopify's lock-in is softer but priced at $2k–$30k of migration. Reviewers use the same phrase for all three — *"impossible to leave with your work intact."* `[H11][G14][S30][G16]`

A fourth, quieter failure mode is the actual 2026 battleground: **who owns the customer once the customer arrives through an AI agent.** Shopify answers with Catalog + UCP + Agentic Storefronts and *no new fees*; GoDaddy with ANS/ARD + agent APIs where *"sign-in remains with GoDaddy"*; Hostinger with `llms.txt`, SEO agents and a free Connector so your own coding agent can operate your account. `[S3][S4][G1][H3][H5]`

---

## 8. Decision guide

**Choose Hostinger when** the job is one to a dozen modest WordPress/brochure sites, a portfolio, a blog, an MVP, or a store under ~500 products and ~$15k/month; you can configure DNS and email yourself; you refuse to pay $300/mo for software. **Do not** choose it when revenue must not stop (no phone escalation, undeclared CPU limits on VPS), when you need subscriptions/POS/B2B, or when an agency cannot tolerate one flagged domain taking down every client site. Agencies that do use it keep **independent off-host backups** — the single most repeated piece of advice in the threads. `[H11][H16][H19][H21]`

**Choose GoDaddy when** the job is a local or service business (trades, salon, clinic, consultancy) that wants domain + email + site + booking + payments on one bill, *with a phone number to call*, and will accept renewal pricing; the DIFY agent also gives it a credible "have a human do it" tier. **Do not** choose it when design distinctiveness matters, when you may need to migrate, when SEO/content control is core, or when you sell internationally with a complex catalogue. `[G4][G11][G14][G20]`

**Choose Shopify when** the job is *selling*: >$10–20k/month, >500 SKUs, multichannel (POS, B2B, international), and you need the checkout to convert and survive spikes — accepting that the real bill includes apps and processing. **Do not** when the store is a button on a brochure site, when you're a low-AOV dropshipper for whom 2.9% + $0.30 is the whole margin, or when your cash cycle cannot absorb a payout review with no phone number to call. Benchmark **BigCommerce** (no platform transaction fees, similar managed model, cheaper apps) and **self-hosted WooCommerce/Medusa** (0% platform fees, full ownership, but you carry security and maintenance) before deciding. `[S12][S28][S30][S41][S31]`

**Anti-patterns observed in the wild**
- A $2M store running on a Hostinger builder plan → product cap, no subscriptions, no in-person, no phone escalation.
- A brand using GoDaddy's builder for SEO-led growth → generic output, no code access, no multilingual, no export.
- A brochure site on Shopify Basic → $39 + 2% gateway penalty + app creep for a contact form.
- Any store whose entire cash cycle depends on one payment processor and one risk queue → the same single point of failure Shopify's BBB pattern shows, whichever processor you use.

---

## 9. What this means for ecom-plat

The three incumbents are vulnerable in the same three places and are all spending 2026 on the same bet. Read-throughs, ordered by leverage:

**1) Make the renewal page the marketing asset.** One price, the same forever, monthly or annual; no setup fee; no multi-year lock required to see the advertised number; **no AI credits metered on top of a subscription.** Shopify's "free on every plan, no caps yet" is the current benchmark and Hostinger's credit packs are its weakest-reviewed feature — i.e. the market gap is *predictability*, not features. `[H5][S13][H10]`

**2) Ship on the entry tier what the others gate.** Hostinger puts commerce on Business only and code export on Hobbyist+; GoDaddy puts image generation/SEO/marketing behind Airo Plus and export behind nothing (it doesn't exist); Shopify puts advanced reports on Advanced, checkout control on Plus and custom app generation on Grow+. An entry plan that includes **reviews + email marketing + subscriptions + appointments + in-person POS** attacks all three at once. Reviewers already tell merchants to *"audit your app stack because Shopify now includes it free"* — proof that much of the perceived cost is artificial gating. `[H8][S30][G14][S13]`

**3) Build the trust features the complaints demand.** (a) Self-serve **full export** — code, content, orders, customers, schema, media — always, on every tier. (b) **Never revoke read-access** during a payment or dispute review, so a merchant can still respond to a chargeback. (c) A written **appeal SLA with a named human**, and a hard cap on reserve periods (30 days, not 365). (d) One-click cancellation and refund flows — GoDaddy's 7-day window and Hostinger's 96-hour domain window are the cautionary tales. (e) A published uptime SLA with **third-party-verified** credits, since Hostinger's "we validate using our own data, 5% credit" is the low bar to beat. `[H19][G11][S8][S36]`

**4) Copy the substance of the agentic stack, not the branding.** The four artefacts that matter in 2026: (i) a **structured product catalogue** with live price/stock and rich attributes; (ii) **protocol compatibility** (UCP-style discovery→checkout, wallet sign-in patterns); (iii) an **AI-channels console** in the admin showing per-channel orders/conversions *and the queries you don't rank for*; (iv) **machine-readable discoverability by default** (`llms.txt`, clean self-contained product pages). Shopify's own numbers are the business case — 2× conversion vs scraped data, ~80% above organic, 2× new-buyer rate, 75% of AI orders from outside the top 100 categories — and its **own gap** (metafields not reaching agents) is a wedge: expose *all* structured attributes to agents and market it. `[S3][S5][S6]`

**5) Steal the activation metric.** Shopify ties Sidekick usage to **+8% of new merchants reaching 5 orders in their first 15 days** and sees usage shift from setup (50%) to analytics (40%) as merchants mature. The implication: our leading indicators should be *time-to-first-order*, *% reaching 5 orders in 15 days*, *weekly self-serve report runs* — not sites-created. `[S16][S9]`

**6) Go where all three are weak.** (i) **India and emerging-market SMBs**: Hostinger is investing here (Niagahoster consolidation, Impulso, India DC, INR billing) but has no phone support and no COD/UPI-first stack; GoDaddy's economics are US loss-leader pricing. (ii) **WhatsApp-first/social-selling micro-merchants** needing catalogue + payments + delivery coordination. (iii) **Service businesses** that GoDaddy defends with bookings and DIFY — Hostinger barely has it, Shopify over-serves it. None of the three is strong on vernacular content, COD/RTO handling or UPI-led flows. `[H1][H26][G4][G10]`

**7) Positioning line the evidence supports:**
> *"A business site you can leave at any time, priced the same in year five as year one, with a human you can call and an agent that can read your catalogue."*
Every clause negates a documented failure mode in this dataset — no export (Hostinger/GoDaddy), renewal shock (Hostinger/GoDaddy), no phone escalation (Hostinger/Shopify), agent-blind product data (everyone's blind spot except Shopify's).

**8) Two risks to our own model, copied by accident.** (a) If we monetise AI via credits, we import Hostinger's most-complained-about mechanic; if we monetise via GMV, we import Shopify's margin compression and its exposure to a consumer cycle we do not control. (b) If we ever hold funds or suspend accounts, we inherit the exact complaint pattern that dominates Shopify's public review profile — so custody/risk policy is a *product* decision, not a policy-page decision. `[S9][S17][H5][S8]`

---

## 10. Data quality notes

**Tier 1 — strongest, cite freely.** GoDaddy Q2-2026 prepared remarks and press release (SEC exhibit) `[G1][G2]`; Shopify Q1/Q2-2026 releases and Spring '26 Edition newsroom `[S1][S2][S3]`; Hostinger FY2025 results, AI Builder and Hostinger Agent launch posts `[H1][H3][H4]`; FTC press release `[G18]`; Shopify BBB complaint filings and Trustpilot profiles as primary complaint text `[S8][S7]`; Wikipedia for Hostinger corporate history `[H6]`.
**Tier 2 — financial detail via transcripts/aggregators; spot-check against the 10-Q/10-K.** Q2-2026 call figures relayed by Yahoo/BigGo/Finsee/Seeking Alpha (Airo $50M run-rate, +22k customers, ARPU $250, $852M buybacks, Shopify segment splits) `[G6][G9][S9][S16]`; store-count estimates (Store Leads ~2.86M, BuiltWith ~5.2–6.9M) `[S19]`.
**Tier 3 — review sites, hands-on testers, Reddit/BBB: patterns robust, individual numbers noisy.** All verbatim quotes; renewal multipliers (250–550%, +268%, +2,100%); aggregate scores; credit-pack pricing; the ~75%-cancel-at-renewal and 35%-of-negative-reviews-about-support figures, which are an aggregator's own text analysis `[H9][H10][G12]`.

**Caveats to respect before this goes anywhere public.**
1. **Prices move constantly** and are region- and term-dependent. Every figure here is a US list price captured Aug–Sept 2026; re-verify on the vendor pricing page before publishing or quoting in sales material. Two sources disagreed on GoDaddy's "Airo free with every domain" claim (support said it depends on active promotions), and Hostinger's credit-pack pricing differed between reviewers `[G16][H5][H8]`.
2. **Review-platform scores are biased samples** (promo-incentivised on the positive side, dispute-driven on the negative). Shopify's consumer-side volume conflates *merchant* behaviour with *platform* behaviour — the same reviewer set that gives 1.5★ also says *"some customers had positive interactions with specific advisors."* `[S7][S34]`
3. **Shopify's headline AI stats are call-reported, not filed.** "Tripled", "2× conversion", "75% long tail", "34M conversations", "~8,000 UCP stores" appear in the call/blog/community tracker — **not** in the press release or 10-Q — and "tripled" is a *deceleration* from Q1's "nearly 13× orders / 8× sessions" on a different denominator. One analysis put it plainly: *"the line everybody quoted appears nowhere in [the release]"*; *"Tripling is a step down, not a breakout."* `[S24]`
4. **GoDaddy's flat customer count needs management's own context**: part of it is deliberate removal of a lower-value product tier and reduced promotional discounting, not pure churn `[G3][G6]`.
5. **Hostinger's phishing-host rankings are dated** (Netcraft 2015; CCIC 2023; out of the top 20 by April 2026) — cite with the year or not at all `[H23]`.
6. **Verify before using in a comparison table:** Hostinger's 96-hour domain refund window and ~5% SLA credit terms; GoDaddy's website-builder renewal prices (not published); Shopify's Grow plan price by region; the BBB grade/counts for Shopify.
7. **Not found, and therefore deliberately absent from this document:** no credible 2025–26 record that Shopify acquired Flexport (searches returned only the 2023 divestiture and subsequent investment/partnership, so the logistics claim here is limited to those verified events) `[S27]`; no sourced record of a GoDaddy telemetry/analytics data-exposure incident, so it is not asserted here.

---

*Prepared in `research/hostinger-godaddy-shopify-2026/`. See `SOURCES.md` for the deduplicated source list with dates, and `PRICING-TCO.csv` for every number in machine-readable form.*
