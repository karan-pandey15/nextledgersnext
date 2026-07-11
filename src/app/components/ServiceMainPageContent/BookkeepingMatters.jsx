"use client";

import React from "react";
import Image from "next/image";
import {
    ShieldCheck,
    Lock,
    Clock,
    Users,
    FileSearch,
    Coins,
    Handshake,
    Monitor,
    ClipboardCheck,
    Search,
    TrendingUp,
    Target,
    Trophy,
    Sparkles,
    ChevronRight,
} from "lucide-react";

const ORANGE = "#F58220";
const HEADING = "#1F2937";
const BODY = "#6B7280";
const CARD_BORDER = "#F3E4D4";
const PAGE_BG = "#FAFAF8";

const trustItems = [
    { icon: ShieldCheck, label: "HMRC Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Clock, label: "UK Time Zone Overlap" },
    { icon: Users, label: "Experienced Offshore Team" },
];

const benefits = [
    {
        icon: FileSearch,
        title: "Understand Position",
        description:
            "Gain instant visibility into cash balances and actual asset performance.",
    },
    {
        icon: Coins,
        title: "Monitor Cash Flow",
        description:
            "Keep track of active inflows, outflows, and working capital requirements.",
    },
    {
        icon: Handshake,
        title: "Customer & Supplier Balances",
        description:
            "Ensure trade debts and supplier invoices are recorded and managed correctly.",
    },
    {
        icon: Monitor,
        title: "Reliable Management Accounts",
        description:
            "Create robust, audit-ready balance sheets and P&L reports.",
    },
    {
        icon: ClipboardCheck,
        title: "Support VAT Compliance",
        description:
            "Verify input and output VAT digital links in accordance with HMRC rules.",
    },
    {
        icon: Search,
        title: "Early Error Detection",
        description:
            "Identify duplicates, input mistakes, and missing invoices before deadlines.",
    },
    {
        icon: TrendingUp,
        title: "Data-Driven Decisions",
        description:
            "Formulate business development strategies backed by certified books.",
    },
    {
        icon: Users,
        title: "Strengthen Relationships",
        description:
            "Build client trust by processing daily accounting entries accurately.",
    },
    {
        icon: Target,
        title: "Create Advisory Capacity",
        description:
            "Free up practice capacity to deliver premium advisory services.",
    },
];

function TrustItem({ icon: Icon, label }) {
    return (
        <div className="flex items-center gap-2">
            <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border"
                style={{ borderColor: ORANGE, color: ORANGE }}
            >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span
                className="text-[11px] font-semibold leading-tight"
                style={{ color: HEADING }}
            >
                {label}
            </span>
        </div>
    );
}

function BenefitCard({ icon: Icon, title, description }) {
    return (
        <div
            className="group flex items-center gap-3 rounded-[14px] border bg-white px-4 py-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{
                borderColor: CARD_BORDER,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
        >
            {/* Icon — no number badge */}
            <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "#FFF7F0", color: ORANGE }}
            >
                <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>

            <div className="min-w-0 flex-1 text-left">
                <h4
                    className="text-[13px] font-bold leading-snug sm:text-[13.5px]"
                    style={{ color: HEADING }}
                >
                    {title}
                </h4>
                <p
                    className="mt-1 text-[11.5px] leading-[1.45] sm:text-[12px]"
                    style={{ color: BODY }}
                >
                    {description}
                </p>
            </div>

            <ChevronRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: ORANGE }}
                strokeWidth={2.5}
            />
        </div>
    );
}

