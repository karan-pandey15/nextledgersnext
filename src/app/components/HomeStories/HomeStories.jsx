"use client";

import React from "react";
import BusinessTips from "./BusinessTips";

/**
 * HomeStories — Business & tax tips block
 * Same width pattern as HomeImpact / GlobalPartner
 */
export default function HomeStories() {
  return (
    <section className="relative w-full bg-white pt-0 pb-[10px]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-3 sm:px-8 lg:px-10 pt-0 pb-[10px]">
          <BusinessTips />
        </div>
      </div>
    </section>
  );
}
