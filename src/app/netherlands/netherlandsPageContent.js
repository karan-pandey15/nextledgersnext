import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

/** Default Netherlands industries mapped to existing industry icon assets */
export const NETHERLANDS_INDUSTRIES = [
  {
    ...findIndustry("Professional Services"),
    label: "Professional Service Firms",
  },
  { ...findIndustry("Construction"), label: "Construction Companies" },
  { ...findIndustry("Restaurants"), label: "Retail Businesses" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
  {
    ...findIndustry("Logistics & Transportation"),
    label: "Logistics & Transportation",
  },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Technology"), label: "Technology Companies" },
  {
    ...findIndustry("Professional Services"),
    label: "Wholesale & Distribution Businesses",
  },
].filter((i) => i && i.src);

/** Personal Income Tax — client types */
const NL_PERSONAL_TAX_CLIENTS = [
  {
    ...findIndustry("Professional Services"),
    label: "Employees & Salary Earners",
  },
  {
    ...findIndustry("Startups & SMEs"),
    label: "Self-Employed Professionals (ZZP)",
  },
  { ...findIndustry("Consulting"), label: "Company Directors (DGA)" },
  { ...findIndustry("Real Estate"), label: "Property Investors" },
  {
    ...findIndustry("Startups & SMEs"),
    label: "Entrepreneurs & Business Owners",
  },
  { ...findIndustry("Consulting"), label: "Freelancers & Consultants" },
  {
    ...findIndustry("Professional Services"),
    label: "High-Net-Worth Individuals",
  },
  { ...findIndustry("Healthcare"), label: "Pensioners & Retirees" },
  { ...findIndustry("Technology"), label: "Expatriates" },
  {
    ...findIndustry("Technology"),
    label: "Foreign Residents with Dutch Tax Obligations",
  },
].filter((i) => i && i.src);

const NL_ACCOUNTING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "exact online",
    "afas software",
    "twinfield",
    "moneybird",
    "visma eaccounting",
    "xero",
    "quickbooks online",
  ],
};

const NL_RECEIPT = {
  heading: "RECEIPT CAPTURE & BOOKKEEPING TOOLS",
  icon: "document",
  logos: ["basecone", "dext", "hubdoc", "approvalmax", "autoentry"],
};

