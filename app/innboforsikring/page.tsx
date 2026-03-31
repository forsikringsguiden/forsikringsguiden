import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import ForsikringsKalkulator from "../components/ForsikringsKalkulator";

export const metadata: Metadata = {
  title: "Beste innboforsikring 2026 — Sammenlign priser | Forsikringsguiden",
  description:
    "Sammenlign innboforsikring fra Norges største selskaper. Beskytt eiendelene dine. Oppdatert mars 2026.",
};

const faqItems = [
  {
    question: "Trenger jeg innboforsikring som leietaker?",
    answer:
      "Ja, absolutt. Utleiers husforsikring dekker kun bygningen — ikke dine eiendeler. Dersom det oppstår brann, innbrudd eller vannskade, er du ikke dekket uten egen innboforsikring. Det er en av de viktigste forsikringene for leietakere å ha på plass.",
  },
  {
    question: "Hva er riktig forsikringssum?",
    answer:
      "Beregn verdien av alt du eier — møbler, elektronikk, klær, sykler og verdisaker. De fleste norske husstander trenger en forsikringssum på mellom 500 000 og 1 500 000 kroner. Bruk Finans Norges innbokalkulator for en god beregning, og husk å oppdatere etter større kjøp.",
  },
  {
    question: "Dekker innboforsikring mobil og PC?",
    answer:
      "Ja, de fleste innboforsikringer dekker elektronikk som mobil og PC ved tyveri, brann og vannskade. Uhellsskade — at du mister eller knuser mobilen — er vanligvis ikke inkludert i Basis, men følger med Standard og Super. Sjekk vilkårene nøye.",
  },
  {
    question: "Er sykkel dekket av innboforsikring?",
    answer:
      "Ja, sykkel er dekket mot tyveri av de fleste innboforsikringer, men det kan gjelde begrensninger for beløpet og krav til låstype. Dyrere sykler, spesielt el-sykler, kan kreve en separat tilleggsforsikring for å være fullt dekket.",
  },
];

const relatedLinks = [
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
    emoji: "✈️",
    title: "Reiseforsikring",
    description: "Reis trygt med riktig forsikring",
    href: "/reiseforsikring",
  },
];

export default function InnboforsikringPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Page header ──────────────────────────────────────────────────── */}
        <section className="bg-white py-10 sm:py-14 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Brødsmulesti" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Hjem
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none">›</li>
                <li className="text-navy font-medium" aria-current="page">
                  Innboforsikring
                </li>
              </ol>
            </nav>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Beste innboforsikring 2026 — Sammenlign og spar
            </h1>
            <p className="mt-4 text-lg text-[#4b5563] leading-relaxed max-w-3xl">
              Innboforsikring beskytter alt du eier. Sammenlign priser og
              dekning fra flere selskaper.
            </p>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────────── */}
        <section className="bg-section py-12 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-xl font-bold text-navy mb-2">
              Hvilken innboforsikring passer best for deg?
            </h2>
            <p className="mb-6 text-[#6b7280]">
              Svar på noen enkle spørsmål, så anbefaler vi det beste selskapet for ditt innbo.
            </p>
            <ForsikringsKalkulator preselectedCategory="innbo" />
          </div>
        </section>

        {/* ── Guide article ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-navy">
              Alt du trenger å vite om innboforsikring i 2026
            </h2>

            {/* Hva dekker innboforsikring? */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Hva dekker innboforsikring?
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Innboforsikring dekker løsøret ditt — alt du ville tatt med deg
              hvis du flyttet. Møbler, elektronikk, klær, sykler, smykker, kunst.
              De fleste forsikringer dekker tyveri, brann, vannskade og hærverk
              som standard. Bedre dekninger inkluderer også{" "}
              <strong className="font-semibold text-navy">uhellsskade</strong> —
              for eksempel at du mister mobilen i gulvet eller velter et glass
              vann over laptopen — og{" "}
              <strong className="font-semibold text-navy">ID-tyveri</strong>,
              som gir hjelp til å rydde opp dersom noen misbruker din identitet.
              Sjekk alltid hva som faktisk er inkludert på ditt valgte dekningsnivå.
            </p>

            {/* Beregn riktig forsikringssum */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Slik beregner du riktig forsikringssum
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              De fleste undervurderer verdien av innboet sitt — ofte kraftig.
              En tommelfingerregel: en toroms leilighet har innbo verdt{" "}
              <strong className="font-semibold text-navy">300 000–500 000 kr</strong>.
              En fireroms med familie:{" "}
              <strong className="font-semibold text-navy">800 000–1 500 000 kr</strong>.
              Bruk Finans Norges innbokalkulator for å beregne nøyaktig. Er
              forsikringssummen for lav, risikerer du underforsikring — det
              betyr at erstatningen avkortes prosentvis ved skade, selv om
              skaden skulle være fullt dekket i vilkårene. Husk å oppdatere
              forsikringssummen etter større kjøp som ny sofa, nytt kamera
              eller dyre sportsutstyr.
            </p>

            {/* Tips for leietakere og studenter */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Tips for leietakere og studenter
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Som leietaker <em>må</em> du ha egen innboforsikring. Utleiers
              forsikring dekker bygningen — vegger, tak, rør — men ikke en
              eneste ting du eier. Brann, innbrudd eller en vannlekkasje kan
              ødelegge alt du eier uten at du får en krone i erstatning uten
              egen forsikring. Innboforsikring er heldigvis billig for
              leietakere, særlig i studentbolig. Sjekk om du fortsatt kan
              forsikres under foreldrenes innboforsikring — mange selskaper
              tillater dette frem til du er 20–25 år, noe som kan gi deg
              gratis eller svært rimelig dekning i studietiden.
            </p>

            {/* FAQ */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-6">
              Ofte stilte spørsmål
            </h3>
            <FaqAccordion items={faqItems} />

          </div>
        </section>

        {/* ── Related links ────────────────────────────────────────────────── */}
        <section className="bg-section py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-xl font-bold text-navy mb-6">
              Les også:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {link.emoji}
                  </span>
                  <h3 className="mt-4 font-sans text-base font-semibold text-navy">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#4b5563]">
                    {link.description}
                  </p>
                  <span className="mt-3 text-sm font-semibold text-accent group-hover:underline underline-offset-2">
                    Les mer →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
