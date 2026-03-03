import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owners / Landlords",
  description: "Information for landlords: benefits and compliance support.",
};

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Contact us",
    text: "Get in touch to discuss your portfolio and requirements. We'll outline our services and fees.",
  },
  {
    step: 2,
    title: "Onboarding",
    text: "We onboard your properties, set up tenant placement and management processes, and ensure compliance documentation is in order.",
  },
  {
    step: 3,
    title: "We manage",
    text: "We handle tenant placement, rent collection, maintenance, and inspections. You receive regular updates and financial summaries.",
  },
  {
    step: 4,
    title: "Portal access",
    text: "Log in to the client portal to view your properties, maintenance requests, applications, and financial overview—anytime.",
  },
];

export default function OwnersPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero with interior image */}
      <section className="relative flex min-h-[40vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600607687920-4e2a5345c9c3?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/85 to-black" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-28 sm:px-6 lg:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Owners & landlords
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Portfolio-grade
            <br />
            property management
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            Hands-on management, clear reporting, and a modern portal for complete
            visibility across your London properties.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
            {/* How it works + benefits */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-white">How it works</h2>
                <ol className="mt-4 space-y-4">
                  {HOW_IT_WORKS.map(({ step, title, text }) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#818cf8] text-xs font-semibold text-black">
                        {step}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{title}</h3>
                        <p className="mt-1 text-sm text-neutral-300">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Benefits</h2>
                <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                  <li>Full tenant placement and referencing</li>
                  <li>Rent collection and financial reporting</li>
                  <li>Maintenance and inspections handled for you</li>
                  <li>Compliance with legal and safety requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Compliance support</h2>
                <p className="mt-2 text-sm text-neutral-300">
                  We keep you on the right side of the law: deposit protection, gas
                  safety, EPCs, and right to rent checks.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-300">
                  <li>Tenancy deposit protection (TDP) and prescribed information</li>
                  <li>Gas safety certificates (where applicable)</li>
                  <li>Energy Performance Certificates (EPCs)</li>
                  <li>Right to rent checks</li>
                  <li>Licensing and HMO requirements where they apply</li>
                </ul>
              </div>
            </div>

            {/* Portal / CTA card */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Portal access
                </h2>
                <p className="mt-3 text-sm text-neutral-300">
                  Register or sign in to view your properties, applications, maintenance,
                  and financial summaries — all in one place.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/register"
                    className="inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
                  >
                    Register for portal access
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Sign in to portal
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
                <p className="text-sm text-neutral-300">
                  Prefer to talk through your portfolio?
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex text-sm font-medium text-[#818cf8] hover:text-[#a5b4fc]"
                >
                  Get in touch →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
