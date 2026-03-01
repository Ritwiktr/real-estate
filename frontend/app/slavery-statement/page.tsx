import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slavery and Human Trafficking Statement",
  description: "Our commitment to ethical practices and compliance.",
};

export default function SlaveryStatementPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Slavery and Human Trafficking Statement</h1>
      <p className="mt-4 text-slate-600">
        This statement is made pursuant to section 54 of the Modern Slavery Act 2015 and sets out the steps we have taken to ensure that slavery and human trafficking are not taking place in our business or supply chains.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Our commitment</h2>
      <p className="mt-2 text-slate-600">
        We are committed to acting ethically and with integrity in all our business relationships. We expect the same from our suppliers and partners.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Our policies</h2>
      <p className="mt-2 text-slate-600">
        We have policies and procedures in place to assess and manage risk in our operations and supply chain. We review these regularly and train our team on their responsibilities.
      </p>
      <p className="mt-8 text-sm text-slate-500">
        This statement is reviewed and updated annually. Last updated: {new Date().getFullYear()}.
      </p>
    </div>
  );
}
