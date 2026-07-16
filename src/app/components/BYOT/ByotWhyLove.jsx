"use client";

import {
  Award,
  Clock3,
  Handshake,
  RefreshCw,
  Scaling,
  Users,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const BENEFITS = [
  {
    title: "Dedicated Team",
    desc: "Works exclusively for your business.",
    icon: Users,
  },
  {
    title: "Scalable Flexibility",
    desc: "Scale your team up or down anytime.",
    icon: Scaling,
  },
  {
    title: "Cost Efficient",
    desc: "Save up to 70% on operational costs.",
    icon: RefreshCw,
  },
  {
    title: "High Quality",
    desc: "Experienced professionals with proven expertise.",
    icon: Award,
  },
  {
    title: "Fast Turnaround",
    desc: "Quick onboarding and faster results.",
    icon: Clock3,
  },
  {
    title: "Long-term Partnership",
    desc: "We grow with you and your business.",
    icon: Handshake,
  },
];

export default function ByotWhyLove() {
  return (
    <section className="w-full bg-[#FFF9F5] py-10 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span
            className="hidden h-px w-10 border-t border-dashed sm:block"
            style={{ borderColor: ORANGE }}
            aria-hidden="true"
          />
          <h2
            className="text-center text-[22px] font-bold sm:text-[28px]"
            style={{ color: NAVY }}
          >
            Why Clients Love Our{" "}
            <span style={{ color: ORANGE }}>BYOT Model</span>
          </h2>
          <span
            className="hidden h-px w-10 border-t border-dashed sm:block"
            style={{ borderColor: ORANGE }}
            aria-hidden="true"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0">
          {BENEFITS.map(({ title, desc, icon: Icon }, index) => (
            <div
              key={title}
              className={`flex items-start gap-3 px-2 py-2 xl:px-3 ${
                index < BENEFITS.length - 1
                  ? "xl:border-r xl:border-[#E8ECF0]"
                  : ""
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(15,39,74,0.08)]">
                <Icon className="h-5 w-5" style={{ color: ORANGE }} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold" style={{ color: NAVY }}>
                  {title}
                </h3>
                <p className="mt-0.5 text-[12px] leading-snug" style={{ color: GREY }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
