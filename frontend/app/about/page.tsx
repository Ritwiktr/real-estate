import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company overview, mission, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">About Us</h1>
      <p className="mt-4 text-slate-600">
        We are a London-based property management company dedicated to tenancy management, holiday lettings, and support for both landlords and tenants.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Our mission</h2>
      <p className="mt-2 text-slate-600">
        To deliver professional, compliant, and transparent property management services that give landlords peace of mind and tenants a smooth experience.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Our values</h2>
      <ul className="mt-2 list-inside list-disc text-slate-600">
        <li>Integrity and compliance</li>
        <li>Clear communication</li>
        <li>Efficiency and reliability</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Our team</h2>
      <p className="mt-2 text-slate-600">
        Our experienced team combines property expertise with a focus on customer service. We handle tenant placement, maintenance, inspections, and financial reporting so you can focus on what matters.
      </p>
    </div>
  );
}
