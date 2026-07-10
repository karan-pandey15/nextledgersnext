"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
        strokeLinecap="round"
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
    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[10px] bg-[#FFF1E6] text-[#F58220] flex items-center justify-center flex-shrink-0">
      {children}
    </div>
  );
}

function FormField({ icon, label, required, children }) {
  return (
    <div className="flex items-start gap-3">
      <FieldIcon>{icon}</FieldIcon>
      <div className="min-w-0 flex-1">
        <label className="block font-bold text-[13px] sm:text-[14px] leading-tight mb-1.5" style={{ color: NAVY }}>
          {label}
          {required ? <span className="text-[#E11D48]">*</span> : null}
        </label>
        {children}
      </div>
    </div>
  );
}

const inputClass =
  "w-full h-[42px] sm:h-[44px] rounded-[8px] border border-[#E5E7EB] bg-white px-3.5 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220]/25";

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

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5">
      <button
        type="button"
        className="absolute inset-0 bg-[#0B1C33]/45 backdrop-blur-[2px]"
        aria-label="Close quote form"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-popup-title"
        className="relative z-10 w-full max-w-[920px] max-h-[min(94vh,860px)] overflow-y-auto rounded-[18px] sm:rounded-[22px] bg-white shadow-[0_24px_64px_rgba(15,39,74,0.22)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="group absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-[8px] border border-[#E5E7EB] bg-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#FFF0E4] hover:border-[#F58220]"
          aria-label="Close"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-black group-hover:text-[#F58220] transition-colors duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="px-5 sm:px-8 lg:px-10 pt-8 sm:pt-9 pb-5 sm:pb-6">
            <div className="text-center max-w-[620px] mx-auto">
              <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFF1E6] text-[#F58220] flex items-center justify-center">
                <IconDocLock className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <h2
                id="quote-popup-title"
                className="mt-3.5 sm:mt-4 font-bold text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.15] tracking-[-0.01em]"
                style={{ color: NAVY }}
              >
                Get a <span style={{ color: ORANGE }}>Quote Now</span>
              </h2>

              <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] leading-6 text-[#4B5563]">
                Fill out the form below and our team will get back to you
                <br />
                within{" "}
                <span className="relative inline-block font-semibold" style={{ color: ORANGE }}>
                  24 hours.
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2.5px] w-[88%] rounded-full"
                    style={{ backgroundColor: ORANGE }}
                    aria-hidden="true"
                  />
                </span>
              </p>
            </div>

            <div className="mt-7 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-5">
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
                    className={`${inputClass} appearance-none pr-9 cursor-pointer ${
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
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-xs">
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
            </div>

            <label className="mt-2.5 sm:mt-3 flex items-start gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                checked={form.agree}
                onChange={(e) => update("agree", e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-[#D1D5DB] text-[#F58220] accent-[#F58220] cursor-pointer"
              />
              <span className="text-[12px] sm:text-[13px] leading-5 text-[#4B5563]">
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

            <button
              type="submit"
              className="mt-4 sm:mt-5 w-full max-w-[420px] sm:max-w-[480px] mx-auto h-[48px] sm:h-[52px] rounded-[10px] bg-[#F58220] hover:bg-[#e57416] text-white font-bold text-[13px] sm:text-[14px] tracking-[0.08em] uppercase flex items-center justify-center gap-2.5 cursor-pointer transition-colors shadow-[0_8px_20px_rgba(245,130,32,0.28)]"
            >
              <IconSend className="w-[15px] h-[15px]" />
              SUBMIT FORM
            </button>
          </div>

          <div className="px-5 sm:px-8 lg:px-10 pb-5 sm:pb-6 pt-1">
            <div className="bg-[#FFF7F0] rounded-[12px] sm:rounded-[14px] px-4 sm:px-5 lg:px-6 pt-5 sm:pt-6 pb-5 sm:pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-0">
                {FEATURES.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className={`flex items-start gap-3 ${
                        index > 0 ? "lg:border-l lg:border-[#E8D5C4] lg:pl-5" : ""
                      } ${index < FEATURES.length - 1 ? "lg:pr-5" : ""}`}
                    >
                      <div className="text-[#F58220] flex-shrink-0 mt-0.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[14px] sm:text-[15px] leading-tight" style={{ color: NAVY }}>
                          {feature.title}
                        </p>
                        <p className="mt-1 text-[12px] sm:text-[13px] leading-[1.4] text-[#6B7280]">
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
      </div>
    </div>,
    document.body
  );
}
