import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 text-base font-semibold text-white">
              <span className="text-[#6366f1]">◇</span> RESIDENCE
            </p>
            <p className="mt-2 text-sm text-white/60">
              Curated properties. A seamless experience.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/properties" className="hover:text-white">Properties</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/owners" className="hover:text-white">For Owners</Link></li>
              <li><Link href="/tenants" className="hover:text-white">For Tenants</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Support</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/faqs" className="block hover:text-white">FAQs</Link></li>
              <li><Link href="/maintenance-request" className="block hover:text-white">Maintenance Request</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className="block hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="block hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Residence
        </p>
      </div>
    </footer>
  );
}
