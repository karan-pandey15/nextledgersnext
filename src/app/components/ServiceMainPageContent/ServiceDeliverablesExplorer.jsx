"use client";

import { useState } from "react";
import { Check, ChevronRight, MousePointerClick, Pencil } from "lucide-react";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

/**
 * Interactive service deliverables — side nav (desktop) + chips (mobile).
 * Pass services: [{ id?, title, icon, items: string[] }]
 */
export default function ServiceDeliverablesExplorer({
    eyebrow = "Full Services Deliverables",
    titleBefore = "Our ",
    titleAccent = "Services",
    titleAfter = " Include",
    subtitle = "",
    services = [],
    className = "",
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = services[activeIndex] || services[0];
    const ActiveIcon = active?.icon;

    if (!services.length) return null;

    return (
        <section
            className={`relative w-full overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 ${className}`}
            style={{ background: PAGE_CREAM }}
        >
            <div className="relative mx-auto w-full max-w-6xl">
                <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
                    <span
                        className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3.5 py-[5px] text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-sm"
                        style={{ background: ORANGE }}
                    >
                        <Pencil className="h-3 w-3" strokeWidth={2.5} />
                        {eyebrow}
                    </span>

                    <h2
                        className="max-w-3xl text-[22px] font-extrabold leading-tight sm:text-[26px] lg:text-[30px]"
                        style={{ color: NAVY }}
                    >
                        {titleBefore}
                        <span style={{ color: ORANGE }}>{titleAccent}</span>
                        {titleAfter}
                    </h2>

                    {subtitle ? (
                        <p
                            className="mt-2.5 max-w-xl text-[12.5px] leading-relaxed sm:text-[13.5px]"
                            style={{ color: GREY }}
                        >
                            {subtitle}
                        </p>
                    ) : null}

                    <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-[#FFD7B8] bg-white px-3.5 py-1.5 text-[11px] font-semibold text-[#FF6A00] shadow-sm sm:text-[12px]">
                        <MousePointerClick className="h-3.5 w-3.5 animate-pulse" strokeWidth={2.25} />
                        Click each service to explore what&apos;s included
                    </p>

                    <div
                        className="mx-auto mt-4 h-[3px] w-11 rounded-full"
                        style={{ background: ORANGE }}
                    />
                </div>

                {/* Mobile service chips */}
                <div className="mb-3 lg:hidden">
                    <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#FF6A00]">
                        <MousePointerClick className="h-3.5 w-3.5" strokeWidth={2.25} />
                        Swipe &amp; tap a service below
                    </p>
                    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={service.title}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-pressed={isActive}
                                    className={`inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-bold transition-all duration-200 ${
                                        isActive
                                            ? "border-[#FF6A00] bg-[#FF6A00] text-white shadow-[0_4px_14px_rgba(255,106,0,0.28)]"
                                            : "border-[#F0E6DC] bg-white text-[#0B1F3A] hover:border-[#FF6A00] hover:bg-[#FFF4EA] hover:text-[#FF6A00]"
                                    }`}
                                >
                                    {Icon ? (
                                        <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                                    ) : null}
                                    {service.shortTitle || service.title}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[280px_1fr] lg:gap-6 xl:grid-cols-[300px_1fr]">
                    {/* Desktop side nav */}
                    <nav
                        className="hidden overflow-hidden rounded-[18px] border border-[#F0E6DC] bg-white shadow-[0_4px_18px_rgba(15,23,42,0.04)] lg:block"
                        aria-label="Service lines — click to explore"
                    >
                        <div className="flex items-center justify-between gap-2 border-b border-[#F5EDE4] bg-gradient-to-r from-[#FFF4EA] to-white px-4 py-3">
                            <div className="flex items-center gap-2">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF6A00] text-white shadow-sm">
                                    <MousePointerClick className="h-3.5 w-3.5" strokeWidth={2.5} />
                                </span>
                                <div>
                                    <p className="text-[12px] font-extrabold text-[#0B1F3A]">
                                        Browse services
                                    </p>
                                    <p className="text-[10px] font-medium text-[#8A7A6A]">
                                        Click any item to view details
                                    </p>
                                </div>
                            </div>
                            <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[#FF6A00] ring-1 ring-[#FFD7B8]">
                                {activeIndex + 1}/{services.length}
                            </span>
                        </div>

                        <ul className="divide-y divide-[#F5EDE4]" role="tablist">
                            {services.map((service, index) => {
                                const Icon = service.icon;
                                const isActive = index === activeIndex;
                                return (
                                    <li key={service.title} role="presentation">
                                        <button
                                            type="button"
                                            role="tab"
                                            aria-selected={isActive}
                                            onClick={() => setActiveIndex(index)}
                                            className={`group relative flex w-full cursor-pointer items-center gap-3 px-4 py-3.5 text-left transition-all duration-200 ${
                                                isActive
                                                    ? "bg-[#FFF4EA]"
                                                    : "bg-white hover:bg-[#FFF9F5]"
                                            }`}
                                        >
                                            {isActive ? (
                                                <span
                                                    className="absolute inset-y-0 left-0 w-[3px] rounded-r-full bg-[#FF6A00]"
                                                    aria-hidden="true"
                                                />
                                            ) : null}

                                            <span
                                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                                                    isActive
                                                        ? "bg-[#FF6A00] text-white shadow-[0_4px_12px_rgba(255,106,0,0.35)]"
                                                        : "bg-[#FFF4EA] text-[#FF6A00] group-hover:scale-105 group-hover:bg-[#FF6A00] group-hover:text-white"
                                                }`}
                                            >
                                                {Icon ? (
                                                    <Icon
                                                        className="h-4 w-4"
                                                        strokeWidth={2.25}
                                                    />
                                                ) : null}
                                            </span>

                                            <span
                                                className={`min-w-0 flex-1 text-[13px] font-bold leading-snug transition-colors ${
                                                    isActive
                                                        ? "text-[#FF6A00]"
                                                        : "text-[#0B1F3A] group-hover:text-[#FF6A00]"
                                                }`}
                                            >
                                                {service.shortTitle || service.title}
                                            </span>

                                            <span
                                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                                                    isActive
                                                        ? "bg-[#FF6A00] text-white"
                                                        : "bg-[#FFF4EA] text-[#FF6A00] opacity-70 group-hover:opacity-100 group-hover:bg-[#FF6A00] group-hover:text-white group-hover:translate-x-0.5"
                                                }`}
                                                aria-hidden="true"
                                            >
                                                {isActive ? (
                                                    <Check className="h-3 w-3" strokeWidth={3} />
                                                ) : (
                                                    <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                                                )}
                                            </span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Active service panel */}
                    {active ? (
                        <div
                            className="rounded-[18px] border border-[#F0E6DC] bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)] sm:p-6 lg:p-7"
                            role="tabpanel"
                        >
                            <div className="mb-5 flex items-center gap-3 border-b border-[#F5EDE4] pb-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EA] text-[#FF6A00]">
                                    {ActiveIcon ? (
                                        <ActiveIcon className="h-5 w-5" strokeWidth={2} />
                                    ) : null}
                                </span>
                                <div className="flex min-h-11 min-w-0 flex-1 flex-col justify-center">
                                    <h3 className="text-[18px] font-extrabold leading-snug text-[#0B1F3A] sm:text-[20px]">
                                        {active.title}
                                    </h3>
                                    {active.intro ? (
                                        <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6B7280] sm:text-[13px]">
                                            {active.intro}
                                        </p>
                                    ) : null}
                                </div>
                            </div>

                            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                                {active.items.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2.5 rounded-full bg-[#FFF9F5] px-3.5 py-3"
                                    >
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6A00]">
                                            <Check
                                                className="h-3 w-3 text-white"
                                                strokeWidth={3}
                                            />
                                        </span>
                                        <span className="text-[13px] font-medium leading-snug text-[#0B1F3A]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    );
}
