"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

/**
 * Exact industry logos extracted from the design mockup.
 * Files live in /public/images/industry-icons/
 */
const V = "v3"; // cache-bust after re-crop

const INDUSTRIES = [
  { label: "Real Estate", src: `/images/industry-icons/real-estate.png?${V}` },
  { label: "Hospitality", src: `/images/industry-icons/hospitality.png?${V}` },
  { label: "E-commerce", src: `/images/industry-icons/e-commerce.png?${V}` },
  { label: "Healthcare", src: `/images/industry-icons/healthcare.png?${V}` },
  { label: "Pharmacy", src: `/images/industry-icons/pharmacy.png?${V}` },
  { label: "Technology", src: `/images/industry-icons/technology.png?${V}` },
  { label: "Manufacturing", src: `/images/industry-icons/manufacturing.png?${V}` },
  {
    label: "Logistics & Transportation",
    src: `/images/industry-icons/logistics.png?${V}`,
  },
  { label: "Education", src: `/images/industry-icons/education.png?${V}` },
  { label: "Automotive", src: `/images/industry-icons/automotive.png?${V}` },
  { label: "Construction", src: `/images/industry-icons/construction.png?${V}` },
  {
    label: "Professional Services",
    src: `/images/industry-icons/professional-services.png?${V}`,
  },
  { label: "Consulting", src: `/images/industry-icons/consulting.png?${V}` },
  { label: "Restaurants", src: `/images/industry-icons/restaurants.png?${V}` },
  { label: "Law Firms", src: `/images/industry-icons/law-firms.png?${V}` },
  { label: "Entertainment", src: `/images/industry-icons/entertainment.png?${V}` },
  { label: "Agriculture", src: `/images/industry-icons/agriculture.png?${V}` },
  { label: "Fitness & Wellness", src: `/images/industry-icons/fitness.png?${V}` },
  {
    label: "Crypto",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-11 sm:h-11" aria-hidden="true">
        <circle cx="24" cy="24" r="18" fill="#F7931A" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill="#fff"
          fontSize="20"
          fontWeight="800"
          fontFamily="Arial, Helvetica, sans-serif"
        >
          ₿
        </text>
      </svg>
    ),
  },
  { label: "Startups & SMEs", src: `/images/industry-icons/startups.png?${V}` },
];

export default function IndustryExpertise() {
  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-3 sm:px-8 lg:px-10 py-8 sm:py-9 lg:py-10">
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

          {/* Industry grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {INDUSTRIES.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center text-center rounded-[14px] sm:rounded-[18px] bg-white border border-[#F0F0F0] shadow-[0_4px_18px_rgba(15,39,74,0.05)] px-2 py-4 sm:px-4 sm:py-6 min-h-[120px] sm:min-h-[148px] hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] hover:border-[#F58220]/25 transition-all duration-200 overflow-visible"
              >
                {/* Full round bg + complete logo — no clipping */}
                <div className="flex items-center justify-center w-[52px] h-[52px] sm:w-[72px] sm:h-[72px] rounded-full bg-[#FFF1E6] shrink-0 overflow-visible">
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={72}
                      height={72}
                      className="w-[44px] h-[44px] sm:w-[64px] sm:h-[64px] object-contain"
                      unoptimized
                    />
                  )}
                </div>
                <p
                  className="mt-2 sm:mt-3 font-bold text-[10px] sm:text-[13px] leading-snug px-0.5"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Featured bottom bar */}
          <Link
            href="/industries/non-profit"
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 rounded-[14px] sm:rounded-[16px] bg-white border border-[#F58220]/15 px-3.5 sm:px-6 py-3 sm:py-4 hover:bg-[#FFF1E6] transition-colors duration-200 group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFF1E6] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <circle cx="9" cy="7.5" r="3.2" fill="#F58220" />
                <path
                  d="M2.5 19.5c0-4.1 2.9-7 6.5-7s6.5 2.9 6.5 7"
                  fill="#F58220"
                />
                <circle cx="16.5" cy="8" r="2.6" fill="#E0721B" />
                <path
                  d="M12.2 19.5c.4-3.2 2.6-5.4 5.3-5.6 2.6.2 4.5 2.3 4.5 5.6"
                  fill="#FB923C"
                />
              </svg>
            </div>

            <p
              className="flex-1 font-semibold text-[13px] sm:text-[14px] leading-snug"
              style={{ color: NAVY }}
            >
              Non-Profit Organizations / 501 Sections Organizations
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
