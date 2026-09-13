# Source ledger — every claim in `REPORT.md`, with date and confidence tier

Research window: **August–September 2026**, compiled **13 September 2026**. Prices are US list, captured Sept 2026.

This file is generated from the numbered tables at the end of each company section in `REPORT.md`, so every `[H#]`, `[G#]`, `[S#]` and `[X#]` citation in the report resolves here. It lists **102 numbered source entries** covering roughly **94 distinct URLs**. Where one entry aggregates several sites, the URLs are named inside the row.

## Confidence tiers

| Tier | What it means | How to treat it |
|---|---|---|
| **A** | Primary company record: press release, earnings materials, SEC exhibit, official docs, regulator release, BBB complaint text | Cite directly. These are the numbers the report's spine is built from. |
| **B** | Independent measurement or dated specialist reporting: Netcraft, W3Techs, CCIC, hands-on reviewers with methodology, trade press, legal press, transcripts | Cite where the method is stated; where two reviewers disagree, both are named in the report |
| **C** | User-generated: Reddit, Trustpilot, G2, ConsumerAffairs, Sitejabber, ProductReview, transcript relays | Never generalised from one thread. Used for **patterns** — the same complaint from independent reporters — always attributed |
| **D** | Aggregators, vendor-authored and affiliate comparison pages, low-rigour blogs | Directional only. Used for figures they clearly sourced publicly; never load-bearing for a conclusion |

**Tier mix:** A 14 · B 43 · C 20 · D 25. Every headline financial, launch date and policy claim in the report traces to a tier-A source; tiers C and D are the evidence for *what customers say*, not for what a company owes you.

## Two biases to keep in mind

1. **Review platforms are self-selected samples** with known review-gating and incentivised-review problems. Reported counts for the same company differ by platform and by filter, so single scores here are indicative, not audited. The report leans on the *pattern across platforms* (e.g. GoDaddy at 4.5★ on Trustpilot vs ~1.2–1.7★ on ConsumerAffairs) rather than on any one number.
2. **Several comparison sources are written by a competitor.** Hostinger's own blog supplies some Hostinger-vs-rival benchmark claims; several "alternatives" pages are affiliate-monetised. Those rows are kept (they are often the only measurement available) but flagged in-line in `REPORT.md` as self-interested, and their competitor-facing claims — the 66% uptime-gap, the Wix 23.6%-vs-27.2% figure — are explicitly excluded from the conclusions.

## Hostinger — 26 sources

