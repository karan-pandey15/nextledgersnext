"use client";

import USANavbar from "@/app/components/USANavbar/USANavbar";
import {
    Calendar,
    Play,
    ShieldCheck,
    Lock,
    Award,
    UserCheck,
    Users,
    PuzzleIcon,
    Headset,
    Pencil,
    Layers,
    FileBarChart,
    Handshake,
    Phone,
    Send,
    AlertTriangle,
    BadgeCheck,
    Wallet,
    TrendingUp,
    Target,
    Calculator,
    Gauge,
    ChartLine,
    Eye,
    ClipboardCheck,
    Network,
    LockKeyhole,
    Briefcase,
} from "lucide-react";
import { HomeLogoImg } from "@/app/lib/homePageLogos";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar, {
    USA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import Footer from "@/app/components/footer/Footer";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const managementMattersItems = [
    {
        icon: Eye,
        title: "Improve financial visibility and reporting",
        description:
            "Give clients clear, timely views of performance beyond year-end accounts.",
    },
    {
        icon: Wallet,
        title: "Strengthen cash flow management",
        description:
            "Track inflows, outflows, and working capital so cash decisions stay proactive.",
    },
    {
        icon: TrendingUp,
        title: "Monitor profitability and business performance",
        description:
            "Surface margin trends and performance drivers before they become problems.",
    },
    {
        icon: Target,
        title: "Make informed strategic decisions",
        description:
            "Equip owners and partners with insight that supports confident planning.",
    },
    {
        icon: Calculator,
        title: "Develop realistic budgets and forecasts",
        description:
            "Build budgets and forward views grounded in current financial data.",
    },
    {
        icon: Gauge,
        title: "Track key performance indicators (KPIs)",
        description:
            "Monitor the metrics that matter with clear dashboards and commentary.",
    },
    {
        icon: FileBarChart,
        title: "Support investor and lender reporting",
        description:
            "Deliver pack-ready reporting that meets stakeholder expectations.",
    },
    {
        icon: ChartLine,
        title: "Improve long-term financial planning",
        description:
            "Connect monthly reporting to growth, investment, and runway planning.",
    },
];

const managementServices = [
    "Monthly Management Accounts",
    "Profit & Loss Reporting",
    "Balance Sheet Reviews",
    "Cash Flow Reporting & Forecasting",
    "Budget Preparation & Budget vs Actual Analysis",
    "Financial Forecasting",
    "KPI Dashboard Preparation",
    "Business Performance Analysis",
    "Gross Margin & Profitability Reviews",
    "Department & Cost Centre Reporting",
    "Board Reporting Packs",
    "Executive Financial Dashboards",
    "Business Growth Planning Support",
    "Working Capital Analysis",
    "Financial Strategy Support",
    "Virtual CFO Advisory Assistance",
];

const helpExpandAdvisory = [
    "Expand advisory and Virtual CFO services",
    "Improve monthly reporting turnaround",
    "Increase finance team capacity",
    "Deliver consistent management reporting",
];

const helpScalePractice = [
    "Reduce internal workload",
    "Better utilise senior accountants and partners",
    "Scale recurring advisory engagements",
    "Improve profitability without increasing local recruitment",
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
        heading: "REPORTING & CFO TOOLS",
        icon: "chart",
        logos: [
            "fathom",
            "spotlight reporting",
            "power bi",
            "microsoft excel",
            "google sheets",
        ],
    },
    {
        heading: "DOCUMENT & WORKFLOW",
        icon: "document",
        logos: [
            "dext",
            "hubdoc",
            "approvalmax",
            "sharepoint",
            "microsoft 365",
        ],
    },
];

const specialistAreas = [
    {
        label: "Startups & High-Growth Businesses",
        description:
            "Budgeting, cash flow forecasting, financial modelling, investor reporting, and growth planning.",
        image: "/images/nexticon/startupsmes.png",
    },
    {
        label: "SMEs & Owner-Managed Businesses",
        description:
            "Monthly management accounts, KPI reporting, profitability analysis, and business performance monitoring.",
        image: "/images/nexticon/professionalservices.png",
    },
    {
        label: "Multi-Entity & Group Businesses",
        description:
            "Consolidated management reporting, intercompany reporting, and group financial performance analysis.",
        image: "/images/nexticon/manugacturing.png",
    },
    {
        label: "Investor-Backed Companies",
        description:
            "Board reporting, executive dashboards, financial forecasting, and stakeholder reporting.",
        image: "/images/nexticon/technology.png",
    },
    {
        label: "Businesses Requiring Virtual CFO Support",
        description:
            "Strategic financial reporting, cash flow management, budgeting, business planning, and executive financial guidance.",
        image: "/images/nexticon/consulting.png",
    },
];

