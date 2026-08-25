"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { POPUP_REGIONS } from "../RegionSelect/regionData";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { FORM_LOGOS, FORM_TRUST_LOGOS, HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

const COUNTRIES = POPUP_REGIONS.map((r) => ({
  code: r.code,
  name: r.name,
}));

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

function FormField({ logo, label, required, children }) {
  return (
    <div className="flex items-start gap-2.5 sm:gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
        <HomeLogoImg n={logo} alt="" />
      </span>
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
  "w-full h-[38px] sm:h-[42px] rounded-[8px] border border-[#E5E7EB] bg-white px-3 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00]/25";

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
  const [agreeError, setAgreeError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setForm(INITIAL);
    setAgreeError(false);

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const update = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "agree" && value) setAgreeError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) {
      setAgreeError(true);
      return;
    }
    setAgreeError(false);
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
              className="group absolute top-3 right-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-white transition-all duration-200 hover:border-[#FF6A00] hover:bg-[#FFF0E4] sm:top-4 sm:right-4 sm:h-9 sm:w-9"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-black transition-colors duration-200 group-hover:text-[#FF6A00]"
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
                  <div className="mx-auto h-10 w-10 sm:h-12 sm:w-12">
                    <HomeLogoImg n={FORM_LOGOS.header} alt="" />
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
                  <FormField logo={FORM_LOGOS.fullName} label="Full Name" required>
                    <input
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField logo={FORM_LOGOS.company} label="Company Name" required>
                    <input
                      type="text"
                      required
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      placeholder="Enter your company name"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField logo={FORM_LOGOS.email} label="Business Email Address" required>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="Example: user@website.com"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField logo={FORM_LOGOS.phone} label="Business Phone/Mobile" required>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Mobile Number"
                      className={inputClass}
                    />
                  </FormField>

                  <FormField logo={FORM_LOGOS.country} label="Choose Your Country" required>
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

                  <FormField logo={FORM_LOGOS.message} label="Any Questions?">
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
                  <div className="mt-3 sm:mt-3.5">
                    <label className="flex cursor-pointer select-none items-start gap-2.5">
                      <input
                        type="checkbox"
                        required
                        aria-required="true"
                        checked={form.agree}
                        onChange={(e) => update("agree", e.target.checked)}
                        className={`mt-0.5 h-4 w-4 cursor-pointer rounded accent-[#FF6A00] text-[#FF6A00] ${
                          agreeError ? "border-[#E11D48] outline outline-1 outline-[#E11D48]" : "border-[#D1D5DB]"
                        }`}
                      />
                      <span className="text-[11px] leading-4 text-[#4B5563] sm:text-[13px] sm:leading-5">
                        I have read and agree to the{" "}
                        <Link
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-semibold hover:underline"
                          style={{ color: ORANGE }}
                        >
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-semibold hover:underline"
                          style={{ color: ORANGE }}
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {agreeError ? (
                      <p className="mt-1.5 pl-6 text-[11px] font-medium text-[#E11D48] sm:text-[12px]">
                        Please agree to the Terms and Conditions and Privacy Policy to continue.
                      </p>
                    ) : null}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!form.agree}
                    whileHover={form.agree ? { scale: 1.015 } : undefined}
                    whileTap={form.agree ? { scale: 0.98 } : undefined}
                    className={`mx-auto mt-3.5 flex h-[44px] w-full max-w-[420px] items-center justify-center gap-2.5 rounded-[10px] text-[12px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_8px_20px_rgba(255, 106, 0,0.28)] transition-colors sm:mt-4 sm:h-[48px] sm:max-w-[480px] sm:text-[14px] ${
                      form.agree
                        ? "cursor-pointer bg-[#FF6A00] hover:bg-[#e57416]"
                        : "cursor-not-allowed bg-[#FF6A00]/45"
                    }`}
                  >
                    <IconSend className="h-[15px] w-[15px]" />
                    SUBMIT FORM
                  </motion.button>
                </motion.div>
              </div>

              <div className="hidden px-4 pb-4 pt-0 sm:block sm:px-8 sm:pb-5 lg:px-10">
                <div className="rounded-[12px] bg-[#FFF7F0] px-4 py-3.5 sm:rounded-[14px] sm:px-5 sm:py-4 lg:px-6">
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-0">
                    {FORM_TRUST_LOGOS.map((feature, index) => {
                      return (
                        <div
                          key={feature.title}
                          className={`flex items-center gap-3 ${
                            index > 0 ? "lg:border-l lg:border-[#E8D5C4] lg:pl-5" : ""
                          } ${index < FORM_TRUST_LOGOS.length - 1 ? "lg:pr-5" : ""}`}
                        >
                          <div className="h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                            <HomeLogoImg n={feature.logo} />
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
