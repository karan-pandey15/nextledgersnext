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
    Briefcase,
    Scale,
    Workflow,
    Eye,
    BarChart3,
    Coins,
    PieChart,
    LayoutDashboard,
    Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
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
    { icon: ShieldCheck, label: "Strategic", sub: "Finance Leadership" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Secure &", sub: "Confidential" },
    { icon: Clock, label: "Global Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "CFO Support" },
];

const serviceLines = [
    {
        title: "Virtual CFO & Strategic Planning",
        shortTitle: "Virtual CFO",
        icon: Briefcase,
        items: [
            "Virtual CFO Services",
            "Strategic Financial Planning",
            "Business Growth Advisory",
            "Risk Management & Financial Controls",
            "Business Process Improvement",
        ],
    },
    {
        title: "Reporting & Performance Insights",
        shortTitle: "Reporting",
        icon: LayoutDashboard,
        items: [
            "Management Reporting",
            "KPI Dashboard Reporting",
            "Financial Performance Analysis",
            "Business Profitability Analysis",
            "Board & Investor Reporting",
        ],
    },
    {
        title: "Forecasting & Cash Management",
        shortTitle: "Forecasting",
        icon: LineChart,
        items: [
            "Budgeting & Forecasting",
            "Cash Flow Forecasting & Management",
            "Working Capital Management",
            "Financial Modelling & Scenario Planning",
        ],
    },
    {
        title: "Cost Control & Profitability",
        shortTitle: "Profitability",
        icon: Coins,
        items: [
            "Cost Control & Margin Improvement",
            "Business Profitability Analysis",
            "Working Capital Management",
            "Financial Performance Analysis",
        ],
    },
];

const performanceBenefits = [
    {
        icon: Lightbulb,
        title: "Better Strategic Decisions",
        description:
            "Turn financial data into meaningful insights that support confident leadership decisions.",
    },
    {
        icon: TrendingUp,
        title: "Support Business Growth",
        description:
            "Identify opportunities and plan growth with clear financial visibility.",
    },
    {
        icon: Workflow,
        title: "Improve Operational Efficiency",
        description:
            "Strengthen processes and controls that improve day-to-day finance performance.",
    },
    {
        icon: PieChart,
        title: "Strengthen Profitability",
        description:
            "Improve margins through cost control, analysis, and practical recommendations.",
    },
    {
        icon: Scale,
        title: "Long-Term Stability",
        description:
            "Enhance financial governance and stability for sustainable success.",
    },
    {
        icon: Eye,
        title: "Complete Visibility",
        description:
            "Gain clear visibility into performance, cash flow, and future opportunities.",
    },
];

const performanceTrustItems = [
    { icon: ShieldCheck, label: "Financial Control" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Clock, label: "Global Time Zone Overlap" },
    { icon: Users, label: "Experienced Finance Team" },
];

const whyChooseCards = [
    { title: "Strategic financial leadership", icon: Briefcase },
    { title: "Cash flow optimization", icon: Eye },
    { title: "Financial forecasting and budgeting", icon: LineChart },
    { title: "Profitability improvement strategies", icon: Coins },
    { title: "Growth-focused business advice", icon: TrendingUp },
    { title: "Trusted CFO expertise on demand", icon: UserCheck },
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
    { icon: ShieldCheck, label: "Strategic Financial Leadership" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted Growth Partner" },
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

export default function CfoAdvisoryPage() {
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
                            CFO &amp; Advisory Services
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            Strategic{" "}
                            <span className="text-[#FF6A00]">
                                CFO &amp; Advisory Services
                            </span>{" "}
                            That Drive Better Business Decisions
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-2xl sm:text-[13px] md:text-sm">
                            Outsourced CFO support that strengthens financial control,
                            improves decision-making, and drives sustainable growth.
                            <br className="hidden sm:block" />
                            Strategic insights for startups, SMEs, enterprises, and
                            accounting firms.
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
                                Strategic Finance Partner
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Outsourced CFO &amp; Advisory Services
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Growing a business requires more than accurate
                                financial records — it requires strategic financial
                                guidance. As businesses expand, financial decisions
                                become increasingly complex, making it essential to
                                have clear visibility into performance, profitability,
                                cash flow, and future opportunities.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we provide outsourced CFO &amp;
                                Advisory Services that help businesses strengthen
                                financial control, improve decision-making, and achieve
                                sustainable growth. Acting as an extension of your
                                leadership team, we deliver strategic financial
                                insights, management reporting, forecasting, and
                                business advisory support tailored to your objectives.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Whether you are a startup, SME, growing enterprise, or
                                accounting firm, our experienced finance professionals
                                provide the expertise and strategic guidance needed to
                                help you make informed decisions with confidence.
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
                                    alt="CFO and advisory finance team"
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
                                    label="CFO Team"
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
                titleAccent="CFO & Advisory"
                titleAfter=" Services Include"
                subtitle="Strategic financial insights, reporting, forecasting, and advisory support tailored to your business objectives."
                services={serviceLines}
            />

            {/* 4 — Stronger financial performance */}
            <BookKeepingMatters
                splitHero
                eyebrow="Financial Intelligence"
                titleBefore="Helping Businesses Build "
                titleAccent="Stronger Financial"
                titleAfter=" Performance"
                intro="Our CFO & Advisory Services give business owners and management teams the financial intelligence needed to make better strategic decisions."
                helpLabelBefore="We transform financial data into "
                helpLabelAccent="meaningful insights"
                helpLabelAfter=":"
                trustItems={performanceTrustItems}
                trustFooterBefore="Built for Leadership Teams. "
                trustFooterAccent="Trusted by Growing Businesses."
                benefits={performanceBenefits}
                bannerTitleBefore="Complete visibility. "
                bannerTitleAccent="Practical recommendations."
                bannerBody="By combining experienced financial professionals with modern accounting technology, we help businesses gain complete visibility into financial performance while supporting sustainable success."
            />

                        {/* 5 — Why Choose */}
            <WhyChooseSplitSection
                subtitle="Experienced Virtual CFO professionals delivering strategic insights, clearer cash flow visibility, and scalable finance support."
                items={whyChooseCards}
            />

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
                                We provide CFO &amp; Advisory Services to businesses
                                across a wide range of industries, including:
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
                carousel
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
                            Strategic Finance Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Strategic Finance Partner for{" "}
                            <span style={{ color: ORANGE }}>
                                Sustainable Business Growth
                            </span>
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            At NextLedgers, we go beyond traditional accounting by
                            providing strategic financial leadership that helps
                            businesses make smarter decisions, improve financial
                            performance, and plan for long-term success.
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
                                Whether you need ongoing Virtual CFO support or expert
                                financial advisory services, our experienced team works
                                as an extension of your business — delivering the
                                financial insight, expertise, and strategic guidance
                                needed to achieve your goals.
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
