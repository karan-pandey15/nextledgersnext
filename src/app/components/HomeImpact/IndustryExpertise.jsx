"use client";

import React from "react";
import Link from "next/link";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

/* Compact colorful industry icons — sized for ~40px display */
function IconWrap({ children, bg = "#FFF1E6" }) {
  return (
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

const INDUSTRIES = [
  {
    label: "Real Estate",
    bg: "#E8F1FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="10" y="18" width="28" height="22" rx="2" fill="#4A90D9" />
        <rect x="14" y="10" width="20" height="10" rx="1.5" fill="#6BA3E3" />
        <rect x="16" y="22" width="5" height="5" rx="0.8" fill="#fff" />
        <rect x="27" y="22" width="5" height="5" rx="0.8" fill="#fff" />
        <rect x="16" y="30" width="5" height="5" rx="0.8" fill="#fff" />
        <rect x="27" y="30" width="5" height="5" rx="0.8" fill="#fff" />
        <rect x="21" y="32" width="6" height="8" rx="0.8" fill="#F58220" />
      </svg>
    ),
  },
  {
    label: "Hospitality",
    bg: "#FFF0E8",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <ellipse cx="24" cy="36" rx="12" ry="4" fill="#E8A87C" opacity="0.45" />
        <path d="M14 28c0-8 4.5-14 10-14s10 6 10 14" fill="#F58220" />
        <circle cx="24" cy="12" r="4" fill="#FFB347" />
        <rect x="22" y="16" width="4" height="6" rx="1" fill="#E0721B" />
      </svg>
    ),
  },
  {
    label: "E-commerce",
    bg: "#EAF8F0",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path
          d="M12 14h4l3 16h16l4-12H18"
          fill="none"
          stroke="#2ECC71"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="36" r="2.4" fill="#27AE60" />
        <circle cx="32" cy="36" r="2.4" fill="#27AE60" />
        <rect x="26" y="8" width="10" height="8" rx="2" fill="#F58220" />
      </svg>
    ),
  },
  {
    label: "Healthcare",
    bg: "#FFECEC",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path
          d="M24 38s-12-7.5-12-16a7 7 0 0 1 12-4 7 7 0 0 1 12 4c0 8.5-12 16-12 16Z"
          fill="#E74C3C"
        />
        <path d="M24 18v10M19 23h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Pharmacy",
    bg: "#F3E8FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="14" y="10" width="20" height="28" rx="10" fill="#9B59B6" />
        <rect x="14" y="22" width="20" height="16" rx="8" fill="#E8D5F5" />
        <circle cx="24" cy="30" r="3" fill="#9B59B6" />
      </svg>
    ),
  },
  {
    label: "Technology",
    bg: "#E8F4FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="8" y="12" width="32" height="22" rx="3" fill="#3498DB" />
        <rect x="11" y="15" width="26" height="16" rx="1.5" fill="#D6ECFA" />
        <rect x="18" y="34" width="12" height="3" rx="1" fill="#2980B9" />
        <rect x="14" y="37" width="20" height="2.5" rx="1" fill="#2980B9" />
      </svg>
    ),
  },
  {
    label: "Manufacturing",
    bg: "#FFF4E5",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M8 36V20l10 6V20l10 6V16l12 8v12H8Z" fill="#E67E22" />
        <rect x="12" y="28" width="5" height="5" rx="0.8" fill="#fff" opacity="0.85" />
        <rect x="22" y="28" width="5" height="5" rx="0.8" fill="#fff" opacity="0.85" />
        <rect x="32" y="28" width="5" height="5" rx="0.8" fill="#fff" opacity="0.85" />
      </svg>
    ),
  },
  {
    label: "Logistics & Transportation",
    bg: "#E8F8FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="18" width="22" height="14" rx="2" fill="#1ABC9C" />
        <path d="M28 22h8l6 6v4H28V22Z" fill="#16A085" />
        <circle cx="14" cy="34" r="3.5" fill="#2C3E50" />
        <circle cx="34" cy="34" r="3.5" fill="#2C3E50" />
        <circle cx="14" cy="34" r="1.4" fill="#ECF0F1" />
        <circle cx="34" cy="34" r="1.4" fill="#ECF0F1" />
      </svg>
    ),
  },
  {
    label: "Education",
    bg: "#FFF0F5",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M8 20l16-8 16 8-16 8L8 20Z" fill="#E91E63" />
        <path d="M14 23v8c4 3 16 3 20 0v-8" fill="#F48FB1" />
        <path d="M40 20v10" stroke="#C2185B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Automotive",
    bg: "#EEF2FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path
          d="M8 28h32l-3-8c-1-3-3-5-7-5H18c-4 0-6 2-7 5l-3 8Z"
          fill="#5C6BC0"
        />
        <rect x="8" y="28" width="32" height="6" rx="2" fill="#3949AB" />
        <circle cx="15" cy="34" r="3.5" fill="#263238" />
        <circle cx="33" cy="34" r="3.5" fill="#263238" />
        <rect x="18" y="18" width="6" height="4" rx="1" fill="#9FA8DA" />
        <rect x="26" y="18" width="6" height="4" rx="1" fill="#9FA8DA" />
      </svg>
    ),
  },
  {
    label: "Construction",
    bg: "#FFF8E7",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="20" y="8" width="4" height="28" rx="1" fill="#F39C12" />
        <path d="M24 12h14l-4 4 4 4H24" fill="#E67E22" />
        <rect x="12" y="32" width="24" height="6" rx="1" fill="#D35400" />
      </svg>
    ),
  },
  {
    label: "Professional Services",
    bg: "#F0F4FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="10" y="18" width="28" height="20" rx="3" fill="#3F51B5" />
        <path d="M18 18v-3a6 6 0 0 1 12 0v3" fill="none" stroke="#3F51B5" strokeWidth="2.5" />
        <rect x="20" y="25" width="8" height="5" rx="1.5" fill="#C5CAE9" />
      </svg>
    ),
  },
  {
    label: "Consulting",
    bg: "#E8FFF6",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <circle cx="18" cy="16" r="5" fill="#00BFA5" />
        <circle cx="32" cy="16" r="5" fill="#1DE9B6" />
        <path d="M8 36c1.5-7 5-10 10-10s8.5 3 10 10" fill="#00897B" />
        <path d="M22 36c1-6 4-9 10-9s8 3 9 9" fill="#26A69A" />
      </svg>
    ),
  },
  {
    label: "Restaurants",
    bg: "#FFF5F0",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M16 10v18M13 10v8c0 3 3 4 3 4M19 10v8c0 3-3 4-3 4" stroke="#E64A19" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M30 10c4 0 6 3 6 8v10M30 10v28" stroke="#FF7043" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Law Firms",
    bg: "#F5F0FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M24 10v4M12 18h24" stroke="#7E57C2" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 18c0 8-4 12-4 12h8s-4-4-4-12M32 18c0 8 4 12 4 12h-8s4-4 4-12" fill="#9575CD" />
        <rect x="20" y="34" width="8" height="4" rx="1" fill="#5E35B1" />
        <rect x="14" y="38" width="20" height="3" rx="1" fill="#5E35B1" />
      </svg>
    ),
  },
  {
    label: "Entertainment",
    bg: "#FFF0F3",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="10" y="14" width="28" height="20" rx="3" fill="#EC407A" transform="rotate(-12 24 24)" />
        <rect x="14" y="16" width="8" height="6" rx="1" fill="#F8BBD0" transform="rotate(-12 24 24)" />
        <rect x="26" y="22" width="8" height="6" rx="1" fill="#F8BBD0" transform="rotate(-12 24 24)" />
      </svg>
    ),
  },
  {
    label: "Agriculture",
    bg: "#E8F8E8",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M24 38V22" stroke="#8D6E63" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 24c-8-2-12-8-10-14 8 2 12 8 10 14Z" fill="#66BB6A" />
        <path d="M24 28c8-2 12-8 10-14-8 2-12 8-10 14Z" fill="#43A047" />
        <circle cx="24" cy="14" r="3" fill="#FFCA28" />
      </svg>
    ),
  },
  {
    label: "Fitness & Wellness",
    bg: "#EEF7FF",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="18" width="6" height="12" rx="2" fill="#42A5F5" />
        <rect x="36" y="18" width="6" height="12" rx="2" fill="#42A5F5" />
        <rect x="12" y="20" width="5" height="8" rx="1.5" fill="#1E88E5" />
        <rect x="31" y="20" width="5" height="8" rx="1.5" fill="#1E88E5" />
        <rect x="17" y="22" width="14" height="4" rx="2" fill="#1565C0" />
      </svg>
    ),
  },
  {
    label: "Crypto",
    bg: "#FFF4E5",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="24" r="16" fill="#F7931A" />
        <text
          x="24"
          y="29"
          textAnchor="middle"
          fill="#fff"
          fontSize="18"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
        >
          ₿
        </text>
      </svg>
    ),
  },
  {
    label: "Startups & SMEs",
    bg: "#FFF3E8",
    icon: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" aria-hidden="true">
        <path d="M24 8c8 8 10 16 8 24l-8 4-8-4c-2-8 0-16 8-24Z" fill="#F58220" />
        <path d="M20 36l4 6 4-6" fill="#E0721B" />
        <circle cx="24" cy="20" r="3" fill="#FFE0B2" />
      </svg>
    ),
  },
];

