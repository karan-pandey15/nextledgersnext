"use client";

import React, { useEffect, useId, useState } from "react";

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
 * Pin (x,y) = exact line target on the map.
 * Flag/label sit directly above that same pin so the arc always hits the country.
 */
function makeLocation({ x, y, label, code, isHub = false }) {
  const flagW = isHub ? 40 : 34;
  const flagH = isHub ? 26 : 22;
  return {
    x,
    y,
    label,
    code,
    flagX: x - flagW / 2,
    flagY: y - flagH - 18,
    labelY: y - flagH - 24,
  };
}

const LOCATIONS = {
  india: makeLocation({
    x: 685,
    y: 240,
    label: "INDIA HQ",
    code: "in",
    isHub: true,
  }),
  // North America
  canada: makeLocation({ x: 205, y: 95, label: "CANADA", code: "ca" }),
  usa: makeLocation({ x: 195, y: 170, label: "USA", code: "us" }),
  // Europe
  ireland: makeLocation({ x: 425, y: 108, label: "IRELAND", code: "ie" }),
  uk: makeLocation({ x: 455, y: 95, label: "UK", code: "gb" }),
  netherlands: makeLocation({ x: 500, y: 118, label: "NETHERLANDS", code: "nl" }),
  // Middle East / Asia / Oceania
  uae: makeLocation({ x: 600, y: 218, label: "UAE", code: "ae" }),
  singapore: makeLocation({ x: 788, y: 282, label: "SINGAPORE", code: "sg" }),
  australia: makeLocation({ x: 865, y: 370, label: "AUSTRALIA", code: "au" }),
  newZealand: makeLocation({ x: 940, y: 432, label: "NEW ZEALAND", code: "nz" }),
};

/** Animation order — each line draws from India HQ to one country only */
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

/**
 * Quadratic curve India → country pin.
 * Mild lift only — endpoint is always the exact country (x,y).
 */
function getCurvePath(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dist = Math.hypot(dx, dy);

  // Short hops (UAE, Singapore): almost straight so they don't miss the pin
  // Long hops (USA, Canada): gentle upward arc
  const lift =
    dist < 160 ? Math.max(12, dist * 0.08) : Math.min(70, dist * 0.12);

  const midX = start.x + dx * 0.5;
  const midY = start.y + dy * 0.5 - lift;

  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}

function CountryMarker({ location, active = true, isHub = false }) {
  const flagW = isHub ? 40 : 34;
  const flagH = isHub ? 26 : 22;
  const fontSize = isHub ? 11 : 10;

  return (
    <g
      opacity={active ? 1 : 0.35}
      style={{ transition: "opacity 0.45s ease" }}
    >
      {active && (
        <circle
          cx={location.x}
          cy={location.y}
          r={isHub ? 12 : 8}
          fill={ORANGE}
          opacity="0.28"
        >
          <animate
            attributeName="r"
            values={isHub ? "10;16;10" : "7;12;7"}
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.06;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      <circle
        cx={location.x}
        cy={location.y}
        r={isHub ? 6 : 4}
        fill={ORANGE}
      />

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

/** One India → country arc. Hidden until its turn; never links country↔country. */
function HubArc({ pathD, active }) {
  return (
    <g
      opacity={active ? 1 : 0}
      style={{
        transition: "opacity 0.35s ease",
        pointerEvents: "none",
      }}
    >
      <path
        d={pathD}
        fill="none"
        stroke={ORANGE}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="6 7"
      />

      {/* Pulse rides this arc only — no orphan dots off the path */}
      {active && (
        <circle r="3.2" fill={ORANGE}>
          <animateMotion dur="2s" repeatCount="indefinite" path={pathD} />
        </circle>
      )}
    </g>
  );
}

export default function FooterGlobalMap() {
  const uid = useId().replace(/:/g, "");
  const [step, setStep] = useState(0);

  // step 0 = only India
  // step 1..N = draw arc to destination[step-1]
  // then pause, then reset
  const totalSteps = DESTINATIONS.length + 2;

  useEffect(() => {
    const id = setInterval(() => {
      setStep((prev) => (prev >= totalSteps - 1 ? 0 : prev + 1));
    }, 800);
    return () => clearInterval(id);
  }, [totalSteps]);

  return (
    <div className="relative w-full overflow-visible">
      <svg
        viewBox="0 0 1000 480"
        className="block h-auto w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px]"
        role="img"
        aria-label="Global connectivity map from India HQ to USA, Canada, UK, Ireland, Netherlands, UAE, Singapore, Australia and New Zealand"
      >
        <defs>
          <pattern
            id={`footerMapDots-${uid}`}
            width="7"
            height="7"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.1" cy="1.1" r="1.05" fill="#6B9BB8" />
          </pattern>
        </defs>

        <g fill={`url(#footerMapDots-${uid})`} opacity="0.75">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={key} d={d} />
          ))}
        </g>

        <g fill="none" stroke="#6B9BB8" strokeWidth="0.6" opacity="0.25">
          {Object.entries(CONTINENT_PATHS).map(([key, d]) => (
            <path key={`o-${key}`} d={d} />
          ))}
        </g>

        {/* Hub-and-spoke: ONLY India → each country. No country-to-country links. */}
        {DESTINATIONS.map((item, idx) => {
          const pathD = getCurvePath(LOCATIONS.india, item.target);
          // step 0 = India only; step 1 reveals first arc, etc.
          const active = step > idx;

          return (
            <HubArc key={item.key} pathD={pathD} active={active} />
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
