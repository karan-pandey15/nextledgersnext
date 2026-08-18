import {
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
} from "lucide-react";

const ICON_BASE = "/images/icon/For%20Service%20Page";

const TRUST_IMAGES = {
    hmrc: `${ICON_BASE}/${encodeURIComponent("HMRC.png")}`,
    iso: `${ICON_BASE}/ISO.png`,
    gdpr: `${ICON_BASE}/GDPR.png`,
    timezone: `${ICON_BASE}/${encodeURIComponent("Time Zpne- C.png")}`,
    years: `${ICON_BASE}/${encodeURIComponent("9+ yrs.png")}`,
    dedicated: `${ICON_BASE}/${encodeURIComponent("Dedicated Account manager.png")}`,
};

function resolveTrustImage({ label = "", sub = "" } = {}) {
    const text = `${label} ${sub}`.toLowerCase();

    if (text.includes("iso")) return TRUST_IMAGES.iso;
    if (text.includes("9+") || text.includes("year")) return TRUST_IMAGES.years;
    if (
        text.includes("account manager") ||
        text.includes("dedicated") ||
        text.includes("tax team")
    ) {
        return TRUST_IMAGES.dedicated;
    }
    if (text.includes("time zone") || text.includes("overlap")) {
        return TRUST_IMAGES.timezone;
    }
    if (
        text.includes("gdpr") ||
        text.includes("ccpa") ||
        text.includes("pipeda") ||
        text.includes("pdpa") ||
        text.includes("privacy") ||
        text.includes("secure") ||
        text.includes("confidential") ||
        text.includes("data protected")
    ) {
        return TRUST_IMAGES.gdpr;
    }

    return TRUST_IMAGES.hmrc;
}

export const DEFAULT_TRUST_BADGES = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const USA_TRUST_BADGES = [
    { icon: ShieldCheck, label: "IRS", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "CCPA", sub: "Compliant" },
    { icon: Clock, label: "US Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const CANADA_TRUST_BADGES = [
    { icon: ShieldCheck, label: "CRA", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "PIPEDA", sub: "Compliant" },
    { icon: Clock, label: "CA Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const SINGAPORE_TRUST_BADGES = [
    { icon: ShieldCheck, label: "IRAS", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "PDPA", sub: "Compliant" },
    { icon: Clock, label: "SG Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const IRELAND_TRUST_BADGES = [
    { icon: ShieldCheck, label: "Revenue", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "IE Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const NEW_ZEALAND_TRUST_BADGES = [
    { icon: ShieldCheck, label: "IRD", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Privacy Act", sub: "Compliant" },
    { icon: Clock, label: "NZ Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const AUSTRALIA_TRUST_BADGES = [
    { icon: ShieldCheck, label: "ATO", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Privacy Act", sub: "Compliant" },
    { icon: Clock, label: "AU Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const NETHERLANDS_TRUST_BADGES = [
    { icon: ShieldCheck, label: "Belastingdienst", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "NL Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

export const UAE_TRUST_BADGES = [
    { icon: ShieldCheck, label: "FTA", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "Data Protected", sub: "Compliant" },
    { icon: Clock, label: "UAE Time Zone", sub: "Overlap" },
    { icon: Award, label: "9+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

/**
 * Responsive trust badges bar used in regional service heroes.
 * Phone: 2 cols · Tablet: 3 cols · Desktop: 6 cols — equal gaps & aligned rows.
 */
export default function TrustBadgesBar({ badges = DEFAULT_TRUST_BADGES, className = "" }) {
    return (
        <div
            className={`mt-6 w-full rounded-xl border border-slate-200/80 bg-white/90 px-3 py-3.5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:px-4 sm:py-4 lg:px-2 lg:py-3 ${className}`}
        >
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-6 lg:gap-0">
                {badges.map(({ label, sub }, i) => (
                    <div
                        key={`${label}-${i}`}
                        className={`flex min-h-[48px] items-center gap-2.5 rounded-lg px-2 py-1.5 sm:min-h-[52px] sm:gap-2.5 sm:px-2.5 lg:min-h-0 lg:justify-center lg:rounded-none lg:px-2 lg:py-0 ${
                            i < badges.length - 1
                                ? "lg:border-r lg:border-slate-200"
                                : ""
                        }`}
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FFF7F0] sm:h-9 sm:w-9">
                            <img
                                src={resolveTrustImage({ label, sub })}
                                alt=""
                                className="h-full w-full object-cover scale-[1.04]"
                            />
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
