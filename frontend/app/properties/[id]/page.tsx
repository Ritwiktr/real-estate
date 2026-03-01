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
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Link
          href="/properties"
          className="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-700"
        >
          ← Back to listings
        </Link>

        <article className="mt-6 overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="relative aspect-[16/10] bg-slate-200">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-slate-400">
                No image
              </div>
            )}
            <div className="absolute left-4 top-4 flex gap-2">
              {property.isFeatured && (
                <span className="rounded bg-sky-500 px-3 py-1.5 text-xs font-semibold text-white">
                  Featured
                </span>
              )}
              <span className="rounded bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                {typeLabel}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              {property.title}
            </h1>
            <p className="mt-2 text-slate-600">
              {property.address}, {property.city}
              {property.postCode && ` ${property.postCode}`}
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-900">
              £{Number(property.pricePerMonth).toLocaleString()}
              <span className="text-base font-normal text-slate-500">/month</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>{property.beds} bedrooms</span>
              <span>{property.baths} bathrooms</span>
              <span>{property.areaSqFt?.toLocaleString()} sq ft</span>
            </div>
            {property.description && (
              <p className="mt-6 leading-relaxed text-slate-600">
                {property.description}
              </p>
            )}
          </div>
        </article>

        <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Report a maintenance issue
          </h2>
          <p className="mt-1 text-sm text-slate-600">
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
