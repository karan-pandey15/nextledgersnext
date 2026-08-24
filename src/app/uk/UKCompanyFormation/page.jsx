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
    BookOpen,
    BadgeCheck,
    ClipboardCheck,
    LockKeyhole,
    Network,
    TrendingUp,
    Building2,
    Pencil,
    FileText,
    Sparkles,
    Scale,
    FolderCheck,
    CalendarDays,
    FileCheck2,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import ServicePartnerCTA from "@/app/components/ServiceMainPageContent/ServicePartnerCTA";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { UK_COMPANY_FORMATION_INDUSTRIES } from "@/app/uk/ukIndustries";
import { UK_COMPANY_FORMATION_SOFTWARE } from "@/app/uk/ukSoftwareExpertise";

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

const whyMattersItems = [
    {
        icon: Building2,
        title: "Establish their business correctly from day one",
        description:
            "Set up companies with the right structure, documentation, and registrations.",
    },
    {
        icon: CalendarDays,
        title: "Meet Companies House filing deadlines",
        description:
            "Stay on top of confirmation statements and statutory filing obligations.",
    },
    {
        icon: Scale,
        title: "Maintain statutory compliance",
        description:
            "Keep companies aligned with Companies House and corporate governance requirements.",
    },
    {
        icon: FolderCheck,
        title: "Keep company records accurate and up to date",
        description:
            "Maintain registers, PSC records, and corporate documentation throughout the year.",
    },
    {
        icon: ShieldCheck,
        title: "Reduce regulatory risks",
        description:
            "Lower the chance of late filings, incorrect submissions, and compliance issues.",
    },
    {
        icon: Award,
        title: "Improve corporate governance",
        description:
            "Support directors with clear minutes, resolutions, and statutory processes.",
    },
    {
        icon: Users,
        title: "Enhance stakeholder confidence",
        description:
            "Demonstrate organised, professional corporate administration to clients and partners.",
    },
    {
        icon: Clock,
        title: "Reduce administrative burden",
        description:
            "Free internal teams from repetitive formation and secretarial administration.",
    },
];

const formationServices = [
    "Company Formation Coordination*",
    "Companies House Identity Verification (ID Verification) Support",
    "Company Name Availability Checks",
    "Company Incorporation Documentation Preparation",
    "Director & Shareholder Onboarding Support",
    "Business Structure Guidance",
    "Registered Office Documentation Support",
    "Corporation Tax Registration Support",
    "PAYE Employer Registration Support",
    "VAT Registration Support",
    "New Business Compliance Checklists",
    "Director & Shareholder Compliance Guidance",
];

const secretarialServices = [
    "Confirmation Statement Preparation (CS01)",
    "Companies House Filing Support",
    "Statutory Register Maintenance",
    "Director Appointment & Resignation Documentation",
    "Share Allotment Documentation",
    "Share Transfer Documentation",
    "Persons with Significant Control (PSC) Register Maintenance",
    "Registered Office Change Documentation",
    "Company Name Change Documentation",
    "Board Minutes & Written Resolutions",
    "Dividend Documentation Preparation",
    "Company Secretarial Record Maintenance",
];

const companiesHouseServices = [
    "Companies House Filing Monitoring",
    "Annual Compliance Calendar Management",
    "Company Information Updates",
    "Statutory Record Reviews",
    "Filing Deadline Monitoring",
    "Director & Shareholder Record Updates",
    "Companies House Compliance Reviews",
    "Client Compliance Reminder Support",
];

const startUpServices = [
    "New Client Onboarding Support",
    "Incorporation Documentation Reviews",
    "Director Identity Verification Support",
    "Company Administration Support",
    "Business Registration Documentation",
    "Compliance Health Checks",
    "Corporate Record Organisation",
    "Regulatory Documentation Support",
];

const helpFirmsCapacity = [
    "Increase company secretarial service capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve compliance accuracy",
];

const helpFirmsScale = [
    "Meet Companies House deadlines",
    "Deliver a seamless client onboarding experience",
    "Expand value-added advisory services",
    "Scale operations without increasing headcount",
];

const softwareExpertiseLogodata = UK_COMPANY_FORMATION_SOFTWARE;

const whyChooseCards = [
    { title: "UK Company Formation Expertise", icon: Building2 },
    { title: "Companies House Compliance Knowledge", icon: FileCheck2 },
    { title: "ACCA-Led Professional Support", icon: UserCheck },
    { title: "Statutory Filing & Reporting", icon: FileText },
    { title: "Dedicated Company Secretarial Resources", icon: Headset },
    { title: "Secure & Confidential Handling", icon: LockKeyhole },
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
                className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: PILL_BG, color: ORANGE }}
            >
                <Icon className="h-7 w-7" strokeWidth={1.75} />
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

