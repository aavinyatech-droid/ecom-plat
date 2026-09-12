import { THEMES, DEMO_STORE } from "@/data/mock";
import { Card, PageHead, Btn } from "@/components/ui";

export default function Settings() {
  return (
    <div>
      <PageHead title="Store Settings ⚙️" sub="Naam, theme, payments — sab yahi se" action={<Btn primary>Save</Btn>} />
      <div className="grid gap-3 md:grid-cols-2">
        <Card><b>Dukaan ki jaankari</b>
          <div className="mt-2 grid gap-2 text-sm">
            <label>Naam<input defaultValue={DEMO_STORE.name} className="mt-1 w-full rounded-lg border p-2" /></label>
            <label>Tagline<input defaultValue={DEMO_STORE.tagline} className="mt-1 w-full rounded-lg border p-2" /></label>
            <label>WhatsApp number<input defaultValue={DEMO_STORE.whatsapp} className="mt-1 w-full rounded-lg border p-2" /></label>
          </div>
        </Card>
        <Card><b>Theme (template) 🎨</b>
          <div className="mt-2 grid gap-2">
            {THEMES.map((t) => (
              <label key={t.id} className="flex items-center gap-2 rounded-lg border p-2 text-sm">
                <input type="radio" name="theme" defaultChecked={t.id === DEMO_STORE.themeId} />
                <span className="h-5 w-5 rounded" style={{ background: t.primary }} />
                <b>{t.name}</b><span className="text-xs text-gray-500">{t.category}</span>
              </label>
            ))}
          </div>
        </Card>
        <Card><b>Payments 💰</b>
          <div className="mt-2 grid gap-2 text-sm">
            <label className="flex gap-2"><input type="checkbox" defaultChecked /> UPI (Razorpay)</label>
            <label className="flex gap-2"><input type="checkbox" defaultChecked /> COD</label>
          </div>
        </Card>
        <Card><b>Domain 🔗</b>
          <p className="mt-1 text-sm">Abhi: <b>sneha-sarees.ecom-plat.com</b></p>
          <p className="text-xs text-gray-500">Brand plan pe: shop.apnanaam.com (Wave 3)</p>
        </Card>
      </div>
    </div>
  );
}
