import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/server-api";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blog | Residence",
  description: "Market insights, regulatory updates, and tips for landlords and tenants.",
};

// Curated images per slug for elegant card thumbnails (no DB change)
const BLOG_IMAGES: Record<string, string> = {
  "welcome-to-our-blog": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  "tenant-screening-best-practices": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  "property-maintenance-tips": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
  "rental-market-outlook-2025": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
  "holiday-let-vs-long-term-rental": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  "deposit-protection-schemes": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
};
const DEFAULT_BLOG_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800";

function getPostImage(slug: string) {
  return BLOG_IMAGES[slug] ?? DEFAULT_BLOG_IMAGE;
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const { items } = await getBlogPosts(1, 20);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/70">Insights</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">
            Market insights, regulatory updates, and tips for landlords and tenants.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          {items.length === 0 ? (
            <p className="py-16 text-center text-muted">No posts yet.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((post: { id: string; slug: string; title: string; excerpt: string | null; publishedAt: string | null; author: string | null }) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/30 transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-panel">
                    <img
                      src={getPostImage(post.slug)}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-white/90">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="text-lg font-semibold leading-snug text-white group-hover:text-primary sm:text-xl">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                        {post.excerpt}
                      </p>
                    )}
                    {post.author && (
                      <p className="mt-3 text-xs text-muted">By {post.author}</p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read article
                      <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
