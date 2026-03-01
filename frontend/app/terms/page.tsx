import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions of use.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      <p className="mt-4 text-slate-600">
        By using this website and our services, you agree to these terms.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Use of the website</h2>
      <p className="mt-2 text-slate-600">
        You may use this site for lawful purposes only. You must not misuse the site or attempt to gain unauthorised access to any systems or data.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Services</h2>
      <p className="mt-2 text-slate-600">
        Specific terms for property management, tenancy, and related services are set out in your agreement with us.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Contact</h2>
      <p className="mt-2 text-slate-600">
        For questions about these terms, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
      </p>
      <p className="mt-8 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
