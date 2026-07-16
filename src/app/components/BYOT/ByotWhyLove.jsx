"use client";

import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#4B5563";

function IconDedicated() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <circle cx="13" cy="12" r="4" fill="none" stroke={ORANGE} strokeWidth="2" />
      <path d="M6 26c1.8-5 12.2-5 14 0" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
      <circle cx="27" cy="12" r="4" fill="none" stroke={ORANGE} strokeWidth="2" />
      <path d="M20 26c1.8-5 12.2-5 14 0" fill="none" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="14" r="5" fill="none" stroke={ORANGE} strokeWidth="2.2" />
      <path d="M12 29c2.2-5.5 13.8-5.5 16 0" fill="none" stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M20 22.2l1.1 2.2 2.4.4-1.7 1.7.4 2.4L20 27.8l-2.2 1.1.4-2.4-1.7-1.7 2.4-.4z"
        fill={ORANGE}
      />
    </svg>
  );
}

function IconScalable() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <path d="M20 8v8M20 24v8M8 20h8M24 20h8" stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 6l-3 4h6l-3-4zM20 34l-3-4h6l-3 4zM6 20l4-3v6l-4-3zM34 20l-4-3v6l4-3z" fill={ORANGE} />
      <circle cx="20" cy="20" r="3" fill="none" stroke={ORANGE} strokeWidth="2" />
    </svg>
  );
}

function IconCost() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <path
        d="M28.5 12.5a10.5 10.5 0 1 0 1.2 10.8"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M30 8.5v7h-7" fill="none" stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 14v12M17.2 17.2c.8-1.4 2.1-2 3.4-2 2 0 3.4 1 3.4 2.6 0 1.5-1.1 2.3-3.5 2.9s-3.5 1.5-3.5 3.2c0 1.8 1.6 2.9 3.7 2.9 1.5 0 2.8-.7 3.5-2"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconQuality() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <circle cx="20" cy="16" r="9" fill="none" stroke={ORANGE} strokeWidth="2.2" />
      <path
        d="M20 10.8l1.5 3 3.3.5-2.4 2.3.6 3.3L20 18.4l-3 1.5.6-3.3-2.4-2.3 3.3-.5z"
        fill={ORANGE}
      />
      <path d="M14 24l-2.5 10 8.5-4 8.5 4L26 24" fill="none" stroke={ORANGE} strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <circle cx="20" cy="20" r="12" fill="none" stroke={ORANGE} strokeWidth="2.2" />
      <path d="M20 12v9l6 3.5" fill="none" stroke={ORANGE} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="20" r="1.6" fill={ORANGE} />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden>
      <path
        d="M8 18l6-5h5l3 3 3-3h5l6 5"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18l4 4c1.2 1.2 2.6 1.5 4 .8l2-1.2c1-.6 2.2-.5 3 .3l1.5 1.4c1.3 1.2 3.3 1.1 4.4-.2L33 20"
        fill="none"
        stroke={ORANGE}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 26l2.5 2.5M20 27.5l2 2M24 26.5l1.5 1.5" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TitleDash({ flip = false }) {
  return (
    <span
      className={`hidden items-center sm:inline-flex ${flip ? "flex-row-reverse" : ""}`}
      aria-hidden
    >
      <span
        className="h-px w-8 border-t border-dashed sm:w-12"
        style={{ borderColor: ORANGE }}
      />
      <span
        className="mx-0.5 inline-block h-1.5 w-1.5 rotate-45"
        style={{ background: ORANGE }}
      />
    </span>
  );
}

const BENEFITS = [
  {
    title: "Dedicated Team",
    desc: "Works exclusively for your business.",
    Icon: IconDedicated,
  },
  {
    title: "Scalable Flexibility",
    desc: "Scale your team up or down anytime.",
    Icon: IconScalable,
  },
  {
    title: "Cost Efficient",
    desc: "Save up to 70% on operational costs.",
    Icon: IconCost,
  },
  {
    title: "High Quality",
    desc: "Experienced professionals with proven expertise.",
    Icon: IconQuality,
  },
  {
    title: "Fast Turnaround",
    desc: "Quick onboarding and faster results.",
    Icon: IconClock,
  },
  {
    title: "Long-term Partnership",
    desc: "We grow with you and your business.",
    Icon: IconHandshake,
  },
];

export default function ByotWhyLove() {
  return (
    <section className="w-full bg-[#FFF4EA] py-[5px]">
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-center gap-2.5 sm:gap-3">
          <TitleDash />
          <h2
            className="text-center text-[20px] font-bold leading-tight sm:text-[26px] lg:text-[28px]"
            style={{ color: NAVY }}
          >
            Why Clients Love Our{" "}
            <span style={{ color: ORANGE }}>BYOT Model</span>
          </h2>
          <TitleDash flip />
        </div>

        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {BENEFITS.map(({ title, desc, Icon }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,39,74,0.1)]">
                <Icon />
              </span>
              <div className="min-w-0">
                <h3
                  className="text-[13px] font-bold leading-tight sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {title}
                </h3>
                <p
                  className="mt-0.5 text-[11.5px] leading-snug sm:text-[12px]"
                  style={{ color: GREY }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
