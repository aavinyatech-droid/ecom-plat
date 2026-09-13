# Source ledger

Every source used in `REPORT.md`, deduplicated, with date, what it was used for, and a confidence tier.
Research window: **August–September 2026** (compiled 13 Sept 2026). Prices captured Sept 2026, US list.

## Confidence tiers

| Tier | Meaning | How to treat it |
|---|---|---|
| **A** | Primary company record: press release, earnings transcript, SEC filing, official docs, regulator release | Cite directly. Numbers here are the report's spine. |
| **B** | Independent measurement or dated specialist reporting: Netcraft, CCIC, review-lab tests, trade press | Cite directly where the methodology is stated; note the reviewer when opinions diverge. |
| **C** | User-generated reports: Reddit, Trustpilot, G2, ConsumerAffairs, BBB, forum threads | Never generalise from a single thread. Used for **patterns** (same complaint, many independent reporters) and always attributed. |
| **D** | AI-assisted / low-quality aggregators, marketing blogs | Used only for figures they sourced publicly, and only as directional. Not relied on for conclusions. |

**A note on review-platform scores.** Trustpilot, G2, ConsumerAffairs and Sitejabber are self-selected samples with known review-gating and incentivised-review problems; reported counts for the same company differ by platform and by filter (e.g. Hostinger Trustpilot appears at 13.8k and at 61.5k depending on filter). Where a *single* score is quoted it should be treated as indicative, not audited. The report therefore leans on **score patterns across platforms** and on the substance of recurring complaints.

---

## Hostinger — 24 sources

| ID | Source | Date | Tier | Used for |
|---|---|---|---|---|
| H1 | hostinger.com/blog/financial-results-2025/ | 2026 | A | FY2025 €275.4M (+51%), 4.6M customers, Horizons 800k, Reach 150k, 6× FT1000, #2 Statista long-term growth |
| H2 | hostinger.com/newsroom (via H1) | 2026 | A | CEO quote "we were built different", 22 years |
| H3 | hostinger.com/blog/ai-builder-launch/ | 18 Aug 2026 | A | AI Builder = Website Builder + Horizons merged; AI-provisioned auth/DB/storage/email; free Connector for Claude Code & Cursor; plans and credits; Žirgulė "the next battle… what happens next" |
| H4 | hostinger.com/blog/agent-launch/ | 2 Sept 2026 | A | Hostinger Agent; 91% self-resolution of ~1.5M monthly conversations; 41%→72% specialist guidance; live chat 10%→4.5%; ~3 min vs 50+ min; ~1 in 10 to human "AI CX Engineers"; "5 million clients"; agentic work as a paid tier; Ecommerce launched Jul 2026; Remixable Templates |
| H5 | unicorns.lt (Lithuanian business press) | 2026 | B | Kodee ≈1.5M conversations/mo, 350+ MCP tasks, >€9M/yr support savings |
| H6 | webhosting.today | 18 Mar 2026 | B | €11.8M employee option/liquidity payout |
| H7 | Wikipedia (Hostinger), citing Reuters et al. | 2004–Nov 2025 | B | 2004 Kaunas founding, 2011 rename, 2008 US base, 2021 Nov capital-investment 31% PE, Nov 2025 dividend recap, data centres incl. India, 2015 & 2019 breaches |
| H8 | netcraft.com | Mar 2015 | B | Hostinger+000webhost ≈90% of Steam phishing sites; ~93% of its hosted domains abusive (methodology: subdomain count) |
| H9 | ccic.org Domain Abuse Report | 2023 → Apr 2026 | B | Top-5 phishing host in 2023; out of top 5 by Apr 2026 |
| H10 | max-productive.com | 2026 | B | Premium $2.99→$10.99, Business $3.99→$16.99, +250–311% renewal ranges, entry-process tiers |
| H11 | checkthat.ai (Hostinger pricing + reviews) | 2026 | D | Renewal multipliers to +550%, ~75% of renewal-flagged reviewers cancelled, 4.7★/13.8k, plan limits, credit packs |
| H12 | hostscore.io | 2026 | B | Business $3.99→$16.99 (+325%), Cloud $7.99→$25.99 (+226%) |
| H13 | websitebuilderexpert.com | 2025–26 | B | Horizons tier structure $6.99–$79.99, credit allocation, ZIP export only Hobbyist+, "not cheap long-term" |
| H14 | allaboutcookies.org | 2026 | B | Refunds default to account credit; renewal-cancellation friction; 96-hour domain window; no phone support |
| H15 | Hostinger docs/Knowledge Base (SLA, uptime monitoring, refund policy, limits) | 2026 | A | 99.9% network-availability SLA, 5% credit, self-verified monitoring, no builder export |
| H16 | G2 (Hostinger) | 2026 | C | 4.4★; "support sometimes upsells", onboarding friction, refund expectations |
| H17 | Reddit r/Wordpress | Apr 2025 | C | "cheap host looks best when the site is still young"; renewals not refundable |
| H18 | Reddit r/VPS | Dec 2024 | C | VPS throttled at 75% sustained CPU, then 20%; "never use them again" |
| H19 | Reddit r/sysadmin | 2026 | C | Whole-account suspension, backups refused, "not providing any backup" |
| H20 | Reddit r/WebsiteBuilder | Apr 2026 | C | Support praised, but "I wouldn't recommend to a business" |
| H21 | Reddit r/Hostinger + Trustpilot reviews | 2025–26 | C | "AI content plan feels like a trap"; credit exhaustion mid-project; renewal shock |
| H22 | developer.hashnode.dev (community post) | 2026 | C | "the pricing structure is aggressive… paywalled features they couldn't preview" |
| H23 | Hostinger business strategy / competitor content (Hostinger-authored) | 2026 | A(bias) | Own positioning vs Lovable/Bolt/Replit/Vercel and pricing gaps; also the source of the 66% vs GoDaddy claim |
| H24 | Hostinger Newsroom (Wix 23.6% vs 27.2% uptime) | 2026 | A(bias) | Competitor downtime claim — noted as self-interested in the report |

