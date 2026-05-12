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
      {/* ─── HERO ─── */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-end">
        <Image
          src="/backwaren.png"
          alt="Über uns – Café Auszeit"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.55)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full pt-16">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Café Auszeit</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-cream"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Über uns
          </h1>
        </div>
      </section>

      {/* ─── HAUPTBEREICH ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <AnimatedSection direction="left">
          <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-3">Unsere Geschichte</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ein Ort zum Ankommen<br />und Wohlfühlen.
          </h2>
          <div className="space-y-4 text-dark/65 leading-relaxed">
            <p>
              Das Café Auszeit ist mehr als ein Café. Es ist ein Treffpunkt, ein Lieblingsplatz —
              ein Stück Zuhause mitten in Trier.
            </p>
            <p>
              Seit vielen Jahren stehen wir für Qualität, Frische und echte Gastfreundschaft.
              Ob ein gemütliches Frühstück am Nachmittag oder ein herzhafter Snack zwischendurch —
              wir legen Wert auf beste Zutaten, hausgemachte Speisen und einen Service,
              der von Herzen kommt.
            </p>
            <p>
              Wir freuen uns auf euch!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/food7.png"
            alt="Atmosphäre im Café Auszeit"
            fill
            className="object-cover"
          />
        </AnimatedSection>
      </section>

      {/* ─── WERTE ─── */}
      <section className="bg-warm py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
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

      {/* ─── PHILOSOPHIE ─── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <AnimatedSection>
          <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-4">Unsere Philosophie</p>
          <blockquote
            className="text-2xl md:text-3xl font-bold text-dark leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;Manchmal braucht man nur einen Kaffee<br />und eine gute Auszeit.&rdquo;
          </blockquote>
        </AnimatedSection>
      </section>
    </>
  );
}
