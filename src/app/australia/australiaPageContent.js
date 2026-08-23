import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

/** Default Australia industries mapped to existing industry icon assets */
export const AUSTRALIA_INDUSTRIES = [
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Restaurants"), label: "Retail Businesses" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
  { ...findIndustry("Logistics & Transportation"), label: "Transport & Logistics" },
  { ...findIndustry("Real Estate"), label: "Real Estate Businesses" },
  { ...findIndustry("Technology"), label: "Technology Companies" },
].filter((i) => i && i.src);

/** Income Tax — client types (icons reused from industry set) */
const AU_INCOME_TAX_CLIENTS = [
  { ...findIndustry("Professional Services"), label: "Employees & Salary Earners" },
  { ...findIndustry("Startups & SMEs"), label: "Sole Traders" },
  { ...findIndustry("Real Estate"), label: "Property Investors" },
  { ...findIndustry("Technology"), label: "Share & ETF Investors" },
  { ...findIndustry("Startups & SMEs"), label: "Small Business Owners" },
  { ...findIndustry("Consulting"), label: "Contractors & Freelancers" },
  { ...findIndustry("Professional Services"), label: "Professionals & Executives" },
  { ...findIndustry("Consulting"), label: "High-Net-Worth Individuals" },
  { ...findIndustry("Healthcare"), label: "Retirees & Pensioners" },
  { ...findIndustry("Technology"), label: "Foreign Residents & Expatriates" },
].filter((i) => i && i.src);

const AU_ACCOUNTING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "myob business",
    "reckon one",
    "sage",
    "netsuite",
    "microsoft dynamics 365",
  ],
};

const AU_RECEIPT = {
  heading: "RECEIPT CAPTURE & BOOKKEEPING TOOLS",
  icon: "document",
  logos: ["dext", "hubdoc", "approvalmax", "autoentry", "ezzybills"],
};

const AU_WORKFLOW = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: [
    "microsoft excel",
    "google sheets",
    "microsoft 365",
    "google workspace",
    "sharepoint",
    "dropbox business",
  ],
};

const AU_TAX_WORKING = {
  heading: "TAX & WORKING PAPER SOFTWARE",
  icon: "document",
  logos: [
    "xero tax",
    "aps tax",
    "handitax",
    "cch ifirm",
    "bgl simple fund",
    "microsoft excel",
  ],
};

const AU_TAX_COLLAB = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const AU_TAX_ACCOUNTING = {
  heading: "TAX & ACCOUNTING SOFTWARE",
  icon: "document",
  logos: [
    "xero tax",
    "aps tax",
    "handitax",
    "cch ifirm",
    "xero",
    "quickbooks online",
    "myob business",
    "reckon one",
  ],
};

const AU_WORKING_PAPERS = {
  heading: "WORKING PAPER & DOCUMENT MANAGEMENT TOOLS",
  icon: "file",
  logos: ["microsoft excel", "google sheets", "dext", "hubdoc", "approvalmax"],
};

const AU_PRACTICE = {
  heading: "WORKFLOW & PRACTICE MANAGEMENT TOOLS",
  icon: "briefcase",
  logos: ["fyi docs", "karbon", "microsoft 365", "google workspace", "sharepoint"],
};

const AU_REPORTING = {
  heading: "REPORTING & FORECASTING SOFTWARE",
  icon: "chart",
  logos: [
    "fathom",
    "spotlight reporting",
    "syft analytics",
    "float",
    "calxa",
    "microsoft excel",
    "google sheets",
  ],
};

const AU_COLLAB = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "bag",
  logos: [
    "dext",
    "hubdoc",
    "approvalmax",
    "fyi docs",
    "karbon",
    "microsoft 365",
    "google workspace",
  ],
};

const AU_PAYROLL_SW = {
  heading: "PAYROLL SOFTWARE",
  icon: "payment",
  logos: [
    "xero payroll",
    "myob payroll",
    "employment hero",
    "keypay",
    "quickbooks payroll",
    "reckon payroll",
    "wage easy",
    "micropay",
  ],
};

const AU_PAYROLL_WORKFLOW = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: [
    "dext",
    "hubdoc",
    "approvalmax",
    "fyi docs",
    "karbon",
    "microsoft 365",
    "google workspace",
  ],
};

const AU_YEAR_END_REPORTING = {
  heading: "FINANCIAL REPORTING & WORKING PAPER SOFTWARE",
  icon: "briefcase",
  logos: [
    "caseware",
    "cch ifirm",
    "aps",
    "bgl 360",
    "microsoft excel",
    "google sheets",
  ],
};

