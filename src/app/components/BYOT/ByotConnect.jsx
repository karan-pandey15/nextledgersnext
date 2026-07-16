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
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";
const GREY = "#6B7280";

const CONTACT_WAYS = [
  { label: "Call Us", href: "tel:+18885520055", icon: Phone },
  { label: "Email Us", href: "mailto:info@nextledgers.com", icon: Mail },
  { label: "Live Chat", href: "/contact", icon: MessageCircle },
  { label: "Schedule a Call", href: "/contact", icon: Calendar },
];

const TRUST = [
  { label: "ISO 27001 Certified", icon: ShieldCheck },
  { label: "200+ Happy Clients", icon: Users },
  { label: "9+ Countries Served", icon: Globe2 },
  { label: "98% Client Retention", icon: Award },
  { label: "48 Hrs Deployment", icon: Clock3 },
  { label: "24x5 Support", icon: Headphones },
];

const INITIAL = {
  name: "",
  email: "",
  company: "",
  phone: "",
  role: "",
  message: "",
};

export default function ByotConnect() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="w-full bg-white pb-10 pt-4 sm:pb-12 lg:pb-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2
              className="text-[28px] font-bold leading-tight sm:text-[34px]"
              style={{ color: NAVY }}
            >
              Let&apos;s Connect
            </h2>
            <p
              className="mt-1 text-[24px] font-bold sm:text-[30px]"
              style={{ color: ORANGE }}
            >
              We&apos;re Here to Help!
            </p>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed" style={{ color: GREY }}>
              Ready to build your offshore finance team? Reach out and we&apos;ll
              help you get started in as little as 48 hours.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {CONTACT_WAYS.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex flex-col items-center gap-2 rounded-[14px] border border-[#F0E6DC] bg-white px-3 py-4 text-center shadow-sm transition hover:border-[#FF6A00]/30"
                >
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "#FFF4EA", color: ORANGE }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-[12px] font-semibold" style={{ color: NAVY }}>
                    {label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-start gap-3 rounded-[14px] border border-[#FF6A00]/20 bg-[#FFF7F0] px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2.5">
                <Users className="h-5 w-5" style={{ color: ORANGE }} />
                <p className="text-[13px] font-semibold" style={{ color: NAVY }}>
                  Prefer a guided conversation?
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6A00] px-4 py-2 text-[12px] font-bold uppercase tracking-wide transition hover:bg-[#FF6A00] hover:text-white"
                style={{ color: ORANGE }}
              >
                Talk to an Expert →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={onSubmit}
              className="rounded-[18px] border border-[#E8ECF0] bg-white p-5 shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:p-6"
            >
              <h3 className="text-[16px] font-bold" style={{ color: NAVY }}>
                Send Us a Message
              </h3>
              <div className="mt-4 space-y-3">
                {[
                  { name: "name", placeholder: "Name", type: "text" },
                  { name: "email", placeholder: "Email", type: "email" },
                  { name: "company", placeholder: "Company", type: "text" },
                  { name: "phone", placeholder: "Phone", type: "tel" },
                ].map((field) => (
                  <input
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={onChange}
                    placeholder={field.placeholder}
                    required={field.name === "name" || field.name === "email"}
                    className="w-full rounded-[10px] border border-[#E5E7EB] px-3.5 py-2.5 text-[13px] outline-none transition focus:border-[#FF6A00]"
                  />
                ))}
                <select
                  name="role"
                  value={form.role}
                  onChange={onChange}
                  className="w-full rounded-[10px] border border-[#E5E7EB] px-3.5 py-2.5 text-[13px] outline-none transition focus:border-[#FF6A00]"
                >
                  <option value="">Role you need</option>
                  <option value="accountant">Accountant</option>
                  <option value="bookkeeper">Bookkeeper</option>
                  <option value="payroll">Payroll Specialist</option>
                  <option value="tax">Tax Professional</option>
                  <option value="cfo">Virtual CFO</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Message"
                  rows={3}
                  className="w-full resize-none rounded-[10px] border border-[#E5E7EB] px-3.5 py-2.5 text-[13px] outline-none transition focus:border-[#FF6A00]"
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#FF6A00] px-4 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition hover:bg-[#E85E00]"
              >
                <Send className="h-4 w-4" strokeWidth={2.2} />
                {sent ? "Message Sent" : "Send Message"}
              </button>
            </form>

            <div className="flex flex-col gap-3">
              <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-[18px]">
                <Image
                  src="/images/accountantImg.JPG"
                  alt="Next Ledgers specialist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 280px"
                />
              </div>
              <div
                className="rounded-[16px] px-4 py-4 text-white"
                style={{ background: NAVY }}
              >
                <p className="text-[28px] font-serif leading-none" style={{ color: ORANGE }}>
                  “
                </p>
                <p className="-mt-2 text-[13px] leading-relaxed">
                  Our goal is simple: Your success is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 rounded-[14px] border border-[#F0E6DC] bg-white px-3 py-4 shadow-sm sm:grid-cols-3 lg:grid-cols-6 lg:px-5">
          {TRUST.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-1 py-1 sm:justify-center"
            >
              <Icon className="h-4 w-4 shrink-0" style={{ color: ORANGE }} strokeWidth={1.75} />
              <span className="text-[11px] font-semibold sm:text-[12px]" style={{ color: NAVY }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
