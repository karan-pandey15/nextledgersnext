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
    Scale,
    ClipboardCheck,
    Calculator,
    Landmark,
    Clock,
    FolderOpen,
    BarChart3,
    LockKeyhole,
    Handshake,
    Network,
    Layers,
    MapPin,
    Wallet,
    FileCheck,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";
import { motion } from "framer-motion";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
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

const whyPayrollMatters = [
    {
        icon: Landmark,
        title: "Meet federal and state payroll tax filing requirements",
        description:
            "Stay aligned with IRS and state agency deadlines for deposits, returns, and reporting.",
    },
    {
        icon: Clock,
        title: "Process employee payroll accurately and on time",
        description:
            "Deliver reliable pay runs on schedule so clients maintain workforce confidence.",
    },
    {
        icon: Calculator,
        title: "Calculate payroll taxes and deductions correctly",
        description:
            "Apply federal, state, and local withholdings with consistent accuracy every cycle.",
    },
    {
        icon: ShieldCheck,
        title: "Reduce payroll errors and compliance risks",
        description:
            "Catch discrepancies early and minimise costly corrections or penalty exposure.",
    },
    {
        icon: FolderOpen,
        title: "Maintain organised payroll records",
        description:
            "Keep payroll files, registers, and supporting documentation audit-ready.",
    },
    {
        icon: BarChart3,
        title: "Improve workforce reporting and labour cost visibility",
        description:
            "Give clients clearer insight into payroll costs, headcount, and labour trends.",
    },
    {
        icon: LockKeyhole,
        title: "Strengthen internal payroll controls",
        description:
            "Support structured reviews and checks that protect payroll integrity.",
    },
];

const serviceLines = [
    {
        title: "Payroll Processing",
        shortTitle: "Processing",
        icon: Wallet,
        items: [
            "Weekly, Bi-Weekly, Semi-Monthly & Monthly Payroll Processing",
            "Employee Payroll Calculations",
            "Overtime, Bonus & Commission Processing",
            "Payroll Adjustments",
            "Employee Onboarding & Payroll Setup",
            "Payroll Record Maintenance",
            "Multi-State Payroll Processing",
            "Payroll Reporting & Management Information",
        ],
    },
    {
        title: "Payroll Tax Compliance",
        shortTitle: "Tax",
        icon: Scale,
        items: [
            "Federal Payroll Tax Compliance",
            "State & Local Payroll Tax Compliance",
            "Payroll Tax Return Preparation",
            "Payroll Tax Reconciliations",
        ],
    },
    {
        title: "Year-End Payroll Reporting",
        shortTitle: "Year-End",
        icon: FileSpreadsheet,
        items: [
            "W-2 Preparation Support",
            "1099 Contractor Reporting",
            "Payroll Tax Reconciliations",
            "Payroll Reporting & Management Information",
        ],
    },
];

const fullServicePayrollProcessing = [
    "Weekly",
    "Bi-Weekly",
    "Semi-Monthly",
    "Monthly",
    "Salary & Hourly",
    "Overtime Calculations",
    "Bonus & Commission Processing",
    "Payroll Adjustments",
];

const payrollTaxCompliance = [
    "Federal Payroll Tax Calculations",
    "State Payroll Tax Compliance",
    "Local Payroll Tax Requirements",
    "Payroll Tax Deposits",
    "Payroll Tax Return Preparation",
    "Payroll Tax Reconciliations",
];

const multiStatePayroll = [
    "State Payroll Registrations",
    "Multi-State Payroll Processing",
    "State Withholding Compliance",
    "Employee Location Tracking",
    "Multi-Jurisdiction Reporting",
    "Payroll Compliance Reviews",
];

const yearEndPayrollReporting = [
    "W-2 Processing",
    "1099 Contractor Reporting",
    "Wage Reconciliations",
    "Payroll Summary Reports",
    "Year-End Payroll Adjustments",
    "Payroll Working Papers",
];

const softwareExpertiseLogodata = [
    {
        heading: "PAYROLL & ACCOUNTING PLATFORMS",
        icon: "briefcase",
        logos: [
            "gusto",
            "adp",
            "quickbooks payroll",
            "quickbooks online",
            "quickbooks",
            "xero",
            "zoho books",
        ],
    },
    {
        heading: "SUPPORTING TOOLS",
        icon: "document",
        logos: [
            "microsoft excel",
            "google sheets",
            "dext",
            "hubdoc",
        ],
    },
];

