import type { Metadata } from "next";
import { getTestimonials } from "@/lib/server-api";
import { TestimonialForm } from "@/components/forms/TestimonialForm";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Tenant & Landlord Feedback",
  description: "Reviews and feedback from our tenants and landlords.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();
  return (
    <div className="min-h-screen bg-surface">
      {/* Hero with subtle background */}
      <section className="relative flex min-h-[35vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/85 to-black" />
        <div className="relative mx-auto w-full max-w-5xl px-4 pb-12 pt-24 sm:px-6 lg:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Feedback
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tenant & landlord
            <br />
            feedback
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            Real experiences from the people we work with. We encourage feedback after each
            tenancy to keep improving our service.
          </p>
        </div>
      </section>

      {/* Testimonials + form */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <h2 className="text-xl font-semibold text-white">What our clients say</h2>
              <div className="mt-6 space-y-4">
                {testimonials.map(
                  (t: {
                    id: string;
                    authorName: string;
                    role: string;
                    content: string;
                    rating: number | null;
                  }) => (
                    <blockquote
                      key={t.id}
                      className="rounded-2xl border border-white/10 bg-panel/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                    >
                      <p className="text-sm text-muted">&ldquo;{t.content}&rdquo;</p>
                      <footer className="mt-3 flex items-center justify-between">
                        <cite className="text-sm font-semibold not-italic text-white">
                          {t.authorName}
                        </cite>
                        <span className="text-xs uppercase tracking-[0.16em] text-muted">
                          {t.role}
                        </span>
                      </footer>
                      {t.rating != null && (
                        <p className="mt-1 text-xs text-amber-400">
                          {"★".repeat(t.rating)}{" "}
                          <span className="align-middle text-[10px] text-muted">
                            Rated
                          </span>
                        </p>
                      )}
                    </blockquote>
                  ),
                )}
                {testimonials.length === 0 && (
                  <p className="py-8 text-sm text-muted">No testimonials yet.</p>
                )}
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <h2 className="text-lg font-semibold text-white">Submit your feedback</h2>
              <p className="mt-1 text-sm text-muted">
                Whether you&apos;re a tenant or a landlord, we&apos;d love to hear how we did.
                Your feedback is reviewed before publishing.
              </p>
              <TestimonialForm />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
