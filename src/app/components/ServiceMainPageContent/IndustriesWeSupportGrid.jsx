"use client";

import Image from "next/image";
import { INDUSTRIES_WE_SUPPORT } from "@/app/lib/industriesWeSupport";

const NAVY = "#0F274A";

/** Compact sizing — matches home IndustryExpertise (~80–85% viewport) */
export default function IndustriesWeSupportGrid({
  industries = INDUSTRIES_WE_SUPPORT,
}) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 xl:grid-cols-5">
      {industries.map((item) => (
        <div
          key={item.label}
          className="flex min-h-[92px] flex-col items-center justify-center overflow-hidden rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-2.5"
        >
          <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center sm:h-[72px] sm:w-[72px]">
            <Image
              src={item.src}
              alt={item.label}
              width={72}
              height={72}
              className="h-full w-full scale-[1.12] object-contain"
              unoptimized
            />
          </div>
          <p
            className="mt-1 px-0.5 text-[10px] font-bold leading-snug sm:text-[12px]"
            style={{ color: NAVY }}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
