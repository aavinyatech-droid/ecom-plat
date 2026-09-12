import { CLIENT_STATS, ORDERS } from "@/data/mock";
import { Stat, Card, PageHead, Badge, Btn, Th, Td } from "@/components/ui";

export default function ClientHome() {
  return (
    <div>
      <PageHead title="Namaste, Sneha 👋" sub="Aaj ke 9 orders me se 2 PACK karne baaki hain" action={<Btn href="/client/orders" primary>Orders Dekho</Btn>} />
      <div className="grid gap-3 md:grid-cols-4">{CLIENT_STATS.map((s) => <Stat key={s.label} {...s} />)}</div>
      <Card className="mt-3">
        <b>Taze orders</b>
        <table className="mt-2 w-full"><thead><tr><Th>No</Th><Th>Buyer</Th><Th>Item</Th><Th>Status</Th></tr></thead>
        <tbody>{ORDERS.slice(0, 3).map((o) => (
          <tr key={o.id}><Td>#{o.id}</Td><Td>{o.buyer}</Td><Td>{o.item}</Td>
          <Td><Badge tone={o.status === "NEW" ? "yellow" : "green"}>{o.status}</Badge></Td></tr>
        ))}</tbody></table>
      </Card>
    </div>
  );
}
