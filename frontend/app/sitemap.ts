import type { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://residence.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/properties",
    "/owners",
    "/tenants",
    "/testimonials",
    "/contact",
    "/login",
    "/register",
    "/portal",
    "/maintenance-request",
    "/blog",
    "/faqs",
    "/privacy",
    "/terms",
    "/slavery-statement",
    "/services",
    "/services/financial-management",
    "/services/maintenance-inspections",
    "/services/tenant-placement",
  ];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/properties" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/properties" ? 0.9 : 0.7,
  }));
}
