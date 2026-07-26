"use client";

import { useParams } from "next/navigation";
import UAEServiceTemplate from "../UAEServiceTemplate";
import RegionalServiceComingSoon from "@/app/components/RegionalNavbar/RegionalServiceComingSoon";
import { UAE_SERVICE_LINKS } from "../uaeServiceLinks";
import {
  UAE_BOOKKEEPING,
  UAE_BUSINESS_SETUP,
  UAE_CORPORATE_TAX,
  UAE_MANAGEMENT_ACCOUNTS,
  UAE_PAYROLL,
  UAE_VAT,
  UAE_VIRTUAL_CFO,
  UAE_YEAR_END,
} from "../uaePageContent";

/** Maps URL slug → page content so UAE services never fall through to Coming Soon. */
const UAE_SERVICE_PAGES = {
  UaeBusinessSetup: UAE_BUSINESS_SETUP,
  UaeVirtualCfo: UAE_VIRTUAL_CFO,
  UaeCorporateTax: UAE_CORPORATE_TAX,
  UaeManagementAccounts: UAE_MANAGEMENT_ACCOUNTS,
  UaePayroll: UAE_PAYROLL,
  UaeVat: UAE_VAT,
  UaeYearEndAccount: UAE_YEAR_END,
  UaeBookkeeping: UAE_BOOKKEEPING,
};

export default function UaeServiceSlugPage() {
  const params = useParams();
  const slug = String(params?.serviceSlug || "");
  const data = UAE_SERVICE_PAGES[slug];

  if (data) {
    return <UAEServiceTemplate data={data} />;
  }

  const match = UAE_SERVICE_LINKS.find((s) => s.href === `/uae/${slug}`);

  return (
    <RegionalServiceComingSoon
      homePath="/uae"
      servicesLabel="Services in UAE"
      serviceLinks={UAE_SERVICE_LINKS}
      flagCode="ae"
      backLabel="Back To UAE"
      regionName="UAE"
      footerRegion="uae"
      serviceLabel={match?.label}
    />
  );
}
