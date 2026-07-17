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
    Building2,
    ShoppingBag,
    HardHat,
    Briefcase,
    Pencil,
    FileText,
    Sparkles,
    FileCheck2,
    Calculator,
    Link2,
    RefreshCw,
    Globe2,
    Factory,
    Phone,
    Send,
    Handshake,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
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
    { icon: Award, label: "10+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const whyVatMatters = [
    {
        icon: FileCheck2,
        title: "Meet HMRC filing obligations accurately and on time",
        description:
            "Submit complete VAT returns that meet statutory deadlines and HMRC standards.",
    },
    {
        icon: Link2,
        title: "Maintain digital and compliant financial records",
        description:
            "Keep MTD-ready digital records and submission-ready working papers.",
    },
    {
        icon: ShieldCheck,
        title: "Reduce VAT errors and potential penalties",
        description:
            "Spot issues early through reconciliations, reviews, and error corrections.",
    },
    {
        icon: Calculator,
        title: "Improve confidence in VAT calculations and reporting",
        description:
            "Strengthen accuracy across returns, adjustments, and liability reviews.",
    },
    {
        icon: Globe2,
        title: "Handle complex transactions correctly",
        description:
            "Apply the right treatment for reverse charge, imports, exports, and schemes.",
    },
    {
        icon: RefreshCw,
        title: "Create more efficient and streamlined compliance processes",
        description:
            "Reduce manual admin and free capacity for advisory and client relationships.",
    },
];

const vatServices = [
    "VAT Registration & Deregistration Support",
    "VAT Return Preparation & Review Support",
    "Submission-Ready VAT Working Papers",
    "VAT Reconciliations & Liability Reviews",
    "VAT Control Account Reviews",
    "VAT Adjustments & Error Corrections",
    "HMRC VAT Correspondence Support",
    "VAT Health Checks & Compliance Reviews",
    "Reverse Charge & International VAT Support",
    "Industry-Specific VAT Analysis",
];

const mtdServices = [
    "MTD-Compliant Record Reviews",
    "Digital Record Maintenance",
    "Software Compliance Reviews",
    "MTD VAT Submission Support",
    "Digital Link Reviews",
    "Process Improvement Recommendations",
    "Client Migration Support",
];

const vatSchemes = [
    "Standard VAT Accounting Scheme",
    "Annual Accounting Scheme",
    "Cash Accounting Scheme",
    "Flat Rate VAT Scheme",
    "VAT Retail Schemes",
    "VAT Margin Schemes",
];

const specialistAreas = [
    "Domestic Reverse Charge VAT",
    "Construction Reverse Charge",
    "Import & Export VAT",
    "EC Sales & International VAT",
    "Cross-Border Transactions",
    "Marketplace and eCommerce VAT Compliance",
];

const reconciliationServices = [
    "VAT Control Account Reconciliations",
    "Sales & Purchase VAT Reviews",
    "Reverse Charge Reviews",
    "Import VAT Reviews",
    "VAT Adjustment Reviews",
    "Transaction Sampling & Compliance Reviews",
    "VAT Error Identification",
    "HMRC Readiness Assessments",
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING SOFTWARE",
        icon: "user",
        logos: ["xero", "quickbooks online", "sage business cloud", "freeagent"],
    },
    {
        heading: "MTD & VAT COMPLIANCE PLATFORMS",
        icon: "briefcase",
        logos: [
            "xero tax",
            "quickbooks vat centre",
            "sage vat module",
            "freeagent vat",
        ],
    },
    {
        heading: "SUPPORTING TOOLS",
        icon: "document",
        logos: ["dext", "hubdoc", "autoentry", "approvalmax", "a2x"],
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
        label: "Construction Companies",
        icon: HardHat,
        bg: "#FFF4E5",
        color: "#FF6A00",
    },
    {
        label: "Property & Real Estate",
        icon: Building2,
        bg: "#FFE8EE",
        color: "#BE123C",
    },
    {
        label: "Manufacturing & Distribution",
        icon: Factory,
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
        label: "Recruitment & Staffing Agencies",
        icon: Users,
        bg: "#F3E8FF",
        color: "#7C3AED",
    },
];

