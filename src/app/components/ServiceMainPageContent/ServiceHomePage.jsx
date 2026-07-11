import {
    Calendar,
    Play,
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
} from "lucide-react";

/**
 * ServiceHomePage
 * -----------------------------------------------------------------------
 * Compact, fully responsive hero for UK Bookkeeping & VAT outsourcing.
 * Light grey palette — no software ribbon; AI dock sits over this section.
 * -----------------------------------------------------------------------
 */

const trustBadges = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "10+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export default function ServiceHomePage() {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#25404B] via-[#537E91] to-[#537E91] py-8 px-4 sm:px-6 lg:px-8 sm:py-10">
            {/* Soft atmosphere — grey mesh + warm brand glow */}
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
                {/* ---------------- Hero content ---------------- */}
                <div className="flex flex-col items-center px-2 text-center">
                    <span className="mb-3 inline-flex items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                        Outsource UK Bookkeeping &amp; VAT
                    </span>

                    <h1 className="max-w-[280px] text-2xl font-extrabold leading-snug text-[#1E293B] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                        Helping UK Businesses Stay
                        <br />
                        <span className="text-[#F58220]">Compliant &amp; Grow</span>{" "}
                        <span className="text-[#1E293B]">with Confidence.</span>
                    </h1>

                    <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                        Accurate Bookkeeping. Better Decisions. Stronger Business Growth.
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        Streamline day-to-day transaction processing with strict HMRC
                        compliance.
                    </p>

                    <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                    <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 xs:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                        <button className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:py-2 sm:whitespace-nowrap">
                            <Calendar className="h-3.5 w-3.5 shrink-0" />
                            Book a Discovery Call
                        </button>
                        <button className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:py-2 sm:whitespace-nowrap">
                            <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                            How We Work
                        </button>
                    </div>
                </div>

                {/* ---------------- Trust badges bar ---------------- */}
                <div className="mt-6 rounded-xl border border-slate-200/80 bg-white/90 px-3 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:px-6 sm:py-3">
                    <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-y-3 lg:grid-cols-6 lg:divide-x lg:divide-slate-200">
                        {trustBadges.map(({ icon: Icon, label, sub }, i) => (
                            <div
                                key={label + i}
                                className="flex items-center justify-center gap-2 px-1 lg:px-3"
                            >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F58220]/40 bg-[#FFF7F0] text-[#F58220]">
                                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                                </span>
                                <span className="text-left leading-tight">
                                    <span className="block text-[11.5px] font-semibold text-slate-800 sm:text-[12px]">
                                        {label}
                                    </span>
                                    <span className="block text-[10px] text-slate-500 sm:text-[10.5px]">
                                        {sub}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
