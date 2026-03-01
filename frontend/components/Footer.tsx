import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-lg font-bold text-white">
              <span>◇</span> Residence
            </p>
            <p className="mt-2 text-sm">
              Find your next home. Premium properties and a seamless experience.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Support</p>
            <ul className="mt-3 space-y-2 text-sm">
              <Link href="/faqs" className="block hover:text-white">FAQs</Link>
              <Link href="/maintenance-request" className="block hover:text-white">Maintenance Request</Link>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <Link href="/privacy" className="block hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-white">Terms of Service</Link>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Residence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
