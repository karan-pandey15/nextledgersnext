"use client";

import { useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutSection from "../components/AboutSection/AboutSection";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";

const ORANGE = "#F58220";
const NAVY = "#0F274A";

export default function AboutPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section className="w-full bg-[linear-gradient(180deg,#0B1F3A_0%,#122A4A_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[820px] text-center">
          <p
            className="text-[12px] font-bold tracking-[0.16em] uppercase sm:text-[13px]"
            style={{ color: ORANGE }}
          >
            About Us
          </p>
          <h1 className="mt-3 text-[28px] font-bold leading-tight text-white sm:text-[36px] lg:text-[42px]">
            Accounting expertise that scales with your firm
          </h1>
          <p className="mx-auto mt-4 max-w-[640px] text-[14px] leading-7 text-white/75 sm:text-[15px]">
            NextLedgers partners with accounting firms worldwide to deliver
            accurate, secure, and client-ready work — so your team can focus on
            advisory and growth.
          </p>
        </div>
      </section>

      <AboutSection />

      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <h2
            className="text-[22px] font-bold sm:text-[26px]"
            style={{ color: NAVY }}
          >
            Ready to work together?
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-6 text-[#6B7280]">
            Tell us about your firm and we&apos;ll show you how offshore delivery
            can free capacity without compromising quality.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-[10px] px-6 text-[13px] font-bold text-white transition-colors hover:brightness-110"
            style={{ background: ORANGE }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
