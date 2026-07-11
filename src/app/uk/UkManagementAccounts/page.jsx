"use client";

import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import {
    Calendar,
    Play,
    Phone,
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
    Users,
    PuzzleIcon,
    Headset,
    Pencil,
    ShoppingBag,
    Megaphone,
    Monitor,
    HardHat,
    Briefcase,
    Building2,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Link from "next/link";
import TransformCTA from "@/app/components/HomeImpact/TransformCTA";
import Footer from "@/app/components/footer/Footer";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const trustBadges = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "10+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const managementMattersItems = [
    {
        icon: Award,
        title: "Are we generating sufficient profit?",
        description:
            "Track margins and profitability trends before year-end surprises appear.",
    },
    {
        icon: Lock,
        title: "Why is cash flow under pressure despite increasing sales?",
        description:
            "See where cash is tied up across receivables, payables, and working capital.",
    },
    {
        icon: PuzzleIcon,
        title: "Which products, services, or departments are performing best?",
        description:
            "Compare performance across lines of business with clear, timely reporting.",
    },
    {
        icon: Shield,
        title: "Are expenses increasing faster than revenue?",
        description:
            "Spot cost creep early and keep spending aligned with growth.",
    },
    {
        icon: ShieldCheck,
        title: "Are we meeting our budgets and financial targets?",
        description:
            "Measure budget vs actuals so owners can course-correct in real time.",
    },
    {
        icon: Users,
        title: "Can we afford to recruit more staff or invest in growth?",
        description:
            "Use current financials to support confident hiring and investment decisions.",
    },
    {
        icon: Clock,
        title: "What will our financial position look like over the coming months?",
        description:
            "Forecast forward so planning is proactive, not reactive after year-end.",
    },
];

const managementServices = [
    "Monthly & Quarterly Management Accounts",
    "Profit & Loss Reporting",
    "Balance Sheet Reporting",
    "Cash Flow Forecasting",
    "Budget vs Actual Analysis",
    "KPI Reporting & Dashboards",
    "Departmental & Divisional Reporting",
    "Board Reporting Packs",
    "Management Commentary & Executive Summaries",
    "Business Performance Reviews",
    "Custom Financial Reporting",
];

const helpBusinessPerformance = [
    "Monitor financial performance regularly",
    "Improve cash flow visibility and planning",
    "Track profitability and key business drivers",
    "Measure performance against budgets and targets",
];

const helpBusinessStrategy = [
    "Identify trends, risks, and opportunities early",
    "Support strategic planning and business growth",
    "Make faster and more informed decisions",
];

/** Software Expertise — passed to IconDisplayScreen */
const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING PLATFORMS",
        icon: "briefcase",
        logos: [
            "xero",
            "quickbooks online",
            "sage business cloud",
            "freeagent",
        ],
    },
    {
        heading: "REPORTING & DASHBOARD TOOLS",
        icon: "chart",
        logos: [
            "fathom",
            "syft analytics",
            "spotlight reporting",
            "futrli",
            "float",
            "power bi",
            "google looker studio",
        ],
    },
];

const industriesWeSupport = [
    {
        label: "eCommerce & Online Retail",
        icon: ShoppingBag,
        bg: "#E8F8EF",
        color: "#16A34A",
    },
    {
        label: "Marketing & Creative Agencies",
        icon: Megaphone,
        bg: "#FFF0E8",
        color: "#F58220",
    },
    {
        label: "SaaS & Technology Companies",
        icon: Monitor,
        bg: "#E8F1FF",
        color: "#3B82F6",
    },
    {
        label: "Construction Businesses",
        icon: HardHat,
        bg: "#FFF4E5",
        color: "#EA580C",
    },
    {
        label: "Recruitment Agencies",
        icon: Users,
        bg: "#F3E8FF",
        color: "#9333EA",
    },
    {
        label: "Professional Service Firms",
        icon: Briefcase,
        bg: "#E8F4FF",
        color: "#0284C7",
    },
    {
        label: "Property & Real Estate Businesses",
        icon: Building2,
        bg: "#FFE8EE",
        color: "#E11D48",
    },
];

