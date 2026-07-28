/**
 * Canonical Ireland service pages — display order matches site navigation.
 * Includes VAT & Year-End pages that were missing from the nav.
 * href must match the folder name under src/app/ireland/
 */
export const IRELAND_SERVICE_LINKS = [
  {
    label: "Company Secretarial & CRO Services",
    href: "/ireland/IeCompanySecretarial",
    icon: "🏢",
    blurb: "Annual returns, statutory registers & CRO filings",
  },
  {
    label: "Bookkeeping Services",
    href: "/ireland/IeBookkeeping",
    icon: "📒",
    blurb: "Day-to-day bookkeeping, reconciliations & catch-up support",
  },
  {
    label: "Management Accounting & Virtual CFO Services",
    href: "/ireland/IeManagementAccounts",
    icon: "📊",
    blurb: "Monthly packs, forecasting, KPIs & virtual CFO support",
  },
  {
    label: "VAT Compliance Services",
    href: "/ireland/IeVat",
    icon: "🧾",
    blurb: "VAT returns, reconciliations & Revenue compliance support",
  },
  {
    label: "Corporation Tax Services",
    href: "/ireland/IeCorporateTax",
    icon: "📋",
    blurb: "Company tax returns, computations & Revenue compliance",
  },
  {
    label: "Personal Tax Services",
    href: "/ireland/IePersonalTax",
    icon: "📋",
    blurb: "Form 11/12, CGT, rental income & tax planning support",
  },
  {
    label: "Year-End Accounts & Financial Statement Preparation Services",
    href: "/ireland/IeYearEndAccount",
    icon: "📑",
    blurb: "Year-end accounts, financial statements & audit working papers",
  },
];
