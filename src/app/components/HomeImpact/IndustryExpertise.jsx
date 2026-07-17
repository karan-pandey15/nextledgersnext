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
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="mx-auto max-w-[1440px] px-3 sm:px-6 lg:px-10">
        <div className="flex max-h-[80vh] flex-col overflow-hidden bg-[#FFF7F0] px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4">
          {/* Header */}
          <div className="mx-auto max-w-[720px] shrink-0 text-center">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="hidden h-px w-8 bg-[#FF6A00] sm:block" aria-hidden="true" />
              <p
                className="text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]"
                style={{ color: ORANGE }}
              >
                OUR INDUSTRY EXPERTISE
              </p>
              <span className="hidden h-px w-8 bg-[#FF6A00] sm:block" aria-hidden="true" />
            </div>

            <h2
              className="mt-1.5 text-[20px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[24px] lg:text-[28px]"
              style={{ color: NAVY }}
            >
              Solutions Tailored for{" "}
              <span style={{ color: ORANGE }}>Every Industry</span>
            </h2>

            <p
              className="mx-auto mt-1.5 max-w-[520px] text-[11px] leading-4 sm:text-[12px] sm:leading-5"
              style={{ color: GREY }}
            >
              We understand your industry and deliver specialized accounting and tax
              solutions that drive growth and ensure compliance.
            </p>
          </div>

          {/* Industry grid — fills remaining space within 80vh */}
          <div className="mt-3 grid min-h-0 flex-1 grid-cols-2 content-stretch gap-2 sm:mt-3.5 sm:grid-cols-3 sm:gap-2.5 md:grid-cols-4 xl:grid-cols-5">
            {INDUSTRIES.map((item) => (
              <div
                key={item.label}
                className="flex min-h-0 flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#F0F0F0] bg-white px-1.5 py-1.5 text-center shadow-[0_2px_10px_rgba(15,39,74,0.04)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_6px_18px_rgba(15,39,74,0.07)] sm:rounded-[12px] sm:px-2 sm:py-2"
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center sm:h-[62px] sm:w-[62px]">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={62}
                    height={62}
                    className="h-full w-full scale-[1.1] object-contain"
                    unoptimized
                  />
                </div>
                <p
                  className="mt-1 px-0.5 text-[9px] font-bold leading-tight sm:text-[11px]"
                  style={{ color: NAVY }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Featured bottom bar — not clickable */}
          <div className="mt-3 flex shrink-0 flex-col items-start gap-2 rounded-[10px] border border-[#FF6A00]/15 bg-white px-3 py-2 sm:mt-3.5 sm:flex-row sm:items-center sm:gap-3 sm:rounded-[12px] sm:px-4 sm:py-2.5">
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
              className="flex-1 text-[11px] font-semibold leading-snug sm:text-[13px]"
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
