"use client";

import React from "react";
import DataSecurity from "./DataSecurity";
import SecurityStats from "./SecurityStats";
import ContactUsCTA from "./ContactUsCTA";

/**
 * HomeTrust — homepage block below HomeStories
 * Part 1: DataSecurity (animated shield)
 * Part 2: SecurityStats
 * Part 3: ContactUsCTA (3 font sizes on cards)
 */
export default function HomeTrust() {
  return (
    <section className="relative w-full bg-white py-[10px]">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
        <div className="bg-white px-3 sm:px-8 lg:px-10 py-0">
          <DataSecurity />
          <SecurityStats />
          <ContactUsCTA />
        </div>
      </div>
    </section>
  );
}
