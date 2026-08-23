"use client";

import React from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

const STATS = [
  {
    value: "100%",
    label: "Commitment to Data Confidentiality",
    logo: 18,
  },
  {
    value: "Compliant",
    label: "With Global Data Protection Regulations",
    logo: 26,
  },
  {
    value: "24/7",
    label: "System Monitoring & Threat Detection",
    logo: 6,
  },
  {
    value: "Daily",
    label: "Automated Backups & Secure Storage",
    logo: 9,
  },
];

export default function SecurityStats() {
  return (
    <div className="my-4 rounded-[18px] bg-[#FFF7F0] px-4 py-3 sm:my-5 sm:rounded-[20px] sm:px-6 sm:py-3.5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
        {STATS.map((stat, index) => {
          const isLast = index === STATS.length - 1;

          return (
            <div
              key={stat.label}
              className={`relative flex flex-col items-center text-center px-3 sm:px-5 ${
                !isLast ? "lg:border-r lg:border-[#E5DDD4]" : ""
              }`}
            >
              <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center sm:h-12 sm:w-12">
                <HomeLogoImg n={stat.logo} />
              </span>

              <p
                className="mt-1.5 font-bold text-[22px] sm:mt-2 sm:text-[26px] lg:text-[28px] leading-none tracking-[-0.02em]"
                style={{ color: NAVY }}
              >
                {stat.value}
              </p>

              <p
                className="mt-1 max-w-[160px] text-[11px] font-semibold leading-[1.35] sm:text-[12px]"
                style={{ color: NAVY }}
              >
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
