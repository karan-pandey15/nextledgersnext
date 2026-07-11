"use client";

import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import {
    Calendar,
    Play,
    Shield,
    ShieldCheck,
    Lock,
    Clock,
    Award,
    UserCheck,
    Users,
    PuzzleIcon,
    Headset,
    Star,
    BookOpen,
    BadgeCheck,
    ClipboardCheck,
    LockKeyhole,
    Network,
    TrendingUp,
    Handshake,
    Phone,
    Send,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IconDisplayScreen from "@/app/components/ServiceMainPageContent/IcondisplayScreen";
import BookKeepingMatters from "@/app/components/ServiceMainPageContent/BookkeepingMatters";
import BookkeepingReconcilation from "@/app/components/ServiceMainPageContent/Bookkeepingreconcilation";
import BookKeepingCompliance from "@/app/components/ServiceMainPageContent/Bookkeepingcompliance";
import Footer from "@/app/components/footer/Footer";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const trustBadges = [
    { icon: ShieldCheck, label: "HMRC", sub: "Compliant" },
    { icon: Shield, label: "ISO 27001", sub: "Certified" },
    { icon: Lock, label: "GDPR", sub: "Compliant" },
    { icon: Clock, label: "UK Time Zone", sub: "Overlap" },
    { icon: Award, label: "10+ Years", sub: "Experience" },
    { icon: UserCheck, label: "Dedicated", sub: "Account Manager" },
];

const softwareExpertiseLogodata = [
    {
        heading: "ACCOUNTING SOFTWARE",
        icon: "user",
        logos: [
            "xero",
            "quickbooks online",
            "sage business cloud",
            "freeagent",
            "capium",
            "kashflow",
        ],
    },
    {
        heading: "DOCUMENT PROCESSING TOOLS",
        icon: "document",
        logos: ["dext", "hubdoc", "autoentry", "approvalmax"],
    },
    {
        heading: "ECOMMERCE INTEGRATIONS",
        icon: "tag",
        logos: ["a2x", "shopify", "amazon", "ebay", "etsy", "woocommerce"],
    },
    {
        heading: "PAYMENT PLATFORMS",
        icon: "shield",
        logos: ["stripe", "paypal", "wise", "gocardless"],
    },
];

const whyChooseCards = [
    {
        title: "ACCA-Led Team with UK Accounting Expertise",
        icon: UserCheck,
    },
    {
        title: "Dedicated Offshore Bookkeeping & VAT Specialists",
        icon: BookOpen,
    },
    {
        title: "White-Label Service Delivery",
        icon: BadgeCheck,
    },
    {
        title: "Structured Review Processes",
        icon: ClipboardCheck,
    },
    {
        title: "Secure Data Handling",
        icon: LockKeyhole,
    },
    {
        title: "Flexible Engagement Models",
        icon: Network,
    },
    {
        title: "Scalable Support Without Increasing Overheads",
        icon: TrendingUp,
    },
];

const partnerTrust = [
    { icon: ShieldCheck, label: "100% HMRC Compliant" },
    { icon: Lock, label: "Secure & Confidential" },
    { icon: Users, label: "Trusted by UK Accounting Firms" },
];

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center gap-1.5 text-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F58220]/10 text-[#F58220] sm:h-10 sm:w-10">
                {icon}
            </div>
            <div className="text-[15px] font-extrabold leading-none text-[#0B1F3A] sm:text-[17px]">
                {value}
            </div>
            <div className="max-w-[90px] text-[10px] leading-tight text-gray-500 sm:text-[11px]">
                {label}
            </div>
        </div>
    );
}

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
                        opacity: 0.45,
                    }}
                />
            ))}
        </div>
    );
}

