import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tenants",
  description: "Tenant resources, application procedures, and tenancy guidance.",
};

export default function TenantsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">For Tenants</h1>
      <p className="mt-4 text-slate-600">
        We aim to make finding and living in your rental home straightforward and transparent.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Applying for a property</h2>
      <p className="mt-2 text-slate-600">
        View our <Link href="/properties" className="text-primary hover:underline">property listings</Link>, then contact us to arrange a viewing. We&apos;ll guide you through referencing and the tenancy agreement.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">During your tenancy</h2>
      <ul className="mt-2 list-inside list-disc text-slate-600">
        <li>Use our <Link href="/maintenance-request" className="text-primary hover:underline">maintenance request form</Link> to report issues.</li>
        <li>Portal access for rent and documents (after you log in).</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Your rights</h2>
      <p className="mt-2 text-slate-600">
        We follow all legal requirements for deposits, notices, and repairs. If you have questions, see our <Link href="/faqs" className="text-primary hover:underline">FAQs</Link> or <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
      </p>
    </div>
  );
}
