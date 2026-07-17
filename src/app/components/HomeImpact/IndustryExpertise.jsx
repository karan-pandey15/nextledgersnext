"use client";

import React from "react";
import Image from "next/image";
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
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-3 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          {/* Header */}
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

          {/* Industry grid — flows naturally on every screen size */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 xl:grid-cols-5">
            {INDUSTRIES.map((item) => (
              <div
                key={item.label}
                className="flex min-h-[96px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center sm:h-[60px] sm:w-[60px] lg:h-[72px] lg:w-[72px]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={72}
                    height={72}
                    className="h-full w-full scale-[1.1] object-contain"
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
