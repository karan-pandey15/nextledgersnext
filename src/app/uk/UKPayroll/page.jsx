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
    Pencil,
    HardHat,
    Briefcase,
    Building2,
    Factory,
    UtensilsCrossed,
    HeartPulse,
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

const whyPayrollMattersItems = [
    {
        icon: Award,
        title: "Pay employees accurately and on time",
        description:
            "Deliver precise payroll runs that keep staff paid correctly every cycle.",
    },
    {
        icon: ShieldCheck,
        title: "Meet HMRC reporting requirements",
        description:
            "Stay aligned with RTI, CIS, and statutory reporting obligations.",
    },
    {
        icon: Lock,
        title: "Avoid penalties and compliance issues",
        description:
            "Reduce risk from payroll errors, late filings, and CIS mistakes.",
    },
    {
        icon: Users,
        title: "Maintain accurate employee and subcontractor records",
        description:
            "Keep starter, leaver, and verification data organised and audit-ready.",
    },
    {
        icon: Clock,
        title: "Reduce administrative burden",
        description:
            "Free your team from repetitive payroll processing and CIS admin.",
    },
    {
        icon: Headset,
        title: "Improve operational efficiency and client satisfaction",
        description:
            "Faster turnaround and fewer errors improve service quality for clients.",
    },
];

const payrollServices = [
    "Weekly, Fortnightly, Four-Weekly & Monthly Payroll Processing",
    "Employee Payroll Maintenance",
    "New Starter & Leaver Processing",
    "Payroll Amendments & Reconciliations",
    "RTI (FPS & EPS) Submission Support",
    "Payslips & Payroll Reporting",
    "Pension Auto-Enrolment Support",
    "Director Payroll Processing",
    "Statutory Pay Calculations (SSP, SMP, SPP, SAP & Shared Parental Pay)",
    "Holiday Pay & Leave Tracking",
    "Year-End Payroll Support including P45s and P60s",
];

const cisServices = [
    "Contractor & Subcontractor Registration Support",
    "HMRC Verification Support",
    "CIS Deduction Calculations",
    "Gross Payment & Material Cost Reviews",
    "Monthly CIS Return Preparation",
    "Subcontractor Statements & Deduction Summaries",
    "CIS Reconciliations & Compliance Reviews",
    "HMRC Readiness Checks",
];

const helpFirmsCapacity = [
    "Increase payroll processing capacity",
    "Improve turnaround times",
    "Reduce administration workload",
    "Enhance compliance accuracy",
];

const helpFirmsScale = [
    "Minimise payroll and CIS errors",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
];

const softwareExpertiseLogodata = [
    {
        heading: "PAYROLL SOFTWARE",
        icon: "briefcase",
        logos: [
            "brightpay",
            "moneysoft payroll manager",
            "xero payroll",
            "quickbooks payroll",
            "sage payroll",
            "freeagent payroll",
        ],
    },
    {
        heading: "PENSION PLATFORMS",
        icon: "shield",
        logos: ["nest", "the people's pension", "smart pension"],
    },
    {
        heading: "ACCOUNTING & WORKFLOW TOOLS",
        icon: "document",
        logos: [
            "xero",
            "quickbooks online",
            "sage business cloud",
            "freeagent",
            "dext",
            "hubdoc",
            "approvalmax",
        ],
    },
];

const industriesWeSupport = [
    {
        label: "Construction & Trades",
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
        label: "Manufacturing Businesses",
        icon: Factory,
        bg: "#E8F1FF",
        color: "#3B82F6",
    },
    {
        label: "Hospitality & Retail",
        icon: UtensilsCrossed,
        bg: "#FFF0E8",
        color: "#F58220",
    },
    {
        label: "Healthcare Providers",
        icon: HeartPulse,
        bg: "#FFE8EE",
        color: "#E11D48",
    },
    {
        label: "Professional Service Firms",
        icon: Briefcase,
        bg: "#E8F4FF",
        color: "#0284C7",
    },
];

