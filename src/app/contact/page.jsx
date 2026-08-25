"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNavbar from "../components/SiteNavbar/SiteNavbar";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import { POPUP_REGIONS } from "../components/RegionSelect/regionData";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { FORM_LOGOS, FORM_TRUST_LOGOS, HomeLogoImg } from "@/app/lib/homePageLogos";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

const COUNTRIES = POPUP_REGIONS.map((r) => ({
  code: r.code,
  name: r.name,
}));

const INITIAL = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  message: "",
  agree: false,
};

function IconSend({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 19.5 20 12 4.5 4.5 7.8 12l-3.3 7.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M7.8 12H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function FormField({ logo, label, required, children }) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9" aria-hidden="true">
          <HomeLogoImg n={logo} alt="" />
        </span>
        <label className="text-[13px] font-bold sm:text-[14px]" style={{ color: NAVY }}>
          {label}
          {required ? <span className="ml-0.5 text-[#EF4444]">*</span> : null}
        </label>
      </div>
      {children}
    </div>
  );
}

const inputClass =
  "w-full h-[46px] sm:h-[48px] rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/15";

export default function ContactPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

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
    setSubmitted(true);
    setForm(INITIAL);
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <SiteNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section className="relative w-full flex-1 bg-[linear-gradient(180deg,#FFF9F5_0%,#FFFFFF_42%,#FFFFFF_100%)]">
        <div className="mx-auto max-w-[920px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] border border-[#ECEFF3] bg-white px-5 py-8 shadow-[0_16px_48px_rgba(15,39,74,0.08)] sm:rounded-[22px] sm:px-8 sm:py-10 lg:px-10"
          >
            <div className="mx-auto max-w-[620px] text-center">
              <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16">
                <HomeLogoImg n={FORM_LOGOS.header} alt="" />
              </div>

              <h1
                className="mt-3.5 text-[26px] font-bold leading-[1.15] tracking-[-0.01em] sm:mt-4 sm:text-[32px] lg:text-[36px]"
                style={{ color: NAVY }}
              >
                Get a <span style={{ color: ORANGE }}>Quote Now</span>
              </h1>

              <p className="mt-2.5 text-[13px] leading-6 text-[#4B5563] sm:mt-3 sm:text-[14px]">
                Fill out the form below and our team will get back to you within{" "}
                <span className="relative inline-block font-semibold" style={{ color: ORANGE }}>
                  24 hours.
                  <span
                    className="absolute left-1/2 -bottom-1 h-[2.5px] w-[88%] -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: ORANGE }}
                    aria-hidden="true"
                  />
                </span>
              </p>
            </div>

            {submitted ? (
              <p className="mt-8 rounded-[12px] bg-[#FFF7F0] px-4 py-4 text-center text-[14px] font-semibold text-[#0F274A]">
                Thank you — we&apos;ve received your message and will reply within 24 hours.
              </p>
            ) : null}

            <div className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:mt-8 md:grid-cols-2 lg:gap-x-8">
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
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-[#9CA3AF]">
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
            </div>

            <div className="mt-3 sm:mt-4">
              <label className="flex cursor-pointer items-start gap-2.5 select-none">
                <input
                  type="checkbox"
                  required
                  aria-required="true"
                  checked={form.agree}
                  onChange={(e) => update("agree", e.target.checked)}
                  className={`mt-0.5 h-4 w-4 cursor-pointer rounded accent-[#FF6A00] ${
                    agreeError ? "outline outline-1 outline-[#E11D48]" : "border-[#D1D5DB]"
                  }`}
                />
                <span className="text-[12px] leading-5 text-[#4B5563] sm:text-[13px]">
                  I have read and agree to the{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
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
                    className="font-semibold hover:underline"
                    style={{ color: ORANGE }}
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {agreeError ? (
                <p className="mt-1.5 pl-6 text-[12px] font-medium text-[#E11D48]">
                  Please agree to the Terms and Conditions and Privacy Policy to continue.
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={!form.agree}
              className={`mx-auto mt-5 flex h-[48px] w-full max-w-[480px] items-center justify-center gap-2.5 rounded-[10px] text-[13px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_8px_20px_rgba(255, 106, 0,0.28)] transition-colors sm:mt-6 sm:h-[52px] sm:text-[14px] ${
                form.agree
                  ? "cursor-pointer bg-[#FF6A00] hover:bg-[#e57416]"
                  : "cursor-not-allowed bg-[#FF6A00]/45"
              }`}
            >
              <IconSend className="h-[15px] w-[15px]" />
              SUBMIT FORM
            </button>

            <div className="mt-6 sm:mt-7">
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
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
