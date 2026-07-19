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
    FileCheck,
    Scale,
    ClipboardCheck,
    Calculator,
    Landmark,
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
    MapPin,
    Percent,
    FolderOpen,
    TrendingUp,
    FileText,
    Mail,
    Globe,
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
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const whyCorporateTaxMatters = [
    {
        icon: ShieldCheck,
        title: "Meet IRS and state tax filing requirements",
        description:
            "Stay aligned with federal and state deadlines, forms, and filing obligations across your client portfolio.",
    },
    {
        icon: FileCheck,
        title: "Prepare accurate corporate tax returns",
        description:
            "Deliver technically sound returns that reflect complete financial data and proper tax treatment.",
    },
    {
        icon: Calculator,
        title: "Calculate taxable income correctly",
        description:
            "Apply appropriate adjustments, schedules, and classifications to determine reliable taxable income.",
    },
    {
        icon: Percent,
        title: "Maximise eligible deductions and tax credits",
        description:
            "Identify and support legitimate deductions and credits that reduce overall tax liability.",
    },
    {
        icon: AlertTriangle,
        title: "Reduce compliance risks and potential penalties",
        description:
            "Minimise exposure to late filings, underpayments, and errors that trigger IRS or state penalties.",
    },
    {
        icon: FolderOpen,
        title: "Maintain organised records for audits and future planning",
        description:
            "Keep tax working papers, schedules, and supporting documentation structured and audit-ready.",
    },
    {
        icon: TrendingUp,
        title: "Improve tax planning and cash flow forecasting",
        description:
            "Support estimated tax planning and proactive advice with accurate compliance outputs.",
    },
];

const serviceLines = [
    {
        title: "Federal & Entity Tax Returns",
        shortTitle: "Federal",
        icon: Landmark,
        items: [
            "Federal Corporate Tax Return Preparation",
            "C Corporation Tax Returns",
            "S Corporation Tax Returns (Form 1120-S)",
            "LLC & Partnership Tax Returns",
            "Schedule K-1 Preparation",
            "Tax Adjustment Schedules",
            "Tax Credit & Deduction Reviews",
            "Tax-Ready Working Papers & Supporting Schedules",
        ],
    },
    {
        title: "State & Multi-State Compliance",
        shortTitle: "State",
        icon: MapPin,
        items: [
            "State Corporate Tax Return Preparation",
            "Multi-State Tax Compliance",
            "Nexus Reviews & Apportionment Calculations",
            "Franchise Tax Filings",
            "Estimated Tax Calculations",
            "Tax Provision Support",
        ],
    },
    {
        title: "Notices & Support",
        shortTitle: "Notices",
        icon: Mail,
        items: [
            "IRS & State Tax Notice Assistance",
            "Tax Adjustment Schedules",
            "Tax Provision Support",
            "Tax-Ready Working Papers & Supporting Schedules",
            "Estimated Tax Calculations",
        ],
    },
];

const federalStateEntities = [
    "C Corporations",
    "S Corporations",
    "LLCs",
    "Partnerships",
    "Nonprofit Organisations",
    "Multi-Entity Businesses",
    "Holding Companies",
    "Growing SMEs",
];

const multiStateCompliance = [
    "State registrations",
    "Nexus assessments",
    "State apportionment calculations",
    "Multi-state tax return preparation",
    "Franchise tax filings",
    "State estimated tax compliance",
];

const taxPlanningAdvisory = [
    "Tax adjustment schedules",
    "Tax provision calculations",
    "Estimated tax projections",
    "Entity structure reviews",
    "Deduction optimisation",
    "Business expansion tax support",
    "Cash flow tax forecasting",
];

const taxCorrespondence = [
    "Notice reviews",
    "Information requests",
    "Account reconciliations",
    "Supporting documentation",
    "Compliance follow-up",
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING PLATFORMS",
        icon: "briefcase",
        logos: [
            "quickbooks online",
            "quickbooks",
            "xero",
            "zoho books",
            "freshbooks",
        ],
    },
    {
        heading: "SUPPORTING TOOLS",
        icon: "document",
        logos: [
            "microsoft excel",
            "dext",
            "hubdoc",
            "sharepoint",
            "microsoft 365",
        ],
    },
    {
        heading: "TAX SOFTWARE",
        icon: "file",
        logos: { CCH: "/images/logooUK/wolters.png" },
    },
];

const industriesWeSupport = [
    {
        label: "Professional Services",
        image: "/images/nexticon/professionalservices.png",
    },
    {
        label: "Technology & SaaS",
        image: "/images/nexticon/technology.png",
    },
    {
        label: "Construction & Contracting",
        image: "/images/nexticon/construction.png",
    },
    {
        label: "Manufacturing & Distribution",
        image: "/images/nexticon/manugacturing.png",
    },
    {
        label: "eCommerce & Online Retail",
        image: "/images/nexticon/Ecommerce.png",
    },
    {
        label: "Amazon & Shopify Businesses",
        image: "/images/nexticon/Ecommerce.png",
    },
    {
        label: "Healthcare Providers",
        image: "/images/nexticon/healthcare.png",
    },
    {
        label: "Real Estate & Property Investment",
        image: "/images/nexticon/realstate.png",
    },
    {
        label: "Nonprofit Organisations",
        image: "/images/nexticon/nonprofit.png",
    },
    {
        label: "Multi-State & Multi-Entity Businesses",
        image: "/images/nexticon/startupsmes.png",
    },
];

