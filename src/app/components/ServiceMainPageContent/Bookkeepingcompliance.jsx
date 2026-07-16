"use client";

import React from "react";
import {
    ShieldCheck,
    ListChecks,
    Folders,
    Calculator,
    FileCheck2,
    ArrowLeftRight,
    Headphones,
    BarChart3,
} from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const ORANGE_SOFT = "#FFF4EA";
const HEADING = "#1A1A1A";
const BODY = "#666666";
const CARD_BORDER = "#EBEBEB";
const PAGE_BG = "#FFF9F5";

function IconSearchAlert({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.75" />
            <path d="M15.5 15.5 20 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M10.5 7.75v3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="10.5" cy="13.75" r="0.9" fill="currentColor" />
        </svg>
    );
}

function IconVatDoc({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M7 3.75h7.5L19 8.25V20.25a.75.75 0 0 1-.75.75H7.75A.75.75 0 0 1 7 20.25V3.75Z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinejoin="round"
            />
            <path d="M14.5 3.75V8.25H19" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
            <text
                x="12"
                y="16.2"
                textAnchor="middle"
                fill="currentColor"
                style={{ fontSize: "5.5px", fontWeight: 800, fontFamily: "system-ui,sans-serif" }}
            >
                VAT
            </text>
        </svg>
    );
}

function IconPoundRefresh({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M19.5 12a7.5 7.5 0 0 1-12.4 5.65"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
            <path d="M7.1 19.2v-2.6h2.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M4.5 12a7.5 7.5 0 0 1 12.4-5.65"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
            />
            <path d="M16.9 4.8v2.6h-2.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M13.6 9.2c-.35-.7-1.05-1.1-1.9-1.1-1.2 0-2 .8-2 2.05 0 1.7 2.1 1.55 2.1 2.9 0 .55-.4.95-1.05.95-.7 0-1.2-.35-1.5-.9M9.4 12.2h3.4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function IconClipboardSearch({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M9 4.5h6a1 1 0 0 1 1 1V6h1.25A1.75 1.75 0 0 1 19 7.75v11.5A1.75 1.75 0 0 1 17.25 21H6.75A1.75 1.75 0 0 1 5 19.25V7.75A1.75 1.75 0 0 1 6.75 6H8V5.5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.65"
                strokeLinejoin="round"
            />
            <rect x="9" y="3.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12.25" cy="13.25" r="2.6" stroke="currentColor" strokeWidth="1.55" />
            <path d="m14.2 15.2 1.8 1.8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
        </svg>
    );
}

function IconSearchExclaim({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.25" stroke="currentColor" strokeWidth="1.75" />
            <path d="M15.5 15.5 20 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M10.5 7.5v3.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            <circle cx="10.5" cy="13.85" r="0.95" fill="currentColor" />
        </svg>
    );
}

function IconCalcCoins({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <rect x="3.5" y="3.5" width="10" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.65" />
            <path d="M5.75 6.25h5.5M5.75 9h5.5M5.75 11.75h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="16.5" cy="14" r="4" stroke="currentColor" strokeWidth="1.65" />
            <circle cx="16.5" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.35" />
            <path d="M14.2 10.4a4 4 0 0 1 5.1 0" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
        </svg>
    );
}

function IconBuildingPound({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
            <path
                d="M4 20.5h16M6 20.5V9.5l6-4.5 6 4.5v11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path d="M9 20.5v-4h6v4M10 11.5h1.25M12.75 11.5H14M10 14.25h1.25M12.75 14.25H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
                d="M12.9 7.1c-.2-.4-.6-.65-1.1-.65-.7 0-1.15.45-1.15 1.15 0 .95 1.2.85 1.2 1.6 0 .3-.25.55-.6.55-.4 0-.7-.2-.85-.5M10.5 8.85h2"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
            />
        </svg>
    );
}

const DEFAULT_WHY_CARDS = [
    {
        icon: ListChecks,
        title: "Meet HMRC Obligations",
        description:
            "Submit complete tax records on time to prevent default surcharge fees.",
    },
    {
        icon: Folders,
        title: "Verify Records",
        description:
            "Maintain structured records and regular cross-ledger reconciliations.",
    },
    {
        icon: IconSearchAlert,
        title: "Identify Errors Early",
        description:
            "Spot errors in custom transactions before submission to HMRC.",
    },
    {
        icon: Calculator,
        title: "Calculation Confidence",
        description:
            "Enhance practice accuracy in VAT returns and adjustments calculations.",
    },
    {
        icon: ShieldCheck,
        title: "Reduce Risk",
        description:
            "Lower the administration overheads and operational risk of tax penalties.",
    },
    {
        icon: FileCheck2,
        title: "Complex Treatments",
        description:
            "Verify correct VAT treatment for imports, exports, and specific exemptions.",
    },
];

