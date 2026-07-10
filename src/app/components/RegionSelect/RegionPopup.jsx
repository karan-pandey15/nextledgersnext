"use client";

import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { POPUP_REGIONS } from "./regionData";

const ORANGE = "#F58220";
const NAVY = "#0F274A";

function ShieldCheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2 5.5 6v5.4c0 4.2 2.9 8.1 6.5 9.1 3.6-1 6.5-4.9 6.5-9.1V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9.1 12 2 2 3.9-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RegionPopup({ isOpen, onClose, onSelect, selectedCode }) {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1C33]/45 backdrop-blur-[2px]"
        aria-label="Close region selector"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="region-popup-title"
        className="relative z-10 w-full max-w-[920px] max-h-[min(92vh,760px)] overflow-y-auto rounded-[20px] sm:rounded-[24px] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] border border-[#E5E7EB] bg-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#FFF0E4] hover:border-[#F58220]"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-black group-hover:text-[#F58220] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative z-10 px-5 sm:px-8 lg:px-10 pt-8 sm:pt-10 pb-6 sm:pb-8">
          <div className="text-center max-w-[640px] mx-auto">
            <h2
              id="region-popup-title"
              className="font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.01em]"
              style={{ color: NAVY }}
            >
              Select{" "}
              <span className="relative inline-block">
                Your
                <span
                  className="absolute left-[12%] -bottom-1.5 h-[3px] w-[62%] rounded-full"
                  style={{ backgroundColor: ORANGE }}
                  aria-hidden="true"
                />
              </span>{" "}
              <span style={{ color: ORANGE }}>Region</span>
            </h2>

            <p className="mt-5 sm:mt-6 text-[13px] sm:text-[14px] leading-6 text-[#6B7280]">
              Choose your region to explore our accounting
              <br />
              and advisory services tailored for your business.
            </p>
          </div>

          <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {POPUP_REGIONS.map((region) => {
              const isSelected = region.code === selectedCode;
              return (
                <button
                  key={region.code}
                  type="button"
                  onClick={() => onSelect(region.code)}
                  className={`group flex items-center gap-3 text-left rounded-[12px] bg-white px-3.5 py-3.5 sm:px-4 sm:py-4 min-h-[72px] border transition-all duration-200 shadow-[0_4px_14px_rgba(15,39,74,0.06)] hover:shadow-[0_8px_22px_rgba(15,39,74,0.1)] hover:border-[#F58220]/45 ${
                    isSelected ? "border-[#F58220]" : "border-[#ECEFF3]"
                  }`}
                >
                  <div className="w-[34px] h-[24px] sm:w-[36px] sm:h-[26px] rounded-[3px] overflow-hidden border border-[#E5E7EB] shadow-sm flex-shrink-0">
                    <img
                      src={region.flag}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="font-bold text-[13px] sm:text-[14px] leading-tight truncate"
                      style={{ color: NAVY }}
                    >
                      {region.name}
                    </p>
                    <p className="mt-1 text-[11px] sm:text-[12px] leading-[1.35] text-[#6B7280] line-clamp-2">
                      {region.description}
                    </p>
                  </div>

                  <span
                    className="flex-shrink-0 text-[18px] sm:text-[20px] font-light leading-none transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{ color: ORANGE }}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-7 rounded-[12px] sm:rounded-[14px] bg-[#FFF7F0] px-4 py-3.5 sm:px-5 sm:py-4 flex items-start sm:items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#F58220]/35 flex items-center justify-center text-[#F58220] flex-shrink-0 bg-white/60">
              <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-[13px] sm:text-[14px] leading-snug" style={{ color: NAVY }}>
                Global Standards. Local Expertise.
              </p>
              <p className="mt-0.5 text-[12px] sm:text-[13px] leading-5 text-[#6B7280]">
                Wherever your business is, we deliver secure, accurate, and reliable accounting
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
