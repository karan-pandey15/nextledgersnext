"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import ContactUsCTA from "../components/HomeTrust/ContactUsCTA";
import {
  PadlockIcon,
  ShieldCheckIcon,
  TeamIcon,
  TimerIcon,
} from "../components/VideoComponent/TrustBarIcons";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const TRUST_ITEMS = [
  { icon: ShieldCheckIcon, lines: ["Global", "Standards"] },
  { icon: PadlockIcon, lines: ["Secure &", "Confidential"] },
  { icon: TeamIcon, lines: ["Trusted by", "Businesses"] },
  { icon: TimerIcon, lines: ["On-Time", "Delivery"] },
];

const WHY_STARTED = [
  {
    title: "The Gap We Saw",
    description:
      "We didn't build Next Ledgers to be just another accounting service provider. Too many firms were onboarded and then left unsupported.",
    icon: GapIcon,
  },
  {
    title: "Continuous Care",
    description:
      "Our clients don't just meet one person during onboarding — they work with a responsive, experienced team invested in their growth at every stage.",
    icon: CareIcon,
  },
  {
    title: "Strategy & Partnership",
    description:
      "Whether you need to streamline accounting, expand your client base, or acquire a practice — we bring service, strategy, and partnership.",
    icon: PartnerIcon,
  },
  {
    title: "Always With You",
    description:
      "We believe in continuous care, not one-time connections. Real people who stay with you beyond onboarding.",
    icon: AlwaysIcon,
  },
];

const CORE_VALUES = [
  {
    title: "Trust",
    description:
      "Lasting relationships based on honesty, transparency, and reliability in every interaction.",
    icon: TrustIcon,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, delivering superior service and results.",
    icon: ExcellenceIcon,
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to provide smarter solutions for our clients.",
    icon: InnovationIcon,
  },
  {
    title: "Efficiency",
    description:
      "We respect your time — our processes are designed to be fast, seamless, and hassle-free.",
    icon: EfficiencyIcon,
  },
];

function GapIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="15.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4.8 17.2c.5-2.3 2.2-3.6 4.2-3.6s3.7 1.3 4.2 3.6M13.2 17.2c.4-1.7 1.7-2.8 3.2-2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CareIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2 5.5 6v5.4c0 4.2 2.9 8.1 6.5 9.1 3.6-1 6.5-4.9 6.5-9.1V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9.1 12 2 2 3.9-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartnerIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v9M10 9.4c.5-.8 1.2-1.1 2-1.1 1.2 0 2 .6 2 1.5s-.8 1.4-2 1.4-2 .5-2 1.5.9 1.6 2.1 1.6c.8 0 1.5-.3 2-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AlwaysIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" />
      <text
        x="12"
        y="13.2"
        textAnchor="middle"
        fontSize="7.2"
        fontWeight="700"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
      >
        24/7
      </text>
    </svg>
  );
}

function TrustIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2 5.5 6v5.4c0 4.2 2.9 8.1 6.5 9.1 3.6-1 6.5-4.9 6.5-9.1V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExcellenceIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.8 6.3 20l2.1-6.4L3 9.6h6.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InnovationIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 1 3.5 10.8V16a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 16v-2.2A6 6 0 0 1 12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EfficiencyIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 3 5.5 13.5H12L11 21l7.5-10.5H12L13 3Z" fill="currentColor" />
    </svg>
  );
}

function MissionIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.2 5.5 6v5.4c0 4.2 2.9 8.1 6.5 9.1 3.6-1 6.5-4.9 6.5-9.1V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VisionIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DottedWorldMap() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.22]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="aboutDotMap" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill={BRAND_ORANGE} />
        </pattern>
        <mask id="aboutContinentsMask">
          <rect width="640" height="360" fill="black" />
          <path
            fill="white"
            d="M70 90c30-28 78-34 120-22 28 8 48 28 70 34 26 8 54-4 78 8 20 10 28 34 18 52-14 26-48 34-76 28-30-6-48-28-78-30-34-2-62 20-94 14-28-6-48-28-38-52 4-10 12-20 0-32z"
          />
          <path fill="white" d="M250 150c18-8 36 2 42 18 8 22-4 44-24 52-22 8-44-6-50-26-6-18 10-36 32-44z" />
          <path
            fill="white"
            d="M320 70c40-18 96-14 140 8 36 18 62 48 58 86-4 34-34 56-68 62-40 8-78-10-108-36-28-24-40-58-22-86 8-14 18-26 0-34z"
          />
          <path fill="white" d="M360 210c22-6 40 10 46 28 8 24-8 46-30 52-24 6-48-10-52-32-4-20 12-42 36-48z" />
          <path fill="white" d="M500 220c28-10 58 4 70 28 12 24 2 52-24 64-28 12-60 0-74-26-14-26-4-54 28-66z" />
        </mask>
      </defs>
      <rect width="640" height="360" fill="url(#aboutDotMap)" mask="url(#aboutContinentsMask)" />
    </svg>
  );
}

