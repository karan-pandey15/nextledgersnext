"use client";

import { Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import RegionSelect from "../RegionSelect/RegionSelect";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";

const REGION_COPY = {
  uk: {
    desktop:
      "Trusted offshore partner for UK accounting firms — bookkeeping, VAT, payroll, tax & advisory",
  },
  usa: {
    desktop:
      "Trusted offshore partner for USA accounting firms — bookkeeping, sales tax, payroll, tax & advisory",
  },
  canada: {
    desktop:
      "Trusted offshore partner for Canadian accounting firms — bookkeeping, GST/HST, payroll, tax & advisory",
  },
};

export default function TopAnnouncementBar({
  isSidebarOpen = false,
  region = "uk",
}) {
  const copy = REGION_COPY[region] || REGION_COPY.uk;
  const message = `NextLedgers — ${copy.desktop}`;

  const handleRegionChange = (regionCode) => {
    console.log("Region changed in Announcement Bar:", regionCode);
  };

  const marqueeLine = (
    <>
      <span style={{ color: ORANGE, fontWeight: 600 }}>NextLedgers</span>
      <span style={{ color: "rgba(255,255,255,0.7)" }}> — </span>
      <span style={{ color: "rgba(255,255,255,0.95)" }}>{copy.desktop}</span>
    </>
  );

  return (
    <div
      className="relative w-full"
      style={{
        background: `linear-gradient(90deg, ${NAVY} 0%, #122A4A 45%, #0F274A 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-1/3 w-40 -translate-x-1/2 opacity-40 blur-2xl"
        style={{ background: ORANGE }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[40px] w-full max-w-[1440px] items-center justify-between gap-2 px-3 py-1.5 sm:min-h-[44px] sm:gap-3 sm:px-6 sm:py-2 lg:px-10 lg:py-2.5">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
          <span
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full sm:inline-flex"
            style={{ background: "rgba(245,130,32,0.18)", color: ORANGE }}
            aria-hidden="true"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>

          {/* PHONE ONLY — carousel text (no static duplicate) */}
          <div
            className="nl-announce-mobile min-w-0 flex-1 overflow-hidden"
            aria-label={message}
          >
            <div className="nl-announce-marquee flex w-max items-center whitespace-nowrap text-[11px] font-medium leading-snug">
              <span className="inline-flex items-center pr-12">{marqueeLine}</span>
              <span className="inline-flex items-center pr-12" aria-hidden="true">
                {marqueeLine}
              </span>
            </div>
          </div>

          {/* DESKTOP ONLY — static white text */}
          <p
            className="nl-announce-desktop min-w-0 flex-1 truncate text-[12.5px] font-medium leading-snug"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            <span style={{ color: ORANGE, fontWeight: 600 }}>NextLedgers</span>
            <span style={{ color: "rgba(255,255,255,0.7)" }}> — </span>
            <span>{copy.desktop}</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F58220] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-white shadow-sm transition-colors hover:bg-[#e2761b] sm:text-xs sm:px-4"
            >
              <Phone className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
              <span>Book a Discovery Call</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="block max-w-[min(52vw,220px)] xl:hidden z-50">
            <RegionSelect
              onRegionChange={handleRegionChange}
              minimize={isSidebarOpen}
              variant="dark"
              compact
            />
          </div>
        </div>
      </div>

      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
        }}
        aria-hidden="true"
      />

      <style>{`
        /* Phone: show marquee only */
        .nl-announce-mobile { display: block; }
        .nl-announce-desktop { display: none !important; }

        @keyframes nl-announce-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .nl-announce-marquee {
          animation: nl-announce-marquee-scroll 24s linear infinite;
        }
        .nl-announce-marquee:active {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .nl-announce-marquee { animation: none; }
        }

        /* Desktop lg+: static text only, no carousel */
        @media (min-width: 1024px) {
          .nl-announce-mobile { display: none !important; }
          .nl-announce-desktop { display: block !important; }
        }
      `}</style>
    </div>
  );
}
