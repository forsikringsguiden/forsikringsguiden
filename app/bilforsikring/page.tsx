import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import ForsikringsKalkulator from "../components/ForsikringsKalkulator";

export const metadata: Metadata = {
  title: "Beste bilforsikring 2026 — Sammenlign priser | Forsikringsguiden",
  description:
    "Sammenlign bilforsikring fra If, Gjensidige, Tryg og flere. Finn den billigste bilforsikringen med vår uavhengige guide. Oppdatert mars 2026.",
};

const faqItems = [
  {
    question: "Er det lovpålagt med bilforsikring?",
    answer:
      "Ja, ansvarsforsikring er lovpålagt for alle registrerte kjøretøy i Norge. Kjører du uten gyldig forsikring kan du bli ilagt et gebyr og kjøretøyet kan inndras. Forsikringen kan tegnes hos de fleste norske forsikringsselskaper.",
  },
  {
    question: "Hva er forskjellen på delkasko og fullkasko?",
    answer:
      "Delkasko dekker brann, tyveri og glasskade – i tillegg til den lovpålagte ansvarsforsikringen. Fullkasko dekker alt dette, pluss skade på din egen bil ved kollisjon og utforkjøring. Fullkasko er derfor anbefalt for nyere og dyrere biler.",
  },
  {
    question: "Kan jeg bytte bilforsikring når som helst?",
    answer:
      "Ja, du kan bytte forsikringsselskap med én måneds varsel, uansett tidspunkt på året. Det er ikke nødvendig å vente til fornyelsesdatoen. Det nye selskapet hjelper vanligvis med oppsigelsen av den gamle forsikringen.",
  },
  {
    question: "Hva er bonus på bilforsikring?",
    answer:
      "Bonus er en rabatt du opparbeider deg for hvert skadefritt år du kjører. Full bonus (75%) kan gi en betydelig lavere premie. Hvis du melder en skade, trekkes bonusen ned, og det kan derfor lønne seg å betale mindre skader selv.",
  },
  {
    question: "Lønner det seg med fullkasko på en eldre bil?",
    answer:
      "Generelt lønner det seg ikke med fullkasko hvis bilen er verdt mindre enn 100 000 kroner. Da holder det ofte med delkasko, ettersom erstatningen ved totalskade uansett ikke vil overstige bilens markedsverdi. Sjekk hva bilen er verdt på finn.no eller naf.no.",
  },
];

const relatedLinks = [
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

export default function BilforsikringPage() {
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
                  Bilforsikring
                </li>
              </ol>
            </nav>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Beste bilforsikring 2026 — Sammenlign og spar
            </h1>
            <p className="mt-4 text-lg text-[#4b5563] leading-relaxed max-w-3xl">
              Vi har sammenlignet bilforsikring fra Norges største
              forsikringsselskaper. Se hvem som tilbyr best pris og dekning.
            </p>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────────── */}
        <section className="bg-section py-12 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-xl font-bold text-navy mb-2">
              Hvilken bilforsikring passer best for deg?
            </h2>
            <p className="mb-6 text-[#6b7280]">
              Svar på noen enkle spørsmål, så anbefaler vi det beste selskapet for din bil.
            </p>
            <ForsikringsKalkulator preselectedCategory="bil" />
          </div>
        </section>

        {/* ── Guide article ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-navy">
              Alt du trenger å vite om bilforsikring i 2026
            </h2>

            {/* De tre dekningsnivåene */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-5">
              De tre dekningsnivåene
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border-l-4 border-[#d1d5db] bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Ansvarsforsikring</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e]">
                    Lovpålagt
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Lovpålagt for alle registrerte kjøretøy. Dekker skade du
                  påfører andre — personskader og materielle skader på andres
                  eiendom. Dekker <em>ikke</em> din egen bil.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-[#93c5fd] bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Delkasko</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#dbeafe] text-[#1e40af]">
                    Mellomdekning
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Inkluderer ansvarsforsikring og dekker i tillegg brann,
                  tyveri, glasskade, redning og rettshjelpsforsikring. Lurt
                  for biler verdt over 50 000 kr.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-accent bg-[#f9fafb] p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h4 className="font-sans font-bold text-navy text-sm">Fullkasko</h4>
                  <span className="flex-shrink-0 text-[10px] font-bold font-sans px-2 py-0.5 rounded-full bg-[#d1fae5] text-[#065f46]">
                    Full dekning
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Dekker alt i delkasko <em>pluss</em> skade på din egen bil
                  ved kollisjon, utforkjøring og hærverk. Anbefalt for biler
                  verdt over 100 000 kr.
                </p>
              </div>
            </div>

            {/* Prisøkningen */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Prisøkningen i 2026 — dette må du vite
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Forsikringspremiene i Norge økte med{" "}
              <strong className="font-semibold text-navy">16,6 %</strong> fra
              januar 2025 til januar 2026 ifølge SSB. Hovedårsakene er dyrere
              reparasjoner på moderne biler — spesielt elbiler med kostbare
              batterier og avansert elektronikk — og økte
              erstatningsutbetalinger. Finans Norge rapporterte rekordhøye
              utbetalinger på 64,8 milliarder kroner i 2025. Det betyr at det
              er viktigere enn noensinne å sammenligne priser. Prisforskjellene
              mellom selskapene kan utgjøre over 5 000 kroner i året for
              nøyaktig samme dekning.
            </p>

            {/* 5 tips */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-6">
              5 tips for å spare på bilforsikring
            </h3>
            <div className="flex flex-col gap-7">
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  1. Sammenlign hvert år
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Lojalitet straffes i forsikringsbransjen. Mange selskaper
                  tilbyr de beste prisene til nye kunder og justerer premien
                  stille oppover for eksisterende. Sett av 15 minutter hvert år
                  til å sammenligne — det er gjerne der de største besparelsene
                  ligger.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  2. Øk egenandelen
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Å heve egenandelen fra 4 000 til 8 000 kr kan spare deg
                  15–20 % på den årlige premien. Tenk over hva du realistisk
                  kan dekke selv ved en skade — for mange er dette en enkel
                  måte å redusere den faste kostnaden uten å ofre viktig
                  dekning.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  3. Bruk samlerabatt
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Samler du bil, bolig og innbo hos ett selskap, gir de fleste
                  norske forsikringsselskaper 10–20 % samlerabatt. Du får i
                  tillegg enklere oversikt, én felles forfallsdato og én
                  kontaktperson ved skade.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  4. Kjør skadefritt og bygg bonus
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Full bonus (75 %) gir en betydelig lavere premie. Hvert
                  skadefritt år bringer deg nærmere taket. Vurder om det lønner
                  seg å betale mindre skader av egen lomme fremfor å melde dem
                  — et bonustap kan koste mer enn selve skaden over tid.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  5. Vurder om du trenger fullkasko
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  På en bil verdt under 100 000 kr holder det gjerne med
                  delkasko. Fullkaskopremien kan over noen år overstige bilens
                  markedsverdi. Sjekk hva bilen din omsettes for på finn.no,
                  og vurder om den ekstra dekningen faktisk er pengene verdt.
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
