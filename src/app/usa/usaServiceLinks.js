import {
  BookOpen,
  Building2,
  FileSpreadsheet,
  FileText,
  LineChart,
  Percent,
  RefreshCw,
  Wallet,
} from "lucide-react";

/**
 * Canonical USA service pages — display order matches site navigation.
 * href must match the folder name under src/app/usa/
 */
export const USA_SERVICE_LINKS = [
  {
    label: "Bookkeeping & Outsourced Accounting Services",
    href: "/usa/UsaBookkeeping",
    icon: BookOpen,
    blurb: "Day-to-day bookkeeping, reconciliations & outsourced accounting",
  },
  {
    label: "Accounting Cleanup, Catch-Up Bookkeeping & Accounts Payable/Receivable (AP/AR) Services",
    href: "/usa/UsaAccountingCleanup",
    icon: RefreshCw,
    blurb: "Catch-up books, cleanups & accounts receivable/payable support",
  },
  {
    label: "Payroll Processing & Payroll Tax Services",
    href: "/usa/UsaPayroll",
    icon: Wallet,
    blurb: "Payroll runs, payroll tax filings & employee support",
  },
  {
    label: "Management Accounting & Virtual CFO Services",
    href: "/usa/UsaManagementAccounting",
    icon: LineChart,
    blurb: "Management packs, forecasting & virtual CFO support",
  },
  {
    label: "Sales Tax Compliance & Filing Services",
    href: "/usa/UsaSalesTax",
    icon: Percent,
    blurb: "Sales tax returns, nexus tracking & multi-state filings",
  },
  {
    label: "Corporate Tax Preparation & Compliance Services",
    href: "/usa/UsaCorporateTax",
    icon: Building2,
    blurb: "Corporate tax returns, filings & ongoing compliance support",
  },
  {
    label: "Individual Tax Preparation Services",
    href: "/usa/UsaIndividualTax",
    icon: FileText,
    blurb: "Form 1040 preparation, entrepreneurs & personal tax support",
  },
  {
    label: "Year-End Accounts & Financial Statement Preparation Services",
    href: "/usa/UsaYearEndAccounts",
    icon: FileSpreadsheet,
    blurb: "Year-end accounts, financial statements & closing support",
  },
];
