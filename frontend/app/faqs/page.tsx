import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions for landlords and tenants.",
};

const faqs = [
  { q: "How do I list my property with you?", a: "Contact us via the Contact page. We'll arrange a visit and discuss management options, fees, and next steps." },
  { q: "How long does tenant referencing take?", a: "Typically 3–5 working days once we have the tenant's completed application and supporting documents." },
  { q: "Who handles repairs?", a: "We coordinate all repairs. Tenants report issues via the maintenance request form or portal; we assign contractors and keep everyone updated." },
  { q: "How is my deposit protected?", a: "We register deposits with a government-approved scheme and provide the prescribed information within the required timeframe." },
  { q: "Can I end my tenancy early?", a: "Check your tenancy agreement. Early termination may involve a break clause or surrender by agreement. We can advise on the process." },
];

export default function FAQsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="section-heading">Frequently Asked Questions</h1>
      <p className="section-subheading mt-4">
        Common questions from landlords and tenants.
      </p>
      <dl className="mt-8 space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-panel p-6">
            <dt className="font-semibold text-white">{faq.q}</dt>
            <dd className="mt-2 text-elegant-muted">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
