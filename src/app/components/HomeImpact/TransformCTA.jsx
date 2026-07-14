"use client";

import React from "react";
import { Phone } from "lucide-react";
import CtaButton from "@/app/components/ui/CtaButton";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;

/**
 * Theme: growing your business globally
 * Left  — stairs: leader on top, others climbing / growing
 * Right — orbiting global network (worldwide reach)
 * Center stays clear for headline + CTAs
 */
function CtaBackdrop() {
  const orbitNodes = [
    { angle: -20, r: 118 },
    { angle: 35, r: 118 },
    { angle: 95, r: 118 },
    { angle: 160, r: 118 },
    { angle: 220, r: 118 },
    { angle: 280, r: 118 },
    { angle: 10, r: 78 },
    { angle: 130, r: 78 },
    { angle: 250, r: 78 },
  ];

  const toXY = (angleDeg, radius, cx = 980, cy = 190) => {
    const rad = (angleDeg * Math.PI) / 180;
    return [cx + Math.cos(rad) * radius, cy + Math.sin(rad) * radius];
  };

  return (
    <svg
      viewBox="0 0 1200 380"
      className="absolute inset-0 h-full w-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="stairFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ORANGE} stopOpacity="0.35" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="stairSide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A3050" stopOpacity="0.9" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="globeCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A3050" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#0E1A2E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#070E1A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={ORANGE} stopOpacity="0.9" />
          <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sideScrimL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#070E1A" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#070E1A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#070E1A" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="sideScrimR" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#070E1A" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#070E1A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#070E1A" stopOpacity="0.92" />
        </linearGradient>
      </defs>

      {/* Ambient particles — growth / opportunity */}
      <g fill={ORANGE}>
        {[
          [120, 55],
          [210, 90],
          [300, 48],
          [420, 70],
          [780, 55],
          [860, 95],
          [1040, 70],
          [1120, 120],
          [500, 320],
          [640, 300],
        ].map(([x, y], i) => (
          <circle key={`p-${i}`} cx={x} cy={y} r={i % 3 === 0 ? 1.8 : 1.2} opacity={0.25 + (i % 4) * 0.08} />
        ))}
      </g>

      {/* ── LEFT: Stairs — leader on top, others following / growing ── */}
      <g>
        {/* Soft wash behind stairs */}
        <ellipse cx="160" cy="240" rx="150" ry="130" fill={ORANGE} opacity="0.05" />

        {/* Staircase (5 steps) — tread tops for people: y = 292, 248, 204, 160, 116 */}
        <path
          d="M28 336
             H88 V292
             H138 V248
             H188 V204
             H238 V160
             H295 V116
             H320 V336 Z"
          fill="url(#stairSide)"
          opacity="0.85"
        />
        {/* Step treads (top faces) */}
        {[
          [28, 292, 60],
          [88, 248, 50],
          [138, 204, 50],
          [188, 160, 50],
          [238, 116, 57],
        ].map(([x, y, w], i) => (
          <rect
            key={`tread-${i}`}
            x={x}
            y={y}
            width={w}
            height="5"
            rx="1.5"
            fill="url(#stairFace)"
            opacity={0.55 + i * 0.08}
          />
        ))}
        {/* Step riser edges */}
        <path
          d="M88 336 V292 M138 292 V248 M188 248 V204 M238 204 V160 M295 160 V116"
          fill="none"
          stroke={ORANGE}
          strokeWidth="1.2"
          opacity="0.35"
        />

        {/* Follower 1 — bottom step */}
        <g transform="translate(58 292)" opacity="0.55">
          <circle cx="0" cy="-38" r="6.5" fill="#C5CED9" />
          <path
            d="M0 -30 C-9 -28, -11 -12, -10 0 L-5 0 C-4 -10, -3 -18, 0 -22 C3 -18, 4 -10, 5 0 L10 0 C11 -12, 9 -28, 0 -30 Z"
            fill="#A8B8CC"
          />
          <path d="M-4 0 L-6 14 M4 0 L7 14" stroke="#A8B8CC" strokeWidth="3.2" strokeLinecap="round" />
        </g>

        {/* Follower 2 — second step */}
        <g transform="translate(113 248)" opacity="0.7">
          <circle cx="0" cy="-40" r="7" fill="#D0D8E4" />
          <path
            d="M0 -31 C-10 -29, -12 -12, -11 0 L-5 0 C-4 -11, -3 -19, 0 -23 C3 -19, 4 -11, 5 0 L11 0 C12 -12, 10 -29, 0 -31 Z"
            fill="#B8C4D4"
          />
          <path d="M-4 0 L-7 15 M5 0 L8 15" stroke="#B8C4D4" strokeWidth="3.4" strokeLinecap="round" />
          {/* reaching up */}
          <path d="M8 -18 L16 -28" stroke="#B8C4D4" strokeWidth="2.6" strokeLinecap="round" />
        </g>

        {/* Follower 3 — third step */}
        <g transform="translate(163 204)" opacity="0.85">
          <circle cx="0" cy="-42" r="7.5" fill="#E2E8F0" />
          <path
            d="M0 -32 C-10 -30, -13 -12, -11 0 L-5 0 C-4 -11, -3 -20, 0 -24 C3 -20, 4 -11, 5 0 L11 0 C13 -12, 10 -30, 0 -32 Z"
            fill="#C5CED9"
          />
          <path d="M-4 0 L-6 16 M5 0 L8 16" stroke="#C5CED9" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M9 -20 L18 -32" stroke="#C5CED9" strokeWidth="2.8" strokeLinecap="round" />
        </g>

        {/* Leader — top step (orange, stronger) */}
        <g transform="translate(266 116)">
          {/* glow under leader */}
          <circle cx="0" cy="-8" r="28" fill="url(#nodePulse)" opacity="0.45" />
          <circle cx="0" cy="-46" r="8.5" fill={ORANGE} />
          <path
            d="M0 -35 C-12 -33, -14 -12, -12 0 L-5 0 C-4 -12, -3 -22, 0 -26 C3 -22, 4 -12, 5 0 L12 0 C14 -12, 12 -33, 0 -35 Z"
            fill={ORANGE}
          />
          <path d="M-5 0 L-7 18 M5 0 L8 18" stroke={ORANGE} strokeWidth="3.8" strokeLinecap="round" />
          {/* arms open / leading upward */}
          <path d="M-10 -22 L-22 -36" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" />
          <path d="M10 -22 L22 -40" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" />
          {/* growth spark above */}
          <path
            d="M2 -62 L5 -72 L8 -62 L18 -59 L8 -56 L5 -46 L2 -56 L-8 -59 Z"
            fill={ORANGE}
            opacity="0.95"
          />
        </g>
      </g>

      <rect x="0" y="0" width="380" height="380" fill="url(#sideScrimL)" />

      {/* ── RIGHT: Global network ── */}
      <g>
        {/* Soft globe core */}
        <circle cx="980" cy="190" r="145" fill="url(#globeCore)" />

        {/* Orbit rings */}
        <ellipse
          cx="980"
          cy="190"
          rx="118"
          ry="118"
          fill="none"
          stroke="#3A5578"
          strokeWidth="1.2"
          opacity="0.55"
        />
        <ellipse
          cx="980"
          cy="190"
          rx="78"
          ry="78"
          fill="none"
          stroke="#3A5578"
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Tilted orbit suggesting planet / global */}
        <ellipse
          cx="980"
          cy="190"
          rx="130"
          ry="48"
          fill="none"
          stroke={ORANGE}
          strokeWidth="1.3"
          opacity="0.35"
          transform="rotate(-18 980 190)"
        />
        <ellipse
          cx="980"
          cy="190"
          rx="130"
          ry="48"
          fill="none"
          stroke="#4A6A90"
          strokeWidth="1"
          opacity="0.25"
          transform="rotate(28 980 190)"
        />

        {/* Meridian lines */}
        <ellipse
          cx="980"
          cy="190"
          rx="40"
          ry="118"
          fill="none"
          stroke="#3A5578"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Network connections between nodes */}
        <g stroke={ORANGE} strokeWidth="1.15" fill="none" opacity="0.4">
          <path d={`M${toXY(-20, 118).join(" ")} Q980 120 ${toXY(95, 118).join(" ")}`} />
          <path d={`M${toXY(35, 118).join(" ")} Q1000 200 ${toXY(220, 118).join(" ")}`} />
          <path d={`M${toXY(10, 78).join(" ")} Q960 190 ${toXY(250, 78).join(" ")}`} />
        </g>

        {/* Hub + satellite nodes */}
        <circle cx="980" cy="190" r="14" fill="url(#nodePulse)" />
        <circle cx="980" cy="190" r="4" fill={ORANGE} />

        {orbitNodes.map((n, i) => {
          const [x, y] = toXY(n.angle, n.r);
          return (
            <g key={`n-${i}`}>
              <circle cx={x} cy={y} r="9" fill="url(#nodePulse)" opacity="0.85" />
              <circle cx={x} cy={y} r="2.3" fill={i % 2 === 0 ? ORANGE : "#FFFFFF"} opacity={i % 2 === 0 ? 1 : 0.85} />
            </g>
          );
        })}

        {/* Small “expanding globally” arcs */}
        <path
          d="M920 95 A95 95 0 0 1 1065 120"
          fill="none"
          stroke={ORANGE}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
          opacity="0.45"
        />
      </g>

      <rect x="820" y="0" width="380" height="380" fill="url(#sideScrimR)" />
    </svg>
  );
}

