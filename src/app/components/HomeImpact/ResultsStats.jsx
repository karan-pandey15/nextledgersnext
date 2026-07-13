"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Globe2, UserCheck, BarChart3, RefreshCw, Clock3 } from "lucide-react";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
/* Optimized H.264 baseline + faststart — required for reliable Vercel/Chrome playback */
const VIDEO_SRC = "/video/IMG_1995.mp4";
const COUNT_DURATION_MS = 1600;

const STATS = [
  {
    end: 105,
    suffix: "+",
    label: "Clients Across Globally",
    icon: Users,
  },
  {
    end: 9,
    suffix: "+",
    label: "Years in Global Accounting Outsourcing",
    icon: Globe2,
  },
  {
    end: 75,
    suffix: "+",
    label: "Qualified Finance Professionals",
    icon: UserCheck,
  },
  {
    end: 70,
    suffix: "%",
    label: "of Business via Referrals",
    icon: BarChart3,
  },
  {
    end: 95,
    suffix: "%+",
    label: "Client Retention Rate",
    icon: RefreshCw,
  },
  {
    end: 36,
    suffix: "+ hrs",
    label: "Onboarding Process",
    icon: Clock3,
  },
];

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function useSectionInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function AnimatedStatValue({ end, suffix, active }) {
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!active || startedRef.current) return undefined;
    startedRef.current = true;

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / COUNT_DURATION_MS);
      setDisplay(Math.round(end * easeOutCubic(progress)));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, end]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function PhoneVideo({ active }) {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let cancelled = false;

    const forceMuted = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.volume = 0;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.playsInline = true;
    };

    forceMuted();

    const tryPlay = async () => {
      if (cancelled || !active) return;
      forceMuted();
      try {
        await video.play();
      } catch {
        // Autoplay can fail until more data is buffered
      }
    };

    const onError = () => {
      if (!cancelled) setFailed(true);
    };

    if (active) {
      video.addEventListener("canplay", tryPlay);
      video.addEventListener("loadeddata", tryPlay);
      tryPlay();
    } else if (!video.paused) {
      video.pause();
    }

    video.addEventListener("error", onError);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("error", onError);
    };
  }, [active]);

  return (
    <div className="flex w-full items-center justify-center py-2 sm:py-3">
      {/* Thick black phone bezel — same style as shared UI, +10% size */}
      <div
        className="relative shrink-0 overflow-hidden bg-black"
        style={{
          width: "clamp(200px, 24vw, 279px)",
          padding: "11px",
          borderRadius: "42px",
          boxShadow: "0 16px 40px rgba(15,39,74,0.22)",
        }}
      >
        <div
          className="relative overflow-hidden bg-[#0a0a0a]"
          style={{
            aspectRatio: "9 / 16",
            width: "100%",
            borderRadius: "32px",
          }}
        >
          {!failed ? (
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              className="block h-full w-full object-cover"
              style={{ aspectRatio: "9 / 16", borderRadius: "32px" }}
              muted
              playsInline
              loop
              preload="metadata"
              controls={false}
              disablePictureInPicture
              aria-label="Next Ledgers results video"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="flex h-full min-h-[280px] w-full items-center justify-center px-3 text-center text-[11px] text-white/70">
              Video unavailable
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ResultsStats() {
  const [sectionRef, inView] = useSectionInView(0.3);

  return (
    <section ref={sectionRef} className="relative w-full bg-white pt-0 pb-0">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-3 pb-8 pt-0 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
            {/* Left — stats */}
            <div className="flex min-w-0 flex-col">
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-7 shrink-0 bg-[#F58220] sm:w-9" aria-hidden="true" />
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase sm:text-[12px]">
                  <span style={{ color: NAVY }}>NUMBERS THAT </span>
                  <span style={{ color: ORANGE }}>MATTER</span>
                </p>
                <span className="h-px w-7 shrink-0 bg-[#F58220] sm:w-9" aria-hidden="true" />
              </div>

              <h2
                className="mt-3 text-[26px] font-bold leading-[1.15] tracking-[-0.01em] sm:mt-4 sm:text-[34px] lg:text-[40px]"
                style={{ color: NAVY }}
              >
                Results That{" "}
                <span style={{ color: ORANGE }}>Speak for Themselves</span>
              </h2>

              <div className="mt-6 flex-1 rounded-[18px] bg-white p-3 shadow-[0_8px_30px_rgba(15,39,74,0.06)] sm:mt-8 sm:rounded-[20px] sm:p-4 lg:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3">
                  {STATS.map((stat, index) => {
                    const Icon = stat.icon;
                    const col = index % 3;
                    const isLastRow = index >= 3;
                    const mobileCol = index % 2;
                    const mobileLastRow = index >= 4;

                    return (
                      <div
                        key={stat.label}
                        className="relative flex flex-col items-center justify-center px-3 py-5 text-center sm:px-4 sm:py-6 lg:py-7"
                      >
                        {col < 2 && (
                          <span
                            className="absolute top-4 right-0 bottom-4 hidden w-px bg-[#E8E8E8] sm:block"
                            aria-hidden="true"
                          />
                        )}
                        {mobileCol === 0 && (
                          <span
                            className="absolute top-4 right-0 bottom-4 w-px bg-[#E8E8E8] sm:hidden"
                            aria-hidden="true"
                          />
                        )}
                        {!isLastRow && (
                          <span
                            className="absolute right-4 bottom-0 left-4 hidden h-px bg-[#E8E8E8] sm:block"
                            aria-hidden="true"
                          />
                        )}
                        {!mobileLastRow && (
                          <span
                            className="absolute right-3 bottom-0 left-3 h-px bg-[#E8E8E8] sm:hidden"
                            aria-hidden="true"
                          />
                        )}

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE8D4] text-[#F58220] sm:h-11 sm:w-11">
                          <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.8} />
                        </div>

                        <p
                          className="mt-2.5 text-[24px] font-bold leading-none tracking-[-0.02em] sm:mt-3 sm:text-[28px] lg:text-[30px]"
                          style={{ color: ORANGE }}
                        >
                          <AnimatedStatValue end={stat.end} suffix={stat.suffix} active={inView} />
                        </p>

                        <p
                          className="mt-1.5 max-w-[140px] text-[10px] leading-[1.35] sm:max-w-none sm:text-[12px]"
                          style={{ color: NAVY }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right — phone video */}
            <div className="relative flex w-full items-center justify-center lg:justify-end lg:pr-6 xl:pr-10">
              <PhoneVideo active={inView} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
