"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterGlobalMap from "./FooterGlobalMap";
import { UK_SERVICE_LINKS } from "@/app/uk/ukServiceLinks";
import { USA_SERVICE_LINKS } from "@/app/usa/usaServiceLinks";
import { POPUP_REGIONS, REGION_ROUTES } from "../RegionSelect/regionData";

const ORANGE = "#F58220";
const BG = "#0B1C33";

const REGION_COPY = {
  uk: {
    regionLabel: "UK",
    valueIntro:
      "We help UK accounting firms save time, cut costs and scale with a dedicated offshore team.",
    servingLines: ["Serving UK", "Accounting Firms"],
    brandBlurb:
      "We are a leading offshore accounting and bookkeeping service provider trusted by UK firms.",
    phoneDisplay: "+44 20 4571 4469",
    phoneHref: "tel:+442045714469",
    servicesHeading: "Our Services in UK",
    overlapText: "Overlap hours with UK for real-time collaboration",
    softwareHeading: "Trusted by Top UK Firms Using Leading Software",
    complianceLabel: "GDPR",
    complianceSub: "Compliant",
    serviceLinks: UK_SERVICE_LINKS,
  },
  usa: {
    regionLabel: "USA",
    valueIntro:
      "We help USA accounting firms save time, cut costs and scale with a dedicated offshore team.",
    servingLines: ["Serving USA", "Accounting Firms"],
    brandBlurb:
      "We are a leading offshore accounting and bookkeeping service provider trusted by USA firms.",
    phoneDisplay: "+1 (888) 552-0055",
    phoneHref: "tel:+18885520055",
    servicesHeading: "Our Services in USA",
    overlapText: "Overlap hours with USA for real-time collaboration",
    softwareHeading: "Trusted by Top USA Firms Using Leading Software",
    complianceLabel: "CCPA",
    complianceSub: "Compliant",
    serviceLinks: USA_SERVICE_LINKS,
  },
};

const GLOBAL_COPY = {
  valueIntro:
    "We help accounting firms worldwide save time, cut costs and scale with a dedicated offshore team.",
  brandBlurb:
    "We are a leading offshore accounting and bookkeeping partner trusted by firms across the UK, USA, Canada, and beyond.",
  phoneDisplay: "+44 20 4571 4469",
  phoneHref: "tel:+442045714469",
  overlapText: "Overlap hours across regions for real-time collaboration",
  softwareHeading: "Trusted by Firms Worldwide Using Leading Software",
  complianceLabel: "GDPR",
  complianceSub: "Compliant",
};

const GLOBAL_REGIONS = POPUP_REGIONS.map((region) => ({
  code: region.code,
  name: region.name,
  flag: region.flag,
  description: region.description,
  href: REGION_ROUTES[region.code] || null,
}));

const GLOBAL_REGIONS_LEFT = GLOBAL_REGIONS.filter((_, i) => i % 2 === 0);
const GLOBAL_REGIONS_RIGHT = GLOBAL_REGIONS.filter((_, i) => i % 2 === 1);

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "/contact", isContact: true },
  { label: "Articles & Tips", href: "/articles" },
  { label: "Careers", href: "/careers" },
];

/* Software logos — swap any `src` later if needed */
const SOFTWARE_BRANDS = [
  { name: "Xero", src: "/images/Logo/Xero/Xero/Xero_Xero_Wordmark_Blue_6.svg" },
  { name: "QuickBooks", src: "/images/Logo/QuickBooks_/QBO-2.png" },
  { name: "Sage", src: "/images/Logo/Sage/Sage/sage-green-logo-svg.svg" },
  { name: "FreeAgent", src: "/images/Logo/FreeAgent/FreeAgent_idNyOOTVhl_2.svg" },
  { name: "Dext", src: "/images/Logo/Dext/Dext_idpYhYo9DH_1.svg" },
  { name: "Hubdoc", src: "/images/Logo/Hubdoc/hubdoc.png" },
  { name: "AutoEntry", src: "/images/Logo/AutoEntry/AutoEntry_idedvbZBMw_2.svg" },
  { name: "IRIS", src: "/images/Logo/IRIS_KashFlow/IRIS_KashFlow_idvkknyO0A_1.png" },
  { name: "BrightPay", src: "/images/Logo/BrightPay/BrightPay_id1I-zJRQW_2.svg" },
  { name: "A2X", src: "/images/Logo/A2X/A2X_id4v1T0Lkg_2.svg" },
  { name: "Shopify", src: "/images/Logo/Shopify-com/Shopify-com_Logo_0.svg" },
  { name: "Stripe", src: "/images/Logo/Stripe/Stripe_Logo_0.svg" },
  { name: "PayPal", src: "/images/Logo/PayPal/PayPal_Logo_0.svg" },
];

