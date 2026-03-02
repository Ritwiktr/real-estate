"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "Overview" },
      { href: "/services/tenant-placement", label: "Tenant Placement" },
      { href: "/services/maintenance-inspections", label: "Maintenance & Inspections" },
      { href: "/services/financial-management", label: "Financial Management" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

type HeaderProps = {
  /** When "static", header is in flow and scrolls with content (e.g. on home). When "sticky", stays at top. */
  variant?: "sticky" | "static";
};

export default function Header({ variant = "sticky" }: HeaderProps) {
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isStatic = variant === "static";
  const onHero = !isStatic && isHome && !scrolled;
  const headerBg = isStatic
    ? "bg-black/95 border-white/5 backdrop-blur-md"
    : onHero
      ? "bg-white/[0.06] backdrop-blur-md border-white/10 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.06)]"
      : "bg-black/95 backdrop-blur-md border-white/5";
  const headerPosition = isStatic ? "" : onHero ? "absolute top-0 left-0 right-0" : "sticky top-0";

  const isActive = (href: string) => pathname === href;
  const isActiveParent = (item: { children?: { href: string }[] }) =>
    item.children?.some((c) => pathname === c.href);

  return (
    <header
      className={`${headerPosition} z-50 w-full shrink-0 border-b text-white transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo – left */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          aria-label="Residence – Home"
        >
          <span className="text-[#818cf8] drop-shadow-sm">◇</span>
          <span className="text-lg font-semibold tracking-[0.02em]">RESIDENCE</span>
        </Link>

        {/* Centered nav – desktop */}
        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((item) =>
              "children" in item ? (
                <li key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((o) => !o)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition hover:text-white ${
                      isActiveParent(item) ? "text-white" : "text-white/80"
                    }`}
                  >
                    {item.label}
                    <span className="text-[10px] opacity-80">▾</span>
                  </button>
                  {servicesOpen && item.children && (
                    <div className="absolute left-0 top-full pt-1">
                      <div className="min-w-[220px] rounded-lg border border-white/10 bg-black/95 py-2 shadow-xl shadow-black/40 backdrop-blur-xl">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className={`block px-4 py-2.5 text-sm ${
                              pathname === c.href
                                ? "font-medium text-white"
                                : "text-white/80 hover:text-white"
                            }`}
                            onClick={() => setServicesOpen(false)}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    className={`relative block px-4 py-2 text-sm font-medium transition hover:text-white ${
                      isActive(item.href!) ? "text-white" : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href!) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#818cf8]" />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Right: phone + auth */}
        <div className="flex shrink-0 items-center gap-4">
          <a
            href="tel:08001234567"
            className="hidden items-center gap-2 text-sm text-white/90 hover:text-white sm:flex"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0800 123 4567
          </a>
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  <Link
                    href="/portal"
                    className="rounded border border-white/30 px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    Portal
                  </Link>
                  <span className="hidden text-sm text-white/80 sm:inline">{user.email}</span>
                  <button
                    type="button"
                    onClick={() => logout()}
                    className="rounded border border-white/30 px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="rounded border border-white/30 px-3 py-1.5 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  Login
                </Link>
              )}
            </>
          )}
          <button
            type="button"
            className="flex flex-col gap-1.5 rounded p-2 hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {navLinks.map((item) =>
                "children" in item ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-white/90"
                    >
                      {item.label} ▾
                    </button>
                    {servicesOpen && item.children && (
                      <ul className="border-l border-white/10 pl-4">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`block py-2 text-sm ${pathname === c.href ? "text-white" : "text-white/80"}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      className={`block py-2.5 text-sm font-medium ${pathname === item.href ? "text-white" : "text-white/80"}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
