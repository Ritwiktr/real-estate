import type { Metadata } from "next";
import { TestimonialForm } from "@/components/forms/TestimonialForm";

export const metadata: Metadata = {
  title: "Testimonials & Reviews",
  description:
    "Real stories from landlords and tenants who have experienced ASTA Property Management first-hand.",
};

const STATIC_TESTIMONIALS = [
  {
    quote:
      "Working with ASTA has completely changed how I manage my rental portfolio. Theresia and her team are incredibly knowledgeable, especially when it comes to compliance and tenant screening. I haven’t had a single void period in over a year.",
    name: "James T.",
    role: "Landlord, Islington",
  },
  {
    quote:
      "Misha was a delight to work with during the onboarding process. She answered every question patiently and walked me through the entire maintenance system. It’s clear this company is built on genuine care and efficiency.",
    name: "Rachel L.",
    role: "Tenant, Dalston",
  },
  {
    quote:
      "I’ve worked with several management companies in the past, but ASTA stands out for their transparency and speed of communication. Mariia kept me informed at every step during a complex tenant turnover. I highly recommend them to any serious landlord.",
    name: "Daniel S.",
    role: "Landlord, Canary Wharf",
  },
  {
    quote:
      "As a first-time renter in London, I felt overwhelmed until ASTA stepped in. The digital portal is easy to use, and their response time to maintenance requests is amazing. Thank you for making me feel at home!",
    name: "Chloe A.",
    role: "Tenant, Hackney",
  },
  {
    quote:
      "I switched to ASTA after growing frustrated with my previous agent. What a difference! From marketing my flat with professional photos to handling all tenant paperwork, the entire process was seamless and surprisingly enjoyable.",
    name: "Priya K.",
    role: "Landlord, Walthamstow",
  },
  {
    quote:
      "From our first call with Theresia to the final move-in, we felt taken care of. The ASTA team goes above and beyond, and I wouldn’t hesitate to work with them again for future properties.",
    name: "Greg & Tanya H.",
    role: "Holiday Let Owners, West Mersea",
  },
];

export default function TestimonialsPage() {
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
            Testimonials
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            What our clients say
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80">
            Our clients are at the heart of everything we do. ASTA Property Management is proud to
            share real stories from landlords and tenants who have experienced our professional,
            reliable, and personal service first-hand. These testimonials reflect the quality, care,
            and attention that define our approach — from long-term lettings to holiday homes and
            full-service property management across London.
          </p>
        </div>
      </section>

      {/* Testimonials + form */}
      <section className="border-t border-white/5 bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div>
              <h2 className="text-xl font-semibold text-white">Client Testimonials</h2>
              <div className="mt-6 space-y-4">
                {STATIC_TESTIMONIALS.map((t) => (
                  <blockquote
                    key={t.name}
                    className="rounded-2xl border border-white/10 bg-panel/70 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                  >
                    <p className="text-sm text-muted">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                      <cite className="text-sm font-semibold not-italic text-white">
                        {t.name}
                      </cite>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted">
                        {t.role}
                      </span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-white/10 bg-panel/70 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
              <h2 className="text-lg font-semibold text-white">Share Your Experience</h2>
              <p className="mt-1 text-sm text-muted">
                We value every client and tenant relationship — and your feedback helps us grow,
                improve, and continue delivering exceptional property management across London and
                beyond.
              </p>
              <p className="mt-3 text-sm text-muted">
                If you’ve had a positive experience with ASTA, we’d love to hear from you. Kindly
                use the form below to share your story. Selected testimonials may appear on our
                website or future marketing materials (with your permission, of course).
              </p>
              <div className="mt-4">
                <TestimonialForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
