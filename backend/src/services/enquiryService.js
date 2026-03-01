import { prisma } from "../lib/prisma.js";

export async function createEnquiry(data) {
  return prisma.enquiry.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      subject: data.subject ?? null,
      message: data.message,
      consent: !!data.consent,
      source: data.source ?? "CONTACT_PAGE",
    },
  });
}
