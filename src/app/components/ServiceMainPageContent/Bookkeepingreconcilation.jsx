"use client";

import Image from "next/image";
import {
    ClipboardList,
    RefreshCw,
    CheckCircle2,
    ShieldCheck,
    Clock,
    Settings,
    Users,
    Send,
    Pencil,
} from "lucide-react";

const ORANGE = "#F58220";
const PAGE_BG = "#FFF9F5";
const HEADING = "#1A1A1A";
const BODY = "#555555";
const PILL_BG = "#FFF4EA";

const bookkeepingItems = [
    "General Ledger Maintenance",
    "Sales & Purchase Ledger Processing",
    "Customer & Supplier Ledger Management",
    "Fixed Asset Register Maintenance",
    "Journal Entries, Accruals & Prepayments",
    "Multi-Currency Bookkeeping",
    "Accounts Receivable Management",
    "Accounts Payable Management",
    "Bank & Control Account Reconciliations",
    "Month-End Working Papers & Reporting",
    "Backlog Bookkeeping Clean-Up",
    "Bookkeeping Review & Reporting Support",
];

const reconciliationItems = [
    "Bank Reconciliations",
    "Credit Card Reconciliations",
    "Payroll Reconciliations",
    "Inventory Reconciliations",
    "VAT & CIS Reconciliations",
    "Intercompany Reconciliations",
    "Factoring & Control Account Reconciliations",
];

const vatHighlights = [
    { icon: ShieldCheck, label: "100% HMRC Compliant" },
    { icon: Clock, label: "MTD Ready" },
    { icon: Settings, label: "Industry-Specific Expertise" },
    { icon: Users, label: "Experienced VAT Professionals" },
];

function CheckPill({ text }) {
    return (
        <li
            className="flex items-center gap-2.5 rounded-full px-3 py-2"
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
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            </span>
            <span
                className="text-[11.5px] font-medium leading-snug sm:text-[12px]"
                style={{ color: HEADING }}
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
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: ORANGE }}
                >
                    <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                <h3
                    className="text-[14px] font-bold leading-snug sm:text-[15px]"
                    style={{ color: HEADING }}
                >
                    {titleBefore}
                    <span style={{ color: ORANGE }}>{titleAccent}</span>
                    {titleAfter}
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-2.5">
                {items.map((item) => (
                    <CheckPill key={item} text={item} />
                ))}
            </div>
        </div>
    );
}

export default function BookkeepingReconcilation() {
    return (
        <section
            className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
            style={{ background: PAGE_BG }}
        >
            <div className="relative mx-auto flex w-full max-w-6xl flex-col">
                {/* ── Header ─────────────────────────────────────────────── */}
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
                        style={{ color: HEADING }}
                    >
                        Our{" "}
                        <span style={{ color: ORANGE }}>
                            UK Bookkeeping &amp; Reconciliation
                        </span>{" "}
                        Support
                    </h2>

                    <p
                        className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                        style={{ color: BODY }}
                    >
                        We process, manage, and reconcile every transaction, providing clean
                        and submission-ready accounts.
                    </p>
                </div>

                {/* ── Two service cards ──────────────────────────────────── */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
                    <ServiceCard
                        icon={ClipboardList}
                        titleBefore="Our UK "
                        titleAccent="Bookkeeping"
                        titleAfter=" Services Include"
                        items={bookkeepingItems}
                    />
                    <ServiceCard
                        icon={RefreshCw}
                        titleBefore="Our "
                        titleAccent="Reconciliation"
                        titleAfter=" Services Include"
                        items={reconciliationItems}
                    />
                </div>

                {/* ── Specialist VAT Support ─────────────────────────────── */}
                <div className="mt-12 grid grid-cols-1 items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-12">
                    {/* Left copy */}
                    <div>
                        <span
                            className="mb-3 inline-flex items-center rounded-md px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                            style={{ background: ORANGE }}
                        >
                            Making Tax Digital (MTD)
                        </span>

                        <h3
                            className="mt-1 text-[22px] font-extrabold leading-[1.2] sm:text-[26px] lg:text-[28px]"
                            style={{ color: HEADING }}
                        >
                            Specialist{" "}
                            <span style={{ color: ORANGE }}>VAT Support</span> for UK
                            Accounting Firms
                        </h3>

                        <p
                            className="mt-4 text-[13px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: BODY }}
                        >
                            VAT remains one of the most technically demanding areas of UK
                            compliance. Different industries and transaction types often
                            require specialised VAT treatment and careful review.
                        </p>
                        <p
                            className="mt-3 text-[13px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: BODY }}
                        >
                            Our experienced VAT team supports accounting firms with
                            preparation, reconciliation, and submission-ready VAT workings
                            across multiple industries and VAT schemes.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-[13px] font-semibold transition-colors hover:bg-[#F58220] hover:text-white"
                            style={{ borderColor: ORANGE, color: ORANGE }}
                        >
                            <Send className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Request a Proposal
                        </a>
                    </div>

                    {/* Right visual */}
                    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
                            <Image
                                src="/images/bgimage.JPG"
                                alt="Specialist VAT support for UK accounting firms"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
                        </div>

                        {/* Overlay feature cards + timeline */}
                        <div className="absolute left-3 top-1/2 flex w-[min(72%,280px)] -translate-y-1/2 items-stretch gap-2 sm:left-5 sm:w-[58%] sm:max-w-[260px]">
                            {/* Dotted vertical connector aligned to cards */}
                            <div className="relative flex w-3 shrink-0 flex-col items-center justify-between py-4">
                                <span className="absolute inset-y-5 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-white/85" />
                                {vatHighlights.map(({ label }) => (
                                    <span
                                        key={label}
                                        className="relative z-[1] h-2 w-2 rounded-full bg-white shadow-sm ring-2 ring-white/30"
                                    />
                                ))}
                            </div>

                            <div className="flex flex-1 flex-col justify-between gap-2.5">
                                {vatHighlights.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                                    >
                                        <span
                                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                                            style={{ background: PILL_BG, color: ORANGE }}
                                        >
                                            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                                        </span>
                                        <span
                                            className="text-[11px] font-bold leading-tight sm:text-[11.5px]"
                                            style={{ color: HEADING }}
                                        >
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Circular seal */}
                        <div className="absolute -bottom-3 -right-2 flex h-[88px] w-[88px] items-center justify-center sm:-bottom-4 sm:-right-3 sm:h-[96px] sm:w-[96px]">
                            <svg viewBox="0 0 100 100" className="absolute h-full w-full drop-shadow-lg">
                                <defs>
                                    <path
                                        id="vatBadgeCircle"
                                        d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                                    />
                                </defs>
                                <circle cx="50" cy="50" r="48" fill={ORANGE} />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="42"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.35)"
                                    strokeWidth="1"
                                    strokeDasharray="2 3"
                                />
                                <text
                                    fill="white"
                                    fontSize="6.2"
                                    fontWeight="700"
                                    letterSpacing="1.6"
                                >
                                    <textPath href="#vatBadgeCircle" startOffset="0%">
                                        ACCURATE • TIMELY • RELIABLE • ACCURATE •
                                    </textPath>
                                </text>
                            </svg>
                            <span className="relative z-[1] flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md sm:h-10 sm:w-10">
                                <CheckCircle2
                                    className="h-5 w-5"
                                    style={{ color: ORANGE }}
                                    strokeWidth={2.5}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
