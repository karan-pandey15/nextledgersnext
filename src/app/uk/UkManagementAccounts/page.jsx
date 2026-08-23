"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Award,
    BadgeCheck,
    BarChart3,
    BookOpen,
    Calendar,
    ChartNoAxesCombined,
    CheckCircle2,
    Clock,
    Handshake,
    Headset,
    Lightbulb,
    LineChart,
    Lock,
    Network,
    Phone,
    PuzzleIcon,
    Send,
    Shield,
    ShieldCheck,
    Star,
    Target,
    TrendingUp,
    UserCheck,
    Users,
    WalletCards,
} from "lucide-react";
import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import CtaButton from "@/app/components/ui/CtaButton";
import TrustBadgesBar from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import BookKeepingMatters from "@/app/components/ServiceMainPageContent/BookkeepingMatters";
import BookkeepingReconcilation from "@/app/components/ServiceMainPageContent/Bookkeepingreconcilation";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import WhyChooseSplitSection from "@/app/components/ServiceMainPageContent/WhyChooseSplitSection";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";
import { UK_MANAGEMENT_ACCOUNTS_INDUSTRIES } from "@/app/uk/ukIndustries";
import { UK_MANAGEMENT_ACCOUNTS_SOFTWARE } from "@/app/uk/ukSoftwareExpertise";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const trustBadges = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const managementTrustItems = [
    { icon: BarChart3, label: "Regular Performance Reporting" },
    { icon: Target, label: "Budget vs Actual Analysis" },
    { icon: TrendingUp, label: "Forward-Looking Forecasts" },
    { icon: ShieldCheck, label: "Review-Ready Financial Data" },
];

const managementMattersItems = [
    {
        icon: TrendingUp,
        title: "Understand Profitability",
        description:
            "Track margins and profitability trends before year-end surprises appear.",
    },
    {
        icon: WalletCards,
        title: "Improve Cash Flow Visibility",
        description:
            "See where cash is tied up across receivables, payables, and working capital.",
    },
    {
        icon: BarChart3,
        title: "Compare Business Performance",
        description:
            "Compare products, services, and departments with clear, timely reporting.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Control Rising Costs",
        description:
            "Spot cost increases early and keep spending aligned with business growth.",
    },
    {
        icon: Target,
        title: "Measure Financial Targets",
        description:
            "Review budget versus actual results and course-correct throughout the year.",
    },
    {
        icon: Users,
        title: "Plan Recruitment & Investment",
        description:
            "Use current financial data to support confident hiring and investment decisions.",
    },
    {
        icon: LineChart,
        title: "Forecast with Confidence",
        description:
            "Understand the months ahead so planning remains proactive rather than reactive.",
    },
];

const managementServiceCards = [
    {
        icon: BarChart3,
        titleBefore: "Management ",
        titleAccent: "Reporting",
        titleAfter: " Services",
        items: [
            "Monthly & Quarterly Management Accounts",
            "Profit & Loss Reporting",
            "Balance Sheet Reporting",
            "Cash Flow Forecasting",
            "Budget vs Actual Analysis",
            "KPI Reporting & Dashboards",
        ],
    },
    {
        icon: Lightbulb,
        titleBefore: "Performance ",
        titleAccent: "Analysis",
        titleAfter: " & Advisory Support",
        items: [
            "Departmental & Divisional Reporting",
            "Board Reporting Packs",
            "Management Commentary & Executive Summaries",
            "Business Performance Reviews",
            "Custom Financial Reporting",
        ],
    },
];

const helpCards = [
    {
        icon: ChartNoAxesCombined,
        title: "Monitor & Measure Performance",
        items: [
            "Monitor financial performance regularly",
            "Improve cash flow visibility and planning",
            "Track profitability and key business drivers",
            "Measure performance against budgets and targets",
        ],
    },
    {
        icon: TrendingUp,
        title: "Plan & Grow with Confidence",
        items: [
            "Identify trends, risks, and opportunities early",
            "Support strategic planning and business growth",
            "Make faster and more informed decisions",
            "Create more capacity for advisory conversations",
        ],
    },
];

