"use client";

import { useState } from "react";
import RegionalNavbar from "@/app/components/RegionalNavbar/RegionalNavbar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import CtaButton from "@/app/components/ui/CtaButton";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { Calendar, ArrowLeft } from "lucide-react";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";

/**
 * Temporary stub for country service routes until full service pages are built.
 * Keeps navbar / footer navigation working (no 404s).
 */
export default function RegionalServiceComingSoon({
  homePath,
  servicesLabel,
  serviceLinks,
  flagCode,
  backLabel,
  regionName,
  footerRegion,
  serviceLabel,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#faf9f6] font-sans text-[#1E1B2A]">
      <RegionalNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        homePath={homePath}
        servicesLabel={servicesLabel}
        serviceLinks={serviceLinks}
        flagCode={flagCode}
        backLabel={backLabel}
        regionName={regionName}
      />

      <section
        className="relative flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        style={{
          background:
            "linear-gradient(165deg, #FFFFFF 0%, #FFF9F5 42%, #FFF4EA 100%)",
        }}
      >
        <div className="relative mx-auto w-full max-w-xl text-center">
          <span
            className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]"
          >
            {regionName} Services
          </span>

          <h1
            className="text-[22px] font-extrabold leading-snug sm:text-3xl lg:text-[34px]"
            style={{ color: NAVY }}
          >
            {serviceLabel || "Service"}{" "}
            <span style={{ color: ORANGE }}>Coming Soon</span>
          </h1>

          <p
            className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed sm:text-[14px]"
            style={{ color: GREY }}
          >
            This service page is being prepared to match our approved UK
            pattern. Meanwhile, book a discovery call or return to the{" "}
            {regionName} services directory.
          </p>

          <div className="mx-auto my-4 h-[3px] w-10 rounded-full" style={{ background: ORANGE }} />

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/contact" variant="primary" size="lg">
              <Calendar className="h-4 w-4 shrink-0" />
              Book a Discovery Call
            </CtaButton>
            <CtaButton href={homePath} variant="secondary" size="lg">
              <ArrowLeft className="h-4 w-4 shrink-0" />
              Back to {regionName}
            </CtaButton>
          </div>
        </div>
      </section>

      <Footer region={footerRegion} />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
