"use client";

import React, { useState, useEffect, useRef } from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const ACCOUNTING_LOGOS = [
  { name: "QuickBooks", src: "/images/logooUK/QuickBooks_Training.png" },
  { name: "Xero", src: "/images/logooUK/Xero.png" },
  { name: "Sage", src: "/images/logooUK/Sage.jpg" },
  { name: "Wave", src: "/images/logooUK/Wave_id.jpeg" },
  { name: "FreeAgent", src: "/images/logooUK/FreeAgent.png" },
  { name: "MYOB", src: "/images/logooUK/MYOB.jpeg" },
  { name: "FreshBooks", src: "/images/logooUK/freshbook2.jfif" },
  { name: "KashFlow", src: "/images/logooUK/IRIS_KashFlow.jpeg" },
  { name: "Zoho Books", src: "/images/logooUK/SVG_Brand_zoho_corporation.webp" },
  { name: "Reckon", src: "/images/logooUK/Reckon.png" },
  { name: "QuickFile", src: "/images/logooUK/QuickFile.png" },
  { name: "Busy", src: "/images/logooUK/Busy.jpeg" },
];

const PAYROLL_LOGOS = [
  { name: "Gusto", src: "/images/logooUK/Gusto.png" },
  { name: "Paycor", src: "/images/logooUK/paycor.jpeg" },
  { name: "BrightPay", src: "/images/logooUK/brightpay.jpeg" },
  { name: "Moorepay", src: "/images/logooUK/Moorepay.jpeg" },
  { name: "Moneysoft", src: "/images/logooUK/Moneysoft_Australial.jpeg" },
  { name: "Employment Hero", src: "/images/logooUK/Employmenthero.jpeg" },
  { name: "Ceridian Dayforce", src: "/images/logooUK/Ceridian.jpeg" },
  { name: "Wagepoint", src: "/images/logooUK/Wagepoint.jpeg" },
  { name: "Payworks", src: "/images/logooUK/Payworks.jpeg" },
  { name: "Capium", src: "/images/logooUK/capium.jpeg" },
  { name: "Bayzat", src: "/images/logooUK/Bayzat.png" },
];

const TAX_LOGOS = [
  { name: "Drake Software", src: "/images/logooUK/Drake.jpeg" },
  { name: "TaxDome", src: "/images/logooUK/TaxDome.png" },
  { name: "TaxCalc", src: "/images/logooUK/TaxCalc.jpeg" },
  { name: "Wolters Kluwer", src: "/images/logooUK/wolters.png" },
  { name: "UFile", src: "/images/logooUK/UFile.jpeg" },
  { name: "TaxCycle", src: "/images/logooUK/TaxCycle.jpeg" },
  { name: "Thomson Reuters", src: "/images/logooUK/Thomson_Reuters.jpeg" },
  { name: "ADP", src: "/images/logooUK/ADP.jpeg" },
  { name: "Avalara", src: "/images/logooUK/Avalara.png" },
  { name: "Taxfyle", src: "/images/logooUK/Taxfyle.jpeg" },
];

const ALL_LOGOS = [...ACCOUNTING_LOGOS, ...PAYROLL_LOGOS, ...TAX_LOGOS];

const MOBILE_LOGOS = ALL_LOGOS;

// Desktop honeycomb: longer / shorter / remaining so rows nest
const HONEYCOMB_ROW1 = ACCOUNTING_LOGOS.length;
const HONEYCOMB_ROW2 = Math.max(PAYROLL_LOGOS.length - 1, 1);
const DESKTOP_LOGOS = [
  ALL_LOGOS.slice(0, HONEYCOMB_ROW1),
  ALL_LOGOS.slice(HONEYCOMB_ROW1, HONEYCOMB_ROW1 + HONEYCOMB_ROW2),
  ALL_LOGOS.slice(HONEYCOMB_ROW1 + HONEYCOMB_ROW2),
];

const FEATURE_ICON_BASE =
  "/images/icon/Below%20Technology%20we%20use---";

const FEATURES = [
  {
    title: "Secure & Trusted",
    description: "Bank-level security and data protection",
    icon: `${FEATURE_ICON_BASE}/1.png`,
  },
  {
    title: "Real-time Sync",
    description: "Always up-to-date data across platforms",
    icon: `${FEATURE_ICON_BASE}/2.png`,
  },
  {
    title: "Automation First",
    description: "Smart automations for better accuracy",
    icon: `${FEATURE_ICON_BASE}/3.png`,
  },
  {
    title: "Seamless Workflows",
    description: "Built to integrate with your existing systems",
    icon: `${FEATURE_ICON_BASE}/4.png`,
  },
  {
    title: "Dedicated Support",
    description: "Our team is certified and tool-experienced",
    icon: `${FEATURE_ICON_BASE}/5.png`,
  },
];

const hexPolygonStyle = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

/** Figma honeycomb: staggered nest + visible gutter between every hex (no overlap) */
const HEX_W = 80;
const HEX_H = 93;
const HEX_GAP = 12; // clear white gutter like Figma
const HEX_ROW_OFFSET = (HEX_W + HEX_GAP) / 2; // sit in valleys
// Mild nest into valleys while keeping ~HEX_GAP between diagonal edges
const HEX_ROW_PULL = 16;

