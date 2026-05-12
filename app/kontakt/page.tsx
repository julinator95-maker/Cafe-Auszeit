import AnimatedSection from "@/components/AnimatedSection";

export default function KontaktPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="bg-warm border-b border-border pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-olive text-xs font-semibold uppercase tracking-widest mb-2">Wir sind für Sie da</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-dark"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kontakt & Anfahrt
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ─── KONTAKTINFO ─── */}
        <AnimatedSection direction="left" className="space-y-8">

          <div>
            <p className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3">Adresse</p>
            <address className="not-italic text-dark/80 leading-relaxed">
              <strong className="text-dark">Café Auszeit</strong><br />
              Diedenhofener Str. 1a<br />
              54294 Trier
            </address>
          </div>

          <div>
            <p className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3">Öffnungszeiten</p>
            <table className="text-sm text-dark/80 w-full max-w-xs">
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 pr-6 font-medium">Montag – Freitag</td>
                  <td className="py-2">06:00 – 18:00 Uhr</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 pr-6 font-medium">Samstag</td>
                  <td className="py-2">07:00 – 14:00 Uhr</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 font-medium">Sonntag</td>
                  <td className="py-2 text-dark/40">Geschlossen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-xs font-semibold text-dark/40 uppercase tracking-widest mb-3">Parkplätze</p>
            <p className="text-dark/70 text-sm">Kostenlose Parkplätze direkt vor dem Geschäft</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="tel:+49651"
              className="flex items-center gap-3 bg-brown text-cream px-5 py-3 text-sm font-medium hover:bg-brown/90 transition-colors w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Jetzt anrufen
            </a>
            <a
              href="https://maps.google.com/?q=Diedenhofener+Str+1a+54294+Trier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-brown text-brown px-5 py-3 text-sm font-medium hover:bg-brown hover:text-cream transition-colors w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Route in Google Maps öffnen
            </a>
          </div>
        </AnimatedSection>

        {/* ─── KARTE ─── */}
        <AnimatedSection direction="right">
          <div className="w-full h-80 md:h-[450px] border border-border overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Diedenhofener+Stra%C3%9Fe+1a,+54294+Trier&output=embed&hl=de&z=16"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.8) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Café Auszeit Trier auf Google Maps"
            />
          </div>
          <p className="text-xs text-dark/40 mt-2">Diedenhofener Str. 1a · 54294 Trier</p>
        </AnimatedSection>
      </div>
    </>
  );
}
