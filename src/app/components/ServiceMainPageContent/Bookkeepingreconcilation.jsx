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
import CtaButton from "@/app/components/ui/CtaButton";

const ORANGE = "#F58220";
const PAGE_BG = "#FFFFFF";
const HEADING = "#1A1A1A";
const BODY = "#555555";
const PILL_BG = "#FFF4EA";

const DEFAULT_SERVICE_CARDS = [
    {
        icon: ClipboardList,
        titleBefore: "Our UK ",
        titleAccent: "Bookkeeping",
        titleAfter: " Services Include",
        items: [
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
        ],
    },
    {
        icon: RefreshCw,
        titleBefore: "Our ",
        titleAccent: "Reconciliation",
        titleAfter: " Services Include",
        items: [
            "Bank Reconciliations",
            "Credit Card Reconciliations",
            "Payroll Reconciliations",
            "Inventory Reconciliations",
            "VAT & CIS Reconciliations",
            "Intercompany Reconciliations",
            "Factoring & Control Account Reconciliations",
        ],
    },
];

const DEFAULT_SPECIALIST_HIGHLIGHTS = [
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

/**
 * Services + specialist block — reusable. Defaults keep UK page unchanged.
 */
export default function BookkeepingReconcilation({
    eyebrow = "Full Services Deliverables",
    titleBefore = "Our ",
    titleAccent = "UK Bookkeeping & Reconciliation",
    titleAfter = " Support",
    subtitle = "We process, manage, and reconcile every transaction, providing clean and submission-ready accounts.",
    serviceCards = DEFAULT_SERVICE_CARDS,
    showServiceCards = true,
    showSpecialist = true,
    specialistEyebrow = "Making Tax Digital (MTD)",
    specialistTitleBefore = "Specialist ",
    specialistTitleAccent = "VAT Support",
    specialistTitleAfter = " for UK Accounting Firms",
    specialistParagraphs = [
        "VAT remains one of the most technically demanding areas of UK compliance. Different industries and transaction types often require specialised VAT treatment and careful review.",
        "Our experienced VAT team supports accounting firms with preparation, reconciliation, and submission-ready VAT workings across multiple industries and VAT schemes.",
    ],
    specialistCtaLabel = "Request a Proposal",
    specialistCtaHref = "/contact",
    specialistImageSrc = "/images/bgimage.JPG",
    specialistImageAlt = "Specialist VAT support for UK accounting firms",
    specialistHighlights = DEFAULT_SPECIALIST_HIGHLIGHTS,
    sealText = "ACCURATE • TIMELY • RELIABLE • ACCURATE •",
}) {
    const gridClass =
        serviceCards.length <= 2
            ? "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7"
            : "grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-7";

    if (!showServiceCards && !showSpecialist) return null;

    return (
        <section
            className="relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
            style={{ background: PAGE_BG }}
        >
            <div className="relative mx-auto flex w-full max-w-6xl flex-col">
                {showServiceCards ? (
                    <>
                        <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                            <span
                                className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                                style={{ background: ORANGE }}
                            >
                                <Pencil className="h-3 w-3" strokeWidth={2.5} />
                                {eyebrow}
                            </span>

                            <h2
                                className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                                style={{ color: HEADING }}
                            >
                                {titleBefore}
                                <span style={{ color: ORANGE }}>{titleAccent}</span>
                                {titleAfter}
                            </h2>

                            <p
                                className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                                style={{ color: BODY }}
                            >
                                {subtitle}
                            </p>
                        </div>

                        <div className={gridClass}>
                            {serviceCards.map((card) => (
                                <ServiceCard
                                    key={`${card.titleBefore}${card.titleAccent}`}
                                    {...card}
                                />
                            ))}
                        </div>
                    </>
                ) : null}

                {showSpecialist ? (
                    <div
                        className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                            showServiceCards ? "mt-12 lg:mt-14" : ""
                        }`}
                    >
                        <div>
                            <span
                                className="mb-3 inline-flex items-center rounded-md px-3 py-[5px] text-[10px] font-bold uppercase tracking-[0.1em] text-white"
                                style={{ background: ORANGE }}
                            >
                                {specialistEyebrow}
                            </span>

                            <h3
                                className="mt-1 text-[22px] font-extrabold leading-[1.2] sm:text-[26px] lg:text-[28px]"
                                style={{ color: HEADING }}
                            >
                                {specialistTitleBefore}
                                <span style={{ color: ORANGE }}>{specialistTitleAccent}</span>
                                {specialistTitleAfter}
                            </h3>

                            {specialistParagraphs.map((para) => (
                                <p
                                    key={para.slice(0, 40)}
                                    className="mt-4 text-[13px] leading-relaxed sm:text-[13.5px] first:mt-4"
                                    style={{ color: BODY }}
                                >
                                    {para}
                                </p>
                            ))}

                            <CtaButton
                                href={specialistCtaHref}
                                variant="secondary"
                                size="sm"
                                className="mt-6"
                            >
                                <Send className="h-3.5 w-3.5" strokeWidth={2.25} />
                                {specialistCtaLabel}
                            </CtaButton>
                        </div>

                        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
                                <Image
                                    src={specialistImageSrc}
                                    alt={specialistImageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
                            </div>

                            <div className="absolute left-3 top-1/2 flex w-[min(72%,280px)] -translate-y-1/2 items-stretch gap-2 sm:left-5 sm:w-[58%] sm:max-w-[260px]">
                                <div className="relative flex w-3 shrink-0 flex-col items-center justify-between py-4">
                                    <span className="absolute inset-y-5 left-1/2 w-px -translate-x-1/2 border-l border-dashed border-white/85" />
                                    {specialistHighlights.map(({ label }) => (
                                        <span
                                            key={label}
                                            className="relative z-[1] h-2 w-2 rounded-full bg-white shadow-sm ring-2 ring-white/30"
                                        />
                                    ))}
                                </div>

                                <div className="flex flex-1 flex-col justify-between gap-2.5">
                                    {specialistHighlights.map(({ icon: Icon, label }) => (
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

                            <div className="absolute -bottom-3 -right-2 flex h-[88px] w-[88px] items-center justify-center sm:-bottom-4 sm:-right-3 sm:h-[96px] sm:w-[96px]">
                                <svg viewBox="0 0 100 100" className="absolute h-full w-full drop-shadow-lg">
                                    <defs>
                                        <path
                                            id="serviceBadgeCircle"
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
                                        <textPath href="#serviceBadgeCircle" startOffset="0%">
                                            {sealText}
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
                ) : null}
            </div>
        </section>
    );
}
