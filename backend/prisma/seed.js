import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AREAS = [
  { name: "12 South", slug: "12-south", imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800", description: "Upscale Nashville community known for its vibrant atmosphere and modern homes." },
  { name: "Belle Meade", slug: "belle-meade", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Luxury estates with expansive grounds and resort-style living." },
  { name: "Brentwood", slug: "brentwood", imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", description: "Family-friendly neighborhoods with top schools and parks." },
  { name: "Central London", slug: "central-london", imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", description: "Prime central London locations." },
  { name: "East London", slug: "east-london", imageUrl: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800", description: "Vibrant East London areas." },
  { name: "West London", slug: "west-london", imageUrl: "https://images.unsplash.com/photo-1486299261210-e2815bca1f6f?w=800", description: "West London neighbourhoods." },
];

const PROPERTIES = [
  { slug: "modern-two-bed-apartment", title: "Modern Two-Bed Apartment", address: "42 Example Street", city: "London", postCode: "SW1A 1AA", areaSlug: "central-london", listingType: "RENTAL", beds: 2, baths: 1, areaSqFt: 850, pricePerMonth: 1850, isFeatured: true, description: "Spacious apartment with open-plan living, close to transport.", imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800" },
  { slug: "luxury-penthouse-city-views", title: "Luxury Penthouse with City Views", address: "1 Riverside Tower", city: "London", postCode: "E14 5AB", areaSlug: "east-london", listingType: "RENTAL", beds: 3, baths: 2, areaSqFt: 1800, pricePerMonth: 4200, isFeatured: true, description: "Stunning penthouse with panoramic views. Premium finishes throughout.", imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
  { slug: "12-south-contemporary-home", title: "12 South Contemporary Home", address: "2500 12th Ave S", city: "Nashville", postCode: "37204", areaSlug: "12-south", listingType: "RENTAL", beds: 4, baths: 3, areaSqFt: 2800, pricePerMonth: 3500, isFeatured: true, description: "Multi-story home with stone facade, outdoor fire pit, and glass railings. Walking distance to dining and shops.", imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" },
  { slug: "belle-meade-estate-pool", title: "Belle Meade Estate with Pool", address: "100 Belle Meade Blvd", city: "Nashville", postCode: "37205", areaSlug: "belle-meade", listingType: "RENTAL", beds: 5, baths: 4, areaSqFt: 4500, pricePerMonth: 8500, isFeatured: true, description: "Sleek modern residence with infinity pool, large glass windows, and outdoor seating. Resort-style living.", imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800" },
  { slug: "brentwood-family-home", title: "Brentwood Family Home", address: "500 Wilson Pike", city: "Brentwood", postCode: "37027", areaSlug: "brentwood", listingType: "RENTAL", beds: 4, baths: 3, areaSqFt: 3200, pricePerMonth: 4200, isFeatured: true, description: "Modern take on traditional architecture with dark siding, stone accents, and well-lit interiors.", imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800" },
  { slug: "canary-wharf-river-view", title: "Canary Wharf River View", address: "20 Cabot Square", city: "London", postCode: "E14 4QW", areaSlug: "east-london", listingType: "RENTAL", beds: 2, baths: 2, areaSqFt: 1100, pricePerMonth: 2800, isFeatured: false, description: "Contemporary apartment with river views. Close to DLR and tube.", imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800" },
  { slug: "notting-hill-studio", title: "Notting Hill Studio", address: "15 Portobello Road", city: "London", postCode: "W11 3DY", areaSlug: "west-london", listingType: "HOLIDAY_LET", beds: 1, baths: 1, areaSqFt: 450, pricePerMonth: 3200, isFeatured: false, description: "Charming studio perfect for short stays. Walking distance to Portobello Road.", imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800" },
  { slug: "nashville-glass-villa", title: "Nashville Glass Villa", address: "88 Modern Lane", city: "Nashville", postCode: "37215", areaSlug: "belle-meade", listingType: "RENTAL", beds: 4, baths: 3, areaSqFt: 3800, pricePerMonth: 6200, isFeatured: false, description: "Bright modern villa with extensive glass facades and infinity-edge pool. Lush landscaping.", imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6e3?w=800" },
  { slug: "kensington-garden-flat", title: "Kensington Garden Flat", address: "7 Kensington Gardens", city: "London", postCode: "W2 4EU", areaSlug: "west-london", listingType: "RENTAL", beds: 2, baths: 1, areaSqFt: 920, pricePerMonth: 2400, isFeatured: false, description: "Elegant period conversion with high ceilings and garden access.", imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800" },
];

async function main() {
  const areaMap = {};
  for (const a of AREAS) {
    const area = await prisma.area.upsert({
      where: { slug: a.slug },
      update: { name: a.name, imageUrl: a.imageUrl, description: a.description },
      create: { name: a.name, slug: a.slug, imageUrl: a.imageUrl, description: a.description },
    });
    areaMap[a.slug] = area.id;
  }

  for (const p of PROPERTIES) {
    const areaId = areaMap[p.areaSlug] || null;
    await prisma.property.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        title: p.title,
        slug: p.slug,
        description: p.description,
        address: p.address,
        city: p.city,
        postCode: p.postCode,
        areaId,
        listingType: p.listingType,
        beds: p.beds,
        baths: p.baths,
        areaSqFt: p.areaSqFt,
        pricePerMonth: p.pricePerMonth,
        isFeatured: p.isFeatured ?? false,
        images: { create: [{ url: p.imageUrl, order: 0 }] },
      },
    });
  }

  await prisma.blogPost.upsert({
    where: { slug: "welcome-to-our-blog" },
    update: {},
    create: {
      title: "Welcome to Our Blog",
      slug: "welcome-to-our-blog",
      excerpt: "Property management insights and updates for landlords and tenants.",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. We provide expert property management.",
      author: "Property Team",
      publishedAt: new Date(),
    },
  });

  await prisma.testimonial.upsert({
    where: { id: "seed-testimonial-1" },
    update: {},
    create: {
      id: "seed-testimonial-1",
      authorName: "Jane Smith",
      role: "Landlord",
      content: "Professional service from start to finish. Highly recommend.",
      rating: 5,
      isApproved: true,
    },
  });

  console.log("Seed completed: areas, properties, blog, testimonial.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