| ID | Source (what it was used for) | Type | Date | Tier |
|---|---|---|---|---|
| H1 | Hostinger blog — "Hostinger posts fourth consecutive year of 50%+ growth" (revenue, customers, Horizons 800k, Reach 150k, FT/Statista) — `hostinger.com/blog/financial-results-2025/` | Primary | 18–23 Feb 2026 | **A** |
| H2 | webhosting.today — FY2025 growth + USD equivalent — `webhosting.today/2026-02-18/hostinger-reports-51-revenue-growth-in-2025-reaches-e275-4-million/` | Trade | 19 Feb 2026 | **B** |
| H3 | Hostinger blog — **AI Builder launch** (Žirgulė quote, "agentic era", one project/one account) — `hostinger.com/blog/ai-builder-launch/` | Primary | 18 Aug 2026 | **A** |
| H4 | Hostinger blog — **Hostinger Agent launch** (91% self-resolution, AI CX Engineers, paid agentic tiers, Ecommerce July 2026, "5 million clients") — `hostinger.com/blog/agent-launch/` | Primary | 2 Sept 2026 | **A** |
| H5 | Max Productive — Hostinger AI Website Builder hands-on (credits, top-up pricing, export rules, renewals) — `max-productive.ai/ai-tools/hostinger-ai-website-builder/` | Reviewer | 27 Aug 2026 | **B** |
| H6 | Wikipedia — Hostinger (history, ownership, subsidiaries, breaches, phishing rankings) — `en.wikipedia.org/wiki/Hostinger` | Tertiary | updated Aug 2026 | **B** |
| H7 | unicorns.lt — Kodee saves >€9M/yr, 350+ tasks over MCP | Trade | 11 Sept 2025 | **B** |
| H8 | Max Productive — Hostinger Horizons review (plan tiers, credits, Lovable/Bolt comparison) — `max-productive.ai/ai-tools/hostinger-horizons/` | Reviewer | 17 Feb 2026 | **B** |
| H9 | checkthat.ai — Hostinger reviews summary (renewal 250–550%, support, G2/Trustpilot scores) — `checkthat.ai/brands/hostinger/reviews` | Aggregator | 30 Mar 2026 | **D** |
| H10 | checkthat.ai — Hostinger pricing, renewals and refund mechanics — `checkthat.ai/brands/hostinger/pricing` | Aggregator | 30 Mar 2026 | **D** |
| H11 | HostScore — Hostinger review 2026 (cons list, no-export finding, user quotes) — `hostscore.net/review/hostinger/` | Reviewer | 2 Sept 2026 | **B** |
| H12 | itbrief / itbrief.asia — AI Builder for web apps & sites (backend provisioning, Žirgulė quote) — 19 Aug 2026 | Trade | 19 Aug 2026 | **B** |
| H13 | Trustpilot — Hostinger reviews + platform summary (suspension, outage, support verbatims) — `trustpilot.com/review/hostinger.com` | Reviews | 5 Sept 2026 | **C** |
| H14 | r/Hostinger — "Hostinger is limiting the resources of my VPS and I'm losing my clients" — `reddit.com/r/Hostinger/comments/1q8vx5j` | Forum | 10 Jan 2026 | **C** |
| H15 | r/Hostinger — same thread, corroboration on throttling | Forum | Jan 2026 | **C** |
| H16 | r/Hostinger — "Developers beware: Hostinger locked my entire hosting account & refused to return client data" — `reddit.com/r/Hostinger/comments/1pdumzi` | Forum | 4 Dec 2025 | **C** |
| H17 | r/Hostinger — "Your account was suspended permanently" (support refusing backups) — `reddit.com/r/Hostinger/comments/1rcvzn7` | Forum | 23 Feb 2026 | **C** |
| H18 | r/Hostinger — "Check your renewal cost!!" (unnotified fee, Australian Consumer Act claim) — `reddit.com/r/Hostinger/comments/1t2xqx4` | Forum | 3 May 2026 | **C** |
| H19 | bearhost — Hostinger review 2026 FAQ (uptime, VPS quality, email, domain, refund nuance) — `bearhost.com/blogs/hostinger-review` | Reviewer | 16 May 2026 | **B** |
| H20 | allaboutcookies — Hostinger Web Builder review 2026 (4.5★, features score, zero transaction fees) — `allaboutcookies.org/hostinger-review` | Reviewer | 31 Jul 2026 | **B** |
| H21 | websitebuilderexpert — Hostinger Website Builder / Horizons reviews (plan prices, renewal, complaints) — `websitebuilderexpert.com/website-builders/hostinger-website-builder-review/` | Reviewer | 27 Apr 2026 | **B** |
| H22 | checkthat.ai brand profile — Remixable Templates marketplace, €182.4M FY2024, Impulso, Niagahoster | Aggregator | 3 Nov 2025 | **D** |
| H23 | Netcraft (2015) and Cybercrime Information Center (2023) phishing-host rankings, as summarised in `[H6]` | Third-party via Wikipedia | 2015/2023 | **B** |
| H24 | windowsforum — "Hostinger in 2026: AI-Powered Budget Linux Hosting" (strategy read, gaps: no phone, no Windows, no dedicated) | Trade | 15 Jun 2026 | **B** |
| H25 | roconpaas — "10 Best Hostinger Alternatives 2026" (comparison table of what Hostinger lacks: SLA, phone, PCI, backups, mailbox caps) | Vendor/affiliate | 21 Aug 2026 | **D** |
| H26 | onlinemediamasters — hostile but detailed Hostinger review (fake-reviews allegation, 14M breach, 1GB email caps, brand-ambassador criticism) | Reviewer | 9 Jul 2025 | **B** |

## GoDaddy — 30 sources

