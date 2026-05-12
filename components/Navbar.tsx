"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Start" },
  { href: "/fruehstueckskarte", label: "Frühstückskarte" },
  { href: "/wochenkarte", label: "Wochenkarte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/bewertungen", label: "Bewertungen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Nur auf der Startseite startet die Navbar transparent */
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll(); /* sofort beim Laden prüfen */
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  /* Transparent = über Hero-Bild (nur Startseite + noch nicht gescrollt) */
  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white border-b border-border shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo — filter: invert macht es weiß wenn Navbar transparent */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/Logo-transparent.png"
            alt="Café Auszeit"
            width={140}
            height={55}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : pathname === link.href
                  ? "text-brown"
                  : "text-dark/65 hover:text-brown"
              } ${
                !isTransparent && pathname === link.href
                  ? "border-b border-brown pb-0.5"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:+4965199838440"
          className={`hidden lg:flex items-center gap-2 text-sm font-medium px-4 py-2 transition-colors ${
            isTransparent
              ? "border border-white/50 text-white hover:bg-white/10"
              : "bg-brown text-cream hover:bg-brown/90"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          Jetzt anrufen
        </a>

        {/* Hamburger */}
        <button
          className={`lg:hidden flex flex-col gap-1.5 p-2 ${isTransparent ? "text-white" : "text-dark"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-dark"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-dark"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-200 ${isTransparent ? "bg-white" : "bg-dark"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile-Menü */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-1 transition-colors hover:text-brown ${
                pathname === link.href ? "text-brown" : "text-dark/65"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+4965199838440"
            className="mt-2 bg-brown text-cream text-sm font-medium px-4 py-2 text-center hover:bg-brown/90 transition-colors"
          >
            Jetzt anrufen
          </a>
        </div>
      )}
    </header>
  );
}
