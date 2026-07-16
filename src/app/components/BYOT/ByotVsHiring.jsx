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
  TrendingUp,
  Users,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const HIGHLIGHTS = [
  {
    title: "Save Up to 70%",
    desc: "Reduce operational costs without compromising quality.",
    icon: RefreshCw,
  },
  {
    title: "Scale Instantly",
    desc: "Add or remove resources as your business needs.",
    icon: TrendingUp,
  },
  {
    title: "Dedicated Experts",
    desc: "Full-time professionals exclusively working for your business.",
    icon: Users,
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
    <section className="w-full bg-white pt-[10px] pb-8 sm:pb-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-stretch gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:px-10">
        {/* Left content aligned to table height */}
        <div className="flex h-full flex-col justify-center">
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
            className="mt-3 max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
            style={{ color: GREY }}
          >
            Skip the long hiring cycle, overhead costs, and administrative
            burdens. Build your offshore finance team in 48 hours and start
            seeing results faster.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
            {HIGHLIGHTS.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex flex-col items-start">
                <Icon
                  className="mb-2 h-6 w-6"
                  style={{ color: ORANGE }}
                  strokeWidth={1.75}
                />
                <h3
                  className="text-[13px] font-bold leading-snug sm:text-[14px]"
                  style={{ color: ORANGE }}
                >
                  {title}
                </h3>
                <p
                  className="mt-1 text-[11.5px] leading-snug sm:text-[12px]"
                  style={{ color: GREY }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-column comparison table */}
        <div className="h-full overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-[0_8px_28px_rgba(15,39,74,0.08)]">
          <div className="grid h-full grid-rows-[auto_repeat(8,1fr)]">
            <div className="grid grid-cols-[1.05fr_0.95fr_1.2fr]">
              <div
                className="bg-[#E8EAED] px-2 py-2.5 text-center text-[12px] font-bold sm:text-[13px]"
                style={{ color: NAVY }}
              >
                Traditional Hiring
              </div>
              <div className="bg-white" />
              <div
                className="px-2 py-2.5 text-center text-[12px] font-bold text-white sm:text-[13px]"
                style={{ background: ORANGE }}
              >
                NextLedgers BYOT
              </div>
            </div>

            {TABLE_ROWS.map(({ traditional, label, byot, icon: Icon }) => (
              <div
                key={label}
                className="grid grid-cols-[1.05fr_0.95fr_1.2fr] items-stretch border-t border-[#EEEEEE]"
              >
                <div
                  className="flex items-center justify-center bg-[#F3F4F6] px-2 py-[2px] text-center text-[11px] leading-tight sm:text-[12px]"
                  style={{ color: "#4B5563" }}
                >
                  {traditional}
                </div>

                <div className="relative z-[1] flex items-center justify-start gap-1.5 bg-white px-2 py-[2px] shadow-[2px_0_8px_rgba(15,39,74,0.04)]">
                  <Icon
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: "#6B7280" }}
                    strokeWidth={1.6}
                  />
                  <span
                    className="text-[10px] font-semibold leading-tight sm:text-[11px]"
                    style={{ color: NAVY }}
                  >
                    {label}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between gap-1 bg-[#FFF4EA] px-2 py-[2px] text-[11px] font-semibold leading-tight sm:text-[12px]"
                  style={{ color: ORANGE }}
                >
                  <span className="flex-1 text-center">{byot}</span>
                  <span
                    className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: ORANGE }}
                  >
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
