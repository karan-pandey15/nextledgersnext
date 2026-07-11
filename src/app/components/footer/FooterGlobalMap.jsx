"use client";

import React, { useEffect, useState } from "react";

const ORANGE = "#F58220";

/* Real continent silhouettes (viewBox 0 0 1000 500) */
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

/**
 * Pin + flag/label placement tuned so country names stay readable
 * and AU / NZ are not clipped at the edge.
 */
const LOCATIONS = {
  india: {
    x: 640,
    y: 220,
    label: "INDIA",
    code: "in",
    flagX: 652,
    flagY: 198,
    labelY: 190,
  },
  uk: {
    x: 450,
    y: 105,
    label: "UK",
    code: "gb",
    flagX: 418,
    flagY: 58,
    labelY: 50,
  },
  usa: {
    x: 240,
    y: 155,
    label: "USA",
    code: "us",
    flagX: 198,
    flagY: 122,
    labelY: 114,
  },
  ireland: {
    x: 435,
    y: 102,
    label: "IRELAND",
    code: "ie",
    flagX: 368,
    flagY: 118,
    labelY: 110,
  },
  canada: {
    x: 235,
    y: 125,
    label: "CANADA",
    code: "ca",
    flagX: 228,
    flagY: 72,
    labelY: 64,
  },
  australia: {
    x: 855,
    y: 365,
    label: "AUSTRALIA",
    code: "au",
    flagX: 820,
    flagY: 318,
    labelY: 310,
  },
  newZealand: {
    x: 920,
    y: 420,
    label: "NEW ZEALAND",
    code: "nz",
    flagX: 860,
    flagY: 430,
    labelY: 422,
  },
};

const DESTINATIONS = [
  { key: "uk", target: LOCATIONS.uk },
  { key: "usa", target: LOCATIONS.usa },
  { key: "ireland", target: LOCATIONS.ireland },
  { key: "canada", target: LOCATIONS.canada },
  { key: "australia", target: LOCATIONS.australia },
  { key: "newZealand", target: LOCATIONS.newZealand },
];

function getCurvePath(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const cx = start.x + dx / 2;
  const cy = Math.min(start.y, end.y) - Math.max(50, Math.abs(dx) * 0.2);
  return `M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`;
}

function CountryMarker({ location, active = true, isHub = false }) {
  const flagW = isHub ? 48 : 44;
  const flagH = isHub ? 30 : 28;
  const fontSize = isHub ? 13 : 12;

  return (
    <g opacity={active ? 1 : 0.45} className="transition-opacity duration-500">
      {active && (
        <circle
          cx={location.x}
          cy={location.y}
          r={isHub ? 14 : 9}
          fill={ORANGE}
          opacity="0.28"
          className={isHub ? "animate-ping" : active ? "animate-ping" : undefined}
        />
      )}
      <circle
        cx={location.x}
        cy={location.y}
        r={isHub ? 5.5 : 3.5}
        fill={ORANGE}
        filter="url(#footerOrangeGlow)"
      />

      {/* Always-visible country label */}
      <text
        x={location.flagX + flagW / 2}
        y={location.labelY}
        fill="#FFFFFF"
        fontSize={fontSize}
        fontWeight="800"
        textAnchor="middle"
        letterSpacing="0.04em"
        style={{ textShadow: "0 1px 3px rgba(0,0,0,0.85)" }}
      >
        {location.label}
      </text>

      <image
        href={`https://flagcdn.com/w80/${location.code}.png`}
        x={location.flagX}
        y={location.flagY}
        width={flagW}
        height={flagH}
        preserveAspectRatio="xMidYMid slice"
      />
    </g>
  );
}

export default function FooterGlobalMap() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev >= DESTINATIONS.length + 3 ? 0 : prev + 1));
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full overflow-visible">
      {/* Slightly taller + wider canvas so labels fit */}
      <svg
        viewBox="0 0 1000 480"
        className="block h-auto w-full min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]"
        role="img"
        aria-label="Global connectivity map showing Next Ledgers locations"
      >
        <defs>
          <pattern id="footerMapDots" width="7" height="7" patternUnits="userSpaceOnUse">
            <circle cx="1.1" cy="1.1" r="1.05" fill="#6B9BB8" />
          </pattern>
          <filter id="footerOrangeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="footerArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={ORANGE} stopOpacity="0.4" />
            <stop offset="45%" stopColor={ORANGE} stopOpacity="1" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0.55" />
          </linearGradient>
        </defs>

        <g fill="url(#footerMapDots)" opacity="0.75">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={key} d={d} />
          ))}
        </g>

        <g fill="none" stroke="#6B9BB8" strokeWidth="0.6" opacity="0.25">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={`o-${key}`} d={d} />
          ))}
        </g>

        {DESTINATIONS.map((item, idx) => {
          const isActive = step > idx;
          return (
            <path
              key={item.key}
              d={getCurvePath(LOCATIONS.india, item.target)}
              fill="none"
              stroke="url(#footerArcGrad)"
              strokeWidth="2.2"
              filter="url(#footerOrangeGlow)"
              strokeLinecap="round"
              style={{
                strokeDasharray: 1200,
                strokeDashoffset: isActive ? 0 : 1200,
                opacity: isActive ? 0.95 : 0.12,
                transition: "stroke-dashoffset 0.9s ease-out, opacity 0.35s ease",
              }}
            />
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
