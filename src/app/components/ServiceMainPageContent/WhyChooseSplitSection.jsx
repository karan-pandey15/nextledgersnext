"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";

/**
 * Why Choose layout — left content list, right image.
 * Image is capped in size and vertically centered on the right (does not stretch with long lists).
 */
export default function WhyChooseSplitSection({
  eyebrow = "Partner Advantages",
  showEyebrow = true,
  titleBefore = "Why Choose ",
  titleAccent = "NextLedgers",
  titleMiddle = "",
  titleAccent2 = "",
  titleAfter = "?",
  subtitle = "We're committed to providing exceptional accounting & tax services with a personal touch.",
  items = [],
  imageSrc = "/images/DSC09669.JPG",
  imageAlt = "NextLedgers professional working at a workstation",
  className = "",
}) {
  if (!items.length) return null;

  return (
    <section
      className={`relative w-full overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8 ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Heading centered above list + image */}
        <div className="mx-auto max-w-3xl text-center">
          {showEyebrow ? (
            <span
              className="mb-2.5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              <Star className="h-3 w-3" strokeWidth={2.5} fill={ORANGE} />
              {eyebrow}
            </span>
          ) : null}

          <h2
            className="text-[22px] font-extrabold leading-[1.2] tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
            style={{ color: NAVY }}
          >
            {titleBefore}
            <span style={{ color: ORANGE }}>{titleAccent}</span>
            {titleMiddle}
            {titleAccent2 ? (
              <span style={{ color: ORANGE }}>{titleAccent2}</span>
            ) : null}
            {titleAfter}
          </h2>

          {subtitle ? (
            <p
              className="mx-auto mt-2 max-w-xl text-[14px] leading-6 sm:mt-2.5 sm:text-[15px] sm:leading-7"
              style={{ color: GREY }}
            >
              {subtitle}
            </p>
          ) : null}

          <div
            className="mx-auto mt-3 h-[3px] w-11 rounded-full"
            style={{ background: ORANGE }}
            aria-hidden="true"
          />
        </div>

        {/* List + image: image stays a fixed size, vertically centered on the right */}
        <div className="mt-2.5 grid grid-cols-1 items-start gap-6 sm:mt-3 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10">
          <div className="min-w-0">
            {items.map(({ title, description, icon: Icon }, index) => {
              const isLast = index === items.length - 1;
              return (
                <div key={title}>
                  <div className="flex items-center gap-3 py-1.5 sm:py-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-[0_6px_16px_rgba(255,106,0,0.25)] sm:h-10 sm:w-10">
                      {Icon ? (
                        <Icon
                          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                          strokeWidth={2}
                        />
                      ) : null}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className="text-[13px] font-bold leading-snug sm:text-[14px]"
                        style={{ color: NAVY }}
                      >
                        {title}
                      </h3>
                      {description ? (
                        <p
                          className="mt-0.5 max-w-[480px] text-[12px] leading-[1.4] sm:text-[13px]"
                          style={{ color: GREY }}
                        >
                          {description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  {!isLast ? (
                    <div className="h-px w-full bg-[#E8E8E8]" aria-hidden="true" />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="relative mx-auto h-[240px] w-full max-w-[360px] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:h-[280px] sm:max-w-[400px] sm:rounded-[24px] lg:mx-auto lg:h-[380px] lg:w-full lg:max-w-[420px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
