import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

/** Default Ireland industries mapped to existing industry icon assets */
export const IRELAND_INDUSTRIES = [
  findIndustry("Professional Services"),
  findIndustry("Construction"),
  findIndustry("Restaurants"), // Retail
  findIndustry("E-commerce"),
  findIndustry("Manufacturing"),
  findIndustry("Hospitality"),
  findIndustry("Healthcare"),
  findIndustry("Technology"),
  findIndustry("Logistics & Transportation"),
  findIndustry("Consulting"), // Wholesale / Financial Services fallback
]
  .filter(Boolean)
  .map((item, i) => {
    const labels = [
      "Professional Services",
      "Construction",
      "Retail",
      "E-commerce",
      "Manufacturing",
      "Hospitality",
      "Healthcare",
      "Technology",
      "Transport & Logistics",
      "Wholesale & Distribution",
    ];
    return { ...item, label: labels[i] || item.label };
  });

export const IRELAND_FINANCIAL_INDUSTRIES = [
  findIndustry("Professional Services"),
  findIndustry("Construction"),
  findIndustry("Restaurants"),
  findIndustry("E-commerce"),
  findIndustry("Manufacturing"),
  findIndustry("Hospitality"),
  findIndustry("Healthcare"),
  findIndustry("Technology"),
  findIndustry("Consulting"),
  findIndustry("Logistics & Transportation"),
]
  .filter(Boolean)
  .map((item, i) => {
    const labels = [
      "Professional Services",
      "Construction",
      "Retail",
      "E-commerce",
      "Manufacturing",
      "Hospitality",
      "Healthcare",
      "Technology",
      "Financial Services",
      "Wholesale & Distribution",
    ];
    return { ...item, label: labels[i] || item.label };
  });

/** Personal Tax — client types (icons reused from industry set) */
export const IRELAND_PERSONAL_TAX_CLIENTS = [
  { ...findIndustry("Professional Services"), label: "Employees & PAYE Workers" },
  { ...findIndustry("Consulting"), label: "Self-Employed Professionals" },
  { ...findIndustry("Startups & SMEs"), label: "Sole Traders" },
  { ...findIndustry("Law Firms"), label: "Company Directors" },
  { ...findIndustry("Real Estate"), label: "Property Investors" },
  { ...findIndustry("Real Estate"), label: "Landlords" },
  { ...findIndustry("Consulting"), label: "High-Net-Worth Individuals" },
  { ...findIndustry("Healthcare"), label: "Pensioners & Retirees" },
  { ...findIndustry("Technology"), label: "Expatriates" },
  { ...findIndustry("Startups & SMEs"), label: "Business Owners & Entrepreneurs" },
].filter((i) => i && i.src);

const IE_ACCOUNTING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "sage accounting",
    "surf accounts",
    "big red cloud",
    "relate accounts",
    "microsoft dynamics 365",
  ],
};

const IE_ACCOUNTING_CORE = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "sage accounting",
    "surf accounts",
    "big red cloud",
    "relate accounts",
  ],
};

const IE_RECEIPT_TOOLS = {
  heading: "RECEIPT CAPTURE & BOOKKEEPING TOOLS",
  icon: "document",
  logos: ["dext", "hubdoc", "autoentry", "approvalmax", "lightyear"],
};

const IE_WORKFLOW = {
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

const IE_WORKFLOW_LIGHT = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: [
    "microsoft 365",
    "google workspace",
    "sharepoint",
    "dropbox business",
    "dext",
    "hubdoc",
  ],
};

