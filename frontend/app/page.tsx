import Link from "next/link";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PropertyCard } from "@/components/PropertyCard";
import Footer from "@/components/Footer";
import { HorizontalSearch } from "@/components/HorizontalSearch";
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
  // Show featured first; if none, show any recent properties so the section isn't empty
  const displayList = featuredList.length > 0 ? featuredList : (allResult?.items ?? []);

  const snapSection = "min-h-full flex-shrink-0 snap-start snap-always";

  return (
    <div className="h-full overflow-y-auto snap-y snap-mandatory">
      {/* 1. Hero */}
      <section className={`relative ${snapSection} flex flex-col overflow-hidden bg-surface`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/70 to-black/90" />
        <div className="relative flex min-h-0 flex-1 flex-col">
          <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-14 sm:px-6 lg:py-20">
            <div className="text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Full-service management
                <br />
                for landlords &amp; tenants
              </h1>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/property-listings" className="btn-hero">
                  View all listings
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:border-white hover:bg-white/10"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro copy – full text below the hero */}
      <section className={`${snapSection} relative flex flex-col overflow-hidden bg-surface`}>
        {/* Golden accent graphics */}
        <div className="absolute left-0 top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-40 w-40 rounded-full bg-gradient-to-tl from-secondary/15 to-primary/5 blur-3xl" />
        <div className="absolute left-1/3 top-0 h-24 w-24 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
        
        <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:py-14">
          {/* Decorative golden line */}
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative space-y-6 text-sm leading-relaxed text-elegant-muted sm:text-base lg:text-lg">
              {/* Golden accent border */}
              <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent" />
              
              <p className="relative text-base font-medium text-elegant sm:text-lg lg:text-xl">
                <span className="absolute -left-6 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50" />
                Welcome to ASTA Property Management — a refined, full-service property management
                firm based in London, dedicated to elevating rental experiences for landlords,
                tenants, and investors alike. We combine operational excellence with personable,
                transparent service to deliver seamless tenancy management, strategic property
                marketing, and legally compliant oversight across short- and long-term rentals.
              </p>
              <p>
                Led by Director Theresia Petersen, and supported by an expert team of experienced
                professionals, ASTA is committed to setting a new standard in property
                management. Whether you own a single flat or a diverse portfolio, we provide
                tailored support with a focus on longevity, legal compliance, and rental return.
              </p>
              <p>
                Our team works across key London boroughs including Walthamstow, Islington,
                Hackney, East India Docks, Tower Hamlets, and West Mersea. From modern,
                well-appointed apartments to charming holiday lets, ASTA ensures every property is
                maintained to the highest standards — and every client receives bespoke,
                concierge-level service.
              </p>
            </div>
            
            <div className="relative space-y-6 text-sm leading-relaxed text-elegant-muted sm:text-base lg:text-lg">
              {/* Golden accent elements */}
              <div className="absolute -right-4 bottom-0 h-2/3 w-px bg-gradient-to-t from-primary/40 via-secondary/20 to-transparent" />
              
              <p className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 shadow-lg backdrop-blur-sm">
                <span className="absolute -top-2 right-4 h-4 w-4 rotate-45 bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50" />
                Explore our current Property Listings, learn more About Us, or view our full
                suite of Services. Landlords can access tailored resources via our Owners Portal,
                while tenants benefit from dedicated support, application guidance, and responsive
                maintenance reporting through our Tenants Page.
              </p>
              <p className="relative">
                <span className="absolute -right-6 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-secondary to-primary shadow-lg shadow-secondary/50" />
                At ASTA, we believe that intelligent property management blends efficiency with
                empathy, compliance with communication, and results with relationships. Let us
                help you unlock the full potential of your rental investment — one detail at a
                time. Contact us today or visit our FAQ page to learn more.
              </p>
            </div>
          </div>
          
          {/* Bottom decorative golden line */}
          <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        </div>
      </section>

      {/* 2. Featured / Explore properties */}
      <section className={`${snapSection} flex flex-col bg-surface`}>
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6">
          <p className="section-label">Properties</p>
          <h2 className="section-heading mt-2">
            Featured listings
          </h2>
          <p className="section-subheading">
            Whether you're searching for property management services in East London,
            listing a holiday home near the Essex coast, or looking for a tenant-ready flat to
            let in Islington, explore our handpicked rentals and holiday lettings.
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
                <Link href="/property-listings" className="btn-primary">
                  View all properties
                </Link>
              </div>
          </>
        ) : (
          <div className="mt-6 flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-panel/50 p-8 text-center">
            <p className="text-elegant-muted">No properties loaded. This usually means the API isn't responding.</p>
              <ul className="mx-auto mt-3 max-w-md list-inside list-disc text-left text-sm text-elegant-muted">
              <li>Start the backend: <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">cd backend && npm run dev</code></li>
              <li>Backend runs at <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">https://realestate-u3vr.onrender.com</code></li>
              <li>If you haven't seeded yet: <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs">cd backend && npx prisma db seed</code></li>
              </ul>
              <Link href="/property-listings" className="btn-primary mt-4 inline-flex">
                Browse properties
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. Explore areas (always render for 5 sections) */}
      <section className={`${snapSection} flex flex-col bg-surface`}>
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
      <section className={`${snapSection} flex flex-col bg-surface`}>
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-10 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="section-heading mt-2">Get in touch</h2>
              <p className="section-subheading">
                Send an enquiry and we&apos;ll respond shortly.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-panel/50 p-6 sm:p-8">
              <EnquiryForm variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Achievements – premium bg with refined overlay */}
      <section className={`${snapSection} relative flex flex-col overflow-hidden bg-surface`}>
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

      {/* Search Properties Section */}
      <section className={`${snapSection} relative flex flex-col overflow-hidden bg-surface`}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-16 sm:px-6">
          <HorizontalSearch areas={areaList} />
        </div>
      </section>

      {/* Footer after all sections (in scroll container so it's reachable) */}
      <section className={`${snapSection} flex flex-col justify-center bg-surface`}>
        <Footer />
      </section>
    </div>
  );
}