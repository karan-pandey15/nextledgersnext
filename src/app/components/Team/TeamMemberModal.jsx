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

function ModalAvatar({ src, name, variant }) {
  const [failed, setFailed] = useState(!src);
  const isCutout = Boolean(src?.includes("removebg"));
  const imageSrc = src ? encodeURI(src) : "";
  const initials = (name || "")
    .split(",")[0]
    .split(" ")
    .filter(Boolean)
    .filter((part) => !/^(ACCA|CPA|CMA|MBA|EA|CGMA)$/i.test(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const imageClass =
    variant === "shivam"
      ? "h-full w-full scale-[1.0] object-cover object-[center_18%]"
      : isCutout
        ? "h-full w-full object-contain object-bottom"
        : "h-full w-full object-contain object-center";

  useEffect(() => {
    setFailed(!src);
  }, [src]);

  return (
    <div
      className="relative mx-auto flex h-[132px] w-[132px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFF7F0] sm:h-[148px] sm:w-[148px]"
      style={{ boxShadow: `0 0 0 2.5px ${ACCENT}` }}
    >
      {imageSrc && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={imageSrc}
          src={imageSrc}
          alt={name || ""}
          className={imageClass}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-[28px] font-bold tracking-wide sm:text-[30px]" style={{ color: ACCENT }}>
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
            className="relative z-10 flex max-h-[min(92vh,880px)] w-full max-w-[960px] flex-col overflow-hidden rounded-[20px] border border-[#E8C4AE] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)]"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition hover:bg-[#FFF7F0] sm:right-4 sm:top-4"
              style={{ color: ACCENT }}
            >
              <IconClose className="h-4 w-4" />
            </button>

            <div className="flex min-h-0 flex-1 flex-col overflow-hidden lg:flex-row">
              {/* Left sidebar — matches design */}
              <aside
                className="flex w-full shrink-0 flex-col items-center px-6 pb-5 pt-8 text-center sm:px-7 sm:pt-9 lg:w-[300px] lg:px-6 lg:pb-6 lg:pt-10"
                style={{ backgroundColor: PEACH_SIDE }}
              >
                <ModalAvatar
                  src={details.image}
                  name={details.displayName}
                  variant={details.avatarVariant}
                />

                <h2
                  id="team-member-modal-title"
                  className="mt-4 text-[20px] font-bold leading-snug sm:text-[22px]"
                  style={{ color: ACCENT }}
                >
                  {details.headingName}
                </h2>

                {/* Degree under name — M.Com fallback when missing */}
                <p
                  className="mt-2 max-w-[240px] text-[12px] font-bold leading-snug sm:text-[13px]"
                  style={{ color: NAVY }}
                >
                  {details.degree}
                </p>

                <div className="relative my-4 flex w-full max-w-[190px] items-center justify-center">
                  <div className="h-px w-full" style={{ backgroundColor: ACCENT }} />
                  <span
                    className="absolute h-2 w-2 rotate-45"
                    style={{ backgroundColor: ACCENT }}
                    aria-hidden="true"
                  />
                </div>

                {/* Designation / position */}
                <p
                  className="max-w-[240px] text-[12px] font-medium leading-snug sm:text-[13px]"
                  style={{ color: NAVY }}
                >
                  {details.companyRole}
                </p>

                <div className="relative z-30 mt-5 flex w-full max-w-[260px] gap-2.5">
                  <a
                    href={details.mailHref}
                    className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#E8E8E8] bg-white py-2.5 text-[12px] font-semibold shadow-[0_2px_8px_rgba(15,39,74,0.06)] transition hover:bg-[#FFFBF8] sm:text-[13px]"
                    style={{ color: NAVY }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="shrink-0" style={{ color: ACCENT }}>
                      <IconMail className="h-6 w-6" />
                    </span>
                    Email
                  </a>
                  <a
                    href={details.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#E8E8E8] bg-white py-2.5 text-[12px] font-semibold shadow-[0_2px_8px_rgba(15,39,74,0.06)] transition hover:bg-[#FFFBF8] sm:text-[13px]"
                    style={{ color: NAVY }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="shrink-0" style={{ color: ACCENT }}>
                      <IconLinkedIn className="h-6 w-6" />
                    </span>
                    LinkedIn
                  </a>
                </div>
              </aside>

              {/* Right content */}
              <div className="flex min-w-0 flex-1 flex-col justify-between overflow-hidden bg-white px-6 py-6 sm:px-8 sm:py-7 lg:px-8 lg:py-8">
                <div>
                  <div className="mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="shrink-0" style={{ color: ACCENT }}>
                        <IconUser className="h-8 w-8" />
                      </span>
                      <h3
                        className="text-[14px] font-bold uppercase tracking-[0.04em] sm:text-[15px]"
                        style={{ color: NAVY }}
                      >
                        About {details.headingName}
                      </h3>
                    </div>
                    <div className="mt-2 flex items-center" aria-hidden="true">
                      <span
                        className="h-[3px] w-9 shrink-0 rounded-[1px]"
                        style={{ backgroundColor: ACCENT }}
                      />
                      <span className="h-px w-12 shrink-0" style={{ backgroundColor: "#E8D5C8" }} />
                    </div>
                  </div>

                  <div
                    className="space-y-2.5 text-[12px] leading-[1.65] sm:text-[13px] sm:leading-[1.7]"
                    style={{ color: BODY }}
                  >
                    {details.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Stats — icon in soft peach circle (second image) */}
                <div className="mt-6 grid grid-cols-2 gap-y-5 sm:mt-7 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-[#E8E8E8]">
                  {details.highlights.map((item) => {
                    const Icon = HIGHLIGHT_ICONS[item.icon] || IconBriefcase;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center px-2 text-center sm:px-3"
                      >
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                          style={{ backgroundColor: "#FFE8DC", color: ACCENT }}
                        >
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </span>
                        <p
                          className="mt-2 text-[18px] font-bold leading-none sm:text-[20px]"
                          style={{ color: ACCENT }}
                        >
                          {item.value}
                        </p>
                        <p
                          className="mt-1.5 text-[11px] leading-snug sm:text-[12px]"
                          style={{ color: NAVY }}
                        >
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quote card — matches design image */}
            <div className="shrink-0 bg-white px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
              <div
                className="flex flex-col gap-3 rounded-[10px] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:rounded-[12px] sm:px-6 sm:py-[18px]"
                style={{
                  backgroundColor: "#FFF5F0",
                  boxShadow: "inset 0 -1px 0 rgba(15,39,74,0.06)",
                }}
              >
                <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
                  <span
                    className="mt-[-2px] shrink-0 text-[34px] font-bold leading-none sm:text-[38px]"
                    style={{ color: ACCENT }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p
                    className="min-w-0 text-[13px] leading-[1.55] sm:text-[14px] sm:leading-[1.6]"
                    style={{ color: "#333333" }}
                  >
                    {details.quote}
                  </p>
                </div>
                <p
                  className={`${signatureFont.className} shrink-0 self-end whitespace-nowrap text-right text-[24px] leading-none sm:self-center sm:pl-2 sm:text-[28px]`}
                  style={{ color: ACCENT }}
                >
                  - {details.displayName}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
