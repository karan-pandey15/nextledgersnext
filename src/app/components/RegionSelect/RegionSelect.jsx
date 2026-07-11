"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RegionPopup from "./RegionPopup";
import { POPUP_REGIONS, REGION_ROUTES } from "./regionData";

const TRIGGER_FLAGS = POPUP_REGIONS;

export default function RegionSelect({
  onRegionChange,
  className = "",
  minimize = false,
  variant = "light",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("US");
  const router = useRouter();
  const isDark = variant === "dark";

  useEffect(() => {
    const saved = localStorage.getItem("selected-region");
    if (saved && POPUP_REGIONS.some((r) => r.code === saved)) {
      setSelectedRegion(saved);
    }
  }, []);

  const handleSelect = (code) => {
    setSelectedRegion(code);
    setIsOpen(false);
    localStorage.setItem("selected-region", code);

    if (REGION_ROUTES[code]) {
      router.push(REGION_ROUTES[code]);
    }

    if (onRegionChange) {
      onRegionChange(code);
    }
  };

  const activeRegion =
    POPUP_REGIONS.find((r) => r.code === selectedRegion) || POPUP_REGIONS[1];

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3 py-1.5 border-0 rounded-none bg-transparent hover:bg-transparent shadow-none transition-all duration-200 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
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
              {TRIGGER_FLAGS.map((region, index) => (
                <div
                  key={region.code}
                  className="relative rounded-sm overflow-hidden border border-white shadow-xs transition-transform duration-200"
                  style={{
                    width: "20px",
                    height: "14px",
                    marginLeft: index === 0 ? "0px" : "-8px",
                    zIndex: TRIGGER_FLAGS.length - index,
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

        <svg
          className={`w-4 h-4 flex-shrink-0 ${isDark ? "text-white/80" : "text-[#4A4A4A]"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
          />
        </svg>
        <span
          className={`font-bold text-[11px] tracking-[0.14em] uppercase ${
            isDark ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {minimize ? selectedRegion : "Regions"}
        </span>

        <svg
          className={`w-3.5 h-3.5 text-[#F58220] transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <RegionPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={handleSelect}
        selectedCode={selectedRegion}
      />
    </div>
  );
}
