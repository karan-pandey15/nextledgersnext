"use client";

import Link from "next/link";
import { Users } from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

function IconShareRequirements() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <rect
        x="16"
        y="12"
        width="32"
        height="42"
        rx="4"
        fill="none"
        stroke="#374151"
        strokeWidth="2.2"
      />
      <path
        d="M24 12v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
      />
      <rect x="26" y="6" width="12" height="8" rx="2" fill={ORANGE} />
      <circle cx="32" cy="30" r="7" fill="none" stroke="#374151" strokeWidth="2" />
      <circle cx="32" cy="28" r="3" fill={ORANGE} />
      <path
        d="M24 42c2.5-4 13.5-4 16 0"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M22 48h20M22 53h14" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconShortlist() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <rect
        x="10"
        y="10"
        width="30"
        height="40"
        rx="3"
        fill="none"
        stroke="#374151"
        strokeWidth="2.2"
      />
      <circle cx="17" cy="22" r="2" fill={ORANGE} />
      <path d="M23 22h12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="30" r="2" fill={ORANGE} />
      <path d="M23 30h12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17" cy="38" r="2" fill={ORANGE} />
      <path d="M23 38h10" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <circle
        cx="42"
        cy="40"
        r="11"
        fill="#fff"
        stroke={ORANGE}
        strokeWidth="2.4"
      />
      <path
        d="M37.5 40.5l3 3 6.5-7"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 48l7 7"
        stroke={ORANGE}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInterview() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <rect
        x="8"
        y="10"
        width="40"
        height="30"
        rx="3"
        fill="none"
        stroke="#374151"
        strokeWidth="2.2"
      />
      <rect x="12" y="14" width="32" height="22" rx="1.5" fill="#F3F4F6" />
      <circle cx="28" cy="24" r="5" fill="#1F2937" />
      <path
        d="M20 36c2-5 14-5 16 0"
        fill="#1F2937"
      />
      <path d="M20 28h16" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" />
      <path d="M22 14v-2h12v2" stroke="#374151" strokeWidth="2" />
      <path d="M24 40h16" stroke="#374151" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M28 40v6M20 46h24" stroke="#374151" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M48 20h10v10l-3.5-3H48z"
        fill="#fff"
        stroke={ORANGE}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="51" cy="24" r="1.3" fill={ORANGE} />
      <circle cx="54.5" cy="24" r="1.3" fill={ORANGE} />
    </svg>
  );
}

function IconOnboard() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <rect
        x="12"
        y="10"
        width="30"
        height="42"
        rx="3"
        fill="none"
        stroke="#374151"
        strokeWidth="2.2"
      />
      <path
        d="M20 10v-1.5a3.5 3.5 0 0 1 3.5-3.5h7A3.5 3.5 0 0 1 34 8.5V10"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2"
      />
      <rect x="22" y="5" width="12" height="7" rx="2" fill={ORANGE} />
      <path
        d="M18 24l3 3 6-7"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 26h8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 34l3 3 6-7"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 36h8" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 44l3 3 6-7"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 46h6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="42" r="10" fill="#fff" stroke={ORANGE} strokeWidth="2.2" />
      <circle cx="48" cy="39" r="3.2" fill="#374151" />
      <path
        d="M41.5 50c2-4.5 11-4.5 13 0"
        fill="none"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconGrowTogether() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <circle cx="20" cy="22" r="6" fill="#4B5563" />
      <path d="M10 40c2.5-7 17.5-7 20 0" fill="#4B5563" />
      <circle cx="44" cy="22" r="6" fill="#6B7280" />
      <path d="M34 40c2.5-7 17.5-7 20 0" fill="#6B7280" />
      <circle cx="32" cy="28" r="14" fill="#fff" stroke={ORANGE} strokeWidth="2.4" />
      <circle cx="32" cy="24" r="5.5" fill="#1F2937" />
      <path d="M22 42c3-7 17-7 20 0" fill="#1F2937" />
      <circle cx="44" cy="44" r="8" fill={ORANGE} />
      <path
        d="M40.5 44.2l2.4 2.4 4.8-5.2"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STEPS = [
  {
    num: "1",
    title: "Share Your Requirements",
    desc: "Tell us the roles, skills, and experience you need.",
    Icon: IconShareRequirements,
  },
  {
    num: "2",
    title: "We Shortlist Candidates",
    desc: "We find and shortlist the best matching professionals.",
    Icon: IconShortlist,
  },
  {
    num: "3",
    title: "Interview & Select",
    desc: "You interview and choose your ideal team members.",
    Icon: IconInterview,
  },
  {
    num: "4",
    title: "Onboard in 48 Hours",
    desc: "We handle onboarding, access, and documentation.",
    Icon: IconOnboard,
  },
  {
    num: "5",
    title: "Start Working & Grow Together",
    desc: "Your dedicated team starts working exclusively for you.",
    Icon: IconGrowTogether,
  },
];