| ID | Source (what it was used for) | Type | Date | Tier |
|---|---|---|---|---|
| G1 | **GoDaddy Q2 2026 Financial Results — Prepared Remarks** (Airo unification, $50M run-rate, Developer Platform, ANS/ARD, de-emphasis quote, guidance, buybacks) — `s23.q4cdn.com/406380394/files/doc_financials/2026/q2/GDDY-Q2-2026-Earnings-Prepared-Remarks.pdf` | Primary | 30 Jul 2026 | **A** |
| G2 | GoDaddy Q2 2026 earnings press release (SEC Ex-99.1) — `sec.gov/Archives/edgar/data/1609711/000160971126000087/gddyex991-20260630xq2earni.htm` | Primary | 30 Jul 2026 | **A** |
| G3 | GoDaddy Q4 2025 earnings call transcript (W+M migration "will take a few months", FY25 highlights) — `fool.com/earnings/call-transcripts/2026-04-22/godaddy-gddy-q4-2025-earnings-transcript/` | Transcript | 24 Feb / 22 Apr 2026 | **B** |
| G4 | GoDaddy via 3BL — "Airo Accelerates… six new AI agents" (Conversations Inbox, Appointments, Domain Activation/Protection, DIFY) — `3blmedia.com/news/godaddy-accelerates-airoai-momentum-new-ai-agents-small-business-growth` | Primary (distributed) | 2 Dec 2025 | **A** |
| G5 | GoDaddy via PRNewswire — **Airo.ai launch** (agent list, capabilities, Pani quote) — `prnewswire.com/news-releases/godaddy-brings-agentic-ai-to-small-businesses-with-launch-of-airoai-302614911.html` | Primary | 13 Nov 2025 | **A** |
| G6 | Q2 2026 earnings-call digests (ARPU $250, 22k customers, bookings, margins) — `stocknow.ai/.../gddy_q2-2026-earnings-call`, `finance.yahoo.com/quote/GDDY/earnings/GDDY-Q2-2026-earnings_call-658570.html`, `finance.biggo.com/quote/GDDY/earnings-call/US_GDDY_2026-07-30` | Relay | 30–31 Jul 2026 | **C** |
| G7 | 24/7 Wall St. — Q2 2026 reaction (EPS $1.83 vs $1.69; shares −7.67%) — `247wallst.com/cards/godaddy-inc-q2-2026-earnings-gddy-...` | Trade | 30 Jul 2026 | **B** |
| G8 | Investing.com — "Q2 2026 slides: AI push drives results, market skeptical" — `in.investing.com/news/stock-market-news/godaddy-q2-2026-slides-...` | Trade | 30 Jul 2026 | **B** |
| G9 | Investing.com conference transcripts — **Goldman Sachs Communacopia 2026** (9 Sept) and **Citi Global TMT 2026** (8 Sept): Airo cohort attach, "one platform", Developer Platform, ANS monetisation, care/eng efficiency, "launched Airo without hiring additional engineers" — `in.investing.com/news/stock-market-news/godaddy-at-goldman-sachs-communacopia--technology-conference-2026-ai-push-93CH-5586921`, `investing.com/news/transcripts/godaddy-at-citis-2026-global-tmt-conference-airo-drives-strategy-93CH-4892159` | Transcript | 8–9 Sept 2026 | **B** |
| G10 | Marketing Dive — original Airo launch (Feb 2024), Smart Terminal voice queries, product catalogue generation — `marketingdive.com/news/godaddy-airo-generative-ai-tool-small-business-campaign/708453/` | Trade | 26 Feb 2024 | **B** |
| G11 | checkthat.ai — GoDaddy pricing (renewal multipliers, 7-day window, bundle cost ladder, refund friction, dark patterns) — `checkthat.ai/brands/godaddy/pricing` | Aggregator | 22 Jun 2026 | **D** |
| G12 | checkthat.ai — GoDaddy reviews (platform score table, support decay pattern) — `checkthat.ai/brands/godaddy/reviews` | Aggregator | 30 Mar 2026 | **D** |
| G13 | Finsee / other Q2 2026 reviews (bull/bear framing, FCF, guidance) — `finsee.ai/earnings/gddy/2026/q2/en/` | Analyst-ish | 30 Jul 2026 | **B** |
| G14 | Litmus Tools — GoDaddy Airo review 2026 (renewal doubling, no code export, generic output, upselling, Reddit sentiment) — `litmustools.com/review/godaddy-airo/` | Reviewer | 27 Jun 2026 | **B** |
| G15 | HostAdvice — "GoDaddy Airo Pricing 2026" (three-layer Airo product structure, credit tiers, renewal deltas) — `hostadvice.com/hosting-company/godaddy-reviews/airo-pricing/` | Reviewer | 30 Aug 2026 | **B** |
| G16 | HostAdvice — "What is GoDaddy Airo?" and "Is GoDaddy Airo worth it?" (test notes; support said free-with-domain Airo depends on promotions) — `hostadvice.com/blog/website-builders/website-building-with-ai/what-is-godaddy-airo/` | Reviewer | 24 Aug 2026 | **B** |
| G17 | aibusinesssites — "GoDaddy Websites Pricing 2026: Real Costs & Hidden Fees" (full add-on stack, hosting renewals) — `aibusinesssites.com/compare/godaddy-websites-pricing-2026-real-costs-hidden-fees` | Vendor comparison | 10 Sept 2026 | **D** |
| G18 | **FTC press release** — "FTC Takes Action Against GoDaddy for Alleged Lax Data Security" — `ftc.gov/news-events/news/press-releases/2025/01/...` | Primary regulator | 15 Jan 2025 | **A** |
| G19 | WHtop — GoDaddy review page (10-year auto-renewal at $235 quote, control-panel complaints) — `whtop.com/review/godaddy.com` | Reviews | 2026 | **C** |
| G20 | themeburn — GoDaddy AI website builder review (closed platform, "limiting") — `themeburn.com/blog/godaddy-ai-website-builder-review` | Reviewer | 1 Feb 2026 | **B** |
| G21 | Tooltester — GoDaddy Website Builder review (incompatible version updates; forced rebuilds) — `tooltester.com/en/reviews/godaddy-website-builder-review/` | Reviewer | 7 Aug 2026 | **B** |
| G22 | startupowl — GoDaddy domain registrar review (Trustpilot 4.5★/133,757; Reddit "expensive legacy registrar") — `startupowl.com/reviews/godaddy` | Aggregator | 25 Aug 2026 | **D** |
| G23 | r/webdev — "GoDaddy Review, why you need to AVOID them!" (cancellation lockout, redemption fees, discount club, UX upsell, 19-year loyalty) — `reddit.com/r/webdev/comments/1jv8xez` | Forum | 14 Apr 2025 | **C** |
| G24 | allaboutcookies — "GoDaddy Airo AI Review 2026: It's way better than I thought" + plan/renewal table — `allaboutcookies.org/godaddy-airo-review` | Reviewer | 7 Aug 2026 | **B** |
| G25 | Compliance Week / NatLaw Review / Hunton / Parker Poe — FTC order **finalised 21 May 2025** (biennial assessments from 2026, 180-day program, no fine) — `complianceweek.com/regulatory-enforcement/ftc-orders-godaddy-to-upgrade-cybersecurity-defenses-following-three-breaches/36022.article` | Legal press | 22–24 May 2025 | **B** |
| G26 | Arizona Republic — "FTC orders GoDaddy to upgrade online security" (nine incidents; GoDaddy response) — `azcentral.com/story/money/business/2025-01-15/ftc-orders-godaddy-to-upgrade-online-security/...` | Trade | 15 Jan 2025 | **B** |
| G27 | saasflags — "Is GoDaddy a Scam or Legit?" (BBB auto-renew filings, marketing complaints) — `saasflags.com/products/godaddy/is-it-a-scam` | Aggregator | 20 May 2026 | **D** |
| G28 | Trustpilot (godady.com mirror profile) — 2026 1★ verbatims (auto-renew, offline 4 days, refund refusals) — `trustpilot.com/review/godady.com` | Reviews | Dec 2025 – Jun 2026 | **C** |
| G29 | ProductReview.com.au (p.3) — 2025–26 Australian SMB reviews (upsell, restore-service, $14→$440) — `productreview.com.au/listings/godaddy?page=3` | Reviews | 2025–26 | **C** |
| G30 | ConsumerAffairs — GoDaddy reviews p.5 (9-year tenure decay, SSL billed 2 months early, 50-minute cancellation waits) — `consumeraffairs.com/internet/godaddy.html?page=5` | Reviews | 2025 | **C** |

