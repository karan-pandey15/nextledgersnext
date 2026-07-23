"use client";

import Header from "@/app/components/header/Header";
import {
    Calendar,
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
    Send,
    ClipboardList,
    RefreshCw,
    FileInput,
    FileOutput,
    History,
    CalendarCheck,
    Rocket,
    Building2,
    Globe2,
    Layers,
    Eye,
    Zap,
    FileCheck,
    Briefcase,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import BookKeepingCompliance from "@/app/components/ServiceMainPageContent/Bookkeepingcompliance";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const trustBadges = [
    { icon: ShieldCheck, label: "Accurate", sub: "Financial Records" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Secure &", sub: "Confidential" },
    { icon: Clock, label: "Global Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const serviceLines = [
    {
        title: "Bookkeeping & Transaction Recording",
        shortTitle: "Bookkeeping",
        icon: ClipboardList,
        items: [
            "Day-to-day bookkeeping",
            "Sales and purchase recording",
            "Expense categorisation",
            "General ledger maintenance",
            "Journal entries",
            "Month-end bookkeeping",
        ],
    },
    {
        title: "Bank & Credit Card Reconciliations",
        shortTitle: "Reconciliations",
        icon: RefreshCw,
        items: [
            "Bank reconciliations",
            "Credit card reconciliations",
            "Payment matching",
            "Deposit verification",
            "Outstanding transaction review",
            "Reconciliation reporting",
        ],
    },
    {
        title: "Accounts Payable Management",
        shortTitle: "Accounts Payable",
        icon: FileInput,
        items: [
            "Supplier invoice processing",
            "Accounts payable reconciliation",
            "Payment scheduling support",
            "Vendor statement reconciliation",
            "Outstanding payable tracking",
            "Purchase ledger management",
        ],
    },
    {
        title: "Accounts Receivable Management",
        shortTitle: "Accounts Receivable",
        icon: FileOutput,
        items: [
            "Customer invoicing",
            "Accounts receivable reconciliation",
            "Outstanding invoice tracking",
            "Customer payment allocation",
            "Debtor reporting",
            "Collection support reports",
        ],
    },
    {
        title: "Financial Record Cleanup & Catch-Up Bookkeeping",
        shortTitle: "Cleanup & Catch-Up",
        icon: History,
        items: [
            "Historical bookkeeping cleanup",
            "Account corrections",
            "Duplicate transaction removal",
            "Missing transaction identification",
            "Ledger restructuring",
            "Catch-up bookkeeping",
        ],
    },
    {
        title: "Month-End & Year-End Closing Support",
        shortTitle: "Month & Year-End",
        icon: CalendarCheck,
        items: [
            "Month-end close support",
            "Year-end closing assistance",
            "Adjusting journal entries",
            "Accruals and prepayments",
            "Financial review support",
            "Closing reconciliations",
        ],
    },
];

const whoWeSupport = [
    {
        icon: Rocket,
        title: "Startups & Small Businesses",
        description:
            "Build a strong financial foundation with accurate bookkeeping and organised accounting records from day one.",
    },
    {
        icon: Building2,
        title: "Small & Medium-Sized Enterprises (SMEs)",
        description:
            "Scale your finance function with reliable accounting support that grows alongside your business.",
    },
    {
        icon: Briefcase,
        title: "Accounting Firms & CPA Practices",
        description:
            "Expand your service capacity through dedicated offshore bookkeeping teams operating as a seamless extension of your practice.",
    },
    {
        icon: Layers,
        title: "Multi-Entity & Growing Businesses",
        description:
            "Manage financial data across multiple entities with structured reporting and consistent accounting processes.",
    },
    {
        icon: Globe2,
        title: "Global Businesses",
        description:
            "Support international operations with scalable bookkeeping solutions that integrate with your existing finance workflows.",
    },
];

const softwareExpertiseLogodata = [
    {
        heading: "CORE ACCOUNTING SOFTWARE",
        icon: "user",
        logos: ["quickbooks online", "xero", "zoho books", "sage"],
    },
    {
        heading: "DATA CAPTURE & AUTOMATION",
        icon: "document",
        logos: ["dext", "hubdoc", "autoentry"],
    },
    {
        heading: "REPORTING & PRODUCTIVITY",
        icon: "shield",
        logos: ["microsoft excel", "google sheets", "power bi"],
    },
];

const whyChooseCards = [
    { title: "Accurate and organised financial records", icon: BookOpen },
    { title: "Timely bookkeeping and reconciliations", icon: ClipboardCheck },
    { title: "Improved cash flow visibility", icon: Eye },
    { title: "Reduced internal workload", icon: BadgeCheck },
    { title: "Scalable accounting support", icon: TrendingUp },
    { title: "Faster month-end closing", icon: Zap },
    { title: "Better financial reporting", icon: FileCheck },
    { title: "Increased operational efficiency", icon: Network },
    { title: "Secure and confidential processes", icon: LockKeyhole },
    { title: "Dedicated accounting professionals", icon: UserCheck },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "Accurate Financial Records" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by Growing Businesses" },
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

export default function AccountingBookkeepingPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <Header
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
                            Accounting &amp; Bookkeeping Services
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            Global{" "}
                            <span className="text-[#FF6A00]">
                                Accounting &amp; Bookkeeping
                            </span>{" "}
                            Services for Growing Businesses
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-2xl sm:text-[13px] md:text-sm">
                            Accurate financial records are the foundation of every
                            successful business.
                            <br className="hidden sm:block" />
                            Professional accounting and bookkeeping support for
                            startups, SMEs, firms, and growing enterprises.
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <CtaButton href="/contact" variant="primary" size="sm">
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </CtaButton>
                            <CtaButton
                                href="/contact"
                                variant="secondary"
                                size="sm"
                            >
                                <Send className="h-3.5 w-3.5 shrink-0" />
                                Request a Custom Proposal
                            </CtaButton>
                        </div>
                    </div>
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            {/* 2 — What We Offer intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                What We Offer
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px] lg:text-[30px]">
                                End-to-End Accounting &amp; Bookkeeping Support
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Accurate financial records are the foundation of every
                                successful business. At NextLedgers, we provide
                                professional accounting and bookkeeping services that
                                help businesses maintain organised financial records,
                                improve cash flow visibility, and make informed
                                business decisions.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Whether you&apos;re a startup, SME, accounting firm, or
                                growing enterprise, our experienced team integrates
                                seamlessly into your operations to deliver reliable,
                                scalable, and cost-effective accounting support.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                We provide end-to-end accounting and bookkeeping
                                services designed to support businesses across
                                multiple industries and jurisdictions.
                            </p>

                            <CtaButton href="/contact" variant="primary" size="md">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Accounting team providing bookkeeping support"
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
                                    label="Businesses Supported"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="Secure Processes"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Accounting Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Service deliverables */}
            <ServiceDeliverablesExplorer
                eyebrow="Full Services Deliverables"
                titleBefore="Our "
                titleAccent="Accounting & Bookkeeping"
                titleAfter=" Services Include"
                subtitle="Maintain accurate and up-to-date financial records with structured bookkeeping support across every core accounting process."
                services={serviceLines}
            />

            {/* 4 — Who We Support */}
            <BookKeepingCompliance
                whyEyebrow="Who We Support"
                whyTitleBefore=""
                whyTitleAccent="Who We"
                whyTitleAfter=" Support"
                whySubtitle="Our accounting and bookkeeping services are designed for businesses of every size and industry."
                whyIntroLabel=""
                whyCards={whoWeSupport}
                showServices={false}
            />

            {/* 5 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="Our team works with the world's leading accounting platforms."
                logodata={softwareExpertiseLogodata}
                categoryIconClassName="h-9 w-9"
                categoryIconColorClass="text-[#FF6A00]"
                carousel
            />

            {/* 6 — Why Businesses Choose NextLedgers */}
            <WhyChooseSplitSection
                titleBefore="Why Businesses Choose "
                titleAccent="NextLedgers"
                titleAfter=""
                subtitle="We're committed to providing exceptional accounting & bookkeeping services with a personal touch."
                items={whyChooseCards}
            />

            {/* 7 — Industries We Support */}
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
                                We provide Accounting &amp; Bookkeeping Services to
                                businesses across a wide range of industries, including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid />
                    </div>
                </div>
            </section>

            {/* 8 — Closing CTA */}
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
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Accounting &amp; Bookkeeping Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Looking for Reliable{" "}
                            <span style={{ color: ORANGE }}>
                                Accounting &amp; Bookkeeping
                            </span>{" "}
                            Support?
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            NextLedgers helps businesses worldwide simplify accounting
                            operations through accurate bookkeeping, structured
                            financial processes, and scalable offshore support. Our
                            experienced professionals become an extension of your
                            finance team, helping you improve efficiency, maintain
                            financial accuracy, and focus on growing your business
                            with confidence.
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
                                With NextLedgers, you gain accurate financial records,
                                timely reconciliations, improved cash flow visibility,
                                and dedicated accounting professionals who scale with
                                your business.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                            <CtaButton href="/contact" variant="primary" size="lg">
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </CtaButton>
                            <CtaButton href="/contact" variant="secondary" size="lg">
                                <Send className="h-4 w-4" strokeWidth={2.25} />
                                Request a Custom Proposal
                            </CtaButton>
                        </div>

                        <a
                            href="/contact"
                            className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0B1F3A] transition-colors hover:text-[#FF6A00]"
                        >
                            <Headset className="h-4 w-4" strokeWidth={2.25} />
                            Speak With Our Outsourcing Team
                            <span aria-hidden="true">→</span>
                        </a>

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

            <Footer variant="global" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