const whyChooseCards = [
    { title: "CPA-Led Delivery Team", icon: Award },
    { title: "Experienced US Corporate Tax Specialists", icon: FileText },
    { title: "Federal & State Tax Compliance Expertise", icon: Scale },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Dedicated Offshore Tax Professionals", icon: Users },
    { title: "Multi-State Tax Experience", icon: Globe },
    { title: "Structured Review & Quality Control Processes", icon: ClipboardCheck },
    { title: "Multi-Software Expertise", icon: Layers },
    { title: "Flexible Engagement Models", icon: Network },
    { title: "Secure & Confidential Data Handling", icon: LockKeyhole },
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
        <li className="flex items-center gap-2.5 rounded-full border border-[#F0E0D2] bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]">
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

export default function UsaCorporateTax() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
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
                <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#0B1F3A]/10 blur-3xl" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-2xl" />

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            USA Corporate Tax Preparation &amp; Compliance
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-xl sm:text-3xl lg:text-[34px]">
                            USA Corporate Tax Preparation &amp;{" "}
                            <span className="text-[#FF6A00]">Compliance</span>
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Specialist Corporate Tax Support for US CPA Firms
                            &amp; Accounting Practices
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
                                Specialist Corporate Tax Support for US CPA
                                Firms &amp; Accounting Practices
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Corporate tax compliance is one of the most
                                technically demanding services provided by US CPA
                                firms.
                            </p>

                            <div className="mb-5 space-y-3">
                                <div className="rounded-[14px] border border-[#F0E0D2] bg-[#FFF9F5] p-4 sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                            <AlertTriangle
                                                className="h-7 w-7"
                                                strokeWidth={2.25}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            The Challenge
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        Evolving IRS regulations, changing state
                                        tax laws, multi-state filing
                                        obligations, and tax-season capacity
                                        pressure.
                                    </p>
                                </div>

                                <div className="rounded-[14px] border border-[#F0E0D2] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5">
                                    <div className="mb-2 flex items-center gap-2.5">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                            <Handshake
                                                className="h-7 w-7"
                                                strokeWidth={2.25}
                                            />
                                        </span>
                                        <h3 className="text-[13.5px] font-bold text-[#0B1F3A] sm:text-[14px]">
                                            How NextLedgers Helps
                                        </h3>
                                    </div>
                                    <p className="text-[12.5px] leading-relaxed text-gray-500 sm:text-[13px]">
                                        Dedicated offshore Corporate Tax
                                        Preparation &amp; Compliance — increase
                                        capacity, improve turnaround, and deliver
                                        high-quality white-label tax compliance.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                Support we deliver
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {[
                                    "Federal returns",
                                    "State returns",
                                    "Multi-state",
                                    "K-1s",
                                    "Estimated tax",
                                    "Tax notices",
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

                            <CtaButton href="/contact" variant="primary" size="md">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Corporate tax team supporting US CPA firms"
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

            {/* 3 — Why Corporate Tax Matters */}
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
                            Why Corporate Tax Preparation &amp;{" "}
                            <span style={{ color: ORANGE }}>Compliance</span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Accurate corporate tax compliance protects clients
                            from penalties, supports strategic planning, and
                            strengthens the advisory relationship CPA firms
                            deliver.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyCorporateTaxMatters.slice(0, 4).map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E0D2] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                        >
                                            <Icon
                                                className="h-7 w-7"
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

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
                        {whyCorporateTaxMatters.slice(4).map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(0.08 + index * 0.05, 0.28)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E0D2] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                        >
                                            <Icon
                                                className="h-7 w-7"
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

                    <div className="relative mt-6 w-full overflow-hidden rounded-xl bg-white px-5 py-5 text-center sm:mt-7 sm:px-8 sm:py-6">
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            For CPA firms, structured corporate tax compliance
                            services improve firm profitability, increase
                            engagement capacity during tax season, and allow
                            senior professionals to focus on advisory services
                            and client relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Service Deliverables Explorer */}
            <ServiceDeliverablesExplorer
                eyebrow="Our Deliverables"
                titleBefore="Our Corporate Tax "
                titleAccent="Services"
                titleAfter=" Include"
                subtitle="Comprehensive federal, state, and multi-state corporate tax preparation and compliance support for US CPA firms."
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
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated corporate tax compliance support across
                            entity types, multi-state obligations, and advisory
                            workflows.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
                        <Reveal>
                            <div
                                        className="h-full rounded-[16px] border border-[#F0E0D2] bg-white p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <h3
                                    className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Federal &amp; State Corporate Tax Compliance
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Corporate tax return preparation and
                                    compliance support for:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {federalStateEntities.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.08}>
                            <div
                                className="h-full rounded-[16px] border border-[#F0E0D2] bg-white p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <h3
                                    className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Multi-State Tax Compliance
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    State and multi-jurisdiction compliance
                                    including:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {multiStateCompliance.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.12} className="mt-6">
                        <div
                            className="rounded-[16px] border border-[#F0E0D2] bg-[#FFF9F5] p-5 sm:p-6"
                            style={{
                                boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                            }}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                <span
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                >
                                    <Target
                                        className="h-7 w-7"
                                        strokeWidth={2}
                                    />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <h3
                                        className="text-[15px] font-bold sm:text-[16px]"
                                        style={{ color: NAVY }}
                                    >
                                        Corporate Tax Planning &amp; Advisory
                                        Support
                                    </h3>
                                    <p
                                        className="mt-2 text-[13px] leading-relaxed sm:text-[13.5px]"
                                        style={{ color: GREY }}
                                    >
                                        Proactive tax support that complements
                                        compliance delivery and strengthens
                                        client advisory outcomes.
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                        {taxPlanningAdvisory.map((item) => (
                                            <SchemePill key={item} text={item} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.16} className="mt-6">
                        <div
                            className="rounded-[16px] border border-[#F0E0D2] bg-white p-5 sm:p-6"
                            style={{
                                boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                            }}
                        >
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                <span
                                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                >
                                    <Mail
                                        className="h-7 w-7"
                                        strokeWidth={2}
                                    />
                                </span>
                                <div className="min-w-0 flex-1">
                                    <h3
                                        className="text-[15px] font-bold sm:text-[16px]"
                                        style={{ color: NAVY }}
                                    >
                                        IRS &amp; State Tax Correspondence
                                    </h3>
                                    <p
                                        className="mt-2 text-[13px] leading-relaxed sm:text-[13.5px]"
                                        style={{ color: GREY }}
                                    >
                                        Structured support for tax authority
                                        correspondence, notice responses, and
                                        compliance follow-up.
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                                        {taxCorrespondence.map((item) => (
                                            <SchemePill key={item} text={item} />
                                        ))}
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
                subtitle="We work across the accounting platforms, supporting tools, and tax software your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-10 sm:!py-12 lg:!py-14"
            />

            {/* Soft break before industries */}
            <div
                className="flex items-center justify-center gap-3 bg-white px-4 py-2"
                aria-hidden="true"
            >
                <span className="h-px w-10 bg-[#F0E0D2] sm:w-16" />
                <span
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                >
                    Industry Coverage
                </span>
                <span className="h-px w-10 bg-[#F0E0D2] sm:w-16" />
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
                                        return (
                                            <Reveal
                                                key={item.label}
                                                delay={Math.min(
                                                    index * 0.04,
                                                    0.2
                                                )}
                                            >
                                                <div className="flex min-h-[126px] flex-col items-center justify-center rounded-[14px] border border-[#F0E0D2] bg-white px-2.5 py-3 text-center transition-colors duration-200 hover:border-[#FFB77F] hover:bg-[#FFFCF9]">
                                                    <Image src={item.image} alt="" width={72} height={72} className="h-16 w-16 object-contain sm:h-[72px] sm:w-[72px]" aria-hidden="true" />
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
                                        return (
                                            <Reveal
                                                key={item.label}
                                                delay={Math.min(
                                                    0.08 + index * 0.04,
                                                    0.28
                                                )}
                                            >
                                                <div className="flex min-h-[126px] flex-col items-center justify-center rounded-[14px] border border-[#F0E0D2] bg-white px-2.5 py-3 text-center transition-colors duration-200 hover:border-[#FFB77F] hover:bg-[#FFFCF9]">
                                                    <Image src={item.image} alt="" width={72} height={72} className="h-16 w-16 object-contain sm:h-[72px] sm:w-[72px]" aria-hidden="true" />
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
                            CPA-led offshore corporate tax specialists for US
                            CPA firms — federal, state, and multi-state
                            compliance support.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(0, 5).map(({ title, icon: Icon }, index) => (
                            <Reveal key={title} delay={Math.min(index * 0.05, 0.2)}>
                                <div className="h-full rounded-[14px] border border-[#F0E0D2] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-7 w-7"
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
                        {whyChooseCards.slice(5).map(({ title, icon: Icon }, index) => (
                            <Reveal
                                key={title}
                                delay={Math.min(0.08 + index * 0.04, 0.28)}
                            >
                                <div className="h-full rounded-[14px] border border-[#F0E0D2] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-7 w-7"
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
                            Your Offshore Corporate Tax Compliance Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Federal and state corporate tax expertise,
                            structured review processes, and white-label delivery
                            — helping US CPA firms increase tax-season capacity
                            without adding internal headcount.
                        </p>

                        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                            {[
                                "Federal returns",
                                "Multi-state",
                                "K-1s",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E0D2] bg-white px-3.5 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
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

                        <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#F0E0D2] pt-6">
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
