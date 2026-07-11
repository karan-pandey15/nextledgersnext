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
    Star,
    BookOpen,
    BadgeCheck,
    ClipboardCheck,
    LockKeyhole,
    Network,
    TrendingUp,
    Handshake,
    Phone,
    LineChart,
    Wallet,
    Target,
    Lightbulb,
    PiggyBank,
    Building2,
    ShoppingBag,
    Store,
    Factory,
    UtensilsCrossed,
    HeartPulse,
    Monitor,
    HardHat,
    Briefcase,
    Pencil,
    FileText,
    Landmark,
    Sparkles,
    Send,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";

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

const whyAdvisoryMatters = [
    {
        icon: LineChart,
        title: "Monitor financial performance",
        description: "Track results regularly so owners stay informed throughout the year.",
    },
    {
        icon: TrendingUp,
        title: "Improve profitability",
        description: "Identify margin opportunities and cost pressures before they escalate.",
    },
    {
        icon: Wallet,
        title: "Strengthen cash flow management",
        description: "Improve visibility of working capital, inflows, and payment timing.",
    },
    {
        icon: Target,
        title: "Support strategic decision-making",
        description: "Turn financial data into clear recommendations for growth and investment.",
    },
    {
        icon: PiggyBank,
        title: "Improve budgeting and forecasting",
        description: "Build reliable budgets, forecasts, and forward-looking plans.",
    },
    {
        icon: Landmark,
        title: "Optimise tax efficiency",
        description: "Support proactive tax planning while remaining HMRC compliant.",
    },
    {
        icon: Lightbulb,
        title: "Identify business growth opportunities",
        description: "Surface commercial insights that help clients expand with confidence.",
    },
    {
        icon: ShieldCheck,
        title: "Strengthen financial controls",
        description: "Improve reporting discipline, oversight, and stakeholder confidence.",
    },
    {
        icon: Users,
        title: "Increase stakeholder confidence",
        description: "Deliver clear packs for boards, lenders, investors, and owners.",
    },
];

const advisoryServices = [
    "Monthly Management Accounts Preparation",
    "Financial Performance Reviews",
    "Profit & Loss Analysis",
    "Balance Sheet Reviews",
    "Cash Flow Analysis",
    "KPI Reporting & Dashboard Preparation",
    "Budget vs Actual Analysis",
    "Cost & Margin Analysis",
    "Business Performance Reviews",
    "Working Capital Analysis",
    "Financial Health Checks",
    "Management Reporting Packs",
];

const virtualCfoServices = [
    "Cash Flow Forecasting",
    "Budget Preparation Support",
    "Financial Forecasting",
    "Business Growth Planning",
    "Strategic Financial Planning",
    "Business Performance Analysis",
    "Profitability Improvement Reviews",
    "Financial KPI Monitoring",
    "Board Reporting Support",
    "Investor & Lender Reporting Support",
    "Scenario Planning & Financial Modelling",
    "Financial Decision Support",
];

const taxPlanningServices = [
    "Corporation Tax Planning Support",
    "Director & Shareholder Tax Planning",
    "Business Structure Tax Reviews",
    "Capital Allowance Reviews",
    "Dividend vs Salary Planning Support",
    "VAT Registration Support",
    "VAT Planning & Return Review Support",
    "Capital Gains Tax Planning Support",
    "HMRC Tax Investigation Preparation Support",
    "Tax Health Checks",
    "Tax Planning Working Papers",
    "Client Advisory Support",
];

const startUpServices = [
    "Company Formation Coordination*",
    "Companies House Identity Verification (ID Verification) Support",
    "Director & Shareholder Onboarding Support",
    "Business Structure Guidance",
    "Company Incorporation Documentation Preparation",
    "Corporation Tax Registration Support",
    "PAYE Employer Registration Support",
    "VAT Registration Support",
    "Companies House Compliance Support",
    "Registered Office Documentation Support",
    "New Business Compliance Checklists",
    "Director & Shareholder Compliance Guidance",
];

const budgetingServices = [
    "Annual Budget Preparation",
    "Revenue Forecasting",
    "Expense Forecasting",
    "Cash Flow Forecasting",
    "Scenario Planning Models",
    "Financial Modelling",
    "Growth Planning",
    "Strategic Financial Planning",
];

const performanceServices = [
    "Financial Ratio Analysis",
    "Gross Profit & Margin Analysis",
    "Departmental Performance Reviews",
    "Cost Reduction Analysis",
    "Break-Even Analysis",
    "Business Performance Reporting",
    "Executive Reporting Packs",
    "Strategic Advisory Support",
];

const helpFirmsCapacity = [
    "Expand advisory service offerings",
    "Increase reporting capacity",
    "Improve turnaround times",
    "Deliver higher-value client services",
];

