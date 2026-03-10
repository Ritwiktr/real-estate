import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Maintenance and Inspections",
  description:
    "Proactive and responsive property maintenance, regular inspections, and safety scheduling for ASTA-managed homes.",
};

const PROCESS_STEPS = [
  {
    title: "Report",
    text: "Tenants submit a maintenance request via our form or the portal. We capture the issue category, urgency, and description.",
  },
  {
    title: "Assess",
    text: "We triage the request, arrange access if needed, and obtain contractor quotes where appropriate. Landlords are kept informed.",
  },
  {
    title: "Contractor",
    text: "Our vetted network of contractors carries out the repair. We manage scheduling, quality control, and invoicing.",
  },
  {
    title: "Completion",
    text: "Work is signed off, and we update the tenant and landlord. Records are kept for compliance and future reference.",
  },
];

export default function PropertyMaintenanceInspectionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Property Maintenance and Inspections</h1>
      <p className="mt-4 text-muted">
        We manage your property like it’s our own. Maintenance, both proactive and responsive, is
        at the core of a well-managed asset.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">What we do</h2>
      <ul className="mt-2 list-inside list-disc space-y-1 text-muted">
        <li>24/7 online tenant maintenance request portal</li>
        <li>Pre-vetted local contractors with fast response times</li>
        <li>Emergency repair coordination</li>
        <li>Bi-annual property inspections with photographic reports</li>
        <li>End-of-tenancy maintenance audits</li>
        <li>EPC and gas safety scheduling</li>
        <li>Digital logs for all works completed for audit and insurance purposes</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-white">How we handle maintenance</h2>
      <ol className="mt-4 space-y-4">
        {PROCESS_STEPS.map(({ title, text }, i) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-medium text-white">{title}</h3>
              <p className="mt-0.5 text-muted">{text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-8 text-xl font-semibold text-white">Inspection frequency</h2>
      <p className="mt-2 text-muted">
        We conduct property inspections at agreed intervals—typically every six to twelve months—and
        after major works or tenancy changes. This helps ensure properties remain in good condition
        and any issues are caught early.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Emergency handling</h2>
      <p className="mt-2 text-muted">
        For urgent issues (e.g. gas leaks, major leaks, heating failure in winter), we prioritise a
        rapid response. Tenants can mark urgency when submitting a request, and we escalate
        accordingly.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Contractor vetting and compliance</h2>
      <p className="mt-2 text-muted">
        All contractors are vetted for qualifications, insurance, and references. We obtain
        multiple quotes where appropriate and ensure work meets gas safety, EPC, and electrical
        compliance standards where required.
      </p>

      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
        <p className="font-medium text-white">Tenants: report a maintenance issue</p>
        <p className="mt-1 text-sm text-muted">
          Use our form to submit a maintenance request. If you have portal access, you can also
          submit from your dashboard.
        </p>
        <Link
          href="/maintenance-request"
          className="mt-4 inline-flex rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-black transition hover:bg-primary-light"
        >
          Submit maintenance request
        </Link>
      </div>
    </div>
  );
}


