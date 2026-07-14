"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Headset,
  Network,
  RefreshCw,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const ALL_23_LOGOS = [
  { name: "Xero", src: "/images/logooUK/Xero.png" },
  { name: "QuickBooks", src: "/images/logooUK/QuickBooks_Training.png" },
  { name: "Sage", src: "/images/logooUK/Sage.jpg" },
  { name: "FreeAgent", src: "/images/logooUK/FreeAgent.png" },
  { name: "Dext", src: "/images/logooUK/dext.png" },
  { name: "Hubdoc", src: "/images/logooUK/hubdoc.png" },
  { name: "ApprovalMax", src: "/images/logooUK/ApprovalMax.jpeg" },
  { name: "BrightPay", src: "/images/logooUK/brightpay.jpeg" },
  { name: "NEST", src: "/images/logooUK/NEST_id4rvtkhfhg.png" },
  { name: "People's Pension", src: "/images/logooUK/thepepole.png" },
  { name: "Smart Pension", src: "/images/logooUK/Smart_Pension.jpeg" },
  { name: "Stripe", src: "/images/logooUK/Stripe.png" },
  { name: "PayPal", src: "/images/logooUK/PayPal_Icon.jpeg" },
  { name: "Wise", src: "/images/logooUK/Wise_Icon.png" },
  { name: "GoCardless", src: "/images/logooUK/GoCardless.png" },
  { name: "Fathom", src: "/images/logooUK/Fathom.png" },
  { name: "Spotlight", src: "/images/logooUK/Spotlight.jpeg" },
  { name: "Float", src: "/images/logooUK/Float.png" },
  { name: "Futrli", src: "/images/logooUK/Futrli.png" },
  { name: "Excel", src: "/images/logooUK/Microsoft_Excel_id.png" },
  { name: "Google Sheets", src: "/images/logooUK/Google_Sheets.jpeg" },
  { name: "Shopify", src: "/images/logooUK/Shopify.jpeg" },
  { name: "WooCommerce", src: "/images/logooUK/WooCommerce.jpeg" },
];

const MOBILE_LOGOS = ALL_23_LOGOS;

const DESKTOP_LOGOS = [
  ALL_23_LOGOS.slice(0, 8),
  ALL_23_LOGOS.slice(8, 15),
  ALL_23_LOGOS.slice(15, 23),
];

const FEATURES = [
  {
    title: "Secure & Trusted",
    description: "Bank-level security and data protection",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Sync",
    description: "Always up-to-date data across platforms",
    icon: RefreshCw,
  },
  {
    title: "Automation First",
    description: "Smart automations for better accuracy",
    icon: Settings2,
  },
  {
    title: "Seamless Workflows",
    description: "Built to integrate with your existing systems",
    icon: Network,
  },
  {
    title: "Dedicated Support",
    description: "Our team is certified and tool-experienced",
    icon: Headset,
  },
];

const hexPolygonStyle = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

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
          animation: marquee 20s linear infinite;
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

        {/* Desktop hex grid — full container width, centered */}
        <div className="hidden lg:flex flex-col items-center w-full mt-8 mb-2">
          {DESKTOP_LOGOS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-2.5 ${
                rowIndex > 0 ? "-mt-[26px]" : ""
              }`}
            >
              {row.map((logo) => {
                const delayIndex = desktopGlobalIndex++;
                return (
                  <div
                    key={logo.name}
                    className={`hex-outer relative w-[88px] h-[102px] p-[1.5px] active:scale-[0.97] cursor-pointer ${
                      isInView ? "hex-animate-outer" : ""
                    }`}
                    style={{
                      ...hexPolygonStyle,
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

        {/* Feature bar — design "issue part" */}
        <div className="mt-8 sm:mt-10 w-full rounded-[16px] bg-[#FFF7F0] border border-[#FF6A00]/10 px-4 sm:px-5 lg:px-4 py-5 sm:py-6">
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-center">
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;
              const isLast = index === FEATURES.length - 1;

              return (
                <React.Fragment key={feature.title}>
                  <div className="flex flex-1 items-center gap-3 min-w-0 px-1 lg:px-3 py-3 lg:py-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(255, 106, 0,0.12)]">
                      <Icon
                        className="w-6 h-6"
                        style={{ color: ORANGE }}
                        strokeWidth={2}
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
