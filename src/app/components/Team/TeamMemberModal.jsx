"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import { getTeamMemberDetails } from "./teamMemberDefaults";

const signatureFont = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

/** Accent from the provided design (warm terracotta / coral orange) */
const ACCENT = "#E0704A";
const NAVY = "#1A2B48";
const BODY = "#4A5568";
const PEACH = "#FFF5F0";
const PEACH_SIDE = "#FFF0E8";

function IconClose({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMail({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLinkedIn({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function IconUser({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.2 19.2c1.5-3.2 3.9-4.8 6.8-4.8s5.3 1.6 6.8 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBriefcase({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconBuilding({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 20.5V5.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 10.5h4a1 1 0 0 1 1 1v9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 8.5h2M8 12h2M8 15.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconGlobe({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.4-3.6-8.5s1.2-5.9 3.6-8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/** Shield with lock — matches design (not checkmark) */
function IconShieldLock({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5 19.5 6.5v5.2c0 4.4-3 7.6-7.5 9.3-4.5-1.7-7.5-4.9-7.5-9.3V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="9.25"
        y="11.4"
        width="5.5"
        height="4.2"
        rx="0.7"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M10.6 11.4v-1.35a1.4 1.4 0 0 1 2.8 0v1.35"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconQuote({ className = "h-12 w-12" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.2 18c-1.7 0-3.1-.5-4.1-1.6C2 15.2 1.5 13.7 1.5 11.8c0-2.4.8-4.5 2.3-6.3C5.4 3.7 7.4 2.5 10 2l.7 2.1c-1.7.5-3 1.4-3.9 2.7-.8 1.2-1.2 2.5-1.1 3.8.4-.3 1-.5 1.7-.5 1.3 0 2.3.4 3.1 1.2.8.8 1.2 1.8 1.2 3.1 0 1.2-.4 2.2-1.2 3-.8.8-1.9 1.2-3.3 1.2Zm11.3 0c-1.7 0-3.1-.5-4.1-1.6-1.1-1.2-1.6-2.7-1.6-4.6 0-2.4.8-4.5 2.3-6.3 1.6-1.8 3.6-3 6.2-3.5l.7 2.1c-1.7.5-3 1.4-3.9 2.7-.8 1.2-1.2 2.5-1.1 3.8.4-.3 1-.5 1.7-.5 1.3 0 2.3.4 3.1 1.2.8.8 1.2 1.8 1.2 3.1 0 1.2-.4 2.2-1.2 3-.8.8-1.9 1.2-3.3 1.2Z" />
    </svg>
  );
}

const HIGHLIGHT_ICONS = {
  briefcase: IconBriefcase,
  building: IconBuilding,
  globe: IconGlobe,
  shield: IconShieldLock,
};

function ModalAvatar({ src, name }) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));
  const initials = (name || "")
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .filter((part) => !/^(ACCA|CPA|CMA|MBA|EA|CGMA)$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative mx-auto flex h-[140px] w-[140px] shrink-0 items-center justify-center overflow-hidden rounded-full sm:h-[156px] sm:w-[156px] ${
        failed || !src ? "bg-[#FFE8DC]" : isCutout ? "bg-[#FFF7F0]" : "bg-[#E8EEF5]"
      }`}
      style={{ boxShadow: `0 0 0 2.5px ${ACCENT}` }}
    >
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          className={
            isCutout
              ? "h-[94%] w-[94%] object-contain object-bottom"
              : "h-full w-full object-cover object-center"
          }
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[32px] font-bold tracking-wide" style={{ color: ACCENT }}>
          {initials}
        </span>
      )}
    </div>
  );
}

/**
 * Shared team member detail modal.
 * Matches the provided design: sidebar + about + highlights + quote.
 *
 * Typography / icon scale (verified against design):
 * - Name: 24–26px bold accent
 * - Role / company: 14px navy
 * - ABOUT header: 15–16px bold uppercase navy + underline
 * - About icon: 40px (2×)
 * - Bio: 14px / 1.75
 * - Highlight icons: 40px (2×)
 * - Highlight values: 20–22px bold accent
 * - Highlight labels: 12px muted
 * - Email / LinkedIn icons: 28px (2×)
 * - Quote mark: 48px (2×)
 * - Quote text: 14px
 * - Signature: 26–28px script
 */
export default function TeamMemberModal({
  member,
  isOpen,
  onClose,
}) {
  const [mounted, setMounted] = useState(false);
  const details = getTeamMemberDetails(member);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && details ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close dialog backdrop"
            className="absolute inset-0 cursor-pointer bg-black/45 backdrop-blur-[2px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="team-member-modal-title"
            className="relative z-10 flex max-h-[min(92vh,860px)] w-full max-w-[960px] flex-col overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(15,39,74,0.22)]"
            style={{ backgroundColor: PEACH }}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border bg-white/90 transition hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              <IconClose className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
            </button>

            {/* Main two-column body */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row lg:overflow-hidden">
              {/* Left sidebar */}
              <aside
                className="flex w-full shrink-0 flex-col items-center px-6 pb-6 pt-8 text-center sm:px-8 sm:pt-10 lg:w-[310px] lg:overflow-y-auto lg:px-7 lg:pb-8 lg:pt-11"
                style={{ backgroundColor: PEACH_SIDE }}
              >
                <ModalAvatar src={details.image} name={details.displayName} />

                <h2
                  id="team-member-modal-title"
                  className="mt-5 text-[24px] font-bold leading-tight sm:text-[26px]"
                  style={{ color: ACCENT }}
                >
                  {details.displayName}
                </h2>

                <p
                  className="mt-2.5 max-w-[250px] text-[13px] font-medium leading-snug sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {details.title}
                  {details.credentials ? (
                    <span className="mt-0.5 block text-[12px] font-normal opacity-80">
                      {details.credentials}
                    </span>
                  ) : null}
                </p>

                {/* Diamond divider */}
                <div className="relative my-5 flex w-full max-w-[200px] items-center justify-center">
                  <div className="h-px w-full" style={{ backgroundColor: ACCENT }} />
                  <span
                    className="absolute h-2 w-2 rotate-45"
                    style={{ backgroundColor: ACCENT }}
                    aria-hidden="true"
                  />
                </div>

                <p className="text-[13px] font-medium sm:text-[14px]" style={{ color: NAVY }}>
                  {details.companyRole}
                </p>

                <div className="mt-5 flex w-full max-w-[260px] gap-2.5">
                  <a
                    href={`mailto:${details.email}`}
                    className="flex flex-1 items-center justify-center gap-2 rounded-[8px] border bg-transparent py-2.5 text-[12px] font-semibold transition hover:bg-white/60 sm:text-[13px]"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    <IconMail className="h-7 w-7 shrink-0" />
                    Email
                  </a>
                  <a
                    href={details.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-[8px] border bg-transparent py-2.5 text-[12px] font-semibold transition hover:bg-white/60 sm:text-[13px]"
                    style={{ borderColor: ACCENT, color: ACCENT }}
                  >
                    <IconLinkedIn className="h-7 w-7 shrink-0" />
                    LinkedIn
                  </a>
                </div>
              </aside>

              {/* Right content */}
              <div className="flex min-w-0 flex-1 flex-col bg-white px-6 py-7 sm:px-8 sm:py-8 lg:overflow-y-auto lg:px-9 lg:py-9">
                {/* ABOUT header — short two-part underline under icon (design) */}
                <div className="mb-5">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0" style={{ color: ACCENT }}>
                      <IconUser className="h-10 w-10" />
                    </span>
                    <h3
                      className="text-[15px] font-bold uppercase tracking-[0.05em] sm:text-[16px]"
                      style={{ color: NAVY }}
                    >
                      About {details.displayName}
                    </h3>
                  </div>
                  {/* Thick accent bar under icon + thin pale continuation — matches design */}
                  <div className="mt-2.5 flex items-center" aria-hidden="true">
                    <span
                      className="h-[3px] w-10 shrink-0 rounded-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span
                      className="h-px w-[52px] shrink-0"
                      style={{ backgroundColor: "#E8D5C8" }}
                    />
                  </div>
                </div>

                <div
                  className="space-y-3.5 text-[13px] leading-[1.7] sm:text-[14px] sm:leading-[1.75]"
                  style={{ color: BODY }}
                >
                  {details.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Highlights — 2× icons, vertical column dividers */}
                <div className="mt-8 grid grid-cols-2 gap-y-7 sm:mt-9 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#E5E7EB]">
                  {details.highlights.map((item) => {
                    const Icon = HIGHLIGHT_ICONS[item.icon] || IconBriefcase;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center px-2 text-center sm:px-3"
                      >
                        <span style={{ color: ACCENT }}>
                          <Icon className="h-10 w-10" />
                        </span>
                        <p
                          className="mt-2.5 text-[20px] font-bold leading-none sm:text-[22px]"
                          style={{ color: ACCENT }}
                        >
                          {item.value}
                        </p>
                        <p className="mt-1.5 text-[11px] leading-snug text-[#6B7280] sm:text-[12px]">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quote footer */}
            <div
              className="flex shrink-0 flex-col gap-3 border-t border-[#F0E0D6] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-5"
              style={{ backgroundColor: PEACH_SIDE }}
            >
              <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
                <span className="mt-0.5 shrink-0 sm:mt-0" style={{ color: ACCENT }}>
                  <IconQuote className="h-12 w-12" />
                </span>
                <p
                  className="text-[13px] leading-relaxed sm:text-[14px]"
                  style={{ color: BODY }}
                >
                  {details.quote}
                </p>
              </div>
              <p
                className={`${signatureFont.className} shrink-0 text-right text-[24px] leading-none sm:text-[28px]`}
                style={{ color: ACCENT }}
              >
                - {details.displayName}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
