import {
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
} from "lucide-react";

export const DEFAULT_TRUST_BADGES = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "10+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

/**
 * Responsive trust badges bar used in UK service heroes.
 * Phone: 2 cols · Tablet: 3 cols · Desktop: 6 cols — equal gaps & aligned rows.
 */
export default function TrustBadgesBar({ badges = DEFAULT_TRUST_BADGES, className = "" }) {
    return (
        <div
            className={`mt-6 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3 py-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:px-4 sm:py-4 lg:px-2 lg:py-3 ${className}`}
        >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-6 lg:gap-0">
                {badges.map(({ icon: Icon, label, sub }, i) => (
                    <div
                        key={`${label}-${i}`}
                        className={`flex min-h-[48px] items-center gap-2.5 rounded-lg px-2 py-1.5 sm:min-h-[52px] sm:gap-2.5 sm:px-2.5 lg:min-h-0 lg:justify-center lg:rounded-none lg:px-2 lg:py-0 ${
                            i < badges.length - 1
                                ? "lg:border-r lg:border-slate-200"
                                : ""
                        }`}
                    >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F58220]/40 bg-[#FFF7F0] text-[#F58220] sm:h-8 sm:w-8">
                            <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                        </span>
                        <span className="min-w-0 flex-1 text-left leading-tight lg:flex-none">
                            <span className="block truncate text-[11px] font-semibold text-slate-800 sm:text-[12px]">
                                {label}
                            </span>
                            <span className="block truncate text-[10px] text-slate-500 sm:text-[10.5px]">
                                {sub}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