const whyChooseNextLedgers = [
    "ACCA-Led Team with UK Accounting Expertise",
    "Dedicated Offshore Management Reporting Support",
    "White-Label Service Delivery",
    "Advisory-Focused Reporting Approach",
    "Flexible Engagement Models",
    "Scalable Support Without Additional UK Hiring",
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

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F58220]/10 text-[#F58220] flex items-center justify-center">
                {icon}
            </div>
            <div className="text-[15px] sm:text-[17px] font-extrabold text-[#0B1F3A] leading-none">
                {value}
            </div>
            <div className="text-[10px] sm:text-[11px] text-gray-500 leading-tight max-w-[90px]">
                {label}
            </div>
        </div>
    );
}

export default function UkManagementAccounts() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#25404B] via-[#537E91] to-[#537E91] px-4 pt-8 pb-2 sm:px-6 sm:pt-10 sm:pb-2 lg:px-8">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.45]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                    }}
                />
                <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#F58220]/12 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/50 blur-2xl" />

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                            Management Accounts &amp; Financial
                        </span>

                        <h1 className="max-w-[280px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                            Management Accounts &amp;{" "}
                            <span className="text-[#F58220]">Financial Reporting Services.</span>
                        </h1>

                        <p className="mt-2 max-w-xs text-[25.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Turning Financial Data into Meaningful Business Insights
                            <br className="hidden sm:block" />
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 xs:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:py-2 sm:whitespace-nowrap"
                            >
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </Link>
                            <a
                                href="tel:+918285285223"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:py-2 sm:whitespace-nowrap"
                            >
                                <Phone className="h-3.5 w-3.5 shrink-0" />
                                Call Us
                            </a>
                        </div>
                    </div>
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            {/* Second Component */}
            <section className="w-full bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div>
                            <span className="inline-block text-[#F58220] uppercase font-extrabold tracking-widest text-[11px] mb-3">
                                Outsourcing Partnership
                            </span>

                            <h1 className="text-[28px] sm:text-[34px] lg:text-[30px] font-extrabold text-[#0B1F3A] leading-[1.15] mb-3">
                                Turning Financial Data into Meaningful Business Insights
                            </h1>

                            <div className="w-14 h-[3px] bg-[#F58220] rounded-full mb-5" />

                            <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                                Many businesses only review their financial performance once a year
                                when preparing statutory accounts and tax returns. However, by then,
                                opportunities may have been missed and challenges may have already
                                impacted profitability and cash flow.
                            </p>

                            <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                                Management accounts provide regular financial information throughout
                                the year, helping business owners understand how their business is
                                performing and make informed decisions based on up-to-date financial
                                data.
                            </p>
                            <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                                At NextLedgers, we support UK accounting firms with reliable
                                management reporting and financial analysis services, enabling them
                                to deliver valuable insights and advisory-driven solutions to their
                                clients.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#e2761b] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
                            >
                                <span className="text-base leading-none">📞</span>
                                Book a Discovery Call
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden">
                                <img
                                    src="/images/DSC09901.JPG"
                                    alt="Accounting team at work"
                                    className="w-full h-[260px] sm:h-[320px] lg:h-[340px] object-cover"
                                />
                            </div>

                            <div className="absolute left-4 right-4 -bottom-8 sm:-bottom-9 bg-white rounded-xl shadow-lg px-3 sm:px-5 py-4 sm:py-5 grid grid-cols-4 gap-2">
                                <Stat
                                    icon={<Users className="w-5 h-5" />}
                                    value="500+"
                                    label="UK Accounting Firms Supported"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="w-5 h-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="w-5 h-5" />}
                                    value="100%"
                                    label="HMRC Compliant Processes"
                                />
                                <Stat
                                    icon={<Headset className="w-5 h-5" />}
                                    value="Dedicated"
                                    label="Offshore Support Team"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Space for overlapping stats bar only */}
                    <div className="h-6 sm:h-7" />
                </div>
            </section>

            

            {/* third Component — Why Management Accounts Matter */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        {/* Left: heading + list */}
                        <div className="flex flex-col">
                            <div className="text-center lg:text-left">
                                <h2
                                    className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                    style={{ color: NAVY }}
                                >
                                    Why Management{" "}
                                    <span style={{ color: ORANGE }}>Accounts Matter</span>
                                </h2>
                                <p
                                    className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed sm:mt-2.5 sm:text-[15px] lg:mx-0"
                                    style={{ color: GREY }}
                                >
                                    Regular management reporting helps businesses answer important
                                    questions, such as:
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-5">
                                {managementMattersItems.map((item, index) => {
                                    const Icon = item.icon;
                                    const isLast = index === managementMattersItems.length - 1;

                                    return (
                                        <div key={item.title}>
                                            <div className="flex items-start gap-3 py-2.5 sm:py-3">
                                                <div
                                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white sm:h-10 sm:w-10"
                                                    style={{
                                                        background: ORANGE,
                                                        boxShadow:
                                                            "0 6px 16px rgba(245,130,32,0.28)",
                                                    }}
                                                >
                                                    <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                                                </div>

                                                <div className="min-w-0">
                                                    <h3
                                                        className="text-[13.5px] font-bold leading-snug sm:text-[14.5px]"
                                                        style={{ color: NAVY }}
                                                    >
                                                        {item.title}
                                                    </h3>
                                                    <p
                                                        className="mt-0.5 text-[12px] leading-[1.45] sm:text-[13px]"
                                                        style={{ color: GREY }}
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {!isLast && (
                                                <div
                                                    className="h-px w-full bg-[#E8E8E8]"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: image height matches content column */}
                        <div className="relative min-h-[280px] h-full min-w-0 overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Management accounts supporting business decisions"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Full-width note below list + image so it never covers the image */}
                    <div
                        className="relative mt-5 w-full overflow-hidden rounded-xl px-5 py-5 text-center sm:mt-6 sm:px-8 sm:py-6"
                        style={{ background: "#FFF7F0" }}
                    >
                        <div
                            className="pointer-events-none absolute inset-0 opacity-60"
                            aria-hidden="true"
                            style={{
                                backgroundImage:
                                    "radial-gradient(rgba(245,130,32,0.22) 1px, transparent 1px)",
                                backgroundSize: "12px 12px",
                                maskImage:
                                    "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                                WebkitMaskImage:
                                    "radial-gradient(ellipse at center, black 35%, transparent 80%)",
                            }}
                        />
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            Having access to this information allows business owners to make
                            proactive decisions rather than reacting to problems after year-end.
                        </p>
                    </div>
                </div>
            </section>

            {/* fourth Component — Our Management Accounting Services */}
            <section
                className="relative w-full overflow-hidden py-2 sm:py-2.5"
                style={{ background: "#FFF7F0" }}
            >
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    aria-hidden="true"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(245,130,32,0.18) 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        {/* Left: services checklist */}
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
                                Our Management{" "}
                                <span style={{ color: ORANGE }}>Accounting Services</span>
                            </h2>

                            <p
                                className="mt-2.5 text-[14px] leading-relaxed sm:text-[15px]"
                                style={{ color: GREY }}
                            >
                                We provide comprehensive management reporting support, including:
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                                {managementServices.map((service) => (
                                    <div
                                        key={service}
                                        className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/80 px-3 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-shadow hover:shadow-[0_4px_16px_rgba(245,130,32,0.12)]"
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

                        {/* Right: image matches content height */}
                        <div className="relative min-h-[240px] h-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[300px] sm:rounded-[28px]">
                            <Image
                                src="/images/DSC09781.JPG"
                                alt="Our Management Accounting Services"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>
   
            {/* Fifth Component  */}

            <section
                className="relative w-full overflow-hidden px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                {/* Soft dots + wave atmosphere */}
                <div
                    className="pointer-events-none absolute right-6 top-6 opacity-50 sm:right-10 sm:top-8"
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
                    <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: PILL_BG,
                                borderColor: "rgba(245,130,32,0.35)",
                                color: ORANGE,
                            }}
                        >
                            <Pencil className="h-3 w-3" strokeWidth={2.5} />
                            Actionable Insights
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                            style={{ color: NAVY }}
                        >
                            How We{" "}
                            <span style={{ color: ORANGE }}>Help Businesses</span>
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Our reports are designed to transform bookkeeping data into clear and
                            actionable insights that help businesses:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <HelpCard
                            icon={Award}
                            titleBefore="Monitor & "
                            titleAccent="Measure"
                            titleAfter=" Performance"
                            items={helpBusinessPerformance}
                        />
                        <HelpCard
                            icon={Users}
                            titleBefore="Plan & "
                            titleAccent="Grow"
                            titleAfter=" with Confidence"
                            items={helpBusinessStrategy}
                        />
                    </div>
                </div>
            </section>

            {/* Sixth Component — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting platforms and reporting tools your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* Seventh Component — Industries We Support */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div
                        className="rounded-none px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
                        style={{ background: PAGE_CREAM }}
                    >
                        {/* Header */}
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
                                className="mt-3 text-[24px] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[30px] lg:text-[34px]"
                                style={{ color: NAVY }}
                            >
                                Industries We{" "}
                                <span style={{ color: ORANGE }}>Support</span>
                            </h2>

                            <p
                                className="mx-auto mt-3 max-w-[560px] text-[13px] leading-relaxed sm:mt-3.5 sm:text-[14px]"
                                style={{ color: GREY }}
                            >
                                We work with accounting firms serving clients across various
                                sectors, including:
                            </p>
                        </div>

                        {/* Industry cards — 7 items */}
                        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-4 lg:gap-5">
                            {industriesWeSupport.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex min-h-[132px] flex-col items-center justify-center rounded-[16px] border border-[#F0F0F0] bg-white px-3 py-5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#F58220]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[148px] sm:rounded-[18px] sm:px-4 sm:py-6"
                                    >
                                        <div
                                            className="flex h-14 w-14 items-center justify-center rounded-full sm:h-16 sm:w-16"
                                            style={{ backgroundColor: item.bg }}
                                        >
                                            <Icon
                                                className="h-6 w-6 sm:h-7 sm:w-7"
                                                style={{ color: item.color }}
                                                strokeWidth={1.75}
                                            />
                                        </div>
                                        <p
                                            className="mt-3 text-[12px] font-bold leading-snug sm:text-[13px]"
                                            style={{ color: NAVY }}
                                        >
                                            {item.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Eighth Component — Why Choose NextLedgers */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        {/* Left: heading + checklist */}
                        <div className="flex flex-col">
                            <div className="text-center">
                                <h2
                                    className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                    style={{ color: NAVY }}
                                >
                                    Why Choose{" "}
                                    <span style={{ color: ORANGE }}>NextLedgers?</span>
                                </h2>
                                <p
                                    className="mx-auto mt-2 max-w-[440px] text-[14px] leading-relaxed sm:mt-2.5 sm:text-[15px]"
                                    style={{ color: GREY }}
                                >
                                    We&apos;re committed to providing exceptional accounting &amp;
                                    tax services with a personal touch
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-5">
                                {whyChooseNextLedgers.map((title, index) => {
                                    const isLast = index === whyChooseNextLedgers.length - 1;
                                    return (
                                        <div key={title}>
                                            <div className="flex items-start gap-3 py-2.5 sm:py-3">
                                                <span
                                                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"
                                                    style={{
                                                        background: ORANGE,
                                                        boxShadow:
                                                            "0 6px 16px rgba(245,130,32,0.28)",
                                                    }}
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                                                        stroke="white"
                                                        strokeWidth={3}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <path d="M20 6 9 17l-5-5" />
                                                    </svg>
                                                </span>
                                                <p
                                                    className="pt-1.5 text-[13.5px] font-bold leading-snug sm:pt-2 sm:text-[14.5px]"
                                                    style={{ color: NAVY }}
                                                >
                                                    {title}
                                                </p>
                                            </div>
                                            {!isLast && (
                                                <div
                                                    className="h-px w-full bg-[#E8E8E8]"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: image height matches content */}
                        <div className="relative min-h-[280px] h-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Why choose NextLedgers for management accounts"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ninth Component — More Than Compliance Reporting CTA */}
            <TransformCTA
                titleWhite="More Than"
                titleOrange="Compliance Reporting"
                titleBreak={false}
                description="Management accounts are no longer just reports containing numbers. They have become one of the most valuable tools for understanding business performance, improving profitability, and supporting strategic decision-making."
                descriptionSecond="At NextLedgers, we help UK accounting firms deliver insightful management reporting that strengthens client relationships and creates more opportunities for advisory services."
                primaryLabel="Book a Discovery Call"
                primaryHref="/contact"
                secondaryLabel="Call Us"
                secondaryHref="tel:+918285285223"
                className="!pt-2 sm:!pt-2.5 lg:!pt-2.5"
            />

            {/* Ninth Component  */}

            <Footer />
        </>
    );
}
