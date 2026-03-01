import type { Metadata } from "next";
import { getTestimonials } from "@/lib/server-api";
import { TestimonialForm } from "@/components/forms/TestimonialForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Testimonials / Reviews",
  description: "Client feedback and testimonials.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Testimonials</h1>
      <p className="mt-4 text-slate-600">
        What landlords and tenants say about working with us.
      </p>
      <div className="mt-8 space-y-6">
        {testimonials.map((t: { id: string; authorName: string; role: string; content: string; rating: number | null }) => (
          <blockquote key={t.id} className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-slate-700">&ldquo;{t.content}&rdquo;</p>
            <footer className="mt-4 flex items-center justify-between">
              <cite className="font-semibold not-italic text-slate-900">{t.authorName}</cite>
              <span className="text-sm text-slate-500">{t.role}</span>
            </footer>
            {t.rating != null && <p className="mt-1 text-sm text-amber-600">{"★".repeat(t.rating)}</p>}
          </blockquote>
        ))}
      </div>
      {testimonials.length === 0 && <p className="py-8 text-slate-600">No testimonials yet.</p>}
      <section className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Submit your feedback</h2>
        <TestimonialForm />
      </section>
    </div>
  );
}
