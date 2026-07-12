"use client";

import CtaButton from "@/app/components/ui/CtaButton";

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
    Briefcase,
    UserRound,
    Home,
    Globe2,
    Handshake,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import TransformCTA from "@/app/components/HomeImpact/TransformCTA";
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

const whyPersonalTaxMattersItems = [
    {
        icon: ShieldCheck,
        title: "Meet HMRC filing requirements and deadlines",
        description:
            "Stay on top of Self Assessment deadlines and statutory filing obligations.",
    },
    {
        icon: Award,
        title: "Understand their tax liabilities and payment obligations",
        description:
            "Clear calculations help clients know what they owe and when to pay.",
    },
    {
        icon: Lock,
        title: "Avoid penalties and compliance issues",
        description:
            "Reduce risk from late filings, under-reporting, and HMRC enquiries.",
    },
    {
        icon: PuzzleIcon,
        title: "Report complex income sources accurately",
        description:
            "Handle employment, dividends, property, investments, and foreign income carefully.",
    },
    {
        icon: Clock,
        title: "Plan for future tax payments and cash flow requirements",
        description:
            "Support payment on account planning and year-ahead tax cash-flow visibility.",
    },
    {
        icon: Headset,
        title: "Make informed financial and tax planning decisions",
        description:
            "Reliable personal tax work opens the door to advisory conversations.",
    },
];

const personalTaxServices = [
    "Self Assessment Tax Returns",
    "Director Tax Returns",
    "Sole Trader Tax Returns",
    "Partnership Tax Returns",
    "Dividend Income Reporting",
    "Employment Income Reporting",
    "Rental Property Income Reporting",
    "Capital Gains Tax (CGT) Reporting",
    "Foreign Income Reporting",
    "Investment Income Reporting",
    "Tax Liability Calculations",
    "Payment on Account Calculations",
    "HMRC Correspondence Support",
    "Personal Tax Planning Support",
];

const helpFirmsCapacity = [
    "Increase Self Assessment processing capacity",
    "Improve turnaround times during busy filing periods",
    "Reduce January filing pressure",
    "Enhance compliance consistency and accuracy",
];

const helpFirmsScale = [
    "Better utilise senior tax staff",
    "Reduce recruitment dependency",
    "Improve profitability per tax return",
    "Scale efficiently during peak tax seasons",
];

const specialistAreas = [
    {
        title: "Company Directors",
        description:
            "Salary, dividend, benefits-in-kind, investment income, and capital gains reporting.",
        icon: Briefcase,
        bg: "#E8F1FF",
        color: "#3B82F6",
    },
    {
        title: "Sole Traders & Freelancers",
        description:
            "Self-employment income reporting, expense reviews, and tax computations.",
        icon: UserRound,
        bg: "#FFF0E8",
        color: "#F58220",
    },
    {
        title: "Partnerships & LLP Members",
        description:
            "Partnership returns, profit allocations, and partner reporting.",
        icon: Handshake,
        bg: "#F3E8FF",
        color: "#9333EA",
    },
    {
        title: "Property Investors & Landlords",
        description:
            "Rental income reporting, property expenses, and capital gains calculations.",
        icon: Home,
        bg: "#E8F8EF",
        color: "#16A34A",
    },
    {
        title: "High-Net-Worth & International Individuals",
        description:
            "Complex tax returns involving investments, foreign income, and cross-border reporting requirements.",
        icon: Globe2,
        bg: "#FFE8EE",
        color: "#E11D48",
    },
];

const softwareExpertiseLogodata = [
    {
        heading: "PERSONAL TAX SOFTWARE",
        icon: "briefcase",
        logos: [
            "iris personal tax",
            "cch personal tax",
            "btcsoftware",
            "capium personal tax",
            "absolute tax",
            "forbes professional",
        ],
    },
    {
        heading: "ACCOUNTING SOFTWARE",
        icon: "user",
        logos: ["xero", "quickbooks online", "sage business cloud", "freeagent"],
    },
    {
        heading: "DOCUMENT & WORKFLOW TOOLS",
        icon: "document",
        logos: ["dext", "hubdoc", "autoentry", "approvalmax"],
    },
];

