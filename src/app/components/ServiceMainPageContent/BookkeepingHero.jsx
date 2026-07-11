import React from "react";
import { Users, PuzzleIcon, ShieldCheck, Headset } from "lucide-react";

export default function BookkeepingHero() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                    {/* Left column - text content */}
                    <div>
                        <span className="inline-block text-[#F58220] uppercase font-extrabold tracking-widest text-[11px] mb-3">
                            Outsourcing Partnership 
                        </span>

                        <h1 className="text-[28px] sm:text-[34px] lg:text-[30px] font-extrabold text-[#0B1F3A] leading-[1.15] mb-3">
                            Turning Financial Data into
                            Meaningful Business Insights
                        </h1>

                        <div className="w-14 h-[3px] bg-[#F58220] rounded-full mb-5" />

                        <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                            Management accounts provide regular financial information throughout the year, helping business owners understand how their business is performing and make informed decisions based on up-to-date financial data.   </p>

                        <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                            Management accounts provide regular financial information throughout the year, helping business owners understand how their business is performing and make informed decisions based on up-to-date financial data.</p>

                        <p className="text-gray-500 text-[10px] sm:text-[15px] leading-relaxed mb-3">
                            At NextLedgers, we support UK accounting firms with reliable management reporting and financial analysis services, enabling them to deliver valuable insights and advisory-driven solutions to their clients.    </p>

                        <button className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#e2761b] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors">
                            <span className="text-base leading-none">📞</span>
                            Book a Discovery Call
                        </button>
                    </div>

                    {/* Right column - image with overlay stat bar */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden">
                            <img
                                src="/images/DSC09901.JPG"
                                alt="Accounting team at work"
                                className="w-full h-[260px] sm:h-[320px] lg:h-[340px] object-cover"
                            />
                        </div>

                        {/* Stats bar overlapping the bottom of the image */}
                        <div className="absolute left-4 right-4 -bottom-8 sm:-bottom-9 bg-white rounded-xl shadow-lg px-3 sm:px-5 py-4 sm:py-5 grid grid-cols-4 gap-2">
                            <Stat icon={<Users className="w-5 h-5" />} value="500+" label="UK Accounting Firms Supported" />
                            <Stat icon={<PuzzleIcon className="w-5 h-5" />} value="30+" label="Software Integrations" />
                            <Stat icon={<ShieldCheck className="w-5 h-5" />} value="100%" label="HMRC Compliant Processes" />
                            <Stat icon={<Headset className="w-5 h-5" />} value="Dedicated" label="Offshore Support Team" />
                        </div>
                    </div>
                </div>

                {/* Spacer to account for the overlapping stats bar */}
                <div className="h-8 sm:h-10" />
            </div>
        </section>
    );
}

function Stat({ icon, value, label }) {
    return (
        <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F58220]/10 text-[#F58220] flex items-center justify-center">
                {icon}
            </div>
            <div className="text-[15px] sm:text-[17px] font-extrabold text-[#0B1F3A] leading-none">
                {value}
            </div>
            <div className="text-[10px] sm:text-[11px] text-gray-500 leading-tight max-w-[90px]">
                {label}
            </div>
        </div>
    );
}