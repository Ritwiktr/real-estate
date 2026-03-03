import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-16">
      <h1 className="text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-2 text-center text-neutral-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      >
        Go home
      </Link>
    </div>
  );
}
