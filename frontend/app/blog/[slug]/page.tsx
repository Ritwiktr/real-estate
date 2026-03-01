import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.excerpt ?? undefined };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  if (!post) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/blog" className="text-sm text-primary hover:underline">← Blog</Link>
      <h1 className="mt-4 text-3xl font-bold text-slate-900">{post.title}</h1>
      {post.publishedAt && <p className="mt-2 text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>}
      {post.author && <p className="text-sm text-slate-600">By {post.author}</p>}
      <div className="mt-6 prose prose-slate max-w-none">
        <p className="whitespace-pre-wrap text-slate-600">{post.body}</p>
      </div>
    </article>
  );
}
