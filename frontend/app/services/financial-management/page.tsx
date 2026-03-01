import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Management and Reporting",
  description: "Rent collection, financial reporting, and landlord oversight.",
};

export default function FinancialManagementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Financial Management and Reporting</h1>
      <p className="mt-4 text-slate-600">
        We collect rent, manage deposits, and provide clear financial reporting so you have full oversight of your property portfolio.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">What we do</h2>
      <ul className="mt-2 list-inside list-disc text-slate-600">
        <li>Rent collection and arrears management</li>
        <li>Tenancy deposit protection</li>
        <li>Regular statements and reporting</li>
        <li>Landlord payouts and accounting support</li>
      </ul>
    </div>
  );
}
