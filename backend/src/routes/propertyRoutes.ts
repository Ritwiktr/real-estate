import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { type, minPrice, maxPrice } = req.query;
    const where: Record<string, unknown> = {};
    if (type && typeof type === "string") {
      where.type = type;
    }
    if (minPrice != null || maxPrice != null) {
      where.price = {};
      if (minPrice != null) (where.price as Record<string, number>).gte = Number(minPrice);
      if (maxPrice != null) (where.price as Record<string, number>).lte = Number(maxPrice);
    }
    const properties = await prisma.property.findMany({
      where,
      orderBy: [{ is_featured: "desc" }, { createdAt: "desc" }],
    });
    res.json(properties);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
});

router.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const property = await prisma.property.findUnique({
      where: { slug },
      include: { inquiries: true },
    });
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }
    res.json(property);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch property" });
  }
});

export default router;
