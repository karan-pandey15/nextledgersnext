"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BookOpen,
  Building2,
  Calendar,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  Handshake,
  Headset,
  LineChart,
  Lock,
  LockKeyhole,
  Network,
  Pencil,
  Percent,
  Phone,
  Play,
  PuzzleIcon,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
} from "lucide-react";
import { HomeLogoImg } from "@/app/lib/homePageLogos";
import RegionalNavbar from "@/app/components/RegionalNavbar/RegionalNavbar";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import TrustBadgesBar, {
  SINGAPORE_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { SINGAPORE_SERVICE_LINKS } from "@/app/singapore/singaporeServiceLinks";
import { SINGAPORE_INDUSTRIES } from "@/app/singapore/singaporePageContent";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const MATTER_ICONS = [
  FileText,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Users,
  Lock,
  BadgeCheck,
  Award,
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
  Headset,
];

const PARTNER_TRUST = [
  { icon: ShieldCheck, label: "100% IRAS-Aligned Processes" },
  { icon: Lock, label: "Secure & Confidential" },
  { icon: Users, label: "Trusted by Singapore Accounting Firms" },
];

function Stat({ icon, logo, value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 text-center">
      <div className={logo != null ? "flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10" : "flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00] sm:h-10 sm:w-10"}>{logo != null ? <HomeLogoImg n={logo} alt="" /> : icon}</div>
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

function CheckPill({ text }) {
  return (
    <li
      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
      style={{ background: PILL_BG }}
    >
      <span
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
        style={{ background: ORANGE }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-2.5 w-2.5"
          stroke="white"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span
        className="text-[11.5px] font-medium leading-snug sm:text-[12px]"
        style={{ color: NAVY }}
      >
        {text}
      </span>
    </li>
  );
}

function ServiceCard({ icon: Icon, title, items }) {
  return (
    <div
      className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6 lg:p-7"
      style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: PILL_BG, color: ORANGE }}
        >
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h3
          className="text-[14px] font-bold leading-snug sm:text-[15px]"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2.5">
        {items.map((item) => (
          <CheckPill key={item} text={item} />
        ))}
      </ul>
    </div>
  );
}

function MatterCard({ icon: Icon, title, description }) {
  return (
    <div
      className="flex items-start gap-3 rounded-[12px] border bg-white px-3.5 py-3.5 transition-shadow duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
      style={{
        borderColor: "#EBEBEB",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
        style={{ background: PILL_BG, color: ORANGE }}
      >
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <h4 className="text-[13px] font-bold leading-snug" style={{ color: NAVY }}>
          {title}
        </h4>
        <div
          className="mb-[7px] mt-[6px] h-[2px] w-[22px] rounded-full"
          style={{ background: ORANGE }}
        />
        <p className="text-[11.5px] leading-[1.45]" style={{ color: GREY }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function HelpCard({ icon: Icon, titleBefore, titleAccent, titleAfter, items }) {
  return (
    <div
      className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6 lg:p-7"
      style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{ background: PILL_BG, color: ORANGE }}
        >
          <Icon className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h3
          className="text-[14px] font-bold leading-snug sm:text-[15px]"
          style={{ color: NAVY }}
        >
          {titleBefore}
          <span style={{ color: ORANGE }}>{titleAccent}</span>
          {titleAfter}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2.5">
        {items.map((item) => (
          <CheckPill key={item} text={item} />
        ))}
      </ul>
    </div>
  );
}

function WhyMatterHeading({ title }) {
  const match = title.match(/^Why\s+(.+?)\s+(Matters?)$/i);
  if (!match) return title;
  return (
    <>
      Why <span style={{ color: ORANGE }}>{match[1]}</span> {match[2]}
    </>
  );
}

function normalizeMatterBullet(item, index) {
  if (typeof item === "string") {
    const title = item;
    const lower = title.charAt(0).toLowerCase() + title.slice(1);
    return {
      title,
      description: `Supports Singapore practices that need to ${lower.replace(/\.$/, "")}.`,
      icon: MATTER_ICONS[index % MATTER_ICONS.length],
    };
  }
  return {
    title: item.title,
    description:
      item.description ||
      `Supports Singapore practices focused on ${String(item.title || "")
        .charAt(0)
        .toLowerCase()}${String(item.title || "").slice(1)}.`,
    icon: item.icon || MATTER_ICONS[index % MATTER_ICONS.length],
  };
}

/**
 * Shared Singapore service page — UI aligned to UK Year-End / VAT master template.
 */
export default function SingaporeServiceTemplate({ data }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const badges = data.trustBadges || SINGAPORE_TRUST_BADGES;
  const stats = data.stats || [
    {
      logo: 4,
      value: "500+",
      label: "SG Firms Supported",
    },
    {
      logo: 15,
      value: "30+",
      label: "Software Integrations",
    },
    {
      logo: 18,
      value: "100%",
      label: "IRAS Compliant Processes",
    },
    {
      logo: 16,
      value: "Dedicated",
      label: "Support Team",
    },
  ];

  const matterCards = (data.whyMatter?.bullets || []).map(normalizeMatterBullet);
  const sections = data.sections || [];
  const howWeHelp = data.howWeHelp || [];
  const helpMid = Math.ceil(howWeHelp.length / 2);
  const helpLeft = howWeHelp.slice(0, helpMid);
  const helpRight = howWeHelp.slice(helpMid);
  const paragraphs = data.intro?.paragraphs || [];

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <RegionalNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        homePath="/singapore"
        servicesLabel="Services in Singapore"
        serviceLinks={SINGAPORE_SERVICE_LINKS}
        flagCode="sg"
        backLabel="Back To Singapore"
        regionName="Singapore"
      />

      {/* 1 — Hero */}
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
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-2xl" />

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
            <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
              {data.subtitle}
              {data.subtitleSecond ? (
                <>
                  <br className="hidden sm:block" />
                  {data.subtitleSecond}
                </>
              ) : null}
            </p>
            <div className="my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]" />
            <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <CtaButton href="/contact" variant="primary" size="sm">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                Book a Discovery Call
              </CtaButton>
              <CtaButton href="#how-we-work" variant="ghost" size="sm">
                <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                How We Work
              </CtaButton>
            </div>
          </div>
          <TrustBadgesBar badges={badges} />
        </div>
      </section>

      {/* 2 — Intro */}
      <section id="how-we-work" className="w-full bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                {data.intro.eyebrow}
              </span>
              <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                {data.intro.heading}
              </h2>
              <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />
              {paragraphs.map((p, i) => (
                <p
                  key={p.slice(0, 48)}
                  className={`${
                    i === paragraphs.length - 1 ? "mb-5" : "mb-3"
                  } text-[13px] leading-relaxed text-gray-500 sm:text-[15px]`}
                >
                  {p}
                </p>
              ))}
              <CtaButton href="/contact" variant="primary" size="md">
                <Phone className="h-4 w-4" strokeWidth={2.25} />
                Book a Discovery Call
              </CtaButton>
            </div>

            <div className="relative">
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
              <div className="absolute bottom-[-2rem] left-4 right-4 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:bottom-[-2.25rem] sm:px-5 sm:py-5">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-6 sm:h-7" />
        </div>
      </section>

      {/* 3 — Why it matters (MatterCards) */}
      <section
        className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
        style={{ background: PAGE_CREAM }}
      >
        <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10" />
        <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:left-8" />

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="mb-6 flex flex-col items-center text-center">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
              style={{ background: ORANGE }}
            >
              <Sparkles className="h-3 w-3" strokeWidth={2.5} />
              {data.whyMatter.badge ||
                data.deliverablesAccent ||
                "Why It Matters"}
            </span>

            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
              style={{ color: NAVY }}
            >
              <WhyMatterHeading title={data.whyMatter.title} />
            </h2>

            <p
              className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
              style={{ color: GREY }}
            >
              {data.whyMatter.intro}
            </p>

            {data.whyMatter.helpLabel ? (
              <div className="mb-4 mt-3.5 flex w-full max-w-lg items-center justify-center gap-2.5">
                <span
                  className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                  style={{ background: ORANGE }}
                />
                <span
                  className="text-[12px] font-semibold whitespace-nowrap sm:text-[12.5px]"
                  style={{ color: "#555555" }}
                >
                  {data.whyMatter.helpLabel}
                </span>
                <span
                  className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                  style={{ background: ORANGE }}
                />
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
            {matterCards.map((card) => (
              <MatterCard key={card.title} {...card} />
            ))}
          </div>

          {data.whyMatter.outro ? (
            <p
              className="mx-auto mt-6 max-w-3xl text-center text-[12.5px] leading-relaxed sm:text-[13px]"
              style={{ color: GREY }}
            >
              {data.whyMatter.outro}
            </p>
          ) : null}
        </div>
      </section>

      {/* 4 — Deliverables (ServiceCards) */}
      <section
        className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
        style={{ background: PAGE_CREAM }}
      >
        <div className="relative mx-auto flex w-full max-w-6xl flex-col">
          <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
              style={{ background: ORANGE }}
            >
              <Pencil className="h-3 w-3" strokeWidth={2.5} />
              Full Services Deliverables
            </span>

            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
              style={{ color: NAVY }}
            >
              Our{" "}
              <span style={{ color: ORANGE }}>
                {data.deliverablesAccent || "Singapore Service"}
              </span>{" "}
              Services
            </h2>

            <p
              className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
              style={{ color: GREY }}
            >
              {data.deliverablesSubtitle ||
                "Structured delivery across every workstream your practice needs."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
            {sections.map((section, i) => (
              <ServiceCard
                key={section.title}
                icon={SECTION_ICONS[i % SECTION_ICONS.length]}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — How we help (HelpCards) */}
      {howWeHelp.length ? (
        <section
          id="how-we-help"
          className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
          style={{ background: PAGE_CREAM }}
        >
          <DotGrid className="pointer-events-none absolute right-6 top-6 opacity-50 sm:right-10 sm:top-8" />

          <div className="relative mx-auto flex w-full max-w-6xl flex-col">
            <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
              <span
                className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{
                  background: PILL_BG,
                  borderColor: "rgba(255, 106, 0,0.35)",
                  color: ORANGE,
                }}
              >
                <Pencil className="h-3 w-3" strokeWidth={2.5} />
                Practice Growth
              </span>

              <h2
                className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                style={{ color: NAVY }}
              >
                How We Help{" "}
                <span style={{ color: ORANGE }}>Singapore Accounting Firms</span>
              </h2>

              <p
                className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                style={{ color: GREY }}
              >
                Our support enables Singapore practices to:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
              {helpLeft.length ? (
                <HelpCard
                  icon={TrendingUp}
                  titleBefore="Capacity & "
                  titleAccent="Delivery"
                  titleAfter=""
                  items={helpLeft}
                />
              ) : null}
              {helpRight.length ? (
                <HelpCard
                  icon={BadgeCheck}
                  titleBefore="Quality & "
                  titleAccent="Scale"
                  titleAfter=""
                  items={helpRight}
                />
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* 6 — Software */}
      <IconDisplayScreen
        title="Software Expertise"
        subtitle="We work across the accounting, tax, payroll, and document platforms Singapore firms already use."
        logodata={data.software}
        className="!py-3"
      />

      {/* 7 — Industries (UK cream chrome) */}
      <section className="relative w-full overflow-hidden bg-white py-3">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div
            className="rounded-none px-3 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7"
            style={{ background: PAGE_CREAM }}
          >
            <div className="mx-auto max-w-[720px] text-center">
              <div className="inline-flex items-center justify-center gap-3">
                <span
                  className="hidden h-px w-8 sm:block"
                  style={{ background: ORANGE }}
                  aria-hidden="true"
                />
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.22em] sm:text-[12px]"
                  style={{ color: ORANGE }}
                >
                  Our Industry Expertise
                </p>
                <span
                  className="hidden h-px w-8 sm:block"
                  style={{ background: ORANGE }}
                  aria-hidden="true"
                />
              </div>

              <h2
                className="mt-2 text-[22px] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[28px] lg:text-[32px]"
                style={{ color: NAVY }}
              >
                Industries We <span style={{ color: ORANGE }}>Support</span>
              </h2>

              <p
                className="mx-auto mt-2 max-w-[540px] text-[12px] leading-5 sm:mt-2 sm:text-[13px] sm:leading-6"
                style={{ color: GREY }}
              >
                We support accounting firms and corporate service providers serving
                clients across a wide range of sectors, including:
              </p>
            </div>

            <IndustriesWeSupportGrid industries={SINGAPORE_INDUSTRIES} />
          </div>
        </div>
      </section>

      {/* 8 — Why Choose */}
      <WhyChooseSplitSection
        titleBefore="Why Choose "
        titleAccent="NextLedgers"
        titleAfter="?"
        subtitle="Dedicated Singapore accounting specialists who work as an extension of your practice."
        items={(data.whyChoose || []).map((title, i) => ({
          title,
          icon: WHY_CHOOSE_ICONS[i % WHY_CHOOSE_ICONS.length],
        }))}
        imageSrc="/images/DSC09669.JPG"
        imageAlt="NextLedgers Singapore accounting specialists"
      />

      {/* 9 — Partner CTA */}
      <section className="relative w-full bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] px-5 py-10 text-center sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14"
          style={{ background: PAGE_CREAM }}
        >
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-40"
            style={{ background: "rgba(255, 106, 0,0.18)" }}
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30"
            style={{ background: "rgba(255, 106, 0,0.15)" }}
          />
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

            {data.partner.callout ? (
              <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-[0_6px_24px_rgba(15,23,42,0.06)] sm:gap-5 sm:px-6 sm:py-5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                  style={{ background: "#FFF4EA", color: ORANGE }}
                >
                  <UserCheck className="h-5 w-5" strokeWidth={2} />
                </span>
                <p
                  className="pt-0.5 text-[12.5px] leading-relaxed sm:text-[13.5px]"
                  style={{ color: GREY }}
                >
                  {data.partner.callout}
                </p>
              </div>
            ) : null}

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

            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 border-t border-[#F0E0D2] pt-6 sm:flex-row sm:gap-8">
              {PARTNER_TRUST.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2"
                  style={{ color: "#8B7355" }}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  <span className="text-[12px] font-semibold sm:text-[12.5px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer region="singapore" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}
