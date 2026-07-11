"use client";

import { useState } from "react";
import Link from "next/link";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import UKNavbar from "../components/UKNavbar/UKNavbar";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ServiceHomePage from "../components/ServiceMainPageContent/ServiceHomePage";
import { UK_SERVICE_LINKS } from "./ukServiceLinks";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

export default function UKPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#faf9f6] font-sans text-[#1E1B2A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <UKNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <ServiceHomePage />

      {/* UK Services directory */}
      <section
        id="services"
        className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{ background: PAGE_CREAM }}
      >
        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full opacity-50 blur-3xl"
          style={{ background: "rgba(245,130,32,0.14)" }}
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "rgba(11,31,58,0.08)" }}
        />

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
              <span style={{ color: ORANGE }}>UK Outsourcing</span> Services
            </h2>
            <p
              className="mx-auto mt-2.5 max-w-xl px-1 text-[13px] leading-relaxed sm:text-[14px]"
              style={{ color: GREY }}
            >
              Choose a service to see how NextLedgers supports UK accounting
              firms with dedicated offshore delivery.
            </p>
            <div
              className="mx-auto mt-4 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>

          <nav aria-label="UK services">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 xl:gap-5">
              {UK_SERVICE_LINKS.map((service) => {
                return (
                  <li key={service.href} className="min-w-0">
                    <Link
                      href={service.href}
                      className="group relative flex h-full min-h-[88px] items-start gap-3 overflow-hidden rounded-[16px] border border-[#F0E6DC] bg-white px-3.5 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F58220]/35 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:min-h-[100px] sm:gap-4 sm:rounded-[18px] sm:px-5 sm:py-5"
                    >
                      {/* Left accent bar on hover */}
                      <span
                        className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 transition-transform duration-200 group-hover:scale-y-100"
                        style={{ background: ORANGE }}
                        aria-hidden="true"
                      />

                      <span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[18px] sm:h-11 sm:w-11 sm:text-[20px]"
                        style={{ background: "#FFF4EA" }}
                        aria-hidden="true"
                      >
                        {service.icon}
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
                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F0E6DC] text-[14px] text-[#F58220] transition-all duration-200 group-hover:border-[#F58220] group-hover:bg-[#FFF4EA] group-hover:text-[#F58220] sm:h-9 sm:w-9"
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
            <Link
              href="/contact"
              className="inline-flex h-11 w-full max-w-[280px] items-center justify-center rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#e2761b] sm:h-12 sm:w-auto sm:min-w-[200px] sm:text-[14px]"
              style={{ background: ORANGE }}
            >
              Book a Discovery Call
            </Link>
            <a
              href="tel:+18885520055"
              className="inline-flex h-11 w-full max-w-[280px] items-center justify-center rounded-[10px] border-2 bg-white px-6 text-[13px] font-bold uppercase tracking-wide transition-colors hover:bg-[#FFF7F0] sm:h-12 sm:w-auto sm:min-w-[200px] sm:text-[14px]"
              style={{ borderColor: ORANGE, color: ORANGE }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
