import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const werte = [
  {
    titel: "Mit Liebe gemacht",
    text: "Hausgemacht und mit viel Liebe zum Detail – das spürt man.",
  },
  {
    titel: "Frische Zutaten",
    text: "Wir verwenden hochwertige und regionale Produkte.",
  },
  {
    titel: "Beste Qualität",
    text: "Gute Küche & Speisen, die man schmeckt.",
  },
  {
    titel: "Für euch da",
    text: "Ein herzliches Team, das sich auf euren Besuch freut.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* ─── HERO – Innenraum als Einstieg ─── */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-end">
        <Image
          src="/innenraum.jpg"
          alt="Gemütlicher Innenraum des Café Auszeit"
          fill
          className="object-cover object-center"
          style={{ filter: "brightness(0.7)" }}
          priority
        />
        {/* Gradient von unten damit Headline lesbar */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full pt-16">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Café Auszeit</p>
            <h1
              className="text-4xl md:text-6xl font-bold text-cream leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ein Ort zum<br />Ankommen.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── GESCHICHTE – Text zentriert, Luft zum Atmen ─── */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-4">Unsere Geschichte</p>
            <p className="text-dark/65 leading-relaxed text-lg mb-4">
              Das Café Auszeit ist mehr als ein Café. Es ist ein Treffpunkt, ein Lieblingsplatz —
              ein Stück Zuhause mitten in Trier.
            </p>
            <p className="text-dark/65 leading-relaxed">
              Seit vielen Jahren stehen wir für Qualität, Frische und echte Gastfreundschaft.
              Ob ein gemütliches Frühstück, ein duftender Kaffee am Nachmittag oder ein herzhafter
              Snack zwischendurch — wir legen Wert auf beste Zutaten, hausgemachte Speisen und
              einen Service, der von Herzen kommt.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WERTE ─── */}
      <section className="bg-warm py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10 text-center">
            <h2
              className="text-2xl font-bold text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Mit Herz, Leidenschaft und regionaler Verbundenheit
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {werte.map((wert, i) => (
              <AnimatedSection key={wert.titel} delay={i * 0.1} className="bg-cream p-6 border border-border">
                <p className="font-semibold text-brown mb-2">{wert.titel}</p>
                <p className="text-sm text-dark/60 leading-relaxed">{wert.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHIE – Zitat über dem Innenraum-Foto ─── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/innenraum.jpg"
          alt="Atmosphäre im Café Auszeit"
          fill
          className="object-cover object-center"
          style={{ filter: "brightness(0.35)" }}
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-6">Unsere Philosophie</p>
            <blockquote
              className="text-3xl md:text-4xl font-bold text-cream leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;Manchmal braucht man nur einen Kaffee<br />und eine gute Auszeit.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
