"use client";

import React, { useState, useEffect, useRef } from "react";

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
  { name: "WooCommerce", src: "/images/logooUK/WooCommerce.jpeg" }
];

const MOBILE_LOGOS = ALL_23_LOGOS;

const DESKTOP_LOGOS = [
  ALL_23_LOGOS.slice(0, 8),
  ALL_23_LOGOS.slice(8, 15),
  ALL_23_LOGOS.slice(15, 23)
];

// Mathematically perfect vertical (pointy-topped) hexagon polygon shape
const hexPolygonStyle = {
  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
};

export default function Technology() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Tracking sequential indices for staggered animations
  let desktopGlobalIndex = 0;

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 bg-white flex flex-col items-center select-none overflow-hidden"
    >
      {/* Dynamic styles for a slower wave entrance and flashing cascade */}
      <style>{`
        @keyframes hexEntrance {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          60% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes hexFlash {
          0% {
            background-color: #F79027;
          }
          40% {
            background-color: #FFF9F3;
          }
          100% {
            background-color: #ffffff;
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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

      <h2 className="text-[#F58220] text-[20px] sm:text-[24px] font-extrabold text-center tracking-wide mb-8">
        Technologies We Use Every Day
      </h2>

      {/* Mobile view: Infinite scrolling carousel of starting 8 logo images (no hexagons) */}
      <div className="w-full sm:hidden overflow-hidden py-6 relative">
        {/* Soft fading overlays on the left and right edges for a premium look */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-12 items-center w-max">
          {[...MOBILE_LOGOS, ...MOBILE_LOGOS].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
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

      {/* Laptop/Desktop view: Displays all 23 logos in 3 wide rows (Width: 88px, Height: 102px) spanning ~80% width */}
      <div className="hidden sm:flex flex-col items-center max-w-[85%]">
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
    </section>
  );
}
