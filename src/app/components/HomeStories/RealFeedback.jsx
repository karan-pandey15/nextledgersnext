"use client";

import React from "react";
import Image from "next/image";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

const TESTIMONIALS = [
  {
    name: "Michael Chen",
    role: "CEO, TechStart Inc.",
    quote:
      "Next Ledgers transformed how we manage our finances. Their team is responsive, knowledgeable, and truly cares about our success. Highly recommended!",
    image: "/images/DSC09879.JPG",
    imagePos: "object-[30%_20%]",
    featured: false,
  },
  {
    name: "Sarah Williams",
    role: "Founder, Bloom Retail",
    quote:
      "Switching to Next Ledgers was the best decision for our growing business. Accurate books, clear reports, and a partner that stays with us every step of the way.",
    image: "/images/DSC09669.JPG",
    imagePos: "object-[70%_15%]",
    featured: true,
  },
  {
    name: "David Martinez",
    role: "CFO, Horizon Group",
    quote:
      "Professional, proactive, and always available. Their global expertise helped us stay compliant across markets without the usual headaches.",
    image: "/images/DSC09794.JPG",
    imagePos: "object-[40%_25%]",
    featured: false,
  },
];

function Stars({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4"
          fill={light ? "#FFFFFF" : ORANGE}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.35 5.1 5.55.7-4.1 3.85 1.1 5.45L10 13.9l-4.9 2.7 1.1-5.45-4.1-3.85 5.55-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark({ className = "", light = false }) {
  return (
    <span
      className={`font-serif text-[56px] sm:text-[68px] leading-none select-none pointer-events-none ${className}`}
      style={{ color: light ? "rgba(255,255,255,0.35)" : "rgba(245,130,32,0.22)" }}
      aria-hidden="true"
    >
      &ldquo;
    </span>
  );
}

function TestimonialCard({ item }) {
  const featured = item.featured;

  return (
    <div
      className={`relative flex flex-col items-center text-center rounded-[18px] sm:rounded-[20px] px-5 sm:px-6 pt-8 pb-7 sm:pt-9 sm:pb-8 min-h-[320px] sm:min-h-[340px] shadow-[0_10px_36px_rgba(15,39,74,0.07)] ${
        featured ? "bg-[#F58220] text-white" : "bg-white"
      }`}
    >
      <QuoteMark className="absolute top-2 left-4 sm:top-3 sm:left-5" light={featured} />
      <span
        className="absolute bottom-1 right-4 sm:bottom-2 sm:right-5 font-serif text-[56px] sm:text-[68px] leading-none select-none pointer-events-none"
        style={{ color: featured ? "rgba(255,255,255,0.35)" : "rgba(245,130,32,0.22)" }}
        aria-hidden="true"
      >
        &rdquo;
      </span>

      <div className="relative w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full overflow-hidden ring-2 ring-white/40 shadow-md">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={`object-cover ${item.imagePos}`}
          sizes="80px"
        />
      </div>

      <div className="mt-3 sm:mt-3.5">
        <Stars light={featured} />
      </div>

      <h3
        className="mt-3 font-bold text-[15px] sm:text-[16px] leading-snug"
        style={{ color: featured ? "#FFFFFF" : NAVY }}
      >
        {item.name}
      </h3>

      <p
        className="mt-1 text-[12px] sm:text-[13px] font-medium"
        style={{ color: featured ? "rgba(255,255,255,0.92)" : ORANGE }}
      >
        {item.role}
      </p>

      <div
        className="mt-3 mb-3 h-px w-10"
        style={{ backgroundColor: featured ? "rgba(255,255,255,0.45)" : "#E8E8E8" }}
        aria-hidden="true"
      />

      <p
        className="text-[12px] sm:text-[13px] leading-[1.55] max-w-[280px]"
        style={{ color: featured ? "rgba(255,255,255,0.95)" : GREY }}
      >
        {item.quote}
      </p>
    </div>
  );
}

export default function RealFeedback() {
  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-5 sm:px-8 lg:px-10 pt-0 pb-8 sm:pb-10">
          <div className="text-center max-w-[980px] mx-auto">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 sm:w-10 bg-[#F58220]" aria-hidden="true" />
              <p
                className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase"
                style={{ color: ORANGE }}
              >
                REAL FEEDBACK
              </p>
              <span className="h-px w-8 sm:w-10 bg-[#F58220]" aria-hidden="true" />
            </div>

            <h2
              className="mt-3 sm:mt-4 font-bold text-[18px] sm:text-[24px] lg:text-[28px] leading-[1.2] tracking-[-0.01em] text-balance"
              style={{ color: NAVY }}
            >
              Real Feedback from{" "}
              <span style={{ color: ORANGE }}>Businesses</span> Like Yours.
            </h2>

            <p
              className="mt-3 sm:mt-3.5 text-[12px] sm:text-[14px] lg:text-[15px] leading-6 text-[#6B7280] max-w-[640px]"
            >
              We&apos;re proud to be trusted by business owners who value accuracy, reliability,
              and a partnership that drives results.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
