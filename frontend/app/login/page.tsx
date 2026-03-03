"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(email, password);
      router.push(user.role === "ADMIN" ? "/admin" : "/portal");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Portal Login</h1>
      <p className="mt-2 text-neutral-300">
        Sign in for owners and tenants to access your portal.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-xl border border-white/10 bg-neutral-900/50 p-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-white/40 focus:outline-none"
            placeholder="you@example.com or admin"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-white/40 focus:outline-none"
          />
        </div>
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-white py-2.5 font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-neutral-400">
        Don&apos;t have an account? <Link href="/contact" className="text-[#818cf8] hover:underline">Contact us</Link> to get set up with portal access.
      </p>
    </div>
  );
}
