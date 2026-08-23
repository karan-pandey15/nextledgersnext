import { INDUSTRIES_WE_SUPPORT_ALL } from "@/app/lib/industriesWeSupport";

const findIndustry = (label) =>
  INDUSTRIES_WE_SUPPORT_ALL.find((i) => i.label === label);

/** Default New Zealand industries mapped to existing industry icon assets */
export const NEW_ZEALAND_INDUSTRIES = [
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Real Estate"), label: "Property Investment Businesses" },
  { ...findIndustry("Hospitality"), label: "Retail & Hospitality" },
  { ...findIndustry("E-commerce"), label: "eCommerce & Online Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Practices" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing & Distribution" },
  { ...findIndustry("Technology"), label: "Technology & SaaS Companies" },
  { ...findIndustry("Consulting"), label: "Wholesale Businesses" },
  { ...findIndustry("Education"), label: "Non-Profit Organisations" },
].filter((i) => i && i.src);

const NZ_BOOKKEEPING_INDUSTRIES = NEW_ZEALAND_INDUSTRIES;

const NZ_COMPANY_TAX_INDUSTRIES = [
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Real Estate"), label: "Property Investment Companies" },
  { ...findIndustry("Agriculture"), label: "Agriculture & Farming" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Businesses" },
  { ...findIndustry("Logistics & Transportation"), label: "Wholesale & Distribution" },
  { ...findIndustry("E-commerce"), label: "Retail & eCommerce Businesses" },
  { ...findIndustry("Technology"), label: "Technology & SaaS Companies" },
].filter((i) => i && i.src);

const NZ_GST_INDUSTRIES = [
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Real Estate"), label: "Property Investment Businesses" },
  { ...findIndustry("Consulting"), label: "Retail & Wholesale Businesses" },
  { ...findIndustry("E-commerce"), label: "eCommerce & Online Retail" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing & Distribution" },
].filter((i) => i && i.src);

const NZ_INCOME_TAX_INDUSTRIES = [
  { ...findIndustry("Startups & SMEs"), label: "Small & Medium Businesses" },
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Agriculture"), label: "Agriculture & Farming" },
  { ...findIndustry("Real Estate"), label: "Property Investment" },
  { ...findIndustry("Hospitality"), label: "Retail & Hospitality" },
  { ...findIndustry("E-commerce"), label: "eCommerce Businesses" },
  { ...findIndustry("Technology"), label: "Technology Companies" },
  { ...findIndustry("Consulting"), label: "Contractors & Freelancers" },
].filter((i) => i && i.src);

const NZ_PAYROLL_INDUSTRIES = [
  {
    ...findIndustry("Professional Services"),
    label: "Accounting Firms & Bookkeeping Practices",
  },
  { ...findIndustry("Professional Services"), label: "Professional Services" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Restaurants"), label: "Retail Businesses" },
  { ...findIndustry("Hospitality"), label: "Hospitality" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing" },
  { ...findIndustry("Logistics & Transportation"), label: "Wholesale & Distribution" },
  { ...findIndustry("Real Estate"), label: "Property Management" },
  { ...findIndustry("E-commerce"), label: "E-commerce Businesses" },
  { ...findIndustry("Education"), label: "Non-Profit Organisations" },
].filter((i) => i && i.src);

const NZ_YEAR_END_INDUSTRIES = [
  { ...findIndustry("Professional Services"), label: "Professional Service Firms" },
  { ...findIndustry("Construction"), label: "Construction & Trades" },
  { ...findIndustry("Agriculture"), label: "Agriculture & Farming" },
  { ...findIndustry("Real Estate"), label: "Property Investment Companies" },
  { ...findIndustry("Consulting"), label: "Retail & Wholesale Businesses" },
  { ...findIndustry("Hospitality"), label: "Hospitality Businesses" },
  { ...findIndustry("Manufacturing"), label: "Manufacturing Companies" },
  { ...findIndustry("Technology"), label: "Technology & SaaS Businesses" },
  { ...findIndustry("Healthcare"), label: "Healthcare Providers" },
  { ...findIndustry("Education"), label: "Not-for-Profit Organisations" },
].filter((i) => i && i.src);

const NZ_ACCOUNTING = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: [
    "xero",
    "myob business",
    "quickbooks online",
    "reckon",
    "sage business cloud",
  ],
};

const NZ_ACCOUNTING_GST = {
  heading: "ACCOUNTING PLATFORMS",
  icon: "user",
  logos: [
    "xero",
    "myob business",
    "myob accountright",
    "quickbooks online",
    "reckon",
    "sage business cloud",
  ],
};

const NZ_ACCOUNTING_YEAR_END = {
  heading: "ACCOUNTING PLATFORMS",
  icon: "user",
  logos: [
    "xero",
    "myob business",
    "myob accountright",
    "quickbooks online",
    "reckon",
    "sage business cloud",
  ],
};

const NZ_ACCOUNTING_TAX = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: ["xero", "myob business", "quickbooks online", "reckon", "abss"],
};

const NZ_ACCOUNTING_INCOME = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: ["xero", "myob business", "quickbooks online", "reckon", "hnry"],
};

const NZ_ACCOUNTING_PAYROLL = {
  heading: "ACCOUNTING SOFTWARE",
  icon: "user",
  logos: ["xero", "myob business", "quickbooks online", "reckon"],
};

const NZ_RECEIPT = {
  heading: "RECEIPT & DOCUMENT MANAGEMENT",
  icon: "document",
  logos: ["hubdoc", "dext", "autoentry"],
};

const NZ_WORKFLOW = {
  heading: "WORKFLOW & PRACTICE MANAGEMENT",
  icon: "shield",
  logos: ["fyi docs", "karbon", "microsoft excel"],
};

const NZ_TAX_SOFTWARE = {
  heading: "TAX SOFTWARE",
  icon: "document",
  logos: ["myob tax", "aps tax", "cch ifirm", "xero tax", "taxlab"],
};

const NZ_TAX_DOC_WORKFLOW = {
  heading: "DOCUMENT & WORKFLOW TOOLS",
  icon: "briefcase",
  logos: ["dext", "hubdoc", "approvalmax", "fyi docs", "microsoft excel"],
};

const NZ_GST_PRACTICE = {
  heading: "GST & PRACTICE MANAGEMENT TOOLS",
  icon: "tag",
  logos: ["xero tax", "aps", "fyi docs", "suitefiles", "fuseworks"],
};

const NZ_GST_SUPPORTING = {
  heading: "SUPPORTING APPLICATIONS",
  icon: "bag",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft excel"],
};

const NZ_INCOME_TAX_SOFTWARE = {
  heading: "TAX & PRACTICE SOFTWARE",
  icon: "document",
  logos: [
    "myob ae ao tax",
    "aps tax",
    "cch ifirm",
    "xero tax",
    "taxlab",
    "accountkit",
  ],
};

const NZ_INCOME_SUPPORTING = {
  heading: "SUPPORTING TOOLS",
  icon: "shield",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft excel", "fyi docs"],
};

const NZ_PAYROLL_SOFTWARE = {
  heading: "PAYROLL SOFTWARE",
  icon: "briefcase",
  logos: [
    "smartly payroll",
    "myob payroll",
    "ipayroll",
    "payhero",
    "employment hero",
    "crystal payroll",
  ],
};

const NZ_PAYROLL_SUPPORTING = {
  heading: "SUPPORTING APPLICATIONS",
  icon: "document",
  logos: ["dext", "hubdoc", "approvalmax", "microsoft excel"],
};

const NZ_YEAR_END_REPORTING = {
  heading: "FINANCIAL REPORTING & COMPLIANCE TOOLS",
  icon: "chart",
  logos: [
    "figured",
    "spotlight reporting",
    "fathom",
    "microsoft excel",
    "approvalmax",
  ],
};

const NZ_YEAR_END_SUPPORTING = {
  heading: "SUPPORTING APPLICATIONS",
  icon: "document",
  logos: ["dext", "hubdoc", "autoentry", "sharepoint"],
};

/** 1 — Bookkeeping */
export const NZ_BOOKKEEPING = {
  badge: "New Zealand Bookkeeping Services",
  titleBefore: "New Zealand Bookkeeping",
  titleAccent: "Services",
  subtitle:
    "Reliable Bookkeeping Support for New Zealand Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Bookkeeping Support for New Zealand Accounting Firms",
    paragraphs: [
      "Bookkeeping is the foundation of accurate financial reporting and effective business management. However, as client portfolios expand, transaction volumes increase, and compliance deadlines become more demanding, many New Zealand accounting firms face growing pressure to maintain accuracy while managing capacity and profitability.",
      "Maintaining up-to-date financial records, reconciling bank accounts, processing supplier invoices, managing accounts receivable and payable, and preparing management reports requires consistency, attention to detail, and a strong understanding of New Zealand accounting practices.",
      "At NextLedgers, we provide dedicated Bookkeeping Services to New Zealand accounting firms, helping practices increase capacity, improve turnaround times, and deliver accurate bookkeeping without increasing internal overheads.",
      "Whether you require daily bookkeeping support, monthly bookkeeping, catch-up bookkeeping, bank reconciliations, accounts payable management, accounts receivable support, or dedicated bookkeeping resources, our team works as a seamless extension of your practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Professional Bookkeeping Matters",
    intro:
      "Bookkeeping is far more than recording transactions. Accurate bookkeeping ensures businesses maintain reliable financial records, meet Inland Revenue (IRD) obligations, prepare GST returns correctly, and generate meaningful financial reports that support informed business decisions.",
    helpLabel: "Effective bookkeeping helps businesses:",
    bullets: [
      "Maintain accurate financial records",
      "Keep accounts up to date throughout the year",
      "Improve cash flow visibility",
      "Prepare accurate GST returns",
      "Support year-end accounts preparation",
      "Simplify tax compliance",
      "Reduce bookkeeping errors",
      "Improve management reporting",
    ],
    outro:
      "For accounting firms, efficient bookkeeping processes improve client service, increase operational capacity, and allow senior staff to focus on advisory and higher-value accounting work.",
  },
  deliverablesAccent: "Bookkeeping",
  deliverablesSubtitle:
    "Day-to-day bookkeeping, reconciliations, AP/AR, management reporting, and catch-up support for New Zealand practices.",
  sections: [
    {
      title: "Our Bookkeeping Services Include",
      items: [
        "Daily, Weekly & Monthly Bookkeeping",
        "General Ledger Maintenance",
        "Bank & Credit Card Reconciliations",
        "Accounts Payable Processing",
        "Accounts Receivable Management",
        "Customer & Supplier Ledger Maintenance",
        "Journal Entries & Adjustments",
        "Cashbook Processing",
        "GST Coding & Transaction Reviews",
        "Management Accounts Preparation",
        "Month-End Bookkeeping Support",
        "Catch-Up & Historical Bookkeeping",
      ],
    },
    {
      title: "Daily Bookkeeping",
      items: [
        "Sales transactions",
        "Purchase transactions",
        "Expense recording",
        "Journal entries",
        "Customer receipts",
        "Supplier payments",
        "Bank transaction processing",
        "Ledger maintenance",
      ],
    },
    {
      title: "Bank & Balance Sheet Reconciliations",
      items: [
        "Bank reconciliations",
        "Credit card reconciliations",
        "Loan reconciliations",
        "Merchant account reconciliations",
        "Balance Sheet reconciliations",
        "Intercompany reconciliations",
        "Outstanding item investigations",
        "Month-end reconciliations",
      ],
    },
    {
      title: "Accounts Receivable & Accounts Payable",
      items: [
        "Customer invoice processing",
        "Payment allocation",
        "Receivable ageing reports",
        "Supplier invoice processing",
        "Payment scheduling",
        "Vendor statement reconciliations",
        "Outstanding balance monitoring",
        "AP & AR reporting",
      ],
    },
    {
      title: "Management Reporting Support",
      items: [
        "Profit & Loss reports",
        "Balance Sheets",
        "Cash Flow summaries",
        "Budget vs Actual reporting",
        "KPI reporting",
        "Revenue and expense analysis",
        "Financial performance summaries",
      ],
    },
    {
      title: "Catch-Up Bookkeeping",
      items: [
        "Updating overdue bookkeeping",
        "Reconstructing historical transactions",
        "Correcting coding errors",
        "Cleaning up general ledgers",
        "Resolving reconciliation differences",
        "Preparing books for GST and year-end reporting",
      ],
    },
  ],
  howWeHelpIntro: "Our bookkeeping support enables firms to:",
  howWeHelp: [],
  software: [NZ_ACCOUNTING, NZ_RECEIPT, NZ_WORKFLOW],
  industries: NZ_BOOKKEEPING_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across a wide range of industries, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "Experienced Bookkeeping Professionals",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Multi-Software Expertise",
    "Structured Review Processes",
    "Flexible Engagement Models",
    "Secure Data Handling",
    "Scalable Bookkeeping Support",
  ],
  whyChooseSubtitle:
    "Dedicated bookkeeping specialists who work as an extension of your New Zealand practice.",
  partner: {
    badge: "Bookkeeping Partner",
    titleBefore: "Your",
    titleAccent: "Bookkeeping Partner",
    body: "Bookkeeping requires consistency, accuracy, and efficient processes to ensure businesses maintain reliable financial records throughout the year. Our experienced professionals help New Zealand accounting firms streamline bookkeeping operations, improve reporting quality, and scale efficiently without increasing internal resource pressures.",
    callout:
      "Whether you need support with daily bookkeeping, bank reconciliations, accounts receivable, accounts payable, GST-ready bookkeeping, management reporting, catch-up bookkeeping, or dedicated bookkeeping resources, NextLedgers provides reliable support that integrates seamlessly with your accounting practice.",
  },
};

/** 2 — Company Tax Compliance */
export const NZ_COMPANY_TAX = {
  badge: "New Zealand Company Tax Compliance Services",
  titleBefore: "New Zealand Company Tax",
  titleAccent: "Compliance Services",
  subtitle:
    "Specialist Company Tax Support for New Zealand Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading: "Specialist Company Tax Support for New Zealand Accounting Firms",
    paragraphs: [
      "Company tax compliance is a core service offered by New Zealand accounting practices. However, increasing client portfolios, evolving Inland Revenue (IRD) requirements, tight filing deadlines, and ongoing resource constraints often make it difficult for firms to maintain efficiency while delivering consistently high-quality tax services.",
      "Preparing company income tax returns, calculating tax liabilities, reviewing financial statements, managing provisional tax obligations, and ensuring compliance with New Zealand tax legislation requires technical expertise, accuracy, and a structured review process.",
      "At NextLedgers, we provide dedicated New Zealand Company Tax Compliance support to accounting firms, helping practices increase capacity, improve turnaround times, and maintain compliance without increasing internal overheads.",
      "Whether your firm requires support with small businesses, SMEs, investment companies, group entities, trusts with corporate structures, or high-volume tax return preparation, our team works as a seamless extension of your practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Company Tax Compliance Matters",
    intro:
      "Company tax compliance is more than simply preparing an annual tax return. Accurate tax calculations, well-prepared working papers, and compliant filings help businesses meet their statutory obligations while supporting effective financial planning and reducing tax risks.",
    helpLabel: "Effective company tax processes help businesses:",
    bullets: [
      "Meet IRD filing requirements and deadlines",
      "Prepare accurate company income tax returns",
      "Calculate company tax liabilities correctly",
      "Manage provisional tax obligations",
      "Maximise available deductions and tax adjustments",
      "Maintain organised tax records and supporting documentation",
      "Reduce compliance risks and avoid unnecessary penalties",
    ],
    outro:
      "For accounting firms, efficient company tax processes improve profitability, increase processing capacity, and allow senior tax professionals to focus on advisory services and client relationships.",
  },
  deliverablesAccent: "Company Tax",
  deliverablesSubtitle:
    "IR4 returns, provisional tax, ICA support, tax computations, and working papers for New Zealand practices.",
  sections: [
    {
      title: "Our Company Tax Compliance Services Include",
      items: [
        "Company Income Tax Return Preparation (IR4)",
        "Provisional Tax Calculations",
        "Residual Income Tax (RIT) Calculations",
        "Tax Computation Preparation",
        "Tax Adjustment Calculations",
        "Deduction & Expense Reviews",
        "Depreciation Schedule Reviews",
        "Fixed Asset Tax Adjustments",
        "Loss Carry Forward Reviews",
        "Imputation Credit Account (ICA) Support",
        "Tax Working Papers Preparation",
        "IRD Compliance Support",
      ],
    },
    {
      title: "Company Income Tax Returns",
      items: [
        "Small Businesses",
        "Limited Liability Companies",
        "Trading Companies",
        "Professional Service Firms",
        "Investment Companies",
        "Property Investment Companies",
        "Multi-Entity Businesses",
        "Group Companies",
      ],
    },
    {
      title: "Tax Computations & Adjustments",
      items: [
        "Taxable Profit Calculations",
        "Non-Deductible Expense Adjustments",
        "Depreciation Adjustments",
        "Fixed Asset Tax Adjustments",
        "Entertainment Expense Adjustments",
        "Shareholder Current Account Reviews",
        "Timing Difference Adjustments",
        "Tax Reconciliation Schedules",
      ],
    },
    {
      title: "Provisional Tax & ICA Support",
      items: [
        "Provisional Tax Calculations",
        "Residual Income Tax (RIT) Reviews",
        "Imputation Credit Account (ICA) Reconciliations",
        "ICA Supporting Schedules",
        "Ongoing Tax Obligation Reviews",
        "Provisional Tax Planning Support",
        "Tax Payment Schedule Preparation",
        "IRD Provisional Tax Compliance Support",
      ],
    },
  ],
  howWeHelpIntro: "Our company tax support enables firms to:",
  howWeHelp: [],
  software: [NZ_TAX_SOFTWARE, NZ_ACCOUNTING_TAX, NZ_TAX_DOC_WORKFLOW],
  industries: NZ_COMPANY_TAX_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across a wide range of industries, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "New Zealand Company Tax Specialists",
    "Strong Understanding of IRD Requirements",
    "White-Label Service Delivery",
    "Dedicated Tax Resources",
    "Structured Review Processes",
    "Multi-Software Expertise",
    "Flexible Engagement Models",
    "Secure Data Handling",
  ],
  whyChooseSubtitle:
    "Dedicated company tax specialists who work as an extension of your New Zealand practice.",
  partner: {
    badge: "Company Tax Partner",
    titleBefore: "Your",
    titleAccent: "New Zealand Company Tax Compliance Partner",
    body: "Company tax compliance requires technical expertise, consistency, and careful attention to detail. Our experienced professionals help New Zealand accounting firms streamline tax preparation, strengthen quality controls, and scale efficiently without increasing internal resource pressures.",
    callout:
      "Whether you need support with IR4 company tax returns, provisional tax calculations, tax computations, imputation credit account support, tax working papers, or dedicated tax professionals, NextLedgers provides reliable support that integrates seamlessly with your accounting practice.",
  },
};

