import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProperty } from "@/lib/server-api";
import { MaintenanceForm } from "@/components/forms/MaintenanceForm";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const p = await getProperty(params.id);
  if (!p) return { title: "Property | Residence" };
  return {
    title: `${p.title} | Residence`,
    description: p.description ?? undefined,
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const property = await getProperty(params.id);
  if (!property) notFound();

  const imageUrl = property.images?.[0]?.url;
  const typeLabel =
    property.listingType === "HOLIDAY_LET" ? "Holiday Let" : "For Rent";

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link
          href="/properties"
          className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white"
        >
          ← Back to listings
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl shadow-black/50">
          <div className="relative aspect-[16/10] bg-neutral-900">
            {imageUrl ? (
              <>
                <img
                  src={imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  aria-hidden
                />
              </>
            ) : (
              <div className="flex h-full items-center justify-center text-neutral-500">
                No image
              </div>
            )}
            <div className="absolute left-4 top-4 flex gap-2">
              {property.isFeatured && (
                <span className="rounded-md bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black">
                  Featured
                </span>
              )}
              <span className="rounded-md border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                {typeLabel}
              </span>
            </div>
          </div>

          <div className="border-t border-white/[0.06] p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {property.title}
            </h1>
            <p className="mt-2 text-neutral-400">
              {property.address}, {property.city}
              {property.postCode && ` ${property.postCode}`}
            </p>
            <p className="mt-4 text-3xl font-bold text-white">
              £{Number(property.pricePerMonth).toLocaleString()}
              <span className="text-base font-normal text-neutral-400">/month</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-neutral-500">
              <span>{property.beds} bedrooms</span>
              <span>{property.baths} bathrooms</span>
              <span>{property.areaSqFt?.toLocaleString()} sq ft</span>
            </div>
            {property.description && (
              <p className="mt-6 leading-relaxed text-neutral-400">
                {property.description}
              </p>
            )}
          </div>
        </article>

        <section className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
          <h2 className="text-xl font-semibold text-white">
            Report a maintenance issue
          </h2>
          <p className="mt-1 text-sm text-neutral-400">
            Tenants: submit a maintenance request for this property.
          </p>
          <MaintenanceForm
            defaultAddress={`${property.address}, ${property.city}`}
          />
        </section>
      </div>
    </div>
  );
}