export default function ByotHowItWorks() {
  return (
    <section className="w-full bg-white pt-[10px] pb-[5px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[20px] bg-[#F5F5F5] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
          <h2
            className="text-center text-[24px] font-bold tracking-[-0.01em] sm:text-[30px] lg:text-[32px]"
            style={{ color: NAVY }}
          >
            How{" "}
            <span className="relative inline-block" style={{ color: ORANGE }}>
              BYOT
              <span
                className="absolute left-[10%] -bottom-1 h-[3px] w-[80%] rounded-full"
                style={{ background: ORANGE }}
                aria-hidden
              />
            </span>{" "}
            Works
          </h2>

          <div className="mt-9 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-stretch lg:gap-0">
            {/* Steps */}
            <div className="grid min-w-0 flex-1 grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3 xl:gap-4">
              {STEPS.map(({ num, title, desc, Icon }) => (
                <div key={title} className="relative pt-4">
                  <div className="relative flex h-full flex-col items-center rounded-[14px] border border-[#E8E8E8] bg-white px-3 pb-5 pt-8 text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
                    <span
                      className="absolute left-1/2 top-0 z-[3] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
                      style={{ background: ORANGE }}
                    >
                      {num}
                    </span>

                    <div className="mb-3 flex h-14 w-14 items-center justify-center">
                      <Icon />
                    </div>

                    <h3
                      className="text-[13px] font-bold leading-snug sm:text-[14px]"
                      style={{ color: NAVY }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-2 text-[12px] leading-relaxed"
                      style={{ color: GREY }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div
              className="mx-2 hidden w-px shrink-0 self-stretch lg:block xl:mx-4"
              style={{ background: "#D1D5DB" }}
              aria-hidden
            />
            <div
              className="h-px w-full lg:hidden"
              style={{ background: "#D1D5DB" }}
              aria-hidden
            />

            {/* CTA */}
            <div className="flex w-full shrink-0 flex-col justify-center px-1 text-center lg:w-[240px] lg:px-3 lg:text-left xl:w-[260px]">
              <h3
                className="text-[26px] font-bold leading-[1.15] sm:text-[28px]"
                style={{ color: NAVY }}
              >
                Your Team.
                <br />
                <span style={{ color: ORANGE }}>Your Way.</span>
              </h3>
              <p
                className="mt-3 text-[13px] leading-relaxed sm:text-[14px]"
                style={{ color: GREY }}
              >
                Complete flexibility to build, manage, and scale your offshore
                finance team.
              </p>
              <Link
                href="#byot-connect"
                className="mt-5 inline-flex items-center justify-center gap-2 self-center rounded-[8px] px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/25 transition hover:brightness-95 lg:self-start sm:text-[12px]"
                style={{ background: ORANGE }}
              >
                <Users className="h-4 w-4" strokeWidth={2.2} />
                Build Your Team Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
