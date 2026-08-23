"use client";

import React from "react";
import Image from "next/image";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

const NAVY = "#0F274A";
const GREY = "#6B7280";

const REASONS = [
  {
    title: "Expert Advisory",
    description:
      "Seasoned accounting professionals with deep knowledge of global regulations and industry best practices.",
    logo: 4,
  },
  {
    title: "Fast & Efficient Service",
    description: "Streamlined processes that ensure timely and accurate financial support.",
    logo: 21,
  },
  {
    title: "Transparent Pricing",
    description:
      "Fair, competitive rates with no hidden fees. Detailed timesheet is shared for review before raising the invoice.",
    logo: 23,
  },
  {
    title: "Always Available",
    description:
      "24/7 client support from a team that stays with you – not just through onboarding, but every step of the way.",
    logo: 6,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 sm:pt-7 lg:pt-8 pb-9 sm:pb-10 lg:pb-11">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="px-3 sm:px-8 lg:px-10">
          {/*
            Desktop: image top ≈ "Why Choose Next Ledgers?", bottom with Always Available.
            Shared grid height so the right image stretches while bottom stays aligned.
          */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 xl:gap-12">
            <div className="relative z-10 flex w-full min-w-0 flex-col">
              <div className="text-center lg:text-left">
                <h2
                  className="font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-[1.2] tracking-[-0.01em]"
                  style={{ color: NAVY }}
                >
                  Why Choose Next Ledgers?
                </h2>

                <p
                  className="mt-2 sm:mt-2.5 text-[15px] sm:text-[16px] lg:text-[17px] leading-6 sm:leading-7 max-w-[440px] mx-auto lg:mx-0"
                  style={{ color: GREY }}
                >
                  We&apos;re committed to providing exceptional accounting &amp; tax services with a
                  personal touch
                </p>
              </div>

              <div className="mt-2.5 sm:mt-3">
                {REASONS.map((reason, index) => {
                  const isLast = index === REASONS.length - 1;

                  return (
                    <div key={reason.title}>
                      <div className="flex items-start gap-3 py-1.5 sm:py-2">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0">
                          <HomeLogoImg n={reason.logo} />
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

            {/* Right image — top near heading, bottom with Always Available */}
            <div className="relative w-full self-stretch overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] h-[220px] sm:h-[260px] lg:h-auto lg:min-h-0">
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
