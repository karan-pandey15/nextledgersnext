"use client";

import React from "react";
import Image from "next/image";
import {
    User,
    FileText,
    Tag,
    ShieldCheck,
    ShoppingBag,
    CreditCard,
    BarChart3,
    Briefcase,
} from "lucide-react";

/**
 * Shared logo path map — reuse keys anywhere in the app.
 * Keys are lowercase; lookups are case-insensitive.
 */
export const LOGO_MAP = {
    brightpay: "/images/logooUK/brightpay.jpeg",
    "moneysoft payroll manager": "/images/logooUK/Moneysoft_Australial.jpeg",
    "moneysoft payroll": "/images/logooUK/Moneysoft_Australial.jpeg",
    moneysoft: "/images/logooUK/Moneysoft_Australial.jpeg",
    "xero payroll": "/images/logooUK/Xero.png",
    "quickbooks payroll": "/images/logooUK/QuickBooks_Training.png",
    "sage payroll": "/images/logooUK/Sage.jpg",
    "freeagent payroll": "/images/logooUK/FreeAgent.png",
    nest: "/images/logooUK/NEST_id4rvtkhfhg.png",
    "the people's pension": "/images/logooUK/thepepole.png",
    "the peoples pension": "/images/logooUK/thepepole.png",
    "smart pension": "/images/logooUK/Smart_Pension.jpeg",
    xero: "/images/logooUK/Xero.png",
    "xero tax": "/images/logooUK/Xero.png",
    "xero & quickbooks online": "/images/logooUK/Xero.png",
    "quickbooks online": "/images/logooUK/QuickBooks_Training.png",
    quickbooks: "/images/logooUK/QuickBooks_Training.png",
    "quickbooks vat centre": "/images/logooUK/QuickBooks_Training.png",
    "sage business cloud": "/images/logooUK/Sage.jpg",
    sage: "/images/logooUK/Sage.jpg",
    "sage vat module": "/images/logooUK/Sage.jpg",
    freeagent: "/images/logooUK/FreeAgent.png",
    "freeagent vat": "/images/logooUK/FreeAgent.png",
    dext: "/images/logooUK/dext.png",
    hubdoc: "/images/logooUK/hubdoc.png",
    approvalmax: "/images/logooUK/ApprovalMax.jpeg",
    "iris accounts production": "/images/logooUK/IRIS_KashFlow.jpeg",
    "iris personal tax": "/images/logooUK/IRIS_KashFlow.jpeg",
    "iris business tax": "/images/logooUK/IRIS_KashFlow.jpeg",
    "cch accounts production": "/images/logooUK/wolters.png",
    "cch personal tax": "/images/logooUK/wolters.png",
    "cch corporation tax": "/images/logooUK/wolters.png",
    btcsoftware: "/images/logooUK/BTS Software.png",
    "btcsoftware tax": "/images/logooUK/BTS Software.png",
    capium: "/images/logooUK/capium.jpeg",
    "capium personal tax": "/images/logooUK/capium.jpeg",
    "capium corporation tax": "/images/logooUK/capium.jpeg",
    "absolute tax": "/images/logooUK/Absolute_Tax.png",
    "forbes professional": "/images/logooUK/Forbes_Profession.png",
    kashflow: "/images/logooUK/IRIS_KashFlow.jpeg",
    "iris kashflow": "/images/logooUK/IRIS_KashFlow.jpeg",
    iris: "/images/logooUK/IRIS_KashFlow.jpeg",
    a2x: "/images/logooUK/a3ex.jpeg",
    shopify: "/images/logooUK/Shopify.jpeg",
    amazon: "/images/logooUK/amazon.webp",
    ebay: "/images/logooUK/ebay.jpeg",
    etsy: "/images/logooUK/esty.jpeg",
    woocommerce: "/images/logooUK/WooCommerce.jpeg",
    stripe: "/images/logooUK/Stripe.png",
    paypal: "/images/logooUK/PayPal_Icon.jpeg",
    wise: "/images/logooUK/Wise_Icon.png",
    gocardless: "/images/logooUK/GoCardless.png",
    accountsiq: "/images/logooUK/Aiq.jpeg",
    fathom: "/images/logooUK/Fathom.png",
    "spotlight reporting": "/images/logooUK/Spotlight.jpeg",
    float: "/images/logooUK/Float.png",
    futrli: "/images/logooUK/Futrli.png",
    "microsoft excel": "/images/logooUK/Microsoft_Excel_id.png",
    "google sheets": "/images/logooUK/Google_Sheets.jpeg",
    "microsoft 365": "/images/logooUK/Microsoft_Icon.jpeg",
    "microsoft teams": "/images/logooUK/Microsoft_Icon.jpeg",
    teams: "/images/logooUK/Microsoft_Icon.jpeg",
    "google workspace": "/images/logooUK/Google_Sheets.jpeg",
    sharepoint: "/images/logooUK/Microsoft_Icon.jpeg",
    "inform direct": "/images/logooUK/Inform_Direct/Inform_Direct.jpeg",
    "companies house webfiling": "/images/logooUK/Companies.jpeg",
    "virtual cabinet": "/images/logooUK/Virtual_Cabinet.png",
    autoentry: "/images/logooUK/AutoEntry.jpeg",
    "auto entry": "/images/logooUK/AutoEntry.jpeg",
    iplicit: "/images/logooUK/iplicit.png",
    "syft analytics": "/images/logooUK/SyftAnalytics.png",
    "power bi": "/images/logooUK/Powerlogo.png",
    "google looker studio": "/images/logooUK/Google_Looker.png",
    "zoho books": "/images/logooUK/SVG_Brand_zoho_corporation.webp",
    zoho: "/images/logooUK/SVG_Brand_zoho_corporation.webp",
    "zoho people": "/images/logooUK/SVG_Brand_zoho_corporation.webp",
    "zoho payroll": "/images/logooUK/SVG_Brand_zoho_corporation.webp",
    "zoho prime": "/images/logooUK/SVG_Brand_zoho_corporation.webp",
    freshbooks: "/images/logooUK/freshbooks.png",
    "wave accounting": "/images/logooUK/Wave_id.jpeg",
    wave: "/images/logooUK/Wave_id.jpeg",
    gusto: "/images/logooUK/Gusto.png",
    taxcalc: "/images/Logo/TaxCalc/TaxCalc_Logo_6.svg",
    "intuit proconnect": "/images/Logo/Intuit_TurboTax/Intuit_TurboTax_idDvGjEKNo_3.svg",
    proconnect: "/images/Logo/Intuit_TurboTax/Intuit_TurboTax_idDvGjEKNo_3.svg",
    "wolters kluwer": "/images/logooUK/wolters.png",
    "wolter kluwer": "/images/logooUK/wolters.png",
};

