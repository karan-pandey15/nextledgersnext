"use client";

import React from "react";
import Link from "next/link";

const ORANGE = "#F58220";

function IconPhone({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 3.8h2.4l1.2 3.2-1.5 1.1a12.5 12.5 0 0 0 5.6 5.6l1.1-1.5 3.2 1.2v2.4c0 .9-.7 1.7-1.6 1.8A15.7 15.7 0 0 1 3.8 5.4c.1-.9.9-1.6 1.8-1.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.5 8 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChat({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 5.5h14A1.5 1.5 0 0 1 20.5 7v8A1.5 1.5 0 0 1 19 16.5H9.5L5 20v-3.5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const CONTACT_CARDS = [
  {
    title: "Call Us",
    detail: "+1 (888) 552-0055",
    href: "tel:+18885520055",
    icon: IconPhone,
    external: true,
  },
  {
    title: "Email Us",
    detail: "info@nextledgers.com",
    href: "mailto:info@nextledgers.com",
    icon: IconMail,
    external: true,
  },
  {
    title: "Let's Talk",
    detail: "Schedule a Free Consultation",
    href: "/contact",
    icon: IconChat,
    external: false,
  },
];

function ContactCard({ card }) {
  const Icon = card.icon;
  const isConsultation = card.detail === "Schedule a Free Consultation";
  const className =
    "flex flex-col items-center justify-center text-center rounded-[16px] sm:rounded-[18px] bg-white px-5 py-7 sm:px-6 sm:py-8 min-h-[170px] sm:min-h-[185px] shadow-[0_10px_32px_rgba(0,0,0,0.12)] w-full max-w-[280px] md:max-w-none mx-auto";

  const content = (
    <>
      <div className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#FFF1E6] flex items-center justify-center text-[#F58220]">
        <Icon className="w-6 h-6 sm:w-[26px] sm:h-[26px]" />
      </div>

      <h3 className="mt-4 font-bold text-[15px] sm:text-[16px] text-[#0F274A]">
        {card.title}
      </h3>

      <p
        className={
          "mt-2.5 font-bold leading-snug text-[#F58220] px-1 " +
          (isConsultation
            ? "text-[14px] sm:text-[15px] lg:text-[16px]"
            : "text-[16px] sm:text-[17px] lg:text-[18px]")
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
    <div className="mt-10 sm:mt-12 lg:mt-14 relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#0B1C33] px-8 sm:px-12 lg:px-16 xl:px-20 pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,130,32,0.55) 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-[#F58220]/25 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="text-center max-w-[720px] mx-auto">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-8 sm:w-10 bg-[#F58220]" aria-hidden="true" />
            <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] uppercase text-[#F58220]">
              CONTACT US
            </p>
            <span className="h-px w-8 sm:w-10 bg-[#F58220]" aria-hidden="true" />
          </div>

          <h2 className="mt-3 sm:mt-4 font-bold text-[26px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-[-0.01em] text-white">
            Let&apos;s Build <span style={{ color: ORANGE }}>Success</span> Together
          </h2>

          <p className="mt-3 text-[13px] sm:text-[14px] leading-6 text-[#C5CED9] max-w-[560px] mx-auto">
            Ready to grow your business? Get in touch with us today!
          </p>

          <p className="mt-4 sm:mt-5 text-center text-[12px] sm:text-[13px] lg:text-[14px] leading-6 sm:leading-7 text-[#C5CED9] max-w-[780px] mx-auto">
            At Next Ledgers, we are here to provide the personalised accounting, compliance and
            offshore support designed just for you. Our team combines deep expertise with a
            hands-on approach to help you overcome challenges and keep your focus where it
            belongs — on your business success.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-[960px] mx-auto">
          {CONTACT_CARDS.map((card) => (
            <ContactCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
