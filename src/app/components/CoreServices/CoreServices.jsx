"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Calculator,
  Headset,
  Percent,
  Receipt,
  RefreshCw,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const SERVICES = [
  {
    title: "Bookkeeping Services",
    description: "Accurate and timely bookkeeping to keep your finances organized.",
    icon: Calculator,
    href: "/services/bookkeeping",
  },
  {
    title: "Tax Compliance & Filing",
    description: "Stay compliant with local tax regulations and filing requirements.",
    icon: Percent,
    href: "/services/tax",
  },
  {
    title: "Payroll Management",
    description: "End-to-end payroll processing that ensures accuracy and timely payments.",
    icon: Receipt,
    href: "/services/payroll",
  },
  {
    title: "Accounts & Reconciliations",
    description: "Bank, credit card and account reconciliations for accurate financial records.",
    icon: RefreshCw,
    href: "/services/accounts",
  },
  {
    title: "Financial Reporting & Analysis",
    description: "Insightful reports and analysis to help you make informed business decisions.",
    icon: BarChart3,
    href: "/services/reporting",
  },
  {
    title: "Virtual Staffing Solutions",
    description: "Skilled remote professionals to extend your team and boost productivity.",
    icon: Headset,
    href: "/services/virtual-staffing",
  },
];

function splitServiceTitle(title) {
  const spaceIndex = title.indexOf(" ");
  if (spaceIndex === -1) {
    return { line1: title, line2: "" };
  }

  return {
    line1: title.slice(0, spaceIndex),
    line2: title.slice(spaceIndex + 1),
  };
}

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

        {/* Cards — full container width, equal columns & equal height */}
        <div className="mt-5 sm:mt-6 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 auto-rows-fr">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const { line1, line2 } = splitServiceTitle(service.title);

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group flex h-full min-h-[210px] w-full min-w-0 flex-col items-center bg-white rounded-[14px] px-3 pt-[18px] pb-3 shadow-[0_2px_14px_rgba(15,39,74,0.07)] hover:shadow-[0_6px_24px_rgba(255, 106, 0,0.12)] transition-shadow duration-300"
              >
                <div className="flex w-full flex-col items-center text-center">
                  <div className="w-[52px] h-[52px] rounded-full bg-[#FFF7F0] flex items-center justify-center mb-2">
                    <Icon
                      className="w-[22px] h-[22px]"
                      style={{ color: ORANGE }}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3
                    className="font-bold text-[14px] sm:text-[15px] leading-[1.2] px-1"
                    style={{ color: NAVY }}
                  >
                    <span className="block">{line1}</span>
                    {line2 && <span className="block">{line2}</span>}
                  </h3>

                  <p
                    className="mt-1.5 text-[12px] sm:text-[13px] leading-[1.35] px-1"
                    style={{ color: GREY }}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto w-full flex justify-end pt-2 pr-0.5">
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
