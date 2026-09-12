import "./globals.css";

export const metadata = { title: "EcomPlat — Apna Brand Store", description: "Fashion/Beauty creators ke liye apna online store. UPI + COD, 48hr me live." };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="bg-gray-50 text-gray-900">{children}</body></html>;
}