const whyChooseCards = [
    { title: "ACCA-Led Delivery Team", icon: Award },
    { title: "Experienced US Payroll Specialists", icon: Wallet },
    { title: "Federal & State Payroll Tax Expertise", icon: Scale },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Dedicated Payroll Professionals", icon: Users },
    { title: "Multi-State Payroll Experience", icon: MapPin },
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

export default function UsaPayroll() {
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

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            USA Payroll Processing &amp; Payroll Tax
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-xl sm:text-3xl lg:text-[34px]">
                            USA Payroll Processing &amp;{" "}
                            <span className="text-[#FF6A00]">Payroll Tax</span>
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Specialist Payroll Support for US CPA Firms &amp;
                            Accounting Practices
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

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Specialist Payroll Support for US CPA Firms
                                &amp; Accounting Practices
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Payroll processing is one of the most critical
                                and time-sensitive services delivered by US CPA
                                firms.
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
                                        Multi-state employers, complex payroll
                                        tax regulations, accuracy pressure,
                                        strict filing deadlines, and seasonal
                                        workloads make payroll one of the most
                                        demanding services to deliver at scale.
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
                                        Dedicated Payroll Processing
                                        &amp; Payroll Tax support — helping
                                        firms increase capacity, improve
                                        turnaround, and deliver reliable
                                        white-label payroll without expanding
                                        internal teams.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                Support we deliver
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {[
                                    "Payroll processing",
                                    "Multi-state",
                                    "Payroll tax",
                                    "W-2s",
                                    "1099s",
                                    "Reconciliations",
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
                                    alt="Payroll team processing employee payroll and tax compliance"
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
                                    label="Support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Payroll Matters */}
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
                            Why Payroll Processing &amp;{" "}
                            <span style={{ color: ORANGE }}>Payroll Tax</span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Accurate, compliant payroll protects employees,
                            satisfies tax authorities, and gives business owners
                            confidence in their workforce costs and reporting.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyPayrollMatters.map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E0D2] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl"
                                            style={{ background: PILL_BG, color: ORANGE }}
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

                    <div className="relative mt-4 w-full overflow-hidden rounded-xl bg-white px-5 py-4 text-center sm:px-8 sm:py-5">
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            For CPA firms, efficient payroll delivery improves
                            profitability, increases engagement capacity, and
                            allows senior professionals to focus on advisory
                            services and client relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Our Payroll Services explorer */}
            <ServiceDeliverablesExplorer
                eyebrow="Our Deliverables"
                titleBefore="Our Payroll "
                titleAccent="Services"
                titleAfter=" Include"
                subtitle="Comprehensive payroll processing, tax compliance, and year-end reporting support for US CPA firms."
                services={serviceLines}
                className="!py-5"
            />

            {/* 5 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-5 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mb-5 text-center">
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
                                className="h-full rounded-[16px] border border-[#F0E0D2] bg-white p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <h3
                                    className="mb-2 text-[15px] font-bold sm:text-[16px]"
                                    style={{ color: NAVY }}
                                >
                                    Full-Service Payroll Processing
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Complete payroll processing across pay
                                    frequencies and employee types:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {fullServicePayrollProcessing.map((item) => (
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
                                    Payroll Tax Compliance
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Federal, state, and local payroll tax
                                    support including:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {payrollTaxCompliance.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.12}>
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
                                    Multi-State Payroll
                                </h3>
                                <p
                                    className="mb-4 text-[12.5px] leading-relaxed"
                                    style={{ color: GREY }}
                                >
                                    Payroll support for employers operating
                                    across multiple jurisdictions:
                                </p>
                                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {multiStatePayroll.map((item) => (
                                        <SchemePill key={item} text={item} />
                                    ))}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.16}>
                            <div
                                className="h-full rounded-[16px] border border-[#F0E0D2] bg-[#FFF9F5] p-5 sm:p-6"
                                style={{
                                    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
                                }}
                            >
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                    <span
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                                        style={{ background: PILL_BG, color: ORANGE }}
                                    >
                                        <FileCheck
                                            className="h-7 w-7"
                                            strokeWidth={1.8}
                                        />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <h3
                                            className="text-[15px] font-bold sm:text-[16px]"
                                            style={{ color: NAVY }}
                                        >
                                            Year-End Payroll Reporting
                                        </h3>
                                        <p
                                            className="mt-2 text-[13px] leading-relaxed sm:text-[13.5px]"
                                            style={{ color: GREY }}
                                        >
                                            Year-end payroll reporting and
                                            reconciliation support to close each
                                            tax year accurately.
                                        </p>
                                        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                            {yearEndPayrollReporting.map(
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
                </div>
            </section>

            {/* 6 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the payroll platforms, accounting systems, and workflow tools your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-5"
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
            <section className="relative w-full overflow-hidden bg-white py-5">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div
                        className="rounded-none px-3 py-5 sm:px-6 lg:px-8"
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

                        <IndustriesWeSupportGrid />
                    </div>
                </div>
            </section>

            {/* Why Choose NextLedgers — UK split list + image */}
            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleMiddle=" for "
                titleAccent2="Payroll"
                titleAfter="?"
                subtitle="ACCA-led payroll processing and payroll tax specialists for US CPA firms."
                items={whyChooseCards}
            />

            {/* 9 — Partner CTA */}
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
                            Your Payroll Compliance Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Technical expertise, consistency, and meticulous
                            attention to detail — helping US CPA firms streamline
                            payroll delivery and increase capacity without adding
                            internal headcount.
                        </p>

                        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                            {[
                                "Payroll processing",
                                "Multi-state",
                                "W-2 / 1099",
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
