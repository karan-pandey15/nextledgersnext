"use client";

import Image from "next/image";
import { Check, Globe2 } from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const INDUSTRIES = [
  { label: "Consulting", image: "consulting.png" },
  { label: "Pharmacy", image: "pharmacy.png" },
  { label: "Agriculture", image: "agriculture.png" },
  { label: "Entertainment", image: "entertainment.png" },
  { label: "Hospitality", image: "hospitality.png" },
  { label: "Construction", image: "construction.png" },
  { label: "Technology", image: "technology.png" },
  { label: "Fitness and Wellness", image: "fitnessandwellness.png" },
  { label: "Manufacturing", image: "manugacturing.png" },
  { label: "Restaurants", image: "resturants.png" },
  { label: "Ecommerce", image: "Ecommerce.png" },
  { label: "Professional Services", image: "professionalservices.png" },
  { label: "Nonprofit", image: "nonprofit.png" },
  { label: "Automotive", image: "automotive.png" },
  { label: "Logistics Transportation", image: "logisticstrasportation.png" },
  { label: "Education", image: "education.png" },
  { label: "Healthcare", image: "healthcare.png" },
  { label: "Real Estate", image: "realstate.png" },
  { label: "Crypto", image: "crypto.png" },
  { label: "Law Firms", image: "lawfirms.png" },
  { label: "Startup SMEs", image: "startupsmes.png" },
];

export default function ByotIndustries() {
  return (
    <section className="w-full bg-[#FFF4EA] pt-[5px] pb-[10px]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="rounded-[20px] bg-white px-5 py-8 shadow-[0_8px_28px_rgba(15,39,74,0.06)] sm:px-8 sm:py-10">
          <div className="mb-8 flex items-center gap-3">
            <Globe2 className="h-7 w-7 sm:h-8 sm:w-8" style={{ color: ORANGE }} strokeWidth={1.75} />
            <div>
              <h2
                className="text-[20px] font-extrabold uppercase tracking-[0.08em] sm:text-[24px] lg:text-[26px]"
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
            {INDUSTRIES.map(({ label, image }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={`/images/nexticon/${image}`}
                  alt={`${label} logo`}
                  width={72}
                  height={72}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
                />
                <p
                  className="mt-2.5 text-[13px] font-bold leading-tight sm:text-[14px]"
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
