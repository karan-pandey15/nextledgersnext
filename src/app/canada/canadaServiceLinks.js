import {
  BookOpen,
  Building2,
  ClipboardCheck,
  FileSpreadsheet,
  FileText,
  LineChart,
  Percent,
  Wallet,
} from "lucide-react";

/**
 * Canonical Canada service pages — display order matches site navigation.
 * href must match the folder name under src/app/canada/
 */
export const CANADA_SERVICE_LINKS = [
  {
    label: "Bookkeeping, Accounting & Financial Cleanup Services",
    href: "/canada/CanadaBookkeeping",
    icon: BookOpen,
    blurb: "Day-to-day bookkeeping, outsourced accounting & financial cleanup support",
  },
  {
    label: "Payroll Processing Services",
    href: "/canada/CanadaPayroll",
    icon: Wallet,
    blurb: "CRA payroll processing, remittances & multi-province payroll",
  },
  {
    label: "Management Accounting, Virtual CFO & Investment Accounting Services",
    href: "/canada/CanadaManagementAccounting",
    icon: LineChart,
    blurb: "Management packs, virtual CFO support & investment reporting",
  },
  {
    label: "GST/HST Compliance & CRA Support Services",
    href: "/canada/CanadaGstHst",
    icon: Percent,
    blurb: "GST/HST returns, ITC reviews & multi-province CRA compliance",
  },
  {
    label: "Corporate Tax Filing Services",
    href: "/canada/CanadaCorporateTax",
    icon: Building2,
    blurb: "T2 corporate tax returns, CRA compliance & tax working papers",
  },
  {
    label: "Personal Tax Filing & Tax Preparation Services",
    href: "/canada/CanadaPersonalTax",
    icon: FileText,
    blurb: "T1 preparation, self-employed tax & deduction optimisation",
  },
  {
    label: "Review Engagement, Compliance & Assurance Services",
    href: "/canada/CanadaReviewEngagement",
    icon: ClipboardCheck,
    blurb: "Review engagement files, analytical procedures & assurance support",
  },
  {
    label: "Year-End Accounts & Financial Statement Preparation Services",
    href: "/canada/CanadaYearEndAccounts",
    icon: FileSpreadsheet,
    blurb: "Year-end close, financial statements & CRA-ready reporting",
  },
];
