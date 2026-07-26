import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden h-[327px] sm:h-[310px] lg:h-[288px] xl:h-[302px]">
      <video
        src="/images/finalvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-[#FF6600]/45 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">

        <h1
          className="text-[#264B86] font-bold text-[clamp(18px,5.2vw,24px)] sm:text-[38px] md:text-[46px] lg:text-[56px] leading-[1.15] max-w-[95%] sm:max-w-xl md:max-w-3xl"
          style={{ textShadow: "0px 3px 8px rgba(0,0,0,0.25)" }}
        >
          Helping UK Businesses{" "}
          <br className="hidden max-[380px]:block sm:hidden" />
          Stay Compliant & Grow with Confidence.
        </h1>
      </div>
    </div>
  );
}
