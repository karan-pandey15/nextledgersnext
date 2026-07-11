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
} from "lucide-react";

const bookkeepingColLeft = [
    "General Ledger Maintenance",
    "Customer & Supplier Ledger Management",
    "Journal Entries, Accruals & Prepayments",
    "Accounts Receivable Management",
    "Bank & Control Account Reconciliations",
    "Backlog Bookkeeping Clean-Up",
];

const bookkeepingColRight = [
    "Sales & Purchase Ledger Processing",
    "Fixed Asset Register Maintenance",
    "Multi-Currency Bookkeeping",
    "Accounts Payable Management",
    "Month-End Working Papers & Reporting",
    "Bookkeeping Review & Reporting Support",
];

const reconciliationColLeft = [
    "Bank Reconciliations",
    "Payroll Reconciliations",
    "VAT & CIS Reconciliations",
    "Factoring & Control Account Reconciliations",
];

const reconciliationColRight = [
    "Credit Card Reconciliations",
    "Inventory Reconciliations",
    "Intercompany Reconciliations",
];

const vatHighlights = [
    { icon: ShieldCheck, label: "100% HMRC Compliant" },
    { icon: Clock, label: "MTD Ready" },
    { icon: Settings, label: "Industry-Specific Expertise" },
    { icon: Users, label: "Experienced VAT Professionals" },
];

function CheckItem({ text }) {
    return (
        <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#F58220]">
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
            <span className="text-[12px] leading-[1.35] text-slate-700 sm:text-[12.5px]">
                {text}
            </span>
        </li>
    );
}

