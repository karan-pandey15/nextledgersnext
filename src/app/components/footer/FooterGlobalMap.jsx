"use client";

import React, { useEffect, useId, useState } from "react";

const ORANGE = "#F58220";
const DOT = "#7EB6D4";

/** Dotted continent silhouettes — viewBox 0 0 1000 520 */
const CONTINENTS = {
  northAmerica:
    "M70 100 C100 55 160 42 210 50 C255 58 290 45 320 60 C345 75 355 105 348 135 C340 170 318 195 300 220 C280 245 285 265 260 280 C235 295 205 285 185 305 C165 325 155 345 148 335 C140 320 155 285 148 255 C140 225 125 200 108 180 C88 155 72 130 70 100 Z",
  alaska: "M48 75 C68 55 95 58 108 78 C95 95 68 98 48 88 Z",
  greenland: "M295 40 C325 22 360 32 368 58 C362 82 338 90 312 80 C295 72 285 55 295 40 Z",
  southAmerica:
    "M215 290 C245 278 278 295 292 330 C302 365 295 410 278 445 C265 470 250 490 240 492 C230 490 225 470 222 445 C218 410 212 370 208 340 C204 310 205 295 215 290 Z",
  europe:
    "M435 100 C465 78 505 78 535 95 C555 108 565 130 555 148 C542 168 518 172 495 165 C472 158 455 148 442 152 C432 155 425 130 435 100 Z",
  uk: "M450 92 C460 84 472 88 470 102 C468 114 458 120 450 114 C444 108 444 98 450 92 Z",
  ireland: "M432 102 C440 96 450 100 448 112 C446 120 436 122 432 116 C428 110 428 106 432 102 Z",
  africa:
    "M468 178 C512 168 558 180 578 218 C592 250 588 295 578 335 C568 375 548 410 528 438 C512 458 500 462 496 442 C490 415 485 380 475 345 C465 310 455 275 450 245 C445 215 450 188 468 178 Z",
  madagascar: "M582 365 C595 355 608 370 605 395 C602 415 590 420 582 405 C576 390 576 375 582 365 Z",
  asia:
    "M555 98 C605 72 680 58 750 62 C815 66 875 80 925 105 C955 125 972 155 965 185 C958 215 930 235 900 242 C872 248 852 235 838 250 C822 268 802 282 775 285 C748 288 728 272 708 280 C688 288 668 282 648 272 C628 262 612 245 592 250 C575 254 560 238 552 215 C544 192 540 165 555 140 C562 120 548 108 555 98 Z",
  india:
    "M682 238 C700 225 722 232 728 255 C734 282 722 310 705 325 C690 335 680 322 676 298 C672 275 670 250 682 238 Z",
  seAsia:
    "M785 288 C808 280 828 298 830 320 C825 338 805 340 788 325 C775 310 772 295 785 288 Z",
  japan: "M925 135 C940 125 955 138 952 158 C948 175 932 180 922 165 C915 152 915 142 925 135 Z",
  australia:
    "M808 348 C850 328 908 335 935 368 C948 390 942 420 915 435 C882 450 842 442 818 415 C798 392 790 365 808 348 Z",
  newZealand: "M948 438 C960 430 972 445 968 465 C962 480 950 482 944 468 C940 455 940 445 948 438 Z",
};

/**
 * x,y = pin + line endpoint (line touches the orange dot).
 * labelSide = where name/flag sit so arcs never cross them.
 */
const HUB = {
  key: "india",
  x: 700,
  y: 278,
  label: "INDIA",
  code: "in",
  labelSide: "above",
};

const DESTINATIONS = [
  // West — labels LEFT (arcs arrive from the right / above)
  { key: "canada", x: 175, y: 95, label: "CANADA", code: "ca", labelSide: "left", lift: 0.4 },
  { key: "usa", x: 160, y: 215, label: "USA", code: "us", labelSide: "left", lift: 0.36 },
  // Europe — spread apart; labels away from India-side arcs
  { key: "ireland", x: 390, y: 135, label: "IRELAND", code: "ie", labelSide: "left", lift: 0.26 },
  { key: "uk", x: 455, y: 82, label: "UK", code: "gb", labelSide: "left", lift: 0.3 },
  { key: "netherlands", x: 555, y: 145, label: "NETHERLANDS", code: "nl", labelSide: "right", lift: 0.24 },
  // Near India — label opposite the arc
  { key: "uae", x: 575, y: 255, label: "UAE", code: "ae", labelSide: "left", lift: 0.1 },
  // East / Oceania — labels RIGHT or below (arcs arrive from the left)
  { key: "singapore", x: 825, y: 325, label: "SINGAPORE", code: "sg", labelSide: "right", lift: 0.12 },
  { key: "australia", x: 855, y: 415, label: "AUSTRALIA", code: "au", labelSide: "left", lift: 0.18 },
  { key: "newZealand", x: 965, y: 470, label: "NEW ZEALAND", code: "nz", labelSide: "right", lift: 0.22 },
];

