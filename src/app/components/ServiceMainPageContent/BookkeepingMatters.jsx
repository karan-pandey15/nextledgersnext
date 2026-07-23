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
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const HEADING = "#1F2937";
const BODY = "#6B7280";
const CARD_BORDER = "#F3E4D4";
const PAGE_BG = "#FFF9F5";

const DEFAULT_TRUST_ITEMS = [
    { icon: ShieldCheck, label: "HMRC Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Clock, label: "UK Time Zone Overlap" },
    { icon: Users, label: "Experienced Offshore Team" },
];

const DEFAULT_BENEFITS = [
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

function TrustBox({ icon: Icon, label }) {
    return (
        <div
            className="flex flex-col items-center justify-center gap-2 rounded-[14px] bg-white px-3 py-4 text-center sm:px-4 sm:py-5"
            style={{ border: `1px solid ${CARD_BORDER}` }}
        >
            <span
                className="flex h-10 w-10 items-center justify-center rounded-full sm:h-11 sm:w-11"
                style={{ background: "#FFF4EA", color: ORANGE }}
            >
                <Icon className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <span
                className="text-[11px] font-bold leading-snug sm:text-[12px]"
                style={{ color: HEADING }}
            >
                {label}
            </span>
        </div>
    );
}

function TrustItem({ icon: Icon, label }) {
    return (
        <div className="flex items-center gap-2">
            <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border"
                style={{ borderColor: ORANGE, color: ORANGE }}
            >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span
                className="text-[11px] font-semibold leading-tight sm:text-[11.5px]"
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
            className="group flex items-center gap-2.5 rounded-[12px] border bg-white px-3 py-2.5 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:gap-3 sm:px-3.5 sm:py-3"
            style={{
                borderColor: CARD_BORDER,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
        >
            <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                style={{ background: "#FFF4EA", color: ORANGE }}
            >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.75} />
            </span>

            <div className="min-w-0 flex-1 text-left">
                <h4
                    className="text-[13px] font-bold leading-snug sm:text-[13.5px]"
                    style={{ color: HEADING }}
                >
                    {title}
                </h4>
                {description ? (
                    <p
                        className="mt-0.5 text-[11.5px] leading-[1.4] sm:text-[12px]"
                        style={{ color: BODY }}
                    >
                        {description}
                    </p>
                ) : null}
            </div>

            <ChevronRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ color: ORANGE }}
                strokeWidth={2.5}
            />
        </div>
    );
}

/**
 * Why bookkeeping matters — reusable. Defaults keep UK page unchanged.
 */
export default function BookKeepingMatters({
    eyebrow = "Financial Foundations",
    titleBefore = "Why Accurate ",
    titleAccent = "Bookkeeping Matters",
    titleAfter = "",
    intro = "Bookkeeping is much more than recording transactions. It forms the foundation of every financial report, tax return, and business decision.",
    helpLabelBefore = "Maintaining ",
    helpLabelAccent = "accurate books",
    helpLabelAfter = " helps businesses:",
    imageSrc = "/images/ukPageImg/bookkeepingimage.png",
    imageAlt = "Laptop with financial dashboard, calculator and plant",
    trustItems = DEFAULT_TRUST_ITEMS,
    trustFooterBefore = "Built for Accounting Firms. ",
    trustFooterAccent = "Trusted by Professionals.",
    benefits = DEFAULT_BENEFITS,
    bannerTitleBefore = "Accurate books. Better insights. ",
    bannerTitleAccent = "Stronger outcomes.",
    bannerBody = "A solid bookkeeping foundation empowers accounting firms to deliver more value, ensure compliance, and drive growth for their clients.",
    wideTrustPanel = false,
    /** image | content | 2x2 trust boxes — same layout as /cfo-advisory */
    splitHero = true,
    className = "",
}) {
    return (
        <section
            className={`relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 ${className}`}
            style={{ background: PAGE_BG }}
        >
            <div
                className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full blur-3xl"
                style={{ background: "rgba(255, 106, 0,0.10)" }}
            />
            <div
                className="pointer-events-none absolute -right-20 bottom-24 h-72 w-72 rounded-full blur-3xl"
                style={{ background: "rgba(255, 106, 0,0.08)" }}
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
                {splitHero ? (
                    <>
                        {/*
                          Desktop: image | center copy (incl. footer lines) | 2×2 cards
                          Mobile: image → copy → cards (tight, no leftover gap)
                        */}
                        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(140px,200px)_minmax(0,1fr)_minmax(220px,280px)] lg:items-center lg:gap-8">
                            {/* Image */}
                            <div className="order-1 mx-auto w-full max-w-[160px] shrink-0 sm:max-w-[180px] lg:mx-0 lg:max-w-none">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    width={300}
                                    height={220}
                                    className="h-auto w-full object-contain"
                                    priority
                                />
                            </div>

                            {/* Center content — footer lines live here so no empty band below the row */}
                            <div className="order-2 min-w-0 text-center">
                                <span
                                    className="mb-2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.14em]"
                                    style={{ background: "#FFF4EA", color: ORANGE }}
                                >
                                    <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                                    {eyebrow}
                                </span>

                                <h2
                                    className="text-[20px] font-extrabold leading-tight sm:text-[24px] lg:text-[26px]"
                                    style={{ color: HEADING }}
                                >
                                    {titleBefore}
                                    <span style={{ color: ORANGE }}>{titleAccent}</span>
                                    {titleAfter}
                                </h2>

                                <p
                                    className="mx-auto mt-2 max-w-md text-[12.5px] leading-relaxed sm:text-[13.5px]"
                                    style={{ color: BODY }}
                                >
                                    {intro}
                                </p>

                                <div className="mx-auto mt-4 max-w-md space-y-1">
                                    <p
                                        className="text-[11px] font-semibold leading-snug sm:text-[11.5px]"
                                        style={{ color: HEADING }}
                                    >
                                        {trustFooterBefore}
                                        <span style={{ color: ORANGE }}>{trustFooterAccent}</span>
                                    </p>

                                    {(helpLabelBefore || helpLabelAccent) && (
                                        <p
                                            className="text-[13px] font-bold leading-snug sm:text-[13.5px]"
                                            style={{ color: HEADING }}
                                        >
                                            {helpLabelBefore}
                                            <span style={{ color: ORANGE }}>{helpLabelAccent}</span>
                                            {helpLabelAfter}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* 2×2 cards */}
                            <div className="order-3 grid grid-cols-2 gap-2.5 sm:gap-3">
                                {trustItems.map((item) => (
                                    <TrustBox key={item.label} {...item} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Full-width centered header — no side cards flanking the title */}
                        <div className="mx-auto max-w-2xl text-center">
                            <span
                                className="mb-2.5 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.14em]"
                                style={{ background: "#FFF4EA", color: ORANGE }}
                            >
                                <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                                {eyebrow}
                            </span>

                            <h2
                                className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                                style={{ color: HEADING }}
                            >
                                {titleBefore}
                                <span style={{ color: ORANGE }}>{titleAccent}</span>
                                {titleAfter}
                            </h2>

                            <p
                                className="mx-auto mt-2 max-w-md text-[12.5px] leading-relaxed sm:text-[13px]"
                                style={{ color: BODY }}
                            >
                                {intro}
                            </p>

                            <div
                                className="mx-auto my-2.5 h-[3px] w-11 rounded-full"
                                style={{ background: ORANGE }}
                            />

                            <p
                                className="text-[13px] font-bold sm:text-[13.5px]"
                                style={{ color: HEADING }}
                            >
                                {helpLabelBefore}
                                <span style={{ color: ORANGE }}>{helpLabelAccent}</span>
                                {helpLabelAfter}
                            </p>
                        </div>

                        {/* Trust strip with compact image */}
                        <div
                            className={`mx-auto mt-5 overflow-hidden rounded-[12px] border bg-white sm:mt-6 ${
                                wideTrustPanel ? "max-w-5xl" : "max-w-4xl"
                            }`}
                            style={{ borderColor: CARD_BORDER }}
                        >
                            <div className="flex flex-col items-center gap-3 px-3 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-4 sm:py-3">
                                <div className="w-full max-w-[140px] shrink-0 sm:max-w-[150px]">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        width={300}
                                        height={220}
                                        className="h-auto w-full object-contain"
                                        priority
                                    />
                                </div>
                                <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-3 gap-y-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
                                    {trustItems.map((item) => (
                                        <TrustItem key={item.label} {...item} />
                                    ))}
                                </div>
                            </div>
                            <div
                                className="px-3 py-2 text-center text-[11px] font-semibold leading-snug sm:px-4"
                                style={{ background: "#FFF4EA", color: HEADING }}
                            >
                                {trustFooterBefore}
                                <span style={{ color: ORANGE }}>{trustFooterAccent}</span>
                            </div>
                        </div>
                    </>
                )}

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
                    {benefits.map((b) => (
                        <BenefitCard key={b.title} {...b} />
                    ))}
                </div>

                <div
                    className="mt-5 flex flex-col items-center gap-3 rounded-2xl px-5 py-4 sm:mt-6 sm:flex-row sm:gap-5 sm:px-7 sm:py-4"
                    style={{
                        background:
                            "linear-gradient(105deg, #FFF4EA 0%, #FFE8D2 45%, #FFF8F1 100%)",
                        boxShadow: "0 4px 20px rgba(255, 106, 0,0.08)",
                    }}
                >
                    <div className="flex items-center gap-3.5 sm:shrink-0">
                        <span
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm"
                            style={{ color: ORANGE }}
                        >
                            <Trophy className="h-5 w-5" strokeWidth={2} />
                        </span>
                        <p
                            className="text-[15px] font-extrabold leading-snug sm:text-[16px]"
                            style={{ color: HEADING }}
                        >
                            {bannerTitleBefore}
                            <span style={{ color: ORANGE }}>{bannerTitleAccent}</span>
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
                        {bannerBody}
                    </p>

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
                    </svg>
                </div>
            </div>
        </section>
    );
}
