import { CLIENTS, PLANS, THEMES } from "@/data/mock";
import { Card, PageHead, Badge, Btn, Th, Td } from "@/components/ui";

export default function Clients() {
  return (
    <div>
      <PageHead title="Clients 🏪" sub="Naya client = 2 min me naya store live" />
      <Card className="mb-3"><b>+ Naya client jodo</b>
        <div className="mt-2 grid gap-2 text-sm md:grid-cols-5">
          <input placeholder="Dukaan ka naam" className="rounded-lg border p-2" />
          <input placeholder="slug (sneha-sarees)" className="rounded-lg border p-2" />
          <input placeholder="owner email" className="rounded-lg border p-2" />
          <select className="rounded-lg border p-2">{PLANS.map((p) => <option key={p.id}>{p.name}</option>)}</select>
          <select className="rounded-lg border p-2">{THEMES.map((t) => <option key={t.id}>{t.name}</option>)}</select>
        </div>
        <div className="mt-2"><Btn primary>Create Store (API Wave 1)</Btn></div>
      </Card>
      <Card><table className="w-full"><thead><tr><Th>Store</Th><Th>Owner</Th><Th>Plan</Th><Th>Orders</Th><Th>Revenue</Th><Th>Status</Th><Th /></tr></thead>
        <tbody>{CLIENTS.map((c) => (
          <tr key={c.slug}><Td><b>{c.slug}</b></Td><Td>{c.owner}</Td><Td>{c.plan}</Td><Td>{c.orders}</Td><Td>{c.revenue}</Td>
          <Td><Badge tone={c.status === "ACTIVE" ? "green" : "yellow"}>{c.status}</Badge></Td>
          <Td><Btn>Open</Btn></Td></tr>
        ))}</tbody></table>
      </Card>
    </div>
  );
}
