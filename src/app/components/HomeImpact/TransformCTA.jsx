"use client";

import React from "react";
import { Phone } from "lucide-react";
import CtaButton from "@/app/components/ui/CtaButton";

const ORANGE = "#F58220";

function CtaBackdrop() {
  return (
    <svg
      viewBox="0 0 1200 380"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="ctaDots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1" fill="#7A92B0" fillOpacity="0.35" />
        </pattern>
        <mask id="ctaMapMask">
          <rect width="1200" height="380" fill="black" />
          <path
            fill="white"
            d="M210 95c55-40 140-48 210-28 45 12 80 42 120 48 50 8 95-12 140 10 40 20 55 60 35 95-25 45-85 55-135 42-55-14-85-50-140-52-60-2-110 35-165 22-48-12-85-50-65-90 8-18 22-35 0-47z"
          />
          <path
            fill="white"
            d="M520 150c30-12 58 4 68 28 12 32-8 65-40 75-35 12-70-10-78-42-8-28 18-52 50-61z"
          />
          <path
            fill="white"
            d="M620 70c70-28 165-22 240 18 60 32 105 85 95 145-8 55-60 95-120 105-70 12-135-18-185-62-48-42-68-100-35-145 12-18 28-42 5-61z"
          />
          <path
            fill="white"
            d="M700 250c40-10 70 18 78 48 12 40-14 75-52 85-40 10-80-16-88-52-8-32 20-70 62-81z"
          />
          <path
            fill="white"
            d="M920 240c48-16 100 8 118 48 20 42 2 88-42 108-48 20-102 0-125-42-24-44-6-92 49-114z"
          />
        </mask>
      </defs>

      <rect
        width="1200"
        height="380"
        fill="url(#ctaDots)"
        mask="url(#ctaMapMask)"
        opacity="0.55"
      />

      <g fill="#2A3F5C" opacity="0.55">
        <rect x="48" y="230" width="18" height="70" rx="3" />
        <rect x="74" y="195" width="18" height="105" rx="3" />
        <rect x="100" y="155" width="18" height="145" rx="3" />
        <rect x="126" y="115" width="18" height="185" rx="3" />
      </g>

      <g fill="#2A3F5C" opacity="0.55">
        <rect x="1056" y="230" width="18" height="70" rx="3" />
        <rect x="1082" y="195" width="18" height="105" rx="3" />
        <rect x="1108" y="155" width="18" height="145" rx="3" />
        <rect x="1134" y="115" width="18" height="185" rx="3" />
      </g>

      <path
        d="M40 280 C90 250, 130 180, 175 95"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M168 88 L178 98 L188 82 Z" fill={ORANGE} opacity="0.9" />

      <path
        d="M1160 280 C1110 250, 1070 180, 1025 95"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M1032 88 L1022 98 L1012 82 Z" fill={ORANGE} opacity="0.9" />

      <g fill={ORANGE}>
        <circle cx="200" cy="140" r="2.2" opacity="0.7" />
        <circle cx="260" cy="200" r="1.6" opacity="0.5" />
        <circle cx="320" cy="110" r="1.8" opacity="0.45" />
        <circle cx="880" cy="130" r="2" opacity="0.55" />
        <circle cx="940" cy="190" r="1.5" opacity="0.45" />
        <circle cx="1000" cy="150" r="2.2" opacity="0.65" />
        <circle cx="550" cy="80" r="1.4" opacity="0.35" />
        <circle cx="650" cy="300" r="1.6" opacity="0.4" />
      </g>
    </svg>
  );
}

/**
 * Dark navy CTA banner — same visual as homepage Transform CTA.
 * Pass custom copy via props; defaults keep the original homepage text.
 */
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
    <section className={`relative w-full bg-white pt-8 sm:pt-9 lg:pt-10 pb-0 mb-10 mt-5 ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[18px] sm:rounded-[22px] bg-[#07111F] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-[72px] text-center">
          <CtaBackdrop />

          <div className="relative z-10 max-w-[780px] mx-auto">
            <h2 className="font-bold text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.18] tracking-[-0.02em] text-white">
              {titleWhite}
              {titleBreak ? <br /> : " "}
              <span style={{ color: ORANGE }}>{titleOrange}</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-[#B8C2D0] max-w-[620px] mx-auto font-normal">
              {description}
            </p>
            {descriptionSecond ? (
              <p className="mt-3 text-[13px] sm:text-[15px] leading-6 sm:leading-7 text-[#B8C2D0] max-w-[620px] mx-auto font-normal">
                {descriptionSecond}
              </p>
            ) : null}

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5">
              <CtaButton
                href={primaryHref}
                variant="primary"
                size="lg"
                className="min-w-[190px] sm:min-w-[210px] !normal-case !tracking-normal !font-semibold"
              >
                {primaryLabel}
                <span className="text-[15px] leading-none" aria-hidden="true">
                  →
                </span>
              </CtaButton>

              {showSecondary ? (
                <CtaButton
                  href={secondaryHref}
                  variant="outline"
                  size="lg"
                  className="min-w-[190px] sm:min-w-[210px] !normal-case !tracking-normal !font-semibold"
                >
                  {secondaryLabel}
                  {String(secondaryHref).startsWith("tel:") ? (
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <span className="text-[15px] leading-none" aria-hidden="true">
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
