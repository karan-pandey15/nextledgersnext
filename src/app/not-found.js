"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Wrench } from "lucide-react";
import SiteNavbar from "./components/SiteNavbar/SiteNavbar";
import Footer from "./components/footer/Footer";
import NexaLedAi from "./components/ChatBot/NexaLedAi";
import CtaButton from "./components/ui/CtaButton";
import useActiveRegion from "./lib/useActiveRegion";
import { regionHomePath } from "./lib/regionNav";

export default function NotFound() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { regionCode } = useActiveRegion();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(regionHomePath(regionCode));
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1E1B2A] flex flex-col font-sans">
      {/* Main Navbar */}
      <SiteNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 sm:px-8 text-center max-w-4xl mx-auto w-full">
        <div className="bg-[#FEF4E4]/50 border border-[#FF6A00]/25 rounded-[32px] p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(255, 106, 0,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(255, 106, 0,0.08)] transition-all duration-500 w-full">
          {/* Decorative Background Accents */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#FF6A00]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-[#FF6A00]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

          {/* Animated Themed Icon Circle */}
          <div className="w-20 h-20 rounded-2xl bg-white border border-[#FF6A00]/30 flex items-center justify-center mx-auto mb-6 text-[#FF6A00] shadow-sm transform group-hover:rotate-6 transition-transform duration-300">
            <Wrench className="w-10 h-10 stroke-[2] animate-pulse" />
          </div>

          <span className="text-[#FF6A00] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#FF6A00]/20 px-4 py-1.5 rounded-full inline-block mb-4 shadow-xs">
            Under Development
          </span>


          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8">
            We are currently designing and setting up this page to deliver your streamlined financial solution. Please check back soon!
          </p>

          {/* Action Back Button */}
          <div className="flex justify-center">
            <CtaButton href={null} variant="primary" size="md" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
              Go Back
            </CtaButton>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer variant="global" />

      {/* Floating AI Chatbot */}
      <NexaLedAi />
    </main>
  );
}
