import { prisma } from "../lib/prisma.js";

export async function listApproved() {
  return prisma.testimonial.findMany({
    where: { isApproved: true },
    orderBy: { createdAt: "desc" },
    select: { id: true, authorName: true, role: true, content: true, rating: true, createdAt: true },
  });
}

export async function createTestimonial(data) {
  return prisma.testimonial.create({
    data: {
      authorName: data.authorName,
      role: data.role,
      content: data.content,
      rating: data.rating ?? null,
      isApproved: false,
    },
  });
}
