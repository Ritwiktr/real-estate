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
