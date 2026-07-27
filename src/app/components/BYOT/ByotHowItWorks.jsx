"use client";

import { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  FileSearch,
  MonitorPlay,
  ClipboardCheck,
  UsersRound,
} from "lucide-react";
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
    Icon: ClipboardList,
  },
  {
    num: "2",
    title: "We Shortlist Candidates",
    desc: "We find and shortlist the best matching professionals.",
    Icon: FileSearch,
  },
  {
    num: "3",
    title: "Interview & Select",
    desc: "You interview and choose your ideal team members.",
    Icon: MonitorPlay,
  },
  {
    num: "4",
    title: "Onboard in 48 Hours",
    desc: "We handle onboarding, access, and documentation.",
    Icon: ClipboardCheck,
  },
  {
    num: "5",
    title: "Start Working & Grow Together",
    desc: "Your dedicated team starts working exclusively for you.",
    Icon: UsersRound,
  },
];

function StepCard({ num, title, desc, Icon, visible }) {
  return (
    <div
      className="relative w-full pt-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
        transition:
          "opacity 560ms cubic-bezier(0.22, 1, 0.36, 1), transform 560ms cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="relative flex h-full min-h-[214px] flex-col items-center rounded-[14px] border border-[#E5E7EB] bg-white px-3 pb-5 pt-8 text-center shadow-[0_4px_16px_rgba(15,39,74,0.07)] sm:min-h-[224px]">
        <span
          className="absolute left-1/2 top-0 z-[3] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[13px] font-bold text-white shadow-sm"
          style={{ background: ORANGE }}
        >
          {num}
        </span>

        <div
          className="mb-3 flex h-[66px] w-[66px] items-center justify-center rounded-full"
          style={{ background: "#FFF4EA" }}
        >
          <Icon
            className="h-[35.2px] w-[35.2px] shrink-0"
            style={{ color: ORANGE }}
            strokeWidth={1.75}
          />
        </div>

        <h3
          className="text-[13px] font-bold leading-snug sm:text-[14px]"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[12px] leading-relaxed" style={{ color: GREY }}>
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
        desktop ? "hidden w-6 self-center lg:flex xl:w-8" : "flex h-8 w-full lg:hidden"
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
        <svg width="14" height="30" viewBox="0 0 14 30" className="overflow-visible">
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
        <div className="rounded-[20px] bg-[#F5F5F5] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
          <h2
            className="text-center text-[24px] font-bold tracking-[-0.01em] sm:text-[30px] lg:text-[32px]"
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
          <div className="mt-9 flex flex-col items-stretch gap-0.5 sm:mx-auto sm:max-w-md lg:hidden">
            {STEPS.map(({ num, title, desc, Icon }, index) => (
              <div key={title} className="flex flex-col items-stretch">
                <StepCard
                  num={num}
                  title={title}
                  desc={desc}
                  Icon={Icon}
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
            {STEPS.map(({ num, title, desc, Icon }, index) => (
              <div key={title} className="flex min-w-0 flex-1 items-stretch">
                <div className="min-w-0 flex-1">
                  <StepCard
                    num={num}
                    title={title}
                    desc={desc}
                    Icon={Icon}
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
