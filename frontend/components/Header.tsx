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

export default function Header() {
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

  const onHero = isHome && !scrolled;
  const bgClass = onHero
    ? "bg-slate-900/90 backdrop-blur-sm"
    : "bg-slate-900 shadow-lg";

  return (
    <header
      className={`sticky top-0 z-50 text-white transition duration-300 ${bgClass}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <span className="text-2xl">◇</span>
          <span>Residence</span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="tel:08001234567"
            className="hidden text-sm font-medium text-white hover:text-sky-300 sm:block"
          >
            Call 0800 123 4567
          </a>
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  <span className="hidden text-sm sm:inline text-white/90">{user.email}</span>
                  <button
                    type="button"
                    onClick={() => logout()}
                    className="rounded-lg border border-white/40 px-3 py-1.5 text-sm font-medium hover:bg-white/10"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="rounded-lg border border-white/40 px-3 py-1.5 text-sm font-medium hover:bg-white/10"
                >
                  Login
                </Link>
              )}
            </>
          )}
          <button
            type="button"
            className="flex flex-col gap-1.5 rounded p-2 hover:bg-white/10 sm:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      <nav
        className={`border-t border-white/10 ${bgClass} ${mobileOpen ? "block" : "hidden"} sm:block`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:flex-wrap sm:items-center sm:gap-1 sm:px-6">
          {navLinks.map((item) =>
            "children" in item ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((o) => !o)}
                  className="w-full py-2 text-left text-sm font-medium text-white hover:text-sky-300 sm:w-auto sm:px-3"
                >
                  {item.label} ▾
                </button>
                {servicesOpen && "children" in item && item.children && (
                  <div className="border-t border-white/10 py-2 sm:absolute sm:left-0 sm:top-full sm:mt-0 sm:min-w-[200px] sm:rounded-b-lg sm:bg-slate-900 sm:shadow-xl sm:border-t-0">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block py-2 pl-4 text-sm text-white sm:px-4 ${pathname === c.href ? "font-semibold text-sky-400" : ""}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href!}
                href={item.href!}
                className={`block py-2 text-sm font-medium text-white hover:text-sky-300 sm:px-3 ${pathname === item.href ? "!text-sky-400" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}
