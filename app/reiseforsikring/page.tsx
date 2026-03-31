import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import ForsikringsKalkulator from "../components/ForsikringsKalkulator";

export const metadata: Metadata = {
  title: "Beste reiseforsikring 2026 — Sammenlign priser | Forsikringsguiden",
  description:
    "Sammenlign reiseforsikring fra Norges største selskaper. Reis trygt med riktig dekning. Oppdatert mars 2026.",
};

const faqItems = [
  {
    question: "Har jeg reiseforsikring gjennom kredittkortet?",
    answer:
      "Mange kredittkort inkluderer reiseforsikring, men dekningen er ofte begrenset sammenlignet med en dedikert reiseforsikring. Sjekk vilkårene nøye — se særlig på maksimumsbeløp for sykehusbehandling, om avbestilling er dekket, og om forsikringen gjelder i ditt reisemål.",
  },
  {
    question: "Dekker reiseforsikring avbestilling?",
    answer:
      "Ja, de fleste Pluss- og Premium-reiseforsikringer dekker avbestilling ved dokumentert sykdom, skade eller dødsfall i nær familie. Standard-nivå dekker sjelden avbestilling. Sjekk hva som regnes som gyldig avbestillingsgrunn i vilkårene før du reiser.",
  },
  {
    question: "Trenger jeg reiseforsikring i Europa?",
    answer:
      "Ja. Det europeiske helsetrygdekortet (EHIC) dekker kun akutt medisinsk behandling i EU/EØS-land, og ikke hjemtransport, bagasje, avbestilling eller forsinkelser. Reiseforsikring gir deg den brede dekningen du trenger uansett hva som skjer på reisen.",
  },
  {
    question: "Gjelder reiseforsikring for hele familien?",
    answer:
      "De fleste helårsreiseforsikringer tilbyr familiedekning som inkluderer alle i husstanden, inkludert hjemmeboende barn. Sjekk aldersgrensene for barn i vilkårene — noen selskaper setter grensen ved 18 år, andre ved 21 år. Familiedekning er som regel vesentlig rimeligere enn å forsikre hvert familiemedlem separat.",
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
    emoji: "🛋️",
    title: "Innboforsikring",
    description: "Beskytt eiendelene dine for mindre",
    href: "/innboforsikring",
  },
];

export default function ReiseforsikringPage() {
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
                  Reiseforsikring
                </li>
              </ol>
            </nav>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight tracking-tight">
              Beste reiseforsikring 2026 — Sammenlign og spar
            </h1>
            <p className="mt-4 text-lg text-[#4b5563] leading-relaxed max-w-3xl">
              Reiseforsikring gir deg trygghet på ferie og reise. Sammenlign
              priser og dekning fra Norges største selskaper.
            </p>
          </div>
        </section>

        {/* ── Calculator ───────────────────────────────────────────────────── */}
        <section className="bg-section py-12 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-sans text-xl font-bold text-navy mb-2">
              Hvilken reiseforsikring passer best for deg?
            </h2>
            <p className="mb-6 text-[#6b7280]">
              Svar på noen enkle spørsmål, så anbefaler vi det beste selskapet for dine reiser.
            </p>
            <ForsikringsKalkulator preselectedCategory="reise" />
          </div>
        </section>

        {/* ── Guide article ────────────────────────────────────────────────── */}
        <section className="bg-white py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-navy">
              Alt du trenger å vite om reiseforsikring i 2026
            </h2>

            {/* Helår vs enkeltreise */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Helårsforsikring vs. enkeltreise
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Reiser du mer enn to ganger i året? Da lønner helårsforsikring
              seg nesten alltid. En helårsforsikring dekker alle reiser i løpet
              av året, vanligvis opptil{" "}
              <strong className="font-semibold text-navy">45–70 dager sammenhengende</strong>{" "}
              per tur. Du betaler én fast premie og slipper å tenke på
              forsikring for hver enkelt reise. Enkeltreiseforsikring kan
              derimot lønne seg for den ene sydenferien i året, særlig hvis
              reisen er lang og du ønsker spesialtilpasset dekning for et
              bestemt reisemål eller aktivitet.
            </p>

            {/* Kredittkortforsikring */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-4">
              Kredittkortforsikring — er det nok?
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              Mange kredittkort inkluderer reiseforsikring, men dekningen er
              ofte begrenset og full av forbehold. Typiske begrensninger: kun
              dekning hvis hele reisen er betalt med det aktuelle kortet,
              lavere forsikringssummer enn dedikerte forsikringer, ingen eller
              svak avbestillingsdekning, og uklare vilkår for risikofylte
              aktiviteter som ski eller sykling. Kredittkortforsikringen kan
              være tilstrekkelig for en kort forretningsreise i Europa — men
              for familieferie, lange reiser eller reiser utenfor Europa bør du
              alltid sjekke vilkårene nøye og vurdere en separat
              reiseforsikring i tillegg.
            </p>

            {/* Hva gjør du ved skade */}
            <h3 className="font-sans text-xl font-bold text-navy mt-12 mb-6">
              Hva gjør du ved skade i utlandet?
            </h3>
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  1. Kontakt forsikringsselskapet umiddelbart
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Ring eller bruk appen til forsikringsselskapet så snart noe
                  skjer. De fleste har 24/7-linjer for nødsituasjoner. Mange
                  sykehusinnleggelser krever forhåndsgodkjenning for å være
                  fullt dekket.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  2. Oppsøk lege og dokumenter alt
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Ta vare på alle kvitteringer, legeattester og
                  epikriser. Uten dokumentasjon kan forsikringsselskapet
                  avslå kravet ditt. Be eksplisitt om skriftlig bekreftelse
                  fra behandlende lege.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  3. Meld fra til politiet ved tyveri
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Ved tyveri eller ran krever de fleste forsikringsselskaper
                  en politianmeldelse med saksnummer. Uten anmeldelse dekkes
                  tapet sjelden. Gjør dette lokalt så raskt som mulig.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  4. Ta bilder av skadede eiendeler
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Fotografer ødelagt bagasje, klær og utstyr før du kvitter
                  deg med dem. Bilder med tidsstempel er viktig dokumentasjon
                  for et skadeoppgjør.
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-navy mb-1.5">
                  5. Ta vare på kvitteringer for alle utgifter
                </h4>
                <p className="text-[#4b5563] leading-relaxed">
                  Hotellovernatting ved forsinkelse, taxi til sykehus,
                  medisiner — alt som er en direkte følge av skaden kan være
                  refusjonsberettiget. Kast ingenting før du har fått
                  oppgjøret.
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
