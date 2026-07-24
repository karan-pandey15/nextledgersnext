"use client";

import React from "react";
import Image from "next/image";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const V = "v4";

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

          {/* All industry icons — Non-Profit shown last below */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-3">
            {INDUSTRIES_WE_SUPPORT_ALL.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[96px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3"
              >
                <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center sm:h-[52px] sm:w-[52px]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={52}
                    height={52}
                    className="h-[48px] w-[48px] object-contain sm:h-[52px] sm:w-[52px]"
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

          {/* Non-Profit — always visible, scrolls with section */}
          <div className="mt-4 flex w-full flex-col items-center gap-2.5 rounded-[12px] border border-[#FF6A00]/15 bg-white px-3 py-3 text-center sm:mt-5 sm:flex-row sm:items-center sm:gap-3 sm:rounded-[14px] sm:px-4 sm:py-3.5 sm:text-left">
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center sm:h-[52px] sm:w-[52px]">
              <Image
                src={`/images/industry-icons/non-profit.png?${V}`}
                alt="Non-Profit Organizations"
                width={52}
                height={52}
                className="h-[48px] w-[48px] object-contain sm:h-[52px] sm:w-[52px]"
                unoptimized
              />
            </div>

            <p
              className="w-full text-[12px] font-semibold leading-snug sm:flex-1 sm:text-[13px]"
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
