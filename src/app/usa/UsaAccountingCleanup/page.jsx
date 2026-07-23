"use client";

import USANavbar from "@/app/components/USANavbar/USANavbar";
import {
    Calendar,
    Play,
    ShieldCheck,
    Lock,
    Users,
    PuzzleIcon,
    Headset,
    Phone,
    Send,
    AlertTriangle,
    BadgeCheck,
    Handshake,
    Star,
    BookOpen,
    ClipboardCheck,
    FileCheck,
    FileSpreadsheet,
    RefreshCw,
    History,
    FileInput,
    FileOutput,
    Landmark,
    Scale,
    Target,
    Coins,
    Network,
    LockKeyhole,
    Layers,
    Wrench,
    Settings,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CtaButton from "@/app/components/ui/CtaButton";
import { motion } from "framer-motion";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import IndustriesWeSupportGrid from "@/app/components/ServiceMainPageContent/IndustriesWeSupportGrid";
import ServiceDeliverablesExplorer from "@/app/components/ServiceMainPageContent/ServiceDeliverablesExplorer";
import TrustBadgesBar, {
    USA_TRUST_BADGES,
} from "@/app/components/ServiceMainPageContent/TrustBadgesBar";
import Footer from "@/app/components/footer/Footer";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";
const PILL_BG = "#FFF4EA";

const whyCleanupMatters = [
    {
        icon: BookOpen,
        title: "Restore accurate bookkeeping records",
        description:
            "Rebuild reliable ledgers and transaction histories so every account reflects the true financial position.",
    },
    {
        icon: History,
        title: "Eliminate historical accounting backlogs",
        description:
            "Clear months of overdue work systematically, reducing pressure during busy filing and reporting periods.",
    },
    {
        icon: FileSpreadsheet,
        title: "Improve financial reporting accuracy",
        description:
            "Correct misclassifications and gaps so management reports and financial statements are dependable.",
    },
    {
        icon: ClipboardCheck,
        title: "Strengthen month-end and year-end closing",
        description:
            "Prepare clean books that support faster, more confident month-end and year-end close procedures.",
    },
    {
        icon: FileOutput,
        title: "Improve Accounts Receivable management",
        description:
            "Bring customer balances, invoicing, and ageing reports up to date for stronger collections visibility.",
    },
    {
        icon: FileInput,
        title: "Strengthen Accounts Payable controls",
        description:
            "Organise vendor records, outstanding liabilities, and payment workflows to reduce errors and duplicates.",
    },
    {
        icon: FileCheck,
        title: "Prepare tax-ready financial records",
        description:
            "Deliver reconciled, categorised books that reduce rework for CPA tax preparation teams.",
    },
    {
        icon: RefreshCw,
        title: "Reduce reconciliation discrepancies",
        description:
            "Resolve unreconciled bank, credit card, and balance sheet items that undermine reporting confidence.",
    },
    {
        icon: Coins,
        title: "Improve cash flow visibility",
        description:
            "Restore AR/AP accuracy so leadership has a clearer picture of inflows, outflows, and working capital.",
    },
    {
        icon: Target,
        title: "Support better financial decision-making",
        description:
            "Give business owners and advisors reliable data to plan, budget, and respond to operational needs.",
    },
];

const serviceLines = [
    {
        title: "Historical Bookkeeping Catch-Up",
        shortTitle: "Catch-Up",
        icon: History,
        items: [
            "Historical bookkeeping reconstruction",
            "Transaction recording and posting",
            "Bank transaction reviews",
            "Account categorisation corrections",
            "Month-by-month bookkeeping updates",
            "General ledger rebuilding",
            "Balance Sheet reconciliations",
            "Financial statement reconstruction",
        ],
    },
    {
        title: "Bookkeeping Cleanup & Corrections",
        shortTitle: "Cleanup",
        icon: Wrench,
        items: [
            "Misclassified transaction corrections",
            "Duplicate transaction removal",
            "Missing transaction identification",
            "Historical bookkeeping corrections",
            "Chart of Accounts review",
            "Financial report corrections",
            "Account mapping reviews",
            "Reconciliation discrepancy resolution",
        ],
    },
    {
        title: "Bank & Credit Card Reconciliations",
        shortTitle: "Reconciliations",
        icon: RefreshCw,
        items: [
            "Bank reconciliations",
            "Credit card reconciliations",
            "Loan account reconciliations",
            "Merchant account reconciliations",
            "Payment processor reconciliations",
            "Historical reconciliation reviews",
            "Outstanding balance investigations",
            "Unreconciled transaction resolution",
        ],
    },
    {
        title: "General Ledger Review & Cleanup",
        shortTitle: "GL Review",
        icon: BookOpen,
        items: [
            "General ledger reviews",
            "Journal entry validation",
            "Chart of Accounts optimisation",
            "Suspense account clearance",
            "Balance Sheet validation",
            "Historical transaction analysis",
            "Financial integrity checks",
            "Supporting documentation reviews",
        ],
    },
    {
        title: "Accounts Receivable (AR)",
        shortTitle: "AR",
        icon: FileOutput,
        items: [
            "Customer invoice processing",
            "Invoice generation",
            "Customer account maintenance",
            "Outstanding balance monitoring",
            "Accounts Receivable reconciliations",
            "Payment allocation",
            "Customer statement preparation",
            "Collection support reporting",
            "AR ageing reports",
            "Customer outstanding balance reports",
            "Collection status reporting",
            "Payment trend analysis",
        ],
    },
    {
        title: "Accounts Payable (AP)",
        shortTitle: "AP",
        icon: FileInput,
        items: [
            "Supplier invoice processing",
            "Vendor bill entry",
            "Invoice coding",
            "Payment scheduling",
            "Vendor account maintenance",
            "Supplier reconciliations",
            "Outstanding liability reporting",
            "Payment tracking",
            "Vendor statement reconciliations",
            "Duplicate payment identification",
            "Historical payable corrections",
            "Liability account cleanup",
        ],
    },
];

const specialistAreaCards = [
    {
        icon: History,
        title: "Historical Bookkeeping Recovery",
        description:
            "Reconstruction of incomplete records, backlog processing, and financial record restoration to bring client books current.",
    },
    {
        icon: Landmark,
        title: "Financial Reconciliations",
        description:
            "Bank, credit cards, loans, merchant accounts, payroll liabilities, and Balance Sheet account reconciliations.",
    },
    {
        icon: FileOutput,
        title: "Accounts Receivable Management",
        description:
            "Invoicing, balance monitoring, ageing analysis, payment allocation, and collections visibility for customer accounts.",
    },
    {
        icon: FileInput,
        title: "Accounts Payable Management",
        description:
            "Supplier invoices, vendor statements, payable records, and payment workflows to strengthen liability controls.",
    },
    {
        icon: Settings,
        title: "Accounting Software Cleanup",
        description:
            "Migrations, implementation errors, Chart of Accounts restructuring, and historical data inconsistency resolution.",
    },
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING PLATFORMS",
        icon: "briefcase",
        logos: [
            "quickbooks online",
            "quickbooks",
            "xero",
            "zoho books",
            "freshbooks",
            "wave",
        ],
    },
    {
        heading: "DOCUMENT CAPTURE & TOOLS",
        icon: "document",
        logos: ["dext", "hubdoc"],
    },
    {
        heading: "SPREADSHEET & REPORTING",
        icon: "chart",
        logos: ["microsoft excel", "google sheets"],
    },
];

