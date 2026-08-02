"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaUserTie,
  FaUserFriends,
  FaClipboardList,
  FaCalculator,
  FaMoneyBillAlt,
  FaFileAlt,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0A1F44";
const GREY = "#6B7280";

/** Bookkeeper — clipboard + calculator (matches reference) */
function BookkeeperIcon({ className, style }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={style}
      aria-hidden
    >
      <FaClipboardList className="h-[88%] w-[88%]" />
      <FaCalculator
        className="absolute -bottom-[1px] -right-[2px] h-[48%] w-[48%] rounded-[2px] bg-white"
        style={{ color: ORANGE }}
      />
    </span>
  );
}

/** Tax Professional — document with TAX label (matches reference) */
function TaxIcon({ className, style }) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={style}
      aria-hidden
    >
      <FaFileAlt className="h-full w-full" />
      <span
        className="absolute left-1/2 top-[46%] -translate-x-1/2 text-[6.5px] font-extrabold leading-none tracking-wide"
        style={{ color: ORANGE }}
      >
        TAX
      </span>
    </span>
  );
}

/** Role cards — icons matched to second reference image */
const ROLES = [
  { label: "Accountant", Icon: FaUser },
  { label: "Bookkeeper", Icon: BookkeeperIcon },
  { label: "Payroll Specialist", Icon: FaMoneyBillAlt },
  { label: "Tax Professional", Icon: TaxIcon },
  { label: "Management Accountant", Icon: FaChartLine },
  { label: "Virtual CFO", Icon: FaUserTie },
  { label: "Admin & Back Office Support", Icon: FaHeadset },
];

/**
 * Orbit around Next Ledgers — Senior Professionals from /team
 * (designation + image only, top → clockwise)
 */
const ORBIT = [
  {
    label: "Chief Onboarding Specialist",
    src: "/images/TeamImage/Dharmesh_Kumar-removebg-preview.png",
    angle: -90,
  },
  {
    label: "Virtual Assistance Specialist",
    src: "/images/TeamImage/Kirti_Kapoor-removebg-preview.png",
    angle: -30,
  },
  {
    label: "AP/AR Specialist",
    src: "/images/TeamImage/Nikhil_Kushwaha-removebg-preview.png",
    angle: 30,
  },
  {
    label: "Tax Specialist",
    src: "/images/TeamImage/Md._Almasud-removebg-preview.png",
    angle: 90,
  },
  {
    label: "Payroll Specialist",
    src: "",
    initial: "N",
    angle: 150,
  },
  {
    label: "FP&A Expert",
    src: "",
    initial: "A",
    angle: 210,
  },
];

/** Photo ring — center of each portrait (% of orbit box); leave room for bottom labels */
const ORBIT_RADIUS = 36;
/** Edge of Next Ledgers logo circle (must match visual logo size) */
const LOGO_RADIUS = 15;
/** Half-size of portrait circle in the same % space */
const PHOTO_RADIUS = 10.5;
/** Line starts on logo rim, ends on photo rim */
const LINE_START = LOGO_RADIUS;
const LINE_END = ORBIT_RADIUS - PHOTO_RADIUS;

function orbitPoint(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}