const whyChooseCards = [
    { title: "ACCA-Led Delivery Team", icon: UserCheck },
    { title: "UK VAT & MTD Expertise", icon: BookOpen },
    { title: "Dedicated Offshore Resources", icon: Headset },
    { title: "White-Label Service Delivery", icon: BadgeCheck },
    { title: "Structured Review Processes", icon: ClipboardCheck },
    { title: "Secure Data Handling", icon: LockKeyhole },
    { title: "Flexible Engagement Models", icon: Network },
    { title: "Scalable Support Without Increasing Overheads", icon: TrendingUp },
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

function SchemePill({ text }) {
    return (
        <li
            className="flex items-center gap-2.5 rounded-full border border-[#F3E6D8] bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)]"
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
            <span className="text-[12.5px] font-semibold" style={{ color: NAVY }}>
                {text}
            </span>
        </li>
    );
}

export default function VatServiceuk() {
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
                <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FF6A00]/12 blur-3xl" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/50 blur-2xl" />

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            VAT &amp; Making Tax Digital (MTD)
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            UK VAT &amp;{" "}
                            <span className="text-[#FF6A00]">Making Tax Digital (MTD)</span>{" "}
                            Outsourcing Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Specialist VAT Compliance Support for UK Accounting Firms
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
                <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Specialist VAT Compliance Support for UK Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                VAT remains one of the most technically challenging and frequently
                                changing areas of UK taxation. From registrations and VAT returns
                                to complex schemes and Making Tax Digital (MTD) requirements,
                                accounting firms must continually manage compliance while
                                delivering timely and accurate services to clients.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we provide dedicated offshore VAT and MTD support
                                to UK accounting firms, helping practices increase capacity,
                                improve compliance processes, and manage growing client portfolios
                                efficiently.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Whether your firm requires support with routine VAT returns,
                                reconciliations, MTD compliance, or complex VAT schemes, our team
                                acts as a seamless extension of your practice.
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
                                    alt="VAT and MTD compliance support team"
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
                                    label="Offshore Support Team"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-6 sm:h-7" />
                </div>
            </section>

            {/* 3 — Why VAT & MTD Matter */}
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
                            HMRC Compliance Auditing
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why <span style={{ color: ORANGE }}>VAT &amp; MTD</span> Matter
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            VAT compliance involves much more than completing a quarterly return.
                            Businesses must maintain accurate records, apply the correct VAT
                            treatment to transactions, and keep pace with evolving HMRC
                            requirements.
                        </p>

                        <p
                            className="mt-3 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Making Tax Digital has further transformed VAT compliance by
                            introducing digital record-keeping and submission requirements,
                            encouraging businesses to move away from manual processes and adopt
                            more efficient systems.
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
                                Effective VAT and MTD management helps businesses:
                            </span>
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
                        {whyVatMatters.map((card) => (
                            <MatterCard key={card.title} {...card} />
                        ))}
                    </div>

                    <p
                        className="mx-auto mt-6 max-w-3xl text-center text-[12.5px] leading-relaxed sm:text-[13px]"
                        style={{ color: GREY }}
                    >
                        For accounting firms, efficient VAT management reduces operational
                        pressure and allows more time for advisory and client relationship
                        management.
                    </p>
                </div>
            </section>

            {/* 4 — VAT Services + MTD Support */}
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
                            Our <span style={{ color: ORANGE }}>VAT &amp; MTD</span> Services
                        </h2>

                        <p
                            className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Dedicated VAT operations and MTD support that keep your clients
                            compliant and audit-ready.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={FileText}
                            titleBefore="Our "
                            titleAccent="VAT Services"
                            titleAfter=" Include"
                            items={vatServices}
                        />
                        <ServiceCard
                            icon={Link2}
                            titleBefore="Making Tax Digital "
                            titleAccent="(MTD)"
                            titleAfter=" Support"
                            items={mtdServices}
                        />
                    </div>

                    <p
                        className="mx-auto mt-5 max-w-3xl text-center text-[12.5px] leading-relaxed sm:text-[13px]"
                        style={{ color: GREY }}
                    >
                        We help accounting firms implement efficient digital processes that
                        improve compliance and reduce manual administration.
                    </p>
                </div>
            </section>

            {/* 5 — VAT Schemes */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-7 text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: PILL_BG, color: ORANGE }}
                        >
                            <Calculator className="h-3 w-3" strokeWidth={2.5} />
                            HMRC-Approved Schemes
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            VAT Schemes{" "}
                            <span style={{ color: ORANGE }}>We Support</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed"
                            style={{ color: GREY }}
                        >
                            Our team has experience working across a wide range of HMRC-approved
                            VAT schemes, including:
                        </p>
                    </div>

                    <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                        {vatSchemes.map((item) => (
                            <SchemePill key={item} text={item} />
                        ))}
                    </ul>

                    <div className="mt-8 text-center">
                        <p
                            className="mb-4 text-[13px] font-bold sm:text-[14px]"
                            style={{ color: NAVY }}
                        >
                            We also support specialist areas such as:
                        </p>
                        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                            {specialistAreas.map((item) => (
                                <SchemePill key={item} text={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6 — Reconciliation & Compliance Reviews */}
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
                            <RefreshCw className="h-3 w-3" strokeWidth={2.5} />
                            Accuracy First
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            VAT Reconciliation &amp;{" "}
                            <span style={{ color: ORANGE }}>Compliance Reviews</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed"
                            style={{ color: GREY }}
                        >
                            Accurate reconciliations are essential for ensuring VAT returns are
                            complete, consistent, and error-free.
                        </p>
                    </div>

                    <ServiceCard
                        icon={ClipboardCheck}
                        titleBefore="Our "
                        titleAccent="support"
                        titleAfter=" includes:"
                        items={reconciliationServices}
                    />

                    <p
                        className="mx-auto mt-5 max-w-3xl text-center text-[12.5px] leading-relaxed sm:text-[13px]"
                        style={{ color: GREY }}
                    >
                        Regular reviews help identify potential issues before they become costly
                        compliance problems.
                    </p>
                </div>
            </section>

            {/* 7 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting, MTD, VAT, and supporting tools your clients already use."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* 8 — Industries */}
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
                                Industries We <span style={{ color: ORANGE }}>Support</span>
                            </h2>

                            <p
                                className="mx-auto mt-2 max-w-[540px] text-[12px] leading-5 sm:mt-2 sm:text-[13px] sm:leading-6"
                                style={{ color: GREY }}
                            >
                                We support accounting firms serving clients across a variety of
                                sectors, including:
                            </p>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-3 lg:gap-3 xl:grid-cols-6">
                            {industriesWeSupport.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={item.label}
                                        className="flex min-h-[92px] flex-col items-center justify-center rounded-[12px] border border-[#F0F0F0] bg-white px-2 py-2.5 text-center shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-all duration-200 hover:border-[#FF6A00]/25 hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:min-h-[108px] sm:rounded-[14px] sm:px-2.5 sm:py-3"
                                    >
                                        <div
                                            className="flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
                                            style={{ backgroundColor: item.bg }}
                                        >
                                            <Icon
                                                className="h-5 w-5 sm:h-5 sm:w-5"
                                                style={{ color: item.color }}
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
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 — Why Choose */}
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
                            <span style={{ color: ORANGE }}>NextLedgers</span>?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated VAT specialists who work as an extension of your practice,
                            ensuring accuracy, MTD readiness, and HMRC compliance.
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

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-auto lg:mt-5 lg:max-w-[75%] lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(4).map(({ title, icon: Icon }) => (
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

            {/* 10 — Cream partner CTA */}
            <section className="relative w-full bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-2.5 lg:px-8">
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
                            VAT &amp; MTD Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore{" "}
                            <span style={{ color: ORANGE }}>VAT &amp; MTD</span> Compliance
                            Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            VAT requires technical knowledge, accuracy, and a thorough
                            understanding of HMRC regulations. Combined with Making Tax Digital
                            requirements, firms increasingly need efficient processes and
                            specialist support to maintain high compliance standards.
                        </p>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            At NextLedgers, our experienced professionals help UK accounting firms
                            streamline VAT processes, strengthen compliance controls, and scale
                            efficiently without increasing internal resource pressures.
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
                                Whether you require support with VAT returns, MTD compliance,
                                reconciliations, VAT reviews, or complex VAT schemes, NextLedgers
                                can provide reliable offshore support that integrates seamlessly
                                with your accounting practice.
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

            <Footer />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
