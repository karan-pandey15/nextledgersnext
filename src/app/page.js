"use client";

import { useState } from "react";
import TopAnnouncementBar from "./components/TopHeader/TopAnnouncementBar";
import Header from "./components/header/Header";
import CoreServices from "./components/CoreServices/CoreServices";
import Technology from "./components/Technology/Technology";
import GlobalPartner from "./components/GlobalPartner/GlobalPartner";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HomeImpact from "./components/HomeImpact/HomeImpact";
import HomeStories from "./components/HomeStories/HomeStories";
import RealFeedback from "./components/HomeStories/RealFeedback";
import HomeTrust from "./components/HomeTrust/HomeTrust";
import ArtificialIntelligence from "./components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "./components/ChatBot/NexaLedAi";
import QuotePopup from "./components/Quote/QuotePopup";
import Footer from "./components/footer/Footer";
import HomeHeroSection from "./components/VideoComponent/HomeHeroSection";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans overflow-x-hidden">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />

      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onContactClick={() => setIsQuoteOpen(true)}
      />

      <HomeHeroSection />
      <CoreServices />
      <Technology />
      <GlobalPartner />
      <WhyChooseUs />
      <HomeImpact />
      <RealFeedback />
      <HomeStories />
      <HomeTrust />

      <Footer onContactClick={() => setIsQuoteOpen(true)} />
      <ArtificialIntelligence />
      <NexaLedAi />
      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
