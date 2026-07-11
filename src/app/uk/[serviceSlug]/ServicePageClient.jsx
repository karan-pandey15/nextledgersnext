"use client";

import React, { useState } from "react";
import TopAnnouncementBar from "../../components/TopHeader/TopAnnouncementBar";
import UKNavbar from "../../components/UKNavbar/UKNavbar";
import UKServicesContent from "../../components/UKServicesContent/UKServicesContent";
import Footer from "../../components/footer/Footer";
import ArtificialIntelligence from "../../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../../components/ChatBot/NexaLedAi";

export default function ServicePageClient({ serviceSlug }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1E1B2A] flex flex-col font-sans">
      {/* Top Banner */}
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />

      {/* UK Navbar */}
      <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Specific service content */}
      <UKServicesContent serviceSlug={serviceSlug} />

      {/* Footer */}
      <Footer />

      {/* Floating AI Dock */}
      <ArtificialIntelligence />

      {/* Floating AI Chatbot */}
      <NexaLedAi />
    </main>
  );
}
