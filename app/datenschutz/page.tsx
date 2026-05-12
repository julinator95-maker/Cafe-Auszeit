export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <h1
        className="text-3xl font-bold text-dark mb-8"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-sm text-dark/70 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-dark mb-2">1. Datenschutz auf einen Blick</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">3. Datenerfassung auf dieser Website</h2>
          <p>
            Diese Website erhebt keine personenbezogenen Daten ohne Ihre ausdrückliche
            Zustimmung. Beim Besuch der Website werden lediglich technisch notwendige
            Daten (wie z.B. IP-Adresse, Browsertyp) durch den Hosting-Anbieter
            protokolliert.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">4. Google Maps</h2>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
            Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung der Funktionen
            von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen
            werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
          </p>
          <p className="mt-2">
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
            von Google: <a href="https://policies.google.com/privacy" className="text-brown hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">5. Verantwortliche Stelle</h2>
          <p>
            Café Auszeit<br />
            [Inhaber Name]<br />
            Diedenhofener Str. 1a<br />
            54294 Trier<br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>
      </div>
    </div>
  );
}
