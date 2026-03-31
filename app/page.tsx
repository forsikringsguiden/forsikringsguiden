import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ForsikringsKalkulator from "./components/ForsikringsKalkulator";

const categories = [
  {
    emoji: "🚗",
    title: "Bilforsikring",
    description: "Sammenlign bilforsikring fra alle selskaper",
    href: "/bilforsikring",
  },
  {
    emoji: "🏠",
    title: "Husforsikring",
    description: "Finn den billigste husforsikringen",
    href: "/husforsikring",
  },
  {
    emoji: "🛋️",
    title: "Innboforsikring",
    description: "Beskytt eiendelene dine for mindre",
    href: "/innboforsikring",
  },
  {
    emoji: "✈️",
    title: "Reiseforsikring",
    description: "Reis trygt med riktig forsikring",
    href: "/reiseforsikring",
  },
];

const tips = [
  {
    number: "01",
    title: "Sammenlign hvert år",
    body: "Forsikringsselskapene øker ofte prisene for lojale kunder. Bytt eller reforhandler minst én gang i året.",
  },
  {
    number: "02",
    title: "Bruk samlerabatt",
    body: "De fleste selskaper gir 10–20% rabatt når du samler flere forsikringer hos dem.",
  },
  {
    number: "03",
    title: "Velg riktig egenandel",
    body: "Høyere egenandel gir lavere premie. Vurder hva du tåler å betale selv ved skade.",
  },
];


export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Hero with calculator ──────────────────────────────────────────── */}
        <section className="bg-white py-16 sm:py-20 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy leading-tight tracking-tight">
                Hvilken forsikring passer best for deg?
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-[#4b5563] leading-relaxed max-w-2xl mx-auto">
                Svar på noen enkle spørsmål, så anbefaler vi det beste selskapet
                for din situasjon.
              </p>
              <p className="mt-3 text-sm text-[#6b7280]">
                ✓ Gratis &nbsp;&nbsp;✓ Uavhengig &nbsp;&nbsp;✓ Ingen betalt
                plassering
              </p>
            </div>
            <ForsikringsKalkulator />
          </div>
        </section>

        {/* ── Category cards ───────────────────────────────────────────────── */}
        <section id="kategorier" className="bg-section py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-navy text-center mb-10">
              Utforsk etter kategori
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group flex flex-col bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-4xl leading-none" aria-hidden="true">
                    {cat.emoji}
                  </span>
                  <h3 className="mt-5 font-sans text-lg font-semibold text-navy">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4b5563] leading-relaxed flex-1">
                    {cat.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-accent group-hover:underline underline-offset-2">
                    Les mer →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Slik sparer du ──────────────────────────────────────────────── */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-navy text-center">
              Slik sparer du penger på forsikring
            </h2>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {tips.map((tip) => (
                <div key={tip.number}>
                  <span
                    className="font-sans text-5xl font-bold text-accent select-none"
                    style={{ opacity: 0.2 }}
                    aria-hidden="true"
                  >
                    {tip.number}
                  </span>
                  <h3 className="mt-3 font-sans text-xl font-semibold text-navy">
                    {tip.title}
                  </h3>
                  <p className="mt-3 text-[#4b5563] leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