const IE_REPORTING = {
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

const IE_COLLAB = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const IE_SECRETARIAL = {
  heading: "COMPANY SECRETARIAL & COMPLIANCE SOFTWARE",
  icon: "briefcase",
  logos: [
    "inform direct",
    "blueprint oneworld",
    "relate software",
    "laserfiche",
    "microsoft excel",
  ],
};

const IE_TAX = {
  heading: "TAX SOFTWARE",
  icon: "document",
  logos: ["ros", "relate tax", "sage tax", "cch personal tax"],
};

const IE_VAT_COMPLIANCE = {
  heading: "VAT & COMPLIANCE SOFTWARE",
  icon: "tag",
  logos: ["ros", "relate tax", "sage vat", "microsoft excel", "google sheets"],
};

const IE_WORKING_PAPERS = {
  heading: "WORKING PAPER & DOCUMENT MANAGEMENT TOOLS",
  icon: "file",
  logos: [
    "microsoft excel",
    "google sheets",
    "dext",
    "hubdoc",
    "approvalmax",
    "microsoft 365",
    "google workspace",
  ],
};

const IE_FINANCIAL_REPORTING = {
  heading: "FINANCIAL REPORTING & WORKING PAPER SOFTWARE",
  icon: "briefcase",
  logos: [
    "caseware",
    "cch accounts production",
    "relate accounts production",
    "microsoft excel",
    "google sheets",
  ],
};

const IE_YEAR_END_WORKFLOW = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: [
    "dext",
    "hubdoc",
    "approvalmax",
    "microsoft 365",
    "google workspace",
    "sharepoint",
  ],
};

/** 1 — Bookkeeping */
export const IE_BOOKKEEPING = {
  badge: "Ireland Bookkeeping Outsourcing",
  titleBefore: "Ireland Bookkeeping",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Bookkeeping Support for Irish Accounting Firms & Accountancy Practices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping Support for Irish Accounting Firms & Accountancy Practices",
    paragraphs: [
      "Accurate bookkeeping is the foundation of every successful business. From recording day-to-day financial transactions to reconciling bank accounts, maintaining VAT records, and preparing financial data for payroll, tax compliance, and year-end reporting, bookkeeping plays a critical role in helping Irish businesses remain compliant and financially organised.",
      "As your practice grows, managing bookkeeping for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Bookkeeping support to Irish accounting firms, accountancy practices, and bookkeeping providers, helping firms increase capacity, improve turnaround times, and deliver accurate bookkeeping services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Bookkeeping Matters",
    intro:
      "Bookkeeping is much more than recording financial transactions. It involves maintaining accurate financial records, reconciling accounts, organising supporting documentation, reviewing financial data, and ensuring businesses are always prepared for VAT returns, payroll processing, Corporation Tax compliance, and year-end financial reporting.",
    helpLabel: "Effective bookkeeping helps businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Improve financial reporting accuracy",
      "Support VAT compliance",
      "Improve cash flow visibility",
      "Reduce accounting errors",
      "Prepare for year-end reporting",
      "Support better business decisions",
      "Reduce administrative workload",
    ],
  },
  deliverablesAccent: "Bookkeeping",
  deliverablesSubtitle:
    "Day-to-day bookkeeping, catch-up support, reconciliations, and month-end accounting for Irish practices.",
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
        "VAT Reconciliations",
        "Payroll Reconciliations",
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
  software: [IE_ACCOUNTING, IE_RECEIPT_TOOLS, IE_WORKFLOW],
  industries: IRELAND_INDUSTRIES,
  industriesBlurb:
    "We support Irish accounting firms and accountancy practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish Bookkeeping Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated bookkeeping specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "Bookkeeping Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Bookkeeping Delivery Partner",
    body: "Bookkeeping requires consistency, accuracy, and attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable bookkeeping services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with day-to-day bookkeeping, catch-up bookkeeping, reconciliations, month-end accounting, VAT-ready bookkeeping, management reporting, or dedicated offshore bookkeeping resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — VAT */
