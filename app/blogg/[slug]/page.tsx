import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import TocSidebar from "../../components/TocSidebar";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "../../../lib/articles";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Forsikringsguiden`,
    description: article.description,
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);

  // ── JSON-LD schemas ────────────────────────────────────────────────────────

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "Forsikringsguiden Redaksjonen",
    },
    publisher: {
      "@type": "Organization",
      name: "Forsikringsguiden",
    },
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "nb",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Nav />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* ── Article header ───────────────────────────────────────────────── */}
        <section className="bg-white py-10 sm:py-14 px-4 border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Brødsmulesti" className="mb-5">
              <ol className="flex items-center gap-2 text-sm text-[#6b7280]">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Hjem
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none">›</li>
                <li>
                  <Link href="/blogg" className="hover:text-accent transition-colors">
                    Blogg
                  </Link>
                </li>
                <li aria-hidden="true" className="select-none">›</li>
                <li className="text-navy font-medium truncate max-w-[200px]" aria-current="page">
                  {article.category}
                </li>
              </ol>
            </nav>

            {/* Category tag */}
            <span
              className={`inline-block text-xs font-bold font-sans px-3 py-1 rounded-full mb-4 ${article.categoryBg} ${article.categoryText}`}
            >
              {article.category}
            </span>

            {/* Title */}
            <h1 className="font-sans text-3xl sm:text-4xl font-bold text-navy leading-tight tracking-tight max-w-3xl">
              {article.title}
            </h1>

            {/* Meta row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#6b7280]">
              <span className="font-sans">
                Av{" "}
                <span className="font-semibold text-navy">
                  Forsikringsguiden Redaksjonen
                </span>
              </span>
              <time dateTime={article.date} className="font-sans">
                {article.dateFormatted}
              </time>
              <span className="font-sans">{article.readTime} lesetid</span>
            </div>
          </div>
        </section>

        {/* ── Content + TOC ────────────────────────────────────────────────── */}
        <section className="bg-white py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-14 items-start">
              {/* Article body */}
              <article className="flex-1 min-w-0 max-w-[680px]">
                {/* Lead / description */}
                <p className="text-[#4b5563] text-lg leading-relaxed mb-8 border-l-4 border-accent pl-5">
                  {article.description}
                </p>

                {/* Main content */}
                {article.content}

                {/* Kort oppsummert */}
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-6 my-10">
                  <h2 className="font-sans text-lg font-bold text-navy mb-4">
                    Kort oppsummert
                  </h2>
                  <ul className="space-y-2.5">
                    {article.kortOppsummert.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
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
                        <span className="text-sm text-[#374151] leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <h2 className="font-sans text-xl sm:text-2xl font-bold text-navy mt-10 mb-6">
                  Ofte stilte spørsmål
                </h2>
                <FaqAccordion items={article.faqItems} />
              </article>

              {/* TOC sidebar — desktop only */}
              {article.tocItems.length > 0 && (
                <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
                  <TocSidebar tocItems={article.tocItems} />
                </aside>
              )}
            </div>
          </div>
        </section>

        {/* ── Related articles ─────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="bg-section py-14 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-sans text-xl font-bold text-navy mb-6">
                Relaterte artikler
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogg/${rel.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span
                      className={`self-start text-xs font-bold font-sans px-2.5 py-1 rounded-full mb-3 ${rel.categoryBg} ${rel.categoryText}`}
                    >
                      {rel.category}
                    </span>
                    <h3 className="font-sans text-sm font-bold text-navy leading-snug flex-1 mb-3 group-hover:text-accent transition-colors">
                      {rel.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                      <time dateTime={rel.date} className="text-xs text-[#9ca3af] font-sans">
                        {rel.dateFormatted}
                      </time>
                      <span className="text-xs font-semibold text-accent font-sans group-hover:underline underline-offset-2">
                        Les →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