## GoDaddy — 30 sources

| ID | Source | Date | Tier | Used for |
|---|---|---|---|---|
| G1 | GDDY Q2 2026 Earnings Prepared Remarks PDF (s23.q4cdn.com) | 3 Sept 2026 | A | The strategy spine: Airo unified as "agentic operating system", ABRR $10M→$50M in a quarter "nearly all organic", A/B-tested into domain purchase path, de-emphasis of standalone DIFM/template builders, Developer Platform, ANS in production + Linux Foundation intent, voicebot −16pp, $852M buybacks, Investor Night Dec 2026, Q3 guide |
| G2 | GDDY Q2 2026 earnings press release (SEC Ex-99.1) | 3 Sept 2026 | A | Revenue $1.298B (+6.6%), ARR $4.421B, A&C $514.8M (+11%) at 46.8% margin, Core $783.2M (+3.9%), FCF $443.5M / $1.73B TTM, ARPU $250, 20.5M customers, retention >85% |
| G3 | GDDY Q4 2025 earnings call transcript (via fool.com) | 13 Feb 2026 | A | FY2025 revenue $4.951B (+8.3%), A&C $1.889B (+14.3%), NEBITDA $1.586B, FCF $1.599B, ARPU $242, 20.42M customers, FY26 guide $5.215–5.255B, ~200bps .CO drag, >50% multi-product / >70% Airo cohort, 2026 = "year of investment" |
| G4 | Godaddy.com press release, "GoDaddy Launches Airo.ai" | 13 Nov 2025 | A | First AI platform for entrepreneurs; six-agent suite framing |
| G5 | 3BL / PR Newswire coverage of Airo launch | 2 Dec 2025 | B | DIFY, "self-service, done-for-you and do-it-with-you", "most complete agentic toolkit", agency-positioning quote |
| G6 | Godaddy.com Products/News: Airo for WordPress, Web Design AI, AI Business Toolkit, Builder AI 2.0, MyBuilt | 2026 | A | Launch dates and capabilities: 26 Feb 2025, 15 Jul 2025, 17 Sept 2025, 11 May 2026, 25 Jun 2026 |
| G7 | SEC 10-Q / prior filings (via press releases) | 2024–Q1 2025 | A | Net debt ≈$2.7B / 1.4×; 2024 revenue $4.5B, A&C $1.65B, A&C margin ~44% |
| G8 | StockAnalysis / Zacks / Benzinga post-earnings coverage | 3 Sept 2026 | B | EPS $1.83 vs $1.69 est.; stock −7.7%; bookings-run-rate commentary |
| G9 | investing.com (Goldman Sachs Communacopia; Citi 31st Annual Global TMT) | 8–9 Sept 2026 | B | "no need to worry about customers"; domain aftermarket 3–4% with $40M revenue loss; 46% A&C margin, 62% gross, 73% incremental, 1.5% revenue growth, 10% EPS growth |
| G10 | ftc.gov press release | 15 Jan 2025 | A | FTC action: data-security failures since at least 2021, plaintext stored credentials, 2021 MFA deployment, 2021/2022/2023 incidents |
| G11 | natlawreview.com / hunton.com (order analysis) | 2025 | A/B | Consent order **finalised 21 May 2025**, 3-0, no monetary penalty, biennial independent assessments from 2026, 20-year programme, "deliberate indifference" language |
| G12 | fcc.gov / GDDY A-to-Z privacy policy page | 2025–26 | A | Privacy-policy revisions; "not for children under 13" clause; FCC consumer privacy rule history |
| G13 | checkthat.ai (GoDaddy pricing + Airo reviews) | 2026 | D | .com $4.99→$21.99 (+2135%), builder $9.99→$16.99, Airo Plus $59.88→$95.88, 3–10× renewal multiplier, free tier publishes nothing |
| G14 | litmustools.com pricing breakdown | 2026 | B | Airo Free/Starter/Pro/Ultimate $0/$9.99/$24.99/$99.99 → $14.99/$36.99/$149.99; 50/150/300/750 credits; Sites 1/1/10/50; annual-billing monthly rate |
| G15 | tooltester.com (GoDaddy Airo reviews) | 2026 | B | 22,700 reviews 4.4★; "10× faster", "looks like 400,000 other GoDaddy websites", "not a finished product, a prototype" |
| G16 | themeburn.com | 2025 | B | Refund window cut 30→7 days (Feb 2025) and extended to multi-year renewals; "16% of negative reviews are cancellation complaints"; 4.4→4.3 rating response |
| G17 | allaboutcookies.org | 2026 | B | Bundled $332.62/yr → $537.62 by yr 4 (+62%); "auto-renewed after opting out"; no code export from Websites + Marketing |
| G18 | hostadvice.com | 2025–26 | B | 60-minute hold and script answers; support degrades after year 1; long chats end in product recommendation |
| G19 | Reddit r/webdev (1jv8xez) | 2024–25 | C | 10-year auto-renewal $235/domain; redemption fees ≈$600; cancellation-code lockout for 7 days; dynamic renewal pricing |
| G20 | Reddit r/sweatystartup | 2024–25 | C | Year-1 $167.39 → year-2 $225.84 (+$100/yr) |
| G21 | Reddit r/Entrepreneur (1b6028u) | 2025 | C | "GoDaddy sites… no way to export them" |
| G22 | Reddit r/Trae_ai + Trustpilot | 2025–26 | C | "dark patterns at their worst"; "they do not care about you"; free-plan limits |
| G23 | Trustpilot (GoDaddy) | 2026 | C | 4.5★ over ~128–134k reviews — the scale of the positive cohort is itself data |
| G24 | ConsumerAffairs / Sitejabber (GoDaddy) | 2026 | C | 1.2–1.7★ and ~2.8★ — same company, opposite rating; chargebacks and "I can't leave" |
| G25 | ConsumerAffairs (review-mechanics research) | 2026 | C | Reported "bad reviews get deleted" pattern; incentive-review programme |
| G26 | Wikipedia (GoDaddy) + GoDaddy Blog (history) | 1997–2025 | B | 1997 founding, 2006 IPO, 2011 KKR/TCP take-private, 2015 NYSE re-IPO, NEA stake, ~6,500 employees |
| G27 | BuiltWith usage statistics (via market-share sources) | 2025–26 | B | GoDaddy Builder ~0.7–0.9% of all sites and flat |
| G28 | godaddy.com pricing pages + Airo announcement | 2025–26 | A | Starter $10/mo, Pro $20/mo, 1,000+ templates, Airo-powered builder at $0, launch copy |
| G29 | Godaddy.com Airo product pages (credits, limits) | 2026 | A | 24/7 phone + chat, AI credits, site limits, publishing controls |
| G30 | Hostinger-authored comparison (66% vs GoDaddy, 63% vs WP Engine) | 2026 | A(bias) | Quoted in the report **only** as an example of self-interested benchmarking |

