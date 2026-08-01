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
/** Darker orange for modal icons */
const ICON_ORANGE = "#C2410C";
const NAVY = "#1A2B48";
const BODY = "#0A0A0A";
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

function IconFile({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3.5V8h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12h6M9 15.5h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconGavel({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m14.2 4.8 5 5M8.5 10.5l5 5M3.5 20.5h8M12.8 6.2l-7.1 7.1a1.2 1.2 0 0 0 0 1.7l1.3 1.3a1.2 1.2 0 0 0 1.7 0l7.1-7.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 19.5h16M7 16V11M12 16V8M17 16V5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="m14.5 7.5 2.5-2 2.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGear({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M5.8 5.8l1.6 1.6M16.6 16.6l1.6 1.6M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHandshake({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 13.5 10.5 11l2 2 3-3L18 12.5M4.5 11.5l3-2.5L10 11M19.5 11.5l-3-2.5L14 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 14.5c1.5 2.5 4 4 8.5 4s7-1.5 8.5-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHeartHand({ className = "h-10 w-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 19.5s-6.5-4-6.5-8.2A3.3 3.3 0 0 1 12 8.2a3.3 3.3 0 0 1 6.5 3.1c0 4.2-6.5 8.2-6.5 8.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
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
  file: IconFile,
  gavel: IconGavel,
  chart: IconChart,
  gear: IconGear,
  handshake: IconHandshake,
  heart: IconHeartHand,
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
      className="relative mx-auto flex h-[176px] w-[176px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFF7F0] sm:h-[192px] sm:w-[192px]"
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
            className="relative z-10 flex max-h-[min(92vh,820px)] w-[min(960px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[18px] border border-[#E8C4AE] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)] md:h-[min(88vh,760px)]"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-30 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition hover:bg-[#FFF7F0] sm:right-4 sm:top-4"
              style={{ color: ACCENT }}
            >
              <IconClose className="h-3.5 w-3.5" />
            </button>

            {/* Body — desktop: fixed height no scroll; stats always reserved */}
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-hide md:flex-row md:overflow-hidden">
              {/* Left sidebar: Image → Name → Degree → orange line → Designation */}
              <aside
                className="flex w-full shrink-0 flex-col items-center px-4 pb-5 pt-8 text-center sm:px-5 sm:pb-6 sm:pt-9 md:w-[280px] md:px-5 md:pt-10 lg:w-[300px] lg:px-6 lg:pt-11"
                style={{ backgroundColor: PEACH_SIDE }}
              >
                <ModalAvatar
                  src={details.image}
                  name={details.displayName}
                  variant={details.avatarVariant}
                />

                <h2
                  id="team-member-modal-title"
                  className="mt-3 max-w-[250px] text-[18px] font-bold leading-snug sm:mt-3.5 sm:text-[20px]"
                  style={{ color: ACCENT }}
                >
                  {details.displayName}
                </h2>

                <p
                  className="mt-1.5 text-[13px] font-bold leading-snug sm:text-[14px]"
                  style={{ color: NAVY }}
                >
                  {details.degree}
                </p>

                <div className="relative my-3.5 flex w-full max-w-[180px] items-center justify-center">
                  <div className="h-px w-full" style={{ backgroundColor: ACCENT }} />
                  <span
                    className="absolute h-1.5 w-1.5 rotate-45"
                    style={{ backgroundColor: ACCENT }}
                    aria-hidden="true"
                  />
                </div>

                <div className="max-w-[240px] space-y-0.5">
                  {(details.designationLines || []).map((line) => (
                    <p
                      key={line}
                      className="text-[12px] font-medium leading-snug sm:text-[13px]"
                      style={{ color: NAVY }}
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="relative z-30 mt-5 flex w-full max-w-[240px] gap-2">
                  <a
                    href={details.mailHref}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-[#E8E8E8] bg-white py-2 text-[11px] font-semibold shadow-[0_2px_8px_rgba(15,39,74,0.06)] transition hover:bg-[#FFFBF8] sm:text-[12px]"
                    style={{ color: NAVY }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="shrink-0" style={{ color: ICON_ORANGE }}>
                      <IconMail className="h-6 w-6" />
                    </span>
                    Email
                  </a>
                  <a
                    href={details.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-[#E8E8E8] bg-white py-2 text-[11px] font-semibold shadow-[0_2px_8px_rgba(15,39,74,0.06)] transition hover:bg-[#FFFBF8] sm:text-[12px]"
                    style={{ color: NAVY }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="shrink-0" style={{ color: ICON_ORANGE }}>
                      <IconLinkedIn className="h-6 w-6" />
                    </span>
                    LinkedIn
                  </a>
                </div>
              </aside>

              {/* Right: about + stats always visible on desktop */}
              <div className="flex min-h-0 min-w-0 flex-1 flex-col bg-white px-4 py-4 sm:px-6 sm:py-5 md:overflow-hidden lg:px-7 lg:py-6">
                <div className="mb-2 shrink-0">
                  <div className="flex items-center gap-2 pr-8">
                    <span className="shrink-0" style={{ color: ICON_ORANGE }}>
                      <IconUser className="h-8 w-8" />
                    </span>
                    <h3
                      className="text-[12px] font-bold uppercase tracking-[0.04em] sm:text-[13px]"
                      style={{ color: NAVY }}
                    >
                      About {details.aboutHeading || details.headingName}
                    </h3>
                  </div>
                  <div className="mt-1.5 flex items-center" aria-hidden="true">
                    <span
                      className="h-[2px] w-8 shrink-0 rounded-[1px]"
                      style={{ backgroundColor: ACCENT }}
                    />
                    <span className="h-px w-10 shrink-0" style={{ backgroundColor: "#E8D5C8" }} />
                  </div>
                </div>

                <div
                  className="min-h-0 flex-1 space-y-1.5 overflow-y-auto scrollbar-hide text-[11px] leading-[1.5] text-justify sm:text-[12px] sm:leading-[1.55] md:space-y-2"
                  style={{ color: BODY }}
                >
                  {details.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Stats — reserved height so icons/values/labels never clip */}
                <div className="mt-3 shrink-0 sm:mt-4">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-[#E8E8E8]">
                    {details.highlights.map((item, index) => {
                      const Icon = HIGHLIGHT_ICONS[item.icon] || IconBriefcase;
                      return (
                        <div
                          key={`${item.icon}-${item.value}-${index}`}
                          className="flex min-w-0 flex-col items-center px-1.5 text-center sm:px-2.5"
                        >
                          <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                            style={{ backgroundColor: "#FFE8DC", color: ICON_ORANGE }}
                          >
                            <Icon className="h-6 w-6 sm:h-[26px] sm:w-[26px]" />
                          </span>
                          <p
                            className="mt-1.5 w-full break-words text-[14px] font-bold leading-tight sm:text-[16px]"
                            style={{ color: ACCENT }}
                          >
                            {item.value}
                          </p>
                          {item.label ? (
                            <p
                              className="mt-1 w-full break-words text-[10px] leading-snug sm:text-[11px]"
                              style={{ color: NAVY }}
                            >
                              {item.label}
                            </p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Quote footer */}
            <div className="mt-[6px] shrink-0 bg-white px-3 pb-3 pt-0 sm:px-4 sm:pb-4">
              <div
                className="flex flex-col gap-2 rounded-[10px] px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-3"
                style={{ backgroundColor: "#FFF5F0" }}
              >
                <div className="flex min-w-0 flex-1 items-start gap-2 sm:items-center">
                  <span
                    className="mt-[-2px] shrink-0 text-[26px] font-bold leading-none sm:text-[30px]"
                    style={{ color: ACCENT }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p
                    className="min-w-0 text-[11px] leading-[1.5] sm:text-[12px] sm:leading-[1.55]"
                    style={{ color: "#333333" }}
                  >
                    {details.quote}
                  </p>
                </div>
                <p
                  className={`${signatureFont.className} shrink-0 self-end whitespace-nowrap text-right text-[20px] leading-none sm:self-center sm:text-[24px]`}
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
