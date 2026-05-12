import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

/* ─── Platzhalter-Wochenkarte ─── */
/* Inhalt wird vom Kunden wöchentlich aktualisiert */
const wochentage = [
  { tag: "Montag", gericht: "Wird täglich frisch aktualisiert", preis: null },
  { tag: "Dienstag", gericht: "Wird täglich frisch aktualisiert", preis: null },
  { tag: "Mittwoch", gericht: "Wird täglich frisch aktualisiert", preis: null },
  { tag: "Donnerstag", gericht: "Wird täglich frisch aktualisiert", preis: null },
  { tag: "Freitag", gericht: "Wird täglich frisch aktualisiert", preis: null },
  { tag: "Samstag", gericht: "Wird täglich frisch aktualisiert", preis: null },
];

export default function WochenkartePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-end">
        <Image
          src="/food6.png"
          alt="Wochenkarte Café Auszeit"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.6) saturate(1.1)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full pt-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Café Auszeit</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-cream"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Wochenkarte
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">

        <AnimatedSection className="mb-12">
          <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-3">Jeden Tag neu</p>
          <h2
            className="text-3xl font-bold text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frisch. Saisonal. Regional.
          </h2>
          <p className="text-dark/60 max-w-xl leading-relaxed">
            Unsere Wochenkarte wechselt regelmäßig und orientiert sich an frischen,
            saisonalen Zutaten. Die aktuelle Karte finden Sie immer direkt vor Ort
            oder auf unseren Social-Media-Kanälen.
          </p>
        </AnimatedSection>

        {/* Tages-Kacheln */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {wochentage.map((item, i) => (
            <AnimatedSection key={item.tag} delay={i * 0.05} className="bg-warm border border-border p-6">
              <p className="text-xs font-semibold text-olive uppercase tracking-widest mb-2">{item.tag}</p>
              <p className="text-dark/50 text-sm italic">{item.gericht}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Hinweis-Box */}
        <AnimatedSection className="bg-brown/10 border border-brown/20 p-6 text-center">
          <p
            className="text-xl font-bold text-brown mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Aktuelle Wochenkarte
          </p>
          <p className="text-dark/60 text-sm mb-4">
            Die aktuelle Wochenkarte finden Sie direkt bei uns vor Ort oder folgen Sie uns auf Social Media
            für tägliche Updates.
          </p>
          <a
            href="https://maps.google.com/?q=Diedenhofener+Str+1a+54294+Trier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown text-cream px-6 py-3 text-sm font-medium hover:bg-brown/90 transition-colors"
          >
            Route zum Café
          </a>
        </AnimatedSection>
      </div>
    </>
  );
}
