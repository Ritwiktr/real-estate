import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Management and Reporting",
  description:
    "Transparent rent collection, income and expenditure reporting, and yield optimisation for your property portfolio.",
};

export default function FinancialManagementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Financial Management and Reporting</h1>
      <p className="mt-4 text-muted">
        Your property portfolio is an investment — and we treat it as such. ASTA’s financial
        management services are designed for transparency, accuracy, and convenience.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Rent collection</h2>
      <p className="mt-2 text-muted">
        We collect rent directly from tenants and ensure secure transfers to your nominated
        account. Automated reminders and a structured arrears process keep payments on track.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Income and expenditure</h2>
      <p className="mt-2 text-muted">
        Digital income and expenditure reports provide clear oversight of your portfolio
        performance. You can easily export data for your accountant or personal records.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Statements and reporting</h2>
      <p className="mt-2 text-muted">
        We provide monthly statements, year-end summaries for tax reporting, and clear breakdowns
        of rents, fees, and authorised works.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Deposit handling & arrears</h2>
      <p className="mt-2 text-muted">
        Deposits are managed in line with government regulations, and automated arrears tracking
        helps us act quickly on missed payments with clear, documented follow-up.
      </p>

      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="font-medium text-white">View your statements and rent in the client portal</p>
        <p className="mt-1 text-sm text-muted">
          After logging in, landlords can see rent due, collected, and overdue. Tenants can view their tenancy and rent details.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/portal" className="inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-black transition hover:bg-primary-light">
            Open portal
          </Link>
          <Link href="/login" className="inline-flex rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
