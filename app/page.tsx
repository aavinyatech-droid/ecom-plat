import Link from "next/link";
import { PLANS } from "@/data/mock";
import { Card } from "@/components/ui";

export default function Home() {
  return (
    <div>
      <nav className="wrap flex items-center justify-between py-4">
        <b className="text-xl">EcomPlat</b>
        <div className="flex gap-2 text-sm">
          <Link href="/login?next=/client" className="rounded-lg bg-gray-100 px-4 py-2">Seller Login</Link>
          <Link href="/s/sneha-sarees" className="rounded-lg bg-black px-4 py-2 text-white">Demo Store ↗</Link>
        </div>
      </nav>
      <header className="wrap py-14 text-center">
        <h1 className="text-4xl font-extrabold">Tum reels banao.<br />Bechna hum sambhalte hain.</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">Fashion/Beauty creators ke liye apna brand store — UPI + COD, WhatsApp order alerts, 48 ghante me live. DM me "PP?" ke jhanjhat se azaadi.</p>
        <div className="mt-6 flex justify-center gap-2">
          <Link href="/login?next=/client" className="rounded-lg bg-pink-700 px-6 py-3 font-medium text-white">7 Din FREE Try Karo</Link>
          <Link href="/s/sneha-sarees" className="rounded-lg bg-white px-6 py-3 font-medium ring-1 ring-gray-300">Demo Dekho</Link>
        </div>
      </header>
      <section className="wrap grid gap-3 py-6 md:grid-cols-3">
        {[["1. Products bhejo", "Instagram + photos bhejo, hum store bana denge."], ["2. Link bio me lagao", "Ek link = poori dukaan. UPI + COD ready."], ["3. Orders WhatsApp pe", "Naya order = turant alert. Tum bas parcel bhejo."]].map(([t, d]) => (
          <Card key={t}><b>{t}</b><p className="text-sm text-gray-600">{d}</p></Card>
        ))}
      </section>
      <section className="wrap py-10">
        <h2 className="text-center text-2xl font-bold">Simple Pricing</h2>
        <p className="text-center text-sm text-gray-500">Setup hum karke denge — one-time ₹2,999 (pehle 10 ke liye special)</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {PLANS.map((p) => (
            <Card key={p.id}><b>{p.name}</b><div className="text-xl font-bold">{p.price}</div>
              <p className="text-sm text-gray-500">{p.desc}</p>
              <ul className="mt-2 text-sm">{p.feats.map((f) => <li key={f}>✓ {f}</li>)}</ul></Card>
          ))}
        </div>
      </section>
      <footer className="wrap flex justify-between py-8 text-sm text-gray-400">
        <span>© 2026 EcomPlat</span><Link href="/admin">Platform Admin →</Link>
      </footer>
    </div>
  );
}
