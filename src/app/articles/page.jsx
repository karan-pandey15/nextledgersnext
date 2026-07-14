"use client";

import { useMemo, useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import CtaButton from "../components/ui/CtaButton";
import ArticleCard from "./ArticleCard";
import { ARTICLES } from "./articlesData";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const FILTERS = ["All", ...Array.from(new Set(ARTICLES.map((a) => a.category)))];

export default function ArticlesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return ARTICLES;
    return ARTICLES.filter((article) => article.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section
        className="relative w-full flex-1"
        style={{
          backgroundColor: PAGE_CREAM,
          backgroundImage:
            "radial-gradient(rgba(180,150,120,0.28) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-[980px] text-center">
            <h1
              className="text-[26px] leading-[1.15] font-bold tracking-[-0.01em] sm:text-[34px] lg:text-[40px]"
              style={{ color: NAVY }}
            >
              Business &amp; <span style={{ color: ORANGE }}>tax tips</span>
            </h1>
            <p
              className="mx-auto mt-3 max-w-[720px] text-[12px] leading-6 sm:mt-4 sm:text-[13px] lg:text-[14px]"
              style={{ color: GREY }}
            >
              Expert insights, practical advice, and the latest updates to help your
              business stay compliant and grow with confidence
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase transition-colors sm:text-[12px] ${
                    isActive
                      ? "bg-[#FF6A00] text-white"
                      : "border border-[#F0E6DC] bg-white text-[#0F274A] hover:border-[#FF6A00]/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-[14px] font-semibold" style={{ color: GREY }}>
              No articles in this category yet.
            </p>
          ) : null}

          <div className="mt-10 flex justify-center sm:mt-12">
            <CtaButton href="/contact" variant="secondary" size="md" className="min-w-[220px]">
              Talk to our experts
              <span aria-hidden="true">→</span>
            </CtaButton>
          </div>
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
