import { redirect } from "next/navigation";

/** Old slug URLs → dedicated service page folders */
const SLUG_REDIRECTS = {
  "uk-bookkeeping-service": "/uk/UkBookkeeping",
  "management-accounts-financial-reporting": "/uk/UkManagementAccounts",
  "vat-service-making-tax-digital-mtd": "/uk/VatServiceuk",
  "year-end-accounts-corporation-tax": "/uk/YearEndAccount",
  "payroll-cis-services": "/uk/UKPayroll",
  "personal-tax-services": "/uk/PersonalTax",
  "uk-business-advisory-virtual-cfo-services": "/uk/UKBusinessAdvisory",
  "uk-company-formation-company-secretarial-services": "/uk/UKCompanyFormation",
};

export default async function ServicePage({ params }) {
  const { serviceSlug } = await params;
  redirect(SLUG_REDIRECTS[serviceSlug] || "/uk");
}

export function generateStaticParams() {
  return Object.keys(SLUG_REDIRECTS).map((serviceSlug) => ({ serviceSlug }));
}
