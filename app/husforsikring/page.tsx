import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import ForsikringsKalkulator from "../components/ForsikringsKalkulator";

export const metadata: Metadata = {
  title: "Beste husforsikring 2026 — Sammenlign priser | Forsikringsguiden",
  description:
    "Sammenlign husforsikring fra Norges største selskaper. Finn best dekning til lavest pris. Oppdatert mars 2026.",
};

const faqItems = [
  {
    question: "Er husforsikring lovpålagt?",
    answer:
      "Nei, husforsikring er ikke lovpålagt. Men de aller fleste banker krever at du har gyldig husforsikring som vilkår for å innvilge boliglån. Det er dessuten sterkt anbefalt for alle boligeiere — uten forsikring kan en brann eller stor vannskade bety full privatøkonomisk ruin.",
  },
  {
    question: "Hva er forskjellen på husforsikring og innboforsikring?",
    answer:
      "Husforsikring dekker selve bygningen — vegger, tak, rør og faste installasjoner. Innboforsikring dekker tingene du eier inne i boligen, som møbler, elektronikk og klær. Du trenger begge forsikringene for å være fullt dekket. Mange selskaper tilbyr rabatt når du kjøper begge samlet.",
  },
  {
    question: "Dekker husforsikring naturskader?",
    answer:
      "Ja, alle husforsikringer i Norge inkluderer naturskadedekning gjennom Norsk Naturskadepool. Det betyr at du er dekket mot skader fra storm, flom, skred, jordskjelv og stormflo. Naturskadepremien er den samme hos alle selskaper, fastsatt av staten.",
  },
  {
    question: "Hva påvirker prisen på husforsikring?",
    answer:
      "Boligens alder, størrelse, beliggenhet, byggemateriale og valgt dekningsnivå er de viktigste faktorene. En ny enebolig i betong koster gjerne mindre å forsikre enn et gammelt trehus i flomutsatt område. Opptjent bonus og valg av egenandel spiller også inn.",
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

export default function HusforsikringPage() {
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
                  Husforsikring
                </li>
              </ol>
            </nav>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Beste husforsikring 2026 — Sammenlign og spar
            </h1>
            <p className="mt-4 text-lg text-[#4b5563] leading-relaxed max-w-3xl">
              Boligen din er din største investering. Vi hjelper deg å finne den
              beste husforsikringen.
            </p>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────────── */}
        <section className="bg-section py-12 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-xl font-bold text-navy mb-2">
              Hvilken husforsikring passer best for deg?
            </h2>
            <p className="mb-6 text-[#6b7280]">
              Svar på noen enkle spørsmål, så anbefaler vi det beste selskapet for din bolig.
            </p>
            <ForsikringsKalkulator preselectedCategory="bolig" />
          </div>
        </section>

        {/* ── Guide article ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-navy">
              Alt du trenger å vite om husforsikring i 2026
            </h2>

            {/* Hva dekker husforsikring? */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-5">
              Hva dekker husforsikring?
            </h3>
            <p className="text-[#4b5563] leading-relaxed mb-6">
              Husforsikring dekker selve bygningen — ikke innholdet. Dekningen
              deles gjerne i tre nivåer, der hvert nivå bygger på det forrige.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border-l-4 border-[#d1d5db] bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Standard</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e]">
                    Grunndekning
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Brann, vannskade, innbrudd, naturskade og ansvar. Naturskade
                  er lovpålagt og inngår i alle norske husforsikringer via
                  Norsk Naturskadepool.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-[#93c5fd] bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Pluss</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#dbeafe] text-[#1e40af]">
                    Utvidet dekning
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Alt i Standard, pluss skadedyr, håndverkerfeil og utvidet
                  vannskade. Godt valg for eldre boliger eller eiendommer med
                  kjent skadehistorikk.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-accent bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Topp</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#d1fae5] text-[#065f46]">
                    Full dekning
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Alt i Pluss, pluss rettshjelp ved nabotvister, ID-tyveri og
                  utvidet naturskade. Anbefalt for store eller verdifulle
                  eiendommer.
                </p>
              </div>
            </div>

            {/* Naturskadepremien */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Naturskadepremien øker i 2026
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Norsk Naturskadepool har økt den lovpålagte naturskadepremien som
              følge av et økende antall ekstremværhendelser og enorme
              utbetalinger de siste årene. Kombinert med{" "}
              <strong className="font-semibold text-navy">8,9 % økning i byggekostnader</strong>{" "}
              er husforsikring blitt merkbart dyrere for alle boligeiere. Den
              statlige naturskadepremien er identisk hos samtlige selskaper —
              men de øvrige premiekomponentene varierer betydelig. Det er
              fortsatt mye å spare ved å sammenligne, og nå er det viktigere
              enn noensinne å sjekke om du betaler for mye.
            </p>

            {/* 5 tips */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-6">
              5 tips for å spare på husforsikring
            </h3>
            <div className="flex flex-col gap-7">
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  1. Installer brannvarsler og vannstopper
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Mange selskaper gir konkrete rabatter — typisk 5–10 % — for
                  boliger med godkjente røykvarslere, automatisk vannstopper
                  og brannslukkingsapparat. Det er investeringer som både
                  reduserer risiko og senker premien.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  2. Sammenlign dekning, ikke bare pris
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Billigst er ikke alltid best når skaden oppstår. En
                  forsikring med lav premie men høy egenandel og snevre vilkår
                  kan koste deg dyrt ved et reelt skadetilfelle. Les alltid
                  vilkårene for vannskade og naturskade nøye — det er der de
                  store forskjellene skjuler seg.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  3. Sjekk naturskaderisiko for din adresse
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Bor du i et flomutsatt område, langs kysten eller i fjellet,
                  er det ekstra viktig å velge en forsikring med lav egenandel
                  på naturskade. NVEs flom- og skredkart gir deg et godt bilde
                  av risikoen for akkurat din adresse.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  4. Vurder egenandelen nøye
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Høyere egenandel gir lavere premie, men du betaler mer ved
                  skade. Egenandeler på husforsikring varierer typisk fra
                  2 000 til 10 000 kr. Tenk over hva du komfortabelt kan
                  dekke selv — og velg deretter.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  5. Bruk samlerabatt med bil og innbo
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Samler du hus, innbo og bil hos samme selskap, gir de fleste
                  norske forsikringsselskaper 10–20 % samlerabatt. På store
                  forsikringspakker kan dette utgjøre flere tusen kroner i
                  sparing hvert år.
                </p>
              </div>
            </div>

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