## Shopify — 39 sources

| ID | Source (what it was used for) | Type | Date | Tier |
|---|---|---|---|---|
| S1 | Shopify newsroom — **Q2 2026 results** (revenue $3.58B/+34%, GMV $115.6B/+32%, FCF margin 18%, "monster quarter" quote, risk disclosures) — `shopify.com/news/shopify-q2-2026-financial-results` | Primary | 5 Aug 2026 | **A** |
| S2 | Shopify Q1 2026 press release (GlobeNewswire) — GMV $100.743B, MRR $212M, revenue $3.170B, op income $382M, FCF $476M — `globenewswire.com/news-release/2026-05-05/...` | Primary | 5 May 2026 | **A** |
| S3 | Shopify newsroom — **Spring '26 Edition: 150+ updates** (Catalog by default, UCP, Agentic Storefronts admin, Catalog API, developer revenue share, B2B) — `shopify.com/news/spring-26-edition-merchant` | Primary | 17 Jun 2026 | **A** |
| S4 | Retail TouchPoints / stellagent / ambaum — Q2 2026 AI metrics (3× traffic+orders, 2× conversion, +80% vs organic, 75% long tail, 34M Sidekick conversations, +3.6× DAU) — `retailtouchpoints.com/news/shopify-credits-ai-for-34-revenue-growth-in-q2-2026/620805/`, `stellagent.ai/insights/shopify-q2-2026-ai-search-traffic-3x` | Trade | 5–12 Aug 2026 | **B** |
| S5 | Seeking Alpha — Q2 2026 call notes (Q3 low-30s outlook, no new agentic fees, FCF margin trajectory) — `seekingalpha.com/news/4626580-...` | Relay | 5 Aug 2026 | **C** |
| S6 | Ambaum Insights — merchant takeaways incl. the metafield/Catalog API limitation — `ambaum.com/insights/shopify-q2-2026-earnings-ai-takeaways` | Analyst note | 12 Aug 2026 | **B** |
| S7 | Trustpilot — Shopify (payout holds, verification loops, consumer-side complaints, "no buyer protection") — `trustpilot.com/review/www.shopify.com` and `uk.trustpilot.com/review/www.shopify.com?page=7` | Reviews | Jun–Aug 2026 | **C** |
| S8 | **BBB complaints — Shopify Inc.** (restricted stores + 365-day hold; $12,000 locked payout; Shopify Balance freeze; cancelled-subscription billing) — `bbb.org/ca/on/ottawa/profile/online-shopping/shopify-inc-0117-39813/complaints` | Filings | Aug 2026 | **A** |
| S9 | Finsee — Q2 2026 segment/margin analysis (merchant solutions $2.78B, mix shift, guidance table) — `finsee.ai/earnings/shop/2026/q2/en/` | Analyst-ish | 5 Aug 2026 | **B** |
| S12 | thefrontkit — "Shopify Alternatives 2026" (the "quiet costs stack" quote, per-platform annual cost table) — `thefrontkit.com/blogs/shopify-alternatives-2026` | Reviewer/vendor | 21 Aug 2026 | **D** |
| S13 | letstalkshop — "Sidekick vs Magic 2026" (no usage caps yet; custom app generation gated to Grow+) — `letstalkshop.com/blog/shopify-sidekick-vs-shopify-magic` | Reviewer | 21 Apr 2026 | **B** |
| S14 | Newsfile / Shopify — "Standout 2025" wrap (B2B +96%, offline +27%, international +36–37%, $2B buyback, FCF margins) — `newsfilecorp.com/release/283507/...` | Primary (distributed) | 11 Feb 2026 | **A** |
| S15 | Yahoo Finance — Q1 2026 call summary (equity-investment distortion, guidance) — `finance.yahoo.com/markets/stocks/articles/...` | Relay | May 2026 | **C** |
| S16 | Yahoo Finance — Q2 2026 call summary ("AI leverage", distillation, Q3 FCF high-teens–low-20s) — `finance.yahoo.com/markets/stocks/articles/shopify-inc-q2-2026-earnings-225333121.html` | Relay | 5 Aug 2026 | **C** |
| S17 | businessmodelanalyst — Shopify SWOT 2026 (disintermediation paradox, take rate, GAAP noise, long tail) — `businessmodelanalyst.com/shopify-swot-analysis/` | Analyst | 24 Jul 2026 | **B** |
| S18 | axis-intelligence — Shopify statistics 2026 (Plus 47k stores, $100M+ merchants doubling, LVMH/Mulberry/Balmain/Orvis) — `axis-intelligence.com/shopify-statistics/` | Aggregator | 2 Jul 2026 | **D** |
| S19 | justpricing / datarefs / ecommercetrix — store counts, Payments penetration, US share, store-revenue distribution — `justpricing.com/shopify-statistics`, `datarefs.com/statistics/ecommerce/shopify/`, `ecommercetrix.com/ecommerce-statistics/shopify-statistics/` | Aggregator | Jul 2026 | **D** |
| S20 | webtonic — store counts and Q2-26 1.1% QoQ growth — `webtonic.io/blog/e-commerce-shopify-statistics` | Aggregator | 21 Jul 2026 | **D** |
| S21 | digitalapplied / sitebuilderreport / uithings — performance, CWV, implementation time, market share — `digitalapplied.com/blog/shopify-statistics-2026-platform-growth-data`, `sitebuilderreport.com/website-builder-statistics`, `uithings.com/website-builder-statistics` | Aggregator | 2026 | **D** |
| S22 | 24/7 Wall St. — valuation, Shopify Capital losses, stock moves — `247wallst.com/investing/2026-04-10/shopify-eyes-18-upside-after-sharp-2026-selloff/` | Trade | 10 Apr 2026 | **B** |
| S23 | tradingkey — SHOP Sep 2026 move + company-specific risk list (gross margin −230bps, multiple, LLM commerce competition) — `tradingkey.com/news/market-movers/262163758-market-movers-shop-20260911` | Trade | 11 Sept 2026 | **B** |
| S24 | digitalapplied — Q2-26 "claim ledger": which AI stats are in the press release / 10-Q vs call-only, incl. the ~8,000 UCP-store tracker and the Q1 "13× orders" baseline — `digitalapplied.com/blog/shopify-q2-2026-results-ai-orders-agentic-commerce` | Analyst | 8 Aug 2026 | **B** |
| S25 | Investing.com — Shopify at Goldman Sachs Communacopia 2026 (Hoffmeister/Abrams on admin "pane of glass", LLM costs, disintermediation Q&A) — `ng.investing.com/news/stock-market-news/shopify-at-goldman-sachs-conference-ai-may-widen-its-merchant-moat-93CH-2692452` | Transcript | 10 Sept 2026 | **B** |
| S26 | adsx — "Shopify Magic & Sidekick AI in 2026" (free on all plans; Magic output quality; Sidekick can act with confirmation) — `adsx.com/blog/shopify-magic-sidekick-ai-features-2026` | Reviewer | 12 Mar 2026 | **B** |
| S27 | Supply Chain Dive / FreightWaves / AP — Shopify **sold** Shopify Logistics + Deliverr to Flexport (May 2023, 13% stake), Flexport as official logistics partner for Shop Promise — `supplychaindive.com/news/shopify-sell-logistics-business-flexport-deliverr/649427/` | Trade | May 2023 (verified 2026) | **B** |
| S28 | TechnologyAdvice — Shopify review 2026 (plan range, transaction fee mechanics, cons: reporting gating, free themes, user-feedback themes) — `technologyadvice.com/blog/sales/shopify-review/` | Reviewer | 22 Jan 2026 | **B** |
| S29 | TrueProfit — Shopify fees calculator 2026 (realistic monthly totals by store size) — `trueprofit.io/blog/shopify-fees-calculator` | Vendor/reviewer | 30 Jun 2026 | **D** |
| S30 | wearepresta — TCO + "Basic trap" analysis, migration cost table ($2k–$30k, 2–12 weeks) — `wearepresta.com/woocommerce-hosting-costs-vs-shopify-pricing-which-wins-in-2026/` | Agency | 28 Jul 2026 | **D** |
| S31 | brandid / rovela / alidropship — "real monthly cost" tables and alternatives positioning — `brandid.app/blog/best-shopify-alternatives`, `rovela.ai/blog/best-shopify-alternatives` | Vendor comparison | Jul 2026 | **D** |
| S32 | bootstrappingecommerce — 7-year testing; POD/dropshipping fee pain; app-spend audit advice — `bootstrappingecommerce.com/shopify-pricing/` | Reviewer | 20 Jan 2026 | **B** |
| S33 | technologyadvice + S28 cons list; letstalkshop gating notes | Reviewer | 2026 | **B** |
| S34 | startupowl — Shopify review 2026 (Trustpilot 1.5★/4,325, BBB F/1,661 complaints "as reported", support test results, Reddit sentiment) — `startupowl.com/reviews/shopify` | Aggregator | 20 Feb 2026 | **D** |
| S35 | r/shopify — "Leaving Shopify" ($900 billing error, no phone support, payment-ban scepticism, theme/UX complaints) — `reddit.com/r/shopify/comments/1tddu80/leaving_shopify` | Forum | 14 May 2026 | **C** |
| S36 | easysellapp — "Shopify Store Suspended? How to Appeal" (120/365-day holds, >1% chargeback threshold, no admin after termination) — `easysellapp.com/blogs/wiki/shopify-store-suspended-appeal-recover` | Reviewer/guide | 22 Apr 2026 | **B** |
| S37 | Shopify Q2 2026 release — named forward-looking risks (tariffs, trade measures, AI adoption, third-party reliance, cyberattack) | Primary | 5 Aug 2026 | **A** |
| S38 | Seeking Alpha — Q1 2026 outlook notes (de minimis removal, trade regimes, mitigation) — `seekingalpha.com/news/4550530-...` | Relay | 11 Feb 2026 | **C** |
| S39 | Medusa/Saleor/Ecwid/BigCommerce alternatives rows in S12/S31 | Vendor comparison | Jul 2026 | **D** |
| S40 | Trustpilot UK p.7 — "$250 charge with no notice while account inaccessible; refund denied under internal 7-day policy" (ACL/ACCC escalation) | Reviews | 25 Jun 2026 | **C** |
| S41 | r/ecommerce — "I know everyone recommends Shopify, but are there other good ecommerce platforms?" (BigCommerce/Woo comparisons) — `reddit.com/r/ecommerce/comments/1sua704` | Forum | 24 Apr 2026 | **C** |