## Shopify — 41 sources

| ID | Source | Date | Tier | Used for |
|---|---|---|---|---|
| S1 | shopify.com/news/shopify-q2-2026-financial-results + SEC 8-K Ex-99.1 | 4–5 Aug 2026 | A | Q2 revenue $3.583B (+34%), GMV $115.567B (+32%), gross profit $1.708B (+29%), op income $488M (+68%), FCF $654M/18%, subscriptions +21% vs merchant solutions +37%, Q3 low-30s guidance, OpEx 33–34%, LVMH/Mulberry/Balmain/Orvis |
| S2 | Shopify Q1 2026 press release (GlobeNewswire) + 10-Q | 5 May 2026 | A | Q1 $3.170B (+34%), GMV $100.743B, op income $382M, −$1.08B equity investment mark, 90%+ revenue from >1-yr merchants, ~$100M merchants up ~30%, Q2 outlook |
| S3 | FY2025 results (Q4'25 8-K) + CapitalBET + LinkedIn/Flywheel commentary | Feb 2026 | A | FY25 revenue $11.556B (+30%), GMV $378.441B (+29%), ~$2B FCF at 17%, $2B buyback, FY25 op income ~$1.5B, Q4'25 $3.7B (+28%) |
| S4 | Shopify Enterprise / Flexport partnership announcements | Jan 2026 | A | Official shipping-partner arrangement, Shopify Logistics units transferring to Flexport, enterprise "one control plane" framing |
| S5 | CNBC (Shopify divests logistics to Flexport) | 4 May 2023 | A | Flexport took ~1,000 staff; Shopify received ~13% of Flexport — **the only verifiable Shopify–Flexport relationship** |
| S6 | shopify.com/news/spring-26-edition-merchant (full) | 9 Jun 2026 | A | Catalog at 1B+ products default-on; Sidekick intelligence layer; Agentic Storefronts admin; search-intelligence query gaps; connectors Claude/ChatGPT/Perplexity/Manus/Replit/Vercel/Lovable; Catalog API + developer revenue share; free AI with no caps; new checkout; UCP with Google; Build with Claude; "12, 18, 20 things for the merchant"; "six to nine months into meaningful agentic commerce traffic patterns" |
| S7 | Shopify newsroom: "Introducing Universal Commerce Protocol" | 4 Nov 2025 | A | Open standard, day-one agentic storefronts, checkout on ChatGPT, Claude, Perplexity, Google |
| S8 | Shopify Eng blog — "How Shopify Built an Agentic Catalog on DynamoDB" | 2026 | A | Catalog engineering approach |
| S9 | Shopify docs — "Update on Universal Commerce Protocol and Agentic Storefronts" | 2026 | A | Default-enablement of UCP for merchants |
| S10 | Global Retail Developer Summit coverage (Shopify) | Jun 2026 | A | Catalog API + developer monetisation ("revenue share") |
| S11 | stocktitan.net / finance.yahoo.com (Q1'26 summary) | 5 May 2026 | B | Sidekick 34M conversations, DAU +3.6× YoY, +8% of new merchants hitting 5 orders within 15 days, Q2 guide |
| S12 | SEC filings via tradingnews / StockTitan / Insider Monkey | 2026 | A/B | ~2.86M live storefronts (Store Leads), ~$3B in agentic-influenced sales, AI-channel GMV doubling claim, Q2'25 +31% context, 10-Q figures |
| S13 | theshopiflex.com (Plus migration guide) | 2026 | B | Plus $2,300+/mo, migration $2k–8k simple / $10k–30k complex, 2–4 vs 6–12 weeks, redirect mapping as SEO risk, app subscription creep, 0.25% fee saving at $100k/mo |
| S14 | Craftybase + Reddit r/shopify (plan economics) | 2025–26 | B/C | Basic $29–39 / Grow $79 / Advanced $399–499, 0.5–2% gateway penalty, $150–400/mo realistic total, apps $50–200/mo, ~$300/mo audit threshold, 10.1% support ticket topic, 67% Payments penetration, $0.75 trial |
| S15 | Reddit r/shopify (1pxv283) | 15 Sept 2025 | C | "It's expensive. That's the honest truth… every meaningful feature… either a paid app or a higher plan"; "gold standard for selling" |
| S16 | Reddit r/shopify (1oj6k3q) | 19 Oct 2025 | C | Basic viable to ~$15k/mo, Grow beats it past ~$30k/mo, "Shopify fees… 2.9% + 30 cents" |
| S17 | Reddit r/shopify (063783) | Apr 2025 | C | "Shopify is still way ahead of WooCommerce on app polish and support quality" |
| S18 | Reddit r/shopify (Sidekick free) | 2026 | C | Sidekick free on all plans and generous vs per-token rivals |
| S19 | BBB complaint narratives via easysellapp.com | 2026 | A(complaint text)/C | Stores restricted for "suspected illegitimate commerce", 365-day retention, admin access removed so chargeback evidence cannot be filed, $10,483.63 held, "no refund for the months we paid", bank details unchangeable |
| S20 | easysellapp.com (retention-mechanics explainer) | 2026 | B | 120-day standard hold, up to 365-day suspected-illegitimate hold, >1% chargeback ratio trigger |
| S21 | Trustpilot (Shopify) + reported BBB F rating (via aggregators) | 2026 | C | ~1.5★; caution: dominated by consumer-side (store) complaints |
| S22 | Wikipedia (Shopify) | 2026 | B | 17,000+ apps, 100k+ partners, Shop Pay 150M+ users, GMV $236B in 2022 baseline, HQ Ottawa, founder Tobi Lütke |
| S23 | Store Leads + BuiltWith (via market-share aggregators) | Q1–Q2 2026 | B/C | 2.86M live storefronts vs 5.2–6.9M domains, 47k Plus, 1,200–2,800 new storefronts/mo, ~1.1% QoQ growth |
| S24 | uouengine.com (Shopify store revenue distribution) | 2026 | D | Only 13.95% of stores exceed $10k/month — long-tail concentration |
| S25 | firstmoveloans.com (2026 stats) | 2026 | D | 30% YoY store growth cited |
| S26 | Core-wave.com (AI stats) | 2026 | D | "AI traffic tripled, orders too; 10× increase in AI-assisted order value over 12 months" — **blog/analyst claim, not in filings; flagged in §10.3** |
| S27 | 3DS Center (Google–Shopify agentic checkout) | 2026 | D | ">8,000 stores on UCP" — **not in any filing; flagged in §10.3** |
| S28 | upknee.ai (renewal economics) | 2026 | D | Shopify Plus "20% higher renewal rates" — weak sourcing; directional only |
| S29 | Reddit r/ecommerce (AI shopping 13× claim) | 2026 | C | Merchant-scepticism framing: "sounds like a LinkedIn success story" |
| S30 | shopify.com/pricing | 2026 | A | Plan list, trial, "no hidden fees", AI credit positioning |
| S31 | Shopify docs — pricing details, theme costs, Markets duties, Shopify Tax | 2026 | A | Transaction and processing rates, duties % per eligible order, per-transaction tax billing, theme pricing |
| S32 | Shopify docs — Sidekick AI assistant | 2026 | A | Feature list (theme creation, bulk edits, SEO optimisation, custom app creation) |
| S33 | Shopify Engineering — "Scaling Sidekick as an agentic assistant" | 2026 | A | Sidekick architecture and scale |
| S34 | Shopify 2025 Letter to Shareholders | 2026 | A | Strategy and "Go all in on AI" framing |
| S35 | Shopify newsroom — "Shopify and Google: Building the Agentic Commerce Standard" | 2025–26 | A | UCP co-development with Google |
| S36 | SEC 8-K / 6-K filings (10-Q, 8-K exhibits) | 2025–26 | A | Reported financials, risk factor "relying on AI" |
| S37 | SEC filing summaries via StockTitan / FinanceFeeds | 2026 | B | Q2'26 GMV/FCF confirmation, Q3 outlook |
| S38 | GlobeNewswire — "Shopify Reaches $1 Trillion in Annual Online Sales" | Feb 2026 | A | FY2025 revenue $11.1B (+30%) framing, $1T cumulative/annual milestone messaging |
| S39 | LinkedIn (Tobi Lütke) + @ShopifyDev | 2026 | B | Flexport stake/partnership framing; UCP adoption across ChatGPT, Gemini, Claude, Perplexity |
| S40 | Shopify changelog (Dec 2025, Jan 2026) | 2025–26 | A | Sidekick custom app generation GA, Checkout Blocks on Plus, agentic storefront updates |
| S41 | Q1'26 GlobeNewswire release (full text) | 5 May 2026 | A | Direct quotes on AI, agentic commerce, sidekick usage |

## Cross-vendor and market context — 7 sources

| ID | Source | Date | Tier | Used for |
|---|---|---|---|---|
| X1 | sitebuilderreport.com (market share) | 2025–26 | B | 15.8M tracked websites; WordPress ~40% of all sites / ~60% of CMS; Shopify 5.2%, Wix 4.3% (+32.6%), Squarespace 2.5%, Weebly −15% |
| X2 | w3techs.com | 2026 | B | Wix/Squarespace/Shopify ~4% each, WordPress ~60% of CMS |
| X3 | colorlib.com | 2026 | B | Shopify 7.5% of all websites (record) vs 4.7% Jan 2025 |
| X4 | hostingadvice.com | 2026 | B | Shopify ~14% of US e-commerce GMV |
| X5 | statista.com | 2025 | B | Shopify ~8.2% US e-commerce share vs Amazon ~35.7% |
| X6 | brightcoding.com (hosting complaints 2026) | 2026 | C/D | Renewal price shock as the #1 complaint category-wide ("renewal revolt"); HostGator/Bluehost "renewal price hit me like a train" |
| X7 | Hostinger, GoDaddy and HostGator Trustpilot aggregate comparisons (via aggregator D-tier sites) | 2026 | D | 96% vs 94% uptime, <1s vs 2–3s — **not independently audited; excluded from conclusions** |

---

## Known gaps in this research

1. **Shopify store counts conflict** — 2.86M (Store Leads, "live storefronts") vs 5.2–6.9M (BuiltWith, domains detected). Both are in the report; the metric definitions differ and neither is official.
2. **Review-volume figures for the same platform vary** by filter and date (Trustpilot Hostinger 13.8k vs 61.5k; GoDaddy 128k vs 134k). Treated as orders-of-magnitude.
3. **Credit top-up pricing for Hostinger is inconsistent** across two independent reviews ($4.99/10 vs $19.99/50 for the "recommended" pack). Listed as a range with low confidence.
4. **GoDaddy builder renewal prices are not published** — reviewer-reported and region-dependent.
5. **The most-cited Shopify agentic-commerce claims** ("tripled AI traffic and orders", ">8,000 UCP stores", "10× order value growth", "13× AI-referred orders in Q1") are **not in the press release or 10-Q** — they trace to company blog and secondary commentary. Flagged wherever used.
6. **No primary-source data on Shopify payout-hold volumes** — only individual BBB complaints, so the report describes mechanics and cites the complaints rather than estimating incidence.
7. **Hostinger's 99.99% uptime claim** is self-measured and not independently audited, including the SLA validation using its own monitoring platform.
8. **Customer quotes are excerpts**, not the full threads. Each includes a username and a link back to the original. Read the thread before acting on a quote.
9. Everything here is **US-list pricing in a single snapshot** — all three vendors run regional pricing, promotions, and seasonal offers.
10. **Nothing in this directory is a substitute for a current terms check.** Before any customer signs, the live contract governs: refund windows, renewal multipliers, export rights and enforcement policies change, and the two most consequential 2025–26 changes (GoDaddy's refund cut, Shopify's paid-theme commission shift) were both announced with little notice.
