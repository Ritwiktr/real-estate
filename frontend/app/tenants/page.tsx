import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tenants",
  description: "Tenant resources, application procedures, and tenancy guidance.",
};

const APPLICATION_STEPS = [
  {
    step: 1,
    title: "Browse listings",
    text: "View our property listings, filter by area, price, and size, and shortlist properties you like.",
  },
  {
    step: 2,
    title: "Arrange a viewing",
    text: "Contact us to arrange a viewing. We'll show you around and answer any questions.",
  },
  {
    step: 3,
    title: "Apply & referencing",
    text: "Submit your application. We'll run referencing (identity, income, previous landlord) and keep you updated.",
  },
  {
    step: 4,
    title: "Agreement & move-in",
    text: "Sign the tenancy agreement, pay the deposit (into a protected scheme), and move in. We'll support you throughout.",
  },
];

export default function TenantsPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero with apartment interior */}
      <section className="relative flex min-h-[40vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/85 to-black" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-28 sm:px-6 lg:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            For tenants
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Renting,
            <br />
            without the friction
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            Clear steps, fair referencing, and responsive maintenance — so you can focus on
            living, not paperwork.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            {/* Steps + guidance */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-white">Applying for a property</h2>
                <ol className="mt-4 space-y-4">
                  {APPLICATION_STEPS.map(({ step, title, text }) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-black">
                        {step}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{title}</h3>
                        <p className="mt-1 text-sm text-muted">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">What you&apos;ll need</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                  <li>Proof of identity (e.g. passport or driving licence)</li>
                  <li>Proof of address (e.g. utility bill or bank statement)</li>
                  <li>Employment and income details for referencing</li>
                  <li>Details of your current or previous landlord (if applicable)</li>
                </ul>
                <p className="mt-2 text-xs text-muted">
                  We&apos;ll confirm the exact requirements when you apply. Typical turnaround
                  for referencing is a few working days.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Tenancy guidance</h2>
                <p className="mt-3 text-sm text-muted">
                  Your deposit is protected in a government-approved scheme. We carry out
                  repairs within agreed timeframes and follow legal notice periods for
                  inspections and tenancy changes. For more detail, see our{" "}
                  <Link href="/faqs" className="text-primary hover:text-primary-light">
                    FAQs
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="text-primary hover:text-primary-light">
                    contact us
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-white">Your rights</h2>
                <p className="mt-3 text-sm text-muted">
                  We follow all legal requirements for deposits, notices, and repairs. If
                  you have questions, see our{" "}
                  <Link href="/faqs" className="text-primary hover:text-primary-light">
                    FAQs
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="text-primary hover:text-primary-light">
                    contact us
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Portal + maintenance card */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                  Portal access
                </h2>
                <p className="mt-3 text-sm text-muted">
                  Create an account to view rent, documents, and maintenance requests. Sign
                  in if you already have access.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/register"
                    className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-black transition hover:bg-primary-light"
                  >
                    Create an account
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                  >
                    Sign in
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-panel/60 p-5">
                <h2 className="text-sm font-semibold text-white">Maintenance</h2>
                <p className="mt-2 text-sm text-muted">
                  Use our{" "}
                  <Link
                    href="/maintenance-request"
                    className="text-primary hover:text-primary-light"
                  >
                    maintenance request form
                  </Link>{" "}
                  to report issues. We&apos;ll coordinate repairs and keep you updated.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
