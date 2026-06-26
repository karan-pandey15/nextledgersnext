"use client";

import { useState } from "react";
import TopAnnouncementBar from "./components/TopHeader/TopAnnouncementBar";
import Header from "./components/header/Header";
import Button from "./components/utils/Button/Button";
import HeroSection from "./components/HeroSection";
import Technology from "./components/Technology";
import AboutSection from "./components/AboutSection";
import ArtificileIntellegent from "./components/ArtificialIntellegence/ArtificileIntellegent";
import NexaLedAi from "./components/ChatBot/NexaLedAi";
import Footer from "./components/footer/Footer";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1E1B2A] flex flex-col font-sans">
      {/* Top Banner */}
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />

      {/* Main Navbar */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Video Hero Section */}
      <HeroSection />

      {/* Technologies Section */}
      <Technology />

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />

      {/* Floating AI Dock */}
      <ArtificileIntellegent />

      {/* Floating AI Chatbot */}
      <NexaLedAi />
    </main>
  );
}