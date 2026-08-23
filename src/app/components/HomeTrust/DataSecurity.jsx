"use client";

import React from "react";
import SecurityShieldMotion from "./SecurityShieldMotion";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const FEATURES = [
  {
    text: "Enterprise-grade security and privacy standards across our operations",
    logo: 18,
  },
  {
    text: "Privacy-first practices aligned with global data protection regulations",
    logo: 14,
  },
  {
    text: "Role-based team access with mandatory multi-factor authentication",
    logo: 11,
  },
  {
    text: "Secure, traceable file sharing with audit-ready documentation",
    logo: 13,
  },
  {
    text: "Protected office systems with real-time monitoring and backups",
    logo: 10,
  },
];

export default function DataSecurity() {
  return (
    <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
      <div>
        <span className="inline-flex items-center rounded-md bg-[#FFF1E6] text-[#FF6A00] text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5">
          DATA SECURITY
        </span>

        <h2
          className="mt-3 font-bold text-[28px] sm:mt-3.5 sm:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.02em]"
          style={{ color: NAVY }}
        >
          Your Data.
          <br />
          <span style={{ color: ORANGE }}>Our Highest Priority.</span>
        </h2>

        <p
          className="mt-2.5 max-w-[520px] text-[13px] leading-6 sm:mt-3 sm:text-[14px] sm:leading-7"
          style={{ color: GREY }}
        >
          We treat your financial information with the highest level of care. From encrypted
          workflows to controlled access, security is built into everything we do.
        </p>

        <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
          {FEATURES.map((feature) => {
            return (
              <li key={feature.text} className="flex items-center gap-3 sm:gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-[42px] sm:w-[42px]">
                  <HomeLogoImg n={feature.logo} />
                </span>
                <p
                  className="text-[13px] font-medium leading-[1.35] sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {feature.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative flex items-start justify-center overflow-hidden lg:overflow-visible">
        <SecurityShieldMotion />
      </div>
    </div>
  );
}