/** 3 — GST Compliance & Filing */
export const NZ_GST = {
  badge: "New Zealand GST Compliance & Filing Services",
  titleBefore: "New Zealand GST Compliance &",
  titleAccent: "Filing Services",
  subtitle: "Reliable GST Compliance Support for New Zealand Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading: "Reliable GST Compliance Support for New Zealand Accounting Firms",
    paragraphs: [
      "GST compliance is one of the most fundamental services provided by New Zealand accounting practices. However, increasing client volumes, evolving Inland Revenue (IRD) requirements, tighter filing deadlines, and ongoing resource constraints make it challenging for firms to maintain efficiency while delivering consistently high-quality compliance services.",
      "Preparing GST returns involves far more than completing a filing. It requires reviewing sales and purchase transactions, validating GST treatments, reconciling GST control accounts, identifying exceptions, and ensuring compliance with New Zealand GST legislation.",
      "At NextLedgers, we provide dedicated GST Compliance & Filing support to New Zealand accounting firms, helping practices increase capacity, improve turnaround times, and maintain compliance without increasing internal overheads.",
      "Whether your firm requires support for sole traders, partnerships, companies, trusts, charities, property investors, or high-volume GST processing, our team works as a seamless extension of your practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why GST Compliance Matters",
    intro:
      "GST compliance is much more than submitting a return to Inland Revenue. Accurate GST reporting helps businesses remain compliant, maintain reliable financial records, improve cash flow management, and reduce the risk of penalties, reassessments, and audits.",
    helpLabel: "Effective GST compliance helps businesses:",
    bullets: [
      "Meet IRD GST filing deadlines",
      "Calculate GST liabilities accurately",
      "Correctly classify taxable and exempt supplies",
      "Maintain accurate GST records",
      "Identify GST adjustments and corrections",
      "Reduce compliance risks and filing errors",
      "Improve financial reporting accuracy",
    ],
    outro:
      "For accounting firms, efficient GST compliance processes improve profitability, increase capacity during filing periods, and allow senior professionals to focus on advisory services and client relationships.",
  },
  deliverablesAccent: "GST",
  deliverablesSubtitle:
    "GST returns, reconciliations, adjustments, and IRD submission-ready filings for New Zealand practices.",
  sections: [
    {
      title: "Our GST Compliance Services Include",
      items: [
        "GST Return Preparation",
        "GST Control Account Reconciliations",
        "GST Transaction Reviews",
        "Sales & Purchase GST Verification",
        "GST Adjustment Calculations",
        "GST Error Identification & Corrections",
        "GST Working Papers Preparation",
        "GST Compliance Reviews",
        "GST Registration Support",
        "IRD Submission-Ready GST Returns",
        "GST Reconciliation Schedules",
        "GST Record Validation",
      ],
    },
    {
      title: "GST Return Preparation",
      items: [
        "Sole Traders",
        "Limited Companies",
        "Partnerships",
        "Trusts",
        "Charities & Not-for-Profit Organisations",
        "Property Investment Businesses",
        "Construction Businesses",
        "Multi-Entity Organisations",
      ],
    },
    {
      title: "GST Reviews & Reconciliations",
      items: [
        "GST Control Account Reconciliations",
        "Sales Reconciliations",
        "Purchase Reconciliations",
        "GST Exception Reviews",
        "Input Tax Verification",
        "Output Tax Verification",
        "GST Adjustment Calculations",
        "Historical GST Corrections",
      ],
    },
    {
      title: "GST Registration & Ongoing Compliance",
      items: [
        "GST Registration Support",
        "Filing Frequency Reviews",
        "GST Record Maintenance",
        "Filing Obligation Monitoring",
        "Ongoing GST Compliance Reviews",
        "IRD Alignment Support",
        "GST Deregistration Support",
        "Compliance Calendar Management",
      ],
    },
  ],
  howWeHelpIntro: "Our GST support enables firms to:",
  howWeHelp: [],
  software: [NZ_ACCOUNTING_GST, NZ_GST_PRACTICE, NZ_GST_SUPPORTING],
  industries: NZ_GST_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across a wide range of industries, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "New Zealand GST Compliance Expertise",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Multi-Software Expertise",
    "Flexible Engagement Models",
    "Secure Data Handling",
  ],
  whyChooseSubtitle:
    "Dedicated GST specialists who work as an extension of your New Zealand practice.",
  partner: {
    badge: "GST Compliance Partner",
    titleBefore: "Your",
    titleAccent: "GST Compliance Partner",
    body: "GST compliance requires technical knowledge, consistency, and attention to detail. Our experienced professionals help New Zealand accounting firms streamline GST processes, improve reporting accuracy, and scale efficiently without increasing internal resource pressures.",
    callout:
      "Whether you need support with GST return preparation, GST reconciliations, GST adjustments, IRD submission-ready returns, GST registrations, or dedicated accounting resources, NextLedgers provides reliable support that integrates seamlessly with your accounting practice.",
  },
};

