"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

type Category = "bil" | "bolig" | "innbo" | "reise";

interface BilAnswers {
  biltype: string;
  alder: string;
  sted: string;
  bonus: string;
}

interface BoligAnswers {
  boligtype: string;
  storrelse: string;
  byggeaar: string;
  sted: string;
}

interface InnboAnswers {
  bosituasjon: string;
  verdi: string;
  sted: string;
}

interface ReiseAnswers {
  hvem: string;
  destinasjon: string;
  frekvens: string;
}

type Answers = BilAnswers | BoligAnswers | InnboAnswers | ReiseAnswers;

interface Recommendation {
  name: string;
  letterColor: string;
  rating: number;
  reason: string;
  href: string;
}

// ─── Recommendation logic ────────────────────────────────────────────────────

function getRecommendations(category: Category, answers: Answers): Recommendation[] {
  const all: Record<string, Recommendation> = {
    KLP: {
      name: "KLP",
      letterColor: "#D97706",
      rating: 4.2,
      reason: "",
      href: "#",
    },
    Fremtind: {
      name: "Fremtind",
      letterColor: "#7C3AED",
      rating: 4.0,
      reason: "",
      href: "#",
    },
    If: {
      name: "If",
      letterColor: "#2563EB",
      rating: 3.8,
      reason: "",
      href: "#",
    },
    Storebrand: {
      name: "Storebrand",
      letterColor: "#0891B2",
      rating: 3.7,
      reason: "",
      href: "#",
    },
    Gjensidige: {
      name: "Gjensidige",
      letterColor: "#DC2626",
      rating: 3.5,
      reason: "",
      href: "#",
    },
    Tryg: {
      name: "Tryg",
      letterColor: "#059669",
      rating: 2.9,
      reason: "",
      href: "#",
    },
  };

  if (category === "bil") {
    const a = answers as BilAnswers;
    const bonusNote =
      a.bonus === "75% (full bonus)"
        ? " Med full bonus får du betydelig lavere pris hos alle selskaper."
        : "";

    if (a.biltype === "Elbil") {
      return [
        {
          ...all.Storebrand,
          reason: `Storebrand er ledende på elbil-forsikring og tilbyr spesialtilpassede vilkår for elektriske kjøretøy, inkludert dekning av ladekabler.${bonusNote}`,
        },
        {
          ...all.KLP,
          reason: `KLP er svært konkurransedyktig på elbil og har høy kundetilfredshet (4.2/5). God dekning til lav pris.${bonusNote}`,
        },
        {
          ...all.If,
          reason: `If har Nordens beste dekning for nye elbiler, med Viking Guard inkludert i toppakken.${bonusNote}`,
        },
      ];
    }

    if (a.alder === "0-2 år") {
      return [
        {
          ...all.If,
          reason: `If anbefales for nye biler med sin markedsledende kaskodekning og hurtig skadeoppgjør. Ideelt for biler under 2 år.${bonusNote}`,
        },
        {
          ...all.Gjensidige,
          reason: `Gjensidige har excellent dekning for nye biler med sitt fordelsprogram og bra reparasjonsnettverk.${bonusNote}`,
        },
        {
          ...all.Storebrand,
          reason: `Storebrand tilbyr god kasko for ny bil og bærekraftsrabatt hvis du kjøper flere forsikringer.${bonusNote}`,
        },
      ];
    }

    if (a.alder === "6-10 år" || a.alder === "Over 10 år") {
      return [
        {
          ...all.KLP,
          reason: `KLP er ofte billigst for eldre biler og har jevnt over høy kundetilfredshet (4.2/5). Enkel og rimelig dekning.${bonusNote}`,
        },
        {
          ...all.Fremtind,
          reason: `Fremtind tilbyr konkurransedyktige priser for eldre biler og har rask digital skademelding.${bonusNote}`,
        },
        {
          ...all.Gjensidige,
          reason: `Gjensidige er et trygt valg med godt fordelsprogram, også for eldre kjøretøy.${bonusNote}`,
        },
      ];
    }

    // Default bil (3-5 år, bensin/diesel/hybrid)
    return [
      {
        ...all.Gjensidige,
        reason: `Gjensidige er et solid valg for din bil med markedets mest omfattende dekning og godt fordelsprogram.${bonusNote}`,
      },
      {
        ...all.If,
        reason: `If har meget god kasko for bensin- og hybridbiler med rask skadebehandling.${bonusNote}`,
      },
      {
        ...all.KLP,
        reason: `KLP gir god verdi for pengene med høy kundetilfredshet og enkel håndtering av skader.${bonusNote}`,
      },
    ];
  }

  if (category === "bolig") {
    const a = answers as BoligAnswers;

    if (a.boligtype === "Leilighet") {
      return [
        {
          ...all.Fremtind,
          reason:
            "Fremtind er spesialist på leiligheter og har skreddersydde pakker for borettslag og sameier med god vanndekning.",
        },
        {
          ...all.KLP,
          reason:
            "KLP tilbyr rimelige og oversiktlige vilkår for leiligheter med etisk profil og god kundeservice.",
        },
        {
          ...all.If,
          reason:
            "If har god dekning for leiligheter inkludert ansvarsforsikring mot naboer og vannlekkasjer.",
        },
      ];
    }

    if (a.byggeaar === "Før 1970") {
      return [
        {
          ...all.Gjensidige,
          reason:
            "Gjensidige har bred erfaring med eldre boliger og gir god dekning for skjulte feil og eldre røropplegg.",
        },
        {
          ...all.If,
          reason:
            "If tilbyr spesialtilpasset dekning for eldre boliger med god rørskadedekning og rask utbedring.",
        },
        {
          ...all.Storebrand,
          reason:
            "Storebrand er et trygt valg med fleksible forsikringssummer, viktig for riktig vurdering av eldre eiendommer.",
        },
      ];
    }

    if (a.storrelse === "Over 180 kvm") {
      return [
        {
          ...all.Gjensidige,
          reason:
            "Gjensidige anbefales for store boliger med markedets mest omfattende husdekning og høye forsikringssummer.",
        },
        {
          ...all.Storebrand,
          reason:
            "Storebrand har fleksible forsikringssummer som passer godt for store eiendommer og gir bærekraftsrabatt.",
        },
        {
          ...all.If,
          reason:
            "If tilbyr god dekning for store boliger med utvidet ansvarsforsikring og rask skadebehandling.",
        },
      ];
    }

    return [
      {
        ...all.KLP,
        reason:
          "KLP er et utmerket valg for din boligtype med jevnt over høy kundetilfredshet (4.2/5) og konkurransedyktige priser.",
      },
      {
        ...all.Fremtind,
        reason:
          "Fremtind tilbyr enkel og oversiktlig boligforsikring med god digital skademelding.",
      },
      {
        ...all.Gjensidige,
        reason:
          "Gjensidige er et solid alternativ med markedets mest omfattende husdekning og godt fordelsprogram.",
      },
    ];
  }

  if (category === "innbo") {
    const a = answers as InnboAnswers;

    if (a.bosituasjon === "Studentbolig" || a.bosituasjon === "Leid bolig") {
      return [
        {
          ...all.KLP,
          reason:
            "KLP er ofte billigst for studenter og leietakere, med enkel dekning uten unødvendige tillegg og etisk profil.",
        },
        {
          ...all.Fremtind,
          reason:
            "Fremtind er svært godt egnet for leietakere med rimelig basisforsikring og rask digital skademelding.",
        },
        {
          ...all.Tryg,
          reason:
            "Tryg har gode tilbud til studenter og unge, inkludert noen pakker med reisedekning.",
        },
      ];
    }

    if (a.verdi === "Over 1 000 000 kr") {
      return [
        {
          ...all.Gjensidige,
          reason:
            "Gjensidige har markedets mest omfattende innbodekning, ideelt for verdifullt innbo med god dekning av verdisaker.",
        },
        {
          ...all.If,
          reason:
            "If tilbyr utmerket ID-tyveriforsikring og god dekning av elektronikk og verdisaker i Super-pakken.",
        },
        {
          ...all.Storebrand,
          reason:
            "Storebrand tilbyr fleksible forsikringssummer og god app for oversikt over all din innbodekning.",
        },
      ];
    }

    return [
      {
        ...all.KLP,
        reason:
          "KLP gir god verdi for pengene på innbo med høy kundetilfredshet (4.2/5) og oversiktlige vilkår.",
      },
      {
        ...all.If,
        reason:
          "If har uhellsdekning inkludert i Standard og god dekning for elektronikk — praktisk for de fleste husstander.",
      },
      {
        ...all.Fremtind,
        reason:
          "Fremtind tilbyr enkel og kostnadseffektiv innboforsikring med digital skademelding.",
      },
    ];
  }

  // Reise
  const a = answers as ReiseAnswers;

  if (a.hvem === "Hele familien") {
    return [
      {
        ...all.If,
        reason:
          "If anbefales for familier med sin markedsledende familiereiseforsikring som dekker alle barn gratis under 18 år.",
      },
      {
        ...all.Gjensidige,
        reason:
          "Gjensidige har utmerkede familiepakker med god dekning for avbestilling og medisinske nødsituasjoner.",
      },
      {
        ...all.Storebrand,
        reason:
          "Storebrand tilbyr god familiedekning med fleksibel årsreiseforsikring for hele familien.",
      },
    ];
  }

  if (a.frekvens === "Mer enn 5 ganger") {
    return [
      {
        ...all.If,
        reason:
          "For hyppige reisende anbefaler vi en helårsforsikring fra If — mye billigere enn enkeltreiseforsikringer og gjelder alle reiser.",
      },
      {
        ...all.Gjensidige,
        reason:
          "Gjensidiges årsreiseforsikring er svært kostnadseffektiv for deg som reiser mer enn 5 ganger i året.",
      },
      {
        ...all.Storebrand,
        reason:
          "Storebrand har god årsreiseforsikring med dekning for hele verden og rask evakueringshjelp.",
      },
    ];
  }

  if (a.destinasjon === "Hele verden") {
    return [
      {
        ...all.Gjensidige,
        reason:
          "Gjensidige har den mest omfattende verdensdekningen med 24/7 nødassistanse og god sykehusdekning utenfor Europa.",
      },
      {
        ...all.If,
        reason:
          "If tilbyr utmerket global dekning med rask evakuering og medisinsk assistanse i alle verdensdeler.",
      },
      {
        ...all.KLP,
        reason:
          "KLP gir god dekning for reiser utenfor Europa til konkurransedyktig pris med høy kundetilfredshet.",
      },
    ];
  }

  return [
    {
      ...all.KLP,
      reason:
        "KLP er et kostnadseffektivt valg for reiseforsikring i Norden og Europa med høy kundetilfredshet (4.2/5).",
    },
    {
      ...all.Fremtind,
      reason:
        "Fremtind tilbyr enkel og rimelig reiseforsikring for de vanligste reisemålene i Europa.",
    },
    {
      ...all.If,
      reason:
        "If har god reisedekning med rask skadebehandling og god app for å melde skader underveis.",
    },
  ];
}

