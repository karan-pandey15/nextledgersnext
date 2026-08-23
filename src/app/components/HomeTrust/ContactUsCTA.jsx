"use client";

import React from "react";
import Link from "next/link";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;

const CONTACT_CARDS = [
  {
    title: "Call Us",
    detail: "+1 (888) 552-0055",
    href: "tel:+18885520055",
    logo: 1,
    external: true,
  },
  {
    title: "Email Us",
    detail: "info@nextledgers.com",
    href: "mailto:info@nextledgers.com",
    logo: 25,
    external: true,
  },
  {
    title: "Let's Talk",
    detail: "Schedule a Free Consultation",
    href: "/contact",
    logo: 3,
    external: false,
  },
];

function ContactCard({ card }) {
  const isConsultation = card.detail === "Schedule a Free Consultation";
  const className =
    "flex w-full flex-col items-center justify-center rounded-[14px] bg-white px-4 py-5 text-center shadow-[0_8px_24px_rgba(0,0,0,0.1)] sm:px-5 sm:py-6";

  const content = (
    <>
      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center sm:h-[66px] sm:w-[66px]">
        <HomeLogoImg n={card.logo} />
      </div>

      <h3 className="mt-3 text-[15px] font-bold text-[#0F274A] sm:mt-3.5 sm:text-[16px]">
        {card.title}
      </h3>

      <p
        className={
          "mt-1.5 px-1 font-bold leading-snug text-[#FF6A00] " +
          (isConsultation ? "text-[13px] sm:text-[14px]" : "text-[14px] sm:text-[15px]")
        }
      >
        {card.detail}
      </p>
    </>
  );

  if (card.external) {
    return (
      <a href={card.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={card.href} className={className}>
      {content}
    </Link>
  );
}

export default function ContactUsCTA() {
  return (
    <div className="relative mt-0 overflow-hidden rounded-[18px] bg-[#0B1C33] px-4 py-7 sm:rounded-[20px] sm:px-8 sm:py-8 lg:px-12 lg:py-9">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 106, 0,0.55) 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#FF6A00]/25 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#FF6A00] sm:w-9" aria-hidden="true" />
            <p className="text-[11px] font-bold tracking-[0.22em] text-[#FF6A00] uppercase sm:text-[12px]">
              CONTACT US
            </p>
            <span className="h-px w-7 bg-[#FF6A00] sm:w-9" aria-hidden="true" />
          </div>

          <h2 className="mt-2.5 text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-white sm:mt-3 sm:text-[28px] lg:text-[32px]">
            Let&apos;s Build <span style={{ color: ORANGE }}>Success</span> Together
          </h2>

          <p className="mx-auto mt-2 max-w-[520px] text-[12px] font-semibold leading-5 text-[#C5CED9] sm:text-[13px] sm:leading-6">
            Ready to grow your business? Get in touch with us today!
          </p>

          <p className="mx-auto mt-2.5 max-w-[700px] text-center text-[11px] font-semibold leading-5 text-[#C5CED9] sm:mt-3 sm:text-[12px] sm:leading-6 lg:text-[13px]">
            At Next Ledgers, we are here to provide the personalised accounting, compliance and
            offshore support designed just for you. Our team combines deep expertise with a
            hands-on approach to help you overcome challenges and keep your focus where it
            belongs — on your business success.
          </p>
        </div>

        {/* Mobile: 10px gap between stacked cards */}
        <div className="mx-auto mt-5 grid max-w-[900px] grid-cols-1 gap-[10px] sm:mt-6 md:grid-cols-3 md:gap-4 lg:gap-5">
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
