"use client";

import { useState, useEffect, useRef } from "react";
import SiteNavbar from "./components/SiteNavbar/SiteNavbar";
import CoreServices from "./components/CoreServices/CoreServices";
import Technology from "./components/Technology/Technology";
import GlobalPartner from "./components/GlobalPartner/GlobalPartner";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import HiringComparison from "./components/HiringComparison/HiringComparison";
import OurProcess from "./components/OurProcess/OurProcess";
import GlobalPresence from "./components/GlobalPresence/GlobalPresence";
import HomeImpact from "./components/HomeImpact/HomeImpact";
import HomeStories from "./components/HomeStories/HomeStories";
import RealFeedback from "./components/HomeStories/RealFeedback";
import HomeTrust from "./components/HomeTrust/HomeTrust";
import ArtificialIntelligence from "./components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "./components/ChatBot/NexaLedAi";
import QuotePopup from "./components/Quote/QuotePopup";
import Footer from "./components/footer/Footer";
import HomeHeroSection from "./components/VideoComponent/HomeHeroSection";

const QUOTE_SESSION_KEY = "nl-home-quote-popup-shown";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const footerSentinelRef = useRef(null);
  const quoteTriggeredRef = useRef(false);

  // Auto-open quote popup when scrolling near the footer (once per session)
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (sessionStorage.getItem(QUOTE_SESSION_KEY)) {
      quoteTriggeredRef.current = true;
      return undefined;
    }

    const node = footerSentinelRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || quoteTriggeredRef.current) return;

        quoteTriggeredRef.current = true;
        sessionStorage.setItem(QUOTE_SESSION_KEY, "1");
        setIsQuoteOpen(true);
      },
      { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans overflow-x-hidden">
      <SiteNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <HomeHeroSection />
      <CoreServices />
      <Technology />
      <GlobalPartner />
      <WhyChooseUs />
      <HiringComparison />
      <OurProcess />
      <GlobalPresence />
      <HomeImpact />
      <RealFeedback />
      <HomeStories />
      <HomeTrust />

      <div ref={footerSentinelRef} className="h-px w-full" aria-hidden="true" />

      <Footer onContactClick={() => setIsQuoteOpen(true)} variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />

      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
