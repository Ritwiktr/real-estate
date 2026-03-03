import { Router } from "express";
import { z } from "zod";
import { authMiddleware } from "../middleware/auth.js";
import { requireTenant } from "../middleware/requireTenant.js";
import { prisma } from "../lib/prisma.js";
import * as maintenanceRequestService from "../services/maintenanceRequestService.js";
import * as tenancyApplicationService from "../services/tenancyApplicationService.js";
import * as financialService from "../services/financialService.js";

const router = Router();
router.use(authMiddleware, requireTenant);

const createRequestSchema = z.object({
  issueCategory: z.string().min(1, "Issue category is required"),
  description: z.string().min(1, "Description is required"),
  urgency: z.enum(["LOW", "MEDIUM", "HIGH"]).optional(),
});

router.get("/maintenance-requests", async (req, res, next) => {
  try {
    const limit = req.query.limit ? Number(req.query.limit) : 50;
    const items = await maintenanceRequestService.listByTenant(req.user.id, limit);
    res.json({ items });
  } catch (e) {
    next(e);
  }
});

router.post("/properties/:propertyId/maintenance-requests", async (req, res, next) => {
  try {
    const { propertyId } = req.params;
    const body = createRequestSchema.parse(req.body);
    const property = await prisma.property.findFirst({
      where: { id: propertyId },
    });
    if (!property) {
      return res.status(404).json({ error: "Property not found", code: "NOT_FOUND" });
    }
    const address = `${property.address}, ${property.city}${property.postCode ? " " + property.postCode : ""}`;
    const record = await maintenanceRequestService.createMaintenanceRequest({
      tenantName: req.user.name || req.user.email,
      tenantEmail: req.user.email,
      propertyAddressOrRef: address,
      issueCategory: body.issueCategory,
      description: body.description,
      urgency: body.urgency || "MEDIUM",
      propertyId,
      tenantId: req.user.id,
    });
    res.status(201).json({ id: record.id, message: "Maintenance request submitted successfully" });
  } catch (e) {
    if (e.name === "ZodError") {
      return res.status(400).json({ error: e.errors?.[0]?.message || "Validation failed", code: "VALIDATION_ERROR" });
    }
    next(e);
  }
});

router.get("/applications", async (req, res, next) => {
  try {
    const items = await tenancyApplicationService.listByTenant(req.user.id);
    res.json({ items });
  } catch (e) {
    next(e);
  }
});

router.get("/financials", async (req, res, next) => {
  try {
    const data = await financialService.getTenantFinancials(req.user.id);
    res.json(data);
  } catch (e) {
    next(e);
  }
});

export default router;