const AU_BAS_GST_SOFTWARE = {
  heading: "GST & BAS COMPLIANCE SOFTWARE",
  icon: "tag",
  logos: [
    "xero",
    "xero tax",
    "quickbooks online",
    "myob business",
    "reckon one",
    "handitax",
    "aps tax",
  ],
};

/** 1 — BAS & GST Compliance */
export const AU_GST_BAS = {
  badge: "BAS & GST Compliance Services",
  titleBefore: "BAS & GST",
  titleAccent: "Compliance Services",
  subtitle:
    "Reliable BAS & GST Compliance Support for Australian Accounting Firms & Bookkeeping Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable BAS & GST Compliance Support for Australian Accounting Firms & Bookkeeping Practices",
    paragraphs: [
      "BAS and GST compliance require technical expertise, accuracy, and a thorough understanding of Australian Taxation Office (ATO) requirements. Preparing Business Activity Statements, reviewing GST treatments, reconciling GST control accounts, and meeting lodgement deadlines demand significant time and attention to detail. Even minor GST or BAS errors can lead to penalties, interest charges, ATO reviews, and unnecessary administrative work.",
      "As your practice grows, managing BAS and GST compliance for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated BAS & GST support to Australian accounting firms and bookkeeping practices, helping firms increase capacity, improve turnaround times, and deliver reliable compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why BAS & GST Compliance Matters",
    intro:
      "BAS and GST compliance involve much more than lodging a periodic statement. Businesses must accurately classify taxable and GST-free supplies, validate input tax credits, reconcile GST accounts, identify adjustments, and maintain supporting documentation that meets ATO requirements.",
    helpLabel: "Effective BAS & GST management helps businesses:",
    bullets: [
      "Meet ATO BAS lodgement deadlines",
      "Calculate GST liabilities accurately",
      "Correctly classify taxable and GST-free supplies",
      "Maintain accurate GST records",
      "Identify GST adjustments and corrections",
      "Reduce compliance risks and lodgement errors",
      "Improve financial reporting accuracy",
      "Strengthen ATO readiness",
    ],
  },
  deliverablesAccent: "BAS & GST",
  deliverablesSubtitle:
    "BAS preparation, GST reconciliations, adjustments, and ATO lodgement-ready packs for Australian practices.",
  sections: [
    {
      title: "Our BAS & GST Services Include",
      items: [
        "Business Activity Statement (BAS) Preparation",
        "GST Return Preparation Support",
        "GST Control Account Reconciliations",
        "GST Transaction Reviews",
        "Sales & Purchase GST Verification",
        "Input Tax Credit Reviews",
        "GST Adjustment Calculations",
        "GST Error Identification & Corrections",
        "BAS Working Paper Preparation",
        "ATO Lodgement-Ready BAS Packs",
        "GST Reconciliation Schedules",
        "GST Record Validation",
      ],
    },
    {
      title: "BAS Lodgement & ATO Compliance Support",
      items: [
        "Monthly, Quarterly & Annual BAS Preparation",
        "Instalment Activity Statement (IAS) Support",
        "PAYG Instalment Reviews",
        "Fuel Tax Credit Reviews",
        "BAS Lodgement Tracking",
        "ATO Correspondence Support",
        "Compliance Calendar Management",
        "Client BAS Communication Support",
      ],
    },
    {
      title: "GST Review & Reconciliation Support",
      items: [
        "GST Control Account Reconciliations",
        "Sales GST Reviews",
        "Purchase GST Reviews",
        "Historical GST Reviews",
        "GST Exception Reviews",
        "GST Adjustment Calculations",
        "Supporting Schedule Preparation",
        "ATO Review Readiness Support",
      ],
    },
    {
      title: "GST Registration & Ongoing Compliance",
      items: [
        "GST Registration Documentation Support",
        "GST Deregistration Support",
        "BAS Lodgement Frequency Reviews",
        "GST Record Maintenance",
        "Filing Obligation Monitoring",
        "Ongoing GST Compliance Reviews",
        "ATO Alignment Support",
        "Regulatory Documentation Preparation",
      ],
    },
  ],
  howWeHelpIntro: "Our BAS & GST support enables firms to:",
  howWeHelp: [
    "Increase BAS & GST compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve GST reporting accuracy",
    "Meet ATO lodgement deadlines",
    "Manage peak lodgement periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_ACCOUNTING, AU_BAS_GST_SOFTWARE, AU_TAX_COLLAB],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms and bookkeeping practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian BAS & GST Expertise",
    "ATO Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated BAS & GST specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "BAS & GST Partner",
    titleBefore: "Your",
    titleAccent: "BAS & GST Delivery Partner",
    body: "BAS and GST compliance require technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate BAS and GST compliance services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with BAS preparation, GST reconciliations, GST adjustments, ATO lodgement-ready packs, GST registrations, or dedicated compliance resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — Bookkeeping */
export const AU_BOOKKEEPING = {
  badge: "Bookkeeping Services",
  titleBefore: "Bookkeeping",
  titleAccent: "Services",
  subtitle:
    "Reliable Bookkeeping Support for Australian Accounting Firms & Bookkeeping Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping Support for Australian Accounting Firms & Bookkeeping Practices",
    paragraphs: [
      "Accurate bookkeeping is the foundation of every successful business. From recording daily transactions to reconciling bank accounts and preparing financial records for BAS, GST, payroll, and year-end reporting, bookkeeping plays a critical role in maintaining compliance and supporting informed business decisions.",
      "As your practice grows, managing bookkeeping for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated Bookkeeping support to Australian accounting firms and bookkeeping practices, helping firms increase capacity, improve turnaround times, and deliver accurate bookkeeping services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Bookkeeping Matters",
    intro:
      "Bookkeeping is much more than entering financial transactions. It involves maintaining accurate financial records, reconciling accounts, reviewing transactions, organising financial data, and ensuring businesses are always prepared for BAS lodgements, tax compliance, payroll processing, and financial reporting.",
    helpLabel: "Effective bookkeeping helps businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Improve financial reporting accuracy",
      "Support BAS & GST compliance",
      "Improve cash flow visibility",
      "Reduce accounting errors",
      "Prepare for year-end reporting",
      "Support better business decisions",
      "Reduce administrative workload",
    ],
  },
  deliverablesAccent: "Bookkeeping",
  deliverablesSubtitle:
    "Day-to-day bookkeeping, catch-up support, reconciliations, and month-end accounting for Australian practices.",
  sections: [
    {
      title: "Our Bookkeeping Services Include",
      items: [
        "Daily, Weekly & Monthly Bookkeeping",
        "Sales & Purchase Transaction Processing",
        "Bank & Credit Card Reconciliations",
        "Accounts Payable Processing",
        "Accounts Receivable Processing",
        "General Ledger Maintenance",
        "Journal Entry Processing",
        "Expense Categorisation & Coding",
        "Multi-Currency Bookkeeping",
        "Month-End Close Support",
        "Financial Data Validation",
        "Management Reporting Support",
      ],
    },
    {
      title: "Catch-Up & Backlog Bookkeeping Services",
      items: [
        "Catch-Up Bookkeeping",
        "Historical Bookkeeping Reconstruction",
        "Backlog Transaction Processing",
        "General Ledger Cleanup",
        "Bank Reconciliation Cleanup",
        "Suspense Account Clearance",
        "Historical Account Reconciliations",
        "Financial Data Corrections",
      ],
    },
    {
      title: "Bookkeeping Review & Reconciliation Support",
      items: [
        "Bank Reconciliations",
        "Credit Card Reconciliations",
        "Accounts Receivable Reconciliations",
        "Accounts Payable Reconciliations",
        "Payroll Reconciliations",
        "BAS & GST Reconciliations",
        "Balance Sheet Reconciliations",
        "Control Account Reviews",
      ],
    },
    {
      title: "Month-End Accounting Support",
      items: [
        "Month-End Closing Support",
        "Journal Entry Reviews",
        "Accrual & Prepayment Processing",
        "Financial Data Validation",
        "Ledger Reviews",
        "Trial Balance Reviews",
        "Reporting Schedule Preparation",
        "Month-End Working Papers",
      ],
    },
  ],
  howWeHelpIntro: "Our bookkeeping support enables firms to:",
  howWeHelp: [
    "Increase bookkeeping capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve reporting accuracy",
    "Meet client deadlines efficiently",
    "Manage peak workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_ACCOUNTING, AU_RECEIPT, AU_WORKFLOW],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms and bookkeeping practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Bookkeeping Expertise",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated bookkeeping specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Bookkeeping Partner",
    titleBefore: "Your",
    titleAccent: "Bookkeeping Delivery Partner",
    body: "Bookkeeping requires consistency, accuracy, and attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable bookkeeping services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with day-to-day bookkeeping, catch-up bookkeeping, reconciliations, month-end accounting, management reporting, or dedicated bookkeeping resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — Corporate Tax */
export const AU_CORPORATE_TAX = {
  badge: "Corporation Tax Services",
  titleBefore: "Corporation Tax",
  titleAccent: "Services",
  subtitle:
    "Reliable Corporate Tax Compliance Support for Australian Accounting Firms & Tax Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Corporate Tax Compliance Support for Australian Accounting Firms & Tax Practices",
    paragraphs: [
      "Corporate tax compliance requires technical expertise, accuracy, and a thorough understanding of Australian taxation laws. Preparing company tax returns, reviewing financial statements, calculating taxable income, identifying tax adjustments, and maintaining compliance with Australian Taxation Office (ATO) requirements demand significant time and expertise. As client portfolios continue to grow, accounting firms often require additional resources to manage increasing tax workloads efficiently.",
      "At NextLedgers, we provide dedicated Corporate Tax support to Australian accounting firms and tax practices. Our white-label outsourcing solutions help firms increase capacity, improve turnaround times, and deliver reliable corporate tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Corporate Tax Compliance Matters",
    intro:
      "Corporate tax compliance involves much more than preparing and lodging a company tax return. Businesses must accurately calculate taxable income, review allowable deductions, account for depreciation, reconcile tax balances, prepare supporting schedules, and comply with ATO reporting requirements.",
    helpLabel: "Professional corporate tax management helps businesses:",
    bullets: [
      "Meet corporate tax lodgement deadlines",
      "Maintain compliance with Australian tax legislation",
      "Reduce tax reporting errors",
      "Improve tax reporting accuracy",
      "Minimise compliance risks",
      "Maintain complete supporting documentation",
      "Support financial transparency",
      "Strengthen client confidence",
    ],
  },
  deliverablesAccent: "Corporate Tax",
  deliverablesSubtitle:
    "Company tax returns, computations, reconciliations, and ATO compliance support for Australian practices.",
  sections: [
    {
      title: "Our Corporate Tax Services Include",
      items: [
        "Company Tax Return Preparation Support",
        "Corporate Tax Computation Preparation",
        "Taxable Income Calculations",
        "Financial Statement Reviews",
        "Tax Adjustment Calculations",
        "Depreciation & Capital Allowance Reviews",
        "Temporary & Permanent Difference Reviews",
        "Tax Reconciliation Preparation",
        "Tax Working Paper Preparation",
        "Deferred Tax Support",
        "Corporate Tax Compliance Reviews",
        "Year-End Tax Review Assistance",
      ],
    },
    {
      title: "Corporate Tax Registration & Compliance Support",
      items: [
        "Tax File Number (TFN) Administration Support",
        "Australian Business Number (ABN) Documentation Reviews",
        "Company Tax Registration Support",
        "Compliance Calendar Management",
        "Tax Lodgement Tracking",
        "Regulatory Documentation Support",
        "Tax Health Check Assistance",
        "Client Communication Support",
      ],
    },
    {
      title: "Corporate Tax Review & Advisory Support",
      items: [
        "Tax Adjustment Reviews",
        "Deductible Expense Reviews",
        "Asset & Depreciation Reviews",
        "Capital Gains Tax Support",
        "Small Business Tax Concession Reviews",
        "Loss Utilisation Reviews",
        "Tax Risk Identification",
        "Supporting Schedule Preparation",
      ],
    },
  ],
  howWeHelpIntro: "Our Corporate Tax support enables firms to:",
  howWeHelp: [
    "Increase corporate tax compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax return accuracy",
    "Meet ATO lodgement deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_ACCOUNTING, AU_TAX_WORKING, AU_TAX_COLLAB],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms and tax practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Corporate Tax Expertise",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated corporate tax specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Corporation Tax Partner",
    titleBefore: "Your",
    titleAccent: "Corporation Tax Delivery Partner",
    body: "Corporate tax compliance requires technical knowledge, precision, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver reliable corporate tax services while freeing up valuable internal resources during busy tax seasons.",
    callout:
      "Whether you require support with company tax return preparation, tax computations, tax reconciliations, deferred tax calculations, working papers, or dedicated tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 3 — Income Tax */
export const AU_INCOME_TAX = {
  badge: "Income Tax Services",
  titleBefore: "Income Tax",
  titleAccent: "Services",
  subtitle:
    "Reliable Individual & Personal Income Tax Support for Australian Accounting Firms & Tax Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Individual & Personal Income Tax Support for Australian Accounting Firms & Tax Practices",
    paragraphs: [
      "Preparing individual income tax returns requires technical expertise, attention to detail, and a thorough understanding of Australian taxation legislation. Accounting firms must accurately review income sources, deductions, tax offsets, capital gains, investment income, and supporting documentation while ensuring compliance with Australian Taxation Office (ATO) requirements.",
      "As your practice grows, managing large volumes of individual tax returns during tax season can place significant pressure on your internal team. At NextLedgers, we provide dedicated Income Tax support to Australian accounting firms and tax practices, helping firms increase capacity, improve turnaround times, and deliver accurate tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Income Tax Compliance Matters",
    intro:
      "Income tax compliance involves much more than preparing a tax return. Every return requires careful review of employment income, investment earnings, rental properties, deductions, tax offsets, capital gains, and supporting documentation to ensure accurate reporting and maximise legitimate tax outcomes.",
    helpLabel: "Professional income tax preparation helps individuals:",
    bullets: [
      "Meet ATO lodgement requirements",
      "Maintain accurate tax reporting",
      "Maximise eligible deductions",
      "Reduce tax reporting errors",
      "Improve compliance accuracy",
      "Maintain complete supporting documentation",
      "Minimise compliance risks",
      "Strengthen confidence in tax reporting",
    ],
  },
  deliverablesAccent: "Income Tax",
  deliverablesSubtitle:
    "Individual tax returns, CGT, rental income, deductions, and tax planning support for Australian practices.",
  sections: [
    {
      title: "Our Income Tax Services Include",
      items: [
        "Individual Income Tax Return Preparation",
        "Sole Trader Tax Return Support",
        "Employment Income Reviews",
        "Investment Income Reporting",
        "Rental Property Tax Return Support",
        "Capital Gains Tax (CGT) Calculations",
        "Dividend & Interest Income Reporting",
        "Foreign Income Reporting Support",
        "Deduction Reviews",
        "Tax Offset Reviews",
        "Tax Working Paper Preparation",
        "Income Tax Compliance Reviews",
      ],
    },
    {
      title: "Individual Tax Review & Compliance Support",
      items: [
        "PAYG Income Reviews",
        "Work-Related Expense Reviews",
        "Motor Vehicle Expense Calculations",
        "Home Office Deduction Reviews",
        "Self-Education Expense Reviews",
        "Rental Property Expense Reviews",
        "Investment Portfolio Reviews",
        "Supporting Documentation Validation",
      ],
    },
    {
      title: "Capital Gains & Investment Tax Support",
      items: [
        "Capital Gains Tax Calculations",
        "Share Investment Reporting",
        "Managed Fund Income Reviews",
        "Property Disposal Calculations",
        "Cost Base Calculations",
        "Capital Loss Reviews",
        "Investment Schedule Preparation",
        "CGT Working Papers",
      ],
    },
    {
      title: "Tax Planning & Year-End Support",
      items: [
        "Income Tax Estimate Calculations",
        "Deduction Planning Support",
        "Tax Liability Reviews",
        "Income & Expense Analysis",
        "Client Tax Summary Preparation",
        "Tax Planning Working Papers",
        "Financial Information Reviews",
        "Client Documentation Preparation",
      ],
    },
  ],
  howWeHelpIntro: "Our Income Tax support enables firms to:",
  howWeHelp: [
    "Increase tax return preparation capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax return accuracy",
    "Meet ATO lodgement deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_TAX_ACCOUNTING, AU_WORKING_PAPERS, AU_PRACTICE],
  industries: AU_INCOME_TAX_CLIENTS,
  industriesEyebrow: "Our Client Expertise",
  industriesTitleBefore: "Industries & Client Types We ",
  industriesTitleAccent: "Support",
  industriesBlurb:
    "We support accounting firms serving a diverse range of individual taxpayers, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Income Tax Expertise",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated income tax specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Income Tax Partner",
    titleBefore: "Your",
    titleAccent: "Income Tax Delivery Partner",
    body: "Income tax preparation requires technical expertise, precision, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver accurate individual tax returns while freeing up valuable internal resources during busy tax seasons.",
    callout:
      "Whether you require support with individual tax returns, sole trader tax returns, rental property reporting, capital gains tax calculations, tax planning, working papers, or dedicated tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 4 — Management Accounting & Virtual CFO */
export const AU_MANAGEMENT_ACCOUNTS = {
  badge: "Management Accounting & Virtual CFO Services",
  titleBefore: "Management Accounting &",
  titleAccent: "Virtual CFO Services",
  titleAfter: "",
  subtitle:
    "Reliable Management Accounting & Virtual CFO Support for Australian Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Management Accounting & Virtual CFO Support for Australian Accounting Firms",
    paragraphs: [
      "Modern businesses expect far more than bookkeeping and tax compliance. They rely on their accountants for financial insights, cash flow management, budgeting, forecasting, profitability analysis, and strategic advice that helps them make informed business decisions. As client expectations continue to evolve, accounting firms require additional resources to deliver high-value advisory services while managing increasing workloads.",
      "At NextLedgers, we provide dedicated Management Accounting & Virtual CFO support to Australian accounting firms and business advisory practices. Our white-label outsourcing solutions help firms expand their advisory services, improve reporting efficiency, and deliver strategic financial insights without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Management Accounting & Virtual CFO Services Matter",
    intro:
      "Management accounting goes beyond statutory financial reporting by providing business owners with timely financial information to monitor performance, improve profitability, manage cash flow, and plan for future growth. Virtual CFO services provide ongoing strategic financial guidance, enabling businesses to make informed decisions without the cost of hiring a full-time Chief Financial Officer.",
    helpLabel: "Effective management reporting and advisory help businesses:",
    bullets: [
      "Monitor financial performance",
      "Improve profitability",
      "Manage cash flow effectively",
      "Track key business KPIs",
      "Support strategic decision-making",
      "Improve budgeting accuracy",
      "Strengthen financial controls",
      "Support sustainable business growth",
    ],
  },
  deliverablesAccent: "Management Accounting & Virtual CFO",
  deliverablesSubtitle:
    "Monthly packs, forecasting, KPIs, and virtual CFO advisory support for Australian practices.",
  sections: [
    {
      title: "Our Management Accounting Services Include",
      items: [
        "Monthly Management Accounts Preparation",
        "Profit & Loss Reporting",
        "Balance Sheet Reporting",
        "Cash Flow Reporting",
        "Budget vs Actual Analysis",
        "KPI Reporting",
        "Financial Dashboard Preparation",
        "Revenue & Margin Analysis",
        "Departmental Performance Reporting",
        "Working Capital Reporting",
        "Variance Analysis",
        "Management Reporting Packs",
      ],
    },
    {
      title: "Our Virtual CFO Services Include",
      items: [
        "Cash Flow Forecasting",
        "Budget Preparation Support",
        "Financial Forecasting",
        "Business Performance Analysis",
        "Profitability Reviews",
        "Financial KPI Monitoring",
        "Business Growth Planning",
        "Strategic Financial Reporting",
        "Board Reporting Support",
        "Investor Reporting Support",
        "Business Advisory Assistance",
        "Financial Decision Support",
      ],
    },
    {
      title: "Budgeting & Forecasting Support",
      items: [
        "Annual Budget Preparation",
        "Revenue Forecasting",
        "Expense Forecasting",
        "Cash Flow Forecasting",
        "Scenario Planning Models",
        "Financial Modelling Support",
        "Growth Forecasting",
        "Strategic Financial Planning",
      ],
    },
    {
      title: "Business Performance & Advisory Support",
      items: [
        "Financial Ratio Analysis",
        "Cost & Margin Analysis",
        "Profitability Reviews",
        "Business Performance Analysis",
        "Variance Analysis",
        "Cash Flow Analysis",
        "Executive Reporting Packs",
        "Strategic Performance Reporting",
      ],
    },
  ],
  howWeHelpIntro:
    "Our Management Accounting & Virtual CFO support enables firms to:",
  howWeHelp: [
    "Expand advisory service offerings",
    "Increase reporting capacity",
    "Improve turnaround times",
    "Deliver higher-value client services",
    "Strengthen client relationships",
    "Reduce internal workload",
    "Improve operational efficiency",
    "Scale operations without increasing headcount",
  ],
  software: [AU_ACCOUNTING, AU_REPORTING, AU_COLLAB],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Management Accounting Expertise",
    "Virtual CFO Advisory Experience",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated management accounting and Virtual CFO specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Management Accounting Partner",
    titleBefore: "Your",
    titleAccent: "Management Accounting & Virtual CFO Delivery Partner",
    body: "Management accounting and Virtual CFO services require commercial insight, analytical expertise, and consistent reporting. Our dedicated professionals work as an extension of your practice, helping you deliver meaningful financial insights and strategic advisory services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with monthly management accounts, budgeting, forecasting, cash flow management, KPI reporting, board reporting, financial modelling, or dedicated advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 5 — Payroll Processing */
export const AU_PAYROLL = {
  badge: "Payroll Processing Services",
  titleBefore: "Payroll Processing",
  titleAccent: "Services",
  subtitle:
    "Reliable Payroll Processing Support for Australian Accounting Firms & Bookkeeping Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Payroll Processing Support for Australian Accounting Firms & Bookkeeping Practices",
    paragraphs: [
      "Payroll processing requires accuracy, consistency, and a thorough understanding of Australian payroll legislation. Businesses rely on their accountants and bookkeepers to ensure employees are paid accurately and on time while meeting obligations relating to PAYG withholding, Superannuation Guarantee (SG), Single Touch Payroll (STP), leave entitlements, and Fair Work requirements. Even minor payroll errors can result in compliance risks, employee dissatisfaction, and unnecessary administrative work.",
      "As your practice grows, managing payroll for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated Payroll Processing support to Australian accounting firms and bookkeeping practices, helping firms increase capacity, improve turnaround times, and deliver reliable payroll services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Payroll Processing Matters",
    intro:
      "Payroll is much more than processing employee wages. Businesses must accurately calculate salaries, wages, overtime, allowances, bonuses, leave entitlements, PAYG withholding, and Superannuation contributions while maintaining compliant payroll records and meeting Australian Taxation Office (ATO) reporting obligations.",
    helpLabel: "Effective payroll management helps businesses:",
    bullets: [
      "Pay employees accurately and on time",
      "Maintain STP compliance",
      "Meet PAYG withholding obligations",
      "Manage Superannuation contributions",
      "Maintain accurate employee records",
      "Reduce payroll errors",
      "Improve operational efficiency",
      "Enhance employee confidence",
    ],
  },
  deliverablesAccent: "Payroll Processing",
  deliverablesSubtitle:
    "Payroll processing, STP, Superannuation, PAYG, and payroll reporting support for Australian practices.",
  sections: [
    {
      title: "Our Payroll Processing Services Include",
      items: [
        "Weekly, Fortnightly & Monthly Payroll Processing",
        "Employee Payroll Maintenance",
        "New Employee Setup",
        "Employee Termination & Final Pay Processing",
        "Salary, Wage & Allowance Calculations",
        "Overtime & Penalty Rate Calculations",
        "Bonus & Commission Processing",
        "Leave Entitlement Calculations",
        "Payroll Journal Preparation",
        "Payslip Preparation",
        "Payroll Reconciliations",
        "Payroll Reporting Support",
      ],
    },
    {
      title: "STP & Superannuation Compliance Support",
      items: [
        "Single Touch Payroll (STP) Reporting Support",
        "Superannuation Guarantee (SG) Calculations",
        "Superannuation Contribution Reviews",
        "PAYG Withholding Calculations",
        "Payroll Compliance Reviews",
        "Payroll Data Validation",
        "Payroll Working Paper Preparation",
        "End-of-Year Payroll Support",
      ],
    },
    {
      title: "Payroll Administration Support",
      items: [
        "Employee Master Data Maintenance",
        "Payroll Amendments & Adjustments",
        "Payroll Query Support",
        "Payroll Record Reviews",
        "Employee Leave Record Maintenance",
        "Payroll Documentation Preparation",
        "Payroll Process Reviews",
        "Payroll Audit Readiness Support",
      ],
    },
    {
      title: "Payroll Reporting & Reconciliation Support",
      items: [
        "Payroll Control Account Reconciliations",
        "PAYG Reconciliations",
        "Superannuation Reconciliations",
        "Payroll Cost Analysis",
        "Departmental Payroll Reporting",
        "Employee Cost Reporting",
        "Payroll Data Reviews",
        "Management Payroll Reports",
      ],
    },
  ],
  howWeHelpIntro: "Our payroll support enables firms to:",
  howWeHelp: [
    "Increase payroll processing capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve payroll accuracy",
    "Strengthen compliance processes",
    "Minimise payroll-related errors",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_PAYROLL_SW, AU_ACCOUNTING, AU_PAYROLL_WORKFLOW],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms and bookkeeping practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Payroll Expertise",
    "STP & Superannuation Knowledge",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated payroll specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Payroll Partner",
    titleBefore: "Your",
    titleAccent: "Payroll Processing Delivery Partner",
    body: "Payroll processing requires precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with payroll processing, STP reporting, Superannuation calculations, PAYG reconciliations, employee record maintenance, payroll reporting, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 6 — Year-End Accounts & Financial Statement Preparation (Australia) */
export const AU_YEAR_END = {
  badge: "Year-End Accounts & Financial Statement Preparation Services",
  titleBefore: "Year-End Accounts & Financial Statement",
  titleAccent: "Preparation Services",
  titleAfter: "",
  subtitle:
    "Reliable Year-End Accounts & Financial Reporting Support for Australian Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Year-End Accounts & Financial Reporting Support for Australian Accounting Firms",
    paragraphs: [
      "Preparing year-end accounts and financial statements requires technical expertise, accuracy, and a structured review process. Accounting firms must ensure financial statements are prepared from complete and accurate accounting records while meeting Australian Accounting Standards, Australian Taxation Office (ATO) requirements, ASIC reporting obligations where applicable, and client deadlines.",
      "As your practice grows, managing year-end reporting engagements for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated Year-End Accounts & Financial Statement Preparation support to Australian accounting firms and bookkeeping practices, helping firms increase capacity, improve turnaround times, and deliver high-quality financial reporting without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statements Matter",
    intro:
      "Year-end financial statements provide business owners, investors, lenders, and other stakeholders with a clear understanding of a company's financial performance and financial position. They also form the foundation for company tax returns, external audits, financing applications, regulatory compliance, and strategic business decisions.",
    helpLabel: "Accurate year-end reporting helps businesses:",
    bullets: [
      "Meet statutory reporting obligations",
      "Support corporate tax compliance",
      "Improve financial transparency",
      "Prepare for external audits",
      "Strengthen stakeholder confidence",
      "Support financing applications",
      "Improve financial decision-making",
      "Maintain accurate accounting records",
    ],
  },
  deliverablesAccent: "Year-End & Financial Reporting",
  deliverablesSubtitle:
    "Year-end accounts, financial statements, audit working papers, and pre-year-end cleanup for Australian practices.",
  sections: [
    {
      title: "Our Year-End Accounts Preparation Services Include",
      items: [
        "Trial Balance Reviews",
        "General Ledger Reviews",
        "Year-End Accounting Adjustments",
        "Accrual & Prepayment Reviews",
        "Fixed Asset Register Reviews",
        "Depreciation Calculations",
        "Balance Sheet Reconciliations",
        "Supporting Working Paper Preparation",
        "Financial Data Validation",
        "Year-End Close Support",
        "Compliance Documentation Preparation",
        "Financial Reporting Reviews",
      ],
    },
    {
      title: "Our Financial Statement Preparation Services Include",
      items: [
        "Statement of Financial Position Preparation",
        "Statement of Profit or Loss Preparation",
        "Statement of Cash Flows Preparation",
        "Statement of Changes in Equity Preparation",
        "Notes to the Financial Statements",
        "Supporting Schedule Preparation",
        "Financial Statement Formatting",
        "Special Purpose & General Purpose Financial Statements",
      ],
    },
    {
      title: "Audit Support & Working Paper Preparation",
      items: [
        "Audit Working Paper Preparation",
        "Lead Schedule Preparation",
        "Balance Sheet Schedules",
        "Account Reconciliations",
        "Supporting Documentation Organisation",
        "Financial Data Compilation",
        "Audit Query Support",
        "Year-End Reporting Packs",
      ],
    },
    {
      title: "Financial Cleanup Before Year-End Reporting",
      items: [
        "Historical Account Reviews",
        "General Ledger Cleanup",
        "Bank Reconciliation Cleanup",
        "Suspense Account Clearance",
        "Balance Validation Reviews",
        "Duplicate Transaction Reviews",
        "Historical Accounting Adjustments",
        "Financial Data Corrections",
      ],
    },
  ],
  howWeHelpIntro: "Our year-end reporting support enables firms to:",
  howWeHelp: [
    "Increase year-end reporting capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve financial reporting accuracy",
    "Meet reporting deadlines efficiently",
    "Manage peak reporting seasons",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [AU_ACCOUNTING, AU_YEAR_END_REPORTING, AU_PAYROLL_WORKFLOW],
  industries: AUSTRALIA_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Australian Financial Reporting Expertise",
    "Australian Accounting Standards Knowledge",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated year-end reporting specialists who work as an extension of your Australian practice.",
  partner: {
    badge: "Financial Reporting Partner",
    titleBefore: "Your",
    titleAccent: "Financial Reporting Delivery Partner",
    body: "Year-end accounts preparation requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate financial statements while freeing up valuable internal resources during busy reporting periods.",
    callout:
      "Whether you require support with year-end accounts preparation, financial statement drafting, working paper preparation, reconciliations, audit support, corporate tax readiness, or dedicated accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};
