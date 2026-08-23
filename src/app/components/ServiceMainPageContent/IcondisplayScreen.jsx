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
    freshbooks: "/images/logooUK/freshbook2.jfif",
    "wave accounting": "/images/logooUK/Wave_id.jpeg",
    wave: "/images/logooUK/Wave_id.jpeg",
    gusto: "/images/logooUK/Gusto.png",
    paycor: "/images/logooUK/paycor.jpeg",
    quickfile: "/images/logooUK/QuickFile.png",
    "quick file": "/images/logooUK/QuickFile.png",
    busy: "/images/logooUK/Busy.jpeg",
    "busy accounting": "/images/logooUK/Busy.jpeg",
    payworks: "/images/logooUK/Payworks.jpeg",
    adp: "/images/logooUK/ADP.jpeg",
    "thomson reuters": "/images/logooUK/Thomson_Reuters.jpeg",
    "thomson_reuters": "/images/logooUK/Thomson_Reuters.jpeg",
    onvio: "/images/logooUK/Thomson_Reuters.jpeg",
    checkpoint: "/images/logooUK/Thomson_Reuters.jpeg",
    taxcalc: "/images/Logo/TaxCalc/TaxCalc_Logo_6.svg",
    "intuit proconnect": "/images/Logo/Intuit_TurboTax/Intuit_TurboTax_idDvGjEKNo_3.svg",
    proconnect: "/images/Logo/Intuit_TurboTax/Intuit_TurboTax_idDvGjEKNo_3.svg",
    "wolters kluwer": "/images/logooUK/wolters.png",
    "wolter kluwer": "/images/logooUK/wolters.png",
    myob: "/images/logooUK/MYOB.jpeg",
    netsuite: "/images/logooUK/Aiq.jpeg",
    caseware: "/images/logooUK/Caseware.png",
    "cch engagement": "/images/logooUK/wolters.png",
    "employment hero": "/images/logooUK/Employmenthero.jpeg",
    "sage accounting": "/images/logooUK/Sage.jpg",
    "sage tax": "/images/logooUK/Sage.jpg",
    "sage vat": "/images/logooUK/Sage.jpg",
    "surf accounts": "/images/logooUK/Aiq.jpeg",
    "big red cloud": "/images/logooUK/Aiq.jpeg",
    "relate accounts": "/images/logooUK/wolters.png",
    "relate software": "/images/logooUK/wolters.png",
    "relate tax": "/images/logooUK/wolters.png",
    "relate accounts production": "/images/logooUK/wolters.png",
    "microsoft dynamics 365": "/images/logooUK/Microsoft_Icon.jpeg",
    "microsoft dynamics 365 business central": "/images/logooUK/Microsoft_Icon.jpeg",
    lightyear: "/images/logooUK/AutoEntry.jpeg",
    "dropbox business": "/images/logooUK/Microsoft_Icon.jpeg",
    "blueprint oneworld": "/images/logooUK/Inform_Direct/Inform_Direct.jpeg",
    laserfiche: "/images/logooUK/Virtual_Cabinet.png",
    calxa: "/images/logooUK/Float.png",
    ros: "/images/logooUK/Companies.jpeg",
    "revenue online service": "/images/logooUK/Companies.jpeg",
    "myob business": "/images/logooUK/MYOB.jpeg",
    "myob tax": "/images/logooUK/MYOB.jpeg",
    "myob payroll": "/images/logooUK/MYOB.jpeg",
    "myob accountright": "/images/logooUK/MYOB.jpeg",
    "myob ae ao tax": "/images/logooUK/MYOB.jpeg",
    "myob ae/ao tax": "/images/logooUK/MYOB.jpeg",
    reckon: "/images/logooUK/Reckon.png",
    "fyi docs": "/images/logooUK/Virtual_Cabinet.png",
    karbon: "/images/logooUK/Virtual_Cabinet.png",
    "aps tax": "/images/logooUK/wolters.png",
    aps: "/images/logooUK/wolters.png",
    "cch ifirm": "/images/logooUK/wolters.png",
    taxlab: "/images/logooUK/TaxCalc.jpeg",
    abss: "/images/logooUK/MYOB.jpeg",
    accountkit: "/images/logooUK/Aiq.jpeg",
    hnry: "/images/logooUK/Xero.png",
    "smartly payroll": "/images/logooUK/Employmenthero.jpeg",
    ipayroll: "/images/logooUK/Wagepoint.jpeg",
    payhero: "/images/logooUK/Employmenthero.jpeg",
    "crystal payroll": "/images/logooUK/brightpay.jpeg",
    figured: "/images/logooUK/Fathom.png",
    suitefiles: "/images/logooUK/Virtual_Cabinet.png",
    fuseworks: "/images/logooUK/Virtual_Cabinet.png",
    "reckon one": "/images/logooUK/Reckon.png",
    "reckon payroll": "/images/logooUK/Reckon.png",
    handitax: "/images/logooUK/TaxCalc.jpeg",
    "handi tax": "/images/logooUK/TaxCalc.jpeg",
    ezzybills: "/images/logooUK/AutoEntry.jpeg",
    keypay: "/images/logooUK/Employmenthero.jpeg",
    "wage easy": "/images/logooUK/Wagepoint.jpeg",
    wageeasy: "/images/logooUK/Wagepoint.jpeg",
    micropay: "/images/logooUK/Wagepoint.jpeg",
    "bgl simple fund": "/images/logooUK/wolters.png",
    "bgl 360": "/images/logooUK/wolters.png",
    "caseware working papers": "/images/logooUK/Caseware.png",
    "oracle netsuite": "/images/logooUK/Aiq.jpeg",
    docusign: "/images/logooUK/Microsoft_Icon.jpeg",
    "adobe acrobat": "/images/logooUK/Microsoft_Icon.jpeg",
    clickup: "/images/logooUK/Virtual_Cabinet.png",
    asana: "/images/logooUK/Virtual_Cabinet.png",
    trello: "/images/logooUK/Virtual_Cabinet.png",
    "monday.com": "/images/logooUK/Virtual_Cabinet.png",
    monday: "/images/logooUK/Virtual_Cabinet.png",
    bayzat: "/images/logooUK/Employmenthero.jpeg",
    greythr: "/images/logooUK/Employmenthero.jpeg",
    greytHR: "/images/logooUK/Employmenthero.jpeg",
    easyhr: "/images/logooUK/Wagepoint.jpeg",
    gulfhr: "/images/logooUK/Wagepoint.jpeg",
    "sap successfactors": "/images/logooUK/Employmenthero.jpeg",
    "oracle hcm": "/images/logooUK/Employmenthero.jpeg",
    draftworx: "/images/logooUK/Caseware.png",
    tallyprime: "/images/logooUK/Sage.jpg",
    tally: "/images/logooUK/Sage.jpg",
    // Netherlands / Dutch market software (aliases to closest existing brand assets)
    "exact online": "/images/logooUK/Xero.png",
    "exact online payroll": "/images/logooUK/Xero.png",
    "exact online btw module": "/images/logooUK/Xero.png",
    "afas software": "/images/logooUK/Sage.jpg",
    "afas payroll": "/images/logooUK/Sage.jpg",
    twinfield: "/images/logooUK/wolters.png",
    "wolters kluwer twinfield": "/images/logooUK/wolters.png",
    "twinfield reporting": "/images/logooUK/wolters.png",
    moneybird: "/images/logooUK/freshbooks.png",
    "visma eaccounting": "/images/logooUK/Sage.jpg",
    "visma youserve": "/images/logooUK/Employmenthero.jpeg",
    basecone: "/images/logooUK/AutoEntry.jpeg",
    nextens: "/images/logooUK/wolters.png",
    nmbrs: "/images/logooUK/Employmenthero.jpeg",
    "loket.nl": "/images/logooUK/Wagepoint.jpeg",
    loket: "/images/logooUK/Wagepoint.jpeg",
    "adp workforce now": "/images/logooUK/ADP.jpeg",
    "sd worx": "/images/logooUK/Employmenthero.jpeg",
    taxdome: "/images/logooUK/TaxDome.png",
    avalara: "/images/logooUK/Avalara.png",
    moorepay: "/images/logooUK/Moorepay.jpeg",
    "sage accounting": "/images/logooUK/Sage.jpg",
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
const LOGO_GAP = "1.25rem"; // keeps 7 logos on one row inside max-w-6xl

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