const CATEGORY_ICONS = {
    user: User,
    document: FileText,
    file: FileText,
    tag: Tag,
    bag: ShoppingBag,
    shopping: ShoppingBag,
    shield: ShieldCheck,
    payment: CreditCard,
    card: CreditCard,
    chart: BarChart3,
    briefcase: Briefcase,
};

const MAX_LOGOS_PER_ROW = 7;
const LOGO_GAP = "1.75rem"; // same gap between every logo

/**
 * Example / default logodata shape:
 *
 * [
 *   { heading: "ACCOUNTING", icon: "user", logos: ["xero", "quickbooks", ...] },
 *   { heading: "DOCUMENTS", icon: "document", logos: { dext: "/images/...", ... } },
 * ]
 */
export const DEFAULT_TECH_CATEGORIES = [
    {
        heading: "ACCOUNTING",
        icon: "user",
        logos: ["xero", "quickbooks", "sage", "freeagent", "capium"],
    },
    {
        heading: "DOCUMENTS",
        icon: "document",
        logos: ["dext", "hubdoc", "autoentry", "approvalmax"],
    },
    {
        heading: "ECOMMERCE",
        icon: "tag",
        logos: ["a2x", "shopify", "amazon", "ebay", "etsy", "woocommerce"],
    },
    {
        heading: "PAYMENTS",
        icon: "shield",
        logos: ["stripe", "paypal", "gocardless", "wise"],
    },
];

/**
 * Normalise logos into [{ name, src }]
 * Accepts:
 *  - object map: { xero: "/path.png", quickbooks: "/path.png" }
 *  - string keys: ["xero", "quickbooks"]  (resolved via LOGO_MAP)
 *  - array of { name, src }
 */
function normalizeLogos(logos, logoMap) {
    if (!logos) return [];

    if (Array.isArray(logos)) {
        return logos
            .map((item) => {
                if (typeof item === "string") {
                    const key = item.toLowerCase().trim();
                    const src = logoMap[key];
                    if (!src) return null;
                    return { name: item, src };
                }
                if (item && typeof item === "object" && item.src) {
                    return {
                        name: item.name || "Logo",
                        src: item.src,
                    };
                }
                return null;
            })
            .filter(Boolean);
    }

    if (typeof logos === "object") {
        return Object.entries(logos)
            .map(([name, src]) => {
                if (!src || typeof src !== "string") return null;
                // Allow LOGO_MAP key as value too
                const resolved =
                    src.startsWith("/") || src.startsWith("http")
                        ? src
                        : logoMap[src.toLowerCase().trim()];
                if (!resolved) return null;
                return { name, src: resolved };
            })
            .filter(Boolean);
    }

    return [];
}

/** Split into chunks of max 7 so each line has equal gaps */
function chunkLogos(items, size = MAX_LOGOS_PER_ROW) {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
        chunks.push(items.slice(i, i + size));
    }
    return chunks;
}

