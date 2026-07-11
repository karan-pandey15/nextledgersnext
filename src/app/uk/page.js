"use client";

import { useState } from "react";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import UKNavbar from "../components/UKNavbar/UKNavbar";
import VideoComponent from "../components/VideoComponent/VideoComponent";
import UKServicesContent from "../components/UKServicesContent/UKServicesContent";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ServiceHomePage from "../components/ServiceMainPageContent/ServiceHomePage";

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

      <ServiceHomePage />
      {/* UK Services Content — All 4 service sections */}
      <UKServicesContent />

      {/* Footer */}
      <Footer />

      {/* Floating AI Dock */}
      <ArtificialIntelligence />

      {/* Floating AI Chatbot */}
      <NexaLedAi />
    </main>
  );
}
