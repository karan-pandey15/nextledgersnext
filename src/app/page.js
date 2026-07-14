"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import TopAnnouncementBar from "./components/TopHeader/TopAnnouncementBar";
import Header from "./components/header/Header";
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
import RegionPopup from "./components/RegionSelect/RegionPopup";
import Footer from "./components/footer/Footer";
import HomeHeroSection from "./components/VideoComponent/HomeHeroSection";
import { REGION_ROUTES } from "./components/RegionSelect/regionData";

const QUOTE_SESSION_KEY = "nl-home-quote-popup-shown";
const REGION_POPUP_DELAY_MS = 22000; // ~20–25s (or on scroll to Technology)

export default function Home() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("US");
  const footerSentinelRef = useRef(null);
  const technologySentinelRef = useRef(null);
  const quoteTriggeredRef = useRef(false);
  const regionTriggeredRef = useRef(false);

  // Restore saved region preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("selected-region");
    if (saved) setSelectedRegion(saved);
  }, []);

  // Auto-open region popup after ~22s OR when user scrolls to Technology section
  // Shows again on every page load / hard refresh (timer + scroll still fire only once per visit)
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let timer;
    let observer;

    const openRegionPopup = () => {
      if (regionTriggeredRef.current) return;
      regionTriggeredRef.current = true;
      setIsRegionOpen(true);
      window.clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };

    const isTechnologyInView = () => {
      const node = technologySentinelRef.current;
      if (!node) return false;
      const { top } = node.getBoundingClientRect();
      // Fire once the Technology section enters the lower ~70% of the viewport
      return top < window.innerHeight * 0.7;
    };

    const onScroll = () => {
      if (isTechnologyInView()) openRegionPopup();
    };

    timer = window.setTimeout(openRegionPopup, REGION_POPUP_DELAY_MS);

    const node = technologySentinelRef.current;
    if (node) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) openRegionPopup();
        },
        { root: null, rootMargin: "0px 0px -30% 0px", threshold: 0 }
      );
      observer.observe(node);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // In case user already scrolled before effect attached
    onScroll();

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
        if (isRegionOpen) return;

        quoteTriggeredRef.current = true;
        sessionStorage.setItem(QUOTE_SESSION_KEY, "1");
        setIsQuoteOpen(true);
      },
      { root: null, rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isRegionOpen]);

  const handleRegionSelect = useCallback(
    (code) => {
      setSelectedRegion(code);
      localStorage.setItem("selected-region", code);
      setIsRegionOpen(false);

      const route = REGION_ROUTES[code];
      if (route && route !== "/") {
        router.push(route);
      }
      // US (and any region mapped to "/") stays on the home/USA experience
    },
    [router]
  );

  const handleRegionClose = useCallback(() => {
    setIsRegionOpen(false);
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans overflow-x-hidden">
      {/* <TopAnnouncementBar isSidebarOpen={isSidebarOpen} /> */}

      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <HomeHeroSection />
      <CoreServices />
      {/* Sentinel at top of Technology — triggers country popup on scroll */}
      <div ref={technologySentinelRef} className="h-px w-full" aria-hidden="true" />
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

      <RegionPopup
        isOpen={isRegionOpen}
        onClose={handleRegionClose}
        onSelect={handleRegionSelect}
        selectedCode={selectedRegion}
      />

      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </main>
  );
}
