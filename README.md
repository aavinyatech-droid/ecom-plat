# EcomPlat — Multi-Tenant E-commerce SaaS for Fashion/Beauty Creators

3 hisse: **Storefront** (buyer website) + **Client App** (seller dashboard) + **Super Admin** (hamara control).

## Run (Wave 0 scaffold, demo data)
```bash
npm install
cp .env.example .env.local
npm run dev
```
Kholo: `http://localhost:3000`

| Kya | Kahan | Login |
|---|---|---|
| Homepage | `/` | — |
| Demo store | `/s/sneha-sarees` (ya `sneha-sarees.localhost:3000`) | — |
| Client App | `/client` | `demo@ecom-plat.com` / `demo123` |
| Super Admin | `/admin` | `admin@ecom-plat.com` / `admin123` |

## Docs
- `STRATEGY.md` — business gameplan
- `ARCHITECTURE.md` — system blueprint (3 layers, modules, waves)
- `prisma/schema.prisma` — database design (Wave 1 me wire hoga)
