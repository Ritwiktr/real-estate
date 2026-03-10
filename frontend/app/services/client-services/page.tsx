import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Services and Compliance",
  description:
    "Licensing, legal documentation, and regulatory support for ASTA landlords, aligned with NRLA standards.",
};

export default function ClientServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Client Services and Compliance</h1>
      <p className="mt-4 text-muted">
        Navigating lettings legislation can be complex. ASTA simplifies it with structured,
        compliance-led support for landlords across London and surrounding regions.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">How we support you</h2>
      <ul className="mt-3 list-inside list-disc space-y-2 text-muted">
        <li>Licensing and registration for HMOs, short-lets, and selective schemes</li>
        <li>Legal compliance documentation and renewals</li>
        <li>Section 8/21 notices and dispute guidance</li>
        <li>Tenancy renewals and terminations</li>
        <li>GDPR-aligned document handling</li>
        <li>NRLA-compliant tenancy agreements and updates</li>
      </ul>

      <p className="mt-6 text-muted">
        Our client support team is your expert partner in risk management, always one step ahead of
        regulatory change so your portfolio stays protected.
      </p>
    </div>
  );
}