export default function BookKeepingMatters() {
    return (
        <section
            className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
            style={{ background: PAGE_BG }}
        >
            {/* Soft atmosphere */}
            <div
                className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "rgba(245,130,32,0.10)" }}
            />
            <div
                className="pointer-events-none absolute -right-20 bottom-24 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "rgba(245,130,32,0.08)" }}
            />
            <div
                className="pointer-events-none absolute left-6 top-6 opacity-40"
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

            <div className="relative mx-auto w-full max-w-6xl">
                {/* ── Header: image | title | trust card ───────────────────── */}
                <div className="mb-7 grid grid-cols-1 items-center gap-6 lg:mb-8 lg:grid-cols-[200px_1fr_240px] lg:gap-7 xl:grid-cols-[220px_1fr_250px]">
                    {/* Left image */}
                    <div className="mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-none">
                        <Image
                            src="/images/ukPageImg/bookkeepingimage.png"
                            alt="Laptop with financial dashboard, calculator and plant"
                            width={440}
                            height={360}
                            className="h-auto w-full object-contain"
                            priority
                        />
                    </div>

                    {/* Centre title */}
                    <div className="text-center">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.14em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                            Financial Foundations
                        </span>

                        <h2
                            className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: HEADING }}
                        >
                            Why Accurate{" "}
                            <span style={{ color: ORANGE }}>Bookkeeping Matters</span>
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-md text-[12.5px] leading-relaxed sm:text-[13px]"
                            style={{ color: BODY }}
                        >
                            Bookkeeping is much more than recording transactions. It forms
                            the foundation of every financial report, tax return, and
                            business decision.
                        </p>

                        <div
                            className="mx-auto my-3 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />

                        <p
                            className="text-[13px] font-bold sm:text-[13.5px]"
                            style={{ color: HEADING }}
                        >
                            Maintaining{" "}
                            <span style={{ color: ORANGE }}>accurate books</span> helps
                            businesses:
                        </p>
                    </div>

                    {/* Right trust card */}
                    <div
                        className="overflow-hidden rounded-[14px] border bg-white"
                        style={{
                            borderColor: CARD_BORDER,
                            boxShadow: "0 8px 28px rgba(0,0,0,0.07)",
                        }}
                    >
                        <div className="grid grid-cols-2 gap-x-3 gap-y-3.5 p-3.5 sm:p-4">
                            {trustItems.map((item) => (
                                <TrustItem key={item.label} {...item} />
                            ))}
                        </div>

                        <div
                            className="px-3.5 py-2.5 text-center text-[11px] font-semibold leading-snug sm:px-4"
                            style={{ background: "#FFF4EA", color: HEADING }}
                        >
                            Built for Accounting Firms.{" "}
                            <span style={{ color: ORANGE }}>Trusted by Professionals.</span>
                        </div>
                    </div>
                </div>

                {/* ── 3×3 benefit cards — no 01/02 numbers ─────────────────── */}
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-4">
                    {benefits.map((b) => (
                        <BenefitCard key={b.title} {...b} />
                    ))}
                </div>

                {/* ── Footer banner ────────────────────────────────────────── */}
                <div
                    className="mt-7 flex flex-col items-center gap-4 rounded-2xl px-5 py-5 sm:mt-8 sm:flex-row sm:gap-5 sm:px-7 sm:py-5"
                    style={{
                        background:
                            "linear-gradient(105deg, #FFF4EA 0%, #FFE8D2 45%, #FFF8F1 100%)",
                        boxShadow: "0 4px 20px rgba(245,130,32,0.08)",
                    }}
                >
                    <div className="flex items-center gap-3.5 sm:shrink-0">
                        <span
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                            style={{ color: ORANGE }}
                        >
                            <Trophy className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <p
                            className="text-[15px] font-extrabold leading-snug sm:text-[16px]"
                            style={{ color: HEADING }}
                        >
                            Accurate books. Better insights.{" "}
                            <span style={{ color: ORANGE }}>Stronger outcomes.</span>
                        </p>
                    </div>

                    <div
                        className="hidden h-12 w-px shrink-0 sm:block"
                        style={{ background: "rgba(0,0,0,0.12)" }}
                    />

                    <p
                        className="flex-1 text-center text-[12px] leading-relaxed sm:text-left sm:text-[12.5px]"
                        style={{ color: "#4B5563" }}
                    >
                        A solid bookkeeping foundation empowers accounting firms to deliver
                        more value, ensure compliance, and drive growth for their clients.
                    </p>

                    {/* Rising chart graphic */}
                    <svg
                        className="hidden shrink-0 sm:block"
                        width="72"
                        height="52"
                        viewBox="0 0 72 52"
                        fill="none"
                        aria-hidden="true"
                    >
                        <rect x="4" y="34" width="11" height="14" rx="2.5" fill={ORANGE} opacity="0.35" />
                        <rect x="19" y="26" width="11" height="22" rx="2.5" fill={ORANGE} opacity="0.55" />
                        <rect x="34" y="16" width="11" height="32" rx="2.5" fill={ORANGE} opacity="0.75" />
                        <rect x="49" y="6" width="11" height="42" rx="2.5" fill={ORANGE} />
                        <path
                            d="M9 32 L24 24 L39 14 L54 4"
                            stroke={ORANGE}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            fill="none"
                        />
                        <path
                            d="M49 4 H62 V12"
                            stroke={ORANGE}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
