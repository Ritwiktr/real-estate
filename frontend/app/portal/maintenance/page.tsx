"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { tenantApi, type MaintenanceRequestDetail } from "@/lib/api";

export default function PortalMaintenancePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [items, setItems] = useState<MaintenanceRequestDetail[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
      return;
    }
    if (user?.role !== "TENANT") {
      router.replace("/portal");
      return;
    }
    tenantApi.listMaintenanceRequests(50)
      .then((res) => setItems(res.items))
      .catch(() => setError("Failed to load maintenance requests"));
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-neutral-400">Loading…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/portal" className="text-sm font-medium text-neutral-400 hover:text-white">
        ← Portal
      </Link>
      <h1 className="mt-2 text-2xl font-bold text-white">My maintenance requests</h1>
      <p className="mt-1 text-sm text-neutral-400">Track repair requests for your tenancy</p>

      <Link
        href="/maintenance-request"
        className="mt-4 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
      >
        Submit new request
      </Link>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      <div className="mt-6 space-y-3">
        {items?.length === 0 && (
          <p className="rounded-xl border border-white/10 bg-neutral-900/50 p-8 text-center text-neutral-400">
            No maintenance requests yet.
          </p>
        )}
        {items?.map((m) => (
          <div
            key={m.id}
            className="rounded-xl border border-white/10 bg-neutral-900/50 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-medium text-white">{m.issueCategory}</p>
                <p className="text-sm text-neutral-400">
                  {m.property?.title || m.propertyAddressOrRef}
                </p>
                <p className="mt-1 text-sm text-neutral-400 line-clamp-2">{m.propertyAddressOrRef}</p>
              </div>
              <span
                className={`rounded px-2 py-1 text-xs font-medium ${
                  m.status === "resolved"
                    ? "bg-green-500/20 text-green-400"
                    : m.status === "in_progress"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-neutral-500/20 text-neutral-400"
                }`}
              >
                {m.status}
              </span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              {new Date(m.createdAt).toLocaleString()} · Urgency: {m.urgency}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
