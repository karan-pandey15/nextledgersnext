"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Calendar,
  Clock3,
  Globe2,
  Headphones,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Users,
} from "lucide-react";

// If you already have this in your project, keep your existing import instead:
// import { BRAND_ORANGE } from "@/app/lib/brandColors";
const BRAND_ORANGE = "#FF6A00";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

// Free-to-use stock photo (Unsplash) — swap for your own asset in /public whenever you like.
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?fm=jpg&q=80&w=900&auto=format&fit=crop";

const CONTACT_WAYS = [
  {
    title: "Call Us",
    icon: Phone,
    primary: "+1 (302) 200-5801",
    secondary: "Mon – Fri | 9 AM – 6 PM EST",
    href: "tel:+13022005801",
  },
  {
    title: "Email Us",
    icon: Mail,
    primary: "hello@nextledgers.com",
    secondary: "We reply within 24 hours",
    href: "mailto:hello@nextledgers.com",
  },
  {
    title: "Live Chat",
    icon: MessageCircle,
    primary: "Chat with our team on our website",
    secondary: "We're Online Now",
    href: "#byot-connect",
    online: true,
  },
  {
    title: "Schedule a Call",
    icon: Calendar,
    primary: "Book a free consultation with our specialists",
    secondary: "calendly.com/nextledgers",
    href: "https://calendly.com/nextledgers",
    external: true,
    linkStyle: true,
  },
];

const TRUST = [
  { title: "ISO 27001 Certified", sub: "Your data is safe with us.", icon: ShieldCheck },
  { title: "200+ Happy Clients", sub: "Trusted by businesses worldwide.", icon: Users },
  { title: "10+ Countries Served", sub: "Delivering excellence across the globe.", icon: Globe2 },
  { title: "98% Client Retention", sub: "Long-term partnerships built on trust.", icon: Award },
  { title: "48 Hrs Deployment", sub: "Get your team up and running fast.", icon: Clock3 },
  { title: "24x5 Support", sub: "We're here for you, always.", icon: Headphones },
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
  "h-[44px] w-full rounded-[8px] border border-[#D0D5DD] bg-white px-3.5 text-[13px] text-[#0F274A] outline-none transition placeholder:text-[#98A2B3] focus:border-[#FF6A00]";

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
    <section id="byot-connect" className="scroll-mt-24 w-full bg-white pb-0 pt-8 sm:pt-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* ── Left ── */}
          <div className="flex flex-col">
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
                    icon: Icon,
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
                      <span
                        className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ background: "#FFF4EA", color: ORANGE }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
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

            <div className="mt-auto flex flex-col items-start gap-3 rounded-[12px] border border-[#FFD8B8] bg-[#FFF4EA] px-4 py-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <div className="flex items-start gap-3 sm:items-center">
                <Users
                  className="h-8 w-8 shrink-0"
                  style={{ color: ORANGE }}
                  strokeWidth={1.6}
                />
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
                href="#byot-connect-form"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] border-2 bg-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide transition hover:bg-[#FF6A00] hover:text-white"
                style={{ color: ORANGE, borderColor: ORANGE }}
              >
                Talk to an Expert →
              </a>
            </div>
          </div>

          {/* ── Right: form card overlapping photo panel ── */}
          <div className="relative flex w-full flex-col lg:block lg:min-h-[540px]">
            {/* Photo panel behind, pinned right on desktop */}
            <div className="relative order-2 mt-4 h-[260px] overflow-hidden rounded-[18px] bg-[#E8ECF0] sm:h-[300px] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:mt-0 lg:h-auto lg:w-[46%]">
              <Image
                src={HERO_IMAGE_URL}
                alt="Next Ledgers specialist"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 340px"
                priority
                unoptimized
              />
              <div
                className="absolute bottom-0 right-0 w-[92%] rounded-tl-[20px] px-5 py-4 text-white"
                style={{ background: NAVY }}
              >
                <p
                  className="mb-0.5 font-serif text-[30px] leading-none"
                  style={{ color: ORANGE }}
                >
                  &ldquo;
                </p>
                <p className="-mt-2 text-[13px] font-medium leading-snug">
                  Our goal is simple: Your success is our priority.
                </p>
              </div>
            </div>

            {/* Form card (overlaps photo on desktop) — no box shadow */}
            <form
              id="byot-connect-form"
              onSubmit={onSubmit}
              className="relative z-10 order-1 w-full rounded-[16px] border border-[#EAECEF] bg-white p-5 sm:p-6 lg:order-none lg:w-[62%]"
            >
              <div className="mb-1 flex items-center justify-center gap-2.5">
                <span className="flex items-center gap-1">
                  <span className="h-[2px] w-8 rounded-full" style={{ background: ORANGE }} />
                  <span className="inline-block h-1.5 w-1.5 rotate-45" style={{ background: ORANGE }} />
                </span>
                <h3
                  className="text-center text-[16px] font-bold sm:text-[18px]"
                  style={{ color: NAVY }}
                >
                  Send Us a Message
                </h3>
                <span className="flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rotate-45" style={{ background: ORANGE }} />
                  <span className="h-[2px] w-8 rounded-full" style={{ background: ORANGE }} />
                </span>
              </div>
              <p className="mb-5 text-center text-[12px]" style={{ color: GREY }}>
                Fill out the form and we&apos;ll get back to you shortly.
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                  className={`${inputClass} ${!form.role ? "text-[#98A2B3]" : ""}`}
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
                  className="min-h-[96px] w-full resize-none rounded-[8px] border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-[13px] text-[#0F274A] outline-none transition placeholder:text-[#98A2B3] focus:border-[#FF6A00] sm:col-span-2"
                />

                <label
                  className="flex items-start gap-2 text-[11.5px] leading-snug sm:col-span-2"
                  style={{ color: GREY }}
                >
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={onChange}
                    required
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#FF6A00]"
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/privacy" className="font-semibold text-[#2563EB] underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms" className="font-semibold text-[#2563EB] underline">
                      Terms of Service
                    </Link>
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#FF6A00] px-4 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-[#E85E00] sm:col-span-2"
                >
                  {sent ? "Message Sent" : "Send Message"}
                  <Send className="h-4 w-4" strokeWidth={2.2} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mt-10 bg-[#F3F5F7]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-6 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:gap-y-0 lg:px-10 lg:py-7">
          {TRUST.map(({ title, sub, icon: Icon }, index) => (
            <div
              key={title}
              className={`flex flex-col items-center px-3 text-center ${
                index > 0 ? "lg:border-l lg:border-[#E1E5EA]" : ""
              }`}
            >
              <span
                className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full"
                style={{ background: "#FFF1E6", color: ORANGE }}
              >
                <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
              </span>
              <p
                className="text-[13px] font-bold leading-tight sm:text-[14px]"
                style={{ color: NAVY }}
              >
                {title}
              </p>
              <p
                className="mt-1 max-w-[150px] text-[11px] leading-snug sm:text-[12px]"
                style={{ color: GREY }}
              >
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}