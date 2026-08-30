import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

/** Default UAE industries mapped to existing industry icon assets */
export const UAE_INDUSTRIES = [
  { ...findIndustry("Startups & SMEs"), label: "Startups" },
  { ...findIndustry("Startups & SMEs"), label: "SMEs" },
  { ...findIndustry("Technology"), label: "Technology Companies" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction Companies" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Businesses" },
  { ...findIndustry("Consulting"), label: "Trading Companies" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Real Estate"), label: "Real Estate Companies" },
].filter((i) => i && i.src);

const UAE_INDUSTRIES_SETUP = [
  { ...findIndustry("Startups & SMEs"), label: "Startups" },
  { ...findIndustry("Startups & SMEs"), label: "SMEs" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Technology"), label: "Technology Companies" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Consulting"), label: "Trading Companies" },
  { ...findIndustry("Construction"), label: "Construction Businesses" },
  { ...findIndustry("Real Estate"), label: "Real Estate Companies" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
].filter((i) => i && i.src);

const UAE_INDUSTRIES_PAYROLL = [
  { ...findIndustry("Construction"), label: "Construction Companies" },
  { ...findIndustry("Consulting"), label: "Trading Businesses" },
  { ...findIndustry("Restaurants"), label: "Retail Businesses" },
  { ...findIndustry("Hospitality"), label: "Hospitality Companies" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Businesses" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Real Estate"), label: "Real Estate Companies" },
  { ...findIndustry("Logistics & Transportation"), label: "Logistics Companies" },
  { ...findIndustry("Technology"), label: "Technology Businesses" },
].filter((i) => i && i.src);

const UAE_INDUSTRIES_VAT = [
  { ...findIndustry("Construction"), label: "Construction Companies" },
  { ...findIndustry("Consulting"), label: "Trading Businesses" },
  { ...findIndustry("Restaurants"), label: "Retail & Wholesale" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
  { ...findIndustry("Real Estate"), label: "Real Estate Businesses" },
  { ...findIndustry("Logistics & Transportation"), label: "Logistics Companies" },
].filter((i) => i && i.src);

const UAE_INDUSTRIES_BOOKKEEPING = [
  { ...findIndustry("Construction"), label: "Construction Companies" },
  { ...findIndustry("Consulting"), label: "Trading Businesses" },
  { ...findIndustry("Restaurants"), label: "Retail & Wholesale" },
  { ...findIndustry("E-commerce"), label: "E-Commerce Businesses" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
  { ...findIndustry("Real Estate"), label: "Real Estate Businesses" },
  { ...findIndustry("Logistics & Transportation"), label: "Logistics & Transportation Companies" },
].filter((i) => i && i.src);

const UAE_ACCOUNTING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "zoho books",
    "sage",
    "oracle netsuite",
    "microsoft dynamics 365 business central",
  ],
};

const UAE_ACCOUNTING_BOOKKEEPING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "quickbooks online",
    "zoho books",
    "sage",
    "tallyprime",
    "busy",
    "oracle netsuite",
    "microsoft dynamics 365 business central",
  ],
};

const UAE_DOCUMENT = {
  heading: "DOCUMENT & WORKFLOW TOOLS",
  icon: "document",
  logos: [
    "microsoft 365",
    "google workspace",
    "sharepoint",
    "dropbox business",
    "docusign",
    "adobe acrobat",
  ],
};

const UAE_PRACTICE = {
  heading: "PRACTICE MANAGEMENT & COLLABORATION TOOLS",
  icon: "briefcase",
  logos: ["clickup", "asana", "trello", "monday.com"],
};

const UAE_REPORTING = {
  heading: "REPORTING & FORECASTING TOOLS",
  icon: "chart",
  logos: [
    "microsoft excel",
    "google sheets",
    "fathom",
    "spotlight reporting",
    "syft analytics",
    "float",
  ],
};

const UAE_WORKFLOW = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "shield",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const UAE_TAX_WORKING = {
  heading: "TAX & WORKING PAPER TOOLS",
  icon: "document",
  logos: [
    "microsoft excel",
    "google sheets",
    "caseware",
    "cch engagement",
    "draftworx",
  ],
};

const UAE_DOC_MGMT = {
  heading: "WORKFLOW & DOCUMENT MANAGEMENT TOOLS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft 365", "google workspace"],
};

const UAE_PAYROLL_SW = {
  heading: "PAYROLL SOFTWARE",
  icon: "bag",
  logos: [
    "zoho payroll",
    "sage payroll",
    "bayzat",
    "greythr",
    "easyhr",
    "gulfhr",
    "sap successfactors",
    "oracle hcm",
  ],
};

const UAE_VAT_DATA = {
  heading: "VAT & DATA MANAGEMENT TOOLS",
  icon: "tag",
  logos: ["microsoft excel", "google sheets", "dext", "hubdoc", "approvalmax"],
};

const UAE_VAT_WORKFLOW = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "shield",
  logos: [
    "microsoft 365",
    "google workspace",
    "sharepoint",
    "dropbox business",
  ],
};

const UAE_YEAR_END_REPORTING = {
  heading: "FINANCIAL REPORTING & WORKING PAPER TOOLS",
  icon: "briefcase",
  logos: [
    "microsoft excel",
    "google sheets",
    "caseware",
    "cch engagement",
    "draftworx",
  ],
};