/** 4 — Income Tax Return Preparation */
export const NZ_INCOME_TAX = {
  badge: "Income Tax Return Preparation Services",
  titleBefore: "New Zealand Income Tax Return",
  titleAccent: "Preparation Services",
  subtitle:
    "Specialist Income Tax Compliance Support for New Zealand Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Specialist Income Tax Compliance Support for New Zealand Accounting Firms",
    paragraphs: [
      "Income tax compliance is a core service offered by every New Zealand accounting practice. However, increasing client volumes, evolving Inland Revenue (IRD) requirements, seasonal filing deadlines, and ongoing resource constraints can place significant pressure on internal tax teams.",
      "Preparing accurate income tax returns, reviewing financial information, calculating taxable income, and ensuring compliance with New Zealand tax legislation requires technical expertise, attention to detail, and a structured review process.",
      "At NextLedgers, we provide dedicated Income Tax Return Preparation support to New Zealand accounting firms, helping practices increase capacity, improve turnaround times, and maintain compliance without increasing internal overheads.",
      "Whether your firm requires support for sole traders, partnerships, companies, trusts, rental property owners, or high-volume tax return processing, our team works as a seamless extension of your practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Income Tax Compliance Matters",
    intro:
      "Income tax preparation involves much more than completing tax returns. Every return must accurately reflect the taxpayer's financial position while complying with Inland Revenue requirements and applicable New Zealand tax legislation.",
    helpLabel: "Effective income tax compliance helps businesses and individuals:",
    bullets: [
      "Meet Inland Revenue (IRD) filing obligations and deadlines",
      "Prepare accurate income tax returns",
      "Calculate taxable income correctly",
      "Claim eligible deductions and tax adjustments",
      "Reduce compliance risks and filing errors",
      "Maintain organised financial records",
      "Support better financial and tax planning",
    ],
    outro:
      "For accounting firms, efficient income tax processes improve profitability, increase staff capacity, and allow senior professionals to focus on advisory services and client relationships.",
  },
  deliverablesAccent: "Income Tax",
  deliverablesSubtitle:
    "Individual, company, partnership, trust, and rental property tax returns for New Zealand practices.",
  sections: [
    {
      title: "Our Income Tax Return Preparation Services Include",
      items: [
        "Individual Income Tax Returns",
        "Company Income Tax Returns",
        "Partnership Income Tax Returns",
        "Trust Tax Returns",
        "Sole Trader Tax Returns",
        "Rental Property Income Reporting",
        "Investment Income Reporting",
        "Business Income Reviews",
        "Taxable Income Calculations",
        "Deduction & Adjustment Reviews",
        "IRD Compliance Support",
        "Tax Working Papers & Supporting Schedules",
      ],
    },
    {
      title: "Individual & Sole Trader Tax Returns",
      items: [
        "Salary & wage earners",
        "Sole traders",
        "Self-employed professionals",
        "Contractors & freelancers",
        "Investors",
        "Individuals with multiple income sources",
      ],
    },
    {
      title: "Company & Business Tax Returns",
      items: [
        "Company income tax returns",
        "Small business tax returns",
        "Closely held company returns",
        "Tax adjustments",
        "Business expense reviews",
        "Shareholder-related reporting support",
      ],
    },
    {
      title: "Trusts, Partnerships & Investment Income",
      items: [
        "Trust income tax returns",
        "Partnership tax returns",
        "Partnership income allocations",
        "Rental property income",
        "Investment income reporting",
        "Dividend and interest income reporting",
      ],
    },
  ],
  howWeHelpIntro: "Our income tax support enables firms to:",
  howWeHelp: [],
  software: [NZ_INCOME_TAX_SOFTWARE, NZ_ACCOUNTING_INCOME, NZ_INCOME_SUPPORTING],
  industries: NZ_INCOME_TAX_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across a wide range of industries, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "New Zealand Income Tax Expertise",
    "Experienced Tax Professionals",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Multi-Software Expertise",
    "Flexible Engagement Models",
    "Secure Data Handling",
  ],
  whyChooseSubtitle:
    "Dedicated income tax specialists who work as an extension of your New Zealand practice.",
  partner: {
    badge: "Income Tax Partner",
    titleBefore: "Your",
    titleAccent: "Income Tax Compliance Partner",
    body: "Income tax preparation requires technical expertise, accuracy, and a thorough understanding of New Zealand tax legislation. Our experienced professionals help New Zealand accounting firms increase tax preparation capacity, strengthen quality control, and manage busy filing periods efficiently.",
    callout:
      "Whether you need support with individual tax returns, company income tax returns, partnership returns, trust taxation, rental property reporting, tax computations, or dedicated tax resources, NextLedgers provides reliable support that integrates seamlessly with your accounting practice.",
  },
};

