import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/server-api";

export const dynamic = "force-dynamic";

const BLOG_IMAGES: Record<string, string> = {
  "welcome-to-our-blog": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
  "tenant-screening-best-practices": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
  "property-maintenance-tips": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200",
  "rental-market-outlook-2025": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200",
  "holiday-let-vs-long-term-rental": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
  "deposit-protection-schemes": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
};
const DEFAULT_BLOG_IMAGE = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200";

function getPostImage(slug: string) {
  return BLOG_IMAGES[slug] ?? DEFAULT_BLOG_IMAGE;
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: "Blog | Residence" };
  return {
    title: `${post.title} | Residence`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();

  const imageUrl = getPostImage(params.slug);

  return (
    <div className="min-h-screen bg-surface">
      {/* Hero with cover image */}
      <section className="relative flex min-h-[50vh] flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
        <div className="relative mx-auto w-full max-w-4xl px-4 pb-12 pt-28 sm:px-6 lg:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-primary"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blog
          </Link>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-white/70">
            {post.publishedAt && <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>}
            {post.author && <span>By {post.author}</span>}
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="prose prose-invert max-w-none prose-p:text-muted prose-p:leading-relaxed prose-headings:text-white">
            <p className="whitespace-pre-wrap text-lg leading-relaxed text-muted">
              {post.body}
            </p>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              ← All posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
