"use client";

import React from "react";
import Button from "../utils/Button/Button";

/* ─────────────────────────────────────────────
   Reusable sub-components for consistent styling
   ───────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="w-full flex items-center justify-center py-14 sm:py-20">
      <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#EA7C24]/25 to-transparent" />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-xl sm:text-2xl font-extrabold text-[#EA7C24] mb-5 mt-10 flex items-center gap-3">
      <span className="w-1.5 h-8 bg-[#EA7C24] rounded-full flex-shrink-0" />
      {children}
    </h3>
  );
}

function CheckList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3 group">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EA7C24]/10 flex items-center justify-center mt-0.5">
            <svg className="w-3.5 h-3.5 text-[#EA7C24]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-sm sm:text-[15px] font-semibold text-[#1E1B2A]/80 leading-relaxed group-hover:text-[#EA7C24] transition-colors duration-200">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-3 ml-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="w-2 h-2 rounded-full bg-[#EA7C24] mt-2 flex-shrink-0" />
          <span className="text-sm sm:text-[15px] font-medium text-[#1E1B2A]/75 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TickList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 rounded-md bg-[#EA7C24] flex items-center justify-center mt-0.5">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-sm sm:text-[15px] font-semibold text-[#1E1B2A]/80 leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

function SoftwareGrid({ title, items }) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#EA7C24] mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2.5">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#EA7C24]/5 border border-[#EA7C24]/10 text-sm font-bold text-[#1E1B2A]/80 hover:bg-[#EA7C24]/10 hover:border-[#EA7C24]/25 transition-all duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryGrid({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-[#EA7C24]/20 hover:shadow-md transition-all duration-200">
          <span className="w-3 h-3 rounded-full bg-[#EA7C24]/30 flex-shrink-0" />
          <span className="text-sm font-bold text-[#1E1B2A]/80">{item}</span>
        </div>
      ))}
    </div>
  );
}

function Paragraph({ children }) {
  return (
    <p className="text-sm sm:text-[15px] font-medium text-[#1E1B2A]/70 leading-[1.85] mb-5">
      {children}
    </p>
  );
}

function CTABar({ buttons }) {
  return (
    <div className="flex flex-wrap gap-4 mt-10 mb-4 justify-center sm:justify-start">
      {buttons.map((btn, i) => (
        <Button key={i} text={btn} />
      ))}
    </div>
  );
}

/**
 * SectionIntro — Two-column hero row for each service section.
 * Text and image sit side by side on desktop, stack on mobile.
 * `reverse` flips the order so image appears on the left.
 */
