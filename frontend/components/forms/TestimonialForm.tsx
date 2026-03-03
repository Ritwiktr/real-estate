"use client";

import { useState } from "react";
import { testimonialsApi } from "@/lib/api";

export function TestimonialForm() {
  const [authorName, setAuthorName] = useState("");
  const [role, setRole] = useState("Tenant");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState<number | "">(5);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");
    try {
      await testimonialsApi.submit({
        authorName,
        role,
        content,
        rating: rating === "" ? undefined : Number(rating),
      });
      setStatus("success");
      setAuthorName(""); setContent(""); setRating(5);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-white/15 bg-black/50 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/20 transition";

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <input
        type="text"
        placeholder="Your name *"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        required
        className={inputClass}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className={`${inputClass} [&>option]:bg-neutral-900 [&>option]:text-white`}
      >
        <option value="Tenant">Tenant</option>
        <option value="Landlord">Landlord</option>
      </select>
      <textarea
        placeholder="Your feedback *"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={4}
        className={inputClass}
      />
      <label className="block text-sm text-neutral-400">
        Rating (optional){" "}
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.value === "" ? "" : Number(e.target.value))}
          className="ml-2 w-14 rounded-lg border border-white/15 bg-black/50 px-2 py-1 text-sm text-white focus:border-white/30 focus:outline-none"
        />
      </label>
      {status === "success" && (
        <p className="text-sm text-green-400">Thank you. Your testimonial will be reviewed before publishing.</p>
      )}
      {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg border border-white/20 bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200 disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
