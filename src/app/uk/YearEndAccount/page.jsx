"use client";

import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import {
    Calendar,
    Play,
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
    Users,
    PuzzleIcon,
    Headset,
    BookOpen,
    BadgeCheck,
    ClipboardCheck,
    LockKeyhole,
    Network,
    TrendingUp,
    Pencil,
    FileText,
    Sparkles,
    FileCheck2,
    Calculator,
    Landmark,
    Phone,
    Send,
    Handshake,
    Scale,
    FolderCheck,
    Layers,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { UK_YEAR_END_INDUSTRIES } from "@/app/uk/ukIndustries";
import { UK_YEAR_END_SOFTWARE } from "@/app/uk/ukSoftwareExpertise";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const trustBadges = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const whyYearEndMatters = [
    {
        icon: FileCheck2,
        title: "Meet Companies House and HMRC filing requirements",
        description:
            "Stay on top of statutory accounts and corporation tax filing deadlines.",
    },
    {
        icon: FileText,
        title: "Prepare accurate statutory financial statements",
        description:
            "Deliver compliant year-end accounts with clear, reliable disclosures.",
    },
    {
        icon: FolderCheck,
        title: "Identify adjustments and reconcile financial records",
        description:
            "Review trial balances, journals, and year-end adjustments thoroughly.",
    },
    {
        icon: Calculator,
        title: "Calculate corporation tax liabilities correctly",
        description:
            "Prepare CT600s, tax adjustments, and submission-ready tax packs.",
    },
    {
        icon: Landmark,
        title: "Maximise available tax reliefs and allowances",
        description:
            "Support capital allowances, loss utilisation, and tax planning reviews.",
    },
    {
        icon: Layers,
        title: "Maintain reliable records for future planning and growth",
        description:
            "Keep structured working papers that support advisory and growth decisions.",
    },
    {
        icon: ShieldCheck,
        title: "Reduce compliance risks and avoid unnecessary penalties",
        description:
            "Strengthen quality controls so filings are accurate, complete, and on time.",
    },
];

const yearEndServices = [
    "Statutory Accounts Preparation",
    "Financial Statement Preparation",
    "Trial Balance Reviews",
    "Year-End Working Papers",
    "Lead Schedule Preparation",
    "Year-End Adjustments & Journals",
    "Accruals & Prepayments Reviews",
    "Depreciation & Fixed Asset Reviews",
    "Director Loan Account Reviews",
    "Companies House Compliance Support",
    "Confirmation Statement Preparation",
    "Audit Support & Structured Working Papers",
];

const corporationTaxServices = [
    "Corporation Tax Computations",
    "CT600 Preparation",
    "Capital Allowance Calculations",
    "Tax Adjustment Calculations",
    "Loss Utilisation Reviews",
    "Tax Provision Calculations",
    "Group Relief Support",
    "Corporation Tax Working Papers",
    "Submission-Ready Tax Packs",
    "Tax Reconciliations & Supporting Schedules",
];

const statutoryAccountsTypes = [
    "Micro-Entity Accounts",
    "Small Company Accounts",
    "FRS 105 Accounts",
    "FRS 102 Section 1A Accounts",
    "Dormant Company Accounts",
    "LLP Accounts",
    "Partnership Financial Statements",
    "Group Reporting Requirements",
];

const yearEndAdjustments = [
    "Accruals and Prepayments",
    "Deferred Income",
    "Depreciation",
    "Payroll Accruals",
    "Interest Accruals",
    "Stock Adjustments",
    "Bad Debt Provisions",
    "Corporation Tax Provisions",
];

const softwareExpertiseLogodata = UK_YEAR_END_SOFTWARE;

const whyChooseCards = [
    { title: "UK Statutory Accounts Expertise", icon: BookOpen },
    { title: "FRS 102 & FRS 105 Knowledge", icon: Scale },
    { title: "Corporation Tax Compliance Support", icon: Calculator },
    { title: "Companies House Filing Expertise", icon: Landmark },
    { title: "Multi-Level Review Processes", icon: ClipboardCheck },
    { title: "Accurate & Timely Deliverables", icon: BadgeCheck },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "100% HMRC Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by UK Accounting Firms" },
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

function ServiceCard({ icon: Icon, titleBefore, titleAccent, titleAfter, items }) {
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

function SchemePill({ text }) {
    return (
        <li className="flex items-center gap-2.5 rounded-full border border-[#F3E6D8] bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
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
            <span className="text-[12.5px] font-semibold" style={{ color: NAVY }}>
                {text}
            </span>
        </li>
    );
}

export default function YearEndAccount() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <UKNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
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
                            Year-End Accounts &amp; Corporation Tax
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            UK Year-End Accounts &amp;{" "}
                            <span className="text-[#FF6A00]">Corporation Tax</span>{" "}
                            Outsourcing Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Year-End Compliance Support for UK Accounting Firms
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
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            {/* 2 — Intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Year-End Compliance Support for UK Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Year-end accounts and corporation tax compliance remain at the
                                core of every UK accounting practice. However, as client
                                portfolios grow, deadlines become tighter, regulations evolve, and
                                recruitment challenges increase, many firms struggle to maintain
                                capacity while preserving quality and profitability.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Preparing statutory accounts, reviewing year-end adjustments,
                                finalising corporation tax computations, and ensuring compliance
                                with Companies House and HMRC requirements demands technical
                                expertise and meticulous attention to detail.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we provide dedicated Year-End Accounts
                                and Corporation Tax support to UK accounting firms, helping
                                practices increase capacity, improve turnaround times, and
                                maintain compliance without increasing internal overheads. Whether
                                you require support for limited companies, partnerships, LLPs,
                                dormant companies, or high-volume year-end processing, our team
                                works as a seamless extension of your practice.
                            </p>

                            <CtaButton href="/contact" variant="primary" size="md">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Year-end accounts and corporation tax support team"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-[-2rem] left-4 right-4 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:bottom-[-2.25rem] sm:px-5 sm:py-5">
                                <Stat
                                    icon={<Users className="h-5 w-5" />}
                                    value="500+"
                                    label="UK Accounting Firms Supported"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="HMRC Compliant Processes"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Support Team"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-6 sm:h-7" />
                </div>
            </section>

            {/* 3 — Why Year-End Matters */}
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
                            Statutory Compliance
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why{" "}
                            <span style={{ color: ORANGE }}>
                                Year-End Accounts &amp; Corporation Tax
                            </span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Year-end compliance is much more than a filing exercise. Accurate
                            financial statements and corporation tax computations provide business
                            owners with a clear picture of their financial performance and ensure
                            that statutory obligations are met correctly and on time.
                        </p>

                        <div className="mb-4 mt-3.5 flex w-full max-w-lg items-center justify-center gap-2.5">
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                            <span
                                className="text-[12px] font-semibold whitespace-nowrap sm:text-[12.5px]"
                                style={{ color: "#555555" }}
                            >
                                Effective year-end processes help businesses:
                            </span>
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
                        {whyYearEndMatters.map((card) => (
                            <MatterCard key={card.title} {...card} />
                        ))}
                    </div>

                    <p
                        className="mx-auto mt-6 max-w-3xl text-center text-[12.5px] leading-relaxed sm:text-[13px]"
                        style={{ color: GREY }}
                    >
                        For accounting firms, efficient year-end processes improve profitability,
                        increase capacity, and free up senior staff to focus on advisory services
                        and client relationships.
                    </p>
                </div>
            </section>

            {/* 4 — Year-End + Corporation Tax services */}
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
                                Year-End &amp; Corporation Tax
                            </span>{" "}
                            Services
                        </h2>

                        <p
                            className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            From statutory accounts preparation to CT600 packs, we support the
                            full year-end compliance cycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={FileText}
                            titleBefore="Our Year-End "
                            titleAccent="Accounts"
                            titleAfter=" Services Include"
                            items={yearEndServices}
                        />
                        <ServiceCard
                            icon={Calculator}
                            titleBefore="Our "
                            titleAccent="Corporation Tax"
                            titleAfter=" Services Include"
                            items={corporationTaxServices}
                        />
                    </div>
                </div>
            </section>

            {/* 5 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-3 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-7 text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: PILL_BG, color: ORANGE }}
                        >
                            <Scale className="h-3 w-3" strokeWidth={2.5} />
                            Specialist Coverage
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Specialist Areas{" "}
                            <span style={{ color: ORANGE }}>We Support</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
                        <div
                            className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                            style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
                        >
                            <h3
                                className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                style={{ color: NAVY }}
                            >
                                Statutory Accounts Preparation
                            </h3>
                            <p className="mb-4 text-[12.5px] leading-relaxed" style={{ color: GREY }}>
                                Preparation of compliant financial statements for:
                            </p>
                            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {statutoryAccountsTypes.map((item) => (
                                    <SchemePill key={item} text={item} />
                                ))}
                            </ul>
                        </div>

                        <div
                            className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                            style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
                        >
                            <h3
                                className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                style={{ color: NAVY }}
                            >
                                Year-End Adjustments
                            </h3>
                            <p className="mb-4 text-[12.5px] leading-relaxed" style={{ color: GREY }}>
                                Preparation and review of:
                            </p>
                            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                {yearEndAdjustments.map((item) => (
                                    <SchemePill key={item} text={item} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        className="mt-6 rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                        style={{ boxShadow: "0 8px 28px rgba(15,23,42,0.06)" }}
                    >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                    <Landmark className="h-7 w-7" strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3
                                    className="text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Director Loan Accounts &amp; Capital Allowances
                                </h3>
                                <p
                                    className="mt-2 text-[13px] leading-relaxed sm:text-[13.5px]"
                                    style={{ color: GREY }}
                                >
                                    Review and reconciliation of director loan accounts, asset
                                    registers, depreciation schedules, and capital allowance claims
                                    to ensure accurate disclosures and tax calculations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounts production, corporation tax, and supporting tools your practice already uses."
                logodata={softwareExpertiseLogodata}
                className="!py-3"
                showTextForMissing={true}
            />

            {/* 7 — Industries */}
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
                                We support accounting firms serving clients across a wide range of
                                sectors, including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid industries={UK_YEAR_END_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* 8 — Why Choose */}
            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleAfter="?"
                subtitle="Dedicated year-end and corporation tax specialists who work as an extension of your practice."
                items={whyChooseCards}
                imageSrc="/images/DSC09669.JPG"
                imageAlt="NextLedgers year-end and corporation tax specialists"
            />

            {/* 9 — Cream partner CTA */}
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
                            Year-End Compliance Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your{" "}
                            <span style={{ color: ORANGE }}>Year-End Compliance</span> Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Year-end accounts and corporation tax compliance require technical
                            knowledge, consistency, and attention to detail. Our experienced
                            professionals help UK accounting firms streamline compliance
                            processes, strengthen quality controls, and scale efficiently without
                            increasing internal resource pressures.
                        </p>

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
                                Whether you need support with statutory accounts preparation,
                                corporation tax computations, CT600 returns, year-end adjustments,
                                or dedicated resources, NextLedgers can provide reliable
                                support that integrates seamlessly with your accounting
                                practice.
                            </p>
                        </div>

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
                            {partnerTrust.map(({ icon: Icon, label }) => (
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

            <Footer region="uk" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
