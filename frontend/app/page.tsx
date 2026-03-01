import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PropertyCard } from "@/components/PropertyCard";
import { getAreas, getFeaturedProperties, getProperties } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [areas, featured, allResult] = await Promise.all([
    getAreas(),
    getFeaturedProperties(),
    getProperties({ limit: "6" }),
  ]);
  const featuredList = featured?.items ?? [];
  const areaList = areas ?? [];
  const topAreas = areaList.slice(0, 3);
  // Show featured first; if none, show any recent properties so the section isn’t empty
  const displayList = featuredList.length > 0 ? featuredList : (allResult?.items ?? []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/60" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-400">#More than a home</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Find your next home
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Explore a curated portfolio of exceptional properties. Steady dedication ensures a seamless, personalized experience at every stage.
          </p>
          <Link
            href="/properties"
            className="btn-outline mt-8 rounded-lg border-2 border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            View all listings
          </Link>
        </div>
      </section>

      {/* Search bar strip */}
      <section className="relative z-10 -mt-12 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
          <div className="flex flex-wrap items-end gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Search location..."
              className="flex-1 min-w-[180px] rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              readOnly
              aria-label="Search location - go to properties"
            />
            <select className="rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:border-sky-500 focus:outline-none">
              <option>Min. Price</option>
            </select>
            <select className="rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:border-sky-500 focus:outline-none">
              <option>Max. Price</option>
            </select>
            <select className="rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:border-sky-500 focus:outline-none">
              <option>All Types</option>
              <option>Rental</option>
              <option>Holiday Let</option>
            </select>
            <select className="rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:border-sky-500 focus:outline-none">
              <option>Bedrooms</option>
            </select>
            <Link
              href="/properties"
              className="rounded-lg bg-slate-900 px-6 py-2.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Search
            </Link>
          </div>
        </div>
      </section>

      {/* Featured / Explore properties */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-sky-500">
          Explore exclusive properties
        </p>
        <h2 className="section-heading mt-2">
          Showcasing a curated portfolio of exceptional homes
        </h2>
        <p className="section-subheading">
          Find your perfect match from our handpicked selection of rentals and holiday lettings.
        </p>
        {displayList.length > 0 ? (
          <>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {displayList.slice(0, 6).map((p: {
                id: string;
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
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/properties" className="btn-primary">
                View all properties
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-12 text-center">
            <p className="text-slate-600">No properties loaded. This usually means the API isn’t responding.</p>
            <ul className="mt-3 list-inside list-disc text-left text-sm text-slate-500 max-w-md mx-auto">
              <li>Start the backend: <code className="rounded bg-slate-200 px-1 py-0.5 font-mono text-xs">cd backend && npm run dev</code></li>
              <li>Backend should run on port 4000 (the frontend calls <code className="rounded bg-slate-200 px-1 py-0.5 font-mono text-xs">http://localhost:4000</code>)</li>
              <li>If you haven’t seeded yet: <code className="rounded bg-slate-200 px-1 py-0.5 font-mono text-xs">cd backend && npx prisma db seed</code></li>
            </ul>
            <Link href="/properties" className="btn-primary mt-4 inline-flex">
              Browse properties
            </Link>
          </div>
        )}
      </section>

      {/* Explore areas */}
      {topAreas.length > 0 && (
        <section className="bg-slate-100 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-widest text-sky-500">
              Explore communities
            </p>
            <h2 className="section-heading mt-2">Explore top areas</h2>
            <p className="section-subheading">
              Discover properties in the most sought-after neighbourhoods.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {topAreas.map((area: { id: string; name: string; imageUrl: string | null }) => (
                <Link
                  key={area.id}
                  href={`/properties?areaId=${area.id}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  {area.imageUrl && (
                    <img
                      src={area.imageUrl}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <span className="text-xl font-semibold text-white">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Get In Touch */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="section-heading">Get in touch</h2>
            <p className="section-subheading">
              Send an enquiry and we&apos;ll respond shortly. We&apos;re here to help you find the right property.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <EnquiryForm variant="light" />
          </div>
        </div>
      </section>

      {/* Achievements strip (optional) */}
      <section className="relative overflow-hidden bg-slate-900 py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-sky-400">
            By the numbers
          </p>
          <h2 className="mt-2 text-center text-3xl font-bold text-white sm:text-4xl">
            Achievements
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "£100M+", label: "Active value" },
              { value: "£200M+", label: "Lifetime sales" },
              { value: "32k+", label: "Happy clients" },
              { value: "15+", label: "Years experience" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">{value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wider text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
