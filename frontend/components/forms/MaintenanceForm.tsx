"use client";

import { useState } from "react";
import { maintenanceApi } from "@/lib/api";

export function MaintenanceForm({ defaultAddress = "" }: { defaultAddress?: string }) {
  const [tenantName, setTenantName] = useState("");
  const [tenantEmail, setTenantEmail] = useState("");
  const [propertyAddressOrRef, setPropertyAddressOrRef] = useState(defaultAddress);
  const [issueCategory, setIssueCategory] = useState("");
  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("MEDIUM");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      await maintenanceApi.submit({
        tenantName,
        tenantEmail,
        propertyAddressOrRef,
        issueCategory,
        description,
        urgency,
      });
      setStatus("success");
      setTenantName(""); setTenantEmail(""); setPropertyAddressOrRef(defaultAddress); setIssueCategory(""); setDescription("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input type="text" placeholder="Your name *" value={tenantName} onChange={(e) => setTenantName(e.target.value)} required className="w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      <input type="email" placeholder="Your email *" value={tenantEmail} onChange={(e) => setTenantEmail(e.target.value)} required className="w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      <input type="text" placeholder="Property address or reference *" value={propertyAddressOrRef} onChange={(e) => setPropertyAddressOrRef(e.target.value)} required className="w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      <input type="text" placeholder="Issue category (e.g. Plumbing, Heating) *" value={issueCategory} onChange={(e) => setIssueCategory(e.target.value)} required className="w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      <textarea placeholder="Description *" value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} className="w-full rounded border border-slate-300 px-3 py-2 text-sm" />
      <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className="rounded border border-slate-300 px-3 py-2 text-sm">
        <option value="LOW">Low</option>
        <option value="MEDIUM">Medium</option>
        <option value="HIGH">High</option>
      </select>
      {status === "success" && <p className="text-sm text-green-600">Request submitted. We&apos;ll be in touch.</p>}
      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}
      <button type="submit" disabled={status === "loading"} className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light disabled:opacity-50">
        {status === "loading" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
