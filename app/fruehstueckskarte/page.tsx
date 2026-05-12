import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

/* ─── Menü-Daten ─── */
const fruehstuecksSets = [
  {
    name: "Süße Auszeit",
    description: "1 Brötchen, 1 Croissant, Butter, Marmelade, Honig, Nutella, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "10,90",
  },
  {
    name: "Herzhafte Auszeit",
    description: "2 Brötchen, Butter, verschiedene Wurstsorten, Käse, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "10,90",
  },
  {
    name: "Große Auszeit",
    description: "2 Brötchen, 2 Croissants, Butter, verschiedene Wurstsorten, Marmelade, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "16,90",
    note: "für 2 Personen",
  },
];

const specials = [
  {
    name: "Deftige Auszeit",
    description: "2 Brötchen nach Wahl, Butter, Rohesser, Frühkäse, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "14,90",
  },
  {
    name: "Italienische Auszeit",
    description: "1 Laugensemmel, 1 Ciabatta, Butter, 2 Scheiben Käse, 2 Scheiben Salami, 2 Scheiben Serrano Schinken, Tomate-Mozzarella, Marmelade, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "14,90",
  },
  {
    name: "Besondere Auszeit",
    description: "2 Brötchen nach Wahl, Butter, Rührei, 2 Scheiben Käse, Camembert, Lachs, Tomate-Mozzarella, Orangensaft, 1 Kaffee- oder Teespezialität nach Wahl",
    price: "16,90",
  },
  {
    name: "Gemeinsame Auszeit",
    description: "4 Brötchen, 2 Croissants, Butter, Rührei, Tomate-Mozzarella, 2 Scheiben Salami, 3 Scheiben Schinken, 2 Marmeladen, 2 Joghurt Obst/Müsli, 2 Orangensäfte, 2 Kaffee- oder Teespezialitäten nach Wahl",
    price: "28,90",
    note: "für 2 Personen",
  },
];

const eierlei = [
  { name: "Natur", price: "3,90" },
  { name: "Feta, Tomate und Paprika", price: "6,90" },
  { name: "Schinken (roh oder gekocht)", price: "6,90" },
  { name: "Bacon", price: "6,90" },
];

const extras = [
  { name: "Frühstücksei (hartgekocht)", price: "1,20" },
  { name: "Jogurt mit gemischtem Obst", price: "2,20" },
  { name: "Joghurt mit Müsli", price: "2,20" },
  { name: "Orangensaft", price: "1,80" },
  { name: "Portion Butter/Marmelade/Honig/Nutella", price: "0,80" },
  { name: "1 Scheibe Käse oder Wurst", price: "1,00" },
  { name: "Portion Lachs", price: "3,90" },
];

export default function FruehstueckskartePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-64 md:h-80 overflow-hidden flex items-end">
        <Image
          src="/food3.png"
          alt="Frühstück im Café Auszeit"
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
            Frühstückskarte
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ─── MENÜ-INHALT ─── */}
        <div className="lg:col-span-2 space-y-14">

          {/* Frühstücks-Sets */}
          <AnimatedSection>
            <h2
              className="text-2xl font-bold text-dark mb-6 pb-3 border-b border-border"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frühstückssets
            </h2>
            <div className="space-y-6">
              {fruehstuecksSets.map((item) => (
                <div key={item.name} className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-dark">„{item.name}"
                      {item.note && <span className="text-xs text-dark/40 font-normal ml-2">({item.note})</span>}
                    </p>
                    <p className="text-sm text-dark/60 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <p className="font-semibold text-brown whitespace-nowrap">{item.price} €</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Frühstücks-Specials */}
          <AnimatedSection delay={0.1}>
            <h2
              className="text-2xl font-bold text-dark mb-6 pb-3 border-b border-border"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frühstücks-Specials
            </h2>
            <div className="space-y-6">
              {specials.map((item) => (
                <div key={item.name} className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-dark">„{item.name}"
                      {item.note && <span className="text-xs text-dark/40 font-normal ml-2">({item.note})</span>}
                    </p>
                    <p className="text-sm text-dark/60 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                  <p className="font-semibold text-brown whitespace-nowrap">{item.price} €</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Eierlei */}
          <AnimatedSection delay={0.15}>
            <h2
              className="text-2xl font-bold text-dark mb-2 pb-3 border-b border-border"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Eierlei
            </h2>
            <p className="text-sm text-dark/50 mb-6">Omelette mit je zwei Eiern und einem Brötchen</p>
            <div className="space-y-3">
              {eierlei.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <p className="text-dark/80">{item.name}</p>
                  <p className="font-semibold text-brown">{item.price} €</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Extras */}
          <AnimatedSection delay={0.2}>
            <h2
              className="text-2xl font-bold text-dark mb-6 pb-3 border-b border-border"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Extras
            </h2>
            <div className="space-y-3">
              {extras.map((item) => (
                <div key={item.name} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <p className="text-dark/80">{item.name}</p>
                  <p className="font-semibold text-brown">{item.price} €</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-xs text-dark/40 bg-warm p-4 border border-border">
              Die Zusatzstoff-Liste und Allergen-Liste können an der Theke eingesehen werden.
              Hier gelangt ihr zu unserem WLAN Passwort und unseren Social-Media-Accounts.
            </p>
          </AnimatedSection>
        </div>

        {/* ─── FOTO-SPALTE (sticky) ─── */}
        <div className="hidden lg:flex flex-col gap-5 sticky top-24 self-start">
          <AnimatedSection direction="right" className="relative aspect-[3/4] overflow-hidden">
            <Image src="/food4.png" alt="Frühstück" fill className="object-cover" />
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.1} className="relative aspect-square overflow-hidden">
            <Image src="/food2.png" alt="Backwaren" fill className="object-cover" />
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}
