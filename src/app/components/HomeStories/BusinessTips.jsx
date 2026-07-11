"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

const ARTICLES = [
  {
    date: "Feb 18, 2026",
    title: "How to Maximize Your Tax Deductions in 2026",
    tags: ["TAXES", "SMALL BUSINESS"],
    excerpt:
      "Discover practical strategies to reduce your tax burden this year while staying fully compliant with the latest regulations.",
    image: "/images/DSC09781.JPG",
    href: "/blogs",
  },
  {
    date: "Feb 12, 2026",
    title: "5 Bookkeeping Mistakes That Cost Small Businesses",
    tags: ["BOOKKEEPING", "FINANCE"],
    excerpt:
      "Avoid these common bookkeeping pitfalls that quietly drain profits and create compliance risk for growing companies.",
    image: "/images/DSC09901.JPG",
    href: "/blogs",
  },
  {
    date: "Feb 5, 2026",
    title: "The Complete Guide to Quarterly Tax Payments",
    tags: ["TAXES", "PLANNING"],
    excerpt:
      "A clear, step-by-step guide to estimating, scheduling, and filing quarterly taxes with confidence.",
    image: "/images/DSC09794.JPG",
    href: "/blogs",
  },
];

function ArticleCard({ article }) {
  return (
    <article className="flex flex-col rounded-[18px] sm:rounded-[20px] overflow-hidden bg-white shadow-[0_10px_36px_rgba(15,39,74,0.07)] h-full">
      {/* Image header */}
      <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />

        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center rounded-full bg-[#1A1A1A]/90 text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1">
          {article.date}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="font-bold text-white text-[15px] sm:text-[17px] lg:text-[18px] leading-snug">
            {article.title}
          </h3>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#FFF1E6] text-[#F58220] text-[9px] sm:text-[10px] font-bold tracking-[0.06em] uppercase px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 sm:px-5 py-4 sm:py-5">
        <p className="text-[12px] sm:text-[13px] leading-[1.55]" style={{ color: GREY }}>
          {article.excerpt}
        </p>

        <Link
          href={article.href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] sm:text-[14px] font-semibold text-[#F58220] hover:text-[#E0721B] transition-colors"
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function BusinessTips() {
  return (
    <div>
      <div className="text-center max-w-[980px] mx-auto">
        <h2
          className="font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]"
          style={{ color: NAVY }}
        >
          Business &amp; <span style={{ color: ORANGE }}>tax tips</span>
        </h2>

        <p
          className="mt-3 sm:mt-4 text-[12px] sm:text-[13px] lg:text-[14px] leading-6 max-w-[720px] mx-auto"
          style={{ color: GREY }}
        >
          Expert insights, practical advice, and the latest updates to help your business stay
          compliant and grow with confidence
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <CtaButton href="/blogs" variant="secondary" size="md" className="min-w-[200px]">
          View all articles
          <span aria-hidden="true">→</span>
        </CtaButton>
      </div>
    </div>
  );
}
