"use client";

import { useState } from "react";
import Link from "next/link";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import CanadaNavbar from "../components/CanadaNavbar/CanadaNavbar";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ServiceHomePage from "../components/ServiceMainPageContent/ServiceHomePage";
import { CANADA_TRUST_BADGES } from "../components/ServiceMainPageContent/TrustBadgesBar";
import CtaButton from "../components/ui/CtaButton";
import { CANADA_SERVICE_LINKS } from "./canadaServiceLinks";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

export default function CanadaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#faf9f6] font-sans text-[#1E1B2A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} region="canada" />
      <CanadaNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <ServiceHomePage
        badge="Canada Accounting Outsourcing Partner"
        titleBefore="Helping Canadian Accounting Firms"
        titleAccent="Scale with Confidence"
        subtitle="Dedicated offshore support across bookkeeping, GST/HST, payroll, corporate & personal tax, management reporting, review engagements & year-end accounts."
        badges={CANADA_TRUST_BADGES}
        secondaryHref="tel:+18885520055"
        secondaryLabel="Call Us"
      />

      <section
        id="services"
        className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{
          backgroundColor: PAGE_CREAM,
          backgroundImage:
            "radial-gradient(rgba(180,150,120,0.35) 1.1px, transparent 1.1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-8 text-center sm:mb-10">
            <span
              className="mb-3 inline-flex items-center rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              8 Specialist Service Lines
            </span>
            <h2
              className="text-[22px] font-extrabold leading-tight sm:text-[28px] lg:text-[32px]"
              style={{ color: NAVY }}
            >
              Explore Our{" "}
              <span style={{ color: ORANGE }}>Canada Outsourcing</span> Services
            </h2>
            <p
              className="mx-auto mt-2.5 max-w-xl px-1 text-[13px] leading-relaxed sm:text-[14px]"
              style={{ color: GREY }}
            >
              Choose a service to see how NextLedgers supports Canadian accounting
              firms with dedicated offshore delivery.
            </p>
            <div
              className="mx-auto mt-4 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>

          <nav aria-label="Canada services">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 xl:gap-5">
              {CANADA_SERVICE_LINKS.map((service) => {
                const Icon = service.icon;
                return (
                  <li key={service.href} className="min-w-0">
                    <Link
                      href={service.href}
                      className="group relative flex h-full min-h-[88px] items-start gap-3 overflow-hidden rounded-[16px] border border-[#F0E6DC] bg-white px-3.5 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F58220]/35 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:min-h-[100px] sm:gap-4 sm:rounded-[18px] sm:px-5 sm:py-5"
                    >
                      <span
                        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-200 group-hover:scale-y-100"
                        style={{ background: ORANGE }}
                        aria-hidden="true"
                      />
                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#F58220] sm:h-11 sm:w-11"
                        style={{ background: "#FFF4EA" }}
                        aria-hidden="true"
                      >
                        <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1 text-left">
                        <span className="block text-[13px] font-bold leading-snug text-[#0B1F3A] transition-colors duration-200 group-hover:text-[#F58220] sm:text-[14.5px] lg:text-[15px]">
                          {service.label}
                        </span>
                        {service.blurb ? (
                          <span
                            className="mt-1 block text-[11.5px] leading-relaxed sm:text-[12.5px]"
                            style={{ color: GREY }}
                          >
                            {service.blurb}
                          </span>
                        ) : null}
                      </div>
                      <span
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F0E6DC] text-[14px] text-[#F58220] transition-all duration-200 group-hover:border-[#F58220] group-hover:bg-[#FFF4EA] sm:h-9 sm:w-9"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <CtaButton
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full max-w-[280px] sm:w-auto"
            >
              Book a Discovery Call
            </CtaButton>
            <CtaButton
              href="tel:+18885520055"
              variant="secondary"
              size="lg"
              className="w-full max-w-[280px] sm:w-auto"
            >
              Call Now
            </CtaButton>
          </div>
        </div>
      </section>

      <Footer region="canada" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
