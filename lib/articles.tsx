import { type ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface TocItem {
  id: string;
  label: string;
  level: 2 | 3;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryBg: string;   // tailwind bg class
  categoryText: string; // tailwind text class
  date: string;         // ISO
  dateFormatted: string;
  readTime: string;
  tocItems: TocItem[];
  faqItems: FaqItem[];
  kortOppsummert: string[];
  relatedSlugs: string[];
  content: ReactNode;
}

// ─── Shared prose helpers ────────────────────────────────────────────────────
// (used inline in each article's JSX)

// ─── Article 1 ───────────────────────────────────────────────────────────────

const article1: Article = {
  slug: "forsikring-prisokning-2026",
  title: "Forsikringsprisene økte 16,6 % i 2026 — slik sparer du penger",
  description:
    "Nye tall fra SSB viser rekordhøy prisvekst på forsikring. Her er hva du kan gjøre for å kutte kostnadene.",
  category: "Nyheter",
  categoryBg: "bg-[#dbeafe]",
  categoryText: "text-[#1e40af]",
  date: "2026-03-10",
  dateFormatted: "10. mars 2026",
  readTime: "6 min",
  tocItems: [
    { id: "hvorfor-dyrere", label: "Hvorfor har forsikring blitt dyrere?", level: 2 },
    { id: "hvilke-okt-mest", label: "Hvilke forsikringer har økt mest?", level: 2 },
    { id: "spare-penger", label: "Hva kan du gjøre for å spare?", level: 2 },
    { id: "fremtid", label: "Vil prisene fortsette å stige?", level: 2 },
  ],
  kortOppsummert: [
    "Forsikringspremiene i Norge økte 16,6 % fra januar 2025 til januar 2026 — nesten 5× den generelle inflasjonen.",
    "Bilforsikring er hardest rammet, med kasko-premier opp over 18 % i snitt.",
    "Du har lovfestet rett til å bytte selskap med én måneds varsel, uten gebyr.",
    "Samlerabatt, økt egenandel og bytte av selskap kan tilsammen spare deg 4 000–8 000 kr per år.",
    "Analytikere forventer stabilisering i andre halvår 2026, men ingen prisnedgang.",
  ],
  faqItems: [
    {
      question: "Kan jeg bytte forsikring midt i året?",
      answer:
        "Ja. Forsikringsavtaleloven gir deg rett til å si opp skadeforsikring med én måneds varsel når som helst i året — uavhengig av fornyelsesdato. Det nye selskapet ordner som regel oppsigelsen for deg. Du får refundert forhåndsbetalt premie for gjenstående periode.",
    },
    {
      question: "Hvor mye kan jeg spare på å bytte forsikringsselskap?",
      answer:
        "Prisforskjellen mellom billigste og dyreste selskap for identisk dekning kan utgjøre 3 000–6 000 kr i året på bilforsikring og 2 000–4 000 kr på husforsikring. Totalt kan en aktiv forbruker spare 6 000–10 000 kr ved å bytte og samle forsikringer optimalt.",
    },
    {
      question: "Hva er lojalitetsstraff på forsikring?",
      answer:
        "Lojalitetsstraff betyr at eksisterende kunder betaler høyere pris enn nye kunder for identisk dekning. Forsikringsselskapene bruker dette fordi mange kunder ikke sammenligner priser ved automatisk fornyelse. Løsningen er enkel: sammenlign og bytt minst én gang i året.",
    },
  ],
  relatedSlugs: ["beste-bilforsikring", "bytte-forsikring-guide", "samlerabatt-forsikring"],
  content: (
    <>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Forsikringspremiene i Norge økte med{" "}
        <strong className="font-semibold text-navy">16,6 %</strong> fra januar
        2025 til januar 2026 ifølge Statistisk sentralbyrå (SSB). Det er nesten
        fem ganger høyere enn den generelle prisveksten på 3,6 % i samme
        periode. For en gjennomsnittlig norsk husstand med bil-, hus- og
        innboforsikring betyr det at forsikring koster{" "}
        <strong className="font-semibold text-navy">3 000–7 000 kroner mer</strong>{" "}
        i året enn for bare ett år siden.
      </p>

      <h2
        id="hvorfor-dyrere"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvorfor har forsikring blitt så mye dyrere?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Prisøkningen skyldes primært fire faktorer som har virket sammen gjennom
        2024 og 2025.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">
          Dyrere reparasjoner på moderne biler.
        </strong>{" "}
        En ny elbil inneholder avansert elektronikk, dyrt batteri og sensorer
        for førerassistanse. En frontskade som tidligere kostet 20 000 kr å
        reparere kan nå koste 60 000–100 000 kr. Norsk bilpark er blant de mest
        elektrifiserte i verden, og dette slår rett ut i skadevolumet
        forsikringsselskapene må håndtere.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">
          Rekordhøye erstatningsutbetalinger.
        </strong>{" "}
        Finans Norge rapporterte at norske forsikringsselskaper betalte ut{" "}
        <strong className="font-semibold text-navy">64,8 milliarder kroner</strong>{" "}
        i erstatninger i 2025 — en økning på over 10 % fra 2024. Disse
        kostnadene veltes over på kundene gjennom høyere premier.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Økte byggekostnader.</strong>{" "}
        Gjenanskaffelsesverdien på norske boliger — hva det ville koste å
        gjenoppbygge fra grunnen av — økte med 8,9 % fra 2025 til 2026 ifølge
        Prognosesenteret. Forsikringsselskapene justerer summer og premier
        tilsvarende for å unngå underforsikring.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        <strong className="font-semibold text-navy">
          Ekstremvær og naturskader.
        </strong>{" "}
        Norsk Naturskadepool opplevde rekordutbetalinger etter ekstremværhendelser
        i 2024 og 2025. Den lovpålagte naturskadepremien — som inngår i alle
        hus- og innboforsikringer — ble hevet betydelig for å dekke forventede
        fremtidige skader.
      </p>

      <h2
        id="hvilke-okt-mest"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvilke forsikringer har økt mest i pris?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Bilforsikring er den kategorien som har steget hardest. Gjennomsnittlig
        kasko-premie økte med over{" "}
        <strong className="font-semibold text-navy">18 %</strong> i 2025, drevet
        av kostbare elbil-reparasjoner og mangel på reservedeler i det
        europeiske markedet.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Boligforsikring er nest hardest rammet med en gjennomsnittlig økning på
        14–16 %, der naturskadepremien og økte byggekostnader er de viktigste
        driverne. Innboforsikring har steget noe mindre — typisk 8–12 % —
        ettersom den ikke er like eksponert mot disse kostnadsdriverne.
        Reiseforsikring har økt moderat med 7–10 % som følge av høyere
        skadevolumet etter gjenåpning av reisemarkedet.
      </p>

      <h2
        id="spare-penger"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva kan du gjøre for å spare?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Du har flere gode muligheter til å redusere forsikringskostnadene, selv
        i et marked med generelt høye priser.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Bytt forsikringsselskap.</strong>{" "}
        Det er din lovfestede rett å bytte skadeforsikring med kun én måneds
        varsel — uansett tidspunkt på året. Du trenger ikke vente til
        fornyelsesdatoen. Prisforskjellen mellom billigste og dyreste selskap
        for samme dekning kan utgjøre 4 000–6 000 kr i året for bilforsikring
        alene.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Bruk samlerabatt.</strong>{" "}
        Samler du bil, bolig og innbo hos ett selskap, gir de fleste norske
        selskaper 10–20 % samlerabatt. If og Tryg gir opptil 20 %, Gjensidige
        opptil 18 %. Men regn alltid på totalkostnaden — noen ganger er ett
        selskap så dyrt på ett produkt at rabatten ikke veier opp.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Øk egenandelen.</strong> Å
        heve egenandelen på bilforsikring fra 4 000 til 8 000 kr kan spare
        15–20 % på premien. Gjør den samme vurderingen for bolig og innbo.
        Betingelsen er at du har økonomi til å dekke egenandelen selv ved en
        skade.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">
          Sjekk for dobbeltforsikring.
        </strong>{" "}
        Mange betaler for dekning de allerede har via kredittkortet,
        fagforeningens kollektivforsikring eller innboforsikringens reisedekning.
        Gå gjennom alle forsikringer én gang per år og luke bort det som
        overlapper.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        <strong className="font-semibold text-navy">
          Forhandle med nåværende selskap.
        </strong>{" "}
        Ring og si at du har fått et bedre tilbud et annet sted. Mange selskaper
        kan justere prisen for å beholde deg — særlig hvis du har vært skadefri
        i mange år og har opptjent høy bonus.
      </p>

      <h2
        id="fremtid"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Vil prisene fortsette å stige?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Analytikere fra Finans Norge og DNB Markets peker mot en stabilisering
        av premieveksten fra andre halvår 2026. Driverne bak prisøkningen —
        spesielt elbil-reparasjonskostnader — forventes å normalisere seg etter
        hvert som verkstedene bygger kapasitet og reservedeler blir mer
        tilgjengelige. Det er imidlertid lite som tyder på at prisene vil gå{" "}
        <em>ned</em> i nær fremtid. Å sikre seg at du betaler riktig pris for
        den dekningen du faktisk trenger, er det eneste effektive svaret på et
        marked med vedvarende høye premier.
      </p>
    </>
  ),
};

// ─── Article 2 ───────────────────────────────────────────────────────────────

const article2: Article = {
  slug: "beste-bilforsikring",
  title: "Beste bilforsikring i 2026 — hvilken bør du velge?",
  description:
    "Vi sammenligner bilforsikring fra Norges største selskaper. Se hvem som scorer best på pris, dekning og kundetilfredshet.",
  category: "Bilforsikring",
  categoryBg: "bg-[#ede9fe]",
  categoryText: "text-[#5b21b6]",
  date: "2026-03-05",
  dateFormatted: "5. mars 2026",
  readTime: "8 min",
  tocItems: [
    { id: "selskaper", label: "Hvilke selskaper tilbyr bilforsikring?", level: 2 },
    { id: "kundetilfredshet", label: "Hvem har best kundetilfredshet?", level: 2 },
    { id: "dekningsnivaaer", label: "Ansvar, delkasko og fullkasko", level: 2 },
    { id: "velge-dekning", label: "Fullkasko eller delkasko?", level: 2 },
    { id: "bonus", label: "Slik fungerer bonussystemet", level: 2 },
    { id: "bytte", label: "Slik bytter du bilforsikring", level: 2 },
  ],
  kortOppsummert: [
    "KLP (4,2/5) og Fremtind (4,0/5) topper kundetilfredshet ifølge Bytt.no mars 2026.",
    "Bruk fullkasko på biler verdt over 100 000 kr — delkasko holder på eldre biler.",
    "Full bonus (75 %) gir den største enkeltbesparelsen på bilforsikring.",
    "Du kan bytte selskap med én måneds varsel — det nye selskapet ordner oppsigelsen.",
    "Samlerabatt på 10–20 % er tilgjengelig hos alle store selskaper.",
  ],
  faqItems: [
    {
      question: "Mister jeg bonus hvis jeg bytter bilforsikringsselskap?",
      answer:
        "Nei. Opptjent bonus følger deg — ikke selskapet. Alle norske forsikringsselskaper er pliktige til å anerkjenne din dokumenterte bonushistorikk. Be om bonusbevis fra nåværende selskap og lever det til det nye selskapet.",
    },
    {
      question: "Hva koster bilforsikring for unge sjåfører under 25 år?",
      answer:
        "Unge sjåfører betaler gjerne 30–60 % høyere premie enn gjennomsnittet som følge av høyere skaderisiko. Fullkasko for en 20-åring med ny bil kan koste 800–1 500 kr per måned. Å stå som registrert eier selv (ikke foreldre) og bygge bonus er den viktigste måten å redusere prisen over tid.",
    },
    {
      question: "Er elbil dyrere å forsikre enn bensinbil?",
      answer:
        "Ja, for øyeblikket. Fullkasko på en ny elbil koster typisk 15–25 % mer enn tilsvarende dekning for en sammenlignbar bensinbil, primært fordi reparasjonskostnader er høyere og verkstedskapasiteten er begrenset. Storebrand og KLP er kjent for å tilby best pris på elbil.",
    },
  ],
  relatedSlugs: [
    "forsikring-prisokning-2026",
    "bytte-forsikring-guide",
    "samlerabatt-forsikring",
  ],
  content: (
    <>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        De beste bilforsikringsselskapene i 2026 — målt på kundetilfredshet —
        er{" "}
        <strong className="font-semibold text-navy">KLP</strong> (4,2/5) og{" "}
        <strong className="font-semibold text-navy">Fremtind</strong> (4,0/5)
        ifølge Bytt.nos rangliste basert på over 45 000 anmeldelser (mars 2026).
        Valget av det beste selskapet for <em>deg</em> avhenger imidlertid av
        bilens alder, type og verdi — og om du kjøper elbil, hybrid eller
        fossilbil.
      </p>

      <h2
        id="selskaper"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvilke selskaper tilbyr bilforsikring i Norge?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        De seks største aktørene i det norske bilforsikringsmarkedet er KLP,
        Fremtind (SpareBank 1 og DNB), If, Storebrand, Gjensidige og Tryg. Til
        sammen dekker disse selskapene over 90 % av markedet. I tillegg tilbyr
        flere nisjeaktører og nettbanker forsikring, men disse bruker som regel
        de store selskapene som underleverandør.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Alle selskaper tilbyr de tre standard dekningsnivåene: ansvarsforsikring,
        delkasko og fullkasko. Forskjellene ligger i hva som er inkludert i
        hvert nivå, egenandeler, tilleggstjenester og naturligvis pris.
      </p>

      <h2
        id="kundetilfredshet"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvem har best kundetilfredshet?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        KLP scorer høyest med <strong className="font-semibold text-navy">4,2/5</strong>{" "}
        på Bytt.no, tett fulgt av Fremtind med{" "}
        <strong className="font-semibold text-navy">4,0/5</strong> og If med{" "}
        <strong className="font-semibold text-navy">3,8/5</strong>. Storebrand
        og Gjensidige ligger på henholdsvis 3,7 og 3,5, mens Tryg henger etter
        med 2,9/5.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        KLPs høye score skyldes primært konkurransedyktige priser, transparent
        kommunikasjon og en skadefri profil for mange av kundene. Fremtind
        roses for enkel digital skademelding og rask behandlingstid. If scorer
        lavere på pris men høyt på dekning og tilgjengelighet, særlig for
        nybiler og elbiler.
      </p>

      <h2
        id="dekningsnivaaer"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva er forskjellen på ansvar, delkasko og fullkasko?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Ansvarsforsikring</strong>{" "}
        er det eneste lovpålagte nivået. Den dekker skade du påfører{" "}
        <em>andre</em> — altså personskader og materielle skader på andres
        kjøretøy eller eiendom. Skader på din egen bil er ikke dekket.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Delkasko</strong> inkluderer
        ansvarsforsikring og dekker i tillegg brann, tyveri av hele bilen,
        glasskade, redning ved motorhavari og rettshjelpsforsikring. Det dekker
        <em> ikke</em> kollisjonsskader eller skader på din bil forårsaket av
        deg selv.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        <strong className="font-semibold text-navy">Fullkasko</strong> gir den
        mest komplette dekningen og inkluderer alt i delkasko, pluss erstatning
        for skader på din egen bil ved kollisjon, utforkjøring og hærverk.
        Mange selskaper inkluderer også leiebil ved fullkaskoforsikring.
      </p>

      <h2
        id="velge-dekning"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Bør du velge fullkasko eller delkasko?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Du bør velge fullkasko hvis bilens markedsverdi er over{" "}
        <strong className="font-semibold text-navy">100 000 kr</strong>. Under
        dette beløpet lønner det seg som regel ikke — fullkaskopremien kan over
        noen år overstige verdien av den ekstra dekningen du får. Sjekk hva
        bilen omsettes for på finn.no for en aktuell markedsverdi.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        For elbiler og nye biler bør du alltid ha fullkasko. Reparasjonskostnader
        er svært høye, og en totalskade på en ny elbil kan raskt overstige
        500 000 kr uten at du får erstatning utover bilens markedsverdi med
        delkasko.
      </p>

      <h2
        id="bonus"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Slik fungerer bonussystemet
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Bonus er en rabatt du opparbeider for hvert skadefritt år. De fleste
        selskaper starter nye sjåfører på 0 % bonus og øker med 10 prosentpoeng
        per skadefritt år inntil maksimalt{" "}
        <strong className="font-semibold text-navy">75 % (full bonus)</strong>.
        Med full bonus kan den totale premiebesparelsen utgjøre 40–50 % av
        grunnprisen.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Melder du en skade, trekkes bonusen ned — typisk med 30
        prosentpoeng. For små skader under 20 000–30 000 kr kan det lønne seg å
        betale reparasjonen selv og beholde bonusen. Regn på det konkrete
        beløpet i hvert enkelt tilfelle.
      </p>

      <h2
        id="bytte"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Slik bytter du bilforsikring
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Du bytter bilforsikring i fire enkle steg:
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-5">
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Sammenlign tilbud</strong>{" "}
          — bruk kalkulatoren på denne siden for personlig anbefaling, eller
          ring aktuelle selskaper direkte for prisforespørsel.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Kontakt det nye selskapet
          </strong>{" "}
          — oppgi registreringsnummer, bonusprosent og ønsket startdato.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Nytt selskap sier opp for deg
          </strong>{" "}
          — de fleste selskaper sender oppsigelse til det gamle på dine vegne.
          Du trenger ikke gjøre noe mer.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Sjekk at alt er i orden
          </strong>{" "}
          — bekreft at ny forsikring er aktiv og at du har mottatt
          forsikringsbevis på e-post.
        </li>
      </ol>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Hele prosessen tar under 30 minutter og kan gjøres digitalt hos alle
        store selskaper. Du kan bytte når som helst — ikke bare ved
        fornyelsesdatoen.
      </p>

      <div className="bg-[#eff6ff] border border-[#c7d7fd] rounded-xl p-5 my-8">
        <p className="font-sans font-semibold text-navy mb-2">
          Finn beste bilforsikring for din bil
        </p>
        <p className="text-sm text-[#4b5563] mb-3">
          Svar på noen enkle spørsmål om bilen din, og vi anbefaler det beste
          selskapet for din situasjon.
        </p>
        <a
          href="/bilforsikring"
          className="inline-block bg-accent text-white font-sans font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          Bruk kalkulatoren →
        </a>
      </div>
    </>
  ),
};

// ─── Article 3 ───────────────────────────────────────────────────────────────

const article3: Article = {
  slug: "bytte-forsikring-guide",
  title: "Slik bytter du forsikringsselskap — komplett guide for 2026",
  description:
    "Steg-for-steg guide til å bytte forsikring i Norge. Dine rettigheter, tidsfrister og hva du bør passe på.",
  category: "Guide",
  categoryBg: "bg-[#d1fae5]",
  categoryText: "text-[#065f46]",
  date: "2026-02-20",
  dateFormatted: "20. februar 2026",
  readTime: "5 min",
  tocItems: [
    { id: "rettigheter", label: "Dine rettigheter ved bytte", level: 2 },
    { id: "steg-for-steg", label: "Steg-for-steg guide", level: 2 },
    { id: "sjekke", label: "Hva bør du sjekke?", level: 2 },
    { id: "nar-lonne", label: "Når lønner det seg å bytte?", level: 2 },
    { id: "tape", label: "Kan du tape på å bytte?", level: 2 },
  ],
  kortOppsummert: [
    "Du har lovfestet rett til å bytte skadeforsikring med én måneds varsel — uten gebyr.",
    "Det nye selskapet ordner oppsigelsen fra det gamle på dine vegne.",
    "Du får refundert forhåndsbetalt premie for gjenstående periode.",
    "Bytt helst når premien øker ved fornyelse, eller når du kjøper ny bil eller bolig.",
    "Sjekk alltid at ny dekning er minst like god som den gamle.",
  ],
  faqItems: [
    {
      question: "Kan forsikringsselskapet nekte meg å bytte?",
      answer:
        "Nei. Forsikringsavtaleloven § 3-6 gir deg ubetinget rett til å si opp skadeforsikring med én måneds varsel. Selskapet kan ikke nekte, og det er ingen gebyr for oppsigelse. Eneste unntak er forsikringer tegnet for en fast kontraktsperiode, men dette er svært uvanlig i privatsegmentet.",
    },
    {
      question: "Hva skjer med pågående skadekrav når jeg bytter?",
      answer:
        "Pågående skadekrav følger det selskapet som var aktivt da skaden skjedde. Det nye selskapet overtar ikke ansvar for skader som oppstod under det gamle selskapet. Bytt derfor aldri midt i en pågående skadeprosess — vent til oppgjøret er ferdig.",
    },
    {
      question: "Får jeg refusjon for forhåndsbetalt premie?",
      answer:
        "Ja. Har du betalt forsikringen for et halvår eller helt år på forskudd, skal du få refundert den andelen av premien som gjelder etter oppsigelsesdatoen. Refusjonen beregnes forholdsmessig og utbetales som regel innen 2–4 uker.",
    },
  ],
  relatedSlugs: [
    "forsikring-prisokning-2026",
    "samlerabatt-forsikring",
    "beste-bilforsikring",
  ],
  content: (
    <>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Du har lovfestet rett til å bytte skadeforsikring når som helst med kun{" "}
        <strong className="font-semibold text-navy">én måneds varsel</strong>.
        Du er ikke bundet til forfall eller fornyelsesdato, og det koster deg
        ingenting. Det nye selskapet sender oppsigelse til det gamle på dine
        vegne, og du får refundert forhåndsbetalt premie for gjenstående
        periode.
      </p>

      <h2
        id="rettigheter"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvilke rettigheter har du ved bytte av forsikring?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Forsikringsavtaleloven § 3-6 slår fast at du kan si opp en
        skadeforsikring med én måneds skriftlig varsel, uavhengig av
        forsikringsperiode og forfall. Selskapet kan ikke pålegge deg gebyrer
        for oppsigelse, og de plikter å bekrefte oppsigelsen skriftlig. Loven
        gjelder alle skadeforsikringer — bil, hus, innbo, reise og mer.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Du har også rett til å kreve at det nye selskapet legger inn oppsigelsen
        for deg. I praksis betyr dette at hele byttet kan gjøres i én
        telefonsamtale eller ett nettskjema hos det nye selskapet.
      </p>

      <h2
        id="steg-for-steg"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Slik bytter du forsikring steg for steg
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Hele prosessen kan gjennomføres på under 30 minutter:
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-5">
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Sammenlign tilbud.</strong>{" "}
          Bruk en sammenligningstjeneste eller ring 2–3 selskaper direkte. Ha
          klar informasjon om bilen (reg.nr.), boligen (adresse, størrelse,
          byggeår) eller hva du skal forsikre.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Kontakt det nye selskapet.
          </strong>{" "}
          Si at du ønsker å bytte fra ditt nåværende selskap. Oppgi nødvendig
          informasjon og be om at de sender oppsigelse til det gamle selskapet.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Nytt selskap ordner oppsigelsen.
          </strong>{" "}
          Det nye selskapet sender formell oppsigelse til det gamle på dine
          vegne. Du trenger ikke gjøre noe mer.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Bekreft oppstart og refusjon.
          </strong>{" "}
          Sjekk at du har mottatt forsikringsbevis fra nytt selskap, og at
          refusjon av forhåndsbetalt premie er bekreftet fra det gamle
          selskapet.
        </li>
      </ol>

      <h2
        id="sjekke"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva bør du sjekke før du bytter?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Pris er viktig, men ikke det eneste som teller. Sjekk følgende før du
        bestemmer deg:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-5">
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Dekningsomfang</strong> —
          er ny dekning minst like god som den du har i dag? Se spesielt på
          egenandel, maksimale erstatningssummer og unntak i vilkårene.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Egenandel</strong> —
          sammenlign ikke bare premie men totalkostnad inkludert egenandel ved
          en typisk skade.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Kundeomtaler</strong> —
          sjekk Bytt.no for anmeldelser, særlig om skadeoppgjør. En lav premie
          hjelper lite hvis selskapet er vanskelig å forholde seg til ved skade.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Samlerabatt</strong> —
          vurder om du mister eksisterende samlerabatt ved å flytte én
          forsikring, og om totalprisen likevel er lavere.
        </li>
      </ul>

      <h2
        id="nar-lonne"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Når lønner det seg å bytte?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        De beste tidspunktene for å bytte forsikring er: når du mottar varsel
        om premieøkning ved automatisk fornyelse, når du kjøper ny bil eller
        ny bolig, når livssituasjonen endres (samboer, barn, ny jobb), og en
        gang per år som rutine — selv uten konkret årsak. Lojalitet belønnes
        ikke i forsikringsmarkedet; prisene er konsekvent bedre for nye kunder.
      </p>

      <h2
        id="tape"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Kan du tape på å bytte forsikring?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Du kan tape på å bytte hvis: du mister en gunstig samlerabatt uten å
        beregne totalkostnaden, ny dekning har høyere egenandel eller snevrere
        vilkår uten at du legger merke til det, eller du bytter midt i et
        pågående skadekrav. Unngå disse fallgruvene ved å alltid sammenligne
        full dekning — ikke bare premien — og vent alltid til pågående
        skadeoppgjør er avsluttet.
      </p>
    </>
  ),
};

// ─── Article 4 ───────────────────────────────────────────────────────────────

const article4: Article = {
  slug: "innboforsikring-leietaker",
  title: "Trenger du innboforsikring som leietaker? Ja — her er hvorfor",
  description:
    "Mange leietakere tror utleiers forsikring dekker dem. Det stemmer ikke. Les hvorfor du trenger egen innboforsikring.",
  category: "Innboforsikring",
  categoryBg: "bg-[#fef3c7]",
  categoryText: "text-[#92400e]",
  date: "2026-02-12",
  dateFormatted: "12. februar 2026",
  readTime: "4 min",
  tocItems: [
    { id: "utleiers-forsikring", label: "Hva dekker utleiers forsikring?", level: 2 },
    { id: "hva-dekkes", label: "Hva dekker innboforsikring for leietakere?", level: 2 },
    { id: "kostnad", label: "Hva koster innboforsikring?", level: 2 },
    { id: "forsikringssum", label: "Hvilken forsikringssum trenger du?", level: 2 },
  ],
  kortOppsummert: [
    "Utleiers forsikring dekker bygningen — ikke dine eiendeler. Du trenger egen innboforsikring.",
    "Innboforsikring for leietakere koster typisk 100–250 kr per måned.",
    "De fleste leietakere trenger en forsikringssum på 300 000–700 000 kr.",
    "Studenter kan være dekket under foreldrenes forsikring frem til de er 20–25 år.",
    "Velg Standard-dekning som minimum — den inkluderer tyveri, brann og vannskade.",
  ],
  faqItems: [
    {
      question: "Kan jeg bruke foreldrenes innboforsikring?",
      answer:
        "Ja, frem til du er 20–25 år (avhengig av selskap) kan du være dekket under foreldrenes innboforsikring, forutsatt at du regnes som hjemmeboende. De fleste selskaper lar deg stå på foreldrenes forsikring hvis du bor i studentbolig og studerer. Sjekk vilkårene hos foreldrenes selskap — dette er den billigste løsningen for studenter.",
    },
    {
      question: "Dekker innboforsikring skade på utleiers eiendom?",
      answer:
        "Ja, de fleste innboforsikringer inkluderer en ansvarsdel som dekker skader du ved uhell påfører utleiers eiendom — for eksempel en vannskade forårsaket av en sprunget slange under vaskemaskinen din. Sjekk at ansvarsforsikring er inkludert i din forsikring.",
    },
    {
      question: "Hva gjør jeg ved vannskade i leid bolig?",
      answer:
        "Kontakt forsikringsselskapet ditt umiddelbart og varsle utleier. Dokumenter skaden med bilder. Din innboforsikring dekker dine eiendeler. Utleiers forsikring dekker selve bygningen og fast inventar. Dersom du forårsaket skaden ved uaktsomhet, vil din ansvarsforsikring dekke utleiers tap.",
    },
  ],
  relatedSlugs: [
    "bytte-forsikring-guide",
    "samlerabatt-forsikring",
    "forsikring-prisokning-2026",
  ],
  content: (
    <>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Ja — du trenger innboforsikring som leietaker.{" "}
        <strong className="font-semibold text-navy">
          Utleiers forsikring dekker kun bygningen
        </strong>{" "}
        — vegger, tak, rør og faste installasjoner. Den dekker ikke én eneste
        ting du eier. Uten innboforsikring må du erstatte alt selv ved brann,
        vannskade eller innbrudd — møbler, elektronikk, klær, sykkel og alt
        annet.
      </p>

      <h2
        id="utleiers-forsikring"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva dekker utleiers forsikring?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Utleiers husforsikring — eller borettslaget/sameiets fellesforsikring —
        dekker selve bygningen og fast inventar. Det vil si: vegger, tak,
        gulv, rør, elektriske anlegg, kjøkkeninnredning og baderomsmøbler som
        er fastmontert. Forsikringen gjelder for skader som brann, vannskade
        og naturskade på selve bygningsstrukturen.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Dine løse eiendeler — sofaen, laptopen, klærne, sykkelen — er aldri
        dekket av utleiers forsikring. Heller ikke ansvar for skader du
        påfører andre. Du er fullt eksponert uten egen forsikring.
      </p>

      <h2
        id="hva-dekkes"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva dekker innboforsikring for leietakere?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        En standard innboforsikring for leietakere dekker:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-5">
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Dine eiendeler
          </strong>{" "}
          mot tyveri, brann og vannskade
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">Ansvarsforsikring</strong>{" "}
          — dekker skader du ved uhell påfører utleiers eiendom eller naboer
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Rettshjelpsforsikring
          </strong>{" "}
          — advokathjelp ved konflikter med utleier
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Reisegods (de fleste forsikringer)
          </strong>{" "}
          — dekning av eiendeler på reise, vanligvis i 45–90 dager
        </li>
      </ul>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Bedre dekningsnivåer inkluderer også uhellsskade (du velter
        noe, knuser skjermen), ID-tyveriforsikring og utvidet elektronikkdekning.
      </p>

      <h2
        id="kostnad"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hva koster innboforsikring for leietakere?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Innboforsikring for leietakere koster typisk{" "}
        <strong className="font-semibold text-navy">100–250 kr per måned</strong>{" "}
        avhengig av forsikringssum, dekningsnivå og bosted. Studenter i
        studentbolig og unge under 30 år får gjerne gunstigere priser gjennom
        studentorganisasjoner som Studentsamskipnaden, eller via
        KLP og Fremtind som er kjent for å tilby rimelige forsikringer for
        denne gruppen. I storbyene — særlig Oslo — er prisen noe høyere som
        følge av økt tyveririsiko.
      </p>

      <h2
        id="forsikringssum"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvilken forsikringssum trenger du?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        De fleste leietakere trenger en forsikringssum på{" "}
        <strong className="font-semibold text-navy">300 000–700 000 kr</strong>.
        Beregn verdien av alt du eier: møbler, elektronikk, klær, sykkel,
        sportsutstyr, smykker. De fleste undervurderer dette kraftig. En laptop
        (15 000 kr), sykkel (8 000 kr), TV (6 000 kr), klær (30 000 kr) og
        øvrig elektronikk summerer seg raskt til 100 000–200 000 kr — og det er
        bare begynnelsen.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Er forsikringssummen for lav, er du underforsikret. Det betyr at
        erstatningen avkortes prosentvis ved skade. Har du innbo verdt 400 000
        kr men en forsikringssum på 200 000 kr, vil en totalskade gi deg
        erstatning for kun halvparten av faktisk tap.
      </p>

      <div className="bg-[#eff6ff] border border-[#c7d7fd] rounded-xl p-5 my-8">
        <p className="font-sans font-semibold text-navy mb-2">
          Finn beste innboforsikring for leietakere
        </p>
        <p className="text-sm text-[#4b5563] mb-3">
          Bruk kalkulatoren vår for en personlig anbefaling basert på din
          bosituasjon og innboets verdi.
        </p>
        <a
          href="/innboforsikring"
          className="inline-block bg-accent text-white font-sans font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          Bruk kalkulatoren →
        </a>
      </div>
    </>
  ),
};

// ─── Article 5 ───────────────────────────────────────────────────────────────

const article5: Article = {
  slug: "samlerabatt-forsikring",
  title: "Samlerabatt på forsikring — slik sparer du opptil 20 %",
  description:
    "De fleste forsikringsselskaper gir rabatt når du samler flere forsikringer. Men lønner det seg alltid? Vi forklarer.",
  category: "Sparetips",
  categoryBg: "bg-[#d1fae5]",
  categoryText: "text-[#065f46]",
  date: "2026-01-28",
  dateFormatted: "28. januar 2026",
  readTime: "4 min",
  tocItems: [
    { id: "rabatt-oversikt", label: "Samlerabatt hos norske selskaper", level: 2 },
    { id: "lonne-seg", label: "Lønner det seg alltid?", level: 2 },
    { id: "beste-kombinasjon", label: "Slik finner du beste kombinasjon", level: 2 },
  ],
  kortOppsummert: [
    "Samlerabatt varierer fra 10 % (KLP, Fremtind) til 20 % (If, Tryg) — Tryg gir opptil 30 % via fagforeninger.",
    "Samlerabatt lønner seg ikke alltid — regn alltid på totalkostnaden.",
    "Splitt gjerne mellom to selskaper hvis ett selskap er vesentlig billigere på ett produkt.",
    "Sammenlign totalpris med og uten rabatt hos minst tre selskaper.",
    "Lojalitetsperioden er ikke bundet — du kan alltid bytte med én måneds varsel.",
  ],
  faqItems: [
    {
      question: "Gjelder samlerabatt for samboere med felles bolig?",
      answer:
        "Ja, hos de fleste selskaper kan samboere samle forsikringer og motta samlerabatt som om de var en husstand. Noen selskaper krever felles folkeregistrert adresse. Ektefeller og samboere kan kombinere bil-, hus- og innboforsikring og dele rabatten.",
    },
    {
      question: "Mister jeg samlerabatten hvis jeg sier opp én forsikring?",
      answer:
        "Ja. Samlerabatten er betinget av at du har det minste antallet forsikringer hos selskapet som gir rett til rabatt — vanligvis 2 eller 3. Sier du opp én og faller under terskelen, bortfaller rabatten på alle gjenværende forsikringer. Regn på om det likevel er lønnsomt.",
    },
    {
      question: "Kan jeg få samlerabatt på tvers av selskaper?",
      answer:
        "Nei, samlerabatt gis kun innen samme selskap. Du kan imidlertid forhandle med selskaper om å matche en konkurrents totalpris. Noen selskaper — særlig de som opererer gjennom banker og fagforeninger — har særavtaler som gir ekstra rabatt uavhengig av antall forsikringer.",
    },
  ],
  relatedSlugs: [
    "forsikring-prisokning-2026",
    "bytte-forsikring-guide",
    "beste-bilforsikring",
  ],
  content: (
    <>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        De fleste forsikringsselskaper gir mellom{" "}
        <strong className="font-semibold text-navy">10 % og 20 % rabatt</strong>{" "}
        når du samler to eller flere forsikringer hos dem. Men samlerabatt
        lønner seg ikke alltid — noen selskaper er så dyre på enkelte produkter
        at rabatten ikke veier opp for prisforskjellen. Du bør alltid beregne
        totalkostnaden før du bestemmer deg.
      </p>

      <h2
        id="rabatt-oversikt"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Hvor mye samlerabatt gir hvert selskap?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Her er oversikten over samlerabatt hos de seks største norske
        forsikringsselskapene (mars 2026):
      </p>
      <div className="overflow-x-auto mb-5">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="font-sans font-bold text-navy text-left py-3 pr-6">Selskap</th>
              <th className="font-sans font-bold text-navy text-left py-3 pr-6">Samlerabatt</th>
              <th className="font-sans font-bold text-navy text-left py-3">Merknad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { selskap: "If", rabatt: "Opptil 20 %", merknad: "Ved 3+ forsikringer" },
              { selskap: "Tryg", rabatt: "Opptil 20 % (30 %)", merknad: "Opptil 30 % via fagforeninger" },
              { selskap: "Gjensidige", rabatt: "Opptil 18 %", merknad: "Fordelsprogrammet" },
              { selskap: "Storebrand", rabatt: "Opptil 17 %", merknad: "Bærekraftsbonger inkludert" },
              { selskap: "KLP", rabatt: "Opptil 15 %", merknad: "Fra 2 forsikringer" },
              { selskap: "Fremtind", rabatt: "Opptil 15 %", merknad: "SpareBank 1 / DNB-kunder" },
            ].map((row) => (
              <tr key={row.selskap}>
                <td className="font-sans font-semibold text-navy py-3 pr-6">{row.selskap}</td>
                <td className="text-[#374151] py-3 pr-6">{row.rabatt}</td>
                <td className="text-[#6b7280] py-3">{row.merknad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Trygs fagforeningsavtaler er verdt å undersøke særskilt. Medlemmer av
        store forbund som LO, YS og Unio kan få opptil 30 % rabatt — noe som
        overgår det du kan oppnå på egenhånd gjennom vanlig samlerabatt.
      </p>

      <h2
        id="lonne-seg"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Lønner det seg alltid å samle forsikringer?
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Nei — samlerabatt lønner seg ikke alltid. Du bør alltid beregne den
        faktiske totalkostnaden, ikke bare se på rabattprosentene.
      </p>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        <strong className="font-semibold text-navy">Et konkret eksempel:</strong>{" "}
        Anta at selskap A tilbyr bilforsikring for 6 000 kr og innboforsikring
        for 2 400 kr per år, med 15 % samlerabatt — totalt 7 140 kr. Selskap B
        tilbyr bilforsikring for 4 800 kr og innboforsikring for 2 200 kr uten
        samlerabatt — totalt 7 000 kr. Du sparer 140 kr ved å splitte mellom to
        selskaper, til tross for at du går glipp av samlerabatten.
      </p>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Regnestykket endrer seg selvfølgelig med faktiske tall — men poenget
        er at du alltid bør sammenligne totalpris, ikke la deg friste av en høy
        rabattandel på et produkt som i utgangspunktet er dyrt.
      </p>

      <h2
        id="beste-kombinasjon"
        className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-4 scroll-mt-20"
      >
        Slik finner du den beste kombinasjonen
      </h2>
      <p className="text-[#374151] leading-relaxed mb-4 text-[17px]">
        Følg denne prosessen for å finne din optimale forsikringskombinasjon:
      </p>
      <ol className="list-decimal pl-6 space-y-3 mb-5">
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            List opp alle forsikringer du trenger
          </strong>{" "}
          — bil, bolig, innbo, reise, eventuelt båt, hytte eller liv.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Hent totalpris hos minst tre selskaper
          </strong>{" "}
          — inkludert samlerabatt for hele pakken.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Beregn alternativet med to selskaper
          </strong>{" "}
          — det beste selskapet på bil + det beste selskapet på bolig/innbo.
          Sammenlign denne totalen med beste enkeltselskap.
        </li>
        <li className="text-[#374151] leading-relaxed text-[17px]">
          <strong className="font-semibold text-navy">
            Velg lavest totalkostnad
          </strong>{" "}
          — forutsatt at dekningsnivå og vilkår er sammenlignbare.
        </li>
      </ol>
      <p className="text-[#374151] leading-relaxed mb-5 text-[17px]">
        Husk at du kan bytte selskap med én måneds varsel når som helst. Det
        betyr at du ikke binder deg ved å velge ett selskap i dag — du kan
        alltid revurdere neste gang premien øker.
      </p>
    </>
  ),
};

// ─── Export ──────────────────────────────────────────────────────────────────

export const articles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is Article => a !== undefined);
}
