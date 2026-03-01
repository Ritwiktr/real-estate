"use client";

import { useState } from "react";
import { enquiriesApi } from "@/lib/api";

const inputClass = (dark: boolean) =>
  dark
    ? "w-full rounded border border-white/30 bg-white/10 px-3 py-2 text-white placeholder-white/60"
    : "w-full rounded border border-slate-300 px-3 py-2 text-sm";

export function EnquiryForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      await enquiriesApi.submit({ name, email, phone: phone || undefined, subject: subject || undefined, message, consent });
      setStatus("success");
      setName(""); setEmail(""); setPhone(""); setSubject(""); setMessage(""); setConsent(false);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        type="text"
        placeholder="Name *"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={inputClass(dark)}
      />
      <input
        type="email"
        placeholder="Email *"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={inputClass(dark)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={inputClass(dark)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={inputClass(dark)}
      />
      <textarea
        placeholder="Message *"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={3}
        className={inputClass(dark)}
      />
      <label className={`flex items-center gap-2 text-sm ${dark ? "text-white/90" : "text-slate-600"}`}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required className="rounded" />
        I consent to being contacted about my enquiry.
      </label>
      {status === "success" && <p className={`text-sm ${dark ? "text-green-300" : "text-green-600"}`}>Thank you. We&apos;ll be in touch soon.</p>}
      {status === "error" && <p className={`text-sm ${dark ? "text-red-300" : "text-red-600"}`}>{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className={dark ? "w-full rounded bg-white py-2.5 font-medium text-primary hover:bg-slate-100 disabled:opacity-50" : "w-full rounded bg-primary py-2.5 font-medium text-white hover:bg-primary-light disabled:opacity-50"}
      >
        {status === "loading" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
