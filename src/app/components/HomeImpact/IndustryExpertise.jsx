"use client";

import React from "react";
import Image from "next/image";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const V = "v4";

const GRID_INDUSTRIES = INDUSTRIES_WE_SUPPORT_ALL.filter(
  (item) => item.label !== "Non-Profit Organizations"
);

const NON_PROFIT = INDUSTRIES_WE_SUPPORT_ALL.find(
  (item) => item.label === "Non-Profit Organizations"
);

const cardClassName =
  "flex flex-col items-center justify-start rounded-[12px] border border-[#F0F0F0] bg-white px-1 pt-2 pb-1.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[136px] sm:justify-center sm:rounded-[14px] sm:px-2.5 sm:py-3";

function IndustryCard({ item, label }) {
  return (
    <div className={cardClassName}>
      <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center sm:h-[75px] sm:w-[75px]">
        <Image
          src={item.src}
          alt={label || item.label}
          width={75}
          height={75}
          className="h-[48px] w-[48px] object-contain sm:h-[75px] sm:w-[75px]"
          unoptimized
        />
      </div>
      <p
        className="mt-1 px-0.5 text-[9px] font-bold leading-tight sm:mt-1.5 sm:text-[12px]"
        style={{ color: NAVY }}
      >
        {label || item.label}
      </p>
    </div>
  );
}

export default function IndustryExpertise() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-3 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-[720px] text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="hidden h-px w-8 bg-[#FF6A00] sm:block" aria-hidden="true" />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em] sm:text-[12px]"
                style={{ color: ORANGE }}
              >
                OUR INDUSTRY EXPERTISE
              </p>
              <span className="hidden h-px w-8 bg-[#FF6A00] sm:block" aria-hidden="true" />
            </div>

            <h2
              className="mt-2 text-[22px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[28px] lg:text-[32px]"
              style={{ color: NAVY }}
            >
              Solutions Tailored for{" "}
              <span style={{ color: ORANGE }}>Every Industry</span>
            </h2>

            <p
              className="mx-auto mt-2 max-w-[540px] text-[12px] leading-5 sm:text-[13px] sm:leading-6"
              style={{ color: GREY }}
            >
              We understand your industry and deliver specialized accounting and tax
              solutions that drive growth and ensure compliance.
            </p>
          </div>

          {/* 3 on phone (includes Non-Profit), 3 on sm, 5 on md+ */}
          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-3">
            {GRID_INDUSTRIES.map((item) => (
              <IndustryCard key={item.label} item={item} />
            ))}

            {/* Phone only — fills the empty slot after Startups & SMEs */}
            {NON_PROFIT ? (
              <div className="sm:hidden">
                <IndustryCard item={NON_PROFIT} label="Non-Profit" />
              </div>
            ) : null}
          </div>

          {/* Non-Profit strip — tablet/laptop only (unchanged) */}
          <div className="mt-5 hidden w-full items-center gap-3 rounded-[14px] border border-[#FF6A00]/15 bg-white px-4 py-3.5 text-left sm:mt-5 sm:flex">
            <div className="flex h-[75px] w-[75px] shrink-0 items-center justify-center">
              <Image
                src={`/images/industry-icons/non-profit.png?${V}`}
                alt="Non-Profit Organizations"
                width={75}
                height={75}
                className="h-[75px] w-[75px] object-contain"
                unoptimized
              />
            </div>

            <p
              className="flex-1 text-[13px] font-semibold leading-snug"
              style={{ color: NAVY }}
            >
              Non-Profit Organizations / 501 Sections Organizations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { INDUSTRIES_WE_SUPPORT_ALL as INDUSTRIES };
