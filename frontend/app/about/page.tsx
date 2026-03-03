import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company overview, mission, values, and team.",
};

const TEAM = [
  {
    name: "Sarah Mitchell",
    role: "Director",
    bio: "15+ years in property management. Focus on compliance, landlord relations, and tenant satisfaction.",
  },
  {
    name: "James Chen",
    role: "Operations Manager",
    bio: "Oversees maintenance coordination, contractor network, and inspection scheduling.",
  },
  {
    name: "Emma Foster",
    role: "Tenant Liaison",
    bio: "Supports tenants from application through tenancy with clear communication and prompt issue resolution.",
  },
];

const VALUES = [
  {
    title: "Integrity and compliance",
    text: "We follow the law and best practices. Deposit protection, safety checks, and transparent processes are non-negotiable.",
  },
  {
    title: "Clear communication",
    text: "Landlords and tenants get timely updates. No surprises—just straightforward, professional service.",
  },
  {
    title: "Efficiency and reliability",
    text: "Rent collected on time, maintenance handled quickly, and inspections done to schedule. We deliver what we promise.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero with London skyline */}
      <section className="relative flex min-h-[40vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-14 pt-28 sm:px-6 lg:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            A modern London
            <br />
            property partner
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            We manage premium rentals and holiday lets across London — combining boutique
            service with rigorous compliance for both landlords and tenants.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-white/5 bg-black">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-12 sm:px-6 lg:flex-row lg:py-16">
          {/* Mission / Values */}
          <div className="flex-1 space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-white">Our mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                To deliver professional, compliant, and transparent property management
                services that give landlords peace of mind and tenants a smooth
                experience — from first viewing to move-out.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white">Our values</h2>
              <ul className="mt-4 space-y-4">
                {VALUES.map((v) => (
                  <li key={v.title} className="rounded-xl border border-white/5 bg-neutral-900/60 p-4">
                    <h3 className="text-sm font-semibold text-white">{v.title}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{v.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">Our team</h2>
            <p className="mt-3 text-sm text-neutral-300">
              Our experienced team combines London market knowledge with a focus on
              service. We look after placements, inspections, maintenance and financial
              reporting so you can focus on the bigger picture.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {TEAM.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl border border-white/10 bg-neutral-900/70 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.65)]"
                >
                  <h3 className="text-sm font-semibold text-white">{m.name}</h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-[#818cf8]">
                    {m.role}
                  </p>
                  <p className="mt-2 text-xs text-neutral-300">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
