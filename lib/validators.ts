import { z } from "zod";

// Backend validation schemas — API routes (Wave 1) inhe use karengi.
export const ProductInput = z.object({
  name: z.string().min(2), price: z.number().positive(),
  mrp: z.number().optional(), stock: z.number().int().min(0).default(0),
  categoryId: z.string().optional(), images: z.array(z.string()).default([]),
});
export const OrderStatusUpdate = z.object({
  status: z.enum(["NEW", "PACKED", "SHIPPED", "DELIVERED", "CANCELLED"]),
  trackingId: z.string().optional(),
});
export const StoreCreate = z.object({
  name: z.string().min(2), slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
  ownerEmail: z.string().email(), planId: z.string(), themeId: z.string(),
});
