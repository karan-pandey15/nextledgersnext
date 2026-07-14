"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import { UK_SERVICE_LINKS } from "@/app/uk/ukServiceLinks";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

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
    india: { x: 640, y: 220, label: "India", code: "in", textX: 640, textY: 170, align: "middle" },
    uk: { x: 450, y: 105, label: "UK", code: "gb", textX: 450, textY: 70, align: "middle" },
    usa: { x: 240, y: 155, label: "USA", code: "us", textX: 240, textY: 185, align: "middle" },
    uae: { x: 585, y: 215, label: "UAE", code: "ae", textX: 585, textY: 245, align: "middle" },
    canada: { x: 235, y: 125, label: "Canada", code: "ca", textX: 235, textY: 95, align: "middle" },
    ireland: { x: 435, y: 102, label: "Ireland", code: "ie", textX: 435, textY: 135, align: "middle" },
    australia: { x: 870, y: 380, label: "Australia", code: "au", textX: 870, textY: 345, align: "middle" },
    singapore: { x: 705, y: 275, label: "Singapore", code: "sg", textX: 705, textY: 305, align: "middle" },
    newZealand: { x: 945, y: 445, label: "New Zealand", code: "nz", textX: 945, textY: 410, align: "middle" },
    netherlands: { x: 475, y: 100, label: "Netherlands", code: "nl", textX: 526, textY: 95, align: "start" }
};

const getFlagX = (target, flagWidth) => {
    if (target.align === "middle") {
        return target.textX - flagWidth / 2;
    }
    if (target.align === "end") {
        return target.textX - flagWidth;
    }
    // "start"
    return target.textX;
};

// Timeline order for flying lines sequentially from India
const TIMELINE = [
    { key: "uk", target: LOCATIONS.uk, color: "#00F0FF" }, // Cyan
    { key: "usa", target: LOCATIONS.usa, color: "#00F0FF" },
    { key: "uae", target: LOCATIONS.uae, color: "#00F0FF" },
    { key: "canada", target: LOCATIONS.canada, color: "#00F0FF" },
    { key: "ireland", target: LOCATIONS.ireland, color: "#00F0FF" },
    { key: "australia", target: LOCATIONS.australia, color: "#00F0FF" },
    { key: "singapore", target: LOCATIONS.singapore, color: "#00F0FF" },
    { key: "newZealand", target: LOCATIONS.newZealand, color: "#00F0FF" },
    { key: "netherlands", target: LOCATIONS.netherlands, color: "#00F0FF" }
];