function formatLogoLabel(name) {
    return String(name)
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

function CategoryIcon({ icon, className = "h-4 w-4" }) {
    if (React.isValidElement(icon)) return icon;

    if (typeof icon === "string") {
        const IconCmp = CATEGORY_ICONS[icon.toLowerCase()] || User;
        return <IconCmp className={className} strokeWidth={1.75} />;
    }

    if (typeof icon === "function") {
        const IconCmp = icon;
        return <IconCmp className={className} strokeWidth={1.75} />;
    }

    return <User className={className} strokeWidth={1.75} />;
}

function LogoItem({ name, src }) {
    return (
        <div
            className="relative h-9 w-[88px] shrink-0 sm:h-10 sm:w-[100px]"
            title={formatLogoLabel(name)}
        >
            <Image
                src={src}
                alt={formatLogoLabel(name)}
                fill
                sizes="100px"
                className="object-contain"
            />
        </div>
    );
}

function CategoryRow({
    heading,
    icon,
    logos,
    logoMap,
    isLast,
    categoryIconClassName = "h-4 w-4",
    categoryIconColorClass = "text-slate-500",
}) {
    const items = normalizeLogos(logos, logoMap);
    const lines = chunkLogos(items, MAX_LOGOS_PER_ROW);

    return (
        <div
            className={`flex flex-col gap-4 py-4 sm:flex-row sm:items-start sm:gap-8 sm:py-5 ${
                !isLast ? "border-b border-slate-200" : ""
            }`}
        >
            {/* Left: category label */}
            <div className="flex w-full shrink-0 items-center gap-2.5 sm:w-[180px] sm:pt-1.5 md:w-[200px]">
                <span
                    className={`flex shrink-0 items-center justify-center ${categoryIconColorClass}`}
                >
                    <CategoryIcon icon={icon} className={categoryIconClassName} />
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-800 sm:text-[13px]">
                    {heading}
                </span>
            </div>

            {/* Right: logos — left-aligned, tight packing */}
            <div className="flex min-w-0 flex-1 flex-col" style={{ gap: LOGO_GAP }}>
                {lines.map((line, lineIndex) => (
                    <div
                        key={lineIndex}
                        className="flex flex-wrap items-center"
                        style={{ gap: LOGO_GAP }}
                    >
                        {line.map((logo) => (
                            <LogoItem
                                key={`${logo.name}-${logo.src}`}
                                name={logo.name}
                                src={logo.src}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * IconDisplayScreen — reusable Technology Stack
 *
 * @example
 * import IconDisplayScreen, { DEFAULT_TECH_CATEGORIES, LOGO_MAP } from "...";
 *
 * const logodata = [
 *   {
 *     heading: "ACCOUNTING",
 *     icon: "user",
 *     logos: ["xero", "quickbooks", "sage", "freeagent", "capium"],
 *   },
 *   {
 *     heading: "DOCUMENTS",
 *     icon: "document",
 *     logos: {
 *       dext: "/images/logooUK/dext.png",
 *       hubdoc: "/images/logooUK/hubdoc.png",
 *     },
 *   },
 * ];
 *
 * <IconDisplayScreen logodata={logodata} />
 */
export default function IconDisplayScreen({
    logodata,
    title = "Technology Stack",
    subtitle = "We integrate seamlessly with the accounting software and business platforms your clients already use.",
    logoMap = LOGO_MAP,
    className = "",
    /** e.g. "h-8 w-8" (2× default h-4 w-4) */
    categoryIconClassName = "h-4 w-4",
    /** e.g. "text-[#FF6A00]" */
    categoryIconColorClass = "text-slate-500",
    // legacy alias
    categories,
}) {
    const rows = Array.isArray(logodata)
        ? logodata
        : Array.isArray(categories)
          ? categories
          : DEFAULT_TECH_CATEGORIES;

    return (
        <section
            className={`w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 ${className}`}
        >
            <div className="mx-auto w-full max-w-5xl">
                <div className="mb-5 text-center sm:mb-6">
                    <h2 className="text-[24px] font-extrabold tracking-tight text-slate-900 sm:text-[28px] lg:text-[30px]">
                        {title}
                    </h2>
                    {subtitle ? (
                        <p className="mx-auto mt-2 max-w-2xl text-[13px] leading-relaxed text-slate-500 sm:text-[14px]">
                            {subtitle}
                        </p>
                    ) : null}
                </div>

                <div className="w-full">
                    {rows.map((row, index) => (
                        <CategoryRow
                            key={row.heading || index}
                            heading={row.heading || row.title || `Category ${index + 1}`}
                            icon={row.icon || row.categoryIcon || "user"}
                            logos={row.logos || row.icons || row.images}
                            logoMap={logoMap}
                            isLast={index === rows.length - 1}
                            categoryIconClassName={categoryIconClassName}
                            categoryIconColorClass={categoryIconColorClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
