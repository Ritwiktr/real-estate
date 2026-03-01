import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Owners / Landlords",
  description: "Information for landlords: benefits and compliance support.",
};

export default function OwnersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">For Owners & Landlords</h1>
      <p className="mt-4 text-slate-600">
        We help you maximise your rental income while staying compliant and reducing hassle.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Benefits</h2>
      <ul className="mt-2 list-inside list-disc text-slate-600">
        <li>Full tenant placement and referencing</li>
        <li>Rent collection and financial reporting</li>
        <li>Maintenance and inspections handled for you</li>
        <li>Compliance with legal and safety requirements</li>
      </ul>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Compliance support</h2>
      <p className="mt-2 text-slate-600">
        We keep you on the right side of the law: deposit protection, gas safety, EPCs, and right to rent checks.
      </p>
      <p className="mt-6">
        <Link href="/contact" className="font-medium text-primary hover:underline">Get in touch</Link> to discuss your portfolio.
      </p>
    </div>
  );
}
