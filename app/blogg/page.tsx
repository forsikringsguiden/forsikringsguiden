import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { articles } from "../../lib/articles";

export const metadata: Metadata = {
  title: "Blogg — Tips, guider og nyheter om forsikring | Forsikringsguiden",
  description:
    "Tips, guider og nyheter om forsikring i Norge. Uavhengig redaksjonelt innhold oppdatert for 2026.",
};

export default function BloggPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ── Header ───────────────────────────────────────────────────────── */}
        <section className="bg-white py-12 sm:py-16 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-sans text-3xl sm:text-4xl font-bold text-navy">
              Forsikringsguiden Blogg
            </h1>
            <p className="mt-3 text-lg text-[#4b5563] leading-relaxed">
              Tips, guider og nyheter om forsikring i Norge
            </p>
          </div>
        </section>

        {/* ── Article grid ─────────────────────────────────────────────────── */}
        <section className="bg-section py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blogg/${article.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + read time */}
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-xs font-bold font-sans px-2.5 py-1 rounded-full ${article.categoryBg} ${article.categoryText}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-[#9ca3af] font-sans">
                        {article.readTime} lesetid
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-sans text-base sm:text-lg font-bold text-navy leading-snug mb-3 group-hover:text-accent transition-colors duration-150">
                      {article.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-[#4b5563] leading-relaxed flex-1 mb-4">
                      {article.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <time
                        dateTime={article.date}
                        className="text-xs text-[#9ca3af] font-sans"
                      >
                        {article.dateFormatted}
                      </time>
                      <span className="text-sm font-semibold text-accent font-sans group-hover:underline underline-offset-2">
                        Les mer →
                      </span>
                    </div>
                  </div>
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
