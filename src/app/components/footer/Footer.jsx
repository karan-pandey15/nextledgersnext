"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

// Paths for stylized world continents (semi-abstract tech style, scaled to 1000x500)
const CONTINENT_PATHS = {
    northAmerica: "M 80 80 L 110 50 L 180 50 L 220 30 L 260 30 L 280 60 L 300 70 L 310 90 L 300 110 L 280 130 L 290 150 L 260 180 L 230 180 L 200 230 L 190 270 L 180 270 L 175 250 L 180 220 L 170 190 L 160 190 L 140 160 L 110 160 L 90 130 L 80 100 Z",
    greenland: "M 310 30 L 350 20 L 380 40 L 350 70 L 320 60 Z",
    southAmerica: "M 230 280 L 250 280 L 280 300 L 295 330 L 280 400 L 260 460 L 250 480 L 245 480 L 240 450 L 235 410 L 220 350 L 210 300 Z",
    eurasia: "M 420 120 L 460 70 L 520 60 L 600 50 L 700 40 L 800 50 L 880 60 L 930 80 L 960 110 L 970 140 L 940 200 L 910 230 L 870 240 L 840 220 L 820 250 L 780 270 L 740 270 L 710 290 L 680 280 L 650 280 L 640 250 L 610 240 L 590 260 L 570 260 L 550 220 L 520 235 L 500 220 L 470 240 L 450 200 L 420 180 L 430 150 Z",
    africa: "M 450 220 L 510 215 L 560 230 L 590 275 L 585 330 L 555 390 L 530 430 L 515 440 L 510 400 L 490 350 L 460 300 L 440 260 Z",
    australia: "M 820 340 L 870 330 L 910 350 L 925 385 L 900 420 L 850 415 L 820 375 Z",
    newZealand: "M 935 430 L 945 425 L 955 450 L 940 465 Z",
    uk: "M 445 95 L 455 90 L 460 105 L 450 115 Z",
    ireland: "M 430 100 L 440 95 L 440 105 L 430 110 Z",
    japan: "M 945 125 L 955 120 L 965 140 L 950 160 Z",
    madagascar: "M 590 365 L 605 355 L 610 390 L 595 400 Z"
};

// Coordinates mapping on our SVG viewBox "0 0 1000 500"
const LOCATIONS = {
    india: { x: 640, y: 220, label: "India", flag: "🇮🇳", textX: 640, textY: 198, align: "middle" },
    uae: { x: 585, y: 215, label: "UAE", flag: "🇦🇪", textX: 585, textY: 235, align: "middle" },
    uk: { x: 450, y: 105, label: "UK", flag: "🇬🇧", textX: 450, textY: 88, align: "middle" },
    ireland: { x: 435, y: 102, label: "Ireland", flag: "🇮🇪", textX: 380, textY: 102, align: "end" },
    canada: { x: 235, y: 125, label: "Canada", flag: "🇨🇦", textX: 235, textY: 108, align: "middle" },
    usa: { x: 240, y: 155, label: "USA", flag: "🇺🇸", textX: 240, textY: 175, align: "middle" },
    australia: { x: 870, y: 380, label: "Australia", flag: "🇦🇺", textX: 870, textY: 362, align: "middle" },
    newZealand: { x: 945, y: 445, label: "New Zealand", flag: "🇳🇿", textX: 945, textY: 428, align: "middle" }
};

// Timeline order for flying lines sequentially from India
const TIMELINE = [
    { key: "uk", target: LOCATIONS.uk, color: "#60A5FA" }, // Blue
    { key: "usa", target: LOCATIONS.usa, color: "#FBBF24" }, // Yellow
    { key: "uae", target: LOCATIONS.uae, color: "#10B981" }, // Green
    { key: "canada", target: LOCATIONS.canada, color: "#F87171" }, // Red
    { key: "australia", target: LOCATIONS.australia, color: "#A78BFA" }, // Purple
    { key: "newZealand", target: LOCATIONS.newZealand, color: "#F472B6" }, // Pink
    { key: "ireland", target: LOCATIONS.ireland, color: "#34D399" } // Emerald
];

