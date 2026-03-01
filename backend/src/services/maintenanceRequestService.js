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
