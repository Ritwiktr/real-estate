"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { adminApi, type EnquirySummary, type MaintenanceSummary } from "@/lib/api";

const PORTAL_URL = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_PORTAL_URL : undefined;

export default function PortalPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<EnquirySummary[] | null>(null);
  const [maintenance, setMaintenance] = useState<MaintenanceSummary[] | null>(null);
  const [adminError, setAdminError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!loading && user?.role === "ADMIN") {
      (async () => {
        try {
          setAdminError(null);
          const [enqRes, mrRes] = await Promise.all([
            adminApi.listEnquiries(5),
            adminApi.listMaintenanceRequests(5),
          ]);
          setEnquiries(enqRes.items);
          setMaintenance(mrRes.items);
        } catch (err) {
          setAdminError("Could not load dashboard data. Please try again later.");
        }
      })();
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-neutral-400">Loading…</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const roleLabel = user.role === "LANDLORD" ? "Landlord" : user.role === "ADMIN" ? "Admin" : "Tenant";
  const isAdmin = user.role === "ADMIN";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Portal</h1>
      <p className="mt-2 text-neutral-300">
        Welcome back{user.name ? `, ${user.name}` : ""}. You are signed in as a {roleLabel}.
      </p>

      {/* Shared portal link section */}
      <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-neutral-900/50 p-6">
        {PORTAL_URL ? (
          <>
            <p className="text-sm text-neutral-400">
              Use the client portal for documents, rent, maintenance updates, and more.
            </p>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Open client portal →
            </a>
          </>
        ) : (
          <p className="text-sm text-neutral-400">
            Portal access is managed by your property manager. Contact us for documents, rent, or maintenance updates.
          </p>
        )}

        {!isAdmin && (
          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Quick links</p>
            <div className="mt-2 space-x-3">
              <Link href="/properties" className="text-sm font-medium text-[#818cf8] hover:underline">
                Browse properties
              </Link>
              <span className="text-neutral-500">·</span>
              <Link
                href="/maintenance-request"
                className="text-sm font-medium text-[#818cf8] hover:underline"
              >
                Submit maintenance request
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Admin dashboard */}
      {isAdmin && (
        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-white">Management dashboard</h2>
          {adminError && <p className="text-sm text-red-400">{adminError}</p>}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Recent enquiries</h3>
                <span className="text-xs text-neutral-500">Latest 5</span>
              </div>
              <div className="mt-3 space-y-2">
                {enquiries && enquiries.length === 0 && (
                  <p className="text-sm text-neutral-500">No enquiries yet.</p>
                )}
                {enquiries?.map((e) => (
                  <div key={e.id} className="rounded-lg border border-white/5 bg-black/40 px-3 py-2">
                    <p className="text-sm font-medium text-white">
                      {e.subject || "General enquiry"}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {e.name} · {e.email}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-500">
                      Source: {e.source} ·{" "}
                      {new Date(e.createdAt).toLocaleString(undefined, {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                ))}
                {!enquiries && (
                  <p className="text-sm text-neutral-500">Loading enquiries…</p>
                )}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-white">Recent maintenance requests</h3>
                <span className="text-xs text-neutral-500">Latest 5</span>
              </div>
              <div className="mt-3 space-y-2">
                {maintenance && maintenance.length === 0 && (
                  <p className="text-sm text-neutral-500">No maintenance requests yet.</p>
                )}
                {maintenance?.map((m) => (
                  <div key={m.id} className="rounded-lg border border-white/5 bg-black/40 px-3 py-2">
                    <p className="text-sm font-medium text-white">
                      {m.issueCategory}{" "}
                      <span className="ml-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                        {m.urgency}
                      </span>
                    </p>
                    <p className="text-xs text-neutral-400">
                      {m.tenantName} · {m.propertyAddressOrRef}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-500">
                      Status: {m.status} ·{" "}
                      {new Date(m.createdAt).toLocaleString(undefined, {
                        dateStyle: "short",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                ))}
                {!maintenance && (
                  <p className="text-sm text-neutral-500">Loading maintenance requests…</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
