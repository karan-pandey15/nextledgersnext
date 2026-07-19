"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArtificialIntelligence from "../../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../../components/ChatBot/NexaLedAi";
import CtaButton from "../../components/ui/CtaButton";
import ArticleCard from "../ArticleCard";
import { getArticleBySlug, getRelatedArticles } from "../articlesData";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const article = useMemo(() => getArticleBySlug(slug), [slug]);
  const related = useMemo(() => (article ? getRelatedArticles(slug, 3) : []), [article, slug]);

  if (!article) {
    return (
      <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="text-[24px] font-extrabold" style={{ color: NAVY }}>
            Article not found
          </h1>
          <p className="mt-2 text-[14px]" style={{ color: GREY }}>
            The article you are looking for does not exist or was moved.
          </p>
          <div className="mt-6">
            <CtaButton href="/articles" variant="primary" size="md">
              Browse all articles
            </CtaButton>
          </div>
        </section>
        <Footer variant="global" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <article className="relative w-full flex-1" style={{ backgroundColor: PAGE_CREAM }}>
        <div className="mx-auto max-w-[900px] px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#FF6A00] transition-colors hover:text-[#E85E00]"
          >
            ← Back to articles
          </Link>

          <div className="mt-5 overflow-hidden rounded-[20px] border border-[#F0E6DC] bg-white shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:mt-6 sm:rounded-[24px]">
            <div className="relative h-[220px] sm:h-[300px] lg:h-[360px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 900px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#1A1A1A]/90 px-2.5 py-1 text-[10px] font-semibold text-white sm:text-[11px]">
                    {article.date}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#0F274A] sm:text-[11px]">
                    {article.readTime}
                  </span>
                </div>
                <h1 className="mt-3 max-w-3xl text-[22px] leading-snug font-extrabold text-white sm:text-[28px] lg:text-[32px]">
                  {article.title}
                </h1>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-[#FFF1E6] px-2.5 py-0.5 text-[9px] font-bold tracking-[0.06em] text-[#FF6A00] uppercase sm:text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
              <p className="text-[14px] leading-relaxed font-medium sm:text-[15px]" style={{ color: NAVY }}>
                {article.excerpt}
              </p>

              <div className="mt-6 space-y-4 sm:mt-7">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[13.5px] leading-[1.7] sm:text-[14.5px]"
                    style={{ color: GREY }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 rounded-[16px] border border-[#FF6A00]/25 bg-[#FFF7F0] px-5 py-5 sm:mt-10 sm:px-6">
                <h2 className="text-[16px] font-bold sm:text-[18px]" style={{ color: NAVY }}>
                  Need help putting this into practice?
                </h2>
                <p className="mt-1.5 text-[13px] leading-relaxed sm:text-[14px]" style={{ color: GREY }}>
                  Our offshore specialists support accounting firms with bookkeeping, tax, payroll,
                  VAT, and reporting — white-label and on your timeline.
                </p>
                <div className="mt-4">
                  <CtaButton href="/contact" variant="primary" size="md">
                    Book a Discovery Call
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>

          {related.length > 0 ? (
            <section className="mt-12 sm:mt-14">
              <h2
                className="text-center text-[22px] font-extrabold sm:text-[26px]"
                style={{ color: NAVY }}
              >
                Related <span style={{ color: ORANGE }}>articles</span>
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <CtaButton href="/articles" variant="secondary" size="md" className="min-w-[200px]">
                  View all articles
                  <span aria-hidden="true">→</span>
                </CtaButton>
              </div>
            </section>
          ) : null}
        </div>
      </article>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
