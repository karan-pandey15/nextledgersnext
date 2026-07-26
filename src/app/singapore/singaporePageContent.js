import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

/** Singapore industries — mapped to existing industry icon assets */
export const SINGAPORE_INDUSTRIES = [
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Technology"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "E-commerce"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Professional Services"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Consulting"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Healthcare"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Education"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Manufacturing"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Logistics & Transportation"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Restaurants"),
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === "Hospitality"),
].filter(Boolean);

const SG_ACCOUNTING_SOFTWARE = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "myob",
    "zoho books",
    "sage",
    "netsuite",
  ],
};

const SG_DOCUMENT_TOOLS = {
  heading: "RECEIPT & DOCUMENT MANAGEMENT TOOLS",
  icon: "document",
  logos: ["dext", "hubdoc", "approvalmax", "autoentry", "microsoft 365", "google workspace"],
};

const SG_WORKFLOW_TOOLS = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: ["dext", "hubdoc", "approvalmax", "google workspace", "microsoft 365", "sharepoint"],
};

const SG_DATA_TOOLS = {
  heading: "DATA & RECONCILIATION TOOLS",
  icon: "chart",
  logos: ["microsoft excel", "google sheets", "dext", "hubdoc", "approvalmax"],
};

export const SINGAPORE_WHY_CHOOSE_DEFAULT = [
  "ACCA-Led Delivery Team",
  "Singapore Accounting Knowledge",
  "White-Label Service Delivery",
  "Dedicated Offshore Resources",
  "Structured Review Processes",
  "Secure Data Handling",
  "Flexible Engagement Models",
  "Scalable Support Framework",
];

/** 1 — Bookkeeping */
export const SG_BOOKKEEPING = {
  badge: "Bookkeeping Services",
  titleBefore: "Singapore Bookkeeping",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Bookkeeping Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping Support for Singapore Accounting Firms & Corporate Service Providers",
    paragraphs: [
      "Bookkeeping forms the foundation of accurate financial reporting, tax compliance, and effective business decision-making. However, maintaining accurate bookkeeping records for multiple clients can be time-consuming and resource-intensive for accounting firms and corporate service providers.",
      "As your practice grows, bookkeeping workloads increase, month-end deadlines become tighter, and client expectations continue to rise. At NextLedgers, we provide dedicated offshore bookkeeping support to Singapore accounting firms, helping practices increase capacity, improve turnaround times, and deliver accurate bookkeeping services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Bookkeeping Matters",
    intro:
      "Accurate bookkeeping is essential for maintaining reliable financial records and supporting compliance obligations. Poor bookkeeping can lead to reporting errors, tax filing issues, unreconciled accounts, cash flow challenges, and inaccurate management information.",
    helpLabel: "Effective bookkeeping helps businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Improve financial reporting accuracy",
      "Support GST compliance",
      "Simplify year-end accounts preparation",
      "Improve cash flow visibility",
      "Reduce compliance risks",
      "Support business growth",
      "Enable informed decision-making",
    ],
  },
  deliverablesAccent: "Bookkeeping",
  deliverablesSubtitle:
    "Day-to-day bookkeeping and catch-up support that keeps client ledgers accurate and GST-ready.",
  sections: [
    {
      title: "Our Bookkeeping Services Include",
      shortTitle: "Bookkeeping",
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
      title: "Financial Cleanup & Catch-Up Bookkeeping",
      shortTitle: "Cleanup & Catch-Up",
      intro:
        "Many businesses fall behind on bookkeeping due to growth, staffing challenges, or limited internal resources.",
      items: [
        "Historical Bookkeeping Reconstruction",
        "Backlog Bookkeeping Processing",
        "Bank Reconciliation Cleanup",
        "Suspense Account Clearance",
        "Ledger Reviews & Corrections",
        "Duplicate Transaction Reviews",
        "Historical Account Reconciliations",
        "Financial Record Cleanup",
      ],
    },
  ],
  howWeHelp: [
    "Increase bookkeeping capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve reporting accuracy",
    "Deliver consistent client service",
    "Meet month-end deadlines efficiently",
    "Scale operations without increasing headcount",
    "Improve profitability through offshore delivery",
  ],
  software: [SG_ACCOUNTING_SOFTWARE, SG_DOCUMENT_TOOLS],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Singapore Accounting Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Bookkeeping Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Bookkeeping Delivery Partner",
    body: "Bookkeeping requires consistency, accuracy, and attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable bookkeeping services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with day-to-day bookkeeping, reconciliations, backlog cleanup, management reporting preparation, or dedicated bookkeeping resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — Outsourced Accounting & Financial Cleanup */
