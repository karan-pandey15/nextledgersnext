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

/**
 * Centered "Select Your Region" modal — used for the 5s home auto-popup.
 * Close via backdrop click, Escape, or the X button.
 */
export default function RegionPopup({
  isOpen,
  onClose,
  onSelect,
  selectedCode,
}) {
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
        className="relative z-10 w-full max-w-[920px] max-h-[min(92vh,760px)] overflow-y-auto rounded-[20px] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)] sm:rounded-[24px]"
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#F58220] hover:bg-[#FFF0E4] sm:top-5 sm:right-5 sm:h-9 sm:w-9"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-black transition-colors duration-200 group-hover:text-[#F58220]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative z-10 px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10">
          <div className="mx-auto max-w-[640px] text-center">
            <h2
              id="region-popup-title"
              className="text-[26px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[32px] lg:text-[36px]"
              style={{ color: NAVY }}
            >
              Select Your{" "}
              <span className="relative inline-block" style={{ color: ORANGE }}>
                Region
                <span
                  className="absolute left-[8%] -bottom-1.5 h-[3px] w-[84%] rounded-full"
                  style={{ backgroundColor: ORANGE }}
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="mt-5 text-[13px] leading-6 text-[#6B7280] sm:mt-6 sm:text-[14px]">
              Choose your region to explore our accounting and advisory services
              tailored for your business.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3.5 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {POPUP_REGIONS.map((region) => {
              const isSelected = region.code === selectedCode;
              return (
                <button
                  key={region.code}
                  type="button"
                  onClick={() => onSelect(region.code)}
                  className={`group flex min-h-[72px] items-center gap-3 rounded-[12px] border bg-white px-3.5 py-3.5 text-left shadow-[0_4px_14px_rgba(15,39,74,0.06)] transition-all duration-200 hover:border-[#F58220]/45 hover:shadow-[0_8px_22px_rgba(15,39,74,0.1)] sm:px-4 sm:py-4 ${
                    isSelected ? "border-[#F58220]" : "border-[#ECEFF3]"
                  }`}
                >
                  <div className="h-[24px] w-[34px] shrink-0 overflow-hidden rounded-[3px] border border-[#E5E7EB] shadow-sm sm:h-[26px] sm:w-[36px]">
                    <img
                      src={region.flag}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate text-[13px] font-bold leading-tight sm:text-[14px]"
                      style={{ color: NAVY }}
                    >
                      {region.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-[1.35] text-[#6B7280] sm:text-[12px]">
                      {region.description}
                    </p>
                  </div>

                  <span
                    className="shrink-0 text-[18px] font-light leading-none transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[20px]"
                    style={{ color: ORANGE }}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-start gap-3.5 rounded-[12px] bg-[#FFF7F0] px-4 py-3.5 sm:mt-7 sm:items-center sm:gap-4 sm:rounded-[14px] sm:px-5 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F58220]/35 bg-white/60 text-[#F58220] sm:h-11 sm:w-11">
              <ShieldCheckIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0">
              <p
                className="text-[13px] font-bold leading-snug sm:text-[14px]"
                style={{ color: NAVY }}
              >
                Global Standards. Local Expertise.
              </p>
              <p className="mt-0.5 text-[12px] leading-5 text-[#6B7280] sm:text-[13px]">
                Wherever your business is, we deliver secure, accurate, and
                reliable accounting services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
