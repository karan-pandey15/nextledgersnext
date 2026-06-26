"use client";

import React from "react";

export default function VideoComponent({
  title = "Your Mordern Accounting, Tax & Virtual Staffing Solutions.",
  subTitle = "Proudly supporting businesses across US & Canada since 2018",
  videoSrc = "/images/finalvideo.mp4",
  className = "",
}) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {/* Top Border Bar in brand orange */}
      <div className="h-1 sm:h-1.5 bg-[#F58220] w-full" />

      {/* Video Container - Full-bleed on all screen sizes, heights responsive */}
      <div className="relative w-full overflow-hidden h-[50vh] md:h-[40vh] lg:h-[30vh]">
        {/* Video Element - object-cover for full-bleed layout */}
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Warm Orange overlay matching screenshot */}
        <div className="absolute inset-0 bg-[#F58220]/20 flex flex-col items-center justify-center text-center px-6 sm:px-12">
          {/* Subtitle */}
          <p 
            className="text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4 max-w-xl"
            style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.4)" }}
          >
            {subTitle}
          </p>

          {/* Main Title - Deep Navy Blue with drop shadow */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black leading-tight max-w-4xl text-[#1D3E6D] font-sans"
            style={{
              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6), 2px 4px 10px rgba(0, 0, 0, 0.3)"
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