function LogoItem({ name, src, size = "default", onError }) {
    if (size === "carousel") {
        return (
            <Image
                src={src}
                alt={formatLogoLabel(name)}
                width={120}
                height={40}
                className="h-10 w-auto max-h-10 max-w-[100px] object-contain sm:h-11 sm:max-h-11 sm:max-w-[110px]"
                onError={onError}
            />
        );
    }

    return (
        <div
            className="relative h-8 w-[72px] shrink-0 sm:h-9 sm:w-[84px] lg:h-10 lg:w-[92px]"
            title={formatLogoLabel(name)}
        >
            <Image
                src={src}
                alt={formatLogoLabel(name)}
                fill
                sizes="92px"
                className="object-contain"
                onError={onError}
            />
        </div>
    );
}

/** One continuous infinite strip — no category sections, 20px between every logo */
function LogoCarousel({ logos, logoMap }) {
    const raw = normalizeLogos(logos, logoMap);
    const seen = new Set();
    const unique = raw.filter((item) => {
        if (!item?.src || seen.has(item.src)) return false;
        seen.add(item.src);
        return true;
    });

    const [hidden, setHidden] = React.useState(() => new Set());
    const items = unique.filter((item) => !hidden.has(item.src));
    if (!items.length) return null;

    // Repeat the full list enough times so the strip never looks "sectioned"
    const repeats = Math.max(2, Math.ceil(14 / items.length));
    const track = Array.from({ length: repeats }, () => items).flat();
    // Exact duplicate for seamless -50% loop (gap stays 20px across the join)
    const loop = [...track, ...track];

    const hideLogo = (src) => {
        setHidden((prev) => {
            if (prev.has(src)) return prev;
            const next = new Set(prev);
            next.add(src);
            return next;
        });
    };

    return (
        <div className="relative w-full overflow-hidden py-2">
            <style>{`
                @keyframes iconDisplayMarquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .icon-display-marquee {
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;
                    width: max-content;
                    gap: 30px;
                    animation: iconDisplayMarquee 28s linear infinite;
                }
                .icon-display-marquee:hover {
                    animation-play-state: paused;
                }
                .icon-display-marquee__slot {
                    flex: 0 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                }
                @media (min-width: 640px) {
                    .icon-display-marquee__slot {
                        height: 52px;
                    }
                }
            `}</style>

            <div
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-10"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-10"
                aria-hidden="true"
            />

            <div className="icon-display-marquee" aria-label="Software logos">
                {loop.map((logo, index) => (
                    <div
                        key={`${logo.src}-${index}`}
                        className="icon-display-marquee__slot"
                    >
                        <LogoItem
                            name={logo.name}
                            src={logo.src}
                            size="carousel"
                            onError={() => hideLogo(logo.src)}
                        />
                    </div>
                ))}
            </div>
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
            <div className="flex w-full shrink-0 items-center gap-2.5 sm:w-[160px] sm:pt-1.5 md:w-[180px]">
                <span
                    className={`flex shrink-0 items-center justify-center ${categoryIconColorClass}`}
                >
                    <CategoryIcon icon={icon} className={categoryIconClassName} />
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-800 sm:text-[13px]">
                    {heading}
                </span>
            </div>

            {/* Right: logos — always up to 7 on one row */}
            <div className="flex min-w-0 flex-1 flex-col" style={{ gap: LOGO_GAP }}>
                {lines.map((line, lineIndex) => (
                    <div
                        key={lineIndex}
                        className="flex flex-nowrap items-center overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
    /** Infinite carousel: flatten all logos, show ~6 at a time */
    carousel = false,
    // legacy alias
    categories,
}) {
    const rows = Array.isArray(logodata)
        ? logodata
        : Array.isArray(categories)
          ? categories
          : DEFAULT_TECH_CATEGORIES;

    // Carousel: ignore categories — one flat list of every logo
    const flatLogos = carousel
        ? rows.flatMap((row) => {
              const list = row?.logos || row?.icons || row?.images;
              if (!list) return [];
              if (Array.isArray(list)) return list;
              if (typeof list === "object") return Object.keys(list);
              return [];
          })
        : null;

    return (
        <section
            className={`w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 ${className}`}
        >
            <div
                className={`mx-auto ${
                    carousel ? "w-[80%]" : "w-full max-w-6xl"
                }`}
            >
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

                {carousel ? (
                    <LogoCarousel logos={flatLogos} logoMap={logoMap} />
                ) : (
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
                )}
            </div>
        </section>
    );
}
