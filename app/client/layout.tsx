import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SideLink } from "@/components/ui";
import { DEMO_STORE } from "@/data/mock";

// MANZIL 2 shell — white-label: seller ko USKI dukaan ka naam dikhta hai.
export default async function ClientLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?next=/client");
  const role = (session.user as any)?.role;
  if (role !== "STORE_OWNER" && role !== "SUPERADMIN") redirect("/");
  return (
    <div className="wrap flex min-h-screen gap-4 py-4">
      <aside className="hidden w-52 shrink-0 md:block">
        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
          <b>{DEMO_STORE.logo} · {DEMO_STORE.name}</b>
          <p className="text-xs text-gray-400">{DEMO_STORE.plan} plan</p>
          <nav className="mt-3 grid gap-1">
            <SideLink href="/client">📊 Dashboard</SideLink>
            <SideLink href="/client/products">👗 Products</SideLink>
            <SideLink href="/client/orders">📦 Orders</SideLink>
            <SideLink href="/client/inbox">💬 Inbox</SideLink>
            <SideLink href="/client/settings">⚙️ Store Settings</SideLink>
            <SideLink href="/s/sneha-sarees">🔗 Meri Website ↗</SideLink>
            <SideLink href="/api/auth/signout">🚪 Logout</SideLink>
          </nav>
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
