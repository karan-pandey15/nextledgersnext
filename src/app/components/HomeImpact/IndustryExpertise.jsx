"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

/**
 * Exact industry logos extracted from the design mockup.
 * Files live in /public/images/industry-icons/
 */
const V = "v4"; // cache-bust after icon swap

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
  { label: "Crypto", src: `/images/industry-icons/crypto.png?${V}` },
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
              <span className="hidden sm:block h-px w-8 bg-[#FF6A00]" aria-hidden="true" />
              <p
                className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase"
                style={{ color: ORANGE }}
              >
                OUR INDUSTRY EXPERTISE
              </p>
              <span className="hidden sm:block h-px w-8 bg-[#FF6A00]" aria-hidden="true" />
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
                className="flex flex-col items-center justify-center text-center rounded-[14px] sm:rounded-[18px] bg-white border border-[#F0F0F0] shadow-[0_4px_18px_rgba(15,39,74,0.05)] px-2 py-4 sm:px-4 sm:py-6 min-h-[120px] sm:min-h-[148px] hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] hover:border-[#FF6A00]/25 transition-all duration-200 overflow-visible"
              >
                <div className="flex items-center justify-center w-[57px] h-[57px] sm:w-[79px] sm:h-[79px] shrink-0 overflow-visible">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={79}
                    height={79}
                    className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px] object-contain"
                    unoptimized
                  />
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
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 rounded-[14px] sm:rounded-[16px] bg-white border border-[#FF6A00]/15 px-3.5 sm:px-6 py-3 sm:py-4 hover:bg-[#FFF1E6] transition-colors duration-200 group"
          >
            <div className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] flex items-center justify-center shrink-0">
              <Image
                src={`/images/industry-icons/non-profit.png?${V}`}
                alt="Non-Profit Organizations"
                width={66}
                height={66}
                className="w-[60px] h-[60px] sm:w-[66px] sm:h-[66px] object-contain"
                unoptimized
              />
            </div>

            <p
              className="flex-1 font-semibold text-[13px] sm:text-[14px] leading-snug"
              style={{ color: NAVY }}
            >
              Non-Profit Organizations / 501 Sections Organizations
            </p>

            <span
              className="text-[#FF6A00] text-lg sm:text-xl font-medium group-hover:translate-x-0.5 transition-transform"
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
