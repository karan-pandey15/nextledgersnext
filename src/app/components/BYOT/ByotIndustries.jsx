"use client";

import {
  Briefcase,
  Building2,
  Check,
  Cloud,
  Factory,
  Globe2,
  GraduationCap,
  HardHat,
  Heart,
  HeartPulse,
  ShoppingBag,
  Store,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const INDUSTRIES = [
  { label: "E-commerce", icon: ShoppingBag },
  { label: "Real Estate", icon: Building2 },
  { label: "Construction", icon: HardHat },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Manufacturing", icon: Factory },
  { label: "Retail", icon: Store },
  { label: "Hospitality", icon: UtensilsCrossed },
  { label: "Professional Services", icon: Briefcase },
  { label: "Education", icon: GraduationCap },
  { label: "IT & SaaS", icon: Cloud },
  { label: "Non-Profit", icon: Heart },
  { label: "Logistics", icon: Truck },
];

export default function ByotIndustries() {
  return (
    <section className="w-full bg-[#FFF4EA] py-10 sm:py-12">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="rounded-[20px] bg-white px-5 py-8 shadow-[0_8px_28px_rgba(15,39,74,0.06)] sm:px-8 sm:py-10">
          <div className="mb-7 flex items-center gap-2.5">
            <Globe2 className="h-5 w-5" style={{ color: ORANGE }} strokeWidth={1.75} />
            <div>
              <h2
                className="text-[15px] font-extrabold uppercase tracking-[0.08em] sm:text-[16px]"
                style={{ color: NAVY }}
              >
                Industries We Support
              </h2>
              <div
                className="mt-1 h-[3px] w-16 rounded-full"
                style={{ background: ORANGE }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {INDUSTRIES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                <Icon
                  className="h-8 w-8 sm:h-9 sm:w-9"
                  style={{ color: ORANGE }}
                  strokeWidth={1.5}
                />
                <p
                  className="mt-2 text-[12px] font-semibold sm:text-[13px]"
                  style={{ color: NAVY }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
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
