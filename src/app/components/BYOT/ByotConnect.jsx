"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { HomeLogoImg } from "@/app/lib/homePageLogos";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const WHATSAPP_URL = "https://wa.me/918285285223";

const CONTACT_WAYS = [
  {
    title: "Call Us",
    logo: 1,
    primary: "+1 (888) 552-0055",
    secondary: "Mon – Fri | 9 AM – 6 PM EST",
    href: "tel:+18885520055",
  },
  {
    title: "Email Us",
    logo: 25,
    primary: "hello@nextledgers.com",
    secondary: "We reply within 24 hours",
    href: "mailto:hello@nextledgers.com",
  },
  {
    title: "Live Chat",
    logo: 3,
    primary: "Chat with our Team",
    secondary: "We're Online Now",
    href: WHATSAPP_URL,
    online: true,
    external: true,
  },
  {
    title: "Schedule a Call",
    logo: 5,
    primary: "Book a free consultation with our specialists",
    secondary: "Contact us to book a call",
    href: "/contact",
  },
];

const ROLES = [
  "Accountant",
  "Bookkeeper",
  "Payroll Specialist",
  "Tax Professional",
  "Management Accountant",
  "Virtual CFO",
  "Admin & Back Office",
  "Other",
];

const INITIAL = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  role: "",
  message: "",
  agree: false,
};

const inputClass =
  "h-[48px] w-full rounded-[12px] border border-[#E2E8F0] bg-white px-4 text-[13px] text-[#0F274A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] hover:border-[#CBD5E1] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/15";

const textareaClass =
  "min-h-[120px] w-full resize-none rounded-[12px] border border-[#E2E8F0] bg-white px-4 py-3.5 text-[13px] text-[#0F274A] outline-none transition-all duration-200 placeholder:text-[#94A3B8] hover:border-[#CBD5E1] focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/15 sm:col-span-2";

