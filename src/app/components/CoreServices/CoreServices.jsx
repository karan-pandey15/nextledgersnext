"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  Calculator,
  ClipboardList,
  Percent,
  Receipt,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

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
    icon: Calculator,
    href: "/services/bookkeeping",
  },
  {
    title: "Financial Reporting",
    line1: "Financial",
    line2: "Reporting",
    description:
      "Insightful reports and analysis to help you make informed business decisions.",
    icon: BarChart3,
    href: "/services/financial-reporting",
  },
  {
    title: "Tax Preparation & Planning",
    line1: "Tax Preparation",
    line2: "& Planning",
    description: "Stay compliant with local tax regulations and filing requirements.",
    icon: Percent,
    href: "/services/tax",
  },
  {
    title: "Payroll & HR Services",
    line1: "Payroll",
    line2: "& HR Services",
    description:
      "End-to-end payroll processing that ensures accuracy and timely payments.",
    icon: Receipt,
    href: "/services/payroll",
  },
  {
    title: "Management Reporting",
    line1: "Management",
    line2: "Reporting",
    description:
      "Clear management reports and KPI dashboards for better business decisions.",
    icon: ClipboardList,
    href: "/services/management-reporting",
  },
  {
    title: "CFO & Advisory Services",
    line1: "CFO",
    line2: "& Advisory Services",
    description:
      "Strategic financial leadership, forecasting, and advisory for sustainable growth.",
    icon: Building2,
    href: "/services/cfo-advisory",
  },
];

export default function CoreServices() {
  return (
    <section id="core-services" className="w-full bg-[#FAFAFA] pt-8 pb-9 sm:pt-9 sm:pb-10 lg:pt-10 lg:pb-11">
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

        {/* Cards — 6 in one row on large screens */}
        <div className="mt-5 sm:mt-6 grid w-full grid-cols-1 gap-3 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex h-full min-h-[210px] w-full min-w-0 flex-col items-center bg-white rounded-[14px] px-2.5 pt-[18px] pb-3 shadow-[0_2px_14px_rgba(15,39,74,0.07)] hover:shadow-[0_6px_24px_rgba(255, 106, 0,0.12)] transition-shadow duration-300"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="mb-2 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#FFF4EA]">
                    <Icon
                      className="h-7 w-7"
                      style={{ color: ORANGE }}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3
                    className="px-0.5 text-[13px] font-bold leading-[1.2] sm:text-[14px]"
                    style={{ color: NAVY }}
                  >
                    <span className="block">{service.line1}</span>
                    {service.line2 ? (
                      <span className="block">{service.line2}</span>
                    ) : null}
                  </h3>

                  <p
                    className="mt-1.5 px-0.5 text-[11px] leading-[1.35] sm:text-[12px]"
                    style={{ color: GREY }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto flex w-full justify-end pt-2 pr-0.5">
                  <span
                    className="text-[15px] leading-none transition-transform duration-300 group-hover:translate-x-0.5"
                    style={{ color: ORANGE }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-7 flex justify-center">
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
