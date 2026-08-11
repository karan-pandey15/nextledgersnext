"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  Percent,
  Receipt,
} from "lucide-react";
import SiteNavbar from "@/app/components/SiteNavbar/SiteNavbar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import CtaButton from "@/app/components/ui/CtaButton";
import { ALL_GLOBAL_SERVICES } from "@/app/lib/globalServices";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const ICON_MAP = {
  calculator: Calculator,
  chart: BarChart3,
  percent: Percent,
  receipt: Receipt,
  clipboard: ClipboardList,
  building: Building2,
  briefcase: Briefcase,
};

export default function ExploreAllServicesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <SiteNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(165deg, #FFFFFF 0%, #FFF9F5 42%, #FFF4EA 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#0B1F3A]/06 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <span
            className="inline-flex items-center rounded-full border border-[#FF6A00]/35 bg-white px-[18px] py-[5px] text-[10px] font-bold uppercase tracking-[0.22em] sm:text-[11px]"
            style={{ color: ORANGE }}
          >
            Our Services
          </span>

          <h1
            className="mx-auto mt-4 max-w-[820px] text-[28px] font-bold leading-[1.12] tracking-[-0.015em] sm:text-[36px] lg:text-[42px]"
            style={{ color: NAVY }}
          >
            Explore All{" "}
            <span style={{ color: ORANGE }}>Services</span>
          </h1>

          <p
            className="mx-auto mt-3 max-w-[640px] text-[13px] leading-relaxed sm:text-[15px] sm:leading-7"
            style={{ color: GREY }}
          >
            From day-to-day bookkeeping to strategic advisory, we deliver accurate,
            efficient, and reliable solutions tailored to your business needs.
            Choose a service below to learn more.
          </p>

          <div
            className="mx-auto mt-5 h-[3px] w-11 rounded-full"
            style={{ background: ORANGE }}
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full bg-[#FAFAFA] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ALL_GLOBAL_SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] || Briefcase;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex h-full min-h-[230px] flex-col rounded-[16px] border border-[#F0E6DC] bg-white px-5 pb-4 pt-6 shadow-[0_2px_14px_rgba(15,39,74,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FF6A00]/30 hover:shadow-[0_10px_28px_rgba(255,106,0,0.12)]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF4EA]">
                    <Icon
                      className="h-7 w-7"
                      style={{ color: ORANGE }}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h2
                    className="text-[16px] font-bold leading-snug sm:text-[17px]"
                    style={{ color: NAVY }}
                  >
                    {service.title}
                  </h2>

                  <p
                    className="mt-2 flex-1 text-[13px] leading-relaxed sm:text-[13.5px]"
                    style={{ color: GREY }}
                  >
                    {service.description}
                  </p>

                  <div
                    className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold"
                    style={{ color: ORANGE }}
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick list — matches footer “Our Services” style */}
          <div className="mt-12 rounded-[18px] border border-[#F0E6DC] bg-white px-6 py-8 sm:px-8 sm:py-9 lg:px-10">
            <h3
              className="text-[13px] font-extrabold uppercase tracking-[0.18em]"
              style={{ color: ORANGE }}
            >
              Our Services
            </h3>
            <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_GLOBAL_SERVICES.map((service) => (
                <li key={`list-${service.href}`}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-[14px] font-medium transition-colors hover:text-[#FF6A00] sm:text-[15px]"
                    style={{ color: NAVY }}
                  >
                    <span
                      className="text-[15px] font-bold leading-none"
                      style={{ color: ORANGE }}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 text-center sm:mt-12">
            <p className="max-w-md text-[13px] sm:text-[14px]" style={{ color: GREY }}>
              Not sure which service fits your needs? Talk to our team.
            </p>
            <CtaButton href="/contact" variant="primary">
              Contact Us
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </CtaButton>
          </div>
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
