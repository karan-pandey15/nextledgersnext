"use client";

import { useState } from "react";
import SiteNavbar from "@/app/components/SiteNavbar/SiteNavbar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import ByotHero from "@/app/components/BYOT/ByotHero";
import ByotHowItWorks from "@/app/components/BYOT/ByotHowItWorks";
import ByotWhyLove from "@/app/components/BYOT/ByotWhyLove";
import ByotIndustries from "@/app/components/BYOT/ByotIndustries";
import ByotVsHiring from "@/app/components/BYOT/ByotVsHiring";
import ByotWhyChoose from "@/app/components/BYOT/ByotWhyChoose";
import ByotConnect from "@/app/components/BYOT/ByotConnect";

export default function ByotPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <SiteNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <ByotHero />
      <ByotHowItWorks />
      <ByotWhyLove />
      <ByotIndustries />
      <div className="mt-4" ></div>
      <ByotVsHiring />
      <ByotWhyChoose />
      <ByotConnect />

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