export default function UkBookkeeping() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
            <TopAnnouncementBar />
            <UKNavbar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* 1 — Hero */}
            <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#25404B] via-[#537E91] to-[#537E91] px-4 pb-2 pt-8 sm:px-6 sm:pb-2 sm:pt-10 lg:px-8">
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
                        <span className="mb-3 inline-flex items-center rounded-full border border-[#F58220]/25 bg-white px-3 py-1 text-center text-[10px] font-bold uppercase tracking-wide text-[#F58220] shadow-sm sm:px-4 sm:text-[11px]">
                            Outsource UK Bookkeeping &amp; VAT
                        </span>

                        <h1 className="max-w-[300px] text-2xl font-extrabold leading-snug text-[#0B1F3A] sm:max-w-2xl sm:text-3xl lg:text-[34px]">
                            UK Bookkeeping &amp;{" "}
                            <span className="text-[#F58220]">VAT Outsourcing</span>{" "}
                            Services
                        </h1>

                        <p className="mt-2 max-w-xs text-[12.5px] leading-snug text-slate-600 sm:max-w-xl sm:text-[13px] md:text-sm">
                            Accurate Bookkeeping. Better Decisions. Stronger Business
                            Growth.
                            <br className="hidden sm:block" />
                            Streamline day-to-day transaction processing with strict HMRC
                            compliance.
                        </p>

                        <div className="my-3 h-[3px] w-10 rounded-full bg-[#F58220]" />

                        <div className="flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#F58220] px-4 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-orange-500/25 transition-colors hover:bg-[#e2761b] sm:whitespace-nowrap sm:py-2"
                            >
                                <Calendar className="h-3.5 w-3.5 shrink-0" />
                                Book a Discovery Call
                            </Link>
                            <a
                                href="#how-we-work"
                                className="inline-flex items-center justify-center gap-1.5 rounded-md border border-slate-300 bg-white/80 px-4 py-2.5 text-[13px] font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:whitespace-nowrap sm:py-2"
                            >
                                <Play className="h-3 w-3 shrink-0 fill-slate-700" />
                                How We Work
                            </a>
                        </div>
                    </div>

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

            {/* 2 — Reliable Bookkeeping Support intro */}
            <section id="how-we-work" className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 sm:py-2.5 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
                        <div>
                            <span className="mb-3 inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#F58220]">
                                Outsourcing Partnership
                            </span>

                            <h2 className="mb-3 text-[28px] font-extrabold leading-[1.15] text-[#0B1F3A] sm:text-[30px] lg:text-[30px]">
                                Reliable Bookkeeping Support for Growing Practices
                            </h2>

                            <div className="mb-5 h-[3px] w-14 rounded-full bg-[#F58220]" />

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                As accounting firms continue to grow, bookkeeping and VAT
                                compliance often become some of the most time-consuming
                                services to manage. Maintaining accurate financial records,
                                reconciling accounts, processing invoices, and ensuring VAT
                                compliance requires significant time, consistency, and
                                attention to detail.
                            </p>

                            <p className="mb-3 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                At NextLedgers, we act as an extension of your accounting
                                practice, providing reliable offshore bookkeeping and VAT
                                support that helps your firm increase capacity, improve
                                turnaround times, and reduce operational pressure.
                            </p>

                            <p className="mb-5 text-[13px] leading-relaxed text-gray-500 sm:text-[15px]">
                                Whether you require ongoing bookkeeping support, month-end
                                processing, backlog clean-up, or dedicated offshore
                                resources, our team integrates seamlessly into your existing
                                workflow.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#F58220] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e2761b]"
                            >
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </Link>
                        </div>

                        <div className="relative pb-10 sm:pb-12">
                            <div className="overflow-hidden rounded-2xl">
                                <Image
                                    src="/images/DSC09901.JPG"
                                    alt="Accounting team providing bookkeeping support"
                                    width={720}
                                    height={480}
                                    className="h-[260px] w-full object-cover sm:h-[320px] lg:h-[340px]"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-0 left-4 right-4 grid grid-cols-4 gap-2 rounded-xl bg-white px-3 py-4 shadow-lg sm:px-5 sm:py-5">
                                <Stat
                                    icon={<Users className="h-5 w-5" />}
                                    value="500+"
                                    label="UK Accounting Firms Supported"
                                />
                                <Stat
                                    icon={<PuzzleIcon className="h-5 w-5" />}
                                    value="30+"
                                    label="Software Integrations"
                                />
                                <Stat
                                    icon={<ShieldCheck className="h-5 w-5" />}
                                    value="100%"
                                    label="HMRC Compliant Processes"
                                />
                                <Stat
                                    icon={<Headset className="h-5 w-5" />}
                                    value="Dedicated"
                                    label="Offshore Support Team"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 — Why Accurate Bookkeeping Matters */}
            <BookKeepingMatters />

            {/* 4 — Bookkeeping & Reconciliation + Specialist VAT */}
            <BookkeepingReconcilation />

            {/* 5 — Why VAT Matters + VAT Services */}
            <BookKeepingCompliance />

            {/* 6 — Software Expertise */}
            <IconDisplayScreen
                title="Software Expertise"
                subtitle="We work across the accounting, document, eCommerce, and payment platforms your clients already use."
                logodata={softwareExpertiseLogodata}
                className="!py-2 sm:!py-2.5 lg:!py-2.5"
            />

            {/* 7 — Why Choose NextLedgers (7-card grid) */}
            <section
                className="relative w-full overflow-hidden bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-11"
            >
                <DotGrid className="pointer-events-none absolute right-4 top-6 sm:right-10 sm:top-8" />
                <DotGrid className="pointer-events-none absolute bottom-8 left-4 sm:bottom-10 sm:left-8" />

                <div className="relative mx-auto w-full max-w-6xl">
                    <div className="mb-7 flex flex-col items-center text-center sm:mb-8">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Star className="h-3 w-3" strokeWidth={2.5} fill={ORANGE} />
                            Partner Advantages
                        </span>

                        <h2
                            className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[28px]"
                            style={{ color: NAVY }}
                        >
                            Why Choose{" "}
                            <span style={{ color: ORANGE }}>NextLedgers</span> for{" "}
                            <span style={{ color: ORANGE }}>Bookkeeping &amp; VAT</span>?
                        </h2>

                        <p
                            className="mx-auto mt-2.5 max-w-xl text-[13px] leading-relaxed sm:text-[14px]"
                            style={{ color: GREY }}
                        >
                            Dedicated bookkeeping specialists who work as an extension of
                            your practice, ensuring total accuracy and HMRC compliance.
                        </p>

                        <div
                            className="mx-auto mt-3.5 h-[3px] w-11 rounded-full"
                            style={{ background: ORANGE }}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {whyChooseCards.slice(0, 4).map(({ title, icon: Icon }) => (
                            <div
                                key={title}
                                className="rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                            >
                                <span
                                    className="mb-3 flex h-9 w-9 items-center justify-center"
                                    style={{ color: ORANGE }}
                                >
                                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                                </span>
                                <h3
                                    className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                    style={{ color: NAVY }}
                                >
                                    {title}
                                </h3>
                                <div
                                    className="mt-3 h-[2px] w-8 rounded-full"
                                    style={{ background: ORANGE }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:justify-items-stretch lg:mt-5 lg:grid-cols-3 lg:mx-auto lg:max-w-[75%] lg:gap-5">
                        {whyChooseCards.slice(4).map(({ title, icon: Icon }) => (
                            <div
                                key={title}
                                className="rounded-[14px] border border-[#F0E6DC] bg-white px-5 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)]"
                            >
                                <span
                                    className="mb-3 flex h-9 w-9 items-center justify-center"
                                    style={{ color: ORANGE }}
                                >
                                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                                </span>
                                <h3
                                    className="text-[13.5px] font-bold leading-snug sm:text-[14px]"
                                    style={{ color: NAVY }}
                                >
                                    {title}
                                </h3>
                                <div
                                    className="mt-3 h-[2px] w-8 rounded-full"
                                    style={{ background: ORANGE }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8 — Partner CTA (cream mockup) */}
            <section className="relative w-full bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-2.5 lg:px-8">
                <div
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[22px] px-5 py-10 text-center sm:rounded-[28px] sm:px-10 sm:py-12 lg:px-14"
                    style={{ background: PAGE_CREAM }}
                >
                    <div
                        className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full opacity-40"
                        style={{ background: "rgba(245,130,32,0.18)" }}
                    />
                    <div
                        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30"
                        style={{ background: "rgba(245,130,32,0.15)" }}
                    />
                    <DotGrid className="pointer-events-none absolute bottom-6 right-6 opacity-70" />

                    <div className="relative z-10">
                        <span
                            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em]"
                            style={{ background: "#FFF4EA", color: ORANGE }}
                        >
                            <Handshake className="h-3.5 w-3.5" strokeWidth={2.25} />
                            Bookkeeping &amp; VAT Partner
                        </span>

                        <h2
                            className="text-[24px] font-extrabold leading-tight sm:text-[30px] lg:text-[34px]"
                            style={{ color: NAVY }}
                        >
                            Your Offshore{" "}
                            <span style={{ color: ORANGE }}>Bookkeeping &amp; VAT</span>{" "}
                            Partner
                        </h2>

                        <p
                            className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed sm:text-[14.5px]"
                            style={{ color: GREY }}
                        >
                            Reliable bookkeeping and VAT processes are essential for
                            accurate financial reporting and effective business management.
                            Our experienced professionals help accounting firms streamline
                            day-to-day financial processing while maintaining high standards
                            of accuracy and compliance.
                        </p>

                        <div className="mx-auto mt-6 flex max-w-3xl items-start gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-[0_6px_24px_rgba(15,23,42,0.06)] sm:gap-5 sm:px-6 sm:py-5">
                            <span
                                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                                style={{ background: "#FFF4EA", color: ORANGE }}
                            >
                                <UserCheck className="h-5 w-5" strokeWidth={2} />
                            </span>
                            <p
                                className="pt-0.5 text-[12.5px] leading-relaxed sm:text-[13.5px]"
                                style={{ color: GREY }}
                            >
                                Whether you need support with selected clients, month-end
                                bookkeeping, VAT preparation, backlog clean-up, or a
                                dedicated offshore team, NextLedgers can help your practice
                                scale efficiently while delivering consistent, high-quality
                                service.
                            </p>
                        </div>

                        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex h-11 min-w-[220px] items-center justify-center gap-2 rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-[#e2761b] sm:h-12 sm:text-[14px]"
                                style={{ background: ORANGE }}
                            >
                                <Phone className="h-4 w-4" strokeWidth={2.25} />
                                Book a Discovery Call
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-11 min-w-[220px] items-center justify-center gap-2 rounded-[10px] border-2 bg-white px-6 text-[13px] font-bold uppercase tracking-wide transition-colors hover:bg-[#FFF7F0] sm:h-12 sm:text-[14px]"
                                style={{ borderColor: ORANGE, color: ORANGE }}
                            >
                                <Send className="h-4 w-4" strokeWidth={2.25} />
                                Request a Proposal
                            </Link>
                        </div>

                        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-4 border-t border-[#F0E0D2] pt-6 sm:flex-row sm:gap-8">
                            {partnerTrust.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex items-center gap-2"
                                    style={{ color: "#8B7355" }}
                                >
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

            <Footer />
            <ArtificialIntelligence />
            <NexaLedAi />
        </main>
    );
}