export const IE_VAT = {
  badge: "Ireland VAT Outsourcing",
  titleBefore: "Ireland VAT",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable VAT Compliance & Filing Support for Irish Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable VAT Compliance & Filing Support for Irish Accounting Firms",
    paragraphs: [
      "VAT compliance requires technical expertise, accuracy, and a thorough understanding of Irish VAT legislation. Businesses must maintain accurate VAT records, correctly classify transactions, prepare periodic VAT returns, and comply with the reporting requirements of the Irish Revenue Commissioners. Even minor VAT errors can lead to penalties, interest charges, audits, and unnecessary administrative work.",
      "As your practice grows, managing VAT compliance for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore VAT support to Irish accounting firms, accountancy practices, and tax advisory firms, helping firms increase capacity, improve turnaround times, and deliver reliable VAT compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why VAT Compliance Matters",
    intro:
      "VAT compliance involves much more than submitting periodic VAT returns. Businesses must accurately record taxable transactions, apply the correct VAT rates, review intra-EU and international transactions, reconcile VAT accounts, maintain supporting documentation, and comply with Irish and EU VAT regulations.",
    helpLabel: "Effective VAT management helps businesses:",
    bullets: [
      "Meet VAT filing deadlines",
      "Maintain compliance with Irish VAT legislation",
      "Improve VAT reporting accuracy",
      "Reduce filing errors and adjustments",
      "Minimise compliance risks",
      "Maintain complete VAT records",
      "Prepare for Revenue audits",
      "Improve financial transparency",
    ],
  },
  deliverablesAccent: "VAT",
  deliverablesSubtitle:
    "VAT returns, reconciliations, EU trade support, and Revenue compliance for Irish practices.",
  sections: [
    {
      title: "Our VAT Services Include",
      items: [
        "VAT Registration Support",
        "VAT Return Preparation",
        "Bi-Monthly, Quarterly & Annual VAT Filing Support",
        "VAT Account Reconciliations",
        "VAT Transaction Reviews",
        "VAT Coding Reviews",
        "Input & Output VAT Validation",
        "VAT Working Paper Preparation",
        "VAT Compliance Reviews",
        "VAT Amendment Support",
        "Supporting Documentation Preparation",
        "VAT Health Checks",
      ],
    },
    {
      title: "VAT Registration & Revenue Compliance Support",
      items: [
        "VAT Registration Documentation",
        "Revenue Online Service (ROS) VAT Setup Support",
        "VAT Deregistration Support",
        "Compliance Calendar Management",
        "VAT Filing Deadline Monitoring",
        "Revenue Correspondence Support",
        "Regulatory Documentation Preparation",
        "Client Compliance Support",
      ],
    },
    {
      title: "EU VAT & International Trade Support",
      items: [
        "Intra-Community Supply & Acquisition Reviews",
        "Reverse Charge VAT Reviews",
        "Import & Export VAT Reviews",
        "VIES Return Preparation Support",
        "Intrastat Reporting Support",
        "One Stop Shop (OSS) Reporting Support",
        "Cross-Border VAT Reviews",
        "EU VAT Compliance Documentation",
      ],
    },
    {
      title: "VAT Review & Reconciliation Support",
      items: [
        "VAT Control Account Reconciliations",
        "Sales VAT Reviews",
        "Purchase VAT Reviews",
        "Historical VAT Reviews",
        "VAT Error Identification",
        "VAT Adjustment Calculations",
        "Supporting Schedule Preparation",
        "Revenue Audit Readiness Support",
      ],
    },
  ],
  howWeHelpIntro: "Our VAT support enables firms to:",
  howWeHelp: [
    "Increase VAT compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve VAT reporting accuracy",
    "Meet Revenue filing deadlines",
    "Manage peak filing periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [IE_ACCOUNTING, IE_VAT_COMPLIANCE, IE_COLLAB],
  industries: IRELAND_FINANCIAL_INDUSTRIES,
  industriesBlurb:
    "We support Irish accounting firms and accountancy practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish VAT Expertise",
    "Revenue & EU VAT Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated VAT specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "VAT Partner",
    titleBefore: "Your Offshore",
    titleAccent: "VAT Delivery Partner",
    body: "VAT compliance requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate VAT compliance services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with VAT registrations, VAT return preparation, VIES and Intrastat reporting, OSS reporting, VAT reconciliations, Revenue compliance reviews, or dedicated offshore VAT specialists, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 3 — Year-End Accounts */
export const IE_YEAR_END = {
  badge: "Ireland Year-End Accounts Outsourcing",
  titleBefore: "Ireland Year-End Accounts &",
  titleAccent: "Financial Statement Preparation",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Year-End Accounts & Financial Reporting Support for Irish Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Year-End Accounts & Financial Reporting Support for Irish Accounting Firms",
    paragraphs: [
      "Preparing year-end accounts and financial statements requires technical expertise, accuracy, and a structured review process. Accounting firms must ensure financial statements are prepared from complete and accurate accounting records while complying with Irish Generally Accepted Accounting Practice (Irish GAAP), Financial Reporting Standards (FRS 102), International Financial Reporting Standards (IFRS) where applicable, and Revenue as well as Companies Registration Office (CRO) requirements.",
      "As your practice grows, managing year-end reporting engagements for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated offshore Year-End Accounts & Financial Statement Preparation support to Irish accounting firms, accountancy practices, and business advisory firms, helping firms increase capacity, improve turnaround times, and deliver high-quality financial reporting without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statements Matter",
    intro:
      "Year-end financial statements provide business owners, investors, lenders, and regulatory authorities with a clear picture of a company's financial performance and financial position. They also form the basis for Corporation Tax returns, statutory filings, audits, financing applications, and strategic business decisions.",
    helpLabel: "Accurate year-end reporting helps businesses:",
    bullets: [
      "Meet statutory reporting obligations",
      "Support Corporation Tax compliance",
      "Comply with CRO filing requirements",
      "Improve financial transparency",
      "Prepare for statutory audits",
      "Strengthen stakeholder confidence",
      "Support financing applications",
      "Improve business decision-making",
    ],
  },
  deliverablesAccent: "Year-End & Financial Reporting",
  deliverablesSubtitle:
    "Year-end accounts, financial statements, audit working papers, and pre-year-end cleanup for Irish practices.",
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
        "Statement of Changes in Equity Preparation",
        "Statement of Cash Flows Preparation (where applicable)",
        "Notes to the Financial Statements",
        "Directors' Report Preparation Support",
        "Financial Statement Formatting",
        "FRS 102 & IFRS Financial Statements",
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
    "Meet Revenue and CRO reporting deadlines",
    "Manage peak reporting periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [IE_ACCOUNTING, IE_FINANCIAL_REPORTING, IE_YEAR_END_WORKFLOW],
  industries: IRELAND_FINANCIAL_INDUSTRIES,
  industriesBlurb:
    "We support Irish accounting firms and accountancy practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish Financial Reporting Expertise",
    "Irish GAAP, FRS 102 & IFRS Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated year-end and financial reporting specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "Financial Reporting Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Financial Reporting Delivery Partner",
    body: "Year-end accounts preparation requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate financial statements while freeing up valuable internal resources during busy reporting periods.",
    callout:
      "Whether you require support with year-end accounts preparation, financial statement drafting, working paper preparation, Corporation Tax readiness, CRO filing support, reconciliations, audit support, or dedicated offshore accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 4 — Personal Tax */
export const IE_PERSONAL_TAX = {
  badge: "Ireland Personal Tax Outsourcing",
  titleBefore: "Ireland Personal Tax",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Personal Tax Compliance Support for Irish Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Personal Tax Compliance Support for Irish Accounting Firms",
    paragraphs: [
      "Preparing Personal Tax returns requires technical expertise, attention to detail, and a thorough understanding of Irish tax legislation. Accounting firms and tax advisors must accurately review employment income, self-employed income, rental income, investment income, allowable deductions, tax credits, reliefs, and supporting documentation while ensuring compliance with Revenue requirements.",
      "As your practice grows, managing large volumes of Personal Tax returns can place significant pressure on your internal team, particularly during the annual filing season. At NextLedgers, we provide dedicated offshore Personal Tax support to Irish accounting firms, accountancy practices, and tax advisory firms, helping practices increase capacity, improve turnaround times, and deliver accurate tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Personal Tax Compliance Matters",
    intro:
      "Personal Tax compliance involves much more than preparing an annual tax return. Every return requires careful review of multiple income sources, deductible expenses, tax credits, reliefs, rental income, business profits, investment income, and supporting documentation to ensure accurate reporting and compliance with Irish tax legislation.",
    helpLabel: "Professional Personal Tax preparation helps individuals:",
    bullets: [
      "Meet Revenue filing deadlines",
      "Maintain accurate tax reporting",
      "Maximise eligible tax credits and reliefs",
      "Reduce tax reporting errors",
      "Improve compliance accuracy",
      "Maintain complete supporting documentation",
      "Minimise compliance risks",
      "Strengthen confidence in tax reporting",
    ],
  },
  deliverablesAccent: "Personal Tax",
  deliverablesSubtitle:
    "Form 11/12 support, CGT, rental income reviews, and year-end personal tax planning for Irish practices.",
  sections: [
    {
      title: "Our Personal Tax Services Include",
      items: [
        "Form 11 Tax Return Preparation",
        "Form 12 Tax Return Support",
        "Self-Employed Tax Return Preparation",
        "Employment Income Reviews",
        "Rental Income Reporting",
        "Investment Income Reporting",
        "Capital Gains Tax (CGT) Reporting Support",
        "Foreign Income Reporting",
        "Tax Credit Reviews",
        "Tax Relief Reviews",
        "Tax Computation Preparation",
        "Personal Tax Compliance Reviews",
      ],
    },
    {
      title: "Personal Tax Review & Compliance Support",
      items: [
        "Employment Income Reviews",
        "Self-Employment Income Reviews",
        "Rental Property Income Reviews",
        "Deductible Expense Reviews",
        "Pension Contribution Reviews",
        "Medical Expense Relief Reviews",
        "Foreign Income Reporting Support",
        "Supporting Documentation Validation",
      ],
    },
    {
      title: "Capital Gains & Investment Tax Support",
      items: [
        "Capital Gains Tax (CGT) Calculations",
        "Investment Portfolio Reviews",
        "Dividend Income Reporting",
        "Property Disposal Calculations",
        "Capital Loss Reviews",
        "Foreign Investment Reporting",
        "Investment Schedule Preparation",
        "Tax Working Papers",
      ],
    },
    {
      title: "Tax Planning & Year-End Support",
      items: [
        "Income Tax Estimate Calculations",
        "Tax Liability Reviews",
        "Tax Credit & Relief Planning",
        "Income & Expense Analysis",
        "Client Tax Summary Preparation",
        "Personal Tax Planning Working Papers",
        "Financial Information Reviews",
        "Client Documentation Preparation",
      ],
    },
  ],
  howWeHelpIntro: "Our Personal Tax support enables firms to:",
  howWeHelp: [
    "Increase tax return preparation capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax return accuracy",
    "Meet Revenue filing deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [IE_TAX, IE_ACCOUNTING_CORE, IE_WORKING_PAPERS],
  industries: IRELAND_PERSONAL_TAX_CLIENTS,
  industriesEyebrow: "Our Client Expertise",
  industriesTitleBefore: "Industries & Client Types We ",
  industriesTitleAccent: "Support",
  industriesBlurb:
    "We support Irish accounting firms and tax advisors serving a diverse range of individual taxpayers, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish Personal Tax Expertise",
    "Revenue Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated personal tax specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "Personal Tax Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Personal Tax Delivery Partner",
    body: "Personal Tax preparation requires technical expertise, precision, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver accurate Personal Tax returns while freeing up valuable internal resources during busy tax seasons.",
    callout:
      "Whether you require support with Form 11 and Form 12 tax returns, self-employed tax returns, Capital Gains Tax calculations, rental income reporting, tax planning, Revenue compliance, working papers, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 5 — Management Accounts & Virtual CFO */
export const IE_MANAGEMENT_ACCOUNTS = {
  badge: "Ireland Management Accounting & Virtual CFO",
  titleBefore: "Ireland Management Accounting &",
  titleAccent: "Virtual CFO",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Management Accounting & Virtual CFO Support for Irish Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Management Accounting & Virtual CFO Support for Irish Accounting Firms",
    paragraphs: [
      "Today's businesses expect far more than bookkeeping and tax compliance. They rely on their accountants for timely financial reporting, cash flow management, budgeting, forecasting, profitability analysis, and strategic financial advice. As client expectations continue to evolve, Irish accounting firms require additional resources to deliver high-value advisory services while managing increasing workloads.",
      "At NextLedgers, we provide dedicated offshore Management Accounting & Virtual CFO support to Irish accounting firms, accountancy practices, and business advisory firms. Our white-label outsourcing solutions help firms expand their advisory services, improve reporting efficiency, and deliver strategic financial insights without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Management Accounting & Virtual CFO Services Matter",
    intro:
      "Management accounting goes beyond statutory financial reporting by providing business owners with timely financial information to monitor performance, improve profitability, manage cash flow, and make informed business decisions. Virtual CFO services provide ongoing strategic financial guidance without the cost of hiring a full-time Chief Financial Officer, enabling businesses to strengthen financial performance, improve operational efficiency, and support long-term growth.",
    helpLabel: "Effective management reporting and advisory help businesses:",
    bullets: [
      "Monitor financial performance",
      "Improve profitability",
      "Manage cash flow effectively",
      "Track key financial KPIs",
      "Support strategic decision-making",
      "Improve budgeting accuracy",
      "Strengthen financial controls",
      "Support sustainable business growth",
    ],
  },
  deliverablesAccent: "Management Accounting & Virtual CFO",
  deliverablesSubtitle:
    "Monthly packs, forecasting, KPIs, and virtual CFO advisory support for Irish practices.",
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
        "Investor & Lender Reporting Support",
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
  software: [IE_ACCOUNTING, IE_REPORTING, IE_COLLAB],
  industries: IRELAND_FINANCIAL_INDUSTRIES,
  industriesBlurb:
    "We support Irish accounting firms and accountancy practices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish Management Accounting Expertise",
    "Virtual CFO Advisory Experience",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated management accounting and virtual CFO specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "Management Accounting Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Management Accounting & Virtual CFO Delivery Partner",
    body: "Management accounting and Virtual CFO services require commercial insight, analytical expertise, and consistent reporting. Our dedicated professionals work as an extension of your practice, helping you deliver meaningful financial insights and strategic advisory services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with monthly management accounts, budgeting, forecasting, cash flow management, KPI reporting, board reporting, financial modelling, business advisory, or dedicated offshore advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 6 — Company Secretarial & CRO */
export const IE_COMPANY_SECRETARIAL = {
  badge: "Ireland Company Secretarial & CRO Outsourcing",
  titleBefore: "Ireland Company Secretarial &",
  titleAccent: "CRO",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Company Secretarial & CRO Compliance Support for Irish Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Company Secretarial & CRO Compliance Support for Irish Accounting Firms",
    paragraphs: [
      "Company Secretarial compliance is a vital part of running an Irish company. Businesses must maintain statutory registers, submit annual returns, notify changes to company information, and comply with the filing requirements of the Companies Registration Office (CRO). Missing filing deadlines or maintaining incomplete statutory records can lead to penalties, loss of audit exemption, and unnecessary compliance risks.",
      "As your practice grows, managing Company Secretarial work and CRO compliance for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Company Secretarial & CRO support to Irish accounting firms, accountancy practices, and corporate service providers, helping firms increase capacity, improve turnaround times, and deliver reliable compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Company Secretarial & CRO Compliance Matter",
    intro:
      "Company Secretarial work extends beyond filing annual returns. It involves maintaining statutory records, preparing company resolutions, updating director and shareholder information, monitoring filing deadlines, and ensuring companies remain compliant with the Companies Act and CRO requirements.",
    helpLabel: "Effective Company Secretarial management helps businesses:",
    bullets: [
      "Meet CRO filing deadlines",
      "Maintain statutory compliance",
      "Keep company records up to date",
      "Reduce regulatory risks",
      "Support corporate governance",
      "Maintain audit exemption eligibility where applicable",
      "Improve compliance accuracy",
      "Enhance stakeholder confidence",
    ],
  },
  deliverablesAccent: "Company Secretarial & CRO",
  deliverablesSubtitle:
    "Annual returns, statutory registers, CRO filings, and governance documentation for Irish practices.",
  sections: [
    {
      title: "Our Company Secretarial & CRO Services Include",
      items: [
        "Annual Return (Form B1) Preparation Support",
        "CRO Filing Documentation Preparation",
        "Statutory Register Maintenance",
        "Director & Secretary Appointment Documentation",
        "Director Resignation Documentation",
        "Share Allotment Documentation",
        "Share Transfer Documentation",
        "Company Constitution Documentation Support",
        "Company Resolution Preparation",
        "Beneficial Ownership Documentation Support",
        "Compliance Calendar Management",
        "Company Secretarial Record Maintenance",
      ],
    },
    {
      title: "CRO Compliance & Filing Support",
      items: [
        "Annual Return Filing Preparation",
        "Company Information Update Support",
        "Registered Office Change Documentation",
        "Director & Company Secretary Change Filings",
        "Share Capital Change Documentation",
        "Company Name Change Documentation",
        "Company Status Review Support",
        "CRO Compliance Monitoring",
      ],
    },
    {
      title: "Corporate Governance & Statutory Compliance Support",
      items: [
        "Board Meeting Minutes Preparation",
        "Shareholder Resolution Drafting",
        "Statutory Register Reviews",
        "Corporate Record Reviews",
        "Compliance Health Checks",
        "Governance Documentation Support",
        "Statutory File Organisation",
        "Regulatory Documentation Reviews",
      ],
    },
    {
      title: "Company Records & Compliance Administration",
      items: [
        "Company File Maintenance",
        "Director & Shareholder Register Updates",
        "Persons with Significant Control Documentation Support",
        "Beneficial Ownership Record Support",
        "Compliance Documentation Reviews",
        "Filing Deadline Tracking",
        "Client Compliance Reminders",
        "Company Administration Support",
      ],
    },
  ],
  howWeHelpIntro: "Our Company Secretarial & CRO support enables firms to:",
  howWeHelp: [
    "Increase compliance service capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve filing accuracy",
    "Meet CRO deadlines efficiently",
    "Manage large client portfolios",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [IE_SECRETARIAL, IE_ACCOUNTING_CORE, IE_WORKFLOW_LIGHT],
  industries: IRELAND_FINANCIAL_INDUSTRIES,
  industriesBlurb:
    "We support Irish accounting firms and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Irish Company Secretarial Expertise",
    "CRO Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated company secretarial specialists who work as an extension of your Irish practice.",
  partner: {
    badge: "Company Secretarial Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Company Secretarial & CRO Delivery Partner",
    body: "Company Secretarial work requires organisation, accuracy, confidentiality, and ongoing compliance monitoring. Our dedicated professionals work as an extension of your practice, helping you manage statutory obligations and CRO filings while freeing up valuable internal resources.",
    callout:
      "Whether you require support with annual return preparation, statutory register maintenance, CRO filing documentation, company resolutions, corporate governance documentation, or dedicated offshore compliance resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};
