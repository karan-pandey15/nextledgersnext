"use client";

import React from "react";
import Link from "next/link";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { homeLogoSrc } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

/** Keep in sync with GLOBAL_SERVICE_LINKS in header/navigationData.js */
const SERVICES = [
  {
    title: "Accounting & Bookkeeping",
    line1: "Accounting",
    line2: "& Bookkeeping",
    description: "Accurate and timely bookkeeping to keep your finances organized.",
    icon: homeLogoSrc(23),
    href: "/services/bookkeeping",
  },
  {
    title: "Financial Reporting",
    line1: "Financial",
    line2: "Reporting",
    description:
      "Insightful reports and analysis to help you make informed business decisions.",
    icon: homeLogoSrc(17),
    href: "/services/financial-reporting",
  },
  {
    title: "Tax Preparation & Planning",
    line1: "Tax Preparation",
    line2: "& Planning",
    description: "Stay compliant with local tax regulations and filing requirements.",
    icon: homeLogoSrc(13),
    href: "/services/tax",
  },
  {
    title: "Payroll & HR Services",
    line1: "Payroll",
    line2: "& HR Services",
    description:
      "End-to-end payroll processing that ensures accuracy and timely payments.",
    icon: homeLogoSrc(4),
    href: "/services/payroll",
  },
  {
    title: "Management Reporting",
    line1: "Management",
    line2: "Reporting",
    description:
      "Clear management reports and KPI dashboards for better business decisions.",
    icon: homeLogoSrc(12),
    href: "/services/management-reporting",
  },
  {
    title: "CFO & Advisory Services",
    line1: "CFO",
    line2: "& Advisory Services",
    description:
      "Strategic financial leadership, forecasting, and advisory for sustainable growth.",
    icon: homeLogoSrc(20),
    href: "/services/cfo-advisory",
  },
];

export default function CoreServices() {
  return (
    <section id="core-services" className="w-full bg-[#FAFAFA] pt-8 pb-6 sm:pt-9 sm:pb-10 lg:pt-10 lg:pb-11">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-[820px] mx-auto">
          <span
            className="inline-flex items-center rounded-full border border-[#FF6A00]/35 bg-[#FFF7F0] text-[#FF6A00] text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase px-[18px] py-[4px]"
            style={{ color: ORANGE }}
          >
            Our Core Services
          </span>

          <h2
            className="mt-3 font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.08] tracking-[-0.01em]"
            style={{ color: NAVY }}
          >
            Comprehensive Solutions{" "}
            <span style={{ color: ORANGE }}>for Every Business</span>
          </h2>

          <p
            className="mt-1.5 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] max-w-[700px] mx-auto"
            style={{ color: GREY }}
          >
            From day-to-day bookkeeping to strategic advisory, we deliver accurate, efficient, and
            reliable solutions tailored to your business needs.
          </p>
        </div>

        {/* Cards — 2 on phone, 3 on tablet, 6 on large screens */}
        <div className="mt-5 sm:mt-6 grid w-full grid-cols-2 gap-2.5 auto-rows-fr sm:gap-3 md:grid-cols-3 lg:grid-cols-6">
          {SERVICES.map((service) => {
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex h-full w-full min-w-0 flex-col items-center bg-white rounded-[14px] px-2.5 pt-3.5 pb-3 shadow-[0_2px_14px_rgba(15,39,74,0.07)] hover:shadow-[0_6px_24px_rgba(255,106,0,0.12)] transition-shadow duration-300 sm:px-3 sm:pt-4 sm:pb-3.5"
              >
                <span
                  className="absolute top-2 right-2 z-10 text-[14px] leading-none transition-transform duration-300 group-hover:translate-x-0.5 sm:top-2.5 sm:right-2.5 sm:text-[15px]"
                  style={{ color: ORANGE }}
                  aria-hidden="true"
                >
                  →
                </span>

                <div className="flex w-full flex-1 flex-col items-center text-center">
                  <div className="mb-1.5 flex h-10 w-10 items-center justify-center sm:mb-2 sm:h-12 sm:w-12">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="block h-full w-full object-contain"
                    />
                  </div>

                  <h3
                    className="min-h-[2.4em] px-0.5 text-[12px] font-bold leading-[1.2] sm:text-[13px]"
                    style={{ color: NAVY }}
                  >
                    <span className="block">{service.line1}</span>
                    {service.line2 ? (
                      <span className="block">{service.line2}</span>
                    ) : null}
                  </h3>

                  <p
                    className="mt-1 min-h-[4.05em] px-0.5 text-[10px] leading-[1.35] sm:mt-1.5 sm:text-[11px]"
                    style={{ color: GREY }}
                  >
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA — equal top/bottom gap on phone */}
        <div className="mt-6 flex justify-center sm:mt-7">
          <Link
            href="/services"
            className="cta-fill-orange inline-flex items-center gap-[6px] rounded-full px-[26px] py-2 text-[13px] font-semibold sm:text-[14px]"
          >
            Explore All Services
            <span className="text-[15px] leading-none" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
