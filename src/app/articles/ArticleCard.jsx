"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const GREY = "#6B7280";

export default function ArticleCard({ article }) {
  const href = article.href || `/articles/${article.slug}`;

  return (
    <article className="mx-auto flex h-full w-full max-w-[340px] flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_10px_36px_rgba(15,39,74,0.07)] sm:rounded-[18px]">
      {/* Image height matches text block */}
      <div className="relative h-[132px] shrink-0 overflow-hidden sm:h-[140px] lg:h-[148px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover object-center"
          sizes="340px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />

        <span className="absolute top-2.5 left-2.5 inline-flex items-center rounded-full bg-[#1A1A1A]/90 px-2 py-0.5 text-[9px] font-semibold text-white sm:top-3 sm:left-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
          {article.date}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5">
          <h3 className="line-clamp-2 text-[13px] leading-snug font-bold text-white sm:text-[14px] lg:text-[15px]">
            {article.title}
          </h3>

          <div className="mt-1.5 flex flex-wrap gap-1">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#FFF1E6] px-1.5 py-0.5 text-[8px] font-bold tracking-[0.06em] text-[#FF6A00] uppercase sm:text-[9px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3.5 py-3.5 sm:px-4 sm:py-4">
        <p
          className="line-clamp-3 min-h-[3.1em] text-[11px] leading-[1.55] sm:min-h-[3.465em] sm:text-[12px]"
          style={{ color: GREY }}
        >
          {article.excerpt}
        </p>

        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold transition-colors hover:text-[#E85E00] sm:mt-3.5 sm:text-[13px]"
          style={{ color: ORANGE }}
        >
          Read More
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