const UAE_RECEIPT = {
  heading: "RECEIPT & DOCUMENT MANAGEMENT TOOLS",
  icon: "document",
  logos: ["dext", "hubdoc", "approvalmax", "autoentry"],
};

const UAE_BOOKKEEPING_WORKFLOW = {
  heading: "WORKFLOW & COLLABORATION TOOLS",
  icon: "shield",
  logos: [
    "google workspace",
    "microsoft 365",
    "sharepoint",
    "dropbox business",
  ],
};

/** 1 — Business Setup & Compliance */
export const UAE_BUSINESS_SETUP = {
  badge: "Business Setup & Compliance Services",
  titleBefore: "Business Setup &",
  titleAccent: "Compliance Services",
  subtitle:
    "Reliable Business Setup & Compliance Support for UAE Corporate Service Providers & Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Business Setup & Compliance Support for UAE Corporate Service Providers & Accounting Firms",
    paragraphs: [
      "Setting up a business in the UAE involves much more than company registration. Businesses must choose the appropriate legal structure, prepare incorporation documents, obtain licences, maintain statutory records, meet regulatory obligations, and manage ongoing compliance requirements. As demand for company formation and corporate compliance services continues to grow, corporate service providers and accounting firms often require additional resources to manage increasing client workloads efficiently.",
      "At NextLedgers, we provide dedicated Business Setup & Compliance support to UAE corporate service providers, accounting firms, and business consultants. Our white-label outsourcing solutions help practices increase capacity, improve turnaround times, and deliver seamless company formation and compliance services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Business Setup & Compliance Matter",
    intro:
      "Successful business formation is only the beginning. Companies must continue to meet various regulatory and administrative requirements to remain compliant and operate efficiently.",
    helpLabel: "Effective business setup and compliance support helps businesses:",
    bullets: [
      "Complete company formation efficiently",
      "Maintain regulatory compliance",
      "Organise statutory records",
      "Meet ongoing filing obligations",
      "Reduce administrative workload",
      "Improve operational efficiency",
      "Minimise compliance risks",
      "Support long-term business growth",
    ],
  },
  deliverablesAccent: "Business Setup & Compliance",
  deliverablesSubtitle:
    "Company formation documentation, corporate compliance, AML/KYC, and secretarial administration support.",
  sections: [
    {
      title: "Our Business Setup Support Services Include",
      items: [
        "Company Incorporation Documentation Support",
        "Business Structure Documentation",
        "Shareholder & Director Information Compilation",
        "Incorporation Document Preparation",
        "Memorandum & Corporate Document Formatting",
        "Trade Licence Documentation Support",
        "Regulatory Form Preparation",
        "Company Formation Administration",
        "Document Review & Organisation",
        "Client Onboarding Documentation",
        "KYC Documentation Support",
        "Business Registration Coordination Support",
      ],
    },
    {
      title: "Our Corporate Compliance Services Include",
      items: [
        "Statutory Record Maintenance",
        "Compliance Calendar Management",
        "Corporate Record Updates",
        "Shareholder Register Maintenance",
        "Director Register Maintenance",
        "UBO Documentation Support",
        "Compliance Documentation Reviews",
        "Corporate File Organisation",
        "Annual Compliance Tracking",
        "Regulatory Documentation Support",
      ],
    },
    {
      title: "AML & KYC Administrative Support",
      items: [
        "Client Due Diligence Documentation",
        "KYC File Preparation",
        "AML Documentation Reviews",
        "Risk Assessment Documentation",
        "Identity Verification Administration",
        "Client File Maintenance",
        "Compliance Record Organisation",
        "Ongoing Documentation Monitoring",
      ],
    },
    {
      title: "Corporate Secretarial Administrative Support",
      items: [
        "Corporate Document Preparation",
        "Board Resolution Formatting",
        "Shareholder Resolution Preparation",
        "Meeting Minute Formatting",
        "Company Record Updates",
        "Statutory File Maintenance",
        "Corporate Document Organisation",
        "Compliance Administration Support",
      ],
    },
  ],
  howWeHelpAccent: "UAE Corporate Service Providers",
  howWeHelpIntro: "Our business setup and compliance support enables firms to:",
  howWeHelp: [
    "Increase company formation capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Deliver consistent client service",
    "Improve compliance processes",
    "Manage higher client volumes",
    "Free senior staff for advisory work",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING, UAE_DOCUMENT, UAE_PRACTICE],
  industries: UAE_INDUSTRIES_SETUP,
  industriesBlurb:
    "We support accounting firms, corporate service providers, and business consultants serving clients across various sectors, including:",
  whyChoose: [
    "UAE Business Compliance Expertise",
    "ACCA-Led Professional Team",
    "End-to-End Setup Support",
    "Accurate Documentation & Processes",
    "Proactive Compliance Management",
    "Flexible & Scalable Support",
  ],
  whyChooseSubtitle:
    "Dedicated business setup and compliance specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Business Setup Partner",
    titleBefore: "Your",
    titleAccent: "Business Setup & Compliance Delivery Partner",
    body: "Business setup and corporate compliance require organisation, accuracy, and consistent administrative support. Our dedicated professionals work as an extension of your practice, helping you manage company formation projects and ongoing compliance obligations while freeing up valuable internal resources.",
    callout:
      "Whether you require support with company incorporation documentation, corporate compliance administration, KYC processes, statutory record maintenance, or dedicated resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 2 — Virtual CFO & Advisory */
export const UAE_VIRTUAL_CFO = {
  badge: "Virtual CFO & Advisory Services",
  titleBefore: "Virtual CFO &",
  titleAccent: "Advisory Services",
  subtitle:
    "Reliable Virtual CFO & Financial Advisory Support for UAE Accounting Firms & Business Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Virtual CFO & Financial Advisory Support for UAE Accounting Firms & Business Consultants",
    paragraphs: [
      "Businesses today expect more than compliance and bookkeeping services. They look to their accountants and advisors for strategic financial guidance, cash flow management, budgeting, forecasting, profitability analysis, and actionable business insights. Delivering these high-value advisory services consistently can be challenging for accounting firms, particularly as client expectations and workloads continue to grow.",
      "At NextLedgers, we provide dedicated Virtual CFO & Financial Advisory support to UAE accounting firms, business consultants, and corporate service providers. Our white-label outsourcing solutions help practices expand their advisory offerings, increase service capacity, and deliver strategic financial insights without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Virtual CFO & Advisory Services Matter",
    intro:
      "While bookkeeping, VAT, and financial statements ensure compliance, Virtual CFO services help business owners understand their financial performance and make informed strategic decisions.",
    helpLabel: "Professional financial advisory helps businesses:",
    bullets: [
      "Improve cash flow management",
      "Increase profitability",
      "Monitor financial performance",
      "Support business growth",
      "Make informed business decisions",
      "Improve budgeting accuracy",
      "Strengthen financial controls",
      "Build investor and lender confidence",
    ],
  },
  deliverablesAccent: "Virtual CFO & Advisory",
  deliverablesSubtitle:
    "Management accounts, forecasting, performance analysis, and strategic advisory support for UAE practices.",
  sections: [
    {
      title: "Our Management Accounts Services Include",
      items: [
        "Monthly Management Accounts Preparation",
        "Profit & Loss Reporting",
        "Balance Sheet Reporting",
        "Cash Flow Reporting",
        "Budget vs Actual Analysis",
        "KPI Reporting",
        "Financial Dashboard Preparation",
        "Departmental Performance Reporting",
        "Revenue & Margin Analysis",
        "Working Capital Reporting",
        "Business Performance Reviews",
        "Management Reporting Packs",
      ],
    },
    {
      title: "Our Virtual CFO Services Include",
      items: [
        "Cash Flow Forecasting",
        "Budget Preparation Support",
        "Financial Forecasting",
        "Profitability Analysis",
        "Financial KPI Monitoring",
        "Business Performance Reviews",
        "Growth Planning Support",
        "Strategic Financial Reporting",
        "Board Reporting Support",
        "Investor Reporting Support",
        "Financial Decision-Making Support",
        "Business Advisory Assistance",
      ],
    },
    {
      title: "Budgeting & Forecasting Support",
      items: [
        "Annual Budget Preparation",
        "Revenue Forecasting",
        "Expense Forecasting",
        "Cash Flow Projections",
        "Scenario Planning Models",
        "Financial Planning Support",
        "Growth Forecasting",
        "Strategic Financial Modelling",
      ],
    },
    {
      title: "Business Performance & Advisory Support",
      items: [
        "Financial Ratio Analysis",
        "Cost Analysis",
        "Profitability Reviews",
        "Business Performance Analysis",
        "Variance Analysis",
        "Financial Health Reviews",
        "Executive Reporting Packs",
        "Strategic Performance Reporting",
      ],
    },
  ],
  howWeHelpIntro: "Our Virtual CFO support enables firms to:",
  howWeHelp: [
    "Expand advisory service offerings",
    "Increase reporting capacity",
    "Improve turnaround times",
    "Deliver higher-value client services",
    "Strengthen client relationships",
    "Reduce internal workload",
    "Improve profitability",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING, UAE_REPORTING, UAE_WORKFLOW],
  industries: UAE_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms, business consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Financial Leadership",
    "Strategic Financial Expertise",
    "Cash Flow & Profitability Focus",
    "Management-Level Reporting",
    "Flexible CFO Support",
    "Scalable Advisory Solutions",
  ],
  whyChooseSubtitle:
    "Dedicated Virtual CFO specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Virtual CFO Partner",
    titleBefore: "Your",
    titleAccent: "Virtual CFO & Advisory Delivery Partner",
    body: "Virtual CFO services require commercial understanding, analytical expertise, and consistent reporting. Our dedicated professionals work as an extension of your practice, helping you deliver valuable financial insights and strategic advisory services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with management accounts, budgeting, forecasting, cash flow analysis, board reporting, financial modelling, or dedicated advisory resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 3 — Corporation Tax */
export const UAE_CORPORATE_TAX = {
  badge: "Corporation Tax Services",
  titleBefore: "Corporation Tax",
  titleAccent: "Services",
  subtitle:
    "Reliable Corporate Tax Compliance Support for UAE Accounting Firms & Tax Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Corporate Tax Compliance Support for UAE Accounting Firms & Tax Consultants",
    paragraphs: [
      "Corporate Tax compliance has become a critical service for businesses operating in the UAE. Preparing accurate tax computations, reviewing financial statements, identifying tax adjustments, and ensuring timely compliance with the UAE Corporate Tax regime require technical expertise and meticulous attention to detail. As client demand continues to increase, accounting firms and tax consultants often face significant pressure during tax compliance periods.",
      "At NextLedgers, we provide dedicated Corporate Tax support to UAE accounting firms, tax consultants, and corporate service providers. Our white-label outsourcing solutions help practices increase capacity, improve turnaround times, and deliver reliable Corporate Tax services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Corporate Tax Compliance Matters",
    intro:
      "Corporate Tax compliance involves much more than filing a tax return. Businesses must prepare accurate tax computations, analyse financial information, review allowable deductions, calculate taxable income, maintain supporting documentation, and comply with the requirements of the UAE Corporate Tax regime.",
    helpLabel: "Effective Corporate Tax management helps businesses:",
    bullets: [
      "Meet Corporate Tax filing obligations",
      "Maintain compliance with UAE tax regulations",
      "Reduce filing errors and adjustments",
      "Improve tax reporting accuracy",
      "Minimise compliance risks",
      "Support financial transparency",
      "Strengthen client confidence",
      "Avoid unnecessary penalties",
    ],
  },
  deliverablesAccent: "Corporation Tax",
  deliverablesSubtitle:
    "Corporate tax computations, returns, reconciliations, and UAE CT compliance support.",
  sections: [
    {
      title: "Our Corporate Tax Services Include",
      items: [
        "Corporate Tax Computation Preparation",
        "Corporate Tax Return Preparation Support",
        "Taxable Income Calculations",
        "Financial Statement Reviews",
        "Tax Adjustment Calculations",
        "Capital Allowance Reviews",
        "Tax Reconciliation Preparation",
        "Tax Working Paper Preparation",
        "Deferred Tax Support",
        "Corporate Tax Compliance Reviews",
        "Supporting Documentation Preparation",
        "Year-End Tax Review Assistance",
      ],
    },
    {
      title: "Corporate Tax Registration & Compliance Support",
      items: [
        "Corporate Tax Registration Support",
        "Tax Registration Documentation",
        "Tax Compliance Reviews",
        "Filing Deadline Monitoring",
        "Regulatory Documentation Support",
        "Tax Health Check Assistance",
        "Compliance Calendar Management",
        "Client Communication Support",
      ],
    },
    {
      title: "Corporate Tax Review & Advisory Support",
      items: [
        "Tax Adjustment Reviews",
        "Deductible Expense Reviews",
        "Related Party Transaction Reviews",
        "Financial Data Analysis",
        "Tax Risk Identification",
        "Supporting Schedule Preparation",
        "Tax Query Resolution Support",
        "Compliance Documentation Reviews",
      ],
    },
  ],
  howWeHelpIntro: "Our Corporate Tax support enables firms to:",
  howWeHelp: [
    "Increase Corporate Tax compliance capacity",
    "Improve turnaround times",
    "Reduce compliance workload",
    "Improve filing accuracy",
    "Meet statutory deadlines",
    "Manage peak tax-season workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING, UAE_TAX_WORKING, UAE_DOC_MGMT],
  industries: UAE_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms, tax consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "UAE Corporate Tax Expertise",
    "ACCA-Led Tax Professionals",
    "Accurate Tax Computations",
    "Compliance-Focused Approach",
    "Proactive Tax Support",
    "Ongoing Tax Advisory",
  ],
  whyChooseSubtitle:
    "Dedicated corporate tax specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Corporation Tax Partner",
    titleBefore: "Your",
    titleAccent: "Corporate Tax Delivery Partner",
    body: "Corporate Tax compliance requires technical expertise, accuracy, and a structured review process. Our dedicated professionals work as an extension of your practice, helping you deliver reliable Corporate Tax services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with Corporate Tax computations, tax return preparation, tax reconciliations, compliance reviews, working papers, or dedicated tax resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 4 — Management Accounts & Financial Reporting */
export const UAE_MANAGEMENT_ACCOUNTS = {
  badge: "Management Accounts & Financial Reporting Services",
  titleBefore: "Management Accounts &",
  titleAccent: "Financial Reporting Services",
  subtitle:
    "Reliable Management Reporting Support for UAE Accounting Firms & Business Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Management Reporting Support for UAE Accounting Firms & Business Consultants",
    paragraphs: [
      "Modern businesses expect timely financial reports that go beyond statutory compliance. Management accounts provide business owners with valuable insights into profitability, cash flow, operational performance, and financial health, enabling them to make informed strategic decisions. As client expectations continue to grow, accounting firms increasingly require additional resources to deliver accurate and timely management reporting.",
      "At NextLedgers, we provide dedicated Management Accounts & Financial Reporting support to UAE accounting firms, business consultants, and corporate service providers. Our white-label outsourcing solutions help practices expand their advisory capabilities, improve reporting efficiency, and deliver high-quality financial reports without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Management Accounts & Financial Reporting Matter",
    intro:
      "Unlike year-end financial statements, management accounts provide regular financial insights that help businesses monitor performance, identify trends, manage cash flow, and make proactive business decisions throughout the year.",
    helpLabel: "Effective management reporting helps businesses:",
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
  deliverablesAccent: "Management Accounts",
  deliverablesSubtitle:
    "Monthly packs, financial reporting, forecasting, and performance analysis for UAE practices.",
  sections: [
    {
      title: "Our Management Accounts Services Include",
      items: [
        "Monthly Management Accounts Preparation",
        "Profit & Loss Statement Preparation",
        "Balance Sheet Reporting",
        "Cash Flow Reporting",
        "Budget vs Actual Analysis",
        "Revenue & Margin Analysis",
        "Departmental Performance Reporting",
        "KPI Reporting",
        "Financial Dashboard Preparation",
        "Working Capital Reporting",
        "Variance Analysis",
        "Management Commentary Preparation",
      ],
    },
    {
      title: "Our Financial Reporting Services Include",
      items: [
        "Monthly Financial Reporting Packs",
        "Quarterly Financial Reports",
        "Year-to-Date Performance Reports",
        "Executive Summary Reports",
        "Business Performance Dashboards",
        "Financial Trend Analysis",
        "Cost Analysis Reports",
        "Profitability Reporting",
        "Board Reporting Packs",
        "Investor Reporting Support",
      ],
    },
    {
      title: "Budgeting & Forecasting Support",
      items: [
        "Annual Budget Preparation",
        "Revenue Forecasting",
        "Expense Forecasting",
        "Cash Flow Forecasting",
        "Scenario Planning",
        "Financial Modelling Support",
        "Growth Forecasting",
        "Strategic Financial Planning Support",
      ],
    },
    {
      title: "Performance Analysis & Advisory Support",
      items: [
        "Financial Ratio Analysis",
        "Business Performance Reviews",
        "Variance Analysis",
        "Cost Control Reporting",
        "Profitability Analysis",
        "Cash Flow Analysis",
        "Financial KPI Monitoring",
        "Executive Reporting Support",
      ],
    },
  ],
  howWeHelpIntro:
    "Our Management Accounts & Financial Reporting support enables firms to:",
  howWeHelp: [
    "Increase reporting capacity",
    "Improve turnaround times",
    "Deliver higher-value advisory services",
    "Strengthen client relationships",
    "Improve reporting consistency",
    "Reduce internal workload",
    "Increase operational efficiency",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING, UAE_REPORTING, UAE_WORKFLOW],
  industries: UAE_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms, business consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Financial Expertise",
    "Accurate Management Reporting",
    "Tailored Financial Insights",
    "Structured Review Processes",
    "Timely Monthly Reporting",
    "Decision-Ready Financial Information",
  ],
  whyChooseSubtitle:
    "Dedicated management reporting specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Management Reporting Partner",
    titleBefore: "Your",
    titleAccent: "Management Reporting Delivery Partner",
    body: "Management reporting requires accuracy, commercial understanding, and consistent delivery. Our dedicated professionals work as an extension of your practice, helping you deliver timely financial insights and high-quality management reports while freeing up valuable internal resources.",
    callout:
      "Whether you require support with monthly management accounts, financial reporting packs, budgeting, forecasting, KPI reporting, board reporting, or dedicated accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and client satisfaction.",
  },
};

/** 5 — Payroll & WPS */
export const UAE_PAYROLL = {
  badge: "Payroll & WPS Services",
  titleBefore: "Payroll & WPS",
  titleAccent: "Services",
  subtitle:
    "Reliable Payroll & WPS Support for UAE Accounting Firms & Business Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Payroll & WPS Support for UAE Accounting Firms & Business Consultants",
    paragraphs: [
      "Payroll processing and Wage Protection System (WPS) compliance require accuracy, consistency, and a thorough understanding of UAE labour regulations. Even minor payroll errors can result in employee dissatisfaction, compliance issues, delayed salary payments, and increased administrative workload for accounting firms and business consultants.",
      "As your practice grows, managing payroll processing, employee records, salary calculations, WPS files, and statutory reporting for multiple clients can become increasingly time-consuming. At NextLedgers, we provide dedicated Payroll & WPS support to UAE accounting firms, payroll providers, and corporate service firms, helping practices increase capacity, improve efficiency, and deliver reliable payroll services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Payroll & WPS Matter",
    intro:
      "Payroll involves much more than processing employee salaries. Businesses must accurately calculate wages, overtime, allowances, deductions, gratuity provisions, leave balances, and statutory benefits while ensuring salaries are processed in accordance with UAE labour requirements. The Wage Protection System (WPS) adds further compliance responsibilities by requiring businesses to prepare and submit salary information accurately and on time.",
    helpLabel: "Effective payroll management helps businesses:",
    bullets: [
      "Pay employees accurately and on time",
      "Maintain WPS compliance",
      "Reduce payroll errors and adjustments",
      "Maintain accurate employee records",
      "Improve payroll reporting",
      "Reduce administrative burden",
      "Improve operational efficiency",
      "Enhance employee confidence",
    ],
  },
  deliverablesAccent: "Payroll & WPS",
  deliverablesSubtitle:
    "Payroll processing, WPS compliance, administration, and payroll reporting for UAE practices.",
  sections: [
    {
      title: "Our Payroll Processing Services Include",
      items: [
        "Monthly Payroll Processing",
        "Employee Payroll Maintenance",
        "New Employee Setup",
        "Employee Exit & Final Settlement Support",
        "Salary, Allowance & Deduction Calculations",
        "Overtime Calculations",
        "Bonus & Incentive Processing",
        "Leave Salary Calculations",
        "Gratuity Calculation Support",
        "Payslip Preparation",
        "Payroll Reconciliations",
        "Payroll Reporting Support",
      ],
    },
    {
      title: "Our WPS Compliance Services Include",
      items: [
        "WPS File Preparation Support",
        "Salary Information Reviews",
        "Payroll Data Validation",
        "Employee Record Reviews",
        "Payroll Compliance Checks",
        "WPS Reconciliation Support",
        "Payroll Documentation Preparation",
        "Payroll Audit Readiness Support",
        "Compliance Documentation Reviews",
        "Payroll Process Monitoring",
      ],
    },
    {
      title: "Payroll Administration Support",
      items: [
        "Employee Master Data Maintenance",
        "Payroll Amendments & Adjustments",
        "Payroll Query Support",
        "Payroll Record Reviews",
        "Payroll Working Paper Preparation",
        "Payroll Data Validation",
        "Employee Benefits Administration Support",
        "Payroll Process Reviews",
      ],
    },
    {
      title: "Payroll Reporting & Reconciliation Support",
      items: [
        "Payroll Control Account Reconciliations",
        "Payroll Journal Preparation",
        "Payroll Cost Analysis",
        "Departmental Payroll Reporting",
        "Employee Cost Reporting",
        "Payroll Data Reviews",
        "Management Payroll Reports",
        "Financial Reporting Integration",
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
  software: [UAE_PAYROLL_SW, UAE_ACCOUNTING, UAE_DOC_MGMT],
  industries: UAE_INDUSTRIES_PAYROLL,
  industriesBlurb:
    "We support accounting firms, payroll providers, and business consultants serving clients across various sectors, including:",
  whyChoose: [
    "UAE Payroll Expertise",
    "WPS Compliance Knowledge",
    "Accurate Salary Processing",
    "Secure Payroll Handling",
    "Timely Payroll Support",
    "Scalable Payroll Solutions",
  ],
  whyChooseSubtitle:
    "Dedicated payroll specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Payroll & WPS Partner",
    titleBefore: "Your",
    titleAccent: "Payroll & WPS Delivery Partner",
    body: "Payroll processing requires precision, confidentiality, and consistent compliance. Our dedicated professionals work as an extension of your practice, helping you deliver reliable payroll and WPS services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with payroll processing, WPS file preparation, payroll reconciliations, employee record maintenance, gratuity calculations, payroll reporting, or dedicated payroll resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 6 — VAT Advisory & Compliance */
export const UAE_VAT = {
  badge: "VAT Advisory & Compliance Services",
  titleBefore: "VAT Advisory &",
  titleAccent: "Compliance Services",
  subtitle:
    "Reliable VAT Advisory & Compliance Support for UAE Accounting Firms & Tax Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable VAT Advisory & Compliance Support for UAE Accounting Firms & Tax Consultants",
    paragraphs: [
      "VAT compliance requires technical expertise, accuracy, and a thorough understanding of UAE VAT regulations. Businesses rely on accounting firms and tax consultants not only for VAT return preparation but also for transaction reviews, VAT advisory, reconciliations, registration support, and ongoing compliance guidance. As client portfolios continue to grow, managing VAT engagements efficiently can become increasingly resource-intensive.",
      "At NextLedgers, we provide dedicated VAT Advisory & Compliance support to UAE accounting firms, tax consultants, and corporate service providers. Our white-label outsourcing solutions help practices increase capacity, improve turnaround times, and deliver reliable VAT services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why VAT Advisory & Compliance Matter",
    intro:
      "VAT compliance involves much more than preparing and filing VAT returns. Businesses must correctly classify transactions, determine the appropriate VAT treatment, reconcile VAT balances, maintain supporting documentation, and comply with the regulations issued by the Federal Tax Authority (FTA).",
    helpLabel: "Professional VAT management helps businesses:",
    bullets: [
      "Meet VAT filing obligations",
      "Maintain compliance with UAE VAT regulations",
      "Reduce VAT errors and adjustments",
      "Improve reporting accuracy",
      "Minimise compliance risks",
      "Support audit readiness",
      "Maintain accurate VAT records",
      "Strengthen client confidence",
    ],
  },
  deliverablesAccent: "VAT Advisory & Compliance",
  deliverablesSubtitle:
    "VAT returns, advisory, reconciliations, and FTA compliance support for UAE practices.",
  sections: [
    {
      title: "Our VAT Compliance Services Include",
      items: [
        "VAT Return Preparation Support",
        "VAT Filing Support",
        "VAT Reconciliations",
        "Input VAT Reviews",
        "Output VAT Reviews",
        "VAT Transaction Reviews",
        "VAT Coding Reviews",
        "VAT Working Paper Preparation",
        "VAT Compliance Documentation",
        "VAT Health Check Support",
        "VAT Registration Support",
        "VAT Deregistration Assistance",
      ],
    },
    {
      title: "Our VAT Advisory Services Include",
      items: [
        "VAT Treatment Reviews",
        "Transaction Analysis",
        "Cross-Border VAT Reviews",
        "Zero-Rated & Exempt Supply Reviews",
        "Import & Export VAT Reviews",
        "VAT Risk Assessments",
        "VAT Compliance Reviews",
        "Client Query Support",
      ],
    },
    {
      title: "VAT Audit & Compliance Support",
      items: [
        "VAT Audit Readiness Support",
        "Supporting Documentation Preparation",
        "VAT Reconciliation Reviews",
        "Historical VAT Reviews",
        "VAT Error Identification",
        "Compliance Health Checks",
        "Working Paper Preparation",
        "VAT Record Organisation",
      ],
    },
  ],
  howWeHelpIntro: "Our VAT support enables firms to:",
  howWeHelp: [
    "Increase VAT compliance capacity",
    "Improve turnaround times",
    "Reduce administrative workload",
    "Improve filing accuracy",
    "Meet VAT deadlines efficiently",
    "Manage peak compliance workloads",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING, UAE_VAT_DATA, UAE_VAT_WORKFLOW],
  industries: UAE_INDUSTRIES_VAT,
  industriesBlurb:
    "We support accounting firms, tax consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "UAE VAT Expertise",
    "ACCA-Led Advisory Team",
    "Practical VAT Guidance",
    "Accurate VAT Reviews",
    "Compliance & Deadline Support",
    "Ongoing VAT Advisory",
  ],
  whyChooseSubtitle:
    "Dedicated VAT specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "VAT Partner",
    titleBefore: "Your",
    titleAccent: "VAT Advisory & Compliance Delivery Partner",
    body: "VAT compliance requires technical expertise, attention to detail, and consistent review processes. Our dedicated professionals work as an extension of your practice, helping you deliver reliable VAT advisory and compliance services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with VAT return preparation, reconciliations, VAT advisory, registrations, audit support, compliance reviews, or dedicated VAT resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 7 — Year-End Accounts & Financial Statement Preparation */
export const UAE_YEAR_END = {
  badge: "Year-End Accounts & Financial Statement Preparation Services",
  titleBefore: "Year-End Accounts & Financial Statement",
  titleAccent: "Preparation Services",
  subtitle:
    "Reliable Year-End Accounts & Financial Reporting Support for UAE Accounting Firms & Business Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Year-End Accounts & Financial Reporting Support for UAE Accounting Firms & Business Consultants",
    paragraphs: [
      "Preparing year-end accounts and financial statements requires technical expertise, accuracy, and a structured review process. Accounting firms and business consultants must ensure financial statements are prepared from complete and accurate accounting records while meeting reporting requirements, tax compliance obligations, audit requirements, and client deadlines.",
      "As your practice grows, managing year-end reporting engagements for multiple clients can become increasingly resource-intensive. At NextLedgers, we provide dedicated Year-End Accounts & Financial Statement Preparation support to UAE accounting firms, tax consultants, and corporate service providers, helping practices increase capacity, improve turnaround times, and deliver high-quality financial reporting without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statements Matter",
    intro:
      "Year-end financial statements provide business owners, investors, lenders, and other stakeholders with a clear understanding of a company's financial performance and financial position. They also form the foundation for Corporate Tax compliance, external audits, financing applications, and strategic business decisions.",
    helpLabel: "Accurate year-end reporting helps businesses:",
    bullets: [
      "Meet statutory reporting obligations",
      "Support Corporate Tax compliance",
      "Improve financial transparency",
      "Prepare for external audits",
      "Strengthen stakeholder confidence",
      "Support financing applications",
      "Improve financial decision-making",
      "Maintain accurate accounting records",
    ],
  },
  deliverablesAccent: "Year-End Accounts",
  deliverablesSubtitle:
    "Year-end accounts, financial statements, audit working papers, and cleanup support for UAE practices.",
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
        "Cash Flow Statement Preparation",
        "Statement of Changes in Equity Preparation",
        "Financial Statement Notes & Disclosures",
        "Supporting Schedule Preparation",
        "Financial Statement Formatting",
        "Management & Statutory Reporting Packs",
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
        "Audit Query Support Assistance",
        "Year-End Reporting Packs",
      ],
    },
    {
      title: "Financial Cleanup Before Year-End Reporting",
      items: [
        "Historical Account Reviews",
        "Ledger Corrections",
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
  software: [UAE_ACCOUNTING, UAE_YEAR_END_REPORTING, UAE_DOC_MGMT],
  industries: UAE_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms, tax consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "ACCA-Led Accounts Team",
    "UAE Accounting Expertise",
    "Structured Year-End Processes",
    "Detailed Review Procedures",
    "Accurate Financial Statements",
    "End-to-End Year-End Support",
  ],
  whyChooseSubtitle:
    "Dedicated year-end reporting specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Financial Reporting Partner",
    titleBefore: "Your",
    titleAccent: "Financial Reporting Delivery Partner",
    body: "Year-end accounts preparation requires technical expertise, consistency, and meticulous attention to detail. Our dedicated professionals work as an extension of your practice, helping you deliver accurate financial statements while freeing up valuable internal resources during busy reporting periods.",
    callout:
      "Whether you require support with year-end accounts preparation, financial statement drafting, working paper preparation, reconciliations, audit support, Corporate Tax readiness, or dedicated accounting resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};

/** 8 — Bookkeeping & VAT */
export const UAE_BOOKKEEPING = {
  badge: "Bookkeeping & VAT Services",
  titleBefore: "Bookkeeping & VAT",
  titleAccent: "Services",
  subtitle:
    "Reliable Bookkeeping & VAT Support for UAE Accounting Firms & Tax Consultants",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping & VAT Support for UAE Accounting Firms & Tax Consultants",
    paragraphs: [
      "Bookkeeping and VAT compliance are fundamental to maintaining accurate financial records and meeting the regulatory requirements of businesses operating in the UAE. As transaction volumes grow and VAT regulations continue to evolve, accounting firms and tax consultants often face increasing pressure to deliver timely bookkeeping, accurate VAT reporting, and consistent client service.",
      "Managing multiple client accounts, reconciling transactions, preparing VAT returns, and ensuring compliance can quickly become resource-intensive. At NextLedgers, we provide dedicated Bookkeeping & VAT support to UAE accounting firms, tax consultants, and corporate service providers, helping practices increase capacity, improve turnaround times, and deliver reliable accounting services without increasing internal staffing costs.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Bookkeeping & VAT Matter",
    intro:
      "Accurate bookkeeping is the foundation of reliable financial reporting, VAT compliance, and informed business decisions. Incorrect transaction recording, unreconciled accounts, or inaccurate VAT treatment can result in reporting errors, compliance risks, penalties, and additional work for accounting firms.",
    helpLabel: "Effective bookkeeping and VAT management help businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Meet UAE VAT compliance requirements",
      "Improve financial reporting accuracy",
      "Reduce VAT errors and adjustments",
      "Support audit readiness",
      "Improve cash flow visibility",
      "Reduce administrative workload",
      "Strengthen client confidence",
    ],
  },
  deliverablesAccent: "Bookkeeping & VAT",
  deliverablesSubtitle:
    "Day-to-day bookkeeping, VAT compliance, and catch-up cleanup support for UAE practices.",
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
      title: "Our VAT Compliance Services Include",
      items: [
        "VAT Return Preparation Support",
        "VAT Filing Support",
        "VAT Reconciliations",
        "Input VAT Reviews",
        "Output VAT Reviews",
        "VAT Transaction Reviews",
        "VAT Coding Reviews",
        "VAT Working Paper Preparation",
        "VAT Compliance Documentation",
        "VAT Health Check Support",
        "VAT Registration Support",
        "VAT Deregistration Assistance",
      ],
    },
    {
      title: "Financial Cleanup & Catch-Up Bookkeeping",
      items: [
        "Historical Bookkeeping Reconstruction",
        "Accounting Backlog Processing",
        "Bank Reconciliation Cleanup",
        "General Ledger Cleanup",
        "Suspense Account Clearance",
        "Duplicate Transaction Reviews",
        "Historical Account Reconciliations",
        "Financial Data Corrections",
      ],
    },
  ],
  howWeHelpIntro: "Our bookkeeping and VAT support enables firms to:",
  howWeHelp: [
    "Increase bookkeeping capacity",
    "Improve VAT compliance efficiency",
    "Reduce administrative workload",
    "Improve reporting accuracy",
    "Meet VAT filing deadlines",
    "Manage peak workloads efficiently",
    "Improve client service delivery",
    "Scale operations without increasing headcount",
  ],
  software: [UAE_ACCOUNTING_BOOKKEEPING, UAE_RECEIPT, UAE_BOOKKEEPING_WORKFLOW],
  industries: UAE_INDUSTRIES_BOOKKEEPING,
  industriesBlurb:
    "We support accounting firms, tax consultants, and corporate service providers serving clients across various sectors, including:",
  whyChoose: [
    "UAE Bookkeeping Expertise",
    "VAT Compliance Knowledge",
    "ACCA-Led Accounting Team",
    "Accurate Records & Reconciliations",
    "Timely VAT Support",
    "Flexible Bookkeeping Solutions",
  ],
  whyChooseSubtitle:
    "Dedicated bookkeeping and VAT specialists who work as an extension of your UAE practice.",
  partner: {
    badge: "Bookkeeping & VAT Partner",
    titleBefore: "Your",
    titleAccent: "Bookkeeping & VAT Delivery Partner",
    body: "Bookkeeping and VAT compliance require accuracy, consistency, and a thorough understanding of UAE regulations. Our dedicated professionals work as an extension of your practice, helping you deliver reliable bookkeeping and VAT services while freeing up valuable internal resources.",
    callout:
      "Whether you require support with day-to-day bookkeeping, VAT return preparation, reconciliations, backlog cleanup, management reporting, or dedicated bookkeeping resources, NextLedgers can help your practice scale efficiently while maintaining quality and compliance.",
  },
};
