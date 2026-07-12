"use client";

import React, { useState, useCallback } from "react";

const ORANGE = "#F58220";
const NAVY = "#0F274A";
const GREY = "#6B7280";

const SLIDES = [
  [
    {
      name: "Michael T",
      role: "Maple Crest CPAs, Ontario",
      quote:
        "After working with several accounting firms from India and Philippines over the past 7 years, what really sets Next Ledgers apart is their exceptional communication and openness to feedback. They're transparent with billing, which is something I struggled to find before. It feels positive and relaxed to work with a team that's clear, honest, and truly listens, making our offshoring dependency smoother than ever.",
      image: "/images/testimonoalfirst-2.jpeg",
      featured: false,
    },
    {
      name: "Jessica M. CPA",
      role: "Florida",
      quote:
        "We are working with two outsourcing firms at present, but Next Ledgers truly stands out. Their team is responsive, detail-oriented, and genuinely interested in our business. We clearly feel the difference in the level of attention they give to the work, deadlines, and communication.",
      image: "/images/fourtest.jpg",
      featured: true,
    },
    {
      name: "Summit Oak Accounting",
      role: "British Columbia",
      quote:
        "Next Ledgers has become more than just our offshore partner, they're essentially our back office. With their team handling everything from bookkeeping to admin tasks like chasing down documents and managing communication, I've been able to run my business here in Canada with just one admin on my team. It's been a huge relief having that kind of reliable, all-around support.",
      image: "/images/testimonoalfirst-1.jpeg",
      featured: false,
    },
  ],
  [
    {
      name: "Michael T",
      role: "Bookkeeping Firm Founder, New York",
      quote:
        "We switched to Next Ledgers after struggling with a generic firm. The personalized service and assigning a dedicated person with deep understanding of U.S. accounting standards blew us away.",
      image: "/images/firsttestimonial.jpg",
      featured: false,
    },
    {
      name: "David C.",
      role: "Vancouver",
      quote:
        "We were struggling with frequent hiring and decided to offshore. The Next Ledgers team made our transition from an in-house bookkeeper seamless. They understand the client needs and the nuances of Canadian compliance, which saved us time, money and energy.",
      image: "/images/secondtest.jpg",
      featured: true,
    },
    {
      name: "Chris, QuickBooks Advisor",
      role: "Vermont",
      quote:
        "I've been with Next Ledgers for over two years now. They're reliable, accurate, and most importantly genuinely care about client's business growth which is rare and feels personal.",
      image: "/images/third.jpg",
      featured: false,
    },
  ],
];

function Stars({ light = false }) {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3 w-3 sm:h-3.5 sm:w-3.5"
          fill={light ? "#FFFFFF" : ORANGE}
          aria-hidden="true"
        >
          <path d="M10 1.5l2.35 5.1 5.55.7-4.1 3.85 1.1 5.45L10 13.9l-4.9 2.7 1.1-5.45-4.1-3.85 5.55-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark({ className = "", light = false }) {
  return (
    <span
      className={`pointer-events-none select-none font-serif text-[40px] leading-none sm:text-[48px] ${className}`}
      style={{ color: light ? "rgba(255,255,255,0.35)" : "rgba(245,130,32,0.22)" }}
      aria-hidden="true"
    >
      &ldquo;
    </span>
  );
}

