// DEMO DATA — Wave 1 me Prisma queries se replace hoga. Design same rahega.
export type Theme = { id: string; name: string; category: string; primary: string; bg: string; font: string; layout: string };
export const THEMES: Theme[] = [
  { id: "ethnic", name: "Ethnic Glow", category: "Saree / Suit", primary: "#9d174d", bg: "#fff7f9", font: "Georgia, serif", layout: "hero-grid" },
  { id: "street", name: "Street Bold", category: "Western Wear", primary: "#111111", bg: "#ffffff", font: "Arial, sans-serif", layout: "banner-rows" },
  { id: "minimal", name: "Minimal Chic", category: "Beauty / Jewellery", primary: "#b45309", bg: "#fffdf7", font: "Arial, sans-serif", layout: "clean-list" },
];
export type Product = { id: string; name: string; price: number; mrp?: number; stock: number; img: string; tag?: string };
const U = (id: string) => `https://images.unsplash.com/${id}?w=600&q=60`;
export const PRODUCTS: Product[] = [
  { id: "p1", name: "Banarasi Silk Saree — Red", price: 1499, mrp: 2499, stock: 12, img: U("photo-1594633312681-425c7b97ccd1"), tag: "Bestseller" },
  { id: "p2", name: "Cotton Kurti — Mustard", price: 799, mrp: 1299, stock: 30, img: U("photo-1445205170230-053b83016050") },
  { id: "p3", name: "Silver Jhumka Earrings", price: 499, mrp: 899, stock: 50, img: U("photo-1515562141207-7a88fb7ce338"), tag: "New" },
  { id: "p4", name: "Matte Lipstick Set (6 pc)", price: 649, mrp: 999, stock: 0, img: U("photo-1522335789203-aabd1fc54bc9") },
  { id: "p5", name: "Denim Jacket — Oversized", price: 1299, mrp: 1999, stock: 8, img: U("photo-1591047139829-d91aecb6caea") },
  { id: "p6", name: "Floral Summer Dress", price: 1099, mrp: 1799, stock: 15, img: U("photo-1595777457583-95e059d581b8"), tag: "Trending" },
];
export const DEMO_STORE = { id: "s1", slug: "sneha-sarees", name: "Sneha Sarees", logo: "SS", themeId: "ethnic", plan: "Boutique", tagline: "Handpicked sarees & suits — COD available", whatsapp: "919999999999", upi: true, cod: true };
export type Order = { id: string; buyer: string; phone: string; item: string; qty: number; amount: number; mode: string; status: string; tracking?: string };
export const ORDERS: Order[] = [
  { id: "1001", buyer: "Priya Sharma", phone: "98XXXXXX01", item: "Banarasi Silk Saree (Red)", qty: 1, amount: 1499, mode: "COD", status: "NEW" },
  { id: "1002", buyer: "Anjali Verma", phone: "98XXXXXX02", item: "Cotton Kurti (M)", qty: 2, amount: 1598, mode: "UPI ✓", status: "PACKED" },
  { id: "1003", buyer: "Rohit Gupta", phone: "98XXXXXX03", item: "Silver Jhumka", qty: 1, amount: 499, mode: "UPI ✓", status: "SHIPPED", tracking: "DEL123456" },
  { id: "1004", buyer: "Kavita Singh", phone: "98XXXXXX04", item: "Floral Summer Dress", qty: 1, amount: 1099, mode: "COD", status: "DELIVERED" },
];
export type Msg = { id: string; from: string; text: string; time: string; status: string };
export const MSGS: Msg[] = [
  { id: "m1", from: "Pooja (98XXXXXX11)", text: "Didi, Mustard kurti me M size available hai?", time: "10 min ago", status: "NEW" },
  { id: "m2", from: "Neha (98XXXXXX12)", text: "Lucknow me COD available hai kya?", time: "1 hr ago", status: "NEW" },
  { id: "m3", from: "Ritu (98XXXXXX13)", text: "Exchange policy kya hai saree ki?", time: "3 hr ago", status: "REPLIED" },
];
export const CLIENT_STATS = [
  { label: "Revenue (is mahine)", value: "₹48,230", sub: "+18% vs pichhle mahine" },
  { label: "Orders", value: "132", sub: "9 aaj" },
  { label: "Products live", value: "46", sub: "2 out of stock" },
  { label: "Store visitors", value: "8,412", sub: "Instagram se 71%" },
];
export type Client = { slug: string; owner: string; plan: string; orders: number; revenue: string; status: string };
export const CLIENTS: Client[] = [
  { slug: "sneha-sarees", owner: "Sneha", plan: "Boutique", orders: 132, revenue: "₹48,230", status: "ACTIVE" },
  { slug: "glam-jewels", owner: "Pooja", plan: "Brand", orders: 210, revenue: "₹96,100", status: "ACTIVE" },
  { slug: "urban-kurti-house", owner: "Ritu", plan: "Trial", orders: 6, revenue: "₹3,100", status: "TRIAL" },
  { slug: "desi-threads", owner: "Kavita", plan: "Trial", orders: 2, revenue: "₹900", status: "TRIAL" },
  { slug: "beauty-box-in", owner: "Neha", plan: "Boutique", orders: 88, revenue: "₹31,400", status: "ACTIVE" },
];
export const ADMIN_STATS = [
  { label: "Total stores", value: "24", sub: "5 trial pe" },
  { label: "Active subscriptions", value: "18", sub: "MRR ₹12,400" },
  { label: "Orders aaj (sab stores)", value: "96", sub: "₹58,900 GMV" },
  { label: "Setup fees (is mahine)", value: "₹32,989", sub: "11 naye clients" },
];
export const PLANS = [
  { id: "trial", name: "Trial", price: "FREE 7 din", desc: "Sab kuch try karo", feats: ["20 products", "Subdomain store", "UPI + COD", "WhatsApp alerts"] },
  { id: "boutique", name: "Boutique", price: "₹499/mo", desc: "Chhoti dukaan ke liye", feats: ["100 products", "Subdomain store", "UPI + COD", "WhatsApp alerts", "Coupons"] },
  { id: "brand", name: "Brand", price: "₹999/mo", desc: "Apna brand banane ke liye", feats: ["Unlimited products", "Custom domain", "Sab kuch Boutique wala", "Priority support"] },
];
export const TOOLS = [
  { id: "razorpay", name: "Razorpay UPI", desc: "UPI + cards payment", status: "READY" },
  { id: "whatsapp", name: "WhatsApp Alerts", desc: "Order updates auto", status: "READY" },
  { id: "cod", name: "COD Manager", desc: "COD orders + confirm call list", status: "BUILT-IN" },
  { id: "domain", name: "Custom Domain", desc: "shop.unkaname.com connect", status: "READY" },
  { id: "insta", name: "Instagram Feed", desc: "Store pe Insta photos", status: "READY" },
  { id: "shiprocket", name: "Shiprocket", desc: "One-click label + pickup", status: "PHASE 2" },
  { id: "ai", name: "AI Captions", desc: "Description + hashtags auto", status: "SOON" },
];
