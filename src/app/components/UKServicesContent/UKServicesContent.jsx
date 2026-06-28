"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../utils/Button/Button";

export default function UKServicesContent() {
  // State for the Business Advisory & CFO interactive services tabs switcher
  const [activeTab, setActiveTab] = useState("advisory");
  // State for floating back-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const advisoryServices = [
    "Monthly Management Accounts Preparation",
    "Financial Performance Reviews",
    "Profit & Loss Analysis",
    "Balance Sheet Reviews",
    "Cash Flow Analysis",
    "KPI Reporting & Dashboard Preparation",
    "Budget vs Actual Analysis",
    "Cost & Margin Analysis",
    "Business Performance Reviews",
    "Working Capital Analysis",
    "Financial Health Checks",
    "Management Reporting Packs"
  ];

  const cfoServices = [
    "Cash Flow Forecasting",
    "Budget Preparation Support",
    "Financial Forecasting",
    "Business Growth Planning",
    "Strategic Financial Planning",
    "Business Performance Analysis",
    "Profitability Improvement Reviews",
    "Financial KPI Monitoring",
    "Board Reporting Support",
    "Investor & Lender Reporting Support",
    "Scenario Planning & Financial Modelling",
    "Financial Decision Support"
  ];

  const taxPlanningServices = [
    "Corporation Tax Planning Support",
    "Director & Shareholder Tax Planning",
    "Business Structure Tax Reviews",
    "Capital Allowance Reviews",
    "Dividend vs Salary Planning Support",
    "VAT Registration Support",
    "VAT Planning & Return Review Support",
    "Capital Gains Tax Planning Support",
    "HMRC Tax Investigation Preparation Support",
    "Tax Health Checks",
    "Tax Planning Working Papers",
    "Client Advisory Support"
  ];

  const startupServices = [
    "Company Formation Coordination*",
    "Companies House Identity Verification (ID Verification) Support",
    "Director & Shareholder Onboarding Support",
    "Business Structure Guidance",
    "Company Incorporation Documentation Preparation",
    "Corporation Tax Registration Support",
    "PAYE Employer Registration Support",
    "VAT Registration Support",
    "Companies House Compliance Support",
    "Registered Office Documentation Support",
    "New Business Compliance Checklists",
    "Director & Shareholder Compliance Guidance"
  ];

  const budgetingServices = [
    "Annual Budget Preparation",
    "Revenue Forecasting",
    "Expense Forecasting",
    "Cash Flow Forecasting",
    "Scenario Planning Models",
    "Financial Modelling",
    "Growth Planning",
    "Strategic Financial Planning"
  ];

  const performanceServices = [
    "Financial Ratio Analysis",
    "Gross Profit & Margin Analysis",
    "Departmental Performance Reviews",
    "Cost Reduction Analysis",
    "Break-Even Analysis",
    "Business Performance Reporting",
    "Executive Reporting Packs",
    "Strategic Advisory Support"
  ];

  const getTabItems = () => {
    switch (activeTab) {
      case "advisory":
        return advisoryServices;
      case "cfo":
        return cfoServices;
      case "tax":
        return taxPlanningServices;
      case "startup":
        return startupServices;
      case "budgeting":
        return budgetingServices;
      case "performance":
        return performanceServices;
      default:
        return advisoryServices;
    }
  };

  return (
    <section id="management-accounts" className="w-full bg-white font-sans text-[#1E1B2A] overflow-hidden">
      {/* Dynamic Slide In Animation Styles */}
      <style jsx global>{`
        @keyframes fadeUpIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ================================================================================= */}
      {/* SECTION AREA A: MANAGEMENT ACCOUNTS & FINANCIAL REPORTING                         */}
      {/* ================================================================================= */}

      {/* Main Page Title Header (BG is White, Heading color is #EA7C24) */}
      <div className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            UK Accounting Outsourcing
          </span>
          <h1 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            Management Accounts & <br className="hidden sm:inline" />
            Financial Reporting Services
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Strengthening client relationships and unlocking advisory opportunities for UK accounting firms through high-quality offshore reporting support.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Turning Financial Data into Meaningful Business Insights (Right image, bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Value Proposition
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Turning Financial Data into Meaningful Business Insights
            </h2>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Many businesses only review their financial performance once a year when preparing statutory accounts and tax returns. However, by then, opportunities may have been missed and challenges may have already impacted profitability and cash flow.
              </p>
              <p>
                Management accounts provide regular financial information throughout the year, helping business owners understand how their business is performing and make informed decisions based on up-to-date financial data.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, we support UK accounting firms with reliable management reporting and financial analysis services, enabling them to deliver valuable insights and advisory-driven solutions to their clients.
              </p>
            </div>
            {/* Buttons (using core Button component, compact and centered on mobile) */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Get Started Today"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
              <Button
                text="Explore Services"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>
          {/* Right Image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-md group">
            <Image
              src="/images/DSC09901.JPG"
              alt="Turning Financial Data into Meaningful Business Insights"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Section 2: Why Management Accounts Matter (Left image, bg #ffffff, Heading color is #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Image (stands first in grid on large screens) */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-xs order-2 lg:order-1 group">
            <Image
              src="/images/bgimage.JPG"
              alt="Why Management Accounts Matter"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
          {/* Right Content */}
          <div className="flex flex-col justify-center flex-1 order-1 lg:order-2 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Strategic Value
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Why Management Accounts Matter
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
              Regular management reporting helps businesses answer important questions, such as:
            </p>
            {/* Elegant List of Questions */}
            <div className="space-y-2 mb-4">
              {[
                "Are we generating sufficient profit?",
                "Why is cash flow under pressure despite increasing sales?",
                "Which products, services, or departments are performing best?",
                "Are expenses increasing faster than revenue?",
                "Are we meeting our budgets and financial targets?",
                "Can we afford to recruit more staff or invest in growth?",
                "What will our financial position look like over the coming months?",
              ].map((q, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FEF4E4] border border-[#F58220]/25 flex items-center justify-center mt-0.5">
                    <span className="text-[#F58220] text-[10px] font-bold">?</span>
                  </div>
                  <span className="text-gray-800 text-xs sm:text-sm font-medium leading-normal">
                    {q}
                  </span>
                </div>
              ))}
            </div>
            {/* Conclusion text inside the same layout block */}
            <div className="p-3.5 rounded-xl bg-[#FEF4E4]/50 border-l-4 border-[#F58220] text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed">
              Having access to this information allows business owners to make proactive decisions rather than reacting to problems after year-end.
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Management Accounting Services (Right image, bg #FEF4E4) */}
      <div id="services" className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Our Deliverables
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Our Management Accounting Services
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
              We provide comprehensive management reporting support, including:
            </p>
            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-2">
              {[
                "Monthly & Quarterly Management Accounts",
                "Profit & Loss Reporting",
                "Balance Sheet Reporting",
                "Cash Flow Forecasting",
                "Budget vs Actual Analysis",
                "KPI Reporting & Dashboards",
                "Departmental & Divisional Reporting",
                "Board Reporting Packs",
                "Management Commentary & Executive Summaries",
                "Business Performance Reviews",
                "Custom Financial Reporting",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white/70 backdrop-blur-xs p-2.5 rounded-xl border border-white hover:border-[#F58220]/30 transition-all duration-300 hover:shadow-xs"
                >
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#F58220] flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-[11px] sm:text-xs leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-xs group">
            <Image
              src="/images/DSC09781.JPG"
              alt="Our Management Accounting Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Section 4: How We Help Businesses (Left image, bg #ffffff, Heading color is #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-xs order-2 lg:order-1 group">
            <Image
              src="/images/Akash Param.png"
              alt="How We Help Businesses"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
          {/* Right Content */}
          <div className="flex flex-col justify-center flex-1 order-1 lg:order-2 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Business Transformation
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              How We Help Businesses
            </h2>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">
              Our reports are designed to transform bookkeeping data into clear and actionable insights that help businesses:
            </p>
            {/* Bullet Points */}
            <div className="space-y-3">
              {[
                "Monitor financial performance regularly",
                "Improve cash flow visibility and planning",
                "Track profitability and key business drivers",
                "Measure performance against budgets and targets",
                "Identify trends, risks, and opportunities early",
                "Support strategic planning and business growth",
                "Make faster and more informed decisions",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 group">
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-[#FEF4E4] flex items-center justify-center mt-0.5 group-hover:bg-[#F58220] transition-colors duration-300">
                    <svg className="w-2.5 h-2.5 text-[#F58220] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-xs sm:text-sm font-semibold leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Software Expertise (bg #FEF4E4) - No Image, Premium Full Width Grid */}
      <div className="w-full bg-[#FEF4E4] py-[10px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1 block">
            Technology Stack
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
            Software Expertise
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We leverage market-leading accounting and dashboard tools to provide responsive and real-time management reports.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Accounting Platforms */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-[#0F274A] font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full inline-block" />
                Accounting Platforms
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { name: "Xero", color: "bg-blue-400" },
                  { name: "QuickBooks Online", color: "bg-green-500" },
                  { name: "Sage Business Cloud", color: "bg-emerald-600" },
                  { name: "FreeAgent", color: "bg-red-400" },
                ].map((plat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#faf9f6] p-2.5 rounded-lg border border-gray-50 hover:border-[#F58220]/30 transition-all duration-300 hover:shadow-xs group"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${plat.color} flex-shrink-0 group-hover:scale-125 transition-transform`} />
                    <span className="text-[#1E1B2A] font-bold text-[11px] sm:text-xs">{plat.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Reporting & Dashboard Tools */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-[#0F274A] font-extrabold text-xs sm:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full inline-block" />
                Reporting & Dashboard Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { name: "Fathom", color: "bg-rose-400" },
                  { name: "Syft Analytics", color: "bg-violet-500" },
                  { name: "Spotlight Reporting", color: "bg-amber-400" },
                  { name: "Futrli", color: "bg-pink-500" },
                  { name: "Float", color: "bg-sky-400" },
                  { name: "Power BI", color: "bg-yellow-500" },
                  { name: "Google Looker Studio", color: "bg-indigo-400" },
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-[#faf9f6] p-2.5 rounded-lg border border-gray-50 hover:border-[#F58220]/30 transition-all duration-300 hover:shadow-xs group"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${tool.color} flex-shrink-0 group-hover:scale-125 transition-transform`} />
                    <span className="text-[#1E1B2A] font-bold text-[11px] sm:text-xs leading-tight">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Industries We Support (bg #ffffff, Heading color is #EA7C24) - No Image, Premium Card Grid */}
      <div className="w-full bg-white py-[10px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1 block">
            Sectors Covered
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
            Reacting to client needs
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We work with accounting firms serving clients across various sectors, including:
          </p>
        </div>

        {/* Elegant full-width Industries Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: "eCommerce & Online Retail", icon: "🛒" },
            { name: "Marketing & Creative Agencies", icon: "🎨" },
            { name: "SaaS & Technology Companies", icon: "💻" },
            { name: "Construction Businesses", icon: "🏗️" },
            { name: "Recruitment Agencies", icon: "👥" },
            { name: "Professional Service Firms", icon: "💼" },
            { name: "Property & Real Estate Businesses", icon: "🏢" },
          ].map((ind, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-4 bg-[#FEF4E4]/40 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/65 transition-all duration-300 group hover:shadow-xs"
            >
              <span className="text-3xl mb-2 flex-shrink-0 group-hover:scale-110 transition-transform">
                {ind.icon}
              </span>
              <span className="text-[#0F274A] font-extrabold text-[11px] sm:text-xs leading-tight block">
                {ind.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 7: Why Choose NextLedgers? (bg #FEF4E4) - No Image, Premium Benefit Cards Grid */}
      <div className="w-full bg-[#FEF4E4] py-[10px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto text-center mb-8">
          <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1 block">
            The NextLedgers Advantage
          </span>
          <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
            Why Choose NextLedgers?
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            We stand apart through our UK accounts production experience and white-label offshore support system.
          </p>
        </div>

        {/* Why Choose Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "ACCA-Led Team", desc: "Expert leadership with qualified UK accounting framework knowledge." },
            { title: "Offshore Support", desc: "Dedicated resources to compile and comment on monthly reporting packs." },
            { title: "White-Label Service", desc: "Direct client communication features under your accounting practice brand." },
            { title: "Advisory-Focused", desc: "Turn core trial balances into strategic boardroom recommendations." },
            { title: "Flexible Engagement", desc: "Scale resources up or down depending on seasonal client cycles." },
            { title: "No Additional UK Hiring", desc: "Expand practice capabilities without high local overheads and benefits." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#F58220]/30 transition-all duration-300 flex items-start gap-3.5 group shadow-xs">
              <div className="w-6 h-6 rounded-full bg-[#FEF4E4] flex items-center justify-center flex-shrink-0 text-[#F58220] font-bold text-[10px] group-hover:bg-[#F58220] group-hover:text-white transition-all">
                ✓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-1">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 8: More Than Compliance Reporting (Centered CTA Card, No Image, bg #ffffff, Heading color is #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-[#FEF4E4]/40 border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Beyond Compliance
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              More Than Compliance Reporting
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Management accounts are no longer just reports containing numbers. They have become one of the most valuable tools for understanding business performance, improving profitability, and supporting strategic decision-making.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, we help UK accounting firms deliver insightful management reporting that strengthens client relationships and creates more opportunities for advisory services.
              </p>
            </div>
            {/* Booking Call Action Button (compact text size and width) */}
            <div className="flex justify-center w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA B: UK PAYROLL & CIS OUTSOURCING SERVICES                              */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="payroll-cis", bg #ffffff, heading #EA7C24) */}
      <div id="payroll-cis" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource UK Payroll & CIS
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Payroll & CIS Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reliable Payroll & CIS Support for UK Accounting Firms — increase practice capacity and ensure strict HMRC compliance.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with HMRC Dashboard Mock UI (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Service Overview
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Reliable Payroll & CIS Support for UK Accounting Firms
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Payroll and Construction Industry Scheme (CIS) compliance require accuracy, consistency, and a thorough understanding of HMRC regulations. Even minor payroll errors can lead to penalties, employee dissatisfaction, and additional administrative work for accounting firms.
              </p>
              <p className="font-semibold text-[#0F274A]">
                As your practice grows, managing payroll and CIS can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Payroll and CIS support to UK accounting firms, helping practices increase capacity, maintain compliance, and deliver reliable services without increasing internal staffing costs.
              </p>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Content: Premium Interactive HMRC Dashboard Mockup (Unique Visual Design!) */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden">
              {/* Top border strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">HMRC Gateway Active</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">CIS VERIFIED</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-4">
                <div className="bg-[#faf9f6] p-3 rounded-xl border border-gray-100">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">FPS Submission</div>
                  <div className="text-xs font-black text-emerald-600 mt-1 flex items-center gap-1">
                    <span>●</span> SENT & ACCEPTED
                  </div>
                </div>
                <div className="bg-[#faf9f6] p-3 rounded-xl border border-gray-100">
                  <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">CIS Deductions</div>
                  <div className="text-xs font-black text-[#0F274A] mt-1">
                    £14,840.20 <span className="text-[9px] text-gray-400 font-normal">Calculated</span>
                  </div>
                </div>
              </div>

              {/* Subcontractor deduction progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-[10px] font-bold text-gray-600 mb-1">
                  <span>Subcontractor Audits Completed</span>
                  <span>100% (42/42)</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#F58220] to-emerald-500 h-full rounded-full w-full"></div>
                </div>
              </div>

              {/* Live Feeds */}
              <div className="space-y-2.5 text-xs text-[#0F274A]">
                <div className="flex items-center justify-between bg-[#FEF4E4]/20 p-2.5 rounded-lg border border-[#F58220]/5">
                  <span className="text-gray-500 font-medium">Auto-Enrolment Pension:</span>
                  <span className="font-extrabold text-emerald-600">NEST Feeds Synced</span>
                </div>
                <div className="flex items-center justify-between bg-[#FEF4E4]/20 p-2.5 rounded-lg border border-[#F58220]/5">
                  <span className="text-gray-500 font-medium">Monthly Payroll Run:</span>
                  <span className="font-extrabold text-gray-700">Payslips Dispatched</span>
                </div>
                <div className="flex items-center justify-between bg-[#FEF4E4]/20 p-2.5 rounded-lg border border-[#F58220]/5">
                  <span className="text-gray-500 font-medium">RTI Compliance Check:</span>
                  <span className="font-extrabold text-emerald-600">✓ No Penalties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Why Payroll & CIS Matter (3x2 Grid Cards, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Strategic Value
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-3">
              Why Payroll & CIS Matter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Payroll is more than simply paying employees. It involves accurate calculations, timely submissions, pension obligations, statutory payments, and maintaining compliance with ever-changing regulations. Similarly, CIS introduces additional responsibilities for contractors and subcontractors, including registrations, verification procedures, deduction calculations, and monthly returns.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Effective payroll and CIS management helps businesses:
          </p>

          {/* Grid cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Pay Employees Accurately", desc: "Ensure your clients pay their staff accurately and on time, maintaining morale.", icon: "💰" },
              { title: "HMRC Compliance", desc: "Meet strict HMRC reporting requirements and stay clear of compliance issues.", icon: "🏛️" },
              { title: "Avoid Penalties", desc: "Protect your firm and clients from costly financial penalties and filing delays.", icon: "🛡️" },
              { title: "Accurate Records", desc: "Maintain pristine, audit-ready employee and subcontractor deduction files.", icon: "📊" },
              { title: "Reduce Workload", desc: "Dramatically lower the administrative burden on your internal accounting staff.", icon: "⏳" },
              { title: "Improve Efficiency", desc: "Enhance practice operational efficiency and boost client service satisfaction.", icon: "📈" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/25 p-5 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/45 transition-all duration-300 hover:shadow-xs group"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#F58220]/20 flex items-center justify-center text-lg mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Dual comparative list for Payroll vs CIS deliverables (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Services Deliverables
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our Payroll & CIS Services Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We handle end-to-end administration for your UK clients, ensuring total accuracy and HMRC compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Payroll Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📊</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our Payroll Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Weekly, Fortnightly, Four-Weekly & Monthly Payroll Processing",
                    "Employee Payroll Maintenance",
                    "New Starter & Leaver Processing",
                    "Payroll Amendments & Reconciliations",
                    "RTI (FPS & EPS) Submission Support",
                    "Payslips & Payroll Reporting",
                    "Pension Auto-Enrolment Support",
                    "Director Payroll Processing",
                    "Statutory Pay (SSP, SMP, SPP, SAP & Shared)",
                    "Holiday Pay & Leave Tracking",
                    "Year-End Support (P45s & P60s)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CIS Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🏗️</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our CIS Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Contractor & Subcontractor Registration Support",
                    "HMRC Verification Support",
                    "CIS Deduction Calculations",
                    "Gross Payment & Material Cost Reviews",
                    "Monthly CIS Return Preparation",
                    "Subcontractor Statements & Deductions",
                    "CIS Reconciliations & Compliance Reviews",
                    "HMRC Readiness Checks"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: How We Help Accounting Firms (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Accounting Practice Scaling
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              How We Help Accounting Firms
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our offshore support helps practices optimize processes and increase turnaround times without overheads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Increase Capacity", desc: "Handle larger client volumes and weekly schedules easily." },
              { num: "02", title: "Improve Turnaround", desc: "Process sheets and submit statutory files to HMRC faster." },
              { num: "03", title: "Reduce Admin Load", desc: "Free up in-house staff from calculations and portal uploads." },
              { num: "04", title: "Scale Headcount-Free", desc: "Grow practice revenues without onboarding local employees." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative group hover:border-[#F58220]/20 transition-all duration-300">
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-[#F58220]/30 group-hover:text-[#F58220]/50">{item.num}</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { title: "Enhance Accuracy", desc: "Detailed audits and verification checks reduce input mistakes." },
              { title: "Minimise Errors", desc: "Dual review workflow minimizes deductions and pension calculation problems." },
              { title: "Better Service Delivery", desc: "Provide consistent, fast, and secure payroll support directly to clients." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#faf9f6] p-5 rounded-2xl border border-gray-50 shadow-xs relative group hover:border-[#F58220]/20 transition-all duration-300">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Software & Pensions 3-column stack cards (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Software Integration
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Payroll Software & Pension Platform Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We plug directly into your preferred tools to make the transition frictionless and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Payroll Software
              </h4>
              <div className="space-y-2">
                {["BrightPay", "Moneysoft Payroll Manager", "Xero Payroll", "QuickBooks Payroll", "Sage Payroll", "FreeAgent Payroll"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Pension Platforms
              </h4>
              <div className="space-y-2">
                {["NEST", "The People's Pension", "Smart Pension", "NOW: Pensions"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting & Workflow
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "Dext", "Hubdoc", "ApprovalMax"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Industries We Support (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Sectors Served
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Reacting to client needs
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We help accounting practices service clients across highly-regulated payroll sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {[
              { name: "Construction & Trades", icon: "🏗️" },
              { name: "Recruitment Agencies", icon: "👥" },
              { name: "Manufacturing", icon: "⚙️" },
              { name: "Hospitality & Retail", icon: "🍽️" },
              { name: "Healthcare Providers", icon: "🩺" },
              { name: "Professional Service", icon: "💼" }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/40 p-4 rounded-xl border border-[#F58220]/15 text-center hover:bg-[#FEF4E4]/70 hover:shadow-xs hover:border-[#F58220]/30 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <span className="text-[#0F274A] font-extrabold text-[11px] sm:text-xs leading-snug block">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7: Why Choose NextLedgers? (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Offshore Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Why Choose NextLedgers for Payroll & CIS?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We stand apart through our UK compliance expertise and scalable Offshore support framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "ACCA-Led Team",
              "UK Payroll & CIS Expertise",
              "White-Label Service Delivery",
              "Dedicated Offshore Resources",
              "Structured Review Processes",
              "Secure Data Handling",
              "Flexible Engagement Models",
              "Scalable Support Framework"
            ].map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#F58220]/35 hover:shadow-xs transition-all duration-300 flex items-center gap-3.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] group-hover:scale-105 transition-transform">
                  ✓
                </div>
                <span className="text-gray-800 font-extrabold text-xs sm:text-[13px] leading-tight">
                  {adv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Your Offshore Payroll Partner (Centered Card CTA, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-[#FEF4E4]/40 border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Delivery Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Payroll & CIS Delivery Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Payroll and CIS require precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you require support with payroll processing, RTI compliance, pension administration, CIS returns, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.
              </p>
            </div>
            {/* Booking Call Action Button */}
            <div className="flex justify-center w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA C: UK PERSONAL TAX OUTSOURCING SERVICES                              */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="personal-tax", bg #ffffff, heading #EA7C24) */}
      <div id="personal-tax" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource UK Personal Tax
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Personal Tax Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Specialist Personal Tax Support for UK Accounting Firms — manage compliance efficiently and improve turnaround times during peak seasons.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview (Image/Content Alternating Layout, bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Personal Tax Overview
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Specialist Personal Tax Support for UK Accounting Firms
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Personal Tax remains one of the most important services offered by UK accounting practices. However, increasing volumes of Self Assessment returns, evolving tax legislation, and growing client expectations can place significant pressure on internal teams.
              </p>
              <p>
                At NextLedgers, we provide dedicated offshore Personal Tax support to UK accounting firms, helping practices manage compliance efficiently, improve turnaround times, and increase capacity without compromising quality.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether your firm requires support with standard Self Assessment returns, director tax returns, partnership returns, capital gains calculations, or complex personal tax cases, our team works as a seamless extension of your practice.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Get Started Today"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>
          {/* Right Image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-md group">
            <Image
              src="/images/DSC09901.JPG"
              alt="Specialist Personal Tax Support"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Section 2: Why Personal Tax Matters (with Self Assessment Dashboard Mockup, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Side: Mockup Self Assessment Portal */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full order-2 lg:order-1">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden">
              {/* Top border strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">Self Assessment Portal</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">SA100</span>
              </div>

              {/* Progress bars */}
              <div className="space-y-3.5 mb-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                    <span>Director SA100 Returns prepared</span>
                    <span>85% (34/40)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                    <span>Rental Income schedules audited</span>
                    <span>100% (25/25)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Computations list */}
              <div className="bg-[#faf9f6] p-3 rounded-xl border border-gray-100 space-y-2 mb-2 text-[11px] font-mono text-[#0F274A]">
                <div className="flex justify-between">
                  <span>Total Dividend Income:</span>
                  <span className="font-bold text-gray-700">Calculated</span>
                </div>
                <div className="flex justify-between">
                  <span>Capital Gains (CGT) Due:</span>
                  <span className="font-bold text-amber-600">Reconciled</span>
                </div>
                <div className="flex justify-between border-t border-gray-200/50 pt-1.5 mt-1.5">
                  <span>SA302 Tax Liability:</span>
                  <span className="font-bold text-emerald-600">✓ Ready to File</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Why Personal Tax Matters content */}
          <div className="flex flex-col justify-center flex-1 order-1 lg:order-2 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Filing & Regulations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Why Personal Tax Matters
            </h3>
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
              Personal tax compliance is more than simply filing tax returns. Individuals often have multiple income sources, investment activities, property income, or overseas earnings that require careful review and accurate reporting.
            </p>
            <p className="text-gray-800 text-xs sm:text-sm font-bold mb-3">
              Effective personal tax management helps taxpayers:
            </p>
            <div className="space-y-2 mb-4">
              {[
                "Meet HMRC filing requirements and deadlines",
                "Understand their tax liabilities and payment obligations",
                "Avoid penalties and compliance issues",
                "Report complex income sources accurately",
                "Plan for future tax payments and cash flow requirements",
                "Make informed financial and tax planning decisions"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FEF4E4] border border-[#F58220]/20 flex items-center justify-center mt-0.5">
                    <span className="text-[#F58220] text-[10px] font-bold">✓</span>
                  </div>
                  <span className="text-gray-800 text-xs sm:text-sm font-semibold leading-normal">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-3.5 rounded-xl bg-[#FEF4E4]/50 border-l-4 border-[#F58220] text-gray-800 text-xs sm:text-sm font-bold leading-relaxed">
              For accounting firms, delivering reliable personal tax services helps build stronger client relationships and creates opportunities for higher-value advisory services.
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Our Personal Tax Services Include (bg-[#FEF4E4]) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Deliverables List
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our Personal Tax Services Include
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Comprehensive personal tax compliance support, covering all standard and complex HMRC filings.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#F58220]/15 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Self Assessment Tax Returns",
                "Director Tax Returns",
                "Sole Trader Tax Returns",
                "Partnership Tax Returns",
                "Dividend Income Reporting",
                "Employment Income Reporting",
                "Rental Property Income Reporting",
                "Capital Gains Tax (CGT) Reporting",
                "Foreign Income Reporting",
                "Investment Income Reporting",
                "Tax Liability Calculations",
                "Payment on Account Calculations",
                "HMRC Correspondence Support",
                "Personal Tax Planning Support"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 bg-[#faf9f6] rounded-xl hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors group">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 text-white font-bold text-[8px] group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: How We Help Accounting Firms (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Scale Practice Operations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              How We Help Accounting Firms
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our personal tax specialists support firms throughout the tax compliance process, from data collection and return preparation to calculations and supporting schedules.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Increase Capacity", desc: "Increase Self Assessment processing capacity smoothly." },
              { title: "Improve Turnaround", desc: "Improve turnaround times during busy filing periods." },
              { title: "Reduce Pressure", desc: "Reduce stress and workload during the busy January filing peak." },
              { title: "Enhance Accuracy", desc: "Ensure consistent compliance checks and filing accuracy." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:border-[#F58220]/25 transition-all duration-300">
                <span className="text-[#F58220] text-xs font-mono font-bold block mb-1">Step 0{idx + 1}</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{card.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
            {[
              { title: "Senior Staff Optimization", desc: "Better utilise senior tax staff for consulting and high-value client advisory." },
              { title: "Reduce Recruitment", desc: "Avoid the hassle and expense of hiring temporary staff for peak tax seasons." },
              { title: "Improve Profitability", desc: "Improve profitability per tax return using a dedicated offshore delivery model." },
              { title: "Scale Seasonally", desc: "Scale operations efficiently during peak tax seasons without increasing headcount." }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#faf9f6] p-5 rounded-2xl border border-gray-50 hover:border-[#F58220]/25 transition-all duration-300">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{card.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Specialist Areas We Support (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Sectors and Taxpayers
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Specialist Areas We Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We handle specialized individual filings, ensuring compliance with evolving HMRC tax codes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Company Directors", desc: "Salary, dividend, benefits-in-kind, investment income, and capital gains reporting.", icon: "👔" },
              { title: "Sole Traders & Freelancers", desc: "Self-employment income reporting, expense reviews, and tax computations.", icon: "💼" },
              { title: "Partnerships & LLPs", desc: "Partnership returns, profit allocations, and partner reporting.", icon: "👥" },
              { title: "Property Investors", desc: "Rental income reporting, property expenses, and capital gains calculations.", icon: "🏢" },
              { title: "HNWIs & International", desc: "Complex returns involving investments, foreign income, and cross-border reporting.", icon: "🌐" }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#F58220]/30 hover:shadow-xs transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] mb-2">{card.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Software Expertise (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Software Stack
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Software Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our specialists are trained across all major UK personal tax packages to ensure compatibility with your practice tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Personal Tax Software
              </h4>
              <div className="space-y-2">
                {["IRIS Personal Tax", "CCH Personal Tax", "TaxCalc Personal Tax", "BTCSoftware", "Capium Personal Tax", "Absolute Tax", "Forbes Professional"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting Software
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Document & Workflow Tools
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Why Choose NextLedgers? (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Firm Benefits
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Why Choose NextLedgers?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We deliver dedicated UK compliance expertise that fits into your practice routines seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "ACCA-Led Delivery Team",
              "UK Personal Tax Expertise",
              "Self Assessment Specialists",
              "White-Label Service Delivery",
              "Dedicated Offshore Resources",
              "Multi-Software Expertise",
              "Structured Review Processes",
              "Flexible Engagement Models",
              "Secure Data Handling"
            ].map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#F58220]/35 hover:shadow-xs transition-all duration-300 flex items-center gap-3.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] group-hover:scale-105 transition-transform">
                  ✓
                </div>
                <span className="text-gray-800 font-extrabold text-xs sm:text-[13px] leading-tight">
                  {adv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Your Offshore Personal Tax Compliance Partner (Centered Card CTA, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-[#FEF4E4]/40 border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Tax Compliance Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Personal Tax Compliance Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Personal tax compliance requires technical expertise, confidentiality, and attention to detail. Our experienced professionals help UK accounting firms increase capacity while maintaining high standards of accuracy and compliance.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you need support with Self Assessment returns, director tax returns, partnership reporting, capital gains calculations, foreign income disclosures, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while delivering exceptional service to your clients.
              </p>
            </div>
            {/* Booking Call & Proposal Action Buttons */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
              <Button
                text="Request a Proposal"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA D: UK BOOKKEEPING & VAT OUTSOURCING SERVICES                         */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="bookkeeping-vat", bg #ffffff, heading #EA7C24) */}
      <div id="bookkeeping-vat" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource UK Bookkeeping & VAT
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Bookkeeping & VAT Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Accurate Bookkeeping. Better Decisions. Stronger Business Growth. Streamline day-to-day transaction processing with strict HMRC compliance.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with Live Reconciliation Mockup (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Outsourcing Partnership
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Reliable Bookkeeping Support for Growing Practices
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                As accounting firms continue to grow, bookkeeping and VAT compliance often become some of the most time-consuming services to manage. Maintaining accurate financial records, reconciling accounts, processing invoices, and ensuring VAT compliance requires significant time, consistency, and attention to detail.
              </p>
              <p>
                At NextLedgers, we act as an extension of your accounting practice, providing reliable offshore bookkeeping and VAT support that helps your firm increase capacity, improve turnaround times, and reduce operational pressure.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you require ongoing bookkeeping support, month-end processing, backlog clean-up, or dedicated offshore resources, our team integrates seamlessly into your existing workflow.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Side: Ledger Balance Mockup UI */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">Reconciliation Ledger</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">BALANCED</span>
              </div>

              <div className="space-y-2.5 text-xs text-[#0F274A]">
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Bank Account (GBP):</span>
                  <span className="font-extrabold text-emerald-600">✓ Reconciled</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Credit Cards:</span>
                  <span className="font-extrabold text-emerald-600">✓ Match (128 txs)</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Accounts Payable Ledger:</span>
                  <span className="font-extrabold text-gray-700">£12,480.00</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Accounts Receivable Ledger:</span>
                  <span className="font-extrabold text-gray-700">£24,930.50</span>
                </div>
                <div className="flex justify-between pt-1.5 font-extrabold text-[#F58220] font-mono text-[11px]">
                  <span>Trial Balance Variance:</span>
                  <span>0.00 Variance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Why Accurate Bookkeeping Matters (bg #ffffff, heading color #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Financial Foundations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why Accurate Bookkeeping Matters
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Bookkeeping is much more than recording transactions. It forms the foundation of every financial report, tax return, and business decision.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Maintaining accurate books helps businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Understand Position", desc: "Gain instant visibility into cash balances and actual asset performance.", icon: "📒" },
              { title: "Monitor Cash Flow", desc: "Keep track of active inflows, outflows, and working capital requirements.", icon: "💸" },
              { title: "Customer & Supplier Balances", desc: "Ensure trade debts and supplier invoices are recorded and managed correctly.", icon: "🤝" },
              { title: "Reliable Management Accounts", desc: "Create robust, audit-ready balance sheets and P&L reports.", icon: "📈" },
              { title: "Support VAT Compliance", desc: "Verify input and output VAT digital links in accordance with HMRC rules.", icon: "🧾" },
              { title: "Early Error Detection", desc: "Identify duplicates, input mistakes, and missing invoices before deadlines.", icon: "🔍" },
              { title: "Data-Driven Decisions", desc: "Formulate business development strategies backed by certified books.", icon: "📊" },
              { title: "Strengthen Relationships", desc: "Build client trust by processing daily accounting entries accurately.", icon: "👥" },
              { title: "Create Advisory Capacity", desc: "Free up practice capacity to deliver premium advisory services.", icon: "🚀" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/25 p-5 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/45 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#F58220]/20 flex items-center justify-center text-lg mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Bookkeeping & Reconciliation Dual Checklists (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Services Deliverables
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our UK Bookkeeping & Reconciliation Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We process, manage, and reconcile every transaction, providing clean and submission-ready accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Bookkeeping Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📒</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our UK Bookkeeping Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "General Ledger Maintenance",
                    "Sales & Purchase Ledger Processing",
                    "Customer & Supplier Ledger Management",
                    "Fixed Asset Register Maintenance",
                    "Journal Entries, Accruals & Prepayments",
                    "Multi-Currency Bookkeeping",
                    "Accounts Receivable Management",
                    "Accounts Payable Management",
                    "Bank & Control Account Reconciliations",
                    "Month-End Working Papers & Reporting",
                    "Backlog Bookkeeping Clean-Up",
                    "Bookkeeping Review & Reporting Support"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reconciliations Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🔄</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our Reconciliation Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Bank Reconciliations",
                    "Credit Card Reconciliations",
                    "Payroll Reconciliations",
                    "Inventory Reconciliations",
                    "VAT & CIS Reconciliations",
                    "Intercompany Reconciliations",
                    "Factoring & Control Account Reconciliations"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Specialist VAT Support (id="vat-mtd-overview", bg #ffffff, heading color #EA7C24) */}
      <div id="vat-mtd-overview" className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Making Tax Digital (MTD)
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Specialist VAT Support for UK Accounting Firms
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                VAT remains one of the most technically demanding areas of UK compliance. Different industries and transaction types often require specialised VAT treatment and careful review.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Our experienced VAT team supports accounting firms with preparation, reconciliation, and submission-ready VAT workings across multiple industries and VAT schemes.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Request a Proposal"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Side: Interactive MTD VAT Gateway Mockup */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-[#faf9f6] border border-gray-200 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-xs relative overflow-hidden font-mono text-[11px] text-[#0F274A]">
              {/* Header */}
              <div className="border-b border-gray-200 pb-3 mb-4 flex items-center justify-between">
                <span className="font-bold text-[#EA7C24] uppercase tracking-wide">MTD VAT GATEWAY</span>
                <span className="bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.5 rounded text-[9px] animate-pulse">ACTIVE</span>
              </div>

              {/* VAT calculations */}
              <div className="space-y-2.5 mb-4 text-xs">
                <div className="flex justify-between">
                  <span>Box 1 (Output VAT):</span>
                  <span className="font-extrabold">£8,940.20</span>
                </div>
                <div className="flex justify-between">
                  <span>Box 4 (Input VAT):</span>
                  <span className="font-extrabold">£3,410.50</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 font-extrabold text-sm">
                  <span>Box 5 (Net VAT Due):</span>
                  <span className="text-[#EA7C24]">£5,529.70</span>
                </div>
              </div>

              {/* Checklist */}
              <div className="bg-white p-3 rounded-xl border border-gray-100 space-y-1.5 text-[10px]">
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <span>✓</span> <span>MTD digital links verified</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <span>✓</span> <span>Input invoice verification complete</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <span>✓</span> <span>HMRC API schema generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Why VAT Compliance Matters (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              HMRC Compliance Auditing
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Why VAT Compliance Matters
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              VAT errors can result in penalties, incorrect tax payments, and unnecessary HMRC enquiries.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Effective VAT management helps businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Meet HMRC Obligations", desc: "Submit complete tax records on time to prevent default surcharge fees." },
              { title: "Verify Records", desc: "Maintain structured records and regular cross-ledger reconciliations." },
              { title: "Identify Errors Early", desc: "Spot errors in custom transactions before submission to HMRC." },
              { title: "Calculation Confidence", desc: "Enhance practice accuracy in VAT returns and adjustments calculations." },
              { title: "Reduce Risk", desc: "Lower the administration overheads and operational risk of tax penalties." },
              { title: "Complex Treatments", desc: "Verify correct VAT treatment for imports, exports, and specific exemptions." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-[#F58220]/10 hover:border-[#F58220]/30 transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <span className="w-6 h-6 rounded-lg bg-[#FEF4E4] border border-[#F58220]/20 flex items-center justify-center text-xs font-bold text-[#F58220] mb-3 group-hover:scale-105 transition-transform">✓</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Our VAT Services Include (bg #ffffff, heading color #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              VAT Scope
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Our VAT Services Include
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Dedicated VAT operations that keep your clients compliant and audit-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {[
              { name: "VAT Return Preparation", desc: "Submission-ready tax files." },
              { name: "VAT Reconciliations", desc: "Match outputs to bank ledgers." },
              { name: "VAT Liability Reviews", desc: "Assess calculations and claims." },
              { name: "Input & Output Verification", desc: "Audit digital invoice link entries." },
              { name: "VAT Control Account Reviews", desc: "Audit balance sheet control balances." },
              { name: "VAT Error Identification", desc: "Locate omissions prior to filing." },
              { name: "Adjustment Calculations", desc: "Manage specific capital/bad debt reliefs." },
              { name: "HMRC Query Support", desc: "Assist with standard compliance queries." }
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/40 p-4 rounded-xl border border-[#F58220]/15 hover:bg-[#FEF4E4]/70 hover:shadow-xs hover:border-[#F58220]/30 transition-all duration-300"
              >
                <span className="text-[#F58220] font-extrabold text-xs sm:text-sm leading-tight block mb-1">
                  {srv.name}
                </span>
                <span className="text-gray-500 text-[10px] leading-tight block">{srv.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7: Software, eCommerce & Payment platforms 4-column tech stack (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Software Stack
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Bookkeeping, eCommerce & Integration Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We leverage your existing technology integrations to deliver seamless offshore execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Column 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting Software
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "Capium", "KashFlow"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Document Processing
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA7C24]" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                eCommerce Integration
              </h4>
              <div className="space-y-2">
                {["A2X", "Shopify", "Amazon", "eBay", "Etsy", "WooCommerce"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Payment Platforms
              </h4>
              <div className="space-y-2">
                {["Stripe", "PayPal", "Wise", "GoCardless"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Why Choose NextLedgers? (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Partner Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why Choose NextLedgers for Bookkeeping & VAT?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Dedicated bookkeeping specialists who work as an extension of your practice, ensuring total accuracy and HMRC compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "ACCA-Led Team with UK Accounting Expertise",
              "Dedicated Offshore Bookkeeping & VAT Specialists",
              "White-Label Service Delivery",
              "Structured Review Processes",
              "Secure Data Handling",
              "Flexible Engagement Models",
              "Scalable Support Without Increasing Overheads"
            ].map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#faf9f6] p-4.5 rounded-2xl border border-gray-100 hover:border-[#F58220]/35 hover:shadow-xs transition-all duration-300 flex items-center gap-3.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] group-hover:scale-105 transition-transform">
                  ✓
                </div>
                <span className="text-gray-800 font-extrabold text-xs sm:text-[13px] leading-tight">
                  {adv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 9: Your Offshore Bookkeeping & VAT Partner (Centered Card CTA, bg #FEF4E4 outer, bg #ffffff card inner) */}
      <div className="w-full bg-[#FEF4E4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-white border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-[#FEF4E4] border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Bookkeeping & VAT Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Bookkeeping & VAT Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Reliable bookkeeping and VAT processes are essential for accurate financial reporting and effective business management. Our experienced professionals help accounting firms streamline day-to-day financial processing while maintaining high standards of accuracy and compliance.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you need support with selected clients, month-end bookkeeping, VAT preparation, backlog clean-up, or a dedicated offshore team, NextLedgers can help your practice scale efficiently while delivering consistent, high-quality service.
              </p>
            </div>
            {/* Booking Call & Proposal Action Buttons */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
              <Button
                text="Request a Proposal"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA E: UK BUSINESS ADVISORY & VIRTUAL CFO OUTSOURCING SERVICES           */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="advisory", bg #ffffff, heading #EA7C24) */}
      <div id="advisory" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource Business Advisory & CFO
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Business Advisory & <br className="hidden sm:inline" />
            Virtual CFO Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reliable Business Advisory & Virtual CFO Support for UK Accounting Firms — deliver strategic financial leadership and high-value advisory.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with CFO console mockup (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Strategic Financial Guidance
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Expand Your Firm's High-Value Services
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Today's businesses expect far more than compliance and bookkeeping. They rely on their accountants to provide strategic financial guidance, management reporting, cash flow forecasting, budgeting, profitability analysis, commercial insights, tax planning, and business setup support that help them make informed business decisions. As client expectations continue to evolve, UK accounting firms often require additional resources to deliver high-value advisory services while managing increasing workloads.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, we provide dedicated offshore Business Advisory & Virtual CFO support to UK accounting firms, accountancy practices, and business advisory firms. Our white-label outsourcing solutions help firms expand their advisory services, improve reporting efficiency, deliver strategic financial insights, support tax planning engagements, and streamline business setup processes without increasing internal staffing costs.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Content: Premium CFO Console Mockup */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden font-mono text-[11px] text-[#0F274A]">
              {/* Top border strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">Virtual CFO Console</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">HEALTHY</span>
              </div>

              {/* Progress and KPIs */}
              <div className="space-y-3.5 mb-4 text-xs">
                <div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                    <span>Operating Profit Margin Target</span>
                    <span>24.5% (+2.1% MoM)</span>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#F58220] to-emerald-500 h-full rounded-full w-[78%]"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#faf9f6] p-2.5 rounded-lg border border-gray-100">
                    <span className="text-[9px] text-gray-400 block font-bold">CASH RUNWAY</span>
                    <span className="font-extrabold text-[#0F274A]">8.2 Months</span>
                  </div>
                  <div className="bg-[#faf9f6] p-2.5 rounded-lg border border-gray-100">
                    <span className="text-[9px] text-gray-400 block font-bold">BREAK-EVEN VOLUME</span>
                    <span className="font-extrabold text-[#0F274A]">£35,000 / mo</span>
                  </div>
                </div>
              </div>

              {/* Actionable recommendation */}
              <div className="bg-[#FEF4E4]/40 p-3 rounded-xl border border-[#F58220]/10 space-y-1.5 text-[10px] text-gray-700">
                <div className="font-bold text-[#0F274A] mb-1">CFO Strategic Advisory recommendation:</div>
                <p className="leading-relaxed">
                  "Transition transactional bookkeeping tasks offshore to increase professional services margin by 8.4% starting Q3."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Why Business Advisory & Virtual CFO Services Matter (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Strategic Advisory
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why Business Advisory & Virtual CFO Services Matter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Business Advisory and Virtual CFO services go beyond statutory compliance by helping business owners understand performance, structure effectively, and make confident decisions.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Effective advisory support helps businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Monitor Performance", desc: "Verify actual financial deliverables against business projections.", icon: "📊" },
              { title: "Improve Profitability", desc: "Identify operational bottlenecks and cost saving areas.", icon: "📈" },
              { title: "Strengthen Cash Flow", desc: "Perform detailed working capital and cash buffer analysis.", icon: "💸" },
              { title: "Strategic Decision-Making", desc: "Back up critical boardroom options with financial modeling.", icon: "🎯" },
              { title: "Budgeting & Forecasting", desc: "Build realistic budgets and monthly rolling projections.", icon: "🗓️" },
              { title: "Optimise Tax Efficiency", desc: "Structure profit extractions and corporate entities proactively.", icon: "🏛" },
              { title: "Growth Opportunities", desc: "Locate expansion pathways and capital investment feasibility.", icon: "🚀" },
              { title: "Strengthen Controls", desc: "Design internal accounting review loops to minimize errors.", icon: "🔒" },
              { title: "Increase Confidence", desc: "Increase stakeholder, lender, and investor reporting clarity.", icon: "🤝" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/25 p-5 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/45 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#F58220]/20 flex items-center justify-center text-lg mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Interactive Tabbed Service Suite (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Dynamic Services Switcher
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our Advisory & CFO Service Suite
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Click the tabs below to explore our comprehensive white-label outsourcing deliverables.
            </p>
          </div>

          {/* Interactive tabs (swipeable on mobile) */}
          <div className="flex overflow-x-auto whitespace-nowrap pb-2.5 gap-2 scrollbar-none justify-start lg:justify-center mb-6">
            {[
              { id: "advisory", label: "📊 Business Advisory" },
              { id: "cfo", label: "💼 Virtual CFO" },
              { id: "tax", label: "💰 Tax Planning" },
              { id: "startup", label: "🏢 Start-Up & Compliance" },
              { id: "budgeting", label: "📈 Budgeting & Planning" },
              { id: "performance", label: "⚙️ Performance Support" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-extrabold rounded-full border transition-all duration-300 ${activeTab === tab.id
                  ? "bg-[#F58220] text-white border-[#F58220] shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#F58220]/30 hover:text-[#F58220]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content grid */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#F58220]/15 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {getTabItems().map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 bg-[#faf9f6] rounded-xl border border-gray-50 hover:bg-[#FEF4E4]/30 transition-all"
                >
                  <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">
                    ✓
                  </div>
                  <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {activeTab === "startup" && (
              <p className="text-[10px] text-gray-500 mt-4 leading-relaxed border-t border-gray-100 pt-3">
                *Company formations are coordinated through trusted third-party company formation agents. NextLedgers manages the documentation, onboarding, and compliance process while working alongside authorised incorporation providers.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section 4: How We Help UK Accounting Firms (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Practice Capabilities
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              How We Help UK Accounting Firms
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Grow advisory services and strengthen client relationships without overheads.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Expand Advisory Offerings", desc: "Deliver Virtual CFO and commercial modeling support instantly." },
              { title: "Increase Capacity", desc: "Build monthly reporting packs for dozens of clients without delays." },
              { title: "Improve Turnarounds", desc: "Process forecasting and marginal reviews ahead of budget cycles." },
              { title: "Deliver High Value", desc: "Elevate your client service offerings from compliance to guidance." }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:border-[#F58220]/25 transition-all duration-300">
                <span className="text-[#F58220] text-xs font-mono font-bold block mb-1">0{idx + 1}</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{card.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
            {[
              { title: "Strengthen Relationships", desc: "Engage clients with regular, insight-driven performance meetings." },
              { title: "Reduce Internal Load", desc: "Free up local accountants from building complex Excel forecasting tables." },
              { title: "Operational Efficiency", desc: "Streamline data ingestion directly into Syft or Fathom." },
              { title: "Headcount-Free Scale", desc: "Grow practice advisory revenues without adding UK personnel costs." }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#faf9f6] p-5 rounded-2xl border border-gray-50 hover:border-[#F58220]/25 transition-all duration-300">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{card.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 5: Software Expertise (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Advisory Integrations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Advisory Software & Spreadsheet Tools
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We leverage your existing technology integrations to deliver seamless offshore execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting Software
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "AccountsIQ", "iplicit"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Reporting & Forecasting
              </h4>
              <div className="space-y-2">
                {["Fathom", "Spotlight Reporting", "Syft Analytics", "Float", "Futrli", "Microsoft Excel", "Google Sheets"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA7C24]" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Workflow & Collaboration
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "ApprovalMax", "Microsoft 365", "Google Workspace"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Industries We Support (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Sectors Covered
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Industries We Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We support UK accounting firms serving clients across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
            {[
              { name: "Professional Services", icon: "💼" },
              { name: "Construction & Trades", icon: "🏗️" },
              { name: "E-Commerce", icon: "🛒" },
              { name: "Retail Businesses", icon: "🏬" },
              { name: "Manufacturing", icon: "⚙️" },
              { name: "Hospitality Businesses", icon: "🍽️" },
              { name: "Healthcare Providers", icon: "🩺" },
              { name: "Recruitment Agencies", icon: "👥" },
              { name: "Technology Firms", icon: "💻" },
              { name: "Property & Real Estate", icon: "🏢" }
            ].map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/40 p-4 rounded-xl border border-[#F58220]/15 text-center hover:bg-[#FEF4E4]/70 hover:shadow-xs hover:border-[#F58220]/30 transition-all duration-300 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{ind.icon}</div>
                <span className="text-[#0F274A] font-extrabold text-[11px] sm:text-xs leading-snug block">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7: Why Choose NextLedgers? (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Offshore Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Why Choose NextLedgers?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We stand apart through our UK advisory experience and scalable Offshore support framework.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "ACCA-Led Delivery Team",
              "UK Business Advisory Expertise",
              "Virtual CFO Experience",
              "Tax Planning Support Expertise",
              "Companies House ID & Setup Support",
              "White-Label Service Delivery",
              "Dedicated Offshore Resources",
              "Structured Review Processes",
              "Secure Data Handling",
              "Flexible Engagement Models",
              "Scalable Support Framework"
            ].map((adv, idx) => (
              <div
                key={idx}
                className="bg-white p-4.5 rounded-2xl border border-gray-100 hover:border-[#F58220]/35 hover:shadow-xs transition-all duration-300 flex items-center gap-3.5 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#F58220] flex items-center justify-center flex-shrink-0 text-white font-bold text-[10px] group-hover:scale-105 transition-transform">
                  ✓
                </div>
                <span className="text-gray-800 font-extrabold text-xs sm:text-[13px] leading-tight">
                  {adv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Your Offshore Business Advisory & CFO Partner (Centered Card CTA, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-[#FEF4E4]/40 border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Advisory & CFO Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Business Advisory & Virtual CFO Delivery Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Business Advisory and Virtual CFO services require commercial insight, analytical expertise, and proactive financial leadership. Our dedicated professionals work as an extension of your practice, helping you deliver meaningful financial insights, strategic business advice, tax planning support, and business setup assistance while freeing up valuable internal resources.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you require support with management accounts, budgeting, forecasting, financial modelling, KPI reporting, cash flow management, board reporting, profitability analysis, tax planning, Companies House compliance, business start-up support, or dedicated offshore advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.
              </p>
            </div>
            {/* Booking Call Action Button */}
            <div className="flex justify-center w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA F: UK COMPANY FORMATION & COMPANY SECRETARIAL SERVICES               */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="company-formation", bg #ffffff, heading #EA7C24) */}
      <div id="company-formation" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Company Formation & Secretarial Support
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Company Formation & <br className="hidden sm:inline" />
            Company Secretarial Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reliable Company Formation & Company Secretarial Support for UK Accounting Firms — streamline statutory filing and client incorporations.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with Companies House portal mockup (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Corporate Compliance
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Reliable Company Secretarial Support for UK Practices
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Company formation and ongoing company secretarial compliance are essential services offered by modern accounting firms. From incorporating new companies and completing Companies House identity verification requirements to maintaining statutory records and managing Companies House filings, businesses rely on their accountants to ensure they remain compliant throughout their business lifecycle.
              </p>
              <p className="font-semibold text-[#0F274A]">
                As your practice grows, managing company formations, statutory filings, and company secretarial work for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Company Formation & Company Secretarial support to UK accounting firms, accountancy practices, and corporate service providers. Our white-label outsourcing solutions help firms increase capacity, improve turnaround times, and deliver reliable compliance services without increasing internal staffing costs.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Content: Companies House Gate Mockup */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden font-mono text-[11px] text-[#0F274A]">
              {/* Top border strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">Companies House Sync</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">VERIFIED</span>
              </div>

              {/* Progress and lists */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Companies House ID Verification:</span>
                  <span className="font-extrabold text-emerald-600">✓ SECURED</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">PSC Register Status:</span>
                  <span className="font-extrabold text-emerald-600">✓ SYNCED</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Confirmation Statement (CS01):</span>
                  <span className="font-extrabold text-emerald-600">✓ FILED</span>
                </div>
                <div className="flex justify-between pb-1.5">
                  <span className="text-gray-500">Director Appointments:</span>
                  <span className="font-extrabold text-gray-700">2 Active</span>
                </div>
              </div>

              {/* Deadline alert footer */}
              <div className="bg-[#FEF4E4]/40 p-2.5 rounded-lg border border-[#F58220]/10 mt-3 flex justify-between text-[10px] text-gray-500">
                <span>Next CS01 Filing Deadline:</span>
                <span className="font-bold text-[#F58220]">14 Aug 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Why Company Secretarial Matters (Asymmetrical Grid Cards, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Corporate Governance
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why Company Formation & Company Secretarial Services Matter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Setting up a company correctly and maintaining statutory compliance are fundamental to good corporate governance.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Professional company secretarial support helps businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Establish Correctly", desc: "Build client business structures correctly from incorporation day one." },
              { title: "Meet Deadlines", desc: "Avoid statutory filing penalties and delay notifications to HMRC/Companies House." },
              { title: "Maintain Compliance", desc: "Keep pace with ongoing Companies House filing modifications and directives." },
              { title: "Statutory Registers", desc: "Audit and update director registries and PSC details consistently." },
              { title: "Reduce Regulatory Risk", desc: "Avoid structural non-compliance warnings and registration delays." },
              { title: "Corporate Governance", desc: "Implement board meeting templates, minutes, and resolutions." },
              { title: "Stakeholder Confidence", desc: "Deliver clean, transparent ownership filings to banks and lenders." },
              { title: "Reduce Admin Load", desc: "Save local accountants from managing physical paperwork registries." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#faf9f6] p-5 rounded-2xl hover:bg-white border-l-2 border-l-gray-200 hover:border-l-[6px] hover:border-l-[#F58220] border-y border-r border-gray-100 hover:shadow-xs transition-all duration-200"
              >
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Statutory Lifecycle Flow for Formation vs Secretarial (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Compliance Timeline
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Statutory Lifecycle Flow & Services
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              From incorporation to daily compliance, we manage the full Companies House lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Formation Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs relative">
              <span className="absolute -top-3.5 left-6 bg-[#F58220] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                Phase 1: Company Formation
              </span>
              <div className="mt-2.5">
                <div className="space-y-2.5">
                  {[
                    "Company Formation Coordination*",
                    "Companies House Identity Verification (ID Verification) Support",
                    "Company Name Availability Checks",
                    "Company Incorporation Documentation Preparation",
                    "Director & Shareholder Onboarding Support",
                    "Business Structure Guidance",
                    "Registered Office Documentation Support",
                    "Corporation Tax Registration Support",
                    "PAYE Employer Registration Support",
                    "VAT Registration Support",
                    "New Business Compliance Checklists",
                    "Director & Shareholder Compliance Guidance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 bg-[#faf9f6] rounded-xl hover:bg-[#FEF4E4]/30 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-[#FEF4E4] border border-[#F58220]/25 flex items-center justify-center flex-shrink-0 text-[#F58220] text-[9px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Secretarial Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs relative">
              <span className="absolute -top-3.5 left-6 bg-[#0F274A] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                Phase 2: Ongoing Secretarial
              </span>
              <div className="mt-2.5">
                <div className="space-y-2.5">
                  {[
                    "Confirmation Statement Preparation (CS01)",
                    "Companies House Filing Support",
                    "Statutory Register Maintenance",
                    "Director Appointment & Resignation Documentation",
                    "Share Allotment Documentation",
                    "Share Transfer Documentation",
                    "Persons with Significant Control (PSC) Register Maintenance",
                    "Registered Office Change Documentation",
                    "Company Name Change Documentation",
                    "Board Minutes & Written Resolutions",
                    "Dividend Documentation Preparation",
                    "Company Secretarial Record Maintenance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 bg-[#faf9f6] rounded-xl hover:bg-[#FEF4E4]/30 transition-colors">
                      <span className="w-5 h-5 rounded-full bg-[#FEF4E4] border border-[#F58220]/25 flex items-center justify-center flex-shrink-0 text-[#F58220] text-[9px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Companies House Compliance & Business Start-up support (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Filing Operations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Companies House Compliance & Business Start-Up
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We help UK accounting practices streamline new setups and monitor annual filing timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Column A: Companies House Compliance */}
            <div className="bg-[#faf9f6] p-5 rounded-3xl border border-gray-100">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Companies House Compliance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Companies House Filing Monitoring",
                  "Annual Compliance Calendar Management",
                  "Company Information Updates",
                  "Statutory Record Reviews",
                  "Filing Deadline Monitoring",
                  "Director & Shareholder Record Updates",
                  "Companies House Compliance Reviews",
                  "Client Compliance Reminder Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-[11px] font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B: Business Start-Up */}
            <div className="bg-[#faf9f6] p-5 rounded-3xl border border-gray-100">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Business Start-Up & Corporate Compliance
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "New Client Onboarding Support",
                  "Incorporation Documentation Reviews",
                  "Director Identity Verification Support",
                  "Company Administration Support",
                  "Business Registration Documentation",
                  "Compliance Health Checks",
                  "Corporate Record Organisation",
                  "Regulatory Documentation Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: How We Help UK Accounting Firms (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Practice Capacity
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              How We Help UK Accounting Firms
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We help practices minimize administration workloads and deliver seamless client setups.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Increase Capacity", desc: "Increase company secretarial and incorporation volume capabilities." },
              { num: "02", title: "Improve Turnaround", desc: "Prepare confirmation files and registry updates faster." },
              { num: "03", title: "Reduce Admin Workload", desc: "Free up in-house staff from statutory logging chores." },
              { num: "04", title: "Improve Accuracy", desc: "Ensure digital filings are formatted strictly to Companies House requirements." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] relative group hover:border-[#F58220]/25 transition-all duration-300">
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-[#F58220]/30">{item.num}</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
            {[
              { title: "Meet HMRC/CH Deadlines", desc: "Filing reminders and calendar management prevents late penalty fees." },
              { title: "Seamless Client Onboarding", desc: "Complete incorporation checks and tax registration documentation quickly." },
              { title: "Value-Added Services", desc: "Create opportunities to expand corporate advisory and restructure consulting." },
              { title: "Headcount-Free Scale", desc: "Scale back-office secretarial capacity without local recruitment costs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#faf9f6] p-5 rounded-2xl border border-gray-50 hover:border-[#F58220]/25 transition-all duration-300">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6: Software Expertise (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Filing Stack
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Filing Software & Document Tools
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We leverage your preferred compliance applications to deliver seamless offshore execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Secretarial Software
              </h4>
              <div className="space-y-2">
                {["Inform Direct", "Companies House WebFiling", "Virtual Cabinet", "Practice Ignition", "Microsoft Excel"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting Software
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "AccountsIQ", "iplicit"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-50 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Document Management
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "ApprovalMax", "Microsoft 365", "Google Workspace", "SharePoint"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Industries We Support & Why Choose NextLedgers? (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left: Industries We Support tag cloud */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Sectors Covered
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Industries We Support
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Professional Services",
                "Construction & Trades",
                "E-Commerce Businesses",
                "Retail Businesses",
                "Manufacturing Companies",
                "Hospitality Businesses",
                "Healthcare Providers",
                "Recruitment Agencies",
                "Technology Companies",
                "Property & Real Estate"
              ].map((ind, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-gray-100 text-[#0F274A] font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-xs hover:border-[#F58220]/30 transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Why Choose NextLedgers checklist */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Outsourcing Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Why Choose NextLedgers?
            </h3>
            <div className="space-y-2.5">
              {[
                "ACCA-Led Delivery Team",
                "UK Company Secretarial Expertise",
                "Companies House Compliance Knowledge",
                "White-Label Service Delivery",
                "Dedicated Offshore Resources",
                "Structured Review Processes",
                "Secure Data Handling",
                "Flexible Engagement Models",
                "Scalable Support Framework"
              ].map((adv, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#F58220] text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span className="text-gray-800 text-xs sm:text-sm font-semibold">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Your Offshore Company Secretarial Delivery Partner (Centered CTA Card, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-[#FEF4E4]/40 border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-white border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Secretarial Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Company Formation & Company Secretarial Delivery Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Company formation and company secretarial services require accuracy, organisation, confidentiality, and ongoing compliance management. Our dedicated professionals work as an extension of your practice, helping you deliver efficient company formation, statutory compliance, and corporate administration services while freeing up valuable internal resources.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you require support with company formation coordination, Companies House identity verification, confirmation statements, statutory register maintenance, director and shareholder changes, corporate governance documentation, or dedicated offshore company secretarial resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.
              </p>
            </div>
            {/* Booking Call Action Button */}
            <div className="flex justify-center w-full mb-4">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed max-w-2xl mx-auto text-left sm:text-center mt-3 border-t border-gray-200/50 pt-3">
              *Company formations are coordinated through trusted third-party company formation agents. NextLedgers manages the documentation, onboarding, and compliance process while working alongside authorised incorporation providers.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA G: UK VAT & MAKING TAX DIGITAL (MTD) OUTSOURCING SERVICES            */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="vat-mtd", bg #ffffff, heading #EA7C24) */}
      <div id="vat-mtd" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource UK VAT & MTD
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK VAT & Making Tax Digital <br className="hidden sm:inline" />
            (MTD) Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Specialist VAT Compliance Support for UK Accounting Firms — increase capacity and manage Making Tax Digital compliance.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with VAT computation panel mockup (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              VAT Compliance
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Specialist VAT Compliance Support for UK Accounting Firms
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                VAT remains one of the most technically challenging and frequently changing areas of UK taxation. From registrations and VAT returns to complex schemes and Making Tax Digital (MTD) requirements, accounting firms must continually manage compliance while delivering timely and accurate services to clients.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, we provide dedicated offshore VAT and MTD support to UK accounting firms, helping practices increase capacity, improve compliance processes, and manage growing client portfolios efficiently. Whether your firm requires support with routine VAT returns, reconciliations, MTD compliance, or complex VAT schemes, our team acts as a seamless extension of your practice.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Content: VAT Audit Console Mockup */}
          <div className="flex items-center justify-center py-2 lg:py-0 w-full">
            <div className="bg-white border border-[#F58220]/25 rounded-[20px] p-5 sm:p-6 w-full max-w-[420px] shadow-[0_15px_30px_rgba(245,130,32,0.05)] relative overflow-hidden font-mono text-[11px] text-[#0F274A]">
              {/* Top border strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#F58220] to-[#EA7C24]"></div>

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-gray-400">VAT Computation Portal</span>
                </div>
                <span className="bg-[#FEF4E4] text-[#F58220] font-mono text-[9px] font-extrabold px-2 py-0.5 rounded-md border border-[#F58220]/15">AUDITED</span>
              </div>

              {/* Computations stats */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">VAT Period:</span>
                  <span className="font-bold text-gray-700">Q2 2026 (Apr - Jun)</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Standard Rate Sales:</span>
                  <span className="font-bold text-gray-700">£120,400.00 (VAT: £24,080.00)</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Zero-Rated & Exempt Sales:</span>
                  <span className="font-bold text-gray-700">£14,500.00 (VAT: £0.00)</span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-1.5">
                  <span className="text-gray-500">Input VAT Reconciled:</span>
                  <span className="font-bold text-emerald-600">£8,940.20</span>
                </div>
                <div className="flex justify-between font-extrabold text-[#F58220] font-mono text-[11px] pt-1">
                  <span>HMRC Net Tax Liability:</span>
                  <span>£15,139.80 Due</span>
                </div>
              </div>

              {/* API confirmation */}
              <div className="bg-[#FEF4E4]/40 p-2.5 rounded-lg border border-[#F58220]/10 mt-3 flex justify-between text-[10px] text-gray-500">
                <span>MTD Digital Gate Link:</span>
                <span className="font-bold text-[#F58220]">✓ HMRC_API_v2.1 Synced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Why VAT & MTD Matter (Asymmetrical Grid Cards, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Computational Accuracy
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why VAT & MTD Matter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              VAT compliance involves much more than completing a quarterly return. Businesses must maintain accurate digital links.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Effective VAT and MTD management helps businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Meet HMRC Obligations", desc: "Submit complete files accurately and on time to prevent default surcharge fees.", icon: "🏛️" },
              { title: "Maintain Digital Records", desc: "Keep pace with digital record-keeping rules and API data structures.", icon: "💻" },
              { title: "Reduce Penalties & Errors", desc: "Avoid margin assessment issues and costly HMRC compliance warnings.", icon: "🛡️" },
              { title: "Improve Computation Confidence", desc: "Calculate inputs, exports, and specific exemptions correctly.", icon: "📈" },
              { title: "Handle Complex Transactions", desc: "Correctly apply reverse charges and overseas tax rules.", icon: "🔄" },
              { title: "Streamline Processes", desc: "Formulate automated invoice and software pipelines for faster filings.", icon: "⚙️" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/25 p-5 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/45 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#F58220]/20 flex items-center justify-center text-lg mb-3 shadow-xs group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Our VAT Services Include (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Services Deliverables
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our VAT Services Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We manage registrations, reconciliations, and filings, ensuring compliance with UK rules.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#F58220]/15 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                "VAT Registration & Deregistration Support",
                "VAT Return Preparation & Review Support",
                "Submission-Ready VAT Working Papers",
                "VAT Reconciliations & Liability Reviews",
                "VAT Control Account Reviews",
                "VAT Adjustments & Error Corrections",
                "HMRC VAT Correspondence Support",
                "VAT Health Checks & Compliance Reviews",
                "Reverse Charge & International VAT Support",
                "Industry-Specific VAT Analysis"
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col justify-between p-4 bg-[#faf9f6] rounded-xl hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors group">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#F58220] flex items-center justify-center text-white font-bold text-[9px] mb-3 group-hover:scale-110 transition-transform">✓</div>
                  <span className="text-[11px] font-extrabold text-[#0F274A] leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Making Tax Digital Journey (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              MTD Journey
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Making Tax Digital (MTD) Support Journey
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              How our team works with your practice to secure digital link compliance.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-[#F58220]/25 hidden sm:block" />

            <div className="space-y-4">
              {[
                { title: "MTD-Compliant Record Reviews", desc: "Audit manual ledger input items to identify compliance anomalies." },
                { title: "Digital Record Maintenance", desc: "Keep transaction logs sync'd with cloud software databases." },
                { title: "Software Compliance Reviews", desc: "Verify HMRC-approved digital bridging options or API connections." },
                { title: "MTD VAT Submission Support", desc: "Prepare box liabilities and submit final returns via MTD gateway." },
                { title: "Digital Link Reviews", desc: "Establish digital links from spreadsheets to final VAT return files." },
                { title: "Process Improvement Recommendations", desc: "Streamline client invoice importing using automated Dext tools." },
                { title: "Client Migration Support", desc: "Move historical clients from paper books to cloud software structures." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-start gap-4 relative group">
                  {/* Number Node */}
                  <div className="w-8 h-8 rounded-full bg-[#FEF4E4] border border-[#F58220]/30 flex items-center justify-center text-xs font-bold text-[#F58220] z-10 group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </div>
                  <div className="bg-[#faf9f6] p-4.5 rounded-2xl border border-gray-100 flex-1 group-hover:border-[#F58220]/25 transition-all duration-300">
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-1.5">{step.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: VAT Schemes We Support (Scheme Matrix, bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Filing Schemes
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              HMRC VAT Schemes We Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We calculate liabilities across standard and specialized tax schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Core Schemes */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs">
              <h4 className="text-sm sm:text-base font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Core VAT Schemes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Standard VAT Accounting Scheme",
                  "Annual Accounting Scheme",
                  "Cash Accounting Scheme",
                  "Flat Rate VAT Scheme",
                  "VAT Retail Schemes",
                  "VAT Margin Schemes"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#faf9f6] rounded-xl border border-gray-100 hover:border-[#F58220]/25 transition-all">
                    <span className="text-[11px] font-bold text-[#0F274A] block leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialist & International */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs">
              <h4 className="text-sm sm:text-base font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#0F274A] rounded-full" />
                Specialist & International VAT
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Domestic Reverse Charge VAT",
                  "Construction Reverse Charge",
                  "Import & Export VAT",
                  "EC Sales & International VAT",
                  "Cross-Border Transactions",
                  "Marketplace & eCommerce VAT"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#faf9f6] rounded-xl border border-gray-100 hover:border-[#F58220]/25 transition-all">
                    <span className="text-[11px] font-bold text-gray-700 block leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: VAT Reconciliation & Compliance Reviews (Audit Magnifier Cards, bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              VAT Auditing
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              VAT Reconciliation & Compliance Reviews
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Detailed audit workflows that identify discrepancies before submitting to HMRC.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Control Account Reconciliations", desc: "Tie VAT liabilities directly to balance sheet ledger control files." },
              { title: "Sales & Purchase Reviews", desc: "Cross-check input invoice receipts against digital sales entries." },
              { title: "Reverse Charge Audits", desc: "Ensure reverse charge codes are applied correctly to construction invoices." },
              { title: "Import VAT Reviews", desc: "Verify C79 forms match customs and freight declarations." },
              { title: "VAT Adjustment Reviews", desc: "Manage bad debt reliefs and write-down adjustments correctly." },
              { title: "Transaction Sampling", desc: "Perform periodic sampling to locate incorrect tax code allocations." },
              { title: "Error Identification", desc: "Locate omissions, duplicates, and missing dates prior to filing." },
              { title: "HMRC Readiness Assessments", desc: "Perform mocks to confirm digital audit-trail links operate." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-100 hover:border-[#F58220]/25 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.01)]"
              >
                <div>
                  <span className="text-lg block mb-3">🔍</span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 7: Software Expertise badge deck (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Filing Integration
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              VAT Software & Platforms Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We leverage your existing technology integrations to deliver seamless offshore execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounting Software
              </h4>
              <div className="space-y-2">
                {["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                MTD & VAT Platforms
              </h4>
              <div className="space-y-2">
                {["Xero Tax", "QuickBooks VAT Centre", "Sage VAT Module", "FreeAgent VAT"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA7C24]" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Supporting Tools
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "AutoEntry", "ApprovalMax", "A2X"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 8: Industries & Why Choose NextLedgers (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left: Industries We Support tag cloud */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Sectors Covered
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Industries We Support
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "eCommerce & Online Retail",
                "Construction Companies",
                "Property & Real Estate",
                "Manufacturing & Distribution",
                "Professional Service Firms",
                "Recruitment & Staffing Agencies"
              ].map((ind, idx) => (
                <span
                  key={idx}
                  className="bg-[#FEF4E4]/40 border border-[#F58220]/15 text-[#0F274A] font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full hover:bg-[#FEF4E4]/70 transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Why Choose NextLedgers checklist */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Outsourcing Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Why Choose NextLedgers?
            </h3>
            <div className="space-y-2.5">
              {[
                "ACCA-Led Delivery Team",
                "UK VAT & MTD Expertise",
                "Dedicated Offshore Resources",
                "White-Label Service Delivery",
                "Structured Review Processes",
                "Secure Data Handling",
                "Flexible Engagement Models",
                "Scalable Support Without Increasing Overheads"
              ].map((adv, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#F58220] text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span className="text-gray-800 text-xs sm:text-sm font-semibold">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 9: Your Offshore VAT Compliance Partner (Centered CTA Card, bg #FEF4E4 outer, bg #ffffff card inner) */}
      <div className="w-full bg-[#FEF4E4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-white border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-[#FEF4E4] border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              VAT & MTD Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore VAT & MTD Compliance Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                VAT requires technical knowledge, accuracy, and a thorough understanding of HMRC regulations. Combined with Making Tax Digital requirements, firms increasingly need efficient processes and specialist support to maintain high compliance standards.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, our experienced VAT professionals help UK accounting firms streamline VAT processes, strengthen compliance controls, and scale efficiently without increasing internal resource pressures. Whether you require support with VAT returns, MTD compliance, reconciliations, VAT reviews, or complex VAT schemes, NextLedgers can provide reliable offshore support that integrates seamlessly with your accounting practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* SECTION AREA H: UK YEAR-END ACCOUNTS & CORPORATION TAX OUTSOURCING SERVICES       */}
      {/* ================================================================================= */}

      {/* Section Divider & Header (id="year-end", bg #ffffff, heading #EA7C24) */}
      <div id="year-end" className="w-full bg-white pt-8 pb-4 lg:pt-16 lg:pb-12 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="text-[#F58220] uppercase font-extrabold tracking-widest text-[10px] sm:text-xs bg-[#F58220]/10 px-3 py-1 rounded-full">
            Outsource UK Year-End & Tax
          </span>
          <h2 className="text-[22px] sm:text-[36px] md:text-[46px] font-extrabold text-[#EA7C24] leading-[1.2] mt-3 mb-4">
            UK Year-End Accounts & <br className="hidden sm:inline" />
            Corporation Tax Outsourcing Services
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Reliable Year-End Compliance Support for UK Accounting Firms — statutory accounts, FRS production, and CT600 tax filings.
          </p>
          <div className="w-16 h-1 bg-[#F58220] mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* Section 1: Overview with Image (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left Content */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Filing Compliance
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mb-3">
              Reliable Compliance Support for UK practices
            </h3>
            <div className="space-y-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
              <p>
                Year-end accounts and corporation tax compliance remain at the core of every UK accounting practice. However, as client portfolios grow, deadlines become tighter, regulations evolve, and recruitment challenges increase, many firms struggle to maintain capacity while preserving quality and profitability.
              </p>
              <p>
                Preparing statutory accounts, reviewing year-end adjustments, finalising corporation tax computations, and ensuring compliance with Companies House and HMRC requirements demands technical expertise and meticulous attention to detail.
              </p>
              <p className="font-semibold text-[#0F274A]">
                At NextLedgers, we provide dedicated offshore Year-End Accounts and Corporation Tax support to UK accounting firms, helping practices increase capacity, improve turnaround times, and maintain compliance without increasing internal overheads. Whether you require support for limited companies, partnerships, LLPs, dormant companies, or high-volume year-end processing, our team works as a seamless extension of your practice.
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-bold !rounded-xl shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Right Content: Team Image */}
          <div className="relative h-[220px] sm:h-[300px] lg:h-auto w-full rounded-[18px] overflow-hidden shadow-md group">
            <Image
              src="/images/DSC09901.JPG"
              alt="Year-End Compliance Support"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0F274A]/5 group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Section 2: Why Year-End & Tax Compliance Matters (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Filing Foundations
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Why Year-End Accounts & Corporation Tax Matter
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Accurate financial statements and corporation tax computations provide business owners with a clear picture of performance and keep statutory obligations on schedule.
            </p>
          </div>

          <p className="text-gray-800 text-xs sm:text-sm font-bold text-center mb-6">
            Effective year-end processes help businesses:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Meet Deadlines", desc: "Submit statutory books to Companies House and HMRC on time, avoiding fees." },
              { title: "Statutory Reporting", desc: "Prepare pristine, FRS-compliant annual statements and accounts." },
              { title: "Reconcile Adjustments", desc: "Audit trial balances and compute deferred entries and journal accruals." },
              { title: "Calculate Tax Liabilities", desc: "Ensure corporation tax calculations are aligned with the latest tax codes." },
              { title: "Maximise Reliefs", desc: "Identify R&D, capital allowances, and relevant tax deductions." },
              { title: "Plan Future Growth", desc: "Maintain accurate historical records to back up business forecasts." },
              { title: "Avoid Penalty Risks", desc: "Lower operational risk of compliance audits and statutory fines." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FEF4E4]/25 p-5 rounded-2xl border border-[#F58220]/15 hover:border-[#F58220]/30 hover:bg-[#FEF4E4]/45 transition-all duration-300"
              >
                <span className="w-6 h-6 rounded-lg bg-white border border-[#F58220]/20 flex items-center justify-center text-[10px] font-bold text-[#F58220] mb-3">✓</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] mb-2">{item.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Accounts Production vs Corporation Tax (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Full Services Deliverables
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Our Year-End & Tax Services Support
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              We process, manage, and reconcile every statutory requirement, providing clean, submission-ready tax returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Accounts Production Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">📑</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our Year-End Accounts Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Statutory Accounts Preparation",
                    "Financial Statement Preparation",
                    "Trial Balance Reviews",
                    "Year-End Working Papers",
                    "Lead Schedule Preparation",
                    "Year-End Adjustments & Journals",
                    "Accruals & Prepayments Reviews",
                    "Depreciation & Fixed Asset Reviews",
                    "Director Loan Account Reviews",
                    "Companies House Compliance Support",
                    "Confirmation Statement Preparation",
                    "Audit Support & Structured Working Papers"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corporation Tax Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#F58220]/15 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">💰</span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#EA7C24]">Our Corporation Tax Services Include</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Corporation Tax Computations",
                    "CT600 Preparation",
                    "Capital Allowance Calculations",
                    "Tax Adjustment Calculations",
                    "Loss Utilisation Reviews",
                    "Tax Provision Calculations",
                    "Group Relief Support",
                    "Corporation Tax Working Papers",
                    "Submission-Ready Tax Packs",
                    "Tax Reconciliations & Supporting Schedules"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg hover:bg-[#FEF4E4]/30 border border-gray-50 transition-colors">
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-[9px]">✓</span>
                      <span className="text-[11px] font-bold text-[#0F274A] leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Specialist Support (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-[#FEF4E4] px-3 py-1 rounded-full">
              Compliance Formats
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mt-3 mb-2">
              Specialist Year-End Formats & Adjustments
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our experienced accounting specialists support practices across multiple UK corporate reporting standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Box A: Statutory Accounts */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                  Statutory Accounts Production
                </h4>
                <div className="space-y-2">
                  {[
                    "Micro-Entity Accounts (FRS 105)",
                    "Small Company Accounts (FRS 102 Section 1A)",
                    "Dormant Company Accounts",
                    "LLP Accounts & Partnerships",
                    "Group Reporting Accounts"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-50">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span className="text-[11px] font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box B: Year-End Adjustments */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                  Year-End Adjustments
                </h4>
                <div className="space-y-2">
                  {[
                    "Accruals & Prepayments journals",
                    "Deferred Income & Accrued Interest",
                    "Payroll & Holiday Accruals",
                    "Stock adjustments & bad debt provisions",
                    "Corporation Tax provisions calculation"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-50">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-[11px] font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Box C: Director Accounts */}
            <div className="bg-[#faf9f6] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F274A] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                  Director Accounts & Allowances
                </h4>
                <div className="space-y-2">
                  {[
                    "Director Loan Account (DLA) Reconciliations",
                    "Fixed Asset Register audits",
                    "Depreciation schedule calculations",
                    "Capital Allowance claims reviews",
                    "HMRC compliant S455 disclosures"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Software & Pensions (bg #FEF4E4) */}
      <div className="w-full bg-[#FEF4E4] py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F58220]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider bg-white border border-[#F58220]/15 px-3 py-1 rounded-full">
              Filing Stack
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#0F274A] leading-snug mt-3 mb-2">
              Statutory Software Expertise
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our specialists plug directly into your preferred tools to make the transition frictionless and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Column 1 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Accounts Production
              </h4>
              <div className="space-y-2">
                {["IRIS Accounts Production", "CCH Accounts Production", "TaxCalc Accounts Production", "Capium", "Xero & QuickBooks Online", "Sage Business Cloud", "FreeAgent"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Corporation Tax
              </h4>
              <div className="space-y-2">
                {["IRIS Business Tax", "CCH Corporation Tax", "TaxCalc Corporation Tax", "BTCSoftware Tax", "Capium Corporation Tax"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EA7C24]" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-extrabold text-[#EA7C24] uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1.5 h-3.5 bg-[#F58220] rounded-full" />
                Supporting Tools
              </h4>
              <div className="space-y-2">
                {["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"].map((sw, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#faf9f6] rounded-lg border border-gray-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-gray-700">{sw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Industries & Why Choose NextLedgers (bg #ffffff, heading #EA7C24) */}
      <div className="w-full bg-white py-[5px] lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[10px] lg:gap-16 items-stretch">
          {/* Left: Industries We Support tag cloud */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Sectors Covered
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Industries We Support
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Owner-Managed Businesses",
                "Professional Service Firms",
                "Construction Businesses",
                "eCommerce & Online Retail",
                "Property Investment Companies",
                "Recruitment Agencies",
                "Technology & SaaS Businesses"
              ].map((ind, idx) => (
                <span
                  key={idx}
                  className="bg-[#FEF4E4]/40 border border-[#F58220]/15 text-[#0F274A] font-bold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full hover:bg-[#FEF4E4]/70 transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Why Choose NextLedgers checklist */}
          <div className="flex flex-col justify-center flex-1 py-2 lg:py-0">
            <span className="text-[#F58220] font-bold text-[10px] uppercase tracking-wider mb-1">
              Outsourcing Advantages
            </span>
            <h3 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-3">
              Why Choose NextLedgers?
            </h3>
            <div className="space-y-2.5">
              {[
                "ACCA-Led Delivery Team",
                "UK Accounts Production Expertise",
                "Corporation Tax Specialists",
                "White-Label Service Delivery",
                "Dedicated Offshore Resources",
                "Structured Review Processes",
                "Multi-Software Expertise",
                "Flexible Engagement Models",
                "Secure Data Handling"
              ].map((adv, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#F58220] text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                  <span className="text-gray-800 text-xs sm:text-sm font-semibold">{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Your Offshore Compliance Partner (Centered CTA Card, bg #FEF4E4 outer, bg #ffffff card inner) */}
      <div className="w-full bg-[#FEF4E4] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="w-[90%] max-w-7xl mx-auto text-center">
          <div className="bg-white border border-[#F58220]/25 rounded-[24px] p-6 sm:p-10 lg:p-14 shadow-[0_20px_50px_rgba(245,130,32,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(245,130,32,0.08)] transition-all duration-500">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#F58220]/5 pointer-events-none transition-transform duration-500 group-hover:scale-110" />

            <span className="text-[#F58220] font-extrabold text-[10px] sm:text-xs uppercase tracking-widest bg-[#FEF4E4] border border-[#F58220]/20 px-3 py-1 rounded-full inline-block mb-4 shadow-xs">
              Compliance Partner
            </span>
            <h2 className="text-lg sm:text-2xl lg:text-[34px] font-extrabold text-[#EA7C24] leading-snug mb-4">
              Your Offshore Year-End Compliance Partner
            </h2>
            <div className="space-y-4 text-gray-700 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-6">
              <p>
                Year-end accounts and corporation tax compliance require technical knowledge, consistency, and attention to detail. Our experienced professionals help UK accounting firms streamline compliance processes, strengthen quality controls, and scale efficiently without increasing internal resource pressures.
              </p>
              <p className="font-semibold text-[#0F274A]">
                Whether you need support with statutory accounts preparation, corporation tax computations, CT600 returns, year-end adjustments, or dedicated offshore resources, NextLedgers can provide reliable offshore support that integrates seamlessly with your accounting practice.
              </p>
            </div>
            {/* Booking Call & Proposal Action Buttons */}
            <div className="flex flex-col items-center justify-center sm:flex-row gap-3 mt-5 w-full">
              <Button
                text="Book a Discovery Call"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
              <Button
                text="Request a Proposal"
                onClick={() => window.location.href = "/contact"}
                className="w-full max-w-[260px] sm:max-w-none sm:w-auto whitespace-nowrap !py-2.5 !px-6 !text-xs sm:!text-[14px] !font-extrabold !rounded-full uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button on Left Side */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-[#F58220] hover:bg-[#EA7C24] text-white p-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center border border-[#F58220]/20"
          title="Go to Top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </section>
  );
}
