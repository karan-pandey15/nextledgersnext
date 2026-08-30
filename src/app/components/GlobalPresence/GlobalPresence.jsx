"use client";

import React, { useEffect, useState } from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";
const MAP_LAND = "#B8C9D9";
const MAP_LAND_SOFT = "#D0DCE8";

/* Soft continent silhouettes — viewBox 0 0 1000 500 */
const CONTINENT_PATHS = {
  northAmerica:
    "M 80 80 L 110 50 L 180 50 L 220 30 L 260 30 L 280 60 L 300 70 L 310 90 L 300 110 L 280 130 L 290 150 L 260 180 L 230 180 L 200 230 L 190 270 L 180 270 L 175 250 L 180 220 L 170 190 L 160 190 L 140 160 L 110 160 L 90 130 L 80 100 Z",
  greenland: "M 310 30 L 350 20 L 380 40 L 350 70 L 320 60 Z",
  southAmerica:
    "M 230 280 L 250 280 L 280 300 L 295 330 L 280 400 L 260 460 L 250 480 L 245 480 L 240 450 L 235 410 L 220 350 L 210 300 Z",
  eurasia:
    "M 420 120 L 460 70 L 520 60 L 600 50 L 700 40 L 800 50 L 880 60 L 930 80 L 960 110 L 970 140 L 940 200 L 910 230 L 870 240 L 840 220 L 820 250 L 780 270 L 740 270 L 710 290 L 680 280 L 650 280 L 640 250 L 610 240 L 590 260 L 570 260 L 550 220 L 520 235 L 500 220 L 470 240 L 450 200 L 420 180 L 430 150 Z",
  africa:
    "M 450 220 L 510 215 L 560 230 L 590 275 L 585 330 L 555 390 L 530 430 L 515 440 L 510 400 L 490 350 L 460 300 L 440 260 Z",
  australia: "M 820 340 L 870 330 L 910 350 L 925 385 L 900 420 L 850 415 L 820 375 Z",
  newZealand: "M 935 430 L 945 425 L 955 450 L 940 465 Z",
  uk: "M 445 95 L 455 90 L 460 105 L 450 115 Z",
  ireland: "M 430 100 L 440 95 L 440 105 L 430 110 Z",
  japan: "M 945 125 L 955 120 L 965 140 L 950 160 Z",
  madagascar: "M 590 365 L 605 355 L 610 390 L 595 400 Z",
};

const LOCATIONS = {
  india: { x: 685, y: 240, label: "INDIA HQ", code: "in", labelDy: -34 },
  canada: { x: 200, y: 95, label: "CANADA", code: "ca", labelDy: -26 },
  usa: { x: 195, y: 175, label: "USA", code: "us", labelDy: 30 },
  ireland: { x: 415, y: 110, label: "IRELAND", code: "ie", labelDy: -26 },
  uk: { x: 455, y: 92, label: "UK", code: "gb", labelDy: -26 },
  uae: { x: 605, y: 218, label: "UAE", code: "ae", labelDy: -26 },
  netherlands: { x: 500, y: 118, label: "NETHERLANDS", code: "nl", labelDy: 30 },
  singapore: { x: 790, y: 285, label: "SINGAPORE", code: "sg", labelDy: -26 },
  australia: { x: 860, y: 370, label: "AUSTRALIA", code: "au", labelDy: -26 },
  newZealand: { x: 935, y: 430, label: "NEW ZEALAND", code: "nz", labelDy: -26 },
};

const DESTINATIONS = [
  { key: "uae", target: LOCATIONS.uae },
  { key: "singapore", target: LOCATIONS.singapore },
  { key: "uk", target: LOCATIONS.uk },
  { key: "netherlands", target: LOCATIONS.netherlands },
  { key: "ireland", target: LOCATIONS.ireland },
  { key: "usa", target: LOCATIONS.usa },
  { key: "canada", target: LOCATIONS.canada },
  { key: "australia", target: LOCATIONS.australia },
  { key: "newZealand", target: LOCATIONS.newZealand },
];

