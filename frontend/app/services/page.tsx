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
      <h1 className="text-3xl font-bold text-slate-900">Services</h1>
      <p className="mt-4 text-slate-600">
        We offer full-service property management for landlords and a clear, compliant experience for tenants.
      </p>
      <ul className="mt-8 space-y-6">
        {services.map((s) => (
          <li key={s.href}>
            <Link href={s.href} className="block rounded-lg border border-slate-200 p-6 hover:border-primary hover:shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">{s.title}</h2>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <span className="mt-2 inline-block text-primary font-medium">Read more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
