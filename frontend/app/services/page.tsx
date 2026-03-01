import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Property management services overview.",
};

export default function ServicesPage() {
  const services = [
    { href: "/services/tenant-placement", title: "Tenant Placement and Screening", desc: "Advertising, referencing, and onboarding." },
    { href: "/services/maintenance-inspections", title: "Property Maintenance and Inspections", desc: "Maintenance coordination, inspections, and contractor management." },
    { href: "/services/financial-management", title: "Financial Management and Reporting", desc: "Rent collection, financial reporting, and landlord oversight." },
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Services</h1>
      <p className="mt-4 text-neutral-300">
        We offer full-service property management for landlords and a clear, compliant experience for tenants.
      </p>
      <ul className="mt-8 space-y-6">
        {services.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="block rounded-xl border border-white/10 bg-neutral-900/50 p-6 transition hover:border-white/20">
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <p className="mt-2 text-neutral-300">{s.desc}</p>
              <span className="mt-2 inline-block font-medium text-[#818cf8]">Read more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
