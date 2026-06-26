"use client";

import { useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import UKNavbar from "../components/UKNavbar/UKNavbar";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import UKServicesContent from "../components/UKServicesContent/UKServicesContent";
import Footer from "../components/footer/Footer";
import ArtificileIntellegent from "../components/ArtificialIntellegence/ArtificileIntellegent";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import HeroSection from "../components/HeroSection";

export default function UKPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1E1B2A] flex flex-col font-sans">
      {/* Top Banner */}
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />

      {/* UK Navbar */}
      <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Video Hero Section — UK-specific text */}
      {/* <VideoComponent
        title="Your Trusted UK Accounting & Outsourcing Partner"
        subTitle="Dedicated offshore support for UK accounting firms — Bookkeeping, VAT, Payroll, Tax & Management Reporting"
        videoSrc="/images/finalvideo.mp4"
      />
       */}

      <HeroSection />
      {/* UK Services Content — All 4 service sections */}
      <UKServicesContent />

      {/* Footer */}
      <Footer />

      {/* Floating AI Dock */}
      <ArtificileIntellegent />

      {/* Floating AI Chatbot */}
      <NexaLedAi />
    </main>
  );
}
