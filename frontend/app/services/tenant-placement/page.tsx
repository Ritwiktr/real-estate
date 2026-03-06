import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Placement and Screening",
  description: "Tenant advertising, referencing, and onboarding.",
};

export default function TenantPlacementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Tenant Placement and Screening</h1>
      <p className="mt-4 text-muted">
        We advertise your property on leading portals, carry out thorough referencing, and manage a smooth onboarding process for new tenants.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-white">What we do</h2>
      <ul className="mt-2 list-inside list-disc space-y-1 text-muted">
        <li>Property advertising and marketing</li>
        <li>Tenant referencing and credit checks</li>
        <li>Right to rent checks</li>
        <li>Tenancy agreements and move-in coordination</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-white">How it works</h2>
      <ol className="mt-2 list-decimal list-inside space-y-2 text-muted">
        <li>We list your property on leading portals and market it to suitable tenants.</li>
        <li>We screen enquiries, arrange viewings, and shortlist applicants.</li>
        <li>We carry out referencing (employment, previous landlord, credit) and right to rent checks.</li>
        <li>We prepare the tenancy agreement, protect the deposit, and coordinate the move-in.</li>
      </ol>
    </div>
  );
}