const whyChooseNextLedgers = [
    { title: "ACCA-Led Delivery Team", icon: Award },
    { title: "US Management Accounting Expertise", icon: Briefcase },
    { title: "Virtual CFO Support Specialists", icon: UserCheck },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Dedicated Resources", icon: Users },
    { title: "Multi-Software Expertise", icon: Layers },
    { title: "Structured Financial Reporting Processes", icon: ClipboardCheck },
    { title: "Flexible Engagement Models", icon: Network },
    { title: "Secure Data Handling", icon: LockKeyhole },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "IRS Aligned" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by US CPA Firms" },
];

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

function HelpCard({ icon: Icon, titleBefore, titleAccent, titleAfter, items }) {
    return (
        <div
            className="rounded-[16px] border border-[#F0E0D2] bg-white p-5 sm:p-6 lg:p-7"
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

function Stat({ icon, logo, value, label }) {
    return (
        <div className="flex flex-col items-center gap-1.5 text-center">
            <div
                className={
                    logo != null
                        ? "flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10"
                        : "flex h-9 w-9 items-center justify-center rounded-full bg-[#FF6A00]/10 text-[#FF6A00] sm:h-10 sm:w-10"
                }
            >
                {logo != null ? <HomeLogoImg n={logo} alt="" /> : icon}
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

export default function UsaManagementAccounting() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <USANavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* 1 — Hero */}
            <section
                className="relative w-full overflow-hidden px-4 pb-5 pt-8 sm:px-6 sm:pb-5 sm:pt-10 lg:px-8"
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
                            USA Management Accounting &amp; Virtual CFO
                            Outsourcing Services
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                            USA Management Accounting &amp;{" "}
                            <span className="text-[#FF6A00]">Virtual CFO</span>{" "}
                            Outsourcing Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Specialist Management Accounting &amp; Virtual CFO
                            Support for US CPA Firms and Accounting Practices
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
                    <div className="mt-5 w-full">
                        <TrustBadgesBar
                            badges={USA_TRUST_BADGES}
                            className="!mt-0"
                        />
                    </div>
                </div>
            </section>

            {/* 2 — Intro / Partnership */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-8">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 max-w-xl text-[24px] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#0B1F3A] sm:text-[28px] lg:text-[30px]">
                                Specialist Management Accounting &amp;{" "}
                                <span className="whitespace-nowrap">
                                    Virtual CFO
                                </span>{" "}
                                Support
                                <span className="mt-0.5 block">
                                    for US CPA Firms
                                </span>
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Management Accounting and Virtual CFO services
                                have become increasingly valuable for US
                                businesses seeking better financial visibility,
                                stronger cash flow management, and strategic
                                decision-making.
                            </p>

                            <div className="mb-5 space-y-3">
                                <div className="rounded-[14px] border border-[#F0E0D2] bg-[#FFF9F5] p-4 sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                            <AlertTriangle
                                                className="h-7 w-7"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            The Challenge
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        As client expectations grow beyond
                                        compliance, CPA firms face pressure to
                                        deliver timely management reporting,
                                        budgeting, forecasting, KPI analysis, and
                                        executive financial insights.
                                    </p>
                                </div>

                                <div className="rounded-[14px] border border-[#F0E0D2] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                            <Handshake
                                                className="h-7 w-7"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            How NextLedgers Helps
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        Dedicated Management Accounting
                                        &amp; Virtual CFO support for US CPA firms
                                        — an extension of your practice to expand
                                        advisory services, improve turnaround, and
                                        deliver white-label reporting without
                                        increasing headcount.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-5">
                                <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                    Support we deliver
                                </p>
                                <div className="flex flex-wrap items-center gap-2">
                                    {[
                                        "Management reporting",
                                        "Budgeting support",
                                        "Cash flow forecasting",
                                        "KPI dashboards",
                                        "Board reporting",
                                        "Virtual CFO assistance",
                                    ].map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E0D2] bg-[#FFF9F5] px-3 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
                                        >
                                            <BadgeCheck
                                                className="h-3.5 w-3.5 text-[#FF6A00]"
                                                strokeWidth={2.25}
                                            />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-0.5">
                                <CtaButton href="/contact" variant="primary" size="md">
                                    <Phone className="h-4 w-4" strokeWidth={2.25} />
                                    Book a Discovery Call
                                </CtaButton>
                            </div>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Management accounting team at work"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-4 right-4 grid grid-cols-2 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:grid-cols-4 sm:px-5 sm:py-5">
                                <Stat
                                    logo={4}
                                    value="500+"
                                    label="US CPA Firms"
                                />
                                <Stat
                                    logo={15}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    logo={18}
                                    value="100%"
                                    label="IRS-Aligned"
                                />
                                <Stat
                                    logo={16}
                                    value="Dedicated"
                                    label="Support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Management Accounting & Virtual CFO Matter */}
            <section
                className="relative w-full overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                <DotGrid className="pointer-events-none absolute right-4 top-6 opacity-50 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 opacity-40 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-5 flex flex-col items-center text-center">
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
                            Why Management Accounting &amp;{" "}
                            <span style={{ color: ORANGE }}>
                                Virtual CFO Services
                            </span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Management Accounting goes beyond historical reporting —
                            Virtual CFO support gives businesses strategic financial
                            insight without the cost of a full-time CFO.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {managementMattersItems.map(({ title, description, icon: Icon }) => (
                            <div
                                key={title}
                                className="flex flex-col rounded-[16px] border border-[#F0E0D2] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6"
                            >
                                <span
                                    className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl"
                                    style={{ background: PILL_BG, color: ORANGE }}
                                >
                                    <Icon className="h-7 w-7" strokeWidth={1.75} />
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
                        ))}
                    </div>

                    <div
                        className="relative mt-4 w-full overflow-hidden rounded-xl px-5 py-4 text-center sm:px-8 sm:py-5"
                        style={{ background: "white" }}
                    >
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            For CPA firms, offering Management Accounting and
                            Virtual CFO services creates stronger client
                            relationships while generating recurring advisory
                            revenue.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Our Management Accounting & Virtual CFO Services */}
            <section className="relative w-full overflow-hidden bg-white py-5">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255, 106, 0,0.18) 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-8 xl:gap-10">
                        <div className="flex flex-col justify-center">
                            <span
                                className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
                                style={{ color: ORANGE }}
                            >
                                Our Deliverables
                            </span>

                            <h2
                                className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                style={{ color: NAVY }}
                            >
                                Our Management Accounting &amp;{" "}
                                <span style={{ color: ORANGE }}>
                                    Virtual CFO Services
                                </span>{" "}
                                Include
                            </h2>

                            <p
                                className="mt-2.5 text-[14px] leading-relaxed sm:text-[15px]"
                                style={{ color: GREY }}
                            >
                                We provide comprehensive management reporting and
                                Virtual CFO support, including:
                            </p>

                            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
                                {managementServices.map((service) => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-2.5 rounded-xl border border-[#F0E0D2] bg-white px-3 py-2 shadow-[0_2px_10px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_4px_16px_rgba(255,106,0,0.12)]"
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
                                            className="text-[12px] font-semibold leading-snug sm:text-[12.5px]"
                                            style={{ color: NAVY }}
                                        >
                                            {service}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative h-[220px] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:h-[260px] sm:rounded-[24px] lg:sticky lg:top-24 lg:h-[280px]">
                            <Image
                                src="/images/DSC09781.JPG"
                                alt="Our Management Accounting and Virtual CFO Services"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 — How We Help CPA Firms */}
            <section
                className="relative w-full overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                <DotGrid className="pointer-events-none absolute right-6 top-6 opacity-50 sm:right-10 sm:top-8" />
                <svg
                    className="pointer-events-none absolute left-0 top-0 h-40 w-64 opacity-30 sm:h-48 sm:w-80"
                    viewBox="0 0 320 180"
                    fill="none"
                    aria-hidden="true"
                >
                    <path
                        d="M0,90 C60,40 120,140 180,80 C240,20 280,100 320,70"
                        stroke="#F3E0D0"
                        strokeWidth="18"
                        strokeLinecap="round"
                    />
                    <path
                        d="M0,120 C80,70 140,160 200,110 C260,60 300,130 320,100"
                        stroke="#F8E8DC"
                        strokeWidth="14"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="relative mx-auto flex w-full max-w-6xl flex-col">
                    <div className="mb-5 flex flex-col items-center text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: PILL_BG,
                                borderColor: "rgba(255, 106, 0,0.35)",
                                color: ORANGE,
                            }}
                        >
                            <Pencil className="h-3 w-3" strokeWidth={2.5} />
                            CPA Firm Support
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                            style={{ color: NAVY }}
                        >
                            How We Help{" "}
                            <span style={{ color: ORANGE }}>CPA Firms</span>
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Our finance professionals support firms
                            throughout the management reporting cycle, from
                            preparing monthly management accounts to delivering
                            executive-level financial reporting and Virtual CFO
                            support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <HelpCard
                            icon={Award}
                            titleBefore="Expand "
                            titleAccent="Advisory"
                            titleAfter=" Capacity"
                            items={helpExpandAdvisory}
                        />
                        <HelpCard
                            icon={Users}
                            titleBefore="Scale Your "
                            titleAccent="Practice"
                            titleAfter=""
                            items={helpScalePractice}
                        />
                    </div>
                </div>
            </section>

            {/* 6 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting platforms, reporting tools, and workflow systems your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-5"
            />

            {/* 7 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white py-5">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div
                        className="rounded-none px-5 py-5 sm:px-8 lg:px-10"
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
                                    Specialist Areas
                                </p>
                                <span
                                    className="hidden h-px w-8 sm:block"
                                    style={{ background: ORANGE }}
                                    aria-hidden="true"
                                />
                            </div>

                            <h2
                                className="mt-3 text-[24px] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[30px] lg:text-[34px]"
                                style={{ color: NAVY }}
                            >
                                Specialist Areas We{" "}
                                <span style={{ color: ORANGE }}>Support</span>
                            </h2>

                            <p
                                className="mx-auto mt-3 max-w-[560px] text-[13px] leading-relaxed sm:mt-3.5 sm:text-[14px]"
                                style={{ color: GREY }}
                            >
                                We support CPA firms serving clients across
                                high-growth, multi-entity, and Virtual
                                CFO-ready businesses.
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-5">
                            {specialistAreas.map((item) => {
                                return (
                                    <div
                                        key={item.label}
                                        className="flex min-h-[168px] flex-col items-center justify-start rounded-[16px] border border-[#F0E0D2] bg-white px-3 py-5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FFB77F] hover:bg-[#FFFCF9] sm:min-h-[180px] sm:rounded-[18px] sm:px-4 sm:py-6"
                                    >
                                        <Image
                                            src={item.image}
                                            alt=""
                                            width={72}
                                            height={72}
                                            className="h-16 w-16 object-contain sm:h-[72px] sm:w-[72px]"
                                            aria-hidden="true"
                                        />
                                        <p
                                            className="mt-3 text-[12px] font-bold leading-snug sm:text-[13px]"
                                            style={{ color: NAVY }}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className="mt-1.5 text-[11px] leading-relaxed sm:text-[11.5px]"
                                            style={{ color: GREY }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose NextLedgers — UK split list + image */}
            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleMiddle=" for "
                titleAccent2="Management Accounting"
                titleAfter="?"
                subtitle="ACCA-led management accounting and Virtual CFO specialists for US CPA firms and accounting practices."
                items={whyChooseNextLedgers}
            />

            {/* 9 — Partner CTA (dual CTAs + partnerTrust) */}
            <section className="relative w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
                <div
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] px-5 py-5 text-center sm:rounded-[28px] sm:px-10 sm:py-6 lg:px-14"
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
                            Management Accounting &amp; Virtual CFO Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your{" "}
                            <span style={{ color: ORANGE }}>
                                Management Accounting &amp; Virtual CFO
                            </span>{" "}
                            Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Management Accounting and Virtual CFO services
                            require analytical expertise, commercial
                            understanding, and timely financial reporting. Our
                            experienced professionals help US CPA firms and
                            accounting practices expand advisory services while
                            maintaining high standards of accuracy, consistency,
                            and client satisfaction.
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
                                Whether you require support with monthly
                                management accounts, budgeting, cash flow
                                forecasting, KPI reporting, board reporting,
                                financial analysis, Virtual CFO services, or
                                dedicated finance resources,
                                NextLedgers helps your practice scale
                                efficiently while delivering high-value
                                financial advisory services to your clients.
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

            <Footer region="usa" />
        </main>
    );
}
