import { ORDERS } from "@/data/mock";
import { Card, PageHead, Badge, Th, Td } from "@/components/ui";

const TONE: any = { NEW: "yellow", PACKED: "blue", SHIPPED: "green", DELIVERED: "green", CANCELLED: "red" };

export default function Orders() {
  return (
    <div>
      <PageHead title="Orders" sub="Status badlo → buyer ko WhatsApp auto-jayega (Wave 2)" />
      <Card>
        <table className="w-full"><thead><tr><Th>No</Th><Th>Buyer</Th><Th>Item</Th><Th>Amt</Th><Th>Pay</Th><Th>Status</Th><Th>Tracking</Th></tr></thead>
        <tbody>{ORDERS.map((o) => (
          <tr key={o.id}><Td>#{o.id}</Td><Td>{o.buyer}<br /><span className="text-xs text-gray-400">{o.phone}</span></Td>
          <Td>{o.item} ×{o.qty}</Td><Td>₹{o.amount}</Td><Td>{o.mode}</Td>
          <Td><Badge tone={TONE[o.status]}>{o.status}</Badge></Td>
          <Td className="text-xs">{o.tracking || "—"}</Td></tr>
        ))}</tbody></table>
      </Card>
    </div>
  );
}