/** 5 — Payroll Processing */
export const NZ_PAYROLL = {
  badge: "Payroll Processing Services",
  titleBefore: "New Zealand Payroll",
  titleAccent: "Processing Services",
  subtitle:
    "Reliable Payroll Support for New Zealand Businesses & Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Payroll Support for New Zealand Businesses & Accounting Firms",
    paragraphs: [
      "Payroll is one of the most critical business functions, requiring employers to pay employees accurately and on time while complying with Inland Revenue (IRD) payroll legislation and New Zealand employment requirements. As businesses grow, payroll administration becomes increasingly complex, particularly when managing different pay cycles, leave entitlements, KiwiSaver contributions, PAYE deductions, student loan repayments, ACC levies, and Payday Filing obligations.",
      "At NextLedgers, we provide dedicated New Zealand Payroll Processing Services to accounting firms, bookkeepers, payroll providers, SMEs, and growing businesses, helping organisations streamline payroll operations, improve compliance, and reduce administrative workload.",
      "Whether you require weekly, fortnightly, semi-monthly, or monthly payroll processing, Payday Filing support, employee onboarding, KiwiSaver administration, or ongoing payroll management, our team works as a seamless extension of your business or accounting practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Payroll Processing Matters",
    intro:
      "Payroll is far more than calculating employee wages. Every payroll cycle requires accurate calculations, statutory deductions, timely reporting, and proper record keeping to ensure compliance with New Zealand employment and tax legislation.",
    helpLabel: "Effective payroll management helps businesses:",
    bullets: [
      "Meet IRD Payday Filing requirements",
      "Process employee wages accurately and on time",
      "Calculate PAYE and other statutory deductions correctly",
      "Manage KiwiSaver contributions",
      "Maintain compliant payroll records",
      "Reduce payroll errors and compliance risks",
      "Improve employee confidence and satisfaction",
    ],
    outro:
      "For accounting firms, outsourced payroll support increases processing capacity, improves turnaround times, and enables internal teams to focus on higher-value advisory and client relationship management.",
  },
  deliverablesAccent: "Payroll",
  deliverablesSubtitle:
    "PAYE, KiwiSaver, Payday Filing, leave management, and end-to-end payroll processing for New Zealand organisations.",
  sections: [
    {
      title: "Our New Zealand Payroll Processing Services Include",
      items: [
        "Weekly Payroll Processing",
        "Fortnightly Payroll Processing",
        "Semi-Monthly & Monthly Payroll Processing",
        "PAYE Calculations",
        "KiwiSaver Contribution Processing",
        "Payday Filing (IRD)",
        "Employee Onboarding & Offboarding",
        "Leave & Holiday Pay Calculations",
        "Payroll Adjustments & Corrections",
        "Bonus, Commission & Allowance Processing",
        "Payroll Reports & Reconciliations",
        "Payroll Compliance Support",
      ],
    },
    {
      title: "End-to-End Payroll Processing",
      items: [
        "Employee wage and salary calculations",
        "PAYE processing",
        "KiwiSaver contribution calculations",
        "Student loan deductions",
        "ACC levy processing",
        "Allowance and overtime calculations",
        "Bonus and commission payments",
        "Payroll journal preparation",
      ],
    },
    {
      title: "Employee Payroll Administration",
      items: [
        "Employee setup",
        "Payroll profile maintenance",
        "IRD employee information updates",
        "Employee pay rate amendments",
        "Termination processing",
        "Final pay calculations",
        "Payroll record management",
      ],
    },
    {
      title: "Payday Filing & IRD Compliance",
      items: [
        "Payday Filing preparation",
        "IRD payroll submissions",
        "PAYE reporting",
        "Employment information reporting",
        "Filing deadline management",
        "Payroll compliance reviews",
      ],
    },
    {
      title: "Leave & Holiday Pay Management",
      items: [
        "Annual leave calculations",
        "Sick leave tracking",
        "Public holiday payments",
        "Alternative holiday calculations",
        "Parental leave payroll support",
        "Leave balance reporting",
      ],
    },
    {
      title: "KiwiSaver Administration",
      items: [
        "KiwiSaver contribution calculations",
        "Employer contribution processing",
        "Employee deduction reviews",
        "Contribution reporting",
        "Payroll reconciliation support",
      ],
    },
    {
      title: "Payroll Reporting & Reconciliations",
      items: [
        "Payroll summaries",
        "Employee earnings reports",
        "PAYE reports",
        "KiwiSaver reports",
        "Payroll reconciliations",
        "Payroll journals",
        "Labour cost reporting",
        "Management payroll reports",
      ],
    },
  ],
  howWeHelpIntro: "Our payroll support enables organisations to:",
  howWeHelp: [
    "Increase payroll processing capacity",
    "Improve payroll accuracy",
    "Reduce compliance risks",
    "Ensure timely employee payments",
    "Improve Payday Filing compliance",
    "Reduce internal administrative workload",
    "Better utilise senior staff",
    "Scale efficiently without additional local hiring",
  ],
  software: [NZ_PAYROLL_SOFTWARE, NZ_ACCOUNTING_PAYROLL, NZ_PAYROLL_SUPPORTING],
  industries: NZ_PAYROLL_INDUSTRIES,
  industriesBlurb:
    "We provide payroll processing support across a wide range of industries, including:",
  whyChoose: [
    "Dedicated Payroll Professionals",
    "New Zealand Payroll & IRD Compliance Expertise",
    "Payday Filing Specialists",
    "White-Label Service Delivery",
    "Multi-Software Payroll Experience",
    "Secure & Confidential Data Handling",
    "Flexible Engagement Models",
    "Scalable Payroll Support",
    "Structured Payroll Review Processes",
  ],
  whyChooseSubtitle:
    "Dedicated payroll specialists who work as an extension of your New Zealand business or practice.",
  partner: {
    badge: "Payroll Partner",
    titleBefore: "Your",
    titleAccent: "New Zealand Payroll Partner",
    body: "Payroll processing requires accuracy, consistency, and a thorough understanding of New Zealand payroll legislation and IRD reporting requirements. Our experienced payroll professionals help accounting firms and businesses streamline payroll administration, strengthen compliance, and improve operational efficiency through dependable support.",
    callout:
      "Whether you require assistance with payroll processing, PAYE calculations, KiwiSaver administration, Payday Filing, leave management, payroll reconciliations, or dedicated payroll resources, NextLedgers provides scalable payroll solutions that integrate seamlessly with your business while delivering accurate, compliant, and timely payroll services.",
  },
};

