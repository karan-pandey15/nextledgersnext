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
    <section className="relative w-full min-h-[336px] sm:min-h-[368px] lg:min-h-[400px] overflow-hidden bg-[#111111]">
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

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-full min-h-[336px] sm:min-h-[368px] lg:min-h-[400px] flex flex-col justify-center py-8 sm:py-10 lg:py-11">
        <div className="max-w-[760px]">
          <p className="text-white/90 text-[13px] sm:text-[14px] font-medium mb-3 sm:mb-4">
            Proudly supporting businesses across{" "}
            <span className="text-[#FF6A00] font-semibold">globally</span> since 2018
          </p>

          <h1 className="text-white font-bold text-[clamp(14px,5.5vw,18px)] leading-[1.22] tracking-tight sm:text-[31px] sm:leading-[1.12] md:text-[39px] lg:text-[47px]">
            <span className="block whitespace-nowrap">
              Your Modern Accounting,{" "}
              <span className="text-[#FF6A00]">Tax</span>
            </span>
            <span className="block whitespace-nowrap">
              and Virtual{" "}
              <span className="text-[#FF6A00]">Staffing Solutions</span>
            </span>
          </h1>

          <p className="mt-2.5 text-[15px] font-semibold leading-snug text-white sm:mt-4 sm:text-[18px] md:text-[20px] lg:text-[22px]">
            Powered by AI, Delivered by{" "}
            <span className="text-[#FF6A00]">Experts.</span>
          </p>

          <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-white/85 sm:mt-5 sm:text-[15px] sm:leading-7">
            Scale your business with AI-powered workflows, expert professionals, and dedicated
            virtual staffing tailored to your business.
          </p>
        </div>

        <div className="mt-[3px]">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {TRUST_ITEMS.map(({ icon: Icon, lines }, index) => (
              <React.Fragment key={lines.join("-")}>
                <div className="flex items-center gap-2 text-[14px] sm:text-[15px]">
                  <div
                    className="shrink-0 aspect-square"
                    style={{
                      width: "calc(2 * 1.12 * 1.9 * 1em - 2px)",
                      height: "calc(2 * 1.12 * 1.9 * 1em - 2px)",
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
                    className="hidden sm:block w-px bg-white/35 mx-1.5 self-center h-[calc(2*1.12*1.9*14px-2px)] sm:h-[calc(2*1.12*1.9*15px-2px)]"
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
