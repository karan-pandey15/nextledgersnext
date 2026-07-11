"use client";

import React from "react";
import SecurityShieldMotion from "./SecurityShieldMotion";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

function IconShield({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 5 6.5v5.2c0 4.4 2.9 7.6 7 9.3 4.1-1.7 7-4.9 7-9.3V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLock({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" />
    </svg>
  );
}

function IconUserGear({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 19c.6-3 2.8-4.8 6.5-4.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="17.5" cy="15.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17.5 12.2v1M17.5 17.8v1M14.2 15.5h1M19.8 15.5h1M15.2 13.2l.7.7M19.1 17.1l.7.7M19.1 13.2l-.7.7M15.2 17.1l-.7.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconFileSearch({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 3.5V8h4.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="11" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m12.8 15.8 2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconServer({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="6.5" ry="2.4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 6v4c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4V6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 10v4c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4v-4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.5 14v4c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4v-4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

const FEATURES = [
  {
    text: "Enterprise-grade security and privacy standards across our operations",
    icon: IconShield,
  },
  {
    text: "Privacy-first practices aligned with global data protection regulations",
    icon: IconLock,
  },
  {
    text: "Role-based team access with mandatory multi-factor authentication",
    icon: IconUserGear,
  },
  {
    text: "Secure, traceable file sharing with audit-ready documentation",
    icon: IconFileSearch,
  },
  {
    text: "Protected office systems with real-time monitoring and backups",
    icon: IconServer,
  },
];

export default function DataSecurity() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-center">
      <div>
        <span className="inline-flex items-center rounded-md bg-[#FFF1E6] text-[#F58220] text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5">
          DATA SECURITY
        </span>

        <h2
          className="mt-4 font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.12] tracking-[-0.02em]"
          style={{ color: NAVY }}
        >
          Your Data.{" "}
          <span style={{ color: ORANGE }}>Our Highest Priority.</span>
        </h2>

        <p
          className="mt-4 text-[13px] sm:text-[14px] leading-6 sm:leading-7 max-w-[520px]"
          style={{ color: GREY }}
        >
          We treat your financial information with the highest level of care. From encrypted
          workflows to controlled access, security is built into everything we do.
        </p>

        <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-[18px]">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.text} className="flex items-center gap-3.5 sm:gap-4">
                <span className="shrink-0 text-[#F58220] w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </span>
                <p
                  className="text-[13px] sm:text-[14px] leading-[1.45] font-medium"
                  style={{ color: NAVY }}
                >
                  {feature.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[400px] lg:min-h-[440px]">
        <SecurityShieldMotion />
      </div>
    </div>
  );
}
