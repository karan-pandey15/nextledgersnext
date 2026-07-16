"use client";

import {
  Award,
  CalendarClock,
  Globe2,
  MessageSquare,
  Shield,
  Users,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const REASONS = [
  {
    title: "Experienced Professionals",
    desc: "Professionals with years of experience in global accounting & finance.",
    icon: Award,
  },
  {
    title: "Global Standards",
    desc: "Work aligned with international accounting standards and best practices.",
    icon: Globe2,
  },
  {
    title: "Data Security",
    desc: "Bank-grade security protocols to keep your data safe and confidential.",
    icon: Shield,
  },
  {
    title: "Clear Communication",
    desc: "Multiple communication channels and regular updates.",
    icon: MessageSquare,
  },
  {
    title: "Flexible Engagement",
    desc: "Monthly, quarterly, or long-term engagements to suit your business needs.",
    icon: CalendarClock,
  },
  {
    title: "Your Team, Your Way",
    desc: "You manage the work. We provide the talent and support.",
    icon: Users,
  },
];

export default function ByotWhyChoose() {
  return (
    <section className="w-full bg-[#FAFAFA] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[20px] bg-white px-5 py-9 shadow-[0_8px_30px_rgba(15,39,74,0.07)] sm:px-8 sm:py-10 lg:px-10">
          <h2
            className="text-center text-[22px] font-bold tracking-[-0.01em] sm:text-[26px]"
            style={{ color: NAVY }}
          >
            Why Businesses Choose{" "}
            <span style={{ color: ORANGE }}>NextLedgers BYOT</span>
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-y-0">
            {REASONS.map(({ title, desc, icon: Icon }, index) => (
              <div
                key={title}
                className={`flex flex-col items-center px-4 text-center ${
                  index > 0 ? "xl:border-l xl:border-[#EEEEEE]" : ""
                }`}
              >
                <span
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_6px_18px_rgba(255,106,0,0.16)]"
                  style={{ background: "#FDEEE1", color: ORANGE }}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3
                  className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {title}
                </h3>
                <p
                  className="mt-2 max-w-[180px] text-[11.5px] leading-relaxed sm:text-[12px]"
                  style={{ color: GREY }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