function IconLaurel({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.2 2.8C8 4.6 5.8 7.6 5.2 11.2c-.5 2.6 0 5.1 1.4 7.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12.8 2.8c3.2 1.8 5.4 4.8 6 8.4.5 2.6 0 5.1-1.4 7.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.6 8.2c1.1.5 2 1.3 2.6 2.3M17.4 8.2c-1.1.5-2 1.3-2.6 2.3M6 12.2c1.3.3 2.4 1 3.2 2M18 12.2c-1.3.3-2.4 1-3.2 2M6.4 16c1.2.2 2.2.7 3 1.4M17.6 16c-1.2.2-2.2.7-3 1.4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="12"
        dominantBaseline="central"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        fontWeight="800"
        fontFamily="Arial, system-ui, sans-serif"
      >
        1
      </text>
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

const VALUE_STATS_BASE = [
  {
    icon: IconLaurel,
    title: "10+ Years",
    subtitleKey: "serving",
  },
  {
    icon: IconShield,
    title: "ISO 27001",
    subtitle: ["Certified", "Data Security"],
  },
  {
    icon: IconTeam,
    title: "150+",
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

const VALUE_STATS_GLOBAL = [
  {
    icon: IconLaurel,
    title: "10+ Years",
    subtitle: ["Serving Firms", "Worldwide"],
  },
  {
    icon: IconShield,
    title: "ISO 27001",
    subtitle: ["Certified", "Data Security"],
  },
  {
    icon: IconTeam,
    title: "150+",
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

function RegionLink({ region }) {
  const className =
    "group flex items-start gap-2 text-[12px] sm:text-[13px] leading-5 text-white/70 hover:text-[#F58220] transition-colors";

  const content = (
    <>
      <span className="mt-0.5 h-[14px] w-[20px] shrink-0 overflow-hidden rounded-[2px] border border-white/15">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={region.flag}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-white/85 group-hover:text-[#F58220]">
          {region.name}
        </span>
        <span className="mt-0.5 block text-[11px] leading-snug text-white/50 group-hover:text-[#F58220]/80">
          {region.description}
        </span>
      </span>
    </>
  );

  if (region.href && region.href !== "/") {
    return (
      <Link href={region.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${className} cursor-default`} role="presentation">
      {content}
    </div>
  );
}

/** Horizontal line — fades out on left & right */
function FadeDividerH({ className = "" }) {
  return (
    <div
      className={`h-px w-full ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 18%, rgba(255,255,255,0.22) 82%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

/** Vertical line — fades out on top & bottom */
function FadeDividerV({ className = "" }) {
  return (
    <div
      className={`w-px self-stretch min-h-[64px] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.22) 18%, rgba(255,255,255,0.22) 82%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

/**
 * @param {"uk" | "usa"} [region] — regional service footer
 * @param {"uk" | "usa" | "global"} [variant] — `global` for home/about/team/contact/careers
 */
export default function Footer({ onContactClick, region, variant }) {
  const pathname = usePathname();

  const resolvedRegion =
    region === "uk" || region === "usa"
      ? region
      : variant === "usa" || pathname?.startsWith("/usa")
        ? "usa"
        : variant === "uk" || pathname?.startsWith("/uk")
          ? "uk"
          : null;

  const isGlobal =
    variant === "global" ||
    (!resolvedRegion && !pathname?.startsWith("/uk") && !pathname?.startsWith("/usa"));

  const mode = isGlobal ? "global" : resolvedRegion || "uk";
  const copy = mode === "global" ? GLOBAL_COPY : REGION_COPY[mode] || REGION_COPY.uk;

  const serviceLinks = mode === "global" ? [] : copy.serviceLinks || [];
  const servicesLeft = serviceLinks.filter((_, i) => i % 2 === 0);
  const servicesRight = serviceLinks.filter((_, i) => i % 2 === 1);

  const valueStats =
    mode === "global"
      ? VALUE_STATS_GLOBAL
      : VALUE_STATS_BASE.map((stat) =>
          stat.subtitleKey === "serving"
            ? { ...stat, subtitle: copy.servingLines }
            : stat
        );

  return (
    <footer className="w-full text-white overflow-x-hidden" style={{ backgroundColor: BG }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-7 sm:py-9 lg:py-10">
        <div className="flex flex-col xl:flex-row xl:items-center gap-7 sm:gap-8 xl:gap-0">
          <div className="xl:w-[30%] xl:max-w-[380px] xl:pr-6 shrink-0 text-center sm:text-left">
            <h2 className="font-bold text-[22px] sm:text-[25px] lg:text-[27px] leading-[1.22] tracking-[-0.01em] text-white">
              Your Offshore Team.
              <br />
              <span className="text-[#F58220]">Your Competitive Advantage.</span>
            </h2>
            <p className="mt-2.5 text-[13px] sm:text-[14px] leading-[1.55] text-[#9AA3B2] max-w-[420px] mx-auto sm:mx-0">
              {copy.valueIntro}
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {valueStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex items-stretch min-w-0">
                  {index > 0 && <FadeDividerV className="hidden lg:block" />}
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-1.5 sm:px-2.5 lg:px-3 py-2.5 sm:py-3">
                    <div className="flex flex-col sm:flex-row min-h-0 sm:min-h-12 w-full items-center justify-center gap-1 sm:gap-2">
                      <span className="text-[#F58220] inline-flex items-center justify-center shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                        <Icon className="block w-full h-full" />
                      </span>
                      <span className="font-bold text-[13px] sm:text-[15px] lg:text-[16px] leading-none text-white whitespace-nowrap">
                        {stat.title}
                      </span>
                    </div>
                    <p className="mt-1 sm:mt-1.5 min-h-[34px] sm:min-h-[40px] flex flex-col items-center justify-start text-[11px] sm:text-[12px] lg:text-[13px] leading-[1.3] font-semibold text-[#9AA3B2] text-center">
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 md:gap-10 xl:gap-0">
          <div className="xl:col-span-3 space-y-4 xl:pr-8">
            <Link href="/" className="inline-block">
              <img
                src="/images/nextledgerlogo3.png"
                alt="Next Ledgers"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] leading-6 text-white/70 max-w-[280px]">
              {copy.brandBlurb}
            </p>

            <div className="space-y-3 pt-1">
              <a
                href={copy.phoneHref}
                className="flex items-center gap-2.5 text-[13px] font-semibold text-white/90 hover:text-[#F58220] transition-colors"
              >
                <span className="text-[#F58220]">
                  <IconPhone className="w-4 h-4" />
                </span>
                {copy.phoneDisplay}
              </a>
              <a
                href="mailto:info@nextledgers.com"
                className="flex items-center gap-2.5 text-[13px] font-semibold text-white/90 hover:text-[#F58220] transition-colors break-all"
              >
                <span className="text-[#F58220] shrink-0">
                  <IconMail className="w-4 h-4" />
                </span>
                info@nextledgers.com
              </a>
              <div className="flex items-start gap-2.5 text-[13px] leading-5 text-white/70">
                <span className="text-[#F58220] mt-0.5 shrink-0">
                  <IconPin className="w-4 h-4" />
                </span>
                <span>
                  <span className="font-bold text-white">Next Ledgers HQ</span>
                  <br />
                  Mayapuri Commercial Area, New Delhi, India 110064.
                </span>
              </div>
            </div>

            {onContactClick ? (
              <button
                type="button"
                onClick={onContactClick}
                className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[10px] bg-[#F58220] hover:bg-[#e57416] text-white text-[13px] font-bold cursor-pointer transition-colors shadow-[0_8px_20px_rgba(245,130,32,0.25)]"
              >
                <IconPhone className="w-4 h-4" />
                Book a Free Consultation
              </button>
            ) : (
              <Link
                href="/contact"
                className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-5 rounded-[10px] bg-[#F58220] hover:bg-[#e57416] text-white text-[13px] font-bold cursor-pointer transition-colors shadow-[0_8px_20px_rgba(245,130,32,0.25)]"
              >
                <IconPhone className="w-4 h-4" />
                Book a Free Consultation
              </Link>
            )}
          </div>

          <div className="xl:col-span-3 flex">
            <FadeDividerV className="hidden xl:block mr-6" />
            <div className="flex-1 xl:pr-4">
              <h3 className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#F58220] mb-4">
                {mode === "global" ? "Our Regions" : copy.servicesHeading}
              </h3>
              {mode === "global" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="space-y-3.5">
                    {GLOBAL_REGIONS_LEFT.map((item) => (
                      <RegionLink key={item.code} region={item} />
                    ))}
                  </div>
                  <div className="space-y-3.5">
                    {GLOBAL_REGIONS_RIGHT.map((item) => (
                      <RegionLink key={item.code} region={item} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  <div className="space-y-2.5">
                    {servicesLeft.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-1.5 text-[12px] sm:text-[13px] leading-5 text-white/70 hover:text-[#F58220] transition-colors"
                      >
                        <span className="text-[#F58220] mt-0.5 shrink-0">
                          <IconChevron className="w-3 h-3" />
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    {servicesRight.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-start gap-1.5 text-[12px] sm:text-[13px] leading-5 text-white/70 hover:text-[#F58220] transition-colors"
                      >
                        <span className="text-[#F58220] mt-0.5 shrink-0">
                          <IconChevron className="w-3 h-3" />
                        </span>
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-2 xl:col-span-6 flex">
            <FadeDividerV className="hidden xl:block mr-4" />
            <div className="flex-1 min-w-0">
              <div className="flex w-full flex-row items-start gap-[10px]">
                <div className="w-[110px] shrink-0 sm:w-[118px]">
                  <h3 className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#F58220] mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-2.5">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[13px] font-semibold text-white/75 hover:text-[#F58220] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#F58220] mb-3">
                    Global Connectivity
                  </h3>
                  <FooterGlobalMap />

                  <div className="mt-3 rounded-[10px] border border-[#F58220]/50 bg-[#0A1628] px-3 py-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
                    <div className="flex items-center gap-3 flex-1 sm:pr-3">
                      <span
                        className="text-[#F58220] shrink-0 inline-flex items-center justify-center rounded-full border-[1.5px] border-[#F58220]"
                        style={{ width: 37, height: 37 }}
                      >
                        <IconHeadset className="w-8 h-8" />
                      </span>
                      <p className="text-[11px] sm:text-[12px] leading-[1.4] text-white/85">
                        Working in your time zone to support your business
                      </p>
                    </div>
                    <div
                      className="hidden sm:block w-px self-stretch min-h-[40px] bg-[#F58220]/35 shrink-0"
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-3 flex-1 sm:pl-3 sm:border-0 border-t border-[#F58220]/25 pt-3 sm:pt-0">
                      <span
                        className="text-[#F58220] shrink-0 inline-flex items-center justify-center rounded-full border-[1.5px] border-[#F58220]"
                        style={{ width: 37, height: 37 }}
                      >
                        <IconClock className="w-8 h-8" />
                      </span>
                      <p className="text-[11px] sm:text-[12px] leading-[1.4] text-white/85">
                        {copy.overlapText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FadeDividerH />

      <div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 sm:pt-5 pb-6 sm:pb-8">
          <p className="text-left text-[10px] sm:text-[11px] md:text-[12px] font-extrabold tracking-[0.12em] sm:tracking-[0.18em] uppercase text-white/85">
            {copy.softwareHeading}
          </p>

          <div className="mt-4 sm:mt-5 md:mt-6 overflow-hidden">
            <div className="footer-logo-marquee flex w-max items-center">
              {[0, 1].map((copyIdx) => (
                <div key={copyIdx} className="flex items-center shrink-0" aria-hidden={copyIdx === 1}>
                  {SOFTWARE_BRANDS.map((brand, index) => (
                    <div key={`${copyIdx}-${brand.name}`} className="flex items-center">
                      {(index > 0 || copyIdx === 1) && (
                        <div
                          className="w-px h-6 sm:h-7 mx-2.5 sm:mx-4 lg:mx-5 shrink-0"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.28), transparent)",
                          }}
                          aria-hidden="true"
                        />
                      )}
                      <div className="relative h-6 sm:h-7 md:h-8 w-[64px] sm:w-[72px] md:w-[84px] shrink-0">
                        <Image
                          src={brand.src}
                          alt={copyIdx === 0 ? brand.name : ""}
                          fill
                          className="object-contain object-left"
                          sizes="84px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes footerLogoMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .footer-logo-marquee {
              animation: footerLogoMarquee 35s linear infinite;
            }
            .footer-logo-marquee:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .footer-logo-marquee {
                animation: none;
              }
            }
          `}</style>
        </div>
      </div>

      <FadeDividerH />

      <div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-5 text-[11px] sm:text-[12px] text-white/50">
          <p className="text-center lg:text-left order-1">
            © {new Date().getFullYear()} Next Ledgers. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 order-2">
            <span className="inline-flex items-center gap-2 sm:gap-2.5 text-white/70">
              <IconShield className="w-6 h-6 sm:w-7 sm:h-7 text-white/70 shrink-0" />
              <span className="flex flex-col leading-[1.2] text-[11px] sm:text-[12px] font-semibold">
                <span>ISO 27001</span>
                <span>Certified</span>
              </span>
            </span>

            <div
              className="w-px h-8 shrink-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(255,255,255,0.28), transparent)",
              }}
              aria-hidden="true"
            />

            <span className="inline-flex items-center gap-2 sm:gap-2.5 text-white/70">
              <IconLock className="w-6 h-6 sm:w-7 sm:h-7 text-white/70 shrink-0" />
              <span className="flex flex-col leading-[1.2] text-[11px] sm:text-[12px] font-semibold">
                <span>{copy.complianceLabel}</span>
                <span>{copy.complianceSub}</span>
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 order-3">
            <div className="flex items-center gap-2 sm:gap-3 text-white/60">
              <Link href="/privacy" className="hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="hover:text-white transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#F58220] hover:border-[#F58220] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M6.9 8.8H4V20h2.9V8.8ZM5.4 4A1.7 1.7 0 1 0 5.4 7.4 1.7 1.7 0 0 0 5.4 4ZM20 20h-2.9v-5.6c0-1.5-.6-2.4-1.8-2.4-1 0-1.5.7-1.8 1.3-.1.3-.1.6-.1.9V20H10.5s0-9.4 0-10.4H13.4v1.7c.5-.8 1.5-1.9 3.6-1.9 2.6 0 4.5 1.7 4.5 5.3V20Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#F58220] hover:border-[#F58220] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M14.5 8.5V6.8c0-.7.2-1.1 1.2-1.1H17V3h-2.3C11.9 3 11 4.6 11 6.6v1.9H9V11h2v10h3.5V11H17l.5-2.5h-3Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[#F58220] hover:border-[#F58220] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                  <path d="M21.6 7.8a2.5 2.5 0 0 0-1.8-1.8C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.8 26 26 0 0 0 .4 4.2 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.2ZM10.2 15.2V8.8L15.5 12l-5.3 3.2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

