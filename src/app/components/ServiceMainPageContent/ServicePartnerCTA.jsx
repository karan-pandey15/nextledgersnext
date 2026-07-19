import {
    Handshake,
    Lock,
    Phone,
    Send,
    ShieldCheck,
    UserCheck,
    Users,
} from "lucide-react";
import CtaButton from "@/app/components/ui/CtaButton";

const trustItems = [
    { icon: ShieldCheck, label: "Review-Ready Processes" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by UK Accounting Firms" },
];

export default function ServicePartnerCTA({
    eyebrow,
    titleBefore,
    titleAccent,
    titleAfter,
    description,
    callout,
}) {
    return (
        <section className="relative w-full bg-white px-4 py-3 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[24px] bg-[#FFF9F5] px-5 py-10 text-center sm:px-10 sm:py-12 lg:px-14">
                <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#FF6A00]/10" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF6A00]/10" />

                <div className="relative z-10">
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EA] px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-[#FF6A00]">
                        <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                        {eyebrow}
                    </span>

                    <h2 className="text-[24px] font-extrabold leading-tight text-[#0B1F3A] sm:text-[30px] lg:text-[34px]">
                        {titleBefore}{" "}
                        <span className="text-[#FF6A00]">{titleAccent}</span>{" "}
                        {titleAfter}
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-[#6B7280] sm:text-[14.5px]">
                        {description}
                    </p>

                    <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl border border-[#F0E0D2] bg-white px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                            <UserCheck className="h-7 w-7" strokeWidth={1.8} />
                        </span>
                        <p className="pt-0.5 text-[12.5px] leading-relaxed text-[#6B7280] sm:text-[13.5px]">
                            {callout}
                        </p>
                    </div>

                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                        <CtaButton href="/contact" variant="primary" size="lg">
                            <Phone className="h-4 w-4" strokeWidth={2.25} />
                            Book a Discovery Call
                        </CtaButton>
                        <CtaButton href="/contact" variant="secondary" size="lg">
                            <Send className="h-4 w-4" strokeWidth={2.25} />
                            Request a Proposal
                        </CtaButton>
                    </div>

                    <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 border-t border-[#F0E0D2] pt-6 sm:flex-row sm:gap-8">
                        {trustItems.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-[#8B7355]">
                                <Icon className="h-4 w-4" strokeWidth={2} />
                                <span className="text-[12px] font-semibold sm:text-[12.5px]">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
