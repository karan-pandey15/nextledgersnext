"use client";

import React from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

/** Orbiting icons around the shield */
const SATELLITES = [
  { id: "cloud", angle: -20, color: "#3B82F6", type: "cloud" },
  { id: "check", angle: 40, color: "#22C55E", type: "check" },
  { id: "doc", angle: 110, color: "#8B5CF6", type: "doc" },
  { id: "server", angle: 200, color: BRAND_ORANGE, type: "server" },
  { id: "user", angle: 280, color: "#3B82F6", type: "user" },
];

function SatelliteIcon({ type, color }) {
  if (type === "check") {
    return (
      <div
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_6px_18px_rgba(15,39,74,0.12)] flex items-center justify-center border border-[#F0F0F0]"
      >
        <div
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="none" aria-hidden="true">
            <path d="M5 10.5 8.2 13.7 15 6.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === "cloud") {
    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_6px_18px_rgba(15,39,74,0.12)] flex items-center justify-center border border-[#F0F0F0]">
        <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none" aria-hidden="true">
          <path
            d="M8.5 18.5h12A3.8 3.8 0 0 0 21 11.2a5.2 5.2 0 0 0-9.8-1.4A3.6 3.6 0 0 0 8.5 18.5Z"
            fill={color}
          />
          <rect x="15.2" y="14.2" width="5.2" height="4" rx="0.8" fill="#F59E0B" />
          <path d="M16.2 14.2v-1.2a1.6 1.6 0 0 1 3.2 0v1.2" stroke="#F59E0B" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }

  if (type === "doc") {
    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_6px_18px_rgba(15,39,74,0.12)] flex items-center justify-center border border-[#F0F0F0]">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <path d="M7 3.5h7l4 4V20a1.2 1.2 0 0 1-1.2 1.2H7A1.2 1.2 0 0 1 5.8 20V4.7A1.2 1.2 0 0 1 7 3.5Z" fill={color} />
          <path d="M14 3.5V8h4.2" fill="#C4B5FD" />
          <path d="M9 12h6M9 15h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (type === "server") {
    return (
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_6px_18px_rgba(15,39,74,0.12)] flex items-center justify-center border border-[#F0F0F0]">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6.5" rx="5.5" ry="2" fill={color} />
          <path d="M6.5 6.5v3.5c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V6.5" fill={color} opacity="0.85" />
          <path d="M6.5 10v3.5c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2V10" fill={color} opacity="0.7" />
          <path d="M6.5 13.5v3.5c0 1.1 2.5 2 5.5 2s5.5-.9 5.5-2v-3.5" fill={color} />
        </svg>
      </div>
    );
  }

  // user
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_6px_18px_rgba(15,39,74,0.12)] flex items-center justify-center border border-[#F0F0F0]">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="3.5" fill={color} />
        <path d="M5.5 19.5c1-4 3.5-6 6.5-6s5.5 2 6.5 6" fill={color} />
      </svg>
    </div>
  );
}

/** Stepped circular pedestal under the shield */
function SteppedBase() {
  return (
    <div className="relative w-[200px] sm:w-[240px] lg:w-[260px] mx-auto" aria-hidden="true">
      <div className="mx-auto h-3 sm:h-3.5 w-[72%] rounded-full bg-[#FFD4B8] shadow-inner" />
      <div className="mx-auto -mt-1 h-3.5 sm:h-4 w-[86%] rounded-full bg-[#FFE0CC]" />
      <div className="mx-auto -mt-1 h-4 sm:h-5 w-full rounded-full bg-gradient-to-b from-[#FFE8D6] to-[#FFD0B0] shadow-[0_8px_24px_rgba(255, 106, 0,0.2)]" />
      <div className="absolute inset-x-[8%] top-0 h-2 rounded-full bg-white/50 blur-[1px]" />
    </div>
  );
}

/** Protect / shield icon with lock */
function ProtectShield() {
  return (
    <svg
      viewBox="0 0 160 180"
      className="w-[120px] sm:w-[150px] lg:w-[168px] h-auto drop-shadow-[0_16px_36px_rgba(255, 106, 0,0.4)]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="protectGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9A4A" />
          <stop offset="45%" stopColor={BRAND_ORANGE} />
          <stop offset="100%" stopColor="#D9620F" />
        </linearGradient>
      </defs>
      <path
        d="M80 8 L148 36 V88 C148 132 112 162 80 172 C48 162 12 132 12 88 V36 Z"
        fill="url(#protectGrad)"
      />
      <path d="M80 8 L148 36 V88 C148 132 112 162 80 172 V8 Z" fill="#fff" opacity="0.12" />
      {/* Lock body */}
      <rect x="58" y="78" width="44" height="36" rx="6" fill="#fff" />
      <path d="M66 78V68a14 14 0 0 1 28 0v10" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M66 78V68a14 14 0 0 1 28 0v10" stroke={BRAND_ORANGE} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="96" r="4" fill={BRAND_ORANGE} />
    </svg>
  );
}

/**
 * Protect icon on stepped base — static (no rotation / orbit motion)
 */
export default function SecurityShieldMotion() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[440px] items-center justify-center">
      {/* Soft glow */}
      <div className="absolute inset-[10%] rounded-full bg-[#FFE8D4]/80 blur-2xl" aria-hidden="true" />

      {/* Orbit guide rings */}
      <div
        className="absolute rounded-full border border-dashed border-[#D1D5DB]/80"
        style={{ width: "82%", height: "82%" }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full border border-[#E5E7EB]"
        style={{ width: "62%", height: "62%" }}
        aria-hidden="true"
      />

      {/* Satellite icons — fixed positions */}
      <div className="absolute inset-0 z-20">
        {SATELLITES.map((sat) => {
          const rad = ((sat.angle - 90) * Math.PI) / 180;
          const radiusPercent = 40;
          const x = 50 + radiusPercent * Math.cos(rad);
          const y = 50 + radiusPercent * Math.sin(rad);

          return (
            <div
              key={sat.id}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                translate: "-50% -50%",
              }}
            >
              <SatelliteIcon type={sat.type} color={sat.color} />
            </div>
          );
        })}
      </div>

      {/* Center stack: static protect icon + stepped base */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative z-10 -mb-3 sm:-mb-4">
          <ProtectShield />
        </div>
        <SteppedBase />
      </div>
    </div>
  );
}
