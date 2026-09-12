import { THEMES } from "@/data/mock";
import { Card, PageHead, Btn } from "@/components/ui";

export default function Templates() {
  return (
    <div>
      <PageHead title="Templates 🎨" sub="Ready themes — har client ko 1-click me" action={<Btn primary>+ Naya Theme</Btn>} />
      <div className="grid gap-3 md:grid-cols-3">
        {THEMES.map((t) => (
          <Card key={t.id}>
            <div className="h-20 rounded-lg" style={{ background: `linear-gradient(135deg, ${t.primary}, ${t.bg})` }} />
            <b className="mt-2 block">{t.name}</b>
            <p className="text-xs text-gray-500">{t.category} · {t.layout}</p>
            <div className="mt-2 flex gap-2"><Btn>Edit</Btn><Btn>Preview</Btn></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
