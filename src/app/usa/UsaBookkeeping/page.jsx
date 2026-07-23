"use client";

import USANavbar from "@/app/components/USANavbar/USANavbar";
import {
    Calendar,
    Play,
    ShieldCheck,
    Lock,
    Clock,
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
    FileSearch,
    Coins,
    Eye,
    AlertTriangle,
    Zap,
    FileCheck,
    Scale,
    Lightbulb,
    Shield,
    Rocket,
    ClipboardList,
    RefreshCw,
    FileInput,
    FileOutput,
    BarChart3,
    CalendarCheck,
    History,
    UserCheck,
    Award,
    Layers,
    FileSpreadsheet,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import TrustBadgesBar, {
    USA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import BookKeepingMatters from "@/app/components/ServiceMainPageContent/BookkeepingMatters";
import BookkeepingReconcilation from "@/app/components/ServiceMainPageContent/Bookkeepingreconcilation";
import BookKeepingCompliance from "@/app/components/ServiceMainPageContent/Bookkeepingcompliance";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const softwareExpertiseLogodata = [
    {
        heading: "CORE ACCOUNTING PLATFORMS",
        icon: "user",
        logos: [
            "quickbooks online",
            "quickbooks",
            "xero",
            "sage",
            "zoho books",
            "freshbooks",
            "wave accounting",
        ],
    },
    {
        heading: "PAYROLL PLATFORMS",
        icon: "briefcase",
        logos: ["gusto", "quickbooks payroll"],
    },
    {
        heading: "BUSINESS & ECOMMERCE",
        icon: "tag",
        logos: ["shopify", "amazon", "stripe", "paypal"],
    },
];

const bookkeepingBenefits = [
    { icon: FileSearch, title: "Maintain accurate financial records" },
    { icon: Coins, title: "Improve financial reporting accuracy" },
    { icon: Eye, title: "Strengthen cash flow visibility" },
    { icon: AlertTriangle, title: "Reduce bookkeeping errors" },
    { icon: Zap, title: "Accelerate month-end close processes" },
    { icon: FileCheck, title: "Prepare tax-ready financial records" },
    { icon: Scale, title: "Improve compliance and audit readiness" },
    { icon: Lightbulb, title: "Support informed business decisions" },
    { icon: Shield, title: "Build stronger financial controls" },
    { icon: Rocket, title: "Create a solid foundation for business growth" },
];

const bookkeepingTrustItems = [
    { icon: ShieldCheck, label: "IRS Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Clock, label: "US Time Zone Overlap" },
    { icon: Users, label: "Experienced Offshore Team" },
];

const serviceLines = [
    {
        title: "Daily, Weekly & Monthly Bookkeeping",
        shortTitle: "Daily Bookkeeping",
        icon: ClipboardList,
        items: [
            "Daily transaction recording",
            "Revenue and expense categorisation",
            "General ledger maintenance",
            "Journal entry processing",
            "Customer and vendor accounting",
            "Month-end bookkeeping reviews",
            "Historical bookkeeping updates",
            "Ongoing bookkeeping support",
        ],
    },
    {
        title: "Bank & Credit Card Reconciliations",
        shortTitle: "Reconciliations",
        icon: RefreshCw,
        items: [
            "Bank reconciliations",
            "Credit card reconciliations",
            "Merchant account reconciliations",
            "Payment gateway reconciliations",
            "Loan account reconciliations",
            "Intercompany reconciliations",
            "Balance Sheet reconciliations",
            "Reconciliation reporting",
        ],
    },
    {
        title: "Accounts Payable (AP) Support",
        shortTitle: "Accounts Payable",
        icon: FileInput,
        items: [
            "Supplier invoice processing",
            "Bill entry and coding",
            "Payment scheduling",
            "Vendor account maintenance",
            "Vendor statement reconciliations",
            "Accounts Payable reporting",
            "Outstanding liability monitoring",
            "Purchase transaction recording",
        ],
    },
    {
        title: "Accounts Receivable (AR) Support",
        shortTitle: "Accounts Receivable",
        icon: FileOutput,
        items: [
            "Customer invoice processing",
            "Accounts Receivable tracking",
            "Outstanding balance monitoring",
            "Customer account reconciliations",
            "Collection support reporting",
            "Revenue monitoring",
            "Receivable ageing reports",
            "Payment allocation",
        ],
    },
    {
        title: "Financial Reporting & Management Accounts",
        shortTitle: "Financial Reporting",
        icon: BarChart3,
        items: [
            "Profit & Loss Statements",
            "Balance Sheets",
            "Cash Flow Statements",
            "Budget vs Actual reports",
            "Departmental reporting",
            "Revenue analysis",
            "Expense trend analysis",
            "KPI reporting dashboards",
        ],
    },
    {
        title: "Month-End & Year-End Close Support",
        shortTitle: "Month / Year-End",
        icon: CalendarCheck,
        items: [
            "Month-end adjustments",
            "Accruals and prepayments",
            "Fixed asset accounting",
            "Depreciation schedules",
            "Financial review procedures",
            "Balance Sheet reconciliations",
            "Year-end accounting support",
            "CPA-ready financial records",
        ],
    },
    {
        title: "Catch-Up Bookkeeping & Cleanup",
        shortTitle: "Catch-Up & Cleanup",
        icon: History,
        items: [
            "Historical bookkeeping reconstruction",
            "Account reconciliation corrections",
            "General ledger cleanup",
            "Misclassified transaction corrections",
            "Duplicate transaction removal",
            "Financial statement corrections",
            "Prior period adjustments",
            "Accounting data validation",
        ],
    },
];

const specialistHighlights = [
    { icon: BookOpen, label: "Bookkeeping Outsourcing" },
    { icon: CalendarCheck, label: "Month-End Accounting" },
    { icon: FileSpreadsheet, label: "AR & AP Support" },
    { icon: BarChart3, label: "Financial Reporting" },
];

const specialistAreaCards = [
    {
        icon: BookOpen,
        title: "Bookkeeping Outsourcing",
        description:
            "Providing dedicated offshore bookkeeping resources that integrate seamlessly with your firm's existing workflows and client service model.",
    },
    {
        icon: CalendarCheck,
        title: "Month-End Accounting",
        description:
            "Supporting timely month-end close procedures, reconciliations, journals, and financial reporting to improve reporting accuracy.",
    },
    {
        icon: FileSpreadsheet,
        title: "Accounts Receivable & Payable",
        description:
            "Managing customer invoicing, supplier processing, reconciliations, ageing reports, and cash flow support to strengthen financial controls.",
    },
    {
        icon: BarChart3,
        title: "Financial Reporting",
        description:
            "Preparing management accounts, Balance Sheets, Profit & Loss statements, cash flow reports, and KPI dashboards for business decision-making.",
    },
    {
        icon: History,
        title: "Bookkeeping Cleanup & Recovery",
        description:
            "Correcting historical bookkeeping errors, rebuilding accounting records, and restoring reliable financial information for clients with incomplete books.",
    },
];

const whyChooseCards = [
    {
        title: "Dedicated Offshore Bookkeeping Professionals",
        icon: UserCheck,
    },
    {
        title: "Extensive Experience Supporting US CPA Firms",
        icon: Award,
    },
    {
        title: "White-Label Service Delivery",
        icon: BadgeCheck,
    },
    {
        title: "Multi-Platform Accounting Expertise",
        icon: Layers,
    },
    {
        title: "Structured Month-End Close Processes",
        icon: ClipboardCheck,
    },
    {
        title: "Accurate & Timely Financial Reporting",
        icon: FileCheck,
    },
    {
        title: "Flexible Engagement Models",
        icon: Network,
    },
    {
        title: "Secure Data Handling",
        icon: LockKeyhole,
    },
    {
        title: "Scalable Offshore Accounting Teams",
        icon: TrendingUp,
    },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "100% IRS Aligned" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by US CPA Firms" },
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

export default function UsaBookkeeping() {
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
                <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-[#FF6A00]/10 blur-2xl" />

                <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                    <div className="flex flex-col items-center px-2 text-center">
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#FF6A00]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#FF6A00] shadow-sm sm:px-4 sm:text-[11px]">
                            USA Bookkeeping &amp; Outsourced Accounting Services
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                            USA Bookkeeping &amp;{" "}
                            <span className="text-[#FF6A00]">
                                Outsourced Accounting
                            </span>{" "}
                            Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Offshore Bookkeeping &amp; Accounting Support
                            for US CPA Firms
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

            {/* 2 — Reliable Offshore Bookkeeping Support intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-8">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Offshore Bookkeeping &amp; Accounting
                                Support for US CPA Firms
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Bookkeeping is the foundation of every successful
                                accounting engagement — accurate records, timely
                                reconciliations, and reliable reporting that keep
                                clients compliant and decision-ready.
                            </p>

                            <div className="mb-5 space-y-3">
                                <div className="rounded-[14px] border border-[#F0E6DC] bg-[#FFF9F5] p-4 sm:p-4.5">
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
                                        Growing client portfolios, staffing shortages,
                                        rising costs, and tight deadlines make it hard
                                        for US CPA firms to scale bookkeeping without
                                        losing quality.
                                    </p>
                                </div>

                                <div className="rounded-[14px] border border-[#F0E6DC] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)] sm:p-4.5">
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
                                        Dedicated offshore bookkeeping professionals
                                        work as a seamless extension of your team —
                                        increasing capacity, improving turnaround, and
                                        delivering accurate white-label support.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                Support we deliver
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {[
                                    "Ongoing bookkeeping",
                                    "Month-end accounting",
                                    "Reconciliations",
                                    "Financial reporting",
                                    "Fully outsourced support",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E6DC] bg-[#FFF9F5] px-3 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
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
                                    alt="Accounting team providing bookkeeping support"
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
                                    label="US CPA Firms Supported"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="IRS-Aligned Processes"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Offshore Support Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Bookkeeping & Outsourced Accounting Matter */}
            <BookKeepingMatters
                titleBefore="Why "
                titleAccent="Bookkeeping & Outsourced Accounting"
                titleAfter=" Matter"
                intro="Professional bookkeeping goes far beyond recording transactions. Accurate accounting records provide the financial information businesses rely on for tax compliance, cash flow management, financial reporting, budgeting, and strategic decision-making."
                helpLabelBefore="Effective "
                helpLabelAccent="bookkeeping processes"
                helpLabelAfter=" help businesses:"
                trustItems={bookkeepingTrustItems}
                benefits={bookkeepingBenefits}
                bannerTitleBefore="Outsourced capacity. "
                bannerTitleAccent="Advisory focus."
                bannerBody="For CPA firms, outsourced bookkeeping increases service capacity, improves operational efficiency, and enables senior staff to focus on advisory and client relationship management."
                className="!py-5"
            />

            {/* 4 — Bookkeeping services explorer */}
            <ServiceDeliverablesExplorer
                titleBefore="Our "
                titleAccent="Bookkeeping & Outsourced Accounting"
                titleAfter=" Services Include"
                subtitle="We process, reconcile, and report every transaction — delivering clean, CPA-ready books for your US clients."
                services={serviceLines}
                className="!py-5"
            />

            {/* 4b — Specialist Areas visual */}
            <BookkeepingReconcilation
                showServiceCards={false}
                showSpecialist={true}
                specialistEyebrow="Specialist Delivery"
                specialistTitleBefore=""
                specialistTitleAccent="Specialist Areas"
                specialistTitleAfter=" We Support"
                specialistParagraphs={[
                    "Our dedicated offshore bookkeeping specialists integrate seamlessly with your firm's existing workflows and client service model, delivering consistent white-label support.",
                    "From month-end close and AR/AP management to financial reporting and cleanup, we strengthen your firm's bookkeeping delivery without adding internal overhead.",
                ]}
                specialistImageSrc="/images/bgimage.JPG"
                specialistImageAlt="Specialist bookkeeping support for US CPA firms"
                specialistHighlights={specialistHighlights}
                sealText="ACCURATE • TIMELY • RELIABLE • ACCURATE •"
                className="!py-5"
            />

            {/* 5 — Specialist Areas detail cards */}
            <BookKeepingCompliance
                whyEyebrow="Specialist Areas"
                whyTitleBefore=""
                whyTitleAccent="Specialist Areas"
                whyTitleAfter=" We Support"
                whySubtitle="Dedicated support areas that strengthen your firm's bookkeeping delivery and client service capacity."
                whyIntroLabel=""
                whyCards={specialistAreaCards}
                showServices={false}
                className="!py-5"
            />

            {/* 6 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting, payroll, and eCommerce platforms your clients already use."
                logodata={softwareExpertiseLogodata}
                className="!py-5"
            />

            {/* 7 — Industries We Support */}
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
                                We support CPA firms serving clients across a wide
                                range of industries, including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid />
                    </div>
                </div>
            </section>

            {/* 7 — Why Choose NextLedgers (9-card grid: 4 + 5) */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-5 sm:px-6 lg:px-8">
                <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-5 flex flex-col items-center text-center">
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
                            <span style={{ color: ORANGE }}>NextLedgers</span> for{" "}
                            <span style={{ color: ORANGE }}>
                                Bookkeeping &amp; Accounting
                            </span>
                            ?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated offshore bookkeeping specialists who work as
                            an extension of your practice, ensuring accuracy and
                            IRS-aligned processes.
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
                                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                    style={{ color: ORANGE }}
                                >
                                    <Icon className="h-7 w-7" strokeWidth={1.75} />
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

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:justify-items-stretch lg:mt-5 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(4).map(({ title, icon: Icon }) => (
                            <div
                                key={title}
                                className="rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                            >
                                <span
                                    className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                    style={{ color: ORANGE }}
                                >
                                    <Icon className="h-7 w-7" strokeWidth={1.75} />
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

            {/* 8 — Partner CTA */}
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
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Bookkeeping &amp; Accounting Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore{" "}
                            <span style={{ color: ORANGE }}>
                                Bookkeeping &amp; Accounting
                            </span>{" "}
                            Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Bookkeeping requires consistency, accuracy, and
                            efficient accounting processes. Our experienced
                            professionals help US CPA firms increase bookkeeping
                            capacity, improve financial reporting quality,
                            streamline month-end processes, and deliver reliable
                            accounting services without increasing internal
                            staffing costs.
                        </p>

                        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-[0_6px_24px_rgba(15,23,42,0.06)] sm:gap-5 sm:px-6 sm:py-5">
                            <span
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                                style={{ background: "#FFF4EA", color: ORANGE }}
                            >
                                <UserCheck className="h-7 w-7" strokeWidth={1.8} />
                            </span>
                            <p
                                className="pt-0.5 text-[12.5px] leading-relaxed sm:text-[13.5px]"
                                style={{ color: GREY }}
                            >
                                Whether you require support with day-to-day
                                bookkeeping, bank reconciliations, Accounts
                                Receivable and Accounts Payable management,
                                financial reporting, month-end close procedures,
                                bookkeeping cleanup, or dedicated offshore
                                bookkeeping resources, NextLedgers provides
                                reliable white-label support that integrates
                                seamlessly with your accounting practice.
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

            <Footer region="usa" />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
