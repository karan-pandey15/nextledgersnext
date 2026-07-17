"use client";

import USANavbar from "@/app/components/USANavbar/USANavbar";
import {
    Calendar,
    Play,
    ShieldCheck,
    Lock,
    Award,
    Users,
    PuzzleIcon,
    Headset,
    Phone,
    Send,
    AlertTriangle,
    BadgeCheck,
    FileSpreadsheet,
    FileCheck,
    Scale,
    ClipboardCheck,
    BookOpen,
    Calculator,
    Landmark,
    Eye,
    Target,
    Handshake,
    Star,
    Network,
    LockKeyhole,
    Layers,
    Briefcase,
    Building2,
    HardHat,
    ShoppingBag,
    Monitor,
    HeartPulse,
    Home,
    Package,
    Rocket,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";
import { motion } from "framer-motion";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import TrustBadgesBar, {
    USA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const whyYearEndMatters = [
    {
        icon: FileSpreadsheet,
        title: "Prepare accurate financial statements",
        description:
            "Deliver complete, reliable year-end statements ready for tax, lenders, and stakeholders.",
    },
    {
        icon: ClipboardCheck,
        title: "Complete year-end close efficiently",
        description:
            "Streamline close procedures so deadlines are met without compromising quality.",
    },
    {
        icon: BookOpen,
        title: "Maintain reliable accounting records",
        description:
            "Keep ledgers, schedules, and working papers consistent and audit-ready.",
    },
    {
        icon: Calculator,
        title: "Support tax preparation and compliance",
        description:
            "Provide tax-ready financials that reduce rework for CPA tax teams.",
    },
    {
        icon: Landmark,
        title: "Improve lender and investor reporting",
        description:
            "Produce pack-ready statements that meet funding and stakeholder expectations.",
    },
    {
        icon: Scale,
        title: "Strengthen audit readiness",
        description:
            "Build CPA-ready working papers and support that stand up to review.",
    },
    {
        icon: Target,
        title: "Reduce reporting errors and adjustments",
        description:
            "Catch issues early with structured reviews and balance sheet reconciliations.",
    },
    {
        icon: Eye,
        title: "Improve financial visibility for planning",
        description:
            "Give clients clearer insight from year-end results into next-year decisions.",
    },
];

const serviceLines = [
    {
        title: "Financial Statement Preparation",
        shortTitle: "Statements",
        icon: FileSpreadsheet,
        items: [
            "Financial Statement Preparation",
            "Income Statement (Profit & Loss)",
            "Balance Sheet Preparation",
            "Cash Flow Statement Preparation",
            "Statement of Changes in Equity",
            "Trial Balance Reviews",
            "General Ledger Reviews",
            "Tax-Ready Financial Statements",
            "Consolidated Financial Statements",
        ],
    },
    {
        title: "Year-End Close & Adjustments",
        shortTitle: "Year-End Close",
        icon: ClipboardCheck,
        items: [
            "Year-End Adjustments & Journal Entries",
            "Accruals & Prepaid Expense Reviews",
            "Fixed Asset & Depreciation Reviews",
            "Bank, AR & AP Reconciliations",
            "Balance Sheet Reconciliations",
            "Supporting Financial Schedules",
        ],
    },
    {
        title: "Working Papers & Packages",
        shortTitle: "Working Papers",
        icon: FileCheck,
        items: [
            "Year-End Working Papers",
            "CPA-Ready Working Papers",
            "Management Reporting Packages",
            "Tax-Ready Financial Statements",
            "Consolidated Financial Statements",
            "Supporting Financial Schedules",
        ],
    },
];

const consolidatedReportingItems = [
    "Consolidated financial statements",
    "Intercompany reconciliations",
    "Consolidation adjustments",
    "Group reporting schedules",
];

const financialStatementEntities = [
    "Startups",
    "Small & Medium Businesses (SMEs)",
    "Professional Service Firms",
    "Nonprofit Organisations",
    "Multi-Entity Businesses",
    "Holding Companies",
    "Group Reporting Structures",
    "Investor & Lender Reporting",
];

const yearEndAdjustments = [
    "Accruals & Prepayments",
    "Depreciation Entries",
    "Fixed Asset Registers",
    "Payroll Accruals",
    "Sales Tax Adjustments",
    "Accounts Receivable & Payable Reconciliations",
    "Intercompany Adjustments",
    "Closing Journal Entries",
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING PLATFORMS",
        icon: "briefcase",
        logos: [
            "quickbooks online",
            "quickbooks",
            "xero",
            "sage",
            "zoho books",
        ],
    },
    {
        heading: "FINANCIAL REPORTING & TOOLS",
        icon: "chart",
        logos: [
            "microsoft excel",
            "google sheets",
            "power bi",
            "fathom",
            "spotlight reporting",
        ],
    },
    {
        heading: "SUPPORTING TOOLS",
        icon: "document",
        logos: [
            "dext",
            "hubdoc",
            "sharepoint",
            "microsoft 365",
            "approvalmax",
        ],
    },
];

const industriesWeSupport = [
    {
        label: "Professional Service Firms",
        icon: Briefcase,
        bg: "#E8F4FF",
        color: "#0284C7",
    },
    {
        label: "Technology Companies",
        icon: Monitor,
        bg: "#E8F1FF",
        color: "#2563EB",
    },
    {
        label: "Construction Businesses",
        icon: HardHat,
        bg: "#FFF4E5",
        color: "#FF6A00",
    },
    {
        label: "Manufacturing Companies",
        icon: Package,
        bg: "#F3E8FF",
        color: "#7C3AED",
    },
    {
        label: "Healthcare Providers",
        icon: HeartPulse,
        bg: "#FFE8EE",
        color: "#BE123C",
    },
    {
        label: "E-Commerce & Online Retail",
        icon: ShoppingBag,
        bg: "#E8F8EF",
        color: "#16A34A",
    },
    {
        label: "Amazon & Shopify Businesses",
        icon: Rocket,
        bg: "#FFF0E8",
        color: BRAND_ORANGE,
    },
    {
        label: "Real Estate Businesses",
        icon: Home,
        bg: "#E8F8EF",
        color: "#059669",
    },
    {
        label: "Nonprofit Organisations",
        icon: HeartPulse,
        bg: "#FFF4EA",
        color: "#C2410C",
    },
    {
        label: "Multi-Entity Groups",
        icon: Building2,
        bg: "#E8F1FF",
        color: "#3B82F6",
    },
];

const whyChooseCards = [
    { title: "ACCA-Led Delivery Team", icon: Award },
    { title: "US Year-End Accounting Expertise", icon: BookOpen },
    { title: "Financial Statement Preparation Specialists", icon: FileCheck },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Dedicated Offshore Resources", icon: Users },
    { title: "Structured Review Processes", icon: ClipboardCheck },
    { title: "Multi-Software Expertise", icon: Layers },
    { title: "Flexible Engagement Models", icon: Network },
    { title: "Secure Data Handling", icon: LockKeyhole },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "IRS Aligned" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by US CPA Firms" },
];

function Reveal({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{
                duration: 0.45,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
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
            <span
                className="text-[11.5px] font-medium leading-snug sm:text-[12px]"
                style={{ color: NAVY }}
            >
                {text}
            </span>
        </li>
    );
}

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00] sm:h-10 sm:w-10">
                {icon}
            </div>
            <div className="text-[15px] font-extrabold leading-none text-[#0B1F3A] sm:text-[17px]">
                {value}
            </div>
            <div className="max-w-[140px] text-[10px] leading-tight text-gray-500 sm:max-w-[90px] sm:text-[11px]">
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

export default function UsaYearEndAccounts() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <TopAnnouncementBar region="usa" />
            <USANavbar
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

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            USA Year-End Accounts &amp; Financial Statement
                            Preparation
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-xl sm:text-3xl lg:text-[34px]">
                            USA Year-End Accounts &amp;{" "}
                            <span className="text-[#FF6A00]">
                                Financial Statements
                            </span>
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Year-End Accounting &amp; Financial
                            Statement Support for US CPA Firms
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
                    <div className="mt-8 w-full sm:mt-10">
                        <TrustBadgesBar
                            badges={USA_TRUST_BADGES}
                            className="!mt-0"
                        />
                    </div>
                </div>
            </section>

            {/* 2 — Intro / Partnership */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Year-End Accounting &amp; Financial
                                Statement Support for US CPA Firms
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Year-end accounts and financial statement
                                preparation remain one of the most important
                                services delivered by US CPA firms — and one of
                                the most capacity-intensive.
                            </p>

                            <div className="mb-5 space-y-3">
                                <div className="rounded-[14px] border border-[#F0E6DC] bg-[#FFF9F5] p-4 sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#FF6A00] shadow-sm">
                                            <AlertTriangle
                                                className="h-4 w-4"
                                                strokeWidth={2.25}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            The Challenge
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        Growing portfolios, tighter deadlines,
                                        and more complex businesses make it hard
                                        to maintain capacity while delivering
                                        accurate, timely, and compliant
                                        financial reports.
                                    </p>
                                </div>

                                <div className="rounded-[14px] border border-[#F0E6DC] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00]">
                                            <Handshake
                                                className="h-4 w-4"
                                                strokeWidth={2.25}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            How NextLedgers Helps
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        Dedicated offshore Year-End Accounts
                                        &amp; Financial Statement Preparation
                                        support — helping firms improve
                                        turnaround, increase delivery capacity,
                                        and maintain reporting quality through
                                        white-label offshore delivery.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                Support we deliver
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {[
                                    "Financial statements",
                                    "Year-end close",
                                    "Working papers",
                                    "Reconciliations",
                                    "Adjusting entries",
                                    "Consolidated reporting",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E6DC] bg-[#FFF9F5] px-3 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
                                    >
                                        <BadgeCheck
                                            className="h-3.5 w-3.5 text-[#FF6A00]"
                                            strokeWidth={2.25}
                                        />
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <CtaButton href="/contact" variant="primary" size="md">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Year-end accounting team preparing financial statements"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-4 right-4 grid grid-cols-2 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:grid-cols-4 sm:px-5 sm:py-5">
                                <Stat
                                    icon={<Users className="h-5 w-5" />}
                                    value="500+"
                                    label="US CPA Firms"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="IRS-Aligned"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Offshore Support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Year-End Matters */}
            <section
                className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
                style={{ background: PAGE_CREAM }}
            >
                <DotGrid className="pointer-events-none absolute right-4 top-6 opacity-50 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 opacity-40 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: PILL_BG,
                                borderColor: "rgba(255, 106, 0,0.35)",
                                color: ORANGE,
                            }}
                        >
                            Why It Matters
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Year-End Accounts &amp;{" "}
                            <span style={{ color: ORANGE }}>
                                Financial Statement Preparation
                            </span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Accurate financial statements give business owners,
                            lenders, investors, and tax professionals reliable
                            information that supports compliance, funding, and
                            strategic decisions.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyYearEndMatters.map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E6DC] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl text-white"
                                            style={{
                                                background: ORANGE,
                                                boxShadow:
                                                    "0 6px 16px rgba(255, 106, 0,0.28)",
                                            }}
                                        >
                                            <Icon
                                                className="h-5 w-5"
                                                strokeWidth={2}
                                            />
                                        </span>
                                        <h3
                                            className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                            style={{ color: NAVY }}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className="mt-2 text-[12px] leading-relaxed sm:text-[12.5px]"
                                            style={{ color: GREY }}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </Reveal>
                            )
                        )}
                    </div>

                    <div
                        className="relative mt-6 w-full overflow-hidden rounded-xl bg-white px-5 py-5 text-center sm:mt-7 sm:px-8 sm:py-6"
                    >
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            For CPA firms, efficient year-end processes improve
                            profitability, increase engagement capacity, and
                            allow senior professionals to focus on advisory
                            services and client relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Our Year-End Services explorer */}
            <ServiceDeliverablesExplorer
                eyebrow="Our Deliverables"
                titleBefore="Our Year-End Accounts "
                titleAccent="Services"
                titleAfter=" Include"
                subtitle="Comprehensive financial statement preparation and year-end close support for US CPA firms."
                services={serviceLines}
            />

            {/* 5 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mb-7 text-center">
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
                    </Reveal>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
                        <Reveal>
                            <div
                                className="h-full rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <h3
                                    className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Financial Statement Preparation
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Preparation of accurate year-end financial
                                    statements for:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {financialStatementEntities.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div
                                className="h-full rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <h3
                                    className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Year-End Close &amp; Adjustments
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Preparation and review of:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {yearEndAdjustments.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.12} className="mt-6">
                        <div
                            className="rounded-[16px] border border-[#F3E6D8] bg-[#FFF9F5] p-5 sm:p-6"
                            style={{
                                boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                            }}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                <span
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                                    style={{ background: ORANGE }}
                                >
                                    <Layers
                                        className="h-5 w-5 text-white"
                                        strokeWidth={2}
                                    />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <h3
                                        className="text-[15px] font-bold sm:text-[16px]"
                                        style={{ color: NAVY }}
                                    >
                                        Consolidated Financial Reporting
                                    </h3>
                                    <p
                                        className="mt-2 text-[13px] leading-relaxed sm:text-[13.5px]"
                                        style={{ color: GREY }}
                                    >
                                        Accurate multi-entity and group reporting
                                        with consolidations that stay aligned
                                        across the full year-end pack.
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                        {consolidatedReportingItems.map(
                                            (item) => (
                                                <SchemePill
                                                    key={item}
                                                    text={item}
                                                />
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 6 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting platforms, reporting tools, and workflow systems your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-10 sm:!py-12 lg:!py-14"
            />

            {/* Soft break before industries */}
            <div
                className="flex items-center justify-center gap-3 bg-white px-4 py-2"
                aria-hidden="true"
            >
                <span className="h-px w-10 bg-[#F0E6DC] sm:w-16" />
                <span
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                >
                    Industry Coverage
                </span>
                <span className="h-px w-10 bg-[#F0E6DC] sm:w-16" />
            </div>
            {/* 7 — Industries */}
            <section className="relative w-full overflow-hidden bg-white py-5 sm:py-6 lg:py-7">
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
                                Industries We{" "}
                                <span style={{ color: ORANGE }}>Support</span>
                            </h2>

                            <p
                                className="mx-auto mt-2 max-w-[540px] text-[12px] leading-5 sm:mt-2 sm:text-[13px] sm:leading-6"
                                style={{ color: GREY }}
                            >
                                We support CPA firms serving clients across a
                                wide range of industries, including:
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-5">
                            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-3">
                                {industriesWeSupport
                                    .slice(0, 5)
                                    .map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <Reveal
                                                key={item.label}
                                                delay={Math.min(
                                                    index * 0.04,
                                                    0.2
                                                )}
                                            >
                                                <div className="flex min-h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3">
                                                    <div
                                                        className="flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                                                        style={{
                                                            backgroundColor:
                                                                item.bg,
                                                        }}
                                                    >
                                                        <Icon
                                                            className="h-5 w-5 sm:h-5 sm:w-5"
                                                            style={{
                                                                color: item.color,
                                                            }}
                                                            strokeWidth={1.75}
                                                        />
                                                    </div>
                                                    <p
                                                        className="mt-1.5 text-[11px] font-bold leading-snug sm:text-[12px]"
                                                        style={{ color: NAVY }}
                                                    >
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </Reveal>
                                        );
                                    })}
                            </div>
                            <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-3 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-3">
                                {industriesWeSupport
                                    .slice(5)
                                    .map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <Reveal
                                                key={item.label}
                                                delay={Math.min(
                                                    0.08 + index * 0.04,
                                                    0.28
                                                )}
                                            >
                                                <div className="flex min-h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3">
                                                    <div
                                                        className="flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                                                        style={{
                                                            backgroundColor:
                                                                item.bg,
                                                        }}
                                                    >
                                                        <Icon
                                                            className="h-5 w-5 sm:h-5 sm:w-5"
                                                            style={{
                                                                color: item.color,
                                                            }}
                                                            strokeWidth={1.75}
                                                        />
                                                    </div>
                                                    <p
                                                        className="mt-1.5 text-[11px] font-bold leading-snug sm:text-[12px]"
                                                        style={{ color: NAVY }}
                                                    >
                                                        {item.label}
                                                    </p>
                                                </div>
                                            </Reveal>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8 — Why Choose NextLedgers */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Star
                                className="h-3 w-3"
                                strokeWidth={2.5}
                                fill={ORANGE}
                            />
                            Partner Advantages
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Choose{" "}
                            <span style={{ color: ORANGE }}>NextLedgers</span>?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            ACCA-led offshore year-end accounting and financial
                            statement specialists for US CPA firms.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(0, 4).map(({ title, icon: Icon }, index) => (
                            <Reveal key={title} delay={Math.min(index * 0.05, 0.2)}>
                                <div className="h-full rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-9 w-9 items-center justify-center"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-6 w-6"
                                            strokeWidth={1.75}
                                        />
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
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(4).map(({ title, icon: Icon }, index) => (
                            <Reveal
                                key={title}
                                delay={Math.min(0.08 + index * 0.04, 0.28)}
                            >
                                <div className="h-full rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-9 w-9 items-center justify-center"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-6 w-6"
                                            strokeWidth={1.75}
                                        />
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
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 — Partner CTA */}
            <section className="relative w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
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
                            className="mb-4 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: "white",
                                borderColor: "rgba(255, 106, 0,0.35)",
                                color: ORANGE,
                            }}
                        >
                            <Handshake className="h-3 w-3" strokeWidth={2.5} />
                            Partnership
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore Year-End Accounting Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Technical expertise, consistency, and meticulous
                            attention to detail — helping US CPA firms streamline
                            year-end reporting and increase capacity without
                            adding internal headcount.
                        </p>

                        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                            {[
                                "Financial statements",
                                "Year-end close",
                                "Consolidations",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E6DC] bg-white px-3.5 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
                                >
                                    <BadgeCheck
                                        className="h-3.5 w-3.5 text-[#FF6A00]"
                                        strokeWidth={2.25}
                                    />
                                    {item}
                                </span>
                            ))}
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

                        <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#F0E6DC] pt-6">
                            {partnerTrust.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2 text-[12px] font-semibold"
                                    style={{ color: NAVY }}
                                >
                                    <Icon
                                        className="h-4 w-4"
                                        style={{ color: ORANGE }}
                                        strokeWidth={2}
                                    />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer region="usa" />
        </main>
    );
}
