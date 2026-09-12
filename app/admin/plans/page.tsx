import { PLANS } from "@/data/mock";
import { Card, PageHead, Btn } from "@/components/ui";

export default function Plans() {
  return (
    <div>
      <PageHead title="Plans & Billing 💳" sub="Jo client lega, wahi tools khulenge" action={<Btn primary>+ Naya Plan</Btn>} />
      <div className="grid gap-3 md:grid-cols-3">
        {PLANS.map((p) => (
          <Card key={p.id}><b>{p.name}</b><div className="text-xl font-bold">{p.price}</div>
            <ul className="mt-2 text-sm">{p.feats.map((f) => <li key={f}>✓ {f}</li>)}</ul>
            <div className="mt-2"><Btn>Edit</Btn></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
