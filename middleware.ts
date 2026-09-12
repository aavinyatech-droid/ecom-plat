import { NextResponse } from "next/server";

// sneha-sarees.ecom-plat.com  →  /s/sneha-sarees/...
// sneha-sarees.localhost:3000 → /s/sneha-sarees/...  (local test)
// Subdomain → store routing. SIRF apne domains pe:
// sneha-sarees.ecom-plat.com  →  /s/sneha-sarees/...
// sneha-sarees.localhost:3000 →  /s/sneha-sarees/...  (local test)
// Baaki hosts (preview URLs, IPs, apex domain) → normal routing, NO rewrite.
const RESERVED = ["www", "app", "admin", "client", "api"];
const ROOT_DOMAINS = ["ecom-plat.com", "localhost"]; // TODO(prod): asli domain lagao

export function middleware(req: any) {
  const host = (req.headers.get("host") || "").split(":")[0]; // port hatao
  let store: string | null = null;
  for (const root of ROOT_DOMAINS) {
    if (host.endsWith("." + root)) {
      store = host.slice(0, -root.length - 1);
      break;
    }
  }
  if (store && !RESERVED.includes(store) && !store.includes(".")) {
    const url = req.nextUrl.clone();
    url.pathname = `/s/${store}${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] };
