"use client";

import { HomeLogoImg } from "@/app/lib/homePageLogos";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#4B5563";

function TitleDash({ flip = false }) {
  return (
    <span
      className={`hidden items-center sm:inline-flex ${flip ? "flex-row-reverse" : ""}`}
      aria-hidden
    >
      <span
        className="h-px w-8 border-t border-dashed sm:w-12"
        style={{ borderColor: ORANGE }}
      />
      <span
        className="mx-0.5 inline-block h-1.5 w-1.5 rotate-45"
        style={{ background: ORANGE }}
      />
    </span>
  );
}

const BENEFITS = [
  {
    title: "Dedicated Team",
    desc: "Works exclusively for your business.",
    logo: 4,
  },
  {
    title: "Scalable Flexibility",
    desc: "Scale your team up or down anytime.",
    logo: 7,
  },
  {
    title: "Cost Efficient",
    desc: "Save up to 70% on operational costs.",
    logo: 21,
  },
  {
    title: "High Quality",
    desc: "Experienced professionals with proven expertise.",
    logo: 2,
  },
  {
    title: "Fast Turnaround",
    desc: "Quick onboarding and faster results.",
    logo: 8,
  },
  {
    title: "Long-term Partnership",
    desc: "We grow with you and your business.",
    logo: 22,
  },
];

export default function ByotWhyLove() {
  return (
    <section className="w-full bg-[#FFF4EA] py-[5px]">
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-2.5 sm:gap-3">
          <TitleDash />
          <h2
            className="text-center text-[20px] font-bold leading-tight sm:text-[26px] lg:text-[28px]"
            style={{ color: NAVY }}
          >
            Why Clients Love Our{" "}
            <span style={{ color: ORANGE }}>BYOT Model</span>
          </h2>
          <TitleDash flip />
        </div>

        <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {BENEFITS.map(({ title, desc, logo }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="h-[41px] w-[41px] shrink-0 sm:h-[46px] sm:w-[46px]">
                <HomeLogoImg n={logo} />
              </span>
              <div className="min-w-0">
                <h3
                  className="text-[13px] font-bold leading-tight sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {title}
                </h3>
                <p
                  className="mt-0.5 text-[11.5px] leading-snug sm:text-[12px]"
                  style={{ color: GREY }}
                >
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