export const SG_ACCOUNTING_CLEANUP = {
  badge: "Outsourced Accounting & Financial Cleanup Services",
  titleBefore: "Singapore Outsourced Accounting &",
  titleAccent: "Financial Cleanup",
  titleAfter: "Services",
  subtitle:
    "Reliable Accounting Support & Financial Cleanup Solutions for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Accounting Support & Financial Cleanup Solutions for Singapore Practices",
    paragraphs: [
      "Accurate accounting records are essential for financial reporting, tax compliance, management decision-making, and business growth. However, many businesses fall behind on bookkeeping, accumulate unreconciled balances, maintain inaccurate ledgers, or face accounting issues resulting from rapid growth, staff turnover, software migrations, or lack of internal accounting resources.",
      "For accounting firms and corporate service providers, correcting historical accounting issues while managing ongoing client work can place significant pressure on internal teams. At NextLedgers, we provide dedicated offshore Accounting & Financial Cleanup support to Singapore accounting firms, helping practices increase capacity, resolve complex accounting issues, and deliver reliable accounting services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Accounting Accuracy Matters",
    intro:
      "Accounting records form the foundation of every financial report, tax filing, management account, and compliance submission. Inaccurate records can result in reporting errors, GST issues, tax filing complications, audit challenges, and poor business decisions.",
    helpLabel: "Effective accounting management helps businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Improve reporting reliability",
      "Support GST and tax compliance",
      "Reduce accounting errors",
      "Improve cash flow visibility",
      "Support audit readiness",
      "Strengthen financial controls",
      "Enable informed decision-making",
    ],
  },
  deliverablesAccent: "Accounting & Cleanup",
  deliverablesSubtitle:
    "Ongoing accounting delivery plus structured cleanup for backlog, migration, and year-end readiness.",
  sections: [
    {
      title: "Our Outsourced Accounting Services Include",
      shortTitle: "Outsourced Accounting",
      items: [
        "General Ledger Maintenance",
        "Transaction Processing & Posting",
        "Accounts Payable Processing",
        "Accounts Receivable Processing",
        "Bank & Credit Card Reconciliations",
        "Journal Entry Processing",
        "Month-End Accounting Support",
        "Balance Sheet Reconciliations",
        "Financial Data Validation",
        "Management Reporting Support",
        "Multi-Currency Accounting Support",
        "Accounting System Maintenance",
      ],
    },
    {
      title: "Our Financial Cleanup Services Include",
      shortTitle: "Financial Cleanup",
      intro:
        "Many businesses require accounting cleanup before year-end reporting, GST filings, audits, or tax compliance work.",
      items: [
        "Historical Bookkeeping Reconstruction",
        "Accounting Backlog Processing",
        "General Ledger Cleanup",
        "Suspense Account Clearance",
        "Duplicate Transaction Reviews",
        "Bank Reconciliation Cleanup",
        "Historical Account Reconciliations",
        "Financial Data Corrections",
        "Chart of Accounts Reviews",
        "Balance Sheet Cleanup",
        "Error Identification & Correction",
        "Reporting Adjustments",
      ],
    },
    {
      title: "Reconciliation & Balance Sheet Review Support",
      shortTitle: "Reconciliations",
      intro:
        "Unreconciled accounts are one of the most common causes of inaccurate financial reporting.",
      items: [
        "Bank Reconciliations",
        "Accounts Receivable Reconciliations",
        "Accounts Payable Reconciliations",
        "Intercompany Reconciliations",
        "GST Reconciliations",
        "Payroll Reconciliations",
        "Fixed Asset Reconciliations",
        "Control Account Reviews",
      ],
    },
    {
      title: "Accounting System Cleanup & Migration Support",
      shortTitle: "System Migration",
      intro:
        "Many businesses experience accounting issues following software implementations or migrations.",
      items: [
        "Accounting Data Reviews",
        "Opening Balance Validation",
        "Historical Data Checks",
        "Chart of Accounts Optimisation",
        "Ledger Mapping Reviews",
        "Accounting System Cleanup",
        "Reporting Structure Reviews",
        "Migration Support Assistance",
      ],
    },
  ],
  howWeHelp: [
    "Increase accounting capacity",
    "Resolve historical accounting issues",
    "Improve reporting accuracy",
    "Reduce internal workload",
    "Meet client deadlines efficiently",
    "Manage backlog projects effectively",
    "Improve client satisfaction",
    "Scale operations without increasing headcount",
  ],
  software: [
    SG_ACCOUNTING_SOFTWARE,
    SG_DATA_TOOLS,
    {
      heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
      icon: "briefcase",
      logos: ["google workspace", "microsoft 365", "sharepoint"],
    },
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Singapore Accounting Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Accounting & Cleanup Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Accounting & Financial Cleanup Delivery Partner",
    body: "Accounting cleanup projects require attention to detail, strong technical knowledge, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you resolve historical accounting issues while maintaining ongoing service delivery for your clients.",
    callout:
      "Whether you require support with bookkeeping backlogs, reconciliations, ledger cleanup, accounting reviews, month-end accounting processes, or dedicated accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 3 — Management Accounts & Virtual CFO */
export const SG_MANAGEMENT_ACCOUNTS = {
  badge: "Management Accounts & Virtual CFO Services",
  titleBefore: "Singapore Management Accounts &",
  titleAccent: "Virtual CFO",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Management Reporting & Virtual CFO Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Management Reporting & Virtual CFO Support for Growing Practices",
    paragraphs: [
      "Business owners increasingly expect more than compliance services from their accountants. They want timely financial insights, meaningful management reports, cash flow visibility, budgeting support, and strategic financial guidance that helps them make informed business decisions.",
      "As your practice grows, providing management accounts and Virtual CFO services to multiple clients can become resource-intensive and difficult to scale internally. At NextLedgers, we provide dedicated offshore Management Accounts and Virtual CFO support to Singapore accounting firms and corporate service providers, helping practices expand advisory offerings, improve service delivery, and increase capacity without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Management Accounts & Virtual CFO Services Matter",
    intro:
      "While statutory accounts and tax filings focus on compliance, management accounts provide business owners with ongoing visibility into financial performance and business health. Virtual CFO services go a step further by helping businesses understand financial trends, improve profitability, manage cash flow, plan for growth, and make strategic decisions based on reliable financial data.",
    helpLabel: "Effective management reporting helps businesses:",
    bullets: [
      "Monitor business performance",
      "Improve profitability",
      "Manage cash flow effectively",
      "Make informed business decisions",
      "Track financial KPIs",
      "Support business growth",
      "Improve financial visibility",
      "Strengthen stakeholder confidence",
    ],
  },
  deliverablesAccent: "Management & CFO",
  deliverablesSubtitle:
    "Advisory-ready reporting packs, forecasting support, and Virtual CFO delivery for your clients.",
  sections: [
    {
      title: "Our Management Accounts Services Include",
      shortTitle: "Management Accounts",
      items: [
        "Monthly Management Accounts Preparation",
        "Profit & Loss Statement Preparation",
        "Balance Sheet Reporting",
        "Cash Flow Reporting",
        "Budget vs Actual Analysis",
        "Revenue & Margin Analysis",
        "Departmental Performance Reporting",
        "KPI Reporting",
        "Management Commentary Preparation",
        "Financial Dashboard Preparation",
        "Working Capital Reporting",
        "Business Performance Analysis",
      ],
    },
    {
      title: "Our Virtual CFO Support Services Include",
      shortTitle: "Virtual CFO",
      items: [
        "Cash Flow Forecasting Support",
        "Budget Preparation Support",
        "Financial Forecasting",
        "Business Performance Reviews",
        "Profitability Analysis",
        "Growth Planning Support",
        "Strategic Financial Reporting",
        "Financial KPI Monitoring",
        "Management Meeting Reporting Packs",
        "Investor Reporting Support",
        "Board Reporting Support",
        "Financial Decision-Making Support",
      ],
    },
    {
      title: "Budgeting & Forecasting Support",
      shortTitle: "Budgeting",
      items: [
        "Annual Budget Preparation",
        "Revenue Forecasting",
        "Cost Forecasting",
        "Cash Flow Projections",
        "Scenario Planning Models",
        "Financial Planning Support",
        "Growth Forecasting",
        "Strategic Business Modelling",
      ],
    },
    {
      title: "Investor & Stakeholder Reporting Support",
      shortTitle: "Investor Reporting",
      intro:
        "Many growing businesses require professional financial reporting for investors, lenders, and stakeholders.",
      items: [
        "Investor Reporting Packs",
        "Financial Performance Reports",
        "Board Reporting Packs",
        "KPI Dashboards",
        "Funding Support Reports",
        "Financial Model Assistance",
        "Business Performance Summaries",
        "Stakeholder Reporting Support",
      ],
    },
  ],
  howWeHelp: [
    "Expand advisory service offerings",
    "Increase reporting capacity",
    "Improve turnaround times",
    "Deliver higher-value client services",
    "Strengthen client relationships",
    "Improve reporting consistency",
    "Reduce internal workload",
    "Scale operations without increasing headcount",
  ],
  software: [
    SG_ACCOUNTING_SOFTWARE,
    {
      heading: "REPORTING & FORECASTING TOOLS",
      icon: "chart",
      logos: [
        "microsoft excel",
        "google sheets",
        "fathom",
        "spotlight reporting",
        "futrli",
        "syft analytics",
      ],
    },
    SG_WORKFLOW_TOOLS,
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Management Reporting Expertise",
    "Virtual CFO Support Experience",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Management Accounts & Virtual CFO Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Management Accounts & Virtual CFO Delivery Partner",
    body: "Management reporting and advisory services require accuracy, commercial awareness, and consistent delivery. Our dedicated professionals work as an extension of your practice, helping you provide high-value financial reporting and advisory support while freeing up valuable internal resources.",
    callout:
      "Whether you require support with monthly management accounts, budgeting, forecasting, KPI reporting, investor reporting, Virtual CFO services, or dedicated advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 4 — GST Compliance */
export const SG_GST = {
  badge: "GST Compliance & Filing Services",
  titleBefore: "Singapore GST Compliance &",
  titleAccent: "Filing Outsourcing",
  titleAfter: "Services",
  subtitle:
    "Reliable GST Compliance Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable GST Compliance Support for Singapore Accounting Firms & Corporate Service Providers",
    paragraphs: [
      "GST compliance requires accuracy, consistency, and a strong understanding of Singapore's indirect tax regulations. Incorrect GST treatment, filing errors, reconciliation issues, or missed deadlines can lead to compliance risks, penalties, and additional administrative work for accounting firms and corporate service providers.",
      "As your practice grows, managing GST registrations, return preparations, reconciliations, and compliance reviews for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore GST support to Singapore accounting firms and corporate service providers, helping practices increase capacity, improve efficiency, and deliver reliable GST compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why GST Compliance Matters",
    intro:
      "GST compliance is more than simply submitting periodic GST returns. Businesses must accurately classify transactions, maintain compliant records, reconcile GST balances, identify input and output tax correctly, and ensure filings are supported by accurate financial information.",
    helpLabel: "Effective GST management helps businesses:",
    bullets: [
      "Meet GST filing obligations",
      "Maintain compliance with regulatory requirements",
      "Reduce filing errors and adjustments",
      "Improve reporting accuracy",
      "Minimise compliance risks",
      "Maintain accurate GST records",
      "Support audit readiness",
      "Improve client confidence",
    ],
  },
  deliverablesAccent: "GST Compliance",
  deliverablesSubtitle:
    "Return preparation, reconciliations, registrations, and specialist GST review support.",
  sections: [
    {
      title: "Our GST Compliance Services Include",
      shortTitle: "GST Compliance",
      items: [
        "GST Return Preparation Support",
        "GST Filing Support",
        "GST Reconciliation Preparation",
        "Input Tax Reviews",
        "Output Tax Reviews",
        "GST Control Account Reconciliations",
        "GST Working Paper Preparation",
        "GST Compliance Documentation Support",
        "GST Transaction Reviews",
        "GST Coding Reviews",
        "GST Reporting Support",
        "Period-End GST Reviews",
      ],
    },
    {
      title: "GST Registration Support",
      shortTitle: "GST Registration",
      items: [
        "GST Registration Eligibility Reviews",
        "Voluntary GST Registration Support",
        "Mandatory GST Registration Assessments",
        "Registration Documentation Preparation",
        "Business Activity Reviews",
        "GST Setup Assistance",
        "Post-Registration Compliance Support",
        "Registration Compliance Reviews",
      ],
    },
    {
      title: "GST Review & Compliance Support",
      shortTitle: "GST Reviews",
      items: [
        "GST Health Check Support",
        "Historical GST Reviews",
        "GST Compliance Reviews",
        "Transaction Classification Reviews",
        "Input Tax Recovery Reviews",
        "GST Risk Assessments",
        "Supporting Schedule Preparation",
        "Client Query Resolution Support",
      ],
    },
    {
      title: "E-Commerce & Cross-Border GST Support",
      shortTitle: "Cross-Border GST",
      intro:
        "Many Singapore businesses operate internationally and require additional GST review procedures.",
      items: [
        "Cross-Border Transaction Reviews",
        "International Sales Analysis",
        "E-Commerce GST Support",
        "Marketplace Transaction Reviews",
        "Revenue Reconciliation Support",
        "GST Reporting Reviews",
        "Multi-Currency Transaction Reviews",
        "Compliance Documentation Support",
      ],
    },
  ],
  howWeHelp: [
    "Increase GST compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve filing accuracy",
    "Meet reporting deadlines efficiently",
    "Manage peak filing periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [
    SG_ACCOUNTING_SOFTWARE,
    SG_DATA_TOOLS,
    {
      heading: "DOCUMENT MANAGEMENT TOOLS",
      icon: "briefcase",
      logos: ["google workspace", "microsoft 365", "sharepoint"],
    },
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Singapore GST Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "GST Compliance Partner",
    titleBefore: "Your Offshore",
    titleAccent: "GST Compliance Delivery Partner",
    body: "GST compliance requires technical accuracy, consistency, and strong attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable GST services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with GST return preparation, reconciliations, GST registrations, compliance reviews, transaction analysis, or dedicated GST resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 5 — Year-End Accounts & Financial Statements */
export const SG_YEAR_END = {
  badge: "Year-End Accounts & Financial Statement Preparation Services",
  titleBefore: "Singapore Year-End Accounts &",
  titleAccent: "Financial Statement Preparation",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Financial Statement Preparation Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Financial Statement Preparation Support for Singapore Accounting Firms & Corporate Service Providers",
    paragraphs: [
      "Year-end accounts preparation and financial statement reporting require accuracy, technical expertise, and attention to detail. Accounting firms and corporate service providers must ensure financial statements are prepared from accurate accounting records while meeting reporting requirements, compliance standards, and client deadlines.",
      "As your practice grows, managing year-end accounts, financial statement preparation, working papers, reconciliations, and reporting requirements for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated offshore Year-End Accounts & Financial Statement Preparation support to Singapore accounting firms, helping practices increase capacity, improve turnaround times, and maintain reporting quality without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statements Matter",
    intro:
      "Year-end financial statements provide business owners, management teams, investors, lenders, and regulators with a clear picture of a company's financial performance and financial position.",
    helpLabel: "Accurate financial reporting helps businesses:",
    bullets: [
      "Meet statutory reporting obligations",
      "Support corporate tax compliance",
      "Improve financial transparency",
      "Support audits and reviews",
      "Assist with financing applications",
      "Strengthen stakeholder confidence",
      "Improve business decision-making",
      "Maintain accurate financial records",
    ],
  },
  deliverablesAccent: "Year-End Accounts",
  deliverablesSubtitle:
    "Accounts preparation, financial statements, audit working papers, and pre-year-end cleanup.",
  sections: [
    {
      title: "Our Year-End Accounts Preparation Services Include",
      shortTitle: "Year-End Accounts",
      items: [
        "Trial Balance Reviews",
        "General Ledger Reviews",
        "Year-End Accounting Adjustments",
        "Accrual & Prepayment Reviews",
        "Fixed Asset Schedule Preparation",
        "Depreciation Calculations",
        "Balance Sheet Reconciliations",
        "Supporting Working Paper Preparation",
        "Financial Data Validation",
        "Year-End Close Support",
        "Financial Reporting Reviews",
        "Compliance Documentation Preparation",
      ],
    },
    {
      title: "Our Financial Statement Preparation Services Include",
      shortTitle: "Financial Statements",
      items: [
        "Statement of Financial Position Preparation",
        "Statement of Profit or Loss Preparation",
        "Cash Flow Statement Preparation",
        "Statement of Changes in Equity Preparation",
        "Financial Statement Notes & Disclosures",
        "Supporting Schedule Preparation",
        "Financial Statement Formatting",
        "Reporting Package Preparation",
      ],
    },
    {
      title: "Audit Support & Working Paper Preparation",
      shortTitle: "Audit Support",
      intro:
        "Well-prepared working papers improve efficiency during audits and financial reviews.",
      items: [
        "Audit Working Paper Preparation",
        "Balance Sheet Schedules",
        "Account Reconciliations",
        "Supporting Documentation Organisation",
        "Financial Data Compilation",
        "Audit Query Support Assistance",
        "Lead Schedule Preparation",
        "Year-End Reporting Packs",
      ],
    },
    {
      title: "Financial Cleanup Before Year-End Reporting",
      shortTitle: "Pre Year-End Cleanup",
      intro:
        "Many businesses require financial record cleanup before year-end accounts can be prepared accurately.",
      items: [
        "Historical Account Reviews",
        "Reconciliation Cleanup",
        "Ledger Corrections",
        "Suspense Account Clearance",
        "Balance Validation Reviews",
        "Duplicate Transaction Reviews",
        "Historical Accounting Adjustments",
        "Financial Data Corrections",
      ],
    },
  ],
  howWeHelp: [
    "Increase year-end reporting capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve financial reporting accuracy",
    "Meet reporting deadlines efficiently",
    "Manage peak-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [
    SG_ACCOUNTING_SOFTWARE,
    {
      heading: "FINANCIAL REPORTING & WORKING PAPER TOOLS",
      icon: "chart",
      logos: [
        "microsoft excel",
        "google sheets",
        "caseware",
        "cch engagement",
      ],
    },
    SG_WORKFLOW_TOOLS,
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Financial Reporting Expertise",
    "Singapore Accounting Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Financial Reporting Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Financial Reporting Delivery Partner",
    body: "Year-end accounts preparation requires technical expertise, consistency, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver accurate financial statements while freeing up valuable internal resources during busy reporting periods.",
    callout:
      "Whether you require support with year-end accounts preparation, financial statement drafting, working paper preparation, reconciliations, audit support, or dedicated accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 6 — Corporate Tax */
export const SG_CORPORATE_TAX = {
  badge: "Corporate Tax Filing Services",
  titleBefore: "Singapore Corporate Tax",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Corporate Tax Compliance Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Corporate Tax Compliance Support for Singapore Accounting Firms & Corporate Service Providers",
    paragraphs: [
      "Corporate tax compliance requires accuracy, technical expertise, and a thorough understanding of Singapore tax regulations. Preparing corporate tax computations, reviewing financial information, identifying tax adjustments, and meeting filing deadlines can place significant pressure on accounting firms, particularly during peak compliance periods.",
      "As your practice grows, managing multiple corporate tax engagements while maintaining quality and turnaround times can become increasingly challenging. At NextLedgers, we provide dedicated offshore Corporate Tax support to Singapore accounting firms and corporate service providers, helping practices increase capacity, improve efficiency, and deliver reliable tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Corporate Tax Compliance Matters",
    intro:
      "Corporate tax compliance is more than simply filing a tax return. Businesses must prepare accurate tax computations, review financial records, identify allowable deductions, calculate taxable income, and maintain supporting documentation while ensuring compliance with Singapore tax regulations.",
    helpLabel: "Effective corporate tax management helps businesses:",
    bullets: [
      "Meet statutory filing obligations",
      "Maintain compliance with tax regulations",
      "Reduce filing errors and adjustments",
      "Improve tax reporting accuracy",
      "Minimise compliance risks",
      "Support financial transparency",
      "Improve client confidence",
      "Avoid unnecessary penalties",
    ],
  },
  deliverablesAccent: "Corporate Tax",
  deliverablesSubtitle:
    "Tax computations, ECI support, compliance reviews, and submission-ready working papers.",
  sections: [
    {
      title: "Our Corporate Tax Services Include",
      shortTitle: "Corporate Tax",
      items: [
        "Corporate Tax Computation Preparation",
        "Corporate Tax Return Preparation Support",
        "Financial Statement Reviews",
        "Tax Adjustment Calculations",
        "Tax Reconciliation Reviews",
        "Tax Working Paper Preparation",
        "Tax Compliance Documentation Support",
        "Year-End Tax Review Assistance",
        "Tax Provision Calculations",
        "Tax Liability Reviews",
        "Capital Allowance Calculations",
        "Loss Utilisation Reviews",
      ],
    },
    {
      title: "Estimated Chargeable Income (ECI) Support",
      shortTitle: "ECI Support",
      items: [
        "ECI Calculation Support",
        "Profit Estimation Reviews",
        "Financial Data Analysis",
        "Tax Estimate Preparation",
        "ECI Working Paper Preparation",
        "Filing Deadline Monitoring Support",
        "Tax Computation Reconciliations",
        "Compliance Documentation Preparation",
      ],
    },
    {
      title: "Corporate Tax Review & Compliance Support",
      shortTitle: "Tax Reviews",
      items: [
        "Tax Health Check Support",
        "Tax Adjustment Reviews",
        "Deductible Expense Reviews",
        "Tax Reconciliation Reviews",
        "Compliance Review Support",
        "Supporting Schedule Preparation",
        "Tax Risk Identification",
        "Client Query Resolution Support",
      ],
    },
  ],
  howWeHelp: [
    "Increase tax compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax filing accuracy",
    "Meet filing deadlines efficiently",
    "Manage peak-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [
    SG_ACCOUNTING_SOFTWARE,
    {
      heading: "TAX & WORKING PAPER TOOLS",
      icon: "chart",
      logos: [
        "microsoft excel",
        "google sheets",
        "cch engagement",
        "caseware",
      ],
    },
    SG_WORKFLOW_TOOLS,
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Singapore Corporate Tax Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Corporate Tax Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Corporate Tax Delivery Partner",
    body: "Corporate tax compliance requires accuracy, consistency, and strong attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable corporate tax services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with corporate tax computations, ECI calculations, tax reconciliations, compliance reviews, year-end tax preparation, or dedicated tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 7 — Payroll & CPF */
export const SG_PAYROLL = {
  badge: "Payroll Processing & CPF Compliance Services",
  titleBefore: "Singapore Payroll Processing &",
  titleAccent: "CPF Compliance",
  titleAfter: "Outsourcing Services",
  subtitle:
    "Reliable Payroll & CPF Support for Singapore Accounting Firms & Corporate Service Providers",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Payroll & CPF Support for Singapore Accounting Firms & Corporate Service Providers",
    paragraphs: [
      "Payroll processing and CPF compliance require accuracy, consistency, and a thorough understanding of Singapore employment and statutory requirements. Even minor payroll errors can lead to employee dissatisfaction, compliance risks, payroll adjustments, and additional administrative work for accounting firms and corporate service providers.",
      "As your practice grows, managing payroll processing, employee records, CPF calculations, payroll reconciliations, and reporting obligations for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Payroll & CPF support to Singapore accounting firms, helping practices increase capacity, maintain compliance, and deliver reliable payroll services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Payroll & CPF Compliance Matter",
    intro:
      "Payroll is more than simply processing employee salaries. Businesses must accurately calculate wages, overtime, bonuses, allowances, deductions, and CPF contributions while maintaining compliant payroll records and meeting statutory obligations. CPF compliance introduces additional responsibilities, including contribution calculations, employee and employer contribution reviews, payroll reconciliations, record maintenance, and reporting requirements.",
    helpLabel: "Effective payroll and CPF management helps businesses:",
    bullets: [
      "Pay employees accurately and on time",
      "Maintain CPF compliance",
      "Reduce payroll errors and adjustments",
      "Meet statutory obligations",
      "Maintain accurate employee records",
      "Reduce administrative burden",
      "Improve operational efficiency",
      "Increase employee satisfaction",
    ],
  },
  deliverablesAccent: "Payroll & CPF",
  deliverablesSubtitle:
    "Payroll processing, CPF calculations, administration, reconciliations, and reporting support.",
  sections: [
    {
      title: "Our Payroll Processing Services Include",
      shortTitle: "Payroll Processing",
      items: [
        "Monthly Payroll Processing",
        "Employee Payroll Maintenance",
        "New Employee Setup",
        "Employee Exit & Final Payroll Processing",
        "Salary, Allowance & Deduction Calculations",
        "Bonus & Incentive Processing",
        "Overtime Calculations",
        "Payslip Preparation",
        "Payroll Reconciliations",
        "Payroll Reporting Support",
        "Leave & Benefits Tracking",
        "Year-End Payroll Administration",
      ],
    },
    {
      title: "Our CPF Compliance Services Include",
      shortTitle: "CPF Compliance",
      items: [
        "CPF Contribution Calculations",
        "Employer Contribution Reviews",
        "Employee Contribution Reviews",
        "CPF Reconciliations",
        "Payroll Compliance Reviews",
        "Payroll Documentation Support",
        "Employee Record Maintenance",
        "Contribution Validation Reviews",
        "Compliance Monitoring Support",
        "Payroll Audit Readiness Checks",
      ],
    },
    {
      title: "Payroll Administration Support",
      shortTitle: "Payroll Admin",
      items: [
        "Employee Data Maintenance",
        "Payroll Amendments & Adjustments",
        "Payroll Query Support",
        "Payroll Record Reviews",
        "Payroll Data Validation",
        "Payroll Working Paper Preparation",
        "Payroll Reporting Assistance",
        "Payroll Process Reviews",
      ],
    },
    {
      title: "Payroll Reconciliation & Reporting Support",
      shortTitle: "Payroll Reporting",
      intro:
        "Accurate payroll reporting relies on properly maintained payroll records and reconciliations.",
      items: [
        "Payroll Control Account Reconciliations",
        "Payroll Journal Preparation",
        "Payroll Cost Reviews",
        "Payroll Reporting Packs",
        "Employee Cost Analysis",
        "Departmental Payroll Reporting",
        "Payroll Data Reviews",
        "Management Reporting Support",
      ],
    },
  ],
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
  software: [
    {
      heading: "PAYROLL SOFTWARE",
      icon: "briefcase",
      logos: ["employment hero", "xero payroll", "quickbooks payroll", "sage payroll"],
    },
    SG_ACCOUNTING_SOFTWARE,
    SG_WORKFLOW_TOOLS,
  ],
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Singapore Payroll & CPF Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  partner: {
    badge: "Payroll & CPF Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Payroll & CPF Delivery Partner",
    body: "Payroll processing requires precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with payroll processing, CPF calculations, payroll reconciliations, employee record maintenance, payroll reporting, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};
