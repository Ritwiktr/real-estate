import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Maintenance and Inspections",
  description: "Maintenance coordination, inspections, and contractor management.",
};

export default function MaintenanceInspectionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Property Maintenance and Inspections</h1>
      <p className="mt-4 text-slate-600">
        We coordinate repairs, manage trusted contractors, and carry out regular inspections to keep properties in good condition and compliant.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">What we do</h2>
      <ul className="mt-2 list-inside list-disc text-slate-600">
        <li>24/7 maintenance request handling</li>
        <li>Contractor management and quality control</li>
        <li>Periodic property inspections</li>
        <li>Compliance and safety checks</li>
      </ul>
    </div>
  );
}
