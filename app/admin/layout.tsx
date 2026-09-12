import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SideLink } from "@/components/ui";

// MANZIL 3 shell — sirf hum (SUPERADMIN). Yaha se hajaro clients manage honge.
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login?next=/admin");
  if ((session.user as any)?.role !== "SUPERADMIN") redirect("/");
  return (
    <div className="wrap flex min-h-screen gap-4 py-4">
      <aside className="hidden w-52 shrink-0 md:block">
        <div className="rounded-xl bg-black p-3 text-white">
          <b>🛠️ EcomPlat Admin</b>
          <nav className="mt-3 grid gap-1">
            <SideLink href="/admin">📊 Dashboard</SideLink>
            <SideLink href="/admin/clients">🏪 Clients</SideLink>
            <SideLink href="/admin/templates">🎨 Templates</SideLink>
            <SideLink href="/admin/plans">💳 Plans</SideLink>
            <SideLink href="/admin/tools">🔌 Tools</SideLink>
            <SideLink href="/api/auth/signout">🚪 Logout</SideLink>
          </nav>
        </div>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
