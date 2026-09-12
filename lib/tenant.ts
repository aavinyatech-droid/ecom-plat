import { DEMO_STORE } from "@/data/mock";

// Slug/subdomain se store nikalo. Wave 1: prisma.store.findUnique({ where: { slug } })
export async function getStoreBySlug(slug: string) {
  if (slug === DEMO_STORE.slug) return DEMO_STORE;
  return null; // TODO: DB lookup
}
