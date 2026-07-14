import React from "react";
import {
  PadlockIcon,
  ShieldCheckIcon,
  TeamIcon,
  TimerIcon,
} from "./TrustBarIcons";

const TRUST_ITEMS = [
  { icon: ShieldCheckIcon, lines: ["Global", "Standards"] },
  { icon: PadlockIcon, lines: ["Secure &", "Confidential"] },
  { icon: TeamIcon, lines: ["Trusted by", "Businesses"] },
  { icon: TimerIcon, lines: ["On-Time", "Delivery"] },
];

export default function HomeHeroSection() {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] overflow-hidden bg-[#111111]">
      <video
        src="/images/finalvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-full min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] flex flex-col justify-between py-10 sm:py-12 lg:py-14">
        <div className="max-w-[760px]">
          <p className="text-white/90 text-[13px] sm:text-[14px] font-medium mb-4 sm:mb-5">
            Proudly supporting businesses across{" "}
            <span className="text-[#FF6A00] font-semibold">globally</span> since 2018
          </p>

          <h1 className="text-white font-bold text-[30px] sm:text-[38px] md:text-[46px] lg:text-[52px] leading-[1.08] tracking-tight">
            Your Modern Accounting,
            <br />
            Tax & Virtual Staffing
            <br />
            <span className="text-[#FF6A00]">Solutions.</span>
          </h1>

          <p className="mt-4 sm:mt-5 max-w-[620px] text-white/85 text-[14px] sm:text-[15px] leading-7">
            We help businesses streamline their financial processes, stay compliant, and focus on
            what matters most – growth.
          </p>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {TRUST_ITEMS.map(({ icon: Icon, lines }, index) => (
              <React.Fragment key={lines.join("-")}>
                <div className="flex items-center gap-2 text-[14px] sm:text-[15px]">
                  <div
                    className="shrink-0 aspect-square"
                    style={{
                      width: "calc(2 * 1.12 * 1.9 * 1em)",
                      height: "calc(2 * 1.12 * 1.9 * 1em)",
                    }}
                  >
                    <Icon />
                  </div>
                  <div className="flex flex-col leading-[1.15]">
                    <span className="text-white font-semibold">{lines[0]}</span>
                    <span className="text-white font-semibold">{lines[1]}</span>
                  </div>
                </div>

                {index < TRUST_ITEMS.length - 1 && (
                  <div
                    className="hidden sm:block w-px bg-white/35 mx-1.5 self-center h-[calc(2*1.12*1.9*14px)] sm:h-[calc(2*1.12*1.9*15px)]"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
