/**
 * Canonical New Zealand service pages — display order matches site navigation.
 * Includes Bookkeeping, GST & Company Tax that were pending in the nav.
 * href must match the folder name under src/app/new-zealand/
 */
export const NEW_ZEALAND_SERVICE_LINKS = [
  {
    label: "GST Compliance & Filing Services",
    href: "/new-zealand/NzGst",
    icon: "🧾",
    blurb: "GST returns, reconciliations, registrations & IRD compliance",
  },
  {
    label: "Bookkeeping Services",
    href: "/new-zealand/NzBookkeeping",
    icon: "📒",
    blurb: "Day-to-day bookkeeping, reconciliations & catch-up support",
  },
  {
    label: "Payroll Processing Services",
    href: "/new-zealand/NzPayroll",
    icon: "💰",
    blurb: "PAYE, KiwiSaver, Payday Filing & leave management",
  },
  {
    label: "Income Tax Return Preparation Services",
    href: "/new-zealand/NzIncomeTax",
    icon: "📄",
    blurb: "Individual, company, trust & partnership tax returns",
  },
  {
    label: "Company Tax Compliance Services",
    href: "/new-zealand/NzCompanyTax",
    icon: "📋",
    blurb: "Company tax returns, computations & IRD compliance",
  },
  {
    label: "Year-End Accounts & Financial Statement Preparation Services",
    href: "/new-zealand/NzYearEndAccount",
    icon: "📑",
    blurb: "Annual financial statements, adjustments & working papers",
  },
];
