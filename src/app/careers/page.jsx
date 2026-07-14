"use client";

import { useState } from "react";
import Link from "next/link";
import TopAnnouncementBar from "../components/TopHeader/TopAnnouncementBar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ArtificialIntelligence from "../components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "../components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

const DEPARTMENTS = [
  "Accounting & Bookkeeping",
  "Tax & Compliance",
  "Payroll",
  "Client Success",
  "Operations",
  "Technology / IT",
  "Sales & Business Development",
  "Other",
];

const EXPERIENCE_LEVELS = [
  "Fresher / Intern",
  "1–2 years",
  "3–5 years",
  "5–8 years",
  "8+ years",
];

const INITIAL = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  department: "",
  experience: "",
  linkedin: "",
  message: "",
  agree: false,
};

function IconBriefcaseHero({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 12.5h17" stroke="currentColor" strokeWidth="1.7" />
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

function IconPin({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s6-5.2 6-10.2A6 6 0 0 0 6 10.8C6 15.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconLayers({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m12 3.5 8 4.5-8 4.5-8-4.5 8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m4 12.2 8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m4 16.2 8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconClock({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4.5l3 1.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconLink({ className = "w-[18px] h-[18px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 0 7.07 0l1.76-1.76a5 5 0 0 0-7.07-7.07L10.5 5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.07 0L5.17 12.76a5 5 0 0 0 7.07 7.07L13.5 18.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
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
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#FFF1E6] text-[#FF6A00]"
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
  "w-full h-[46px] sm:h-[48px] rounded-[10px] border border-[#E5E7EB] bg-white px-3.5 text-[13px] sm:text-[14px] text-[#0F274A] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/15";

export default function CareersPage() {
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
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1E6] text-[#FF6A00] sm:h-14 sm:w-14">
                <IconBriefcaseHero className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <h1
                className="mt-3.5 text-[26px] font-bold leading-[1.15] tracking-[-0.01em] sm:mt-4 sm:text-[32px] lg:text-[36px]"
                style={{ color: NAVY }}
              >
                Join <span style={{ color: ORANGE }}>Our Team</span>
              </h1>

              <p className="mt-2.5 text-[13px] leading-6 text-[#4B5563] sm:mt-3 sm:text-[14px]">
                Share your details below and our talent team will review your profile within{" "}
                <span className="relative inline-block font-semibold" style={{ color: ORANGE }}>
                  48 hours.
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
                Thank you — we&apos;ve received your application and will get back to you soon.
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

              <FormField icon={<IconMail />} label="Email Address" required>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="Example: you@email.com"
                  className={inputClass}
                />
              </FormField>

              <FormField icon={<IconPhone />} label="Phone / Mobile" required>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Mobile Number"
                  className={inputClass}
                />
              </FormField>

              <FormField icon={<IconPin />} label="Current Location" required>
                <input
                  type="text"
                  required
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  placeholder="City, Country"
                  className={inputClass}
                />
              </FormField>

              <FormField icon={<IconLayers />} label="Department of Interest" required>
                <div className="relative">
                  <select
                    required
                    value={form.department}
                    onChange={(e) => update("department", e.target.value)}
                    className={`${inputClass} cursor-pointer appearance-none pr-9 ${
                      form.department ? "text-[#0F274A]" : "text-[#9CA3AF]"
                    }`}
                  >
                    <option value="" disabled>
                      - Select -
                    </option>
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-[#9CA3AF]">
                    ▼
                  </span>
                </div>
              </FormField>

              <FormField icon={<IconClock />} label="Years of Experience" required>
                <div className="relative">
                  <select
                    required
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                    className={`${inputClass} cursor-pointer appearance-none pr-9 ${
                      form.experience ? "text-[#0F274A]" : "text-[#9CA3AF]"
                    }`}
                  >
                    <option value="" disabled>
                      - Select -
                    </option>
                    {EXPERIENCE_LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-[#9CA3AF]">
                    ▼
                  </span>
                </div>
              </FormField>

              <FormField icon={<IconLink />} label="LinkedIn / Portfolio URL">
                <input
                  type="url"
                  value={form.linkedin}
                  onChange={(e) => update("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/you"
                  className={inputClass}
                />
              </FormField>

              <FormField icon={<IconChat />} label="Why Next Ledgers?">
                <input
                  type="text"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us briefly about yourself..."
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
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-[#D1D5DB] accent-[#FF6A00]"
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
              className="mx-auto mt-5 flex h-[48px] w-full max-w-[480px] cursor-pointer items-center justify-center gap-2.5 rounded-[10px] bg-[#FF6A00] text-[13px] font-bold tracking-[0.08em] text-white uppercase shadow-[0_8px_20px_rgba(255, 106, 0,0.28)] transition-colors hover:bg-[#e57416] sm:mt-6 sm:h-[52px] sm:text-[14px]"
            >
              <IconSend className="h-[15px] w-[15px]" />
              SUBMIT APPLICATION
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
