import { MSGS } from "@/data/mock";
import { Card, PageHead, Badge, Btn } from "@/components/ui";

export default function Inbox() {
  return (
    <div>
      <PageHead title="Inbox 💬" sub="Buyer ke sawal — yahi se reply karo" />
      <div className="grid gap-2">
        {MSGS.map((m) => (
          <Card key={m.id}>
            <div className="flex justify-between"><b className="text-sm">{m.from}</b><Badge tone={m.status === "NEW" ? "yellow" : "green"}>{m.status}</Badge></div>
            <p className="mt-1 text-sm">{m.text}</p>
            <div className="mt-2 flex items-center gap-2"><span className="text-xs text-gray-400">{m.time}</span><Btn>Reply</Btn></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
