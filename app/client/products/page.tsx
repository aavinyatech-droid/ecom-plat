import { PRODUCTS } from "@/data/mock";
import { Card, PageHead, Badge, Btn, Th, Td } from "@/components/ui";

export default function Products() {
  return (
    <div>
      <PageHead title="Products" sub="46 live · 2 out of stock" action={<Btn primary>+ Naya Product</Btn>} />
      <Card>
        <table className="w-full"><thead><tr><Th>Photo</Th><Th>Naam</Th><Th>Price</Th><Th>Stock</Th><Th /></tr></thead>
        <tbody>{PRODUCTS.map((p) => (
          <tr key={p.id}>
            <Td><img src={p.img} alt="" className="h-10 w-10 rounded object-cover" /></Td>
            <Td><b>{p.name}</b> {p.tag && <Badge tone="pink">{p.tag}</Badge>}</Td>
            <Td>₹{p.price} {p.mrp && <s className="text-xs text-gray-400">₹{p.mrp}</s>}</Td>
            <Td>{p.stock > 0 ? <Badge tone="green">{p.stock}</Badge> : <Badge tone="red">Out</Badge>}</Td>
            <Td><Btn>Edit</Btn></Td>
          </tr>
        ))}</tbody></table>
      </Card>
    </div>
  );
}
