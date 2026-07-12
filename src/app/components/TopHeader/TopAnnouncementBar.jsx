"use client";

import { Phone, Sparkles } from "lucide-react";
import RegionSelect from "../RegionSelect/RegionSelect";
import CtaButton from "../ui/CtaButton";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";

const REGION_COPY = {
  uk: {
    desktop:
      "Trusted offshore partner for UK accounting firms — bookkeeping, VAT, payroll, tax & advisory",
    mobile: "Offshore support for UK accounting firms",
  },
  usa: {
    desktop:
      "Trusted offshore partner for USA accounting firms — bookkeeping, sales tax, payroll, tax & advisory",
    mobile: "Offshore support for USA accounting firms",
  },
};

export default function TopAnnouncementBar({
  isSidebarOpen = false,
  region = "uk",
}) {
  const copy = REGION_COPY[region] || REGION_COPY.uk;

  const handleRegionChange = (regionCode) => {
    console.log("Region changed in Announcement Bar:", regionCode);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        background: `linear-gradient(90deg, ${NAVY} 0%, #122A4A 45%, #0F274A 100%)`,
      }}
    >
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute inset-y-0 left-1/3 w-40 -translate-x-1/2 opacity-40 blur-2xl"
        style={{ background: ORANGE }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-2 sm:min-h-[44px] sm:px-6 lg:px-10 lg:py-2.5">
        {/* Message */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
          <span
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-full sm:inline-flex"
            style={{ background: "rgba(245,130,32,0.18)", color: ORANGE }}
            aria-hidden="true"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
          <p className="truncate text-[11px] font-medium leading-snug text-white/95 sm:text-[12.5px]">
            <span className="font-semibold text-[#F58220]">NextLedgers</span>
            <span className="text-white/70"> — </span>
            <span className="hidden lg:inline">{copy.desktop}</span>
            <span className="lg:hidden">{copy.mobile}</span>
          </p>
        </div>

        {/* CTA + region */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <CtaButton
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden !px-4 !py-1.5 !text-[11px] font-bold tracking-wide sm:!text-xs lg:inline-flex"
          >
            <Phone className="h-3 w-3" strokeWidth={2.5} />
            Book a Discovery Call
            <span aria-hidden="true">→</span>
          </CtaButton>

          <div className="block scale-90 origin-right xl:hidden z-50">
            <RegionSelect
              onRegionChange={handleRegionChange}
              minimize={isSidebarOpen}
              variant="dark"
            />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="h-[2px] w-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