const helpFirmsScale = [
    "Strengthen client relationships",
    "Reduce internal workload",
    "Improve operational efficiency",
    "Scale operations without increasing headcount",
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING SOFTWARE",
        icon: "user",
        logos: [
            "xero",
            "quickbooks online",
            "sage business cloud",
            "freeagent",
            "accountsiq",
            "iplicit",
        ],
    },
    {
        heading: "REPORTING & FORECASTING SOFTWARE",
        icon: "chart",
        logos: [
            "fathom",
            "spotlight reporting",
            "syft analytics",
            "float",
            "futrli",
            "microsoft excel",
            "google sheets",
        ],
    },
    {
        heading: "WORKFLOW & COLLABORATION TOOLS",
        icon: "document",
        logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
    },
];

const industriesWeSupport = [
    { label: "Professional Service Firms", icon: Briefcase, bg: "#E8F4FF", color: "#0284C7" },
    { label: "Construction & Trades", icon: HardHat, bg: "#FFF4E5", color: "#EA580C" },
    { label: "E-Commerce Businesses", icon: ShoppingBag, bg: "#E8F8EF", color: "#16A34A" },
    { label: "Retail Businesses", icon: Store, bg: "#FFF0E8", color: "#F58220" },
    { label: "Manufacturing Companies", icon: Factory, bg: "#F3E8FF", color: "#9333EA" },
    { label: "Hospitality Businesses", icon: UtensilsCrossed, bg: "#FFE8EE", color: "#E11D48" },
    { label: "Healthcare Providers", icon: HeartPulse, bg: "#E8F1FF", color: "#3B82F6" },
    { label: "Recruitment Agencies", icon: Users, bg: "#F3E8FF", color: "#7C3AED" },
    { label: "Technology Companies", icon: Monitor, bg: "#E8F1FF", color: "#2563EB" },
    { label: "Property & Real Estate Businesses", icon: Building2, bg: "#FFE8EE", color: "#BE123C" },
];

const whyChooseCards = [
    { title: "ACCA-Led Delivery Team", icon: UserCheck },
    { title: "UK Business Advisory Expertise", icon: BookOpen },
    { title: "Virtual CFO Experience", icon: LineChart },
    { title: "Tax Planning Support Expertise", icon: Landmark },
    { title: "Business Start-Up & Companies House Compliance Support", icon: Building2 },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Dedicated Offshore Resources", icon: Headset },
    { title: "Structured Review Processes", icon: ClipboardCheck },
    { title: "Secure Data Handling", icon: LockKeyhole },
    { title: "Flexible Engagement Models", icon: Network },
    { title: "Scalable Support Framework", icon: TrendingUp },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "100% HMRC Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by UK Accounting Firms" },
];

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F58220]/10 text-[#F58220] sm:h-10 sm:w-10">
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
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: PILL_BG, color: ORANGE }}
            >
                <Icon className="h-[17px] w-[17px]" strokeWidth={1.75} />
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

