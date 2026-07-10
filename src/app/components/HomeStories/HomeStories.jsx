"use client";

import React from "react";
import BusinessTips from "./BusinessTips";

/**
 * HomeStories — Business & tax tips block
 * Same width pattern as HomeImpact / GlobalPartner
 */
export default function HomeStories() {
  return (
    <section className="relative w-full bg-white pt-0 pb-9 sm:pb-10 lg:pb-11">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-5 sm:px-8 lg:px-10 pt-0 pb-10 sm:pb-12 lg:pb-14">
          <BusinessTips />
        </div>
      </div>
    </section>
  );
}
