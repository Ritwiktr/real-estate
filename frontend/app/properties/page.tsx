import type { Metadata } from "next";
import Link from "next/link";
import { getProperties, getAreas } from "@/lib/server-api";
import { PropertyFilters } from "@/components/PropertyFilters";
import { PropertyCard } from "@/components/PropertyCard";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Property Listings | Residence",
  description: "Explore our curated portfolio of rental and holiday properties.",
};

type SearchParams = {
  page?: string;
  search?: string;
  listingType?: string;
  areaId?: string;
  minPrice?: string;
  maxPrice?: string;
  beds?: string;
};

export default async function PropertiesPage({ searchParams }: { searchParams: SearchParams }) {
  const page = Number(searchParams.page) || 1;
  const params: Record<string, string> = { page: String(page), limit: "12" };
  if (searchParams.search) params.search = searchParams.search;
  if (searchParams.listingType) params.listingType = searchParams.listingType;
  if (searchParams.areaId) params.areaId = searchParams.areaId;
  if (searchParams.minPrice) params.minPrice = searchParams.minPrice;
  if (searchParams.maxPrice) params.maxPrice = searchParams.maxPrice;
  if (searchParams.beds) params.beds = searchParams.beds;

  const [result, areas] = await Promise.all([getProperties(params), getAreas()]);
  const items = result?.items ?? [];
  const total = result?.total ?? 0;
  const limit = result?.limit ?? 12;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="min-h-screen bg-black">
      {/* Page header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            Listings
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Explore exclusive properties
          </h1>
          <p className="mt-2 text-lg text-neutral-400">
            Showcasing a curated portfolio of exceptional homes
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <PropertyFilters areas={areas ?? []} searchParams={searchParams} />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(
            (p: {
              id: string;
              slug?: string;
              title: string;
              address: string;
              city: string;
              listingType: string;
              pricePerMonth: string | number;
              isFeatured?: boolean;
              beds?: number;
              baths?: number;
              areaSqFt?: number;
              images?: { url: string }[];
            }) => (
              <PropertyCard
                key={p.id}
                id={p.id}
                slug={p.slug}
                title={p.title}
                address={p.address}
                city={p.city}
                listingType={p.listingType}
                pricePerMonth={p.pricePerMonth}
                imageUrl={p.images?.[0]?.url}
                isFeatured={p.isFeatured}
                beds={p.beds}
                baths={p.baths}
                areaSqFt={p.areaSqFt}
              />
            )
          )}
        </div>

        {items.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-neutral-400">No properties match your criteria.</p>
            <Link href="/properties" className="btn-primary mt-4 inline-flex">
              Clear filters
            </Link>
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            {page > 1 && (
              <Link
                href={`/properties?${new URLSearchParams({ ...searchParams, page: String(page - 1) } as Record<string, string>).toString()}`}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Previous
              </Link>
            )}
            <span className="px-4 py-2 text-sm text-neutral-400">
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/properties?${new URLSearchParams({ ...searchParams, page: String(page + 1) } as Record<string, string>).toString()}`}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
