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

/** Soft dotted world map + pins — matches the screenshot backdrop */
function PopupWorldMap() {
  const pins = [
    { x: 170, y: 95 },
    { x: 195, y: 130 },
    { x: 430, y: 85 },
    { x: 455, y: 78 },
    { x: 490, y: 92 },
    { x: 560, y: 140 },
    { x: 620, y: 155 },
    { x: 700, y: 175 },
    { x: 760, y: 210 },
  ];
  const hub = { x: 400, y: 230 };

  return (
    <svg
      viewBox="0 0 800 260"
      className="pointer-events-none absolute inset-x-0 top-0 h-[200px] w-full sm:h-[230px]"
      aria-hidden="true"
      preserveAspectRatio="xMidYMin slice"
    >
      <defs>
        <pattern id="regionPopupDots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.35" fill="#F5C39A" />
        </pattern>
        <linearGradient id="regionPopupFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#fff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Simplified continent silhouettes filled with dots */}
      <g fill="url(#regionPopupDots)" opacity="0.55">
        <path d="M70 70 L110 45 L190 42 L230 55 L250 90 L235 130 L200 160 L170 145 L140 120 L100 110 Z" />
        <path d="M200 170 L235 175 L255 210 L245 255 L220 250 L195 210 Z" />
        <path d="M390 85 L450 55 L560 50 L680 60 L740 90 L730 140 L680 155 L620 145 L560 160 L500 140 L440 130 L400 110 Z" />
        <path d="M430 155 L500 150 L540 180 L530 230 L490 250 L450 210 Z" />
        <path d="M700 185 L760 175 L790 200 L775 235 L720 230 Z" />
        <path d="M780 245 L800 240 L805 265 L785 275 Z" />
      </g>

      {/* Arcs from hub up to pins */}
      {pins.map((p, i) => {
        const cx = (hub.x + p.x) / 2;
        const cy = Math.min(hub.y, p.y) - 35 - (i % 3) * 8;
        return (
          <path
            key={i}
            d={`M ${hub.x} ${hub.y} Q ${cx} ${cy} ${p.x} ${p.y}`}
            fill="none"
            stroke={ORANGE}
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        );
      })}

      {pins.map((p, i) => (
        <g key={`pin-${i}`}>
          <circle cx={p.x} cy={p.y} r="4.5" fill={ORANGE} opacity="0.25" />
          <circle cx={p.x} cy={p.y} r="2.6" fill={ORANGE} />
        </g>
      ))}

      <circle cx={hub.x} cy={hub.y} r="4" fill={ORANGE} opacity="0.7" />

      <rect x="0" y="0" width="800" height="260" fill="url(#regionPopupFade)" />
    </svg>
  );
}

/**
 * Centered "Select Your Region" modal — matches screenshot layout.
 * 9 countries in a clean 3-column grid with readable card text.
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
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
        className="relative z-10 w-full max-w-[820px] max-h-[min(92vh,760px)] overflow-y-auto rounded-[18px] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)] sm:rounded-[22px]"
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#F58220] hover:bg-[#FFF0E4] sm:top-4 sm:right-4"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 text-black transition-colors duration-200 group-hover:text-[#F58220]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="relative overflow-hidden px-4 pb-5 pt-8 sm:px-7 sm:pb-6 sm:pt-9 lg:px-8">
          <PopupWorldMap />

          <div className="relative z-10 mx-auto max-w-[520px] text-center">
            <h2
              id="region-popup-title"
              className="text-[24px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[30px]"
              style={{ color: NAVY }}
            >
              Select Your{" "}
              <span className="relative inline-block" style={{ color: ORANGE }}>
                Region
                <span
                  className="absolute left-[6%] -bottom-1 h-[3px] w-[88%] rounded-full"
                  style={{ backgroundColor: ORANGE }}
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="mt-3 text-[13px] leading-5 text-[#6B7280] sm:mt-3.5 sm:text-[14px] sm:leading-6">
              Choose your region to explore our accounting and advisory services
              tailored for your business.
            </p>
          </div>

          {/* 9 countries — 3 columns on desktop, readable text */}
          <div className="region-popup-grid relative z-10 mt-6 sm:mt-7">
            {POPUP_REGIONS.map((region) => {
              const isSelected = region.code === selectedCode;
              return (
                <button
                  key={region.code}
                  type="button"
                  onClick={() => onSelect(region.code)}
                  className="group flex min-h-[72px] items-center gap-3 rounded-[12px] border bg-white px-3.5 py-3 text-left shadow-[0_2px_10px_rgba(15,39,74,0.04)] transition-all duration-200 hover:border-[#F58220]/50 hover:shadow-[0_6px_18px_rgba(15,39,74,0.08)] sm:min-h-[78px] sm:gap-3.5 sm:px-4 sm:py-3.5"
                  style={{
                    borderColor: isSelected ? ORANGE : "#E8ECF0",
                    borderWidth: isSelected ? 1.5 : 1,
                  }}
                >
                  <span className="inline-flex h-[18px] w-[26px] shrink-0 overflow-hidden rounded-[3px] border border-[#E5E7EB] sm:h-[20px] sm:w-[30px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={region.flag}
                      alt=""
                      className="block h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span
                      className="block text-[13px] font-bold leading-snug sm:text-[14px]"
                      style={{ color: NAVY }}
                    >
                      {region.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] leading-[1.35] text-[#6B7280] sm:text-[12px] sm:leading-snug">
                      {region.description}
                    </span>
                  </span>

                  <span
                    className="shrink-0 text-[18px] font-light leading-none text-[#F58220] transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative z-10 mt-5 flex items-start gap-3 rounded-[12px] border border-[#F58220]/20 bg-[#FFF7F0] px-3.5 py-3 sm:mt-6 sm:items-center sm:gap-3.5 sm:px-5 sm:py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F58220]/35 bg-white/70 text-[#F58220] sm:h-10 sm:w-10">
              <ShieldCheckIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p
                className="text-[13px] font-bold leading-snug sm:text-[14px]"
                style={{ color: NAVY }}
              >
                Global Standards. Local Expertise.
              </p>
              <p className="mt-0.5 text-[12px] leading-5 text-[#6B7280]">
                Wherever your business is, we deliver secure, accurate, and
                reliable accounting services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .region-popup-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 560px) {
          .region-popup-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
        }
        @media (min-width: 768px) {
          .region-popup-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
