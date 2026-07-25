"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterGlobalMap from "./FooterGlobalMap";
import { UK_SERVICE_LINKS } from "@/app/uk/ukServiceLinks";
import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";
import { CANADA_SERVICE_LINKS } from "@/app/canada/canadaServiceLinks";
import { SINGAPORE_SERVICE_LINKS } from "@/app/singapore/singaporeServiceLinks";
import { IRELAND_SERVICE_LINKS } from "@/app/ireland/irelandServiceLinks";
import { NEW_ZEALAND_SERVICE_LINKS } from "@/app/new-zealand/newZealandServiceLinks";
import { AUSTRALIA_SERVICE_LINKS } from "@/app/australia/australiaServiceLinks";
import { NETHERLANDS_SERVICE_LINKS } from "@/app/netherlands/netherlandsServiceLinks";
import { UAE_SERVICE_LINKS } from "@/app/uae/uaeServiceLinks";
import { GLOBAL_SERVICE_LINKS } from "../header/navigationData";

const BG = "#0B1C33";

/** Shared home-footer copy — used on every page */
const HOME_COPY = {
  valueIntro:
    "We help accounting firms worldwide save time, cut costs and scale with a dedicated offshore team.",
  phoneDisplay: "+1 (888) 552-0055",
  phoneHref: "tel:+18885520055",
  overlapText: "Overlap hours across regions for real-time collaboration",
  complianceLabel: "GDPR",
  complianceSub: "Compliant",
};

/** Only services heading + links change by region */
const REGION_SERVICES = {
  uk: {
    servicesHeading: "Our Services in UK",
    serviceLinks: UK_SERVICE_LINKS,
  },
  usa: {
    servicesHeading: "Our Services in USA",
    serviceLinks: USA_SERVICE_LINKS,
  },
  canada: {
    servicesHeading: "Our Services in Canada",
    serviceLinks: CANADA_SERVICE_LINKS,
  },
  singapore: {
    servicesHeading: "Our Services in Singapore",
    serviceLinks: SINGAPORE_SERVICE_LINKS,
  },
  ireland: {
    servicesHeading: "Our Services in Ireland",
    serviceLinks: IRELAND_SERVICE_LINKS,
  },
  "new-zealand": {
    servicesHeading: "Our Services in New Zealand",
    serviceLinks: NEW_ZEALAND_SERVICE_LINKS,
  },
  australia: {
    servicesHeading: "Our Services in Australia",
    serviceLinks: AUSTRALIA_SERVICE_LINKS,
  },
  netherlands: {
    servicesHeading: "Our Services in Netherlands",
    serviceLinks: NETHERLANDS_SERVICE_LINKS,
  },
  uae: {
    servicesHeading: "Our Services in UAE",
    serviceLinks: UAE_SERVICE_LINKS,
  },
};

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Articles & Tips", href: "/articles" },
  { label: "Contact Us", href: "/contact", isContact: true },
];

/** BYOT footer — team roles (shown only on /byot) */
const BYOT_SERVICE_LINKS = [
  { label: "Dedicated Accountants", href: "/byot" },
  { label: "Bookkeepers", href: "/byot" },
  { label: "Payroll Specialists", href: "/byot" },
  { label: "Tax Professionals", href: "/byot" },
  { label: "Management Accountants", href: "/byot" },
  { label: "Virtual CFOs", href: "/byot" },
  { label: "Admin & Back Office Support", href: "/byot" },
];

