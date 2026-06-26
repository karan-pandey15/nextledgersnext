"use client";

import RegionSelect from "../RegionSelect/RegionSelect";

export default function TopAnnouncementBar({ isSidebarOpen = false }) {
    const handleRegionChange = (regionCode) => {
        console.log("Region changed in Announcement Bar:", regionCode);
    };

    return (
        <div className="w-full bg-gradient-to-r from-[#F58220] to-[#FFB870] flex items-center justify-between px-4 sm:px-5 py-1.5 lg:py-0 min-h-[38px] lg:h-9 gap-2">
            <div className="flex items-center gap-2 max-w-[50%] lg:max-w-none overflow-hidden">
                <span className="w-[7px] h-[7px] rounded-full bg-white/70 flex-shrink-0" />
                <p className="text-white text-[11px] sm:text-[13px] font-normal leading-none truncate">
                    Testing
                </p>
            </div>
            
            <div className="flex items-center gap-3">
                <button className="hidden lg:block border border-white/80 rounded-full text-white text-xs font-medium px-4 py-[3px] whitespace-nowrap hover:bg-white/15 transition-colors duration-150">
                    Start Journey With NextLedgers
                </button>
                <div className="block lg:hidden scale-85 sm:scale-90 origin-right z-50">
                    <RegionSelect onRegionChange={handleRegionChange} minimize={isSidebarOpen} />
                </div>
            </div>
        </div>
    );
}