import Link from "next/link";
import Image from "next/image";

const ACCREDITATION_LOGOS = [
  {
    src: "/accreditations/safeagent.png",
    alt: "safeagent accredited",
    width: 132,
    height: 72,
  },
  {
    src: "/accreditations/tds.png",
    alt: "Tenancy Deposit Scheme member",
    width: 108,
    height: 72,
  },
  {
    src: "/accreditations/property-ombudsman.png",
    alt: "The Property Ombudsman",
    width: 156,
    height: 72,
  },
  {
    src: "/accreditations/green-small-business.png",
    alt: "Green Small Business Certified",
    width: 108,
    height: 72,
  },
] as const;

const MARQUEE_LOGOS = [...ACCREDITATION_LOGOS, ...ACCREDITATION_LOGOS, ...ACCREDITATION_LOGOS] as const;

const BRAND_GOLD = "#CBA38C";

function AccreditationMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden bg-transparent"
      aria-label="Accreditations and memberships"
    >
      <div className="flex w-full overflow-hidden bg-transparent">
        <div className="flex w-max animate-footer-marquee will-change-transform bg-transparent">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center gap-6 bg-transparent px-0 sm:gap-8 md:gap-10"
            >
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  key={`${set}-${logo.src}-${index}`}
                  className="flex shrink-0 items-center bg-transparent"
                >
                  <span
                    role="img"
                    aria-label={logo.alt}
                    className="block"
                    style={
                      {
                        width: `${logo.width}px`,
                        height: `${logo.height}px`,
                        backgroundColor: BRAND_GOLD,
                        WebkitMaskImage: `url(${logo.src})`,
                        maskImage: `url(${logo.src})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        maskMode: "luminance",
                        WebkitMaskMode: "luminance",
                      } as React.CSSProperties & { WebkitMaskMode?: "luminance" }
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const linkClass =
    "rounded-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] text-[var(--color-text)]/[0.93] hover:text-primary hover:decoration-primary/35 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

  return (
    <footer className="relative mt-auto border-t border-primary/40 bg-gradient-to-b from-panel via-surface to-overlay text-muted shadow-[inset_0_1px_0_0_rgba(255,255,255,0.045)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-block rounded-sm transition-opacity duration-300 hover:opacity-[0.92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-panel">
              <Image
                src="/asta-logo.png"
                alt="ASTA Property Management"
                width={140}
                height={42}
                className="h-12 w-auto object-contain object-left bg-transparent"
                style={{ background: "transparent" }}
                unoptimized
              />
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted/88">
              Curated properties. A seamless experience.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary/95">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/owners" className={linkClass}>For Owners</Link></li>
              <li><Link href="/tenants" className={linkClass}>For Tenants</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/testimonials" className={linkClass}>Testimonials</Link></li>
              <li><Link href="/property-listings" className={linkClass}>Properties</Link></li>
              <li><Link href="/about-us" className={linkClass}>About Us</Link></li>
              <li><Link href="/contact-us" className={linkClass}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary/95">Support</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/faqs" className={`block ${linkClass}`}>FAQs</Link></li>
              <li><Link href="/maintenance-request" className={`block ${linkClass}`}>Maintenance Request</Link></li>
              <li><Link href="/login-portal" className={`block ${linkClass}`}>Client Portal</Link></li>
              <li><Link href="/login-portal-help" className={`block ${linkClass}`}>Portal Help</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary/95">Legal</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/privacy" className={`block ${linkClass}`}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={`block ${linkClass}`}>Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Full-bleed accreditations — same width as footer / viewport, no side fades */}
      <div className="mt-12 w-full border-t border-primary/15 pt-8 [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04)]">
        <AccreditationMarquee />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-muted/80">
          © {new Date().getFullYear()} ASTA Property Management
        </p>
      </div>
    </footer>
  );
}
