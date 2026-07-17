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
    BadgeCheck,
    Network,
    TrendingUp,
    Handshake,
    Phone,
    Send,
    LineChart,
    Monitor,
    Scale,
    Workflow,
    Eye,
    BarChart3,
    Coins,
    PieChart,
    LayoutDashboard,
    Lightbulb,
    FileText,
    Target,
    Activity,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import BookKeepingMatters from "@/app/components/ServiceMainPageContent/BookkeepingMatters";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const trustBadges = [
    { icon: ShieldCheck, label: "Accurate", sub: "Financial Insights" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Secure &", sub: "Confidential" },
    { icon: Clock, label: "Global Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Reporting Team" },
];

const serviceLines = [
    {
        title: "Core Financial Statements",
        shortTitle: "Statements",
        icon: FileText,
        items: [
            "Financial Statement Preparation",
            "Profit & Loss Analysis",
            "Balance Sheet Analysis",
            "Cash Flow Reporting & Analysis",
        ],
    },
    {
        title: "Management & Executive Reporting",
        shortTitle: "Management",
        icon: LayoutDashboard,
        items: [
            "Management Reporting",
            "KPI Development & Dashboard Reporting",
            "Executive & Board Reporting",
            "Custom Financial Reporting Solutions",
        ],
    },
    {
        title: "Performance & Profitability Analysis",
        shortTitle: "Performance",
        icon: PieChart,
        items: [
            "Financial Performance Reviews",
            "Revenue & Expense Analysis",
            "Profitability & Margin Analysis",
            "Business Performance Insights",
        ],
    },
    {
        title: "Variance, Trends & Forecasting Views",
        shortTitle: "Analysis",
        icon: Activity,
        items: [
            "Budget vs Actual Analysis",
            "Variance Analysis",
            "Trend & Ratio Analysis",
            "Business Performance Insights",
        ],
    },
];

const dataDrivenBenefits = [
    {
        icon: Lightbulb,
        title: "Strategic Planning Support",
        description:
            "Turn complex financial information into intelligence that supports planning and growth.",
    },
    {
        icon: Eye,
        title: "Monitor Performance",
        description:
            "Track financial results clearly so leadership can respond quickly and confidently.",
    },
    {
        icon: Target,
        title: "Improve Resource Allocation",
        description:
            "Use accurate analysis to prioritise spend, investment, and operational focus.",
    },
    {
        icon: TrendingUp,
        title: "Strengthen Profitability",
        description:
            "Identify margin opportunities and cost drivers through clear reporting.",
    },
    {
        icon: Scale,
        title: "Informed Decisions",
        description:
            "Give owners and leadership teams the clarity needed for confident decisions.",
    },
    {
        icon: Workflow,
        title: "Reliable Reporting Processes",
        description:
            "Establish transparent, accountable reporting workflows for long-term success.",
    },
];

const dataDrivenTrustItems = [
    { icon: ShieldCheck, label: "Accurate Reporting" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Clock, label: "Global Time Zone Overlap" },
    { icon: Users, label: "Experienced Analysts" },
];

const whyChooseCards = [
    { title: "Accurate & Timely Financial Reporting", icon: FileText },
    { title: "Actionable Business Insights", icon: Lightbulb },
    {
        title: "Experienced Finance & Reporting Professionals",
        icon: UserCheck,
    },
    { title: "Improved Financial Visibility", icon: Eye },
    { title: "Better Performance Monitoring", icon: Activity },
    { title: "Reliable KPI & Dashboard Reporting", icon: LayoutDashboard },
    { title: "Enhanced Decision-Making Support", icon: BarChart3 },
    { title: "Scalable Financial Reporting Solutions", icon: TrendingUp },
    { title: "Flexible Offshore Finance Support", icon: Network },
    { title: "Trusted Partner for Business Growth", icon: BadgeCheck },
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING SOFTWARE",
        icon: "user",
        logos: ["xero", "quickbooks online", "sage", "zoho books"],
    },
    {
        heading: "REPORTING & BI",
        icon: "shield",
        logos: ["microsoft excel", "google sheets", "power bi"],
    },
    {
        heading: "DATA CAPTURE",
        icon: "document",
        logos: ["dext", "hubdoc"],
    },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "Clear Financial Insights" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted Reporting Partner" },
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

export default function FinancialReportingPage() {
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
                            Financial Reporting &amp; Analysis
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            Expert{" "}
                            <span className="text-[#FF6A00]">Financial Reporting</span>{" "}
                            That Turns Data into Clear Insights for Smarter Business
                            Decisions
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-2xl sm:text-[13px] md:text-sm">
                            Accurate, timely, and actionable reporting that helps
                            businesses monitor performance and plan for growth.
                            <br className="hidden sm:block" />
                            Trusted by startups, SMEs, enterprises, and accounting
                            firms.
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

            {/* 2 — Intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Financial Clarity Partner
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Comprehensive Financial Reporting &amp; Analysis
                                Services
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Accurate financial reporting is essential for
                                understanding business performance, maintaining
                                financial control, and making informed strategic
                                decisions. As businesses grow, managing financial data
                                across multiple departments, locations, and revenue
                                streams becomes increasingly complex.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we deliver accurate, timely, and
                                actionable financial insights to help businesses monitor
                                performance, improve profitability, and plan for
                                sustainable growth. Our experienced finance
                                professionals work as an extension of your team.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Whether you are a startup, SME, growing enterprise, or
                                accounting firm, our tailored reporting solutions
                                provide complete visibility into your financial
                                performance while helping you identify opportunities,
                                manage risks, and achieve your business objectives.
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
                                    alt="Financial reporting and analysis team"
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
                                    label="Reporting Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Services include */}
            <ServiceDeliverablesExplorer
                eyebrow="Full Services Deliverables"
                titleBefore="Our "
                titleAccent="Financial Reporting & Analysis"
                titleAfter=" Services Include"
                subtitle="Clear, accurate, and timely reports that support strategic planning and operational excellence."
                services={serviceLines}
            />

            {/* 4 — Data-driven decisions */}
            <BookKeepingMatters
                eyebrow="Business Intelligence"
                titleBefore="Helping Businesses Make "
                titleAccent="Data-Driven"
                titleAfter=" Financial Decisions"
                intro="Our Financial Reporting & Analysis Services transform complex financial information into meaningful business intelligence that supports strategic planning and operational excellence."
                helpLabelBefore="We provide clear reports that help teams "
                helpLabelAccent="act with confidence"
                helpLabelAfter=":"
                trustItems={dataDrivenTrustItems}
                trustFooterBefore="Built for Leadership Teams. "
                trustFooterAccent="Trusted by Growing Businesses."
                benefits={dataDrivenBenefits}
                bannerTitleBefore="Improve transparency. "
                bannerTitleAccent="Strengthen accountability."
                bannerBody="By combining experienced financial professionals with modern reporting tools and industry best practices, we help businesses establish reliable reporting processes for long-term financial success."
            />

            {/* 5 — Why Choose */}
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
                            Accurate reporting, actionable insights, and experienced
                            finance professionals who improve visibility and
                            decision-making.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(0, 5).map(({ title, icon: Icon }) => (
                            <div
                                key={title}
                                className="flex flex-col items-center rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 text-center shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                            >
                                <span
                                    className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full"
                                    style={{ background: "#FFF4EA", color: ORANGE }}
                                >
                                    <Icon className="h-9 w-9" strokeWidth={1.75} />
                                </span>
                                <h3
                                    className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                    style={{ color: NAVY }}
                                >
                                    {title}
                                </h3>
                                <div
                                    className="mx-auto mt-3 h-[2px] w-8 rounded-full"
                                    style={{ background: ORANGE }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(5).map(({ title, icon: Icon }) => (
                            <div
                                key={title}
                                className="flex flex-col items-center rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 text-center shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                            >
                                <span
                                    className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full"
                                    style={{ background: "#FFF4EA", color: ORANGE }}
                                >
                                    <Icon className="h-9 w-9" strokeWidth={1.75} />
                                </span>
                                <h3
                                    className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                    style={{ color: NAVY }}
                                >
                                    {title}
                                </h3>
                                <div
                                    className="mx-auto mt-3 h-[2px] w-8 rounded-full"
                                    style={{ background: ORANGE }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6 — Industries */}
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
                                We provide Financial Reporting &amp; Analysis Services
                                to businesses across a wide range of industries,
                                including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid />
                    </div>
                </div>
            </section>

            {/* 7 — Software */}
            <IconDisplayScreen
                title="Software & Technology Expertise"
                subtitle="Our finance professionals work with leading accounting, reporting, and business intelligence platforms."
                logodata={softwareExpertiseLogodata}
                categoryIconClassName="h-9 w-9"
                categoryIconColorClass="text-[#FF6A00]"
            />

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
                            Financial Clarity Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Delivering Financial Clarity That Drives{" "}
                            <span style={{ color: ORANGE }}>Business Success</span>
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            At NextLedgers, we help businesses unlock the true value of
                            their financial data through accurate reporting, insightful
                            analysis, and strategic financial intelligence.
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
                                Whether you need monthly financial reports, executive
                                dashboards, profitability analysis, or customised
                                reporting solutions, our experienced team works as an
                                extension of your business — delivering the expertise,
                                accuracy, and insights needed to improve performance and
                                support confident decision-making.
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
