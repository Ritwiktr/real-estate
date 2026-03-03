import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PropertyCard } from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { HeroSearch } from "@/components/HeroSearch";
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

  const snapSection = "min-h-full flex-shrink-0 snap-start snap-always";

  return (
    <div className="h-full overflow-y-auto snap-y snap-mandatory">
      {/* 1. Hero + Search (one full-viewport section) */}
      <section className={`relative ${snapSection} flex flex-col overflow-hidden bg-black`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="relative mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-4 text-center sm:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">#More than a home</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-tight">
              Find your next home
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85">
              Curated properties. A seamless experience at every step.
            </p>
            <Link href="/properties" className="btn-hero mt-10">
              View all listings
            </Link>
          </div>
          <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pb-10 sm:px-6">
            <HeroSearch areas={areaList} />
          </div>
        </div>
      </section>

      {/* 2. Featured / Explore properties */}
      <section className={`${snapSection} flex flex-col bg-black`}>
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6">
          <p className="section-label">Properties</p>
          <h2 className="section-heading mt-2">
            Featured listings
          </h2>
          <p className="section-subheading">
            Handpicked rentals and holiday lettings.
          </p>
          {displayList.length > 0 ? (
            <>
              <div className="mt-6 grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {displayList.slice(0, 6).map((p: {
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
              ))}
            </div>
              <div className="mt-6 text-center">
                <Link href="/properties" className="btn-primary">
                  View all properties
                </Link>
              </div>
          </>
        ) : (
          <div className="mt-6 flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-neutral-900/50 p-8 text-center">
            <p className="text-elegant-muted">No properties loaded. This usually means the API isn’t responding.</p>
              <ul className="mx-auto mt-3 max-w-md list-inside list-disc text-left text-sm text-elegant-muted">
              <li>Start the backend: <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">cd backend && npm run dev</code></li>
              <li>Backend runs at <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">https://realestate-u3vr.onrender.com</code></li>
              <li>If you haven’t seeded yet: <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">cd backend && npx prisma db seed</code></li>
              </ul>
              <Link href="/properties" className="btn-primary mt-4 inline-flex">
                Browse properties
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. Explore areas (always render for 5 sections) */}
      <section className={`${snapSection} flex flex-col bg-neutral-950`}>
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
          <p className="section-label">Areas</p>
          <h2 className="section-heading mt-2">Explore neighbourhoods</h2>
          <p className="section-subheading">
            Properties in sought-after locations.
          </p>
          {topAreas.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {topAreas.map((area: { id: string; name: string; imageUrl: string | null }) => (
                <Link
                  key={area.id}
                  href={`/properties?areaId=${area.id}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  {area.imageUrl && (
                    <img
                      src={area.imageUrl}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-5">
                    <span className="text-lg font-medium text-white">{area.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-elegant-muted">No areas available yet.</p>
          )}
        </div>
      </section>

      {/* 4. Get In Touch */}
      <section className={`${snapSection} flex flex-col bg-black`}>
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="section-heading mt-2">Get in touch</h2>
              <p className="section-subheading">
                Send an enquiry and we&apos;ll respond shortly.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 sm:p-8">
              <EnquiryForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Achievements – premium bg with refined overlay */}
      <section className={`${snapSection} relative flex flex-col overflow-hidden bg-neutral-950`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-12 sm:px-6">
          <p className="text-center text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            By the numbers
          </p>
          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "£100M+", label: "Active value" },
              { value: "£200M+", label: "Lifetime sales" },
              { value: "32k+", label: "Happy clients" },
              { value: "15+", label: "Years experience" },
            ].map(({ value, label }) => (
              <div key={label} className="group text-center">
                <p className="text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                  {value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/60 transition group-hover:text-white/80">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer after 5 sections (in scroll container so it’s reachable) */}
      <section className={`${snapSection} flex flex-col justify-center bg-black`}>
        <Footer />
      </section>
    </div>
  );
}
