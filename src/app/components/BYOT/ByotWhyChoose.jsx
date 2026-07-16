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
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[22px] bg-[#F5F6F8] px-5 py-9 sm:px-8 sm:py-11 lg:px-10">
          <h2
            className="text-center text-[22px] font-bold sm:text-[28px]"
            style={{ color: NAVY }}
          >
            Why Businesses Choose{" "}
            <span style={{ color: ORANGE }}>NextLedgers BYOT</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {REASONS.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="text-center">
                <span
                  className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "#FFF4EA", color: ORANGE }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-[13.5px] font-bold" style={{ color: NAVY }}>
                  {title}
                </h3>
                <p
                  className="mt-1.5 text-[12px] leading-relaxed"
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