export default function AboutPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      {/* ─── 1. Video hero (home theme) ─── */}
      <section className="relative w-full min-h-[420px] overflow-hidden bg-[#111111] sm:min-h-[460px] lg:min-h-[500px]">
        <video
          src="/images/finalvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        <div className="relative z-10 mx-auto flex h-full min-h-[420px] max-w-[1440px] flex-col justify-between px-4 py-10 sm:min-h-[460px] sm:px-6 sm:py-12 lg:min-h-[500px] lg:px-10 lg:py-14">
          <motion.div
            className="max-w-[760px]"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="mb-4 text-[13px] font-medium text-white/90 sm:mb-5 sm:text-[14px]">
              Founded in 2024 — journey began over a{" "}
              <span className="font-semibold text-[#FF6A00]">decade</span> ago
            </p>

            <h1 className="text-[30px] font-bold leading-[1.08] tracking-tight text-white sm:text-[38px] md:text-[46px] lg:text-[52px]">
              About Next Ledgers —
              <br />
              Redefining International
              <br />
              <span className="text-[#FF6A00]">Accounting Support.</span>
            </h1>

            <p className="mt-4 max-w-[620px] text-[14px] leading-7 text-white/85 sm:mt-5 sm:text-[15px]">
              A team of highly qualified professionals with one shared vision: to
              redefine what international accounting support should feel like for
              firms in the US and Canada.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
              {TRUST_ITEMS.map(({ icon: Icon, lines }, index) => (
                <React.Fragment key={lines.join("-")}>
                  <div className="flex items-center gap-2 text-[14px] sm:text-[15px]">
                    <div
                      className="aspect-square shrink-0"
                      style={{
                        width: "calc(2 * 1.12 * 1.9 * 1em)",
                        height: "calc(2 * 1.12 * 1.9 * 1em)",
                      }}
                    >
                      <Icon />
                    </div>
                    <div className="flex flex-col leading-[1.15]">
                      <span className="font-semibold text-white">{lines[0]}</span>
                      <span className="font-semibold text-white">{lines[1]}</span>
                    </div>
                  </div>
                  {index < TRUST_ITEMS.length - 1 && (
                    <div
                      className="mx-1.5 hidden h-[calc(2*1.12*1.9*14px)] w-px self-center bg-white/35 sm:block sm:h-[calc(2*1.12*1.9*15px)]"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. Our Story (Global Partner layout) ─── */}
      <section className="relative w-full overflow-hidden bg-white pt-8 pb-0 sm:pt-9 lg:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="bg-[#FFF7F0] px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div className="relative z-10 flex w-full flex-col">
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <DottedWorldMap />
                </div>

                <h2
                  className="text-[26px] font-bold leading-[1.15] tracking-[-0.01em] sm:text-[32px] lg:text-[36px]"
                  style={{ color: NAVY }}
                >
                  Our Story –{" "}
                  <span style={{ color: ORANGE }}>
                    Built by Experience, Driven by Vision
                  </span>
                </h2>

                <div
                  className="mt-3 max-w-[540px] flex-1 space-y-2.5 text-[13px] leading-6 sm:mt-4 sm:space-y-3 sm:text-[14px] sm:leading-7"
                  style={{ color: GREY }}
                >
                  <p>
                    Next Ledgers was founded in 2024, but our journey began over a
                    decade ago. It is a team of highly qualified, talented, and
                    experienced professionals who came together with one shared
                    vision: to redefine what international accounting support should
                    feel like for firms in the US and Canada.
                  </p>
                  <p>
                    Our founder,{" "}
                    <strong className="font-semibold text-[#1A1A1A]">
                      Durgesh Pandey
                    </strong>
                    , is a qualified ACCA professional with a Master&apos;s degree in
                    Accounting and Tax. With over 10 years of hands-on experience in
                    accounting, auditing, and tax consulting across North America,
                    Durgesh has built a solid reputation for helping small and growing
                    CPA practices scale.
                  </p>
                  <p>
                    Before starting{" "}
                    <strong className="font-semibold text-[#1A1A1A]">
                      Next Ledgers
                    </strong>
                    , Durgesh partnered with a leading outsourcing firm, where he
                    helped 50+ CPA firms across the US and Canada transform their
                    operations — from automating workflows to acquiring entire CPA
                    practices.
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6A00] px-6 py-2.5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#E85E00] sm:px-7 sm:py-3 sm:text-[14px]"
                  >
                    Get Started Today
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/team"
                    className="cta-fill-orange inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-semibold sm:px-7 sm:py-3 sm:text-[14px]"
                  >
                    Meet Our Team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[280px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[24px] lg:min-h-0 lg:h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/durgesh.png"
                  alt="Durgesh Pandey — Founder of NextLedgers"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/images/DSC09879.JPG";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Why We Started (Why Choose Us layout) ─── */}
      <section className="relative w-full overflow-hidden bg-white pb-9 pt-6 sm:pb-10 sm:pt-7 lg:pb-11 lg:pt-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
              <div className="relative z-10 flex w-full flex-col">
                <div className="text-center lg:text-left">
                  <h2
                    className="text-[22px] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                    style={{ color: NAVY }}
                  >
                    Why We Started Next Ledgers?
                  </h2>
                  <p
                    className="mx-auto mt-2 max-w-[440px] text-[15px] leading-6 sm:mt-2.5 sm:text-[16px] sm:leading-7 lg:mx-0 lg:text-[17px]"
                    style={{ color: GREY }}
                  >
                    Continuous care, not one-time connections — partnership at every stage
                  </p>
                </div>

                <div className="mt-2.5 flex-1 sm:mt-3">
                  {WHY_STARTED.map((item, index) => {
                    const Icon = item.icon;
                    const isLast = index === WHY_STARTED.length - 1;
                    return (
                      <div key={item.title}>
                        <div className="flex items-start gap-3 py-1.5 sm:py-2">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_6px_16px_rgba(255, 106, 0,0.25)] sm:h-10 sm:w-10">
                            <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                          </div>
                          <div className="min-w-0">
                            <h3
                              className="text-[14px] font-bold leading-snug sm:text-[15px]"
                              style={{ color: NAVY }}
                            >
                              {item.title}
                            </h3>
                            <p
                              className="mt-0.5 max-w-[480px] text-[12px] leading-[1.4] sm:text-[13px]"
                              style={{ color: GREY }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                        {!isLast && (
                          <div className="h-px w-full bg-[#E8E8E8]" aria-hidden="true" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[260px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[280px] sm:rounded-[24px] lg:min-h-0 lg:h-full">
                <Image
                  src="/images/DSC09794.JPG"
                  alt="Next Ledgers team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Mission & Vision (compact icon rows) ─── */}
      <section className="w-full bg-[#FFF7F0] px-4 py-8 sm:px-6 sm:py-9 lg:px-10 lg:py-10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {[
            {
              title: "Our Mission",
              text: "To empower individuals and businesses to achieve success by providing personalized service, expert guidance, and the right financial solutions that build lasting results.",
              icon: MissionIcon,
            },
            {
              title: "Our Vision",
              text: "To build a firm recognized for trust, global expertise and commitment to helping every client move forward with confidence — feeling heard, supported, and ready to achieve their unique business goals.",
              icon: VisionIcon,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-[16px] border border-[#FF6A00]/15 bg-white px-4 py-4 sm:gap-4 sm:px-5 sm:py-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_6px_16px_rgba(255, 106, 0,0.25)]">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0">
                  <h3
                    className="text-[15px] font-bold leading-snug sm:text-[16px]"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-1 text-[12px] leading-[1.45] sm:text-[13px]"
                    style={{ color: GREY }}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 5. Core Values (space-less icon list + image) ─── */}
      <section className="relative w-full overflow-hidden bg-white pb-9 pt-6 sm:pb-10 sm:pt-7 lg:pb-11 lg:pt-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col">
                <div className="text-center lg:text-left">
                  <h2
                    className="text-[22px] font-bold leading-[1.2] sm:text-[26px] lg:text-[28px]"
                    style={{ color: NAVY }}
                  >
                    Our Core Values
                  </h2>
                  <p
                    className="mt-2 text-[15px] leading-6 sm:text-[16px]"
                    style={{ color: GREY }}
                  >
                    The principles that guide everything we do
                  </p>
                </div>

                <div className="mt-2.5 flex-1 sm:mt-3">
                  {CORE_VALUES.map((value, index) => {
                    const Icon = value.icon;
                    const isLast = index === CORE_VALUES.length - 1;
                    return (
                      <div key={value.title}>
                        <div className="flex items-start gap-3 py-1.5 sm:py-2">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_6px_16px_rgba(255, 106, 0,0.25)] sm:h-10 sm:w-10">
                            <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                          </div>
                          <div className="min-w-0">
                            <h3
                              className="text-[14px] font-bold leading-snug sm:text-[15px]"
                              style={{ color: NAVY }}
                            >
                              {value.title}
                            </h3>
                            <p
                              className="mt-0.5 max-w-[480px] text-[12px] leading-[1.4] sm:text-[13px]"
                              style={{ color: GREY }}
                            >
                              {value.description}
                            </p>
                          </div>
                        </div>
                        {!isLast && (
                          <div className="h-px w-full bg-[#E8E8E8]" aria-hidden="true" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative min-h-[260px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[280px] sm:rounded-[24px] lg:min-h-0 lg:h-full">
                <Image
                  src="/images/DSC09879.JPG"
                  alt="Next Ledgers collaboration"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Ready to work together (Contact Us CTA — 4th image) ─── */}
      <section className="w-full bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="mx-auto max-w-[1440px]">
          <ContactUsCTA />
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
