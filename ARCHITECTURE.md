# ECOM-PLAT — System Architecture (Proper Backend Blueprint)

## 1. Teen Manzilein (3 Layers)

```
SUBDOMAIN ROUTING (middleware.ts):
sneha-sarees.ecom-plat.com → /s/sneha-sarees/...   (MANZIL 1: Storefront, public)
ecom-plat.com/client  → Client App  (login: STORE_OWNER)
ecom-plat.com/admin   → Super Admin (login: SUPERADMIN)
```

### MANZIL 1 — STOREFRONT (buyer dekhta hai) — `app/s/[store]/`
- Home (theme-based hero + products), Catalog, Product page, Cart
- Checkout: UPI (Razorpay) + COD — Wave 2
- "WhatsApp pe order" button (MVP me yehi kaam karega)
- Track order, Return policy, Contact — Wave 2

### MANZIL 2 — CLIENT APP (seller chalata hai) — `app/client/`
| Module | Kaam |
|---|---|
| Dashboard `/client` | Revenue, orders, visitors, low-stock alerts |
| Products `/client/products` | Add/edit, photo, price, size-color variants, stock |
| Orders `/client/orders` | Naya order → Packed → Shipped (+tracking ID) → Delivered |
| Inbox `/client/inbox` | Buyer ke sawal ("M size hai?") — yahi reply |
| Customers | (Wave 2) buyer list, repeat buyers |
| Coupons | (Wave 3) SALE10 jaise codes |
| Theme Studio `/client/settings` | Template choose, logo, rang, WhatsApp number |
| Domain | (Wave 3) `shop.unkaname.com` connect |

### MANZIL 3 — SUPER ADMIN (hum chalate hain) — `app/admin/`
| Module | Kaam |
|---|---|
| Dashboard `/admin` | Stores, MRR, orders-today, trials expiring |
| Clients `/admin/clients` | Add client, plan lagao, suspend, login-as-client |
| Templates `/admin/templates` | Themes banao/edit (Ethnic, Street, Minimal...) |
| Plans `/admin/plans` | Trial/Boutique/Brand — price + limits |
| Tools `/admin/tools` | Razorpay, WhatsApp, Shiprocket, Domain — per-store on/off |
| Support/Tickets | (Wave 2) client complaints |
| Reports | (Wave 3) revenue, churn, top stores |

## 2. White-Label Rule (client ko lage USKA platform)
- Client kabhi "ecom-plat" naam nahi dekhega apne store pe (free plan chhod ke).
- Storefront: uska logo, uske rang, uska domain.
- Client App topbar: uski dukaan ka naam + logo.
- Buyer ko WhatsApp seller ke number se jaye, hamare se nahi.
- Hum dikhenge sirf: login page footer + super admin me.

## 3. Database — 1 DB, sab alag (prisma/schema.prisma)
- Har table me `storeId` = kaunsi dukaan ka data hai.
- **RULE:** bina `storeId` filter ke koi query nahi. Yehi hajaro clients ko safe rakhta hai.
- Core tables: User, Store, StoreMember, Plan, Subscription, Theme, Category,
  Product, Customer, Order, OrderItem, Message, Coupon, Integration, Payment.

## 4. Request Flows
**Naya order:** Buyer checkout → Order(NEW) → auto-WhatsApp seller+buyer →
seller Ships + tracking → auto-WhatsApp buyer. (Hum courier nahi chhute.)

**Naya client:** Admin → Add client (slug+plan+theme) → Store(TRIAL) banta hai →
owner login → products dale → store live. Setup fee Razorpay se alag lete hain.

## 5. Build Waves
- [x] **Wave 0 (scaffold):** 3 layers, theme system, mock data, demo login — YEHI FOLDER HAI
- [ ] **Wave 1:** Postgres + Prisma wire, real auth (bcrypt), products/orders CRUD APIs
- [ ] **Wave 2:** Razorpay UPI + COD checkout, WhatsApp alerts, track-order, support inbox
- [ ] **Wave 3:** Theme Studio polish, custom domains, coupons, customers, reports
- [ ] **Wave 4:** Shiprocket one-click label, Instagram feed, AI captions/descriptions

## 6. Kya MOCK hai abhi (honest list)
`data/mock.ts` se chal raha hai: stores, products, orders, msgs, plans, tools.
Login demo-only hai (`lib/auth.ts` me TODO). Wave 1 me Prisma se replace hoga —
page ka design same rahega, sirf data source badlega.
