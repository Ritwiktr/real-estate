import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.post("/maintenance", async (req: Request, res: Response) => {
  try {
    const { tenant_name, property_address, issue_type, description } = req.body;
    if (!tenant_name || !property_address || !issue_type || !description) {
      return res.status(400).json({
        error: "Missing required fields: tenant_name, property_address, issue_type, description",
      });
    }
    const request = await prisma.maintenanceRequest.create({
      data: {
        tenant_name,
        property_address,
        issue_type,
        description,
        status: "pending",
      },
    });
    res.status(201).json({ id: request.id, message: "Maintenance request submitted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to save maintenance request" });
  }
});

export default router;
