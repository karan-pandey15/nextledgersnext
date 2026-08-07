"use client";

import React from "react";

const SECURITY_VIDEO_SRC = "/video/shield.mp4";

/**
 * Security shield video with soft edge fade so the frame blends into the white HomeTrust section.
 * Rendered 50% larger in both width and height, centered in its column.
 */
export default function SecurityShieldMotion() {
  return (
    <div className="relative mx-auto flex w-full items-start justify-center overflow-hidden">
      <div className="relative aspect-square w-full max-w-[420px] shrink-0 origin-center sm:max-w-[480px] lg:max-w-[520px]">
        <div
          className="pointer-events-none absolute inset-[12%] rounded-full bg-[#FFE8D4]/70 blur-3xl"
          aria-hidden="true"
        />

        <div className="security-shield-video relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <video
            className="mx-auto block h-full w-full object-contain object-center"
            src={SECURITY_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="3D cybersecurity shield with padlock rotating above a circular platform"
          />

          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background: `
                radial-gradient(ellipse 72% 72% at 50% 48%, transparent 42%, rgba(255,255,255,0.55) 68%, #ffffff 92%),
                linear-gradient(to right, #ffffff 0%, transparent 12%, transparent 88%, #ffffff 100%),
                linear-gradient(to bottom, #ffffff 0%, transparent 14%, transparent 86%, #ffffff 100%)
              `,
            }}
          />
        </div>
      </div>
    </div>
  );
}