const NL_WORKFLOW = {
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

const NL_TAX_WORKING = {
  heading: "TAX & WORKING PAPER SOFTWARE",
  icon: "document",
  logos: [
    "nextens",
    "wolters kluwer twinfield",
    "caseware",
    "microsoft excel",
    "google sheets",
  ],
};

const NL_TAX_COLLAB = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const NL_TAX_ACCOUNTING = {
  heading: "TAX & ACCOUNTING SOFTWARE",
  icon: "document",
  logos: [
    "nextens",
    "exact online",
    "afas software",
    "twinfield",
    "moneybird",
    "xero",
    "quickbooks online",
  ],
};

const NL_WORKING_PAPERS = {
  heading: "WORKING PAPER & DOCUMENT MANAGEMENT TOOLS",
  icon: "file",
  logos: ["microsoft excel", "google sheets", "dext", "hubdoc", "approvalmax"],
};

const NL_PRACTICE = {
  heading: "WORKFLOW & PRACTICE MANAGEMENT TOOLS",
  icon: "briefcase",
  logos: [
    "microsoft 365",
    "google workspace",
    "sharepoint",
    "dropbox business",
  ],
};

const NL_REPORTING = {
  heading: "REPORTING & FORECASTING SOFTWARE",
  icon: "chart",
  logos: [
    "fathom",
    "spotlight reporting",
    "syft analytics",
    "float",
    "microsoft excel",
    "google sheets",
  ],
};

const NL_COLLAB = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const NL_PAYROLL_SW = {
  heading: "PAYROLL SOFTWARE",
  icon: "payment",
  logos: [
    "nmbrs",
    "loket.nl",
    "afas payroll",
    "visma youserve",
    "adp workforce now",
    "sd worx",
    "exact online payroll",
  ],
};

const NL_PAYROLL_WORKFLOW = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "shield",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const NL_YEAR_END_REPORTING = {
  heading: "FINANCIAL REPORTING & WORKING PAPER SOFTWARE",
  icon: "briefcase",
  logos: [
    "caseware working papers",
    "nextens",
    "twinfield reporting",
    "microsoft excel",
    "google sheets",
  ],
};

const NL_VAT_SOFTWARE = {
  heading: "VAT & COMPLIANCE SOFTWARE",
  icon: "tag",
  logos: [
    "nextens",
    "twinfield",
    "exact online btw module",
    "caseware",
    "microsoft excel",
    "google sheets",
  ],
};

/** 1 — Bookkeeping */
export const NL_BOOKKEEPING = {
  badge: "Bookkeeping Outsourcing Services",
  titleBefore: "Bookkeeping",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Bookkeeping Support for Dutch Accounting Firms & Administratiekantoren",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping Support for Dutch Accounting Firms & Administratiekantoren",
    paragraphs: [
      "Accurate bookkeeping is the foundation of every successful business. From recording day-to-day financial transactions to reconciling bank accounts, maintaining VAT records, and preparing financial data for year-end reporting, bookkeeping plays a vital role in helping Dutch businesses remain compliant and financially organised.",
      "As your practice grows, managing bookkeeping for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore Bookkeeping support to Dutch accounting firms, administratiekantoren (administration offices), and financial service providers, helping firms increase capacity, improve turnaround times, and deliver accurate bookkeeping services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Bookkeeping Matters",
    intro:
      "Bookkeeping is much more than recording transactions. It involves maintaining accurate financial records, reconciling accounts, organising supporting documentation, reviewing financial data, and ensuring businesses are always prepared for VAT returns, payroll processing, corporate tax compliance, and annual financial statements.",
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
    "Day-to-day bookkeeping, catch-up support, reconciliations, and month-end accounting for Dutch practices.",
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
  software: [NL_ACCOUNTING, NL_RECEIPT, NL_WORKFLOW],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms and administration offices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Bookkeeping Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated bookkeeping specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Bookkeeping Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Bookkeeping Delivery Partner",
    body: "Bookkeeping requires consistency, accuracy, and attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver reliable bookkeeping services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with day-to-day bookkeeping, catch-up bookkeeping, reconciliations, month-end accounting, VAT-ready bookkeeping, management reporting, or dedicated offshore bookkeeping resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — Corporate Income Tax */
export const NL_CORPORATE_TAX = {
  badge: "Corporate Income Tax Outsourcing Services",
  titleBefore: "Corporate Income Tax",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Corporate Income Tax Compliance Support for Dutch Accounting Firms & Tax Advisors",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Corporate Income Tax Compliance Support for Dutch Accounting Firms & Tax Advisors",
    paragraphs: [
      "Corporate Income Tax compliance requires technical expertise, accuracy, and a thorough understanding of Dutch tax legislation. Preparing Corporate Income Tax returns, reviewing financial statements, calculating taxable profits, identifying fiscal adjustments, and ensuring compliance with Dutch tax regulations require significant time and specialist knowledge. As client portfolios continue to grow, accounting firms and tax advisors often require additional resources to manage increasing tax workloads efficiently.",
      "At NextLedgers, we provide dedicated offshore Corporate Income Tax support to Dutch accounting firms, administratiekantoren, and tax advisory firms. Our white-label outsourcing solutions help firms increase capacity, improve turnaround times, and deliver reliable Corporate Income Tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Corporate Income Tax Compliance Matters",
    intro:
      "Corporate Income Tax compliance involves much more than submitting a tax return. Businesses must accurately calculate taxable profits, review deductible expenses, apply tax adjustments, reconcile accounting and tax differences, prepare supporting schedules, and comply with the requirements of the Dutch Tax and Customs Administration.",
    helpLabel: "Effective Corporate Income Tax management helps businesses:",
    bullets: [
      "Meet Corporate Income Tax filing deadlines",
      "Maintain compliance with Dutch tax legislation",
      "Improve tax reporting accuracy",
      "Reduce filing errors and adjustments",
      "Minimise compliance risks",
      "Maintain complete supporting documentation",
      "Support financial transparency",
      "Strengthen stakeholder confidence",
    ],
  },
  deliverablesAccent: "Corporate Income Tax",
  deliverablesSubtitle:
    "Corporate tax returns, computations, fiscal adjustments, and Belastingdienst-ready packs for Dutch practices.",
  sections: [
    {
      title: "Our Corporate Income Tax Services Include",
      items: [
        "Corporate Income Tax Return Preparation Support",
        "Corporate Tax Computation Preparation",
        "Taxable Profit Calculations",
        "Financial Statement Reviews",
        "Fiscal Adjustment Calculations",
        "Depreciation & Capital Allowance Reviews",
        "Temporary & Permanent Difference Reviews",
        "Tax Reconciliation Preparation",
        "Deferred Tax Calculations",
        "Tax Working Paper Preparation",
        "Corporate Tax Compliance Reviews",
        "Year-End Tax Review Assistance",
      ],
    },
    {
      title: "Corporate Tax Registration & Compliance Support",
      items: [
        "Corporate Tax Registration Support",
        "Tax Identification Documentation Reviews",
        "Filing Deadline Monitoring",
        "Compliance Calendar Management",
        "Regulatory Documentation Support",
        "Tax Health Check Assistance",
        "Client Communication Support",
        "Compliance Record Maintenance",
      ],
    },
    {
      title: "Corporate Tax Review & Advisory Support",
      items: [
        "Deductible Expense Reviews",
        "Tax Adjustment Reviews",
        "Capital Asset & Depreciation Reviews",
        "Loss Relief Reviews",
        "Related Party Transaction Reviews",
        "Tax Risk Identification",
        "Supporting Schedule Preparation",
        "Compliance Documentation Reviews",
      ],
    },
  ],
  howWeHelpIntro: "Our Corporate Income Tax support enables firms to:",
  howWeHelp: [
    "Increase Corporate Tax compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax return accuracy",
    "Meet statutory filing deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [NL_ACCOUNTING, NL_TAX_WORKING, NL_TAX_COLLAB],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms, administratiekantoren, and tax advisors serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Corporate Income Tax Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated Corporate Income Tax specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Corporate Income Tax Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Corporate Income Tax Delivery Partner",
    body: "Corporate Income Tax compliance requires technical expertise, precision, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver reliable Corporate Income Tax services while freeing up valuable internal resources during busy tax seasons.",
    callout:
      "Whether you require support with Corporate Income Tax return preparation, tax computations, deferred tax calculations, reconciliations, working papers, compliance reviews, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 3 — Management Accounting & Virtual CFO */
export const NL_MANAGEMENT_ACCOUNTS = {
  badge: "Management Accounting & Virtual CFO Outsourcing Services",
  titleBefore: "Management Accounting &",
  titleAccent: "Virtual CFO Services",
  subtitle:
    "Reliable Management Accounting & Virtual CFO Support for Dutch Accounting Firms & Administration Offices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Management Accounting & Virtual CFO Support for Dutch Accounting Firms & Administration Offices",
    paragraphs: [
      "Today's businesses expect far more than bookkeeping and tax compliance. They rely on their accountants for timely financial reporting, cash flow management, budgeting, forecasting, profitability analysis, and strategic financial advice. As client expectations continue to evolve, Dutch accounting firms and administratiekantoren often require additional resources to deliver high-value advisory services while managing increasing workloads.",
      "At NextLedgers, we provide dedicated offshore Management Accounting & Virtual CFO support to Dutch accounting firms, administratiekantoren, and financial advisory firms. Our white-label outsourcing solutions help firms expand their advisory services, improve reporting efficiency, and deliver strategic financial insights without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Management Accounting & Virtual CFO Services Matter",
    intro:
      "Management accounting goes beyond statutory financial reporting by providing business owners with timely financial information to monitor performance, improve profitability, manage cash flow, and make informed business decisions. Virtual CFO services offer strategic financial guidance without the cost of employing a full-time finance executive, enabling businesses to plan for growth while maintaining strong financial control.",
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
    "Monthly packs, forecasting, KPI reporting, and Virtual CFO support for Dutch practices.",
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
  software: [NL_ACCOUNTING, NL_REPORTING, NL_COLLAB],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support Dutch accounting firms and administration offices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Management Accounting Expertise",
    "Virtual CFO Advisory Experience",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated management accounting and Virtual CFO specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Management Accounting & Virtual CFO Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Management Accounting & Virtual CFO Delivery Partner",
    body: "Management accounting and Virtual CFO services require commercial insight, analytical expertise, and consistent reporting. Our dedicated professionals work as an extension of your practice, helping you deliver meaningful financial insights and strategic advisory services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with monthly management accounts, budgeting, forecasting, cash flow management, KPI reporting, board reporting, financial modelling, or dedicated offshore advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 4 — Payroll Processing */
export const NL_PAYROLL = {
  badge: "Payroll Processing Outsourcing Services",
  titleBefore: "Payroll Processing",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Payroll Processing Support for Dutch Accounting Firms & Administration Offices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Payroll Processing Support for Dutch Accounting Firms & Administration Offices",
    paragraphs: [
      "Payroll processing requires accuracy, consistency, and a thorough understanding of Dutch payroll legislation. Businesses rely on their accountants and payroll providers to ensure employees are paid accurately and on time while meeting obligations relating to wage tax (Loonheffing), social security contributions, employee benefits, pension schemes, and employment regulations. Even minor payroll errors can lead to compliance issues, employee dissatisfaction, and additional administrative work.",
      "As your practice grows, managing payroll for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated offshore Payroll Processing support to Dutch accounting firms, administratiekantoren, payroll providers, and financial service firms, helping practices increase capacity, improve turnaround times, and deliver reliable payroll services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Payroll Processing Matters",
    intro:
      "Payroll involves much more than calculating employee salaries. Businesses must accurately process wages, holiday allowances, overtime, bonuses, pension contributions, wage tax deductions, social insurance contributions, and employee benefits while maintaining compliant payroll records and meeting Dutch reporting obligations.",
    helpLabel: "Effective payroll management helps businesses:",
    bullets: [
      "Pay employees accurately and on time",
      "Maintain compliance with Dutch payroll regulations",
      "Ensure accurate wage tax reporting",
      "Manage pension and social security obligations",
      "Maintain accurate employee records",
      "Reduce payroll errors",
      "Improve operational efficiency",
      "Enhance employee confidence",
    ],
  },
  deliverablesAccent: "Payroll Processing",
  deliverablesSubtitle:
    "Payroll processing, wage tax support, reconciliations, and administration for Dutch practices.",
  sections: [
    {
      title: "Our Payroll Processing Services Include",
      items: [
        "Weekly, Four-Weekly & Monthly Payroll Processing",
        "Employee Payroll Maintenance",
        "New Employee Setup",
        "Employee Exit & Final Payroll Processing",
        "Salary, Wage & Allowance Calculations",
        "Overtime & Bonus Processing",
        "Holiday Allowance Calculations",
        "Leave & Absence Tracking Support",
        "Payroll Journal Preparation",
        "Payslip Preparation",
        "Payroll Reconciliations",
        "Payroll Reporting Support",
      ],
    },
    {
      title: "Payroll Tax & Social Security Compliance Support",
      items: [
        "Wage Tax (Loonheffing) Calculation Support",
        "Payroll Tax Return Preparation Support",
        "Social Security Contribution Reviews",
        "Pension Contribution Calculations",
        "Employee Benefit Reviews",
        "Payroll Compliance Reviews",
        "Payroll Data Validation",
        "Year-End Payroll Support",
      ],
    },
    {
      title: "Payroll Administration Support",
      items: [
        "Employee Master Data Maintenance",
        "Payroll Amendments & Adjustments",
        "Payroll Query Support",
        "Payroll Record Reviews",
        "Leave Balance Maintenance",
        "Payroll Documentation Preparation",
        "Payroll Process Reviews",
        "Payroll Audit Readiness Support",
      ],
    },
    {
      title: "Payroll Reporting & Reconciliation Support",
      items: [
        "Payroll Control Account Reconciliations",
        "Payroll Tax Reconciliations",
        "Pension Contribution Reconciliations",
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
  software: [NL_PAYROLL_SW, NL_ACCOUNTING, NL_PAYROLL_WORKFLOW],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support Dutch accounting firms, administration offices, and payroll providers serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Payroll Expertise",
    "Wage Tax & Social Security Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated payroll specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Payroll Processing Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Payroll Processing Delivery Partner",
    body: "Payroll processing requires precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with payroll processing, wage tax calculations, pension contribution reviews, payroll reconciliations, employee record maintenance, payroll reporting, or dedicated offshore payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 5 — Personal Income Tax */
export const NL_PERSONAL_TAX = {
  badge: "Personal Income Tax Outsourcing Services",
  titleBefore: "Personal Income Tax",
  titleAccent: "Outsourcing Services",
  subtitle:
    "Reliable Personal Income Tax Support for Dutch Accounting Firms & Tax Advisors",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Personal Income Tax Support for Dutch Accounting Firms & Tax Advisors",
    paragraphs: [
      "Preparing Personal Income Tax returns requires technical expertise, attention to detail, and a thorough understanding of Dutch income tax legislation. Accounting firms and tax advisors must accurately review employment income, self-employment income, investment income, property income, allowable deductions, tax credits, and supporting documentation while ensuring compliance with the requirements of the Dutch Tax and Customs Administration.",
      "As your practice grows, managing large volumes of Personal Income Tax returns can place significant pressure on your internal team, particularly during the annual filing season. At NextLedgers, we provide dedicated offshore Personal Income Tax support to Dutch accounting firms, administratiekantoren, and tax advisory firms, helping practices increase capacity, improve turnaround times, and deliver accurate tax compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Personal Income Tax Compliance Matters",
    intro:
      "Personal Income Tax compliance involves much more than preparing an annual tax return. Every return requires careful review of multiple income sources, deductible expenses, mortgage interest, investment income, business profits, tax credits, and supporting documentation to ensure accurate reporting and compliance with Dutch tax legislation.",
    helpLabel: "Professional Personal Income Tax preparation helps individuals:",
    bullets: [
      "Meet statutory tax filing deadlines",
      "Maintain accurate tax reporting",
      "Maximise eligible deductions and tax reliefs",
      "Reduce tax reporting errors",
      "Improve compliance accuracy",
      "Maintain complete supporting documentation",
      "Minimise compliance risks",
      "Strengthen confidence in tax reporting",
    ],
  },
  deliverablesAccent: "Personal Income Tax",
  deliverablesSubtitle:
    "Personal tax returns, Box 1–3 reviews, investment support, and year-end planning for Dutch practices.",
  sections: [
    {
      title: "Our Personal Income Tax Services Include",
      items: [
        "Personal Income Tax Return Preparation",
        "Self-Employed Tax Return Support",
        "Employment Income Reviews",
        "Business Income Reporting",
        "Investment Income Reporting",
        "Rental Property Income Reporting",
        "Mortgage Interest Deduction Reviews",
        "Box 1, Box 2 & Box 3 Income Reviews",
        "Tax Credit Reviews",
        "Deduction Reviews",
        "Tax Working Paper Preparation",
        "Personal Tax Compliance Reviews",
      ],
    },
    {
      title: "Personal Tax Review & Compliance Support",
      items: [
        "Employment Income Reviews",
        "Self-Employment Income Reviews",
        "Deductible Expense Reviews",
        "Mortgage Interest Reviews",
        "Healthcare Expense Reviews",
        "Pension Income Reviews",
        "Foreign Income Reporting Support",
        "Supporting Documentation Validation",
      ],
    },
    {
      title: "Investment & Wealth Tax Support",
      items: [
        "Investment Portfolio Reviews",
        "Box 3 Wealth Tax Calculations",
        "Dividend Income Reporting",
        "Capital Investment Reviews",
        "Property Investment Reporting",
        "Foreign Asset Reporting",
        "Investment Schedule Preparation",
        "Tax Working Papers",
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
        "Personal Tax Planning Working Papers",
        "Financial Information Reviews",
        "Client Documentation Preparation",
      ],
    },
  ],
  howWeHelpIntro: "Our Personal Income Tax support enables firms to:",
  howWeHelp: [
    "Increase tax return preparation capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve tax return accuracy",
    "Meet statutory filing deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [NL_TAX_ACCOUNTING, NL_WORKING_PAPERS, NL_PRACTICE],
  industries: NL_PERSONAL_TAX_CLIENTS,
  industriesEyebrow: "Client Types We Support",
  industriesTitleBefore: "Industries & Client Types We ",
  industriesTitleAccent: "Support",
  industriesBlurb:
    "We support accounting firms and tax advisors serving a diverse range of individual taxpayers, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Personal Income Tax Expertise",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated Personal Income Tax specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Personal Income Tax Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Personal Income Tax Delivery Partner",
    body: "Personal Income Tax preparation requires technical expertise, precision, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver accurate Personal Income Tax returns while freeing up valuable internal resources during busy tax seasons.",
    callout:
      "Whether you require support with Personal Income Tax return preparation, self-employed tax returns, Box 1, Box 2 & Box 3 calculations, investment income reporting, tax planning, working papers, or dedicated offshore tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 6 — VAT (BTW) Compliance & Filing */
export const NL_VAT = {
  badge: "VAT (BTW) Compliance & Filing Outsourcing Services",
  titleBefore: "VAT (BTW) Compliance &",
  titleAccent: "Filing Services",
  subtitle:
    "Reliable VAT (BTW) Compliance & Filing Support for Dutch Accounting Firms & Administration Offices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable VAT (BTW) Compliance & Filing Support for Dutch Accounting Firms & Administration Offices",
    paragraphs: [
      "VAT (BTW) compliance requires technical expertise, accuracy, and a thorough understanding of Dutch tax legislation. Businesses are required to maintain accurate VAT records, correctly classify transactions, prepare periodic VAT returns, and comply with the reporting requirements of the Dutch Tax and Customs Administration (Belastingdienst). Even minor VAT errors can lead to penalties, additional tax liabilities, audits, and unnecessary administrative work.",
      "As your practice grows, managing VAT compliance for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated offshore VAT (BTW) Compliance & Filing support to Dutch accounting firms, administratiekantoren, and tax advisory firms, helping practices increase capacity, improve turnaround times, and deliver reliable VAT compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why VAT (BTW) Compliance Matters",
    intro:
      "VAT compliance is far more than submitting periodic VAT returns. Businesses must accurately record taxable transactions, apply the correct VAT rates, review intra-EU and international transactions, reconcile VAT accounts, maintain supporting documentation, and comply with Dutch and EU VAT regulations.",
    helpLabel: "Effective VAT management helps businesses:",
    bullets: [
      "Meet VAT filing deadlines",
      "Maintain compliance with Dutch VAT legislation",
      "Improve VAT reporting accuracy",
      "Reduce filing errors and adjustments",
      "Minimise compliance risks",
      "Maintain complete VAT records",
      "Prepare for VAT audits",
      "Improve financial transparency",
    ],
  },
  deliverablesAccent: "VAT (BTW)",
  deliverablesSubtitle:
    "BTW returns, EU VAT reporting, reconciliations, and Belastingdienst-ready packs for Dutch practices.",
  sections: [
    {
      title: "Our VAT (BTW) Compliance Services Include",
      items: [
        "VAT (BTW) Return Preparation",
        "Monthly, Quarterly & Annual VAT Filing Support",
        "VAT Account Reconciliations",
        "VAT Transaction Reviews",
        "VAT Coding Reviews",
        "Input & Output VAT Validation",
        "VAT Working Paper Preparation",
        "VAT Compliance Reviews",
        "VAT Amendment Support",
        "Supporting Documentation Preparation",
        "VAT Health Checks",
        "Period-End VAT Reviews",
      ],
    },
    {
      title: "VAT Registration & Compliance Support",
      items: [
        "VAT (BTW) Registration Support",
        "VAT Number Application Documentation",
        "VAT Deregistration Support",
        "EU VAT Registration Assistance",
        "Compliance Calendar Management",
        "VAT Filing Deadline Monitoring",
        "Regulatory Documentation Support",
        "Client Registration Documentation",
      ],
    },
    {
      title: "EU VAT & International Transaction Support",
      items: [
        "Intra-Community Supply & Acquisition Reviews",
        "Reverse Charge VAT Reviews",
        "Import & Export VAT Reviews",
        "EC Sales List (ICP) Preparation Support",
        "OSS (One Stop Shop) Reporting Support",
        "Cross-Border VAT Reviews",
        "EU Transaction Reconciliations",
        "VAT Compliance Documentation",
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
        "VAT Audit Readiness Support",
      ],
    },
  ],
  howWeHelpIntro: "Our VAT (BTW) support enables firms to:",
  howWeHelp: [
    "Increase VAT compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve VAT reporting accuracy",
    "Meet filing deadlines efficiently",
    "Manage peak filing periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [NL_ACCOUNTING, NL_VAT_SOFTWARE, NL_TAX_COLLAB],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support Dutch accounting firms, administration offices, and tax advisors serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch VAT (BTW) Expertise",
    "EU VAT Compliance Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated VAT (BTW) specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "VAT (BTW) Partner",
    titleBefore: "Your Offshore",
    titleAccent: "VAT (BTW) Delivery Partner",
    body: "VAT compliance requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate VAT compliance services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with VAT (BTW) return preparation, VAT reconciliations, EU VAT reporting, OSS reporting, EC Sales Lists (ICP), VAT registrations, compliance reviews, or dedicated offshore VAT specialists, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 7 — Year-End Accounts & Financial Statement Preparation */
export const NL_YEAR_END = {
  badge: "Year-End Accounts & Financial Statement Preparation Outsourcing Services",
  titleBefore: "Year-End Accounts &",
  titleAccent: "Financial Statement Preparation",
  subtitle:
    "Reliable Year-End Accounts & Financial Reporting Support for Dutch Accounting Firms & Administration Offices",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Year-End Accounts & Financial Reporting Support for Dutch Accounting Firms & Administration Offices",
    paragraphs: [
      "Preparing year-end accounts and financial statements requires technical expertise, accuracy, and a structured review process. Accounting firms must ensure financial statements are prepared from complete and accurate accounting records while complying with Dutch Accounting Standards (Dutch GAAP), International Financial Reporting Standards (IFRS) where applicable, the requirements of the Dutch Tax and Customs Administration (Belastingdienst), and the Dutch Chamber of Commerce (KVK) filing obligations.",
      "As your practice grows, managing year-end reporting engagements for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated offshore Year-End Accounts & Financial Statement Preparation support to Dutch accounting firms, administratiekantoren, and financial advisory firms, helping practices increase capacity, improve turnaround times, and deliver high-quality financial reporting without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statements Matter",
    intro:
      "Year-end financial statements provide business owners, investors, lenders, and regulatory authorities with a clear picture of a company's financial performance and financial position. They also form the basis for Corporate Income Tax returns, statutory filings, audits, financing applications, and strategic business decisions.",
    helpLabel: "Accurate year-end reporting helps businesses:",
    bullets: [
      "Meet statutory reporting obligations",
      "Support Corporate Income Tax compliance",
      "Improve financial transparency",
      "Prepare for statutory audits",
      "Strengthen stakeholder confidence",
      "Support financing applications",
      "Improve business decision-making",
      "Maintain accurate accounting records",
    ],
  },
  deliverablesAccent: "Year-End Accounts",
  deliverablesSubtitle:
    "Year-end accounts, financial statements, working papers, and cleanup support for Dutch practices.",
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
        "Dutch GAAP & IFRS Financial Statements",
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
    "Meet statutory reporting deadlines",
    "Manage peak reporting periods",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [NL_ACCOUNTING, NL_YEAR_END_REPORTING, NL_TAX_COLLAB],
  industries: NETHERLANDS_INDUSTRIES,
  industriesBlurb:
    "We support Dutch accounting firms and administration offices serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Dutch Financial Reporting Expertise",
    "Dutch GAAP & IFRS Knowledge",
    "White-Label Service Delivery",
    "Dedicated Offshore Resources",
    "Structured Review Processes",
    "Secure Data Handling",
    "Flexible Engagement Models",
    "Scalable Support Framework",
  ],
  whyChooseSubtitle:
    "Dedicated year-end reporting specialists who work as an extension of your Dutch practice.",
  partner: {
    badge: "Year-End Accounts Partner",
    titleBefore: "Your Offshore",
    titleAccent: "Financial Reporting Delivery Partner",
    body: "Year-end accounts preparation requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate financial statements while freeing up valuable internal resources during busy reporting periods.",
    callout:
      "Whether you require support with year-end accounts preparation, financial statement drafting, working paper preparation, reconciliations, statutory reporting, Corporate Income Tax readiness, audit support, or dedicated offshore accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};
