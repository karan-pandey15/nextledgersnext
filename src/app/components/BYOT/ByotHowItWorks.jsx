"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ClipboardList,
  MonitorPlay,
  Search,
  UserCheck,
  Users,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const STEPS = [
  {
    num: "1",
    title: "Share Your Requirements",
    desc: "Tell us the roles, skills, and experience you need.",
    icon: ClipboardList,
  },
  {
    num: "2",
    title: "We Shortlist Candidates",
    desc: "We find and shortlist the best matching professionals.",
    icon: Search,
  },
  {
    num: "3",
    title: "Interview & Select",
    desc: "You interview and choose your ideal team members.",
    icon: MonitorPlay,
  },
  {
    num: "4",
    title: "Onboard in 48 Hours",
    desc: "We handle onboarding, access, and documentation.",
    icon: UserCheck,
  },
  {
    num: "5",
    title: "Start Working & Grow Together",
    desc: "Your dedicated team starts working exclusively for you.",
    icon: CheckCircle2,
  },
];

export default function ByotHowItWorks() {
  return (
    <section className="w-full bg-[#FAFAFA] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2
          className="text-center text-[24px] font-bold tracking-[-0.01em] sm:text-[30px]"
          style={{ color: NAVY }}
        >
          How{" "}
          <span className="relative inline-block" style={{ color: ORANGE }}>
            BYOT
            <span
              className="absolute left-[8%] -bottom-1 h-[3px] w-[84%] rounded-full"
              style={{ background: ORANGE }}
              aria-hidden="true"
            />
          </span>{" "}
          Works
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_280px] lg:items-stretch lg:gap-5 xl:gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            {STEPS.map(({ num, title, desc, icon: Icon }, index) => (
              <div key={title} className="relative flex flex-col items-center">
                <span
                  className="z-[1] mb-2 flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold text-white"
                  style={{ background: ORANGE }}
                >
                  {num}
                </span>
                {index < STEPS.length - 1 ? (
                  <span
                    className="pointer-events-none absolute left-[calc(50%+20px)] top-4 hidden h-px w-[calc(100%-16px)] border-t border-dashed lg:block"
                    style={{ borderColor: `${ORANGE}99` }}
                    aria-hidden="true"
                  />
                ) : null}
                <div className="flex h-full w-full flex-col items-center rounded-[14px] border border-[#F0E6DC] bg-white px-3 py-4 text-center shadow-[0_2px_12px_rgba(15,39,74,0.05)]">
                  <span
                    className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ background: "#FFF4EA", color: ORANGE }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3
                    className="text-[13px] font-bold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {title}
                  </h3>
                  <p
                    className="mt-1.5 text-[11.5px] leading-relaxed"
                    style={{ color: GREY }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="hidden w-px self-stretch lg:block"
            style={{ background: "#E8ECF0" }}
            aria-hidden="true"
          />

          <div className="flex flex-col justify-center rounded-[16px] border border-[#F0E6DC] bg-white px-5 py-6 text-center shadow-[0_4px_18px_rgba(15,39,74,0.06)] lg:px-6">
            <h3
              className="text-[22px] font-bold leading-tight sm:text-[24px]"
              style={{ color: NAVY }}
            >
              Your Team.{" "}
              <span style={{ color: ORANGE }}>Your Way.</span>
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed" style={{ color: GREY }}>
              Complete flexibility to build, manage, and scale your offshore
              finance team.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#FF6A00] px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/20 transition hover:bg-[#E85E00]"
            >
              <Users className="h-4 w-4" strokeWidth={2.2} />
              Build Your Team Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
