import { notFound } from "next/navigation";
import { getStoreBySlug } from "@/lib/tenant";
import { THEMES, PRODUCTS } from "@/data/mock";

// MANZIL 1 — public storefront. Theme (rang/font/layout) store ke hisaab se badalta hai.
export default async function Storefront({ params }: { params: { store: string } }) {
  const store: any = await getStoreBySlug(params.store);
  if (!store) notFound();
  const theme = THEMES.find((t) => t.id === store.themeId) || THEMES[0];
  const wa = (p: string) => `https://wa.me/${store.whatsapp}?text=${encodeURIComponent("Hi! Mujhe ye chahiye: " + p)}`;
  return (
    <div style={{ background: theme.bg, fontFamily: theme.font }} className="min-h-screen">
      <nav className="flex items-center justify-between p-4 text-white" style={{ background: theme.primary }}>
        <b className="text-lg">{store.logo} · {store.name}</b>
        <span className="text-xs opacity-80">{store.cod ? "COD ✓" : ""} {store.upi ? "· UPI ✓" : ""}</span>
      </nav>
      <header className="p-8 text-center">
        <h1 className="text-3xl font-bold">{store.name}</h1>
        <p className="mt-1 text-sm opacity-70">{store.tagline}</p>
      </header>
      <main className="mx-auto grid max-w-4xl grid-cols-2 gap-3 p-4 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
            <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
            <div className="p-3">
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="text-sm"><b>₹{p.price}</b> {p.mrp && <s className="text-xs text-gray-400">₹{p.mrp}</s>}</div>
              <div className="text-xs text-gray-500">{p.stock > 0 ? `Stock: ${p.stock}` : "Out of stock"}</div>
              {p.stock > 0
                ? <a href={wa(p.name)} target="_blank" className="mt-2 block rounded-lg p-2 text-center text-sm font-medium text-white" style={{ background: theme.primary }}>WhatsApp pe Order 🛒</a>
                : <div className="mt-2 rounded-lg bg-gray-100 p-2 text-center text-sm text-gray-400">Jald aa raha hai</div>}
            </div>
          </div>
        ))}
      </main>
      <footer className="p-6 text-center text-xs opacity-60">© {store.name} · Easy returns · WhatsApp support</footer>
    </div>
  );
}
