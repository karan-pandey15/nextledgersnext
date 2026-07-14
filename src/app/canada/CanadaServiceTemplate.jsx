"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileSpreadsheet,
  FileText,
  Handshake,
  Headset,
  LineChart,
  Lock,
  LockKeyhole,
  Network,
  Percent,
  Phone,
  Pencil,
  PuzzleIcon,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import CanadaNavbar from "@/app/components/CanadaNavbar/CanadaNavbar";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar, {
  CANADA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const HEADING = "#1A1A1A";
const BODY = "#555555";
const PILL_BG = "#FFF4EA";
const CARD_BORDER = "#F3E4D4";

const BENEFIT_ICONS = [
  FileText,
  ShieldCheck,
  Clock,
  TrendingUp,
  ClipboardCheck,
  Users,
  Lock,
  BadgeCheck,
];

const SECTION_ICONS = [
  BookOpen,
  Building2,
  Percent,
  LineChart,
  Wallet,
  FileText,
  ClipboardCheck,
  FileSpreadsheet,
];

const WHY_CHOOSE_ICONS = [
  UserCheck,
  BookOpen,
  BadgeCheck,
  ClipboardCheck,
  LockKeyhole,
  Network,
  Shield,
  Award,
  TrendingUp,
];

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00] sm:h-10 sm:w-10">
        {icon}
      </div>
      <div className="text-[15px] font-extrabold leading-none text-[#0B1F3A] sm:text-[17px]">
        {value}
      </div>
      <div className="max-w-[90px] text-[10px] leading-tight text-gray-500 sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}

function DotGrid({ className }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 4px)",
        gap: 6,
      }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 3.5,
            height: 3.5,
            borderRadius: "50%",
            background: ORANGE,
            opacity: 0.45,
          }}
        />
      ))}
    </div>
  );
}

/** UK-style cream pill with orange circle + white check (not green emoji) */
function ServicePill({ text }) {
  return (
    <li
      className="flex items-center gap-2.5 rounded-full px-3 py-2"
      style={{ background: PILL_BG }}
    >
      <span
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
        style={{ background: ORANGE }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-2.5 w-2.5"
          stroke="white"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span
        className="text-[11.5px] font-medium leading-snug sm:text-[12px]"
        style={{ color: HEADING }}
      >
        {text}
      </span>
    </li>
  );
}

function BenefitCard({ icon: Icon, title }) {
  return (
    <div
      className="group flex items-center gap-3 rounded-[14px] border bg-white px-4 py-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      style={{
        borderColor: CARD_BORDER,
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ background: "#FFF7F0", color: ORANGE }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <h4
          className="text-[13px] font-bold leading-snug sm:text-[13.5px]"
          style={{ color: HEADING }}
        >
          {title}
        </h4>
      </div>
      <ChevronRight
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        style={{ color: ORANGE }}
        strokeWidth={2.5}
      />
    </div>
  );
}

function DeliverableCard({ icon: Icon, title, intro, items }) {
  return (
    <div
      className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6 lg:p-7"
      style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ background: ORANGE }}
        >
          <Icon className="h-4 w-4 text-white" strokeWidth={2} />
        </span>
        <h3
          className="text-[14px] font-bold leading-snug sm:text-[15px]"
          style={{ color: HEADING }}
        >
          {title}
        </h3>
      </div>
      {intro ? (
        <p className="mb-3 text-[12.5px] leading-relaxed" style={{ color: BODY }}>
          {intro}
        </p>
      ) : null}
      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2.5">
        {items.map((item) => (
          <ServicePill key={item} text={item} />
        ))}
      </ul>
    </div>
  );
}

/**
 * Shared Canada service page — UI aligned to UK Bookkeeping.
 */
