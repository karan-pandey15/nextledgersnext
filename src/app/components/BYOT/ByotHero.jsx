"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Calculator,
  ClipboardList,
  FileText,
  Headphones,
  Percent,
  UserRound,
  Users,
  Shield,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#1A1A1A";
const GREY = "#6B7280";

const ROLES = [
  { label: "Accountant", icon: UserRound },
  { label: "Bookkeeper", icon: Calculator },
  { label: "Payroll Specialist", icon: ClipboardList },
  { label: "Tax Professional", icon: Percent },
  { label: "Management Accountant", icon: BarChart3 },
  { label: "Virtual CFO", icon: FileText },
  { label: "Admin & Back Office Support", icon: Headphones },
];

/** Hexagon orbit — photos matched to real /team roles (excl. Durgesh & Anjali) */
const ORBIT = [
  {
    label: "Accountant",
    src: "/images/TeamImage/Akash_Gangwar-removebg-preview.png",
    angle: -90,
  },
  {
    label: "Payroll Specialist",
    src: "/images/TeamImage/Varun_Chauhan-removebg-preview.png",
    angle: -30,
  },
  {
    label: "Virtual CFO",
    src: "/images/TeamImage/Parwinder_Singh-removebg-preview.png",
    angle: 30,
  },
  {
    label: "Management Accountant",
    src: "/images/TeamImage/Praveen_Kumar-removebg-preview.png",
    angle: 90,
  },
  {
    label: "Tax Professional",
    src: "/images/TeamImage/Ankita-removebg-preview.png",
    angle: 150,
  },
  {
    label: "Bookkeeper",
    src: "/images/TeamImage/Nikhil_Kushwaha-removebg-preview.png",
    angle: 210,
  },
];

const ORBIT_RADIUS = 38;

function orbitPoint(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + ORBIT_RADIUS * Math.cos(rad),
    y: 50 + ORBIT_RADIUS * Math.sin(rad),
  };
}

