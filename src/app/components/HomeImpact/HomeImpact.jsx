"use client";

import React from "react";
import TransformCTA from "./TransformCTA";
import IndustryExpertise from "./IndustryExpertise";
import ResultsStats from "./ResultsStats";

/**
 * HomeImpact — homepage block below WhyChooseUs
 * Part 1: TransformCTA
 * Part 2: IndustryExpertise
 * Part 3: ResultsStats
 */
export default function HomeImpact() {
  return (
    <>
      <TransformCTA />
      <IndustryExpertise />
      <ResultsStats />
    </>
  );
}
