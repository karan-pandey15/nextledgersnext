"use client";

import React, { useEffect, useRef, useState } from "react";
import { Users, Globe2, UserCheck, BarChart3, RefreshCw, Clock3 } from "lucide-react";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
/* Optimized H.264 baseline + faststart — required for reliable Vercel/Chrome playback */
const VIDEO_SRC = "/video/IMG_1995.mp4";

const STATS = [
  {
    value: "105+",
    label: "Clients Across Globally",
    icon: Users,
  },
  {
    value: "9+",
    label: "Years in Global Accounting Outsourcing",
    icon: Globe2,
  },
  {
    value: "75+",
    label: "Qualified Finance Professionals",
    icon: UserCheck,
  },
  {
    value: "70%",
    label: "of Business via Referrals",
    icon: BarChart3,
  },
  {
    value: "95%+",
    label: "Client Retention Rate",
    icon: RefreshCw,
  },
  {
    value: "36+ hrs",
    label: "Onboarding Process",
    icon: Clock3,
  },
];

function PhoneVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    // Autoplay policies: must be muted + playsInline before play()
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.playsInline = true;

    let cancelled = false;

    const tryPlay = async () => {
      if (cancelled || !video) return;
      try {
        video.muted = true;
        video.volume = 0;
        await video.play();
      } catch {
        // Retry after buffer progresses (common on slower CDNs)
        window.setTimeout(() => {
          if (cancelled) return;
          video.muted = true;
          video.play().catch(() => {});
        }, 600);
      }
    };

    const onCanPlay = () => {
      const rect = section.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.9 &&
        rect.bottom > window.innerHeight * 0.1;
      if (inView) tryPlay();
    };

    const onError = () => setFailed(true);

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("error", onError);

    // Kick off network fetch early
    try {
      video.load();
    } catch {
      // ignore
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          tryPlay();
        } else if (!video.paused) {
          video.pause();
        }
      },
      { threshold: 0.2, rootMargin: "80px 0px 80px 0px" }
    );

    observer.observe(section);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("error", onError);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex h-full w-full items-center justify-center py-2 sm:py-4"
    >
      <div className="relative w-full max-w-[198px] sm:max-w-[231px] md:max-w-[248px] lg:max-w-[264px]">
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] bg-black p-[8px] sm:p-[10px]"
          style={{
            boxShadow:
              "0 24px 60px rgba(15,39,74,0.28), inset 0 0 0 1px rgba(255,255,255,0.12)",
          }}
        >
          <span
            className="absolute -left-[2px] top-[18%] h-6 w-[2.5px] rounded-l-sm bg-[#2A2A2A] sm:h-8"
            aria-hidden="true"
          />
          <span
            className="absolute -left-[2px] top-[28%] h-9 w-[2.5px] rounded-l-sm bg-[#2A2A2A] sm:h-11"
            aria-hidden="true"
          />
          <span
            className="absolute -left-[2px] top-[42%] h-9 w-[2.5px] rounded-l-sm bg-[#2A2A2A] sm:h-11"
            aria-hidden="true"
          />
          <span
            className="absolute -right-[2px] top-[30%] h-12 w-[2.5px] rounded-r-sm bg-[#2A2A2A] sm:h-16"
            aria-hidden="true"
          />

          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[22px] sm:rounded-[26px] bg-[#111]">
            <div
              className="absolute left-1/2 top-2 z-20 h-[18px] w-[64px] -translate-x-1/2 rounded-full bg-black sm:top-2.5 sm:h-[20px] sm:w-[72px]"
              aria-hidden="true"
            >
              <span className="absolute right-2.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] sm:h-2 sm:w-2" />
            </div>

            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
              controls={false}
              disablePictureInPicture
              aria-label="Next Ledgers results video"
            >
              {/* Absolute URL path works on Vercel CDN; type helps MIME sniffing */}
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>

            {failed ? (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#111] px-3 text-center text-[11px] text-white/70">
                Video unavailable
              </div>
            ) : null}

            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-black/35 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsStats() {
  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-5 pb-8 pt-0 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-10">
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
                          {stat.value}
                        </p>

                        <p
                          className="mt-1.5 max-w-[130px] text-[11px] leading-[1.35] sm:text-[12px]"
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

            <div className="relative flex w-full min-h-[352px] items-center justify-center sm:min-h-[396px] lg:min-h-full">
              <PhoneVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
