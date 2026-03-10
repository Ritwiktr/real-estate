import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tenant Placement and Screening",
  description:
    "Comprehensive tenant placement and screening for ASTA landlords, from strategic marketing to compliant onboarding.",
};

export default function TenantPlacementScreeningPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Tenant Placement and Screening</h1>
      <p className="mt-4 text-muted">
        At ASTA, we understand that a successful tenancy starts with the right tenant. Our tenant
        placement service is comprehensive, ensuring a smooth and secure start to every rental
        agreement.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-white">What we offer</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
        <li>
          Professional marketing across high-traffic platforms including Rightmove, Zoopla, and
          OnTheMarket
        </li>
        <li>High-resolution photography, virtual tours, and SEO-optimised property descriptions</li>
        <li>
          Thorough tenant screening — including ID verification, income checks, previous landlord
          references, and credit checks
        </li>
        <li>
          Preparation of compliant tenancy agreements in line with the Housing Act 1988 and the
          Renters Reform Bill
        </li>
        <li>
          Coordination of move-in documentation including deposit registration, EPC, EICR, How to
          Rent guide, and safety certificates
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-white">Why it matters</h2>
      <p className="mt-3 text-muted">
        This process ensures that your property is let quickly, legally, and with minimum risk —
        protecting your investment from the outset.
      </p>
    </div>
  );
}


