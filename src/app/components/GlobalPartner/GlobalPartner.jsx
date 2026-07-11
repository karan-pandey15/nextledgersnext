"use client";

import React from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

function DottedWorldMap() {
  return (
    <svg
      viewBox="0 0 640 360"
      className="absolute inset-0 w-full h-full opacity-[0.22] pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dotMap" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="#F58220" />
        </pattern>
        <mask id="continentsMask">
          <rect width="640" height="360" fill="black" />
          {/* Abstract continent silhouettes */}
          <path
            fill="white"
            d="M70 90c30-28 78-34 120-22 28 8 48 28 70 34 26 8 54-4 78 8 20 10 28 34 18 52-14 26-48 34-76 28-30-6-48-28-78-30-34-2-62 20-94 14-28-6-48-28-38-52 4-10 12-20 0-32z"
          />
          <path
            fill="white"
            d="M250 150c18-8 36 2 42 18 8 22-4 44-24 52-22 8-44-6-50-26-6-18 10-36 32-44z"
          />
          <path
            fill="white"
            d="M320 70c40-18 96-14 140 8 36 18 62 48 58 86-4 34-34 56-68 62-40 8-78-10-108-36-28-24-40-58-22-86 8-14 18-26 0-34z"
          />
          <path
            fill="white"
            d="M360 210c22-6 40 10 46 28 8 24-8 46-30 52-24 6-48-10-52-32-4-20 12-42 36-48z"
          />
          <path
            fill="white"
            d="M500 220c28-10 58 4 70 28 12 24 2 52-24 64-28 12-60 0-74-26-14-26-4-54 28-66z"
          />
        </mask>
      </defs>
      <rect width="640" height="360" fill="url(#dotMap)" mask="url(#continentsMask)" />
    </svg>
  );
}

export default function GlobalPartner() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 sm:pt-9 lg:pt-10 pb-0">
      {/* Same alignment pattern as CoreServices / Technology — side gutters stay white */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0]  px-5 sm:px-8 lg:px-10 py-8 sm:py-9 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left content */}
            <div className="relative z-10 w-full">
              <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <DottedWorldMap />
              </div>

              <h2
                className="font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.01em]"
                style={{ color: NAVY }}
              >
                Your Global Accounting Partner –{" "}
                <span style={{ color: ORANGE }}>
                  Personalized, Proactive, and Always Present
                </span>
              </h2>

              <p
                className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 max-w-[540px]"
                style={{ color: GREY }}
              >
                Our leaders take pride in not following the &apos;onboard and disappear&apos;
                approach. Our team delivers ongoing, tailored accounting solutions, ensuring
                you&apos;re supported every step of the way with real people who truly care about
                your clients, your business and your success.
              </p>

              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <CtaButton href="/contact" variant="primary" size="md">
                  Get Started Today
                  <span aria-hidden="true">→</span>
                </CtaButton>
                <CtaButton href="/services" variant="secondary" size="md">
                  Explore Services
                  <span aria-hidden="true">→</span>
                </CtaButton>
              </div>
            </div>

            {/* Right image — reduced size */}
            <div className="relative w-full max-w-[520px] lg:max-w-none lg:justify-self-end h-[220px] sm:h-[260px] lg:h-[300px] overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)]">
              <Image
                src="/images/DSC09879.JPG"
                alt="Next Ledgers accounting team collaborating"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