export default function BookkeepingReconcilation() {
    return (
        <section className="w-full bg-gradient-to-b from-orange-50 via-orange-50/40 to-white px-5 py-12 md:px-10 lg:px-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                {/* ---------- Header ---------- */}
                <div className="flex flex-col items-center text-center">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EA] px-3.5 py-1 text-[10px] font-extrabold tracking-wide text-[#F58220]">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-3 w-3"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m18 2 4 4-14 14-5 1 1-5Z" />
                        </svg>
                        FULL SERVICES DELIVERABLES
                    </span>

                    <h2 className="max-w-3xl text-[24px] font-extrabold leading-tight text-[#0F274A] sm:text-[28px] lg:text-[32px]">
                        Our <span className="text-[#F58220]">UK Bookkeeping &amp; Reconciliation</span>{" "}
                        Support
                    </h2>

                    <p className="mt-2.5 max-w-xl text-[12.5px] text-slate-500 sm:text-[13.5px]">
                        We process, manage, and reconcile every transaction, providing clean and
                        submission-ready accounts.
                    </p>
                </div>

                {/* ---------- Two Service Cards ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bookkeeping Card */}
                    <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] sm:p-6">
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#F58220]">
                                <ClipboardList className="h-4 w-4 text-white" strokeWidth={2} />
                            </span>
                            <h3 className="text-[14.5px] font-bold text-slate-900 sm:text-[15.5px]">
                                Our UK <span className="text-[#F58220]">Bookkeeping</span> Services Include
                            </h3>
                        </div>
                        <div className="mb-4 h-[3px] w-9 rounded-full bg-[#F58220]" />

                        <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                            <ul className="space-y-2.5">
                                {bookkeepingColLeft.map((item) => (
                                    <CheckItem key={item} text={item} />
                                ))}
                            </ul>
                            <ul className="space-y-2.5">
                                {bookkeepingColRight.map((item) => (
                                    <CheckItem key={item} text={item} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Reconciliation Card */}
                    <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] sm:p-6">
                        <div className="mb-3 flex items-center gap-2.5">
                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#F58220]">
                                <RefreshCw className="h-4 w-4 text-white" strokeWidth={2} />
                            </span>
                            <h3 className="text-[14.5px] font-bold text-slate-900 sm:text-[15.5px]">
                                Our <span className="text-[#F58220]">Reconciliation</span> Services Include
                            </h3>
                        </div>
                        <div className="mb-4 h-[3px] w-9 rounded-full bg-[#F58220]" />

                        <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                            <ul className="space-y-2.5">
                                {reconciliationColLeft.map((item) => (
                                    <CheckItem key={item} text={item} />
                                ))}
                            </ul>
                            <ul className="space-y-2.5">
                                {reconciliationColRight.map((item) => (
                                    <CheckItem key={item} text={item} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ---------- VAT Support Section ---------- */}
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 pt-8">
                    {/* Left text content */}
                    <div>
                        <span className="mb-2.5 inline-block rounded-full bg-orange-100 px-3.5 py-1 text-[9.5px] font-semibold tracking-wide text-orange-600">
                            MAKING TAX DIGITAL (MTD)
                        </span>

                        <h3 className="text-[19px] font-extrabold leading-tight text-slate-900 sm:text-[22px] lg:text-[24px]">
                            Specialist <span className="text-[#F58220]">VAT Support</span>
                            <br />
                            for UK Accounting Firms
                        </h3>

                        <div className="my-3 h-[3px] w-9 rounded-full bg-[#F58220]" />

                        <p className="mb-2.5 text-[12px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                            VAT remains one of the most technically demanding areas of UK compliance.
                            Different industries and transaction types often require specialised VAT
                            treatment and careful review.
                        </p>
                        <p className="mb-5 text-[12px] leading-relaxed text-slate-500 sm:text-[12.5px]">
                            Our experienced VAT team supports accounting firms with preparation,
                            reconciliation, and submission-ready VAT workings across multiple
                            industries and VAT schemes.
                        </p>

                        <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#F58220] px-5 py-2.5 text-[12.5px] font-semibold text-[#F58220] transition-colors hover:bg-[#F58220] hover:text-white">
                            <Send className="h-3.5 w-3.5" strokeWidth={2} />
                            Request a Proposal
                        </button>
                    </div>

                    {/* Right image with overlays */}
                    <div className="relative">
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black p-1.5">
                            <div className="relative h-full w-full overflow-hidden rounded-xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Accountant working on VAT reconciliation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Feature callouts with connector line */}
                        <div className="absolute left-3 top-1/2 flex w-[58%] -translate-y-1/2 items-stretch gap-2.5 sm:left-6">
                            <div className="relative flex flex-col items-center py-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                <span className="my-0.5 w-px flex-1 bg-white/40" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                <span className="my-0.5 w-px flex-1 bg-white/40" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                                <span className="my-0.5 w-px flex-1 bg-white/40" />
                                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between gap-2.5">
                                {vatHighlights.map(({ icon: Icon, label }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-2.5 rounded-xl bg-white/95 px-3 py-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                                    >
                                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-orange-50">
                                            <Icon className="h-3.5 w-3.5 text-[#F58220]" strokeWidth={2} />
                                        </span>
                                        <span className="text-[11px] font-semibold leading-[1.2] text-slate-900">
                                            {label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Circular badge */}
                        <div className="absolute -bottom-4 -right-4 flex h-20 w-20 items-center justify-center">
                            <svg viewBox="0 0 100 100" className="absolute h-full w-full">
                                <defs>
                                    <path
                                        id="badgeCircle"
                                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                                    />
                                </defs>
                                <circle cx="50" cy="50" r="46" className="fill-[#F58220]" />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    className="fill-none stroke-white/70"
                                    strokeWidth="1"
                                    strokeDasharray="1,3"
                                />
                                <text fontSize="7" fontWeight="700" fill="white" letterSpacing="1.3">
                                    <textPath href="#badgeCircle" startOffset="0%">
                                        ACCURATE &#8226; TIMELY &#8226; RELIABLE &#8226;
                                    </textPath>
                                </text>
                            </svg>
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
                                <CheckCircle2 className="h-4 w-4 text-[#F58220]" strokeWidth={2.5} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}