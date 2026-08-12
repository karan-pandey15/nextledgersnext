"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNavbar from "@/app/components/SiteNavbar/SiteNavbar";
import Footer from "@/app/components/footer/Footer";
import ArtificialIntelligence from "@/app/components/ArtificialIntelligence/ArtificialIntelligence";
import NexaLedAi from "@/app/components/ChatBot/NexaLedAi";
import { BRAND_ORANGE } from "@/app/lib/brandColors";

const ORANGE = BRAND_ORANGE;
const NAVY = "#0F274A";

export const COMPANY = {
  name: "Next Ledgers",
  email: "info@nextledgers.com",
  phoneDisplay: "+1 (888) 552-0055",
  phoneHref: "tel:+18885520055",
  addressLines: [
    "Next Ledgers HQ",
    "Mayapuri Commercial Area,",
    "New Delhi, India 110064.",
  ],
  founded: "2024",
  website: "https://www.nextledgers.com",
  linkedin: "https://www.linkedin.com/company/next-ledgers",
};

/**
 * Shared shell for Terms / Privacy — modern legal document layout.
 */
export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  toc = [],
  children,
  otherHref,
  otherLabel,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden bg-[#FAFBFC] font-sans text-[#1A1A1A]">
      <SiteNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <section className="relative overflow-hidden border-b border-[#E8ECF1] bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 10% -10%, rgba(255,106,0,0.12), transparent 55%), radial-gradient(ellipse 60% 50% at 90% 0%, rgba(15,39,74,0.06), transparent 50%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1100px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="text-[12px] font-bold tracking-[0.16em] uppercase" style={{ color: ORANGE }}>
            Legal
          </p>
          <h1
            className="mt-2 text-[28px] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[42px]"
            style={{ color: NAVY }}
          >
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-[640px] text-[14px] leading-6 text-[#4B5563] sm:text-[15px] sm:leading-7">
              {subtitle}
            </p>
          ) : null}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#6B7280] sm:text-[13px]">
            <span>
              Last updated:{" "}
              <strong className="font-semibold text-[#374151]">{lastUpdated}</strong>
            </span>
            <span className="hidden text-[#D1D5DB] sm:inline" aria-hidden="true">
              |
            </span>
            <Link
              href={otherHref}
              className="font-semibold transition-colors hover:underline"
              style={{ color: ORANGE }}
            >
              {otherLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {toc.length > 0 ? (
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <nav
                aria-label="On this page"
                className="rounded-[14px] border border-[#E5E7EB] bg-white p-4 shadow-[0_4px_20px_rgba(15,39,74,0.04)] sm:p-5"
              >
                <p
                  className="mb-3 text-[11px] font-bold tracking-[0.14em] uppercase"
                  style={{ color: NAVY }}
                >
                  On this page
                </p>
                <ul className="flex flex-col gap-1.5">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block rounded-lg px-2.5 py-1.5 text-[13px] leading-5 text-[#4B5563] transition-colors hover:bg-[#FFF7F0] hover:text-[#FF6A00]"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          ) : null}

          <article className="rounded-[16px] border border-[#E5E7EB] bg-white p-5 shadow-[0_8px_30px_rgba(15,39,74,0.05)] sm:p-8 lg:p-10">
            <div className="legal-prose space-y-8 text-[14px] leading-7 text-[#4B5563] sm:text-[15px] sm:leading-7">
              {children}
            </div>

            <div className="mt-10 rounded-[12px] border border-[#FF6A00]/20 bg-[#FFF7F0] p-5 sm:p-6">
              <h2 className="text-[16px] font-bold sm:text-[17px]" style={{ color: NAVY }}>
                Contact {COMPANY.name}
              </h2>
              <p className="mt-2 text-[13px] leading-6 text-[#4B5563] sm:text-[14px]">
                Questions about these terms or how we handle your data? Reach our team:
              </p>
              <ul className="mt-3 space-y-1.5 text-[13px] sm:text-[14px]">
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold hover:underline"
                    style={{ color: ORANGE }}
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>
                  <a
                    href={COMPANY.phoneHref}
                    className="font-semibold hover:underline"
                    style={{ color: ORANGE }}
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li className="pt-1 text-[#6B7280]">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer variant="global" />
      <ArtificialIntelligence />
      <NexaLedAi />
    </main>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2
        className="mb-3 text-[18px] font-bold tracking-[-0.01em] sm:text-[20px]"
        style={{ color: NAVY }}
      >
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-[#FF6A00]">
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.key}>{item}</li>
      ))}
    </ul>
  );
}
