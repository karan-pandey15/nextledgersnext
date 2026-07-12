"use client";

import { useState } from "react";
import Link from "next/link";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import { POPUP_REGIONS } from "../components/RegionSelect/regionData";

const ORANGE = "#F58220";
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
      <path d="M8 10h8M8 13h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

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

function FormField({ icon, label, required, children }) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-2">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#FFF1E6] text-[#F58220]"
          aria-hidden="true"
        >
          {icon}
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
  "w-full h-[46px] sm:h-[48px] rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#F58220] focus:ring-2 focus:ring-[#F58220]/15";

export default function ContactPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(INITIAL);
  };

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1A1A1A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section className="relative w-full flex-1 bg-[linear-gradient(180deg,#FFF9F5_0%,#FFFFFF_42%,#FFFFFF_100%)]">
        <div className="mx-auto max-w-[920px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <form
            onSubmit={handleSubmit}
            className="rounded-[18px] border border-[#ECEFF3] bg-white px-5 py-8 shadow-[0_16px_48px_rgba(15,39,74,0.08)] sm:rounded-[22px] sm:px-8 sm:py-10 lg:px-10"
          >
            <div className="mx-auto max-w-[620px] text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F58220] sm:h-14 sm:w-14">
                <IconDocLock className="h-6 w-6 sm:h-7 sm:w-7" />
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
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-[#9CA3AF]">
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

            <label className="mt-3 flex cursor-pointer items-start gap-2.5 select-none sm:mt-4">
              <input
                type="checkbox"
                required
                checked={form.agree}
                onChange={(e) => update("agree", e.target.checked)}
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#D1D5DB] accent-[#F58220]"
              />
              <span className="text-[12px] leading-5 text-[#4B5563] sm:text-[13px]">
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
              className="mx-auto mt-5 flex h-[48px] w-full max-w-[480px] cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-[#F58220] text-[13px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_8px_20px_rgba(245,130,32,0.28)] transition-colors hover:bg-[#e57416] sm:mt-6 sm:h-[52px] sm:text-[14px]"
            >
              <IconSend className="h-[15px] w-[15px]" />
              SUBMIT FORM
            </button>
          </form>
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
