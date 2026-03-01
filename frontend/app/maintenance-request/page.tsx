import type { Metadata } from "next";
import { MaintenanceForm } from "@/components/forms/MaintenanceForm";

export const metadata: Metadata = {
  title: "Maintenance Request",
  description: "Submit a maintenance issue for your tenancy.",
};

export default function MaintenanceRequestPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Maintenance Request</h1>
      <p className="mt-4 text-slate-600">
        Tenants: use this form to report a maintenance issue. We&apos;ll respond and coordinate repairs as needed.
      </p>
      <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
        <MaintenanceForm />
      </div>
    </div>
  );
}
