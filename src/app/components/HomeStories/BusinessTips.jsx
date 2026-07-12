"use client";

import React from "react";
import CtaButton from "@/app/components/ui/CtaButton";
import ArticleCard from "@/app/articles/ArticleCard";
import { ARTICLES } from "@/app/articles/articlesData";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

const FEATURED = ARTICLES.slice(0, 3);

export default function BusinessTips() {
  return (
    <div>
      <div className="mx-auto max-w-[980px] text-center">
        <h2
          className="text-[26px] leading-[1.15] font-bold tracking-[-0.01em] sm:text-[34px] lg:text-[40px]"
          style={{ color: NAVY }}
        >
          Business &amp; <span style={{ color: ORANGE }}>tax tips</span>
        </h2>

        <p
          className="mx-auto mt-3 max-w-[720px] text-[12px] leading-6 sm:mt-4 sm:text-[13px] lg:text-[14px]"
          style={{ color: GREY }}
        >
          Expert insights, practical advice, and the latest updates to help your business stay
          compliant and grow with confidence
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-3 sm:gap-5 lg:gap-6">
        {FEATURED.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:mt-10">
        <CtaButton href="/articles" variant="secondary" size="md" className="min-w-[200px]">
          View all articles
          <span aria-hidden="true">→</span>
        </CtaButton>
      </div>
    </div>
  );
}