const whyChooseNextLedgers = [
    "ACCA-Led Delivery Team",
    "UK Payroll & CIS Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
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

export default function UKPayrollPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[#faf9f6] text-[#1E1B2A] flex flex-col font-sans">
            <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
            <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            {/* 1 — Hero */}
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

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                            UK Payroll &amp; CIS Outsourcing
                        </span>

                        <h1 className="max-w-3xl text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:text-3xl lg:text-[34px]">
                            UK Payroll &amp;{" "}
                            <span className="text-[#F58220]">CIS Outsourcing Services</span>
                        </h1>

                        <p className="mt-2 max-w-xl text-[13px] leading-snug text-slate-700 sm:text-sm">
                            Reliable Payroll &amp; CIS Support for UK Accounting Firms
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:py-2 sm:whitespace-nowrap"
                            >
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </a>
                            <a
                                href="#how-we-help"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:py-2 sm:whitespace-nowrap"
                            >
                                <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                                How We Work
                            </a>
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
                                Reliable Payroll &amp;{" "}
                                <span className="text-[#F58220]">CIS Support</span> for UK
                                Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#F58220]" />

                            <p className="mb-3 text-[15px] leading-relaxed text-gray-500">
                                Payroll and Construction Industry Scheme (CIS) compliance require
                                accuracy, consistency, and a thorough understanding of HMRC
                                regulations. Even minor payroll errors can lead to penalties,
                                employee dissatisfaction, and additional administrative work for
                                accounting firms.
                            </p>
                            <p className="mb-3 text-[15px] leading-relaxed text-gray-500">
                                As your practice grows, managing payroll and CIS can become
                                increasingly time-consuming. At NextLedgers, we provide dedicated
                                offshore Payroll and CIS support to UK accounting firms, helping
                                practices increase capacity, maintain compliance, and deliver
                                reliable services without increasing internal staffing costs.
                            </p>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e2761b]"
                            >
                                <span className="text-base leading-none">📞</span>
                                Book a Discovery Call
                            </a>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden rounded-2xl">
                                <img
                                    src="/images/DSC09901.JPG"
                                    alt="Payroll and CIS support team"
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                />
                            </div>
                            <div className="absolute left-4 right-4 -bottom-8 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:-bottom-9 sm:px-5 sm:py-5">
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

            {/* 3 — Why Payroll & CIS Matter */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        <div className="flex flex-col">
                            <div className="text-center lg:text-left">
                                <h2
                                    className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                    style={{ color: NAVY }}
                                >
                                    Why Payroll &amp;{" "}
                                    <span style={{ color: ORANGE }}>CIS Matter</span>
                                </h2>
                                <p
                                    className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed sm:mt-2.5 sm:text-[15px] lg:mx-0"
                                    style={{ color: GREY }}
                                >
                                    Effective payroll and CIS management helps businesses:
                                </p>
                            </div>

                            <div className="mt-4 sm:mt-5">
                                {whyPayrollMattersItems.map((item, index) => {
                                    const Icon = item.icon;
                                    const isLast = index === whyPayrollMattersItems.length - 1;
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

                        <div className="relative min-h-[280px] h-full min-w-0 overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Why payroll and CIS matter"
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
                            Payroll is more than simply paying employees. It involves accurate
                            calculations, timely submissions, pension obligations, statutory
                            payments, and maintaining compliance with ever-changing regulations.
                            Similarly, CIS introduces additional responsibilities for contractors
                            and subcontractors, including registrations, verification procedures,
                            deduction calculations, and monthly returns.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Our Payroll Services */}
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
                                Our Payroll{" "}
                                <span style={{ color: ORANGE }}>Services Include</span>
                            </h2>
                            <p
                                className="mt-2.5 text-[14px] leading-relaxed sm:text-[15px]"
                                style={{ color: GREY }}
                            >
                                End-to-end payroll processing support for UK accounting firms.
                            </p>
                            <ServiceCheckGrid items={payrollServices} />
                        </div>
                        <div className="relative min-h-[240px] h-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[300px] sm:rounded-[28px]">
                            <Image
                                src="/images/DSC09781.JPG"
                                alt="Our Payroll Services"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 — Our CIS Services */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                        <div className="relative order-2 min-h-[240px] h-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[300px] sm:rounded-[28px] lg:order-1">
                            <Image
                                src="/images/DSC09794.JPG"
                                alt="Our CIS Services"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="order-1 flex flex-col justify-center lg:order-2">
                            <span
                                className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px]"
                                style={{ color: ORANGE }}
                            >
                                CIS Compliance
                            </span>
                            <h2
                                className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                                style={{ color: NAVY }}
                            >
                                Our CIS{" "}
                                <span style={{ color: ORANGE }}>Services Include</span>
                            </h2>
                            <p
                                className="mt-2.5 text-[14px] leading-relaxed sm:text-[15px]"
                                style={{ color: GREY }}
                            >
                                Dedicated Construction Industry Scheme support for contractors and
                                subcontractors.
                            </p>
                            <ServiceCheckGrid items={cisServices} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 — How We Help Accounting Firms */}
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
                            Our payroll and CIS support enables accounting firms to:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <HelpCard
                            icon={Award}
                            titleBefore="Build Capacity & "
                            titleAccent="Efficiency"
                            titleAfter=""
                            items={helpFirmsCapacity}
                        />
                        <HelpCard
                            icon={Users}
                            titleBefore="Scale with "
                            titleAccent="Confidence"
                            titleAfter=""
                            items={helpFirmsScale}
                        />
                    </div>
                </div>
            </section>

            {/* 7 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the payroll, pension, and accounting platforms your clients already use."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* 8 — Industries */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div className="px-5 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10" style={{ background: PAGE_CREAM }}>
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
                                We support accounting firms serving clients across various sectors,
                                including:
                            </p>
                        </div>

                        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
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

            {/* 9 — Why Choose NextLedgers */}
            <section className="relative w-full overflow-hidden bg-white py-2 sm:py-2.5">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
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
                                    Precision, confidentiality, and consistent HMRC compliance for
                                    payroll and CIS.
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

                        <div className="relative min-h-[280px] h-full overflow-hidden rounded-[24px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:min-h-[320px] sm:rounded-[28px]">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Why choose NextLedgers for payroll and CIS"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 10 — CTA */}
            <TransformCTA
                titleWhite="Your Offshore Payroll &"
                titleOrange="CIS Delivery Partner"
                titleBreak={false}
                description="Payroll and CIS require precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources."
                descriptionSecond="Whether you require support with payroll processing, RTI compliance, pension administration, CIS returns, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance."
                primaryLabel="Book a Discovery Call"
                primaryHref="/contact"
                showSecondary={false}
                className="!pt-2 sm:!pt-2.5 lg:!pt-2.5"
            />

            <Footer />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