const softwareExpertiseLogodata = UK_MANAGEMENT_ACCOUNTS_SOFTWARE;

const whyChooseCards = [
    { title: "ACCA-Led Financial Reporting", icon: UserCheck },
    { title: "UK Management Accounting Expertise", icon: BookOpen },
    { title: "Clear KPI & Performance Insights", icon: BarChart3 },
    { title: "Budgeting & Forecasting Support", icon: LineChart },
    { title: "Structured Review Processes", icon: BadgeCheck },
    { title: "Decision-Ready Financial Reporting", icon: Target },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "Review-Ready Reporting" },
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
            {Array.from({ length: 20 }).map((_, index) => (
                <span
                    key={index}
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

function HelpCard({ icon: Icon, title, items }) {
    return (
        <article className="rounded-2xl border border-[#F0E0D2] bg-white p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="text-[15px] font-extrabold leading-snug text-[#0B1F3A] sm:text-[16px]">
                    {title}
                </h3>
            </div>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl bg-[#FFF9F5] px-3 py-3"
                    >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6A00]" />
                        <span className="text-[12px] font-medium leading-snug text-[#0B1F3A]">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function UkManagementAccounts() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <UKNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

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
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] sm:px-4 sm:text-[11px]">
                            Outsource UK Management Accounts
                        </span>

                        <h1 className="max-w-[320px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-3xl sm:text-3xl lg:text-[34px]">
                            <span className="text-[#FF6A00]">
                                UK Management Accounts
                            </span>{" "}
                            &amp; Financial Reporting Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Turning financial data into meaningful business insights.
                            <br className="hidden sm:block" />
                            Deliver clear, timely reporting that supports better decisions.
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#FF6A00]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <CtaButton href="/contact" variant="primary" size="sm">
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </CtaButton>
                            <a
                                href="tel:+918285285223"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white sm:whitespace-nowrap sm:py-2"
                            >
                                <Phone className="h-3.5 w-3.5 shrink-0" />
                                Call Us
                            </a>
                        </div>
                    </div>
                    <TrustBadgesBar badges={trustBadges} />
                </div>
            </section>

            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Turning Financial Data into Meaningful Business Insights
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Many businesses only review their financial performance once
                                a year when preparing statutory accounts and tax returns. By
                                then, opportunities may have been missed and challenges may
                                already have affected profitability and cash flow.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Management accounts provide regular financial information
                                throughout the year, helping business owners understand
                                performance and make informed decisions using current data.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                NextLedgers supports UK accounting firms with reliable
                                management reporting and financial analysis, enabling them to
                                deliver valuable insights and advisory-led solutions.
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
                                    alt="Accounting team preparing management reports"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-4 right-4 grid grid-cols-4 gap-2 rounded-xl border border-[#F0E0D2] bg-white px-3 py-4 sm:px-5 sm:py-5">
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
                                    label="Review-Ready Processes"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Support Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BookKeepingMatters
                eyebrow="Management Reporting"
                titleBefore="Why Management "
                titleAccent="Accounts Matter"
                intro="Regular management accounts turn day-to-day financial data into timely information that business owners can use to improve performance."
                helpLabelBefore="Clear management reporting helps businesses "
                helpLabelAccent="answer critical questions"
                helpLabelAfter=" with confidence."
                imageSrc="/images/ukPageImg/bookkeepingimage.png"
                imageAlt="Management accounts dashboard and financial analysis"
                trustItems={managementTrustItems}
                trustFooterBefore="Built for Better Decisions. "
                trustFooterAccent="Designed for Growth."
                benefits={managementMattersItems}
                bannerTitleBefore="Current data. Clear direction. "
                bannerTitleAccent="Better decisions."
                bannerBody="Timely management information allows business owners to act early, manage risk, and pursue opportunities with confidence."
                wideTrustPanel
                className="!py-3"
            />

            <BookkeepingReconcilation
                eyebrow="Management Reporting Deliverables"
                titleBefore="Our "
                titleAccent="Management Accounting"
                titleAfter=" Services"
                subtitle="Comprehensive reporting and analysis support that turns accurate financial data into actionable insight."
                serviceCards={managementServiceCards}
                showSpecialist={false}
                className="!py-3"
            />

            <section
                className="relative w-full overflow-hidden px-4 py-3 sm:px-6 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                <DotGrid className="pointer-events-none absolute right-6 top-6 sm:right-10" />
                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-6 flex flex-col items-center text-center">
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#FF6A00]/25 bg-[#FFF4EA] px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF6A00]">
                            <Lightbulb className="h-3 w-3" strokeWidth={2.5} />
                            Actionable Insights
                        </span>
                        <h2 className="max-w-3xl text-[22px] font-extrabold leading-tight text-[#0B1F3A] sm:text-[26px] lg:text-[28px]">
                            How We Help{" "}
                            <span className="text-[#FF6A00]">Businesses</span>
                        </h2>
                        <p className="mt-2.5 max-w-2xl text-[13px] leading-relaxed text-[#6B7280] sm:text-[14px]">
                            Our reports transform bookkeeping data into clear,
                            decision-ready insight for business owners and their advisers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {helpCards.map((card) => (
                            <HelpCard key={card.title} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting platforms and reporting tools your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-3"
            />

            <section
                className="relative w-full overflow-hidden px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7"
                style={{ background: PAGE_CREAM }}
            >
                <div className="relative mx-auto w-full max-w-[1440px]">
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
                            We support accounting firms serving clients across a wide
                            range of sectors.
                        </p>
                    </div>

                    <IndustriesWeSupportGrid industries={UK_MANAGEMENT_ACCOUNTS_INDUSTRIES} />
                </div>
            </section>

            <WhyChooseSplitSection
                titleBefore="Why Choose "
                titleAccent="NextLedgers"
                titleMiddle=" for "
                titleAccent2="Management Accounts"
                titleAfter="?"
                subtitle="Dedicated reporting specialists who work as an extension of your practice and help turn financial data into client value."
                items={whyChooseCards}
                imageSrc="/images/DSC09669.JPG"
                imageAlt="NextLedgers management accounts specialists"
            />

            <section className="relative w-full bg-white px-4 py-3 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] bg-[#FFF9F5] px-5 py-10 text-center sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14">
                    <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#FF6A00]/10" />
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF6A00]/10" />
                    <DotGrid className="pointer-events-none absolute bottom-6 right-6 opacity-70" />

                    <div className="relative z-10">
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EA] px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF6A00]">
                            <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Management Reporting Partner
                        </span>

                        <h2 className="text-[24px] font-extrabold leading-tight text-[#0B1F3A] sm:text-[30px] lg:text-[34px]">
                            Your{" "}
                            <span className="text-[#FF6A00]">
                                Management Accounts
                            </span>{" "}
                            Partner
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-[#6B7280] sm:text-[14.5px]">
                            Management accounts are more than reports containing numbers.
                            They are valuable tools for understanding performance,
                            improving profitability, and supporting strategic decisions.
                        </p>

                        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl border border-[#F0E0D2] bg-white px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF4EA] text-[#FF6A00] sm:h-12 sm:w-12">
                                <UserCheck className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <p className="pt-0.5 text-[12.5px] leading-relaxed text-[#6B7280] sm:text-[13.5px]">
                                Whether you need monthly reporting, board packs, cash flow
                                forecasts, KPI dashboards, or dedicated support,
                                NextLedgers helps your practice deliver consistent,
                                advisory-ready insight.
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
                                    className="flex items-center gap-2 text-[#8B7355]"
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

            <Footer region="uk" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
