"use client";

import {
  Check,
  Clock3,
  DollarSign,
  GraduationCap,
  Building2,
  HeartHandshake,
  RefreshCw,
  Scaling,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
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
    icon: HeartHandshake,
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
    icon: Wallet,
  },
  {
    traditional: "High Overhead",
    label: "Overhead Costs",
    byot: "Low Overhead",
    icon: DollarSign,
  },
  {
    traditional: "Limited Flexibility",
    label: "Scalability",
    byot: "Scale Up or Down Anytime",
    icon: Scaling,
  },
];

export default function ByotVsHiring() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <h2
            className="text-[26px] font-bold leading-tight sm:text-[32px]"
            style={{ color: NAVY }}
          >
            BYOT vs Traditional Hiring.
          </h2>
          <p
            className="mt-1 text-[22px] font-bold sm:text-[26px]"
            style={{ color: ORANGE }}
          >
            The Smarter Choice for Growth.
          </p>
          <p
            className="mt-3 max-w-lg text-[14px] leading-relaxed"
            style={{ color: GREY }}
          >
            Skip the long hiring cycle, overhead costs, and administrative
            burdens. Build your offshore finance team in 48 hours and start
            seeing results faster.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#FFF4EA", color: ORANGE }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[14px] font-bold" style={{ color: NAVY }}>
                    {title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-snug" style={{ color: GREY }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#E8ECF0] bg-white shadow-[0_10px_32px_rgba(15,39,74,0.08)]">
          <div className="grid grid-cols-[1fr_auto_1fr]">
            <div className="bg-[#F3F4F6] px-3 py-3 text-center text-[12px] font-bold sm:px-4 sm:text-[13px]" style={{ color: NAVY }}>
              Traditional Hiring
            </div>
            <div className="w-16 bg-white sm:w-24" />
            <div
              className="px-3 py-3 text-center text-[12px] font-bold text-white sm:px-4 sm:text-[13px]"
              style={{ background: ORANGE }}
            >
              NextLedgers BYOT
            </div>
          </div>

          {TABLE_ROWS.map(({ traditional, label, byot, icon: Icon }, index) => (
            <div
              key={label}
              className={`grid grid-cols-[1fr_auto_1fr] items-center border-t border-[#F0F0F0] ${
                index % 2 === 1 ? "bg-[#FFF9F5]" : "bg-white"
              }`}
            >
              <div
                className="px-3 py-3 text-center text-[11px] sm:px-4 sm:text-[12.5px]"
                style={{ color: GREY }}
              >
                {traditional}
              </div>
              <div className="flex w-16 flex-col items-center gap-0.5 px-1 py-2 sm:w-24">
                <Icon className="h-4 w-4" style={{ color: ORANGE }} strokeWidth={1.75} />
                <span
                  className="text-center text-[9px] font-bold uppercase tracking-wide sm:text-[10px]"
                  style={{ color: NAVY }}
                >
                  {label}
                </span>
              </div>
              <div
                className="flex items-center justify-center gap-1.5 px-3 py-3 text-center text-[11px] font-semibold sm:px-4 sm:text-[12.5px]"
                style={{ color: ORANGE }}
              >
                <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                {byot}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
