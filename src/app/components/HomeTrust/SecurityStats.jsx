"use client";

import React from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

function IconShieldCheck({ className = "w-[42px] h-[42px]" }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 3.5 5.5 7.2v6.2c0 5.2 3.5 9.1 8.5 11.1 5-2 8.5-5.9 8.5-11.1V7.2L14 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m10.2 14 2.4 2.4 5.2-5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGlobe({ className = "w-[42px] h-[42px]" }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.7" />
      <ellipse cx="14" cy="14" rx="4.2" ry="9.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 14h19M5.8 9.2h16.4M5.8 18.8h16.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClock24({ className = "w-[42px] h-[42px]" }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 8.5V14l3.8 2.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <text
        x="14"
        y="20.2"
        textAnchor="middle"
        fill="currentColor"
        fontSize="5.5"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        24
      </text>
    </svg>
  );
}

function IconCloudUp({ className = "w-[42px] h-[42px]" }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M9.2 20.5h11.2A4.6 4.6 0 0 0 22 11.6a6.2 6.2 0 0 0-11.7-1.8A4.3 4.3 0 0 0 9.2 20.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M14 17.2V11.5M14 11.5l-2.4 2.4M14 11.5l2.4 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const STATS = [
  {
    value: "100%",
    label: "Commitment to Data Confidentiality",
    icon: IconShieldCheck,
  },
  {
    value: "Compliant",
    label: "With Global Data Protection Regulations",
    icon: IconGlobe,
  },
  {
    value: "24/7",
    label: "System Monitoring & Threat Detection",
    icon: IconClock24,
  },
  {
    value: "Daily",
    label: "Automated Backups & Secure Storage",
    icon: IconCloudUp,
  },
];

export default function SecurityStats() {
  return (
    <div className="my-6 rounded-[18px] bg-[#FFF7F0] px-4 py-3 sm:my-8 sm:rounded-[20px] sm:px-6 sm:py-3.5">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-0">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          const isLast = index === STATS.length - 1;

          return (
            <div
              key={stat.label}
              className={`relative flex flex-col items-center text-center px-3 sm:px-5 ${
                !isLast ? "lg:border-r lg:border-[#E5DDD4]" : ""
              }`}
            >
              <span className="text-[#FF6A00]">
                <Icon className="h-[42px] w-[42px] sm:h-12 sm:w-12" />
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