export default function UKCompanyFormation() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <UKNavbar
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
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-2xl" />

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            Company Formation &amp; Secretarial
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            UK Company Formation &amp;{" "}
                            <span className="text-[#FF6A00]">Company Secretarial</span>{" "}
                            Outsourcing Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Company Formation &amp; Company Secretarial Support for UK
                            Accounting Firms
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

            {/* 2 — Intro (Management Accounts Discovery Call style) */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Company Formation &amp; Company Secretarial Support for
                                UK Accounting Firms
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Company formation and ongoing company secretarial compliance are
                                essential services offered by modern accounting firms. From
                                incorporating new companies and completing Companies House identity
                                verification requirements to maintaining statutory records and
                                managing Companies House filings, businesses rely on their
                                accountants to ensure they remain compliant throughout their
                                business lifecycle.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                As your practice grows, managing company formations, statutory
                                filings, and company secretarial work for multiple clients can
                                become increasingly time-consuming.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we provide dedicated Company Formation
                                &amp; Company Secretarial support to UK accounting firms,
                                accountancy practices, and corporate service providers. Our
                                white-label outsourcing solutions help firms increase capacity,
                                improve turnaround times, and deliver reliable compliance services
                                without increasing internal staffing costs.
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
                                    alt="Company formation and secretarial support team"
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
                                    label="Support Team"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-6 sm:h-7" />
                </div>
            </section>

            {/* 3 — Why it matters */}
            <section
                className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
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
                            Corporate Governance
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why{" "}
                            <span style={{ color: ORANGE }}>
                                Company Formation &amp; Company Secretarial
                            </span>{" "}
                            Services Matter
                        </h2>

                        <p
                            className="mt-2.5 max-w-2xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            Setting up a company correctly and maintaining statutory compliance are
                            fundamental to good corporate governance. Businesses must comply with
                            Companies House requirements, maintain statutory registers, submit
                            confirmation statements, notify changes to company information, and
                            keep company records up to date throughout the year.
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
                                Professional company secretarial support helps businesses:
                            </span>
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
                        {whyMattersItems.map((card) => (
                            <MatterCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4 — Formation + Secretarial */}
            <section
                className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
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
                                Formation &amp; Secretarial
                            </span>{" "}
                            Services
                        </h2>

                        <p
                            className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            From incorporation through ongoing Companies House compliance, we
                            support the full company lifecycle.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={Building2}
                            titleBefore="Our Company "
                            titleAccent="Formation"
                            titleAfter=" Services Include"
                            items={formationServices}
                        />
                        <ServiceCard
                            icon={FileText}
                            titleBefore="Our Company "
                            titleAccent="Secretarial"
                            titleAfter=" Services Include"
                            items={secretarialServices}
                        />
                    </div>

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

            {/* 5 — Companies House + Start-Up */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-3 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-7 text-center">
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Companies House &amp;{" "}
                            <span style={{ color: ORANGE }}>Start-Up Compliance</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed"
                            style={{ color: GREY }}
                        >
                            Supporting new businesses from incorporation through ongoing compliance
                            helps accounting firms strengthen client relationships and deliver
                            additional value-added services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={FileCheck2}
                            titleBefore="Companies House "
                            titleAccent="Compliance"
                            titleAfter=" Support"
                            items={companiesHouseServices}
                        />
                        <ServiceCard
                            icon={FolderCheck}
                            titleBefore="Business Start-Up & "
                            titleAccent="Corporate"
                            titleAfter=" Compliance Support"
                            items={startUpServices}
                        />
                    </div>
                </div>
            </section>

            {/* 6 — How We Help */}
            <section
                className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
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
                            Our Company Formation &amp; Company Secretarial support enables firms
                            to deliver reliable compliance without increasing headcount.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                        <ServiceCard
                            icon={Award}
                            titleBefore="Capacity & "
                            titleAccent="Accuracy"
                            titleAfter=""
                            items={helpFirmsCapacity}
                        />
                        <ServiceCard
                            icon={Users}
                            titleBefore="Scale & "
                            titleAccent="Grow"
                            titleAfter=""
                            items={helpFirmsScale}
                        />
                    </div>
                </div>
            </section>

            {/* 7 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the company secretarial, accounting, and document platforms your practice already uses."
                logodata={softwareExpertiseLogodata}
                className="!py-3"
                showTextForMissing={true}
            />

            {/* 8 — Industries */}
            <section className="relative w-full overflow-hidden bg-white py-3">
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
                                We support UK accounting firms serving clients across various
                                sectors, including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid industries={UK_COMPANY_FORMATION_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* 9 — Why Choose */}
            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleAfter="?"
                subtitle="Dedicated company secretarial specialists who work as an extension of your practice, ensuring accurate formation and ongoing compliance."
                items={whyChooseCards}
                imageSrc="/images/DSC09669.JPG"
                imageAlt="NextLedgers company formation and secretarial specialists"
            />

            {/* 10 — Partner CTA */}
            <ServicePartnerCTA
                eyebrow="Company Secretarial Partner"
                titleBefore="Your Company Formation &"
                titleAccent="Company Secretarial"
                titleAfter="Partner"
                description="Company formation and company secretarial services require accuracy, organisation, confidentiality, and ongoing compliance management. Our dedicated professionals work as an extension of your practice, helping you deliver efficient company formation, statutory compliance, and corporate administration services while freeing up valuable internal resources."
                callout="Whether you require formation coordination, Companies House identity verification, confirmation statements, statutory registers, director changes, governance documentation, or dedicated resources, NextLedgers helps your practice scale confidently."
            />

            <Footer region="uk" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
