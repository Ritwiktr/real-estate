import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        We are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Data we collect</h2>
      <p className="mt-2 text-slate-600">
        We may collect your name, email address, phone number, and property-related details when you enquire, use our services, or access the portal.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">How we use it</h2>
      <p className="mt-2 text-slate-600">
        We use your data to provide property management services, respond to enquiries, process maintenance requests, and comply with legal obligations.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Your rights</h2>
      <p className="mt-2 text-slate-600">
        You have the right to access, rectify, or request deletion of your personal data. Contact us to exercise these rights.
      </p>
      <p className="mt-8 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
}
