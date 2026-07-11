import Link from "next/link";
import { Calendar, Play, Phone } from "lucide-react";
import TrustBadgesBar from "./TrustBadgesBar";

/**
 * ServiceHomePage — reusable UK hero.
 * Defaults are UK hub copy (all services). Pass props to customise per page.
 */

export default function ServiceHomePage({
    badge = "UK Accounting Outsourcing Partner",
    titleBefore = "Helping UK Accounting Firms",
    titleAccent = "Scale with Confidence",
    titleAfter = "",
    subtitle = "Dedicated offshore support across bookkeeping, VAT, payroll, tax, management reporting, advisory & company secretarial.",
    subtitleSecond,
    primaryHref = "/contact",
    secondaryHref = "#services",
    primaryLabel = "Book a Discovery Call",
    secondaryLabel = "Explore Our Services",
}) {
    const isCallLink = String(secondaryHref).startsWith("tel:");

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#25404B] via-[#537E91] to-[#537E91] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.45]"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                }}
            />
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#F58220]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />
            <div className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-white/50 blur-2xl" />

            <div className="relative mx-auto flex w-full max-w-5xl flex-col justify-center">
                <div className="flex flex-col items-center px-2 text-center">
                    <span className="mb-3 inline-flex max-w-[95%] items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                        {badge}
                    </span>

                    <h1 className="max-w-[300px] text-[22px] font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                        {titleBefore}{" "}
                        <span className="text-[#F58220]">{titleAccent}</span>
                        {titleAfter ? ` ${titleAfter}` : ""}
                    </h1>

                    <p className="mt-2.5 max-w-[320px] text-[12.5px] leading-relaxed text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                        {subtitle}
                    </p>
                    {subtitleSecond ? (
                        <p className="mt-1.5 max-w-[320px] text-[12.5px] leading-relaxed text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            {subtitleSecond}
                        </p>
                    ) : null}

                    <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                    <div className="flex w-full max-w-[280px] flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
                        <Link
                            href={primaryHref}
                            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:whitespace-nowrap sm:py-2"
                        >
                            <Calendar className="h-3.5 w-3.5 shrink-0" />
                            {primaryLabel}
                        </Link>
                        <a
                            href={secondaryHref}
                            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:whitespace-nowrap sm:py-2"
                        >
                            {isCallLink ? (
                                <Phone className="h-3.5 w-3.5 shrink-0" />
                            ) : (
                                <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                            )}
                            {secondaryLabel}
                        </a>
                    </div>
                </div>

                <TrustBadgesBar />
            </div>
        </section>
    );
}