function curvePath(start, end, liftFactor) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const dist = Math.hypot(dx, dy);
  // Milder lift so arcs stay above the map but land cleanly on the pin
  const lift = Math.max(24, Math.min(130, dist * liftFactor));
  const cx = start.x + dx * 0.45;
  // Keep control point so the approach to the pin is from above-center,
  // while flags sit left/right of the pin (clear of the path).
  const cy = Math.min(start.y, end.y) - lift;
  return `M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`;
}

function approxLen(start, end) {
  return Math.hypot(end.x - start.x, end.y - start.y) * 1.4;
}

const LABEL_SIDE_STYLE = {
  left: {
    right: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginRight: 10,
    alignItems: "flex-end",
  },
  right: {
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: 10,
    alignItems: "flex-start",
  },
  above: {
    left: "50%",
    bottom: "100%",
    transform: "translateX(-50%)",
    marginBottom: 10,
    alignItems: "center",
  },
  below: {
    left: "50%",
    top: "100%",
    transform: "translateX(-50%)",
    marginTop: 10,
    alignItems: "center",
  },
};

/**
 * Pin at (x,y) = arc endpoint.
 * Name + flag offset to labelSide so lines never cross the flag.
 */
function CountryMarker({
  x,
  y,
  label,
  code,
  isHub = false,
  visible,
  labelSide = "above",
}) {
  if (!visible) return null;

  const flagW = isHub ? 32 : 26;
  const flagH = isHub ? 20 : 16;
  const pin = isHub ? 11 : 7;
  const side = LABEL_SIDE_STYLE[labelSide] || LABEL_SIDE_STYLE.above;

  return (
    <div
      className="pointer-events-none absolute z-30"
      style={{
        left: `${(x / 1000) * 100}%`,
        top: `${(y / 520) * 100}%`,
        transform: "translate(-50%, -50%)",
        animation: "fgm-fade-in 0.35s ease-out",
      }}
    >
      <div
        className="absolute flex flex-col gap-[3px]"
        style={{
          ...side,
          zIndex: 2,
        }}
      >
        <span
          className="whitespace-nowrap font-extrabold uppercase tracking-[0.08em] text-white"
          style={{
            fontSize: isHub ? 10 : 9,
            lineHeight: 1,
            textShadow:
              "0 1px 3px rgba(0,0,0,0.95), 0 0 8px rgba(0,0,0,0.7)",
          }}
        >
          {label}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w80/${code}.png`}
          alt=""
          width={flagW}
          height={flagH}
          draggable={false}
          className="block rounded-[1px]"
          style={{
            width: flagW,
            height: flagH,
            objectFit: "cover",
            boxShadow: "0 1px 3px rgba(0,0,0,0.55)",
          }}
        />
      </div>

      <span className="relative block z-[1]" style={{ width: pin, height: pin }}>
        <span
          className="absolute left-1/2 top-1/2 block rounded-full"
          style={{
            width: isHub ? 26 : 16,
            height: isHub ? 26 : 16,
            marginLeft: isHub ? -13 : -8,
            marginTop: isHub ? -13 : -8,
            background: ORANGE,
            opacity: 0.28,
            animation: "fgm-pulse 2s ease-in-out infinite",
          }}
        />
        <span
          className="absolute inset-0 block rounded-full"
          style={{
            background: ORANGE,
            boxShadow: `0 0 ${isHub ? 12 : 8}px 2px ${ORANGE}`,
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 block rounded-full bg-[#FFF5EB]"
          style={{
            width: isHub ? 4 : 2.5,
            height: isHub ? 4 : 2.5,
            marginLeft: isHub ? -2 : -1.25,
            marginTop: isHub ? -2 : -1.25,
          }}
        />
      </span>
    </div>
  );
}

function Arc({ d, len, phase, glowId }) {
  const drawing = phase === "drawing";
  const done = phase === "done";
  if (!drawing && !done) return null;

  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={ORANGE}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.2"
        filter={`url(#${glowId})`}
      />
      <path
        d={d}
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray={len}
        strokeDashoffset={done ? 0 : len}
        filter={`url(#${glowId})`}
      >
        {drawing && (
          <animate
            attributeName="stroke-dashoffset"
            from={len}
            to="0"
            dur="1.15s"
            fill="freeze"
          />
        )}
      </path>
      <path
        d={d}
        fill="none"
        stroke="#FFD9B0"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.8"
        strokeDasharray={len}
        strokeDashoffset={done ? 0 : len}
      >
        {drawing && (
          <animate
            attributeName="stroke-dashoffset"
            from={len}
            to="0"
            dur="1.15s"
            fill="freeze"
          />
        )}
      </path>
      {drawing && (
        <circle r="3.4" fill="#FFE8D0" filter={`url(#${glowId})`}>
          <animateMotion dur="1.15s" fill="freeze" path={d} />
        </circle>
      )}
    </g>
  );
}

function DottedMap({ dotsId }) {
  return (
    <svg
      viewBox="0 0 1000 520"
      className="block h-auto w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={dotsId}
          width="6"
          height="6"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1.05" fill={DOT} />
        </pattern>
      </defs>
      <rect width="1000" height="520" fill="transparent" />
      <g fill={`url(#${dotsId})`} opacity="0.92">
        {Object.entries(CONTINENTS).map(([key, d]) => (
          <path key={key} d={d} />
        ))}
      </g>
      <g fill="none" stroke={DOT} strokeWidth="0.5" opacity="0.28">
        {Object.entries(CONTINENTS).map(([key, d]) => (
          <path key={`o-${key}`} d={d} />
        ))}
      </g>
    </svg>
  );
}

export default function FooterGlobalMap() {
  const uid = useId().replace(/:/g, "");
  const dotsId = `fgm-dots-${uid}`;
  const glowId = `fgm-glow-${uid}`;
  const [activeIdx, setActiveIdx] = useState(-1);
  const [doneKeys, setDoneKeys] = useState(() => new Set());

  // Line draws first → then flag/dot appear → next country
  useEffect(() => {
    let cancelled = false;
    let t = null;
    const wait = (ms) =>
      new Promise((res) => {
        t = setTimeout(res, ms);
      });

    (async () => {
      while (!cancelled) {
        setDoneKeys(new Set());
        setActiveIdx(-1);
        await wait(600);
        if (cancelled) break;

        for (let i = 0; i < DESTINATIONS.length; i++) {
          if (cancelled) break;
          // 1) draw line only (no flag yet)
          setActiveIdx(i);
          await wait(1200);
          if (cancelled) break;
          // 2) line arrived → reveal flag + dot
          setDoneKeys((prev) => new Set(prev).add(DESTINATIONS[i].key));
          setActiveIdx(-1);
          await wait(500);
        }

        if (cancelled) break;
        await wait(2400);
      }
    })();

    return () => {
      cancelled = true;
      if (t) clearTimeout(t);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-visible"
      role="img"
      aria-label="Global connectivity from India to USA, Canada, UK, Ireland, Netherlands, UAE, Singapore, Australia and New Zealand"
    >
      <style>{`
        @keyframes fgm-pulse {
          0%, 100% { transform: scale(1); opacity: 0.28; }
          50% { transform: scale(1.35); opacity: 0.08; }
        }
        @keyframes fgm-fade-in {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>

      <div className="relative w-full min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] pb-1">
        <DottedMap dotsId={dotsId} />

        <svg
          viewBox="0 0 1000 520"
          className="pointer-events-none absolute inset-0 h-full w-full z-10"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {DESTINATIONS.map((dest, idx) => {
            const d = curvePath(HUB, dest, dest.lift);
            const len = approxLen(HUB, dest);
            let phase = "idle";
            if (doneKeys.has(dest.key)) phase = "done";
            else if (activeIdx === idx) phase = "drawing";
            return (
              <Arc
                key={`${dest.key}-${phase}`}
                d={d}
                len={len}
                phase={phase}
                glowId={glowId}
              />
            );
          })}
        </svg>

        {/* Destinations: hidden until their line finishes */}
        {DESTINATIONS.map((dest) => (
          <CountryMarker
            key={dest.key}
            x={dest.x}
            y={dest.y}
            label={dest.label}
            code={dest.code}
            labelSide={dest.labelSide}
            visible={doneKeys.has(dest.key)}
          />
        ))}

        {/* India hub always visible — lines start here */}
        <CountryMarker
          x={HUB.x}
          y={HUB.y}
          label={HUB.label}
          code={HUB.code}
          labelSide={HUB.labelSide}
          isHub
          visible
        />
      </div>
    </div>
  );
}
