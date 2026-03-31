import Link from "next/link";

export interface CompanyData {
  name: string;
  letterColor: string;
  coverageTiers: string[];
  rabatt: string;
  fordeler: string[];
  rating: number;
  href: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={filled ? "#FBBF24" : "#E5E7EB"}
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M8 1.5L9.854 5.528H14.66L10.903 8.28L12.756 12.806L8 10.056L3.244 12.806L5.097 8.28L1.34 5.528H6.146L8 1.5Z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1.5"
      aria-label={`${rating.toFixed(1)} av 5 stjerner`}
    >
      {/* Overlay technique: empty stars as base, filled stars clipped by width% */}
      <div className="relative inline-flex">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={false} />
          ))}
        </div>
        <div
          className="absolute inset-0 flex gap-0.5 overflow-hidden"
          style={{ width: `${(rating / 5) * 100}%` }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={true} />
          ))}
        </div>
      </div>
      <span className="font-sans font-bold text-sm text-navy">
        {rating.toFixed(1)}
      </span>
      <span className="text-xs text-[#9ca3af]">/ 5</span>
    </div>
  );
}

export default function InsuranceComparison({
  companies,
}: {
  companies: CompanyData[];
}) {
  return (
    <div>
      {/* Disclaimer */}
      <div className="flex items-start gap-2.5 bg-[#eff6ff] border border-[#c7d7fd] rounded-xl px-4 py-3 mb-6 text-sm text-[#374151]">
        <svg
          className="w-4 h-4 mt-0.5 text-accent flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <p>
          Vurderingene er basert på kundeomtaler fra{" "}
          <span className="font-semibold">Bytt.no</span> (mars 2026). Klikk
          «Sjekk pris» for å få et personlig tilbud.
        </p>
      </div>

      {/* Company cards */}
      <div className="flex flex-col gap-4">
        {companies.map((co) => (
          <article
            key={co.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              {/* Header: logo + name | star rating */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold font-sans text-base flex-shrink-0 select-none"
                    style={{ backgroundColor: co.letterColor }}
                    aria-hidden="true"
                  >
                    {co.name[0]}
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-navy">
                    {co.name}
                  </h3>
                </div>
                <StarRating rating={co.rating} />
              </div>

              {/* Body: dekning + fordeler */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                {/* Left: dekningsnivåer + samlerabatt */}
                <div>
                  <p className="text-[10px] font-bold font-sans text-[#9ca3af] uppercase tracking-widest mb-2.5">
                    Dekningsnivåer
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {co.coverageTiers.map((tier) => (
                      <span
                        key={tier}
                        className="bg-[#eff6ff] text-accent text-xs font-semibold font-sans px-3 py-1 rounded-full border border-[#dbeafe]"
                      >
                        {tier}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3.5 flex items-center gap-2">
                    <span className="text-[10px] font-bold font-sans text-[#9ca3af] uppercase tracking-widest">
                      Samlerabatt:
                    </span>
                    <span className="text-sm font-bold text-success">
                      {co.rabatt}
                    </span>
                  </div>
                </div>

                {/* Right: fordeler */}
                <div>
                  <p className="text-[10px] font-bold font-sans text-[#9ca3af] uppercase tracking-widest mb-2.5">
                    Fordeler
                  </p>
                  <ul className="space-y-2">
                    {co.fordeler.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 mt-0.5 text-success flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-[#4b5563] leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer: source attribution + CTA */}
            <div className="px-6 sm:px-8 py-4 bg-[#f9fafb] border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-[#9ca3af]">
                Kilde: Bytt.no —{" "}
                <span className="font-medium text-[#6b7280]">
                  {co.rating.toFixed(1)}/5
                </span>{" "}
                basert på 45 000+ anmeldelser
              </span>
              <Link
                href={co.href}
                className="sm:flex-shrink-0 inline-block text-center bg-accent text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1d4ed8] active:bg-[#1e40af] transition-colors duration-150 whitespace-nowrap"
              >
                Sjekk pris hos {co.name} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
