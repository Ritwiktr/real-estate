import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Management and Reporting",
  description: "Rent collection, financial reporting, and landlord oversight.",
};

export default function FinancialManagementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Financial Management and Reporting</h1>
      <p className="mt-4 text-muted">
        We collect rent, manage deposits, and provide clear financial reporting so you have full oversight of your property portfolio.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Rent collection</h2>
      <p className="mt-2 text-muted">
        We collect rent directly from tenants, issue reminders before due dates, and follow a clear arrears process if payments are missed. You receive regular updates and can view rent due, collected, and overdue in the portal.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Deposit protection</h2>
      <p className="mt-2 text-muted">
        All tenant deposits are placed in a government-approved scheme. We handle prescribed information and end-of-tenancy deductions in line with regulations.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Statements and reporting</h2>
      <p className="mt-2 text-muted">
        Landlords receive regular statements showing rent collected, fees, and any adjustments. We can provide export-ready data for your accountant.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Landlord payouts</h2>
      <p className="mt-2 text-muted">
        Net rent (after management fees and deductions) is paid to your nominated account on agreed dates. We keep transparent records of all transactions.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Arrears process</h2>
      <p className="mt-2 text-muted">
        If rent falls overdue, we follow a structured process: reminders, formal notices, and, where necessary, liaison with legal support. We aim to resolve issues early while protecting your interests.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Accounting support</h2>
      <p className="mt-2 text-muted">
        We provide clear documentation for tax purposes and can work with your accountant. All income and expenses are recorded and traceable.
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
