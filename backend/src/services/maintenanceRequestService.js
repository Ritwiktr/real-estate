import { prisma } from "../lib/prisma.js";

export async function createMaintenanceRequest(data) {
  return prisma.maintenanceRequest.create({
    data: {
      tenantName: data.tenantName,
      tenantEmail: data.tenantEmail,
      propertyAddressOrRef: data.propertyAddressOrRef,
      issueCategory: data.issueCategory,
      description: data.description,
      urgency: data.urgency || "MEDIUM",
      propertyId: data.propertyId ?? undefined,
      tenantId: data.tenantId ?? undefined,
    },
  });
}

export async function listRecentMaintenanceRequests(limit = 5) {
  const take = Math.min(Math.max(Number(limit) || 5, 1), 50);
  return prisma.maintenanceRequest.findMany({
    orderBy: { createdAt: "desc" },
    take,
    select: {
      id: true,
      tenantName: true,
      tenantEmail: true,
      propertyAddressOrRef: true,
      issueCategory: true,
      urgency: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function listByTenant(tenantId, limit = 50) {
  const take = Math.min(Math.max(Number(limit) || 50, 1), 100);
  return prisma.maintenanceRequest.findMany({
    where: { tenantId },
    orderBy: { createdAt: "desc" },
    take,
    include: { property: { select: { id: true, title: true, address: true, city: true } } },
  });
}

export async function listByLandlord(landlordId, limit = 100) {
  const take = Math.min(Math.max(Number(limit) || 100, 1), 200);
  const items = await prisma.maintenanceRequest.findMany({
    where: { property: { landlordId } },
    orderBy: { createdAt: "desc" },
    take,
    include: { property: { select: { id: true, title: true, address: true } } },
  });
  return items;
}

export async function listByProperty(propertyId, landlordId) {
  const items = await prisma.maintenanceRequest.findMany({
    where: { propertyId, property: { landlordId } },
    orderBy: { createdAt: "desc" },
    include: {
      property: { select: { id: true, title: true, address: true } },
      tenant: { select: { id: true, name: true, email: true } },
    },
  });
  return items;
}

export async function updateStatusForLandlord(id, landlordId, { status }) {
  const existing = await prisma.maintenanceRequest.findFirst({
    where: { id, property: { landlordId } },
  });
  if (!existing) {
    const err = new Error("Maintenance request not found");
    err.code = "NOT_FOUND";
    err.status = 404;
    throw err;
  }
  const allowed = ["pending", "in_progress", "resolved"];
  const s = String(status || existing.status).toLowerCase();
  if (!allowed.includes(s)) {
    const err = new Error("Invalid status. Use pending, in_progress, or resolved.");
    err.code = "VALIDATION_ERROR";
    err.status = 400;
    throw err;
  }
  return prisma.maintenanceRequest.update({
    where: { id },
    data: { status: s, updatedAt: new Date() },
  });
}
