"use client";

import React, { useState, useEffect, useRef } from "react";

// Mobile view displays ONLY the starting 8 software logos
const MOBILE_LOGOS = [
  // Row 1 (5 items)
  [
    {
      name: "Lacerte Tax",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Lacerte_tax_software_Logo-1.svg",
    },
    {
      name: "FreshBooks",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Freshbooks_Logo-1.svg",
    },
    {
      name: "CCH Fx",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/CCH_Fx_Logo-1.svg",
    },
    {
      name: "UltraTax",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Ultra_Tax_Logo.svg",
    },
    {
      name: "Xero",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Xero_Logo.svg",
    },
  ],
  // Row 2 (3 items)
  [
    {
      name: "ATX",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/ATX_tax_software_Logo-1.svg",
    },
    {
      name: "Caseware",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/CaseWare_Logo-1.svg",
    },
    {
      name: "QuickBooks",
      src: "/images/quickbookslogo.png",
    },
  ],
];

// Desktop view displays the starting 8 software logos + 15 more relevant systems (Total 23) in a wide 3-row layout
const DESKTOP_LOGOS = [
  // Row 1 (8 items)
  [
    {
      name: "Lacerte Tax",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Lacerte_tax_software_Logo-1.svg",
    },
    {
      name: "FreshBooks",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Freshbooks_Logo-1.svg",
    },
    {
      name: "CCH Fx",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/CCH_Fx_Logo-1.svg",
    },
    {
      name: "UltraTax",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Ultra_Tax_Logo.svg",
    },
    {
      name: "Xero",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/Xero_Logo.svg",
    },
    {
      name: "ATX",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/ATX_tax_software_Logo-1.svg",
    },
    {
      name: "Caseware",
      src: "https://advancefinserv.com/wp-content/uploads/2024/07/CaseWare_Logo-1.svg",
    },
    {
      name: "QuickBooks",
      src: "/images/quickbookslogo.png",
    },
  ],
  // Row 2 (7 items)
  [
    {
      name: "Sage",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sage_logo.svg",
    },
    {
      name: "Zoho Books",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/fe/ZOHO_logo_2023.svg",
    },
    {
      name: "Gusto",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Gusto%2C_Inc._logo.svg",
    },
    {
      name: "Stripe",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
    },
    {
      name: "SAP",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    },
    {
      name: "TurboTax",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Turbotax_logo.svg",
    },
    {
      name: "ADP",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Automatic_Data_Processing_%28logo%29.svg",
    },
  ],
  // Row 3 (8 items)
  [
    {
      name: "Odoo",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Odoo_logo.svg",
    },
    {
      name: "PayPal",
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
    },
    {
      name: "Salesforce",
      src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
    {
      name: "Excel",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    },
    {
      name: "Google Sheets",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",
    },
    {
      name: "Shopify",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    },
    {
      name: "Slack",
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    },
    {
      name: "Wave Financial",
      src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Wave_Financial_logo.png",
    },
  ],
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
          30% {
            background-color: #FFF9F3;
          }
          70% {
            background-color: #FFF9F3;
          }
          100% {
            background-color: #F79027;
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
          {[...MOBILE_LOGOS.flat(), ...MOBILE_LOGOS.flat()].map((logo, index) => (
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
                  className={`group relative w-[88px] h-[102px] bg-[#F79027] p-[1.5px] transition-all duration-300 ease-out hover:scale-108 hover:shadow-[0_10px_25px_rgba(247,144,39,0.25)] active:scale-[0.97] cursor-pointer ${
                    isInView ? "hex-animate-outer" : ""
                  }`}
                  style={{
                    ...hexPolygonStyle,
                    animationDelay: `${delayIndex * 200}ms`,
                  }}
                >
                  <div
                    className={`w-full h-full bg-[#F79027] group-hover:bg-[#FFF9F3] flex items-center justify-center p-2.5 transition-colors duration-300 ease-out ${
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
                      className="max-w-[80%] max-h-[80%] object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
                    />
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
