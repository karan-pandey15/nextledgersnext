"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  FileText,
  Users,
  Landmark,
  BarChart3,
  ShoppingBag,
  CreditCard,
  Briefcase,
  FolderKanban,
  Phone,
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";
import TopAnnouncementBar from "@/app/components/TopHeader/TopAnnouncementBar";
import UKNavbar from "@/app/components/UKNavbar/UKNavbar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { LOGO_MAP } from "@/app/components/ServiceMainPageContent/IcondisplayScreen";

const ORANGE = "#F58220";
const NAVY = "#0B1F3A";
const GREY = "#6B7280";
const PAGE_CREAM = "#FFF9F5";

const TOOL_CATEGORIES = [
  {
    id: "all",
    label: "All Tools",
    icon: Sparkles,
  },
  {
    id: "accounting",
    label: "Accounting",
    icon: Calculator,
    description: "Core ledgers and cloud accounting platforms we work in daily.",
    tools: [
      { key: "xero", name: "Xero" },
      { key: "quickbooks online", name: "QuickBooks Online" },
      { key: "sage business cloud", name: "Sage Business Cloud" },
      { key: "freeagent", name: "FreeAgent" },
      { key: "capium", name: "Capium" },
      { key: "kashflow", name: "IRIS KashFlow" },
      { key: "accountsiq", name: "AccountsIQ" },
      { key: "iplicit", name: "iplicit" },
    ],
  },
  {
    id: "documents",
    label: "Documents",
    icon: FileText,
    description: "Capture, approve, and process bookkeeping paperwork faster.",
    tools: [
      { key: "dext", name: "Dext" },
      { key: "hubdoc", name: "Hubdoc" },
      { key: "autoentry", name: "AutoEntry" },
      { key: "approvalmax", name: "ApprovalMax" },
      { key: "virtual cabinet", name: "Virtual Cabinet" },
    ],
  },
  {
    id: "payroll",
    label: "Payroll & Pensions",
    icon: Users,
    description: "UK payroll processing and auto-enrolment pension platforms.",
    tools: [
      { key: "brightpay", name: "BrightPay" },
      { key: "moneysoft payroll", name: "Moneysoft" },
      { key: "xero payroll", name: "Xero Payroll" },
      { key: "quickbooks payroll", name: "QuickBooks Payroll" },
      { key: "sage payroll", name: "Sage Payroll" },
      { key: "nest", name: "NEST" },
      { key: "the people's pension", name: "The People's Pension" },
      { key: "smart pension", name: "Smart Pension" },
    ],
  },
  {
    id: "tax",
    label: "Tax & Accounts",
    icon: Landmark,
    description: "Accounts production and personal/corporation tax software.",
    tools: [
      { key: "iris accounts production", name: "IRIS Accounts Production" },
      { key: "cch accounts production", name: "CCH Accounts Production" },
      { key: "btcsoftware", name: "BTCSoftware" },
      { key: "capium personal tax", name: "Capium Tax" },
      { key: "absolute tax", name: "Absolute Tax" },
      { key: "forbes professional", name: "Forbes Professional" },
      { key: "xero tax", name: "Xero Tax" },
    ],
  },
  {
    id: "reporting",
    label: "Reporting",
    icon: BarChart3,
    description: "Management reporting, forecasting, and BI dashboards.",
    tools: [
      { key: "fathom", name: "Fathom" },
      { key: "spotlight reporting", name: "Spotlight Reporting" },
      { key: "float", name: "Float" },
      { key: "futrli", name: "Futrli" },
      { key: "syft analytics", name: "Syft Analytics" },
      { key: "power bi", name: "Power BI" },
      { key: "google looker studio", name: "Looker Studio" },
      { key: "microsoft excel", name: "Microsoft Excel" },
      { key: "google sheets", name: "Google Sheets" },
    ],
  },
  {
    id: "ecommerce",
    label: "Ecommerce",
    icon: ShoppingBag,
    description: "Marketplace and storefront integrations for online sellers.",
    tools: [
      { key: "a2x", name: "A2X" },
      { key: "shopify", name: "Shopify" },
      { key: "amazon", name: "Amazon" },
      { key: "ebay", name: "eBay" },
      { key: "etsy", name: "Etsy" },
      { key: "woocommerce", name: "WooCommerce" },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    icon: CreditCard,
    description: "Payment gateways and money-movement platforms.",
    tools: [
      { key: "stripe", name: "Stripe" },
      { key: "paypal", name: "PayPal" },
      { key: "wise", name: "Wise" },
      { key: "gocardless", name: "GoCardless" },
    ],
  },
  {
    id: "secretarial",
    label: "Company Secretarial",
    icon: Briefcase,
    description: "Companies House filing and company administration tools.",
    tools: [
      { key: "inform direct", name: "Inform Direct" },
      { key: "companies house webfiling", name: "Companies House WebFiling" },
    ],
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: FolderKanban,
    description: "Secure collaboration and document-sharing environments.",
    tools: [
      { key: "microsoft 365", name: "Microsoft 365" },
      { key: "google workspace", name: "Google Workspace" },
      { key: "sharepoint", name: "SharePoint" },
    ],
  },
];

function resolveLogo(key) {
  return LOGO_MAP[key.toLowerCase().trim()] || null;
}

function formatCount(n) {
  return `${n}+`;
}

export default function ToolsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const allTools = useMemo(() => {
    const seen = new Set();
    const items = [];

    TOOL_CATEGORIES.filter((c) => c.id !== "all").forEach((category) => {
      category.tools.forEach((tool) => {
        const dedupe = `${tool.name}::${tool.key}`;
        if (seen.has(dedupe)) return;
        seen.add(dedupe);
        items.push({
          ...tool,
          categoryId: category.id,
          categoryLabel: category.label,
          src: resolveLogo(tool.key),
        });
      });
    });

    return items.filter((t) => t.src);
  }, []);

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allTools.filter((tool) => {
      const matchesCategory =
        activeCategory === "all" || tool.categoryId === activeCategory;
      const matchesQuery =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, allTools, query]);

  const activeMeta = TOOL_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-white font-sans text-[#1E1B2A]">
      <TopAnnouncementBar isSidebarOpen={isSidebarOpen} />
      <UKNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-12 lg:px-8 lg:pb-14 lg:pt-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,130,32,0.16), transparent 55%), linear-gradient(180deg, ${PAGE_CREAM} 0%, #ffffff 100%)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15,39,74,0.08) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F58220]/25 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F58220] shadow-sm sm:text-[11px]">
            <Sparkles className="h-3.5 w-3.5" />
            Software Expertise
          </span>

          <h1 className="mx-auto max-w-3xl text-[28px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0B1F3A] sm:text-[36px] lg:text-[44px]">
            Tools &amp; Software We{" "}
            <span style={{ color: ORANGE }}>Work With</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-relaxed text-slate-600 sm:text-[16px]">
            From Xero and QuickBooks to payroll, tax, reporting, and ecommerce —
            our UK delivery teams are trained across the platforms your practice
            and clients already use.
          </p>

          <div className="mx-auto mt-7 flex max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tools (e.g. Xero, Dext, BrightPay)"
                className="h-12 w-full rounded-[12px] border border-slate-200 bg-white pl-10 pr-4 text-[14px] text-[#0B1F3A] shadow-sm outline-none transition focus:border-[#F58220] focus:ring-2 focus:ring-[#F58220]/20"
              />
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[12px] px-5 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#e2761b]"
              style={{ background: ORANGE }}
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
            {[
              { value: formatCount(allTools.length), label: "Platforms" },
              { value: "9", label: "Categories" },
              { value: "UK", label: "Ready Teams" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#F0E0D2] bg-white/80 px-3 py-3 shadow-sm backdrop-blur-sm sm:px-4 sm:py-4"
              >
                <p
                  className="text-[18px] font-extrabold sm:text-[22px]"
                  style={{ color: ORANGE }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section
        className="relative w-full px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:px-8"
        style={{ backgroundColor: PAGE_CREAM }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(rgba(180,150,120,0.35) 1.1px, transparent 1.1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Category chips */}
          <div className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-2 sm:mb-8 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
            {TOOL_CATEGORIES.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[12px] font-bold transition sm:text-[13px] ${
                    isActive
                      ? "border-[#F58220] bg-[#F58220] text-white shadow-md shadow-orange-500/25"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#F58220]/40 hover:text-[#F58220]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {activeMeta?.description ? (
            <p
              className="mx-auto mb-6 max-w-2xl text-center text-[13px] leading-relaxed sm:mb-8 sm:text-[14px]"
              style={{ color: GREY }}
            >
              {activeMeta.description}
            </p>
          ) : null}

          {filteredTools.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <p className="text-[16px] font-bold text-[#0B1F3A]">
                No tools match your search
              </p>
              <p className="mt-2 text-[14px] text-slate-500">
                Try another keyword or clear the filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
                className="mt-5 inline-flex rounded-full px-5 py-2.5 text-[13px] font-bold text-white"
                style={{ background: ORANGE }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredTools.map((tool) => (
                <article
                  key={`${tool.categoryId}-${tool.key}`}
                  className="group flex flex-col items-center rounded-2xl border border-[#F0E0D2] bg-white p-4 shadow-[0_6px_20px_rgba(15,39,74,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#F58220]/35 hover:shadow-[0_14px_34px_rgba(245,130,32,0.12)] sm:p-5"
                >
                  <div className="flex h-16 w-full items-center justify-center sm:h-20">
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      width={140}
                      height={64}
                      className="max-h-12 w-auto max-w-[110px] object-contain sm:max-h-14 sm:max-w-[120px]"
                    />
                  </div>
                  <h3
                    className="mt-3 line-clamp-2 text-center text-[12px] font-bold leading-snug sm:text-[13px]"
                    style={{ color: NAVY }}
                  >
                    {tool.name}
                  </h3>
                  <span className="mt-2 rounded-full bg-[#FFF4EA] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#F58220]">
                    {tool.categoryLabel}
                  </span>
                </article>
              ))}
            </div>
          )}

          <p className="mt-6 text-center text-[12px] text-slate-500 sm:text-[13px]">
            Showing{" "}
            <span className="font-bold text-[#0B1F3A]">{filteredTools.length}</span>{" "}
            of {allTools.length} tools
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[22px] bg-[#07111F] px-6 py-12 text-center sm:px-10 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(245,130,32,0.35) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="text-[24px] font-extrabold leading-tight text-white sm:text-[32px]">
              Need support on a tool{" "}
              <span style={{ color: ORANGE }}>not listed?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Tell us which platforms your firm uses — we can align dedicated
              offshore capacity around your existing tech stack.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-[10px] px-6 text-[13px] font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-[#e2761b]"
                style={{ background: ORANGE }}
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918285285223"
                className="inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-[10px] border-2 border-[#F58220] bg-transparent px-6 text-[13px] font-bold uppercase tracking-wide text-[#F58220] transition hover:bg-[#F58220]/10"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
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
