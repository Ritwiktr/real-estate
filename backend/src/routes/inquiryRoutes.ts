import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/inquire", async (req: Request, res: Response) => {
  try {
    const { property_id, name, email, phone, message, type } = req.body;
    if (!name || !email || !phone || !message || !type) {
      return res.status(400).json({ error: "Missing required fields: name, email, phone, message, type" });
    }
    const inquiry = await prisma.inquiry.create({
      data: {
        property_id: property_id || null,
        name,
        email,
        phone,
        message,
        type: type || "general",
      },
    });
    res.status(201).json({ id: inquiry.id, message: "Inquiry submitted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

export default router;
