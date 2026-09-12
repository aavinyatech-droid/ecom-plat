import { ADMIN_STATS, CLIENTS } from "@/data/mock";
import { Stat, Card, PageHead, Badge, Btn, Th, Td } from "@/components/ui";

export default function AdminHome() {
  return (
    <div>
      <PageHead title="Mission Control 🛠️" sub="Sab stores, sab paisa — ek jagah" action={<Btn href="/admin/clients" primary>+ Naya Client</Btn>} />
      <div className="grid gap-3 md:grid-cols-4">{ADMIN_STATS.map((s) => <Stat key={s.label} {...s} />)}</div>
      <Card className="mt-3"><b>Top stores</b>
        <table className="mt-2 w-full"><thead><tr><Th>Store</Th><Th>Plan</Th><Th>Orders</Th><Th>Revenue</Th><Th>Status</Th></tr></thead>
        <tbody>{CLIENTS.slice(0, 3).map((c) => (
          <tr key={c.slug}><Td><b>{c.slug}</b></Td><Td>{c.plan}</Td><Td>{c.orders}</Td><Td>{c.revenue}</Td>
          <Td><Badge tone={c.status === "ACTIVE" ? "green" : "yellow"}>{c.status}</Badge></Td></tr>
        ))}</tbody></table>
      </Card>
    </div>
  );
}
