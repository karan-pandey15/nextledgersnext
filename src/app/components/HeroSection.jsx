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
        <p className="text-white font-semibold text-[12px] sm:text-sm tracking-wide mb-3 uppercase">
          Proudly supporting businesses across US & Canada since 2018
        </p>
        <h1
          className="text-[#264B86] font-bold text-[30px] sm:text-[38px] md:text-[46px] lg:text-[56px] leading-[1.1] max-w-[320px] sm:max-w-xl md:max-w-3xl"
          style={{ textShadow: "0px 3px 8px rgba(0,0,0,0.25)" }}
        >
          Your Modern <br className="block sm:hidden" />
          Accounting, Tax & <br className="block sm:hidden" />
          Virtual Staffing Solutions.
        </h1>
      </div>
    </div>
  );
}