export default function IndustryExpertise() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-0 pb-0">
      {/* Same pattern as GlobalPartner — white side gutters, peach content panel */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-5 sm:px-8 lg:px-10 py-8 sm:py-9 lg:py-10">
          {/* Header */}
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="hidden sm:block h-px w-8 bg-[#F58220]" aria-hidden="true" />
              <p
                className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase"
                style={{ color: ORANGE }}
              >
                OUR INDUSTRY EXPERTISE
              </p>
              <span className="hidden sm:block h-px w-8 bg-[#F58220]" aria-hidden="true" />
            </div>

            <h2
              className="mt-3 font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]"
              style={{ color: NAVY }}
            >
              Solutions Tailored for{" "}
              <span style={{ color: ORANGE }}>Every Industry</span>
            </h2>

            <p
              className="mt-3 sm:mt-4 text-[13px] sm:text-[14px] leading-6 sm:leading-7 max-w-[560px] mx-auto"
              style={{ color: GREY }}
            >
              We understand your industry and deliver specialized accounting and tax solutions
              that drive growth and ensure compliance.
            </p>
          </div>

          {/* Industry grid — 5 cols on desktop */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {INDUSTRIES.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center text-center rounded-[16px] sm:rounded-[18px] bg-white border border-[#F0F0F0] shadow-[0_4px_18px_rgba(15,39,74,0.05)] px-3 py-5 sm:px-4 sm:py-6 min-h-[132px] sm:min-h-[148px] hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] hover:border-[#F58220]/25 transition-all duration-200"
              >
                <IconWrap bg={item.bg}>{item.icon}</IconWrap>
                <p
                  className="mt-3 font-bold text-[12px] sm:text-[13px] leading-snug"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Featured bottom bar */}
          <Link
            href="/industries/crypto"
            className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4 rounded-[14px] sm:rounded-[16px] bg-white border border-[#F58220]/15 px-4 sm:px-6 py-3.5 sm:py-4 hover:bg-[#FFF1E6] transition-colors duration-200 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F7931A] flex items-center justify-center shrink-0 text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <text
                  x="12"
                  y="17"
                  textAnchor="middle"
                  fill="currentColor"
                  fontSize="16"
                  fontWeight="800"
                  fontFamily="Arial, sans-serif"
                >
                  ₿
                </text>
              </svg>
            </div>

            <p
              className="flex-1 font-semibold text-[13px] sm:text-[14px] leading-snug"
              style={{ color: NAVY }}
            >
              Crypto / Digital Assets & Blockchain Accounting
            </p>

            <span
              className="text-[#F58220] text-lg sm:text-xl font-medium group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