function IconLaurel({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 119 113"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 0 C6.154 0.369 8.727 1.829 13 6 C13.33 6.66 13.66 7.32 14 8 C14.66 6.68 15.32 5.36 16 4 C17.812 4.062 17.812 4.062 20 5 C22.28 9.307 23.407 13.137 24 18 C25.65 17.67 27.3 17.34 29 17 C31.036 24.23 30.066 30.897 28 38 C28.99 37.34 29.98 36.68 31 36 C32.32 36 33.64 36 35 36 C34.856 42.93 31.777 46.198 27 51 C28.65 51 30.3 51 32 51 C33 54 33 54 31.625 56.875 C28.743 60.964 24.405 62.873 20 65 C21.98 65.33 23.96 65.66 26 66 C25.938 67.75 25.938 67.75 25 70 C21.456 72.341 18.245 74.321 14 75 C14.33 76.32 14.66 77.64 15 79 C12.441 81.456 11.093 81.99 7.5 82.375 C4 82 4 82 2.125 80.438 C-1.355 78.084 -5.021 79.294 -9 80 C-9 79.34 -9 78.68 -9 78 C-6.353 76.539 -5.106 76 -2 76 C-1.974 75.408 -1.948 74.817 -1.922 74.207 C-1.55 69.021 -1.076 65.623 3 62 C3.866 61.835 4.733 61.67 5.625 61.5 C6.017 61.418 6.017 61.418 8 61 C9.312 58.438 9.312 58.438 10 56 C11.32 56 12.64 56 14 56 C14.66 57.98 15.32 59.96 16 62 C15.952 61.554 15.952 61.554 15.711 59.297 C15.6 58.126 15.489 56.956 15.375 55.75 C15.317 55.17 15.317 55.17 15.023 52.234 C15 49.013 15.305 47.658 17 45 C18.211 42.579 17.946 41.517 17.562 38.875 C17.377 37.596 17.191 36.318 17 35 C18.32 35 19.64 35 21 35 C21.165 35.165 21.165 35.165 22 36 C22.33 35.34 22.66 34.68 23 34 C22.257 33.752 21.515 33.505 20.75 33.25 C17.698 31.863 16.001 30.693 14 28 C14.398 25.363 14.398 25.363 15 23 C14.362 22.674 13.724 22.348 13.066 22.012 C12.653 21.793 12.653 21.793 10.562 20.688 C9.739 20.258 8.915 19.829 8.066 19.387 C6 18 6 18 5 15 C5.66 14.01 6.32 13.02 7 12 C6.495 11.469 5.989 10.938 5.469 10.391 C4.819 9.684 4.169 8.978 3.5 8.25 C2.85 7.554 2.201 6.858 1.531 6.141 C0 4 0 4 0 0 Z M20 46 C20.33 47.65 20.66 49.3 21 51 C21.33 49.68 21.66 48.36 22 47 C21.34 46.67 20.68 46.34 20 46 Z"
        fill="currentColor"
        transform="translate(78,6)"
      />
      <path
        d="M0 0 C0.516 0.392 1.031 0.784 1.562 1.188 C-1.002 5.366 -3.457 8.313 -7.438 11.188 C-6.778 11.848 -6.117 12.508 -5.438 13.188 C-5.5 15.062 -5.5 15.062 -6.438 17.188 C-10.771 21.188 -10.771 21.188 -13.438 21.188 C-13.19 21.909 -12.942 22.631 -12.688 23.375 C-12.438 26.188 -12.438 26.188 -14.188 28.875 C-16.438 31.188 -16.438 31.188 -19.438 33.188 C-20.428 33.188 -21.418 33.188 -22.438 33.188 C-22.108 33.847 -21.777 34.508 -21.438 35.188 C-20.777 35.023 -20.777 35.023 -17.438 34.188 C-16.288 37.74 -16.351 38.987 -17.875 42.5 C-18.391 43.387 -18.906 44.274 -19.438 45.188 C-18.117 45.188 -16.797 45.188 -15.438 45.188 C-15.108 48.157 -14.778 51.127 -14.438 54.188 C-13.117 54.188 -11.797 54.188 -10.438 54.188 C-8.977 56.835 -8.438 58.082 -8.438 61.188 C-7.716 61.064 -6.994 60.94 -6.25 60.812 C-2.807 61.272 -1.462 62.594 0.625 65.32 C2.288 68.632 1.876 71.549 1.562 75.188 C2.027 75.249 2.027 75.249 4.375 75.562 C7.562 76.188 7.562 76.188 10.562 78.188 C10.398 78.683 10.398 78.683 9.562 81.188 C8.887 81.02 8.212 80.852 7.516 80.68 C6.624 80.476 5.732 80.272 4.812 80.062 C4.372 79.958 4.372 79.958 2.141 79.43 C-0.827 79.151 -1.881 79.791 -4.438 81.188 C-7.991 80.876 -11.055 80.315 -14.438 79.188 C-15.125 77.125 -15.125 77.125 -15.438 75.188 C-14.778 74.858 -14.778 74.858 -11.438 73.188 C-12.029 73.162 -12.621 73.136 -13.23 73.109 C-18.51 72.73 -21.544 72.081 -25.438 68.188 C-25.108 66.868 -24.777 65.547 -24.438 64.188 C-22.788 64.188 -21.137 64.188 -19.438 64.188 C-19.438 63.528 -19.438 62.868 -19.438 62.188 C-19.739 62.108 -19.739 62.108 -21.266 61.707 C-26.4 60.208 -29.641 59.051 -32.438 54.188 C-32.438 53.197 -32.438 52.208 -32.438 51.188 C-31.942 51.023 -31.942 51.023 -29.438 50.188 C-28.777 50.517 -28.117 50.847 -27.438 51.188 C-28.552 48.68 -29.655 46.944 -31.5 44.875 C-33.844 41.624 -34.128 39.136 -34.438 35.188 C-32.625 34.562 -32.625 34.562 -30.438 34.188 C-29.447 34.847 -28.457 35.508 -27.438 36.188 C-27.666 35.642 -27.894 35.097 -28.129 34.535 C-30.33 28.762 -30.818 24.235 -29.438 18.188 C-29.108 17.527 -28.777 16.867 -28.438 16.188 C-27.117 16.517 -25.797 16.848 -24.438 17.188 C-24.108 18.508 -23.777 19.828 -23.438 21.188 C-23.412 20.307 -23.386 19.427 -23.359 18.52 C-23.303 17.358 -23.246 16.197 -23.188 15 C-23.141 13.851 -23.095 12.703 -23.047 11.52 C-22.341 7.658 -21.239 5.902 -18.438 3.188 C-17.448 3.188 -16.457 3.188 -15.438 3.188 C-15.108 4.838 -14.778 6.488 -14.438 8.188 C-13.757 7.259 -13.076 6.331 -12.375 5.375 C-9.22 1.602 -5.114 -1.705 0 0 Z M-18.438 22.188 C-18.767 22.848 -19.097 23.508 -19.438 24.188 C-18.117 23.527 -16.797 22.867 -15.438 22.188 C-16.428 22.188 -17.418 22.188 -18.438 22.188 Z M-20.438 45.188 C-21.098 45.847 -21.758 46.508 -22.438 47.188 C-22.062 49.312 -22.062 49.312 -21.438 51.188 C-20.777 49.207 -20.117 47.227 -19.438 45.188 C-19.767 45.188 -20.097 45.188 -20.438 45.188 Z M-16.438 57.188 C-16.438 58.507 -16.438 59.828 -16.438 61.188 C-16.108 59.868 -15.778 58.547 -15.438 57.188 C-15.767 57.188 -16.097 57.188 -16.438 57.188 Z M-8.438 65.188 C-8.108 66.838 -7.778 68.487 -7.438 70.188 C-7.108 69.528 -6.778 68.868 -6.438 68.188 C-7.097 67.198 -7.758 66.207 -8.438 65.188 Z"
        fill="currentColor"
        transform="translate(52.4375,6.8125)"
      />
      <path
        d="M0 0 C1.902 0.223 1.902 0.223 4 1 C4.879 2.996 4.879 2.996 5.562 5.438 C6.52 7.898 6.52 7.898 8 10 C11.623 11.395 15.139 11.794 19 12 C19 12.99 19 13.98 19 15 C17.434 16.148 17.434 16.148 15.438 17.375 C13.492 18.906 13.492 18.906 12 21 C11.672 25.447 12.227 29.621 13 34 C9.973 33.485 8.11 33.071 5.5 31.375 C3 30 3 30 0.5 30.125 C-2 31 -2 31 -4.625 32.625 C-5.409 33.079 -6.193 33.532 -7 34 C-7.99 33.67 -8.98 33.34 -10 33 C-9.835 32.215 -9.67 31.43 -9.5 30.621 C-8.168 22.142 -8.168 22.142 -10.715 18.645 C-12.736 16.922 -14.746 15.401 -17 14 C-16 12 -16 12 -14.438 11.375 C-10.936 10.836 -7.542 10.941 -4 11 C-3.795 10.374 -3.59 9.747 -3.379 9.102 C-3.109 8.284 -2.84 7.467 -2.562 6.625 C-2.296 5.813 -2.029 5.001 -1.754 4.164 C-1 2 -1 2 0 0 Z"
        fill="currentColor"
        transform="translate(64,29)"
      />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.8 4.5 5.8v5.5c0 4.6 3.1 8.8 7.5 9.9 4.4-1.1 7.5-5.3 7.5-9.9V5.8L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m8.2 11.8 2.5 2.5 5.1-5.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTeam({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="6.8" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.5" cy="8.4" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18.5" cy="8.4" r="2.1" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.2 19.2c.8-2.7 2.6-4.1 4.8-4.1s4 1.4 4.8 4.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.8 18.8c.6-2 1.8-3.1 3.4-3.1M21.2 18.8c-.6-2-1.8-3.1-3.4-3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClock({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7.2v5.2l3.6 2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconStar({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m12 2.5 2.7 5.8 6.2.7-4.6 4.2 1.3 6.1L12 16.2 6.4 19.3l1.3-6.1L3.1 9l6.2-.7L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 3.8h2.4l1.2 3.2-1.5 1.1a12.5 12.5 0 0 0 5.6 5.6l1.1-1.5 3.2 1.2v2.4c0 .9-.7 1.7-1.6 1.8A15.7 15.7 0 0 1 3.8 5.4c.1-.9.9-1.6 1.8-1.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconHeadset({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4.5 13.5V12a7.5 7.5 0 0 1 15 0v1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="3.2" y="12.5" width="3.6" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.2" y="12.5" width="3.6" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17.5 17.8v.7a2.5 2.5 0 0 1-2.5 2.5H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconLock({ className = "w-3.5 h-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="11" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 11V8.5a3.5 3.5 0 0 1 7 0V11" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconChevron({ className = "w-3 h-3" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const VALUE_STATS = [
  {
    icon: IconLaurel,
    title: "9+ Years",
    subtitle: ["Serving Firms", "Worldwide"],
  },
  {
    icon: IconShield,
    title: "ISO 27001",
    subtitle: ["Certified", "Data Security"],
  },
  {
    icon: IconTeam,
    title: "75+",
    subtitle: ["Skilled", "Professionals"],
  },
  {
    icon: IconClock,
    title: "24/7",
    subtitle: ["Seamless", "Support"],
  },
  {
    icon: IconStar,
    title: "100%",
    subtitle: ["Client", "Satisfaction"],
  },
];

/** Horizontal line — fades out on left & right */
function FadeDividerH({ className = "" }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 18%, rgba(255,255,255,0.18) 82%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

/** Vertical line — fades out on top & bottom (value stats row) */
function FadeDividerV({ className = "", opacity = 0.18 }) {
  return (
    <div
      className={`w-px self-stretch min-h-[48px] ${className}`}
      style={{
        background: `linear-gradient(180deg, transparent 0%, rgba(255,255,255,${opacity}) 18%, rgba(255,255,255,${opacity}) 82%, transparent 100%)`,
      }}
      aria-hidden="true"
    />
  );
}

/** Pipe divider between footer columns — | CONTENT | with fade top/bottom */
function ColumnPipe({ className = "" }) {
  return (
    <div
      className={`hidden xl:flex items-stretch justify-center self-stretch px-3 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <span
        className="block w-px self-stretch min-h-[56px]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.35) 82%, transparent 100%)",
        }}
      />
    </div>
  );
}

const KNOWN_REGIONS = [
  "uk",
  "usa",
  "canada",
  "singapore",
  "ireland",
  "new-zealand",
  "australia",
  "netherlands",
  "uae",
];

const REGION_PATH_PREFIXES = [
  ["/canada", "canada"],
  ["/usa", "usa"],
  ["/uk", "uk"],
  ["/singapore", "singapore"],
  ["/ireland", "ireland"],
  ["/new-zealand", "new-zealand"],
  ["/australia", "australia"],
  ["/netherlands", "netherlands"],
  ["/uae", "uae"],
];

function regionFromPathname(pathname) {
  if (!pathname) return null;
  const match = REGION_PATH_PREFIXES.find(([prefix]) =>
    pathname.startsWith(prefix)
  );
  return match ? match[1] : null;
}

/**
 * Same footer as home on every page.
 * Only Our Services heading + links change by region.
 */
export default function Footer({ region, variant }) {
  const pathname = usePathname();

  const resolvedRegion = KNOWN_REGIONS.includes(region)
    ? region
    : KNOWN_REGIONS.includes(variant)
      ? variant
      : regionFromPathname(pathname);

  const isGlobal =
    variant === "global" ||
    (!resolvedRegion && !regionFromPathname(pathname));

  const mode = isGlobal ? "global" : resolvedRegion || "uk";
  const regionServices = mode === "global" ? null : REGION_SERVICES[mode];

  // Exact same home copy + stats everywhere
  const copy = HOME_COPY;
  const isByotPage = pathname === "/byot" || pathname?.startsWith("/byot/");
  const serviceLinks = isByotPage
    ? BYOT_SERVICE_LINKS
    : regionServices
      ? regionServices.serviceLinks
      : GLOBAL_SERVICE_LINKS;
  const servicesHeading = isByotPage
    ? "Our Services"
    : regionServices
      ? regionServices.servicesHeading
      : "Our Services";

  return (
    <footer className="w-full text-white overflow-x-hidden" style={{ backgroundColor: BG }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 lg:py-5">
        <div className="flex flex-col xl:flex-row xl:items-center gap-3 sm:gap-4 xl:gap-0">
          <div className="xl:w-[30%] xl:max-w-[380px] xl:pr-5 shrink-0 text-center sm:text-left">
            <h2 className="font-bold text-[20px] sm:text-[23px] lg:text-[25px] leading-[1.2] tracking-[-0.01em] text-white">
              Your Offshore Team.
              <br />
              <span className="text-[#FF6A00]">Your Competitive Advantage.</span>
            </h2>
            <p className="mt-1.5 text-[12px] sm:text-[13px] leading-[1.45] text-[#9AA3B2] max-w-[420px] mx-auto sm:mx-0">
              {copy.valueIntro}
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {VALUE_STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex items-stretch min-w-0">
                  {index > 0 && <FadeDividerV className="hidden lg:block" />}
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-1 sm:px-2 lg:px-2.5 py-1.5 sm:py-2">
                    <div className="flex flex-col sm:flex-row min-h-0 sm:min-h-10 w-full items-center justify-center gap-0.5 sm:gap-1.5">
                      <span className="text-[#FF6A00] inline-flex items-center justify-center shrink-0 w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                        <Icon className="block w-full h-full" />
                      </span>
                      <span className="font-bold text-[12px] sm:text-[14px] lg:text-[15px] leading-none text-white whitespace-nowrap">
                        {stat.title}
                      </span>
                    </div>
                    <p className="mt-0.5 sm:mt-1 min-h-0 flex flex-col items-center justify-start text-[10px] sm:text-[11px] lg:text-[12px] leading-[1.25] font-semibold text-[#9AA3B2] text-center">
                      {stat.subtitle.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FadeDividerH />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 lg:py-5">
        {/* | Brand | Services | Quick Links | Global |  — pipes between only, no outer left/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 xl:flex xl:flex-row xl:items-stretch xl:gap-0">
          {/* Brand */}
          <div className="flex flex-col gap-3 xl:w-[26%] xl:shrink-0 xl:pr-4">
            <Link href="/" className="inline-block shrink-0">
              <img
                src="/images/nextledgerlogo3.png"
                alt="Next Ledgers"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-[12px] sm:text-[13px] font-normal leading-[1.45] text-white/80 max-w-[280px]">
              Modern accounting and tax solutions
              <br />
              powered by AI and personalised expertise.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={copy.phoneHref}
                className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-white/90 hover:text-[#FF6A00] transition-colors"
              >
                <span className="text-[#FF6A00]">
                  <IconPhone className="w-3.5 h-3.5" />
                </span>
                {copy.phoneDisplay}
              </a>
              <a
                href="mailto:info@nextledgers.com"
                className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold text-white/90 hover:text-[#FF6A00] transition-colors break-all"
              >
                <span className="text-[#FF6A00] shrink-0">
                  <IconMail className="w-3.5 h-3.5" />
                </span>
                info@nextledgers.com
              </a>
              <div className="flex items-start gap-2 text-[12px] sm:text-[13px] leading-[1.4] text-white/70">
                <span className="text-[#FF6A00] mt-0.5 shrink-0">
                  <IconPin className="w-3.5 h-3.5" />
                </span>
                <span>
                  <span className="font-bold text-white">Next Ledgers HQ</span>
                  <br />
                  Mayapuri Commercial Area,
                  <br />
                  New Delhi, India 110064.
                </span>
              </div>
            </div>
          </div>

          <ColumnPipe />

          {/* Services */}
          <div className="xl:w-[22%] xl:shrink-0 xl:px-4">
            <h3 className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#FF6A00] mb-2.5">
              {servicesHeading}
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-1.5 py-0.5 text-[12px] leading-[1.4] text-white/70 hover:text-[#FF6A00] transition-colors"
                  >
                    <span className="text-[#FF6A00] mt-0.5 shrink-0">
                      <IconChevron className="w-3 h-3" />
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ColumnPipe />

          {/* Quick Links */}
          <div className="xl:w-[14%] xl:shrink-0 xl:px-4">
            <h3 className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#FF6A00] mb-2.5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-0.5 text-[12px] sm:text-[13px] font-semibold text-white/75 hover:text-[#FF6A00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ColumnPipe />

          {/* Global Connectivity */}
          <div className="md:col-span-2 xl:flex-1 xl:min-w-0 xl:pl-4">
            <h3 className="text-[11px] sm:text-[12px] font-bold tracking-[0.14em] uppercase text-[#FF6A00] mb-1.5">
              Global Connectivity
            </h3>
            <FooterGlobalMap />

            <div className="relative mt-1.5 rounded-[8px] border border-[#FF6A00]/50 bg-[#0A1628] px-2.5 py-2.5">
              <span
                className="pointer-events-none absolute left-1/2 top-2.5 bottom-2.5 hidden w-px -translate-x-1/2 sm:block"
                style={{ backgroundColor: "rgba(255, 106, 0, 0.5)" }}
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center">
                <div className="flex items-center gap-2 sm:pr-4 max-sm:pb-2 max-sm:border-b max-sm:border-[#FF6A00]/25">
                  <span
                    className="text-[#FF6A00] shrink-0 inline-flex items-center justify-center rounded-full border-[1.5px] border-[#FF6A00]"
                    style={{ width: 30, height: 30 }}
                  >
                    <IconHeadset className="w-6 h-6" />
                  </span>
                  <p className="text-[10px] sm:text-[11px] leading-[1.35] text-white/85">
                    Working in your time zone to support your business
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:pl-4 max-sm:pt-2">
                  <span
                    className="text-[#FF6A00] shrink-0 inline-flex items-center justify-center rounded-full border-[1.5px] border-[#FF6A00]"
                    style={{ width: 30, height: 30 }}
                  >
                    <IconClock className="w-6 h-6" />
                  </span>
                  <p className="text-[10px] sm:text-[11px] leading-[1.35] text-white/85">
                    {copy.overlapText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FadeDividerH />

      <div>
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2.5 px-4 py-2.5 text-[11px] text-white/50 sm:gap-3 sm:px-6 sm:py-3 sm:text-[12px] lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Next Ledgers. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2 text-white/70 sm:gap-2.5">
              <IconShield className="h-6 w-6 shrink-0 text-white/70 sm:h-7 sm:w-7" />
              <span className="flex flex-col text-[11px] leading-[1.2] font-semibold sm:text-[12px]">
                <span>ISO 27001</span>
                <span>Certified</span>
              </span>
            </span>

            <div
              className="h-8 w-px shrink-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.28), transparent)",
              }}
              aria-hidden="true"
            />

            <span className="inline-flex items-center gap-2 text-white/70 sm:gap-2.5">
              <IconLock className="h-6 w-6 shrink-0 text-white/70 sm:h-7 sm:w-7" />
              <span className="flex flex-col text-[11px] leading-[1.2] font-semibold sm:text-[12px]">
                <span>{copy.complianceLabel}</span>
                <span>{copy.complianceSub}</span>
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-white/60 sm:gap-3">
              <Link href="/privacy" className="whitespace-nowrap transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="whitespace-nowrap transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/next-ledgers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M6.9 8.8H4V20h2.9V8.8ZM5.4 4A1.7 1.7 0 1 0 5.4 7.4 1.7 1.7 0 0 0 5.4 4ZM20 20h-2.9v-5.6c0-1.5-.6-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.3-.1.6-.1.9V20H10.5s0-9.4 0-10.4H13.4v1.7c.5-.8 1.5-1.9 3.6-1.9 2.6 0 4.5 1.7 4.5 5.3V20Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/nextledgers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#E4405F] hover:bg-[#E4405F]/15 hover:text-[#E4405F]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Zm6.1-8.2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.2c-2.5 0-2.8 0-3.8.1-2.5.1-3.7 1.3-3.8 3.8-.1 1-.1 1.3-.1 3.8s0 2.8.1 3.8c.1 2.5 1.3 3.7 3.8 3.8 1 .1 1.3.1 3.8.1s2.8 0 3.8-.1c2.5-.1 3.7-1.3 3.8-3.8.1-1 .1-1.3.1-3.8s0-2.8-.1-3.8c-.1-2.5-1.3-3.7-3.8-3.8-1-.1-1.3-.1-3.8-.1Zm0 1.5c2.4 0 2.7 0 3.7.1 1.8.1 2.6.9 2.7 2.7.1 1 .1 1.2.1 3.6s0 2.6-.1 3.6c-.1 1.8-.9 2.6-2.7 2.7-1 .1-1.3.1-3.7.1s-2.7 0-3.7-.1c-1.8-.1-2.6-.9-2.7-2.7-.1-1-.1-1.2-.1-3.6s0-2.6.1-3.6c.1-1.8.9-2.6 2.7-2.7 1-.1 1.3-.1 3.7-.1Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/nextledger/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#1877F2] hover:bg-[#1877F2]/15 hover:text-[#1877F2]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M14.5 8.5V6.8c0-.7.2-1.1 1.2-1.1H17V3h-2.3C11.9 3 11 4.6 11 6.6v1.9H9V11h2v10h3.5V11H17l.5-2.5h-3Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCE_a2YtykRYytdFvaN4lhvg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#FF0000] hover:bg-[#FF0000]/15 hover:text-[#FF0000]"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.8a2.5 2.5 0 0 0-1.8-1.8C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.8 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.2 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.2ZM10.2 15.2V8.8L15.5 12l-5.3 3.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