function getCurvePath(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const midX = start.x + dx / 2;
  const midY = Math.min(start.y, end.y) - Math.max(36, Math.abs(dx) * 0.16);
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

function CountryMarker({ location, active = true, isHub = false }) {
  const r = isHub ? 22 : 14;
  const flagW = isHub ? 30 : 20;
  const flagH = isHub ? 20 : 13;
  const fontSize = isHub ? 11 : 9.5;
  const labelY = location.y + (location.labelDy ?? -(r + 8));

  return (
    <g opacity={active ? 1 : 0.35} style={{ transition: "opacity 0.4s ease" }}>
      {active && (
        <circle cx={location.x} cy={location.y} r={r + 5} fill={ORANGE} opacity="0.15">
          <animate attributeName="r" values={`${r + 3};${r + 9};${r + 3}`} dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0.04;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
      )}

      <circle
        cx={location.x}
        cy={location.y}
        r={r}
        fill="#FFFFFF"
        stroke={ORANGE}
        strokeWidth={isHub ? 2.8 : 2}
        filter="url(#gpSoftShadow)"
      />

      <image
        href={`https://flagcdn.com/w80/${location.code}.png`}
        x={location.x - flagW / 2}
        y={location.y - flagH / 2}
        width={flagW}
        height={flagH}
        preserveAspectRatio="xMidYMid slice"
      />

      <text
        x={location.x}
        y={labelY}
        fill={NAVY}
        fontSize={fontSize}
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="0.05em"
      >
        {location.label}
      </text>
    </g>
  );
}

function PresenceMap() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev >= DESTINATIONS.length + 2 ? 0 : prev + 1));
    }, 750);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 55%, #EEF3F8 100%)" }}
    >
      <svg
        viewBox="0 0 1000 480"
        className="block h-auto w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[360px]"
        role="img"
        aria-label="Global presence map showing Next Ledgers India HQ connected to 9+ countries"
      >
        <defs>
          <pattern id="gpMapDots" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.95" fill="#9BB0C4" />
          </pattern>
          <filter id="gpSoftShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#0F274A" floodOpacity="0.16" />
          </filter>
          <filter id="gpOrangeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="gpArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ORANGE} stopOpacity="0.4" />
            <stop offset="50%" stopColor={ORANGE} stopOpacity="1" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Soft filled continents (map background look) */}
        <g fill={MAP_LAND_SOFT} opacity="0.95">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={`soft-${key}`} d={d} />
          ))}
        </g>

        {/* Dotted overlay for textured map look */}
        <g fill="url(#gpMapDots)" opacity="0.55">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={`dot-${key}`} d={d} />
          ))}
        </g>

        {/* Subtle outlines */}
        <g fill="none" stroke={MAP_LAND} strokeWidth="0.8" opacity="0.45">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={`outline-${key}`} d={d} />
          ))}
        </g>

        {DESTINATIONS.map((item, idx) => {
          const isActive = step > idx;
          const path = getCurvePath(LOCATIONS.india, item.target);
          return (
            <g key={item.key}>
              <path
                d={path}
                fill="none"
                stroke="url(#gpArcGrad)"
                strokeWidth="2.1"
                filter="url(#gpOrangeGlow)"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 1400,
                  strokeDashoffset: isActive ? 0 : 1400,
                  opacity: isActive ? 0.95 : 0.1,
                  transition: "stroke-dashoffset 0.8s ease-out, opacity 0.35s ease",
                }}
              />
              {isActive && (
                <circle r="3.5" fill={ORANGE} filter="url(#gpOrangeGlow)">
                  <animateMotion dur="1.5s" repeatCount="indefinite" path={path} />
                </circle>
              )}
            </g>
          );
        })}

        {DESTINATIONS.map((item, idx) => (
          <CountryMarker
            key={`node-${item.key}`}
            location={item.target}
            active={step > idx}
          />
        ))}

        <CountryMarker location={LOCATIONS.india} active isHub />
      </svg>
    </div>
  );
}

/** Icons from /public/images/homepagelogo — matched by meaning */
const FEATURES = [
  { label: "Local Accounting Standards", logo: 7 }, // target / standards
  { label: "Global Communication", logo: 26 }, // globe + pin
  { label: "Time Zone Support", logo: 8 }, // clock + sync
  { label: "Secure Cloud Workflow", logo: 9 }, // cloud + shield
  { label: "Dedicated Team", logo: 4 }, // people group
];

export default function GlobalPresence() {
  return (
    <section
      id="trusted-by-businesses"
      className="w-full overflow-hidden bg-white scroll-mt-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
          <div className="order-1 text-center lg:text-left">
            <p
              className="text-[11px] sm:text-[12px] font-extrabold tracking-[0.2em] uppercase"
              style={{ color: ORANGE }}
            >
              GLOBAL PRESENCE
            </p>

            <h2
              className="mt-2.5 font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.015em] max-w-[480px] mx-auto lg:mx-0"
              style={{ color: NAVY }}
            >
              Trusted by Businesses
              <br />
              Across <span style={{ color: ORANGE }}>9+ Countries</span>
            </h2>

            <p
              className="mt-3.5 text-[14px] sm:text-[15px] leading-[1.6] max-w-[460px] mx-auto lg:mx-0"
              style={{ color: GREY }}
            >
              Supporting accounting firms, SMEs and growing businesses with dedicated offshore
              accounting teams across multiple jurisdictions.
            </p>

            <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 max-w-[480px] mx-auto lg:mx-0 text-left">
              {FEATURES.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3">
                  <span className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center sm:h-9 sm:w-9">
                    <HomeLogoImg n={feature.logo} alt="" />
                  </span>
                  <span
                    className="text-[13px] sm:text-[14px] font-semibold leading-snug"
                    style={{ color: NAVY }}
                  >
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 w-full min-w-0">
            <PresenceMap />
          </div>
        </div>
      </div>
    </section>
  );
}