export default function UKBusinessAdvisory() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <TopAnnouncementBar />
            <UKNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* 1 — Hero */}
            <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#25404B] via-[#537E91] to-[#537E91] px-4 pb-2 pt-8 sm:px-6 sm:pb-2 sm:pt-10 lg:px-8">
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
                            Business Advisory &amp; Virtual CFO
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            UK Business Advisory &amp;{" "}
                            <span className="text-[#F58220]">Virtual CFO</span> Outsourcing
                            Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Business Advisory &amp; Virtual CFO Support for UK
                            Accounting Firms
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:whitespace-nowrap sm:py-2"
                            >
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </Link>
                            <a
                                href="tel:+918285285223"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:whitespace-nowrap sm:py-2"
                            >
                                <Phone className="h-3.5 w-3.5 shrink-0" />
                                Call Us
                            </a>
                        </div>
                    </div>
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            {/* 2 — Intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#F58220]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Business Advisory &amp; Virtual CFO Support for UK
                                Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#F58220]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Today&apos;s businesses expect far more than compliance and
                                bookkeeping. They rely on their accountants to provide strategic
                                financial guidance, management reporting, cash flow forecasting,
                                budgeting, profitability analysis, commercial insights, tax
                                planning, and business setup support that help them make informed
                                business decisions.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                As client expectations continue to evolve, UK accounting firms
                                often require additional resources to deliver high-value advisory
                                services while managing increasing workloads.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we provide dedicated offshore Business Advisory
                                &amp; Virtual CFO support to UK accounting firms, accountancy
                                practices, and business advisory firms. Our white-label outsourcing
                                solutions help firms expand their advisory services, improve
                                reporting efficiency, deliver strategic financial insights, support
                                tax planning engagements, and streamline business setup processes
                                without increasing internal staffing costs.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e2761b]"
                            >
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </Link>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Business advisory and virtual CFO support team"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-4 right-4 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:px-5 sm:py-5">
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
                                    label="Offshore Support Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Advisory Matters */}
            <section
                className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
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
                            Strategic Financial Leadership
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why{" "}
                            <span style={{ color: ORANGE }}>
                                Business Advisory &amp; Virtual CFO
                            </span>{" "}
                            Services Matter
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Business Advisory and Virtual CFO services go beyond statutory
                            compliance by helping business owners understand their financial
                            performance, improve profitability, manage cash flow, optimise tax
                            efficiency, structure their businesses effectively, and make confident
                            strategic decisions.
                        </p>

                        <p
                            className="mt-3 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Virtual CFO services provide ongoing financial leadership without the
                            cost of employing a full-time Finance Director or Chief Financial
                            Officer, allowing businesses to access expert financial guidance as and
                            when required.
                        </p>

                        <div className="mb-4 mt-3.5 flex w-full max-w-md items-center justify-center gap-2.5 sm:max-w-lg">
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                            <span
                                className="text-[12px] font-semibold whitespace-nowrap sm:text-[12.5px]"
                                style={{ color: "#555555" }}
                            >
                                Effective advisory support helps businesses:
                            </span>
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
                        {whyAdvisoryMatters.map((card) => (
                            <MatterCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 — Advisory + Virtual CFO services */}
            <section
                className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
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
                                Business Advisory &amp; Virtual CFO
                            </span>{" "}
                            Services
                        </h2>

                        <p
                            className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Expand your advisory offering with white-label reporting, forecasting,
                            and financial leadership support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={FileText}
                            titleBefore="Our Business "
                            titleAccent="Advisory"
                            titleAfter=" Services Include"
                            items={advisoryServices}
                        />
                        <ServiceCard
                            icon={LineChart}
                            titleBefore="Our Virtual "
                            titleAccent="CFO"
                            titleAfter=" Services Include"
                            items={virtualCfoServices}
                        />
                    </div>
                </div>
            </section>

            {/* 5 — Tax Planning */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: PILL_BG, color: ORANGE }}
                        >
                            <Landmark className="h-3 w-3" strokeWidth={2.5} />
                            Tax Planning &amp; Advisory
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Tax Planning &amp;{" "}
                            <span style={{ color: ORANGE }}>Advisory Services</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Helping clients manage their tax affairs proactively is an important
                            part of modern business advisory. We support UK accounting firms with
                            tax planning activities that help businesses optimise their tax
                            position, remain compliant with HMRC regulations, and prepare for
                            future growth.
                        </p>
                    </div>

                    <ServiceCard
                        icon={Landmark}
                        titleBefore="Our offshore team can "
                        titleAccent="assist with"
                        titleAfter=":"
                        items={taxPlanningServices}
                    />
                </div>
            </section>

            {/* 6 — Business Start-Up */}
            <section
                className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-6 text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                            style={{ background: ORANGE }}
                        >
                            <Building2 className="h-3 w-3" strokeWidth={2.5} />
                            Companies House Compliance
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Business Start-Up &amp;{" "}
                            <span style={{ color: ORANGE }}>
                                Companies House Compliance Support
                            </span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Supporting clients from incorporation through ongoing compliance
                            enables accounting firms to build long-term relationships while
                            ensuring businesses meet their statutory obligations from day one. Our
                            offshore team assists with the administration, documentation, and
                            compliance processes involved in setting up new businesses.
                        </p>
                    </div>

                    <ServiceCard
                        icon={Building2}
                        titleBefore="Our "
                        titleAccent="services"
                        titleAfter=" include:"
                        items={startUpServices}
                    />

                    <p
                        className="mx-auto mt-5 max-w-4xl rounded-xl bg-white px-4 py-4 text-center text-[12px] leading-relaxed sm:px-6 sm:text-[12.5px]"
                        style={{ color: GREY }}
                    >
                        *Company formations are coordinated through trusted third-party company
                        formation agents. NextLedgers manages the documentation, onboarding, and
                        compliance process while working alongside authorised incorporation
                        providers.
                    </p>
                </div>
            </section>

            {/* 7 — Budgeting + Performance */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-7 text-center">
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Budgeting, Forecasting &amp;{" "}
                            <span style={{ color: ORANGE }}>Performance Support</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed"
                            style={{ color: GREY }}
                        >
                            Practical planning and performance analysis that helps firms deliver
                            higher-value advisory conversations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={PiggyBank}
                            titleBefore="Budgeting, Forecasting & "
                            titleAccent="Financial Planning"
                            titleAfter=""
                            items={budgetingServices}
                        />
                        <ServiceCard
                            icon={Target}
                            titleBefore="Business Performance & "
                            titleAccent="Advisory Support"
                            titleAfter=""
                            items={performanceServices}
                        />
                    </div>
                </div>
            </section>

            {/* 8 — How We Help */}
            <section
                className="relative w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
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
                            <Award className="h-3 w-3" strokeWidth={2.5} />
                            Practice Growth
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                            style={{ color: NAVY }}
                        >
                            How We{" "}
                            <span style={{ color: ORANGE }}>Help UK Accounting Firms</span>
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Our Business Advisory &amp; Virtual CFO support enables firms to
                            deliver more value without increasing headcount.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={Award}
                            titleBefore="Expand & "
                            titleAccent="Deliver"
                            titleAfter=""
                            items={helpFirmsCapacity}
                        />
                        <ServiceCard
                            icon={Users}
                            titleBefore="Scale & "
                            titleAccent="Strengthen"
                            titleAfter=""
                            items={helpFirmsScale}
                        />
                    </div>
                </div>
            </section>

            {/* 9 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting, reporting, forecasting, and collaboration tools your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* 10 — Industries */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div
                        className="rounded-none px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
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
                                className="mt-3 text-[24px] font-extrabold leading-[1.15] tracking-[-0.01em] sm:text-[30px] lg:text-[34px]"
                                style={{ color: NAVY }}
                            >
                                Industries We <span style={{ color: ORANGE }}>Support</span>
                            </h2>

                            <p
                                className="mx-auto mt-3 max-w-[560px] text-[13px] leading-relaxed sm:mt-3.5 sm:text-[14px]"
                                style={{ color: GREY }}
                            >
                                We support UK accounting firms serving clients across various
                                sectors, including:
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
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

            {/* 11 — Why Choose */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: PILL_BG, color: ORANGE }}
                        >
                            <Star className="h-3 w-3" strokeWidth={2.5} fill={ORANGE} />
                            Partner Advantages
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Choose{" "}
                            <span style={{ color: ORANGE }}>NextLedgers</span> for Business
                            Advisory?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated advisory specialists who work as an extension of your
                            practice, delivering strategic insight with accuracy and care.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(0, 4).map(({ title, icon: Icon }) => (
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
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(4, 8).map(({ title, icon: Icon }) => (
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
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:justify-items-stretch lg:mx-auto lg:mt-5 lg:max-w-[75%] lg:grid-cols-3 lg:gap-5">
                        {whyChooseCards.slice(8).map(({ title, icon: Icon }) => (
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
                        ))}
                    </div>
                </div>
            </section>

            {/* 12 — Cream partner CTA */}
            <section className="relative w-full bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-2.5 lg:px-8">
                <div
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] px-5 py-10 text-center sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14"
                    style={{ background: PAGE_CREAM }}
                >
                    <div
                        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-40"
                        style={{ background: "rgba(245,130,32,0.18)" }}
                    />
                    <div
                        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30"
                        style={{ background: "rgba(245,130,32,0.15)" }}
                    />
                    <DotGrid className="pointer-events-none absolute bottom-6 right-6 opacity-70" />

                    <div className="relative z-10">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Business Advisory Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore{" "}
                            <span style={{ color: ORANGE }}>
                                Business Advisory &amp; Virtual CFO
                            </span>{" "}
                            Delivery Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Business Advisory and Virtual CFO services require commercial insight,
                            analytical expertise, and proactive financial leadership. Our dedicated
                            professionals work as an extension of your practice, helping you
                            deliver meaningful financial insights, strategic business advice, tax
                            planning support, and business setup assistance while freeing up
                            valuable internal resources.
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
                                Whether you require support with management accounts, budgeting,
                                forecasting, financial modelling, KPI reporting, cash flow
                                management, board reporting, profitability analysis, tax planning,
                                Companies House compliance, business start-up support, or dedicated
                                offshore advisory resources, NextLedgers can help your practice
                                scale efficiently while maintaining quality and client satisfaction.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-11 min-w-[220px] items-center justify-center gap-2 rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#e2761b] sm:h-12 sm:text-[14px]"
                                style={{ background: ORANGE }}
                            >
                                <Send className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </Link>
                            <a
                                href="tel:+918285285223"
                                className="inline-flex h-11 min-w-[220px] items-center justify-center gap-2 rounded-[10px] border-2 bg-white px-6 text-[13px] font-bold uppercase tracking-wide transition-colors hover:bg-[#FFF7F0] sm:h-12 sm:text-[14px]"
                                style={{ borderColor: ORANGE, color: ORANGE }}
                            >
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Call Us
                            </a>
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

            <Footer />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
