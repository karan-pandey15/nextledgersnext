"use client";

import { useEffect, useRef, useState } from "react";
import { HomeLogoImg } from "@/app/lib/homePageLogos";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

/** Delay between each card reveal (ms). */
const STEP_MS = 500;

const STEPS = [
  {
    num: "1",
    title: "Share Your Requirements",
    desc: "Tell us the roles, skills, and experience you need.",
    logo: 23,
  },
  {
    num: "2",
    title: "We Shortlist Candidates",
    desc: "We find and shortlist the best matching professionals.",
    logo: 13,
  },
  {
    num: "3",
    title: "Interview & Select",
    desc: "You interview and choose your ideal team members.",
    logo: 17,
  },
  {
    num: "4",
    title: "Onboard in 48 Hours",
    desc: "We handle onboarding, access, and documentation.",
    logo: 8,
  },
  {
    num: "5",
    title: "Start Working & Grow Together",
    desc: "Your dedicated team starts working exclusively for you.",
    logo: 4,
  },
];

function StepCard({ num, title, desc, logo, visible }) {
  return (
    <div
      className="relative w-full pt-3 sm:pt-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
        transition:
          "opacity 560ms cubic-bezier(0.22, 1, 0.36, 1), transform 560ms cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="relative flex h-full flex-col items-center rounded-[12px] border border-[#E5E7EB] bg-white px-3 pb-3 pt-5 text-center shadow-[0_4px_16px_rgba(15,39,74,0.07)] sm:min-h-[224px] sm:rounded-[14px] sm:px-3 sm:pb-5 sm:pt-8">
        <span
          className="absolute left-1/2 top-0 z-[3] flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[12px] font-bold text-white shadow-sm sm:h-8 sm:w-8 sm:text-[13px]"
          style={{ background: ORANGE }}
        >
          {num}
        </span>

        <div className="mb-2 flex h-12 w-12 items-center justify-center sm:mb-3 sm:h-[66px] sm:w-[66px]">
          <HomeLogoImg n={logo} />
        </div>

        <h3
          className="text-[13px] font-bold leading-snug sm:text-[14px]"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
        <p className="mt-1 text-[11px] leading-snug sm:mt-2 sm:text-[12px] sm:leading-relaxed" style={{ color: GREY }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/** Dashed connector arrows — dark grey like the reference image */
function StepArrow({ visible, desktop }) {
  const stroke = "#6B7280";
  return (
    <div
      className={`flex shrink-0 items-center justify-center ${
        desktop ? "hidden w-6 self-center lg:flex xl:w-8" : "flex h-5 w-full lg:hidden sm:h-8"
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1)"
          : desktop
            ? "scaleX(0.35) translateX(-10px)"
            : "scaleY(0.35) translateY(-10px)",
        transition:
          "opacity 400ms ease-out, transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden
    >
      {desktop ? (
        <svg width="30" height="14" viewBox="0 0 30 14" className="overflow-visible">
          <path
            d="M1 7h21"
            stroke={stroke}
            strokeWidth="1.8"
            strokeDasharray="2.5 3.2"
            strokeLinecap="round"
          />
          <path
            d="M19 2.2L27.5 7 19 11.8"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="12" height="22" viewBox="0 0 14 30" className="overflow-visible sm:h-[30px] sm:w-[14px]">
          <path
            d="M7 1v21"
            stroke={stroke}
            strokeWidth="1.8"
            strokeDasharray="2.5 3.2"
            strokeLinecap="round"
          />
          <path
            d="M2.2 19L7 27.5 11.8 19"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

export default function ByotHowItWorks() {
  const sectionRef = useRef(null);
  const hasStartedRef = useRef(false);
  const [started, setStarted] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const [visibleArrows, setVisibleArrows] = useState(0);

  // Animate ONLY after the user scrolls this section into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;
      if (reducedMotion) {
        setVisibleCards(STEPS.length);
        setVisibleArrows(STEPS.length - 1);
        return;
      }
      setStarted(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    setVisibleCards(0);
    setVisibleArrows(0);

    const timeouts = [];
    const startAt = 200;

    STEPS.forEach((_, i) => {
      timeouts.push(
        window.setTimeout(() => setVisibleCards(i + 1), startAt + i * STEP_MS)
      );
      if (i < STEPS.length - 1) {
        timeouts.push(
          window.setTimeout(
            () => setVisibleArrows(i + 1),
            startAt + i * STEP_MS + Math.round(STEP_MS * 0.52)
          )
        );
      }
    });

    return () => timeouts.forEach((id) => window.clearTimeout(id));
  }, [started]);

  return (
    <section ref={sectionRef} className="w-full bg-white pt-[10px] pb-[5px]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[20px] bg-[#F5F5F5] px-3 py-5 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
          <h2
            className="text-center text-[22px] font-bold tracking-[-0.01em] sm:text-[30px] lg:text-[32px]"
            style={{ color: NAVY }}
          >
            How{" "}
            <span className="relative inline-block" style={{ color: ORANGE }}>
              BYOT
              <span
                className="absolute left-[10%] -bottom-1 h-[3px] w-[80%] rounded-full"
                style={{ background: ORANGE }}
                aria-hidden
              />
            </span>{" "}
            Works
          </h2>

          {/* Mobile / tablet */}
          <div className="mt-5 flex flex-col items-stretch gap-0 sm:mx-auto sm:mt-9 sm:max-w-md lg:hidden">
            {STEPS.map(({ num, title, desc, logo }, index) => (
              <div key={title} className="flex flex-col items-stretch">
                <StepCard
                  num={num}
                  title={title}
                  desc={desc}
                  logo={logo}
                  visible={visibleCards > index}
                />
                {index < STEPS.length - 1 ? (
                  <StepArrow visible={visibleArrows > index} desktop={false} />
                ) : null}
              </div>
            ))}
          </div>

          {/* Desktop */}
          <div className="mt-10 hidden lg:flex lg:items-stretch lg:justify-between lg:gap-1.5 xl:gap-2">
            {STEPS.map(({ num, title, desc, logo }, index) => (
              <div key={title} className="flex min-w-0 flex-1 items-stretch">
                <div className="min-w-0 flex-1">
                  <StepCard
                    num={num}
                    title={title}
                    desc={desc}
                    logo={logo}
                    visible={visibleCards > index}
                  />
                </div>
                {index < STEPS.length - 1 ? (
                  <StepArrow visible={visibleArrows > index} desktop />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