const whyChooseCards = [
    {
        title: "Experienced Offshore Bookkeeping Professionals",
        icon: Users,
    },
    {
        title: "Dedicated Support for US CPA Firms",
        icon: Handshake,
    },
    {
        title: "White-Label Service Delivery",
        icon: BadgeCheck,
    },
    {
        title: "Accounting Cleanup & Recovery Specialists",
        icon: History,
    },
    {
        title: "Accounts Receivable & Accounts Payable Expertise",
        icon: FileSpreadsheet,
    },
    {
        title: "Multi-Platform Accounting Experience",
        icon: Layers,
    },
    {
        title: "Structured Review & Reconciliation Processes",
        icon: ClipboardCheck,
    },
    {
        title: "Flexible Engagement Models",
        icon: Network,
    },
    {
        title: "Secure Data Handling",
        icon: LockKeyhole,
    },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "IRS Aligned" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by US CPA Firms" },
];

function Reveal({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{
                duration: 0.45,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

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

export default function UsaAccountingCleanup() {
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
                            USA Accounting Cleanup, Catch-Up Bookkeeping &amp;
                            AR/AP
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                            USA Accounting Cleanup &amp;{" "}
                            <span className="text-[#FF6A00]">
                                Catch-Up Bookkeeping
                            </span>
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Reliable Accounting Recovery &amp; AR/AP Support for
                            US CPA Firms
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

            {/* 2 — Intro / Partnership */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-2 lg:gap-8">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#FF6A00]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[26px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px]">
                                Reliable Accounting Recovery &amp; AR/AP Support
                                for US CPA Firms
                            </h2>

                            <div className="mb-4 h-[3px] w-14 rounded-full bg-[#FF6A00]" />

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[14.5px]">
                                Accurate bookkeeping is the foundation of every
                                successful accounting engagement.
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
                                        Many US CPA firms inherit clients with
                                        months of overdue bookkeeping,
                                        unreconciled accounts, duplicate
                                        transactions, incomplete records, and
                                        inefficient AR/AP processes — creating
                                        pressure during busy periods.
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
                                        Dedicated offshore Accounting Cleanup,
                                        Catch-Up Bookkeeping, AR &amp; AP support
                                        — eliminate backlogs, improve reporting
                                        accuracy, strengthen cash flow, and add
                                        white-label capacity.
                                    </p>
                                </div>
                            </div>

                            <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1F3A]/55">
                                Support we deliver
                            </p>
                            <div className="mb-6 flex flex-wrap gap-2">
                                {[
                                    "Historical catch-up",
                                    "Bookkeeping cleanup",
                                    "Bank reconciliations",
                                    "AR management",
                                    "AP management",
                                    "GL cleanup",
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
                                    alt="Accounting cleanup team restoring client books"
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
                                    label="US CPA Firms"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="IRS-Aligned"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Offshore Support"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Accounting Cleanup Matters */}
            <section
                className="relative w-full overflow-hidden px-4 py-5 sm:px-6 lg:px-8"
                style={{ background: PAGE_CREAM }}
            >
                <DotGrid className="pointer-events-none absolute right-4 top-6 opacity-50 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 opacity-40 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-5 flex flex-col items-center text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: PILL_BG,
                                borderColor: "rgba(255, 106, 0,0.35)",
                                color: ORANGE,
                            }}
                        >
                            Why It Matters
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Accounting Cleanup &amp;{" "}
                            <span style={{ color: ORANGE }}>
                                Catch-Up Bookkeeping
                            </span>{" "}
                            Matter
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Restoring accurate books is essential before tax
                            preparation, financial reporting, advisory work, and
                            ongoing compliance can proceed with confidence.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
                        {whyCleanupMatters.slice(0, 5).map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(index * 0.05, 0.25)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E6DC] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                        >
                                            <Icon
                                                className="h-7 w-7"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                        <h3
                                            className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                            style={{ color: NAVY }}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className="mt-2 text-[12px] leading-relaxed sm:text-[12.5px]"
                                            style={{ color: GREY }}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </Reveal>
                            )
                        )}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-5 lg:gap-5">
                        {whyCleanupMatters.slice(5).map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(0.08 + index * 0.05, 0.28)}
                                >
                                    <div className="flex h-full flex-col rounded-[16px] border border-[#F0E6DC] bg-white px-4 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,39,74,0.08)] sm:px-5 sm:py-6">
                                        <span
                                            className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                        >
                                            <Icon
                                                className="h-7 w-7"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                        <h3
                                            className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                            style={{ color: NAVY }}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className="mt-2 text-[12px] leading-relaxed sm:text-[12.5px]"
                                            style={{ color: GREY }}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </Reveal>
                            )
                        )}
                    </div>

                    <div className="relative mt-4 w-full overflow-hidden rounded-xl bg-white px-5 py-4 text-center sm:px-8 sm:py-5">
                        <p
                            className="relative mx-auto w-full max-w-5xl text-[13px] leading-[1.65] sm:text-[14px]"
                            style={{ color: "#4B5563" }}
                        >
                            For CPA firms, structured bookkeeping recovery
                            services improve operational efficiency, increase
                            client capacity, and allow internal teams to focus
                            on advisory services.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4 — Service Deliverables Explorer */}
            <ServiceDeliverablesExplorer
                eyebrow="Our Deliverables"
                titleBefore="Our Accounting Cleanup "
                titleAccent="Services"
                titleAfter=" Include"
                subtitle="Comprehensive catch-up bookkeeping, cleanup, reconciliations, and AR/AP support for US CPA firms."
                services={serviceLines}
                className="!py-5"
            />

            {/* 5 — Specialist Areas */}
            <section className="relative w-full overflow-hidden bg-white px-4 py-5 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <Reveal className="mb-5 text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: PILL_BG, color: ORANGE }}
                        >
                            <Scale className="h-3 w-3" strokeWidth={2.5} />
                            Specialist Coverage
                        </span>
                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Specialist Areas{" "}
                            <span style={{ color: ORANGE }}>We Support</span>
                        </h2>
                        <p
                            className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated recovery and reconciliation support that
                            restores client books and strengthens AR/AP controls.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                        {specialistAreaCards.map(
                            ({ title, description, icon: Icon }, index) => (
                                <Reveal
                                    key={title}
                                    delay={Math.min(index * 0.06, 0.3)}
                                >
                                    <div
                                        className="flex h-full flex-col rounded-[16px] border border-[#F3E6D8] bg-white p-5 sm:p-6"
                                        style={{
                                            boxShadow:
                                                "0 8px 28px rgba(15,23,42,0.06)",
                                        }}
                                    >
                                        <span
                                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]"
                                        >
                                            <Icon
                                                className="h-7 w-7"
                                                strokeWidth={1.8}
                                            />
                                        </span>
                                        <h3
                                            className="text-[15px] font-bold sm:text-[16px]"
                                            style={{ color: NAVY }}
                                        >
                                            {title}
                                        </h3>
                                        <p
                                            className="mt-2 text-[12.5px] leading-relaxed sm:text-[13px]"
                                            style={{ color: GREY }}
                                        >
                                            {description}
                                        </p>
                                    </div>
                                </Reveal>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* 6 — Software */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting platforms, document capture tools, and spreadsheets your clients already rely on."
                logodata={softwareExpertiseLogodata}
                className="!py-5"
            />

            {/* Soft break before industries */}
            <div
                className="flex items-center justify-center gap-3 bg-white px-4 py-2"
                aria-hidden="true"
            >
                <span className="h-px w-10 bg-[#F0E6DC] sm:w-16" />
                <span
                    className="text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: ORANGE }}
                >
                    Industry Coverage
                </span>
                <span className="h-px w-10 bg-[#F0E6DC] sm:w-16" />
            </div>

            {/* 7 — Industries */}
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
                                We support CPA firms serving clients across a
                                wide range of industries, including:
                            </p>
                        </div>

                        <IndustriesWeSupportGrid />
                    </div>
                </div>
            </section>

            {/* 8 — Why Choose NextLedgers */}
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
                            <span style={{ color: ORANGE }}>NextLedgers</span>?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Experienced offshore accounting recovery specialists
                            for US CPA firms — structured cleanup, reconciliations,
                            and AR/AP support.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(0, 4).map(({ title, icon: Icon }, index) => (
                            <Reveal key={title} delay={Math.min(index * 0.05, 0.2)}>
                                <div className="h-full rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-7 w-7"
                                            strokeWidth={1.75}
                                        />
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
                            </Reveal>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-5 lg:gap-5">
                        {whyChooseCards.slice(4).map(({ title, icon: Icon }, index) => (
                            <Reveal
                                key={title}
                                delay={Math.min(0.08 + index * 0.04, 0.28)}
                            >
                                <div className="h-full rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]">
                                    <span
                                        className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4EA]"
                                        style={{ color: ORANGE }}
                                    >
                                        <Icon
                                            className="h-7 w-7"
                                            strokeWidth={1.75}
                                        />
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
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 — Partner CTA */}
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
                            className="mb-4 inline-flex items-center gap-1.5 rounded-full border px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{
                                background: "white",
                                borderColor: "rgba(255, 106, 0,0.35)",
                                color: ORANGE,
                            }}
                        >
                            <Handshake className="h-3 w-3" strokeWidth={2.5} />
                            Partnership
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore Accounting Recovery Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Eliminate bookkeeping backlogs, restore reporting
                            accuracy, and strengthen AR/AP controls — helping US
                            CPA firms recover client books without adding
                            internal headcount.
                        </p>

                        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
                            {[
                                "Catch-up bookkeeping",
                                "AR/AP management",
                                "Reconciliations",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#F0E6DC] bg-white px-3.5 py-1.5 text-[11.5px] font-semibold text-[#0B1F3A]"
                                >
                                    <BadgeCheck
                                        className="h-3.5 w-3.5 text-[#FF6A00]"
                                        strokeWidth={2.25}
                                    />
                                    {item}
                                </span>
                            ))}
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

                        <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#F0E6DC] pt-6">
                            {partnerTrust.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2 text-[12px] font-semibold"
                                    style={{ color: NAVY }}
                                >
                                    <Icon
                                        className="h-4 w-4"
                                        style={{ color: ORANGE }}
                                        strokeWidth={2}
                                    />
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer region="usa" />
        </main>
    );
}