export default function CanadaServiceTemplate({ data }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const badges = data.trustBadges || CANADA_TRUST_BADGES;
  const stats = data.stats || [
    { icon: <Users className="h-5 w-5" />, value: "500+", label: "Canadian Firms Supported" },
    { icon: <PuzzleIcon className="h-5 w-5" />, value: "30+", label: "Software Integrations" },
    { icon: <ShieldCheck className="h-5 w-5" />, value: "100%", label: "CRA Compliant Processes" },
    { icon: <Headset className="h-5 w-5" />, value: "Dedicated", label: "Offshore Support Team" },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} region="canada" />
      <CanadaNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* 1 — Hero (UK Bookkeeping style) */}
      <section
        className="relative w-full overflow-hidden px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8"
        style={{
          background:
            "linear-gradient(165deg, #FFFFFF 0%, #FFF9F5 42%, #FFF4EA 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255, 106, 0,0.18) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#0B1F3A]/06 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
          <div className="flex flex-col items-center px-2 text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
              {data.badge}
            </span>
            <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
              {data.titleBefore}{" "}
              <span className="text-[#FF6A00]">{data.titleAccent}</span>
              {data.titleAfter ? ` ${data.titleAfter}` : ""}
            </h1>
            <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-2xl sm:text-[13px] md:text-sm">
              {data.subtitle}
            </p>
            {data.subtitleSecond ? (
              <p className="mt-1.5 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-2xl sm:text-[13px] md:text-sm">
                {data.subtitleSecond}
              </p>
            ) : null}
            <div className="my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]" />
            <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <CtaButton href="/contact" variant="primary" size="sm">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                Book a Discovery Call
              </CtaButton>
              <a
                href="tel:+18885520055"
                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:whitespace-nowrap sm:py-2"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" />
                Call Us
              </a>
            </div>
          </div>
          <TrustBadgesBar badges={badges} />
        </div>
      </section>

      {/* 2 — Intro (UK style) */}
      <section id="how-we-work" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                {data.intro.eyebrow}
              </span>
              <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                {data.intro.heading}
              </h2>
              <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />
              {data.intro.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]"
                >
                  {p}
                </p>
              ))}
              <CtaButton href="/contact" variant="primary" size="md" className="mt-2">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Book a Discovery Call
              </CtaButton>
            </div>
            <div className="relative pb-10 sm:pb-12">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={data.intro.image || "/images/DSC09901.JPG"}
                  alt={data.intro.heading}
                  width={720}
                  height={480}
                  className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-4 right-4 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:px-5 sm:py-5">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Why it matters (BenefitCard style — no green ticks) */}
      <section
        className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{ background: PAGE_CREAM }}
      >
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.14em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              <Sparkles className="h-3 w-3" strokeWidth={2.5} />
              Why It Matters
            </span>
            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
              style={{ color: HEADING }}
            >
              {data.whyMatter.title}
            </h2>
            <p
              className="mx-auto mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13px]"
              style={{ color: BODY }}
            >
              {data.whyMatter.intro}
            </p>
            <div
              className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4">
            {data.whyMatter.bullets.map((item, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return <BenefitCard key={item} icon={Icon} title={item} />;
            })}
          </div>
        </div>
      </section>

      {/* 4 — Deliverable sections (UK ServiceCard + ServicePill) */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="relative mx-auto flex w-full max-w-6xl flex-col">
          <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
              style={{ background: ORANGE }}
            >
              <Pencil className="h-3 w-3" strokeWidth={2.5} />
              Full Service Deliverables
            </span>
            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
              style={{ color: HEADING }}
            >
              Our <span style={{ color: ORANGE }}>Canada Service</span> Deliverables
            </h2>
            <p
              className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
              style={{ color: BODY }}
            >
              Structured offshore delivery across every workstream your practice needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:gap-7">
            {data.sections.map((section, i) => {
              const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
              return (
                <DeliverableCard
                  key={section.title}
                  icon={Icon}
                  title={section.title}
                  intro={section.intro}
                  items={section.items}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — How we help */}
      <section
        className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
        style={{ background: PAGE_CREAM }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 text-center sm:mb-8">
            <h2
              className="text-[22px] font-extrabold sm:text-[26px]"
              style={{ color: NAVY }}
            >
              How We Help{" "}
              <span style={{ color: ORANGE }}>Canadian Accounting Firms</span>
            </h2>
            <div
              className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-4">
            {data.howWeHelp.map((item, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return <BenefitCard key={item} icon={Icon} title={item} />;
            })}
          </div>
        </div>
      </section>

      {/* 6 — Software */}
      <IconDisplayScreen
        title="Software Expertise"
        subtitle="We work across the accounting, tax, payroll, and document platforms Canadian firms already use."
        logodata={data.software}
      />

      {/* 7 — Industries */}
      <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-center text-[22px] font-extrabold sm:mb-8 sm:text-[26px]"
            style={{ color: NAVY }}
          >
            Industries We <span style={{ color: ORANGE }}>Support</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {data.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#F0E6DC] bg-[#FFF9F5] px-3.5 py-1.5 text-[12px] font-semibold text-[#0B1F3A] sm:text-[13px]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Why choose (UK icon cards) */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10 sm:top-8" />
        <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:bottom-10 sm:left-8" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              <Star className="h-3 w-3" strokeWidth={2.5} fill={ORANGE} />
              Partner Advantages
            </span>
            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
              style={{ color: NAVY }}
            >
              Why Choose <span style={{ color: ORANGE }}>NextLedgers</span>?
            </h2>
            <div
              className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {data.whyChoose.map((title, i) => {
              const Icon = WHY_CHOOSE_ICONS[i % WHY_CHOOSE_ICONS.length];
              return (
                <div
                  key={title}
                  className="rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                >
                  <span
                    className="mb-3 flex h-9 w-9 items-center justify-center"
                    style={{ color: ORANGE }}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3
                    className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                    style={{ color: NAVY }}
                  >
                    {title}
                  </h3>
                  <div
                    className="mt-3 h-[2px] w-8 rounded-full"
                    style={{ background: ORANGE }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 — Partner CTA */}
      <section className="relative w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] px-5 py-10 text-center sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14"
          style={{ background: PAGE_CREAM }}
        >
          <DotGrid className="pointer-events-none absolute bottom-6 right-6 opacity-70" />
          <div className="relative z-10">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
              {data.partner.badge}
            </span>
            <h2
              className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
              style={{ color: NAVY }}
            >
              {data.partner.titleBefore}{" "}
              <span style={{ color: ORANGE }}>{data.partner.titleAccent}</span>
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
              style={{ color: GREY }}
            >
              {data.partner.body}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <CtaButton href="/contact" variant="primary" size="lg">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Book a Discovery Call
              </CtaButton>
              <CtaButton href="/contact" variant="secondary" size="lg">
                <Send className="h-4 w-4" strokeWidth={2.25} />
                Request a Proposal
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      <Footer region="canada" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
