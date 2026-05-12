import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & Beschreibung */}
        <div>
          <Image
            src="/Logo-transparent.png"
            alt="Café Auszeit"
            width={130}
            height={50}
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="text-sm leading-relaxed text-cream/60">
            Bistro · Café · Backshop<br />
            Frühstück, hausgemachte Backwaren<br />
            und gute Kaffeespezialitäten in Trier.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cream/40 mb-4">Navigation</p>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Start" },
              { href: "/fruehstueckskarte", label: "Frühstückskarte" },
              { href: "/wochenkarte", label: "Wochenkarte" },
              { href: "/ueber-uns", label: "Über uns" },
              { href: "/bewertungen", label: "Bewertungen" },
              { href: "/kontakt", label: "Kontakt & Anfahrt" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt & Öffnungszeiten */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-cream/40 mb-4">Kontakt</p>
          <address className="not-italic text-sm space-y-2 text-cream/60">
            <p>Diedenhofener Str. 1a<br />54294 Trier</p>
            <p>Mo – Fr: 06:00 – 18:00 Uhr</p>
            <p>Sa: 07:00 – 14:00 Uhr</p>
          </address>
        </div>
      </div>

      {/* Rechtliches */}
      <div className="border-t border-cream/10 max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream/40">
        <p>© {new Date().getFullYear()} Café Auszeit Trier</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-cream/70 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-cream/70 transition-colors">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
