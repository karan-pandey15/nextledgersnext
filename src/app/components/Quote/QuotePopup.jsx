"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { POPUP_REGIONS } from "../RegionSelect/regionData";

const ORANGE = "#F58220";
const NAVY = "#0F274A";

const COUNTRIES = POPUP_REGIONS.map((r) => ({
  code: r.code,
  name: r.name,
}));

function IconDocLock({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 3.5h5.2L17.5 8v12.5H8V3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.2 3.5V8H17.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="10" y="12.2" width="4.2" height="3.4" rx="0.6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M11.1 12.2v-1.1a1 1 0 0 1 2 0v1.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUser({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.5 19.2c1.4-3 3.7-4.5 6.5-4.5s5.1 1.5 6.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBriefcase({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconMail({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="m5.5 8 6.5 5 6.5-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 3.8h2.4l1.2 3.2-1.5 1.1a12.5 12.5 0 0 0 5.6 5.6l1.1-1.5 3.2 1.2v2.4c0 .9-.7 1.7-1.6 1.8A15.7 15.7 0 0 1 3.8 5.4c.1-.9.9-1.6 1.8-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGlobe({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.8 12h16.4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 3.8c2.2 2.4 3.3 5.1 3.3 8.2S14.2 18 12 20.2C9.8 18 8.7 15.1 8.7 12S9.8 6.2 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function IconChat({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 5.5h14A1.5 1.5 0 0 1 20.5 7v8A1.5 1.5 0 0 1 19 16.5H9.5L5 20v-3.5A1.5 1.5 0 0 1 3.5 15V7A1.5 1.5 0 0 1 5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2 5.5 6v5.4c0 4.2 2.9 8.1 6.5 9.1 3.6-1 6.5-4.9 6.5-9.1V6L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="m9.1 12 2 2 3.9-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconClock24({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <text
        x="12"
        y="14.5"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="currentColor"
        fontFamily="system-ui, sans-serif"
      >
        24
      </text>
    </svg>
  );
}

function IconTeam({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="9.2" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 18.5c.9-2.6 2.8-4 5.2-4s4.3 1.4 5.2 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.2 14.8c1.5-.4 3-.2 4.2 1.2.7.8 1.1 1.7 1.3 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSend({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 11.2 19.2 4.5 12.8 19.5l-1.8-6.2-6.5-2.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m11 13.3 8.2-8.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function FieldIcon({ children }) {
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-[#FFF1E6] text-[#F58220] sm:h-10 sm:w-10">
      {children}
    </div>
  );
}

function FormField({ icon, label, required, children }) {
  return (
    <div className="flex items-start gap-2.5 sm:gap-3">
      <FieldIcon>{icon}</FieldIcon>
      <div className="min-w-0 flex-1">
        <label
          className="mb-1 block text-[12px] font-bold leading-tight sm:mb-1.5 sm:text-[14px]"
          style={{ color: NAVY }}
        >
          {label}
          {required ? <span className="text-[#E11D48]">*</span> : null}
        </label>
        {children}
      </div>
    </div>
  );
}

const inputClass =
  "w-full h-[38px] sm:h-[42px] rounded-[8px] border border-[#E5E7EB] bg-white px-3 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]/25";

const FEATURES = [
  {
    title: "100% Secure",
    text: "Your information is safe with us",
    icon: IconShield,
  },
  {
    title: "Quick Response",
    text: "We reply within 24 hours",
    icon: IconClock24,
  },
  {
    title: "Expert Team",
    text: "Experienced professionals ready to help",
    icon: IconTeam,
  },
  {
    title: "Global Support",
    text: "Serving businesses worldwide",
    icon: IconGlobe,
  },
];

const INITIAL = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  message: "",
  agree: false,
};

export default function QuotePopup({ isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(INITIAL);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form wiring not finished yet — UI only for now
    onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="sync">
      {isOpen ? (
        <motion.div
          key="quote-popup"
          className="fixed inset-0 z-[110] flex items-end justify-center p-0 sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-[#0B1C33]/50 backdrop-blur-[3px]"
            aria-label="Close quote form"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-popup-title"
            className="relative z-10 flex w-full max-h-[min(86vh,720px)] max-w-[920px] flex-col overflow-hidden rounded-t-[18px] bg-white shadow-[0_28px_70px_rgba(15,39,74,0.28)] sm:rounded-[22px]"
            initial={{ opacity: 0, y: 64, scale: 0.94 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 340,
                damping: 28,
                mass: 0.85,
              },
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.96,
              transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
            }}
          >
            <button
              type="button"
              onClick={onClose}
              className="group absolute top-3 right-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#F58220] hover:bg-[#FFF0E4] sm:top-4 sm:right-4 sm:h-9 sm:w-9"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-black transition-colors duration-200 group-hover:text-[#F58220]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <form
              onSubmit={handleSubmit}
              className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain"
            >
              <div className="px-4 pb-4 pt-6 sm:px-8 sm:pb-5 sm:pt-8 lg:px-10">
                <motion.div
                  className="mx-auto max-w-[620px] text-center"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.35, ease: "easeOut" }}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F58220] sm:h-12 sm:w-12">
                    <IconDocLock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h2
                    id="quote-popup-title"
                    className="mt-2.5 text-[22px] font-bold leading-[1.15] tracking-[-0.01em] sm:mt-3.5 sm:text-[32px] lg:text-[36px]"
                    style={{ color: NAVY }}
                  >
                    Get a{" "}
                    <span className="relative inline-block" style={{ color: ORANGE }}>
                      Quote
                      <span
                        className="absolute left-[6%] -bottom-1 h-[2.5px] w-[88%] rounded-full"
                        style={{ backgroundColor: ORANGE }}
                        aria-hidden="true"
                      />
                    </span>{" "}
                    Now
                  </h2>

                  <p className="mt-2 text-[12px] leading-5 text-[#4B5563] sm:mt-3 sm:text-[14px] sm:leading-6">
                    Fill out the form below and our team will get back to you within{" "}
                    <span className="relative inline-block font-semibold" style={{ color: ORANGE }}>
                      24 hours.
                      <span
                        className="absolute left-1/2 -bottom-0.5 h-[2px] w-[88%] -translate-x-1/2 rounded-full sm:-bottom-1 sm:h-[2.5px]"
                        style={{ backgroundColor: ORANGE }}
                        aria-hidden="true"
                      />
                    </span>
                  </p>
                </motion.div>

                <motion.div
                  className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:mt-6 sm:gap-y-4 md:grid-cols-2 lg:gap-x-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16, duration: 0.4, ease: "easeOut" }}
                >
                  <FormField icon={<IconUser />} label="Full Name" required>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField icon={<IconBriefcase />} label="Company Name" required>
                    <input
                      type="text"
                      required
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField icon={<IconMail />} label="Business Email Address" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Example: user@website.com"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField icon={<IconPhone />} label="Business Phone/Mobile" required>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Mobile Number"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField icon={<IconGlobe />} label="Choose Your Country" required>
                    <div className="relative">
                      <select
                        required
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className={`${inputClass} cursor-pointer appearance-none pr-9 ${
                          form.country ? "text-[#0F274A]" : "text-[#9CA3AF]"
                        }`}
                      >
                        <option value="" disabled>
                          - Select -
                        </option>
                        {COUNTRIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF]">
                        ▼
                      </span>
                    </div>
                  </FormField>

                  <FormField icon={<IconChat />} label="Any Questions?">
                    <input
                      type="text"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Type your message here..."
                      className={inputClass}
                    />
                  </FormField>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.35, ease: "easeOut" }}
                >
                  <label className="mt-3 flex cursor-pointer select-none items-start gap-2.5 sm:mt-3.5">
                    <input
                      type="checkbox"
                      required
                      checked={form.agree}
                      onChange={(e) => update("agree", e.target.checked)}
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#D1D5DB] accent-[#F58220] text-[#F58220]"
                    />
                    <span className="text-[11px] leading-4 text-[#4B5563] sm:text-[13px] sm:leading-5">
                      I have read and agree to the{" "}
                      <Link href="/terms" className="font-semibold hover:underline" style={{ color: ORANGE }}>
                        Terms and Conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="font-semibold hover:underline" style={{ color: ORANGE }}>
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="mx-auto mt-3.5 flex h-[44px] w-full max-w-[420px] cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-[#F58220] text-[12px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_8px_20px_rgba(245,130,32,0.28)] transition-colors hover:bg-[#e57416] sm:mt-4 sm:h-[48px] sm:max-w-[480px] sm:text-[14px]"
                  >
                    <IconSend className="h-[15px] w-[15px]" />
                    SUBMIT FORM
                  </motion.button>
                </motion.div>
              </div>

              <div className="hidden px-4 pb-4 pt-0 sm:block sm:px-8 sm:pb-5 lg:px-10">
                <div className="rounded-[12px] bg-[#FFF7F0] px-4 py-3.5 sm:rounded-[14px] sm:px-5 sm:py-4 lg:px-6">
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-0">
                    {FEATURES.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <div
                          key={feature.title}
                          className={`flex items-start gap-2.5 ${
                            index > 0 ? "lg:border-l lg:border-[#E8D5C4] lg:pl-5" : ""
                          } ${index < FEATURES.length - 1 ? "lg:pr-5" : ""}`}
                        >
                          <div className="mt-0.5 shrink-0 text-[#F58220]">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p
                              className="text-[13px] font-bold leading-tight sm:text-[14px]"
                              style={{ color: NAVY }}
                            >
                              {feature.title}
                            </p>
                            <p className="mt-0.5 text-[11px] leading-[1.35] text-[#6B7280] sm:text-[12px]">
                              {feature.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