// ─── Star rating ─────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating.toFixed(1)} av 5 stjerner`}>
      <div className="relative inline-flex">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#E5E7EB" aria-hidden="true">
              <path d="M8 1.5L9.854 5.528H14.66L10.903 8.28L12.756 12.806L8 10.056L3.244 12.806L5.097 8.28L1.34 5.528H6.146L8 1.5Z" />
            </svg>
          ))}
        </div>
        <div
          className="absolute inset-0 flex gap-0.5 overflow-hidden"
          style={{ width: `${(rating / 5) * 100}%` }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#FBBF24" aria-hidden="true">
              <path d="M8 1.5L9.854 5.528H14.66L10.903 8.28L12.756 12.806L8 10.056L3.244 12.806L5.097 8.28L1.34 5.528H6.146L8 1.5Z" />
            </svg>
          ))}
        </div>
      </div>
      <span className="font-sans font-bold text-sm text-navy">{rating.toFixed(1)}</span>
      <span className="text-xs text-[#9ca3af]">/ 5</span>
    </div>
  );
}

// ─── Step components ──────────────────────────────────────────────────────────

const categoryCards: { id: Category; emoji: string; label: string }[] = [
  { id: "bil", emoji: "🚗", label: "Bil" },
  { id: "bolig", emoji: "🏠", label: "Bolig" },
  { id: "innbo", emoji: "🛋️", label: "Innbo" },
  { id: "reise", emoji: "✈️", label: "Reise" },
];

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold font-sans text-navy">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition"
      >
        <option value="">Velg…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface Props {
  preselectedCategory?: Category;
}

