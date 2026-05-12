import AnimatedSection from "@/components/AnimatedSection";

const bewertungen = [
  {
    name: "Melanie G.",
    datum: "vor 2 Wochen",
    sterne: 5,
    text: "Super gemütliches Café mit einer tollen Atmosphäre und sehr freundlichem Personal. Das Frühstück ist abwechslungsreich. Wir kommen immer wieder!",
  },
  {
    name: "Thomas K.",
    datum: "vor 1 Monat",
    sterne: 5,
    text: "Einfach immer wieder ein Genuss! Bewundere das Café am Nachmittag für einen kleinen Snack oder zum Kaffee trinken. Tolle Qualität und immer sehr angenehm.",
  },
  {
    name: "Julia W.",
    datum: "vor 1 Monat",
    sterne: 5,
    text: "Musterkäufer: Tolle Atmosphäre! 5 Sterne. Ich empfehle sehr gerne diese Café-Bar zum Entspannen – tolle Qualität und immer ein Lächeln vom Team.",
  },
  {
    name: "Katharina L.",
    datum: "vor 3 Monaten",
    sterne: 5,
    text: "Mein Lieblingsplatz in Trier! Die Atmosphäre ist gemütlich und einladend. Das Frühstück ist immer frisch und liebevoll zubereitet. Sehr empfehlenswert!",
  },
  {
    name: "Dietmar G.",
    datum: "vor 7 Jahren",
    sterne: 5,
    text: "Das Café Auszeit in Trier ist ein absoluter Geheimtipp! Die Atmosphäre ist gemütlich und einladend.",
  },
  {
    name: "Petra S.",
    datum: "vor 2 Monaten",
    sterne: 5,
    text: "Tolle Backwaren und super nettes Personal! Frische Qualität und immer ein Lächeln vom Team. Klare Empfehlung!",
  },
];

function Sterne({ anzahl }: { anzahl: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={s <= anzahl ? "#B8913A" : "#E0D3BC"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function BewertungenPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-warm border-b border-border pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-2">Echte Stimmen</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-dark mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Was unsere Gäste sagen
            </h1>

            {/* Google-Bewertung gesamt */}
            <div className="inline-flex items-center gap-4 bg-cream px-6 py-4 border border-border">
              {/* Google-G Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-dark/40 uppercase tracking-widest mb-1">Google Bewertung</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-brown" style={{ fontFamily: "var(--font-playfair)" }}>4.7</span>
                  <div>
                    <Sterne anzahl={5} />
                    <p className="text-xs text-dark/50 mt-1">aus 630+ Bewertungen</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── BEWERTUNGS-KARTEN ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {bewertungen.map((b, i) => (
            <AnimatedSection key={b.name + b.datum} delay={i * 0.07} className="bg-warm border border-border p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold text-dark text-sm">{b.name}</p>
                  <p className="text-xs text-dark/40">{b.datum}</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-dark/20 flex-shrink-0">
                  <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
              <Sterne anzahl={b.sterne} />
              <p className="text-sm text-dark/65 leading-relaxed mt-3">&ldquo;{b.text}&rdquo;</p>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA zur Google-Bewertungsseite */}
        <AnimatedSection className="text-center">
          <p className="text-dark/50 text-sm mb-4">Waren Sie bei uns? Wir freuen uns über Ihr Feedback.</p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brown text-cream px-8 py-3 text-sm font-medium hover:bg-brown/90 transition-colors"
          >
            Alle Bewertungen auf Google ansehen
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}
