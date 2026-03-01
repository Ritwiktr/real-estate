import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Placement and Screening",
  description: "Tenant advertising, referencing, and onboarding.",
};

export default function TenantPlacementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Tenant Placement and Screening</h1>
      <p className="mt-4 text-neutral-300">
        We advertise your property on leading portals, carry out thorough referencing, and manage a smooth onboarding process for new tenants.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-white">What we do</h2>
      <ul className="mt-2 list-inside list-disc space-y-1 text-neutral-300">
        <li>Property advertising and marketing</li>
        <li>Tenant referencing and credit checks</li>
        <li>Right to rent checks</li>
        <li>Tenancy agreements and move-in coordination</li>
      </ul>
    </div>
  );
}