## Cross-vendor and market context — 7 sources

| ID | Source | Type | Date | Tier |
|---|---|---|---|---|
| X1 | Site Builders Report — website-builder market share and YoY growth (Wix, Squarespace, GoDaddy, Weebly, Shopify share of all sites) | Aggregator | 2025–26 | **D** |
| X2 | W3Techs — technology usage statistics: WordPress ~40% of all websites, ~59–60% of the CMS market | Measurement | rolling 2026 | **B** |
| X3 | Colorlib / hostingadvice — website and CMS statistics; Shopify at a record 7.5% of all websites vs 4.7% in Jan 2025 | Aggregator | 2026 | **D** |
| X4 | Market-share trackers as relayed by digitalapplied and sitebuilderreport (builder-vs-platform splits, ~26% Shopify vs 18% WooCommerce e-commerce platform share) | Aggregator | 2026 | **D** |
| X5 | DigitalApplied — "Shopify Statistics 2026" (page-load performance, Core Web Vitals pass rates, enterprise implementation timelines) | Aggregator | 2026 | **D** |
| X6 | E-commerce platform-share trackers (Shopify vs WooCommerce vs Amazon share, US e-commerce GMV ~14% for Shopify) | Aggregator | 2025–26 | **D** |
| X7 | BrightCoding — "Website Hosting Complaints 2026" (renewal price shock as the #1 category complaint, "the renewal revolt", Bluehost/HostGator/Newfold switching fatigue, generic renewal verbatim) | Blogger | 2026 | **D** |


## Numbering

IDs are stable, not sequential-perfection: **S10 and S11 were retired** during drafting (two sources dropped for insufficient rigour) and the Shopify table jumps from S9 to S12 so that citations already written into `REPORT.md` stay valid. All other ranges are complete: H1–H26, G1–G30, S1–S41 (minus S10, S11), X1–X7.

## How to re-verify a claim fast

| If you want to check… | Go to |
|---|---|
| Any GoDaddy strategy number ($50M run-rate, A&C margin, de-emphasis of template builders) | `G1` — the Q2 2026 Prepared Remarks PDF; the quote is verbatim from the CEO's opening |
| Any GoDaddy/Shopify financial figure | `G2` / `G3` (SEC Ex-99.1 exhibits) and `S1` / `S2` |
| Hostinger growth, customer counts, Horizons/Reach traction | `H1` (company FY2025 results post) |
| Hostinger AI Builder / Agent mechanics, paid-agent-tier claim | `H3` and `H4` (the two launch posts) |
| Shopify's agentic-commerce roadmap (Catalog, UCP, Agentic Storefronts, Catalog API, revenue share) | `S3` — the Spring '26 Edition merchant post |
| Whether a flashy Shopify AI stat is actually reported | `S24` — the "claim ledger" that separates filed numbers from call/blog claims |
| Any customer verbatim | The `C`-tier row cited next to it contains the exact thread or review page |
| FTC / regulatory framing | `G18` (agency release) and `G25` (final order analysis) |

## Known gaps and caveats in this research

1. **Shopify storefront counts conflict by design.** ~2.86M ("live storefronts", via `S19`) vs 5.2–6.9M ("domains detected", `S19`/`S21`). Neither is an official disclosure; the report shows both and says which metric each figure uses.
2. **Review-volume and score figures vary by filter and date** for the same platform (Hostinger Trustpilot appears at 13.8k and 61.5k; GoDaddy at ~128k–134k). Treated as orders of magnitude, never as a precise count.
3. **Hostinger credit top-up pricing is inconsistent** between two independent reviews ($4.99/10 vs $19.99/50 for the "recommended" pack) — printed as a range with a low-confidence flag.
4. **GoDaddy website-builder renewal prices are not published**; the figures used are reviewer-reported and region-dependent (`G11`–`G17`).
5. **The most-quoted Shopify agentic-commerce statistics are not in the filing.** "AI traffic and orders tripled", "~8,000 UCP stores", "10× AI-assisted order value", "13× AI-referred orders in Q1" trace to the company blog, the earnings call and secondary commentary (`S4`–`S6`, `S24`) — flagged at every use, and excluded from anything load-bearing.
6. **No primary data on Shopify payout-hold incidence.** Only individual BBB complaints (`S8`) and reviewer-documented policy (`S36`), so the report describes mechanics and cites the complaints rather than estimating how often holds happen.
7. **Hostinger's 99.99% uptime claim is self-measured,** including the SLA validated on Hostinger's own monitoring (`H19`, report §3.5). The competitor-downtime claims in `H24`/`H23` are Hostinger-authored and are not used in the conclusions.
8. **Customer quotes are excerpts, not full threads.** Every one names the reporter and links back (`H13`–`H18`, `G23`–`G30`, `S7`–`S8`, `S35`, `S40`, `S41`). Read the thread before repeating a quote externally.
9. **Single-snapshot, US-list pricing.** All three vendors run regional pricing, promotions and seasonal offers; `PRICING-TCO.csv` is dated `captured_on` for exactly this reason.
10. **Nothing here replaces a current terms check.** The two most consequential changes of the last 18 months — GoDaddy cutting its refund window from 30 days to 7 (`G11`) and Shopify shifting paid-theme commission structure (`S3`) — were both announced with little notice. Live contract governs, always.
