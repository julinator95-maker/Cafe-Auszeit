export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
      <h1
        className="text-3xl font-bold text-dark mb-8"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Impressum
      </h1>

      <div className="prose prose-sm text-dark/70 space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-dark mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            Café Auszeit<br />
            [Inhaber Name]<br />
            Diedenhofener Str. 1a<br />
            54294 Trier
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]<br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            [USt-IdNr.]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            [Inhaber Name]<br />
            Diedenhofener Str. 1a<br />
            54294 Trier
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-dark mb-2">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
            Gewähr übernehmen.
          </p>
        </section>
      </div>
    </div>
  );
}
