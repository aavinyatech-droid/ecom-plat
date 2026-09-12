import { NextResponse } from "next/server";

// sneha-sarees.ecom-plat.com  →  /s/sneha-sarees/...
// sneha-sarees.localhost:3000 → /s/sneha-sarees/...  (local test)
const RESERVED = ["www", "app", "admin", "client", "api"];

export function middleware(req: any) {
  const host = req.headers.get("host") || "";
  const parts = host.split(".");
  const isLocal = host.includes("localhost");
  let store: string | null = null;
  if (isLocal && parts.length > 1) store = parts[0];
  else if (!isLocal && parts.length > 2) store = parts[0];
  if (store && !RESERVED.includes(store)) {
    const url = req.nextUrl.clone();
    url.pathname = `/s/${store}${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] };
