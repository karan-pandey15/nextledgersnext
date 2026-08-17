"use client";

import {
  Briefcase,
  Building2,
  Check,
  ClipboardList,
  Clock3,
  DollarSign,
  Gauge,
  GraduationCap,
  RefreshCw,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

/** Bars only — no trend arrow */
function IconScaleBars({ className, strokeWidth: _strokeWidth, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      aria-hidden
    >
      <rect x="2.5" y="14" width="3.5" height="7" rx="1" fill="#FFD2B0" />
      <rect x="7.5" y="10.5" width="3.5" height="10.5" rx="1" fill="#FFB07A" />
      <rect x="12.5" y="7" width="3.5" height="14" rx="1" fill="#FF8A3D" />
      <rect x="17.5" y="3.5" width="3.5" height="17.5" rx="1" fill={ORANGE} />
    </svg>
  );
}

const HIGHLIGHTS = [
  {
    title: "Save Up to 70%",
    desc: "Reduce operational costs without compromising quality.",
    icon: RefreshCw,
  },
  {
    title: "Scale Instantly",
    desc: "Add or remove resources as your business needs.",
    icon: IconScaleBars,
  },
  {
    title: "Dedicated Experts",
    desc: "Full-time professionals exclusively working for your business.",
    icon: UserCheck,
  },
  {
    title: "No Hidden Costs",
    desc: "Transparent pricing with no recruitment or overhead fees.",
    icon: ShieldCheck,
  },
];

const TABLE_ROWS = [
  {
    traditional: "3 - 6 Months",
    label: "Hiring Time",
    byot: "48 Hours",
    icon: Clock3,
  },
  {
    traditional: "High Recruitment Fees",
    label: "Hiring Cost",
    byot: "No Hiring Cost",
    icon: DollarSign,
  },
  {
    traditional: "Employee Benefits",
    label: "Benefits",
    byot: "No Benefits",
    icon: Briefcase,
  },
  {
    traditional: "Office Space & Equipment",
    label: "Infrastructure",
    byot: "No Infrastructure",
    icon: Building2,
  },
  {
    traditional: "Training & Onboarding",
    label: "Training",
    byot: "Ready to Work Experts",
    icon: GraduationCap,
  },
  {
    traditional: "Payroll Management",
    label: "Payroll",
    byot: "We Handle Everything",
    icon: ClipboardList,
  },
  {
    traditional: "High Overhead",
    label: "Overhead Costs",
    byot: "Low Overhead",
    icon: Gauge,
  },
  {
    traditional: "Limited Flexibility",
    label: "Scalability",
    byot: "Scale Up or Down Anytime",
    icon: SlidersHorizontal,
  },
];

export default function ByotVsHiring() {
  return (
    <section className="w-full bg-white pt-[10px] pb-8 sm:pb-10 lg:pb-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 xl:px-10">
        {/* Left: heading, copy, 2×2 cards */}
        <div className="flex flex-col">
          <h2
            className="text-[26px] font-bold leading-[1.15] sm:text-[32px] lg:text-[34px]"
            style={{ color: NAVY }}
          >
            BYOT vs Traditional Hiring.
          </h2>
          <p
            className="mt-1 text-[22px] font-bold leading-tight sm:text-[26px] lg:text-[28px]"
            style={{ color: ORANGE }}
          >
            The Smarter Choice for Growth.
          </p>

          <p
            className="mt-3 max-w-xl text-[14px] leading-relaxed sm:mt-4 sm:text-[15px]"
            style={{ color: GREY }}
          >
            Skip the long hiring cycle, overhead costs, and administrative
            burdens. Build your offshore finance team in 48 hours and start
            seeing results faster.
          </p>

          {/* 2 × 2 feature cards */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-4">
            {HIGHLIGHTS.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col rounded-[14px] border border-[#F0E6DC] bg-[#FFFBF8] px-4 py-4 sm:rounded-[16px] sm:px-5 sm:py-5"
              >
                <Icon
                  className="mb-2.5 h-6 w-6 sm:h-7 sm:w-7"
                  style={{ color: ORANGE }}
                  strokeWidth={1.75}
                />
                <h3
                  className="text-[14px] font-bold leading-snug sm:text-[15px]"
                  style={{ color: ORANGE }}
                >
                  {title}
                </h3>
                <p
                  className="mt-1.5 text-[12px] leading-snug sm:text-[13px]"
                  style={{ color: GREY }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: comparison table */}
        <div className="w-full overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:rounded-[18px]">
          <div className="w-full min-w-0 overflow-x-auto">
            <div className="w-full min-w-0 sm:min-w-[520px]">
              {/* Header — equal left/right columns */}
              <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)_minmax(0,1.05fr)] sm:grid-cols-[1fr_0.95fr_1fr]">
                <div
                  className="flex items-center justify-center bg-[#C5CAD3] px-1.5 py-3 text-center text-[11px] font-extrabold leading-tight sm:px-4 sm:py-[28.5px] sm:text-[15px] lg:text-[16px]"
                  style={{ color: NAVY }}
                >
                  Traditional Hiring
                </div>
                <div className="bg-white" />
                <div
                  className="flex items-center justify-center px-1.5 py-3 text-center text-[11px] font-extrabold leading-tight text-white sm:px-4 sm:py-[28.5px] sm:text-[15px] lg:text-[16px]"
                  style={{ background: ORANGE }}
                >
                  NextLedgers BYOT
                </div>
              </div>

              {/* Rows */}
              {TABLE_ROWS.map(({ traditional, label, byot, icon: Icon }) => (
                <div
                  key={label}
                  className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)_minmax(0,1.05fr)] items-stretch border-t border-[#EEEEEE] sm:grid-cols-[1fr_0.95fr_1fr]"
                >
                  <div
                    className="flex items-center justify-center bg-[#D8DCE3] px-1.5 py-2 text-center text-[9px] font-semibold leading-snug sm:px-4 sm:py-3.5 sm:text-[12.5px]"
                    style={{ color: NAVY }}
                  >
                    {traditional}
                  </div>

                  <div className="relative z-[1] flex items-center justify-center gap-0.5 bg-white px-0.5 py-2 shadow-[2px_0_8px_rgba(15,39,74,0.04)] sm:gap-2 sm:px-3 sm:py-3.5">
                    <Icon
                      className="hidden h-4 w-4 shrink-0 sm:block"
                      style={{ color: "#6B7280" }}
                      strokeWidth={1.6}
                    />
                    <span
                      className="text-center text-[9px] font-semibold leading-tight sm:text-left sm:text-[12px]"
                      style={{ color: NAVY }}
                    >
                      {label}
                    </span>
                  </div>

                  {/* Equal side padding; checkmark absolute so text stays truly centered */}
                  <div
                    className="relative flex items-center justify-center bg-[#FFF4EA] px-1 py-2 sm:px-4 sm:py-3.5"
                    style={{ color: ORANGE }}
                  >
                    <span className="px-3.5 text-center text-[9px] font-semibold leading-snug sm:px-7 sm:text-[12.5px]">
                      {byot}
                    </span>
                    <span
                      className="absolute right-1 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-white sm:right-4 sm:h-5 sm:w-5"
                      style={{ background: ORANGE }}
                    >
                      <Check className="h-2 w-2 sm:h-3 sm:w-3" strokeWidth={3} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
