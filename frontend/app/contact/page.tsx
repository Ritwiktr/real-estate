import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact information and enquiry form.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="max-w-2xl">
        <p className="section-label">Contact</p>
        <h1 className="section-heading mt-2">Contact us</h1>
        <p className="section-subheading mt-3">
          Get in touch for property management, viewings, or general enquiries. We&apos;ll usually respond
          within one working day.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.55)] sm:p-8">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white">Send an enquiry</h2>
              <p className="mt-1 text-sm text-elegant-muted">
                Tell us a little about what you&apos;re looking for and we&apos;ll follow up with options.
              </p>
            </div>
          </div>

          <EnquiryForm variant="dark" />

          <p className="mt-4 text-xs text-elegant-muted">
            By submitting, you agree to us contacting you about this enquiry. For more details, see our privacy
            policy.
          </p>
        </section>

        <aside className="space-y-5 lg:space-y-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-6 sm:p-7">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Office
            </h2>
            <p className="mt-3 text-sm text-elegant-muted">
              123 Example Street<br />
              London, SW1A 1AA
            </p>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  Phone
                </dt>
                <dd>
                  <a
                    href="tel:08001234567"
                    className="text-sm font-medium text-white hover:text-white/80"
                  >
                    0800 123 4567
                  </a>
                  <p className="text-xs text-elegant-muted">Mon–Fri, 9:00 – 18:00</p>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:info@example.com"
                    className="text-sm font-medium text-white hover:text-white/80"
                  >
                    info@example.com
                  </a>
                  <p className="text-xs text-elegant-muted">We aim to respond by the next business day.</p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-dashed border-white/15 bg-neutral-900/40 p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-white">Best for quick questions</h3>
            <p className="mt-2 text-sm text-elegant-muted">
              Use the form for detailed enquiries such as:
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-elegant-muted">
              <li>— Booking a viewing or valuation</li>
              <li>— Discussing property management options</li>
              <li>— Getting help with an existing tenancy</li>
              <li>— Anything else related to our properties</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
