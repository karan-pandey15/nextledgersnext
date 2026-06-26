"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const REGIONS = [
    { code: "GB", name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { code: "US", name: "United States", flag: "https://flagcdn.com/us.svg" },
    { code: "AE", name: "UAE", flag: "https://flagcdn.com/ae.svg" },
    { code: "CA", name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { code: "AU", name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { code: "NZ", name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
    { code: "IE", name: "Ireland", flag: "https://flagcdn.com/ie.svg" },
];

// Map region codes to their dedicated page routes
const REGION_ROUTES = {
    GB: "/uk/",
};

export default function RegionSelect({ onRegionChange, className = "", minimize = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("GB");
    const dropdownRef = useRef(null);
    const router = useRouter();

    // Load initial region from localStorage if available
    useEffect(() => {
        const saved = localStorage.getItem("selected-region");
        if (saved && REGIONS.some((r) => r.code === saved)) {
            setSelectedRegion(saved);
        }
    }, []);

    // Close dropdown on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (code) => {
        setSelectedRegion(code);
        setIsOpen(false);
        localStorage.setItem("selected-region", code);

        // Navigate to dedicated region page if route exists
        if (REGION_ROUTES[code]) {
            router.push(REGION_ROUTES[code]);
        }

        if (onRegionChange) {
            onRegionChange(code);
        }
    };

    const activeRegion = REGIONS.find((r) => r.code === selectedRegion) || REGIONS[0];

    return (
        <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200/80 rounded-full bg-white hover:bg-gray-50/50 active:scale-98 shadow-sm hover:shadow transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F58220]/50"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {/* Overlapping stacked flags or single flag based on minimize prop */}
                <div className="flex items-center">
                    {minimize ? (
                        <div className="flex relative rounded-sm overflow-hidden border border-white shadow-xs w-5 h-3.5 flex-shrink-0">
                            <img
                                src={activeRegion.flag}
                                alt={activeRegion.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center">
                            {REGIONS.map((region, index) => (
                                <div
                                    key={region.code}
                                    className="relative rounded-sm overflow-hidden border border-white shadow-xs transition-transform duration-200"
                                    style={{
                                        width: "20px",
                                        height: "14px",
                                        marginLeft: index === 0 ? "0px" : "-6px",
                                        zIndex: REGIONS.length - index,
                                    }}
                                >
                                    <img
                                        src={region.flag}
                                        alt={region.name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Text and Chevron */}
                <span className="text-[#1F1E25] font-bold text-xs tracking-wider uppercase">
                    {minimize ? selectedRegion : "Regions"}
                </span>

                <svg
                    className={`w-3.5 h-3.5 text-[#F58220] transition-transform duration-200 ease-in-out ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {/* Dropdown Popover */}
            {isOpen && (
                <>
                    <style>{`
                        @keyframes regionDropdownOpen {
                            from {
                                opacity: 0;
                                transform: translateY(-8px) scale(0.96);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0) scale(1);
                            }
                        }
                        .animate-region-dropdown {
                            animation: regionDropdownOpen 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                    `}</style>
                    <div className="absolute right-0 mt-2.5 w-[270px] sm:w-[290px] origin-top-right rounded-[24px] bg-white border border-gray-100/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-55 animate-region-dropdown">
                        <div className="text-[#8E83A3] text-[11px] font-bold tracking-widest uppercase mb-4 px-2">
                            Choose your region
                        </div>

                        <div className="space-y-1">
                            {REGIONS.map((region) => {
                                const isSelected = region.code === selectedRegion;
                                return (
                                    <button
                                        key={region.code}
                                        onClick={() => handleSelect(region.code)}
                                        className={`group flex items-center justify-between w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 ease-out cursor-pointer border-l-[3px] ${isSelected
                                                ? "bg-[#F58220]/8 text-[#1F1E25] border-[#F58220] pl-3.5"
                                                : "border-transparent hover:bg-[#F58220]/4 hover:border-[#F58220]/30 hover:pl-3.5 hover:shadow-xs text-[#1F1E25]"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 transition-transform duration-200 group-hover:translate-x-0.5">
                                            {/* Flag Container */}
                                            <div className="w-[32px] h-[22px] rounded-sm overflow-hidden shadow-xs border border-gray-100 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:rotate-1">
                                                <img
                                                    src={region.flag}
                                                    alt={region.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Region Code */}
                                            <span
                                                className={`text-xs font-extrabold uppercase transition-colors duration-200 ${isSelected
                                                        ? "text-[#F58220]"
                                                        : "text-[#7C5DFA] group-hover:text-[#F58220]"
                                                    }`}
                                            >
                                                {region.code}
                                            </span>

                                            {/* Region Name */}
                                            <span className="text-sm font-bold text-[#1E1B2A] transition-colors duration-200 group-hover:text-[#1E1B2A]">
                                                {region.name}
                                            </span>
                                        </div>

                                        {/* State Indicator Dot */}
                                        {isSelected ? (
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#F58220] shadow-[0_0_8px_rgba(245,130,32,0.6)] animate-pulse" />
                                        ) : (
                                            <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#F58220]/30 transition-colors duration-200" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