function TestimonialCard({ item }) {
  const featured = item.featured;

  return (
    <div
      className={`relative flex flex-col items-center rounded-[14px] px-3.5 py-4 text-center shadow-[0_10px_36px_rgba(15,39,74,0.07)] sm:min-h-0 sm:rounded-[18px] sm:px-5 sm:py-5 ${
        featured ? "bg-[#F58220] text-white lg:scale-[1.02] lg:z-10" : "bg-white"
      }`}
    >
      <QuoteMark className="absolute top-0.5 left-2.5 sm:top-1.5 sm:left-4" light={featured} />
      <span
        className="pointer-events-none absolute bottom-0 right-2.5 select-none font-serif text-[32px] leading-none sm:bottom-1 sm:right-4 sm:text-[48px]"
        style={{ color: featured ? "rgba(255,255,255,0.35)" : "rgba(245,130,32,0.22)" }}
        aria-hidden="true"
      >
        &rdquo;
      </span>

      <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full bg-[#FFF1E6] shadow-md ring-2 ring-white/40 sm:h-[64px] sm:w-[64px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/nextledgerlogo3.png";
            e.currentTarget.className =
              "absolute inset-0 h-full w-full object-contain object-center p-2.5 bg-white";
          }}
        />
      </div>

      <div className="mt-1.5 sm:mt-2">
        <Stars light={featured} />
      </div>

      <h3
        className="mt-1.5 text-[13px] font-bold leading-snug sm:mt-2 sm:text-[14px]"
        style={{ color: featured ? "#FFFFFF" : NAVY }}
      >
        {item.name}
      </h3>

      <p
        className="mt-0.5 text-[11px] font-bold sm:text-[12px]"
        style={{ color: featured ? "rgba(255,255,255,0.92)" : ORANGE }}
      >
        {item.role}
      </p>

      <div
        className="mb-1.5 mt-1.5 h-px w-8 sm:mb-2 sm:mt-2"
        style={{ backgroundColor: featured ? "rgba(255,255,255,0.45)" : "#E8E8E8" }}
        aria-hidden="true"
      />

      <p
        className="w-full max-w-none text-[11px] leading-[1.45] sm:max-w-[300px] sm:text-[12px] sm:leading-[1.5]"
        style={{ color: featured ? "rgba(255,255,255,0.95)" : GREY }}
      >
        {item.quote}
      </p>
    </div>
  );
}

function NavArrow({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#0F274A] shadow-[0_6px_18px_rgba(15,39,74,0.12)] transition-all duration-200 hover:border-[#F58220] hover:text-[#F58220] sm:h-11 sm:w-11"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        aria-hidden="true"
      >
        {direction === "left" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function RealFeedback() {
  const [slide, setSlide] = useState(0);
  const total = SLIDES.length;

  const prevSlide = useCallback(() => {
    setSlide((current) => (current === 0 ? total - 1 : current - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    setSlide((current) => (current === total - 1 ? 0 : current + 1));
  }, [total]);

  return (
    <section className="relative w-full bg-white pt-0 pb-0">
      <div className="mx-auto max-w-[1440px] px-2 sm:px-6 lg:px-10">
        <div className="bg-[#FFF7F0] px-2 pb-8 pt-0 sm:px-8 sm:pb-10 lg:px-10">
          <div className="mx-auto max-w-[980px] px-1 text-center sm:px-0">
            <div className="inline-flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F58220] sm:w-10" aria-hidden="true" />
              <p
                className="text-[11px] font-bold tracking-[0.22em] uppercase sm:text-[12px]"
                style={{ color: ORANGE }}
              >
                REAL FEEDBACK
              </p>
              <span className="h-px w-8 bg-[#F58220] sm:w-10" aria-hidden="true" />
            </div>

            <h2
              className="mt-3 text-balance text-[18px] font-bold leading-[1.2] tracking-[-0.01em] sm:mt-4 sm:text-[24px] lg:text-[28px]"
              style={{ color: NAVY }}
            >
               Feedback from{" "}
              <span style={{ color: ORANGE }}>Businesses</span> Like Yours.
            </h2>
          </div>

          {/* Mobile: arrows outside cards so content isn't covered */}
          <div className="relative mt-5 sm:mt-7 px-10 sm:px-0">
            <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 sm:hidden">
              <NavArrow direction="left" onClick={prevSlide} label="Previous testimonials" />
            </div>
            <div className="absolute right-0 top-1/2 z-20 -translate-y-1/2 sm:hidden">
              <NavArrow direction="right" onClick={nextSlide} label="Next testimonials" />
            </div>

            <div className="flex items-center gap-0 sm:gap-4 lg:gap-5">
              <div className="hidden shrink-0 sm:block">
                <NavArrow direction="left" onClick={prevSlide} label="Previous testimonials" />
              </div>

              <div className="min-w-0 w-full flex-1 overflow-hidden px-0 sm:px-0">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                  {SLIDES.map((group, slideIndex) => (
                    <div
                      key={slideIndex}
                      className="grid w-full shrink-0 grid-cols-1 gap-2.5 md:grid-cols-3 sm:gap-4 lg:gap-4"
                    >
                      {group.map((item) => (
                        <TestimonialCard
                          key={`${slideIndex}-${item.name}-${item.role}`}
                          item={item}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden shrink-0 sm:block">
                <NavArrow direction="right" onClick={nextSlide} label="Next testimonials" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  slide === index ? "w-6 bg-[#F58220]" : "w-2 bg-[#F58220]/30 hover:bg-[#F58220]/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
