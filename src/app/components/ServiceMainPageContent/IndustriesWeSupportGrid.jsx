"use client";

import Image from "next/image";
import { INDUSTRIES_WE_SUPPORT } from "@/app/lib/industriesWeSupport";

const NAVY = "#0F274A";

/** Matches home IndustryExpertise icon/card sizing */
export default function IndustriesWeSupportGrid({
  industries = INDUSTRIES_WE_SUPPORT,
}) {
  return (
    <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-5 lg:gap-5">
      {industries.map((item) => (
        <div
          key={item.label}
          className="flex min-h-[118px] flex-col items-center justify-center overflow-hidden rounded-[14px] border border-[#F0F0F0] bg-white px-2 py-3 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[146px] sm:rounded-[18px] sm:px-3 sm:py-4"
        >
          <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center sm:h-[104px] sm:w-[104px]">
            <Image
              src={item.src}
              alt={item.label}
              width={104}
              height={104}
              className="h-full w-full scale-[1.12] object-contain"
              unoptimized
            />
          </div>
          <p
            className="mt-1 px-0.5 text-[10px] font-bold leading-snug sm:mt-1.5 sm:text-[13px]"
            style={{ color: NAVY }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