/** 6 — Year-End Accounts & Financial Statements */
export const NZ_YEAR_END = {
  badge: "Year-End Accounts & Financial Statement Preparation Services",
  titleBefore: "New Zealand Year-End Accounts &",
  titleAccent: "Financial Statement Preparation",
  titleAfter: "Services",
  subtitle:
    "Reliable Year-End Compliance Support for New Zealand Accounting Firms",
  intro: {
    eyebrow: "Outsourcing Partnership",
    heading:
      "Reliable Year-End Compliance Support for New Zealand Accounting Firms",
    paragraphs: [
      "Year-end accounts and financial statement preparation are core services for every New Zealand accounting practice. However, increasing client portfolios, compressed reporting deadlines, evolving financial reporting standards, and ongoing recruitment challenges often make it difficult for firms to maintain capacity while delivering consistent quality.",
      "Preparing annual financial statements, reviewing year-end adjustments, reconciling balance sheet accounts, finalising working papers, and ensuring compliance with Inland Revenue (IRD) and the Companies Office requires technical expertise, accuracy, and a structured review process.",
      "At NextLedgers, we provide dedicated Year-End Accounts & Financial Statement Preparation Services to New Zealand accounting firms, helping practices increase capacity, improve turnaround times, and maintain high-quality financial reporting without increasing internal overheads.",
      "Whether your firm requires support for sole traders, partnerships, companies, trusts, charities, or high-volume year-end processing, our team works as a seamless extension of your practice.",
    ],
    image: "/images/DSC09901.JPG",
  },
  whyMatter: {
    title: "Why Year-End Accounts & Financial Statement Preparation Matter",
    intro:
      "Year-end financial reporting is far more than a compliance exercise. Accurate financial statements provide business owners with a clear understanding of their financial performance while supporting tax preparation, lending applications, business planning, and statutory reporting obligations.",
    helpLabel: "Effective year-end processes help businesses:",
    bullets: [
      "Meet Inland Revenue (IRD) reporting requirements",
      "Prepare accurate annual financial statements",
      "Reconcile financial records and identify adjustments",
      "Improve tax preparation readiness",
      "Strengthen internal financial controls",
      "Support lenders, investors, and other stakeholders",
      "Maintain reliable financial records for future growth",
      "Reduce compliance risks and reporting errors",
    ],
    outro:
      "For accounting firms, efficient year-end processes improve profitability, increase capacity during busy periods, and allow senior professionals to focus on advisory services and client relationships.",
  },
  deliverablesAccent: "Year-End & Financial Reporting",
  deliverablesSubtitle:
    "Annual financial statements, year-end adjustments, reconciliations, and working papers for New Zealand practices.",
  sections: [
    {
      title: "Our Year-End Accounts & Financial Statement Services Include",
      items: [
        "Annual Financial Statement Preparation",
        "Statement of Financial Position (Balance Sheet)",
        "Statement of Profit or Loss",
        "Statement of Cash Flows",
        "Statement of Changes in Equity",
        "Trial Balance Reviews",
        "Lead Schedule Preparation",
        "Year-End Working Papers",
        "Adjusting Journal Entries",
        "Accruals & Prepayments Reviews",
        "Fixed Asset & Depreciation Reviews",
        "Bank & Balance Sheet Reconciliations",
        "General Ledger Reviews",
        "Supporting Financial Schedules",
        "Accountant-Ready Financial Reports",
      ],
    },
    {
      title: "Financial Statement Preparation",
      items: [
        "Sole Traders",
        "Partnerships",
        "Limited Liability Companies",
        "Trusts",
        "Charities & Not-for-Profit Organisations",
        "Multi-Entity Businesses",
        "Investment Holding Companies",
        "Group Financial Reporting",
      ],
    },
    {
      title: "Year-End Closing & Adjustments",
      items: [
        "Accruals and Prepayments",
        "Depreciation Adjustments",
        "Fixed Asset Registers",
        "Inventory Adjustments",
        "Payroll Accruals",
        "Interest Accruals",
        "Loan Account Reconciliations",
        "Year-End Journal Entries",
      ],
    },
    {
      title: "Balance Sheet Reconciliations & Working Papers",
      items: [
        "Bank Reconciliations",
        "Accounts Receivable Reviews",
        "Accounts Payable Reviews",
        "GST Reconciliations",
        "Loan & Finance Account Reconciliations",
        "Intercompany Balances",
        "Supporting Lead Schedules",
        "Year-End Working Papers",
      ],
    },
  ],
  howWeHelpIntro: "Our year-end reporting support enables firms to:",
  howWeHelp: [],
  software: [NZ_ACCOUNTING_YEAR_END, NZ_YEAR_END_REPORTING, NZ_YEAR_END_SUPPORTING],
  industries: NZ_YEAR_END_INDUSTRIES,
  industriesBlurb:
    "We support accounting firms serving clients across a wide range of industries, including:",
  whyChoose: [
    "ACCA-Led Delivery Team",
    "New Zealand Financial Reporting Expertise",
    "Experienced Year-End Accounts Specialists",
    "White-Label Service Delivery",
    "Dedicated Resources",
    "Structured Review Processes",
    "Multi-Software Expertise",
    "Flexible Engagement Models",
    "Secure Data Handling",
  ],
  whyChooseSubtitle:
    "Dedicated year-end specialists who work as an extension of your New Zealand practice.",
  partner: {
    badge: "Year-End Accounts Partner",
    titleBefore: "Your",
    titleAccent: "Year-End Accounts Partner",
    body: "Preparing accurate year-end accounts requires technical knowledge, consistency, and meticulous attention to detail. Our experienced professionals help New Zealand accounting firms streamline financial reporting processes, strengthen quality controls, and increase capacity without adding internal resource pressures.",
    callout:
      "Whether you require support with annual financial statement preparation, year-end adjustments, balance sheet reconciliations, working papers, financial reporting, or dedicated accounting resources, NextLedgers provides reliable support that integrates seamlessly with your accounting practice.",
  },
};
