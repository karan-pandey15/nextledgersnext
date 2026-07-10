"use client";

import React from "react";
import Image from "next/image";
import { Users, Globe2, UserCheck, BarChart3, RefreshCw, Clock3 } from "lucide-react";

const ORANGE = "#F58220";
const NAVY = "#0F274A";

const STATS = [
  {
    value: "105+",
    label: "Clients Across Globally",
    icon: Users,
  },
  {
    value: "9+",
    label: "Years in Global Accounting Outsourcing",
    icon: Globe2,
  },
  {
    value: "75+",
    label: "Qualified Finance Professionals",
    icon: UserCheck,
  },
  {
    value: "70%",
    label: "of Business via Referrals",
    icon: BarChart3,
  },
  {
    value: "95%+",
    label: "Client Retention Rate",
    icon: RefreshCw,
  },
  {
    value: "36+ hrs",
    label: "Onboarding Process",
    icon: Clock3,
  },
];

export default function ResultsStats() {
  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-5 sm:px-8 lg:px-10 pt-0 pb-8 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {/* Left — heading + stats card */}
            <div className="flex flex-col min-w-0">
              {/* Eyebrow: NUMBERS THAT (navy) + MATTER (orange) */}
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-7 sm:w-9 bg-[#F58220] shrink-0" aria-hidden="true" />
                <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.18em] uppercase">
                  <span style={{ color: NAVY }}>NUMBERS THAT </span>
                  <span style={{ color: ORANGE }}>MATTER</span>
                </p>
                <span className="h-px w-7 sm:w-9 bg-[#F58220] shrink-0" aria-hidden="true" />
              </div>

              <h2
                className="mt-3 sm:mt-4 font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em]"
                style={{ color: NAVY }}
              >
                Results That{" "}
                <span style={{ color: ORANGE }}>Speak for Themselves</span>
              </h2>

              {/* White stats card with H + V dividers */}
              <div className="mt-6 sm:mt-8 flex-1 rounded-[18px] sm:rounded-[20px] bg-white shadow-[0_8px_30px_rgba(15,39,74,0.06)] p-3 sm:p-4 lg:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3">
                  {STATS.map((stat, index) => {
                    const Icon = stat.icon;
                    const col = index % 3;
                    const isLastRow = index >= 3;
                    // On mobile 2-col: col = index % 2, last row starts at index >= 4
                    const mobileCol = index % 2;
                    const mobileLastRow = index >= 4;

                    return (
                      <div
                        key={stat.label}
                        className="relative flex flex-col items-center justify-center text-center px-3 py-5 sm:px-4 sm:py-6 lg:py-7"
                      >
                        {/* Vertical divider — desktop 3-col */}
                        {col < 2 && (
                          <span
                            className="hidden sm:block absolute right-0 top-4 bottom-4 w-px bg-[#E8E8E8]"
                            aria-hidden="true"
                          />
                        )}
                        {/* Vertical divider — mobile 2-col */}
                        {mobileCol === 0 && (
                          <span
                            className="sm:hidden absolute right-0 top-4 bottom-4 w-px bg-[#E8E8E8]"
                            aria-hidden="true"
                          />
                        )}
                        {/* Horizontal divider — desktop */}
                        {!isLastRow && (
                          <span
                            className="hidden sm:block absolute left-4 right-4 bottom-0 h-px bg-[#E8E8E8]"
                            aria-hidden="true"
                          />
                        )}
                        {/* Horizontal divider — mobile */}
                        {!mobileLastRow && (
                          <span
                            className="sm:hidden absolute left-3 right-3 bottom-0 h-px bg-[#E8E8E8]"
                            aria-hidden="true"
                          />
                        )}

                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFE8D4] flex items-center justify-center text-[#F58220]">
                          <Icon className="w-[18px] h-[18px] sm:w-5 sm:h-5" strokeWidth={1.8} />
                        </div>

                        <p
                          className="mt-2.5 sm:mt-3 font-bold text-[24px] sm:text-[28px] lg:text-[30px] leading-none tracking-[-0.02em]"
                          style={{ color: ORANGE }}
                        >
                          {stat.value}
                        </p>

                        <p
                          className="mt-1.5 text-[11px] sm:text-[12px] leading-[1.35] max-w-[130px]"
                          style={{ color: NAVY }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — office image (matches left column height) */}
            <div className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)]">
              <Image
                src="/images/DSC09794.JPG"
                alt="Next Ledgers modern office lounge"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
