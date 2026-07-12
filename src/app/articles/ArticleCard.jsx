"use client";

import Image from "next/image";
import Link from "next/link";

const ORANGE = "#F58220";
const GREY = "#6B7280";

export default function ArticleCard({ article }) {
  const href = article.href || `/articles/${article.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_36px_rgba(15,39,74,0.07)] sm:rounded-[20px]">
      <div className="relative h-[200px] overflow-hidden sm:h-[220px] lg:h-[240px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />

        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-[#1A1A1A]/90 px-2.5 py-1 text-[10px] font-semibold text-white sm:top-4 sm:left-4 sm:text-[11px]">
          {article.date}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="text-[15px] leading-snug font-bold text-white sm:text-[17px] lg:text-[18px]">
            {article.title}
          </h3>

          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#FFF1E6] px-2 py-0.5 text-[9px] font-bold tracking-[0.06em] text-[#F58220] uppercase sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[12px] leading-[1.55] sm:text-[13px]" style={{ color: GREY }}>
          {article.excerpt}
        </p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#F58220] transition-colors hover:text-[#E0721B] sm:text-[14px]"
          style={{ color: ORANGE }}
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
