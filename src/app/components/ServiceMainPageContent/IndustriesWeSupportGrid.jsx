"use client";

import Image from "next/image";
import {
  INDUSTRIES_WE_SUPPORT,
  INDUSTRIES_DISPLAY_COUNT,
} from "@/app/lib/industriesWeSupport";

const NAVY = "#0F274A";

/**
 * Normalize any industry list to home-style { label, src } and exactly 10 items.
 * - Too many → first 10
 * - Too few → pad from the canonical home list
 * - Maps `image` → `src` for older page data shapes
 */
function normalizeIndustries(list) {
  const mapped = (Array.isArray(list) ? list : [])
    .map((item) => {
      if (!item) return null;
      const label = item.label || item.title || item.name;
      const src = item.src || item.image || item.iconSrc;
      if (!label || !src) return null;
      return { label, src };
    })
    .filter(Boolean);

  const byLabel = new Set(mapped.map((i) => i.label.toLowerCase()));
  const padded = [...mapped];

  for (const fallback of INDUSTRIES_WE_SUPPORT) {
    if (padded.length >= INDUSTRIES_DISPLAY_COUNT) break;
    if (!byLabel.has(fallback.label.toLowerCase())) {
      padded.push(fallback);
      byLabel.add(fallback.label.toLowerCase());
    }
  }

  while (padded.length < INDUSTRIES_DISPLAY_COUNT) {
    const fb = INDUSTRIES_WE_SUPPORT[padded.length % INDUSTRIES_WE_SUPPORT.length];
    padded.push({ ...fb, label: `${fb.label}` });
  }

  return padded.slice(0, INDUSTRIES_DISPLAY_COUNT);
}

/**
 * Industry icon grid — same card UI / gaps as home IndustryExpertise.
 * Always renders exactly 10 items in a 5 × 2 layout on desktop.
 */
export default function IndustriesWeSupportGrid({
  industries = INDUSTRIES_WE_SUPPORT,
}) {
  const items = normalizeIndustries(industries);

  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex min-h-[96px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3"
        >
          <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center sm:h-[60px] sm:w-[60px] lg:h-[72px] lg:w-[72px]">
            <Image
              src={item.src}
              alt={item.label}
              width={72}
              height={72}
              className="h-full w-full scale-[1.1] object-contain"
              unoptimized
            />
          </div>
          <p
            className="mt-1 px-0.5 text-[10px] font-bold leading-tight sm:text-[12px]"
            style={{ color: NAVY }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
