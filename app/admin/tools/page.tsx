import { TOOLS } from "@/data/mock";
import { Card, PageHead, Badge, Btn } from "@/components/ui";

export default function Tools() {
  return (
    <div>
      <PageHead title="Tools / Integrations 🔌" sub="Har tool ki jagah ready — plan ke hisaab se on/off" />
      <div className="grid gap-3 md:grid-cols-3">
        {TOOLS.map((t) => (
          <Card key={t.id}>
            <div className="flex justify-between"><b>{t.name}</b>
              <Badge tone={t.status === "READY" || t.status === "BUILT-IN" ? "green" : "yellow"}>{t.status}</Badge></div>
            <p className="text-sm text-gray-500">{t.desc}</p>
            <div className="mt-2"><Btn>Configure</Btn></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
