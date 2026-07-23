"use client";

import { Check, Globe2 } from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

export default function ByotIndustries() {
  return (
    <section className="w-full bg-[#FFF4EA] pt-[5px] pb-[10px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="rounded-[20px] bg-white px-5 py-8 shadow-[0_8px_28px_rgba(15,39,74,0.06)] sm:px-8 sm:py-10">
          <div className="mb-8 flex items-center gap-3">
            <Globe2 className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: ORANGE }} strokeWidth={1.75} />
            <div>
              <h2
                className="text-[20px] font-extrabold leading-tight sm:text-[24px] lg:text-[26px]"
                style={{ color: NAVY }}
              >
                Industries We Support
              </h2>
              <div
                className="mt-1.5 h-[4px] w-24 rounded-full"
                style={{ background: ORANGE }}
              />
            </div>
          </div>

          <IndustriesWeSupportGrid />
        </div>

        <p
          className="mt-5 flex items-center justify-center gap-2 text-center text-[13px] sm:text-[14px]"
          style={{ color: GREY }}
        >
          <span
            className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white"
            style={{ background: ORANGE }}
          >
            <Check className="h-3 w-3" strokeWidth={3} />
          </span>
          Serving businesses of all sizes – Startups, SMBs &amp; Enterprises
        </p>
      </div>
    </section>
  );
}
