"use client";

import React from "react";
import Image from "next/image";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ExpertIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...iconBase}>
      <circle cx="9" cy="8.5" r="2.4" />
      <circle cx="15.5" cy="9" r="2" />
      <path d="M4.8 17.2c.5-2.3 2.2-3.6 4.2-3.6s3.7 1.3 4.2 3.6" />
      <path d="M13.2 17.2c.4-1.7 1.7-2.8 3.2-2.8 1 0 1.9.4 2.5 1.2" />
    </svg>
  );
}

function FastIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...iconBase}>
      <path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12L13 3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PricingIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...iconBase}>
      <path d="M12 7.5v9" />
      <path d="M10 9.4c.5-.8 1.2-1.1 2-1.1 1.2 0 2 .6 2 1.5s-.8 1.4-2 1.4-2 .5-2 1.5.9 1.6 2.1 1.6c.8 0 1.5-.3 2-1" />
    </svg>
  );
}

function AlwaysAvailableIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <text
        x="12"
        y="13.2"
        textAnchor="middle"
        fontSize="7.2"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="system-ui, sans-serif"
      >
        24/7
      </text>
    </svg>
  );
}

const REASONS = [
  {
    title: "Expert Advisory",
    description:
      "Seasoned accounting professionals with deep knowledge of global regulations and industry best practices.",
    icon: ExpertIcon,
  },
  {
    title: "Fast & Efficient Service",
    description: "Streamlined processes that ensure timely and accurate financial support.",
    icon: FastIcon,
  },
  {
    title: "Transparent Pricing",
    description:
      "Fair, competitive rates with no hidden fees. Detailed timesheet is shared for review before raising the invoice.",
    icon: PricingIcon,
  },
  {
    title: "Always Available",
    description:
      "24/7 client support from a team that stays with you – not just through onboarding, but every step of the way.",
    icon: AlwaysAvailableIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 sm:pt-7 lg:pt-8 pb-9 sm:pb-10 lg:pb-11">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        {/* Same horizontal inset as GlobalPartner peach card so image width/align matches */}
        <div className="px-3 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-end">
            {/* Left content */}
            <div className="relative z-10 w-full">
              <div className="text-center">
                <h2
                  className="font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.2] tracking-[-0.01em]"
                  style={{ color: NAVY }}
                >
                  Why Choose Next Ledgers?
                </h2>

                <p
                  className="mt-2 sm:mt-2.5 text-[15px] sm:text-[16px] lg:text-[17px] leading-6 sm:leading-7 max-w-[440px] mx-auto"
                  style={{ color: GREY }}
                >
                  We&apos;re committed to providing exceptional accounting &amp; tax services with a
                  personal touch
                </p>
              </div>

              <div className="mt-2.5 sm:mt-3">
                {REASONS.map((reason, index) => {
                  const Icon = reason.icon;
                  const isLast = index === REASONS.length - 1;

                  return (
                    <div key={reason.title}>
                      <div className="flex items-start gap-3 py-1.5 sm:py-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF6A00] flex items-center justify-center shrink-0 text-white shadow-[0_6px_16px_rgba(255, 106, 0,0.25)]">
                          <Icon className="w-8 h-8 sm:w-9 sm:h-9" />
                        </div>

                        <div className="min-w-0">
                          <h3
                            className="font-bold text-[14px] sm:text-[15px] leading-snug"
                            style={{ color: NAVY }}
                          >
                            {reason.title}
                          </h3>
                          <p
                            className="mt-0.5 text-[12px] sm:text-[13px] leading-[1.4] max-w-[480px]"
                            style={{ color: GREY }}
                          >
                            {reason.description}
                          </p>
                        </div>
                      </div>

                      {!isLast && <div className="h-px w-full bg-[#E8E8E8]" aria-hidden="true" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right image — bottom-aligned with Always Available text; size unchanged */}
            <div className="relative w-full max-w-[520px] lg:max-w-none lg:justify-self-end h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)]">
              <Image
                src="/images/DSC09669.JPG"
                alt="Next Ledgers professional working at multi-monitor workstation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