function SectionIntro({ id, title, subtitle, paragraphs, image, reverse = false, buttons }) {
  return (
    <div
      id={id}
      className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-14 sm:mb-16"
    >
      {/* Text Column */}
      <div className={`flex flex-col justify-center ${reverse ? "lg:order-2" : "lg:order-1"}`}>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#EA7C24] leading-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-[#1E1B2A]/55 font-semibold leading-relaxed mb-5 max-w-xl">
            {subtitle}
          </p>
        )}
        {paragraphs && paragraphs.map((p, i) => (
          <p key={i} className="text-sm sm:text-[15px] font-medium text-[#1E1B2A]/70 leading-[1.85] mb-4">
            {p}
          </p>
        ))}
        {buttons && (
          <div className="flex flex-wrap gap-3 mt-4">
            {buttons.map((btn, i) => (
              <Button key={i} text={btn} />
            ))}
          </div>
        )}
      </div>

      {/* Image Column — grid forces same height as text column */}
      <div className={`relative rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100/60 min-h-[280px] sm:min-h-[320px] ${reverse ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
   ───────────────────────────────────────────── */

export default function UKServicesContent() {
  return (
    <div className="w-full bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* ═══════════════════════════════════════════════
            SECTION 1: MANAGEMENT ACCOUNTS & FINANCIAL REPORTING
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="management-accounts"
          title="Management Accounts & Financial Reporting Services"
          subtitle="Turning Financial Data into Meaningful Business Insights"
          paragraphs={[
            "Many businesses only review their financial performance once a year when preparing statutory accounts and tax returns. However, by then, opportunities may have been missed and challenges may have already impacted profitability and cash flow.",
            "Management accounts provide regular financial information throughout the year, helping business owners understand how their business is performing and make informed decisions based on up-to-date financial data.",
            "At NextLedgers, we support UK accounting firms with reliable management reporting and financial analysis services, enabling them to deliver valuable insights and advisory-driven solutions to their clients.",
          ]}
          image="/images/DSC09925.JPG"
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Management Accounts Matter</SubHeading>
        <Paragraph>
          Regular management reporting helps businesses answer important questions, such as:
        </Paragraph>
        <BulletList items={[
          "Are we generating sufficient profit?",
          "Why is cash flow under pressure despite increasing sales?",
          "Which products, services, or departments are performing best?",
          "Are expenses increasing faster than revenue?",
          "Are we meeting our budgets and financial targets?",
          "Can we afford to recruit more staff or invest in growth?",
          "What will our financial position look like over the coming months?",
        ]} />
        <Paragraph>
          Having access to this information allows business owners to make proactive decisions rather than reacting to problems after year-end.
        </Paragraph>

        <SubHeading>Our Management Accounting Services</SubHeading>
        <Paragraph>We provide comprehensive management reporting support, including:</Paragraph>
        <CheckList items={[
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
        ]} />

        <SubHeading>How We Help Businesses</SubHeading>
        <Paragraph>Our reports are designed to transform bookkeeping data into clear and actionable insights that help businesses:</Paragraph>
        <BulletList items={[
          "Monitor financial performance regularly",
          "Improve cash flow visibility and planning",
          "Track profitability and key business drivers",
          "Measure performance against budgets and targets",
          "Identify trends, risks, and opportunities early",
          "Support strategic planning and business growth",
          "Make faster and more informed decisions",
        ]} />

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Accounting Platforms" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"]} />
        <SoftwareGrid title="Reporting & Dashboard Tools" items={["Fathom", "Syft Analytics", "Spotlight Reporting", "Futrli", "Float", "Power BI", "Google Looker Studio"]} />

        <SubHeading>Industries We Support</SubHeading>
        <Paragraph>We work with accounting firms serving clients across various sectors, including:</Paragraph>
        <IndustryGrid items={[
          "eCommerce & Online Retail",
          "Marketing & Creative Agencies",
          "SaaS & Technology Companies",
          "Construction Businesses",
          "Recruitment Agencies",
          "Professional Service Firms",
          "Property & Real Estate Businesses",
        ]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Team with UK Accounting Expertise",
          "Dedicated Offshore Management Reporting Support",
          "White-Label Service Delivery",
          "Advisory-Focused Reporting Approach",
          "Flexible Engagement Models",
          "Scalable Support Without Additional UK Hiring",
        ]} />

        <SubHeading>More Than Compliance Reporting</SubHeading>
        <Paragraph>
          Management accounts are no longer just reports containing numbers. They have become one of the most valuable tools for understanding business performance, improving profitability, and supporting strategic decision-making.
        </Paragraph>
        <Paragraph>
          At NextLedgers, we help UK accounting firms deliver insightful management reporting that strengthens client relationships and creates more opportunities for advisory services.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 2: UK PAYROLL & CIS OUTSOURCING
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="payroll-cis"
          title="UK Payroll & CIS Outsourcing Services"
          subtitle="Reliable Payroll & CIS Support for UK Accounting Firms"
          paragraphs={[
            "Payroll and Construction Industry Scheme (CIS) compliance require accuracy, consistency, and a thorough understanding of HMRC regulations. Even minor payroll errors can lead to penalties, employee dissatisfaction, and additional administrative work for accounting firms.",
            "As your practice grows, managing payroll and CIS can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Payroll and CIS support to UK accounting firms, helping practices increase capacity, maintain compliance, and deliver reliable services without increasing internal staffing costs.",
          ]}
          image="/images/DSC09845.JPG"
          reverse={true}
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Payroll & CIS Matter</SubHeading>
        <Paragraph>
          Payroll is more than simply paying employees. It involves accurate calculations, timely submissions, pension obligations, statutory payments, and maintaining compliance with ever-changing regulations.
        </Paragraph>
        <Paragraph>
          Similarly, CIS introduces additional responsibilities for contractors and subcontractors, including registrations, verification procedures, deduction calculations, and monthly returns.
        </Paragraph>
        <Paragraph>Effective payroll and CIS management helps businesses:</Paragraph>
        <BulletList items={[
          "Pay employees accurately and on time",
          "Meet HMRC reporting requirements",
          "Avoid penalties and compliance issues",
          "Maintain accurate employee and subcontractor records",
          "Reduce administrative burden",
          "Improve operational efficiency and client satisfaction",
        ]} />

        <SubHeading>Our Payroll Services Include</SubHeading>
        <CheckList items={[
          "Weekly, Fortnightly, Four-Weekly & Monthly Payroll Processing",
          "Employee Payroll Maintenance",
          "New Starter & Leaver Processing",
          "Payroll Amendments & Reconciliations",
          "RTI (FPS & EPS) Submission Support",
          "Payslips & Payroll Reporting",
          "Pension Auto-Enrolment Support",
          "Director Payroll Processing",
          "Statutory Pay Calculations (SSP, SMP, SPP, SAP & Shared Parental Pay)",
          "Holiday Pay & Leave Tracking",
          "Year-End Payroll Support including P45s and P60s",
        ]} />

        <SubHeading>Our CIS Services Include</SubHeading>
        <CheckList items={[
          "Contractor & Subcontractor Registration Support",
          "HMRC Verification Support",
          "CIS Deduction Calculations",
          "Gross Payment & Material Cost Reviews",
          "Monthly CIS Return Preparation",
          "Subcontractor Statements & Deduction Summaries",
          "CIS Reconciliations & Compliance Reviews",
          "HMRC Readiness Checks",
        ]} />

        <SubHeading>How We Help Accounting Firms</SubHeading>
        <Paragraph>Our payroll and CIS support enables accounting firms to:</Paragraph>
        <BulletList items={[
          "Increase payroll processing capacity",
          "Improve turnaround times",
          "Reduce administration workload",
          "Enhance compliance accuracy",
          "Minimise payroll and CIS errors",
          "Improve client service delivery",
          "Scale operations without increasing headcount",
        ]} />

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Payroll Software" items={["BrightPay", "Moneysoft Payroll Manager", "Xero Payroll", "QuickBooks Payroll", "Sage Payroll", "FreeAgent Payroll"]} />
        <SoftwareGrid title="Pension Platforms" items={["NEST", "The People's Pension", "Smart Pension", "NOW: Pensions"]} />
        <SoftwareGrid title="Accounting & Workflow Tools" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "Dext", "Hubdoc", "ApprovalMax"]} />

        <SubHeading>Industries We Support</SubHeading>
        <Paragraph>We support accounting firms serving clients across various sectors, including:</Paragraph>
        <IndustryGrid items={[
          "Construction & Trades",
          "Recruitment Agencies",
          "Manufacturing Businesses",
          "Hospitality & Retail",
          "Healthcare Providers",
          "Professional Service Firms",
        ]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Delivery Team",
          "UK Payroll & CIS Expertise",
          "White-Label Service Delivery",
          "Dedicated Offshore Resources",
          "Structured Review Processes",
          "Secure Data Handling",
          "Flexible Engagement Models",
          "Scalable Support Framework",
        ]} />

        <SubHeading>Your Offshore Payroll & CIS Delivery Partner</SubHeading>
        <Paragraph>
          Payroll and CIS require precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources.
        </Paragraph>
        <Paragraph>
          Whether you require support with payroll processing, RTI compliance, pension administration, CIS returns, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 3: UK PERSONAL TAX OUTSOURCING
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="personal-tax"
          title="UK Personal Tax Outsourcing Services"
          subtitle="Specialist Personal Tax Support for UK Accounting Firms"
          paragraphs={[
            "Personal Tax remains one of the most important services offered by UK accounting practices. However, increasing volumes of Self Assessment returns, evolving tax legislation, and growing client expectations can place significant pressure on internal teams.",
            "At NextLedgers, we provide dedicated offshore Personal Tax support to UK accounting firms, helping practices manage compliance efficiently, improve turnaround times, and increase capacity without compromising quality.",
            "Whether your firm requires support with standard Self Assessment returns, director tax returns, partnership returns, capital gains calculations, or complex personal tax cases, our team works as a seamless extension of your practice.",
          ]}
          image="/images/DSC09466.JPG"
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Personal Tax Matters</SubHeading>
        <Paragraph>
          Personal tax compliance is more than simply filing tax returns. Individuals often have multiple income sources, investment activities, property income, or overseas earnings that require careful review and accurate reporting.
        </Paragraph>
        <Paragraph>Effective personal tax management helps taxpayers:</Paragraph>
        <BulletList items={[
          "Meet HMRC filing requirements and deadlines",
          "Understand their tax liabilities and payment obligations",
          "Avoid penalties and compliance issues",
          "Report complex income sources accurately",
          "Plan for future tax payments and cash flow requirements",
          "Make informed financial and tax planning decisions",
        ]} />
        <Paragraph>
          For accounting firms, delivering reliable personal tax services helps build stronger client relationships and creates opportunities for higher-value advisory services.
        </Paragraph>

        <SubHeading>Our Personal Tax Services Include</SubHeading>
        <CheckList items={[
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
          "Personal Tax Planning Support",
        ]} />

        <SubHeading>How We Help Accounting Firms</SubHeading>
        <Paragraph>Our personal tax specialists support firms throughout the tax compliance process, from data collection and tax return preparation to detailed calculations and supporting schedules.</Paragraph>
        <Paragraph>We help firms:</Paragraph>
        <BulletList items={[
          "Increase Self Assessment processing capacity",
          "Improve turnaround times during busy filing periods",
          "Reduce January filing pressure",
          "Enhance compliance consistency and accuracy",
          "Better utilise senior tax staff",
          "Reduce recruitment dependency",
          "Improve profitability per tax return",
          "Scale efficiently during peak tax seasons",
        ]} />

        <SubHeading>Specialist Areas We Support</SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
          {[
            { title: "Company Directors", desc: "Salary, dividend, benefits-in-kind, investment income, and capital gains reporting." },
            { title: "Sole Traders & Freelancers", desc: "Self-employment income reporting, expense reviews, and tax computations." },
            { title: "Partnerships & LLP Members", desc: "Partnership returns, profit allocations, and partner reporting." },
            { title: "Property Investors & Landlords", desc: "Rental income reporting, property expenses, and capital gains calculations." },
            { title: "High-Net-Worth & International Individuals", desc: "Complex tax returns involving investments, foreign income, and cross-border reporting requirements." },
          ].map((area, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#EA7C24]/20 hover:shadow-lg transition-all duration-300">
              <h4 className="text-base font-extrabold text-[#1E1B2A] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EA7C24]" />
                {area.title}
              </h4>
              <p className="text-sm text-[#1E1B2A]/60 font-medium leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Personal Tax Software" items={["IRIS Personal Tax", "CCH Personal Tax", "TaxCalc Personal Tax", "BTCSoftware", "Capium Personal Tax", "Absolute Tax", "Forbes Professional"]} />
        <SoftwareGrid title="Accounting Software" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"]} />
        <SoftwareGrid title="Document & Workflow Tools" items={["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Delivery Team",
          "UK Personal Tax Expertise",
          "Self Assessment Specialists",
          "White-Label Service Delivery",
          "Dedicated Offshore Resources",
          "Multi-Software Expertise",
          "Structured Review Processes",
          "Flexible Engagement Models",
          "Secure Data Handling",
        ]} />

        <SubHeading>Your Offshore Personal Tax Compliance Partner</SubHeading>
        <Paragraph>
          Personal tax compliance requires technical expertise, confidentiality, and attention to detail. Our experienced professionals help UK accounting firms increase capacity while maintaining high standards of accuracy and compliance.
        </Paragraph>
        <Paragraph>
          Whether you need support with Self Assessment returns, director tax returns, partnership reporting, capital gains calculations, foreign income disclosures, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while delivering exceptional service to your clients.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call", "Request a Proposal"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 4: UK BOOKKEEPING & VAT OUTSOURCING
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="bookkeeping-vat"
          title="UK Bookkeeping & VAT Outsourcing Services"
          subtitle="Accurate Bookkeeping. Better Decisions. Stronger Business Growth."
          paragraphs={[
            "As accounting firms continue to grow, bookkeeping and VAT compliance often become some of the most time-consuming services to manage. Maintaining accurate financial records, reconciling accounts, processing invoices, and ensuring VAT compliance requires significant time, consistency, and attention to detail.",
            "At NextLedgers, we act as an extension of your accounting practice, providing reliable offshore bookkeeping and VAT support that helps your firm increase capacity, improve turnaround times, and reduce operational pressure.",
            "Whether you require ongoing bookkeeping support, month-end processing, backlog clean-up, or dedicated offshore resources, our team integrates seamlessly into your existing workflow.",
          ]}
          image="/images/DSC09468.JPG"
          reverse={true}
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Accurate Bookkeeping Matters</SubHeading>
        <Paragraph>
          Bookkeeping is much more than recording transactions. It forms the foundation of every financial report, tax return, and business decision.
        </Paragraph>
        <Paragraph>Maintaining accurate books helps businesses:</Paragraph>
        <BulletList items={[
          "Understand their financial position at any time",
          "Monitor cash flow and working capital",
          "Keep customer and supplier balances accurate",
          "Prepare reliable management accounts and year-end reports",
          "Support VAT compliance and HMRC requirements",
          "Identify errors and discrepancies early",
          "Make informed business decisions based on accurate data",
        ]} />
        <Paragraph>
          For accounting firms, efficient bookkeeping processes create more capacity for advisory services and strengthen client relationships.
        </Paragraph>

        <SubHeading>Our UK Bookkeeping Services Include</SubHeading>
        <CheckList items={[
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
          "Bookkeeping Review & Reporting Support",
        ]} />

        <SubHeading>Reconciliation Services</SubHeading>
        <Paragraph>
          Regular reconciliations are essential to maintaining accurate financial records and identifying issues before they become larger problems.
        </Paragraph>
        <Paragraph>Our reconciliation services include:</Paragraph>
        <CheckList items={[
          "Bank Reconciliations",
          "Credit Card Reconciliations",
          "Payroll Reconciliations",
          "Inventory Reconciliations",
          "VAT & CIS Reconciliations",
          "Intercompany Reconciliations",
          "Factoring & Control Account Reconciliations",
        ]} />

        <SubHeading>Specialist VAT Support for UK Accounting Firms</SubHeading>
        <Paragraph>
          VAT remains one of the most technically demanding areas of UK compliance. Different industries and transaction types often require specialised VAT treatment and careful review.
        </Paragraph>
        <Paragraph>
          Our experienced VAT team supports accounting firms with preparation, reconciliation, and submission-ready VAT workings across multiple industries and VAT schemes.
        </Paragraph>

        <SubHeading>Why VAT Compliance Matters</SubHeading>
        <Paragraph>
          VAT errors can result in penalties, incorrect tax payments, and unnecessary HMRC enquiries.
        </Paragraph>
        <Paragraph>Effective VAT management helps businesses:</Paragraph>
        <BulletList items={[
          "Meet HMRC filing obligations accurately and on time",
          "Maintain accurate VAT records and reconciliations",
          "Identify VAT errors before submission",
          "Improve confidence in VAT calculations",
          "Reduce compliance risks and administrative burdens",
          "Ensure the correct treatment of complex transactions",
        ]} />

        <SubHeading>Our VAT Services Include</SubHeading>
        <CheckList items={[
          "VAT Return Preparation",
          "VAT Reconciliations",
          "VAT Liability Reviews",
          "Input & Output VAT Verification",
          "VAT Control Account Reviews",
          "VAT Error Identification",
          "VAT Adjustment Calculations",
          "HMRC Query Support",
        ]} />

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Accounting Software" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "Capium", "KashFlow"]} />
        <SoftwareGrid title="Document Processing Tools" items={["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"]} />
        <SoftwareGrid title="eCommerce Integrations" items={["A2X", "Shopify", "Amazon", "eBay", "Etsy", "WooCommerce"]} />
        <SoftwareGrid title="Payment Platforms" items={["Stripe", "PayPal", "Wise", "GoCardless"]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Team with UK Accounting Expertise",
          "Dedicated Offshore Bookkeeping & VAT Specialists",
          "White-Label Service Delivery",
          "Structured Review Processes",
          "Secure Data Handling",
          "Flexible Engagement Models",
          "Scalable Support Without Increasing Overheads",
        ]} />

        <SubHeading>Your Offshore Bookkeeping & VAT Partner</SubHeading>
        <Paragraph>
          Reliable bookkeeping and VAT processes are essential for accurate financial reporting and effective business management. Our experienced professionals help accounting firms streamline day-to-day financial processing while maintaining high standards of accuracy and compliance.
        </Paragraph>
        <Paragraph>
          Whether you need support with selected clients, month-end bookkeeping, VAT preparation, backlog clean-up, or a dedicated offshore team, NextLedgers can help your practice scale efficiently while delivering consistent, high-quality service.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call", "Request a Proposal"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 5: UK COMPANY FORMATION & COMPANY SECRETARIAL
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="company-formation"
          title="UK Company Formation & Company Secretarial Outsourcing Services"
          subtitle="Reliable Company Formation & Company Secretarial Support for UK Accounting Firms"
          paragraphs={[
            "Company formation and ongoing company secretarial compliance are essential services offered by modern accounting firms. From incorporating new companies and completing Companies House identity verification requirements to maintaining statutory records and managing Companies House filings, businesses rely on their accountants to ensure they remain compliant throughout their business lifecycle.",
            "As your practice grows, managing company formations, statutory filings, and company secretarial work for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Company Formation & Company Secretarial support to UK accounting firms, accountancy practices, and corporate service providers. Our white-label outsourcing solutions help firms increase capacity, improve turnaround times, and deliver reliable compliance services without increasing internal staffing costs.",
          ]}
          image="/images/DSC09486.JPG"
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Company Formation & Company Secretarial Services Matter</SubHeading>
        <Paragraph>
          Setting up a company correctly and maintaining statutory compliance are fundamental to good corporate governance. Businesses must comply with Companies House requirements, maintain statutory registers, submit confirmation statements, notify changes to company information, and keep company records up to date throughout the year.
        </Paragraph>
        <Paragraph>Professional company secretarial support helps businesses:</Paragraph>
        <BulletList items={[
          "Establish their business correctly from day one",
          "Meet Companies House filing deadlines",
          "Maintain statutory compliance",
          "Keep company records accurate and up to date",
          "Reduce regulatory risks",
          "Improve corporate governance",
          "Enhance stakeholder confidence",
          "Reduce administrative burden",
        ]} />

        <SubHeading>Our Company Formation Services Include</SubHeading>
        <CheckList items={[
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
          "Director & Shareholder Compliance Guidance",
        ]} />

        <SubHeading>Our Company Secretarial Services Include</SubHeading>
        <CheckList items={[
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
          "Company Secretarial Record Maintenance",
        ]} />

        <SubHeading>Companies House Compliance Support</SubHeading>
        <Paragraph>We assist accounting firms with:</Paragraph>
        <CheckList items={[
          "Companies House Filing Monitoring",
          "Annual Compliance Calendar Management",
          "Company Information Updates",
          "Statutory Record Reviews",
          "Filing Deadline Monitoring",
          "Director & Shareholder Record Updates",
          "Companies House Compliance Reviews",
          "Client Compliance Reminder Support",
        ]} />

        <SubHeading>Business Start-Up & Corporate Compliance Support</SubHeading>
        <Paragraph>
          Supporting new businesses from incorporation through ongoing compliance helps accounting firms strengthen client relationships and deliver additional value-added services.
        </Paragraph>
        <Paragraph>Our offshore team can assist with:</Paragraph>
        <CheckList items={[
          "New Client Onboarding Support",
          "Incorporation Documentation Reviews",
          "Director Identity Verification Support",
          "Company Administration Support",
          "Business Registration Documentation",
          "Compliance Health Checks",
          "Corporate Record Organisation",
          "Regulatory Documentation Support",
        ]} />

        <SubHeading>How We Help UK Accounting Firms</SubHeading>
        <Paragraph>Our Company Formation & Company Secretarial support enables firms to:</Paragraph>
        <BulletList items={[
          "Increase company secretarial service capacity",
          "Improve turnaround times",
          "Reduce administrative workload",
          "Improve compliance accuracy",
          "Meet Companies House deadlines",
          "Deliver a seamless client onboarding experience",
          "Expand value-added advisory services",
          "Scale operations without increasing headcount",
        ]} />

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Company Secretarial Software" items={["Inform Direct", "Companies House WebFiling", "Virtual Cabinet", "Practice Ignition", "Microsoft Excel"]} />
        <SoftwareGrid title="Accounting Software" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent", "AccountsIQ", "iplicit"]} />
        <SoftwareGrid title="Workflow & Document Management Tools" items={["Dext", "Hubdoc", "ApprovalMax", "Microsoft 365", "Google Workspace", "SharePoint"]} />

        <SubHeading>Industries We Support</SubHeading>
        <Paragraph>We support UK accounting firms serving clients across various sectors, including:</Paragraph>
        <IndustryGrid items={[
          "Professional Service Firms",
          "Construction & Trades",
          "E-Commerce Businesses",
          "Retail Businesses",
          "Manufacturing Companies",
          "Hospitality Businesses",
          "Healthcare Providers",
          "Recruitment Agencies",
          "Technology Companies",
          "Property & Real Estate Businesses",
        ]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Delivery Team",
          "UK Company Secretarial Expertise",
          "Companies House Compliance Knowledge",
          "White-Label Service Delivery",
          "Dedicated Offshore Resources",
          "Structured Review Processes",
          "Secure Data Handling",
          "Flexible Engagement Models",
          "Scalable Support Framework",
        ]} />

        <SubHeading>Your Offshore Company Formation & Company Secretarial Delivery Partner</SubHeading>
        <Paragraph>
          Company formation and company secretarial services require accuracy, organisation, confidentiality, and ongoing compliance management. Our dedicated professionals work as an extension of your practice, helping you deliver efficient company formation, statutory compliance, and corporate administration services while freeing up valuable internal resources.
        </Paragraph>
        <Paragraph>
          Whether you require support with company formation coordination, Companies House identity verification, confirmation statements, statutory register maintenance, director and shareholder changes, corporate governance documentation, or dedicated offshore company secretarial resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.
        </Paragraph>
        <Paragraph>
          <span className="text-xs text-[#1E1B2A]/50 italic">*Company formations are coordinated through trusted third-party company formation agents. NextLedgers manages the documentation, onboarding, and compliance process while working alongside authorised incorporation providers.</span>
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 6: UK VAT & MAKING TAX DIGITAL (MTD)
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="vat-mtd"
          title="UK VAT & Making Tax Digital (MTD) Outsourcing Services"
          subtitle="Specialist VAT Compliance Support for UK Accounting Firms"
          paragraphs={[
            "VAT remains one of the most technically challenging and frequently changing areas of UK taxation. From registrations and VAT returns to complex schemes and Making Tax Digital (MTD) requirements, accounting firms must continually manage compliance while delivering timely and accurate services to clients.",
            "At NextLedgers, we provide dedicated offshore VAT and MTD support to UK accounting firms, helping practices increase capacity, improve compliance processes, and manage growing client portfolios efficiently.",
            "Whether your firm requires support with routine VAT returns, reconciliations, MTD compliance, or complex VAT schemes, our team acts as a seamless extension of your practice.",
          ]}
          image="/images/DSC09552.JPG"
          reverse={true}
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why VAT & MTD Matter</SubHeading>
        <Paragraph>
          VAT compliance involves much more than completing a quarterly return. Businesses must maintain accurate records, apply the correct VAT treatment to transactions, and keep pace with evolving HMRC requirements.
        </Paragraph>
        <Paragraph>
          Making Tax Digital has further transformed VAT compliance by introducing digital record-keeping and submission requirements, encouraging businesses to move away from manual processes and adopt more efficient systems.
        </Paragraph>
        <Paragraph>Effective VAT and MTD management helps businesses:</Paragraph>
        <BulletList items={[
          "Meet HMRC filing obligations accurately and on time",
          "Maintain digital and compliant financial records",
          "Reduce VAT errors and potential penalties",
          "Improve confidence in VAT calculations and reporting",
          "Handle complex transactions correctly",
          "Create more efficient and streamlined compliance processes",
        ]} />
        <Paragraph>
          For accounting firms, efficient VAT management reduces operational pressure and allows more time for advisory and client relationship management.
        </Paragraph>

        <SubHeading>Our VAT Services Include</SubHeading>
        <CheckList items={[
          "VAT Registration & Deregistration Support",
          "VAT Return Preparation & Review Support",
          "Submission-Ready VAT Working Papers",
          "VAT Reconciliations & Liability Reviews",
          "VAT Control Account Reviews",
          "VAT Adjustments & Error Corrections",
          "HMRC VAT Correspondence Support",
          "VAT Health Checks & Compliance Reviews",
          "Reverse Charge & International VAT Support",
          "Industry-Specific VAT Analysis",
        ]} />

        <SubHeading>Making Tax Digital (MTD) Support</SubHeading>
        <Paragraph>
          HMRC's Making Tax Digital initiative continues to reshape how businesses manage VAT compliance.
        </Paragraph>
        <Paragraph>Our MTD support includes:</Paragraph>
        <CheckList items={[
          "MTD-Compliant Record Reviews",
          "Digital Record Maintenance",
          "Software Compliance Reviews",
          "MTD VAT Submission Support",
          "Digital Link Reviews",
          "Process Improvement Recommendations",
          "Client Migration Support",
        ]} />
        <Paragraph>
          We help accounting firms implement efficient digital processes that improve compliance and reduce manual administration.
        </Paragraph>

        <SubHeading>VAT Schemes We Support</SubHeading>
        <Paragraph>Our team has experience working across a wide range of HMRC-approved VAT schemes, including:</Paragraph>
        <BulletList items={[
          "Standard VAT Accounting Scheme",
          "Annual Accounting Scheme",
          "Cash Accounting Scheme",
          "Flat Rate VAT Scheme",
          "VAT Retail Schemes",
          "VAT Margin Schemes",
        ]} />
        <Paragraph>We also support specialist areas such as:</Paragraph>
        <BulletList items={[
          "Domestic Reverse Charge VAT",
          "Construction Reverse Charge",
          "Import & Export VAT",
          "EC Sales & International VAT",
          "Cross-Border Transactions",
          "Marketplace and eCommerce VAT Compliance",
        ]} />

        <SubHeading>VAT Reconciliation & Compliance Reviews</SubHeading>
        <Paragraph>
          Accurate reconciliations are essential for ensuring VAT returns are complete, consistent, and error-free.
        </Paragraph>
        <Paragraph>Our support includes:</Paragraph>
        <CheckList items={[
          "VAT Control Account Reconciliations",
          "Sales & Purchase VAT Reviews",
          "Reverse Charge Reviews",
          "Import VAT Reviews",
          "VAT Adjustment Reviews",
          "Transaction Sampling & Compliance Reviews",
          "VAT Error Identification",
          "HMRC Readiness Assessments",
        ]} />
        <Paragraph>
          Regular reviews help identify potential issues before they become costly compliance problems.
        </Paragraph>

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Accounting Software" items={["Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"]} />
        <SoftwareGrid title="MTD & VAT Compliance Platforms" items={["Xero Tax", "QuickBooks VAT Centre", "Sage VAT Module", "FreeAgent VAT"]} />
        <SoftwareGrid title="Supporting Tools" items={["Dext", "Hubdoc", "AutoEntry", "ApprovalMax", "A2X"]} />

        <SubHeading>Industries We Support</SubHeading>
        <Paragraph>We support accounting firms serving clients across a variety of sectors, including:</Paragraph>
        <IndustryGrid items={[
          "eCommerce & Online Retail",
          "Construction Companies",
          "Property & Real Estate",
          "Manufacturing & Distribution",
          "Professional Service Firms",
          "Recruitment & Staffing Agencies",
        ]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Delivery Team",
          "UK VAT & MTD Expertise",
          "Dedicated Offshore Resources",
          "White-Label Service Delivery",
          "Structured Review Processes",
          "Secure Data Handling",
          "Flexible Engagement Models",
          "Scalable Support Without Increasing Overheads",
        ]} />

        <SubHeading>Your Offshore VAT & MTD Compliance Partner</SubHeading>
        <Paragraph>
          VAT requires technical knowledge, accuracy, and a thorough understanding of HMRC regulations. Combined with Making Tax Digital requirements, firms increasingly need efficient processes and specialist support to maintain high compliance standards.
        </Paragraph>
        <Paragraph>
          At NextLedgers, our experienced professionals help UK accounting firms streamline VAT processes, strengthen compliance controls, and scale efficiently without increasing internal resource pressures.
        </Paragraph>
        <Paragraph>
          Whether you require support with VAT returns, MTD compliance, reconciliations, VAT reviews, or complex VAT schemes, NextLedgers can provide reliable offshore support that integrates seamlessly with your accounting practice.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call", "Request a Proposal"]} />

        <SectionDivider />

        {/* ═══════════════════════════════════════════════
            SECTION 7: UK YEAR-END ACCOUNTS & CORPORATION TAX
            ═══════════════════════════════════════════════ */}
        <SectionIntro
          id="year-end"
          title="UK Year-End Accounts & Corporation Tax Outsourcing Services"
          subtitle="Reliable Year-End Compliance Support for UK Accounting Firms"
          paragraphs={[
            "Year-end accounts and corporation tax compliance remain at the core of every UK accounting practice. However, as client portfolios grow, deadlines become tighter, regulations evolve, and recruitment challenges increase, many firms struggle to maintain capacity while preserving quality and profitability.",
            "Preparing statutory accounts, reviewing year-end adjustments, finalising corporation tax computations, and ensuring compliance with Companies House and HMRC requirements demands technical expertise and meticulous attention to detail.",
            "At NextLedgers, we provide dedicated offshore Year-End Accounts and Corporation Tax support to UK accounting firms, helping practices increase capacity, improve turnaround times, and maintain compliance without increasing internal overheads.",
            "Whether you require support for limited companies, partnerships, LLPs, dormant companies, or high-volume year-end processing, our team works as a seamless extension of your practice.",
          ]}
          image="/images/DSC09554.JPG"
          buttons={["Get Started Today", "Explore Services"]}
        />

        <SubHeading>Why Year-End Accounts & Corporation Tax Matter</SubHeading>
        <Paragraph>
          Year-end compliance is much more than a filing exercise. Accurate financial statements and corporation tax computations provide business owners with a clear picture of their financial performance and ensure that statutory obligations are met correctly and on time.
        </Paragraph>
        <Paragraph>Effective year-end processes help businesses:</Paragraph>
        <BulletList items={[
          "Meet Companies House and HMRC filing requirements",
          "Prepare accurate statutory financial statements",
          "Identify adjustments and reconcile financial records",
          "Calculate corporation tax liabilities correctly",
          "Maximise available tax reliefs and allowances",
          "Maintain reliable records for future planning and growth",
          "Reduce compliance risks and avoid unnecessary penalties",
        ]} />
        <Paragraph>
          For accounting firms, efficient year-end processes improve profitability, increase capacity, and free up senior staff to focus on advisory services and client relationships.
        </Paragraph>

        <SubHeading>Our Year-End Accounts Services Include</SubHeading>
        <CheckList items={[
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
          "Audit Support & Structured Working Papers",
        ]} />

        <SubHeading>Our Corporation Tax Services Include</SubHeading>
        <CheckList items={[
          "Corporation Tax Computations",
          "CT600 Preparation",
          "Capital Allowance Calculations",
          "Tax Adjustment Calculations",
          "Loss Utilisation Reviews",
          "Tax Provision Calculations",
          "Group Relief Support",
          "Corporation Tax Working Papers",
          "Submission-Ready Tax Packs",
          "Tax Reconciliations & Supporting Schedules",
        ]} />

        <SubHeading>Specialist Areas We Support</SubHeading>

        <h4 className="text-base font-extrabold text-[#EA7C24] mb-3 mt-6">Statutory Accounts Preparation</h4>
        <Paragraph>Preparation of compliant financial statements for:</Paragraph>
        <BulletList items={[
          "Micro-Entity Accounts",
          "Small Company Accounts",
          "FRS 105 Accounts",
          "FRS 102 Section 1A Accounts",
          "Dormant Company Accounts",
          "LLP Accounts",
          "Partnership Financial Statements",
          "Group Reporting Requirements",
        ]} />

        <h4 className="text-base font-extrabold text-[#EA7C24] mb-3 mt-6">Year-End Adjustments</h4>
        <Paragraph>Preparation and review of:</Paragraph>
        <BulletList items={[
          "Accruals and Prepayments",
          "Deferred Income",
          "Depreciation",
          "Payroll Accruals",
          "Interest Accruals",
          "Stock Adjustments",
          "Bad Debt Provisions",
          "Corporation Tax Provisions",
        ]} />

        <h4 className="text-base font-extrabold text-[#EA7C24] mb-3 mt-6">Director Loan Accounts & Capital Allowances</h4>
        <Paragraph>
          Review and reconciliation of director loan accounts, asset registers, depreciation schedules, and capital allowance claims to ensure accurate disclosures and tax calculations.
        </Paragraph>

        <SubHeading>Software Expertise</SubHeading>
        <SoftwareGrid title="Accounts Production Software" items={["IRIS Accounts Production", "CCH Accounts Production", "TaxCalc Accounts Production", "Capium", "Xero", "QuickBooks Online", "Sage Business Cloud", "FreeAgent"]} />
        <SoftwareGrid title="Corporation Tax Software" items={["IRIS Business Tax", "CCH Corporation Tax", "TaxCalc Corporation Tax", "BTCSoftware Tax", "Capium Corporation Tax"]} />
        <SoftwareGrid title="Supporting Tools" items={["Dext", "Hubdoc", "AutoEntry", "ApprovalMax"]} />

        <SubHeading>Industries We Support</SubHeading>
        <Paragraph>We support accounting firms serving clients across a wide range of sectors, including:</Paragraph>
        <IndustryGrid items={[
          "Owner-Managed Businesses",
          "Professional Service Firms",
          "Construction Businesses",
          "eCommerce & Online Retail",
          "Property Investment Companies",
          "Recruitment Agencies",
          "Technology & SaaS Businesses",
        ]} />

        <SubHeading>Why Choose NextLedgers?</SubHeading>
        <TickList items={[
          "ACCA-Led Delivery Team",
          "UK Accounts Production Expertise",
          "Corporation Tax Specialists",
          "White-Label Service Delivery",
          "Dedicated Offshore Resources",
          "Structured Review Processes",
          "Multi-Software Expertise",
          "Flexible Engagement Models",
          "Secure Data Handling",
        ]} />

        <SubHeading>Your Offshore Year-End Compliance Partner</SubHeading>
        <Paragraph>
          Year-end accounts and corporation tax compliance require technical knowledge, consistency, and attention to detail. Our experienced professionals help UK accounting firms streamline compliance processes, strengthen quality controls, and scale efficiently without increasing internal resource pressures.
        </Paragraph>
        <Paragraph>
          Whether you need support with statutory accounts preparation, corporation tax computations, CT600 returns, year-end adjustments, or dedicated offshore resources, NextLedgers can provide reliable offshore support that integrates seamlessly with your accounting practice.
        </Paragraph>
        <CTABar buttons={["Book a Discovery Call", "Request a Proposal"]} />

      </div>
    </div>
  );
}