export default function ByotHero() {
  const rolesRef = useRef(null);
  const orbitRef = useRef(null);
  const [rolesVisible, setRolesVisible] = useState(0);
  const [orbitReady, setOrbitReady] = useState(false);
  const [orbitPeople, setOrbitPeople] = useState(0);
  const rolesStarted = useRef(false);
  const orbitStarted = useRef(false);

  useEffect(() => {
    const el = rolesRef.current;
    if (!el) return;

    const timeouts = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || rolesStarted.current) return;
        rolesStarted.current = true;
        observer.disconnect();
        ROLES.forEach((_, i) => {
          timeouts.push(
            window.setTimeout(() => setRolesVisible(i + 1), 100 + i * 130)
          );
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const timeouts = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || orbitStarted.current) return;
        orbitStarted.current = true;
        observer.disconnect();
        setOrbitReady(true);
        ORBIT.forEach((_, i) => {
          timeouts.push(
            window.setTimeout(() => setOrbitPeople(i + 1), 380 + i * 160)
          );
        });
      },
      { threshold: 0.28 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#F2F2F2]"
      style={{ minHeight: "calc(100svh - 72px)" }}
    >
      {/* Right half: wavy cut + world map dots */}
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
              <path d="M820,0 C760,140 880,260 770,420 C660,580 840,720 800,900 L1440,900 L1440,0 Z" />
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
              opacity="0.45"
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

          <path
            d="M820,0 C760,140 880,260 770,420 C660,580 840,720 800,900"
            fill="none"
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1440px] grid-cols-1 items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8 lg:py-5 xl:px-10">
        {/* ── Left — kept clear of the wavy divider ── */}
        <div className="order-1 z-10 w-full min-w-0 max-w-full text-center lg:max-w-none lg:pr-8 lg:text-left xl:pr-12">
          <div className="inline-flex overflow-hidden rounded-full shadow-sm">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white sm:text-[11px]"
              style={{ background: ORANGE }}
            >
              <FaUserFriends className="h-3.5 w-3.5" />
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

          <div ref={rolesRef} className="mt-6 w-full min-w-0">
            <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <FaUserFriends className="h-[17px] w-[17px]" style={{ color: ORANGE }} />
              <p
                className="text-[11px] font-bold uppercase tracking-[0.14em] sm:text-[12px]"
                style={{ color: NAVY }}
              >
                Dedicated Roles You Can Build
              </p>
            </div>

            {/* Equal card width + equal gap for all 7 roles */}
            <div className="grid w-full min-w-0 grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
              {ROLES.map(({ label, Icon }, index) => {
                const visible = rolesVisible > index;
                return (
                  <div
                    key={label}
                    className="box-border flex h-[112px] w-full min-w-0 flex-col items-center justify-center rounded-[10px] border border-[#E8E8E8] bg-white px-1 py-2 text-center shadow-[0_2px_10px_rgba(15,39,74,0.07)] sm:h-[118px]"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0) scale(1)"
                        : "translateY(12px) scale(0.94)",
                      transition:
                        "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Icon
                      className="h-[28px] w-[28px] shrink-0"
                      style={{ color: ORANGE }}
                    />
                    <span
                      className="mt-2 flex h-[36px] w-full items-start justify-center px-0.5 text-center text-[9px] font-bold leading-[1.2] sm:text-[10px]"
                      style={{ color: NAVY }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Desktop: flex-1 + fixed gap = identical widths */}
            <div className="hidden w-full min-w-0 lg:flex lg:gap-2">
              {ROLES.map(({ label, Icon }, index) => {
                const visible = rolesVisible > index;
                return (
                  <div
                    key={label}
                    className="box-border flex h-[120px] min-w-0 flex-1 basis-0 flex-col items-center justify-center rounded-[10px] border border-[#E8E8E8] bg-white px-1 py-2 text-center shadow-[0_2px_10px_rgba(15,39,74,0.07)]"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0) scale(1)"
                        : "translateY(12px) scale(0.94)",
                      transition:
                        "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Icon
                      className="h-[28px] w-[28px] shrink-0"
                      style={{ color: ORANGE }}
                    />
                    <span
                      className="mt-2 flex h-[36px] w-full items-start justify-center px-0.5 text-center text-[10px] font-bold leading-[1.2]"
                      style={{ color: NAVY }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA below role cards */}
          <div className="mt-6 flex flex-col items-center gap-7 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#byot-connect"
              className="inline-flex items-center gap-2 rounded-[8px] px-5 py-3 text-[12px] font-bold uppercase tracking-wide text-white shadow-md shadow-orange-500/25 transition hover:brightness-95 sm:text-[13px]"
              style={{ background: ORANGE }}
            >
              <FaUserFriends className="h-4 w-4" />
              Build Your Team Today
            </Link>
            <div className="flex items-start gap-2 text-left">
              <FaShieldAlt
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: NAVY }}
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

        {/* ── Right hub — shifted right to clear the wavy divider ── */}
        <div
          ref={orbitRef}
          className="order-2 z-10 flex min-w-0 w-full items-center justify-center overflow-visible lg:justify-end lg:pl-16 lg:pr-1 xl:pl-20 xl:pr-2"
        >
          <div className="w-full max-w-[460px] pb-9 sm:max-w-[500px] sm:pb-10 lg:max-w-[520px] xl:max-w-[560px]">
          <div className="relative aspect-square w-full">
            {/* Spokes: dashed orange from Next Ledgers logo → each portrait */}
            <svg
              className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              aria-hidden
            >
              {ORBIT.map((person, i) => {
                const start = orbitPoint(person.angle, LINE_START);
                const end = orbitPoint(person.angle, LINE_END);
                const showLine = orbitReady && orbitPeople > i;
                return (
                  <g
                    key={`spoke-${person.label}`}
                    style={{
                      opacity: showLine ? 1 : 0,
                      transition: "opacity 380ms ease-out",
                    }}
                  >
                    {/* Line from logo edge straight to photo edge */}
                    <line
                      x1={start.x}
                      y1={start.y}
                      x2={end.x}
                      y2={end.y}
                      stroke={ORANGE}
                      strokeWidth="0.75"
                      strokeDasharray="2 1.6"
                      strokeLinecap="round"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Center Next Ledgers logo — flex-centered so scale anim never shifts it */}
            <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
              <div
                className="pointer-events-auto flex h-[161px] w-[161px] shrink-0 items-center justify-center rounded-full bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] sm:h-[182px] sm:w-[182px] sm:p-[21px] lg:h-[203px] lg:w-[203px]"
                style={{
                  opacity: orbitReady ? 1 : 0,
                  transform: orbitReady ? "scale(1)" : "scale(0.86)",
                  transition:
                    "opacity 450ms ease-out, transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <Image
                  src="/images/nextledgerlogo3.png"
                  alt="Next Ledgers — Accounting & Advisory"
                  width={182}
                  height={73}
                  className="mx-auto h-auto w-[88%] object-contain"
                  priority
                />
              </div>
            </div>

            {/* Profile circles + labels — designation always below the photo */}
            {ORBIT.map((person, i) => {
              const { x, y } = orbitPoint(person.angle, ORBIT_RADIUS);
              const show = orbitPeople > i;
              return (
                <div
                  key={person.label}
                  className="absolute z-10"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: show ? 1 : 0,
                    transform: show
                      ? "translate(-50%, -50%) scale(1)"
                      : "translate(-50%, -50%) scale(0.82)",
                    transition:
                      "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div className="relative">
                    <div className="flex h-[119px] w-[119px] items-center justify-center overflow-hidden rounded-full border-[3.5px] border-white bg-[#F3F3F3] shadow-[0_4px_16px_rgba(0,0,0,0.12)] sm:h-[137px] sm:w-[137px]">
                      {person.src ? (
                        <Image
                          src={person.src}
                          alt={person.label}
                          width={137}
                          height={137}
                          className="h-full w-full object-cover object-top"
                        />
                      ) : (
                        <span
                          className="text-[28px] font-bold sm:text-[32px]"
                          style={{ color: ORANGE }}
                          aria-hidden="true"
                        >
                          {person.initial || person.label?.[0] || "?"}
                        </span>
                      )}
                    </div>
                    <span
                      className="absolute left-1/2 top-[calc(100%+8px)] z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[10px] font-semibold shadow-[0_1px_6px_rgba(0,0,0,0.08)] sm:text-[11px]"
                      style={{ color: NAVY }}
                    >
                      {person.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
