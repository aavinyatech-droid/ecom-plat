"use client";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui";

function Form() {
  const next = useSearchParams().get("next") || "/client";
  const [email, setEmail] = useState(""); const [password, setPassword] = useState("");
  const demo = next.startsWith("/admin") ? ["admin@ecom-plat.com", "admin123"] : ["demo@ecom-plat.com", "demo123"];
  return (
    <Card className="w-full max-w-sm">
      <h1 className="text-lg font-bold">EcomPlat Login</h1>
      <p className="text-xs text-gray-500">Demo: {demo[0]} / {demo[1]}</p>
      <form className="mt-3 grid gap-2" onSubmit={(e) => { e.preventDefault(); signIn("credentials", { email, password, callbackUrl: next }); }}>
        <input className="rounded-lg border p-2 text-sm" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="rounded-lg border p-2 text-sm" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="rounded-lg bg-black p-2 text-sm font-medium text-white">Login</button>
        <button type="button" onClick={() => { setEmail(demo[0]); setPassword(demo[1]); }} className="text-xs text-gray-500 underline">demo login bhar do</button>
      </form>
    </Card>
  );
}
export default function Login() {
  return <div className="flex min-h-screen items-center justify-center p-4"><Suspense><Form /></Suspense></div>;
}