const DEFAULT_SERVICE_CARDS = [
    {
        icon: IconVatDoc,
        title: "VAT Return Preparation",
        description: "Submission-ready tax files.",
    },
    {
        icon: IconPoundRefresh,
        title: "VAT Reconciliations",
        description: "Match outputs to bank ledgers.",
    },
    {
        icon: IconClipboardSearch,
        title: "VAT Liability Reviews",
        description: "Assess calculations and claims.",
    },
    {
        icon: ArrowLeftRight,
        title: "Input & Output Verification",
        description: "Audit digital invoice link entries.",
    },
    {
        icon: IconBuildingPound,
        title: "VAT Control Account Reviews",
        description: "Audit balance sheet control balances.",
    },
    {
        icon: IconSearchExclaim,
        title: "VAT Error Identification",
        description: "Locate omissions prior to filing.",
    },
    {
        icon: IconCalcCoins,
        title: "Adjustment Calculations",
        description: "Manage specific capital/bad debt reliefs.",
    },
    {
        icon: Headphones,
        title: "HMRC Query Support",
        description: "Assist with standard compliance queries.",
    },
];

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
                        opacity: 0.5,
                    }}
                />
            ))}
        </div>
    );
}

function WhyCard({ icon: Icon, title, description }) {
    return (
        <div
            className="flex items-start gap-3 rounded-[12px] border bg-white px-3.5 py-3.5 transition-shadow duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
            style={{
                borderColor: CARD_BORDER,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
        >
            <span
                className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                style={{ background: ORANGE_SOFT, color: ORANGE }}
            >
                <Icon className="h-9 w-9" strokeWidth={1.75} />
            </span>

            <div className="min-w-0 flex-1 text-left">
                <h4
                    className="text-[13px] font-bold leading-snug"
                    style={{ color: HEADING }}
                >
                    {title}
                </h4>
                <div
                    className="mt-[6px] mb-[7px] h-[2px] w-[22px] rounded-full"
                    style={{ background: ORANGE }}
                />
                <p
                    className="text-[11.5px] leading-[1.45]"
                    style={{ color: BODY }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

function ServiceCard({ icon: Icon, title, description }) {
    return (
        <div
            className="flex flex-col items-center rounded-[12px] border bg-white px-2.5 py-4 text-center transition-shadow duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
            style={{
                borderColor: CARD_BORDER,
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
        >
            <span
                className="mb-2 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ background: ORANGE_SOFT, color: ORANGE }}
            >
                <Icon className="h-9 w-9" strokeWidth={1.75} />
            </span>

            <h4
                className="max-w-[140px] text-[12.5px] font-bold leading-snug"
                style={{ color: ORANGE }}
            >
                {title}
            </h4>
            <div
                className="mx-auto mt-[6px] mb-[6px] h-[2px] w-[18px] rounded-full"
                style={{ background: ORANGE }}
            />
            <p
                className="max-w-[150px] text-[11px] leading-[1.4]"
                style={{ color: BODY }}
            >
                {description}
            </p>
        </div>
    );
}

/**
 * Compliance / specialist card section — reusable. Defaults keep UK VAT page unchanged.
 */
export default function BookKeepingCompliance({
    whyEyebrow = "HMRC Compliance Auditing",
    whyTitleBefore = "Why ",
    whyTitleAccent = "VAT Compliance",
    whyTitleAfter = " Matters",
    whySubtitle = "VAT errors can result in penalties, incorrect tax payments, and unnecessary HMRC enquiries.",
    whyIntroLabel = "Effective VAT management helps businesses:",
    whyCards: whyCardsProp,
    showServices = true,
    servicesEyebrow = "VAT Scope",
    servicesTitleBefore = "Our ",
    servicesTitleAccent = "VAT Services",
    servicesTitleAfter = " Include",
    servicesSubtitle = "Dedicated VAT operations that keep your clients compliant and audit-ready.",
    serviceCards: serviceCardsProp,
}) {
    const whyCards = whyCardsProp || DEFAULT_WHY_CARDS;
    const serviceCards = serviceCardsProp || DEFAULT_SERVICE_CARDS;

    return (
        <section
            className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
            style={{ background: PAGE_BG }}
        >
            <svg
                className="pointer-events-none absolute inset-x-0 top-0 h-52 w-full opacity-[0.4]"
                viewBox="0 0 1440 220"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,90 C200,150 400,30 700,95 C1000,160 1200,50 1440,100 L1440,0 L0,0 Z"
                    fill="#FFE8D2"
                    opacity="0.35"
                />
                <path
                    d="M0,130 C280,70 560,170 840,110 C1120,50 1280,140 1440,110 L1440,0 L0,0 Z"
                    fill="#FFF4EA"
                    opacity="0.55"
                />
            </svg>
            <svg
                className="pointer-events-none absolute inset-x-0 bottom-0 h-44 w-full opacity-[0.35]"
                viewBox="0 0 1440 180"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,70 C320,130 640,20 960,80 C1180,120 1320,50 1440,70 L1440,180 L0,180 Z"
                    fill="#FFE8D2"
                    opacity="0.4"
                />
            </svg>

            <DotGrid className="pointer-events-none absolute right-4 top-5 sm:right-8 sm:top-7" />
            <DotGrid className="pointer-events-none absolute bottom-6 left-4 sm:bottom-8 sm:left-8" />

            <div className="relative mx-auto w-full max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    <span
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                        style={{ background: ORANGE }}
                    >
                        <ShieldCheck className="h-3 w-3" strokeWidth={2.5} />
                        {whyEyebrow}
                    </span>

                    <h2
                        className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                        style={{ color: HEADING }}
                    >
                        {whyTitleBefore}
                        <span style={{ color: ORANGE }}>{whyTitleAccent}</span>
                        {whyTitleAfter}
                    </h2>

                    <p
                        className="mt-2 max-w-xl text-[12.5px] leading-relaxed sm:text-[13px]"
                        style={{ color: BODY }}
                    >
                        {whySubtitle}
                    </p>

                    {whyIntroLabel ? (
                        <div className="mt-3.5 mb-4 flex w-full max-w-md items-center justify-center gap-2.5 sm:max-w-lg sm:gap-3">
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                            <span
                                className="text-[12px] font-semibold whitespace-nowrap sm:text-[12.5px]"
                                style={{ color: "#555555" }}
                            >
                                {whyIntroLabel}
                            </span>
                            <span
                                className="h-[2px] w-5 shrink-0 rounded-full sm:w-7"
                                style={{ background: ORANGE }}
                            />
                        </div>
                    ) : (
                        <div className="mb-4 mt-3.5" />
                    )}
                </div>

                <div
                    className={`grid grid-cols-1 gap-3 lg:gap-3.5 ${
                        whyCards.length % 3 === 2
                            ? "lg:grid-cols-3"
                            : "sm:grid-cols-2 lg:grid-cols-3"
                    }`}
                >
                    {(whyCards.length % 3 === 2
                        ? whyCards.slice(0, whyCards.length - 2)
                        : whyCards
                    ).map((card) => (
                        <WhyCard key={card.title} {...card} />
                    ))}
                </div>

                {whyCards.length % 3 === 2 ? (
                    <div className="mx-auto mt-3 grid max-w-full grid-cols-1 gap-3 sm:max-w-[680px] sm:grid-cols-2 lg:mt-3.5 lg:gap-3.5">
                        {whyCards.slice(-2).map((card) => (
                            <WhyCard key={card.title} {...card} />
                        ))}
                    </div>
                ) : null}

                {showServices ? (
                    <>
                        <div className="mt-10 flex flex-col items-center text-center sm:mt-11">
                            <span
                                className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                                style={{ background: ORANGE }}
                            >
                                <BarChart3 className="h-3 w-3" strokeWidth={2.5} />
                                {servicesEyebrow}
                            </span>

                            <h2
                                className="text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                                style={{ color: HEADING }}
                            >
                                {servicesTitleBefore}
                                <span style={{ color: ORANGE }}>{servicesTitleAccent}</span>
                                {servicesTitleAfter}
                            </h2>

                            <p
                                className="mt-2 mb-5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13px]"
                                style={{ color: BODY }}
                            >
                                {servicesSubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-3.5">
                            {serviceCards.map((card) => (
                                <ServiceCard key={card.title} {...card} />
                            ))}
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
}
