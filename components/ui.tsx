import Link from "next/link";

export function Card({ children, className = "" }: any) {
  return <div className={`rounded-xl border bg-white p-4 shadow-sm ${className}`}>{children}</div>;
}
export function Stat({ label, value, sub }: any) {
  return (
    <Card><div className="text-xs text-gray-500">{label}</div>
    <div className="text-2xl font-bold">{value}</div>
    {sub && <div className="text-xs text-gray-400">{sub}</div>}</Card>
  );
}
const TONES: any = {
  gray: "bg-gray-100 text-gray-700", green: "bg-green-100 text-green-800",
  yellow: "bg-yellow-100 text-yellow-800", red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-800", pink: "bg-pink-100 text-pink-800",
};
export function Badge({ children, tone = "gray" }: any) {
  return <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TONES[tone]}`}>{children}</span>;
}
export function PageHead({ title, sub, action }: any) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div><h1 className="text-xl font-bold">{title}</h1>{sub && <p className="text-sm text-gray-500">{sub}</p>}</div>
      {action}
    </div>
  );
}
export function SideLink({ href, children }: any) {
  return <Link href={href} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">{children}</Link>;
}
export function Btn({ children, href, primary }: any) {
  const c = primary ? "bg-black text-white hover:bg-gray-800" : "bg-gray-100 hover:bg-gray-200";
  if (href) return <Link href={href} className={`rounded-lg px-4 py-2 text-sm font-medium ${c}`}>{children}</Link>;
  return <button title="Wave 1 me live hoga" className={`rounded-lg px-4 py-2 text-sm font-medium ${c}`}>{children}</button>;
}
export function Th({ children }: any) { return <th className="border-b p-2 text-left text-xs text-gray-500">{children}</th>; }
export function Td({ children }: any) { return <td className="border-b p-2 text-sm">{children}</td>; }
