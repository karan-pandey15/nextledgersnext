"use client";

import RegionSelect from "../RegionSelect/RegionSelect";

export default function TopAnnouncementBar({ isSidebarOpen = false }) {
  const handleRegionChange = (regionCode) => {
    console.log("Region changed in Announcement Bar:", regionCode);
  };

  return (
    <div className="w-full bg-[#1A1A1A] flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2 lg:py-2.5 gap-3 min-h-[36px]">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="w-[7px] h-[7px] rounded-full bg-[#F58220] flex-shrink-0" />
        <p className="text-white/90 text-[11px] sm:text-[12px] font-normal leading-snug truncate">
          White-label delivery desk for bookkeeping, payroll, VAT and accounts teams
        </p>
      </div>

      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="hidden lg:inline-flex items-center gap-1.5 border border-[#F58220] rounded-full text-[#F58220] text-[11px] sm:text-xs font-semibold px-4 py-1.5 whitespace-nowrap hover:bg-[#F58220]/10 transition-colors duration-150">
          Start Your 20-Hour Journey From Here
          <span aria-hidden="true">→</span>
        </button>
        <div className="block xl:hidden scale-90 origin-right z-50">
          <RegionSelect
            onRegionChange={handleRegionChange}
            minimize={isSidebarOpen}
            variant="dark"
          />
        </div>
      </div>
    </div>
  );
}