export default function Footer() {
    const [timelineStep, setTimelineStep] = useState(0);

    // Animate the line sequences sequentially
    useEffect(() => {
        const interval = setInterval(() => {
            setTimelineStep((prev) => {
                // Steps 0 to 6: Draw lines to UK, USA, UAE, Canada, Australia, New Zealand, Ireland
                // Steps 7 to 9: Hold all connections glowing to highlight global network
                // Step 10: Reset
                if (prev >= 10) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1600);

        return () => clearInterval(interval);
    }, []);

    // Generate curved path data (Bezier) between two locations
    const getCurvePath = (start, end) => {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        // Control point coordinate creates a clean upward arc
        const cx = start.x + dx / 2;
        const cy = Math.min(start.y, end.y) - 60;
        return `M ${start.x} ${start.y} Q ${cx} ${cy} ${end.x} ${end.y}`;
    };

    return (
        <footer className="w-full bg-[#185884] text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Background Dot Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="w-full px-5 relative z-10">

                {/* Restructured 5-Column Grid Layout (Links + World Map Widget) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 border-b border-white/10 pb-16">

                    {/* Column 1: Brand & Contact Info */}
                    <div className="space-y-4 lg:col-span-1">
                        <div className="flex flex-col gap-1.5">
                            <Link href="/">
                                <img
                                    src="/images/nextledgerlogo3.png"
                                    alt="Next Ledgers Logo"
                                    className="h-9 w-auto object-contain"
                                />
                            </Link>
                            <p className="text-[#FEF4E4]/60 text-xs font-semibold tracking-wide">
                                Your Streamlined Financial Solution
                            </p>
                        </div>

                        <div className="space-y-3 pt-1">
                            <a
                                href="tel:+18885520055"
                                className="flex items-center gap-3 text-xs font-bold hover:text-[#F58220] transition-colors group cursor-pointer"
                            >
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220]/15 transition-all">
                                    <Phone className="w-3 h-3" />
                                </div>
                                +1 (888) 552-0055
                            </a>

                            <a
                                href="mailto:info@nextledgers.com"
                                className="flex items-center gap-3 text-xs font-bold hover:text-[#F58220] transition-colors group cursor-pointer"
                            >
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#F58220] group-hover:bg-[#F58220]/15 transition-all">
                                    <Mail className="w-3 h-3" />
                                </div>
                                info@nextledgers.com
                            </a>

                            <div className="flex items-start gap-3 text-xs font-semibold text-white/70 leading-normal">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#F58220] mt-0.5 flex-shrink-0">
                                    <MapPin className="w-3 h-3" />
                                </div>
                                <div>
                                    <span className="font-bold text-white block">Next Ledgers HQ</span>
                                    Mayapuri Commercial Area,
                                    <br />
                                    New Delhi India, 110064
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: USA Services */}
                    <div className="space-y-4 lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#F58220]">
                            OUR SERVICES IN USA
                        </h4>
                        <ul className="space-y-2.5 text-xs font-bold text-white/60">
                            <li>
                                <Link href="/services/usa-nonprofit" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Self-Directed & Non-profit Accounting
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/usa-bookkeeping" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    U.S. Bookkeeping Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/usa-tax" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    U.S. Tax Preparation Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/usa-ap-ar" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Accounts Payable & Receivable Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/usa-cfo" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Year-End Accounts & CFO Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Canada Services */}
                    <div className="space-y-4 lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#F58220]">
                            OUR SERVICES IN CANADA
                        </h4>
                        <ul className="space-y-2.5 text-xs font-bold text-white/60">
                            <li>
                                <Link href="/services/canada-compilation" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Compilation Engagement Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/canada-review" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Review Engagement Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/canada-bookkeeping" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Canada Bookkeeping Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/canada-investment" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    C.A. Investment Accounting
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/canada-tax" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    C.A. Tax Preparation Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div className="space-y-4 lg:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#F58220]">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-2.5 text-xs font-bold text-white/60">
                            <li>
                                <Link href="/" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles" className="hover:text-[#F58220] transition-colors cursor-pointer block">
                                    Articles & Tips
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Global Connectivity Map Box Widget (Occupies 20% width on Desktop, shifted 25% left) */}
                    <div className="lg:col-span-1 md:col-span-2 col-span-1 lg:-translate-x-[25%]">
                        <div className="bg-[#0b2e4d]/85 border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_0_rgba(15,39,74,0.3)] flex flex-col justify-between h-[280px] group hover:border-[#F58220]/30 transition-all duration-300">

                            {/* Map Canvas */}
                            <div className="relative flex-1 py-2 flex items-center justify-center overflow-hidden">
                                <svg
                                    viewBox="0 0 1000 500"
                                    className="w-full h-auto max-h-[170px]"
                                >
                                    <defs>
                                        <pattern id="widget-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                            <circle cx="2" cy="2" r="0.75" fill="#ffffff" opacity="0.05" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#widget-grid)" />

                                    {/* Continent Outlines */}
                                    <g className="fill-white/5 stroke-white/10 stroke-1">
                                        <path d={CONTINENT_PATHS.northAmerica} className={timelineStep >= 1 && timelineStep < 10 ? "fill-[#34D399]/5 stroke-[#34D399]/20" : ""} />
                                        <path d={CONTINENT_PATHS.greenland} />
                                        <path d={CONTINENT_PATHS.southAmerica} />
                                        <path d={CONTINENT_PATHS.eurasia} className={timelineStep >= 0 && timelineStep < 10 ? "fill-[#F58220]/5 stroke-[#F58220]/20" : ""} />
                                        <path d={CONTINENT_PATHS.africa} />
                                        <path d={CONTINENT_PATHS.australia} className={timelineStep >= 4 && timelineStep < 10 ? "fill-[#A78BFA]/5 stroke-[#A78BFA]/20" : ""} />
                                        <path d={CONTINENT_PATHS.newZealand} className={timelineStep >= 5 && timelineStep < 10 ? "fill-[#F472B6]/5 stroke-[#F472B6]/20" : ""} />
                                        <path d={CONTINENT_PATHS.uk} />
                                        <path d={CONTINENT_PATHS.ireland} />
                                        <path d={CONTINENT_PATHS.japan} />
                                        <path d={CONTINENT_PATHS.madagascar} />
                                    </g>

                                    {/* India -> Targets Arcs */}
                                    {TIMELINE.map((item, idx) => {
                                        const isActive = timelineStep >= idx && timelineStep < 10;
                                        return (
                                            <path
                                                key={item.key}
                                                d={getCurvePath(LOCATIONS.india, item.target)}
                                                fill="none"
                                                stroke={item.color}
                                                strokeWidth="2"
                                                className="transition-all duration-1000 ease-out"
                                                style={{
                                                    strokeDasharray: "1000",
                                                    strokeDashoffset: isActive ? 0 : 1000,
                                                    transition: "stroke-dashoffset 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-in-out",
                                                    opacity: isActive ? 0.75 : 0
                                                }}
                                            />
                                        );
                                    })}

                                    {/* HQ Node: India */}
                                    <circle cx={LOCATIONS.india.x} cy={LOCATIONS.india.y} r="10" fill="#F58220" opacity="0.3" className="animate-ping" />
                                    <circle cx={LOCATIONS.india.x} cy={LOCATIONS.india.y} r="5" fill="#F58220" />

                                    {/* Target Nodes & Labels */}
                                    {TIMELINE.map((item, idx) => {
                                        const isActive = timelineStep >= idx && timelineStep < 10;
                                        return (
                                            <g key={item.key}>
                                                {/* Glowing Ripple Pin */}
                                                <circle
                                                    cx={item.target.x}
                                                    cy={item.target.y}
                                                    r="8"
                                                    fill={item.color}
                                                    className={`transition-all duration-500 ${isActive ? "opacity-100 scale-100 animate-ping" : "opacity-0 scale-50"}`}
                                                />
                                                <circle
                                                    cx={item.target.x}
                                                    cy={item.target.y}
                                                    r="3"
                                                    fill={item.color}
                                                    className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}
                                                />
                                                {/* Country Text Label (Renders precisely when line reaches target) */}
                                                <text
                                                    x={item.target.textX}
                                                    y={item.target.textY}
                                                    fill="#FEF4E4"
                                                    fontSize="8"
                                                    fontWeight="900"
                                                    textAnchor={item.target.align}
                                                    className="transition-all duration-500 font-sans tracking-wider"
                                                    style={{
                                                        opacity: isActive ? 0.9 : 0,
                                                        transform: isActive ? "translateY(0)" : "translateY(3px)",
                                                        transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
                                                    }}
                                                >
                                                    {item.target.flag} {item.target.label}
                                                </text>
                                            </g>
                                        );
                                    })}

                                    {/* India Label always visible */}
                                    <text
                                        x={LOCATIONS.india.textX}
                                        y={LOCATIONS.india.textY}
                                        fill="#FEF4E4"
                                        fontSize="8"
                                        fontWeight="900"
                                        textAnchor={LOCATIONS.india.align}
                                        className="font-sans tracking-wider opacity-90"
                                    >
                                        🇮🇳 India
                                    </text>
                                </svg>
                            </div>

                            {/* Dynamic Connection Log / Status Banner */}
                            <div className="bg-white/5 border border-white/5 rounded-xl p-2 flex items-center justify-between text-[10px] font-bold">
                                {timelineStep < 7 ? (
                                    <>
                                        <div className="flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] animate-pulse"></span>
                                            <span className="text-white/40">From:</span>
                                            <span className="text-[#F58220]">New Delhi</span>
                                        </div>
                                        <span className="text-white/30">→</span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-white/40">To:</span>
                                            <span className="text-white">
                                                {TIMELINE[timelineStep]?.target.flag} {TIMELINE[timelineStep]?.target.label}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="w-full text-center py-0.5 text-[#34D399] uppercase tracking-widest font-black text-[9px] flex items-center justify-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-[#34D399] animate-ping"></span>
                                        All Regions Connected ⚡
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Rights Notice */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-white/40">
                    <p>© {new Date().getFullYear()} Next Ledgers. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
