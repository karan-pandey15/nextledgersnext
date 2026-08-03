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
import CanadaNavbar from "@/app/components/CanadaNavbar/CanadaNavbar";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import TrustBadgesBar, {
  CANADA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { INDUSTRIES_WE_SUPPORT } from "@/app/lib/industriesWeSupport";

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
function BenefitCard({ icon: Icon, title }) {
  return (
    <div
      className="group flex items-center gap-2.5 rounded-[12px] border bg-white px-3 py-2.5 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:gap-3 sm:px-3.5 sm:py-3"
      style={{
        borderColor: CARD_BORDER,
        boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
      }}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
        style={{ background: "#FFF4EA", color: ORANGE }}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
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
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
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
                  src={"/images/DSC09901.JPG  "}
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

      {/* 3 — Why it matters (UK Bookkeeping BenefitCard: h-14 w-14 circle + #FFF4EA) */}
      <section
        className="relative w-full overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
        style={{ background: PAGE_CREAM }}
      >
        <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-5 flex flex-col items-center text-center">
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
          <div className="mt-4 grid grid-cols-1 items-center gap-5 sm:mt-5 lg:grid-cols-2 lg:gap-8">
            <div>
              {data.whyMatter.bullets.map((item, i) => {
                const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
                const title = typeof item === "string" ? item : item.title;
                const description =
                  typeof item === "object" && item.description
                    ? item.description
                    : null;
                const isLast = i === data.whyMatter.bullets.length - 1;

                return (
                  <div key={title}>
                    <div className="flex items-start gap-2.5 py-2.5 sm:py-3">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:h-9 sm:w-9"
                        style={{ background: ORANGE }}
                      >
                        <Icon
                          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                          strokeWidth={1.75}
                        />
                      </span>
                      {description ? (
                        <div className="min-w-0 flex-1">
                          <h3
                            className="text-[12.5px] font-bold leading-snug sm:text-[13px]"
                            style={{ color: HEADING }}
                          >
                            {title}
                          </h3>
                          <p
                            className="mt-0.5 text-[11.5px] leading-[1.35] sm:text-[12px]"
                            style={{ color: BODY }}
                          >
                            {description}
                          </p>
                        </div>
                      ) : (
                        <h3
                          className="min-w-0 flex-1 pt-1 text-[12.5px] font-bold leading-snug sm:text-[13px]"
                          style={{ color: HEADING }}
                        >
                          {title}
                        </h3>
                      )}
                    </div>
                    {!isLast ? (
                      <div
                        className="h-px w-full bg-[#E8E8E8]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>

            <div className="relative mx-auto h-[220px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:h-[280px] sm:rounded-[24px] lg:h-[320px]">
              <Image
                src={
                  data.whyMatter.image ||
                  data.intro?.image ||
                  "/images/bgimage.JPG"
                }
                alt={data.whyMatter.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Deliverable sections (interactive explorer) */}
      <ServiceDeliverablesExplorer
        eyebrow="Full Service Deliverables"
        titleBefore="Our "
        titleAccent="Canada Service"
        titleAfter=" Deliverables"
        subtitle="Structured offshore delivery across every workstream your practice needs."
        className="!py-5"
        services={(data.sections || []).map((section, i) => ({
          title: section.title,
          shortTitle: section.shortTitle || section.title,
          intro: section.intro,
          items: section.items,
          icon: SECTION_ICONS[i % SECTION_ICONS.length],
        }))}
      />

      {/* 5 — How we help */}
      <section
        className="w-full px-4 py-3 sm:px-6 lg:px-8"
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
        className="!py-3"
      />

      {/* 7 — Industries (same grid + industry-icons as home / global services) */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="relative mx-auto w-full max-w-6xl">
          <div className="mb-5 flex flex-col items-center text-center sm:mb-6">
            <span
              className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ background: "#FFF4EA", color: ORANGE }}
            >
              <Sparkles className="h-3 w-3" strokeWidth={2.5} />
              Industry Expertise
            </span>
            <h2
              className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
              style={{ color: NAVY }}
            >
              Industries We <span style={{ color: ORANGE }}>Support</span>
            </h2>
            <p
              className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
              style={{ color: GREY }}
            >
              Specialized accounting support across the industries Canadian firms serve.
            </p>
            <div
              className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
              style={{ background: ORANGE }}
            />
          </div>
          <IndustriesWeSupportGrid industries={INDUSTRIES_WE_SUPPORT} />
        </div>
      </section>

      {/* 8 — Why Choose (UK split: left list + right image) */}
      <WhyChooseSplitSection
        titleBefore="Why Choose "
        titleAccent="NextLedgers"
        titleAfter="?"
        subtitle={
          data.whyChooseSubtitle ||
          "Dedicated Canada accounting specialists who work as an extension of your practice."
        }
        items={(data.whyChoose || []).map((title, i) => ({
          title,
          icon: WHY_CHOOSE_ICONS[i % WHY_CHOOSE_ICONS.length],
        }))}
        imageSrc="/images/DSC09669.JPG"
        imageAlt="NextLedgers Canada accounting specialists"
      />

      {/* 9 — Partner CTA */}
      <section className="relative w-full bg-white px-4 py-3 sm:px-6 lg:px-8">
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