export default function TransformCTA({
  titleWhite = "Ready to Transform Your",
  titleOrange = "Financial Future?",
  titleBreak = true,
  description = "Get started today with a free consultation from our financial experts.",
  descriptionSecond,
  primaryLabel = "Start Your Journey",
  primaryHref = "/contact",
  showSecondary = true,
  secondaryLabel = "Call Now",
  secondaryHref = "tel:+18885520055",
  className = "",
}) {
  return (
    <section className={`relative mb-8 mt-3 w-full bg-white pb-0 pt-4 sm:pt-5 lg:pt-6 ${className}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] bg-[#070E1A] px-5 py-6 text-center sm:rounded-[22px] sm:px-10 sm:py-7 lg:px-14 lg:py-8">
          <CtaBackdrop />

          <div className="relative z-10 mx-auto max-w-[720px]">
            <h2 className="text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[34px]">
              {titleWhite}
              {titleBreak ? <br /> : " "}
              <span style={{ color: ORANGE }}>{titleOrange}</span>
            </h2>

            <p className="mx-auto mt-2 max-w-[560px] text-[12px] font-normal leading-5 text-[#C5CED9] sm:mt-2.5 sm:text-[13.5px] sm:leading-6">
              {description}
            </p>
            {descriptionSecond ? (
              <p className="mx-auto mt-1.5 max-w-[560px] text-[12px] font-normal leading-5 text-[#C5CED9] sm:text-[13.5px] sm:leading-6">
                {descriptionSecond}
              </p>
            ) : null}

            <div className="mx-auto mt-4 flex w-full max-w-[320px] flex-col items-stretch justify-center gap-2.5 sm:mt-5 sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
              <CtaButton
                href={primaryHref}
                variant="primary"
                size="sm"
                className="w-full !py-2.5 !text-[13px] !font-semibold !normal-case !tracking-normal sm:w-auto sm:min-w-[180px] sm:!py-2"
              >
                {primaryLabel}
                <span className="text-[13px] leading-none" aria-hidden="true">
                  →
                </span>
              </CtaButton>

              {showSecondary ? (
                <CtaButton
                  href={secondaryHref}
                  variant="outline"
                  size="sm"
                  className="w-full !py-2.5 !text-[13px] !font-semibold !normal-case !tracking-normal sm:w-auto sm:min-w-[180px] sm:!py-2"
                >
                  {secondaryLabel}
                  {String(secondaryHref).startsWith("tel:") ? (
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <span className="text-[13px] leading-none" aria-hidden="true">
                      →
                    </span>
                  )}
                </CtaButton>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
