"use client";

import React, { useState, useEffect, useRef } from "react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const BG = "#0B1C33";
const ICON_BLUE = "#1E4A6E";
const WHITE = "#FFFFFF";
const DESC = "#D4D9E0";

const STEP_FILL_MS = 550;
const LINE_TRAVEL_MS = 750;

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    description: "We understand your business, challenges and goals.",
    Icon: HeadsetIcon,
  },
  {
    num: "02",
    title: "Understand Workflow",
    description: "We analyze your processes, tools and reporting needs.",
    Icon: WorkflowIcon,
  },
  {
    num: "03",
    title: "Assign Dedicated Team",
    description: "We assign the best matched professionals for your requirements.",
    Icon: TeamIcon,
  },
  {
    num: "04",
    title: "Knowledge Transfer",
    description: "We learn your processes and align with your expectations.",
    Icon: TransferIcon,
  },
  {
    num: "05",
    title: "Daily Operations Begin",
    description: "Your team starts delivering with quality and consistency.",
    Icon: GearIcon,
  },
  {
    num: "06",
    title: "Weekly Reviews",
    description: "Regular updates, performance reviews and improvements.",
    Icon: ChartIcon,
  },
  {
    num: "07",
    title: "Scale Anytime",
    description: "Easily scale your team up or down as your business grows.",
    Icon: ScaleIcon,
  },
];

function HeadsetIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <path d="M4.5 13.5V12a7.5 7.5 0 0 1 15 0v1.5" stroke={color} strokeWidth="1.65" strokeLinecap="round" />
      <rect x="3.2" y="12.5" width="3.5" height="5" rx="1.1" stroke={color} strokeWidth="1.55" />
      <rect x="17.3" y="12.5" width="3.5" height="5" rx="1.1" stroke={color} strokeWidth="1.55" />
      <path d="M17.5 17.6v.8a2.4 2.4 0 0 1-2.4 2.4H12" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function WorkflowIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <rect x="4" y="3.5" width="11.5" height="15.5" rx="1.4" stroke={color} strokeWidth="1.55" />
      <path d="M7 8h6M7 11.5h6M7 15h3.2" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
      <circle cx="17.2" cy="16.2" r="3" stroke={color} strokeWidth="1.55" />
      <path d="m19.4 18.4 1.5 1.5" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function TeamIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <circle cx="12" cy="7" r="2.3" stroke={color} strokeWidth="1.55" />
      <circle cx="6" cy="8.2" r="1.9" stroke={color} strokeWidth="1.55" />
      <circle cx="18" cy="8.2" r="1.9" stroke={color} strokeWidth="1.55" />
      <path d="M7.6 18.2c.7-2.3 2.3-3.5 4.4-3.5s3.7 1.2 4.4 3.5" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
      <path d="M3.6 17.6c.5-1.7 1.5-2.6 2.9-2.6M20.4 17.6c-.5-1.7-1.5-2.6-2.9-2.6" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function TransferIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <rect x="3.5" y="4" width="12.5" height="9.5" rx="1.1" stroke={color} strokeWidth="1.55" />
      <path d="M6.2 7h7M6.2 10h4.2" stroke={color} strokeWidth="1.45" strokeLinecap="round" />
      <circle cx="16.2" cy="16" r="2.1" stroke={color} strokeWidth="1.55" />
      <path d="M12.4 20.2c.5-1.7 1.7-2.7 3.8-2.7s3.3.9 3.8 2.7" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <circle cx="12" cy="12" r="2.8" stroke={color} strokeWidth="1.55" />
      <path
        d="M12 3.8v2M12 18.2v2M3.8 12h2M18.2 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6"
        stroke={color}
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChartIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <path d="M4 19h16" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
      <path d="M7 16V11M11.5 16V8M16 16v-3.5" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M14.5 7.5h4.5V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m19 7.5-4.2 4.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ScaleIcon({ color = ICON_BLUE }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="33" height="33" aria-hidden="true">
      <path d="M4 18.5h16" stroke={color} strokeWidth="1.55" strokeLinecap="round" />
      <path d="M5 15.5 9.5 10l3.2 3.2L18.5 6.5" stroke={color} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6.5h3.5V10" stroke={color} strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepItem({ step, showDivider = false, compact = false, active = false }) {
  const { Icon } = step;
  const iconSize = compact ? 48 : 54;

  return (
    <div
      className={`our-process-step${showDivider ? " our-process-step--divider" : ""}${active ? " our-process-step--active" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        flex: compact ? "0 0 138px" : "1 1 0",
        minWidth: compact ? 138 : 0,
        maxWidth: compact ? 138 : "none",
        position: "relative",
        paddingLeft: compact ? 0 : 8,
        paddingRight: compact ? 0 : 8,
      }}
    >
      <div
        className="our-process-icon"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: iconSize,
          height: iconSize,
          borderRadius: "9999px",
          backgroundColor: active ? ORANGE : WHITE,
          boxShadow: active
            ? "0 4px 18px rgba(255, 106, 0, 0.45)"
            : "0 4px 14px rgba(0,0,0,0.16)",
          position: "relative",
          zIndex: 2,
          flexShrink: 0,
          transition: "background-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease",
          transform: active ? "scale(1.06)" : "scale(1)",
        }}
      >
        <Icon color={active ? WHITE : ICON_BLUE} />
      </div>

      <span
        style={{
          display: "block",
          marginTop: 10,
          color: ORANGE,
          fontSize: 13,
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "0.02em",
        }}
      >
        {step.num}
      </span>

      <h3
        style={{
          margin: "8px 0 0",
          color: WHITE,
          fontSize: compact ? 12 : 12.5,
          fontWeight: 700,
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          maxWidth: 120,
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          margin: "6px 0 0",
          color: DESC,
          fontSize: compact ? 10.5 : 11,
          fontWeight: 400,
          lineHeight: 1.4,
          maxWidth: 118,
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

export default function OurProcess() {
  const sectionRef = useRef(null);
  const timersRef = useRef([]);
  const hasPlayedRef = useRef(false);
  const [isInView, setIsInView] = useState(false);
  const [filledCount, setFilledCount] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [lineAnimating, setLineAnimating] = useState(false);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const schedule = (fn, ms) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Play once when section first enters view, then stay fully orange
    if (!isInView || hasPlayedRef.current) return undefined;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    hasPlayedRef.current = true;

    if (reduceMotion) {
      setFilledCount(STEPS.length);
      setLineProgress(1);
      return undefined;
    }

    let cancelled = false;
    const stepCount = STEPS.length;
    const segments = stepCount - 1;

    const runStep = (index) => {
      if (cancelled) return;

      setFilledCount(index + 1);

      if (index >= stepCount - 1) {
        // Finished — stay orange for the rest of the visit
        return;
      }

      schedule(() => {
        if (cancelled) return;
        setLineAnimating(true);
        setLineProgress((index + 1) / segments);

        schedule(() => {
          if (cancelled) return;
          setLineAnimating(false);
          runStep(index + 1);
        }, LINE_TRAVEL_MS);
      }, STEP_FILL_MS);
    };

    schedule(() => runStep(0), 200);

    return () => {
      cancelled = true;
      clearTimers();
      // If they scroll away mid-animation, finish fully so it stays complete
      setFilledCount(STEPS.length);
      setLineProgress(1);
      setLineAnimating(false);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="our-process-section">
      <div className="our-process-outer">
        <div className="our-process-card">
          <div className="our-process-inner">
            <div className="our-process-copy">
              <p className="our-process-label">OUR PROCESS</p>
              <h2 className="our-process-title">How we fit into your workflow</h2>
              <p className="our-process-desc">
                A simple, transparent and proven process to ensure a smooth onboarding and
                long-term success.
              </p>
            </div>

            <div className="our-process-steps-wrap">
              {/* Desktop / tablet */}
              <div className="our-process-desktop">
                <div className="our-process-line" aria-hidden="true" />
                <div
                  className={`our-process-line-progress${lineAnimating ? " is-animating" : ""}`}
                  aria-hidden="true"
                  style={{ transform: `scaleX(${lineProgress})` }}
                />
                <div className="our-process-row">
                  {STEPS.map((step, index) => (
                    <StepItem
                      key={step.num}
                      step={step}
                      showDivider={index < STEPS.length - 1}
                      active={index < filledCount}
                    />
                  ))}
                </div>
              </div>

              {/* Phone swipe */}
              <div className="our-process-mobile">
                <div className="our-process-mobile-row">
                  {STEPS.map((step, index) => (
                    <StepItem
                      key={step.num}
                      step={step}
                      compact
                      active={index < filledCount}
                    />
                  ))}
                </div>
                <p className="our-process-swipe-hint">Swipe to see all 7 steps →</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .our-process-section {
          width: 100%;
          background-color: #F5F6F8;
        }
        .our-process-outer {
          max-width: 1440px;
          margin: 0 auto;
          padding: 20px 14px;
        }
        .our-process-card {
          width: 100%;
          border-radius: 22px;
          background-color: ${BG};
          color: ${WHITE};
          overflow: hidden;
        }
        .our-process-inner {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 28px;
          padding: 32px 18px;
        }
        .our-process-copy {
          text-align: center;
          flex-shrink: 0;
        }
        .our-process-label {
          margin: 0;
          color: ${ORANGE};
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .our-process-title {
          margin: 10px 0 0;
          color: ${WHITE};
          font-size: 24px;
          font-weight: 700;
          line-height: 1.18;
          letter-spacing: -0.015em;
        }
        .our-process-desc {
          margin: 12px auto 0;
          color: ${DESC};
          font-size: 13px;
          line-height: 1.55;
          max-width: 280px;
        }
        .our-process-steps-wrap {
          flex: 1;
          min-width: 0;
          width: 100%;
        }

        .our-process-desktop {
          display: none;
          position: relative;
          width: 100%;
        }
        .our-process-line {
          position: absolute;
          top: 27px;
          left: 6%;
          right: 6%;
          border-top: 1px dashed rgba(180, 190, 205, 0.4);
          z-index: 0;
          pointer-events: none;
        }
        .our-process-line-progress {
          position: absolute;
          top: 26px;
          left: 6%;
          right: 6%;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            ${ORANGE} 0%,
            #ff8a3d 55%,
            ${ORANGE} 100%
          );
          box-shadow: 0 0 10px rgba(255, 106, 0, 0.55);
          transform-origin: left center;
          transform: scaleX(0);
          z-index: 1;
          pointer-events: none;
        }
        .our-process-line-progress.is-animating {
          transition: transform ${LINE_TRAVEL_MS}ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .our-process-row {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Vertical border between steps — only through text area under icons */
        .our-process-step--divider::after {
          content: "";
          position: absolute;
          top: 68px;
          right: 0;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(180, 190, 205, 0.28) 15%,
            rgba(180, 190, 205, 0.28) 85%,
            transparent 100%
          );
          pointer-events: none;
        }

        .our-process-mobile {
          display: block;
          width: 100%;
        }
        .our-process-mobile-row {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          gap: 10px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 6px;
          scrollbar-width: none;
        }
        .our-process-mobile-row::-webkit-scrollbar {
          display: none;
        }
        .our-process-swipe-hint {
          margin: 10px 0 0;
          text-align: center;
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
        }

        @media (min-width: 640px) {
          .our-process-outer {
            padding: 28px 20px;
          }
          .our-process-inner {
            padding: 36px 24px;
          }
          .our-process-title {
            font-size: 26px;
          }
          .our-process-desktop {
            display: block;
          }
          .our-process-mobile {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .our-process-outer {
            padding: 36px 28px;
          }
          .our-process-inner {
            flex-direction: row;
            align-items: flex-start;
            gap: 16px;
            padding: 40px 32px 42px;
          }
          .our-process-copy {
            text-align: left;
            width: 200px;
            padding-top: 4px;
          }
          .our-process-desc {
            margin-left: 0;
            margin-right: 0;
            font-size: 12.5px;
          }
          .our-process-title {
            font-size: 27px;
          }
        }

        @media (min-width: 1280px) {
          .our-process-copy {
            width: 220px;
          }
          .our-process-inner {
            gap: 20px;
            padding: 42px 36px 44px;
          }
          .our-process-title {
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .our-process-line-progress,
          .our-process-icon {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
