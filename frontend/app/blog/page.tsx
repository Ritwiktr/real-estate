import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/server-api";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Blog",
  description: "Articles, market insights, and regulatory updates.",
};

export default async function BlogPage() {
  const { items } = await getBlogPosts(1, 20);
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Blog</h1>
      <p className="mt-4 text-slate-600">
        Market insights, regulatory updates, and tips for landlords and tenants.
      </p>
      <ul className="mt-8 space-y-6">
        {items.map((post: { id: string; slug: string; title: string; excerpt: string | null; publishedAt: string | null }) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="block rounded-lg border border-slate-200 p-6 hover:border-primary hover:shadow-md">
              <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
              {post.excerpt && <p className="mt-2 text-slate-600">{post.excerpt}</p>}
              {post.publishedAt && <p className="mt-2 text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>}
            </Link>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p className="py-12 text-slate-600">No posts yet.</p>}
    </div>
  );
}
