import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

/* ─── Bewertungs-Daten ─── */
const reviews = [
  {
    name: "Melanie G.",
    text: "Super gemütliches Café mit einer tollen Atmosphäre und sehr freundlichem Personal. Das Frühstück ist abwechslungsreich. Wir kommen immer wieder!",
    stars: 5,
  },
  {
    name: "Thomas K.",
    text: "Einfach immer wieder ein Genuss! Bewundere das Café am Nachmittag für einen kleinen Snack oder zum Kaffee trinken. Tolle Qualität!",
    stars: 5,
  },
  {
    name: "Julia W.",
    text: "Mein Lieblingsfrühstück! Hochwertige Zutaten und immer ein Lächeln vom Team. Herzliche Empfehlung!",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO – volle Bildschirmhöhe
      ═══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">

        {/* Hintergrundbild */}
        <Image
          src="/heroneu.png"
          alt="Café Auszeit Trier von außen"
          fill
          className="object-cover object-[70%_15%]"
          style={{ filter: "brightness(0.6) saturate(1.2) sepia(0.1)" }}
          priority
        />

        {/* Warmer Gradient-Overlay von links */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/50 to-dark/10" />
        {/* Oberer Gradient damit Navbar-Logo lesbar bleibt */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-dark/40 to-transparent" />

        {/* Inhalt */}
        <div className="relative z-10 w-full px-10 md:px-16 pt-16 max-w-2xl">
          <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
            Bistro · Café · Backshop
          </p>
          <h1
            className="font-heading text-5xl md:text-7xl font-bold text-cream leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frühstück.<br />
            Bistro.<br />
            <span className="text-gold">Deine Auszeit.</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-md mb-8 leading-relaxed">
            Hausgemachte Backwaren, frische Frühstücke und
            gute Kaffeespezialitäten – gemütlich in Trier.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/fruehstueckskarte"
              className="bg-brown text-cream px-6 py-3 text-sm font-medium hover:bg-brown/90 transition-colors"
            >
              Zur Frühstückskarte
            </Link>
            <a
              href="https://maps.google.com/?q=Diedenhofener+Str+1a+54294+Trier"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/50 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors"
            >
              Route öffnen
            </a>
            <a
              href="tel:+4965199838440"
              className="border border-cream/50 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>

        {/* Scroll-Indikator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-cream/40">
          <div className="w-px h-10 bg-cream/30" />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INFO-LEISTE – clean, ohne Icons
      ═══════════════════════════════════════ */}
      <section className="bg-warm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {[
            { label: "Adresse", value: "Diedenhofener Str. 1a, 54294 Trier" },
            { label: "Mo – Fr", value: "06:00 – 18:00 Uhr" },
            { label: "Samstag", value: "07:00 – 14:00 Uhr" },
            { label: "Parkplätze", value: "Kostenlos vor dem Haus" },
          ].map((item) => (
            <div key={item.label} className="border-l-2 border-brown/20 pl-3">
              <p className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-0.5">{item.label}</p>
              <p className="text-sm text-dark/80 leading-snug">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FRÜHSTÜCK SEKTION
      ═══════════════════════════════════════ */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-2">Frisch & hausgemacht</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-dark mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Unser Frühstück
            </h2>
            <p className="text-dark/60 max-w-xl mb-10">
              Süß oder herzhaft, für eine Person oder zu zweit — unsere Frühstückssets werden
              frisch für Sie zusammengestellt.
            </p>
          </AnimatedSection>

          {/* Foto-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { src: "/food4.png", alt: "Frühstück Etagere mit Früchten" },
              { src: "/food3.png", alt: "Frühstück mit Joghurt und Beeren" },
              { src: "/food6.png", label: "Herzhafte Spezialität" },
            ].map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.1} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt || ""}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <Link
              href="/fruehstueckskarte"
              className="inline-block bg-brown text-cream px-8 py-3 text-sm font-medium hover:bg-brown/90 transition-colors"
            >
              Alle Frühstücke ansehen →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BACKWAREN – Vollbild-Banner
      ═══════════════════════════════════════ */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/backwaren.png"
          alt="Frische Backwaren im Café Auszeit"
          fill
          className="object-cover object-center"
          style={{ filter: "brightness(0.65)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
        <AnimatedSection className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Backshop</p>
          <h2
            className="text-4xl font-bold text-cream"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Frisch gebacken. Jeden Tag.
          </h2>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════
          ÜBER UNS – TEASER
      ═══════════════════════════════════════ */}
      <section className="bg-warm py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <AnimatedSection direction="left">
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-3">Seit Jahren in Trier</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-dark mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ein Ort zum Ankommen<br />und Wohlfühlen.
            </h2>
            <p className="text-dark/60 leading-relaxed mb-6">
              Das Café Auszeit ist mehr als ein Café. Es ist ein Treffpunkt, ein Lieblingsplatz —
              ein Stück Zuhause mitten in Trier. Ob gemütliches Frühstück, duftender Kaffee
              am Nachmittag oder ein Snack zwischendurch.
            </p>
            <p className="text-dark/60 leading-relaxed mb-8">
              Wir legen Wert auf beste Zutaten, hausgemachte Speisen und einen Service,
              der von Herzen kommt.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-block border border-brown text-brown px-6 py-3 text-sm font-medium hover:bg-brown hover:text-cream transition-colors"
            >
              Mehr über uns
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/food7.png"
              alt="Gemütliche Atmosphäre im Café Auszeit"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEWERTUNGEN – TEASER
      ═══════════════════════════════════════ */}
      <section className="bg-cream py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-2">Google Bewertungen</p>
            <h2
              className="text-4xl font-bold text-dark mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was unsere Gäste sagen
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-3xl font-bold text-brown">4.7</span>
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill={s <= 4 ? "#B8913A" : "#E0D3BC"}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-dark/50 text-sm">aus 630+ Bewertungen</span>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.1} className="bg-warm p-6 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#B8913A">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-dark/70 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="text-xs font-semibold text-brown">{review.name}</p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link
              href="/bewertungen"
              className="inline-block border border-brown text-brown px-8 py-3 text-sm font-medium hover:bg-brown hover:text-cream transition-colors"
            >
              Alle Bewertungen ansehen
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA-BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-brown py-16 px-6 text-center">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-4xl font-bold text-cream mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Besuchen Sie uns in Trier
          </h2>
          <p className="text-cream/70 mb-8 max-w-md mx-auto">
            Diedenhofener Str. 1a · 54294 Trier<br />
            Kostenlose Parkplätze direkt vor dem Haus
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://maps.google.com/?q=Diedenhofener+Str+1a+54294+Trier"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cream text-brown px-6 py-3 text-sm font-medium hover:bg-cream/90 transition-colors"
            >
              Route planen
            </a>
            <Link
              href="/kontakt"
              className="border border-cream/50 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors"
            >
              Kontakt & Anfahrt
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