export default function FooterTwo() {
    const [timelineStep, setTimelineStep] = useState(0);

    // Animate the line sequences sequentially
    useEffect(() => {
        const interval = setInterval(() => {
            setTimelineStep((prev) => {
                // Steps 0 to 8: Draw lines to UK, USA, UAE, Canada, Ireland, Australia, Singapore, New Zealand, Netherlands
                // Steps 9 to 11: Hold all connections glowing to highlight global network
                // Step 12: Reset
                if (prev >= 12) {
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
        <footer className="w-full bg-[#185884] text-white border-t border-white/10 pt-10 pb-4 relative overflow-hidden">
            {/* Background Dot Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">

                {/* Restructured Grid Layout (Address -> Services 4-4 -> Quick Links -> Map) */}
                <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 border-b border-white/10 pb-16 items-start">

                    {/* Column 1: Brand & Contact Info (Address) */}
                    <div className="space-y-4 lg:col-span-2 md:col-span-3 col-span-1">
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
                                className="flex items-center gap-3 text-xs font-bold hover:text-[#FF6A00] transition-colors group cursor-pointer"
                            >
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00]/15 transition-all">
                                    <Phone className="w-3 h-3" />
                                </div>
                                <span className="flex items-center gap-1.5">
                                    <span>🇺🇸</span>
                                    <span>🇨🇦</span>
                                    <span>+1 (888) 552-0055</span>
                                </span>
                            </a>

                            <a
                                href="mailto:info@nextledgers.com"
                                className="flex items-center gap-3 text-xs font-bold hover:text-[#FF6A00] transition-colors group cursor-pointer"
                            >
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#FF6A00] group-hover:bg-[#FF6A00]/15 transition-all">
                                    <Mail className="w-3 h-3" />
                                </div>
                                info@nextledgers.com
                            </a>

                            <div className="flex items-start gap-3 text-xs font-semibold text-white/70 leading-normal">
                                <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-[#FF6A00] mt-0.5 flex-shrink-0">
                                    <MapPin className="w-3 h-3" />
                                </div>
                                <div>
                                    <span className="font-bold text-white flex items-center gap-1.5">
                                        <span>🇮🇳</span> Next Ledgers HQ
                                    </span>
                                    Mayapuri Commercial Area,
                                    <br />
                                    New Delhi, India 110064
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Our Services In UK (4 4 layout - 2 Columns of 4) */}
                    <div className="space-y-4 lg:col-span-4 md:col-span-4 col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#FF6A00] flex items-center gap-1.5">
                            <span>🇬🇧</span> Our Services In UK
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-bold text-white/60">
                            {UK_SERVICE_LINKS.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="hover:text-[#FF6A00] transition-colors cursor-pointer block"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="space-y-4 lg:col-span-1 md:col-span-2 col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#FF6A00]">
                            LINKS
                            {/* QUICK  */}
                        </h4>
                        <ul className="space-y-2.5 text-xs font-bold text-white/60">
                            <li>
                                <Link href="/" className="hover:text-[#FF6A00] transition-colors cursor-pointer block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#FF6A00] transition-colors cursor-pointer block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-[#FF6A00] transition-colors cursor-pointer block">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-[#FF6A00] transition-colors cursor-pointer block">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/articles" className="hover:text-[#FF6A00] transition-colors cursor-pointer block">
                                    Articles & Tips
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Global Connectivity Map Box Widget */}
                    <div className="lg:col-span-5 md:col-span-3 col-span-1 space-y-4 overflow-visible">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#FF6A00]">
                            Global Connectivity
                        </h4>
                        <div className="w-full overflow-hidden">
                            <svg
                                viewBox="0 0 1000 500"
                                className="w-full h-auto object-contain"
                            >
                                <defs>
                                    <filter id="glow-cyan" x="-25%" y="-25%" width="150%" height="150%">
                                        <feGaussianBlur stdDeviation="5" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                    <filter id="glow-orange" x="-25%" y="-25%" width="150%" height="150%">
                                        <feGaussianBlur stdDeviation="6" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Continent Outlines */}
                                <g className="fill-white/5 stroke-white/30 stroke-[1.5px] transition-all duration-700">
                                    <path d={CONTINENT_PATHS.northAmerica} className={timelineStep >= 1 && timelineStep < 12 ? "fill-[#00F0FF]/6 stroke-[#00F0FF]/25" : ""} />
                                    <path d={CONTINENT_PATHS.greenland} />
                                    <path d={CONTINENT_PATHS.southAmerica} />
                                    <path d={CONTINENT_PATHS.eurasia} className={timelineStep >= 0 && timelineStep < 12 ? "fill-[#00F0FF]/6 stroke-[#00F0FF]/25" : ""} />
                                    <path d={CONTINENT_PATHS.africa} />
                                    <path d={CONTINENT_PATHS.australia} className={timelineStep >= 5 && timelineStep < 12 ? "fill-[#00F0FF]/6 stroke-[#00F0FF]/25" : ""} />
                                    <path d={CONTINENT_PATHS.newZealand} className={timelineStep >= 7 && timelineStep < 12 ? "fill-[#00F0FF]/6 stroke-[#00F0FF]/25" : ""} />
                                    <path d={CONTINENT_PATHS.uk} className={timelineStep >= 0 && timelineStep < 12 ? "fill-[#00F0FF]/15 stroke-[#00F0FF]/40" : ""} />
                                    <path d={CONTINENT_PATHS.ireland} className={timelineStep >= 4 && timelineStep < 12 ? "fill-[#00F0FF]/15 stroke-[#00F0FF]/40" : ""} />
                                    <path d={CONTINENT_PATHS.japan} />
                                    <path d={CONTINENT_PATHS.madagascar} />
                                </g>

                                {/* India -> Targets Arcs */}
                                {TIMELINE.map((item, idx) => {
                                    const isActive = timelineStep >= idx && timelineStep < 12;
                                    return (
                                        <path
                                            key={item.key}
                                            d={getCurvePath(LOCATIONS.india, item.target)}
                                            fill="none"
                                            stroke="#00F0FF"
                                            strokeWidth="2.2"
                                            filter="url(#glow-cyan)"
                                            className="transition-all duration-1000 ease-out"
                                            style={{
                                                strokeDasharray: "1000",
                                                strokeDashoffset: isActive ? 0 : 1000,
                                                transition: "stroke-dashoffset 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-in-out",
                                                opacity: isActive ? 0.8 : 0
                                            }}
                                        />
                                    );
                                })}

                                {/* HQ Node: India */}
                                <circle cx={LOCATIONS.india.x} cy={LOCATIONS.india.y} r="10" fill={BRAND_ORANGE} opacity="0.3" className="animate-ping" />
                                <circle cx={LOCATIONS.india.x} cy={LOCATIONS.india.y} r="5" fill={BRAND_ORANGE} filter="url(#glow-orange)" />

                                {/* Target Nodes & Labels */}
                                {TIMELINE.map((item, idx) => {
                                    const isActive = timelineStep >= idx && timelineStep < 12;
                                    return (
                                        <g key={item.key}>
                                            {/* Glowing Ripple Pin */}
                                            <circle
                                                cx={item.target.x}
                                                cy={item.target.y}
                                                r="8"
                                                fill="#00F0FF"
                                                className={`transition-all duration-500 ${isActive ? "opacity-100 scale-100 animate-ping" : "opacity-0 scale-50"}`}
                                            />
                                            <circle
                                                cx={item.target.x}
                                                cy={item.target.y}
                                                r="3"
                                                fill="#00F0FF"
                                                filter="url(#glow-cyan)"
                                                className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-35"}`}
                                            />
                                            {/* Country Text Label */}
                                            <text
                                                x={item.target.textX}
                                                y={item.target.textY}
                                                fill="#FFFFFF"
                                                fontSize="19.5"
                                                fontWeight="900"
                                                textAnchor={item.target.align}
                                                className="transition-all duration-500 font-sans tracking-widest uppercase drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)]"
                                                style={{
                                                    opacity: isActive ? 1 : 0,
                                                    transform: isActive ? "translateY(0)" : "translateY(3px)",
                                                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
                                                }}
                                            >
                                                {item.target.label}
                                            </text>
                                            {/* Country Flag Image */}
                                            <image
                                                href={`https://flagcdn.com/w40/${item.target.code}.png`}
                                                x={getFlagX(item.target, 48)}
                                                y={item.target.textY + 8}
                                                width="48"
                                                height="32"
                                                className="transition-all duration-500"
                                                style={{
                                                    opacity: isActive ? 0.95 : 0,
                                                    transform: isActive ? "translateY(0)" : "translateY(3px)",
                                                    transition: "opacity 0.6s ease-out, transform 0.6s ease-out"
                                                }}
                                            />
                                        </g>
                                    );
                                })}

                                {/* India Label always visible */}
                                <text
                                    x={LOCATIONS.india.textX}
                                    y={LOCATIONS.india.textY}
                                    fill="#FFFFFF"
                                    fontSize="20"
                                    fontWeight="900"
                                    textAnchor={LOCATIONS.india.align}
                                    className="font-sans tracking-widest uppercase drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.8)] opacity-95"
                                >
                                    India
                                </text>
                                <image
                                    href="https://flagcdn.com/w40/in.png"
                                    x={getFlagX(LOCATIONS.india, 48)}
                                    y={LOCATIONS.india.textY + 8}
                                    width="48"
                                    height="32"
                                    className="opacity-95"
                                />
                            </svg>
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