export default function ByotConnect() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return;
    setSent(true);
  };

  return (
    <section id="byot-connect" className="scroll-mt-24 w-full bg-white pb-10 pt-8 sm:pb-12 sm:pt-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* ── Left ── */}
          <div className="flex h-full min-h-0 flex-col">
            <div className="mb-3 flex h-[3px] w-28 overflow-hidden rounded-full">
              <span className="w-1/2" style={{ background: ORANGE }} />
              <span className="w-1/2" style={{ background: NAVY }} />
            </div>

            <h2
              className="text-[28px] font-bold leading-[1.12] sm:text-[34px] lg:text-[40px]"
              style={{ color: NAVY }}
            >
              Let&apos;s Connect
            </h2>
            <p
              className="mt-1 text-[26px] font-bold leading-tight sm:text-[32px] lg:text-[38px]"
              style={{ color: ORANGE }}
            >
              We&apos;re Here to Help!
            </p>
            <p
              className="mt-3 max-w-lg text-[14px] leading-relaxed sm:text-[15px]"
              style={{ color: GREY }}
            >
              Whether you&apos;re ready to build your offshore finance team or
              just exploring options, our specialists are here to help.{" "}
              <span className="font-bold" style={{ color: NAVY }}>
                Let&apos;s start a conversation!
              </span>
            </p>

            <div className="mt-7 grid grid-cols-2 gap-x-3 gap-y-5 border-t border-[#E8ECF0] pt-6 sm:grid-cols-4 sm:gap-x-0">
              {CONTACT_WAYS.map(
                (
                  {
                    title,
                    logo,
                    primary,
                    secondary,
                    href,
                    online,
                    external,
                    linkStyle,
                  },
                  index
                ) => {
                  const Wrapper = external ? "a" : Link;
                  const extraProps = external
                    ? { href, target: "_blank", rel: "noopener noreferrer" }
                    : { href };

                  return (
                    <Wrapper
                      key={title}
                      {...extraProps}
                      className={`flex flex-col items-start px-1 sm:px-2.5 ${
                        index > 0 ? "sm:border-l sm:border-[#E8ECF0]" : ""
                      }`}
                    >
                      <span className="mb-2.5 flex h-11 w-11 items-center justify-center">
                        <HomeLogoImg n={logo} />
                      </span>
                      <p className="text-[12px] font-bold" style={{ color: NAVY }}>
                        {title}
                      </p>
                      <p
                        className="mt-1 text-[11px] font-semibold leading-snug sm:text-[12px]"
                        style={{ color: NAVY }}
                      >
                        {primary}
                      </p>
                      {online ? (
                        <p
                          className="mt-1.5 flex items-center gap-1.5 text-[11px] font-semibold"
                          style={{ color: NAVY }}
                        >
                          <span className="relative inline-flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
                          </span>
                          {secondary}
                        </p>
                      ) : linkStyle ? (
                        <p className="mt-1 text-[11px] font-medium text-[#2563EB] underline underline-offset-2">
                          {secondary}
                        </p>
                      ) : (
                        <p className="mt-1 text-[11px] leading-snug" style={{ color: GREY }}>
                          {secondary}
                        </p>
                      )}
                    </Wrapper>
                  );
                }
              )}
            </div>

            <div className="mt-auto flex flex-col items-start gap-3 rounded-[12px] border border-[#FFD8B8] bg-[#FFF4EA] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <div className="flex items-start gap-3 sm:items-center">
                <span className="h-8 w-8 shrink-0">
                  <HomeLogoImg n={4} />
                </span>
                <div>
                  <p className="text-[14px] font-bold" style={{ color: NAVY }}>
                    Not sure where to start?
                  </p>
                  <p className="mt-0.5 text-[12px] leading-snug" style={{ color: GREY }}>
                    Tell us about your requirements and we&apos;ll suggest the
                    best solution.
                  </p>
                </div>
              </div>
              <a
                href="tel:+18885520055"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] border-2 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide transition hover:bg-[#FF6A00] hover:text-white"
                style={{ color: ORANGE, borderColor: ORANGE }}
              >
                Talk to an Expert →
              </a>
            </div>
          </div>

          {/* ── Right: full-width form (no image) ── */}
          <form
            id="byot-connect-form"
            onSubmit={onSubmit}
            className="relative flex h-full w-full flex-col justify-center rounded-[18px] bg-white p-5 sm:p-7 lg:p-8"
          >
            <div className="mb-1 flex items-center justify-center gap-2.5">
              <span className="flex items-center gap-1">
                <span className="h-[2px] w-8 rounded-full" style={{ background: ORANGE }} />
                <span
                  className="inline-block h-1.5 w-1.5 rotate-45"
                  style={{ background: ORANGE }}
                />
              </span>
              <h3
                className="text-center text-[17px] font-bold sm:text-[19px]"
                style={{ color: NAVY }}
              >
                Send Us a Message
              </h3>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block h-1.5 w-1.5 rotate-45"
                  style={{ background: ORANGE }}
                />
                <span className="h-[2px] w-8 rounded-full" style={{ background: ORANGE }} />
              </span>
            </div>
            <p className="mb-6 text-center text-[12px] sm:text-[13px]" style={{ color: GREY }}>
              Fill out the form and we&apos;ll get back to you shortly.
            </p>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              <input
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={onChange}
                placeholder="Full Name*"
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Work Email*"
                required
                className={inputClass}
              />

              <input
                name="company"
                type="text"
                value={form.company}
                onChange={onChange}
                placeholder="Company Name*"
                required
                className={`${inputClass} sm:col-span-2`}
              />

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                placeholder="Phone Number"
                className={inputClass}
              />
              <select
                name="role"
                value={form.role}
                onChange={onChange}
                className={`${inputClass} ${!form.role ? "text-[#94A3B8]" : ""}`}
              >
                <option value="">Your Role</option>
                {ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="How can we help you?*"
                required
                rows={4}
                className={textareaClass}
              />

              <label
                className="flex items-start gap-2.5 text-[12px] leading-snug sm:col-span-2"
                style={{ color: GREY }}
              >
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#FF6A00]"
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2563EB] underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#2563EB] underline"
                  >
                    Terms of Service
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#FF6A00] px-4 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(255,106,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E85E00] hover:shadow-[0_10px_24px_rgba(255,106,0,0.34)] sm:col-span-2"
              >
                {sent ? "Message Sent" : "Send Message"}
                <Send className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
