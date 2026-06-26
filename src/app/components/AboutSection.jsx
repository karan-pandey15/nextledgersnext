"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#FEF4E4] py-2 lg:py-8 px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="max-w-[620px] font-bold text-[#0F274A] text-[21px] sm:text-[27px] lg:text-[32px] leading-[1.25]">
            Your Global Accounting Partner - Personalized, Proactive, and Always Present
          </h2>
          <p className="max-w-[600px] text-[#666666] text-[13px] sm:text-[14px] leading-6 sm:leading-7 mt-3">
            Our leaders take pride in not following the &apos;onboard and disappear&apos; approach.
            Our team delivers ongoing, tailored accounting solutions, ensuring you&apos;re
            supported every step of the way with real people who truly care about your
            clients, your business and your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center w-auto">
            <Button text="Get Started Today" />
            <Button text="Explore Services" />
          </div>
        </div>

        {/* Right Column: Image component with rounded corners */}
        <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[380px] overflow-hidden rounded-[24px]">
          <Image
            src="/images/DSC09879.JPG"
            alt="Global Accounting Partner"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