export default function ForsikringsKalkulator({ preselectedCategory }: Props) {
  const [step, setStep] = useState<1 | 2 | 3>(preselectedCategory ? 2 : 1);
  const [category, setCategory] = useState<Category | null>(preselectedCategory ?? null);
  const [answers, setAnswers] = useState<Partial<BilAnswers & BoligAnswers & InnboAnswers & ReiseAnswers>>({});
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");

  const totalSteps = preselectedCategory ? 2 : 3;
  const currentStepDisplay = preselectedCategory ? (step === 2 ? 1 : 2) : step;

  function goTo(nextStep: 1 | 2 | 3, dir: "forward" | "back") {
    setAnimDir(dir);
    setStep(nextStep);
  }

  function selectCategory(cat: Category) {
    setCategory(cat);
    setAnswers({});
    goTo(2, "forward");
  }

  function setAnswer(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function canProceed(): boolean {
    if (step === 1) return category !== null;
    if (step === 2 && category) {
      if (category === "bil") {
        const a = answers as Partial<BilAnswers>;
        return !!(a.biltype && a.alder && a.sted && a.bonus);
      }
      if (category === "bolig") {
        const a = answers as Partial<BoligAnswers>;
        return !!(a.boligtype && a.storrelse && a.byggeaar && a.sted);
      }
      if (category === "innbo") {
        const a = answers as Partial<InnboAnswers>;
        return !!(a.bosituasjon && a.verdi && a.sted);
      }
      if (category === "reise") {
        const a = answers as Partial<ReiseAnswers>;
        return !!(a.hvem && a.destinasjon && a.frekvens);
      }
    }
    return false;
  }

  const recommendations =
    step === 3 && category
      ? getRecommendations(category, answers as Answers)
      : [];

  const progressPct = ((currentStepDisplay - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden">
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: step === 3 ? "100%" : `${Math.max(progressPct, 8)}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Step label */}
        <p className="text-xs font-semibold font-sans text-[#9ca3af] uppercase tracking-widest mb-4">
          Steg {currentStepDisplay} av {totalSteps}
        </p>

        {/* ── STEP 1: Choose category ── */}
        {step === 1 && (
          <div
            key="step1"
            className={`transition-all duration-300 ${animDir === "forward" ? "animate-fade-in" : "animate-fade-in"}`}
          >
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-navy mb-6">
              Hva vil du forsikre?
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {categoryCards.map((c) => (
                <button
                  key={c.id}
                  onClick={() => selectCategory(c.id)}
                  className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border-2 p-5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 cursor-pointer ${
                    category === c.id
                      ? "border-accent bg-[#eff6ff]"
                      : "border-gray-200 hover:border-accent hover:bg-[#f8faff]"
                  }`}
                >
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {c.emoji}
                  </span>
                  <span className="font-sans font-semibold text-sm text-navy">
                    {c.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Questions ── */}
        {step === 2 && category && (
          <div key="step2">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-navy mb-6">
              {category === "bil" && "Fortell oss om bilen din"}
              {category === "bolig" && "Fortell oss om boligen din"}
              {category === "innbo" && "Fortell oss om innboet ditt"}
              {category === "reise" && "Fortell oss om reisevanene dine"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category === "bil" && (
                <>
                  <SelectField
                    label="Hva slags bil har du?"
                    options={["Elbil", "Bensin/Diesel", "Hybrid"]}
                    value={answers.biltype ?? ""}
                    onChange={(v) => setAnswer("biltype", v)}
                  />
                  <SelectField
                    label="Hvor gammel er bilen?"
                    options={["0-2 år", "3-5 år", "6-10 år", "Over 10 år"]}
                    value={answers.alder ?? ""}
                    onChange={(v) => setAnswer("alder", v)}
                  />
                  <SelectField
                    label="Hvor bor du?"
                    options={["Oslo", "Bergen", "Trondheim", "Stavanger", "Annet"]}
                    value={answers.sted ?? ""}
                    onChange={(v) => setAnswer("sted", v)}
                  />
                  <SelectField
                    label="Har du bonus?"
                    options={["Ingen bonus", "10-40%", "50-70%", "75% (full bonus)"]}
                    value={answers.bonus ?? ""}
                    onChange={(v) => setAnswer("bonus", v)}
                  />
                </>
              )}

              {category === "bolig" && (
                <>
                  <SelectField
                    label="Hva slags bolig?"
                    options={["Enebolig", "Rekkehus", "Leilighet"]}
                    value={answers.boligtype ?? ""}
                    onChange={(v) => setAnswer("boligtype", v)}
                  />
                  <SelectField
                    label="Omtrentlig størrelse?"
                    options={["Under 80 kvm", "80-120 kvm", "120-180 kvm", "Over 180 kvm"]}
                    value={answers.storrelse ?? ""}
                    onChange={(v) => setAnswer("storrelse", v)}
                  />
                  <SelectField
                    label="Byggeår?"
                    options={["Før 1970", "1970-1999", "2000-2015", "Etter 2015"]}
                    value={answers.byggeaar ?? ""}
                    onChange={(v) => setAnswer("byggeaar", v)}
                  />
                  <SelectField
                    label="Hvor bor du?"
                    options={["Oslo", "Bergen", "Trondheim", "Stavanger", "Annet"]}
                    value={answers.sted ?? ""}
                    onChange={(v) => setAnswer("sted", v)}
                  />
                </>
              )}

              {category === "innbo" && (
                <>
                  <SelectField
                    label="Bor du i?"
                    options={["Egen bolig", "Leid bolig", "Studentbolig"]}
                    value={answers.bosituasjon ?? ""}
                    onChange={(v) => setAnswer("bosituasjon", v)}
                  />
                  <SelectField
                    label="Omtrentlig verdi av innboet?"
                    options={["Under 500 000 kr", "500 000–1 000 000 kr", "Over 1 000 000 kr"]}
                    value={answers.verdi ?? ""}
                    onChange={(v) => setAnswer("verdi", v)}
                  />
                  <SelectField
                    label="Hvor bor du?"
                    options={["Oslo", "Bergen", "Trondheim", "Stavanger", "Annet"]}
                    value={answers.sted ?? ""}
                    onChange={(v) => setAnswer("sted", v)}
                  />
                </>
              )}

              {category === "reise" && (
                <>
                  <SelectField
                    label="Hvem skal forsikres?"
                    options={["Bare meg", "Meg og partner", "Hele familien"]}
                    value={answers.hvem ?? ""}
                    onChange={(v) => setAnswer("hvem", v)}
                  />
                  <SelectField
                    label="Hvor reiser du oftest?"
                    options={["Norden", "Europa", "Hele verden"]}
                    value={answers.destinasjon ?? ""}
                    onChange={(v) => setAnswer("destinasjon", v)}
                  />
                  <SelectField
                    label="Hvor ofte reiser du?"
                    options={["1-2 ganger i året", "3-5 ganger", "Mer enn 5 ganger"]}
                    value={answers.frekvens ?? ""}
                    onChange={(v) => setAnswer("frekvens", v)}
                  />
                </>
              )}
            </div>

            <div className="mt-6 flex items-center gap-3">
              {!preselectedCategory && (
                <button
                  onClick={() => goTo(1, "back")}
                  className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-semibold font-sans text-[#4b5563] hover:bg-gray-50 transition-colors"
                >
                  ← Tilbake
                </button>
              )}
              <button
                onClick={() => canProceed() && goTo(3, "forward")}
                disabled={!canProceed()}
                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold font-sans transition-all duration-150 ${
                  canProceed()
                    ? "bg-accent text-white hover:bg-[#1d4ed8] active:bg-[#1e40af] shadow-sm"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                Se anbefaling →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Results ── */}
        {step === 3 && (
          <div key="step3">
            <h2 className="font-sans text-xl sm:text-2xl font-bold text-navy mb-2">
              Vår anbefaling til deg
            </h2>
            <p className="text-sm text-[#6b7280] mb-6">
              Basert på svarene dine har vi rangert de beste alternativene.
            </p>

            <div className="flex flex-col gap-4">
              {recommendations.map((rec, i) => (
                <div
                  key={rec.name}
                  className={`rounded-xl border p-5 relative transition-all ${
                    i === 0
                      ? "border-accent bg-[#eff6ff]"
                      : "border-gray-100 bg-[#f9fafb]"
                  }`}
                >
                  {i === 0 && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold font-sans px-2 py-0.5 rounded-full uppercase tracking-wide">
                      Beste valg for deg
                    </span>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold font-sans text-sm flex-shrink-0 select-none"
                      style={{ backgroundColor: rec.letterColor }}
                      aria-hidden="true"
                    >
                      {rec.name[0]}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-navy text-base">{rec.name}</p>
                      <StarRating rating={rec.rating} />
                    </div>
                  </div>
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-4">{rec.reason}</p>
                  <Link
                    href={rec.href}
                    className={`inline-block text-sm font-bold font-sans px-4 py-2 rounded-lg transition-colors duration-150 ${
                      i === 0
                        ? "bg-accent text-white hover:bg-[#1d4ed8]"
                        : "bg-white border border-gray-200 text-navy hover:bg-gray-50"
                    }`}
                  >
                    Gå til {rec.name} →
                  </Link>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setAnswers({});
                if (preselectedCategory) {
                  goTo(2, "back");
                } else {
                  setCategory(null);
                  goTo(1, "back");
                }
              }}
              className="mt-5 text-sm text-[#6b7280] hover:text-navy underline underline-offset-2 transition-colors"
            >
              Start på nytt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