export default function ByotHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F2F2F2]"
      style={{ minHeight: "calc(100svh - 72px)" }}
    >
      {/* Right half: wavy cut + CSS dotted map background */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="byotDotGrid"
              x="0"
              y="0"
              width="14"
              height="14"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.2" cy="1.2" r="1.15" fill="#C9C9C9" />
            </pattern>
            <clipPath id="byotRightWave">
              {/* Soft S-curve cut matching the design */}
              <path d="M760,0 C700,140 820,260 710,420 C600,580 780,720 740,900 L1440,900 L1440,0 Z" />
            </clipPath>
            <filter id="byotMapLight" colorInterpolationFilters="sRGB">
              <feColorMatrix
                type="matrix"
                values="-1 0 0 0 1
                        0 -1 0 0 1
                        0 0 -1 0 1
                        0 0 0 1 0"
              />
              <feColorMatrix type="saturate" values="0" />
              <feComponentTransfer>
                <feFuncR type="linear" slope="1.55" />
                <feFuncG type="linear" slope="1.55" />
                <feFuncB type="linear" slope="1.55" />
              </feComponentTransfer>
            </filter>
          </defs>

          <g clipPath="url(#byotRightWave)">
            <rect x="0" y="0" width="1440" height="900" fill="#FAFAFA" />
            <rect
              x="0"
              y="0"
              width="1440"
              height="900"
              fill="url(#byotDotGrid)"
              opacity="0.5"
            />
            <image
              href="/images/footer/world-map-dots.png"
              x="680"
              y="70"
              width="740"
              height="760"
              opacity="0.22"
              preserveAspectRatio="xMidYMid meet"
              filter="url(#byotMapLight)"
            />
          </g>

          {/* Soft edge of the cut line */}
          <path
            d="M760,0 C700,140 820,260 710,420 C600,580 780,720 740,900"
            fill="none"
            stroke="rgba(0,0,0,0.055)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-2 lg:px-10 lg:py-5 xl:px-14">
        {/* Left copy */}
        <div className="order-1 z-10 max-w-[640px] text-center lg:pr-4 lg:text-left">
          <div className="inline-flex overflow-hidden rounded-full shadow-sm">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[11px]"
              style={{ background: ORANGE }}
            >
              <Users className="h-3.5 w-3.5" strokeWidth={2.2} />
              BYOT
            </span>
            <span className="bg-[#2A2A2A] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white sm:text-[11px]">
              Build Your Own Team
            </span>
          </div>

          <h1
            className="mt-4 text-[26px] font-bold leading-[1.12] tracking-[-0.02em] sm:text-[34px] lg:text-[40px] xl:text-[44px]"
            style={{ color: NAVY }}
          >
            Build Your Dedicated
            <br />
            <span style={{ color: ORANGE }}>Offshore Finance Team</span>
          </h1>

          <p
            className="mt-3 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
            style={{ color: GREY }}
          >
            Scale your business with experienced accountants, bookkeepers, tax
            professionals, payroll specialists, and virtual CFOs who work
            exclusively for your business.
          </p>
          <p
            className="mt-2 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
            style={{ color: GREY }}
          >
            Fully integrated with your systems, processes, software, and working
            hours—without the cost and complexity of local hiring.
          </p>

          <div className="mt-5">
            <div className="mb-2.5 flex items-center justify-center gap-2 lg:justify-start">
              <Users className="h-4 w-4" style={{ color: ORANGE }} strokeWidth={2} />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#4B5563" }}
              >
                Dedicated Roles You Can Build
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {ROLES.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-[10px] border border-[#E8E8E8] bg-white px-1.5 py-2.5 text-center shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                >
                  <Icon
                    className="h-[24px] w-[24px]"
                    style={{ color: ORANGE }}
                    strokeWidth={1.8}
                  />
                  <span
                    className="mt-2 text-[10px] font-bold leading-tight sm:text-[11px]"
                    style={{ color: NAVY }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#byot-connect"
              className="inline-flex items-center gap-2 rounded-[8px] px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/25 transition hover:brightness-95 sm:text-[13px]"
              style={{ background: ORANGE }}
            >
              <Users className="h-4 w-4" strokeWidth={2.2} />
              Build Your Team Today
            </Link>
            <div className="flex items-start gap-2 text-left">
              <Shield
                className="mt-0.5 h-5 w-5 shrink-0 text-[#1A1A1A]"
                strokeWidth={1.5}
              />
              <div>
                <p
                  className="text-[12px] font-semibold leading-snug sm:text-[13px]"
                  style={{ color: NAVY }}
                >
                  Secure. Reliable. Scalable.
                </p>
                <p className="text-[11px] sm:text-[12px]" style={{ color: GREY }}>
                  Your growth, our responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right hub visual */}
        <div className="order-2 z-10 flex items-center justify-center lg:justify-center">
          <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px]">
            {/* Dashed spokes + mid dots */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              aria-hidden
            >
              {ORBIT.map((person) => {
                const { x, y } = orbitPoint(person.angle);
                const mx = (50 + x) / 2;
                const my = (50 + y) / 2;
                return (
                  <g key={`spoke-${person.label}`}>
                    <line
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={ORANGE}
                      strokeWidth="0.55"
                      strokeDasharray="1.4 1.1"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                    <circle cx={mx} cy={my} r="0.9" fill={ORANGE} />
                  </g>
                );
              })}
            </svg>

            {/* Center: Next Ledgers logo only */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-[0_8px_28px_rgba(0,0,0,0.1)] sm:h-[128px] sm:w-[128px] sm:p-3.5 lg:h-[140px] lg:w-[140px]">
              <Image
                src="/images/nextledgerlogo3.png"
                alt="Next Ledgers"
                width={120}
                height={48}
                className="h-auto w-full object-contain"
                priority
              />
            </div>

            {/* Orbit portraits placed properly around the logo */}
            {ORBIT.map((person) => {
              const { x, y } = orbitPoint(person.angle);
              return (
                <div
                  key={person.label}
                  className="absolute z-10 flex w-[86px] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-[96px]"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="h-[68px] w-[68px] overflow-hidden rounded-full border-[3px] border-white bg-[#F3F3F3] shadow-[0_4px_14px_rgba(0,0,0,0.12)] sm:h-[78px] sm:w-[78px]">
                    <Image
                      src={person.src}
                      alt={person.label}
                      width={78}
                      height={78}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <span
                    className="mt-1 whitespace-nowrap rounded-[4px] bg-white px-2 py-0.5 text-[9px] font-semibold shadow-sm sm:text-[10px]"
                    style={{ color: NAVY }}
                  >
                    {person.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