const whyChooseNextLedgers = [
    "ACCA-Led Delivery Team",
    "UK Personal Tax Expertise",
    "Self Assessment Specialists",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Multi-Software Expertise",
    "Structured Review Processes",
    "Flexible Engagement Models",
    "Secure Data Handling",
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

function ServiceCheckGrid({ items }) {
    return (
        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {items.map((service) => (
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
    );
}

export default function PersonalTaxPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="flex min-h-screen flex-col bg-[#faf9f6] font-sans text-[#1E1B2A]">
            <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
            <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

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

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                            UK Personal Tax Outsourcing
                        </span>

                        <h1 className="max-w-3xl text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:text-3xl lg:text-[34px]">
                            UK Personal Tax{" "}
                            <span className="text-[#F58220]">Outsourcing Services</span>
                        </h1>

                        <p className="mt-2 max-w-xl text-[13px] leading-snug text-slate-700 sm:text-sm">
                            Specialist Personal Tax Support for UK Accounting Firms
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <CtaButton href="/contact" variant="primary" size="sm">
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </CtaButton>
                            <CtaButton href="#how-we-help" variant="ghost" size="sm">
                                <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                                How We Work
                            </CtaButton>
                        </div>
                    </div>
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            {/* 2 — Intro */}
            <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#F58220]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[34px] lg:text-[30px]">
                                Specialist Personal Tax{" "}
                                <span className="text-[#F58220]">Support</span> for UK Accounting
                                Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#F58220]" />

                            <p className="mb-3 text-[15px] leading-relaxed text-gray-500">
                                Personal Tax remains one of the most important services offered by
                                UK accounting practices. However, increasing volumes of Self
                                Assessment returns, evolving tax legislation, and growing client
                                expectations can place significant pressure on internal teams.
                            </p>
                            <p className="mb-3 text-[15px] leading-relaxed text-gray-500">
                                At NextLedgers, we provide dedicated offshore Personal Tax support
                                to UK accounting firms, helping practices manage compliance
                                efficiently, improve turnaround times, and increase capacity without
                                compromising quality.
                            </p>
                            <p className="mb-3 text-[15px] leading-relaxed text-gray-500">
                                Whether your firm requires support with standard Self Assessment
                                returns, director tax returns, partnership returns, capital gains
                                calculations, or complex personal tax cases, our team works as a
                                seamless extension of your practice.
                            </p>

                            <CtaButton href="/contact" variant="primary" size="md">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src="/images/DSC09901.JPG"
                                    alt="Personal tax support for UK accounting firms"
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
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

            {/* 3 — Why Personal Tax Matters */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        <div className="flex min-w-0 flex-col">
                            <div className="text-center lg:text-left">
                                <h2
                                    className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                    style={{ color: NAVY }}
                                >
                                    Why Personal{" "}
                                    <span style={{ color: ORANGE }}>Tax Matters</span>
                                </h2>
                                <p
                                    className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed sm:mt-2.5 sm:text-[15px] lg:mx-0"
                                    style={{ color: GREY }}
                                >
                                    Effective personal tax management helps taxpayers:
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-5">
                                {whyPersonalTaxMattersItems.map((item, index) => {
                                    const Icon = item.icon;
                                    const isLast = index === whyPersonalTaxMattersItems.length - 1;
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

                        <div className="relative h-full min-h-[280px] min-w-0 overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Why personal tax matters"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

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
                            Personal tax compliance is more than simply filing tax returns.
                            Individuals often have multiple income sources, investment activities,
                            property income, or overseas earnings that require careful review and
                            accurate reporting. For accounting firms, delivering reliable personal
                            tax services helps build stronger client relationships and creates
                            opportunities for higher-value advisory services.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Our Personal Tax Services */}
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
                                Our Personal Tax{" "}
                                <span style={{ color: ORANGE }}>Services Include</span>
                            </h2>
                            <p
                                className="mt-2.5 text-[14px] leading-relaxed sm:text-[15px]"
                                style={{ color: GREY }}
                            >
                                Comprehensive personal tax compliance support for UK accounting
                                firms.
                            </p>
                            <ServiceCheckGrid items={personalTaxServices} />
                        </div>
                        <div className="relative h-full min-h-[240px] overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[300px] sm:rounded-[28px]">
                            <Image
                                src="/images/DSC09781.JPG"
                                alt="Our Personal Tax Services"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 — How We Help Accounting Firms */}
            <section
                id="how-we-help"
                className="relative w-full overflow-hidden px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
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
                            Practice Growth
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                            style={{ color: NAVY }}
                        >
                            How We Help{" "}
                            <span style={{ color: ORANGE }}>Accounting Firms</span>
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Our personal tax specialists support firms throughout the tax compliance
                            process, from data collection and tax return preparation to detailed
                            calculations and supporting schedules. We help firms:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <HelpCard
                            icon={Award}
                            titleBefore="Capacity & "
                            titleAccent="Turnaround"
                            titleAfter=""
                            items={helpFirmsCapacity}
                        />
                        <HelpCard
                            icon={Users}
                            titleBefore="Profitability & "
                            titleAccent="Scale"
                            titleAfter=""
                            items={helpFirmsScale}
                        />
                    </div>
                </div>
            </section>

            {/* 6 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-center sm:mb-7">
                        <span
                            className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
                            style={{ color: ORANGE }}
                        >
                            Client Segments
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Specialist Areas{" "}
                            <span style={{ color: ORANGE }}>We Support</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                        {specialistAreas.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-[16px] border border-[#F3E6D8] bg-white p-5 shadow-[0_4px_18px_rgba(15,39,74,0.05)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:p-6"
                                >
                                    <div
                                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-full"
                                        style={{ backgroundColor: item.bg }}
                                    >
                                        <Icon
                                            className="h-5 w-5"
                                            style={{ color: item.color }}
                                            strokeWidth={1.75}
                                        />
                                    </div>
                                    <h3
                                        className="text-[14px] font-bold leading-snug sm:text-[15px]"
                                        style={{ color: NAVY }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className="mt-1.5 text-[12.5px] leading-relaxed sm:text-[13px]"
                                        style={{ color: GREY }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the personal tax, accounting, and workflow platforms your clients already use."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* 8 — Why Choose NextLedgers */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
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
                                    Technical expertise, confidentiality, and attention to detail
                                    for personal tax compliance.
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

                        <div className="relative h-[280px] w-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:h-[340px] lg:sticky lg:top-24 lg:h-[400px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Why choose NextLedgers for personal tax"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 9 — CTA */}
            <TransformCTA
                titleWhite="Your Offshore Personal Tax"
                titleOrange="Compliance Partner"
                titleBreak={false}
                description="Personal tax compliance requires technical expertise, confidentiality, and attention to detail. Our experienced professionals help UK accounting firms increase capacity while maintaining high standards of accuracy and compliance."
                descriptionSecond="Whether you need support with Self Assessment returns, director tax returns, partnership reporting, capital gains calculations, foreign income disclosures, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while delivering exceptional service to your clients."
                primaryLabel="Book a Discovery Call"
                primaryHref="/contact"
                showSecondary={true}
                secondaryLabel="Call Us"
                secondaryHref="tel:+918285285223"
                className="!pt-2 sm:!pt-2.5 lg:!pt-2.5"
            />

            <Footer />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
