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
    Building2,
    BookOpen,
    BadgeCheck,
    ClipboardCheck,
    LockKeyhole,
    Network,
    TrendingUp,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import ServicePartnerCTA from "@/app/components/ServiceMainPageContent/ServicePartnerCTA";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { UK_PAYROLL_INDUSTRIES } from "@/app/uk/ukIndustries";
import { UK_PAYROLL_SOFTWARE } from "@/app/uk/ukSoftwareExpertise";

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

const softwareExpertiseLogodata = UK_PAYROLL_SOFTWARE;

const whyChooseNextLedgers = [
    { title: "UK PAYE & Payroll Expertise", icon: BookOpen },
    { title: "CIS Compliance Knowledge", icon: BadgeCheck },
    { title: "RTI & Statutory Reporting", icon: ClipboardCheck },
    { title: "Accurate Payroll Processing", icon: UserCheck },
    { title: "Dedicated Payroll Resources", icon: Headset },
    { title: "Confidential Data Handling", icon: LockKeyhole },
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

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] flex items-center justify-center">
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
                    className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/80 px-3 py-2.5 shadow-[0_2px_10px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-shadow hover:shadow-[0_4px_16px_rgba(255, 106, 0,0.12)]"
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
            <UKNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

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
                            UK Payroll &amp; CIS Outsourcing
                        </span>

                        <h1 className="max-w-3xl text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:text-3xl lg:text-[34px]">
                            UK Payroll &amp;{" "}
                            <span className="text-[#FF6A00]">CIS Outsourcing Services</span>
                        </h1>

                        <p className="mt-2 max-w-xl text-[13px] leading-snug text-slate-700 sm:text-sm">
                            Reliable Payroll &amp; CIS Support for UK Accounting Firms
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]" />

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
                <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[34px] lg:text-[30px]">
                                Reliable Payroll &amp;{" "}
                                <span className="text-[#FF6A00]">CIS Support</span> for UK
                                Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

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
                                Payroll and CIS support to UK accounting firms, helping
                                practices increase capacity, maintain compliance, and deliver
                                reliable services without increasing internal staffing costs.
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
                                    label="Support Team"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-6 sm:h-7" />
                </div>
            </section>

            {/* 3 — Why Payroll & CIS Matter */}
            <section className="relative w-full overflow-hidden bg-white py-3">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center lg:text-left">
                        <h2
                            className="text-[22px] font-extrabold leading-tight tracking-[-0.01em] sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Payroll &amp;{" "}
                            <span style={{ color: ORANGE }}>CIS Matter</span>
                        </h2>
                        <p
                            className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed sm:text-[15px] lg:mx-0"
                            style={{ color: GREY }}
                        >
                            Effective payroll and CIS management helps businesses:
                        </p>
                    </div>

                    <div className="mt-4 grid grid-cols-1 items-start gap-5 sm:mt-5 lg:grid-cols-2 lg:gap-8">
                        <div>
                            {whyPayrollMattersItems.map((item, index) => {
                                const Icon = item.icon;
                                const isLast = index === whyPayrollMattersItems.length - 1;
                                return (
                                    <div key={item.title}>
                                        <div className="flex items-start gap-2.5 py-1 sm:py-1.5">
                                            <div
                                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EA] text-[#FF6A00]"
                                            >
                                                <Icon className="h-5 w-5" strokeWidth={1.75} />
                                            </div>
                                            <div className="min-w-0">
                                                <h3
                                                    className="text-[12.5px] font-bold leading-snug sm:text-[13px]"
                                                    style={{ color: NAVY }}
                                                >
                                                    {item.title}
                                                </h3>
                                                <p
                                                    className="mt-0.5 text-[11.5px] leading-[1.35] sm:text-[12px]"
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

                        <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(15,39,74,0.08)] sm:h-[260px] sm:rounded-[24px] lg:h-[280px]">
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
                                    "radial-gradient(rgba(255, 106, 0,0.22) 1px, transparent 1px)",
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
                className="relative w-full overflow-hidden py-3"
                style={{ background: "#FFF7F0" }}
            >
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
            <section className="relative w-full overflow-hidden bg-white py-3">
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
                className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
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
                                borderColor: "rgba(255, 106, 0,0.35)",
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
                className="!py-3"
            />

            {/* 8 — Industries */}
            <section className="relative w-full overflow-hidden bg-white py-3">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
                    <div className="px-3 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7" style={{ background: PAGE_CREAM }}>
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
                                We support accounting firms serving clients across various sectors,
                                including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid industries={UK_PAYROLL_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* 9 — Why Choose NextLedgers */}
            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleAfter="?"
                subtitle="Precision, confidentiality, and consistent HMRC compliance for payroll and CIS."
                items={whyChooseNextLedgers}
                imageSrc="/images/DSC09669.JPG"
                imageAlt="Why choose NextLedgers for payroll and CIS"
            />

            {/* 10 — CTA */}
            <ServicePartnerCTA
                eyebrow="Payroll & CIS Partner"
                titleBefore="Your Payroll &"
                titleAccent="CIS Delivery"
                titleAfter="Partner"
                description="Payroll and CIS require precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources."
                callout="Whether you require payroll processing, RTI compliance, pension administration, CIS returns, or dedicated payroll resources, NextLedgers helps your practice scale while maintaining quality and compliance."
            />

            <Footer region="uk" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