export default function Technology() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let desktopGlobalIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-8 pb-9 sm:pt-9 sm:pb-10 lg:pt-10 lg:pb-11 select-none overflow-hidden"
    >
      <style>{`
        @keyframes hexEntrance {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes hexFlash {
          0% { background-color: #F79027; }
          40% { background-color: #FFF9F3; }
          100% { background-color: #ffffff; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hex-animate-outer {
          opacity: 0;
          animation: hexEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .hex-animate-inner {
          animation: hexFlash 1.8s ease-in-out;
        }
        .marquee-track {
          display: flex;
          animation: marquee 24s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .hex-outer {
          background-color: #e5e7eb;
          transition: all 0.3s ease-out;
        }
        .hex-outer:hover {
          background-color: #F79027 !important;
          transform: scale(1.08) !important;
          box-shadow: 0 10px 25px rgba(247, 144, 39, 0.25) !important;
          z-index: 5;
        }
        .hex-inner {
          background-color: #ffffff;
          transition: all 0.3s ease-out;
        }
        .hex-outer:hover .hex-inner {
          background-color: #F79027 !important;
        }
        .hex-image {
          transition: all 0.3s ease-in-out;
          opacity: 1;
          transform: scale(1);
        }
        .hex-outer:hover .hex-image {
          opacity: 0 !important;
          transform: scale(0.75) !important;
        }
        .hex-text {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          text-align: center;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          opacity: 0;
          transform: scale(0.75);
          transition: all 0.3s ease-in-out;
        }
        .hex-outer:hover .hex-text {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header — same alignment pattern as CoreServices */}
        <div className="text-center max-w-[820px] mx-auto">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FFF1E6] border border-[#FF6A00]/20 px-4 sm:px-5 py-[6px]">
            <span
              className="hidden sm:inline text-[#FF6A00] text-[12px] leading-none"
              aria-hidden="true"
            >
              →
            </span>

            <span
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase whitespace-nowrap"
              style={{ color: ORANGE }}
            >
              Our Technology Ecosystem
            </span>

            <span
              className="hidden sm:inline text-[#FF6A00] text-[12px] leading-none"
              aria-hidden="true"
            >
              ←
            </span>
          </div>

          <h2
            className="mt-3 font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.08] tracking-[-0.01em]"
            style={{ color: NAVY }}
          >
            Technologies{" "}
            <span style={{ color: ORANGE }}>We Use Every Day</span>
          </h2>

          <p
            className="mt-1.5 text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] max-w-[700px] mx-auto"
            style={{ color: GREY }}
          >
            We leverage best-in-class tools and technologies to deliver accurate, secure, and
            efficient accounting and advisory services.
          </p>
        </div>

        {/* Mobile / tablet marquee — hex grid needs more width */}
        <div className="w-full lg:hidden overflow-hidden py-8 relative">
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-12 items-center w-max">
            {[...MOBILE_LOGOS, ...MOBILE_LOGOS].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="shrink-0 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-9 max-w-[130px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop hex grid — Figma honeycomb: stagger + clear gap, no overlap */}
        <div className="hidden lg:flex justify-center w-full mt-8 mb-2">
          <div className="inline-flex flex-col items-start">
            {DESKTOP_LOGOS.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex"
                style={{
                  gap: HEX_GAP,
                  marginTop: rowIndex > 0 ? -HEX_ROW_PULL : 0,
                  marginLeft: rowIndex % 2 === 1 ? HEX_ROW_OFFSET : 0,
                }}
              >
                {row.map((logo) => {
                  const delayIndex = desktopGlobalIndex++;
                  return (
                    <div
                      key={logo.name}
                      className={`hex-outer relative shrink-0 p-[1.5px] active:scale-[0.97] cursor-pointer ${
                        isInView ? "hex-animate-outer" : ""
                      }`}
                      style={{
                        ...hexPolygonStyle,
                        width: HEX_W,
                        height: HEX_H,
                        animationDelay: `${delayIndex * 200}ms`,
                      }}
                    >
                      <div
                        className={`hex-inner w-full h-full flex items-center justify-center p-2.5 ${
                          isInView ? "hex-animate-inner" : ""
                        }`}
                        style={{
                          ...hexPolygonStyle,
                          animationDelay: `${delayIndex * 200}ms`,
                        }}
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="hex-image max-w-[75%] max-h-[75%] object-contain pointer-events-none"
                        />
                        <span className="hex-text pointer-events-none">
                          {logo.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Feature bar — design "issue part" */}
        <div className="mt-8 sm:mt-10 w-full rounded-[16px] bg-[#FFF7F0] border border-[#FF6A00]/10 px-4 sm:px-5 lg:px-4 py-5 sm:py-6">
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center">
            {FEATURES.map((feature, index) => {
              const isLast = index === FEATURES.length - 1;

              return (
                <React.Fragment key={feature.title}>
                  <div className="flex flex-1 items-center gap-3 min-w-0 px-1 lg:px-3 py-3 lg:py-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-[0_2px_8px_rgba(255, 106, 0,0.12)]">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-full object-cover scale-[1.04]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className="font-bold text-[13px] sm:text-[14px] leading-tight"
                        style={{ color: NAVY }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="mt-1 text-[11px] sm:text-[12px] leading-[1.35]"
                        style={{ color: GREY }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {!isLast && (
                    <div
                      className="hidden lg:block w-px h-10 bg-[#E5E7EB] shrink-0 self-center"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
